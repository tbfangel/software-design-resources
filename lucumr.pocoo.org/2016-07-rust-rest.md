---
type: article
title: "Rust and Rest"
description: "Ronacher builds a REST API client in Rust for the Sentry API and documents lessons learned."
resource: https://lucumr.pocoo.org/2016/7/10/rust-rest/
cluster: rust-language
tags: ["rust", "rest", "http", "api-design", "error-handling"]
published: 2016-07
timestamp: 2026-07-05
---
# Rust and Rest

> Ronacher builds a REST API client in Rust for the Sentry API and documents lessons learned.

## Key Facts
- Deferring error conversion in HTTP clients enables more flexible conditional logic before signaling failure.
- `rust-curl` over `hyper` provides superior cross-platform SSL without sacrificing Rust safety.
- `RefCell` is appropriate when compile-time borrow checking is too restrictive for stateful single-threaded handles.

## Summary
Ronacher builds a REST API client in Rust for the Sentry API and documents lessons learned. Library choice: `rust-curl` over `hyper` for cross-platform SSL integration. API design: four-layer architecture (`Api`, `ApiRequest`, `ApiResponse`, `ApiResult<T>`) with a builder pattern. Key insight on error handling: defer error conversion — keep failed HTTP responses as response objects rather than converting to errors immediately, enabling conditional logic before failure. Uses `RefCell` for mutable curl handle state with runtime rather than compile-time safety.

## Links
- [Source](https://lucumr.pocoo.org/2016/7/10/rust-rest/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
