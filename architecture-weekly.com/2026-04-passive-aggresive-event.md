---
type: article
title: "Anti-patterns in event modelling - Passive-Aggressive Events"
description: "Oskar Dudycz argues that treating all communication in event-driven systems as events produces \"passive-aggressive\" designs where components implicitly expect specific behaviors without stating intent."
resource: https://www.architecture-weekly.com/p/passive-aggresive-event
cluster: event-driven-architecture
tags: ["event-modelling", "anti-patterns", "cqrs", "orchestration", "coupling", "sagas"]
published: 2026-04
timestamp: 2026-07-05
---
# Anti-patterns in event modelling - Passive-Aggressive Events

> Oskar Dudycz argues that treating all communication in event-driven systems as events produces "passive-aggressive" designs where components implicitly expect specific behaviors without stating intent.

## Key Facts
- Events masquerading as commands create implicit expectations; make orchestration explicit with coordinators, sagas, or workflows
- Distinguish events (immutable facts), commands (explicit, rejectable intent), and documents (state snapshots)
- Use blocking commands for critical paths (payment, shipment); reserve events for non-essential services like notifications
- Explicit command exposure establishes clear API contracts and genuine service autonomy instead of hidden coupling
- Use Example Mapping to uncover failure scenarios during design rather than assuming "I already did my job"
- Maintain centralized business-process observability to avoid uncoordinated "parliamentary" reactions

## Summary
Oskar Dudycz argues that treating all communication in event-driven systems as events produces "passive-aggressive" designs where components implicitly expect specific behaviors without stating intent. The root problem is conflating three distinct message types: events announce facts and expect no response, commands express explicit intent that can be executed or rejected, and documents convey state snapshots. Modelling everything as events hides critical dependencies (like payment or shipment failures), obscures business logic, and creates hidden coupling. Effective design distinguishes blocking critical paths—which need explicit commands and orchestrators/sagas—from non-blocking supplementary processes suited to events, and models failure scenarios transparently (e.g. via Example Mapping).

## Links
- [Source](https://www.architecture-weekly.com/p/passive-aggresive-event) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
