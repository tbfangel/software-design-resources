# Software Design Resources

A curated collection of resources on software design — with a focus on Domain-Driven Design, distributed systems architecture, and the craft of building well-structured, maintainable software.

## Format

This knowledge base is an **[Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf) (OKF) v0.1 bundle**: a tree of small Markdown **concept cards**, one per blog post. Each card has YAML frontmatter (`type`, `title`, `resource`, `tags`, `published`) and a short digest — `## Key Facts`, `## Summary`, `## Links`, `## Related` — that points to the original rather than copying it.

```
index.md            # OKF navigation root (declares okf_version)
<site>/
  index.md          # site intro + listing of its cards by cluster-tag
  _synthesis-*.md   # one synthesis card per theme (cross-post "Key Insights")
  YYYY-MM-*.md      # one concept card per post (sorts chronologically)
```

Start at [`index.md`](index.md), or open any site folder. The cluster a post belongs to is the first entry in its `tags`, and each cluster has a `_synthesis-*` card distilling the cross-cutting lessons.

## Claude Code Setup

Automation for maintaining the bundle (all OKF-aware):

- **`/ask` skill** — query the cards in natural language (e.g. `/ask tech debt`, `/ask bounded contexts`).
- **`/sync` skill** — detect new posts across tracked sources, write one card per post, and open a PR; safe to run unattended.
- **`web-resource-crawler` agent** — onboard a new site into concept cards organised by theme.

See [`CLAUDE.md`](CLAUDE.md) for the card schema.

**Integrity:** `scripts/validate_okf.py` checks the bundle invariants — card frontmatter, resolvable links, and a strict 1:1 correspondence between concept cards and their index/synthesis listings. CI runs it on every push and PR ([`.github/workflows/validate-okf.yml`](.github/workflows/validate-okf.yml)); run it locally with `python3 scripts/validate_okf.py`.

---

## Acknowledgments

This knowledge base exists thanks to practitioners who generously share their insights publicly. **Thank you** to Mathias Verraes, Dan North, Oskar Dudycz, and Armin Ronacher for writing openly about software design, architecture, and the craft of building better systems. Your willingness to document hard-won lessons, challenge conventional wisdom, and teach through real examples makes the entire field better.

---

## Practitioners

| Author | Coverage |
|---|---|
| [Mathias Verraes](verraes.net/index.md) | DDD, Event Sourcing, CQRS, bounded contexts, messaging patterns, modelling theory, and software engineering practice |
| [Dan North](dannorth.net/index.md) | BDD, agile delivery, testing, estimation, software design, learning models, and organizational effectiveness |
| [Oskar Dudycz / Architecture Weekly](architecture-weekly.com/index.md) | Event-driven architecture, distributed systems, PostgreSQL, Kafka internals, messaging patterns, observability, and pragmatic software engineering |
| [Armin Ronacher](lucumr.pocoo.org/index.md) | Flask/Werkzeug/WSGI web infrastructure, Rust, Python packaging and Unicode, open source economics, and first-hand agentic coding practice |
