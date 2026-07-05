---
type: article
title: "Porting to Python 3 Redux"
description: "Revised guidance for maintaining a single codebase supporting Python 2.6+ and 3.3+."
resource: https://lucumr.pocoo.org/2013/5/21/porting-to-python-3-redux/
tags: ["python-ecosystem", "python-2", "python-3", "single-codebase", "six", "unicode", "compatibility"]
published: 2013-05
timestamp: 2026-07-05
---
# Porting to Python 3 Redux

> Revised guidance for maintaining a single codebase supporting Python 2.6+ and 3.3+.

## Key Facts
- Python 2.6 and 3.3 share enough syntax to maintain a single codebase without `2to3`.
- A minimal internal compatibility shim replaces `six` for projects targeting 2.6+, avoiding the dependency.
- Unicode handling is the most labour-intensive part of the migration; start with explicit literal types.

## Summary
Revised guidance for maintaining a single codebase supporting Python 2.6+ and 3.3+. Key insight: dropping Python 2.5 and 3.0-3.2 enables a large shared syntax subset. `six` is useful but unnecessary for 2.6+ targets; a minimal internal compatibility module under 80 lines suffices. Use python-modernize as a starting point. Unicode requires the most care: consistent use of native strings, `u''` literals, and `b''` literals. Class decorators handle metaclass syntax differences.

## Links
- [Source](https://lucumr.pocoo.org/2013/5/21/porting-to-python-3-redux/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
