---
type: article (co-authored with rebecca wirfs-brock)
title: "Splitting a Domain Across Multiple Bounded Contexts"
description: "This post provides a compelling case study: a wholesaler with a single Sales domain but two fundamentally different ordering processes (automated webshop vs."
resource: https://verraes.net/2021/06/split-domain-across-bounded-contexts/
tags: ["bounded-contexts", "domain-driven-design", "rate-of-change", "understandability-boundaries", "coordination-costs"]
published: 2021-06
timestamp: 2026-07-05
---
# Splitting a Domain Across Multiple Bounded Contexts

> This post provides a compelling case study: a wholesaler with a single Sales domain but two fundamentally different ordering processes (automated webshop vs.

## Key Facts
- Bounded contexts manage the understandability of system models, not the organization's perception of domains
- The Rate of Change Heuristic: organize contexts around concepts that evolve at similar paces
- Unifying concepts can cost more in coordination than it saves in abstraction
- Deliberate design choices should weigh the benefits of consistency against the cost of imposed coordination

## Summary
This post provides a compelling case study: a wholesaler with a single Sales domain but two fundamentally different ordering processes (automated webshop vs. manual account manager entry), requiring two distinct bounded contexts. The authors argue that bounded contexts represent understandability boundaries—you can grasp the model and language in isolation—rather than domain boundaries. The most striking example: a commodities trading firm with 20 separate traders, each requiring their own bounded context within the same Trading domain. This seemingly chaotic design actually optimized for speed, collaboration with domain experts, and minimized coordination overhead.

## Links
- [Source](https://verraes.net/2021/06/split-domain-across-bounded-contexts/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-bounded-contexts.md)
- [No, Your Domains and Bounded Contexts Don't Map 1 on 1](/verraes.net/2025-08-domain-and-bounded-contexts-dont-map-one-on-one.md)
- [Tensions when Designing Evolvable Bounded Contexts](/verraes.net/2021-04-tensions-when-designing-evolvable-bounded-contexts.md)
- [Emergent Contexts through Refinement](/verraes.net/2019-06-emergent-contexts-through-refinement.md)
