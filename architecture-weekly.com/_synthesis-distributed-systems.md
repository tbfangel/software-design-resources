---
type: synthesis
title: "Distributed Systems & Concurrency"
description: "This cluster explores distributed locking strategies, coordination mechanisms, workflow engines, the fundamental tradeoffs between ordering and performance, predictable identifier patterns, and the complexities of secondary indexes in distributed storage systems."
tags: ["distributed-systems"]
timestamp: 2026-07-05
---
# Distributed Systems & Concurrency

> This cluster explores distributed locking strategies, coordination mechanisms, workflow engines, the fundamental tradeoffs between ordering and performance, predictable identifier patterns, and the complexities of secondary indexes in distributed storage systems.

## Key Insights

**Avoid distributed locks when possible—they introduce failure points and coordination overhead.** When unavoidable, choose based on existing infrastructure: Redis (quick, lightweight, vulnerable to partitions), ZooKeeper/etcd (strong consistency, ephemeral nodes preventing zombie locks, operationally complex), or database advisory locks (minimal infrastructure, poor scaling across multiple databases). Implement TTL or ephemeral mechanisms for automatic failure recovery, and lock only minimal critical sections to reduce contention.

**Queue brokers naturally enforce mutual exclusion through task grouping.** Rather than explicit lock management, tasks requesting access to the same resource can be enqueued with identical group IDs, ensuring sequential processing through the queue broker's single-writer pattern. This elegant approach trades some parallelism for stronger consistency guarantees when data correctness is paramount, teaching foundational patterns applicable beyond production-grade locking libraries.

**Distributed systems cannot simultaneously optimize for both global ordering and high performance—this is fundamental physics, not engineering oversight.** Network round-trips are 5,000–1,500,000x slower than local operations. Establishing "after" relationships between servers requires acknowledgment overhead. Two-phase commit creates blocking problems where participants hold locks during network delays. Accept this reality: reduce coordination scope to genuinely critical operations, embrace business solutions (overselling tolerance, time-bound reservations), and design for idempotency so reordering doesn't corrupt state.

**Predictable identifiers enable autonomous communication without tight coupling.** Uniform Resource Names (URNs) like urn:payments:1:ORD:TN1:id encode routing and correlation information directly into identifiers. Infrastructure handles routing based on URN structure—payment modules publish responses using correlation IDs without knowing destinations. This transforms tightly-coupled orchestration into loosely-coupled event streams where modules achieve true autonomy. Structure URNs with version numbers for evolution, implement security controls, and leverage for cross-cutting concerns like idempotency keys and tenant routing.

**Secondary indexes in distributed systems are separate, complete storage systems maintained asynchronously.** Kafka embeds RocksDB in stream processors as state stores. DynamoDB's Global Secondary Indexes are entirely separate tables with independent partitioning and replication. Write amplification multiplies costs dramatically—a single DynamoDB write with three GSIs becomes twelve physical writes. Replication lag is inevitable (typically 1-2 seconds, potentially minutes under load). Treat each index as a long-term infrastructure commitment, prototype with real workloads, and push back on speculative indexes.

**Workflow engines can leverage event sourcing as their foundation.** Rather than separate infrastructure, treat each workflow instance as an event stream acting as both inbox and outbox. The double-hop pattern (store input, process, store output) ensures durability at each step while maintaining full message history. Pure functions (decide, evolve) enable straightforward testing without special runtime requirements. Accept added latency and storage duplication as tradeoffs for durability and observability. Not suitable for synchronous request-response patterns—designed for asynchronous durable workflows.

---

## Related
- [Distributed Locking: A Practical Guide](/architecture-weekly.com/2024-distributed-locking-a-practical-guide.md)
- [Locks, Queues and Business Workflows Processing](/architecture-weekly.com/2024-locks-queues-and-business-workflows.md)
- [Workflow Engine Design Proposal for Emmett](/architecture-weekly.com/2024-workflow-engine-design-proposal-tell.md)
- [The Order of Things: Why You Can't Have Both Speed and Strict Ordering](/architecture-weekly.com/2024-the-order-of-things-why-you-cant.md)
- [Predictable Identifiers: Enabling Autonomous Communication](/architecture-weekly.com/2024-predictable-identifiers-enabling.md)
- [Secondary Indexes and the Specialized Storage Dilemma](/architecture-weekly.com/2024-secondary-indexes-and-the-specialized.md)
