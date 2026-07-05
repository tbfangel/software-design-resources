---
type: article
title: "I don't understand Python's Asyncio"
description: "Ronacher's honest admission of inability to reason confidently about Python's asyncio module."
resource: https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/
tags: ["software-design-philosophy", "python", "asyncio", "concurrency", "event-loops", "complexity", "futures"]
published: 2016-10
timestamp: 2026-07-05
---
# I don't understand Python's Asyncio

> Ronacher's honest admission of inability to reason confidently about Python's asyncio module.

## Key Facts
- Asyncio's complexity requires mastering ~14 primitives plus multiple special methods for basic use.
- Two incompatible Future types and inconsistent inspection functions create genuine confusion even for experts.
- Missing context-local storage is a critical gap for security-sensitive and observability features.

## Summary
Ronacher's honest admission of inability to reason confidently about Python's asyncio module. Problems: ~14 core primitives required for basic use, two incompatible Future types, different behaviour for `asyncio.iscoroutinefunction` vs `inspect.iscoroutinefunction`, coexistence of generator-based and async/await coroutines, missing context-local storage, and underwhelming performance relative to complexity. He "lacks sufficient confidence to advise others" on asyncio architecture despite years of experience with async systems.

## Links
- [Source](https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
