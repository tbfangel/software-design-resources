---
type: article
title: "Using S3, But Not the Way You Expected"
description: "AWS S3's conditional writes capability fundamentally changes what's possible with cloud storage, enabling S3 to serve as a foundation for building strongly consistent event stores by implementing optimistic concurrency control directly in S3."
resource: https://www.architecture-weekly.com/p/using-s3-but-not-the-way-you-expected
cluster: databases-and-postgresql
tags: ["cloud-storage", "optimistic-concurrency", "event-store", "versioning"]
published: 2024
timestamp: 2026-07-05
---
# Using S3, But Not the Way You Expected

> AWS S3's conditional writes capability fundamentally changes what's possible with cloud storage, enabling S3 to serve as a foundation for building strongly consistent event stores by implementing optimistic concurrency control directly in S3.

## Key Facts
- S3 conditional writes enable optimistic concurrency control patterns previously requiring dedicated databases
- Cost considerations matter: S3 charges per-request, making small frequent transactions potentially expensive compared to DynamoDB
- S3 makes sense for large-scale event streaming with batching, not high-frequency transaction systems
- DynamoDB excels at real-time queries, small transactions, and built-in concurrency controls through ConditionalExpressions
- If AWS adds an If-Match header for true version matching, S3's viability as an event store would increase dramatically
- There's no free lunch when weighing snapshot storage costs against GET request reductions

## Summary
AWS S3's conditional writes capability fundamentally changes what's possible with cloud storage, enabling S3 to serve as a foundation for building strongly consistent event stores by implementing optimistic concurrency control directly in S3. The proposed key-naming convention follows the pattern {streamPrefix}/{streamType}/{streamId}/{streamVersion}.{chunkVersion}.json, with optimistic concurrency using the If-None-Match="*" header to ensure updates only succeed if a file doesn't already exist at that version number. The chunk structure stores events bundled with metadata and snapshots in JSON files, reducing GET request costs. Each stream version functions like a database write-ahead log ensuring consistency, with state snapshots in chunks minimizing event replays and schema versioning handling migrations. S3's ListObjects API with server-side filtering locates latest chunks, while S3 event notifications can trigger downstream processing.

## Links
- [Source](https://www.architecture-weekly.com/p/using-s3-but-not-the-way-you-expected) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [Parse, Don't Guess](/architecture-weekly.com/2026-03-parse-dont-guess.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](/architecture-weekly.com/2025-09-just-use-sql-they-say-or-on-how-accidental.md)
