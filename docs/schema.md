---
type: schema
title: "OKF Bundle Schema"
description: "The authoritative house-style schema for this software-design knowledge base — card format, the cluster/tags model, and structural rules."
timestamp: 2026-07-05
---

# OKF Bundle Schema

> The authoritative house-style schema for this software-design knowledge base — card format, the cluster/tags model, and structural rules.

This document is authoritative for how knowledge is written in this repository. It layers this
bundle's conventions on top of [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf),
and takes precedence over generic OKF guidance. `scripts/validate_okf.py` (CI-enforced) mechanically
checks the invariants below.

## Structure

```
software-design-resources/          <- OKF bundle root
├── index.md                        # reserved: declares okf_version "0.1"; lists the site sections
├── README.md                       # human-facing entry point
├── CLAUDE.md                       # entry point for Claude; links here for the schema
├── SOURCES.md                      # /sync config: tracked sources
├── docs/                           # bundle documentation (not a site — no index.md)
│   ├── schema.md                   # this file
│   └── topics.md                   # the controlled topic vocabulary (see "Topic tags")
└── <site>/                         # one folder per author/site (e.g. verraes.net)
    ├── index.md                    # reserved: site intro + listing of the site's cards by cluster
    ├── _synthesis-<cluster>.md     # one synthesis card per cluster (type: synthesis) — cross-post "Key Insights"
    └── YYYY-MM-<slug>.md           # one concept card per post (chronological lex-sort)
```

Each card is a **digest** — what the post argues, its key facts, and a link to the source — never a
verbatim copy of the original.

## Concept card schema

```markdown
---
type: article            # REQUIRED. The post medium: article | presentation | podcast (or synthesis for cluster cards)
title: "Post Title"
description: "One-sentence summary (mirrors the > lead line)."
resource: https://…      # canonical URL of the source post
cluster: <cluster-slug>  # the card's thematic cluster (a controlled slug; one _synthesis-<cluster>.md per cluster)
tags: ["topic-1", "topic-2"]   # topic tags from the controlled vocabulary in docs/topics.md
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

## The cluster / tags model

- **`cluster`** is a card's single **thematic cluster** — a controlled kebab-case slug. Every cluster
  has exactly one `_synthesis-<cluster>.md` card distilling the cross-post "Key Insights", and every
  concept card is linked from its cluster's synthesis. The set of `_synthesis-*` slugs in a site *is*
  that site's cluster vocabulary.
- **`tags`** are **topic** keywords drawn from the controlled vocabulary in
  [`/docs/topics.md`](/docs/topics.md) — finer-grained than the cluster, and optional (may be `[]`).
  They power search and discovery, not structure. (Historically the cluster was smuggled in as
  `tags[0]`; it is now its own field.)

## Rules

- **`type` is the only field OKF requires** and must be non-empty. Preserve any extra frontmatter keys
  (e.g. `co_author`) — OKF consumers must tolerate unknown keys.
- **`cluster` is required** on every concept card, and must have a matching `_synthesis-<cluster>.md`.
- **`tags` are optional** and must come from `/docs/topics.md` (see that file for how to propose additions).
- **Concept ID** = path minus `.md` (e.g. `verraes.net/2023-05-eventsourcing-testing-patterns`).
- **Relationships are Markdown links**; prefer absolute (`/site/file.md`).
- **Reserved files**: only `index.md` (navigation; no `type`) and, if present, `log.md`. The bundle-root
  `index.md` is the sole place `okf_version` is declared.
- The `> ` lead line under the H1 mirrors `description` verbatim.
- Cards are **digests, never verbatim copies** of the source.

## Validation

`scripts/validate_okf.py` enforces these invariants; CI runs it on every push/PR
(`.github/workflows/validate-okf.yml`). It fails on violation of:

- **Structure** — one bundle-root `index.md`, sole declarer of `okf_version`; every site has an `index.md`.
- **Card frontmatter** — non-empty `type`; `resource` is an http(s) URL; `title`/`description`/`published`
  present; a non-empty `cluster`; the `> ` lead line matches `description`.
- **Synthesis cards** — `type: synthesis`.
- **Topic vocabulary** — every `tags` entry appears in `/docs/topics.md`.
- **Card ↔ index 1:1 correspondence** — every card is linked exactly once from its site `index.md`;
  every card link in an index resolves; the root `index.md` links every site index.
- **Card ↔ synthesis correspondence** — each card's `cluster` has a `_synthesis-<cluster>.md` that links the card.
- **Links** — every internal `.md` link resolves.
