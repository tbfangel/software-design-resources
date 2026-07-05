---
type: article
title: "Stateless and Proud in the Realtime World"
description: "Ronacher argues that real-time web capabilities (push notifications, live updates) don't require making WSGI frameworks stateful."
resource: https://lucumr.pocoo.org/2012/8/5/stateless-and-proud/
tags: ["web-frameworks-and-apis", "statelessness", "real-time", "pub-sub", "redis", "websockets", "wsgi"]
published: 2012-08
timestamp: 2026-07-05
---
# Stateless and Proud in the Realtime World

> Ronacher argues that real-time web capabilities (push notifications, live updates) don't require making WSGI frameworks stateful.

## Key Facts
- Real-time push does not require stateful frameworks; a dedicated pub-sub layer preserves statelessness.
- Stateless workers scale trivially; stateful workers require coordination that adds complexity at every level.
- Decoupling real-time infrastructure from application logic enables independent scaling and deployment.

## Summary
Ronacher argues that real-time web capabilities (push notifications, live updates) don't require making WSGI frameworks stateful. The solution: a pub-sub pattern where Flask handles request-response, Redis distributes messages, and a dedicated real-time server manages persistent connections. This preserves statelessness, scales cleanly (stateless workers can be added freely), and decouples deployment of real-time and application code. Mixing persistent connection state with application logic is the architectural mistake.

## Links
- [Source](https://lucumr.pocoo.org/2012/8/5/stateless-and-proud/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
