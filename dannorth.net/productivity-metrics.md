# Productivity & Metrics

> Part of the [Dan North overview](overview.md)

This cluster challenges conventional thinking about productivity measurement and software craftsmanship, arguing that value delivery matters more than technical perfection. North critiques both superficial metrics and craft-focused philosophies that center the software rather than the business outcomes it enables.

## Key Insights

**Individual productivity metrics fundamentally misunderstand software development as a collaborative system.** Tim Mackinnon's story crystallizes this: zero individual story points but massive team impact through pairing, mentoring, and quality improvement. Individual metrics fail because they cannot isolate contributions in complex adaptive systems where knowledge transfer, architectural decisions, and code quality improvements compound across teams invisibly. The right unit of measurement is team effectiveness and business outcomes, not programmer output.

**"Programming is not a craft" is a critique of ego, not skill.** North's controversial thesis distinguishes between thoughtful engagement with software excellence and self-aggrandizing craft identity. Software succeeds when users never notice it—like bridges, not cathedrals. The problem with Software Craftsmanship isn't the pursuit of quality but the centering of programmer satisfaction over business results. North advocates "egoless, humble" focus on outcomes rather than code aesthetics, while acknowledging that expertise absolutely matters and should be demonstrable through transparent, rigorous credentialing (not self-designation).

**Most programming is not typing code—it's understanding systems and navigating constraints.** McKinsey's productivity review fails because it reduces development to measurable code-writing output, missing that real work involves domain learning, problem assessment, cross-functional compliance, and architecture decisions. Flow-based measures (lead time, throughput) outperform reductionist individual metrics precisely because they capture systemic effectiveness rather than activity. Poor performance typically reflects systemic failures, not individual weakness, and should be addressed through systems thinking.

**Context determines appropriate quality standards—there is no universal rigor.** North's criticism of "best value software, something that's fit for purpose in this specific context" challenges both sloppy work and over-engineering. Programmers should be "as comfortable hacking together a disposable script as test-driving a complex business calculation" based on experience-informed judgment. Copy-paste coding is acceptable when appropriate; comprehensive testing may be wasteful for certain contexts. The skill is discerning which approach serves business outcomes best, not adhering to universal practices regardless of context.

---

### [McKinsey Developer Productivity Review](https://dannorth.net/blog/mckinsey-review/)
**Type:** Article
**Date:** 2023-10
**Tags:** productivity, programming, metrics

North critiques McKinsey's approach to measuring developer productivity, identifying two fundamental errors: assuming software development is reducible to measurable components like factory work, and equating productivity primarily with code-writing output. He argues that software development is "over-measured, not under-measured" through reductionist industrial-era frameworks. The article challenges McKinsey's small sample size (20 case studies) with no control groups, missing citations of rigorous DORA and SPACE research, and categorization of test data management as "low-value" work. North demonstrates superior approaches through examples like WhatsApp's 13 engineers managing 500 million users and SQLite's three developers maintaining millions of tests. He advocates for flow-based measures (lead time, throughput) based on Theory of Constraints, emphasizing that poor performance typically reflects systemic failures rather than individual weakness.

**Key takeaways:**
- Most programming involves domain learning, problem assessment, and architecture decisions, not typing code
- Individual contribution metrics fail because they ignore systemic and collaborative factors
- Flow-based measures (lead time, throughput) outperform reductionist individual metrics
- Context matters: development capability assessment must align with organizational constraints
- Peer feedback ("Who do you most want in this team?") identifies real contributors better than surveillance metrics
- Frame improvements through coaching and peer feedback rather than measurement-based surveillance

---

### [The Worst Programmer I Know](https://dannorth.net/blog/the-worst-programmer/)
**Type:** Article
**Date:** 2023-09
**Tags:** productivity, metrics, parable

North tells the story of Tim Mackinnon, whose productivity score was consistently zero because he never claimed individual story points. Instead, Tim spent his days pair programming with teammates at all skill levels, mentoring juniors through Socratic questioning and collaborating with seniors to produce superior solutions. When a manager demanded Tim's removal based on zero metrics, North refused, explaining that "Tim was delivering a team that was delivering software." After observing Tim pairing with colleagues and noticing significantly better quality and faster delivery times, the organization abandoned individual metrics in favor of team accountability. The story illustrates how lines of code, bugs found, and individual story points are easily gamed and miss true value creation in complex adaptive systems.

**Key takeaways:**
- Individual productivity metrics fail to capture real value in collaborative environments
- Knowledge transfer, mentorship, and code quality improvements compound across teams but remain invisible to individual metrics
- Measure tangible business impact (dollars saved/generated/protected) or DORA metrics assessing systemic workflow quality
- Individual contribution cannot be meaningfully isolated in collaborative software development
- Team-based accountability produces better outcomes than individual performance measurement
- Wrong measurement targets drive counterproductive organizational behavior

---

### [Programming is not a craft](https://dannorth.net/blog/programming-is-not-a-craft/)
**Type:** Article
**Date:** 2011-01
**Tags:** agile, craft, craftsmanship, discovery, productivity, programming, software, trade, value

North argues that framing programming as a "craft" is fundamentally misguided and risks centering programmer egos rather than delivering business value. He contends that programming should be understood as a skilled trade focused on solving problems and moving information, not as an artistic discipline. North distinguishes between crafts (products with intrinsic aesthetic beauty) and trades (services judged purely by utility): a cathedral's decorative stonework exists to inspire, while a functional bridge should be "invisible." Software, like bridges, succeeds when users never notice it. He draws from his wife's artistic background to argue that successful programmers focus on information flow (negative space) rather than code aesthetics. The Software Craftsmanship Manifesto's requirement of "no demonstration of skill, credentials, or experience" undermines its legitimacy. North proposes that the field needs rigorous, transparent credentialing mechanisms similar to jiu jitsu's nage-ne-kata or professional credentials in law.

**Key takeaways:**
- Software should emphasize business results and customer delight over code elegance
- "No-one wants your steenking software"—they want capabilities delivered unobtrusively
- Successful programming focuses on information flow, not code aesthetics
- Craft framing risks creating elitist, self-aggrandizing culture divorced from practical outcomes
- Legitimate craftsmanship framework needs rigorous, transparent credentialing, not self-designation
- Expert programmers should be "egoless, humble, with a focus on the outcome rather than the code"

---

### [On craftsmanship](https://dannorth.net/blog/on-craftsmanship/)
**Type:** Article
**Date:** 2011-01
**Tags:** agile, craft, craftsmanship, discovery, productivity, programming, software, trade, value

North responds to feedback on his "Programming is not a craft" post, refining his argument that programming should be understood primarily as a trade rather than a craft, though it contains elements of both. He advocates applying "the appropriate amount of rigour, discipline and excellence" contextually, prioritizing fitness for purpose and business value over dogmatic adherence to practices. North distinguishes between those who thoughtfully engage with software development versus those who self-identify as "craftsmen" to differentiate themselves from regular professionals. He addresses six categories of pushback, including definitional disputes, emotional reactions, evidence demands, and certification debates. North strongly opposes classroom certifications but supports experience-based qualifications. He notes that exceptional productivity exists but is rare, and emphasizes that people want software that solves problems, not software for its own sake.

**Key takeaways:**
- Programmers should be "as comfortable hacking together a disposable script as test-driving a complex business calculation" based on context
- Focus on "best value software, something that's fit for purpose in this specific context"
- Practical, well-executed workmanship matters more than theoretical purity
- Recognition of skill should rely on evidence and online presence when possible
- Small talented teams can achieve 100x productivity improvements
- Industry should focus on raising the bar through mentorship and knowledge-sharing rather than self-designation
- Copy-paste coding is acceptable when appropriate; context determines methodology
