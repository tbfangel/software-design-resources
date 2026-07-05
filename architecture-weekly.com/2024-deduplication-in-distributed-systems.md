---
type: article
title: "Deduplication in Distributed Systems"
description: "Challenges the widespread marketing claim of \"exactly-once delivery\" in messaging systems, arguing that duplicates are inevitable in distributed systems due to retries, broker failures, and network timeouts."
resource: https://www.architecture-weekly.com/p/deduplication-in-distributed-systems
tags: ["messaging-and-kafka", "deduplication", "exactly-once-processing", "idempotency", "message-brokers", "distributed-systems"]
published: 2024
timestamp: 2026-07-05
---
# Deduplication in Distributed Systems

> Challenges the widespread marketing claim of "exactly-once delivery" in messaging systems, arguing that duplicates are inevitable in distributed systems due to retries, broker failures, and network timeouts.

## Key Facts
- Combine deduplication with idempotency—assume duplicates will occur and design consumers to handle repeated processing safely
- Understand tradeoffs: memory overhead, TTL constraints, and scalability limits vary by approach
- Implement transactional patterns like outbox and inbox to achieve exactly-once processing through database atomicity
- Reality-check vendor claims: "exactly-once delivery" is marketing fiction; focus on business logic resilience
- High-throughput systems face particular challenges with in-memory deduplication caching at scale
- Choose deduplication layer (producer, broker, consumer) based on your system's consistency and performance requirements

## Summary
Challenges the widespread marketing claim of "exactly-once delivery" in messaging systems, arguing that duplicates are inevitable in distributed systems due to retries, broker failures, and network timeouts. Rather than seeking an impossible guarantee, architects should focus on "exactly-once processing"—ensuring duplicate messages don't create duplicate effects. The article examines deduplication strategies across three layers: Producer-side (assigning unique identifiers to messages, requiring state management overhead and broker support), Broker-side (systems like RabbitMQ Streams and Azure Service Bus maintaining deduplication caches with time-to-live windows, though messages arriving after cache eviction slip through), and Consumer-side (applications maintaining their own deduplication stores using databases or Redis, offering flexibility but adding complexity). Kafka notably delegates deduplication to consumers entirely, relying on offset tracking rather than broker-level deduplication.

## Links
- [Source](https://www.architecture-weekly.com/p/deduplication-in-distributed-systems) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-messaging-and-kafka.md)
- [Understanding Kafka's Consumer Protocol](/architecture-weekly.com/2024-understanding-kafkas-consumer-protocol.md)
- [Kafka Consumers: Under the Hood of Message Processing](/architecture-weekly.com/2024-kafka-consumers-under-the-hood-of.md)
- [How a Kafka-Like Producer Writes Messages](/architecture-weekly.com/2024-how-a-kafka-like-producer-writes.md)
