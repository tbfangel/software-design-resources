---
type: article
title: "Python on Wheels"
description: "Ronacher explains wheel-based Python deployment: the `.whl` format provides pre-compiled binary distributions that eliminate compilation at install time."
resource: https://lucumr.pocoo.org/2014/1/27/python-on-wheels/
tags: ["python-ecosystem", "python-packaging", "wheels", "binary-distributions", "pip", "deployment"]
published: 2014-01
timestamp: 2026-07-05
---
# Python on Wheels

> Ronacher explains wheel-based Python deployment: the `.whl` format provides pre-compiled binary distributions that eliminate compilation at install time.

## Key Facts
- Wheels eliminate compilation at install time, making deployment predictable and fast for binary packages.
- Platform tags in wheel filenames encode OS, Python version, and ABI compatibility requirements.
- The transition from eggs to wheels addressed real deployment problems around virtualenv portability.

## Summary
Ronacher explains wheel-based Python deployment: the `.whl` format provides pre-compiled binary distributions that eliminate compilation at install time. He covers the wheel naming convention, platform tags, the transition from eggs to wheels, and practical deployment workflows. Context: this was written during the early adoption of wheels as a replacement for eggs/bdist_egg, before wheels became the universal standard.

## Links
- [Source](https://lucumr.pocoo.org/2014/1/27/python-on-wheels/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
