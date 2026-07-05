---
type: article
title: "I'm not feeling the async pressure"
description: "Ronacher argues that async/await systems systematically ignore back pressure — the resistance that communicates resource constraints upstream."
resource: https://lucumr.pocoo.org/2020/1/1/async-pressure/
tags: ["software-design-philosophy", "async-await", "back-pressure", "flow-control", "http-2", "asyncio", "system-design"]
published: 2020-01
timestamp: 2026-07-05
---
# I'm not feeling the async pressure

> Ronacher argues that async/await systems systematically ignore back pressure — the resistance that communicates resource constraints upstream.

## Key Facts
- Async's ease of use masks distributed-system complexity that thread-based systems contained more naturally.
- Back pressure must be designed explicitly in async systems; the default is unbounded queuing and eventual crash.
- `asyncio.StreamWriter.write()` without `drain()` is a footgun that async systems make too easy to deploy.

## Summary
Ronacher argues that async/await systems systematically ignore back pressure — the resistance that communicates resource constraints upstream. When async systems queue requests without bound, they buffer silently until memory exhaustion and failure. Uses the 2008 Heathrow Terminal 5 baggage collapse as an analogy for admission-of-overload vs silent buffering. Python's `asyncio.StreamWriter.write()` lacks implicit flow control; `drain()` must be called manually. HTTP/2's flow control signals are commonly ignored in implementations.

## Links
- [Source](https://lucumr.pocoo.org/2020/1/1/async-pressure/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
