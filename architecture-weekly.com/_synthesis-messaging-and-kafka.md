---
type: synthesis
title: "Messaging Systems & Kafka"
description: "This cluster explores messaging system internals, Kafka architecture and protocols, message processing patterns, multi-tenancy challenges, and deduplication strategies in distributed message-based systems."
tags: ["messaging-and-kafka"]
timestamp: 2026-07-05
---
# Messaging Systems & Kafka

> This cluster explores messaging system internals, Kafka architecture and protocols, message processing patterns, multi-tenancy challenges, and deduplication strategies in distributed message-based systems.

## Key Insights

**Kafka is pull-based, not push-based—understanding this shapes everything.** Consumers actively fetch messages from brokers using long polling that balances latency against network efficiency. The Group Coordinator uses error codes in heartbeat responses to signal rebalancing rather than explicit push notifications. This architecture enables consumer independence but requires careful tuning: the "1/3 rule" (heartbeat.interval.ms = session.timeout.ms / 3) prevents unnecessary rebalances from temporary network issues.

**Kafka prioritizes simplicity and throughput over flexibility.** Each partition is assigned to only one consumer in a group, preventing race conditions but creating hot partition bottlenecks. Rebalancing locks entire consumer groups during redistribution, pausing all processing. Rigid partitioning prevents load splitting within partitions. These aren't bugs—they're fundamental architectural tradeoffs. Apache Pulsar makes different choices; understand Kafka's constraints before committing.

**Durability comes from replication, not fsync.** Kafka producers batch messages in memory based on batch.size and linger.ms for throughput optimization. Sequential append-only writes to disk are orders of magnitude faster than random writes. Real Kafka distributes durability across broker replicas using min.insync.replicas rather than relying on single-node fsync calls. Treat Kafka as a messaging system, not a database—it sacrifices strict consistency for throughput.

**"Exactly-once delivery" is marketing fiction; focus on exactly-once processing.** Duplicates are inevitable in distributed systems due to retries, broker failures, and network timeouts. Deduplication strategies exist at three layers (producer-side message IDs, broker-side caches with TTLs, consumer-side databases), each with tradeoffs. Combine deduplication with idempotency—design consumers to handle repeated processing safely. Implement transactional patterns like outbox and inbox to achieve exactly-once processing through database atomicity.

**Separate message routing from business logic for flexibility.** The Emmett framework's approach distinguishes Consumers (simple routers fetching events and distributing to processors) from Processors (handling actual business logic). This separation enables processors to use identical logic whether events come from PostgreSQL, EventStoreDB, or Kafka. Each processor independently tracks its checkpoint, allowing different speeds without blocking others. Group processors by similar characteristics—don't combine real-time dashboards with monthly analytics.

**Messaging is a discipline, not a solved problem.** Event-driven architecture alone isn't sufficient—systems need proper messaging frameworks to avoid passive-aggressive or chaotic interactions. Ian Cooper's work emphasizes distinguishing between logical design and technical implementation, understanding system boundaries ("data on the inside" vs. "data on the outside"), and recognizing that messaging patterns require study as foundational knowledge, not cargo-cult adoption.

---

## Related
- [Understanding Kafka's Consumer Protocol](/architecture-weekly.com/2024-understanding-kafkas-consumer-protocol.md)
- [Kafka Consumers: Under the Hood of Message Processing](/architecture-weekly.com/2024-kafka-consumers-under-the-hood-of.md)
- [How a Kafka-Like Producer Writes Messages](/architecture-weekly.com/2024-how-a-kafka-like-producer-writes.md)
- [How Does Kafka Know What Was the Last Processed Message?](/architecture-weekly.com/2024-how-does-kafka-know-what-was-the.md)
- [Multi-Tenancy and Dynamic Messaging Workload Distribution](/architecture-weekly.com/2025-12-multi-tenancy-and-dynamic-messaging.md)
- [Checkpointing the Message Processing](/architecture-weekly.com/2025-12-checkpointing-the-message-processing.md)
- [Consumers, Projectors, Reactors and All That Messaging Jazz in Emmett](/architecture-weekly.com/2025-12-consumers-projectors-reactors-and.md)
- [On Messaging and Distributed Systems with Ian Cooper](/architecture-weekly.com/2025-10-on-messaging-and-distributed-systems.md)
- [Deduplication in Distributed Systems](/architecture-weekly.com/2024-deduplication-in-distributed-systems.md)
- [Announcing Strictland - new contract testing library for message compatibility](/architecture-weekly.com/2026-06-announcing-strictland-new-contract.md)
