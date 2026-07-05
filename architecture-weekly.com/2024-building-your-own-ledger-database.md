---
type: article
title: "Building Your Own Ledger Database"
description: "Amazon is sunsetting QLDB, forcing companies to migrate."
resource: https://www.architecture-weekly.com/p/building-your-own-ledger-database
cluster: databases-and-postgresql
tags: ["databases", "cloud-storage", "immutability", "cost-optimization"]
published: 2024
timestamp: 2026-07-05
---
# Building Your Own Ledger Database

> Amazon is sunsetting QLDB, forcing companies to migrate.

## Key Facts
- Build custom solutions only when: limited feature scope, competition doesn't match needs, sufficient team capacity, favorable cost model, and adequate performance
- Choose replaceable, popular tools (S3, DuckDB) to mitigate risk of proprietary solutions
- Conduct proof-of-concepts before committing to custom infrastructure approaches
- Consider regulatory requirements (data residency, audit trails) explicitly when choosing architectures
- The trend favors both high-complexity custom systems AND simpler, cheaper alternatives depending on scale
- S3 immutability through Object Lock provides compliance-friendly guarantees at lower cost than traditional databases

## Summary
Amazon is sunsetting QLDB, forcing companies to migrate. Rather than moving to Aurora PostgreSQL, building custom ledger solutions or using simpler alternatives can be more cost-effective and better tailored to specific needs. The author proposes a three-tier recommendation structure: for massive scale (Stripe, Uber) build proprietary systems optimized for specific requirements, for regulated compliance use S3 + DuckDB combination, and generally don't fear custom solutions if conditions align. The proposed S3 + DuckDB architecture offers S3 with Object Lock for immutability via WORM policies, cost efficiency as S3 storage is significantly cheaper than relational databases especially with tiered access patterns, DuckDB as a modern analytical engine supporting Parquet files and cloud-native queries, and a batching strategy transitioning data from DynamoDB to S3 in batches. The key advantage is that S3 immutability is easier to prove than relational database immutability.

## Links
- [Source](https://www.architecture-weekly.com/p/building-your-own-ledger-database) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [Parse, Don't Guess](/architecture-weekly.com/2026-03-parse-dont-guess.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](/architecture-weekly.com/2025-09-just-use-sql-they-say-or-on-how-accidental.md)
