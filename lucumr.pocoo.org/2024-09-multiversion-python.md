---
type: article
title: "Multiversion Python Thoughts"
description: "Ronacher explores how to enable multiple incompatible versions of Python libraries to coexist."
resource: https://lucumr.pocoo.org/2024/9/9/multiversion-python/
tags: ["python-ecosystem", "python", "multiversion", "uv", "sys-modules", "import-system", "c-extensions"]
published: 2024-09
timestamp: 2026-07-05
---
# Multiversion Python Thoughts

> Ronacher explores how to enable multiple incompatible versions of Python libraries to coexist.

## Key Facts
- `sys.modules` as a simple name → module mapping is the fundamental constraint preventing multiversion Python.
- C extensions cannot access calling context, making version routing impossible without major changes.
- The distribution-to-module-name mapping gap is underappreciated and blocks programmatic dependency resolution.

## Summary
Ronacher explores how to enable multiple incompatible versions of Python libraries to coexist. Three critical obstacles: the `sys.modules` cache uses simple names as keys (causing conflicts), C extensions lack access to Python's calling context so version routing is impossible, and no mapping exists between Python module names and PyPI distribution names. A proposed solution: segregate multi-version packages in separate paths, expose distribution metadata on modules, patch `__import__` to use calling context, and register proxy entries in `sys.modules`. Significant challenges remain with C extension interoperability.

## Links
- [Source](https://lucumr.pocoo.org/2024/9/9/multiversion-python/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
- [Rye Grows With UV](/lucumr.pocoo.org/2024-02-rye-grows-with-uv.md)
