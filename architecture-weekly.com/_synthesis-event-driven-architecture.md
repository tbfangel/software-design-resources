---
type: synthesis
title: "Event-Driven Architecture & Event Sourcing"
description: "This cluster explores event-driven architecture patterns, event sourcing fundamentals, read model management, and handling the challenges of eventual consistency and out-of-order events in distributed systems."
cluster: event-driven-architecture
timestamp: 2026-07-05
---
# Event-Driven Architecture & Event Sourcing

> This cluster explores event-driven architecture patterns, event sourcing fundamentals, read model management, and handling the challenges of eventual consistency and out-of-order events in distributed systems.

## Key Insights

**Embrace eventual consistency through design, not workarounds.** Rather than fighting distributed systems' asynchronous nature, design for it from the start. External events should be summary snapshots encoding final state, not granular operation sequences. Internal events can be detailed, but expose only what other modules need. This separation transforms coupling into autonomy while accepting that perfect ordering is neither achievable nor necessary.

**Read model rebuilds are production operations, not maintenance tasks.** Safely rebuilding projections requires hybrid strategies: combine PostgreSQL advisory locks (for performance) with persistent status columns (for resilience), use dead-letter queues to capture skipped events during transitions, and accept that transient inconsistency will occur. The goal isn't preventing every edge case but ensuring recovery mechanisms exist when they inevitably happen.

**Out-of-order events are features, not bugs.** Distributed systems deliver events in unpredictable sequences due to clock skew, network delays, and partition boundaries. Phantom records—read models with optional fields accumulating data as events arrive—accommodate this reality. Track data quality status ("partial," "sufficient," "complete") rather than rejecting incomplete information. Generate clean internal events only after sufficient external data assembles.

**Anti-patterns emerge from fighting system characteristics.** Requeuing Roulette (putting failed messages back into queues hoping for correct ordering) tries to cheat fundamental distributed systems trade-offs. Instead, use broker features designed for ordering guarantees: message group IDs in SQS, sessions in Azure Service Bus, partitioning in Kafka, or phantom records that process messages as they arrive and act when prerequisites are satisfied.

**Semantics matter more than schemas.** EventCatalog and similar tools exist because JSON schemas capture technical structure but fail to convey why events exist and what they mean for the business. Documentation should preserve the "why" from event storming sessions—business context, naming conventions, and design intent—not just the "what" of field definitions. This organizational knowledge scales governance and reduces guesswork.

---

## Related
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
- [On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer](/architecture-weekly.com/2026-01-on-rebuilding-read-models-dead-letter.md)
- [Rebuilding Event-Driven Read Models in a Safe and Resilient Way](/architecture-weekly.com/2026-01-rebuilding-event-driven-read-models.md)
- [Dealing with Race Conditions in Event-Driven Architecture with Read Models](/architecture-weekly.com/2025-10-dealing-with-race-conditions-in-event.md)
- [Requeuing Roulette in Event-Driven Architecture and Messaging](/architecture-weekly.com/2025-11-requeuing-roulette-in-event-driven.md)
- [Event Modelling Anti-Patterns](/architecture-weekly.com/2025-10-new-recording-on-event-modelling.md)
- [Documenting Event-Driven Architecture](/architecture-weekly.com/2024-documenting-event-driven-architecture.md)
- [Ordering, Grouping and Consistency in Messaging Systems](/architecture-weekly.com/2024-ordering-grouping-and-consistency.md)
- [Anti-patterns in event modelling - Passive-Aggressive Events](/architecture-weekly.com/2026-04-passive-aggresive-event.md)
