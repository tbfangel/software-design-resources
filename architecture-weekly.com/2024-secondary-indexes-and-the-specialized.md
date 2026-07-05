---
type: article
title: "Secondary Indexes and the Specialized Storage Dilemma"
description: "Specialized storage systems like Kafka and DynamoDB excel at specific tasks but struggle when users demand different query patterns, as adding flexible querying breaks the original performance optimizations."
resource: https://www.architecture-weekly.com/p/secondary-indexes-and-the-specialized
cluster: distributed-systems
tags: ["databases", "kafka", "eventual-consistency"]
published: 2024
timestamp: 2026-07-05
---
# Secondary Indexes and the Specialized Storage Dilemma

> Specialized storage systems like Kafka and DynamoDB excel at specific tasks but struggle when users demand different query patterns, as adding flexible querying breaks the original performance optimizations.

## Key Facts
- Treat each index as a long-term infrastructure commitment, not a quick fix for query flexibility
- Prototype with real workloads to understand write amplification factors before committing
- Monitor replication lag continuously as updates propagate asynchronously causing stale reads
- Push back on speculative indexes—add only when use cases justify the operational and cost burden
- Consider alternatives like batch jobs before accepting distributed index complexity
- Specialization requires tradeoffs that can't be cheated through clever engineering alone

## Summary
Specialized storage systems like Kafka and DynamoDB excel at specific tasks but struggle when users demand different query patterns, as adding flexible querying breaks the original performance optimizations. Secondary indexes in distributed systems aren't traditional database indexes—they're actually separate, complete storage systems maintained asynchronously, creating significant write amplification and operational complexity. Kafka embeds RocksDB (LSM-tree storage) in stream processors as state stores using changelog topics for durability, with related data co-partitioned on same machines requiring query routing logic. DynamoDB's Global Secondary Indexes are entirely separate tables with independent partitioning, replication, and capacity planning, maintained asynchronously via DynamoDB Streams. Write amplification multiplies costs dramatically—a single DynamoDB write with three GSIs becomes twelve physical writes (main table plus 3 indexes times 3 replicas). Replication lag is inevitable, typically 1-2 seconds but potentially minutes under load, and both systems sacrifice immediate consistency.

## Links
- [Source](https://www.architecture-weekly.com/p/secondary-indexes-and-the-specialized) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-distributed-systems.md)
- [Distributed Locking: A Practical Guide](/architecture-weekly.com/2024-distributed-locking-a-practical-guide.md)
- [Locks, Queues and Business Workflows Processing](/architecture-weekly.com/2024-locks-queues-and-business-workflows.md)
- [Workflow Engine Design Proposal for Emmett](/architecture-weekly.com/2024-workflow-engine-design-proposal-tell.md)
