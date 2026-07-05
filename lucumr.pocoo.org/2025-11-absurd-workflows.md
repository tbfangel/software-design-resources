---
type: article
title: "Absurd Workflows: Durable Execution With Just Postgres"
description: "Ronacher demonstrates that durable execution — long-lived functions that survive crashes and restarts — requires only PostgreSQL as both queue and state store."
resource: https://lucumr.pocoo.org/2025/11/3/absurd-workflows/
tags: ["web-frameworks-and-apis", "durable-execution", "postgres", "workflows", "step-caching", "simplicity", "agents"]
published: 2025-11
timestamp: 2026-07-05
---
# Absurd Workflows: Durable Execution With Just Postgres

> Ronacher demonstrates that durable execution — long-lived functions that survive crashes and restarts — requires only PostgreSQL as both queue and state store.

## Key Facts
- Durable execution requires only a queue (Postgres `SELECT FOR UPDATE SKIP LOCKED`) and a state store (Postgres checkpoints).
- Step-based recovery with checkpoints eliminates the need for specialised runtime infrastructure.
- The pattern is agent-friendly: step counter auto-increment accommodates iterative agentic decision-making.

## Summary
Ronacher demonstrates that durable execution — long-lived functions that survive crashes and restarts — requires only PostgreSQL as both queue and state store. `SELECT FOR UPDATE SKIP LOCKED` provides queue semantics; checkpoint-based recovery stores step results. When failures occur, completed steps load from storage without re-execution. The system naturally accommodates AI agents by incrementing step counters for repeated steps. Conclusion: "durable workflows are absurdly simple, but have been overcomplicated in recent years."

## Links
- [Source](https://lucumr.pocoo.org/2025/11/3/absurd-workflows/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
