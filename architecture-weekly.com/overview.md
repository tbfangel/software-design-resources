# Architecture Weekly

**Author:** Oskar Dudycz
**Website:** [https://www.architecture-weekly.com/](https://www.architecture-weekly.com/)
**Format:** Newsletter/Blog (Substack)
**Active Since:** December 2020
**Focus:** Event-driven systems, distributed architecture, PostgreSQL, messaging patterns, and pragmatic software engineering

## Overview

Architecture Weekly is a long-running newsletter by Oskar Dudycz, a software architect specializing in event-driven systems and distributed architecture. Since December 2020, Dudycz has published over 290 issues combining weekly link roundups with in-depth original articles exploring practical architecture challenges. The publication emphasizes real-world implementation details over abstract theory, drawing heavily from his work on the Emmett (event sourcing framework) and Pongo (PostgreSQL-as-MongoDB) open-source projects.

The content reflects a practitioner's perspective: trade-offs matter more than silver bullets, context determines appropriateness of patterns, and organizational challenges often outweigh technical ones. Dudycz frequently challenges industry hype—whether around AI productivity claims, microservices migrations, or "monolith-first" advice—advocating instead for informed decision-making based on actual constraints.

## Key Themes

**Event-Driven Architecture as a Core Pattern**
Event sourcing, CQRS, read models, and event-driven integration appear throughout Dudycz's writing. He treats events not as a trendy pattern but as a fundamental architectural approach, exploring practical concerns like rebuilding read models safely, handling out-of-order events, and managing eventual consistency.

**PostgreSQL as a Swiss Army Knife**
The author demonstrates PostgreSQL's versatility beyond traditional relational use cases: event stores, message queues, document databases (via JSONB), distributed locking (advisory locks), and change data capture (logical replication). This reflects a philosophy of maximizing existing infrastructure rather than introducing new dependencies.

**Messaging Systems and Kafka Internals**
Deep dives into Kafka's consumer protocol, offset tracking, producer batching, and partitioning strategy reveal the author's interest in understanding—not just using—messaging infrastructure. He extends this to broader messaging patterns: deduplication, checkpointing, multi-tenancy, and the tradeoffs between different queue systems.

**Distributed Systems Realism**
Dudycz emphasizes fundamental constraints: you cannot have both strict ordering and high performance, secondary indexes in distributed systems are expensive, coordination costs dominate, and network latency is 5,000–1,500,000x slower than local operations. He advocates for accepting rather than fighting these realities.

**Observability as Essential Infrastructure**
Rather than treating monitoring as an afterthought, the author advocates for test-driven instrumentation, OpenTelemetry adoption, and distinguishing between "known unknowns" (handled by metrics) and "unknown unknowns" (requiring distributed tracing). Observability enables learning from production behavior, not just detecting failures.

**Engineering Culture and Communication**
A significant portion of content addresses the human side of software: team dynamics, organizational structure (Conway's Law), communication skills for architects, the psychology of collaborative design (EventStorming), and pushing back against cargo-cult adoption of practices like trunk-based development or platform teams.

**Pragmatic Open Source Sustainability**
Dudycz openly discusses the economics of open-source maintenance, dual-licensing strategies (AGPLv3/SSPL), and the unfairness of permissive licenses enabling cloud providers to profit without contribution. This transparency about sustainability challenges is rare in technical writing.

## Notable Series and Recurring Topics

**Emmett Framework Development**
Many articles explore design decisions behind Emmett, a TypeScript/Node.js event sourcing framework. Topics include the separation of consumers from projectors, workflow engine design, compilation-based pipeline optimization, and connection pooling for serverless environments. These posts blend framework-specific details with general architectural principles.

**PostgreSQL Deep Dives**
Recurring explorations of PostgreSQL features: partitioning strategies with pg_partman, logical replication as native CDC, JSONB for semi-structured data, advisory locks for distributed coordination, and write-ahead logs as a foundational pattern. The author treats PostgreSQL as a learning platform for broader distributed systems concepts.

**Kafka Internals Series**
A sequence of posts dissecting Kafka's architecture: consumer protocol mechanics, offset tracking via the internal consumer offsets topic, producer batching and write-ahead logging, partition assignment and rebalancing, and the limitations of Kafka's consumer model. These provide implementation-level understanding rare in typical Kafka tutorials.

**Papers We Love Discussions**
Discussions of classic computer science papers including the original "Sagas" paper (distributed transactions, not business processes) and Conway's Law ("How Do Committees Invent?"). These sessions connect historical research to modern architectural practices.

**Anti-Pattern Warnings**
Explicit identification of problematic approaches: Requeuing Roulette in messaging systems, semantic diffusion in architecture patterns (CQRS, Vertical Slices), overselling practices without explaining prerequisites (trunk-based development), and treating "technical debt" as a label rather than addressing trade-offs.

## Thematic Clusters

This knowledge base organizes Architecture Weekly's original articles into seven thematic clusters:

1. **[Event-Driven Architecture & Event Sourcing](event-driven-architecture.md)** — Event sourcing fundamentals, read model management, handling out-of-order events, eventual consistency, documentation practices, and ordering guarantees (10 posts)

2. **[Messaging Systems & Kafka](messaging-and-kafka.md)** — Kafka internals (consumer protocol, offset tracking, producer mechanics), message processing patterns, multi-tenancy, checkpointing, deduplication, and the distinction between messaging and event-driven architecture (9 posts)

3. **[PostgreSQL & Database Patterns](databases-and-postgresql.md)** — PostgreSQL-specific features (partitioning, logical replication, JSONB, advisory locks), query complexity management, write-ahead logs, ledger database alternatives, and unconventional uses of cloud storage (7 posts)

4. **[Distributed Systems & Concurrency](distributed-systems.md)** — Distributed locking strategies, coordination mechanisms, workflow engines, ordering vs. performance tradeoffs, predictable identifiers (URNs), and secondary index complexity in specialized storage (6 posts)

5. **[Architecture Patterns & System Design](architecture-patterns.md)** — CQRS and Vertical Slices (semantic diffusion), monolith-to-microservices strategies, modular design principles, frontend-backend integration, state management (React Query), collaborative design, and code design philosophy (9 posts)

6. **[Observability & System Quality](observability.md)** — Observability strategies, measurement practices, OpenTelemetry implementation, modern tracing approaches, defining success metrics (killer metrics), performance benchmarking, and transitioning from monitoring to understanding (7 posts)

7. **[Software Engineering & Team Culture](engineering-culture.md)** — AI productivity claims, open-source sustainability, QA roles, resilience theory, EventStorming facilitation, conference speaking, learning multiple languages, professional responsibility, communication skills, platform teams, trunk-based development tradeoffs, technical debt critique, and Papers We Love discussions (18 posts)

## Reading Recommendations

**For Event Sourcing Practitioners**
Start with "Practical Introduction to Event Sourcing" for framework context, then explore the read model rebuilding posts (safe approaches, dead-letter queues, race conditions) to understand production operational challenges.

**For Distributed Systems Architects**
"The Order of Things: Why You Can't Have Both Speed and Strict Ordering" provides foundational understanding of CAP theorem tradeoffs. Follow with the distributed locking and predictable identifiers posts to see practical coordination patterns.

**For Platform Engineers**
The Kafka internals series (consumer protocol, offset tracking, producer writes) offers implementation-level understanding. Pair with the messaging patterns posts (checkpointing, multi-tenancy, deduplication) for operational concerns.

**For Engineering Managers**
The culture cluster addresses organizational challenges: quality assurance roles, platform team dysfunction, communication skills for architects, and pushing back on cargo-cult practices. "Business Won't Let Me" tackles professional responsibility.

**For Open Source Maintainers**
"Why Open Source Isn't Always Fair" and the cost management posts provide candid discussion of sustainability economics and dual-licensing strategies often absent from technical discourse.

## Links to Weekly Issues

While this knowledge base focuses on original articles, Architecture Weekly primarily publishes weekly link roundups curating content from across the software architecture community. The full archive of 190+ weekly issues is available at [https://www.architecture-weekly.com/archive](https://www.architecture-weekly.com/archive).

## Related Resources

**Author's Main Blog:** [event-driven.io](https://event-driven.io)
**Emmett Framework:** [GitHub - event-driven-io/emmett](https://github.com/event-driven-io/emmett)
**Pongo Project:** [GitHub - event-driven-io/pongo](https://github.com/event-driven-io/pongo)
**Podcast:** Architecture Weekly includes audio episodes with industry practitioners
**Community:** Paid subscribers gain access to a private Discord community and live webinars

