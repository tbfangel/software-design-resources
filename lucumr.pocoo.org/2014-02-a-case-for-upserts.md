---
type: article
title: "A Case for Upserts"
description: "Ronacher argues that upserts (INSERT OR UPDATE) are not a design smell but a necessity for reliable web applications."
resource: https://lucumr.pocoo.org/2014/2/16/a-case-for-upserts/
tags: ["web-frameworks-and-apis", "sql", "upserts", "postgresql", "idempotency", "network-reliability", "concurrency"]
published: 2014-02
timestamp: 2026-07-05
---
# A Case for Upserts

> Ronacher argues that upserts (INSERT OR UPDATE) are not a design smell but a necessity for reliable web applications.

## Key Facts
- Upserts are essential for idempotent operations in the face of network unreliability.
- "Lazy creation" of features for existing records is a valid architecture that requires upserts.
- Concurrency with unique constraints produces race conditions that upserts resolve more cleanly than retry loops.

## Summary
Ronacher argues that upserts (INSERT OR UPDATE) are not a design smell but a necessity for reliable web applications. Three scenarios require them: lazy creation (features added to existing data without mass migration), network reliability (idempotent operations using nonces prevent duplicate charges when requests are retried), and concurrency (avoiding complex retry loops for unique constraint violations). He criticises PostgreSQL for lacking native upsert support at time of writing.

## Links
- [Source](https://lucumr.pocoo.org/2014/2/16/a-case-for-upserts/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-web-frameworks-and-apis.md)
- [Opening The Flask](/lucumr.pocoo.org/2010-06-opening-the-flask.md)
- [WSGI and the Pluggable Pipe Dream](/lucumr.pocoo.org/2011-07-the-pluggable-pipedream.md)
- [Getting Started with WSGI](/lucumr.pocoo.org/2007-05-getting-started-with-wsgi.md)
