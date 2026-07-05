---
type: article
title: "The mystery of the missing date"
description: "North examines how to specify a business rule for canceling authorized payments one month after authorization if uncharged, analyzing approaches from Gojko Adzic and Seb Rose."
resource: https://dannorth.net/blog/the-mystery-of-the-missing-date/
cluster: bdd-foundations
tags: ["bdd", "domain-driven-design", "software-design", "domain-modelling", "programming"]
published: 2020-11
timestamp: 2026-07-05
---
# The mystery of the missing date

> North examines how to specify a business rule for canceling authorized payments one month after authorization if uncharged, analyzing approaches from Gojko Adzic and Seb Rose.

## Key Facts
- Hidden domain concepts should be identified and calculated separately
- Embedding complex logic in scenarios creates brittle, verbose specifications
- Separating concerns (cancellation date calculation vs. payment processing) clarifies specifications
- Domain-driven design reveals missing concepts that simplify BDD scenarios
- Three focused scenarios can replace many examples when domain concepts are properly identified
- Distinguishing acceptance criteria from examples helps determine appropriate specificity
- BRIEF framework (Business language, Real data, Intention-revealing, Essential, Focused) guides scenario quality
- Domain modeling should inform scenario structure, not just step implementation

## Summary
North examines how to specify a business rule for canceling authorized payments one month after authorization if uncharged, analyzing approaches from Gojko Adzic and Seb Rose. Gojko uses concrete dates in data tables, arguing this distinguishes between acceptance criteria and examples, while Seb applies the BRIEF framework (Business language, Real data, Intention-revealing, Essential, Focused), noting the solutions contain excessive examples and hidden business rules in comments. North identifies a hidden domain concept: a "cancellation date" that should be calculated separately. Rather than embedding time logic in payment cancellation scenarios, he proposes: "The cancellation date is one calendar month after the payment authorization date." This reframing suggests different implementation: calculating cancellation dates as a distinct concern, then having the processor simply compare against that date. The solution uses three scenarios instead of many: authorization dates where the day-of-month exists in the following month, cases where cancellation extends into a later month, and leap year handling for February edge cases.

## Links
- [Source](https://dannorth.net/blog/the-mystery-of-the-missing-date/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-bdd-foundations.md)
- [Introducing BDD](/dannorth.net/2006-09-introducing-bdd.md)
- [What's in a Story?](/dannorth.net/2007-02-whats-in-a-story.md)
- [BDD is like TDD if](/dannorth.net/2012-05-bdd-is-like-tdd-if.md)
