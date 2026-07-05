---
type: article
title: "Representing Money in PHP, Fowler-style"
description: "Implementing Martin Fowler's Money pattern in PHP creates a type-safe, precise representation of monetary amounts."
resource: https://verraes.net/2011/04/fowler-money-pattern-in-php/
tags: ["software-engineering", "value-objects", "money-pattern", "php", "martin-fowler", "domain-modeling"]
published: 2011-04
timestamp: 2026-07-05
---
# Representing Money in PHP, Fowler-style

> Implementing Martin Fowler's Money pattern in PHP creates a type-safe, precise representation of monetary amounts.

## Key Facts
- Money is a value object combining amount and currency
- Fowler's Money pattern prevents currency errors and improves type safety
- Value objects are immutable and compared by value, not identity
- Domain-specific types are worth the effort for correctness

## Summary
Implementing Martin Fowler's Money pattern in PHP creates a type-safe, precise representation of monetary amounts. Money combines a numeric value with currency, preventing accidental comparisons or arithmetic across currencies. This pattern exemplifies value objects—immutable, equality-based objects that represent domain concepts precisely.

## Links
- [Source](https://verraes.net/2011/04/fowler-money-pattern-in-php/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
