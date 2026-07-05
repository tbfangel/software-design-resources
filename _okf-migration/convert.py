#!/usr/bin/env python3
"""Convert the overview+cluster knowledge base into an OKF v0.1 bundle.

Idempotent-ish: regenerates all cards/indexes each run. Does NOT delete the old
overview.md / <cluster>.md files (that is phase 5). Writes a report to report.md.

Run from repo root:  python3 _okf-migration/convert.py
"""
import os, re, sys, json, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MIGRATION = datetime.date(2026, 7, 5).isoformat()

SITES = {
    "verraes.net":            "Mathias Verraes",
    "dannorth.net":           "Dan North",
    "architecture-weekly.com":"Oskar Dudycz / Architecture Weekly",
    "lucumr.pocoo.org":       "Armin Ronacher",
}

TYPE_MAP = {"article": "article", "presentation": "presentation", "podcast": "podcast"}

report = {"bare_no_url": [], "stacked": [], "missing_type": [], "missing_date": [],
          "missing_summary": [], "missing_takeaways": [], "collisions": [],
          "extras": [], "counts": {}}

# ---------- helpers ----------
def slugify(s):
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return re.sub(r"-+", "-", s).strip("-") or "untitled"

def url_last_segment(url):
    if not url: return None
    parts = [p for p in re.sub(r"^https?://", "", url).split("/") if p]
    # drop domain (first part)
    parts = parts[1:] if len(parts) > 1 else parts
    return slugify(parts[-1]) if parts else None

def url_month(url):
    """Return zero-padded month if the URL path encodes /YYYY/M(M)/..."""
    if not url: return None
    parts = [p for p in re.sub(r"^https?://", "", url).split("/") if p][1:]
    if len(parts) >= 2 and re.fullmatch(r"\d{4}", parts[0]) and re.fullmatch(r"\d{1,2}", parts[1]):
        return f"{int(parts[1]):02d}"
    return None

def first_sentence(text):
    text = text.strip()
    if not text: return ""
    m = re.search(r"(.+?[.!?])(\s|$)", text, re.S)
    s = (m.group(1) if m else text).strip()
    return re.sub(r"\s+", " ", s)

def yq(s):
    """YAML double-quoted scalar."""
    return '"' + str(s).replace("\\", "\\\\").replace('"', '\\"') + '"'

def yaml_list(items):
    return "[" + ", ".join(yq(i) for i in items) + "]"

def rewrite_links(md):
    md = re.sub(r"\]\(overview\.md\)", "](index.md)", md)
    # cluster-file link -> synthesis card
    md = re.sub(r"\]\((?!https?://)([a-z0-9-]+)\.md\)", r"](_synthesis-\1.md)", md)
    return md

# ---------- entry parsing ----------
HEAD_RE = re.compile(r"^### (?:\[(?P<t1>.+?)\]\((?P<url>[^)]+)\)|(?P<t2>.+))\s*$")
META_RE = re.compile(r"^\*\*(?P<k>[A-Za-z0-9/ -]+):\*\*\s*(?P<v>.*)$")

BARE_URL_RE = re.compile(r"^\s*<?(https?://\S+?)>?\s*$")

def parse_entry(block, site, cluster):
    """block = list of lines for one entry (heading group + body).

    Handles three metadata layouts:
      A) ### [Title](URL)  then **Type:**/**Date:**/**Tags:** ...
      B) ### Title         then **Type:** ... (no URL anywhere)
      C) ### Title         then a raw URL on its own line, blank, then **Type:** ...
    """
    heads = []
    i = 0
    while i < len(block):
        m = HEAD_RE.match(block[i])
        if m:
            title = (m.group("t1") or m.group("t2") or "").strip()
            url = m.group("url")
            heads.append([title, url])
            i += 1
        else:
            break
    # optional standalone URL line(s) before the metadata (layout C)
    entry_url = None
    while i < len(block):
        if not block[i].strip():
            i += 1; continue
        bm = BARE_URL_RE.match(block[i])
        if bm and not META_RE.match(block[i]):
            entry_url = bm.group(1); i += 1; continue
        break
    if entry_url:
        for h in heads:
            if not h[1]: h[1] = entry_url
    # single tolerant pass: metadata lines, summary lines, key takeaways
    meta, extras = {}, {}
    summary_lines, takeaways, in_take = [], [], False
    for line in block[i:]:
        if re.match(r"^\*\*Key takeaways:\*\*", line):
            in_take = True; continue
        if line.strip() == "---" or not line.strip():
            continue
        if in_take:
            m = re.match(r"^[-*]\s+(.*)$", line)
            if m: takeaways.append(m.group(1).strip())
            continue
        m = META_RE.match(line)
        if m:
            k, v = m.group("k").strip().lower(), m.group("v").strip()
            if k in ("type", "date"): meta[k] = v
            elif k in ("tags", "tags/topics"): meta["tags"] = v
            else: extras[k] = v
        else:
            summary_lines.append(line.strip())
    summary = " ".join(summary_lines).strip()
    return [tuple(h) for h in heads], meta, extras, summary, takeaways

def split_entries(body_lines):
    entries, cur = [], []
    for line in body_lines:
        if HEAD_RE.match(line):
            # a heading either starts a new entry, or is stacked with the previous
            # heading(s) if cur so far contains ONLY heading lines
            if cur and not all(HEAD_RE.match(x) for x in cur):
                entries.append(cur); cur = [line]
            else:
                cur.append(line)
        else:
            if cur: cur.append(line)
    if cur: entries.append(cur)
    return entries

# ---------- pass 1: parse everything ----------
records = []   # dict per card
clusters = {}  # (site, cluster) -> {synthesis..., cards:[]}

for site in SITES:
    for f in sorted((ROOT / site).glob("*.md")):
        if f.name in ("overview.md", "index.md") or f.name.startswith("_synthesis"):
            continue
        cluster = f.stem
        text = f.read_text(encoding="utf-8")
        lines = text.splitlines()
        # cluster H1 + synthesis (intro through Key Insights, up to first ###)
        h1 = next((l[2:].strip() for l in lines if l.startswith("# ")), cluster)
        first_head = next((idx for idx, l in enumerate(lines) if HEAD_RE.match(l)), len(lines))
        synth_body = "\n".join(lines[:first_head]).strip()
        intro_para = ""
        for l in lines[:first_head]:
            if l.strip() and not l.startswith("#") and not l.startswith(">"):
                intro_para = l.strip(); break
        clusters[(site, cluster)] = {"h1": h1, "synth_body": synth_body,
                                     "intro": intro_para, "cards": []}
        for block in split_entries(lines[first_head:]):
            heads, meta, extras, summary, takeaways = parse_entry(block, site, cluster)
            if not heads:
                continue
            if len(heads) > 1:
                report["stacked"].append(f"{site}/{cluster}: " +
                                         " + ".join(t for t, _ in heads))
            if not meta.get("type"): report["missing_type"].append(f"{site}/{cluster}: {heads[0][0]}")
            if not meta.get("date"): report["missing_date"].append(f"{site}/{cluster}: {heads[0][0]}")
            if not summary: report["missing_summary"].append(f"{site}/{cluster}: {heads[0][0]}")
            if not takeaways: report["missing_takeaways"].append(f"{site}/{cluster}: {heads[0][0]}")
            if extras: report["extras"].append(f"{site}/{cluster}: {heads[0][0]} -> {list(extras)}")
            group_ids = []
            for (title, url) in heads:
                records.append({"site": site, "cluster": cluster, "title": title,
                                "url": url, "type": meta.get("type", ""),
                                "date": meta.get("date", ""), "tags_raw": meta.get("tags", ""),
                                "summary": summary, "takeaways": takeaways,
                                "extras": extras, "group": group_ids})
                if not url: report["bare_no_url"].append(f"{site}/{cluster}: {title}")

# ---------- assign filenames ----------
used = {}  # site -> set(filenames)
for r in records:
    site = r["site"]
    used.setdefault(site, set())
    date = r["date"].strip()
    m = re.fullmatch(r"(\d{4})-(\d{2})", date)
    if m:
        prefix = f"{m.group(1)}-{m.group(2)}"
    elif re.fullmatch(r"\d{4}", date):
        mo = url_month(r["url"])
        prefix = f"{date}-{mo}" if mo else date
    else:
        mo = url_month(r["url"])
        prefix = mo and re.match(r"\d{4}", date) and f"{date[:4]}-{mo}" or (date[:4] if re.match(r"\d{4}", date) else "undated")
    slug = url_last_segment(r["url"]) or slugify(r["title"])
    base = f"{prefix}-{slug}"
    name = base + ".md"
    n = 2
    while name in used[site]:
        name = f"{base}-{n}.md"; n += 1
        report["collisions"].append(f"{site}/{name}")
    used[site].add(name)
    r["filename"] = name
    r["prefix"] = prefix
    clusters[(site, r["cluster"])]["cards"].append(r)
    r["group"].append(name)

# ---------- pass 2: write cards ----------
def type_of(r):
    t = r["type"].strip().lower()
    return TYPE_MAP.get(t, t or "note")

def tags_of(r):
    tags = [r["cluster"]]
    for t in re.split(r"[;,]", r["tags_raw"]):
        t = slugify(t)
        if t and t not in tags: tags.append(t)
    return tags

def card_body(r):
    title, url = r["title"], r["url"]
    desc = first_sentence(r["summary"]) or title
    fm = ["---",
          f"type: {type_of(r)}",
          f"title: {yq(title)}",
          f"description: {yq(desc)}"]
    if url: fm.append(f"resource: {url}")
    fm.append(f"tags: {yaml_list(tags_of(r))}")
    if r["prefix"] and re.match(r"\d{4}", r["prefix"]): fm.append(f"published: {r['prefix']}")
    for k, v in r["extras"].items():
        fm.append(f"{slugify(k).replace('-', '_')}: {yq(v)}")
    fm.append(f"timestamp: {MIGRATION}")
    fm.append("---\n")
    out = "\n".join(fm)
    out += f"# {title}\n\n> {desc}\n\n"
    if r["takeaways"]:
        out += "## Key Facts\n" + "\n".join(f"- {t}" for t in r["takeaways"]) + "\n\n"
    if r["summary"]:
        out += "## Summary\n" + r["summary"] + "\n\n"
    out += "## Links\n"
    if url: out += f"- [Source]({url}) — original post\n"
    else:   out += "- _Source URL not yet recovered (see migration report)._\n"
    out += "\n"
    # Related: synthesis + up to 3 cluster siblings + stacked partners
    rel = [f"- [Cluster synthesis](/{r['site']}/_synthesis-{r['cluster']}.md)"]
    partners = [g for g in r["group"] if g != r["filename"]]
    for g in partners:
        rel.append(f"- [Companion post](/{r['site']}/{g})")
    siblings = [c for c in clusters[(r['site'], r['cluster'])]["cards"]
                if c["filename"] != r["filename"] and c["filename"] not in partners][:3]
    for c in siblings:
        rel.append(f"- [{c['title']}](/{r['site']}/{c['filename']})")
    out += "## Related\n" + "\n".join(rel) + "\n"
    return out

for r in records:
    (ROOT / r["site"] / r["filename"]).write_text(card_body(r), encoding="utf-8")

# ---------- synthesis cards ----------
for (site, cluster), c in clusters.items():
    desc = first_sentence(c["intro"]) or f"Synthesis of the {c['h1']} cluster."
    body = c["synth_body"]
    # strip the leading H1 and the "Part of ..." blockquote; keep from "## Key Insights"
    ki = body.find("## Key Insights")
    insights = body[ki:] if ki != -1 else body
    insights = rewrite_links(insights)
    fm = ["---", "type: synthesis", f"title: {yq(c['h1'])}",
          f"description: {yq(desc)}", f"tags: {yaml_list([cluster])}",
          f"timestamp: {MIGRATION}", "---\n"]
    out = "\n".join(fm) + f"# {c['h1']}\n\n> {desc}\n\n"
    out += insights.strip() + "\n\n"
    out += "## Related\n"
    for card in c["cards"]:
        out += f"- [{card['title']}](/{site}/{card['filename']})\n"
    (ROOT / site / f"_synthesis-{cluster}.md").write_text(out, encoding="utf-8")

# ---------- site index.md ----------
for site, name in SITES.items():
    ov = (ROOT / site / "overview.md")
    header = ov.read_text(encoding="utf-8") if ov.exists() else f"# {name}\n"
    header = rewrite_links(header)
    # group cards by cluster
    listing = ["\n---\n\n## Posts\n"]
    by_cluster = {}
    for r in records:
        if r["site"] == site:
            by_cluster.setdefault(r["cluster"], []).append(r)
    for cluster in sorted(by_cluster):
        listing.append(f"\n### {cluster}  ·  [synthesis](_synthesis-{cluster}.md)\n")
        for r in sorted(by_cluster[cluster], key=lambda x: x["filename"]):
            listing.append(f"- [{r['title']}]({r['filename']})")
    (ROOT / site / "index.md").write_text(header.rstrip() + "\n" + "\n".join(listing) + "\n",
                                          encoding="utf-8")
    report["counts"][site] = sum(1 for r in records if r["site"] == site)

# ---------- root index.md ----------
root = ['---', 'okf_version: "0.1"', 'title: "Software Design Resources"', '---\n',
        "# Software Design Resources\n",
        "> An OKF knowledge base of software-design writing by practitioners — one concept card per post.\n",
        "## Sections\n"]
for site, name in SITES.items():
    n = report["counts"].get(site, 0)
    root.append(f"- [{name}](/{site}/index.md) — {n} cards")
(ROOT / "index.md").write_text("\n".join(root) + "\n", encoding="utf-8")

# ---------- report ----------
rep = ["# OKF Migration Report", f"\nGenerated: {MIGRATION}",
       f"\nTotal cards written: **{len(records)}**  (expected ~397)",
       "\n## Cards per site"]
for s, n in report["counts"].items(): rep.append(f"- {s}: {n}")
def section(title, items):
    rep.append(f"\n## {title} ({len(items)})")
    rep.extend(f"- {x}" for x in items[:200])
section("Posts missing source URL (need recovery)", report["bare_no_url"])
section("Stacked headings (shared metadata block)", report["stacked"])
section("Missing Type", report["missing_type"])
section("Missing Date", report["missing_date"])
section("Missing summary paragraph", report["missing_summary"])
section("Missing Key takeaways", report["missing_takeaways"])
section("Non-standard **Field:** lines", report["extras"])
section("Filename collisions (suffixed)", report["collisions"])
(MIGRATION_DIR := ROOT / "_okf-migration").mkdir(exist_ok=True)
(MIGRATION_DIR / "report.md").write_text("\n".join(rep) + "\n", encoding="utf-8")

print(f"Wrote {len(records)} cards across {len(SITES)} sites.")
print(f"Bare (no URL): {len(report['bare_no_url'])}, stacked: {len(report['stacked'])}, "
      f"collisions: {len(report['collisions'])}")
print("Report: _okf-migration/report.md")
