---
type: article
title: "The Write-Ahead Log: A Foundation for Reliability"
description: "Write-Ahead Logs (WALs) are an underappreciated yet foundational concept in modern systems, ubiquitous across databases, message brokers, and distributed systems."
resource: https://www.architecture-weekly.com/p/the-write-ahead-log-a-foundation
tags: ["databases-and-postgresql", "write-ahead-log", "wal", "durability", "crash-recovery", "replication", "database-internals"]
published: 2024
timestamp: 2026-07-05
---
# The Write-Ahead Log: A Foundation for Reliability

> Write-Ahead Logs (WALs) are an underappreciated yet foundational concept in modern systems, ubiquitous across databases, message brokers, and distributed systems.

## Key Facts
- Sequential appends are far easier, faster, and more reliable than scattered random writes across different locations
- WAL enables durability without requiring synchronous disk writes for every operation, trading latency for throughput
- Understanding WAL mechanics is essential for building reliable systems and debugging failure scenarios
- Physical replication streams block-level changes while logical replication streams operation-level changes
- Kafka's architecture treats the log as the primary abstraction rather than a supporting mechanism
- MongoDB's oplog size limits create recovery windows—understand your system's replay constraints

## Summary
Write-Ahead Logs (WALs) are an underappreciated yet foundational concept in modern systems, ubiquitous across databases, message brokers, and distributed systems. The WAL mechanism follows a consistent pattern: log first, apply later—log entries are appended sequentially to durable storage before modifications occur, changes are applied asynchronously to actual data structures, and crash recovery replays the log to restore consistency. This guarantees durability (changes aren't lost once logged) and consistency (systems recover to known states). PostgreSQL uses WAL for ACID compliance and replication, supporting both physical replication (block-level streaming) and logical replication (operation-level changes) enabling change data capture. Kafka treats logs as the core abstraction with topics logically divided into physically separate append-only partitions, each with monotonic offsets, enabling horizontal scaling. MongoDB implements the oplog as a capped collection recording high-level operations for replica set synchronization.

## Links
- [Source](https://www.architecture-weekly.com/p/the-write-ahead-log-a-foundation) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [Parse, Don't Guess](/architecture-weekly.com/2026-03-parse-dont-guess.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](/architecture-weekly.com/2025-09-just-use-sql-they-say-or-on-how-accidental.md)
