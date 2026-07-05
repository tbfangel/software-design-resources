---
type: article
title: "Everything you did not want to know about Unicode in Python 3"
description: "Ronacher argues that Python 3's \"everything is Unicode\" assumption is misaligned with how Unix works — Unix is fundamentally byte-based with no reliable encoding information."
resource: https://lucumr.pocoo.org/2014/5/12/everything-about-unicode/
cluster: python-ecosystem
tags: ["python", "unicode"]
published: 2014-05
timestamp: 2026-07-05
---
# Everything you did not want to know about Unicode in Python 3

> Ronacher argues that Python 3's "everything is Unicode" assumption is misaligned with how Unix works — Unix is fundamentally byte-based with no reliable encoding information.

## Key Facts
- Unix is byte-based; Python 3's assumption that everything is Unicode creates friction at every OS boundary.
- Three undocumented Python 3 string types (normal, transport-decoded, surrogate-escaped) require manual detection.
- C locale failures are a production risk; Python 3 cannot handle ASCII-only environments gracefully.

## Summary
Ronacher argues that Python 3's "everything is Unicode" assumption is misaligned with how Unix works — Unix is fundamentally byte-based with no reliable encoding information. Python 3 introduces three undocumented string types ("transport decoded" strings and "surrogate escaped" strings), fails in C locale environments (cron jobs, init systems, subprocesses), and requires more complex code than Python 2 for common tasks like implementing a `cat` utility. He predicts some developers will abandon Python 3 for Go, which uses UTF-8 byte-strings as a simpler model.

## Links
- [Source](https://lucumr.pocoo.org/2014/5/12/everything-about-unicode/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
