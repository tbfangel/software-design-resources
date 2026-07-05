---
type: presentation
title: "Fighting Bottlenecks with CQRS"
description: "A presentation on Command Query Responsibility Segregation at the first ResearchGate Developer Day in Berlin."
resource: https://verraes.net/2013/12/fighting-bottlenecks-with-cqrs/
cluster: event-sourcing-cqrs
tags: ["cqrs", "software-architecture", "performance", "scalability", "separation-of-concerns"]
published: 2013-12
timestamp: 2026-07-05
---
# Fighting Bottlenecks with CQRS

> A presentation on Command Query Responsibility Segregation at the first ResearchGate Developer Day in Berlin.

## Key Facts
- CQRS allows independent optimization of read and write models, eliminating bottlenecks from monolithic architectures
- Separating commands from queries enables clearer reasoning about each side of the system
- The architecture facilitates scaling read models independently through denormalization and caching strategies

## Summary
A presentation on Command Query Responsibility Segregation at the first ResearchGate Developer Day in Berlin. The talk explains how CQRS enables separate optimization of read and write models, addressing architectural bottlenecks. By splitting a single object into command (write) and query (read) responsibilities, systems gain flexibility to denormalize and independently tune each side. The presentation uses visual circular representations to illustrate CQRS relationships and benefits, making the concepts accessible to a broad audience.

## Links
- [Source](https://verraes.net/2013/12/fighting-bottlenecks-with-cqrs/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
