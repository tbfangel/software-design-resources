#!/usr/bin/env python3
"""Build a single self-contained HTML viewer for this OKF bundle.

Walks the bundle, extracts one record per card, and inlines the data + the
viewer frontend (viewer/app.css, viewer/app.js into viewer/index.template.html)
into dist/index.html — no external/CDN dependencies, works offline.

    python3 scripts/build_viewer.py        # -> dist/index.html

Stdlib only; mirrors scripts/validate_okf.py's regex frontmatter parsing.
"""
import re, json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VIEWER = ROOT / "viewer"
OUT = ROOT / "dist" / "index.html"

CARD_RE = re.compile(r"^\d{4}(-\d{2})?-.+\.md$")
LINK_RE = re.compile(r"\]\(([^)]+)\)")

def sites():
    return [d.name for d in sorted(ROOT.iterdir())
            if d.is_dir() and (d / "index.md").exists()
            and d.name not in (".git", ".github", "scripts", ".claude", "docs")]

def fm_and_body(text):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    return (m.group(1), m.group(2)) if m else (None, text)

def fm_get(fm, key):
    m = re.search(rf"^{key}:\s*(.*)$", fm, re.M)
    return m.group(1).strip() if m else None

def yaml_scalar(v):
    v = (v or "").strip()
    if len(v) >= 2 and v[0] == '"' and v[-1] == '"':
        return v[1:-1].replace('\\"', '"').replace('\\\\', '\\')
    return v

def tag_list(fm):
    raw = fm_get(fm, "tags") or ""
    return re.findall(r'"([^"]+)"', raw)

def type_base(t):
    """Normalise a freeform type to its base: 'presentation (video)' -> 'presentation'."""
    return (t or "").split("(")[0].strip().lower() or "unknown"

def is_card(name):   return name != "index.md" and not name.startswith("_synthesis-") and CARD_RE.match(name)
def is_synth(name):  return name.startswith("_synthesis-")

def build():
    nodes, edges = [], []
    ids = set()

    for site in sites():
        sdir = ROOT / site
        for p in sorted(sdir.glob("*.md")):
            if p.name == "index.md":
                continue
            concept = is_card(p.name)
            synth = is_synth(p.name)
            if not (concept or synth):
                continue
            fm, body = fm_and_body(p.read_text())
            if fm is None:
                continue
            cid = f"{site}/{p.name[:-3]}"
            ids.add(cid)
            raw_type = fm_get(fm, "type") or ""
            published = fm_get(fm, "published")
            year = int(published[:4]) if published and published[:4].isdigit() else None
            nodes.append({
                "id": cid,
                "site": site,
                "file": p.name,
                "kind": "synthesis" if synth else "concept",
                "type": raw_type,
                "typeBase": "synthesis" if synth else type_base(raw_type),
                "title": yaml_scalar(fm_get(fm, "title")) or cid,
                "description": yaml_scalar(fm_get(fm, "description")) or "",
                "resource": fm_get(fm, "resource") or "",
                "cluster": fm_get(fm, "cluster") or "",
                "tags": tag_list(fm),
                "year": year,
                "body": body.strip(),
            })

    # internal-link edges (source cites target) for backlinks
    body_by_id = {n["id"]: n["body"] for n in nodes}
    for n in nodes:
        seen = set()
        for tgt in LINK_RE.findall(n["body"]):
            t = tgt.split("#")[0].strip()
            if not t.endswith(".md"):
                continue
            tid = t.lstrip("/")[:-3]
            if tid in ids and tid != n["id"] and tid not in seen:
                seen.add(tid)
                edges.append({"source": n["id"], "target": tid})

    facets = {
        "sites": sorted({n["site"] for n in nodes}),
        "clusters": sorted(({"slug": c, "site": s} for c, s in
                            {(n["cluster"], n["site"]) for n in nodes if n["cluster"]}),
                           key=lambda x: (x["site"], x["slug"])),
        "types": sorted({n["typeBase"] for n in nodes}),
        "years": sorted({n["year"] for n in nodes if n["year"]}),
    }
    data = {"name": "Software Design Resources", "nodes": nodes, "edges": edges, "facets": facets}

    html = (VIEWER / "index.template.html").read_text()
    html = html.replace("/*__APP_CSS__*/", (VIEWER / "app.css").read_text())
    html = html.replace("/*__APP_JS__*/", (VIEWER / "app.js").read_text())
    html = html.replace("__BUNDLE_DATA__", json.dumps(data, ensure_ascii=False))
    html = html.replace("__BUNDLE_NAME__", json.dumps(data["name"]))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(html)
    concepts = sum(1 for n in nodes if n["kind"] == "concept")
    synths = sum(1 for n in nodes if n["kind"] == "synthesis")
    kb = len(html.encode()) / 1024
    print(f"{concepts} concept + {synths} synthesis cards, {len(edges)} links -> {OUT.relative_to(ROOT)} ({kb:.0f} KB)")

if __name__ == "__main__":
    build()
