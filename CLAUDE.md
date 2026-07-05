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
├── docs/                           # bundle docs (not a site): schema.md, topics.md
└── <site>/                         # one folder per author/site (e.g. verraes.net)
    ├── index.md                    # reserved: site intro + listing of the site's cards by cluster
    ├── _synthesis-<cluster>.md     # one synthesis card per cluster (type: synthesis) — cross-post "Key Insights"
    └── YYYY-MM-<slug>.md           # one concept card per post (chronological lex-sort)
```

The old `overview.md` + `<cluster>.md` layout has been fully migrated to this format.

## Concept card schema

The authoritative house-style schema lives in **[`docs/schema.md`](docs/schema.md)** — read it before
adding or editing cards. In brief:

- Each card is a **digest** (never a verbatim copy) with YAML frontmatter + a `> ` lead line mirroring
  `description`.
- **`type` is the only OKF-required field**; preserve any extra keys (e.g. `co_author`).
- Each card's thematic cluster is a dedicated **`cluster:`** field (a controlled slug with one
  `_synthesis-<cluster>.md` card each) — **not** `tags[0]`. **`tags`** are optional topic keywords from
  the controlled vocabulary in [`docs/topics.md`](docs/topics.md).
- **Concept ID** = path minus `.md`. **Relationships are Markdown links**; prefer absolute (`/site/file.md`).
- **Reserved files**: `index.md` (navigation; no `type`) and optionally `log.md`; the bundle-root
  `index.md` is the sole declarer of `okf_version`.

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
- **Card frontmatter** — non-empty `type`; `resource` is an http(s) URL; `title`/`description`/`published`
  present; a non-empty `cluster`; the `> ` lead line matches `description`.
- **Synthesis cards** — `type: synthesis`.
- **Topic vocabulary** — every `tags` entry appears in `docs/topics.md`.
- **Card ↔ index 1:1 correspondence** — every card is linked exactly once from its site `index.md`;
  every card link in an index resolves; the root `index.md` links every site index.
- **Card ↔ synthesis correspondence** — each card's `cluster` field has a `_synthesis-<cluster>.md`
  that links the card.
- **Links** — every internal `.md` link resolves.

When you add a card (e.g. via `/sync`), you must also add it to the site `index.md` listing and to its
`_synthesis-<cluster>.md` `## Related`, or validation fails.

## Conventions

- All content files are Markdown with YAML frontmatter.
- Internal links between cards are absolute (`/site/file.md`); source links are full URLs.
- `README.md` is the entry point for humans; `index.md` is the OKF navigation root; `CLAUDE.md` is the
  entry point + schema for Claude.
