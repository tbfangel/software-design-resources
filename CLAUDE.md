# CLAUDE.md

This repository is a personal knowledge base on software design, maintained by Thomas Fangel.
It is an **[Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf)
(OKF) v0.1 bundle**: a tree of small Markdown **concept cards**, one per blog post, plus reserved
`index.md` navigation files. Each card is a digest — what the post argues, its key facts, and a link
to the source — not a copy of the original.

## Structure

```
software-design-resources/          <- OKF bundle root
├── index.md                        # reserved: declares okf_version "0.1"; lists the site sections
├── README.md                       # human-facing entry point
├── CLAUDE.md                       # this file — entry point + schema for Claude
├── SOURCES.md                      # /sync config: tracked sources
└── <site>/                         # one folder per author/site (e.g. verraes.net)
    ├── index.md                    # reserved: site intro + listing of the site's cards by cluster-tag
    ├── _synthesis-<cluster>.md     # one synthesis card per cluster (type: synthesis) — cross-post "Key Insights"
    └── YYYY-MM-<slug>.md           # one concept card per post (chronological lex-sort)
```

The old `overview.md` + `<cluster>.md` layout has been fully migrated to this format.

## Concept card schema (house style — authoritative over generic OKF guidance)

```markdown
---
type: article            # REQUIRED. The post medium: article | presentation | podcast (or synthesis for cluster cards)
title: "Post Title"
description: "One-sentence summary (mirrors the > lead line)."
resource: https://…      # canonical URL of the source post
tags: ["<cluster-slug>", "topic-1", "topic-2"]   # cluster-slug FIRST, then topic tags
published: YYYY-MM        # original publication (month precision)
timestamp: YYYY-MM-DD     # last meaningful change to the card
---

# Post Title

> One-sentence summary (same text as description).

## Key Facts
- 2–5 bullets in your own words (from the post's key takeaways)

## Summary
One paragraph on the post's argument and conclusions.

## Links
- [Source](https://…) — original post

## Related
- [Cluster synthesis](/<site>/_synthesis-<cluster>.md)
- a few sibling cards in the same cluster
```

Rules:
- **`type` is the only required field** and must be non-empty. Preserve any extra frontmatter keys
  (e.g. `co_author`) — OKF consumers must tolerate unknown keys.
- **The cluster lives on as `tags[0]`** (a slug) and as one `_synthesis-<cluster>.md` card, not as a folder.
- **Concept ID** = path minus `.md` (e.g. `verraes.net/2023-05-eventsourcing-testing-patterns`).
- **Relationships are Markdown links**; prefer absolute (`/site/file.md`).
- **Reserved files**: only `index.md` (navigation; no `type`) and, if present, `log.md`. The bundle-root
  `index.md` is the sole place `okf_version` is declared.
- Cards are **digests, never verbatim copies** of the source.

## Your role

Help Thomas extend and maintain this bundle. The `okf` skill (`knowledge:okf`) encodes the read/write
workflow — use it. For queries use `/ask`; to pull in new posts use `/sync`; to onboard a new site use
the `web-resource-crawler` agent. All three now read and write OKF cards.

When doing large work, plan first, delegate bulk reading/writing to parallel sub-agents (one per logical
unit), and keep scratch state in temp files that you delete when done.

## Available agents

| Agent | Trigger |
|---|---|
| `web-resource-crawler` | User says "crawl the blogs/articles at &lt;site&gt; and summarize them" |

## Validation (run after any change)

`scripts/validate_okf.py` enforces the bundle invariants; CI runs it on every push/PR
(`.github/workflows/validate-okf.yml`). Run it locally before committing:

```bash
python3 scripts/validate_okf.py
```

It checks, and fails on violation of:
- **Structure** — one bundle-root `index.md`, sole declarer of `okf_version`; every site has an `index.md`.
- **Card frontmatter** — non-empty `type`; `resource` is an http(s) URL; `title`/`description`/`tags`/
  `published` present; the `> ` lead line matches `description`.
- **Synthesis cards** — `type: synthesis`.
- **Card ↔ index 1:1 correspondence** — every card is linked exactly once from its site `index.md`;
  every card link in an index resolves; the root `index.md` links every site index.
- **Card ↔ synthesis correspondence** — each card's cluster (`tags[0]`) has a `_synthesis-<cluster>.md`
  that links the card.
- **Links** — every internal `.md` link resolves.

When you add a card (e.g. via `/sync`), you must also add it to the site `index.md` listing and to its
`_synthesis-<cluster>.md` `## Related`, or validation fails.

## Conventions

- All content files are Markdown with YAML frontmatter.
- Internal links between cards are absolute (`/site/file.md`); source links are full URLs.
- `README.md` is the entry point for humans; `index.md` is the OKF navigation root; `CLAUDE.md` is the
  entry point + schema for Claude.
