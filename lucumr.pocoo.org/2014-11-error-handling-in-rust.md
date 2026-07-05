---
type: article
title: "Improved Error Handling in Rust"
description: "A follow-up to the earlier error handling post, documenting improvements as Rust approaches 1.0."
resource: https://lucumr.pocoo.org/2014/11/6/error-handling-in-rust/
cluster: rust-language
tags: ["rust", "error-handling", "python", "api-design"]
published: 2014-11
timestamp: 2026-07-05
---
# Improved Error Handling in Rust

> A follow-up to the earlier error handling post, documenting improvements as Rust approaches 1.0.

## Key Facts
- `FromError` enables automatic error conversion at call sites, reducing boilerplate in error-handling code.
- Error types are an API contract; the decision of how much cause information to surface has real consequences.
- The `try!` macro (later `?`) combined with `FromError` makes Rust error propagation nearly as ergonomic as exceptions.

## Summary
A follow-up to the earlier error handling post, documenting improvements as Rust approaches 1.0. The `FromError` trait provides standardised error conversion: function signatures define the target error type, and `try!` uses `FromError` to automatically convert errors to the expected type. This enables clean error chaining while preserving cause information. Four error design patterns are identified: simple enums, complex enums preserving causes, struct-like enum variants with conditional details, and fat error structs.

## Links
- [Source](https://lucumr.pocoo.org/2014/11/6/error-handling-in-rust/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
