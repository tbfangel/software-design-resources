---
type: article
title: "Battlelog: Modern Web Applications are Here"
description: "Ronacher uses Battlefield 3's Battlelog as a case study for client-side rendering architectures at scale."
resource: https://lucumr.pocoo.org/2011/11/15/modern-web-applications-are-here/
cluster: web-frameworks-and-apis
tags: ["frontend", "json", "websockets", "web-development"]
published: 2011-11
timestamp: 2026-07-05
---
# Battlelog: Modern Web Applications are Here

> Ronacher uses Battlefield 3's Battlelog as a case study for client-side rendering architectures at scale.

## Key Facts
- Client-side rendering with JSON APIs reduces payload by ~75% compared to server-rendered HTML.
- Dual-compiled templates (Python + JavaScript) enable server-side rendering for SEO and client-side for UX.
- Large-scale consumer applications drive browser standard adoption more effectively than developer advocacy.

## Summary
Ronacher uses Battlefield 3's Battlelog as a case study for client-side rendering architectures at scale. Key engineering: JSON transmission (4 KB) instead of HTML (18 KB) per request, templates compiled to both Python and JavaScript for dual-rendering, WebSocket-based real-time notifications, and a Windows browser plugin for native game launch. He identifies the gap: no standard HTML5 API for browser-to-native-application communication, requiring plugins. Millions of users create "killer application" pressure on browser standards.

## Links
- [Source](https://lucumr.pocoo.org/2011/11/15/modern-web-applications-are-here/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
