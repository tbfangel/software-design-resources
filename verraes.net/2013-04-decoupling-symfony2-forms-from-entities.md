---
type: article
title: "Decoupling (Symfony2) Forms from Entities"
description: "This article demonstrates how form libraries' CRUD-oriented design violates domain model boundaries by expecting setters and flexible constructors."
tags: ["event-sourcing-cqrs", "forms", "entities", "crud", "commands", "symfony", "encapsulation"]
published: 2013-04
timestamp: 2026-07-05
---
# Decoupling (Symfony2) Forms from Entities

> This article demonstrates how form libraries' CRUD-oriented design violates domain model boundaries by expecting setters and flexible constructors.

## Key Facts
- Commands decouple forms from domain entities, preserving domain invariants and encapsulation
- Task-based operations (hire, promote) map naturally to explicit Command objects
- Forms should not directly manipulate domain entities or expect specific setter conventions
- CommandHandlers translate Commands into domain method invocations, maintaining separation of concerns

## Summary
This article demonstrates how form libraries' CRUD-oriented design violates domain model boundaries by expecting setters and flexible constructors. The solution uses the Gang of Four Command pattern to create explicit command objects (HireEmployeeCommand, PromoteEmployeeCommand) that match the semantic operations of the domain. Forms bind to Commands rather than Entities, preserving domain invariants—employees are "hired" (not "created"), and "promoted" (not edited). The Command becomes a DTO that can represent form input and can be used to invoke domain methods without setters or reflection. A CommandHandler translates the command into domain method invocations, separating concerns between form handling and domain logic.

## Links
- _Source URL not yet recovered (see migration report)._

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
