---
type: article
title: "Keep Your Controllers Thin with Doctrine2"
description: "Doctrine2's repository pattern abstracts persistence, preventing controller coupling to database details."
resource: https://verraes.net/2011/03/keep-you-controllers-thin-with-doctrine2/
cluster: software-engineering
tags: ["repositories", "orm", "separation-of-concerns", "ubiquitous-language"]
published: 2011-03
timestamp: 2026-07-05
---
# Keep Your Controllers Thin with Doctrine2

> Doctrine2's repository pattern abstracts persistence, preventing controller coupling to database details.

## Key Facts
- Repositories speak the ubiquitous language, not the database schema
- Queries in controllers couple code to the database; repositories decouple it
- Custom repository methods encapsulate complex queries
- Thin controllers result from moving logic to appropriate domain boundaries

## Summary
Doctrine2's repository pattern abstracts persistence, preventing controller coupling to database details. Rather than writing queries in controllers, ask the repository for domain concepts: findAllFixedBugs() instead of findBy(array('status' => 'fixed')). The repository encapsulates query logic; if schema changes, only the repository changes. Controllers speak the domain language and stay clean.

## Links
- [Source](https://verraes.net/2011/03/keep-you-controllers-thin-with-doctrine2/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
