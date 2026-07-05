---
type: article
title: "Ugly Code and Dumb Things"
description: "Ronacher distinguishes between two legitimate professional objectives: beautiful reusable code (appropriate for libraries and frameworks) and pragmatic shipping code (appropriate for applications and products)."
resource: https://lucumr.pocoo.org/2025/2/20/ugly-code/
cluster: software-design-philosophy
tags: ["code-quality", "pragmatism", "simplicity", "product-management", "library-design"]
published: 2025-02
timestamp: 2026-07-05
---
# Ugly Code and Dumb Things

> Ronacher distinguishes between two legitimate professional objectives: beautiful reusable code (appropriate for libraries and frameworks) and pragmatic shipping code (appropriate for applications and products).

## Key Facts
- Elegance and pragmatism are different objectives; neither is universally correct.
- Application code that ships and validates should not be judged by library quality standards.
- Intentional messiness (prioritising velocity over reuse) is a design choice, not incompetence.

## Summary
Ronacher distinguishes between two legitimate professional objectives: beautiful reusable code (appropriate for libraries and frameworks) and pragmatic shipping code (appropriate for applications and products). Using Flickr's Flamework as a case study — manually-constructed SQL, global variables, no ORM — he argues that intentionally ugly code can be excellent engineering when the priority is velocity and validation. "Reusability is not that important when you're building an application." The code serves as a Rorschach test for engineering values.

## Links
- [Source](https://lucumr.pocoo.org/2025/2/20/ugly-code/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
- [Make It Ephemeral: Software Should Decay and Lose Data](/lucumr.pocoo.org/2024-10-make-it-ephemeral.md)
