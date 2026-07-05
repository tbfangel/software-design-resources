---
type: article
title: "Conway's Law Doesn't Apply to Rigid Designs"
description: "Conway's Law states that system designs mirror organizational communication structures."
resource: https://verraes.net/2022/05/conways-law-vs-rigid-designs/
cluster: messaging-distributed-systems
tags: ["conways-law", "system-design", "organizational-design"]
published: 2022-05
timestamp: 2026-07-05
---
# Conway's Law Doesn't Apply to Rigid Designs

> Conway's Law states that system designs mirror organizational communication structures.

## Key Facts
- Conway's Law applies to flexible systems; rigid systems resist organizational change
- Reorganization alone won't fix ossified designs
- Greenfield projects: use Inverse Conway Manoeuvre; existing systems: invest in design work

## Summary
Conway's Law states that system designs mirror organizational communication structures. However, this only holds when system design is flexible. Rigid, ossified designs resist reorganization—restructuring teams won't change a system that's cemented in tight coupling. The post extends Conway's Law: system design mirrors communication structure only to the extent the system's flexibility allows. For greenfield projects, use the Inverse Conway Manoeuvre (restructure teams to achieve desired design); for rigid systems, focus on design work and decoupling instead. Examples show companies whose systems ossified despite reorganizations. Good design requires constant attention to prevent rigidity; theoretical models and clear communication between teams help enable better design choices.

## Links
- [Source](https://verraes.net/2022/05/conways-law-vs-rigid-designs/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
