---
name: sync
description: Detect new posts across all tracked sources, summarise them into OKF concept cards, and open a pull request. Safe to run unattended — exits early if nothing is new.
---

The user has invoked the `/sync` skill. Your job is to detect new posts across all tracked sources, add
one **OKF concept card** per new post to the knowledge base, and open a pull request. This repo is an OKF
bundle — see `CLAUDE.md` for the card schema. Follow these steps exactly.

## Step 1 — Read config

Read `SOURCES.md` to get the source list. For each source record: `Folder`, `Archive URL`, `Filter`
(title regex to skip, or `none`), `Type` (Substack or Personal blog).

## Step 2 — Collect known URLs per source

Every catalogued post is a card whose frontmatter has a `resource:` line. For each source folder, Grep
its `*.md` files for `^resource:` and extract the URLs. Write them to `/tmp/sync-known-{folder}.txt`
(one URL per line). This is the dedupe set.

## Step 3 — Discover new posts (parallel sub-agents, one per source)

Spin up one sub-agent per source, in parallel. Each must:
1. WebFetch the archive URL.
2. Extract all post URLs + titles (Substack: `/p/` slug links; blogs: article links).
3. Apply the source `Filter` (skip titles matching it, unless `none`).
4. Paginate up to 3 extra pages if needed, stopping as soon as a URL already in the known list appears.
5. Diff against `/tmp/sync-known-{folder}.txt`.
6. Write truly-new posts to `/tmp/sync-new-{folder}.md`, one `title|url` per line (empty file if none).

## Step 4 — Early exit if nothing new

Read all `/tmp/sync-new-*.md`. If every file is empty, print `All sources up to date. No PR created.`,
delete the `/tmp/sync-*` temp files, and stop.

## Step 5 — Summarise each new post into a card (parallel sub-agents, one per post)

For every new post, spin up one sub-agent (parallel). Each must:
1. WebFetch the post URL.
2. Read a few existing cards in that source folder — especially the `_synthesis-<cluster>.md` cards — to
   learn the cluster taxonomy (cluster slugs) and house style.
3. Choose the best-fitting **cluster slug** for the post (the `cluster` field used by that source's cards).
   If none fits, use `UNCLASSIFIED`.
4. Write a ready-to-save card to `/tmp/sync-card-{slug}.md` using the schema in `docs/schema.md`
   (topic `tags` come from `/docs/topics.md`):
   ```markdown
   ---
   type: <article|presentation|podcast>
   title: "<Post Title>"
   description: "<one-sentence summary>"
   resource: <post URL>
   cluster: <cluster-slug>
   tags: ["<topic-1>", "<topic-2>"]
   published: <YYYY-MM>
   timestamp: <today YYYY-MM-DD>
   ---

   # <Post Title>

   > <one-sentence summary>

   ## Key Facts
   - <2–5 bullets, your own words>

   ## Summary
   <one paragraph>

   ## Links
   - [Source](<post URL>) — original post

   ## Related
   - [Cluster synthesis](/<folder>/_synthesis-<cluster-slug>.md)
   ```
5. Prepend two metadata lines the orchestrator will consume, then a blank line, then the card:
   - Line 1: the source folder (e.g. `architecture-weekly.com`)
   - Line 2: the target filename `YYYY-MM-<slug>.md` (slug = URL last path segment, else slugified title)

## Step 6 — Create git branch

`git checkout -b kb-update/$(date +%Y-%m-%d)` — on conflict append `-2`, `-3`, … until it succeeds.

## Step 7 — Write the card files

For each `/tmp/sync-card-*.md`: strip the two metadata lines and write the remaining card to
`<folder>/<filename>`. If the filename already exists, append `-2`, `-3`, …. For `UNCLASSIFIED` posts,
pick the closest cluster slug for the `cluster` field and add this line right below the frontmatter:
`<!-- NOTE: classification uncertain — review before merging -->`.

## Step 8 — Update the affected `_synthesis-<cluster>.md` and site `index.md`

For each cluster that gained cards:
1. In `_synthesis-<cluster>.md`, add the new card(s) to its `## Related` list.
2. In the site `index.md`, add the new card(s) under the matching cluster heading in the `## Posts`
   listing, and bump any post-count / date-range mentioned in the intro prose if present.

## Step 9 — Update the bundle-root `index.md` and README.md

In the root `index.md`, update each affected site's card count in the Sections list. In `README.md`,
update the post count / date range for each source that gained posts.

## Step 10 — Validate, commit, and open PR

Run `python3 scripts/validate_okf.py` and fix any errors before committing (this is what CI enforces —
new cards must be listed in the site `index.md` and their `_synthesis-<cluster>.md` `## Related`).

Stage only the files you created/modified (never `git add -A`). Commit `Knowledge base sync: YYYY-MM-DD`.
Then `gh pr create --title "Knowledge base sync: YYYY-MM-DD" --body "…"`. The PR body must include:
- A table: source → cards added → clusters affected.
- A "Review needed" section listing any UNCLASSIFIED cards with their URLs.
- Any skipped/inaccessible posts.
Return the PR URL to the user.

## Step 11 — Clean up

Delete all `/tmp/sync-*` temp files.

---

## Notes for execution

- WebFetch domains must be in `.claude/settings.local.json`.
- Designed to run unattended: never ask for input mid-run unless a hard blocker is hit.
- If a post URL is inaccessible (404/paywall), skip it and note it under "Skipped posts" in the PR.
- Prefer accuracy over speed: when unsure of the cluster, choose the closest slug and mark the card
  `UNCLASSIFIED` rather than inventing a new cluster.
- One post = one card = one file. Never append multiple posts into a single file.
