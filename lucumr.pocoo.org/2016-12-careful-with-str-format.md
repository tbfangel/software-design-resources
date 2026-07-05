---
type: article
title: "Be Careful with Python's New-Style String Format"
description: "Ronacher warns that Python's `.format()` method is vulnerable to format string injection when processing untrusted input."
resource: https://lucumr.pocoo.org/2016/12/29/careful-with-str-format/
tags: ["python-ecosystem", "python", "str-format", "security", "attribute-access", "format-string-injection"]
published: 2016-12
timestamp: 2026-07-05
---
# Be Careful with Python's New-Style String Format

> Ronacher warns that Python's `.format()` method is vulnerable to format string injection when processing untrusted input.

## Key Facts
- `.format()` with untrusted input is a security vulnerability enabling secret extraction via attribute access.
- Translated strings, user-configurable notification templates, and log messages are common injection vectors.
- A `SafeFormatter` class with attribute whitelist restrictions is the correct mitigation.

## Summary
Ronacher warns that Python's `.format()` method is vulnerable to format string injection when processing untrusted input. The dot notation in format strings allows attribute access, which can expose internal object data including function globals with application secrets. He demonstrates how a format string like `{event.__init__.__globals__[CONFIG][SECRET_KEY]}` can extract secrets from Flask applications. Solution: a `SafeFormatter` class that blocks attribute access starting with underscores and intercepts `get_field`.

## Links
- [Source](https://lucumr.pocoo.org/2016/12/29/careful-with-str-format/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
