---
type: article
title: "The 1000% Speedup, or, the stdlib sucks"
description: "Ronacher documents a 1000% performance improvement from a single import change, revealing that a stdlib module had a slow implementation that an alternative could trivially beat."
resource: https://lucumr.pocoo.org/2009/3/1/the-1000-speedup-or-the-stdlib-sucks/
cluster: python-ecosystem
tags: ["python", "performance"]
published: 2009-03
timestamp: 2026-07-05
---
# The 1000% Speedup, or, the stdlib sucks

> Ronacher documents a 1000% performance improvement from a single import change, revealing that a stdlib module had a slow implementation that an alternative could trivially beat.

## Key Facts
- A single import change can produce order-of-magnitude performance improvements when stdlib implementations are slow.
- stdlib module quality is uneven; the inability to replace them means poor implementations affect all users.
- Benchmarking common operations against alternatives regularly reveals unexpected performance gaps.

## Summary
Ronacher documents a 1000% performance improvement from a single import change, revealing that a stdlib module had a slow implementation that an alternative could trivially beat. The finding illustrates the stdlib quality problem: because stdlib modules cannot be replaced, slow implementations persist across all Python users.

## Links
- [Source](https://lucumr.pocoo.org/2009/3/1/the-1000-speedup-or-the-stdlib-sucks/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
