---
type: article
title: "Killer Metrics: Or Why You Should Measure Feature Success"
description: "Organizations build features without defining upfront when to remove them, wasting resources maintaining unused functionality."
resource: https://www.architecture-weekly.com/p/killer-metrics-or-why-you-should
cluster: observability
tags: ["metrics", "technical-debt", "product-management"]
published: 2024
timestamp: 2026-07-05
---
# Killer Metrics: Or Why You Should Measure Feature Success

> Organizations build features without defining upfront when to remove them, wasting resources maintaining unused functionality.

## Key Facts
- Frame conversations around "Bring me problems, not solutions" rather than accepting vague directives
- Shift discussions toward measurable outcomes to create psychological permission to remove unsuccessful features
- Mine production data, examine SLA commitments, review server logs, and study comparable products before building
- Define success metrics upfront with specific timeframes and failure thresholds for discontinuation
- Test concepts through limited rollouts to validate assumptions cheaply before committing to full implementation
- Recognize that removing unsuccessful features is success, not failure, when measured against opportunity cost

## Summary
Organizations build features without defining upfront when to remove them, wasting resources maintaining unused functionality. The author illustrates with a real case where a company spent 90% of cloud infrastructure costs on a full-text search feature that only one customer rarely used, with absence of success metrics preventing timely removal. Success isn't measured by how long code lasts, but by the value it creates during its lifetime—features should be designed with removability in mind from inception. Before building, collaborate with business stakeholders to establish killer metrics: Define the Why (understand actual business problem like increasing customer retention), Establish Metrics (set specific, quantifiable targets with timeframes like "if weekly returns don't improve 5% within two months, or unsubscribe rates exceed 8%, discontinue"), Gather Baseline Data (analyze current analytics, production logs, competitor features, customer behavior), and conduct Small Experiments First (test concepts through limited rollouts to 100 users before full implementation).

## Links
- [Source](https://www.architecture-weekly.com/p/killer-metrics-or-why-you-should) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-observability.md)
- [Why to Measure and Make Our System Observable](/architecture-weekly.com/2024-why-to-measure-and-make-our-system.md)
- [Making Your System Observability Predictable](/architecture-weekly.com/2024-making-your-system-observability.md)
- [When Logs and Metrics Aren't Enough: Discovering Modern Observability](/architecture-weekly.com/2024-when-logs-and-metrics-arent-enough.md)
