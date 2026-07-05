---
type: article
title: "Bridging the Efficiency Gap Between FromStr and String"
description: "Ronacher proposes a `FromString` trait that accepts owned `String` values rather than `&str`, addressing the inefficiency of `FromStr` which forces unnecessary clones when your input is already a `String`."
resource: https://lucumr.pocoo.org/2025/3/23/from-string/
tags: ["rust-language", "rust", "fromstr", "string", "zero-copy", "transmute", "trait-design"]
published: 2025-03
timestamp: 2026-07-05
---
# Bridging the Efficiency Gap Between FromStr and String

> Ronacher proposes a `FromString` trait that accepts owned `String` values rather than `&str`, addressing the inefficiency of `FromStr` which forces unnecessary clones when your input is already a `String`.

## Key Facts
- `FromStr` forces a clone when you have an owned `String`; a `FromString` trait eliminates this.
- `transmute_copy` with `TypeId` comparison provides zero-copy identity conversion for same-type conversions.
- Small trait design decisions around owned vs borrowed inputs have measurable performance consequences.

## Summary
Ronacher proposes a `FromString` trait that accepts owned `String` values rather than `&str`, addressing the inefficiency of `FromStr` which forces unnecessary clones when your input is already a `String`. The implementation uses `transmute_copy` (not `transmute`, because generic types have unknown sizes at compile time) with `TypeId` comparison to detect String-to-String identity and achieve zero-copy optimisation. A blanket implementation for all `FromStr` types makes the new trait a strict superset.

## Links
- [Source](https://lucumr.pocoo.org/2025/3/23/from-string/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
- [MiniJinja: Learnings from Building a Template Engine in Rust](/lucumr.pocoo.org/2024-08-minijinja.md)
