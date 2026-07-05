---
type: article
title: "Opinionated Frameworks"
description: "Ronacher defends Django's design by clarifying what it was designed for: content-driven websites with simple database operations."
resource: https://lucumr.pocoo.org/2009/1/6/opinionated-frameworks/
tags: ["web-frameworks-and-apis", "django", "framework-opinions", "use-cases", "templating", "tool-selection"]
published: 2009-01
timestamp: 2026-07-05
---
# Opinionated Frameworks

> Ronacher defends Django's design by clarifying what it was designed for: content-driven websites with simple database operations.

## Key Facts
- Django was designed for a specific use case; using it outside that domain produces friction by design.
- Framework constraints are features when the framework matches your problem; they're obstacles when it doesn't.
- The ecosystem needs better documentation of when to use which tool, not better tools per se.

## Summary
Ronacher defends Django's design by clarifying what it was designed for: content-driven websites with simple database operations. Django's templating engine is "designed for simple HTML generation and that's it." The problem is not Django's constraints but developers using it for tasks beyond its intended scope. The Python ecosystem has better alternatives for complex applications (Pylons, Werkzeug, Paste), but developers lack unbiased guidance for choosing among them before starting projects.

## Links
- [Source](https://lucumr.pocoo.org/2009/1/6/opinionated-frameworks/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
