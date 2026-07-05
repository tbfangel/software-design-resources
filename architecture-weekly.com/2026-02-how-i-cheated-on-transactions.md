---
type: article
title: "How I Cheated on Transactions"
description: "Oskar Dudycz describes a pragmatic architectural tradeoff he made while building Dumbo, a multi-database abstraction layer."
resource: https://www.architecture-weekly.com/p/how-i-cheated-on-transactions
tags: ["databases-and-postgresql", "transactions", "distributed-systems", "api-design", "cloudflare-d1", "database-abstraction"]
published: 2026-02
timestamp: 2026-07-05
---
# How I Cheated on Transactions

> Oskar Dudycz describes a pragmatic architectural tradeoff he made while building Dumbo, a multi-database abstraction layer.

## Key Facts
- Cloudflare D1's HTTP-based architecture makes persistent connections impossible, ruling out conventional SQL transactions.
- Sessions (repeatable reads, sequential consistency) and batches (atomic multi-statement execution in one request) together approximate transactional safety within D1's constraints.
- Requiring an explicit opt-in (`mode: 'session_based'`) keeps the API honest and prevents developers from accidentally relying on guarantees that don't exist.
- When building abstractions across heterogeneous platforms, exposing fundamental differences is preferable to hiding them behind a leaky uniform facade.
- Good API design defaults to the restrictive, safe path and makes weaker guarantees an explicit, named choice.

## Summary
Oskar Dudycz describes a pragmatic architectural tradeoff he made while building Dumbo, a multi-database abstraction layer. The core challenge arose when adding support for Cloudflare D1, which exposes its database through an HTTP API and therefore cannot support traditional SQL transactions via BEGIN/COMMIT/ROLLBACK — persistent connections simply aren't possible in that model. Rather than faking transactional semantics or silently degrading behaviour, Dudycz introduced a session-based mode: sessions provide repeatable reads and sequential consistency within a logical unit of work, while batches execute multiple SQL statements atomically in a single HTTP request. Crucially, users must explicitly opt in via `{ mode: 'session_based' }`, making the limitations visible rather than hidden. The broader lesson is that good API design starts restrictive — when a perfect cross-platform solution doesn't exist, the right answer is to surface the constraint and require an informed opt-in rather than paper over it.

## Links
- [Source](https://www.architecture-weekly.com/p/how-i-cheated-on-transactions) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [Parse, Don't Guess](/architecture-weekly.com/2026-03-parse-dont-guess.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](/architecture-weekly.com/2025-09-just-use-sql-they-say-or-on-how-accidental.md)
