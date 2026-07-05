---
type: article
title: "Parse, Don't Guess"
description: "The author initially tried to automatically parse bigints and dates from JSON using regex at the driver level, which caused CPU freezes because the regex ran against every string in every document during deserialization, blocking JavaScript's event loop."
resource: https://www.architecture-weekly.com/p/parse-dont-guess
cluster: databases-and-postgresql
tags: ["json", "schema-evolution", "performance", "typescript", "databases"]
published: 2026-03
timestamp: 2026-07-05
---
# Parse, Don't Guess

> The author initially tried to automatically parse bigints and dates from JSON using regex at the driver level, which caused CPU freezes because the regex ran against every string in every document during deserialization, blocking JavaScript's event loop.

## Key Facts
- Explicit parsing through schema-aware functions beats implicit global guessing every time
- Make conversions run only on declared fields using simple operations rather than scanning all data
- Use the same upcasting/downcasting mechanism for both type conversion and schema versioning
- Enable backward and forward compatibility by allowing old and new document formats to coexist
- Follow Kent Beck's principle: make it work, make it right, make it pretty—shortcuts teach lessons but require refinement
- Performance matters: global regex parsing against every string can block event loops and freeze systems

## Summary
The author initially tried to automatically parse bigints and dates from JSON using regex at the driver level, which caused CPU freezes because the regex ran against every string in every document during deserialization, blocking JavaScript's event loop. The fundamental issue is that the driver has no idea what your schema looks like, making automatic global parsing without schema knowledge an impossible task. Instead of automatic global parsing, the solution implements explicit schema versioning functions: Upcasting (transforms stored data like strings from JSON into application types like Date objects and bigints) and Downcasting (converts application types back to storage format for backward compatibility). This pattern addresses multiple problems simultaneously—conversions run only on declared fields using simple operations, the same mechanism handles structural migrations, and old and new document formats coexist without migrations.

## Links
- [Source](https://www.architecture-weekly.com/p/parse-dont-guess) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [Just Use SQL They Say... Or How Accidental Complexity Piles On](/architecture-weekly.com/2025-09-just-use-sql-they-say-or-on-how-accidental.md)
- [PostgreSQL JSONB: Powerful Storage for Semi-Structured Data](/architecture-weekly.com/2024-postgresql-jsonb-powerful-storage.md)
