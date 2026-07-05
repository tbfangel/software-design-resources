---
type: article
title: "How Much Testing is Too Much?"
description: "Code coverage is a poor metric for quality—it only measures what was executed, not whether outcomes were tested."
resource: https://verraes.net/2014/12/how-much-testing-is-too-much/
tags: ["software-engineering", "code-coverage", "tdd-experimentation", "test-metrics", "over-design", "test-maintenance"]
published: 2014-12
timestamp: 2026-07-05
---
# How Much Testing is Too Much?

> Code coverage is a poor metric for quality—it only measures what was executed, not whether outcomes were tested.

## Key Facts
- Code coverage measures execution, not correctness; pursue it only to validate testing strategy
- Experiments beat opinions—try overzealous testing to build design and testing instincts
- Low-value tests become a problem when they're slow, brittle, hard to read, or require constant maintenance
- Trust instinct (annoyance level) to decide when to delete tests rather than maintaining them forever
- Refactoring tests is as valid as refactoring code

## Summary
Code coverage is a poor metric for quality—it only measures what was executed, not whether outcomes were tested. Rather than chasing coverage percentages, adopt a time-boxed experiment: be overzealous with TDD for a couple of weeks, writing tests first for everything. Discover which tests are unnecessary (getters, empty constructors) and which bring real value. Then back down gradually and develop instincts about the right balance. Over-design in tests, like over-design in code, creates technical debt if not refactored away as understanding deepens.

## Links
- [Source](https://verraes.net/2014/12/how-much-testing-is-too-much/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
