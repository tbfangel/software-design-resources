---
type: article
title: "You can't Rust that"
description: "Ronacher's practical guide to three common Rust patterns that frustrate beginners: self-referential structs (use handles/offsets instead of pointers), ownership ambiguity (use `Arc<T>` and `Rc<T>` instead of fighting the borrow checker), and interior mutability for shared mutable state (promote new state to \"current\" rather than enabling mutation through `RwLock`)."
resource: https://lucumr.pocoo.org/2018/3/31/you-cant-rust-that/
cluster: rust-language
tags: ["rust", "ownership", "memory-management"]
published: 2018-03
timestamp: 2026-07-05
---
# You can't Rust that

> Ronacher's practical guide to three common Rust patterns that frustrate beginners: self-referential structs (use handles/offsets instead of pointers), ownership ambiguity (use `Arc<T>` and `Rc<T>` instead of fighting the borrow checker), and interior mutability for shared mutable state (promote new state to "current" rather than enabling mutation through `RwLock`).

## Key Facts
- Self-referential structs are not directly expressible in Rust; handles that compute pointers on demand are the alternative.
- Reference counting (`Arc<T>`) resolves ownership ambiguity more cleanly than fighting the borrow checker.
- Immutable state with atomic promotion (swap current config pointer) is preferable to `RwLock` mutation.

## Summary
Ronacher's practical guide to three common Rust patterns that frustrate beginners: self-referential structs (use handles/offsets instead of pointers), ownership ambiguity (use `Arc<T>` and `Rc<T>` instead of fighting the borrow checker), and interior mutability for shared mutable state (promote new state to "current" rather than enabling mutation through `RwLock`). The mantra: use handles, reference count, promote new state. These patterns align with Rust's design rather than fighting it.

## Links
- [Source](https://lucumr.pocoo.org/2018/3/31/you-cant-rust-that/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
