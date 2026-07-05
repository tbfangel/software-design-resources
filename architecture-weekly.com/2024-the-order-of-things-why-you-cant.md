---
type: article
title: "The Order of Things: Why You Can't Have Both Speed and Strict Ordering"
description: "Distributed systems cannot simultaneously optimize for both global ordering and high performance—this is a fundamental constraint, not an engineering oversight."
resource: https://www.architecture-weekly.com/p/the-order-of-things-why-you-cant
cluster: distributed-systems
tags: ["message-processing", "performance", "distributed-systems", "organizational-design", "eventual-consistency"]
published: 2024
timestamp: 2026-07-05
---
# The Order of Things: Why You Can't Have Both Speed and Strict Ordering

> Distributed systems cannot simultaneously optimize for both global ordering and high performance—this is a fundamental constraint, not an engineering oversight.

## Key Facts
- Reduce coordination scope by only enforcing strict ordering for genuinely critical operations
- Embrace business solutions: overselling tolerance, time-bound reservations, inventory buffers, graceful degradation
- Match guarantees to use cases: financial transactions demand rigor, analytics tolerate eventual consistency
- Design for idempotency to make operations safely retriable so reordering doesn't corrupt state
- Accepting tradeoffs consciously beats searching for non-existent silver bullets in distributed systems
- Network coordination is fundamentally expensive—5,000x to 1,500,000x slower than local operations

## Summary
Distributed systems cannot simultaneously optimize for both global ordering and high performance—this is a fundamental constraint, not an engineering oversight. PostgreSQL prioritizes correctness through row-level locking (SELECT FOR UPDATE) but this serializes access and reduces throughput by 50-60% during high traffic, with replication lag further complicating consistency. MongoDB optimizes for speed with asynchronous replication, but readers may hit stale replicas with outdated data, and multi-document transactions restore ordering guarantees while sacrificing performance benefits. Kafka scales horizontally through partitioning yet only guarantees ordering within individual partitions, requiring complex saga patterns with compensating transactions for cross-partition operations. Network round-trips are 5,000 to 1,500,000 times slower than local operations, and establishing "after" relationships between servers requires acknowledgment overhead. Two-phase commit introduces blocking problems where participants hold locks during network delays and coordinator failures can deadlock the entire system indefinitely.

## Links
- [Source](https://www.architecture-weekly.com/p/the-order-of-things-why-you-cant) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-distributed-systems.md)
- [Distributed Locking: A Practical Guide](/architecture-weekly.com/2024-distributed-locking-a-practical-guide.md)
- [Locks, Queues and Business Workflows Processing](/architecture-weekly.com/2024-locks-queues-and-business-workflows.md)
- [Workflow Engine Design Proposal for Emmett](/architecture-weekly.com/2024-workflow-engine-design-proposal-tell.md)
