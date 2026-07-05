---
type: article
title: "Your Node is Leaking Memory? setTimeout Could be the Reason"
description: "Ronacher documents a Node.js memory leak caused by `setTimeout` returning heavyweight `Timeout` objects (unlike browsers, which return numbers)."
resource: https://lucumr.pocoo.org/2024/6/5/node-timeout/
cluster: software-design-philosophy
tags: ["nodejs", "memory-management", "javascript", "debugging"]
published: 2024-06
timestamp: 2026-07-05
---
# Your Node is Leaking Memory? setTimeout Could be the Reason

> Ronacher documents a Node.js memory leak caused by `setTimeout` returning heavyweight `Timeout` objects (unlike browsers, which return numbers).

## Key Facts
- Node.js `setTimeout` returns heavyweight objects, not numbers; these accumulate hidden AsyncLocalStorage state.
- A Node.js bug prevents `clearTimeout` from cleaning up properly when using primitive timer IDs.
- Aggressive manual deletion of timeout references is the current mitigation until the bug is fixed.

## Summary
Ronacher documents a Node.js memory leak caused by `setTimeout` returning heavyweight `Timeout` objects (unlike browsers, which return numbers). The Timeout object holds callback closure references. When `AsyncLocalStorage` is used, the Timeout accumulates hidden state in `Symbol(kResourceStore)` that persists after timeout completion. A Node.js bug prevents proper cleanup even with primitive ID conversion. Mitigation: aggressively delete timeout references, or architect to prevent AsyncLocalStorage propagation into long-lived resources.

## Links
- [Source](https://lucumr.pocoo.org/2024/6/5/node-timeout/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
