---
type: article
title: "My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion"
description: "Architectural patterns like CQRS and Vertical Slices Architecture (VSA) have become corrupted through \"semantic diffusion\" where original meanings get diluted as ideas spread."
resource: https://www.architecture-weekly.com/p/my-thoughts-on-vertical-slices-cqrs
tags: ["architecture-patterns", "vertical-slices-architecture", "cqrs", "semantic-diffusion", "modularity", "feature-organization"]
published: 2025-09
timestamp: 2026-07-05
---
# My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion

> Architectural patterns like CQRS and Vertical Slices Architecture (VSA) have become corrupted through "semantic diffusion" where original meanings get diluted as ideas spread.

## Key Facts
- Consult original sources: read Greg Young's CQRS documents and Jimmy Bogard's VSA article directly
- Start simple with straightforward structures and evolve architecture as domain understanding grows
- Minimize coupling between slices while maximizing cohesion within slices—this captures the actual principle
- Use feature-focused organization to reduce cognitive load and align with team structures
- Distinguish between patterns and implementations—tools like MediatR aren't required, they're optional choices
- CRUD and CQRS are orthogonal—complexity isn't required, naming should reflect business intent

## Summary
Architectural patterns like CQRS and Vertical Slices Architecture (VSA) have become corrupted through "semantic diffusion" where original meanings get diluted as ideas spread. CQRS originally means separating commands from queries but now carries false assumptions about requiring two databases, event sourcing, and eventual consistency. VSA means organizing code by features instead of technical layers but has accumulated unfounded constraints like no shared code or separate database tables per slice. Most people learn these patterns second-hand without consulting original sources, perpetuating misconceptions. Two viable VSA implementation strategies exist: Pure Vertical Slices where each feature is completely self-contained with endpoints, business logic, and data access grouped together for maximum independence, or a Thin Coordination Layer where a facade handles routing and cross-cutting concerns while keeping business logic isolated in slices. Vertical slices can nest within business domains, public API files establish module boundaries, and business logic stays pure and separate from HTTP concerns.

## Links
- [Source](https://www.architecture-weekly.com/p/my-thoughts-on-vertical-slices-cqrs) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-architecture-patterns.md)
- [So You Want to Break Down a Monolith?](/architecture-weekly.com/2024-so-you-want-to-break-down-monolith.md)
- [Monolith-First: Are You Sure?](/architecture-weekly.com/2024-monolith-first-are-you-sure.md)
- [Start Alone, Then Together: Why Software Modelling Needs Solitary Brainstorming](/architecture-weekly.com/2024-start-alone-then-together-why-software.md)
