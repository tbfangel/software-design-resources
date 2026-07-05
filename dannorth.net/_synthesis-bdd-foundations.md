---
type: synthesis
title: "BDD Foundations"
description: "This cluster captures Dan North's foundational writing on Behavior-Driven Development (BDD), which he originated in the mid-2000s."
cluster: bdd-foundations
timestamp: 2026-07-05
---
# BDD Foundations

> This cluster captures Dan North's foundational writing on Behavior-Driven Development (BDD), which he originated in the mid-2000s.

## Key Insights

**BDD is fundamentally about communication, not testing.** While it emerged from frustrations with TDD terminology, BDD's true value lies in creating shared understanding across diverse stakeholders through ubiquitous language. The Given-When-Then format and story structure aren't just specification templates—they're conversation tools that force explicit discussion of assumptions, business value, and acceptance criteria before implementation begins.

**Domain language determines scenario quality and brittleness.** Scenarios that mix vocabularies from multiple unrelated domains (UI implementation details, security jargon, infrastructure concerns) become fragile and hard to maintain. The sweet spot is exactly two domains: the problem domain (what capability we're describing) and the solution domain (how the application implements it). This constraint surfaces when requirements span too many concerns and need decomposition.

**Hidden domain concepts emerge through specification work.** When BDD scenarios become verbose or require excessive examples, it often signals a missing domain concept that should be named and modeled explicitly. The cancellation date example demonstrates how proper domain modeling simplifies specifications: instead of embedding complex time calculations in scenarios, extract the concept, define its behavior separately, and reference it clearly.

**The distinction between BDD and TDD is organizational, not technical.** In small, homogeneous programming teams, BDD and TDD collapse into equivalence—both serve as design tools with similar outcomes. The difference emerges in cross-functional contexts with testers, analysts, business stakeholders, and multiple SMEs covering interrelated domains. BDD addresses communication challenges that TDD was never designed to solve, making living documentation valuable precisely where code-based tests cannot bridge understanding gaps.

**Community identity through examples, not mandates.** North consistently resists defining BDD through mandatory practices or certification, instead advocating for centered communities built around shared values. Examples, experience reports, and context-rich recipes teach BDD more effectively than rules or bounded membership criteria. This approach allows organic evolution of practices (like Three Amigos) while maintaining accessibility for newcomers.

---

## Related
- [Introducing BDD](/dannorth.net/2006-09-introducing-bdd.md)
- [What's in a Story?](/dannorth.net/2007-02-whats-in-a-story.md)
- [BDD is like TDD if](/dannorth.net/2012-05-bdd-is-like-tdd-if.md)
- [BDD with Intent](/dannorth.net/2006-02-bdd-with-intent.md)
- [Behaviour-driven stories](/dannorth.net/2007-02-behaviour-driven-stories.md)
- [Whose domain is it anyway?](/dannorth.net/2011-01-whose-domain-is-it-anyway.md)
- [The mystery of the missing date](/dannorth.net/2020-11-the-mystery-of-the-missing-date.md)
- [BDD by example](/dannorth.net/2015-04-bdd-by-example.md)
- [Capturing the narrative](/dannorth.net/2014-07-capturing-the-narrative.md)
- [We need to talk about testing](/dannorth.net/2021-07-we-need-to-talk-about-testing.md)
