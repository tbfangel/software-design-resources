---
type: article
title: "Handling Events Coming in an Unknown Order"
description: "Addresses how to handle events that arrive out of order when you don't know what events should come or in what sequence."
resource: https://www.architecture-weekly.com/p/handling-events-coming-in-an-unknown
cluster: event-driven-architecture
tags: ["message-processing", "versioning", "event-driven-architecture"]
published: 2025-11
timestamp: 2026-07-05
---
# Handling Events Coming in an Unknown Order

> Addresses how to handle events that arrive out of order when you don't know what events should come or in what sequence.

## Key Facts
- Design complete, summary-level external events that convey final state rather than granular operation sequences
- Use separate internal/external topics (e.g., 'carts:events:int' vs. 'carts:events:out') for different communication types
- Implement revision tracking with monotonic revision numbers generated via optimistic concurrency patterns
- Accept incomplete information gracefully by building systems that accumulate pending events and process them once completeness is achieved
- Understand that revision-based ordering works perfectly for individual records but cannot solve cross-record correlation challenges
- Balance complexity vs. ordering guarantees when choosing between internal/external event separation and simpler approaches

## Summary
Addresses how to handle events that arrive out of order when you don't know what events should come or in what sequence. The primary solution separates internal and external events: internal events can be granular and detailed, while external events become summarized snapshots—"Summary Events"—that expose only information other modules need. This separation allows publishing final states rather than detailed sequences, reducing coupling between modules. When you cannot control event publishing, monotonic revision numbers provide gapless sequence tracking where each operation increments a revision tied to a specific record. The implementation uses pending commands with revision metadata: incoming events map to pending commands, a filter identifies consecutive processable commands, commands execute sequentially after gaps are filled, and processed commands are removed while unprocessable commands remain pending.

## Links
- [Source](https://www.architecture-weekly.com/p/handling-events-coming-in-an-unknown) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer](/architecture-weekly.com/2026-01-on-rebuilding-read-models-dead-letter.md)
