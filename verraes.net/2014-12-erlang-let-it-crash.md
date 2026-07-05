---
type: article
title: "Let It Crash"
description: "Distilled from Joe Armstrong's \"Programming Erlang,\" this post explains the \"Let It Crash\" philosophy that drives Erlang's design."
resource: https://verraes.net/2014/12/erlang-let-it-crash/
cluster: messaging-distributed-systems
tags: ["actor-model", "concurrency", "messaging", "resilience"]
published: 2014-12
timestamp: 2026-07-05
---
# Let It Crash

> Distilled from Joe Armstrong's "Programming Erlang," this post explains the "Let It Crash" philosophy that drives Erlang's design.

## Key Facts
- All computation is processes; all interaction is messages
- Individual process failures are not catastrophic; supervision trees manage recovery
- No shared mutable state = no locks = safe parallelization
- Separation between problem-solving code and problem-fixing code is clean and powerful

## Summary
Distilled from Joe Armstrong's "Programming Erlang," this post explains the "Let It Crash" philosophy that drives Erlang's design. Everything is a process; processes interact only via message passing, mirroring the real world where we learn by receiving messages, not through shared memory. In Erlang's large process population, the failure of one process is not catastrophic—build supervision trees to detect crashes and decide how to recover. This leads to clean separation: write code that solves problems and code that fixes problems, kept distinct. Erlang has no mutable data structures, eliminating lock contention and enabling easy parallelization across multicore CPUs. The result is systems expected to run forever, upgradeable while running, and resilient by design.

## Links
- [Source](https://verraes.net/2014/12/erlang-let-it-crash/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
