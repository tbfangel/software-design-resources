---
type: article
title: "Rebuilding Event-Driven Read Models in a Safe and Resilient Way"
description: "When event-driven systems evolve, read models need rebuilding without corrupting data or blocking concurrent operations."
resource: https://www.architecture-weekly.com/p/rebuilding-event-driven-read-models
tags: ["event-driven-architecture", "read-models", "distributed-locking", "postgresql-advisory-locks", "crash-recovery", "projection-management"]
published: 2026-01
timestamp: 2026-07-05
---
# Rebuilding Event-Driven Read Models in a Safe and Resilient Way

> When event-driven systems evolve, read models need rebuilding without corrupting data or blocking concurrent operations.

## Key Facts
- Combine advisory locks for performance with status columns for resilience across process failures
- Use shared locks for concurrent inline projections and exclusive locks for serialized rebuilds
- Implement dual checks in hot paths to prevent races without serializing all event appends
- Create new read models rather than modifying existing ones to reduce coupling and fragility
- Apply blue/green rebuild pattern by building new projections in parallel then switching query targets
- Leverage PostgreSQL's built-in advisory lock mechanism without requiring external infrastructure

## Summary
When event-driven systems evolve, read models need rebuilding without corrupting data or blocking concurrent operations. The author advocates a hybrid locking strategy combining PostgreSQL Advisory Locks (in-memory, session-scoped) with persistent status columns to survive connection failures. Multiple inline projections acquire shared locks enabling concurrent updates, while rebuilds acquire exclusive locks blocking inlines until completion. Inline projections must pass dual checks—acquiring shared advisory lock and confirming projection status is 'active'—before processing. If a rebuild process dies mid-operation, the advisory lock releases automatically but the status column persists 'rebuilding', allowing inlines to recognize this and skip processing while a restarted rebuild resumes from the last checkpoint.

## Links
- [Source](https://www.architecture-weekly.com/p/rebuilding-event-driven-read-models) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
