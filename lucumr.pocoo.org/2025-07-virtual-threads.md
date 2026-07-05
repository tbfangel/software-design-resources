---
type: article
title: "From Async/Await to Virtual Threads"
description: "Ronacher proposes that Python adopt virtual threads with structured concurrency rather than continuing to develop asyncio."
resource: https://lucumr.pocoo.org/2025/7/26/virtual-threads/
tags: ["software-design-philosophy", "python", "virtual-threads", "async-await", "concurrency", "free-threading"]
published: 2025-07
timestamp: 2026-07-05
---
# From Async/Await to Virtual Threads

> Ronacher proposes that Python adopt virtual threads with structured concurrency rather than continuing to develop asyncio.

## Key Facts
- Virtual threads would allow programmers to write blocking code that the interpreter suspends automatically.
- Free-threading makes asyncio's non-blocking guarantee less meaningful as a differentiator.
- A `ThreadGroup` context manager can provide structured concurrency without async syntax overhead.

## Summary
Ronacher proposes that Python adopt virtual threads with structured concurrency rather than continuing to develop asyncio. Async/await "leaks complexity into the programming language for users" — futures, promises, task abstractions all require learning. Virtual threads move concurrency complexity "into the interpreter and the internal APIs" where it belongs. Free-threading (GIL removal) makes async's non-blocking guarantees less meaningful. Proposed API: `with ThreadGroup() as g: g.spawn(...)` for structured concurrent operations.

## Links
- [Source](https://lucumr.pocoo.org/2025/7/26/virtual-threads/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
