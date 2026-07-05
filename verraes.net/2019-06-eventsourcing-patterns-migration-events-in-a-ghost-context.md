---
type: article
title: "Eventsourcing Patterns: Migration Events in a Ghost Context"
description: "When replacing a legacy system with an eventsourced one, there's typically insufficient historical data in the legacy system to reconstruct the real history of domain events."
resource: https://verraes.net/2019/06/eventsourcing-patterns-migration-events-ghost-context/
tags: ["event-sourcing-cqrs", "legacy-migration", "bounded-contexts", "ghost-context", "conformist-pattern", "domain-modeling"]
published: 2019-06
timestamp: 2026-07-05
---
# Eventsourcing Patterns: Migration Events in a Ghost Context

> When replacing a legacy system with an eventsourced one, there's typically insufficient historical data in the legacy system to reconstruct the real history of domain events.

## Key Facts
- Migration events use the legacy system's ubiquitous language to preserve historical accuracy about what actually happened
- Treating legacy systems as bounded contexts enables higher-order reasoning about relationships between contexts
- Ghost Contexts allow legacy models to remain first-class concepts in the design even after the implementation disappears
- This approach reveals complexity rather than hiding it, making the system easier to understand for those familiar with the legacy component

## Summary
When replacing a legacy system with an eventsourced one, there's typically insufficient historical data in the legacy system to reconstruct the real history of domain events. Rather than force-fitting legacy data into the new domain model (which results in lying about the past) or maintaining hybrid persistence, the solution is to treat the legacy system as its own domain and use Migration Events that explicitly use the legacy system's ubiquitous language. A legacy customer import becomes LegacyCustomerWasImported, not a translated domain event. The legacy system's model can then be treated as a "Ghost Context"—a bounded context with language and internal consistency but no active implementation, existing only in traces within other bounded contexts.

## Links
- [Source](https://verraes.net/2019/06/eventsourcing-patterns-migration-events-ghost-context/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
