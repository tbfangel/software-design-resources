# Event-Driven Architecture & Event Sourcing

> Part of the [Architecture Weekly overview](overview.md)

This cluster explores event-driven architecture patterns, event sourcing fundamentals, read model management, and handling the challenges of eventual consistency and out-of-order events in distributed systems.

## Key Insights

**Embrace eventual consistency through design, not workarounds.** Rather than fighting distributed systems' asynchronous nature, design for it from the start. External events should be summary snapshots encoding final state, not granular operation sequences. Internal events can be detailed, but expose only what other modules need. This separation transforms coupling into autonomy while accepting that perfect ordering is neither achievable nor necessary.

**Read model rebuilds are production operations, not maintenance tasks.** Safely rebuilding projections requires hybrid strategies: combine PostgreSQL advisory locks (for performance) with persistent status columns (for resilience), use dead-letter queues to capture skipped events during transitions, and accept that transient inconsistency will occur. The goal isn't preventing every edge case but ensuring recovery mechanisms exist when they inevitably happen.

**Out-of-order events are features, not bugs.** Distributed systems deliver events in unpredictable sequences due to clock skew, network delays, and partition boundaries. Phantom records—read models with optional fields accumulating data as events arrive—accommodate this reality. Track data quality status ("partial," "sufficient," "complete") rather than rejecting incomplete information. Generate clean internal events only after sufficient external data assembles.

**Anti-patterns emerge from fighting system characteristics.** Requeuing Roulette (putting failed messages back into queues hoping for correct ordering) tries to cheat fundamental distributed systems trade-offs. Instead, use broker features designed for ordering guarantees: message group IDs in SQS, sessions in Azure Service Bus, partitioning in Kafka, or phantom records that process messages as they arrive and act when prerequisites are satisfied.

**Semantics matter more than schemas.** EventCatalog and similar tools exist because JSON schemas capture technical structure but fail to convey why events exist and what they mean for the business. Documentation should preserve the "why" from event storming sessions—business context, naming conventions, and design intent—not just the "what" of field definitions. This organizational knowledge scales governance and reduces guesswork.

---

### [Practical Introduction to Event Sourcing](https://www.architecture-weekly.com/p/practical-introduction-to-event-sourcing)
**Type:** Article
**Date:** 2023
**Tags/Topics:** Event Sourcing, Emmett Framework, TypeScript, Node.js, PostgreSQL

The article argues that Event Sourcing need not be intimidating or complex. Through Emmett—a Node.js/TypeScript framework—developers can build business-focused applications with events as their core pattern. Rather than storing only current state, systems capture all business events chronologically as an audit trail that becomes the source of truth. The framework reduces boilerplate code while maintaining TypeScript expressiveness, bridging the gap between theoretical simplicity and production-ready complexity. A 1.5-hour webinar demonstration covers event and aggregate modeling patterns, command handling, BDD testing, REST API construction, PostgreSQL-based event store persistence, and read model development.

**Key takeaways:**
- Start with Event Sourcing's initial elegance through proper tooling rather than building from scratch
- Embrace frameworks like Emmett that handle infrastructure concerns while letting developers focus on domain modeling
- Use behavior-driven design methodology to validate business logic clarity
- PostgreSQL integration demonstrates practical deployability without exotic storage requirements
- Business-centric modeling translates domain language directly into executable code

### [Dealing with Eventual Consistency](https://www.architecture-weekly.com/p/dealing-with-eventual-consistency)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Eventual Consistency, Predictable Identifiers, URNs, Cloud Storage, Asynchronous Processing

Accepting eventual consistency for file uploads—rather than forcing synchronous operations—improves user experience while leveraging cloud infrastructure effectively. Using predictable identifiers (URNs) enables this pattern without tight coupling between system components. URNs like `urn:files:1:CONSTRUCTION:SAFETY_CHECK:DAILY_INSPECTION:site-photo.jpg` encode context upfront, enabling modules to reference files without direct coupling. The practical flow involves clients generating URNs based on user context, backends validating permissions and returning pre-signed URLs, clients uploading directly to cloud storage, and background services reconciling upload status through periodic validation jobs. This "magic folder" pattern maps URN hierarchies to storage paths automatically, creating logical organization without explicit folder management.

**Key takeaways:**
- Decouple user experience from implementation by letting users continue working while uploads happen asynchronously
- Use convention-based routing where URN patterns replace explicit registration, reducing complexity
- Implement periodic reconciliation through background jobs that discover orphaned uploads and clean dead links
- Abstract storage providers so URNs hide whether files live in S3, Azure, or local disk, enabling easy migration
- Respect system constraints by working with distributed nature rather than fighting it
- Combine task-based UI, dumb pipes with smart endpoints, convention over configuration, and asynchronous reconciliation patterns

### [Handling Events Coming in an Unknown Order](https://www.architecture-weekly.com/p/handling-events-coming-in-an-unknown)
**Type:** Article
**Date:** 2025-11
**Tags/Topics:** Event Ordering, Out-of-Order Events, Revision Numbers, Message Processing, Event Architecture

Addresses how to handle events that arrive out of order when you don't know what events should come or in what sequence. The primary solution separates internal and external events: internal events can be granular and detailed, while external events become summarized snapshots—"Summary Events"—that expose only information other modules need. This separation allows publishing final states rather than detailed sequences, reducing coupling between modules. When you cannot control event publishing, monotonic revision numbers provide gapless sequence tracking where each operation increments a revision tied to a specific record. The implementation uses pending commands with revision metadata: incoming events map to pending commands, a filter identifies consecutive processable commands, commands execute sequentially after gaps are filled, and processed commands are removed while unprocessable commands remain pending.

**Key takeaways:**
- Design complete, summary-level external events that convey final state rather than granular operation sequences
- Use separate internal/external topics (e.g., 'carts:events:int' vs. 'carts:events:out') for different communication types
- Implement revision tracking with monotonic revision numbers generated via optimistic concurrency patterns
- Accept incomplete information gracefully by building systems that accumulate pending events and process them once completeness is achieved
- Understand that revision-based ordering works perfectly for individual records but cannot solve cross-record correlation challenges
- Balance complexity vs. ordering guarantees when choosing between internal/external event separation and simpler approaches

### [On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer](https://www.architecture-weekly.com/p/on-rebuilding-read-models-dead-letter)
**Type:** Article
**Date:** 2026-01
**Tags/Topics:** Read Models, Dead-Letter Queues, Race Conditions, Event Processing, System Messages

Identifies a critical race condition in event-driven read model rebuilds where events appended in uncommitted transactions may skip projection during rebuild but commit after the rebuild completes, leaving them unprojected. The author traces three failed engineering attempts to prevent this timing window—waiting for in-flight transactions, transaction ID boundaries, and exclusive locking—each creating new problems rather than solving the core issue. Instead of preventing skips, the recommended approach makes them visible and recoverable by recording skipped events in a dedicated system messages table during the same transaction as event appends, then draining these skip records after rebuild completes. This mirrors standard messaging patterns where dead-letter queues handle unprocessable messages, accepting that transient inconsistency may occur while ensuring skipped events are tracked, processed, and recoverable.

**Key takeaways:**
- Accept what you can't control and focus on what you can—transient inconsistency is acceptable if properly tracked
- Record skipped events in a system messages table during the same transaction for guaranteed visibility
- Use PostgreSQL's outbox pattern transaction visibility rules for reliable skip record processing
- Support partitioning and archival of old skip records for long-term audit trails
- Make the invisible visible through dedicated observability for transition periods
- Sometimes the best solution is to embrace rather than fight distributed systems characteristics

### [Rebuilding Event-Driven Read Models in a Safe and Resilient Way](https://www.architecture-weekly.com/p/rebuilding-event-driven-read-models)
**Type:** Article
**Date:** 2026-01
**Tags/Topics:** Read Models, Distributed Locking, PostgreSQL Advisory Locks, Crash Recovery, Projection Management

When event-driven systems evolve, read models need rebuilding without corrupting data or blocking concurrent operations. The author advocates a hybrid locking strategy combining PostgreSQL Advisory Locks (in-memory, session-scoped) with persistent status columns to survive connection failures. Multiple inline projections acquire shared locks enabling concurrent updates, while rebuilds acquire exclusive locks blocking inlines until completion. Inline projections must pass dual checks—acquiring shared advisory lock and confirming projection status is 'active'—before processing. If a rebuild process dies mid-operation, the advisory lock releases automatically but the status column persists 'rebuilding', allowing inlines to recognize this and skip processing while a restarted rebuild resumes from the last checkpoint.

**Key takeaways:**
- Combine advisory locks for performance with status columns for resilience across process failures
- Use shared locks for concurrent inline projections and exclusive locks for serialized rebuilds
- Implement dual checks in hot paths to prevent races without serializing all event appends
- Create new read models rather than modifying existing ones to reduce coupling and fragility
- Apply blue/green rebuild pattern by building new projections in parallel then switching query targets
- Leverage PostgreSQL's built-in advisory lock mechanism without requiring external infrastructure

### [Dealing with Race Conditions in Event-Driven Architecture with Read Models](https://www.architecture-weekly.com/p/dealing-with-race-conditions-in-event)
**Type:** Article
**Date:** 2025-10
**Tags/Topics:** Race Conditions, Out-of-Order Events, Phantom Records, Read Models, Eventual Consistency

In distributed event-driven systems, events frequently arrive out of order across service boundaries, causing handler failures when references don't yet exist. The author argues this isn't a flaw to eliminate but a characteristic to accommodate, distinguishing between internal events (facts your system owns) and external events (rumors from other systems). The proposed solution uses read models with optional fields—"phantom records"—that accumulate data as events arrive in any sequence, treating incomplete documents as valid intermediate states. Implementation involves defining optional properties for external data, implementing an evolve function that updates whatever fields an arriving event provides, ignoring events contradicting already-processed newer information, and generating internal events only after sufficient data exists. Track data quality status as "partial," "sufficient," or "complete" rather than rejecting incomplete information.

**Key takeaways:**
- Accept distributed chaos through local interpretation rather than fighting clock skew and ordering issues
- Create documents with sparse data rather than waiting for complete information before storing anything
- Track data quality status to make uncertainty visible and enable appropriate downstream handling
- Build Anti-Corruption Layers using projections to translate external rumors into trustworthy internal facts
- Process events independently without enforcing strict ordering, allowing gradual state accumulation
- Understand when this works (eventual consistency acceptable) versus struggles (perfect consistency required)

### [Requeuing Roulette in Event-Driven Architecture and Messaging](https://www.architecture-weekly.com/p/requeuing-roulette-in-event-driven)
**Type:** Article
**Date:** 2025-11
**Tags/Topics:** Message Requeuing, Anti-Patterns, Message Ordering, Distributed Systems, Queue Management

Identifies "Requeuing Roulette" as a risky anti-pattern where messages are put back into queues when processing fails, hoping they'll eventually process in correct order. This tries to cheat fundamental distributed systems trade-offs by maintaining strict ordering without sacrificing throughput. In classical messaging systems like RabbitMQ, requeued messages aren't guaranteed specific placement, and with multiple consumers messages can arrive out of order, creating cascading failures where the same messages are repeatedly rejected and requeued. The core issue stems from causal correlation—some messages depend on others while independent operations can process in parallel. Instead of relying on requeuing, use RabbitMQ routing keys and correlation IDs, AWS SQS message group IDs, Azure Service Bus sessions, Kafka partitioning, or phantom records that process messages as they arrive and act only when prerequisites are satisfied.

**Key takeaways:**
- Understand actual ordering requirements—perfect ordering is neither necessary nor worth its cost
- Accept that some eventual consistency is acceptable rather than fighting distributed systems nature
- Use tooling features designed for ordering guarantees instead of requeuing workarounds
- Recognize requeuing works only when messages are mostly uncorrelated and failures are rare
- Treat requeuing as temporary, acknowledging you'll eventually abandon it for proper solutions
- Embrace distributed systems trade-offs by choosing appropriate consistency mechanisms for your context

### [Event Modelling Anti-Patterns](https://www.architecture-weekly.com/p/new-recording-on-event-modelling)
**Type:** Presentation
**Date:** 2025-10
**Tags/Topics:** Event Modelling, Anti-Patterns, DDD Europe, Event-Driven Architecture Design

Recording from DDD Europe presenting event-driven architecture anti-patterns. The core claim is that proper event modelling effort pays dividends while neglecting it creates significant pain later, and knowing what not to do is often more valuable than knowing best practices alone. Anti-patterns covered include State Obsession (overemphasizing current state rather than tracking behavioral events), Property Sourcing (asking external systems for information instead of capturing what happened), CRUD Sourcing (treating event sourcing like traditional CRUD operations), and Clickbait Events (overly vague or poorly designed event definitions). The talk includes a case study about a project attempting to modernize legacy software into event-driven architecture, demonstrating how ignoring modelling practices leads to distributed monoliths and race conditions. Context acts as "the thin line between bad and good practices," meaning architectural choices depend on specific circumstances.

**Key takeaways:**
- Invest time in event modelling upfront to avoid expensive redesigns later
- Study anti-patterns alongside best practices to recognize red flags early
- Consider context when evaluating architectural decisions—no universal solutions exist
- Learn from others' mistakes through case studies to avoid repeating common errors
- Recognize that event-driven architecture requires different thinking than traditional CRUD approaches

### [Documenting Event-Driven Architecture](https://www.architecture-weekly.com/p/documenting-event-driven-architecture)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Documentation, EventCatalog, Event Discovery, Schema Management, Governance

Teams struggle with documenting event-driven systems because schemas capture technical structure but fail to convey semantic meaning—the "why" and business context behind events. EventCatalog addresses this as an open-source, technology-agnostic documentation tool designed specifically for event-driven architectures. It provides centralized event discovery, supports multiple schema formats, offers extensible architecture with plugins and generators, and enables semantic documentation alongside technical schemas. The tool goes beyond JSON schemas by capturing organizational knowledge from event storming and Domain-Driven Design sessions, documenting naming conventions, contextual meaning, and business implications—the discussions teams have during design. David Boyne's core insight: schemas can only go so far in conveying what events actually mean and why they exist.

**Key takeaways:**
- Implement documentation as part of design and development workflows, not as afterthought
- Capture semantic context alongside technical specifications to preserve design intent
- Use tooling like EventCatalog to scale governance practices across growing systems
- Share documented understanding across teams for better discoverability and reduced guesswork
- Transform event documentation from optional overhead into maintainable architecture practice

### [Ordering, Grouping and Consistency in Messaging Systems](https://www.architecture-weekly.com/p/ordering-grouping-and-consistency)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Message Ordering, Task Grouping, Queue Brokers, Idempotency, Distributed Systems

Distributed systems processing asynchronous messages face challenges with out-of-order arrival, duplicate handling, and concurrent operations breaking assumptions. The author argues grouping related operations enables sequential processing within groups while allowing parallel execution across groups. Existing approaches include Amazon SQS FIFO (groups by message group ID), Azure Service Bus (uses sessions with locks), Kafka (achieves grouping through partitioning with scalability tradeoffs), and RabbitMQ (lacks native grouping). The author's novel educational approach combines a Queue Broker's single-writer pattern with an idempotency key store, where tasks are enqueued with optional taskGroupId parameters and a "takeFirstAvailableItem" method finds eligible tasks without group IDs or whose groups aren't currently active. However, the author explicitly cautions this implementation is educational, not production-ready, due to linear search overhead, blocked task delays, and fairness issues.

**Key takeaways:**
- Grouping related operations allows sequential processing within groups while maintaining parallelism across groups
- Understand tradeoffs of existing solutions—SQS reduces throughput, Kafka limits consumers, RabbitMQ lacks native support
- Track active groups to prevent parallel execution within groups while allowing concurrent processing across groups
- Recognize educational implementations prioritize clarity over production robustness and performance
- For production systems, consider separate queues per group type to avoid linear search inefficiencies
- Balance ordering guarantees against throughput and scalability requirements for your specific use case

