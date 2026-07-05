# OKF Migration — Checkpoint / Resume Log

Branch: `okf-migration`. Plan: `~/.claude/plans/modular-baking-galaxy.md`.
Goal: convert this repo from overview+cluster files into an OKF v0.1 bundle (one concept card per post).

## Key decisions (approved)
- Layout: **flat per-site, cluster → tag**. Each cluster's `## Key Insights` → one `_synthesis-<cluster>.md` card (`type: synthesis`).
- Filename: **`YYYY-MM-<slug>.md`** (month precision; year-only where no month; backfill month from URL for lucumr/verraes). `<slug>` = URL last segment else slugified title.
- Card frontmatter: `type` (article|presentation|podcast, from **Type:**), `title`, `description` (1st sentence of summary), `resource` (URL; recover 81 missing), `tags` ([cluster-slug, ...topics]), `published` (YYYY-MM from **Date:**), `timestamp` (migration date 2026-07-05).
- Card body: `# Title` / `> desc` / `## Key Facts` (from Key takeaways) / `## Summary` (paragraph) / `## Links` (resource) / `## Related`.
- Site `overview.md` → site `index.md` (intro + listing grouped by cluster-tag). Root `index.md` with `okf_version:"0.1"`. Keep README.md (human) + update CLAUDE.md.
- 81 posts have no URL (bare `### Title`) → recover via archive crawl (Phase 3), else omit `resource` + flag.

## Data facts
- 397 post entries: 316 have `### [Title](URL)`, 81 bare `### Title` (no URL).
- Dates: 350 `YYYY-MM`, 47 `YYYY`-only. No day precision anywhere.
- Sites: verraes.net, dannorth.net, architecture-weekly.com, lucumr.pocoo.org. Sources in SOURCES.md.
- Skills depending on structure: `.claude/skills/{ask,sync}/SKILL.md`, `.claude/agents/web-resource-crawler.md`.

## Phases & status
- [x] P1: Conversion script `_okf-migration/convert.py` — DONE. Handles 3 metadata layouts (A: `### [t](url)`; B: bare `### t` no url; C: bare `### t` + raw URL on next line). Preserves extra fields (co_author etc.) as custom frontmatter.
- [x] P2: Ran script → 397 cards + `_synthesis-*` + site `index.md` + root `index.md` (okf_version) + report. COMMITTED (this checkpoint). Report clean: Missing Type/Date/summary/takeaways all 0.
- [x] P3: URL recovery DONE. `_okf-migration/recover_urls.py` matched 38/40 against `verraes-archive.txt` (year + slug-token overlap); 2 obvious ones patched manually. **All 397 cards now have `resource:`.**
- [ ] P4: Rewrite `ask`/`sync` skills + `web-resource-crawler` agent + `CLAUDE.md` + `README.md` for OKF.
- [ ] P5: Delete old `overview.md`/`<cluster>.md`, run validator, resolve the 1 duplicate, remove `_okf-migration/`. COMMIT + open PR.

## Known data issues (not migration bugs)
- 40 posts have no source URL (older verraes event-sourcing-cqrs + software-engineering entries) → P3.
- 1 genuine duplicate: verraes "Submitting talks to a tech conference" exists twice (old bare entry + recent sync). Card `2025-06-submitting-talks-to-conference-cfps-2.md`. Dedup in P5.

## How to re-run the conversion
`rm -f index.md */index.md && find . -name '[0-9][0-9][0-9][0-9]-*.md' -o -name '_synthesis-*.md' -delete` then `python3 _okf-migration/convert.py`. Idempotent; regenerates all cards from the still-present old cluster files. (So the old files must NOT be deleted until P5.)

## Resume instructions
Read the latest git log on branch `okf-migration` and this file. Check the `[x]` boxes to see the last completed phase. Re-run the validator (`_okf-migration/validate.py` once written) to see current state.

## Log
- 2026-07-05: Branch created, checkpoint seeded. Starting P1.
