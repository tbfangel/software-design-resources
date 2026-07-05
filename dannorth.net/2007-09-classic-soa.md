---
type: article
title: "A Classic Introduction to SOA"
description: "North prioritizes business understanding over technology in service-oriented architecture, arguing that \"the most important criteria for a service-oriented architect—before tackling the technology—should be a keen understanding of the business.\" He uses a 1950s corporation metaphor to explain SOA concepts without technical jargon, framing services as departments providing specific functions."
resource: https://dannorth.net/blog/classic-soa/
cluster: software-design-architecture
tags: ["software-architecture", "service-oriented-architecture"]
published: 2007-09
timestamp: 2026-07-05
---
# A Classic Introduction to SOA

> North prioritizes business understanding over technology in service-oriented architecture, arguing that "the most important criteria for a service-oriented architect—before tackling the technology—should be a keen understanding of the business." He uses a 1950s corporation metaphor to explain SOA concepts without technical jargon, framing services as departments providing specific functions.

## Key Facts
- Business understanding matters more than technology choice in SOA design
- Map service providers to actual organizational departments for genuine business alignment
- Avoid universal domain models—allow tailored understanding while sharing business concepts
- Support backward compatibility but provide clear failure feedback for mandatory upgrades
- 1950s corporation metaphor makes abstract architecture principles tangible and relatable
- Services should reflect genuine business processes, not purely technical constructs
- Solid SOA design emerges from understanding real business interactions before implementing technology
- Asynchronous messaging, error-handling, and correlation are fundamental service concerns

## Summary
North prioritizes business understanding over technology in service-oriented architecture, arguing that "the most important criteria for a service-oriented architect—before tackling the technology—should be a keen understanding of the business." He uses a 1950s corporation metaphor to explain SOA concepts without technical jargon, framing services as departments providing specific functions. Key service elements identified include service providers and consumers, asynchronous messaging with reliability concerns, error-handling strategies and transaction boundaries, response correlation mechanisms, service availability and capacity planning, and security and compliance requirements. Critical insights: avoid universal domain models since different stakeholders interpret business concepts differently (allow each service to maintain tailored understanding while communicating through shared concepts), support responsible evolution with backward compatibility ("gracefully degrade") but clear failure feedback when upgrades mandatory, and map service providers to actual organizational departments to ensure services reflect genuine business processes.

## Links
- [Source](https://dannorth.net/blog/classic-soa/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-software-design-architecture.md)
- [CUPID: for joyful coding](/dannorth.net/2022-02-cupid-for-joyful-coding.md)
- [CUPID: the back story](/dannorth.net/2021-03-cupid-the-back-story.md)
- [Best Simple System for Now](/dannorth.net/2025-02-best-simple-system-for-now.md)
