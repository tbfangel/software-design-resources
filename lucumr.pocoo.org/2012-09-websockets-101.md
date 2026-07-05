---
type: article
title: "Websockets 101"
description: "Ronacher introduces the WebSocket specification with critical commentary."
resource: https://lucumr.pocoo.org/2012/9/24/websockets-101/
tags: ["web-frameworks-and-apis", "websockets", "protocol-design", "tls", "authentication", "proxy-compatibility"]
published: 2012-09
timestamp: 2026-07-05
---
# Websockets 101

> Ronacher introduces the WebSocket specification with critical commentary.

## Key Facts
- TLS/SSL is mandatory for WebSockets in production; plain WebSocket connections fail through common proxies.
- WebSocket handshakes cannot transmit custom headers; use one-time tokens for authentication.
- Server-Sent Events with CORS may be superior to WebSockets for many use cases.

## Summary
Ronacher introduces the WebSocket specification with critical commentary. WebSockets are overengineered due to proxy compatibility requirements: masking, elaborate framing, and handshake ceremonies exist to work through broken HTTP infrastructure. TLS is essential — without it, WebSocket connections fail through corporate proxies and mobile networks. Authentication challenges: WebSocket handshakes cannot transmit custom headers, requiring URL-based or token-based auth. Isolation from standard HTTP infrastructure is recommended.

## Links
- [Source](https://lucumr.pocoo.org/2012/9/24/websockets-101/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
