---
type: article
title: "Form, Command, and Model Validation"
description: "This article distinguishes three completely independent validation concerns: form validation (UX concern), command validation (message concern), and model validation (business rule concern)."
tags: ["event-sourcing-cqrs", "validation-layers", "separation-of-concerns", "commands", "forms", "domain-models"]
published: 2015-02
timestamp: 2026-07-05
---
# Form, Command, and Model Validation

> This article distinguishes three completely independent validation concerns: form validation (UX concern), command validation (message concern), and model validation (business rule concern).

## Key Facts
- Form validation is a UX concern; command validation is a message contract concern; model validation protects business rules
- Each layer serves different purposes and should be optimized independently
- Domain models should be decoupled from framework form components and validation systems
- Commands use Value Objects to guarantee their own consistency before reaching the model

## Summary
This article distinguishes three completely independent validation concerns: form validation (UX concern), command validation (message concern), and model validation (business rule concern). Form validation is for user experience—catching the most common mistakes using client-side validation, with optional server-side checks for stateful data like username uniqueness. Command validation ensures the message itself is well-formed (does "birthday" look like a date?), using Value Objects for consistency. Model validation protects the model's invariants and business rules, relying on validated commands to be well-formed. Separating these concerns allows frameworks to remain orthogonal to domain models, avoiding the trap where form components corrupt domain design. This enables transport of domain logic across different UIs or APIs without modification.

## Links
- _Source URL not yet recovered (see migration report)._

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
