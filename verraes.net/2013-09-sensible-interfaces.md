---
type: article
title: "Sensible Interfaces"
description: "Interfaces communicate contracts and expected polymorphism."
tags: ["software-engineering", "naming", "interface-design", "polymorphism", "contract", "segregation"]
published: 2013-09
timestamp: 2026-07-05
---
# Sensible Interfaces

> Interfaces communicate contracts and expected polymorphism.

## Key Facts
- Name interfaces after the concept, implementations after specifics
- Avoid "-able" and "Interface" suffixes; use natural language for better readability
- Program to interfaces, not implementations; clients don't care about concrete types
- Segregate interfaces when classes have unused stub methods
- Use roles to give objects multiple behaviors without premature splitting

## Summary
Interfaces communicate contracts and expected polymorphism. Avoid suffixing with "Interface" or prefixing with "I"—the interface name should be the concept, and implementations should have descriptive names (e.g., Translator, XmlTranslator, CachedTranslator). The "-able" suffix (Serializable, Translatable) feels unnatural; instead, use full English phrases (CastsToJson, HasTimestamp) that form readable sentences. Respect contracts by never calling methods outside the interface you typehint. Segregate interfaces when clients don't use all methods. Use roles to give classes multiple behaviors without splitting them prematurely.

## Links
- _Source URL not yet recovered (see migration report)._

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
