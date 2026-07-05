---
type: article
title: "UCS vs UTF-8 as Internal String Encoding"
description: "Ronacher compares Unicode string encoding strategies: UCS-2/UCS-4 use fixed-width encodings (2 or 4 bytes per character) enabling O(1) indexing; UTF-8 uses variable-width encoding (1-4 bytes) requiring O(n) indexing but achieving much better memory efficiency for ASCII-heavy content."
resource: https://lucumr.pocoo.org/2014/1/9/ucs-vs-utf8/
tags: ["python-ecosystem", "unicode", "ucs-2", "ucs-4", "utf-8", "string-internals", "python"]
published: 2014-01
timestamp: 2026-07-05
---
# UCS vs UTF-8 as Internal String Encoding

> Ronacher compares Unicode string encoding strategies: UCS-2/UCS-4 use fixed-width encodings (2 or 4 bytes per character) enabling O(1) indexing; UTF-8 uses variable-width encoding (1-4 bytes) requiring O(n) indexing but achieving much better memory efficiency for ASCII-heavy content.

## Key Facts
- UCS encodings enable O(1) character indexing; UTF-8 requires O(n) but is more memory-efficient.
- Python 3.3+'s flexible string representation automatically selects the optimal encoding per string.
- The choice of internal encoding has measurable performance consequences for string-heavy applications.

## Summary
Ronacher compares Unicode string encoding strategies: UCS-2/UCS-4 use fixed-width encodings (2 or 4 bytes per character) enabling O(1) indexing; UTF-8 uses variable-width encoding (1-4 bytes) requiring O(n) indexing but achieving much better memory efficiency for ASCII-heavy content. Python 3.3+ uses flexible string representation (PEP 393), storing strings in the most efficient format for their content. He analyses the trade-offs for string operations, slicing, and memory use.

## Links
- [Source](https://lucumr.pocoo.org/2014/1/9/ucs-vs-utf8/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
