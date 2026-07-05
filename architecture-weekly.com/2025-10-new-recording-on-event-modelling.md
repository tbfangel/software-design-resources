---
type: presentation
title: "Event Modelling Anti-Patterns"
description: "Recording from DDD Europe presenting event-driven architecture anti-patterns."
resource: https://www.architecture-weekly.com/p/new-recording-on-event-modelling
cluster: event-driven-architecture
tags: ["event-modelling", "anti-patterns", "event-driven-architecture"]
published: 2025-10
timestamp: 2026-07-05
---
# Event Modelling Anti-Patterns

> Recording from DDD Europe presenting event-driven architecture anti-patterns.

## Key Facts
- Invest time in event modelling upfront to avoid expensive redesigns later
- Study anti-patterns alongside best practices to recognize red flags early
- Consider context when evaluating architectural decisions—no universal solutions exist
- Learn from others' mistakes through case studies to avoid repeating common errors
- Recognize that event-driven architecture requires different thinking than traditional CRUD approaches

## Summary
Recording from DDD Europe presenting event-driven architecture anti-patterns. The core claim is that proper event modelling effort pays dividends while neglecting it creates significant pain later, and knowing what not to do is often more valuable than knowing best practices alone. Anti-patterns covered include State Obsession (overemphasizing current state rather than tracking behavioral events), Property Sourcing (asking external systems for information instead of capturing what happened), CRUD Sourcing (treating event sourcing like traditional CRUD operations), and Clickbait Events (overly vague or poorly designed event definitions). The talk includes a case study about a project attempting to modernize legacy software into event-driven architecture, demonstrating how ignoring modelling practices leads to distributed monoliths and race conditions. Context acts as "the thin line between bad and good practices," meaning architectural choices depend on specific circumstances.

## Links
- [Source](https://www.architecture-weekly.com/p/new-recording-on-event-modelling) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Dealing with Eventual Consistency](/architecture-weekly.com/2024-dealing-with-eventual-consistency.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
