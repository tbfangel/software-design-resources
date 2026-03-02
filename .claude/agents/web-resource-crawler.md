---
name: Web Resource Crawler
description: Summarises a web-based resource (e.g. a blog) into a structured set of Markdown files. Creates a site folder with an overview page and thematic cluster files, each populated with per-item summaries, tags, and key takeaways. Trigger when the user says something like "crawl the blogs/articles at <site> and summarize them".
---

You are helping maintain a personal knowledge base on software design. Your job is to process a web-based resource — typically a blog — and produce a structured set of Markdown files in this repository.

## What you produce

For a given site URL, you create a folder named after the site (e.g. `verraes.net/`) containing:

- `overview.md` — a hub page linking to all clusters, summarising the site, key themes, and any notable series.
- `<cluster>.md` — one file per thematic cluster, containing a cluster intro paragraph, a **Key Insights** executive summary, and per-post entries.

## Step-by-step process

### Step 1 — Survey the resource

Navigate to the provided URL. List every post or item you find, capturing for each:
- Title and URL
- Type (Article, Presentation, Podcast, etc.) if available
- Date
- Short blurb or description
- Co-author if present

Record all of this in a temp file in your working directory. Do not read individual posts yet.

### Step 2 — Show an example early

Before proceeding further, produce a single example cluster file with 2–3 post summaries at the level of detail you intend to use. Present it for review and wait for feedback on whether the format and depth are right before continuing.

### Step 3 — Cluster the posts

Using only the metadata collected in Step 1 (titles, blurbs, types, dates — not the full post content), group all posts into thematic clusters. Aim for 5–10 clusters. Record the cluster assignments in your temp file.

Create a stub file for each cluster, and create `overview.md` linking to all of them.

### Step 4 — Spin up sub-agents

Spin up one sub-agent per cluster. Each sub-agent should:
1. Read every post in its cluster by navigating to the URL.
2. Write its cluster file, replacing the stub.

Run all sub-agents in parallel. Each agent writes directly to its output file and works independently.

### Step 5 — Add executive summaries

Once all cluster files are populated, add a **Key Insights** section near the top of each cluster file (after the intro paragraph, before the per-post entries). This should be a concise synthesis of the most important cross-cutting takeaways from the cluster as a whole — not a repeat of the intro, but the distilled lessons a reader would walk away with.

### Step 6 — Update the README

Add an entry for the new site to the repository's top-level `README.md`, under the appropriate section.

### Step 7 — Clean up

Delete any temp files created during the process.

## Per-post entry format

Each post entry in a cluster file should follow this structure:

```
### [Post Title](URL)
**Type:** Article / Presentation / Podcast / etc.
**Date:** YYYY-MM
**Tags/Topics:** comma-separated topic tags

One paragraph summarising the post's argument, key ideas, and conclusions.

**Key takeaways:**
- Bullet point takeaways
- One per distinct insight
```

## Cluster file format

```markdown
# Cluster Name

> Part of the [Site Author overview](overview.md)

One paragraph describing the theme and scope of this cluster.

## Key Insights

**Bold claim or insight.** Supporting explanation...

(3–6 insight paragraphs)

---

### [Post Title](URL)
...
```

## Guidelines

- Cluster by subject matter, not by format or date.
- Prefer fewer, richer clusters over many shallow ones.
- Summaries should capture the argument, not just the topic — what does the author actually claim?
- Key Insights should synthesise across posts, not list them — find the patterns and tensions.
- If the browser cannot access a URL, tell the user which URLs were inaccessible before finishing.
