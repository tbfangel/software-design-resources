---
type: article
title: "Why Open Source Isn't Always Fair"
description: "Traditional open-source licensing creates an unfair power dynamic favoring large corporations over individual developers."
resource: https://www.architecture-weekly.com/p/why-open-source-isnt-always-fair
cluster: engineering-culture
tags: ["open-source-licensing", "open-source-sustainability", "cloud-storage"]
published: 2025-09
timestamp: 2026-07-05
---
# Why Open Source Isn't Always Fair

> Traditional open-source licensing creates an unfair power dynamic favoring large corporations over individual developers.

## Key Facts
- Formalized licensing isn't "rug pulling"—it's establishing fair conditions for long-term sustainability
- Emmett and Pongo will require Contributor License Agreements and dual licensing approaches
- Large cloud providers profit from open-source work without proportionate contribution back
- AGPLv3 and SSPL licensing models enable maintainers to sustain projects rather than abandoning them to burnout
- Individual developers and small companies can still use the software freely under open-source terms
- Commercial exploitation by cloud providers requires different terms to ensure fairness

## Summary
Traditional open-source licensing creates an unfair power dynamic favoring large corporations over individual developers. The current model assumes all users should receive equal treatment, but this ignores the asymmetry between billion-dollar cloud providers and solo maintainers. Permissive licenses (Apache 2.0, MIT) allow cloud providers to commercialize open-source projects without contributing back—companies like AWS built DocumentDB and OpenSearch based on others' work, capturing massive value. The solution involves dual licensing under AGPLv3 (OSI-approved; requires sharing modifications if offered as a network service) and SSPL (more explicit; demands open-sourcing supporting infrastructure for commercial services). Real examples include MongoDB switching to SSPL after AWS profited from DocumentDB, and Elastic and Redis later adding AGPLv3 alongside SSPL, finding middle ground.

## Links
- [Source](https://www.architecture-weekly.com/p/why-open-source-isnt-always-fair) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-engineering-culture.md)
- [Requiem for a 10x Engineer Dream](/architecture-weekly.com/2025-09-requiem-for-a-10x-engineer-dream.md)
- [Do We Still Need the QA Role?](/architecture-weekly.com/2024-do-we-still-need-the-qa-role.md)
- [Residuality Theory: A Rebellious Take on Resilience](/architecture-weekly.com/2024-residuality-theory-a-rebellious-take.md)
