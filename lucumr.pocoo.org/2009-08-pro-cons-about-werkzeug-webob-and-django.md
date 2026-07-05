---
type: article
title: "Pro/Cons about Werkzeug, WebOb and Django"
description: "Ronacher analyses three Python web frameworks' request/response implementations."
resource: https://lucumr.pocoo.org/2009/8/5/pro-cons-about-werkzeug-webob-and-django/
cluster: web-frameworks-and-apis
tags: ["web-frameworks", "wsgi", "messaging"]
published: 2009-08
timestamp: 2026-07-05
---
# Pro/Cons about Werkzeug, WebOb and Django

> Ronacher analyses three Python web frameworks' request/response implementations.

## Key Facts
- WebOb, Werkzeug, and Django make different fundamental design choices about WSGI environment usage.
- Werkzeug's size relative to its core purpose is a genuine weakness for minimal deployments.
- No single request/response library is correct for all use cases; choose based on your specific requirements.

## Summary
Ronacher analyses three Python web frameworks' request/response implementations. WebOb: smallest, but uses WSGI environment as communication channel (problematic), and `request.GET`/`POST` are misleadingly named. Werkzeug: comprehensive with useful helpers, security features, and resource limits; weakness is size relative to core purpose. Django: not reusable outside Django. Key conclusion: all three libraries will persist independently because they make different trade-offs for different use cases.

## Links
- [Source](https://lucumr.pocoo.org/2009/8/5/pro-cons-about-werkzeug-webob-and-django/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
