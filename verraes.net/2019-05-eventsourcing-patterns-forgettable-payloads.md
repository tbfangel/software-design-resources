---
type: article
title: "Eventsourcing Patterns: Forgettable Payloads"
description: "The Forgettable Payloads pattern removes sensitive information from event definitions and stores it in a separate database, with the event containing only a reference or URL."
resource: https://verraes.net/2019/05/eventsourcing-patterns-forgettable-payloads/
cluster: event-sourcing-cqrs
tags: ["data-privacy", "storage", "gdpr", "security"]
published: 2019-05
timestamp: 2026-07-05
---
# Eventsourcing Patterns: Forgettable Payloads

> The Forgettable Payloads pattern removes sensitive information from event definitions and stores it in a separate database, with the event containing only a reference or URL.

## Key Facts
- Separate sensitive payloads into a distinct store with controlled access, while keeping event metadata immutable
- This pattern enables GDPR compliance but sacrifices the single-source-of-truth property
- Consumers must never cache sensitive payloads locally, or implement listeners for deletion events to maintain consistency
- Associations and relationships between information can still enable identification even when direct sensitive data is deleted

## Summary
The Forgettable Payloads pattern removes sensitive information from event definitions and stores it in a separate database, with the event containing only a reference or URL. Consumers requiring sensitive data query the payload database, while the eventstore remains immutable. When deletion is requested, only the payload is removed; the event record remains intact. The payload can be deleted or replaced with fake data. This pattern breaks the concept of the eventstore as a single source of truth and introduces coupling since consumers must query a separate database. A critical weakness is that sensitive data must also be deleted from consumer systems that have cached it, requiring consumers to listen for deletion events and clean up locally.

## Links
- [Source](https://verraes.net/2019/05/eventsourcing-patterns-forgettable-payloads/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
