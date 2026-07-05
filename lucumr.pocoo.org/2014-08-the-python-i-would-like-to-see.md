---
type: article
title: "The Python I Would Like To See"
description: "Ronacher critiques Python's internal \"slot system\" for special methods."
resource: https://lucumr.pocoo.org/2014/8/16/the-python-i-would-like-to-see/
tags: ["python-ecosystem", "python-internals", "slot-system", "special-methods", "type-system", "interpreter-isolation"]
published: 2014-08
timestamp: 2026-07-05
---
# The Python I Would Like To See

> Ronacher critiques Python's internal "slot system" for special methods.

## Key Facts
- Python's `a + b` does not call `a.__add__(b)` due to the slot system; this is a historical accident, not a design choice.
- The slot system limits customisation capabilities that Python 2's old-style classes actually provided.
- A redesigned Python would use pure dictionary lookups and support independent interpreter instances.

## Summary
Ronacher critiques Python's internal "slot system" for special methods. `a + b` doesn't call `a.__add__(b)` — it uses internal C-level slots (`tp_as_number->nb_add`). Calling the method directly is actually faster than the operator. The slot system originated in Python 1.0 from static struct allocations for builtin types and has persisted despite losing its purpose. Modern Python has fewer capabilities than Python 2 (custom classes cannot intercept operations on builtins). His desired Python: pure dictionary-based lookups, interpreter instances that don't share global state, and independence from the GIL.

## Links
- [Source](https://lucumr.pocoo.org/2014/8/16/the-python-i-would-like-to-see/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
