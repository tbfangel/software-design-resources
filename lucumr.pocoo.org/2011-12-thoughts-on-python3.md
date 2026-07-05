---
type: article
title: "Thoughts on Python 3"
description: "Ronacher's mid-migration assessment: Python 3 \"changed just too much that it broke all our code and not nearly enough that it would warrant upgrading immediately.\" 2to3 was counterproductive — maintaining dual codebases produces compromised code (he describes Jinja2 on Python 3 as \"horrible\")."
resource: https://lucumr.pocoo.org/2011/12/7/thoughts-on-python3/
cluster: python-ecosystem
tags: ["python", "backwards-compatibility", "unicode"]
published: 2011-12
timestamp: 2026-07-05
---
# Thoughts on Python 3

> Ronacher's mid-migration assessment: Python 3 "changed just too much that it broke all our code and not nearly enough that it would warrant upgrading immediately." 2to3 was counterproductive — maintaining dual codebases produces compromised code (he describes Jinja2 on Python 3 as "horrible").

## Key Facts
- The breaking changes in Python 3 were large enough to be costly but not large enough to justify the migration.
- 2to3 forced dual codebases; the correct path was single-codebase compatibility from the start.
- Missing stdlib features for Python 3's own features (Unicode regex) made adoption harder than necessary.

## Summary
Ronacher's mid-migration assessment: Python 3 "changed just too much that it broke all our code and not nearly enough that it would warrant upgrading immediately." 2to3 was counterproductive — maintaining dual codebases produces compromised code (he describes Jinja2 on Python 3 as "horrible"). Python 3 lacks essential tooling for its own Unicode features (proper Unicode-aware regex, better encoding APIs). He proposes a Python 2.8 release and structured community feedback collection to prevent the migration from making Python obsolete.

## Links
- [Source](https://lucumr.pocoo.org/2011/12/7/thoughts-on-python3/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
