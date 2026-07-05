---
type: article
title: "When to Use Static Methods in PHP"
description: "Static methods are valid when they're referentially transparent—same input always produces the same output, no side effects (e.g., Calculator::sum(1, 2))."
resource: https://verraes.net/2014/06/when-to-use-static-methods-in-php/
tags: ["software-engineering", "static-methods", "global-state", "composition", "referential-transparency"]
published: 2014-06
timestamp: 2026-07-05
---
# When to Use Static Methods in PHP

> Static methods are valid when they're referentially transparent—same input always produces the same output, no side effects (e.g., Calculator::sum(1, 2)).

## Key Facts
- Static methods are acceptable for stateless, referentially transparent operations
- Shared global state is the real problem, not static methods themselves
- Avoid static methods for stateful services; use dependency injection with instances
- Composition and higher-order functions add abstraction where needed
- There's a place for both static methods and OOP—context determines the choice

## Summary
Static methods are valid when they're referentially transparent—same input always produces the same output, no side effects (e.g., Calculator::sum(1, 2)). Problems arise with shared global state, where one part of code affects another's behavior unexpectedly. Avoid static methods for stateful services; use instance objects instead. Static methods are at the lowest level of abstraction and can't be mocked, but composition and higher-order programming can add abstraction when needed.

## Links
- [Source](https://verraes.net/2014/06/when-to-use-static-methods-in-php/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
