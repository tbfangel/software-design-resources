---
type: article
title: "The Art of Misdirection"
description: "North uses stage magic as an analogy for software development practices."
resource: https://dannorth.net/blog/the-art-of-misdirection/
tags: ["estimation-planning", "agile", "opportunity-cost", "strategy", "tdd"]
published: 2012-06
timestamp: 2026-07-05
---
# The Art of Misdirection

> North uses stage magic as an analogy for software development practices.

## Key Facts
- Every practice involves opportunity cost: resources spent prevent investment in alternatives
- "Take nothing at face value" and systematically examine trade-offs in every decision
- Spike and stabilize: deploy experimental solutions quickly, refactor and test only proven valuable code
- TDD enables incremental improvement (kaizen) but may prevent breakthrough solutions (kaikaku)
- Exploratory work benefits from sketching multiple approaches before committing to comprehensive testing
- Costs exist regardless of visibility—challenge is identifying what you're giving up, not just gaining
- UI and third-party integrations often have high testing costs with minimal assurance gains

## Summary
North uses stage magic as an analogy for software development practices. Just as magicians exploit attention by directing focus toward obvious movements while concealing actual technique elsewhere, development teams often adopt practices without questioning hidden costs. The hidden cost is opportunity cost: resources spent on one approach prevent investment in alternatives. "Whatever you are doing right now comes at the cost of everything else you might be doing instead." North proposes the "spike and stabilize" method: deploy experimental solutions quickly to gather feedback, then invest in refactoring and testing only what proves valuable in production. He acknowledges TDD's benefits (confident changes, regression protection) but highlights contexts where it underperforms: exploratory work requiring multiple experimental approaches, radical redesign where TDD may trap teams in local maxima preventing breakthrough solutions (kaikaku vs. kaizen), and edge cases like UI and third-party integrations with high testing costs and minimal assurance gains.

## Links
- [Source](https://dannorth.net/blog/the-art-of-misdirection/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-estimation-planning.md)
- [Blink Estimation](/dannorth.net/2013-08-blink-estimation.md)
- [The perils of estimation](/dannorth.net/2009-07-the-perils-of-estimation.md)
- [Monte Python Simulation: misunderstanding Monte Carlo](/dannorth.net/2018-09-monte-python-simulation.md)
