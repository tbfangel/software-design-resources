---
type: article
title: "Python's Hidden Regular Expression Gems"
description: "Ronacher documents underused features of Python's `re` module, particularly the undocumented `re.Scanner` class."
resource: https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/
tags: ["python-ecosystem", "python", "re-module", "scanner", "tokenisation", "sre-internals"]
published: 2015-11
timestamp: 2026-07-05
---
# Python's Hidden Regular Expression Gems

> Ronacher documents underused features of Python's `re` module, particularly the undocumented `re.Scanner` class.

## Key Facts
- `re.Scanner` enables efficient multi-pattern scanning without sequential matching overhead.
- Matching (anchored) vs searching (skip-ahead) is a meaningful distinction that Python's re module correctly exposes.
- SRE's internal pattern objects are accessible for building sophisticated tokenisers without external libraries.

## Summary
Ronacher documents underused features of Python's `re` module, particularly the undocumented `re.Scanner` class. The module's architectural strength: it correctly distinguishes matching (position-anchored) from searching (skip-ahead), which many other regex engines conflate. `re.Scanner` enables efficient multi-pattern tokenisation using SRE primitives internally, dramatically improving lexer performance over naive sequential pattern matching. Demonstrates through a custom Scanner implementation for wiki syntax parsing.

## Links
- [Source](https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
