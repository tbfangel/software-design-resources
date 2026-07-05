---
type: article
title: "Casting Value Objects to strings"
description: "When representing Value Objects as strings (for logging, display, or serialization), the string should reflect the domain semantics—not implementation details."
resource: https://verraes.net/2013/02/2013-02-16-casting-value_objects/
cluster: ddd-foundations
tags: ["value-objects", "python", "ubiquitous-language", "programming"]
published: 2013-02
timestamp: 2026-07-05
---
# Casting Value Objects to strings

> When representing Value Objects as strings (for logging, display, or serialization), the string should reflect the domain semantics—not implementation details.

## Key Facts
- String representations of Value Objects should reflect domain semantics, not internal structure
- Clear string representations improve debuggability and code readability
- The Ubiquitous Language should extend to string outputs and logging

## Summary
When representing Value Objects as strings (for logging, display, or serialization), the string should reflect the domain semantics—not implementation details. A Money value object should cast to "EUR 100" rather than "Money { amount: 100, currency: EUR }", communicating intent and meaning. This distinction matters for code clarity and debugging; a developer reading "EUR 100" in logs immediately understands the business meaning, whereas internal structure leaks implementation. The string representation should respect the Ubiquitous Language and communicate the domain concept to readers of the code and logs.

## Links
- [Source](https://verraes.net/2013/02/2013-02-16-casting-value_objects/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-ddd-foundations.md)
- [What is Domain-Driven Design (DDD)](/verraes.net/2021-09-what-is-domain-driven-design-ddd.md)
- [Domain-Driven Design is Linguistic](/verraes.net/2014-01-domain-driven-design-is-linguistic.md)
- [Why Domain-Driven Design Matters](/verraes.net/2014-05-why-domain-driven-design-matters.md)
