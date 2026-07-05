---
type: article
title: "Writing Forwards Compatible Python Code"
description: "Guidance on writing Python 2 code compatible with the `2to3` tool, enabling smooth migration to Python 3."
resource: https://lucumr.pocoo.org/2011/1/22/forwards-compatible-python/
cluster: python-ecosystem
tags: ["python", "backwards-compatibility", "migration"]
published: 2011-01
timestamp: 2026-07-05
---
# Writing Forwards Compatible Python Code

> Guidance on writing Python 2 code compatible with the `2to3` tool, enabling smooth migration to Python 3.

## Key Facts
- `from __future__ import` statements enable Python 3 behaviour in Python 2 code.
- Writing 2to3-compatible code requires discipline about bytes vs strings from the start.
- Mechanical 2to3 conversion is only feasible when code avoids Python 2-specific patterns.

## Summary
Guidance on writing Python 2 code compatible with the `2to3` tool, enabling smooth migration to Python 3. Key patterns: use `print` as a function (import from `__future__`), avoid string/bytes confusion, use `dict.items()` over `dict.iteritems()`, and write explicit Unicode literals. The goal is code that runs correctly on Python 2 and can be mechanically converted to Python 3 without logic changes.

## Links
- [Source](https://lucumr.pocoo.org/2011/1/22/forwards-compatible-python/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
