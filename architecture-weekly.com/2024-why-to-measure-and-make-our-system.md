---
type: article
title: "Why to Measure and Make Our System Observable"
description: "Systems operate in an unpredictable world requiring observability to handle complexity."
resource: https://www.architecture-weekly.com/p/why-to-measure-and-make-our-system
cluster: observability
tags: ["complexity", "metrics", "uncertainty"]
published: 2024
timestamp: 2026-07-05
---
# Why to Measure and Make Our System Observable

> Systems operate in an unpredictable world requiring observability to handle complexity.

## Key Facts
- Embrace the chaotic world's unpredictability by starting with business metrics and analyzing features through complexity lenses
- Provide rich observability data without assuming perfection, enabling post-incident investigation and systematic learning
- Correlate technical and product observability data to understand system behavior holistically
- Implement cost control through sampling, filtering, and retention policies to prevent prohibitive expenses
- Define measurable outcomes before deployment to avoid building features that consume resources without providing value
- Use observability to identify mismatches between technical implementation and business reality

## Summary
Systems operate in an unpredictable world requiring observability to handle complexity. The Cynefin framework's four domains (clear, complicated, complex, chaotic) show that mismatches between expectations and reality—whether bugs, exploits, or user misalignments—can be catastrophic without proper measurement. The author shares a cautionary tale where his company launched a "clickbait feature" enabling cloud-based full-text search of on-premises files, discovering 90% of cloud spending went toward this feature that only one customer barely used because they lacked observability. The three-pronged strategy involves defining measurable outcomes before deployment ensuring adequate data collection (telemetry, events, analytics), building metrics and verifying progress over time to determine whether features merit continuation or pivoting, and employing systematic experimentation to convert "lucky accidents" into systematic discoveries. Distinguish between known knowns/unknowns (predictable via classical metrics, alarms, CPU/memory monitoring) and unknown unknowns (requiring granular traces and events capturing technical/product contexts).

## Links
- [Source](https://www.architecture-weekly.com/p/why-to-measure-and-make-our-system) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-observability.md)
- [Making Your System Observability Predictable](/architecture-weekly.com/2024-making-your-system-observability.md)
- [When Logs and Metrics Aren't Enough: Discovering Modern Observability](/architecture-weekly.com/2024-when-logs-and-metrics-arent-enough.md)
- [Applying Observability: From Strategy to Practice with Hazel Weakly](/architecture-weekly.com/2024-applying-observability-from-strategy.md)
