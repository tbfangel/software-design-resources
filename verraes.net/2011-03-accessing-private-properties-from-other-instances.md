---
type: article
title: "Accessing Private Properties from Other Instances"
description: "In PHP, private properties are accessible from other instances of the same class—visibility operates at class level, not instance level."
tags: ["software-engineering", "php", "visibility", "access-modifiers", "value-objects", "equality"]
published: 2011-03
timestamp: 2026-07-05
---
# Accessing Private Properties from Other Instances

> In PHP, private properties are accessible from other instances of the same class—visibility operates at class level, not instance level.

## Key Facts
- Private visibility in PHP is class-level, not instance-level
- Other instances of the same class can access private properties
- Value objects leverage this for implementing equals() comparisons
- Encapsulation is preserved—outside code still can't access private properties

## Summary
In PHP, private properties are accessible from other instances of the same class—visibility operates at class level, not instance level. This lets value objects compare themselves (foo1->equals(foo2)) by accessing private properties of another Foo instance. This feature is useful for implementing equality without exposing internals to outside code.

## Links
- _Source URL not yet recovered (see migration report)._

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
