---
type: article
title: "Using Rust Macros for Custom VTables"
description: "Ronacher shows that Rust's object-safety rules can be circumvented through manually constructed vtables using macros."
resource: https://lucumr.pocoo.org/2024/5/16/macro-vtable-magic/
cluster: rust-language
tags: ["rust", "memory-management"]
published: 2024-05
timestamp: 2026-07-05
---
# Using Rust Macros for Custom VTables

> Ronacher shows that Rust's object-safety rules can be circumvented through manually constructed vtables using macros.

## Key Facts
- Custom vtables via macros bypass Rust's object-safety rules when traits need reference-counted receivers.
- Macro-generated unsafe boilerplate is safer than hand-written equivalents for repetitive patterns.
- Compile-time introspection (as in Zig) would make this pattern cleaner; Rust's macro system requires more ceremony.

## Summary
Ronacher shows that Rust's object-safety rules can be circumvented through manually constructed vtables using macros. When traits require `&Arc<Self>` receivers — preventing object safety — a `type_erase!` macro can generate custom fat pointers with trampolines that manage reference counting through vtable entries. The result is a `DynObject` type with a raw pointer to Arc-wrapped data and a hidden `VTable` struct with function pointers. "Just because Rust tells you that you cannot make something into an object does not mean you actually can't."

## Links
- [Source](https://lucumr.pocoo.org/2024/5/16/macro-vtable-magic/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
