---
type: article
title: "Pros and Cons about Python 3"
description: "Ronacher's early balanced assessment of Python 3."
resource: https://lucumr.pocoo.org/2010/1/7/pros-and-cons-about-python-3/
cluster: python-ecosystem
tags: ["python", "language-design", "trade-offs"]
published: 2010-01
timestamp: 2026-07-05
---
# Pros and Cons about Python 3

> Ronacher's early balanced assessment of Python 3.

## Key Facts
- Python 3's improvements to bytes/str, iterators, and metaclasses are genuine quality improvements.
- The migration cost was higher than expected because some changes were incomplete or broke common patterns.
- Early assessment: "not nearly enough" positive change to justify the ecosystem disruption.

## Summary
Ronacher's early balanced assessment of Python 3. Positive: proper bytes/str distinction, cleaner iterator protocol, keyword-only arguments, improved metaclass syntax, better integer handling. Negative: missing features (still working on them), WSGI complications, codec changes that break common patterns, and changes that didn't go far enough (e.g., `print` should be a proper function, not an afterthought).

## Links
- [Source](https://lucumr.pocoo.org/2010/1/7/pros-and-cons-about-python-3/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
