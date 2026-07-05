---
type: article
title: "Revenge of the Types"
description: "Ronacher argues against adding static typing to Python, given Python's inconsistent type semantics."
resource: https://lucumr.pocoo.org/2014/8/24/revenge-of-the-types/
tags: ["software-design-philosophy", "type-systems", "python", "static-typing", "language-design", "language-trends"]
published: 2014-08
timestamp: 2026-07-05
---
# Revenge of the Types

> Ronacher argues against adding static typing to Python, given Python's inconsistent type semantics.

## Key Facts
- Python's type semantics are inconsistent between C-implemented and Python-implemented types; static typing cannot cleanly model this.
- Adding static layers to languages with inconsistent semantics produces "spotty" benefits, not comprehensive safety.
- Languages should establish clean, well-defined semantics before adding optional static type features.

## Summary
Ronacher argues against adding static typing to Python, given Python's inconsistent type semantics. Python exhibits bizarre behaviour: types claim to be subclasses of `object` in the interpreter but not in the language specification; behaviour differs between C-implemented and Python-implemented types; the slot system creates inconsistencies that typing cannot cleanly model. Broader observation: C#, C++, and Rust are all moving toward powerful static typing with inference — but Python's foundation makes this incompatible. Dynamic typing has genuine value when properly designed.

## Links
- [Source](https://lucumr.pocoo.org/2014/8/24/revenge-of-the-types/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
