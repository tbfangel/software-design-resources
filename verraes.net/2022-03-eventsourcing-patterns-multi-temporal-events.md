---
type: article
title: "Eventsourcing Patterns: Multi-temporal Events"
description: "Domain events typically carry a single timestamp for when they were recorded in the eventstore, but the actual time an event occurred may differ from when it was captured."
resource: https://verraes.net/2022/03/multi-temporal-events/
tags: ["event-sourcing-cqrs", "temporal-modeling", "event-payload", "domain-events", "timestamps", "gdpr"]
published: 2022-03
timestamp: 2026-07-05
---
# Eventsourcing Patterns: Multi-temporal Events

> Domain events typically carry a single timestamp for when they were recorded in the eventstore, but the actual time an event occurred may differ from when it was captured.

## Key Facts
- Separate occurrence time from recording time by including domain-specific timestamp properties in event payloads
- Use meaningful, domain-specific property names rather than relying on metadata timestamps
- Even events without special timestamping requirements benefit from this pattern for consistency and decoupling
- This pattern facilitates domain evolution without requiring consumers to change their reliance on metadata

## Summary
Domain events typically carry a single timestamp for when they were recorded in the eventstore, but the actual time an event occurred may differ from when it was captured. The multi-temporal events pattern distinguishes between when something happened and when it was recorded by adding domain-specific timestamp properties to event payloads. For example, a bank transaction event should track both when the transaction occurred and when the statement was received. This approach decouples infrastructure concerns (recording time) from domain concerns (occurrence time), improves consumer independence, and enables evolution as domain understanding deepens.

## Links
- [Source](https://verraes.net/2022/03/multi-temporal-events/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
- [Eventsourcing Patterns: Migration Events in a Ghost Context](/verraes.net/2019-06-eventsourcing-patterns-migration-events-in-a-ghost-context.md)
