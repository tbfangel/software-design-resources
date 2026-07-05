---
type: article
title: "Type Safety and Money"
description: "Modern type systems allow expressing domain concepts with precision: money is not an integer, it's a value object with currency, precision, and rounding rules."
resource: https://verraes.net/2016/02/type-safety-and-money/
tags: ["modelling-design-heuristics", "type-systems", "value-objects", "money", "domain-concepts", "static-guarantees"]
published: 2016-02
timestamp: 2026-07-05
---
# Type Safety and Money

> Modern type systems allow expressing domain concepts with precision: money is not an integer, it's a value object with currency, precision, and rounding rules.

## Key Facts
- Use type systems to encode domain concepts and constraints
- Value objects with proper types make invalid states unrepresentable in code
- Type safety catches classes of errors at compile time that would become bugs at runtime
- Designing for type safety often leads to better domain models and clearer code

## Summary
Modern type systems allow expressing domain concepts with precision: money is not an integer, it's a value object with currency, precision, and rounding rules. By using type systems to enforce domain concepts, we gain static guarantees that certain errors become impossible. A function that takes `Money` as a parameter cannot accidentally receive a count or a raw integer. Verraes shows how careful use of types transforms domain concepts into compiler-enforced constraints.

## Links
- [Source](https://verraes.net/2016/02/type-safety-and-money/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-modelling-design-heuristics.md)
- [Surfacing Worldviews in Design](/verraes.net/2023-07-surfacing-worldviews-in-design.md)
- [Critically Engaging With Models](/verraes.net/2022-09-critically-engaging-with-models.md)
- [Critically Engaging With Models (DDD Europe Keynote)](/verraes.net/2023-01-critically-engaging-with-models.md)
