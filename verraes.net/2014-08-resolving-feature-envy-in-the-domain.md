---
type: article
title: "Resolving Feature Envy in the Domain"
description: "Feature envy—when one object frequently calls methods on another—is a code smell pointing to a deeper domain modelling issue."
resource: https://verraes.net/2014/08/resolving-feature-envy-in-the-domain/
tags: ["modelling-design-heuristics", "feature-envy", "domain-modelling", "object-responsibilities", "refactoring", "design-smells"]
published: 2014-08
timestamp: 2026-07-05
---
# Resolving Feature Envy in the Domain

> Feature envy—when one object frequently calls methods on another—is a code smell pointing to a deeper domain modelling issue.

## Key Facts
- Feature envy indicates misaligned domain concepts, not just poor code organization
- The symptom (one object calling many methods on another) points to the real problem (wrong boundary or responsibility)
- Solving feature envy well requires stepping back to the domain model
- Code smells are diagnostic tools for discovering domain modelling issues

## Summary
Feature envy—when one object frequently calls methods on another—is a code smell pointing to a deeper domain modelling issue. Rather than moving methods between classes, use feature envy as a signal to revisit the domain. Perhaps the feature belongs to a different conceptual entity, or perhaps the domain boundary is wrong. Verraes shows how to resolve feature envy through better domain understanding rather than mechanical refactoring.

## Links
- [Source](https://verraes.net/2014/08/resolving-feature-envy-in-the-domain/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-modelling-design-heuristics.md)
- [Surfacing Worldviews in Design](/verraes.net/2023-07-surfacing-worldviews-in-design.md)
- [Critically Engaging With Models](/verraes.net/2022-09-critically-engaging-with-models.md)
- [Critically Engaging With Models (DDD Europe Keynote)](/verraes.net/2023-01-critically-engaging-with-models.md)
