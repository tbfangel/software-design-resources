---
type: article
title: "Monte Python Simulation: misunderstanding Monte Carlo"
description: "North argues that Monte Carlo simulation is fundamentally misapplied in software project estimation."
resource: https://dannorth.net/blog/monte-python-simulation/
cluster: estimation-planning
tags: ["estimation"]
published: 2018-09
timestamp: 2026-07-05
---
# Monte Python Simulation: misunderstanding Monte Carlo

> North argues that Monte Carlo simulation is fundamentally misapplied in software project estimation.

## Key Facts
- Monte Carlo models distributions across many similar events, not single-instance outcomes
- Statistical confidence percentages are meaningless for projects that execute exactly once
- Valid Monte Carlo use requires correct parameters, confirmed independence, and known probability distributions
- Teams obsess over "on time and on budget" while missing real economic value drivers (cost of delay, business impact)
- Legitimate uses: feature throughput prediction from historical data and sensitivity analysis for parameter leverage
- Use Monte Carlo for modeling distributions across many events, not predicting single outcomes
- Focus estimation on supporting actual decisions with minimal necessary effort

## Summary
North argues that Monte Carlo simulation is fundamentally misapplied in software project estimation. The core problem: "Monte Carlo predicts a probability distribution for a number of future trials. We are using it to estimate the result of a single trial." Since each project executes exactly once, statistical confidence percentages become meaningless for individual projects. A surgeon's 90% success rate describes many procedures, not yours specifically. He identifies three categories of misuse: wrong tool (applying portfolio-level probability to individual outcomes), wrong application (requiring three layers of correct assumptions about parameters, independence, and probability distributions), and wrong question (obsessing over "on time and on budget" without measuring actual business impact or cost of delay). North identifies two legitimate uses: feature throughput prediction using historical delivery data (when past work represents future work and context remains stable), and sensitivity analysis exploring how changing assumptions affects outcomes.

## Links
- [Source](https://dannorth.net/blog/monte-python-simulation/) — original post

## Related
- [Cluster synthesis](/dannorth.net/_synthesis-estimation-planning.md)
- [Blink Estimation](/dannorth.net/2013-08-blink-estimation.md)
- [The perils of estimation](/dannorth.net/2009-07-the-perils-of-estimation.md)
- [Applying OKRs](/dannorth.net/2017-05-applying-okrs.md)
