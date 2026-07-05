---
type: article
title: "Make It Ephemeral: Software Should Decay and Lose Data"
description: "Ronacher argues that software should deliberately delete data over time rather than preserve everything indefinitely."
resource: https://lucumr.pocoo.org/2024/10/30/make-it-ephemeral/
tags: ["software-design-philosophy", "ephemerality", "data-decay", "design-philosophy", "shared-workspaces", "ux"]
published: 2024-10
timestamp: 2026-07-05
---
# Make It Ephemeral: Software Should Decay and Lose Data

> Ronacher argues that software should deliberately delete data over time rather than preserve everything indefinitely.

## Key Facts
- Software permanence is a design failure; intentional decay improves shared workspace usability.
- Users develop hoarding behaviour and creative hesitation in software that retains everything.
- "Ephemeral by default" (with opt-in permanence) is preferable to permanent storage with opt-in deletion.

## Summary
Ronacher argues that software should deliberately delete data over time rather than preserve everything indefinitely. Physical objects naturally decay — a useful property digital systems ignore. Indefinite retention creates clutter, makes users hesitant to create in shared spaces, and produces stale dashboards anchored to expired data. Proposed solutions: ephemeral-by-default with TTLs, garbage collection with trash, hiding aged content from search, scheduled deletion buttons for pre-committed removal, and archiving rather than permanent deletion.

## Links
- [Source](https://lucumr.pocoo.org/2024/10/30/make-it-ephemeral/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-software-design-philosophy.md)
- [Ugly Code and Dumb Things](/lucumr.pocoo.org/2025-02-ugly-code.md)
- [Seeking Purity](/lucumr.pocoo.org/2025-02-seeking-purity.md)
- [Build It Yourself](/lucumr.pocoo.org/2025-01-build-it-yourself.md)
