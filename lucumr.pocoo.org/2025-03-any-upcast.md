---
type: article
title: "Rust Any Part 3: Finally we have Upcasts"
description: "Rust 1.86 finally adds support for upcasting to supertraits, fixing a three-year limitation in the `Any` trait."
resource: https://lucumr.pocoo.org/2025/3/27/any-upcast/
cluster: rust-language
tags: ["rust"]
published: 2025-03
timestamp: 2026-07-05
---
# Rust Any Part 3: Finally we have Upcasts

> Rust 1.86 finally adds support for upcasting to supertraits, fixing a three-year limitation in the `Any` trait.

## Key Facts
- Rust 1.86 resolves the supertrait upcast limitation that required the As-Any workaround for three years.
- Extension map patterns using `Any` are now cleaner and require less boilerplate.
- MSRV constraints mean adoption will be gradual for libraries with broad compatibility requirements.

## Summary
Rust 1.86 finally adds support for upcasting to supertraits, fixing a three-year limitation in the `Any` trait. Previously, traits inheriting from `Any` (e.g., `trait DebugAny: Any + Debug`) could not be directly cast to `&dyn Any` to use downcasting methods. The fix means the `As-Any Hack` from 2022 is no longer needed. Developers can now cast `dyn DebugAny` directly to `&dyn Any` and call `downcast_ref`. Adoption depends on raising Minimum Supported Rust Version.

## Links
- [Source](https://lucumr.pocoo.org/2025/3/27/any-upcast/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
- [MiniJinja: Learnings from Building a Template Engine in Rust](/lucumr.pocoo.org/2024-08-minijinja.md)
