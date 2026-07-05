---
type: article
title: "So You Want to Break Down a Monolith?"
description: "Most monolith-to-microservices migrations fail or stall because teams pursue architectural ambitions rather than business value—the author hasn't seen a complete monolith migration succeed."
resource: https://www.architecture-weekly.com/p/so-you-want-to-break-down-monolith
cluster: architecture-patterns
tags: ["modular-monolith", "microservices", "legacy-systems", "migration"]
published: 2024
timestamp: 2026-07-05
---
# So You Want to Break Down a Monolith?

> Most monolith-to-microservices migrations fail or stall because teams pursue architectural ambitions rather than business value—the author hasn't seen a complete monolith migration succeed.

## Key Facts
- Focus on business outcomes, not architectural purity or following industry trends
- Question initiatives lacking clear value propositions before committing significant resources
- Be skeptical of customer feedback as politeness doesn't equal commitment to using new features
- Align teams with domain boundaries before technical work begins to ensure organizational structure supports goals
- Accept that most systems benefit from architectural pragmatism rather than pursuing microservices as an end goal
- Start with read operations, use feature flags for traffic control, and migrate in vertical slices for learning

## Summary
Most monolith-to-microservices migrations fail or stall because teams pursue architectural ambitions rather than business value—the author hasn't seen a complete monolith migration succeed. Accept partial migration where some legacy components should remain in the monolith when extraction costs exceed benefits, preventing scope creep and endless rewrites. Define business metrics first with concrete, measurable outcomes tied to actual business impact like reducing feature delivery time from 3 weeks to 1 week or decreasing incident rates by 40%, not vague goals like "improve scalability." Use the Strangler Fig Pattern to gradually route functionality through a facade to new services while maintaining the legacy system, enabling safe, reversible changes with continuous value delivery. For data migration, rather than replicating legacy database schemas via tools like Debezium, add event publishing to the monolith and have new services consume those events with optimized data stores. Maintaining two systems creates data consistency problems, so transition one system to read-only status as quickly as possible.

## Links
- [Source](https://www.architecture-weekly.com/p/so-you-want-to-break-down-monolith) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-architecture-patterns.md)
- [My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion](/architecture-weekly.com/2025-09-my-thoughts-on-vertical-slices-cqrs.md)
- [Monolith-First: Are You Sure?](/architecture-weekly.com/2024-monolith-first-are-you-sure.md)
- [Start Alone, Then Together: Why Software Modelling Needs Solitary Brainstorming](/architecture-weekly.com/2024-start-alone-then-together-why-software.md)
