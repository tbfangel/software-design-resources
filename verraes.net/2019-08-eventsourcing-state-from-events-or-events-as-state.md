---
type: article
title: "Eventsourcing: State from Events or Events as State?"
description: "This article clarifies the distinction between two related but different concepts."
resource: https://verraes.net/2019/08/eventsourcing-state-from-events-vs-events-as-state/
tags: ["event-sourcing-cqrs", "event-sourcing-definition", "projections", "stream-processing", "aggregates", "constraints"]
published: 2019-08
timestamp: 2026-07-05
---
# Eventsourcing: State from Events or Events as State?

> This article clarifies the distinction between two related but different concepts.

## Key Facts
- Projections represent "state from events," which is a common pattern but different from eventsourcing
- True eventsourcing requires events as the single source of truth with constraints enforced on new events
- The distinction helps prevent confusion when designing systems and applying eventsourcing patterns
- Understanding this conceptual boundary clarifies what architectural choices are appropriate for different problems

## Summary
This article clarifies the distinction between two related but different concepts. "State from Events" means taking an existing event stream (regardless of origin) and projecting it into state—this is what projections, real-time analytics, and stream processing do, and no new events are added. "Events as State" means events are the single source of truth; new events are constrained by business rules that depend on previous events as input. The post proposes a precise definition of eventsourcing: a system is eventsourced when the single source of truth is a persisted history of the system's events, and that history is taken into account for enforcing constraints on new events. This distinction matters because many terms already exist for the first concept, while the second truly represents eventsourcing.

## Links
- [Source](https://verraes.net/2019/08/eventsourcing-state-from-events-vs-events-as-state/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing Patterns: Migration Events in a Ghost Context](/verraes.net/2019-06-eventsourcing-patterns-migration-events-in-a-ghost-context.md)
