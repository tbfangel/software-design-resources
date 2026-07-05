---
type: article
title: "WSGI on Python 3"
description: "Ronacher assesses the state of WSGI on Python 3, documenting the challenges created by Python 3's strict bytes/str distinction."
resource: https://lucumr.pocoo.org/2010/5/25/wsgi-on-python-3/
cluster: web-frameworks-and-apis
tags: ["wsgi", "python", "unicode"]
published: 2010-05
timestamp: 2026-07-05
---
# WSGI on Python 3

> Ronacher assesses the state of WSGI on Python 3, documenting the challenges created by Python 3's strict bytes/str distinction.

## Key Facts
- Python 3's bytes/str distinction creates genuine WSGI incompatibilities that PEP 3333 addresses pragmatically.
- "Native strings" (different types on Python 2 vs 3) is a necessary compromise, not an elegant solution.
- HTTP headers and URLs require special treatment at the WSGI layer to handle encoding correctly.

## Summary
Ronacher assesses the state of WSGI on Python 3, documenting the challenges created by Python 3's strict bytes/str distinction. WSGI's native string type (str) means different things on Python 2 (bytes) and Python 3 (Unicode), creating incompatibilities. PEP 3333's solution — "native strings" that behave differently by Python version — is pragmatic but confusing. Covers the implications for middleware, request objects, and HTTP header handling.

## Links
- [Source](https://lucumr.pocoo.org/2010/5/25/wsgi-on-python-3/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
