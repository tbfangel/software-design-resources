---
type: article
title: "Just Use SQL They Say... Or How Accidental Complexity Piles On"
description: "While raw SQL seems simple initially—\"Just use SQL, no need for ORMs\"—it quickly becomes complicated as requirements grow."
resource: https://www.architecture-weekly.com/p/just-use-sql-they-say-or-on-how-accidental
cluster: databases-and-postgresql
tags: ["sql", "complexity", "orm", "python"]
published: 2025-09
timestamp: 2026-07-05
---
# Just Use SQL They Say... Or How Accidental Complexity Piles On

> While raw SQL seems simple initially—"Just use SQL, no need for ORMs"—it quickly becomes complicated as requirements grow.

## Key Facts
- It's never "just" anything—simple approaches work initially but accumulate accidental complexity as systems grow
- Recognize when "just SQL" becomes unmanageable rather than stubbornly sticking to raw strings
- Evaluate whether frameworks solving these problems align with actual needs rather than dismissing them dogmatically
- Understand that popular library design decisions reflect hard-won lessons from scaling problems
- Choose solutions matching current and anticipated scope, not ideology or simplicity claims
- Quote from Gerald Weinberg: complexity exists "because they got that way"—problems are solved iteratively as requirements evolve

## Summary
While raw SQL seems simple initially—"Just use SQL, no need for ORMs"—it quickly becomes complicated as requirements grow. What starts as straightforward database queries morphs into "stringly typed" code with string manipulation, parameter management, and conditional logic that becomes difficult to maintain. The article traces complexity escalation: basic queries work fine, then SQL injection vulnerabilities emerge when user input enters queries directly, parameterized queries help but introduce coordination problems between SQL strings and parameter arrays, and dynamic filtering requires building WHERE clauses conditionally with messy string concatenation. Supporting multiple optional filter criteria necessitates custom query builders with type definitions, operator mapping, and conditional SQL generation—essentially building a "simple WHERE condition compiler." The proposed solution uses abstraction layers: define structured filter types, create builder functions generating parameterized queries programmatically, map operators to SQL syntax safely, and maintain synchronization between SQL structure and parameter arrays.

## Links
- [Source](https://www.architecture-weekly.com/p/just-use-sql-they-say-or-on-how-accidental) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-databases-and-postgresql.md)
- [Parse, Don't Guess](/architecture-weekly.com/2026-03-parse-dont-guess.md)
- [PostgreSQL Partitioning, Logical Replication, and Common Patterns](/architecture-weekly.com/2025-09-postgresql-partitioning-logical-replication.md)
- [PostgreSQL JSONB: Powerful Storage for Semi-Structured Data](/architecture-weekly.com/2024-postgresql-jsonb-powerful-storage.md)
