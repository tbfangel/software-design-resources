---
type: article
title: "The Legacy Mirror Heuristic"
description: "When designing a new system or bounded context, look at existing legacy systems for clues about what the domain actually requires."
resource: https://verraes.net/2021/03/heuristic-legacy-mirror/
tags: ["modelling-design-heuristics", "legacy-systems", "existing-code", "design-heuristics", "constraints", "learning-from-implementation"]
published: 2021-03
timestamp: 2026-07-05
---
# The Legacy Mirror Heuristic

> When designing a new system or bounded context, look at existing legacy systems for clues about what the domain actually requires.

## Key Facts
- Legacy systems contain embedded domain knowledge worth understanding
- Examining where legacy code struggled reveals real constraints and requirements
- Rather than wholesale rejection, use legacy systems as learning resources for new designs
- The "mirror" heuristic helps avoid repeating the same costly mistakes

## Summary
When designing a new system or bounded context, look at existing legacy systems for clues about what the domain actually requires. Legacy code, despite its flaws, often embeds hard-won knowledge about constraints and requirements that may not be explicitly documented. This heuristic suggests asking: what problem was this legacy system solving? Where did it struggle? What proved difficult or costly to change? These answers inform design decisions in the new system. The legacy code becomes a mirror showing what concepts and rules matter in the domain.

## Links
- [Source](https://verraes.net/2021/03/heuristic-legacy-mirror/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-modelling-design-heuristics.md)
- [Surfacing Worldviews in Design](/verraes.net/2023-07-surfacing-worldviews-in-design.md)
- [Critically Engaging With Models](/verraes.net/2022-09-critically-engaging-with-models.md)
- [Critically Engaging With Models (DDD Europe Keynote)](/verraes.net/2023-01-critically-engaging-with-models.md)
