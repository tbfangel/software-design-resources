---
type: article (snapshot from ongoing conversation with rebecca wirfs-brock)
title: "Tensions when Designing Evolvable Bounded Contexts"
description: "This piece identifies fundamental tensions in designing systems of bounded contexts."
resource: https://verraes.net/2021/04/tensions-when-designing-evolvable-bounded-contexts/
cluster: bounded-contexts
tags: ["api-design", "trade-offs"]
published: 2021-04
timestamp: 2026-07-05
---
# Tensions when Designing Evolvable Bounded Contexts

> This piece identifies fundamental tensions in designing systems of bounded contexts.

## Key Facts
- Multiple tensions affect evolvable context design: size vs. interface complexity, shared vs. specialized interfaces, ease of adding contexts vs. maintaining existing ones
- Low-bandwidth communication channels increase risk on projects depending on inter-context integration
- Interface choices involve careful balance: generic interfaces bloat with features to support many consumers; specialized interfaces increase maintenance
- Heuristics and experience matter more than formulaic rules for these design decisions

## Summary
This piece identifies fundamental tensions in designing systems of bounded contexts. A context is evolvable if changes are frequent, safe, and cheap. The key tensions: (1) many small contexts create larger interfaces, but small interfaces require larger contexts; (2) adding contexts to a shared interface makes it less evolvable; (3) specialized interfaces are harder to maintain but easier to consume than generic ones. The challenge involves finding semi-specialized interfaces shared among contexts with similar needs, which requires more inter-team coordination. No hard rules exist—instead, designers need heuristics for making these trade-offs and recognizing when to change them.

## Links
- [Source](https://verraes.net/2021/04/tensions-when-designing-evolvable-bounded-contexts/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-bounded-contexts.md)
- [No, Your Domains and Bounded Contexts Don't Map 1 on 1](/verraes.net/2025-08-domain-and-bounded-contexts-dont-map-one-on-one.md)
- [Splitting a Domain Across Multiple Bounded Contexts](/verraes.net/2021-06-split-domain-across-bounded-contexts.md)
- [Emergent Contexts through Refinement](/verraes.net/2019-06-emergent-contexts-through-refinement.md)
