---
type: presentation
title: "Decoupling the Model from the Framework"
description: "A presentation demonstrating how to decouple domain models from web frameworks like Symfony."
resource: https://verraes.net/2014/09/decoupling-model-framework/
cluster: event-sourcing-cqrs
tags: ["coupling", "ux", "cqrs", "domain-modelling", "domain-driven-design"]
published: 2014-09
timestamp: 2026-07-05
---
# Decoupling the Model from the Framework

> A presentation demonstrating how to decouple domain models from web frameworks like Symfony.

## Key Facts
- Commands serve as an explicit API that decouples domain models from UI frameworks
- Task-based UI thinking (hire, promote) is more domain-aligned than CRUD thinking (create, edit)
- Domain models should require Commands to call methods, not rely on setters and automatic data mapping
- This approach enables true model independence and transport across multiple client types

## Summary
A presentation demonstrating how to decouple domain models from web frameworks like Symfony. When frameworks are designed around CRUD operations and automatic form-to-entity data mapping, they force domain models to expose setters and constructor flexibility that violate domain invariants. The solution uses Commands as an explicit API between the UI and domain—the form produces a HireEmployeeCommand or PromoteEmployeeCommand rather than trying to map directly to domain methods. Commands function as DTOs that can be used equally well for forms, REST APIs, or other clients, while domain models remain pure and independent of framework concerns.

## Links
- [Source](https://verraes.net/2014/09/decoupling-model-framework/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
