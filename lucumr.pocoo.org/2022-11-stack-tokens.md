---
type: article
title: "A Better Way to Borrow in Rust: Stack Tokens"
description: "Ronacher proposes stack tokens — zero-sized types constructable only via a macro on the stack — as a solution to the \"rightward drift\" problem with thread-locals."
resource: https://lucumr.pocoo.org/2022/11/23/stack-tokens/
tags: ["rust-language", "rust", "lifetimes", "stack-tokens", "thread-locals", "borrow-checker", "soundness"]
published: 2022-11
timestamp: 2026-07-05
---
# A Better Way to Borrow in Rust: Stack Tokens

> Ronacher proposes stack tokens — zero-sized types constructable only via a macro on the stack — as a solution to the "rightward drift" problem with thread-locals.

## Key Facts
- Stack tokens enable cleaner APIs for types that need lifetime-bounded access without nested closures.
- The proposal depends on informal assumptions about stack lifetimes; formal soundness is unproven.
- Rust's designers must choose: validate stack tokens or declare competing approaches unsound — not both.

## Summary
Ronacher proposes stack tokens — zero-sized types constructable only via a macro on the stack — as a solution to the "rightward drift" problem with thread-locals. Thread-local `with()` APIs require nested closures to prevent lifetime leakage to `'static`. Stack tokens work because "any function that receives a `&StackToken` can be assured that this has a lifetime constrained to a stack frame." The proposal enables cleaner APIs for types like `Sticky<T>`. Caveat: soundness remains unclear and depends on assumptions about stack-to-thread relationships not formally specified in Rust's semantics.

## Links
- [Source](https://lucumr.pocoo.org/2022/11/23/stack-tokens/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
