---
name: Web Resource Crawler
description: Summarises a web-based resource (e.g. a blog) into an OKF concept-card bundle. Creates a site folder with an index page, one synthesis card per thematic cluster, and one concept card per post. Trigger when the user says something like "crawl the blogs/articles at <site> and summarize them".
---

You are helping maintain a personal knowledge base on software design. It is an **OKF (Open Knowledge
Format) bundle** — see `CLAUDE.md` for the card schema. Your job is to process a web-based resource
(typically a blog) and produce a set of OKF concept cards for it.

## What you produce

For a given site URL, create a folder named after the site (e.g. `verraes.net/`) containing:

- `index.md` — reserved navigation file (no `type`): a short site intro plus a `## Posts` listing that
  links every card, grouped by cluster.
- `_synthesis-<cluster>.md` — one `type: synthesis` card per thematic cluster, holding the cluster's
  cross-post **Key Insights** and a `## Related` list linking that cluster's post cards.
- `YYYY-MM-<slug>.md` — one concept card per post (see format below). `YYYY-MM` from the post date;
  `<slug>` = the URL's last path segment, else a slugified title.

Also add the site to the bundle-root `index.md` Sections list and to `README.md`.

## Step-by-step process

### Step 1 — Survey the resource
Navigate to the URL. List every post, capturing title, URL, type (article/presentation/podcast), date,
a short blurb, and co-author if present. Record this in a temp file. Don't read full posts yet.

### Step 2 — Show an example early
Produce a single example concept card at the depth you intend to use, and one example
`_synthesis-<cluster>.md`. Present them for review and wait for feedback before continuing.

### Step 3 — Cluster the posts
Using only the Step-1 metadata, group posts into 5–10 thematic clusters. Assign each cluster a **slug**
(kebab-case, e.g. `event-sourcing-cqrs`) — this becomes the **`cluster`** field on every card in it.
Record assignments.

### Step 4 — Spin up sub-agents (one per cluster, parallel)
Each sub-agent reads every post in its cluster (via URL) and writes one concept card per post directly to
`<site>/YYYY-MM-<slug>.md`.

### Step 5 — Write the synthesis cards
For each cluster, write `_synthesis-<cluster>.md`: a `type: synthesis` card whose body distils the
cross-cutting **Key Insights** (patterns and tensions across the posts, not a list of them), followed by
a `## Related` list linking the cluster's post cards.

### Step 6 — Build the indexes
Write the site `index.md` (intro + `## Posts` grouped by cluster, linking every card and its synthesis
card). Add the site to the bundle-root `index.md` and to `README.md`.

### Step 7 — Clean up
Delete any temp files.

## Concept card format

```markdown
---
type: article                      # article | presentation | podcast
title: "Post Title"
description: "One-sentence summary."
resource: https://…                # canonical post URL
cluster: <cluster-slug>            # the card's thematic cluster (one _synthesis-<cluster>.md per cluster)
tags: ["topic-1", "topic-2"]       # topic keywords from /docs/topics.md
published: YYYY-MM
timestamp: YYYY-MM-DD              # today
co_author: "Name"                 # optional — keep any extra fields as custom keys
---

# Post Title

> One-sentence summary (same as description).

## Key Facts
- 2–5 bullets in your own words — the post's distinct insights.

## Summary
One paragraph on the argument, key ideas, and conclusions.

## Links
- [Source](https://…) — original post

## Related
- [Cluster synthesis](/<site>/_synthesis-<cluster-slug>.md)
- a few sibling cards in the same cluster
```

## Guidelines

- Cluster by subject matter, not by format or date. Prefer fewer, richer clusters.
- Cards are digests, never verbatim copies — capture what the author actually claims.
- `type` is required and non-empty. Set the `cluster` field; `tags` are topic keywords drawn from
  `/docs/topics.md` (propose additions there if none fit, rather than inventing free-form tags).
- Key Facts are your own words; Synthesis cards synthesise across posts, not summarise each.
- If the browser cannot access a URL, tell the user which URLs were inaccessible before finishing.
