---
type: article
title: "Eventsourcing Patterns: Crypto-Shredding"
description: "Crypto-Shredding enables deletion of sensitive data in an immutable eventstore by encrypting sensitive event attributes with a key per resource, then deleting only the encryption keys."
resource: https://verraes.net/2019/05/eventsourcing-patterns-throw-away-the-key/
tags: ["event-sourcing-cqrs", "sensitive-data", "encryption", "gdpr", "compliance", "key-management"]
published: 2019-05
timestamp: 2026-07-05
---
# Eventsourcing Patterns: Crypto-Shredding

> Crypto-Shredding enables deletion of sensitive data in an immutable eventstore by encrypting sensitive event attributes with a key per resource, then deleting only the encryption keys.

## Key Facts
- Encrypt sensitive attributes with a unique key per resource, allowing selective key deletion without event modification
- Consumers must reliably encrypt sensitive data locally and respect key deletion notifications
- The pattern requires robust key management practices and careful consideration of legal implications
- Crypto-Shredding is effective for certain data types but requires understanding of encryption and cryptographic best practices

## Summary
Crypto-Shredding enables deletion of sensitive data in an immutable eventstore by encrypting sensitive event attributes with a key per resource, then deleting only the encryption keys. When sensitive information must be erased (such as under GDPR), the key is thrown away, rendering the encrypted data unreadable without modifying or deleting the event itself. This approach respects the append-only nature of eventstores while satisfying data deletion requirements. The pattern works best when consumers consistently store sensitive payloads using encryption with the same key management, and can withstand the legal interpretation of whether crypto-shredded data constitutes adequate deletion.

## Links
- [Source](https://verraes.net/2019/05/eventsourcing-patterns-throw-away-the-key/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-event-sourcing-cqrs.md)
- [EventSourcing Testing Patterns](/verraes.net/2023-05-eventsourcing-testing-patterns.md)
- [Eventsourcing Patterns: Multi-temporal Events](/verraes.net/2022-03-eventsourcing-patterns-multi-temporal-events.md)
- [Eventsourcing: State from Events or Events as State?](/verraes.net/2019-08-eventsourcing-state-from-events-or-events-as-state.md)
