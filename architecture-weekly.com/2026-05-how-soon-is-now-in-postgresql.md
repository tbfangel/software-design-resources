---
type: article
title: "How soon is now in PostgreSQL?"
description: "Oskar Dudycz traces a subtle bug in Emmett's distributed processor locking where PostgreSQL's `now()` returns the transaction start time rather than wall-clock time, silently breaking retry logic that runs inside a single transaction."
resource: https://www.architecture-weekly.com/p/how-soon-is-now-in-postgresql
tags: ["databases-and-postgresql", "postgresql", "now-vs-clock-timestamp", "transaction-semantics", "distributed-locking", "retry-logic", "testing-seams"]
published: 2026-05
timestamp: 2026-07-05
---
# How soon is now in PostgreSQL?

> Oskar Dudycz traces a subtle bug in Emmett's distributed processor locking where PostgreSQL's `now()` returns the transaction start time rather than wall-clock time, silently breaking retry logic that runs inside a single transaction.

## Key Facts
- `now()` returns transaction start time and stays constant for the whole transaction, not elapsed wall-clock time
- Use `clock_timestamp()` for predicates that must observe real elapsed time, such as retry or lock conditions
- Retry loops inside a single transaction freeze any WHERE-clause condition built on `now()`
- The bug lived in the gap between unit tests and real caller patterns, where neither layer covered the triggering combination
- Reproducing the exact crash-plus-retry scenario was necessary to surface and fix the defect
- Production bugs often hide in the overlapping blind spots between different testing layers

## Summary
Oskar Dudycz traces a subtle bug in Emmett's distributed processor locking where PostgreSQL's `now()` returns the transaction start time rather than wall-clock time, silently breaking retry logic that runs inside a single transaction. Because `now()` stays frozen for the duration of a transaction, a WHERE-clause predicate comparing against it never advances during in-transaction retries, so a lock condition that should eventually pass never does. The fix was to switch time-sensitive predicates to `clock_timestamp()`, which reads the wall clock on each call. The deeper lesson is that the bug slipped past both unit and end-to-end tests because neither exercised the specific combination—crash, new instance, and retry within a shared transaction—highlighting how defects hide in the blind spots between testing layers.

## Links
- [Source](https://www.architecture-weekly.com/p/how-soon-is-now-in-postgresql) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [Parse, Don't Guess](/architecture-weekly.com/2026-03-parse-dont-guess.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](/architecture-weekly.com/2025-09-just-use-sql-they-say-or-on-how-accidental.md)
