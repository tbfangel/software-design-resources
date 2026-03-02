# Distributed Systems & Concurrency

> Part of the [Architecture Weekly overview](overview.md)

This cluster explores distributed locking strategies, coordination mechanisms, workflow engines, the fundamental tradeoffs between ordering and performance, predictable identifier patterns, and the complexities of secondary indexes in distributed storage systems.

## Key Insights

**Avoid distributed locks when possible—they introduce failure points and coordination overhead.** When unavoidable, choose based on existing infrastructure: Redis (quick, lightweight, vulnerable to partitions), ZooKeeper/etcd (strong consistency, ephemeral nodes preventing zombie locks, operationally complex), or database advisory locks (minimal infrastructure, poor scaling across multiple databases). Implement TTL or ephemeral mechanisms for automatic failure recovery, and lock only minimal critical sections to reduce contention.

**Queue brokers naturally enforce mutual exclusion through task grouping.** Rather than explicit lock management, tasks requesting access to the same resource can be enqueued with identical group IDs, ensuring sequential processing through the queue broker's single-writer pattern. This elegant approach trades some parallelism for stronger consistency guarantees when data correctness is paramount, teaching foundational patterns applicable beyond production-grade locking libraries.

**Distributed systems cannot simultaneously optimize for both global ordering and high performance—this is fundamental physics, not engineering oversight.** Network round-trips are 5,000–1,500,000x slower than local operations. Establishing "after" relationships between servers requires acknowledgment overhead. Two-phase commit creates blocking problems where participants hold locks during network delays. Accept this reality: reduce coordination scope to genuinely critical operations, embrace business solutions (overselling tolerance, time-bound reservations), and design for idempotency so reordering doesn't corrupt state.

**Predictable identifiers enable autonomous communication without tight coupling.** Uniform Resource Names (URNs) like urn:payments:1:ORD:TN1:id encode routing and correlation information directly into identifiers. Infrastructure handles routing based on URN structure—payment modules publish responses using correlation IDs without knowing destinations. This transforms tightly-coupled orchestration into loosely-coupled event streams where modules achieve true autonomy. Structure URNs with version numbers for evolution, implement security controls, and leverage for cross-cutting concerns like idempotency keys and tenant routing.

**Secondary indexes in distributed systems are separate, complete storage systems maintained asynchronously.** Kafka embeds RocksDB in stream processors as state stores. DynamoDB's Global Secondary Indexes are entirely separate tables with independent partitioning and replication. Write amplification multiplies costs dramatically—a single DynamoDB write with three GSIs becomes twelve physical writes. Replication lag is inevitable (typically 1-2 seconds, potentially minutes under load). Treat each index as a long-term infrastructure commitment, prototype with real workloads, and push back on speculative indexes.

**Workflow engines can leverage event sourcing as their foundation.** Rather than separate infrastructure, treat each workflow instance as an event stream acting as both inbox and outbox. The double-hop pattern (store input, process, store output) ensures durability at each step while maintaining full message history. Pure functions (decide, evolve) enable straightforward testing without special runtime requirements. Accept added latency and storage duplication as tradeoffs for durability and observability. Not suitable for synchronous request-response patterns—designed for asynchronous durable workflows.

---

### [Distributed Locking: A Practical Guide](https://www.architecture-weekly.com/p/distributed-locking-a-practical-guide)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Distributed Locking, Redis, ZooKeeper, etcd, PostgreSQL, Concurrency Control

In distributed systems with multiple processes accessing shared resources simultaneously, data corruption and race conditions occur without coordination. A distributed lock ensures that if one actor changes a shared resource, no other node can step in until the first node is finished, sacrificing some parallelism for data consistency certainty. Redis uses atomic key creation with SET lockKey node123 NX EX 30 where NX creates keys only if nonexistent and EX specifies auto-expiration—quick and lightweight but vulnerable during network partitions. ZooKeeper and etcd replicate lock state across clustered servers with strong consistency, using ephemeral nodes that auto-delete on session loss preventing "zombie" locks, though more operationally complex. Database advisory locks leverage existing SQL databases through row-level locks (SELECT FOR UPDATE) or advisory functions like PostgreSQL's pg_advisory_lock, requiring minimal infrastructure but scaling poorly across multiple databases. Kubernetes single-instance approach (replicas: 1) eliminates concurrency entirely but sacrifices scalability and high availability.

**Key takeaways:**
- Avoid distributed locks when possible—they introduce complexity and potential failure points
- Choose based on existing infrastructure: Redis if using cache, ZooKeeper if coordinating, DB locks for monoliths
- Implement TTL or ephemeral mechanisms for automatic failure recovery to prevent permanent blocking
- Lock only minimal critical sections to reduce contention and improve throughput
- Plan for single points of failure with clustered setups for production resilience
- Watch for deadlocks from inconsistent lock ordering and lock contention becoming a bottleneck

### [Locks, Queues and Business Workflows Processing](https://www.architecture-weekly.com/p/locks-queues-and-business-workflows)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Locking, Queue Brokers, Task Grouping, Sequential Processing, Workflow Coordination

Demonstrates how distributed locking mechanisms can be elegantly implemented using queue brokers rather than traditional lock implementations. The core insight is that queues with ordering guarantees naturally enforce mutual exclusion when tasks are grouped by resource identifier. Instead of managing locks directly, tasks requesting access to the same resource are enqueued with identical group IDs, ensuring sequential processing through the queue broker's single-writer pattern guaranteeing that tasks in the same group run one at a time. The implementation includes four methods: acquire (blocks until lock access is granted by queuing a task), tryAcquire (returns false immediately if locked), release (signals completion by calling cached acknowledgment callback), and withAcquire (wrapper ensuring automatic lock release via try-finally pattern). The solution stores active locks in a Map, caching acknowledgment functions keyed by lock identifier.

**Key takeaways:**
- Queue brokers with task grouping naturally enforce mutual exclusion without explicit lock management
- This approach teaches foundational patterns rather than replacing production-grade locking libraries
- For distributed systems handling business workflows, partition messages by process identifier for sequential processing
- Trade some parallelism for stronger consistency guarantees when data correctness is paramount
- Store acknowledgment callbacks to enable proper lock release after task completion
- The single-writer pattern in queue brokers provides inherent coordination for grouped tasks

### [Workflow Engine Design Proposal for Emmett](https://www.architecture-weekly.com/p/workflow-engine-design-proposal-tell)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Workflow Engines, Event Sourcing, State Management, Temporal, Actor Model, Durable Execution

Building durable, observable multi-step business processes requires handling failure recovery, state management, and visibility. Existing solutions like Temporal and AWS Step Functions introduce significant cognitive overhead and complexity. The proposed lightweight workflow engine leverages event sourcing as the foundation, treating each workflow instance as an event stream that acts as both inbox and outbox. Messages trigger routing to specific workflow instances, inputs store in the workflow's stream before processing, state rebuilds by replaying events through an evolve function, the decide function executes business logic, and outputs store back in the same stream. This "double-hop" pattern ensures durability at each step while maintaining full message history. Key components include decide (contains business logic), evolve (builds state from events), and initialState (starting state for new instances). Design advantages include pure functions for straightforward testing, built-in observability through complete audit trail, actor model isolation with independent workflow instances, and familiar patterns reusing Emmett's existing concepts.

**Key takeaways:**
- Leverage event sourcing as workflow foundation rather than introducing separate infrastructure
- Use the double-hop pattern (store input, process, store output) to ensure durability at each step
- Pure functions for decide and evolve enable straightforward testing without special runtime requirements
- Each workflow instance operates independently with its own mailbox following the actor model
- Accept added latency and storage duplication as tradeoffs for durability and observability
- Not suitable for synchronous request-response patterns—designed for asynchronous durable workflows

### [The Order of Things: Why You Can't Have Both Speed and Strict Ordering](https://www.architecture-weekly.com/p/the-order-of-things-why-you-cant)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Ordering, Performance Tradeoffs, CAP Theorem, Distributed Systems, Coordination Costs, Eventual Consistency

Distributed systems cannot simultaneously optimize for both global ordering and high performance—this is a fundamental constraint, not an engineering oversight. PostgreSQL prioritizes correctness through row-level locking (SELECT FOR UPDATE) but this serializes access and reduces throughput by 50-60% during high traffic, with replication lag further complicating consistency. MongoDB optimizes for speed with asynchronous replication, but readers may hit stale replicas with outdated data, and multi-document transactions restore ordering guarantees while sacrificing performance benefits. Kafka scales horizontally through partitioning yet only guarantees ordering within individual partitions, requiring complex saga patterns with compensating transactions for cross-partition operations. Network round-trips are 5,000 to 1,500,000 times slower than local operations, and establishing "after" relationships between servers requires acknowledgment overhead. Two-phase commit introduces blocking problems where participants hold locks during network delays and coordinator failures can deadlock the entire system indefinitely.

**Key takeaways:**
- Reduce coordination scope by only enforcing strict ordering for genuinely critical operations
- Embrace business solutions: overselling tolerance, time-bound reservations, inventory buffers, graceful degradation
- Match guarantees to use cases: financial transactions demand rigor, analytics tolerate eventual consistency
- Design for idempotency to make operations safely retriable so reordering doesn't corrupt state
- Accepting tradeoffs consciously beats searching for non-existent silver bullets in distributed systems
- Network coordination is fundamentally expensive—5,000x to 1,500,000x slower than local operations

### [Predictable Identifiers: Enabling Autonomous Communication](https://www.architecture-weekly.com/p/predictable-identifiers-enabling)
**Type:** Article
**Date:** 2024
**Tags/Topics:** URNs, Uniform Resource Names, Correlation IDs, Routing, Decoupling, Multi-Tenancy

In distributed systems, modules need to communicate while remaining autonomous, but traditional event-driven architectures create tight coupling where payment modules must know about orders, reimbursements, and subscriptions. Predictable identifiers, specifically Uniform Resource Names (URNs), provide an elegant solution by encoding routing and correlation information directly into identifiers. The proposed standard urn:payments:{version}:{source}:{tenantid}:{uniqueid} enables infrastructure-level routing in RabbitMQ where topic exchanges parse URN components into routing keys and queues bind using wildcard patterns. The payment module publishes responses using the correlation ID without knowing destinations, accepting generic payment requests and responding asynchronously while remaining completely unaware of request sources. Consuming modules generate URNs containing their identifier and extract source information from response correlation IDs, handling results without reverse dependencies.

**Key takeaways:**
- Structure URNs thoughtfully with version numbers for evolution and clear component hierarchies
- Implement security controls: validate tenant access, restrict sources, verify correlation IDs exist
- Leverage URNs for cross-cutting concerns: idempotency keys, tenant routing, debugging via correlation tracking
- Consider encryption for sensitive URN components in multi-tenant environments
- Design around webhooks where external providers can include URNs in metadata for natural callback routing
- Transform tightly-coupled orchestration into loosely-coupled event streams where modules achieve true autonomy

### [Secondary Indexes and the Specialized Storage Dilemma](https://www.architecture-weekly.com/p/secondary-indexes-and-the-specialized)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Secondary Indexes, Kafka, DynamoDB, Write Amplification, Eventual Consistency, Specialized Storage

Specialized storage systems like Kafka and DynamoDB excel at specific tasks but struggle when users demand different query patterns, as adding flexible querying breaks the original performance optimizations. Secondary indexes in distributed systems aren't traditional database indexes—they're actually separate, complete storage systems maintained asynchronously, creating significant write amplification and operational complexity. Kafka embeds RocksDB (LSM-tree storage) in stream processors as state stores using changelog topics for durability, with related data co-partitioned on same machines requiring query routing logic. DynamoDB's Global Secondary Indexes are entirely separate tables with independent partitioning, replication, and capacity planning, maintained asynchronously via DynamoDB Streams. Write amplification multiplies costs dramatically—a single DynamoDB write with three GSIs becomes twelve physical writes (main table plus 3 indexes times 3 replicas). Replication lag is inevitable, typically 1-2 seconds but potentially minutes under load, and both systems sacrifice immediate consistency.

**Key takeaways:**
- Treat each index as a long-term infrastructure commitment, not a quick fix for query flexibility
- Prototype with real workloads to understand write amplification factors before committing
- Monitor replication lag continuously as updates propagate asynchronously causing stale reads
- Push back on speculative indexes—add only when use cases justify the operational and cost burden
- Consider alternatives like batch jobs before accepting distributed index complexity
- Specialization requires tradeoffs that can't be cheated through clever engineering alone

