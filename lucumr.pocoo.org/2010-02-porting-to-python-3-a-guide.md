---
type: article
title: "Porting to Python 3 — A Guide"
description: "Practical notes from porting Jinja2 to Python 3 using 2to3."
resource: https://lucumr.pocoo.org/2010/2/11/porting-to-python-3-a-guide/
cluster: python-ecosystem
tags: ["python", "migration", "template-engines"]
published: 2010-02
timestamp: 2026-07-05
---
# Porting to Python 3 — A Guide

> Practical notes from porting Jinja2 to Python 3 using 2to3.

## Key Facts
- 2to3 handles most mechanical conversion but requires human judgment for bytes/str boundary decisions.
- Real library ports like Jinja2 reveal edge cases that theoretical guides miss.
- The 2to3 approach works for initial ports but creates maintenance complexity for ongoing development.

## Summary
Practical notes from porting Jinja2 to Python 3 using 2to3. Documents the 2to3 workflow, common fixer issues, and where manual intervention is required. Identifies limitations of the mechanical approach and areas where human judgment about bytes vs strings is irreplaceable. Written early in the Python 3 era when best practices were still being established.

## Links
- [Source](https://lucumr.pocoo.org/2010/2/11/porting-to-python-3-a-guide/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
