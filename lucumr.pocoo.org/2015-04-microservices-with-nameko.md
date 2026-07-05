---
type: article
title: "Nameko for Microservices"
description: "Ronacher advocates for Nameko as a Python framework that treats HTTP handlers, background jobs, and scheduled tasks consistently — all as services communicating over AMQP."
resource: https://lucumr.pocoo.org/2015/4/8/microservices-with-nameko/
tags: ["web-frameworks-and-apis", "microservices", "nameko", "amqp", "python", "service-oriented-architecture"]
published: 2015-04
timestamp: 2026-07-05
---
# Nameko for Microservices

> Ronacher advocates for Nameko as a Python framework that treats HTTP handlers, background jobs, and scheduled tasks consistently — all as services communicating over AMQP.

## Key Facts
- Uniform service treatment (HTTP, background, scheduled) reduces architectural inconsistency in distributed applications.
- AMQP-based inter-service communication provides reliable messaging with RPC and event-driven patterns.
- Dependency injection for resource management (database sessions, connections) prevents lifecycle bugs.

## Summary
Ronacher advocates for Nameko as a Python framework that treats HTTP handlers, background jobs, and scheduled tasks consistently — all as services communicating over AMQP. This eliminates the awkward dependency on HTTP request objects in background tasks and provides uniform dependency injection, lifecycle management, and horizontal scaling. Inter-service communication uses RPC and event-driven patterns over AMQP. He identifies it as "the best Open Source solution for this problem in the Python world so far."

## Links
- [Source](https://lucumr.pocoo.org/2015/4/8/microservices-with-nameko/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
