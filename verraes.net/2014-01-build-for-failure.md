---
type: article
title: "Build for Failure"
description: "Failure is inevitable in all systems."
resource: https://verraes.net/2014/01/build-for-failure/
tags: ["messaging-distributed-systems", "resilience", "system-design", "failure", "erlang-philosophy", "lean-startup"]
published: 2014-01
timestamp: 2026-07-05
---
# Build for Failure

> Failure is inevitable in all systems.

## Key Facts
- Failure is inevitable; build for recovery, not just prevention
- Write less defensive code; focus on correction and detection
- Find multiple solutions before picking one; be ready to pivot
- Expose and test failures regularly (Chaos Monkey, Chaos Engineering)

## Summary
Failure is inevitable in all systems. Rather than preventing failure through defensive programming, build systems that detect and recover from failure. Inspired by Erlang's "Let It Crash" philosophy and Lean Startup's "fail fast" mentality, the approach involves writing small amounts of defensive code and more corrective code. Find multiple solution approaches before committing to one; challenge solutions, break them down, and if the chosen one doesn't work, you have alternatives ready. Netflix's Chaos Monkey and similar tools force systems to fail regularly, building resilience. As Pieter Hintjens notes, accepting fallibility and learning to turn it into profit rather than shame is one of the hardest intellectual exercises in any profession.

## Links
- [Source](https://verraes.net/2014/01/build-for-failure/) — original post

## Related
- [Cluster synthesis](/verraes.net/_synthesis-messaging-distributed-systems.md)
- [Two Hard Problems with Distributed Systems](/verraes.net/2025-08-two-hard-problems-with-distributed-systems.md)
- [Messaging Patterns: Natural Language Message Names](/verraes.net/2019-06-messaging-patterns-natural-language-message-names.md)
- [Messaging Patterns: Throttling](/verraes.net/2019-05-messaging-patterns-throttling.md)
