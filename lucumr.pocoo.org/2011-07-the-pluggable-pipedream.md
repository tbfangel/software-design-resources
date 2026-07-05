---
type: article
title: "WSGI and the Pluggable Pipe Dream"
description: "Ronacher argues that the dream of universal framework-independent pluggable WSGI components was always unrealistic, and that WSGI's \"awkward\" design features were intentional solutions to real problems."
resource: https://lucumr.pocoo.org/2011/7/27/the-pluggable-pipedream/
tags: ["web-frameworks-and-apis", "wsgi", "python", "pluggable-applications", "framework-design", "http"]
published: 2011-07
timestamp: 2026-07-05
---
# WSGI and the Pluggable Pipe Dream

> Ronacher argues that the dream of universal framework-independent pluggable WSGI components was always unrealistic, and that WSGI's "awkward" design features were intentional solutions to real problems.

## Key Facts
- WSGI's `start_response()` enables status code changes mid-processing; this is a feature, not a quirk.
- Framework-agnostic pluggable components are impractical because frameworks have incompatible fundamental assumptions.
- Cross-application composition belongs at the HTTP layer (or client side), not the WSGI layer.

## Summary
Ronacher argues that the dream of universal framework-independent pluggable WSGI components was always unrealistic, and that WSGI's "awkward" design features were intentional solutions to real problems. `start_response()` allows headers to be changed until actual output begins. The real problem isn't WSGI — it's different frameworks' incompatible assumptions about request/response models, authentication, and session management. The solution is HTTP-based communication and client-side JavaScript for cross-application concerns, not a new server protocol.

## Links
- [Source](https://lucumr.pocoo.org/2011/7/27/the-pluggable-pipedream/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
- [WSGI on Python 3](/lucumr.pocoo.org/2010-05-wsgi-on-python-3.md)
