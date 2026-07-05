---
type: article
title: "Getting Started with WSGI"
description: "A foundational introduction to WSGI — Python's Web Server Gateway Interface — explaining how it works, why it exists, and how to write a minimal WSGI application."
resource: https://lucumr.pocoo.org/2007/5/21/getting-started-with-wsgi/
tags: ["web-frameworks-and-apis", "wsgi", "python", "web-development", "first-principles"]
published: 2007-05
timestamp: 2026-07-05
---
# Getting Started with WSGI

> A foundational introduction to WSGI — Python's Web Server Gateway Interface — explaining how it works, why it exists, and how to write a minimal WSGI application.

## Key Facts
- WSGI enables Python web applications to run under any compliant server by standardising the application interface.
- A minimal WSGI application requires only a callable accepting `environ` and `start_response`.
- Understanding WSGI directly makes framework magic comprehensible and debugging easier.

## Summary
A foundational introduction to WSGI — Python's Web Server Gateway Interface — explaining how it works, why it exists, and how to write a minimal WSGI application. Historical context: this was written when WSGI was still becoming the standard Python web server protocol, and many developers were unfamiliar with it.

## Links
- [Source](https://lucumr.pocoo.org/2007/5/21/getting-started-with-wsgi/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [WSGI on Python 3](/lucumr.pocoo.org/2010-05-wsgi-on-python-3.md)
