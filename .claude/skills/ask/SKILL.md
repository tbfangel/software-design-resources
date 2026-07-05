---
name: ask
description: Query the software design knowledge base for insights from practitioners. Use when the user asks about software design topics, what practitioners have written, or wants to explore concepts like tech debt, bounded contexts, BDD, etc.
---

The user is querying the knowledge base with: **$ARGUMENTS**

This repository is an **OKF (Open Knowledge Format) bundle** — a tree of Markdown concept cards, one
per blog post, with YAML frontmatter (`type`, `title`, `resource`, `tags`, `published`). See `CLAUDE.md`
for the schema. Your task is to search these cards and give a well-cited answer.

## Bundle structure (what you're searching)

- Bundle root `index.md` (declares `okf_version`) lists the site sections.
- One folder per practitioner/site (e.g. `verraes.net/`, `dannorth.net/`).
- Each site folder holds:
  - `index.md` — site intro + a listing of its cards grouped by cluster.
  - `_synthesis-<cluster>.md` — a `type: synthesis` card with cross-post **Key Insights** for a cluster.
  - `YYYY-MM-<slug>.md` — one concept card per post: `## Key Facts`, `## Summary`, `## Links`, `## Related`.

## Search approach

1. **Orient**: skim the root `index.md` and relevant site `index.md` files to see what's covered.
2. **Search cards** with Grep (case-insensitive), across all `*.md`:
   - Match query terms in card bodies **and** in frontmatter `tags:` / `title:`.
   - The cluster is the `cluster` field — e.g. search `^cluster: event-sourcing-cqrs` to pull a whole cluster.
   - Read the `_synthesis-<cluster>.md` cards first for the distilled cross-post view, then drill into
     individual post cards for specifics.
3. **Read** the matching cards: `## Key Facts` give the quick answer; `## Summary` adds depth; frontmatter
   gives `type`, `published`, and the `resource` URL to cite. Follow `## Related` links to adjacent cards.
4. **Go to source only if needed**: if a card is too thin, WebFetch its `resource` URL.

## Synthesise the answer

- Organise by practitioner (`## Practitioner Name`); note where they agree, disagree, or complement.
- Cite specific cards as links: **[Post Title](resource-url)** plus the card's key facts.
- Quote the `## Key Facts` bullets that directly address the query.
- Acknowledge gaps: if no card covers something, say so. Note stale `published` dates when relevant.
- Be comprehensive but scannable; bold key concepts.

## Cite sources

State which cards (by title / concept ID) and/or `resource` URLs the answer came from. Don't answer
from memory when the bundle covers the topic — check the cards first.

Now search the cards and answer the user's query.
