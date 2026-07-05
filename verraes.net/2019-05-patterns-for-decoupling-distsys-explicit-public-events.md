---
type: article
title: "Patterns for Decoupling in Distributed Systems: Explicit Public Events"
description: "Mark a small subset of events as public using @Public annotations, marker interfaces, or isPublic() methods; keep the rest private by default."
resource: https://verraes.net/2019/05/patterns-for-decoupling-distsys-explicit-public-events/
tags: ["messaging-distributed-systems", "decoupling", "bounded-contexts", "api-design", "event-visibility"]
published: 2019-05
timestamp: 2026-07-05
---
# Patterns for Decoupling in Distributed Systems: Explicit Public Events

> Mark a small subset of events as public using @Public annotations, marker interfaces, or isPublic() methods; keep the rest private by default.

## Key Facts
- Explicitly mark events as public; keep all others private by default
- Separate messaging channels for internal and external consumers
- Decouples external API from internal implementation changes

## Summary
Mark a small subset of events as public using @Public annotations, marker interfaces, or isPublic() methods; keep the rest private by default. This prevents sensitive data from leaking and decouples the external API from internal structure changes. If the internal bounded context evolves significantly, the API change happens intentionally through a public event, not accidentally through exposure of internals. The pattern applies the principle that everything should be closed off by default and only opened where justified.

## Links
- [Source](https://verraes.net/2019/05/patterns-for-decoupling-distsys-explicit-public-events/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
