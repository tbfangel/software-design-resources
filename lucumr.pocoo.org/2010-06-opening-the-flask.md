---
type: article
title: "Opening The Flask"
description: "Ronacher argues that building a custom micro-framework for your specific application is often better than adopting a pre-built framework."
resource: https://lucumr.pocoo.org/2010/6/14/opening-the-flask/
tags: ["web-frameworks-and-apis", "flask", "werkzeug", "wsgi", "micro-frameworks", "url-routing", "decorator-pattern"]
published: 2010-06
timestamp: 2026-07-05
---
# Opening The Flask

> Ronacher argues that building a custom micro-framework for your specific application is often better than adopting a pre-built framework.

## Key Facts
- A functional micro-framework requires only URL routing, decorator-based view registration, and WSGI compliance.
- Building your own framework on Werkzeug removes the upgrade burden of adopting a framework that evolves in directions irrelevant to your application.
- Understanding what a framework does makes you a better user of pre-built ones.

## Summary
Ronacher argues that building a custom micro-framework for your specific application is often better than adopting a pre-built framework. He demonstrates this by showing how a minimal WSGI application can be built in ~20 lines using Werkzeug: a URL `Map`, decorator-based view registration, and WSGI compliance via `__call__`. The post is both a technical introduction to Flask's internals and a philosophical argument for understanding the tools you use.

## Links
- [Source](https://lucumr.pocoo.org/2010/6/14/opening-the-flask/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
- [WSGI on Python 3](/lucumr.pocoo.org/2010-05-wsgi-on-python-3.md)
