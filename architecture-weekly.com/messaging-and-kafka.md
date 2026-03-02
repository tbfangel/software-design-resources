# Messaging Systems & Kafka

> Part of the [Architecture Weekly overview](overview.md)

This cluster explores messaging system internals, Kafka architecture and protocols, message processing patterns, multi-tenancy challenges, and deduplication strategies in distributed message-based systems.

## Key Insights

**Kafka is pull-based, not push-based—understanding this shapes everything.** Consumers actively fetch messages from brokers using long polling that balances latency against network efficiency. The Group Coordinator uses error codes in heartbeat responses to signal rebalancing rather than explicit push notifications. This architecture enables consumer independence but requires careful tuning: the "1/3 rule" (heartbeat.interval.ms = session.timeout.ms / 3) prevents unnecessary rebalances from temporary network issues.

**Kafka prioritizes simplicity and throughput over flexibility.** Each partition is assigned to only one consumer in a group, preventing race conditions but creating hot partition bottlenecks. Rebalancing locks entire consumer groups during redistribution, pausing all processing. Rigid partitioning prevents load splitting within partitions. These aren't bugs—they're fundamental architectural tradeoffs. Apache Pulsar makes different choices; understand Kafka's constraints before committing.

**Durability comes from replication, not fsync.** Kafka producers batch messages in memory based on batch.size and linger.ms for throughput optimization. Sequential append-only writes to disk are orders of magnitude faster than random writes. Real Kafka distributes durability across broker replicas using min.insync.replicas rather than relying on single-node fsync calls. Treat Kafka as a messaging system, not a database—it sacrifices strict consistency for throughput.

**"Exactly-once delivery" is marketing fiction; focus on exactly-once processing.** Duplicates are inevitable in distributed systems due to retries, broker failures, and network timeouts. Deduplication strategies exist at three layers (producer-side message IDs, broker-side caches with TTLs, consumer-side databases), each with tradeoffs. Combine deduplication with idempotency—design consumers to handle repeated processing safely. Implement transactional patterns like outbox and inbox to achieve exactly-once processing through database atomicity.

**Separate message routing from business logic for flexibility.** The Emmett framework's approach distinguishes Consumers (simple routers fetching events and distributing to processors) from Processors (handling actual business logic). This separation enables processors to use identical logic whether events come from PostgreSQL, EventStoreDB, or Kafka. Each processor independently tracks its checkpoint, allowing different speeds without blocking others. Group processors by similar characteristics—don't combine real-time dashboards with monthly analytics.

**Messaging is a discipline, not a solved problem.** Event-driven architecture alone isn't sufficient—systems need proper messaging frameworks to avoid passive-aggressive or chaotic interactions. Ian Cooper's work emphasizes distinguishing between logical design and technical implementation, understanding system boundaries ("data on the inside" vs. "data on the outside"), and recognizing that messaging patterns require study as foundational knowledge, not cargo-cult adoption.

---

### [Understanding Kafka's Consumer Protocol](https://www.architecture-weekly.com/p/understanding-kafkas-consumer-protocol)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Kafka, Consumer Protocol, Pull-Based Architecture, Consumer Groups, Rebalancing

Addresses a fundamental misconception about Kafka: while it appears to be a "push" system where brokers deliver messages to consumers, it's actually an elegant pull-based protocol. The solution distributes work across multiple consumers by assigning partitions to individual members, with a special broker called the Group Coordinator using consistent hashing to determine group membership and track active consumers through heartbeat mechanisms. Rather than explicit push notifications, Kafka cleverly uses error codes in heartbeat responses to signal when rebalancing is needed—when a coordinator detects changes, it returns a REBALANCE_IN_PROGRESS error. The protocol implements "long polling" where brokers hold requests up to maxWaitMs waiting for minBytes of data, balancing latency against network efficiency. Every interaction includes standardized headers enabling version negotiation and request tracking.

**Key takeaways:**
- Understand that Kafka is pull-based, not push-based, with consumers actively fetching messages from brokers
- Consumers locate their group coordinator through modular hashing of the group ID against the consumer offsets topic
- For low-latency tuning, use minimal fetch.min.bytes (1 byte), short fetch.max.wait.ms (100ms), and aggressive session timeouts
- For high-throughput, increase fetch.min.bytes to 1MB, extend fetch.max.wait.ms to 500ms, and allow longer session timeouts
- Follow the "1/3 rule"—set heartbeat.interval.ms to approximately one-third of session.timeout.ms to prevent unnecessary rebalances
- The system handles leader changes, network partitions, and coordinator failures through exponential backoff and session timeouts

### [Kafka Consumers: Under the Hood of Message Processing](https://www.architecture-weekly.com/p/kafka-consumers-under-the-hood-of)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Kafka Consumers, Partition Assignment, Rebalancing, Consumer Groups, Fault Tolerance

While Kafka's consumer architecture appears straightforward, the underlying mechanics around partition assignment, rebalancing, and fault tolerance involve significant complexity and trade-offs. Kafka uses consumer groups where each partition is assigned to only one consumer to ensure parallel processing without race conditions, with the Group Coordinator managing dynamic reassignment using strategies like round-robin or range-based allocation. The coordinator maintains consumer health tracking with timeout mechanisms, offset management uses Kafka's internal consumer offsets topic for durability, and heartbeat signals enable automatic failover. However, the author identifies six significant limitations: uneven partition loads create bottlenecks with hot partitions, processing pauses occur during rebalancing disrupting entire consumer groups, frequent offset updates increase storage overhead, rigid partitioning prevents load splitting within single partitions, rebalance churn becomes problematic in auto-scaling scenarios, and storage implications arise from constant cache invalidation.

**Key takeaways:**
- Kafka prioritizes simplicity and high throughput but sacrifices flexibility compared to systems like Apache Pulsar
- Each partition is assigned to only one consumer in a group, preventing race conditions but creating hot partition issues
- Rebalancing locks the entire consumer group, pausing processing across all members during redistribution
- The generation number tracks group state changes to prevent stale consumers from participating after rebalances
- Offset management overhead increases in dynamic environments with frequent consumer changes
- Carefully evaluate whether Kafka's architectural tradeoffs match your specific workload characteristics before adoption

### [How a Kafka-Like Producer Writes Messages](https://www.architecture-weekly.com/p/how-a-kafka-like-producer-writes)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Kafka Producer, Write-Ahead Log, Batching, Disk Storage, Crash Recovery

Developers treat Kafka as a "black box" without understanding the internal mechanics of how messages travel through a producer, broker, and partition to disk storage. The producer accumulates messages in memory until batch size limits or time thresholds trigger transmission, improving throughput over single-message sends. Messages write sequentially to disk using the Write-Ahead Log (WAL) pattern with append-only logging, and rather than one giant file, the broker rolls segments when they exceed size limits, enabling efficient retention policies and crash recovery. CRC checksums detect incomplete batches during crash recovery, and corrupted tail data gets truncated on restart. Records embed relative offsets, timestamps, and payloads in binary format, while batch headers contain magic bytes, CRC values, and record counts. Real Kafka prioritizes replication over frequent fsync calls—durability spreads across broker replicas rather than single-node persistence—and the single-writer principle ensures one broker leads partition writes.

**Key takeaways:**
- Producers batch messages in memory based on batch.size and linger.ms configuration for throughput optimization
- Sequential append-only writes to disk are far more efficient than random writes, making Kafka extremely fast
- fsync() forces OS-level disk flushing but carries severe performance costs—use replication instead for durability
- Real Kafka distributes durability across broker replicas using min.insync.replicas rather than relying on single-node fsync
- Understand the acks configuration: 0 (fire-and-forget), 1 (leader confirms), all (min replicas confirm)
- Treat Kafka as a messaging system rather than a database—it sacrifices strict consistency for throughput

### [How Does Kafka Know What Was the Last Processed Message?](https://www.architecture-weekly.com/p/how-does-kafka-know-what-was-the)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Kafka Offsets, Consumer Offsets, Offset Tracking, Distributed State, Compacted Topics

Addresses how Kafka tracks which messages a consumer has already processed after restarts or failures. Without reliable offset tracking, systems risk replaying entire message backlogs or losing progress. The historical evolution shows database storage proved inadequate for multiple consumers due to race conditions and scaling issues, local files failed during machine failures, and ZooKeeper became a bottleneck under high-volume offset commits. The current solution uses the consumer offsets internal topic (since Kafka 0.9+), operating as a partitioned, replicated system (typically 50 partitions) distributing offset storage horizontally, a compacted topic retaining only the latest offset for each consumer-group-partition key, and an append-only log ensuring chronological ordering and auditability. Each offset commit includes the consumer group ID, topic, partition, processed offset, and timestamp.

**Key takeaways:**
- The consumer offsets topic is Kafka's internal mechanism for tracking processing progress across consumer groups
- Topic compaction ensures only the most recent offset per consumer-group-partition combination is retained
- Tune commit frequency based on workload—balance failure recovery overhead against broker write load
- Monitor consumer lag, commit rates, and rebalance frequency to catch processing issues early
- Understand failure modes: service restarts recover cleanly, network partitions may cause replays, broker failovers are transparent
- No universal offset tracking solution fits all scenarios—different systems (MongoDB, EventStoreDB, RabbitMQ, Pulsar) make different tradeoffs

### [Multi-Tenancy and Dynamic Messaging Workload Distribution](https://www.architecture-weekly.com/p/multi-tenancy-and-dynamic-messaging)
**Type:** Article
**Date:** 2025-12
**Tags/Topics:** Multi-Tenancy, Workload Distribution, Horizontal Scaling, Partitioning, Consistent Hashing

Addresses the challenge of distributing message processing workloads dynamically in multi-tenant environments where tenants are unknown upfront, critical for SaaS platforms where new customers continually register. Horizontal scaling (sharding) involves spinning up separate containers per tenant or tenant group, ensuring complete isolation but at higher infrastructure costs, while vertical scaling (partitioning) runs multiple tenants within a single deployment using worker threads or processes, reducing costs but creating potential "noisy neighbor" issues. The author suggests using consistent hashing to map messages to processing units, with producers sending messages to topics with predetermined partitions based on deterministic routing logic. For the Emmett framework specifically, a partitionBy function allows processors to dynamically spawn worker threads per tenant internally, with distributed locking ensuring only one instance handles each partition.

**Key takeaways:**
- Choose sharding for high-security or unpredictable workload tenants; use partitioning for smaller, predictable loads
- Consider hybrid approaches: run small tenants together while isolating demanding ones separately
- Leverage existing tools like Kafka that implement consensus algorithms rather than building sophisticated coordination
- Plan for scale by avoiding thousands of containers or threads—group tenants into manageable ranges
- Use consistent hashing for deterministic message routing to processing units without central coordination
- Distributed locking prevents multiple instances from processing the same partition simultaneously

### [Checkpointing the Message Processing](https://www.architecture-weekly.com/p/checkpointing-the-message-processing)
**Type:** Article
**Date:** 2025-12
**Tags/Topics:** Checkpointing, Message Processing, Outbox Pattern, PostgreSQL, Idempotency

Draws a parallel between old video game checkpoint codes and message processing recovery in distributed systems, addressing how to resume message processing from where a system left off rather than restarting from the beginning after failures while maintaining consistency. The author proposes implementing checkpoints using PostgreSQL to track processing state through the Outbox Pattern (storing messages and state changes transactionally together), global ordering using transaction IDs and position numbers to guarantee message sequence, checkpoint storage in a processor_checkpoints table recording last processed message position, and idempotency detection by comparing expected vs. actual positions. Key components include an outbox table storing position, transaction_id, message_id, message_type, and data, polling queries retrieving unprocessed messages using transaction ordering, and a stored procedure using conditional logic to handle updates, inserts, and detect mismatches with return codes signaling success, idempotent skip, advanced position, or lagged position.

**Key takeaways:**
- Use mature tools like Emmett rather than building checkpoint management yourself from scratch
- Understand tradeoffs: global ordering guarantees require careful transaction management and performance costs
- Implement business-level idempotence alongside checkpoint detection for robust duplicate handling
- Monitor for noisy neighbors (competing processors) using checkpoint mismatch detection
- Consider performance costs of subscription-based outbox with long-lived transactions
- The approach trades some performance for correctness, suitable for internal module communication

### [Consumers, Projectors, Reactors and All That Messaging Jazz in Emmett](https://www.architecture-weekly.com/p/consumers-projectors-reactors-and)
**Type:** Article
**Date:** 2025-12
**Tags/Topics:** Message Processing, Emmett Framework, Consumers, Projectors, Separation of Concerns, Backpressure

Building production-ready event processing systems is fundamentally harder than building event stores because reliably processing events at scale involves managing delivery guarantees, ordering, idempotency, checkpointing, and resilience. The author argues existing messaging abstractions couple delivery mechanisms with processing logic, creating unnecessary complexity. The solution separates message handling into orthogonal responsibilities: Consumers (simple routers fetching events from PostgreSQL event stores, EventStoreDB, or Kafka and distributing to processors) and Processors (handling actual business logic). This Unix philosophy approach lets each evolve independently, with specialized processor archetypes including Projectors (read model updates), Reactors (side effects), Workflows (multi-step coordination), and Custom processors. Each processor independently tracks its last processed position, and when consumers restart, they query all processors and resume from the earliest checkpoint, enabling processors to progress at different speeds without blocking each other.

**Key takeaways:**
- Separate concerns: let consumers handle delivery and routing while processors focus on business logic
- Group processors by similar characteristics—don't combine real-time dashboards with monthly analytics processors
- Scale consumers separately from APIs by running as dedicated services with adjustable replicas
- Leverage processor-owned checkpoints for rebuilds through either resetting checkpoints or blue-green deployments
- Failed processors don't halt others—handlers return ACK (success), Skip (poison message), or Stop (processor failure)
- Make backpressure strategies configurable (ignore slowdowns, stop on delay, force sync, adaptive polling, rolling buffers)

### [On Messaging and Distributed Systems with Ian Cooper](https://www.architecture-weekly.com/p/on-messaging-and-distributed-systems)
**Type:** Interview
**Date:** 2025-10
**Tags/Topics:** Messaging Patterns, Distributed Systems, Ian Cooper, Event-Driven Architecture, System Boundaries

Discussion on why messaging remains a critical yet non-commoditized skill in distributed systems architecture. The core issue is that event-driven architecture, while useful for async communication, isn't sufficient alone—if we model interactions only with events, we'd end up with a passive-aggressive environment or a room filled with shouting people. The interview with Ian Cooper explores messaging pattern optimization through properly designed message flows that prevent poor system interactions by distinguishing between logical and technical architecture design. Key topics include boundary definition covering how to effectively shape system boundaries and differentiate between "data on the insight" and "data on the outside," testing strategies for distributed systems, async communication design patterns, and event-driven architecture limitations and complements.

**Key takeaways:**
- Study messaging patterns as a foundational discipline rather than treating it as a solved problem
- Understand the distinction between logical design and technical implementation when architecting message flows
- Event publishing alone creates suboptimal system behavior without proper messaging frameworks and patterns
- Learn from established practitioners through workshops and recorded discussions to build messaging expertise
- Recognize that effective distributed systems require more than just event-driven architecture alone
- Properly designed message flows prevent passive-aggressive or chaotic system interactions

### [Deduplication in Distributed Systems](https://www.architecture-weekly.com/p/deduplication-in-distributed-systems)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Deduplication, Exactly-Once Processing, Idempotency, Message Brokers, Distributed Systems

Challenges the widespread marketing claim of "exactly-once delivery" in messaging systems, arguing that duplicates are inevitable in distributed systems due to retries, broker failures, and network timeouts. Rather than seeking an impossible guarantee, architects should focus on "exactly-once processing"—ensuring duplicate messages don't create duplicate effects. The article examines deduplication strategies across three layers: Producer-side (assigning unique identifiers to messages, requiring state management overhead and broker support), Broker-side (systems like RabbitMQ Streams and Azure Service Bus maintaining deduplication caches with time-to-live windows, though messages arriving after cache eviction slip through), and Consumer-side (applications maintaining their own deduplication stores using databases or Redis, offering flexibility but adding complexity). Kafka notably delegates deduplication to consumers entirely, relying on offset tracking rather than broker-level deduplication.

**Key takeaways:**
- Combine deduplication with idempotency—assume duplicates will occur and design consumers to handle repeated processing safely
- Understand tradeoffs: memory overhead, TTL constraints, and scalability limits vary by approach
- Implement transactional patterns like outbox and inbox to achieve exactly-once processing through database atomicity
- Reality-check vendor claims: "exactly-once delivery" is marketing fiction; focus on business logic resilience
- High-throughput systems face particular challenges with in-memory deduplication caching at scale
- Choose deduplication layer (producer, broker, consumer) based on your system's consistency and performance requirements

