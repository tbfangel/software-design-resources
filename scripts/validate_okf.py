#!/usr/bin/env python3
"""Validate this OKF (Open Knowledge Format) bundle.

Run locally or in CI:  python3 scripts/validate_okf.py
Exits non-zero if any invariant is violated. See CLAUDE.md for the card schema.

Invariants enforced
--------------------
Structure
  - exactly one bundle-root index.md, and it is the only file declaring `okf_version`
  - every site folder has an index.md
Concept cards (`<site>/YYYY-MM-*.md`)
  - non-empty `type`; a `resource:` that is an http(s) URL
  - `title`, `description`, non-empty `tags`, `published`
  - the `> ` lead line matches `description`
Synthesis cards (`<site>/_synthesis-<slug>.md`)
  - `type: synthesis`
Links
  - every internal .md link resolves (placeholders containing `<` are ignored)
Card <-> index 1:1 correspondence
  - every concept card in a site is linked exactly once from that site's index.md
  - every card link in a site index.md resolves to an existing card
  - the bundle-root index.md links every site index.md
Card <-> synthesis correspondence
  - each card's cluster (tags[0]) has a matching `_synthesis-<cluster>.md`
  - each card is linked from that synthesis card's body
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITES = [d.name for d in sorted(ROOT.iterdir())
         if d.is_dir() and (d / "index.md").exists() and d.name not in (".git", ".github", "scripts", ".claude")]

errors = []
def err(msg): errors.append(msg)

CARD_RE = re.compile(r"^\d{4}(-\d{2})?-.+\.md$")   # YYYY- or YYYY-MM- prefixed card
LINK_RE = re.compile(r"\]\(([^)]+)\)")

def fm_and_body(text):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    return (m.group(1), m.group(2)) if m else (None, text)

def fm_get(fm, key):
    m = re.search(rf"^{key}:\s*(.*)$", fm, re.M)
    return m.group(1).strip() if m else None

def yaml_scalar(v):
    """Decode a YAML double-quoted scalar to its plain string value."""
    v = v.strip()
    if len(v) >= 2 and v[0] == '"' and v[-1] == '"':
        return v[1:-1].replace('\\"', '"').replace('\\\\', '\\')
    return v

def is_card(p):   return p.name != "index.md" and not p.name.startswith("_synthesis-") and CARD_RE.match(p.name)
def is_synth(p):  return p.name.startswith("_synthesis-")

def card_links_in(index_path):
    """card filenames linked from an index/synthesis file (relative links to YYYY-*.md)."""
    out = []
    for tgt in LINK_RE.findall(index_path.read_text()):
        t = tgt.split("#")[0].lstrip("/")
        name = t.split("/")[-1]
        if CARD_RE.match(name):
            out.append(name)
    return out

# ---- structure: okf_version ----
root_index = ROOT / "index.md"
if not root_index.exists():
    err("missing bundle-root index.md")
okf_decls = []
for p in ROOT.rglob("*.md"):
    if any(part in (".git",) for part in p.parts): continue
    fm, _ = fm_and_body(p.read_text())
    if fm and re.search(r"^okf_version:", fm, re.M):
        okf_decls.append(p)
if okf_decls != [root_index]:
    err(f"okf_version must be declared only in root index.md; found in {[str(p.relative_to(ROOT)) for p in okf_decls]}")

# ---- per-site validation ----
all_cards = []
for site in SITES:
    sdir = ROOT / site
    site_index = sdir / "index.md"
    cards = sorted(p for p in sdir.glob("*.md") if is_card(p))
    all_cards += cards

    # concept card frontmatter
    for c in cards:
        fm, body = fm_and_body(c.read_text())
        rel = c.relative_to(ROOT)
        if fm is None: err(f"{rel}: no YAML frontmatter"); continue
        t = fm_get(fm, "type")
        if not t: err(f"{rel}: missing/empty `type`")
        res = fm_get(fm, "resource")
        if not res: err(f"{rel}: missing `resource`")
        elif not res.startswith("http"): err(f"{rel}: `resource` is not a URL: {res}")
        for k in ("title", "description", "published"):
            if not fm_get(fm, k): err(f"{rel}: missing `{k}`")
        tags = fm_get(fm, "tags")
        if not tags or tags.strip() in ("[]", ""): err(f"{rel}: missing/empty `tags`")
        desc = fm_get(fm, "description")
        lead = re.search(r"^\s*>\s*(.+?)\s*$", body, re.M)
        if desc and lead:
            if yaml_scalar(desc) != lead.group(1).strip():
                err(f"{rel}: `> ` lead line does not match `description`")
        elif desc and not lead:
            err(f"{rel}: missing `> ` lead line")

    # synthesis cards
    for s in sdir.glob("_synthesis-*.md"):
        fm, _ = fm_and_body(s.read_text())
        if fm_get(fm, "type") != "synthesis":
            err(f"{s.relative_to(ROOT)}: synthesis card must have `type: synthesis`")

    # 1:1 correspondence card <-> site index
    linked = card_links_in(site_index)
    dupes = {n for n in linked if linked.count(n) > 1}
    for n in sorted(dupes): err(f"{site}/index.md: card linked more than once: {n}")
    linkset, cardset = set(linked), {c.name for c in cards}
    for missing in sorted(cardset - linkset): err(f"{site}/index.md: card not listed in index: {missing}")
    for dangling in sorted(linkset - cardset): err(f"{site}/index.md: index links non-existent card: {dangling}")

    # card <-> synthesis correspondence
    for c in cards:
        fm, _ = fm_and_body(c.read_text())
        tags = fm_get(fm, "tags") or ""
        m = re.search(r'"([^"]+)"', tags)
        cluster = m.group(1) if m else None
        if not cluster: continue
        synth = sdir / f"_synthesis-{cluster}.md"
        if not synth.exists():
            err(f"{c.relative_to(ROOT)}: no synthesis card for cluster '{cluster}' ({synth.name})")
        elif c.name not in card_links_in(synth):
            err(f"{synth.relative_to(ROOT)}: does not link its member card {c.name}")

# ---- root index links every site ----
root_links = {t.split('#')[0].lstrip('/') for t in LINK_RE.findall(root_index.read_text())}
for site in SITES:
    if f"{site}/index.md" not in root_links:
        err(f"index.md (root): does not link site index {site}/index.md")

# ---- all internal links resolve ----
for f in ROOT.rglob("*.md"):
    if ".git" in f.parts: continue
    for tgt in LINK_RE.findall(f.read_text()):
        if tgt.startswith(("http", "#", "mailto:")) or "<" in tgt: continue
        path = tgt.split("#")[0]
        if not path.endswith(".md"): continue
        dest = (ROOT / path.lstrip("/")) if path.startswith("/") else (f.parent / path)
        if not dest.exists():
            err(f"{f.relative_to(ROOT)}: broken link -> {tgt}")

print(f"OKF bundle: {len(SITES)} sites, {len(all_cards)} concept cards.")
if errors:
    print(f"FAILED with {len(errors)} error(s):")
    for e in errors: print("  -", e)
    sys.exit(1)
print("OK — all invariants satisfied.")
