---
type: article
title: "Application Mimetypes and Encodings"
description: "Ronacher corrects the common misconception that all mimetypes accept charset parameters."
resource: https://lucumr.pocoo.org/2013/7/19/application-mimetypes-and-encodings/
cluster: python-ecosystem
tags: ["http", "unicode", "json", "web-development"]
published: 2013-07
timestamp: 2026-07-05
---
# Application Mimetypes and Encodings

> Ronacher corrects the common misconception that all mimetypes accept charset parameters.

## Key Facts
- `application/json` does not accept charset parameters; encoding is auto-detected from the byte stream.
- Charset parameters only apply to mimetypes starting with `text/` and specific exceptions.
- Adding incorrect charset parameters creates middleware confusion; consult the RFC before assuming.

## Summary
Ronacher corrects the common misconception that all mimetypes accept charset parameters. `application/json` does not support charset declarations (RFC 4627 specifies automatic encoding detection via null byte patterns in the first four octets). `application/x-www-form-urlencoded` prohibits charset parameters because encoding happens at the application layer. Adding charset parameters to mimetypes that don't support them creates unnecessary middleware complexity.

## Links
- [Source](https://lucumr.pocoo.org/2013/7/19/application-mimetypes-and-encodings/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-python-ecosystem.md)
- [Constraints are Good: Python's Metadata Dilemma](/lucumr.pocoo.org/2024-11-python-packaging-metadata.md)
- [Multiversion Python Thoughts](/lucumr.pocoo.org/2024-09-multiversion-python.md)
- [Rye and uv: August is Harvest Season for Python Packaging](/lucumr.pocoo.org/2024-08-harvest-season.md)
