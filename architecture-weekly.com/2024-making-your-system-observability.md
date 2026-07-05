---
type: article
title: "Making Your System Observability Predictable"
description: "Most teams treat observability as an afterthought, adding auto-instrumentation just before production without ensuring predictable, testable telemetry data."
resource: https://www.architecture-weekly.com/p/making-your-system-observability
tags: ["observability", "opentelemetry", "test-driven-instrumentation", "telemetry-testing", "spans", "metrics"]
published: 2024
timestamp: 2026-07-05
---
# Making Your System Observability Predictable

> Most teams treat observability as an afterthought, adding auto-instrumentation just before production without ensuring predictable, testable telemetry data.

## Key Facts
- Define telemetry requirements upfront through tests before implementing features
- Use semantic naming conventions to create understandable, queryable observability data
- Test both spans and metrics to ensure complete instrumentation coverage
- Keep testing reasonable by verifying critical attributes and events without excessive granularity
- Treat observability as a quality parameter verified through automated tests, not an afterthought
- Leverage OpenTelemetry standard with in-memory exporters for test verification during development

## Summary
Most teams treat observability as an afterthought, adding auto-instrumentation just before production without ensuring predictable, testable telemetry data. This reactive approach fails to catch observability gaps. Instead, observability should be a quality parameter verified through tests, similar to how we test business logic. The author proposes treating telemetry data (spans and metrics) as system outputs that should be verified through automated tests, ensuring observability is built predictably from the ground up. The implementation uses TracerProvider and MeterProvider for centralized telemetry configuration, in-memory span exporters and metric readers for test verification, spans to track distributed operations like connection acquisition, and histograms to record value distributions like acquisition time. Span names follow dotted notation like "aw.db.connection_pool.connection_acquisition" for clarity.

## Links
- [Source](https://www.architecture-weekly.com/p/making-your-system-observability) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-observability.md)
- [Why to Measure and Make Our System Observable](/architecture-weekly.com/2024-why-to-measure-and-make-our-system.md)
- [When Logs and Metrics Aren't Enough: Discovering Modern Observability](/architecture-weekly.com/2024-when-logs-and-metrics-arent-enough.md)
- [Applying Observability: From Strategy to Practice with Hazel Weakly](/architecture-weekly.com/2024-applying-observability-from-strategy.md)
