---
type: article
title: "On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer"
description: "Identifies a critical race condition in event-driven read model rebuilds where events appended in uncommitted transactions may skip projection during rebuild but commit after the rebuild completes, leaving them unprojected."
resource: https://www.architecture-weekly.com/p/on-rebuilding-read-models-dead-letter
cluster: event-driven-architecture
tags: ["read-models", "messaging", "race-conditions", "stream-processing"]
published: 2026-01
timestamp: 2026-07-05
---
# On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer

> Identifies a critical race condition in event-driven read model rebuilds where events appended in uncommitted transactions may skip projection during rebuild but commit after the rebuild completes, leaving them unprojected.

## Key Facts
- Accept what you can't control and focus on what you can—transient inconsistency is acceptable if properly tracked
- Record skipped events in a system messages table during the same transaction for guaranteed visibility
- Use PostgreSQL's outbox pattern transaction visibility rules for reliable skip record processing
- Support partitioning and archival of old skip records for long-term audit trails
- Make the invisible visible through dedicated observability for transition periods
- Sometimes the best solution is to embrace rather than fight distributed systems characteristics

## Summary
Identifies a critical race condition in event-driven read model rebuilds where events appended in uncommitted transactions may skip projection during rebuild but commit after the rebuild completes, leaving them unprojected. The author traces three failed engineering attempts to prevent this timing window—waiting for in-flight transactions, transaction ID boundaries, and exclusive locking—each creating new problems rather than solving the core issue. Instead of preventing skips, the recommended approach makes them visible and recoverable by recording skipped events in a dedicated system messages table during the same transaction as event appends, then draining these skip records after rebuild completes. This mirrors standard messaging patterns where dead-letter queues handle unprocessable messages, accepting that transient inconsistency may occur while ensuring skipped events are tracked, processed, and recoverable.

## Links
- [Source](https://www.architecture-weekly.com/p/on-rebuilding-read-models-dead-letter) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
