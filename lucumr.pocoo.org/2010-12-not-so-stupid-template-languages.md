---
type: article
title: "Not So Stupid Template Languages"
description: "Ronacher defends Jinja2's \"smart\" template language against claims that unrestricted templating leads to poor code."
resource: https://lucumr.pocoo.org/2010/12/5/not-so-stupid-template-languages/
tags: ["web-frameworks-and-apis", "jinja2", "django-templates", "template-design", "macros", "sandboxing"]
published: 2010-12
timestamp: 2026-07-05
---
# Not So Stupid Template Languages

> Ronacher defends Jinja2's "smart" template language against claims that unrestricted templating leads to poor code.

## Key Facts
- Explicit variable passing in Jinja2 macros improves clarity and enables performance optimisations.
- Jinja2's sandbox prevents accidental side effects like database queries in templates — a Django template risk.
- Template language capability doesn't determine code quality; developer discipline does.

## Summary
Ronacher defends Jinja2's "smart" template language against claims that unrestricted templating leads to poor code. Jinja2's macros make dependencies explicit rather than implicit (unlike Django's includes that silently pass all available variables). Jinja2 provides sandboxed environments that can prevent accidental database queries — a common Django template problem. The claim that "simpler" template languages prevent bad code is a straw man; both approaches produce equally good or bad code depending on the developer.

## Links
- [Source](https://lucumr.pocoo.org/2010/12/5/not-so-stupid-template-languages/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
