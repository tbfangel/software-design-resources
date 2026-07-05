---
type: article
title: "Common Mistakes as Python Web Developer"
description: "A catalogue of common mistakes in Python web applications: encoding issues, mutable default arguments, incorrect use of `is` vs `==` for string comparison, thread safety in mutable global state, WSGI streaming issues, and incorrect response code usage."
resource: https://lucumr.pocoo.org/2010/12/24/common-mistakes-as-web-developer/
cluster: web-frameworks-and-apis
tags: ["python", "web-development", "security", "anti-patterns", "wsgi"]
published: 2010-12
timestamp: 2026-07-05
---
# Common Mistakes as Python Web Developer

> A catalogue of common mistakes in Python web applications: encoding issues, mutable default arguments, incorrect use of `is` vs `==` for string comparison, thread safety in mutable global state, WSGI streaming issues, and incorrect response code usage.

## Key Facts
- Mutable default arguments in Python are bound at function definition time, causing unexpected state persistence.
- WSGI streaming requires careful middleware handling to not break chunked transfer encoding.
- String interning in Python means `is` comparison for strings works inconsistently; always use `==`.

## Summary
A catalogue of common mistakes in Python web applications: encoding issues, mutable default arguments, incorrect use of `is` vs `==` for string comparison, thread safety in mutable global state, WSGI streaming issues, and incorrect response code usage. Practical guidance for developers moving from Django to lower-level Python web development.

## Links
- [Source](https://lucumr.pocoo.org/2010/12/24/common-mistakes-as-web-developer/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
