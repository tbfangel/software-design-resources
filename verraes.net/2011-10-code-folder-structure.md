---
type: article
title: "Code Folder Structure"
description: "Organizing code by technical role (Controllers, Models, Repositories) follows framework conventions but misses communication opportunities."
tags: ["software-engineering", "project-organization", "coupling", "bounded-contexts", "dependencies", "folder-hierarchy"]
published: 2011-10
timestamp: 2026-07-05
---
# Code Folder Structure

> Organizing code by technical role (Controllers, Models, Repositories) follows framework conventions but misses communication opportunities.

## Key Facts
- Organize by domain concept, not technical role, to clarify dependencies and coupling
- Proximity suggests coupling; document coupling direction
- This approach naturally exposes bounded contexts and enables migration strategies
- Conscious decisions about coupling are better than accidentally inheriting framework structure

## Summary
Organizing code by technical role (Controllers, Models, Repositories) follows framework conventions but misses communication opportunities. Instead, group by domain concepts—BlogDomain, CoreDomain—to show coupling and context boundaries. BlogPost and Comment live near BlogPostRepository; Comments don't know they belong to BlogPost. This structure makes dependencies explicit and aids refactoring decisions.

## Links
- _Source URL not yet recovered (see migration report)._

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
