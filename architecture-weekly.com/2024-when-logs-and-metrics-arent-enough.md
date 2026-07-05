---
type: article
title: "When Logs and Metrics Aren't Enough: Discovering Modern Observability"
description: "Traditional monitoring approaches using logs and metrics provide only fragmented snapshots of system health, failing to reveal causation and context in distributed systems."
resource: https://www.architecture-weekly.com/p/when-logs-and-metrics-arent-enough
tags: ["observability", "distributed-tracing", "opentelemetry", "grafana-tempo", "spans", "observability-tools"]
published: 2024
timestamp: 2026-07-05
---
# When Logs and Metrics Aren't Enough: Discovering Modern Observability

> Traditional monitoring approaches using logs and metrics provide only fragmented snapshots of system health, failing to reveal causation and context in distributed systems.

## Key Facts
- Instrument from the ground up with tracing capabilities, not just logs and metrics
- Leverage query capabilities in tools like Grafana Tempo to slice and correlate data across services
- Move beyond aggregated metrics to understand individual request lifecycles and causation
- Use observability proactively to understand system behavior deeply before problems occur
- Traces reveal why problems happen, not just that they happened
- Correlation across services is the key differentiator between traditional monitoring and modern observability

## Summary
Traditional monitoring approaches using logs and metrics provide only fragmented snapshots of system health, failing to reveal causation and context in distributed systems. You might see that "all 100 connections are in use" but cannot easily determine why or which specific operations caused the bottleneck. Modern observability uses three core components: Traces (following a request's complete journey through distributed systems), Spans (individual units of work within traces, capturing timing and metadata), and Span Events (markers for important milestones within operations). Tools like OpenTelemetry (instrumentation) and Grafana Tempo (visualization) enable interactive troubleshooting by correlating data across services. The article walks through diagnosing connection pool exhaustion by querying spans where connection-acquired duration exceeded 1 second, grouping problematic connections by task ID, correlating with database query spans to identify slow SELECT statements, and analyzing query attributes revealing 50,000 rows returned, discovering long-running queries on the orders table consistently held connections during peak utilization.

## Links
- [Source](https://www.architecture-weekly.com/p/when-logs-and-metrics-arent-enough) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-observability.md)
- [Why to Measure and Make Our System Observable](/architecture-weekly.com/2024-why-to-measure-and-make-our-system.md)
- [Making Your System Observability Predictable](/architecture-weekly.com/2024-making-your-system-observability.md)
- [Applying Observability: From Strategy to Practice with Hazel Weakly](/architecture-weekly.com/2024-applying-observability-from-strategy.md)
