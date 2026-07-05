---
type: article
title: "Dependency Risk and Funding"
description: "Ronacher argues that open source funding discussions concentrate on the wrong packages — those that gained visibility through package manager dependency counts."
resource: https://lucumr.pocoo.org/2022/1/10/dependency-risk-and-funding/
cluster: open-source-philosophy
tags: ["dependencies", "open-source-funding", "cognitive-biases", "javascript", "supply-chain-security"]
published: 2022-01
timestamp: 2026-07-05
---
# Dependency Risk and Funding

> Ronacher argues that open source funding discussions concentrate on the wrong packages — those that gained visibility through package manager dependency counts.

## Key Facts
- Package manager dependency counts are poor proxies for actual infrastructure criticality.
- Foundational libraries (curl, libxml2) are undervalued and underfunded relative to their impact.
- Funding follows visibility, not importance — a structural mismatch the community has not solved.

## Summary
Ronacher argues that open source funding discussions concentrate on the wrong packages — those that gained visibility through package manager dependency counts. npm micro-packages get funding attention while foundational libraries like curl (maintained by one person for 20+ years, used everywhere) and libxml2 go unnoticed. Package manager position creates artificial leverage: npm package owners have a "lever" that foundational C library maintainers lack. Better funding requires better metrics than popularity and dependency tree counts.

## Links
- [Source](https://lucumr.pocoo.org/2022/1/10/dependency-risk-and-funding/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-open-source-philosophy.md)
- [The Life and Death of Open Source Companies](/lucumr.pocoo.org/2023-12-life-and-death-of-open-source.md)
- [FSL: A License For the Bazaar, Not the Cathedral](/lucumr.pocoo.org/2023-11-cathedral-and-bazaaar-licensing.md)
- [The Inevitability of Mixing Open Source and Money](/lucumr.pocoo.org/2024-10-mixing-oss-and-money.md)
