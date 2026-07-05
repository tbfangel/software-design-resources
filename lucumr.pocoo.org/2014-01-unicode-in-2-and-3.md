---
type: article
title: "More About Unicode in Python 2 and 3"
description: "Ronacher compares bytes/Unicode handling between Python versions."
resource: https://lucumr.pocoo.org/2014/1/5/unicode-in-2-and-3/
cluster: python-ecosystem
tags: ["python", "unicode", "api-design"]
published: 2014-01
timestamp: 2026-07-05
---
# More About Unicode in Python 2 and 3

> Ronacher compares bytes/Unicode handling between Python versions.

## Key Facts
- Python 3's type system does not prevent the creation of invalid Unicode strings; validation must be manual.
- APIs like urllib and os.listdir return hidden string types that look like `str` but are not fully valid Unicode.
- Always specify encoding explicitly when opening files; locale-based defaults are unreliable.

## Summary
Ronacher compares bytes/Unicode handling between Python versions. Python 2's implicit conversion (forgiving in practice, brittle at boundaries) vs Python 3's strict separation (correct in theory, problematic at Unix boundaries). Documents Python 3's hidden string types — "transport decoded" strings from urllib, "surrogate escaped" strings from filename handling — that pass type checks but carry invalid Unicode. Recommends explicit encoding specification for all file operations and validation at problematic API boundaries.

## Links
- [Source](https://lucumr.pocoo.org/2014/1/5/unicode-in-2-and-3/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
