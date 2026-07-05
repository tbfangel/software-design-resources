---
type: article
title: "Updated Thoughts on Trust Scaling"
description: "Ronacher revisits his trust scaling concern: typical Rust applications now have hundreds of dependencies, making comprehensive security auditing impossible."
resource: https://lucumr.pocoo.org/2019/7/29/dependency-scaling/
cluster: open-source-philosophy
tags: ["trust", "dependencies", "supply-chain-security", "rust", "auditing"]
published: 2019-07
timestamp: 2026-07-05
---
# Updated Thoughts on Trust Scaling

> Ronacher revisits his trust scaling concern: typical Rust applications now have hundreds of dependencies, making comprehensive security auditing impossible.

## Key Facts
- Hundreds of transitive dependencies make meaningful auditing impossible under current practices.
- The ecosystem encourages updating because it is convenient, not because it is prudent.
- Independent auditor registries can reduce the chain of trust from hundreds to dozens per project.

## Summary
Ronacher revisits his trust scaling concern: typical Rust applications now have hundreds of dependencies, making comprehensive security auditing impossible. His symbolicator project had 303 unique dependencies; realistic auditing was unachievable. He proposes three complementary solutions: an independent auditor registry system (auditors verify published packages match source), dependency categorisation by size and risk, and selective updating policies (update for security, not convenience). The goal is making dependency management more intentional and auditable, not eliminating dependencies.

## Links
- [Source](https://lucumr.pocoo.org/2019/7/29/dependency-scaling/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-open-source-philosophy.md)
- [The Life and Death of Open Source Companies](/lucumr.pocoo.org/2023-12-life-and-death-of-open-source.md)
- [FSL: A License For the Bazaar, Not the Cathedral](/lucumr.pocoo.org/2023-11-cathedral-and-bazaaar-licensing.md)
- [The Inevitability of Mixing Open Source and Money](/lucumr.pocoo.org/2024-10-mixing-oss-and-money.md)
