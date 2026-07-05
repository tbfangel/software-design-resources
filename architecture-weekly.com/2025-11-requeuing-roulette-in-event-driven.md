---
type: article
title: "Requeuing Roulette in Event-Driven Architecture and Messaging"
description: "Identifies \"Requeuing Roulette\" as a risky anti-pattern where messages are put back into queues when processing fails, hoping they'll eventually process in correct order."
resource: https://www.architecture-weekly.com/p/requeuing-roulette-in-event-driven
cluster: event-driven-architecture
tags: ["messaging", "anti-patterns", "message-processing", "distributed-systems", "message-brokers"]
published: 2025-11
timestamp: 2026-07-05
---
# Requeuing Roulette in Event-Driven Architecture and Messaging

> Identifies "Requeuing Roulette" as a risky anti-pattern where messages are put back into queues when processing fails, hoping they'll eventually process in correct order.

## Key Facts
- Understand actual ordering requirements—perfect ordering is neither necessary nor worth its cost
- Accept that some eventual consistency is acceptable rather than fighting distributed systems nature
- Use tooling features designed for ordering guarantees instead of requeuing workarounds
- Recognize requeuing works only when messages are mostly uncorrelated and failures are rare
- Treat requeuing as temporary, acknowledging you'll eventually abandon it for proper solutions
- Embrace distributed systems trade-offs by choosing appropriate consistency mechanisms for your context

## Summary
Identifies "Requeuing Roulette" as a risky anti-pattern where messages are put back into queues when processing fails, hoping they'll eventually process in correct order. This tries to cheat fundamental distributed systems trade-offs by maintaining strict ordering without sacrificing throughput. In classical messaging systems like RabbitMQ, requeued messages aren't guaranteed specific placement, and with multiple consumers messages can arrive out of order, creating cascading failures where the same messages are repeatedly rejected and requeued. The core issue stems from causal correlation—some messages depend on others while independent operations can process in parallel. Instead of relying on requeuing, use RabbitMQ routing keys and correlation IDs, AWS SQS message group IDs, Azure Service Bus sessions, Kafka partitioning, or phantom records that process messages as they arrive and act only when prerequisites are satisfied.

## Links
- [Source](https://www.architecture-weekly.com/p/requeuing-roulette-in-event-driven) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
