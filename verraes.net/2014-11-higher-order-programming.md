---
type: article
title: "Higher Order Programming"
description: "Higher-order programming involves functions (or methods) that take functions as arguments or return functions."
resource: https://verraes.net/2014/11/higher-order-programming/
tags: ["software-engineering", "functional-programming", "php", "callbacks", "closures", "composition"]
published: 2014-11
timestamp: 2026-07-05
---
# Higher Order Programming

> Higher-order programming involves functions (or methods) that take functions as arguments or return functions.

## Key Facts
- Higher-order functions enable composition without building inheritance hierarchies
- Static methods are valid when they're referentially transparent and stateless
- Passing functions as parameters to array_reduce and similar utilities enables powerful composition
- Functional concepts complement OOP; use both where appropriate

## Summary
Higher-order programming involves functions (or methods) that take functions as arguments or return functions. In PHP, static methods and functions can be passed to functions like array_reduce, enabling functional composition patterns. Referential transparency (same input always produces the same output) matters more than whether code is object-oriented or functional; passing functions as parameters adds flexibility without the complexity of inheritance.

## Links
- [Source](https://verraes.net/2014/11/higher-order-programming/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
