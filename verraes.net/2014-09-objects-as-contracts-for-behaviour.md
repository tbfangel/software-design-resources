---
type: article
title: "Objects as Contracts for Behaviour"
description: "Objects should be understood as contracts for behavior, not as containers for data."
resource: https://verraes.net/2014/09/objects-as-contracts-for-behaviour/
cluster: modelling-design-heuristics
tags: ["object-oriented-design", "api-design", "encapsulation", "software-design"]
published: 2014-09
timestamp: 2026-07-05
---
# Objects as Contracts for Behaviour

> Objects should be understood as contracts for behavior, not as containers for data.

## Key Facts
- Objects are behavioral contracts, not data containers
- A good object interface declares operations clearly and enforces invariants
- Encapsulation is about hiding implementation and enforcing contracts
- Thinking in contracts rather than data structures leads to better object-oriented design

## Summary
Objects should be understood as contracts for behavior, not as containers for data. An object declares what operations it supports and the guarantees those operations provide (preconditions, postconditions, invariants). This contract-based view of objects leads to better encapsulation, clearer interfaces, and more maintainable code. Rather than thinking "what fields does this object have," think "what operations does this object support and what do they guarantee."

## Links
- [Source](https://verraes.net/2014/09/objects-as-contracts-for-behaviour/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-modelling-design-heuristics.md)
- [Surfacing Worldviews in Design](/verraes.net/2023-07-surfacing-worldviews-in-design.md)
- [Critically Engaging With Models](/verraes.net/2022-09-critically-engaging-with-models.md)
- [Critically Engaging With Models (DDD Europe Keynote)](/verraes.net/2023-01-critically-engaging-with-models.md)
