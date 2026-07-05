---
type: article
title: "Dealing with Race Conditions in Event-Driven Architecture with Read Models"
description: "In distributed event-driven systems, events frequently arrive out of order across service boundaries, causing handler failures when references don't yet exist."
resource: https://www.architecture-weekly.com/p/dealing-with-race-conditions-in-event
tags: ["event-driven-architecture", "race-conditions", "out-of-order-events", "phantom-records", "read-models", "eventual-consistency"]
published: 2025-10
timestamp: 2026-07-05
---
# Dealing with Race Conditions in Event-Driven Architecture with Read Models

> In distributed event-driven systems, events frequently arrive out of order across service boundaries, causing handler failures when references don't yet exist.

## Key Facts
- Accept distributed chaos through local interpretation rather than fighting clock skew and ordering issues
- Create documents with sparse data rather than waiting for complete information before storing anything
- Track data quality status to make uncertainty visible and enable appropriate downstream handling
- Build Anti-Corruption Layers using projections to translate external rumors into trustworthy internal facts
- Process events independently without enforcing strict ordering, allowing gradual state accumulation
- Understand when this works (eventual consistency acceptable) versus struggles (perfect consistency required)

## Summary
In distributed event-driven systems, events frequently arrive out of order across service boundaries, causing handler failures when references don't yet exist. The author argues this isn't a flaw to eliminate but a characteristic to accommodate, distinguishing between internal events (facts your system owns) and external events (rumors from other systems). The proposed solution uses read models with optional fields—"phantom records"—that accumulate data as events arrive in any sequence, treating incomplete documents as valid intermediate states. Implementation involves defining optional properties for external data, implementing an evolve function that updates whatever fields an arriving event provides, ignoring events contradicting already-processed newer information, and generating internal events only after sufficient data exists. Track data quality status as "partial," "sufficient," or "complete" rather than rejecting incomplete information.

## Links
- [Source](https://www.architecture-weekly.com/p/dealing-with-race-conditions-in-event) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
