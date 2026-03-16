---
name: sync
description: Detect new posts across all tracked sources, summarise and classify them into existing cluster files, and open a pull request. Safe to run unattended — exits early if nothing is new.
---

The user has invoked the `/sync` skill. Your job is to detect new posts across all tracked sources, add them to the knowledge base, and open a pull request. Follow these steps exactly.

## Step 1 — Read config

Read `SOURCES.md` to get the source list. For each source, record:
- `Folder`
- `Archive URL`
- `Filter` (title regex to skip, or `none`)
- `Type` (Substack or Personal blog)

## Step 2 — Collect known URLs per source

For each source folder, Grep all `.md` files in that folder (excluding `overview.md`) for lines matching the pattern `### \[.*\]\(https?://` to extract already-catalogued post URLs.

Write the extracted URLs to `/tmp/sync-known-{folder}.txt` (one URL per line, just the URL, no surrounding text). Example filename: `/tmp/sync-known-architecture-weekly.com.txt`.

## Step 3 — Discover new posts (parallel sub-agents, one per source)

Spin up one sub-agent per source. Run all agents in parallel. Each sub-agent must:

1. Fetch the archive URL using WebFetch.
2. Extract all post URLs and titles from the page.
   - For Substack sources: look for links whose path matches the `/p/` slug pattern.
   - For Personal blog sources: look for all article/post links on the page.
3. Apply the filter: skip any post whose title matches the source's filter pattern (if filter is not `none`).
4. If more posts exist on subsequent pages (e.g. `?page=2`, `?page=3`), fetch up to 3 additional pages — but stop early as soon as a URL already present in `/tmp/sync-known-{folder}.txt` is encountered.
5. Diff discovered URLs against `/tmp/sync-known-{folder}.txt`.
6. Write truly new posts (not in the known list) to `/tmp/sync-new-{folder}.md` — one line per post in the format `title|url`. If no new posts, write an empty file.

## Step 4 — Early exit if nothing new

Read all `/tmp/sync-new-*.md` files. If every file is empty, print:

```
All sources up to date. No PR created.
```

Then delete all `/tmp/sync-*.md` and `/tmp/sync-*.txt` temp files and stop.

## Step 5 — Summarise and classify new posts (parallel sub-agents, one per post)

For every new post across all sources, spin up one sub-agent. Run all agents in parallel. Each sub-agent must:

1. Fetch the post URL with WebFetch.
2. Read the existing cluster files for that source folder to understand what clusters exist and their content.
3. Produce a formatted entry using the standard per-post format:

```
### [Post Title](URL)
**Type:** Article / Presentation / Podcast / etc.
**Date:** YYYY-MM
**Tags/Topics:** tag1, tag2, tag3

One paragraph summarising the post's argument, key ideas, and conclusions.

**Key takeaways:**
- Bullet point takeaways
- One per distinct insight
```

4. Determine the best matching existing cluster file name (e.g. `event-driven-architecture.md`). If no existing cluster fits, write `UNCLASSIFIED`.
5. Write a result file to `/tmp/sync-entry-{slug}.md` containing:
   - Line 1: the source folder (e.g. `architecture-weekly.com`)
   - Line 2: the cluster filename (e.g. `event-driven-architecture.md`) or `UNCLASSIFIED`
   - Line 3: blank
   - Remaining lines: the formatted entry

Where `{slug}` is derived from the post URL's path segment (replace `/` and non-alphanumeric characters with `-`).

## Step 6 — Create git branch

Create a new branch for the update:

```bash
git checkout -b kb-update/$(date +%Y-%m-%d)
```

If the branch already exists (command fails), try `kb-update/$(date +%Y-%m-%d)-2`, then `-3`, etc., until a branch is created successfully.

## Step 7 — Append entries to cluster files

For each `/tmp/sync-entry-*.md` file:

1. Read the file to get the source folder, cluster filename, and formatted entry.
2. Open the target cluster file (e.g. `architecture-weekly.com/event-driven-architecture.md`).
3. Find the last occurrence of `### [` in the file and insert the new entry after the end of that post's content (after the last bullet point of its `**Key takeaways:**` section).
4. For `UNCLASSIFIED` posts: pick the cluster whose topic is closest to the post's tags, and insert the entry there with a comment immediately before the `### [` heading:
   ```
   <!-- NOTE: classification uncertain — review before merging -->
   ```

## Step 8 — Update overview.md files

For each source folder that received new posts:

1. Open the source's `overview.md`.
2. In the **Thematic Clusters** section, find the row for each cluster that was updated and increment its post count.
3. If the newest added post has a date more recent than the current date range shown in the overview, update the date range (e.g. `2020–2025` → `2020–2026`).

## Step 9 — Update README.md

Open the root `README.md`. In the practitioners table, update the post count and date range for each source that gained posts. Match the existing format (e.g. `~66 original articles (2020–2026)`).

## Step 10 — Commit and open PR

Stage only the files that were modified (cluster files, overview files, README.md). Do not use `git add -A`. Commit with a meaningful message:

```
Knowledge base sync: YYYY-MM-DD
```

Then open a pull request:

```bash
gh pr create --title "Knowledge base sync: YYYY-MM-DD" --body "..."
```

The PR body must include:
- A table listing each source, how many posts were added, and which cluster files were affected.
- A "Review needed" section listing any UNCLASSIFIED posts with their URLs.
- A brief summary of overview.md and README.md changes.

Return the PR URL to the user.

## Step 11 — Clean up

Delete all `/tmp/sync-*.md` and `/tmp/sync-*.txt` temp files.

---

## Notes for execution

- All WebFetch calls require the domain to be in the allowed list in `.claude/settings.local.json`.
- The skill is designed to run unattended: never ask for input mid-run unless a hard blocker is encountered.
- If a post URL is inaccessible (404, paywall, etc.), skip it and note it in the PR body under "Skipped posts".
- Prefer accuracy over speed: if unsure about cluster assignment, choose the closest existing cluster and mark it with the `UNCLASSIFIED` comment rather than creating a new cluster.
