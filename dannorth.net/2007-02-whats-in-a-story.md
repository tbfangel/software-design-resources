---
type: article
title: "What's in a Story?"
description: "North defines the structure of BDD stories as the fundamental unit for capturing requirements in a way that creates shared understanding about what constitutes completion."
resource: https://dannorth.net/blog/whats-in-a-story/
cluster: bdd-foundations
tags: ["agile", "bdd", "requirements", "storytelling"]
published: 2007-02
timestamp: 2026-07-05
---
# What's in a Story?

> North defines the structure of BDD stories as the fundamental unit for capturing requirements in a way that creates shared understanding about what constitutes completion.

## Key Facts
- Story titles should name activities, not abstract concepts
- Narratives must include role, feature, and business benefit to clarify motivation
- Scenario titles identify differences between test cases
- Stories should fit within iterations (typically 5-6 scenarios maximum)
- Breaking stories along business lines makes progress visible to stakeholders
- Givens establish context; Whens describe the feature; Thens specify outcomes
- Stories function as collaborative dialogue tools, not comprehensive documentation

## Summary
North defines the structure of BDD stories as the fundamental unit for capturing requirements in a way that creates shared understanding about what constitutes completion. He presents the canonical story template: a title describing an activity, a narrative ("As a [role] I want [feature] so that [benefit]"), and acceptance criteria as Given-When-Then scenarios. The ATM withdrawal example demonstrates how multiple scenarios (sufficient funds, insufficient funds, disabled card, low ATM balance) define scope while maintaining focus on a single feature. North emphasizes that stories are "conversation starters" rather than final documentation, and that breaking stories along business lines rather than technical divisions enables stakeholders to observe tangible progress. Good Givens include all necessary context but nothing more, avoiding both excessive and missing details that create ambiguity.

## Links
- [Source](https://dannorth.net/blog/whats-in-a-story/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-bdd-foundations.md)
- [Introducing BDD](/dannorth.net/2006-09-introducing-bdd.md)
- [BDD is like TDD if](/dannorth.net/2012-05-bdd-is-like-tdd-if.md)
- [BDD with Intent](/dannorth.net/2006-02-bdd-with-intent.md)
