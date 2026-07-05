---
type: article
title: "STD stands for Sleazy, Tattered and Dead"
description: "Ronacher critiques specific Python standard library modules for containing outdated, poorly-designed code that cannot be improved because it's locked into the stdlib."
resource: https://lucumr.pocoo.org/2009/3/2/std-stands-for-sleazy-tattered-and-dead/
cluster: python-ecosystem
tags: ["python", "session-management", "api-design"]
published: 2009-03
timestamp: 2026-07-05
---
# STD stands for Sleazy, Tattered and Dead

> Ronacher critiques specific Python standard library modules for containing outdated, poorly-designed code that cannot be improved because it's locked into the stdlib.

## Key Facts
- Stdlib inclusion "freezes" modules; independently maintained packages can evolve, stdlib modules cannot.
- `cgi.FieldStorage`, `Cookie`, and `urllib` contain design problems that frameworks are forced to work around.
- The stdlib should be minimal (IO, filesystem, introspection) with domain-specific modules maintained separately.

## Summary
Ronacher critiques specific Python standard library modules for containing outdated, poorly-designed code that cannot be improved because it's locked into the stdlib. `cgi.FieldStorage` mixes high and low-level APIs unpredictably; `Cookie` has security vulnerabilities; `urllib` lacked proper timeout support. Systemic critique: once code enters the stdlib it "sticks" permanently, preventing the evolution possible in independently maintained packages. He advocates a minimal stdlib with web/XML/database modules moved to PyPI.

## Links
- [Source](https://lucumr.pocoo.org/2009/3/2/std-stands-for-sleazy-tattered-and-dead/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
