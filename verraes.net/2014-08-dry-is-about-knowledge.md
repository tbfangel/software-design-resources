---
type: article
title: "DRY is about Knowledge"
description: "The DRY principle (\"Don't Repeat Yourself\") is often misinterpreted as \"no code duplication.\" In reality, DRY is about not repeating knowledge—the same fact should live in one place."
resource: https://verraes.net/2014/08/dry-is-about-knowledge/
cluster: modelling-design-heuristics
tags: ["duplication", "knowledge-sharing", "domain-driven-design", "intentionality"]
published: 2014-08
timestamp: 2026-07-05
---
# DRY is about Knowledge

> The DRY principle ("Don't Repeat Yourself") is often misinterpreted as "no code duplication." In reality, DRY is about not repeating knowledge—the same fact should live in one place.

## Key Facts
- DRY is about not duplicating knowledge, not eliminating code duplication
- The same code in two places might represent different knowledge—don't blindly deduplicate
- Different code might encode the same knowledge—deduplication is appropriate here
- Domain understanding helps determine what counts as "the same knowledge"

## Summary
The DRY principle ("Don't Repeat Yourself") is often misinterpreted as "no code duplication." In reality, DRY is about not repeating knowledge—the same fact should live in one place. Two identical code blocks might represent different knowledge (e.g., two validation rules that happen to be identical), so deduplicating them would be wrong. Conversely, code that looks different might express the same knowledge in different ways, suggesting it should be deduplicated. The key is distinguishing incidental duplication from essential repetition of knowledge.

## Links
- [Source](https://verraes.net/2014/08/dry-is-about-knowledge/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-modelling-design-heuristics.md)
- [Surfacing Worldviews in Design](/verraes.net/2023-07-surfacing-worldviews-in-design.md)
- [Critically Engaging With Models](/verraes.net/2022-09-critically-engaging-with-models.md)
- [Critically Engaging With Models (DDD Europe Keynote)](/verraes.net/2023-01-critically-engaging-with-models.md)
