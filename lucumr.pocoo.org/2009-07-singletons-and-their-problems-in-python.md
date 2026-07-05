---
type: article
title: "Singletons and their Problems in Python"
description: "Ronacher argues that Python modules are singletons and carry all the problems of the singleton pattern."
resource: https://lucumr.pocoo.org/2009/7/24/singletons-and-their-problems-in-python/
tags: ["python-ecosystem", "python", "singletons", "modules", "sys-modules", "wsgi", "version-conflicts"]
published: 2009-07
timestamp: 2026-07-05
---
# Singletons and their Problems in Python

> Ronacher argues that Python modules are singletons and carry all the problems of the singleton pattern.

## Key Facts
- Python's module system is a singleton system; all singleton problems (shared state, version conflicts) apply.
- Long-running applications cannot safely reload modules because active threads may hold references.
- Multiple applications with conflicting dependency versions cannot share a single Python interpreter.

## Summary
Ronacher argues that Python modules are singletons and carry all the problems of the singleton pattern. Modules are stored once in `sys.modules` with guaranteed uniqueness; removing and reimporting them is "dangerous and stupid" because active threads may reference deleted code; version conflicts between applications sharing an interpreter are impossible to resolve. He proposes tagging `sys.modules` entries with version/instance identifiers as an exploratory solution, acknowledging it breaks backwards compatibility.

## Links
- [Source](https://lucumr.pocoo.org/2009/7/24/singletons-and-their-problems-in-python/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
