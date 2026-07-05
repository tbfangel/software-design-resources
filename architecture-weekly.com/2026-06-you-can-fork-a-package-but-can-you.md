---
type: article
title: "You can fork a package, but can you own it?"
description: "Reacting to Mitchell Hashimoto's advice to fork dependencies, Oskar Dudycz argues the real issue isn't forking but consciously deciding which dependencies you can genuinely own and maintain."
resource: https://www.architecture-weekly.com/p/you-can-fork-a-package-but-can-you
tags: ["engineering-culture", "dependency-management", "supply-chain-security", "open-source-maintenance", "sbom", "bus-factor", "technical-decision-making"]
published: 2026-06
timestamp: 2026-07-05
---
# You can fork a package, but can you own it?

> Reacting to Mitchell Hashimoto's advice to fork dependencies, Oskar Dudycz argues the real issue isn't forking but consciously deciding which dependencies you can genuinely own and maintain.

## Key Facts
- Trivial libraries are prime supply-chain attack targets; writing your own removes that specific vector
- Understanding the full transitive dependency tree via SBOM is foundational to any security posture
- Adopting a "critical" dependency without weighing bus factor and maintainer sustainability creates preventable risk
- Emotional reactions to license changes or package removals reflect poor initial decisions, not the root problem
- LLMs don't resolve ownership; they make it easier to create unmaintained shadow code
- Organizations should define explicit dependency postures: inventory, criticality tiers, upgrade paths, and response protocols

## Summary
Reacting to Mitchell Hashimoto's advice to fork dependencies, Oskar Dudycz argues the real issue isn't forking but consciously deciding which dependencies you can genuinely own and maintain. Handwriting small utilities eliminates a specific supply-chain risk, but forking something like React is impractical for most teams. The deeper problem is installing dependencies without deliberate decision-making, which creates invisible liability through transitive dependencies. He advocates explicit dependency inventories (via SBOM), assessing each dependency's criticality and bus factor, and defining upgrade and response strategies—warning that LLMs don't solve ownership; they just make it easier to generate unmaintained "shadow IT."

## Links
- [Source](https://www.architecture-weekly.com/p/you-can-fork-a-package-but-can-you) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-engineering-culture.md)
- [Requiem for a 10x Engineer Dream](/architecture-weekly.com/2025-09-requiem-for-a-10x-engineer-dream.md)
- [Why Open Source Isn't Always Fair](/architecture-weekly.com/2025-09-why-open-source-isnt-always-fair.md)
- [Do We Still Need the QA Role?](/architecture-weekly.com/2024-do-we-still-need-the-qa-role.md)
