---
type: article
title: "The Updated Guide to Unicode on Python"
description: "Revised guidance for Python 2 and 3 Unicode handling."
resource: https://lucumr.pocoo.org/2013/7/2/the-updated-guide-to-unicode/
tags: ["python-ecosystem", "python", "unicode", "bytes", "str", "encoding-best-practices"]
published: 2013-07
timestamp: 2026-07-05
---
# The Updated Guide to Unicode on Python

> Revised guidance for Python 2 and 3 Unicode handling.

## Key Facts
- Python 2's "decode early, encode late" pattern remains the clearest mental model for Unicode handling.
- Python 3's locale-dependent default encodings create production failures when moving between environments.
- Explicitly validating strings at API boundaries is more reliable than trusting Python 3's type system.

## Summary
Revised guidance for Python 2 and 3 Unicode handling. Python 2 rule: decode from bytes to Unicode at the first known encoding point. Python 3 complications: APIs inconsistently accept both bytes and str, file encoding depends on locale settings, and "magic defaults" create production failures. Recommends always specifying encodings, validating strings from problematic APIs, and maintaining Python 2's flexibility where possible.

## Links
- [Source](https://lucumr.pocoo.org/2013/7/2/the-updated-guide-to-unicode/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
