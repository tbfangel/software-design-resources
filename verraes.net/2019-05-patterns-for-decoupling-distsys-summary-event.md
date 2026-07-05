---
type: article
title: "Patterns for Decoupling in Distributed Systems: Summary Event"
description: "Instead of emitting many events during a process, emit a single Summary Event at the end containing only the final result."
resource: https://verraes.net/2019/05/patterns-for-decoupling-distsys-summary-event/
tags: ["messaging-distributed-systems", "decoupling", "events", "projections", "consumer-coupling"]
published: 2019-05
timestamp: 2026-07-05
---
# Patterns for Decoupling in Distributed Systems: Summary Event

> Instead of emitting many events during a process, emit a single Summary Event at the end containing only the final result.

## Key Facts
- Emit one Summary Event at process completion instead of many intermediate events
- Consumers don't need to track process state; they receive the finished result
- Reduces consumer coupling to internal process details

## Summary
Instead of emitting many events during a process, emit a single Summary Event at the end containing only the final result. This decouples consumers from the internal steps of a process. For example, Ordering might emit many internal events (LineItemWasAdded, PriceWasChanged) but emit a single public OrderWasPlaced containing complete order information. Consumers no longer need to track state changes throughout the process; they act upon the summary. A Projection can generate the summary. The pattern mirrors how businesses work in the real world—the fulfillment department sees the final order, not the draft negotiations.

## Links
- [Source](https://verraes.net/2019/05/patterns-for-decoupling-distsys-summary-event/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
