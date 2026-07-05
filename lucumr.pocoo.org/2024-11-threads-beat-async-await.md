---
type: article
title: "Playground Wisdom: Threads Beat Async/Await"
description: "Ronacher argues that async/await is fundamentally flawed for most languages."
resource: https://lucumr.pocoo.org/2024/11/18/threads-beat-async-await/
tags: ["software-design-philosophy", "concurrency", "async-await", "virtual-threads", "structured-concurrency", "java-project-loom"]
published: 2024-11
timestamp: 2026-07-05
---
# Playground Wisdom: Threads Beat Async/Await

> Ronacher argues that async/await is fundamentally flawed for most languages.

## Key Facts
- Async/await creates "coloured functions" that infect codebases and create maintenance friction across call boundaries.
- Structured concurrency (nursery pattern) and channels are the valuable innovations from the async era; they should survive it.
- Virtual threads with structured concurrency are the better model: blocking code, implicit suspension, preserved stacks.

## Summary
Ronacher argues that async/await is fundamentally flawed for most languages. Problems: "coloured functions" create incompatibility across call boundaries, unresolved promises that never settle, loss of call stack information for debugging, and failure to prevent back pressure problems. Thread advantages: natural suspension from any point, preserved call stacks, no special syntax required. Positive innovations from async that should be preserved: structured concurrency (nursery pattern), channels, and making concurrency a language-level concern. Future languages should use virtual threads (Java Project Loom) with structured concurrency.

## Links
- [Source](https://lucumr.pocoo.org/2024/11/18/threads-beat-async-await/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
