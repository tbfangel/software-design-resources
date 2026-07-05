---
type: article
title: "Named Constructors in PHP"
description: "Named constructors are static factory methods that provide more expressive alternatives to direct construction."
tags: ["software-engineering", "factory-methods", "object-creation", "expressiveness", "php", "named-constructors"]
published: 2014-06
timestamp: 2026-07-05
---
# Named Constructors in PHP

> Named constructors are static factory methods that provide more expressive alternatives to direct construction.

## Key Facts
- Named constructors provide expressive alternatives to direct object construction
- Static factory methods can encapsulate validation and initialization complexity
- Multiple named constructors allow different ways of constructing the same object
- Names should reflect the intent, not the mechanism (avoid "create" or "make")

## Summary
Named constructors are static factory methods that provide more expressive alternatives to direct construction. Instead of new Time(11, 45, 0), use Time::from("11:45") or Time::midnight(). Named constructors make object creation more readable and can encapsulate validation or complex initialization logic. They also allow different initialization semantics from a single class.

## Links
- _Source URL not yet recovered (see migration report)._

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
