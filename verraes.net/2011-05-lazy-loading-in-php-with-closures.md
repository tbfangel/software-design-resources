---
type: article
title: "Lazy Loading in PHP with Closures"
description: "Lazy loading defers expensive operations (database queries) until needed."
resource: https://verraes.net/2011/05/lazy-loading-with-closures/
tags: ["software-engineering", "lazy-loading", "closures", "ddd", "repositories", "design-patterns"]
published: 2011-05
timestamp: 2026-07-05
---
# Lazy Loading in PHP with Closures

> Lazy loading defers expensive operations (database queries) until needed.

## Key Facts
- Closures enable lazy loading without coupling domain models to persistence
- Defer expensive operations until actually needed to avoid unnecessary work
- The domain model stays pure; repositories encapsulate fetch logic
- Client code remains unchanged; loading strategy becomes an implementation detail

## Summary
Lazy loading defers expensive operations (database queries) until needed. Closures let you inject logic that references data without coupling the domain model to the persistence layer. A Customer holds a Closure that fetches Orders only when getOrders() is called, avoiding unnecessary queries while keeping the domain model clean and testable.

## Links
- [Source](https://verraes.net/2011/05/lazy-loading-with-closures/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
