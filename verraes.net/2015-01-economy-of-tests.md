---
type: article
title: "Economy of Tests"
description: "Testing has different costs and benefits depending on the project stage."
resource: https://verraes.net/2015/01/economy-of-tests/
tags: ["software-engineering", "testing-economics", "test-levels", "test-pyramid", "greenfield", "brownfield-projects", "maintenance-costs"]
published: 2015-01
timestamp: 2026-07-05
---
# Economy of Tests

> Testing has different costs and benefits depending on the project stage.

## Key Facts
- Unit tests cost more to learn (design must improve) but less to maintain
- System and integration tests are easier to learn but grow brittle and slow over time
- Test Pyramid applies to greenfield; brownfield needs inverted pyramid with migration toward the base
- Test metrics (speed, fragility, understandability) matter more as test suites grow
- Delete slow, brittle, or redundant tests; good practice includes "deleting tests"

## Summary
Testing has different costs and benefits depending on the project stage. In greenfield projects, unit tests, integration tests, and system tests cost roughly the same to introduce but differ in long-term maintenance. Integration and system tests become increasingly expensive over time due to brittleness and speed. The Test Pyramid recommends building mostly unit tests. In brownfield projects, starting with system tests and migrating to lower levels is practical. Test level migration—gradually shifting high-level tests down to unit tests as refactoring improves testability—balances introducing tests quickly with maintaining a sustainable suite.

## Links
- [Source](https://verraes.net/2015/01/economy-of-tests/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
