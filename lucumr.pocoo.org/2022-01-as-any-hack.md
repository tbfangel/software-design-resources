---
type: article
title: "Rust Any Part 2: As-Any Hack"
description: "Ronacher demonstrates the As-Any hack: a workaround for Rust's limitation that you cannot create `Box<dyn Any + Debug>` because only one non-auto trait is allowed in a trait object."
resource: https://lucumr.pocoo.org/2022/1/7/as-any-hack/
tags: ["rust-language", "rust", "any-trait", "downcasting", "debug", "trait-objects", "extension-maps"]
published: 2022-01
timestamp: 2026-07-05
---
# Rust Any Part 2: As-Any Hack

> Ronacher demonstrates the As-Any hack: a workaround for Rust's limitation that you cannot create `Box<dyn Any + Debug>` because only one non-auto trait is allowed in a trait object.

## Key Facts
- Supertrait + `as_any()` pattern enables downcasting for trait objects that combine `Any` with other traits.
- TypeId storage alongside trait object references enables human-readable debug output in extension maps.
- This workaround is no longer needed in Rust 1.86+, but remains relevant for lower MSRV targets.

## Summary
Ronacher demonstrates the As-Any hack: a workaround for Rust's limitation that you cannot create `Box<dyn Any + Debug>` because only one non-auto trait is allowed in a trait object. The solution creates a custom supertrait inheriting from both `Any` and `Debug`, adds `as_any()` and `as_any_mut()` methods for upcasting, and builds a debuggable extension map on top. Note: this hack was superseded by Rust 1.86's upcast support (covered in Part 3).

## Links
- [Source](https://lucumr.pocoo.org/2022/1/7/as-any-hack/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
