---
type: article
title: "SQL is Agile"
description: "Ronacher advocates SQL databases for new projects, contrary to the NoSQL trend."
resource: https://lucumr.pocoo.org/2012/12/29/sql-is-agile/
tags: ["web-frameworks-and-apis", "sql", "nosql", "mongodb", "database-choice", "schema-flexibility", "agility"]
published: 2012-12
timestamp: 2026-07-05
---
# SQL is Agile

> Ronacher advocates SQL databases for new projects, contrary to the NoSQL trend.

## Key Facts
- Schemas exist in all databases; explicit SQL schemas prevent data inconsistencies that implicit schemas allow.
- Unexpected changes in access patterns (like a viral moment) require SQL's flexible query capabilities.
- NoSQL optimises for the data access patterns you know; SQL adapts to the patterns you discover.

## Summary
Ronacher advocates SQL databases for new projects, contrary to the NoSQL trend. His argument: schemas exist whether explicit or implicit — they live in your head or get frozen into MongoDB indexes. Denormalization creates problems when access patterns change unexpectedly. When his game was unexpectedly featured on iTunes, new analytical questions arose that MongoDB couldn't address; SQL's joins and grouping allowed immediate adaptation. NoSQL databases struggle with nested object queries and lack SQL's debugging tools.

## Links
- [Source](https://lucumr.pocoo.org/2012/12/29/sql-is-agile/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
