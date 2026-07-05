---
type: article
title: "Emergent Contexts through Refinement"
description: "This masterclass in model refinement uses a concrete problem (handling monetary values with different precisions across contexts) to show how bounded contexts emerge naturally from deeper modeling."
resource: https://verraes.net/2019/06/emergent-contexts-through-refinement/
tags: ["bounded-contexts", "value-objects", "model-refinement", "domain-driven-design", "currency", "precision", "boundaries"]
published: 2019-06
timestamp: 2026-07-05
---
# Emergent Contexts through Refinement

> This masterclass in model refinement uses a concrete problem (handling monetary values with different precisions across contexts) to show how bounded contexts emerge naturally from deeper modeling.

## Key Facts
- Contexts emerge from deep modeling and refining domain concepts, not from upfront analysis
- Making implicit concepts explicit in the ubiquitous language drives boundary discovery
- Rich, type-safe models enable different specialized versions in different contexts
- A minimalist interface (no unnecessary methods or back-conversions) reinforces domain logic and prevents misuse

## Summary
This masterclass in model refinement uses a concrete problem (handling monetary values with different precisions across contexts) to show how bounded contexts emerge naturally from deeper modeling. Starting with a naive Money type, Verraes progressively refines it: separating PreciseMoney and RoundedMoney, introducing currency-specific types (PreciseEUR, RoundedBTC), and discovering concepts like ConversionRate and ForeignExchange. Each refinement makes implicit domain concepts explicit and naturally leads to boundaries. Different bounded contexts (Sales, Reporting, Compliance) need different money models—not because the business sees them differently, but because the engineering and business needs diverge. The lesson: don't decide contexts upfront; refine your model and boundaries will emerge.

## Links
- [Source](https://verraes.net/2019/06/emergent-contexts-through-refinement/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-bounded-contexts.md)
- [No, Your Domains and Bounded Contexts Don't Map 1 on 1](/verraes.net/2025-08-domain-and-bounded-contexts-dont-map-one-on-one.md)
- [Splitting a Domain Across Multiple Bounded Contexts](/verraes.net/2021-06-split-domain-across-bounded-contexts.md)
- [Tensions when Designing Evolvable Bounded Contexts](/verraes.net/2021-04-tensions-when-designing-evolvable-bounded-contexts.md)
