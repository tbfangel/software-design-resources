# Event Storming

> Part of the [Mathias Verraes blog overview](overview.md)

Event Storming is a lightweight facilitation technique for understanding complex business domains through collaborative modeling. These posts explore the core practice of Event Storming, its facilitation techniques, practical variations including visual storytelling, and lessons learned from community workshops. The technique emphasizes domain events, causal flows, and visual representation as tools for discovering domain complexity and building shared understanding between technical teams and business stakeholders.

## Key Insights

**Facilitate, don't direct.** The facilitator's job is to ask probing questions — what's the business impact? what happens next? who does this? — not to do the modelling for the team. Guiding rather than driving produces richer, more collaborative outcomes and builds shared understanding rather than a diagram owned by one person.

**Duplication and deviation are features, not bugs.** Copying the same event sticky to multiple locations in different flows avoids visual spaghetti and makes branching paths visible. Custom visualisations (swim lanes, matrices) that deviate from standard Event Storming are valuable when they help a mature team break through to new insights. The goal is understanding, not adherence to technique.

**Struggle before instruction.** Hands-on grappling with a modelling problem — before technique is taught — creates stronger learning than theoretical introduction first. Teams that hit walls, fail, and then see how others approached the same problem retain far more than teams that learn the method first and apply it second.

**Photographs are documentation; fresh starts are learning.** Photographing a model and then throwing it away is not wasteful — it's deliberate. Recreating the model from scratch with different stakeholders deepens understanding and surfaces assumptions the first session left implicit.

---

### [Event Storming, Storytelling, Visualisations](https://verraes.net/2015/03/event-storming-storytelling-visualisations/)

**Type:** Article

**Date:** 2015-03

**Tags/Topics:** Event Storming, visualisation, storytelling, domain events, model discovery, presentation techniques, workshop facilitation

This post explores how Event Storming can be adapted as a presentation technique for requirements gathering and highlights the importance of visualization when modeling complex domains. Verraes describes a session where a Chief Product Officer used Event Storming stickies to tell a non-linear story to developers, which, while lacking collaborative depth, proved superior to purely oral or written requirements. The core insight is that when teams mature in a domain, deviating from standard Event Storming to create custom visualizations of complex scenarios (such as matrix-based swim lanes for multi-channel processes) can lead to breakthrough insights. Visualization itself becomes a modeling tool that helps teams escape preconceived design notions and discover the true structure of the domain.

**Key takeaways:**

- Event Storming can be adapted for visual storytelling and presentation, though collaborative modeling sessions generate deeper learning experiences
- Custom visualizations and deviations from standard Event Storming are acceptable and valuable when modeling complex scenarios with mature teams
- Brainstorming about the model itself—finding new visual notations to represent complicated problems—is crucial for evolving deeper insight and avoiding design paralysis

---

### [Event Storming: on Fake Domains and Happy Paths](https://verraes.net/2014/07/event-storming-fake-domains-happy-paths/)

**Type:** Article

**Date:** 2014-07

**Tags/Topics:** Event Storming, domain selection, fake domains, duplication, happy paths, alternative scenarios, visual language, Model Storming

This post addresses practical considerations when facilitating Event Storming workshops, drawing on experiences from multiple workshops led with Alberto Brandolini and other facilitators. Verraes advocates for picking realistic domains (such as car rental) rather than abstract ones, as they make it easier to create business rules and test alternatives. A key insight is that duplication of domain events on the sticky wall is not only acceptable but essential: reusing the same event across multiple locations in different flows makes it easier to visualize branching paths and alternative scenarios. The post also discusses how to mark Happy Paths (desired business flows) separately from exceptions and edge cases, and how simple visual indicators (icons, colors, emoticons) can enhance communication and memory retention without requiring formal notation.

**Key takeaways:**

- Choose realistic domains for training workshops to enable meaningful discovery of business rules; real projects with real domain experts are ideal
- Event duplication on stickies is a powerful technique—the same event can be copied to multiple locations to visualize different flows and avoid visual spaghetti
- Visualize both happy paths and exceptions, and use simple icons and emotional markers to convey information beyond formal notation

---

### [Facilitating Event Storming](https://verraes.net/2013/08/facilitating-event-storming/)

**Type:** Article

**Date:** 2013-08

**Tags/Topics:** Event Storming, facilitation, workshop techniques, Domain-Driven Design, CQRS, domain events, modeling

This is Verraes' early, detailed facilitator's guide based on his first Event Storming session with the Qandidate.com team, following an early draft of Alberto Brandolini's work. The post provides practical facilitation tips including: hang the first sticky yourself, know when to step back and guide rather than do the modeling, ask probing questions about business logic and outcomes, and timebox sessions using Pomodoro intervals. Verraes emphasizes the value of using sentence-style event names ("A product was added" vs. "Product added") to make business people more comfortable, changing direction (starting from the end and working backward, then forward), and visualizing both conflicting opinions equally before validation. The post also advocates for photographing models and then discarding them, encouraging teams to repeat the exercise with other stakeholders.

**Key takeaways:**

- Effective facilitation involves asking guiding questions rather than directing the model; key questions include business impact, process outcomes, affected actors, and gaps in understanding
- Interrupt long discussions, time-box work into Pomodoro increments, and use the end of each interval to reflect on progress and decide when to move to the next phase
- Use sentence-style event names and photographs as documentation, but encourage teams to recreate models afresh with different stakeholders to deepen learning

---

### [The DDDBE Modellathon](https://verraes.net/2013/09/dddbe-modellathon/)

**Type:** Presentation

**Date:** 2013-09

**Tags/Topics:** Event Storming, Modellathon, workshop, Domain-Driven Design, domain modeling, facilitation, Model Storming, technique exploration

This post describes the inaugural DDDBE Modellathon workshop, a community event designed to give teams practice exploring complex domains using various modeling techniques without pressure to deliver immediate value. Teams worked through multiple 25-minute rounds on a fictional education system domain (report cards and pupil evaluation), first focused on understanding the problem space, then on building workable solutions. Verraes shares lessons learned as a facilitator: struggling with a problem is a powerful learning trigger, asking the right questions to identify experienced modelers proved more effective than assuming silence meant inexperience, and encouraging teams to throw away their models between rounds enables fresh approaches. The post emphasizes that facilitators must balance domain expertise with facilitation support and remain attentive to teams struggling to move forward.

**Key takeaways:**

- Hands-on struggle with modeling problems, followed by technique instruction, creates stronger learning than theoretical introduction first
- Encourage teams to restart with fresh models rather than become attached to incomplete versions; this enables experimentation with techniques learned from other teams
- Facilitators should balance domain expert knowledge with facilitation skills, and remain attentive to struggling teams by offering process help rather than domain explanation

---
