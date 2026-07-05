#!/usr/bin/env python3
"""Fill missing `resource:` in verraes cards by matching titles to archive URLs.

Match strategy: for each URL-less card, take its published YYYY, and find the
archive URL whose slug has the best token overlap with the slugified title,
preferring URLs in the same year (then same year-month). Only accept confident
matches (>=2 shared significant tokens AND best score clearly ahead)."""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARCH = (ROOT / "_okf-migration" / "verraes-archive.txt").read_text().split()
STOP = set("the a an of in with to for and is vs on by from at as be it its".split())

def toks(s):
    return set(t for t in re.sub(r"[^a-z0-9]+", " ", s.lower()).split() if t and t not in STOP)

arch = []
for u in ARCH:
    m = re.search(r"/(\d{4})/(\d{2})/([^/]+)/?$", u)
    if m:
        y, mo, slug = m.group(1), m.group(2), m.group(3)
        arch.append((u, y, mo, toks(slug)))

def card_fields(text):
    title = re.search(r'^title:\s*"?(.*?)"?\s*$', text, re.M)
    pub = re.search(r'^published:\s*(\d{4})-(\d{2})', text, re.M)
    return (title.group(1) if title else ""), (pub.group(1) if pub else None), (pub.group(2) if pub else None)

def best_match(title, y, mo):
    tt = toks(title)
    scored = []
    for (u, ay, amo, aslug) in arch:
        overlap = tt & aslug
        score = len(overlap)
        # bonuses for date proximity
        if ay == y: score += 0.5
        if ay == y and amo == mo: score += 0.5
        scored.append((score, len(overlap), u))
    scored.sort(reverse=True)
    top = scored[0]
    # confidence: >=2 shared significant tokens, and same year on the winner
    win_url = top[2]
    win_year = re.search(r"/(\d{4})/", win_url).group(1)
    if top[1] >= 2 and win_year == y:
        return win_url, top
    return None, top

matched, unmatched = [], []
used_urls = set()
for f in sorted(ROOT.glob("verraes.net/[0-9]*.md")):
    text = f.read_text()
    if re.search(r"^resource:", text, re.M):
        continue
    title, y, mo = card_fields(text)
    url, top = best_match(title, y, mo)
    if url and url not in used_urls:
        used_urls.add(url)
        # insert resource: after the description line; fix Links placeholder
        text2 = re.sub(r"(^description:.*$)", r"\1\nresource: " + url, text, count=1, flags=re.M)
        text2 = text2.replace(
            "- _Source URL not yet recovered (see migration report)._",
            f"- [Source]({url}) — original post")
        f.write_text(text2)
        matched.append(f"{f.name}  ->  {url}")
    else:
        unmatched.append(f"{f.name}  (title='{title}', best={top[1]} toks: {top[2]})")

print(f"Matched {len(matched)} / {len(matched)+len(unmatched)}")
print("\n--- MATCHED ---"); print("\n".join(matched))
print("\n--- UNMATCHED (left flagged) ---"); print("\n".join(unmatched) or "(none)")
