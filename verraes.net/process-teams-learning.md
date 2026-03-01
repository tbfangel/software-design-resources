# Process, Technical Debt & Learning

> Part of the [Mathias Verraes blog overview](overview.md)

This cluster explores the intersection of technical debt management, team learning, and organizational change. Verraes examines how unmanaged technical debt accumulates in systems and organizations, and proposes practical frameworks—from physical walls to small experiments—for making it visible and negotiable. The collection emphasizes continuous improvement through lightweight experimentation, critical thinking about change processes, and the importance of reading and learning for professional growth.

## Key Insights

**Make technical debt visible before trying to manage it.** Debt that lives only in developers' heads stays invisible to everyone who makes prioritisation decisions. A physical wall where teams log actual time wasted — not aesthetic judgements — transforms debt from opinion into empirical data that managers and teams can negotiate around together.

**The difference between managed and unmanaged debt is discipline, not intent.** Managed debt is deliberate: teams estimate trade-offs, document decisions, and refactor when the cost justifies it. Unmanaged debt spirals when hacks build on hacks and the team loses awareness of what optimal design would even look like. Never layer new debt on top of existing debt.

**Run small experiments instead of debating.** Rather than arguing about whether a process change will work, try it for two weeks, evaluate, and decide. This PDCA/Kaizen approach keeps the cost and risk low, treats emotions as data rather than obstacles, and builds a team culture of evidence over opinion. Teams move from survival mode to learning mode through accumulated small bets.

**Estimation hides costs that compound.** Time pressure from estimates stops creative problem-solving and pushes people toward the quickest hack — the primary source of legacy code. Asking users "what problem are you solving?" instead of "what do you want?" (the Henry Ford fallacy) and estimating as a multidimensional tuple (time, complexity, risk) rather than a single number addresses the root causes rather than the symptoms.

**Deep learning requires resisting the urge to categorise.** When reading or encountering new ideas, the brain defaults to slotting them into existing buckets — which feels like understanding but prevents genuine insight. The practice of asking "what is *different* about this?" rather than "what is this like?" is what turns consumption into learning.

---

### The Wall of Technical Debt
https://verraes.net/2020/01/wall-of-technical-debt/

**Type:** Article
**Date:** 2020-01
**Tags/Topics:** technical debt, visualization, team management, continuous improvement, organizational communication

Technical debt is invisible by default, buried in code and processes. This article introduces a simple but powerful practice: a physical wall where team members post sticky notes documenting debt they encounter. By marking each incident with tally marks, the wall becomes a visual record of actual cost, transforming debt from opinion into empirical data that managers and teams can negotiate around.

**Key takeaways:**
- Make technical debt visible on a physical wall; digital tools hide problems rather than confront them
- Only mark issues where actual time was wasted; avoid judging code quality without measuring real impact
- Use the wall to negotiate collectively about when to fix, add, or ignore debt based on real numbers, not aesthetics

---

### Managed Technical Debt
https://verraes.net/2013/07/managed-technical-debt/

**Type:** Article
**Date:** 2013-07
**Tags/Topics:** technical debt, team discipline, estimation, refactoring, architectural decisions

The core distinction is between managed and unmanaged technical debt. Managed debt occurs when teams are disciplined, estimate the cost/benefit of shortcuts, document decisions, and refactor when needed. Unmanaged debt spirals: hacks build on hacks, quality degrades, and the team loses awareness of what they're doing. Verraes describes visualizing both on a story map to track and prioritize improvements.

**Key takeaways:**
- Managed technical debt requires team discipline: testing, refactoring, pair programming, CI, and awareness of trade-offs
- Document technical debt and never layer new debt on top of existing debt
- Unmanaged debt happens when teams lack maturity or understanding of their own code's optimal design

---

### Managed Technical Debt (revisited)
https://verraes.net/2014/06/managed-technical-debt-revisited/

**Type:** Presentation
**Date:** 2014-06
**Tags/Topics:** technical debt, debt management, organizational change

A presentation revisiting earlier ideas on managing technical debt. The abstract signals engagement with the question of whether teams are sweeping debt under the rug. The slide-based format suggests practical tactics for keeping debt visible and actionable.

**Key takeaways:**
- Revisit and refine approaches to managing debt over time
- Technical debt is an investment tool, not a failure; the question is whether it's managed or ignored
- Presentations expand on written posts with live examples and audience interaction

---

### The Repair/Replace Heuristic for Legacy Software
https://verraes.net/2016/04/repair-replace-heuristic-for-legacy-software/

**Type:** Article
**Date:** 2016-04
**Tags/Topics:** legacy systems, technical debt, system design, organizational strategy, heuristics

When facing a legacy system, the key question is whether to repair or replace it. The heuristic: if the system had good design once, repair it; if it was poorly designed from the start, replace it. This requires historical thinking—understanding what constraints and purposes the system was designed for, and how the world has changed. Gall's Law warns that complex systems that work evolved from simple systems that worked; designing a replacement from scratch often fails.

**Key takeaways:**
- Good design from the past contains valuable learning; poor design usually cannot be fixed incrementally
- Use temporal modeling (archaeology) to understand the system's history, not just its current structure
- Beware Second-System Syndrome: replacement projects often fail; balance repair versus replace decisions carefully

---

### Sterile Estimation
https://verraes.net/2014/08/sterile-estimation/

**Type:** Article
**Date:** 2014-08
**Tags/Topics:** estimation, anchoring bias, planning, team psychology, estimation accuracy

Inspired by the FAA's "sterile cockpit" rule, sterile estimation creates a clean environment for estimating. Anchoring bias—the tendency to estimate based on an initial number mentioned—corrupts estimates. By preventing numbers from being mentioned upfront, using Planning Poker, and calibrating against completed stories, teams can reduce bias and build consistent estimation scales.

**Key takeaways:**
- Anchoring bias affects estimates even when people are aware of it; prevent it by keeping initial discussions number-free
- Calibrate estimates against previously completed stories to maintain scale consistency across the project
- The goal is not perfect prediction but honest, comparable relative sizing that guides prioritization

---

### The Cost of Estimation
https://verraes.net/2014/06/cost-of-estimation/

**Type:** Article
**Date:** 2014-06
**Tags/Topics:** estimation, time pressure, technical debt, creativity, software development process

Estimation has hidden costs. When teams estimate, they implicitly commit to the shortest possible time and feel blamed for overruns. This creates time pressure, which stops people from solving problems creatively. Instead of considering a matrix of possible solutions and trade-offs, people grab the quickest hack, introducing technical debt that compounds over time. The better approach: estimate story points as (time, complexity, risk)—a multidimensional tuple, not a mathematical formula.

**Key takeaways:**
- Time pressure is the source of much legacy code; estimates often cause or imply unsustainable pressure
- Software development is creative problem-solving; you cannot think faster under pressure
- Better to estimate incompleteness and risk explicitly rather than commit to a single time number

---

### Small Uncontrolled Experiments
https://verraes.net/2014/03/small-controlled-experiments/

**Type:** Article
**Date:** 2014-03
**Tags/Topics:** continuous improvement, PDCA, Kaizen, team experimentation, organizational learning

Instead of debating how to improve, run small experiments. The team identifies a problem, proposes the simplest change, tries it for 1-2 weeks, then evaluates. This embodies the PDCA cycle (Plan-Do-Check-Act) and Kaizen (continuous improvement). Examples range from moving sprint targets to Kanban, adjusting QA workflows, visualizing metrics, and introducing pair programming. The key: keep the cost and risk low so experiments happen regularly, emotions are treated as data, and feedback drives iteration.

**Key takeaways:**
- Run many small, cheap experiments with clear evaluation dates; avoid big formal processes
- Treat emotions and gut feelings as data; experiments don't need to be scientifically controlled, just bounded in time
- Make changes based on evidence from experiments, not opinions; involve the whole team, not just developers

---

### Small Uncontrolled Experiments (revisited)
https://verraes.net/2014/10/small-controlled-experiments-revisited/

**Type:** Presentation
**Date:** 2014-10
**Tags/Topics:** continuous improvement, team learning, organizational transformation, Agile practices

A presentation expanding on the blog post about small experiments. The abstract emphasizes moving a struggling team from "survival mode to learning mode" through lightweight experimentation. The presentation layer allows live demonstration and audience questions.

**Key takeaways:**
- Continuous improvement requires structured experimentation with clear evaluation, not just ad hoc changes
- Teams can transform from reactive to proactive by building a culture of small, low-risk learning
- Making this work requires buy-in and psychological safety; everyone should feel heard during evaluation

---

### The Henry Ford Fallacy
https://verraes.net/2014/01/henry-ford-fallacy/

**Type:** Article
**Date:** 2014-01
**Tags/Topics:** user research, requirements gathering, problem understanding, design philosophy

The famous Ford quote—"If I had asked people what they wanted, they would have said faster horses"—is misapplied. It's not an excuse to ignore users. Rather, asking "What do you want?" gets additive, unimaginative answers. The better question is "What problem are you trying to solve?" Drill down to the core problem, then design a solution. This respects both user insight and designer creativity.

**Key takeaways:**
- Understand the core problem, not the surface request; dig deeper than feature requests
- Users rarely ask for removal or rethinking of features; their feedback is inherently additive and status-quo biased
- Good design solves the underlying problem creatively, not by implementing literally what users describe

---

### Information Overload
https://verraes.net/2014/06/information-overload/

**Type:** Article
**Date:** 2014-06
**Tags/Topics:** learning, critical thinking, knowledge work, intellectual rigor, pattern recognition

When reading or learning, humans default to scanning and categorizing: "Oh, this is like that thing I already know." This strategy saves cognitive load but prevents deep learning. The alternative: catch yourself categorizing, then ask: What is different about this? Why did the author choose a different approach? Where's the conflict and novel insight? This practice shifts from superficial understanding to genuine learning.

**Key takeaways:**
- Resist the urge to immediately slot new ideas into existing buckets; investigate what makes them different
- Learning happens in the gaps between familiar frameworks, not in confirmation of what you already know
- Be alert and deliberate about this; the brain's default is efficient but shallow categorization

---

### How to Read More Books
https://verraes.net/2012/12/2012-12-23-how-to-read-more-books/

**Type:** Article
**Date:** 2012-12
**Tags/Topics:** learning, reading habits, professional development, knowledge acquisition, continuous learning

A practical guide to building a reading habit despite competing demands. Strategies include getting an e-reader, reading everywhere (waiting rooms, transit, in bed), making it a daily habit regardless of sleepiness, keeping a list, skipping boring books, walking while reading, and using the Pomodoro technique. The underlying principle: reading is learning, and knowledge from others' experience compounds over time.

**Key takeaways:**
- Remove friction: e-readers are portable, synced, and accessible; traditional books are dead trees collecting dust
- Read everywhere, even a little; consistency matters more than duration or quantity of books finished
- Riffle through books, skip to interesting sections, abandon books without shame; the goal is learning, not completion

---

### Switch - How to Change Things When Change Is Hard
https://verraes.net/2013/08/chip-dan-heath-switch/

**Type:** Book Review
**Date:** 2013-08
**Tags/Topics:** organizational change, motivation, identity, environment, growth mindset

A review of Chip and Dan Heath's "Switch," which models change as directing a Rider (logic), motivating an Elephant (emotion), and shaping the Path (environment). Key insights: look for bright spots and amplify what's working, understand that most "people problems" are actually situation problems, frame change as identity rather than consequences, and embrace the growth mindset that learning requires a practice stage, not just flawless execution.

**Key takeaways:**
- Change requires emotional and logical elements; pure rationality rarely drives lasting behavior change
- Context matters more than disposition; improve the situation before blaming individuals
- Identity and cognitive dissonance are powerful: once people act differently, they'll think differently and reinforce the new behavior

---

### Systemantics - The Systems Bible
https://verraes.net/2013/08/john-gall-systemantics-the-systems-bible/

**Type:** Book Review
**Date:** 2013-08
**Tags/Topics:** systems thinking, complexity, organizational behavior, problem-solving, system design

A review of John Gall's 1975 classic "Systemantics," which warns against designing large complex systems and expecting to predict their behavior. Systems are seductive but dangerous: they grow, encode problems into themselves, resist change, and become invisible to their operators. The paradox: trying to design a large system to solve a problem often creates two problems. The insight: observe what's already working and avoid disturbing systems that function, even imperfectly.

**Key takeaways:**
- Large complex systems cannot be fully designed or predicted; they evolve and kick back in unexpected ways
- Systems encode solutions and make them invisible; the system itself becomes the problem, not the original issue
- A "solution" is just a response that invites a counter-response; beware designing systems that solve the wrong conceptualization of a problem

---

### Submitting talks to a tech conference Call for Papers
https://verraes.net/2025/06/submitting-talks-to-conference-cfps/

**Type:** Article
**Date:** 2025-06
**Tags/Topics:** public speaking, conference submissions, writing, communication, knowledge sharing

Advice for conference talk submissions based on 10 years reviewing CFP submissions. Key points: write clearly for your audience, not your peers; spoil the solution in your abstract so people can evaluate relevance; avoid mysterious teasers; explain unfamiliar technologies; distinguish between introductory and advanced talks; embrace storytelling; expose ideas to colleagues and meetups before conferences; be honest about product pitches; and avoid opening definitions or rants. Writing is thinking; AI-generated talks waste everyone's time.

**Key takeaways:**
- The goal of your abstract is to attract the right audience and filter out the wrong one, not draw the maximum crowd
- Clarity and substance matter more than mystery; tell the audience what they'll learn
- Test ideas in smaller venues first; a conference shouldn't be your first time talking about a topic

---

### Lightning Talks
https://verraes.net/2016/05/lightning-talks/

**Type:** Presentation
**Date:** 2016-05
**Tags/Topics:** public speaking, presentation skills, learning, teaching, communication

A reflection on lightning talks as a practice ground for public speaking. Verraes set self-imposed constraints: 10 minutes max, write slides in a single evening, cover basics, and explain unfamiliar topics clearly. Lightning talks at meetups (30 people) are lower-stakes than conferences, allowing experimentation with ideas that might later become full talks. The practice builds comfort with public speaking and clarifies thinking about unfamiliar topics.

**Key takeaways:**
- Lightning talks are ideal for practice: shorter, lower stakes, and can be recycled into conference submissions
- Self-imposed constraints force clarity; explaining a topic you barely understand is excellent learning
- Imperfection is fine; the goal is to get the idea out, test it, and iterate, not deliver a perfect first presentation
