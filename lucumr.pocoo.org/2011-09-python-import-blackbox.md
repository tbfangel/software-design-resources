---
type: article
title: "Dealing with the Python Import Blackbox"
description: "Ronacher identifies a fundamental limitation in the Python import system: ImportError cannot distinguish between \"module doesn't exist\" and \"module exists but failed to import.\" When using fallback imports (`try: import foo; except ImportError: import simplefoo`), a missing dependency of `foo` is indistinguishable from `foo` not existing."
resource: https://lucumr.pocoo.org/2011/9/21/python-import-blackbox/
cluster: python-ecosystem
tags: ["python", "debugging"]
published: 2011-09
timestamp: 2026-07-05
---
# Dealing with the Python Import Blackbox

> Ronacher identifies a fundamental limitation in the Python import system: ImportError cannot distinguish between "module doesn't exist" and "module exists but failed to import." When using fallback imports (`try: import foo; except ImportError: import simplefoo`), a missing dependency of `foo` is indistinguishable from `foo` not existing.

## Key Facts
- Python's ImportError conflates "module not found" and "module failed to import" — a genuine design gap.
- Traceback inspection is the only reliable way to distinguish these cases in fallback import patterns.
- The technique works because garbage-collected modules preserve their globals dictionary.

## Summary
Ronacher identifies a fundamental limitation in the Python import system: ImportError cannot distinguish between "module doesn't exist" and "module exists but failed to import." When using fallback imports (`try: import foo; except ImportError: import simplefoo`), a missing dependency of `foo` is indistinguishable from `foo` not existing. The solution: inspect the traceback to determine if any frame originated from the target module. If so, the import succeeded but failed internally; otherwise, the module doesn't exist.

## Links
- [Source](https://lucumr.pocoo.org/2011/9/21/python-import-blackbox/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
