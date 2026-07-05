---
type: article
title: "Interface Discovery with PHPUnit's Mock Objects"
description: "Writing tests with mock objects before building implementations forces you to discover what interfaces your code actually needs."
resource: https://verraes.net/2011/03/interface-discovery-with-phpunit-mock-objects/
cluster: software-engineering
tags: ["tdd", "api-design", "testing"]
published: 2011-03
timestamp: 2026-07-05
---
# Interface Discovery with PHPUnit's Mock Objects

> Writing tests with mock objects before building implementations forces you to discover what interfaces your code actually needs.

## Key Facts
- Mocking dependencies before building them reveals what interfaces you actually need
- TDD-style mock-first design ensures implementations fit their callers
- Discovered interfaces are minimal and focused on real usage
- Avoids YAGNI violations—you code only what tests actually require

## Summary
Writing tests with mock objects before building implementations forces you to discover what interfaces your code actually needs. Mock the dependency, write tests that tell it what to do, then build the real implementation. This approach ensures the design is right for the caller, not the implementer. You discover minimal, fitting interfaces rather than building something then cutting it to size.

## Links
- [Source](https://verraes.net/2011/03/interface-discovery-with-phpunit-mock-objects/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
