---
type: synthesis
title: "Event Sourcing & CQRS"
description: "This cluster explores Event Sourcing and Command Query Responsibility Segregation architectures through practical patterns, testing strategies, and theoretical foundations."
tags: ["event-sourcing-cqrs"]
timestamp: 2026-07-05
---
# Event Sourcing & CQRS

> This cluster explores Event Sourcing and Command Query Responsibility Segregation architectures through practical patterns, testing strategies, and theoretical foundations.

## Key Insights

**"State from events" and "events as state" are fundamentally different things.** Projecting an event stream into a read model is a common, useful pattern — but it's not Event Sourcing. True Event Sourcing means the event history *is* the source of truth, and new events are constrained by that history. Conflating the two leads to architectural confusion.

**CQRS is best understood as a set of composable pure functions.** Protection (history + command → events), Interpretation (events → state), Intention (state → command), and Automation (events → command) describe the four building blocks. Framing it this way enables deterministic reasoning, independent testing, and clearer responsibilities for each component.

**Test at the domain abstraction level, using the ubiquitous language.** Given-When-Then tests that operate on domain events and commands — not on internal state — are more durable and more meaningful. Tests should change only when the domain changes, not when implementation details change.

**Event-sourced systems create new obligations around history.** Decisions recorded at a point in time must be preserved even if the rules change — otherwise recalculation lies about the past. Sensitive data needs special handling (crypto-shredding or forgettable payloads) since the event log is immutable. Multi-temporal events must distinguish when something happened from when it was recorded.

**Legacy migration requires honesty about the past.** Rather than force-fitting legacy data into a new domain model, treat the legacy system as its own bounded context with its own language. Migration events use that legacy language explicitly, and the "ghost context" remains a first-class concept even after the implementation is gone.

---

## Related
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
- [Eventsourcing Patterns: Migration Events in a Ghost Context](/verraes.net/2019-06-eventsourcing-patterns-migration-events-in-a-ghost-context.md)
- [Eventsourcing Patterns: Decision Tracking](/verraes.net/2019-05-eventsourcing-patterns-decision-tracking.md)
- [Eventsourcing Patterns: Crypto-Shredding](/verraes.net/2019-05-eventsourcing-patterns-crypto-shredding.md)
- [Eventsourcing Patterns: Forgettable Payloads](/verraes.net/2019-05-eventsourcing-patterns-forgettable-payloads.md)
- [A Functional Foundation for CQRS/ES](/verraes.net/2014-05-a-functional-foundation-for-cqrs-es.md)
- [Fighting Bottlenecks with CQRS](/verraes.net/2013-12-fighting-bottlenecks-with-cqrs.md)
- [Practical Event Sourcing](/verraes.net/2014-03-practical-event-sourcing.md)
- [Form, Command, and Model Validation](/verraes.net/2015-02-form-command-and-model-validation.md)
- [Decoupling the Model from the Framework](/verraes.net/2014-09-decoupling-the-model-from-the-framework.md)
- [Decoupling (Symfony2) Forms from Entities](/verraes.net/2013-04-decoupling-symfony2-forms-from-entities.md)
