---
type: article
title: "Congratulations: We Now Have Opinions on Your Open Source Contributions"
description: "Ronacher critiques PyPI's requirement that maintainers of \"critical\" packages enable multi-factor authentication."
resource: https://lucumr.pocoo.org/2022/7/9/congratulations/
tags: ["open-source-philosophy", "pypi", "supply-chain-security", "critical-packages", "2fa", "vetting"]
published: 2022-07
timestamp: 2026-07-05
---
# Congratulations: We Now Have Opinions on Your Open Source Contributions

> Ronacher critiques PyPI's requirement that maintainers of "critical" packages enable multi-factor authentication.

## Key Facts
- Critical-designation imposes obligations on maintainers who did not choose to become critical infrastructure.
- Vetting layers should be separated from package indexes and operated by parties with commercial incentives to do it well.
- Version-specific trust assessment is more accurate than maintainer-level trust.

## Summary
Ronacher critiques PyPI's requirement that maintainers of "critical" packages enable multi-factor authentication. His concern is not 2FA itself but the precedent: developers don't choose to become critical; they achieve that status through organic adoption. Once designated, they face mandatory compliance obligations they didn't anticipate. He advocates the Mozilla `cargo-vet` model — separating vetting responsibility from package indexes, placing it with commercial users who benefit most from security, and enabling version-specific rather than maintainer-based trust.

## Links
- [Source](https://lucumr.pocoo.org/2022/7/9/congratulations/) — original post

## Related
- [Cluster synthesis](/lucumr.pocoo.org/_synthesis-open-source-philosophy.md)
- [The Life and Death of Open Source Companies](/lucumr.pocoo.org/2023-12-life-and-death-of-open-source.md)
- [FSL: A License For the Bazaar, Not the Cathedral](/lucumr.pocoo.org/2023-11-cathedral-and-bazaaar-licensing.md)
- [The Inevitability of Mixing Open Source and Money](/lucumr.pocoo.org/2024-10-mixing-oss-and-money.md)
