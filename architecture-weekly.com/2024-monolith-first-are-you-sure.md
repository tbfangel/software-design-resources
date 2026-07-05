---
type: article
title: "Monolith-First: Are You Sure?"
description: "Challenges the trendy \"modular monolith-first\" architectural advice as oversimplified and often becoming a facade for taking shortcuts."
resource: https://www.architecture-weekly.com/p/monolith-first-are-you-sure
cluster: architecture-patterns
tags: ["modular-monolith", "microservices", "modularity", "databases", "deployment"]
published: 2024
timestamp: 2026-07-05
---
# Monolith-First: Are You Sure?

> Challenges the trendy "modular monolith-first" architectural advice as oversimplified and often becoming a facade for taking shortcuts.

## Key Facts
- Pursue "Modular-First" thinking, then decide deployment topology based on actual constraints
- Address these fundamentals regardless of architecture choice: data isolation strategy, consistency requirements, module boundary clarity, integration patterns, DevOps processes matching team capability
- Module boundary erosion happens when boundaries lack physical enforcement—developers take the easiest path
- Generic Unit of Work attempting to gather changes across modules creates deadlocks, performance issues, and accidental complexity
- The promised deployment simplicity of monoliths requires mature tooling (Nx, Bazel) that remains underdeveloped for backend languages
- The real work isn't selecting monolith versus microservices—it's designing modularity properly first

## Summary
Challenges the trendy "modular monolith-first" architectural advice as oversimplified and often becoming a facade for taking shortcuts. The core claim: if you can't deal with modularity, then neither monoliths nor microservices will work for you—the real choice isn't between deployment strategies but between committing to proper modular design or accepting technical debt. Direct database access, shared transactions across modules, and convenience shortcuts gradually dissolve module separation, creating a monolith that's merely a traditional monolith with extra folders. Unlike distributed systems, memory leaks or CPU spikes in one module crash the entire application affecting all business functions simultaneously. Shared databases create invisible dependencies where schema changes ripple unexpectedly because the analytics module directly queries orders tables, making hidden dependencies break spectacularly at runtime. Coordinating deployments across a monorepo introduces "release train" problems where one team's untested changes force everyone to deploy together.

## Links
- [Source](https://www.architecture-weekly.com/p/monolith-first-are-you-sure) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-architecture-patterns.md)
- [My Thoughts on Vertical Slices, CQRS, and Semantic Diffusion](/architecture-weekly.com/2025-09-my-thoughts-on-vertical-slices-cqrs.md)
- [So You Want to Break Down a Monolith?](/architecture-weekly.com/2024-so-you-want-to-break-down-monolith.md)
- [Start Alone, Then Together: Why Software Modelling Needs Solitary Brainstorming](/architecture-weekly.com/2024-start-alone-then-together-why-software.md)
