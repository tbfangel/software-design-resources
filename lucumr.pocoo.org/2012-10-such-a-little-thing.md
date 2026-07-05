---
type: article
title: "Such a Little Thing: The Semicolon in Rust"
description: "Ronacher analyses Rust's semantic use of semicolons: trailing semicolons discard values, absence of trailing semicolons returns them from blocks."
resource: https://lucumr.pocoo.org/2012/10/18/such-a-little-thing/
tags: ["rust-language", "rust", "language-design", "semicolons", "expression-oriented-programming", "type-system"]
published: 2012-10
timestamp: 2026-07-05
---
# Such a Little Thing: The Semicolon in Rust

> Ronacher analyses Rust's semantic use of semicolons: trailing semicolons discard values, absence of trailing semicolons returns them from blocks.

## Key Facts
- Rust's semicolon semantics make expression-oriented programming safe in a statically typed context.
- Small syntactic decisions encode and enforce deep design philosophy about intent vs side effects.
- Taking a strong stance on a small detail is better than compromising and inheriting ambiguity from other languages.

## Summary
Ronacher analyses Rust's semantic use of semicolons: trailing semicolons discard values, absence of trailing semicolons returns them from blocks. This elegantly bridges expression-oriented programming (where almost everything returns a value) with static typing (which requires deliberate intent). Unlike Ruby where "the last expression returns" can cause unexpected side effects, Rust requires explicit intent. The semicolon design demonstrates how small syntactic decisions reflect and enforce deep language philosophy.

## Links
- [Source](https://lucumr.pocoo.org/2012/10/18/such-a-little-thing/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
