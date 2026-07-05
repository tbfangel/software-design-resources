---
type: article
title: "Yoda Principle for better integrations"
description: "Oskar Dudycz argues that commands in APIs and workflows should be named for the definitive business action they perform, not for a tentative check."
resource: https://www.architecture-weekly.com/p/yoda-principle-for-better-integrations
tags: ["architecture-patterns", "api-design", "integration-patterns", "command-naming", "command-query-separation", "race-conditions", "system-boundaries"]
published: 2026-04
timestamp: 2026-07-05
---
# Yoda Principle for better integrations

> Oskar Dudycz argues that commands in APIs and workflows should be named for the definitive business action they perform, not for a tentative check.

## Key Facts
- Name commands for definitive business actions ("ReserveProducts"), not tentative checks ("VerifyProductExists")
- Queries return possibly-stale data; commands trigger state changes with guaranteed rule verification—don't conflate them
- Verify/Validate/Check prefixes create false security and hand-wave over real integration complexity
- Let the target service enforce all conditions in its own logic rather than requiring redundant preliminary calls
- Precise command naming prevents race conditions and clarifies service boundaries
- Design for inevitable command rejection instead of trusting tentative pre-checks

## Summary
Oskar Dudycz argues that commands in APIs and workflows should be named for the definitive business action they perform, not for a tentative check. Using an e-commerce fulfillment example, he shows how naming a command `VerifyProductExists` masks its real effect—`ReserveProducts`—which leads to chatty, redundant integrations and race conditions between the check and the action. By avoiding "Verify/Validate/Check" prefixes and letting the owning service enforce all business rules within a single definitive command, teams get clearer boundaries, fewer sequential round-trips, and systems designed to handle rejection rather than lulled into false confidence by preliminary checks.

## Links
- [Source](https://www.architecture-weekly.com/p/yoda-principle-for-better-integrations) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-architecture-patterns.md)
- [My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion](/architecture-weekly.com/2025-09-my-thoughts-on-vertical-slices-cqrs.md)
- [So You Want to Break Down a Monolith?](/architecture-weekly.com/2024-so-you-want-to-break-down-monolith.md)
- [Monolith-First: Are You Sure?](/architecture-weekly.com/2024-monolith-first-are-you-sure.md)
