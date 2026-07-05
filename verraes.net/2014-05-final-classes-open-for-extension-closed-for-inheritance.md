---
type: article
title: "Final Classes: Open for Extension, Closed for Inheritance"
description: "The concept of \"open for extension, closed for modification\" is better achieved through composition than inheritance."
resource: https://verraes.net/2014/05/final-classes-in-php/
cluster: software-engineering
tags: ["object-oriented-design", "php", "design-principles"]
published: 2014-05
timestamp: 2026-07-05
---
# Final Classes: Open for Extension, Closed for Inheritance

> The concept of "open for extension, closed for modification" is better achieved through composition than inheritance.

## Key Facts
- Mark classes final by default; only remove final when there's a clear need for inheritance
- Inheritance creates fragile hierarchies; composition is more flexible
- Final classes encourage explicit extension points via interfaces and constructor injection
- Open/Closed Principle is better served by composition than inheritance

## Summary
The concept of "open for extension, closed for modification" is better achieved through composition than inheritance. Declaring classes final forces you to think about extension points upfront. Inheritance hierarchies are hard to maintain and reason about; composition via constructor injection is more flexible and testable. Final classes encourage interface-based design, making code more robust.

## Links
- [Source](https://verraes.net/2014/05/final-classes-in-php/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
