---
type: article
title: "The Problem with Implicit Scoping in CoffeeScript"
description: "Ronacher documents a dangerous CoffeeScript scoping rule: \"always reassign unless unknown from higher scope.\" A real-world bug: importing `{log}` from Math at file level silently made a local `log` variable inside a function global, breaking functionality."
resource: https://lucumr.pocoo.org/2011/12/22/implicit-scoping-in-coffeescript/
cluster: software-design-philosophy
tags: ["javascript", "programming", "language-design", "explicit-vs-implicit"]
published: 2011-12
timestamp: 2026-07-05
---
# The Problem with Implicit Scoping in CoffeeScript

> Ronacher documents a dangerous CoffeeScript scoping rule: "always reassign unless unknown from higher scope." A real-world bug: importing `{log}` from Math at file level silently made a local `log` variable inside a function global, breaking functionality.

## Key Facts
- Implicit scoping that makes imports or globals silently capture local names is a dangerous language design.
- "Adding code elsewhere should never affect existing local code in a function" is a fundamental scoping invariant.
- Python's `nonlocal` keyword and explicit operators solve this correctly; CoffeeScript chose the wrong default.

## Summary
Ronacher documents a dangerous CoffeeScript scoping rule: "always reassign unless unknown from higher scope." A real-world bug: importing `{log}` from Math at file level silently made a local `log` variable inside a function global, breaking functionality. "Adding an import or writing a new function should never, ever affect local code in a function." The inconsistency: function parameters shadow outer variables, but explicit imports don't. He proposes an explicit reassignment operator (like Python's `nonlocal`) as the fix.

## Links
- [Source](https://lucumr.pocoo.org/2011/12/22/implicit-scoping-in-coffeescript/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
