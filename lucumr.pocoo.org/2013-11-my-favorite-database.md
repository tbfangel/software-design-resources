---
type: article
title: "My Favorite Database is the Network"
description: "Ronacher advocates for using signed data transmitted over the network as a replacement for database storage in certain scenarios."
resource: https://lucumr.pocoo.org/2013/11/17/my-favorite-database/
tags: ["web-frameworks-and-apis", "signed-tokens", "stateless-authentication", "hmac", "distributed-systems", "session-management"]
published: 2013-11
timestamp: 2026-07-05
---
# My Favorite Database is the Network

> Ronacher advocates for using signed data transmitted over the network as a replacement for database storage in certain scenarios.

## Key Facts
- Signed tokens let clients carry their own state, eliminating database dependencies for many scenarios.
- HMAC-based signatures enable verification without storage; revocation requires anchor points (time, password hash).
- Stateless signed-data patterns are underutilised despite solving a wide range of token and session problems.

## Summary
Ronacher advocates for using signed data transmitted over the network as a replacement for database storage in certain scenarios. When clients return signed tokens that the server validates (via HMAC), storage becomes the client's responsibility. Benefits: unbounded "storage" that auto-expires when clients lose data, natural decoupling between system components, and resilience through state rebuilding. Applications: session tokens, access tokens, flash sale frozen state, password reset links. Signature anchoring (to time windows or password hashes) enables revocation.

## Links
- [Source](https://lucumr.pocoo.org/2013/11/17/my-favorite-database/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
