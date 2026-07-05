---
type: article
title: "Patterns for Decoupling in Distributed Systems: Domain Query"
description: "Replace free-form queries (SELECT, REST endpoints, GraphQL) with domain-specific Domain Queries using natural language questions (WhichCarsAreUpForReplacement)."
resource: https://verraes.net/2019/05/patterns-for-decoupling-distsys-domain-query/
cluster: messaging-distributed-systems
tags: ["coupling", "sql", "api-design", "ubiquitous-language"]
published: 2019-05
timestamp: 2026-07-05
---
# Patterns for Decoupling in Distributed Systems: Domain Query

> Replace free-form queries (SELECT, REST endpoints, GraphQL) with domain-specific Domain Queries using natural language questions (WhichCarsAreUpForReplacement).

## Key Facts
- Define domain-specific queries instead of exposing raw schemas
- Use natural language question names (WhichCarsAreUpForReplacement)
- Clients don't know the server's structure; server is free to change implementation

## Summary
Replace free-form queries (SELECT, REST endpoints, GraphQL) with domain-specific Domain Queries using natural language questions (WhichCarsAreUpForReplacement). Domain Queries are narrowly tailored to specific use cases and hide implementation details. The server knows where and how to compute results; clients don't need knowledge of the schema. This decouples clients from internal structure, making it possible to change how the server computes results without breaking external contracts. Responses are equally tailored (CarsThatAreUpForReplacement) and use Ubiquitous Language.

## Links
- [Source](https://verraes.net/2019/05/patterns-for-decoupling-distsys-domain-query/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
