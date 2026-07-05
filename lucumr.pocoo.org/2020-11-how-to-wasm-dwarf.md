---
type: article
title: "How to WASM DWARF"
description: "Ronacher explains why DWARF (not source maps) is the right debugging format for WebAssembly: source maps work for minified JavaScript but fail for WASM's binary complexity and Harvard architecture (separated code/data)."
resource: https://lucumr.pocoo.org/2020/11/30/how-to-wasm-dwarf/
tags: ["rust-language", "webassembly", "dwarf", "debugging", "sentry", "wasm-bindgen"]
published: 2020-11
timestamp: 2026-07-05
---
# How to WASM DWARF

> Ronacher explains why DWARF (not source maps) is the right debugging format for WebAssembly: source maps work for minified JavaScript but fail for WASM's binary complexity and Harvard architecture (separated code/data).

## Key Facts
- DWARF is the correct debug format for WebAssembly; source maps are insufficient for the binary complexity.
- Browser APIs for dynamic WASM module tracking do not yet exist, complicating crash reporting.
- wasm-bindgen's destruction of DWARF info is a significant obstacle for production WASM debugging.

## Summary
Ronacher explains why DWARF (not source maps) is the right debugging format for WebAssembly: source maps work for minified JavaScript but fail for WASM's binary complexity and Harvard architecture (separated code/data). Current obstacles include browsers not providing APIs for WASM module URLs, tools like wasm-bindgen destroying DWARF debug info, and the absence of standardised build IDs. Sentry implements workarounds using wasm-split. The ecosystem is improving but significant gaps remain.

## Links
- [Source](https://lucumr.pocoo.org/2020/11/30/how-to-wasm-dwarf/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-rust-language.md)
- [Rust Any Part 3: Finally we have Upcasts](/lucumr.pocoo.org/2025-03-any-upcast.md)
- [Bridging the Efficiency Gap Between FromStr and String](/lucumr.pocoo.org/2025-03-from-string.md)
- [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](/lucumr.pocoo.org/2025-02-fat-rand.md)
