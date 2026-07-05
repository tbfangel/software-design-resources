---
type: article
title: "Absurd In Production"
description: "Ronacher reflects on five months of production use of Absurd, a durable execution framework built entirely on Postgres."
resource: https://lucumr.pocoo.org/2026/4/4/absurd-in-production/
cluster: web-frameworks-and-apis
tags: ["durable-execution", "postgresql", "workflows", "agent-architecture", "distributed-systems", "open-source"]
published: 2026-04
timestamp: 2026-07-05
---
# Absurd In Production

> Ronacher reflects on five months of production use of Absurd, a durable execution framework built entirely on Postgres.

## Key Facts
- Checkpoint-based replay eliminates determinism requirements—code can safely call Math.random() between steps
- The TypeScript SDK is ~1,400 lines versus Temporal's ~170,000, favoring debuggability and portability
- Pull-based scheduling with no coordinator proved superior for self-hosting and simplicity
- Decomposed beginStep()/completeStep() APIs became essential for conditional and hook-based workflows
- Partition lifecycle management under real load remains the primary production gap
- The value of open-source durable execution shifts as AI agents can generate their own solutions

## Summary
Ronacher reflects on five months of production use of Absurd, a durable execution framework built entirely on Postgres. The core thesis holds: sophisticated workflow capabilities don't require specialized services, compilers, or runtimes—just SQL and thin SDKs. Its checkpoint-based replay model eliminates determinism requirements (code can call Math.random() between steps), and the TypeScript SDK is ~1,400 lines versus Temporal's ~170,000, prioritizing debuggability and portability. Real workloads—agent tasks, distributed crons, and background processing that must survive deployments—drove refinements like decomposed beginStep()/completeStep() APIs and operational tooling, though partition lifecycle management remains the main gap. He closes noting that open-source durable execution sits at a crossroads as AI agents increasingly generate their own infrastructure.

## Links
- [Source](https://lucumr.pocoo.org/2026/4/4/absurd-in-production/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
