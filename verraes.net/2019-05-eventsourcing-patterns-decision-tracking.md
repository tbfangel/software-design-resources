---
type: article
title: "Eventsourcing Patterns: Decision Tracking"
description: "When a consumer applies business logic to events and makes a decision (whether to award a free hat, trigger an alert, etc.), the question arises: should that decision be stored as an event?"
resource: https://verraes.net/2019/05/eventsourcing-patterns-decision-tracking/
tags: ["event-sourcing-cqrs", "decision-tracking", "business-rules", "model-evolution", "event-store", "historical-accuracy"]
published: 2019-05
timestamp: 2026-07-05
---
# Eventsourcing Patterns: Decision Tracking

> When a consumer applies business logic to events and makes a decision (whether to award a free hat, trigger an alert, etc.), the question arises: should that decision be stored as an event?

## Key Facts
- Storing decision events preserves the historical record and protects against rule changes invalidating past decisions
- Without decision tracking, recalculating past decisions with new rules creates inaccuracy about the system's history
- Decision tracking is worth the effort when the decision has long-term consequences or affects business-critical processes
- Model Change Tracking tracks when rules themselves change, enabling correct historical recalculation

## Summary
When a consumer applies business logic to events and makes a decision (whether to award a free hat, trigger an alert, etc.), the question arises: should that decision be stored as an event? While the decision is technically redundant—it can be recalculated from the input events—not storing it creates a problem when business rules change. Recalculating with new rules produces different outcomes than the original decision, making the system lie about its own history. Decision Tracking solves this by persisting decision events, preserving the historical record of what was actually decided at the time, even if that decision was wrong. A related pattern, Model Change Tracking, records when the model or rules themselves change, enabling accurate recalculation using the version of logic that was active at the time.

## Links
- [Source](https://verraes.net/2019/05/eventsourcing-patterns-decision-tracking/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
