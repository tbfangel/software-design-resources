---
type: article
title: "Python and the Principle of Least Astonishment"
description: "Ronacher argues that Python successfully implements the Principle of Least Astonishment — but only for developers who understand its design philosophy."
resource: https://lucumr.pocoo.org/2011/7/9/python-and-pola/
cluster: python-ecosystem
tags: ["python", "api-design", "security", "sql"]
published: 2011-07
timestamp: 2026-07-05
---
# Python and the Principle of Least Astonishment

> Ronacher argues that Python successfully implements the Principle of Least Astonishment — but only for developers who understand its design philosophy.

## Key Facts
- Python's design is consistent and well-reasoned; astonishment usually reflects other-language habits, not Python errors.
- Special methods (`__dunder__`) over conventional names provide flexible protocols and loose coupling.
- `join` on the separator is intentional and correct; it supports generators; the "astonishment" is unfamiliarity.

## Summary
Ronacher argues that Python successfully implements the Principle of Least Astonishment — but only for developers who understand its design philosophy. Most "astonishment" comes from experienced programmers expecting their previous language's behaviour. Python's use of special methods (`__len__`, `__iter__`) over conventional method names (`length`, `size`) provides loose coupling and protocol flexibility. `", ".join(list)` on the separator rather than the collection is intentional: it supports generators without conversion overhead.

## Links
- [Source](https://lucumr.pocoo.org/2011/7/9/python-and-pola/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
