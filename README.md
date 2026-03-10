# Software Design Resources

A curated collection of resources on software design — with a focus on Domain-Driven Design, distributed systems architecture, and the craft of building well-structured, maintainable software.

## Claude Code Setup

This repository includes automation for maintaining the knowledge base:

- **`web-resource-crawler` agent** (`.claude/agents/`) — Crawl blog sites and generate structured summaries organized into thematic clusters
- **`/ask` skill** (`.claude/skills/`) — Query the knowledge base with natural language (e.g., `/ask tech debt`, `/ask bounded contexts`)

---

## Acknowledgments

This knowledge base exists thanks to practitioners who generously share their insights publicly. **Thank you** to Mathias Verraes, Dan North, Oskar Dudycz, and Armin Ronacher for writing openly about software design, architecture, and the craft of building better systems. Your willingness to document hard-won lessons, challenge conventional wisdom, and teach through real examples makes the entire field better.

---

## Blog Posts

Summaries and analyses of writing by practitioners in the field, organised by author and clustered by theme.

| Author | Description |
|---|---|
| [Mathias Verraes](verraes.net/overview.md) | ~122 posts (2011–2025) covering DDD, Event Sourcing, CQRS, bounded contexts, messaging patterns, modelling theory, and software engineering practice |
| [Dan North](dannorth.net/overview.md) | ~91 posts (2006–2025) covering BDD, agile delivery, testing, estimation, software design, learning models, and organizational effectiveness |
| [Oskar Dudycz / Architecture Weekly](architecture-weekly.com/overview.md) | ~66 original articles (2020–2026) covering event-driven architecture, distributed systems, PostgreSQL, Kafka internals, messaging patterns, observability, and pragmatic software engineering |
| [Armin Ronacher](lucumr.pocoo.org/overview.md) | ~150 posts (2007–2026) covering Flask/Werkzeug/WSGI web infrastructure, deep Rust language work, Python packaging and Unicode, open source economics and licensing, and first-hand agentic coding practice |
