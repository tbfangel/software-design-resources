# Estimation & Planning

> Part of the [Dan North overview](overview.md)

This cluster explores approaches to estimation and planning under uncertainty, including Deliberate Discovery, intuitive estimation, and strategic planning frameworks. North argues that ignorance, not estimation accuracy, is the primary constraint on software delivery, and that effective planning focuses on identifying and reducing critical knowledge gaps rather than perfecting estimates.

## Key Insights

**Ignorance is the primary constraint on throughput, not estimation accuracy.** The thought experiment is revealing: repeating a completed project with accumulated knowledge would take 1/2 to 1/4 the original time. This demonstrates that "ignorance about specific aspects of the problem at hand" fundamentally limits delivery speed, not team capacity or technical complexity. The street lamp analogy captures it perfectly—agile teams obsess over estimation because it's familiar and measurable, not because it's the highest-leverage activity. Effective planning means deliberately mapping dimensions of potential ignorance, testing assumptions systematically, and creating rapid feedback loops to resolve constraints, not perfecting story point estimates.

**Estimation's fractal nature means detail increases cost rather than accuracy.** Breaking requirements into finer granularity creates more "edges" where accumulated rounding errors and risk multipliers balloon estimates toward infinity. False precision (865 story points, 4.632 months) proves worse than rough accuracy because it creates false confidence and inadvertently reframes success from solving business problems to completing predefined story lists. Macro-level estimation by experienced practitioners often outperforms detailed decomposition precisely because it avoids this fractal trap while surfacing cross-project dragons that story-level estimation misses.

**Monte Carlo simulation is misapplied to single-instance projects.** The fundamental error: "Monte Carlo predicts a probability distribution for a number of future trials. We are using it to estimate the result of a single trial." Since each project executes exactly once, statistical confidence percentages become meaningless—a surgeon's 90% success rate describes many procedures, not yours specifically. Legitimate uses exist (feature throughput prediction from historical data, sensitivity analysis for parameter leverage) but require stable contexts and correct assumptions about parameters, independence, and probability distributions. Teams obsess over "on time and on budget" while missing real economic value drivers like cost of delay and business impact.

**OKRs succeed as alignment tools only when never used for individual measurement.** The critical insight separating OKRs from failed MBO systems: they're aspirational targets for organizational direction, not realistic commitments for performance review. Success means achieving 70-80% of Key Results, not 100%, because stretch goals prevent the mediocrity trap where teams sandbag commitments. Using OKRs to measure individuals converts them into the gaming mechanisms they were designed to avoid. For complex organizations, defining success through three lenses—value (customer impact), flow (reducing lead time), and sustainability (morale, costs)—provides richer alignment than single-dimension metrics.

**Every practice carries opportunity cost—question the trade-offs, not just the benefits.** TDD, pair programming, comprehensive testing, and other practices have genuine value but also hidden costs: what you're *not* doing while following these approaches. Spike and stabilize (deploy experiments quickly, invest in refactoring only proven valuable code) acknowledges that exploratory work benefits from sketching multiple approaches before committing to comprehensive testing, and that TDD enables incremental improvement (kaizen) but may trap teams in local maxima preventing breakthrough solutions (kaikaku). The skill is systematically examining trade-offs rather than accepting practices at face value.

---

### [Blink Estimation](https://dannorth.net/blog/blink-estimation/)
**Type:** Article
**Date:** 2013-08
**Tags:** agile, effectiveness-patterns, estimation, planning, software

North proposes that experienced teams can make accurate high-level project estimates through rapid intuitive assessment rather than detailed story-by-story planning. This method, called "blink estimation," leverages expert judgment to provide quick consensus on project scope while avoiding the pitfalls of micro-planning that tends to inflate estimates through excessive detail. After brief discussion (20-30 minutes) about unknowns and constraints, gathered experts independently estimate before comparing answers. North shares an Internet Banking Project (2003) where a 6-8 person, 6-8 month estimate reached consensus across 18 stakeholders in five minutes, accurately predicting the actual delivery outcome. The approach requires three essential elements: experts estimating (practitioners with substantial delivery experience), expert messenger (facilitator who can defend intuitive estimation), and expert customer (stakeholder willing to trust team judgment). Macro-level estimation bypasses the fractal problem where increased detail paradoxically expands rolled-up costs, and story-level estimation poorly surfaces cross-project dragons (systemic unknowns).

**Key takeaways:**
- Macro-level intuitive estimation by experts often outperforms detailed story-by-story planning
- Breaking requirements into finer detail creates more "edges" causing estimates to balloon through accumulated rounding
- Simultaneous card revealing prevents anchoring bias from sequential announcements
- Diverse disciplinary representation (security, testing, operations, development) reveals blind spots
- Cognitive biases significantly influence estimates, requiring careful facilitation techniques
- Frame discussions as investment decisions (not contracts) to shift conversations toward ROI
- Non-experts learn by observing how experienced practitioners prioritize what "materially affects" estimates

---

### [The perils of estimation](https://dannorth.net/blog/the-perils-of-estimation/)
**Type:** Article
**Date:** 2009-07
**Tags:** agile, estimation, lean, planning, software

North critiques how agile teams conduct project estimation, arguing they conflate precision with accuracy and inadvertently reframe success from solving business problems to delivering predefined story lists. Teams provide false precision (865 story points) when businesses need rough accuracy: "If you tell me it will take 4.632 months and it takes 8 months, that's worse than useless." Rough estimates ("about six months") prove more valuable than detailed but wrong predictions. By presenting comprehensive story backlogs during inception, teams accidentally convince stakeholders that completing this specific list equals project success, when the real objective is solving the underlying business problem. North notes estimation's fractal nature: breaking requirements into finer detail creates more "edges," causing estimates to balloon toward infinity through accumulated rounding errors and risk multipliers. He advocates "deliberate discovery" during inception focusing on technical landscape assessment, domain understanding gaps, team and stakeholder identification, and risk identification, estimating feature-level work (person-weeks) rather than individual story points.

**Key takeaways:**
- False precision (detailed but wrong estimates) proves worse than rough accuracy
- Comprehensive story backlogs inadvertently reframe success as "completing this list" rather than solving business problems
- Estimation's fractal nature means increased detail paradoxically inflates estimates
- Focus inception on deliberate discovery: technical landscape, domain gaps, risks, stakeholders
- Estimate feature-level work (person-weeks), defer granular decomposition until "last responsible moment"
- Precision vs. accuracy problem: businesses need rough accuracy, not false precision
- "We're engaging in a process of deliberate discovery" aimed at order-of-magnitude sizing and risk landscape

---

### [Monte Python Simulation: misunderstanding Monte Carlo](https://dannorth.net/blog/monte-python-simulation/)
**Type:** Article
**Date:** 2018-09
**Tags:** estimation, statistics

North argues that Monte Carlo simulation is fundamentally misapplied in software project estimation. The core problem: "Monte Carlo predicts a probability distribution for a number of future trials. We are using it to estimate the result of a single trial." Since each project executes exactly once, statistical confidence percentages become meaningless for individual projects. A surgeon's 90% success rate describes many procedures, not yours specifically. He identifies three categories of misuse: wrong tool (applying portfolio-level probability to individual outcomes), wrong application (requiring three layers of correct assumptions about parameters, independence, and probability distributions), and wrong question (obsessing over "on time and on budget" without measuring actual business impact or cost of delay). North identifies two legitimate uses: feature throughput prediction using historical delivery data (when past work represents future work and context remains stable), and sensitivity analysis exploring how changing assumptions affects outcomes.

**Key takeaways:**
- Monte Carlo models distributions across many similar events, not single-instance outcomes
- Statistical confidence percentages are meaningless for projects that execute exactly once
- Valid Monte Carlo use requires correct parameters, confirmed independence, and known probability distributions
- Teams obsess over "on time and on budget" while missing real economic value drivers (cost of delay, business impact)
- Legitimate uses: feature throughput prediction from historical data and sensitivity analysis for parameter leverage
- Use Monte Carlo for modeling distributions across many events, not predicting single outcomes
- Focus estimation on supporting actual decisions with minimal necessary effort

---

### [Applying OKRs](https://dannorth.net/blog/applying-okrs/)
**Type:** Article
**Date:** 2017-05
**Tags:** management, planning, strategy

North shares experience implementing OKRs (Objectives and Key Results) across organizations ranging from hundreds to thousands of employees. OKRs provide strategic planning framework that brings "order and direction to organizations that lacked both." Unlike Management by Objectives (MBO), which incentivizes gaming and mediocrity, OKRs function as an alignment tool rather than a performance measurement system. Organizations establish "true north" through mission (unchanging reason for existence), vision (how to realize it), strategy (annual focus areas), and quarterly OKRs that operationalize strategy. Objectives are qualitative broad statements; Key Results are quantitative measures framed as "outrageous" ambitions rather than realistic targets. A successful quarter achieves "70-80% across most of your KRs." North emphasizes seven critical rules including aspirational targets (not realistic ones), never measuring individuals by OKRs, top-down cascading, and quarterly rhythm. For complex organizations, he recommends defining success through three lenses: value (customer impact), flow (reducing lead time), and sustainability (team morale, costs).

**Key takeaways:**
- OKRs are alignment tools, not measurement tools—never use for individual performance reviews
- Aspirational "outrageous" targets prevent mediocrity trap of traditional MBO systems
- Successful quarters achieve 70-80% of Key Results, not 100%
- Hierarchical structure: mission (unchanging) → vision → strategy (annual) → OKRs (quarterly)
- Three lenses for complex organizations: value, flow, and sustainability
- "The value is in the conversations around producing the OKRs as much as in the measures themselves"
- Transformation requires 3-4 quarters minimum; expect initial confusion and learning curve
- Use simple tools (Post-Its, index cards) over specialized software

---

### [The Art of Misdirection](https://dannorth.net/blog/the-art-of-misdirection/)
**Type:** Article
**Date:** 2012-06
**Tags:** agile, opportunity cost, strategy, TDD

North uses stage magic as an analogy for software development practices. Just as magicians exploit attention by directing focus toward obvious movements while concealing actual technique elsewhere, development teams often adopt practices without questioning hidden costs. The hidden cost is opportunity cost: resources spent on one approach prevent investment in alternatives. "Whatever you are doing right now comes at the cost of everything else you might be doing instead." North proposes the "spike and stabilize" method: deploy experimental solutions quickly to gather feedback, then invest in refactoring and testing only what proves valuable in production. He acknowledges TDD's benefits (confident changes, regression protection) but highlights contexts where it underperforms: exploratory work requiring multiple experimental approaches, radical redesign where TDD may trap teams in local maxima preventing breakthrough solutions (kaikaku vs. kaizen), and edge cases like UI and third-party integrations with high testing costs and minimal assurance gains.

**Key takeaways:**
- Every practice involves opportunity cost: resources spent prevent investment in alternatives
- "Take nothing at face value" and systematically examine trade-offs in every decision
- Spike and stabilize: deploy experimental solutions quickly, refactor and test only proven valuable code
- TDD enables incremental improvement (kaizen) but may prevent breakthrough solutions (kaikaku)
- Exploratory work benefits from sketching multiple approaches before committing to comprehensive testing
- Costs exist regardless of visibility—challenge is identifying what you're giving up, not just gaining
- UI and third-party integrations often have high testing costs with minimal assurance gains
