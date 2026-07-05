---
type: article
title: "ZeroMQ: Disconnects are Good for You"
description: "Ronacher documents a dangerous ZeroMQ abstraction: the framework hides network disconnects from applications, leaving REQ/REP socket pairs in invalid state with no way to reset them."
resource: https://lucumr.pocoo.org/2012/6/26/disconnects-are-good-for-you/
tags: ["web-frameworks-and-apis", "zeromq", "networking", "disconnects", "req-rep", "state-machines", "infrastructure"]
published: 2012-06
timestamp: 2026-07-05
---
# ZeroMQ: Disconnects are Good for You

> Ronacher documents a dangerous ZeroMQ abstraction: the framework hides network disconnects from applications, leaving REQ/REP socket pairs in invalid state with no way to reset them.

## Key Facts
- ZeroMQ's disconnect abstraction leaves REQ/REP sockets in unrecoverable state without explicit timeout handling.
- Infrastructure automation tools (like Salt) that use ZeroMQ require timeout-aware socket wrappers to prevent hangs.
- High-abstraction protocols that hide network topology require application-level disconnect handling.

## Summary
Ronacher documents a dangerous ZeroMQ abstraction: the framework hides network disconnects from applications, leaving REQ/REP socket pairs in invalid state with no way to reset them. Unlike TCP sockets (where the OS signals connection loss), ZeroMQ provides no built-in disconnect notification. A server crash during REQ/REP processing leaves clients permanently waiting. Practical solutions: timeout wrappers on all send/receive calls, heartbeating background threads, and state persistence that survives crashes.

## Links
- [Source](https://lucumr.pocoo.org/2012/6/26/disconnects-are-good-for-you/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
