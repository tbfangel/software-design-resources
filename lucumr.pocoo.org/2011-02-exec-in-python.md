---
type: article
title: "Be careful with exec and eval in Python"
description: "Ronacher explains how `exec` and `eval` work in Python (different in Python 2 vs 3) and why they should generally be avoided."
resource: https://lucumr.pocoo.org/2011/2/1/exec-in-python/
cluster: python-ecosystem
tags: ["python", "security", "programming"]
published: 2011-02
timestamp: 2026-07-05
---
# Be careful with exec and eval in Python

> Ronacher explains how `exec` and `eval` work in Python (different in Python 2 vs 3) and why they should generally be avoided.

## Key Facts
- `exec` and `eval` create security vulnerabilities when processing untrusted input.
- Python 2's `exec` as a statement vs Python 3's `exec` as a function have different scoping behaviour.
- Dynamic code execution should be the last resort, not a convenience.

## Summary
Ronacher explains how `exec` and `eval` work in Python (different in Python 2 vs 3) and why they should generally be avoided. They create security risks when processing untrusted input, can cause subtle scoping problems, and produce code that is difficult to debug or audit. When dynamic code execution is genuinely necessary, the security model must be carefully designed.

## Links
- [Source](https://lucumr.pocoo.org/2011/2/1/exec-in-python/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
