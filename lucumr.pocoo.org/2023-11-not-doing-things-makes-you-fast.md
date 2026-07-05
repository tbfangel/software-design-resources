---
type: article
title: "Bundleless: Not Doing Things Makes You Fast"
description: "Ronacher argues that bundleless development is viable when you minimise what gets loaded, not when you consolidate modules."
resource: https://lucumr.pocoo.org/2023/11/30/not-doing-things-makes-you-fast/
cluster: software-design-philosophy
tags: ["javascript", "web-development", "frontend", "performance", "software-architecture"]
published: 2023-11
timestamp: 2026-07-05
---
# Bundleless: Not Doing Things Makes You Fast

> Ronacher argues that bundleless development is viable when you minimise what gets loaded, not when you consolidate modules.

## Key Facts
- Bundling is fast because it reduces code execution, not because it consolidates files.
- Bundleless development works when lazy loading and minimal dependencies reduce what executes initially.
- "Not doing things" — lazy loading, minimal dependencies, deferred execution — is the universal performance strategy.

## Summary
Ronacher argues that bundleless development is viable when you minimise what gets loaded, not when you consolidate modules. The misunderstanding: bundlers are fast because they reduce what executes, not because they consolidate files. Python loads modules individually without bundling and remains performant with proper structure. Solutions: minimise cross-dependencies, implement lazy loading, avoid circular dependencies. Vite proves bundleless works when projects are properly organised. "Not doing things makes you fast" applies broadly.

## Links
- [Source](https://lucumr.pocoo.org/2023/11/30/not-doing-things-makes-you-fast/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
