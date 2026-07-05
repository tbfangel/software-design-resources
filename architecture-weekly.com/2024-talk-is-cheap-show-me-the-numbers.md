---
type: article
title: "Talk is Cheap, Show Me the Numbers: Benchmarking for Performance"
description: "The author encountered performance issues with his open-source Node.js tools (Emmett and Pongo) when users deployed them in serverless environments where initial requests took over one second."
resource: https://www.architecture-weekly.com/p/talk-is-cheap-show-me-the-numbers
tags: ["observability", "performance-benchmarking", "connection-pooling", "serverless", "opentelemetry", "flame-graphs"]
published: 2024
timestamp: 2026-07-05
---
# Talk is Cheap, Show Me the Numbers: Benchmarking for Performance

> The author encountered performance issues with his open-source Node.js tools (Emmett and Pongo) when users deployed them in serverless environments where initial requests took over one second.

## Key Facts
- Don't assume connection pooling is always available due to serverless constraints and cold starts
- Systematically benchmark rather than speculate about performance issues based on assumptions
- Use statistical tools like Benchmark.js; avoid manual timer-based measurements that introduce bias
- Remain critical of benchmark results and test methodology to catch contaminated data
- Progress iteratively following: Make It Work → Make It Right → Make It Fast
- Integrate OpenTelemetry for detailed tracing and use Flame Graphs to visualize performance bottlenecks

## Summary
The author encountered performance issues with his open-source Node.js tools (Emmett and Pongo) when users deployed them in serverless environments where initial requests took over one second. Rather than guess at causes, systematic benchmarking identified bottlenecks. Benchmarks revealed dramatic performance differences: non-pooled connections achieved ~2-3 operations/second with 400ms+ execution time, while pooled connections achieved ~9-27 operations/second with 36-109ms execution time. The data showed that establishing database connections consumed the majority of latency. Immediate improvements included pre-generating database schemas upfront to eliminate redundant CREATE statements on each cold start, adding explicit connection sessions (similar to MongoDB's session API) allowing read-append sequences to reuse connections, and implementing CLI tools for upfront schema generation in serverless contexts. High standard deviations in initial results indicated test contamination where schema creation on first runs skewed averages.

## Links
- [Source](https://www.architecture-weekly.com/p/talk-is-cheap-show-me-the-numbers) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-observability.md)
- [Why to Measure and Make Our System Observable](/architecture-weekly.com/2024-why-to-measure-and-make-our-system.md)
- [Making Your System Observability Predictable](/architecture-weekly.com/2024-making-your-system-observability.md)
- [When Logs and Metrics Aren't Enough: Discovering Modern Observability](/architecture-weekly.com/2024-when-logs-and-metrics-arent-enough.md)
