---
type: article
title: "Consumers, Projectors, Reactors and All That Messaging Jazz in Emmett"
description: "Building production-ready event processing systems is fundamentally harder than building event stores because reliably processing events at scale involves managing delivery guarantees, ordering, idempotency, checkpointing, and resilience."
resource: https://www.architecture-weekly.com/p/consumers-projectors-reactors-and
cluster: messaging-and-kafka
tags: ["message-processing", "event-sourcing", "kafka", "projections", "separation-of-concerns", "resilience"]
published: 2025-12
timestamp: 2026-07-05
---
# Consumers, Projectors, Reactors and All That Messaging Jazz in Emmett

> Building production-ready event processing systems is fundamentally harder than building event stores because reliably processing events at scale involves managing delivery guarantees, ordering, idempotency, checkpointing, and resilience.

## Key Facts
- Separate concerns: let consumers handle delivery and routing while processors focus on business logic
- Group processors by similar characteristics—don't combine real-time dashboards with monthly analytics processors
- Scale consumers separately from APIs by running as dedicated services with adjustable replicas
- Leverage processor-owned checkpoints for rebuilds through either resetting checkpoints or blue-green deployments
- Failed processors don't halt others—handlers return ACK (success), Skip (poison message), or Stop (processor failure)
- Make backpressure strategies configurable (ignore slowdowns, stop on delay, force sync, adaptive polling, rolling buffers)

## Summary
Building production-ready event processing systems is fundamentally harder than building event stores because reliably processing events at scale involves managing delivery guarantees, ordering, idempotency, checkpointing, and resilience. The author argues existing messaging abstractions couple delivery mechanisms with processing logic, creating unnecessary complexity. The solution separates message handling into orthogonal responsibilities: Consumers (simple routers fetching events from PostgreSQL event stores, EventStoreDB, or Kafka and distributing to processors) and Processors (handling actual business logic). This Unix philosophy approach lets each evolve independently, with specialized processor archetypes including Projectors (read model updates), Reactors (side effects), Workflows (multi-step coordination), and Custom processors. Each processor independently tracks its last processed position, and when consumers restart, they query all processors and resume from the earliest checkpoint, enabling processors to progress at different speeds without blocking each other.

## Links
- [Source](https://www.architecture-weekly.com/p/consumers-projectors-reactors-and) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-messaging-and-kafka.md)
- [Understanding Kafka's Consumer Protocol](/architecture-weekly.com/2024-understanding-kafkas-consumer-protocol.md)
- [Kafka Consumers: Under the Hood of Message Processing](/architecture-weekly.com/2024-kafka-consumers-under-the-hood-of.md)
- [How a Kafka-Like Producer Writes Messages](/architecture-weekly.com/2024-how-a-kafka-like-producer-writes.md)
