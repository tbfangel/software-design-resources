---
type: article
title: "EventSourcing Testing Patterns"
description: "This article documents common testing patterns for eventsourced applications using Given-When-Then scenarios at the domain abstraction level."
resource: https://verraes.net/2023/05/eventsourcing-testing-patterns/
cluster: event-sourcing-cqrs
tags: ["testing", "event-sourcing", "cqrs", "projections", "deployment", "domain-driven-design"]
published: 2023-05
timestamp: 2026-07-05
---
# EventSourcing Testing Patterns

> This article documents common testing patterns for eventsourced applications using Given-When-Then scenarios at the domain abstraction level.

## Key Facts
- Tests should operate at the domain abstraction level using Ubiquitous Language and follow Given-When-Then patterns
- Command handlers, projections, and process managers each have distinct test scenarios
- Query-based projection tests are preferable to state-based tests, as they decouple implementation details from the test contract
- All tests should change if and only if the domain changes, not when internal implementation details change

## Summary
This article documents common testing patterns for eventsourced applications using Given-When-Then scenarios at the domain abstraction level. Testing command handlers involves verifying that given a history of events, when a command is received, then specific events are produced (or nothing, or an exception). Projections are tested by verifying that given events, when a query is asked, then the correct response is returned. Process managers are tested to verify they listen to events and produce appropriate outcomes—whether new events, commands, or I/O side effects. The post argues against testing projection state as an anti-pattern in domain-level testing, instead advocating for query-based tests that preserve API contracts while allowing implementation flexibility.

## Links
- [Source](https://verraes.net/2023/05/eventsourcing-testing-patterns/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
- [Eventsourcing Patterns: Migration Events in a Ghost Context](/verraes.net/2019-06-eventsourcing-patterns-migration-events-in-a-ghost-context.md)
