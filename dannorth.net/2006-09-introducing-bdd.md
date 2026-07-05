---
type: article
title: "Introducing BDD"
description: "North introduces Behavior-Driven Development as a response to confusion around Test-Driven Development, particularly regarding what to test and how to name tests."
resource: https://dannorth.net/blog/introducing-bdd/
cluster: bdd-foundations
tags: ["agile", "bdd", "tdd", "testing"]
published: 2006-09
timestamp: 2026-07-05
---
# Introducing BDD

> North introduces Behavior-Driven Development as a response to confusion around Test-Driven Development, particularly regarding what to test and how to name tests.

## Key Facts
- Replacing "test" with "behaviour" clarifies purpose and reduces confusion for TDD practitioners
- The "should" template constrains tests to describe one behavior, encouraging better design
- Given-When-Then scenarios bridge the gap between business requirements and executable code
- Ubiquitous language derived from Domain-Driven Design enables shared understanding across roles
- Expressive behavioral names enable rapid diagnosis when specifications fail

## Summary
North introduces Behavior-Driven Development as a response to confusion around Test-Driven Development, particularly regarding what to test and how to name tests. He argues that the word "test" creates cognitive friction, while "behaviour" more accurately describes the practice of specifying what a system should do. The article proposes the "should" template for naming ("The class should do something"), which naturally limits test scope to single responsibilities. North demonstrates BDD through the Given-When-Then scenario format, showing how it creates ubiquitous language across analysts, developers, testers, and business stakeholders. The ATM withdrawal example illustrates how behavioral scenarios map directly to executable code while remaining readable to non-programmers.

## Links
- [Source](https://dannorth.net/blog/introducing-bdd/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-bdd-foundations.md)
- [What's in a Story?](/dannorth.net/2007-02-whats-in-a-story.md)
- [BDD is like TDD if](/dannorth.net/2012-05-bdd-is-like-tdd-if.md)
- [BDD with Intent](/dannorth.net/2006-02-bdd-with-intent.md)
