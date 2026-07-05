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

1. **[Event-Driven Architecture & Event Sourcing](_synthesis-event-driven-architecture.md)** — Event sourcing fundamentals, read model management, handling out-of-order events, eventual consistency, documentation practices, and ordering guarantees (11 posts)

2. **[Messaging Systems & Kafka](_synthesis-messaging-and-kafka.md)** — Kafka internals (consumer protocol, offset tracking, producer mechanics), message processing patterns, multi-tenancy, checkpointing, deduplication, and the distinction between messaging and event-driven architecture (10 posts)

3. **[PostgreSQL & Database Patterns](_synthesis-databases-and-postgresql.md)** — PostgreSQL-specific features (partitioning, logical replication, JSONB, advisory locks), query complexity management, write-ahead logs, ledger database alternatives, and unconventional uses of cloud storage (9 posts)

4. **[Distributed Systems & Concurrency](_synthesis-distributed-systems.md)** — Distributed locking strategies, coordination mechanisms, workflow engines, ordering vs. performance tradeoffs, predictable identifiers (URNs), and secondary index complexity in specialized storage (6 posts)

5. **[Architecture Patterns & System Design](_synthesis-architecture-patterns.md)** — CQRS and Vertical Slices (semantic diffusion), monolith-to-microservices strategies, modular design principles, frontend-backend integration, state management (React Query), collaborative design, and code design philosophy (11 posts)

6. **[Observability & System Quality](_synthesis-observability.md)** — Observability strategies, measurement practices, OpenTelemetry implementation, modern tracing approaches, defining success metrics (killer metrics), performance benchmarking, and transitioning from monitoring to understanding (8 posts)

7. **[Software Engineering & Team Culture](_synthesis-engineering-culture.md)** — AI productivity claims, open-source sustainability, QA roles, resilience theory, EventStorming facilitation, conference speaking, learning multiple languages, professional responsibility, communication skills, platform teams, trunk-based development tradeoffs, technical debt critique, and Papers We Love discussions (25 posts)

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

---

## Posts


### architecture-patterns  ·  [synthesis](_synthesis-architecture-patterns.md)

- [Frontend Architecture, Backend Architecture, or Just Architecture?](2024-frontent-architecture-backend-architecture.md)
- [Monolith-First: Are You Sure?](2024-monolith-first-are-you-sure.md)
- [React Query: A Solution for Frontend State Management](2024-react-query-a-solution-for-frontend.md)
- [So You Want to Break Down a Monolith?](2024-so-you-want-to-break-down-monolith.md)
- [Start Alone, Then Together: Why Software Modelling Needs Solitary Brainstorming](2024-start-alone-then-together-why-software.md)
- [Compilation Isn't Just for Programming Languages](2025-09-compilation-isnt-just-for-programming.md)
- [My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion](2025-09-my-thoughts-on-vertical-slices-cqrs.md)
- [Sneaky Code Bites Back](2025-10-sneaky-code-bites-back.md)
- [Yoda Principle for better integrations](2026-04-yoda-principle-for-better-integrations.md)
- [On mashing up modelling techniques for fun and profit](2026-05-on-mashing-up-modelling-techniques.md)

### databases-and-postgresql  ·  [synthesis](_synthesis-databases-and-postgresql.md)

- [Building Your Own Ledger Database](2024-building-your-own-ledger-database.md)
- [PostgreSQL JSONB: Powerful Storage for Semi-Structured Data](2024-postgresql-jsonb-powerful-storage.md)
- [The Write-Ahead Log: A Foundation for Reliability](2024-the-write-ahead-log-a-foundation.md)
- [Using S3, But Not the Way You Expected](2024-using-s3-but-not-the-way-you-expected.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](2025-09-just-use-sql-they-say-or-on-how-accidental.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](2025-09-postgresql-partitioning-logical-replication.md)
- [How I Cheated on Transactions](2026-02-how-i-cheated-on-transactions.md)
- [Parse, Don't Guess](2026-03-parse-dont-guess.md)
- [How soon is now in PostgreSQL?](2026-05-how-soon-is-now-in-postgresql.md)

### distributed-systems  ·  [synthesis](_synthesis-distributed-systems.md)

- [Distributed Locking: A Practical Guide](2024-distributed-locking-a-practical-guide.md)
- [Locks, Queues and Business Workflows Processing](2024-locks-queues-and-business-workflows.md)
- [Predictable Identifiers: Enabling Autonomous Communication](2024-predictable-identifiers-enabling.md)
- [Secondary Indexes and the Specialized Storage Dilemma](2024-secondary-indexes-and-the-specialized.md)
- [The Order of Things: Why You Can't Have Both Speed and Strict Ordering](2024-the-order-of-things-why-you-cant.md)
- [Workflow Engine Design Proposal for Emmett](2024-workflow-engine-design-proposal-tell.md)

### engineering-culture  ·  [synthesis](_synthesis-engineering-culture.md)

- [Business Won't Let Me and Other Lies We Tell Ourselves](2024-business-wont-let-me-and-other-lies.md)
- [Do We Still Need the QA Role?](2024-do-we-still-need-the-qa-role.md)
- [Don't Oversell Ideas: Trunk-Based Development Edition](2024-dont-oversell-ideas-trunk-based-development.md)
- [Hints on Getting to Speak at Conferences](2024-hints-on-getting-to-speak-at-conferences.md)
- [On Getting the Meaningful Discussions](2024-on-getting-the-meaningful-discussions.md)
- [Papers We Love #1: Sagas by Hector Garcia-Molina](2024-papers-we-love-1-sagas-hector-garcia.md)
- [Papers We Love #2: How Do Committees Invent? (Conway's Law)](2024-papers-we-love-2-how-do-committees.md)
- [Residuality Theory: A Rebellious Take on Resilience](2024-residuality-theory-a-rebellious-take.md)
- [Show Me the Money: Practically Navigating Cloud Costs](2024-show-me-the-money-practically-navigating.md)
- [Tech Debt Doesn't Exist, But Trade-Offs Do](2024-tech-debt-doesnt-exist-but-trade.md)
- [The Underestimated Power of Hot Spots and Notes in EventStorming](2024-the-underestimated-power-of-hot-spots.md)
- [Thoughts on Platforms, Core Teams, and Organizational Decay](2024-thoughts-on-platforms-core-teams.md)
- [TypeScript Migrates to Go: What's Really Behind the Speed Gains](2024-typescript-migrates-to-go-whats-really.md)
- [We Are No Superhumans](2024-we-are-no-superhumans.md)
- [What We Don't Know That We Don't Know](2024-what-we-dont-know-that-we-dont-know.md)
- [Why We Should Learn Multiple Programming Languages](2024-why-we-should-learn-multiple-programming.md)
- [Requiem for a 10x Engineer Dream](2025-09-requiem-for-a-10x-engineer-dream.md)
- [Why Open Source Isn't Always Fair](2025-09-why-open-source-isnt-always-fair.md)
- [Architecture Weekly is 5 Years Old!](2025-12-architecture-weekly-is-5-years-old.md)
- [Interactive Rubber Ducking with GenAI](2026-03-interactive-rubber-ducking-with-genai.md)
- [The End of Coding? Wrong Question](2026-03-the-end-of-coding-wrong-question.md)
- [The one where Oskar explains Example Mapping](2026-03-the-one-where-oskar-explains-example.md)
- [Borys had the best dribbling](2026-05-borys-had-the-best-dribbling.md)
- [Don't overestimate domain expertise](2026-05-dont-overestimate-domain-expertise.md)
- [You can fork a package, but can you own it?](2026-06-you-can-fork-a-package-but-can-you.md)

### event-driven-architecture  ·  [synthesis](_synthesis-event-driven-architecture.md)

- [Practical Introduction to Event Sourcing](2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](2024-dealing-with-eventual-consistency.md)
- [Documenting Event-Driven Architecture](2024-documenting-event-driven-architecture.md)
- [Ordering, Grouping and Consistency in Messaging Systems](2024-ordering-grouping-and-consistency.md)
- [Dealing with Race Conditions in Event-Driven Architecture with Read Models](2025-10-dealing-with-race-conditions-in-event.md)
- [Event Modelling Anti-Patterns](2025-10-new-recording-on-event-modelling.md)
- [Handling Events Coming in an Unknown Order](2025-11-handling-events-coming-in-an-unknown.md)
- [Requeuing Roulette in Event-Driven Architecture and Messaging](2025-11-requeuing-roulette-in-event-driven.md)
- [On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer](2026-01-on-rebuilding-read-models-dead-letter.md)
- [Rebuilding Event-Driven Read Models in a Safe and Resilient Way](2026-01-rebuilding-event-driven-read-models.md)
- [Anti-patterns in event modelling - Passive-Aggressive Events](2026-04-passive-aggresive-event.md)

### messaging-and-kafka  ·  [synthesis](_synthesis-messaging-and-kafka.md)

- [Deduplication in Distributed Systems](2024-deduplication-in-distributed-systems.md)
- [How a Kafka-Like Producer Writes Messages](2024-how-a-kafka-like-producer-writes.md)
- [How Does Kafka Know What Was the Last Processed Message?](2024-how-does-kafka-know-what-was-the.md)
- [Kafka Consumers: Under the Hood of Message Processing](2024-kafka-consumers-under-the-hood-of.md)
- [Understanding Kafka's Consumer Protocol](2024-understanding-kafkas-consumer-protocol.md)
- [On Messaging and Distributed Systems with Ian Cooper](2025-10-on-messaging-and-distributed-systems.md)
- [Checkpointing the Message Processing](2025-12-checkpointing-the-message-processing.md)
- [Consumers, Projectors, Reactors and All That Messaging Jazz in Emmett](2025-12-consumers-projectors-reactors-and.md)
- [Multi-Tenancy and Dynamic Messaging Workload Distribution](2025-12-multi-tenancy-and-dynamic-messaging.md)
- [Announcing Strictland - new contract testing library for message compatibility](2026-06-announcing-strictland-new-contract.md)

### observability  ·  [synthesis](_synthesis-observability.md)

- [Applying Observability: From Strategy to Practice with Hazel Weakly](2024-applying-observability-from-strategy.md)
- [Defining Your Paranoia Level: Navigating New Technology Adoption](2024-defining-your-paranoia-level-navigating.md)
- [Killer Metrics: Or Why You Should Measure Feature Success](2024-killer-metrics-or-why-you-should.md)
- [Making Your System Observability Predictable](2024-making-your-system-observability.md)
- [Talk is Cheap, Show Me the Numbers: Benchmarking for Performance](2024-talk-is-cheap-show-me-the-numbers.md)
- [When Logs and Metrics Aren't Enough: Discovering Modern Observability](2024-when-logs-and-metrics-arent-enough.md)
- [Why to Measure and Make Our System Observable](2024-why-to-measure-and-make-our-system.md)
- [Vibing, Harness and OODA loop](2026-04-vibing-harness-and-ooda-loop.md)
