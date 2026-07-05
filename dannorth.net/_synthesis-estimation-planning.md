---
type: synthesis
title: "Estimation & Planning"
description: "This cluster explores approaches to estimation and planning under uncertainty, including Deliberate Discovery, intuitive estimation, and strategic planning frameworks."
cluster: estimation-planning
timestamp: 2026-07-05
---
# Estimation & Planning

> This cluster explores approaches to estimation and planning under uncertainty, including Deliberate Discovery, intuitive estimation, and strategic planning frameworks.

## Key Insights

**Ignorance is the primary constraint on throughput, not estimation accuracy.** The thought experiment is revealing: repeating a completed project with accumulated knowledge would take 1/2 to 1/4 the original time. This demonstrates that "ignorance about specific aspects of the problem at hand" fundamentally limits delivery speed, not team capacity or technical complexity. The street lamp analogy captures it perfectly—agile teams obsess over estimation because it's familiar and measurable, not because it's the highest-leverage activity. Effective planning means deliberately mapping dimensions of potential ignorance, testing assumptions systematically, and creating rapid feedback loops to resolve constraints, not perfecting story point estimates.

**Estimation's fractal nature means detail increases cost rather than accuracy.** Breaking requirements into finer granularity creates more "edges" where accumulated rounding errors and risk multipliers balloon estimates toward infinity. False precision (865 story points, 4.632 months) proves worse than rough accuracy because it creates false confidence and inadvertently reframes success from solving business problems to completing predefined story lists. Macro-level estimation by experienced practitioners often outperforms detailed decomposition precisely because it avoids this fractal trap while surfacing cross-project dragons that story-level estimation misses.

**Monte Carlo simulation is misapplied to single-instance projects.** The fundamental error: "Monte Carlo predicts a probability distribution for a number of future trials. We are using it to estimate the result of a single trial." Since each project executes exactly once, statistical confidence percentages become meaningless—a surgeon's 90% success rate describes many procedures, not yours specifically. Legitimate uses exist (feature throughput prediction from historical data, sensitivity analysis for parameter leverage) but require stable contexts and correct assumptions about parameters, independence, and probability distributions. Teams obsess over "on time and on budget" while missing real economic value drivers like cost of delay and business impact.

**OKRs succeed as alignment tools only when never used for individual measurement.** The critical insight separating OKRs from failed MBO systems: they're aspirational targets for organizational direction, not realistic commitments for performance review. Success means achieving 70-80% of Key Results, not 100%, because stretch goals prevent the mediocrity trap where teams sandbag commitments. Using OKRs to measure individuals converts them into the gaming mechanisms they were designed to avoid. For complex organizations, defining success through three lenses—value (customer impact), flow (reducing lead time), and sustainability (morale, costs)—provides richer alignment than single-dimension metrics.

**Every practice carries opportunity cost—question the trade-offs, not just the benefits.** TDD, pair programming, comprehensive testing, and other practices have genuine value but also hidden costs: what you're *not* doing while following these approaches. Spike and stabilize (deploy experiments quickly, invest in refactoring only proven valuable code) acknowledges that exploratory work benefits from sketching multiple approaches before committing to comprehensive testing, and that TDD enables incremental improvement (kaizen) but may trap teams in local maxima preventing breakthrough solutions (kaikaku). The skill is systematically examining trade-offs rather than accepting practices at face value.

---

## Related
- [Blink Estimation](/dannorth.net/2013-08-blink-estimation.md)
- [The perils of estimation](/dannorth.net/2009-07-the-perils-of-estimation.md)
- [Monte Python Simulation: misunderstanding Monte Carlo](/dannorth.net/2018-09-monte-python-simulation.md)
- [Applying OKRs](/dannorth.net/2017-05-applying-okrs.md)
- [The Art of Misdirection](/dannorth.net/2012-06-the-art-of-misdirection.md)
