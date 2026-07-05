---
type: article
title: "Pre-merge Code Reviews"
description: "Pre-merge code reviews establish team responsibility for code quality."
resource: https://verraes.net/2013/10/pre-merge-code-reviews/
cluster: software-engineering
tags: ["code-review", "team-dynamics", "testing", "knowledge-sharing"]
published: 2013-10
timestamp: 2026-07-05
---
# Pre-merge Code Reviews

> Pre-merge code reviews establish team responsibility for code quality.

## Key Facts
- Pre-merge reviews shift code responsibility to the team, improving quality and safety
- Atomic stories and commits make reviews faster and code easier to understand
- Reviews should focus on important issues (tests, naming, coupling) not formatting details
- Review tests if using TDD; they often suffice to validate implementation
- Whiteboard solutions before coding to make reviews less contentious

## Summary
Pre-merge code reviews establish team responsibility for code quality. The rules are simple: never push to master, never merge your own code, review work-in-progress before starting new tasks, and never merge code you don't understand or disagree with. Benefits include early defect detection, shared knowledge, reduced bus factor, and freedom to make mistakes knowing colleagues will catch issues. Making reviews easier requires atomic stories, clear acceptance criteria, atomic commits, treating pull requests as conversations, and integrating frequently. Pitfalls include merge buddies (gaming the system), gatekeepers (single reviewers), and total lockdown (eroding trust).

## Links
- [Source](https://verraes.net/2013/10/pre-merge-code-reviews/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-software-engineering.md)
- [How to Fix a Bug: Tests, Hypotheses, Timeboxes](/verraes.net/2024-03-how-to-fix-a-bug-tests-hypotheses-timeboxes.md)
- [Code Reviews and Blame Culture](/verraes.net/2016-04-code-reviews-and-blame-culture.md)
- [Property-based Testing](/verraes.net/2016-04-property-based-testing.md)
