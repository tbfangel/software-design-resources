---
type: article
title: "Python Packaging: Hate, hate, hate everywhere"
description: "Ronacher defends setuptools against criticism that led to its replacement with tools that lost important functionality."
resource: https://lucumr.pocoo.org/2012/6/22/hate-hate-hate-everywhere/
cluster: python-ecosystem
tags: ["python-packaging", "deployment"]
published: 2012-06
timestamp: 2026-07-05
---
# Python Packaging: Hate, hate, hate everywhere

> Ronacher defends setuptools against criticism that led to its replacement with tools that lost important functionality.

## Key Facts
- setuptools' `.egg` format solved real deployment problems that pip's replacement approach failed to address.
- Replacement tools frequently lose important functionality when the design rationale is not well-documented.
- Binary distributions for expensive compilations (lxml) and server deployments were broken by pip's design choices.

## Summary
Ronacher defends setuptools against criticism that led to its replacement with tools that lost important functionality. Setuptools' `.egg` format solved real deployment challenges: a virtual package tree uncoupled from the filesystem, enabling complex package relationships. pip removed binary egg support, breaking closed-source deployments across multiple servers. Key lesson: replacement tools should preserve existing design before attempting improvements. The scattered domain knowledge about binary distributions was undervalued until it was lost.

## Links
- [Source](https://lucumr.pocoo.org/2012/6/22/hate-hate-hate-everywhere/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
