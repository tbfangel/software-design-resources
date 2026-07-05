---
type: article
title: "Start Writing More Classes"
description: "Ronacher argues that the Python community undervalues classes in favour of simple functions, creating APIs that hide useful internal architecture."
resource: https://lucumr.pocoo.org/2013/2/13/moar-classes/
tags: ["python-ecosystem", "python", "oop", "api-design", "streaming", "denial-of-service", "class-vs-function"]
published: 2013-02
timestamp: 2026-07-05
---
# Start Writing More Classes

> Ronacher argues that the Python community undervalues classes in favour of simple functions, creating APIs that hide useful internal architecture.

## Key Facts
- Monolithic function APIs conceal internal architecture that users need for customisation and streaming.
- Exposing internal objects as classes enables the critical 1% of advanced use cases without sacrificing the simple 99%.
- Hidden monolithic implementations create denial-of-service vulnerabilities when large inputs cannot be streamed.

## Summary
Ronacher argues that the Python community undervalues classes in favour of simple functions, creating APIs that hide useful internal architecture. `json.loads()` conceals layered architecture (buffering, tokenisation, parsing) that should be exposed for customisation. This creates real problems: a crafted 15 MB JSON payload can freeze gevent servers for 1.36 seconds, and streaming is impossible. C# and C++ libraries expose internal objects enabling flexibility. Jinja2's class-based architecture allows overriding parsing, compilation, and template instantiation.

## Links
- [Source](https://lucumr.pocoo.org/2013/2/13/moar-classes/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
