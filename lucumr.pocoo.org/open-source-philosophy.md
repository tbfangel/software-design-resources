# Open Source Philosophy

> Part of the [Armin Ronacher overview](overview.md)

Armin Ronacher has been embedded in the open source world since the mid-2000s as the creator of Flask, Werkzeug, Jinja2, and Rye, and as an engineering leader at Sentry. This cluster collects his writing on the philosophy, economics, and social dynamics of open source: how it gets funded (or doesn't), how licensing shapes incentives, how trust scales across dependency graphs, what maintainer burnout actually looks and feels like, and what governance structures let commercial and community interests coexist. The arc spans from 2009 idealism about BSD freedom to 2024 realism about money, burnout, and the structural unsustainability of volunteer infrastructure.

## Key Insights

**Open source and money are already mixed — the question is how honestly.** Every major project has some form of corporate backing, whether through contributor companies, commercialisation, marketing leverage, or foundation structures. Pretending otherwise delays better governance and funding frameworks. The WordPress/WP Engine conflict and the XZ Utils backdoor both illustrate what happens when financial arrangements are left implicit and unmanaged.

**Licensing choices encode business models, not just legal terms.** AGPL creates an illusion of equality while silently requiring CLAs that preserve single-vendor relicensing power. GPL is increasingly ineffective because distribution is no longer the economic bottleneck — SaaS businesses can use open source code without distributing it. FSL is more honest: time-limited exclusivity before automatic conversion to permissive terms. The key insight is that temporal compromise (restricted now, permissive later) is more durable than trying to write a permanent legal statement that covers every future scenario.

**Micropackage ecosystems make trust unscalable.** When one project depends on thousands of packages each maintained by different individuals, the attack surface grows faster than any review process can track. npm's left-pad era demonstrated that optimising for code reuse at the function level creates fragility at the ecosystem level. Python's less fragmented culture produces dramatically smaller transitive dependency graphs for equivalent functionality — a structural advantage, not just a cultural one.

**Maintainer emotional health is infrastructure.** Several posts document how the emotional calculus of open source maintenance — overwhelming notifications, problems you don't personally experience, social pressure to port to Python 3, anonymous contributors making demands — produces burnout that destroys projects. Sustainability is not just about money; it requires projects to be personally motivating for their maintainers.

**Visibility creates perverse funding incentives.** Package manager dependency counts direct funding toward npm micro-packages while ignoring curl, libxml2, and other foundational libraries that do the actual heavy lifting. Projects like XZ Utils fail because they lack the "lever" of a popular package manager entry. Better funding requires better metrics than star counts and dependency trees.

**Pseudonymous contribution creates asymmetric accountability.** Maintainers bear identifiable legal and reputational responsibility; many contributors are anonymous. As projects become critical infrastructure, this asymmetry grows more problematic. The XZ Utils backdoor attack exploited exactly this dynamic.

---

### [The Life and Death of Open Source Companies](https://lucumr.pocoo.org/2023/12/25/life-and-death-of-open-source/)
**Type:** Article
**Date:** 2023-12
**Tags/Topics:** open source companies, licensing, market competition, Bambu Labs, Prusa

Ronacher examines how Bambu Labs disrupted the open-source 3D printing market by delivering superior user experience and lower prices than Prusa, while building on open source software (PrusaSlicer) without contributing back. He argues that traditional open source protections — particularly GPL — are insufficient in service-based economies where distribution is no longer the economic chokepoint. Successful open source companies must compete on user experience and services, not just open source status. He advocates FSL as a more realistic licensing model for companies that need commercial protection while remaining committed to eventual open access.

**Key takeaways:**
- Companies can commercially exploit open source without distributing code, making GPL's trigger conditions ineffective.
- Open source is not a business model; it requires a business model built around it.
- FSL's temporal structure (time-limited exclusivity) is more realistic than permanent copyleft for commercial projects.

---

### [FSL: A License For the Bazaar, Not the Cathedral](https://lucumr.pocoo.org/2023/11/19/cathedral-and-bazaaar-licensing/)
**Type:** Article
**Date:** 2023-11
**Tags/Topics:** FSL, Sentry, bazaar development model, SaaS, open source licensing

Ronacher comments on Sentry's adoption of the Functional Source License (FSL). He situates FSL as "Eventually Open Source" — closer to open source ideals than source-available licenses, but honest about the commercial exclusivity period. He notes that bazaar-style development (always-open source) is actually less common than it appears: most development happens in private branches anyway, and FSL's two-year window doesn't change this much. The key advantage is addressing the free-rider problem for SaaS platforms that commercialise open source work without contributing.

**Key takeaways:**
- FSL is more honest than AGPL about single-vendor control while still committing to eventual openness.
- "Eventually Open Source" is a more accurate label than "source available" for FSL-style licenses.
- Addressing free-riding by SaaS platforms is a genuine problem that traditional open source licenses don't solve.

---

### [The Inevitability of Mixing Open Source and Money](https://lucumr.pocoo.org/2024/10/14/mixing-oss-and-money/)
**Type:** Article
**Date:** 2024-10
**Tags/Topics:** open source sustainability, funding, maintainer burnout, WordPress, XZ Utils

Ronacher argues that money has always been part of open source — Linux has corporate contributors, Redis and MariaDB commercialised, Next.js is a marketing vehicle for Vercel. The pretence that open source is purely volunteer-driven obscures why critical projects like XZ Utils end up dangerously underfunded. He endorses the Open Source Pledge as a partial mechanism while conceding that fundamental questions about obligation and fairness remain unresolved. The WordPress/WP Engine conflict illustrates governance crises when financial arrangements go unacknowledged.

**Key takeaways:**
- Financial backing is already the norm for successful OSS projects; the exception is underfunded critical infrastructure.
- Maintainer burnout is a direct consequence of the pretence that open source "just happens."
- No single funding mechanism resolves the structural problem; multiple approaches are necessary.

---

### [FSL: A Better Business/Open Source Balance Than AGPL](https://lucumr.pocoo.org/2024/9/23/fsl-agpl-open-source-businesses/)
**Type:** Article
**Date:** 2024-09
**Tags/Topics:** FSL, AGPL, single-vendor open source, CLAs, Elasticsearch

Ronacher compares FSL with AGPL for single-vendor commercial open source projects. AGPL appears egalitarian but legal departments routinely flag it, app stores reject it, and CLA requirements of projects like Elasticsearch quietly preserve single-vendor relicensing power anyway. FSL is more transparent: it enforces a two-year exclusivity window, after which code automatically transitions to Apache 2.0 or MIT. When companies fail or abandon projects, the automatic conversion solves the orphaned-copyright problem.

**Key takeaways:**
- AGPL's copyleft "equality" is undermined by CLAs and practical deployment barriers.
- FSL's temporal model is a more honest trade-off than permanent copyleft.
- Time-limited exclusivity addresses the orphaned-copyright risk that affects projects whose companies dissolve.

---

### [Accidental Spending: A Case For an Open Source Tax?](https://lucumr.pocoo.org/2024/9/19/open-source-tax/)
**Type:** Article
**Date:** 2024-09
**Tags/Topics:** open source funding, Open Source Pledge, accidental spending, tax analogy

Ronacher explores whether a mandatory funding mechanism for open source could work like cloud cost "accidental spending." His conclusion: a percentage tax through platforms like AWS or GitHub has intuitive appeal but fails because open source lacks governance infrastructure to distribute funds and project values vary by company. The better approach is the Open Source Pledge — deliberate funding scaled by developer count ($2,000 per developer per year as a baseline) that enables internal conversations about sustainability rather than automatic deductions.

**Key takeaways:**
- Automatic platform taxes for open source are appealing but fail due to distribution and valuation problems.
- Deliberate funding tied to company size creates internal accountability better than tax deductions.
- The Open Source Pledge proposes a tractable baseline: $2,000 per developer per year.

---

### [What is Self Hosted? What is a Stack?](https://lucumr.pocoo.org/2024/6/26/what-is-self-hosted/)
**Type:** Article
**Date:** 2024-06
**Tags/Topics:** self-hosted software, open protocols, vendor lock-in, LAMP stack analogy

Ronacher argues that truly self-hosted open source requires standardised protocols (like CGI, SQL, and Linux formed the LAMP stack). Today's "self-hosted" tools often depend on proprietary cloud infrastructure like Cloudflare to run. The open source community has not agreed on protocols for serverless runtimes, analytics engines, queues, and caches that developers could implement independently. Without a "SaaS in a box" — integrated standardised services deployable without vendor dependency — self-hosting remains inaccessible to most.

**Key takeaways:**
- "Self-hosted" is often a misnomer when the software requires proprietary cloud infrastructure to operate.
- Open source needs agreed-upon protocols for queues, caches, analytics, and auth — not just open code.
- The LAMP stack's success came from standardised protocols; the modern equivalent does not yet exist.

---

### [Skin in the Game](https://lucumr.pocoo.org/2024/3/31/skin-in-the-game/)
**Type:** Article
**Date:** 2024-03
**Tags/Topics:** open source accountability, pseudonymity, copyright, XZ Utils, maintainer stress

Ronacher examines the asymmetry between maintainers (identifiable, legally responsible, psychologically invested) and many contributors (anonymous, unaccountable). Early internet required accountability from participants; modern open source does not. The XZ Utils backdoor attack — by a pseudonymous long-term contributor — is the extreme case of this asymmetry. He does not propose solutions but documents the emotional toll of stewarding widely-used software with unknown collaborators.

**Key takeaways:**
- Maintainers bear identifiable legal and reputational responsibility while contributors can remain anonymous.
- Anonymous contribution is exploitable in high-stakes infrastructure, as XZ Utils demonstrated.
- The psychological cost of this asymmetry has increased significantly as projects become critical infrastructure.

---

### [Congratulations: We Now Have Opinions on Your Open Source Contributions](https://lucumr.pocoo.org/2022/7/9/congratulations/)
**Type:** Article
**Date:** 2022-07
**Tags/Topics:** PyPI, supply chain security, critical packages, 2FA, vetting

Ronacher critiques PyPI's requirement that maintainers of "critical" packages enable multi-factor authentication. His concern is not 2FA itself but the precedent: developers don't choose to become critical; they achieve that status through organic adoption. Once designated, they face mandatory compliance obligations they didn't anticipate. He advocates the Mozilla `cargo-vet` model — separating vetting responsibility from package indexes, placing it with commercial users who benefit most from security, and enabling version-specific rather than maintainer-based trust.

**Key takeaways:**
- Critical-designation imposes obligations on maintainers who did not choose to become critical infrastructure.
- Vetting layers should be separated from package indexes and operated by parties with commercial incentives to do it well.
- Version-specific trust assessment is more accurate than maintainer-level trust.

---

### [Dependency Risk and Funding](https://lucumr.pocoo.org/2022/1/10/dependency-risk-and-funding/)
**Type:** Article
**Date:** 2022-01
**Tags/Topics:** dependencies, funding, visibility bias, curl, npm, true criticality

Ronacher argues that open source funding discussions concentrate on the wrong packages — those that gained visibility through package manager dependency counts. npm micro-packages get funding attention while foundational libraries like curl (maintained by one person for 20+ years, used everywhere) and libxml2 go unnoticed. Package manager position creates artificial leverage: npm package owners have a "lever" that foundational C library maintainers lack. Better funding requires better metrics than popularity and dependency tree counts.

**Key takeaways:**
- Package manager dependency counts are poor proxies for actual infrastructure criticality.
- Foundational libraries (curl, libxml2) are undervalued and underfunded relative to their impact.
- Funding follows visibility, not importance — a structural mismatch the community has not solved.

---

### [Open Source Migrates With Emotional Distress](https://lucumr.pocoo.org/2019/12/28/open-source-migrates/)
**Type:** Article
**Date:** 2019-12
**Tags/Topics:** Python 3, migration, community pressure, backwards compatibility, sustainability

Ronacher argues that open source communities manage backwards-incompatible migrations through a process powered by shared emotional strain rather than technical merit. The currency of payment is emotional distress: maintainers leverage unpaid-volunteer status to make resistance feel ungrateful; shared suffering creates solidarity; "progressive vs. outdated" becomes a moral frame. The Python 3 migration is his primary example. He argues this approach alienates commercial stakeholders, reduces long-term investment, and drains the joy from participation — a bad trade even when the technical goal is correct.

**Key takeaways:**
- Community migrations succeed through social pressure and emotional manipulation as much as technical merit.
- Framing upgrades as moral progress vs. outdated thinking is an effective but extractive community tactic.
- Aggressive migrations that ignore commercial users' constraints reduce long-term investment and community health.

---

### [Open Source, SaaS and Monetization](https://lucumr.pocoo.org/2019/11/4/open-source-and-saas/)
**Type:** Article
**Date:** 2019-11
**Tags/Topics:** open source monetisation, SaaS, BSL, Sentry, libraries vs applications

Ronacher argues that monetising open source libraries is unsolved but monetising open source applications via SaaS is viable. The Business Source License (BSL) provides temporal competitive advantage — an "innovation window" before automatic conversion to Apache 2.0 — while preventing forks from undercutting the original company without contributing development effort. Libraries remain unsolved; Ronacher deliberately kept libraries like symbolicator open source to encourage community contribution.

**Key takeaways:**
- Open source application SaaS with BSL is a viable business model; open source library monetisation is not.
- BSL's natural delay gives companies competitive advantage during active innovation while promising eventual openness.
- Libraries and applications have structurally different monetisation profiles and should be licensed differently.

---

### [Updated Thoughts on Trust Scaling](https://lucumr.pocoo.org/2019/7/29/dependency-scaling/)
**Type:** Article
**Date:** 2019-07
**Tags/Topics:** trust, dependencies, supply chain security, Rust ecosystem, auditing

Ronacher revisits his trust scaling concern: typical Rust applications now have hundreds of dependencies, making comprehensive security auditing impossible. His symbolicator project had 303 unique dependencies; realistic auditing was unachievable. He proposes three complementary solutions: an independent auditor registry system (auditors verify published packages match source), dependency categorisation by size and risk, and selective updating policies (update for security, not convenience). The goal is making dependency management more intentional and auditable, not eliminating dependencies.

**Key takeaways:**
- Hundreds of transitive dependencies make meaningful auditing impossible under current practices.
- The ecosystem encourages updating because it is convenient, not because it is prudent.
- Independent auditor registries can reduce the chain of trust from hundreds to dozens per project.

---

### [Emotional Programming in Open Source](https://lucumr.pocoo.org/2013/11/28/emotional-programming/)
**Type:** Article
**Date:** 2013-11
**Tags/Topics:** maintainer motivation, burnout, open source sustainability, personal alignment

Ronacher argues that developer happiness and personal motivation are the primary drivers of high-quality open source software. When software works perfectly for its creator, maintaining enthusiasm becomes difficult — the problems driving innovation are solved. He documents the psychological strain of managing large user bases, the "overwhelming feeling of failure" from unprocessed notifications, and the particular demotivation of fixing bugs he doesn't personally experience. Open source's transparency and accessibility remain its genuine advantages over proprietary software.

**Key takeaways:**
- Open source quality is driven by maintainer emotional alignment with project goals; this is not trivial.
- Once software works for its creator, maintaining motivation requires solving other people's problems — structurally harder.
- The psychological burden of large user bases is real and underacknowledged in sustainability discussions.

---

### [Licensing in a Post Copyright World](https://lucumr.pocoo.org/2013/7/23/licensing/)
**Type:** Article
**Date:** 2013-07
**Tags/Topics:** GPL fragmentation, GPLv3, Apple, licensing drift, GitHub

Ronacher traces the impact of GPL fragmentation: the GPLv3/GPLv2 split means Linux (GPLv2-only) and most GNU software (GPLv3) are now incompatible. Apple refuses GPLv3 software, so the bash on Macs is seven years old. App stores reject GPL code. GitHub's license selector pushes developers to choose licenses without explanation, likely producing worse outcomes than no intervention. He predicts continued GPL decline as younger developers prioritise easy sharing over copyleft enforcement.

**Key takeaways:**
- The GPLv2/GPLv3 split created a licensing incompatibility within the "GNU/Linux" combination that remains unresolved.
- GPLv3's anti-tivoization and device modification clauses made it impractical for consumer products and app stores.
- GitHub's no-explanation license selector likely produces worse decisions than leaving developers to research their own.

---

### [Open Source Financing](https://lucumr.pocoo.org/2012/8/27/open-source-financing/)
**Type:** Article
**Date:** 2012-08
**Tags/Topics:** open source funding, Gittip, Kickstarter, recurring micropayments

An early exploration of open source funding mechanisms. Ronacher identifies Gittip's recurring micropayments as the most promising model — manageable amounts, regular income, community-based — over Kickstarter's lump-sum campaigns (administrative burden, fulfillment costs) and Flattr (too easily gamed, favours volume over depth). He notes that none of these have achieved sufficient adoption to make a material difference for most maintainers.

**Key takeaways:**
- Recurring micropayments are structurally preferable to one-time campaigns for open source sustainability.
- Adoption is the bottleneck for every funding mechanism; none has achieved critical mass.
- The administrative overhead of large Kickstarter campaigns often exceeds what small open source projects can manage.

---

### [Micropackages and Open Source Trust Scaling](https://lucumr.pocoo.org/2016/3/24/open-source-trust-scaling/)
**Type:** Article
**Date:** 2016-03
**Tags/Topics:** npm, micropackages, supply chain security, trust, left-pad

Written in the wake of the left-pad incident, this post argues that npm's micropackage culture creates trust problems that signatures and audits cannot fix. Sentry's JavaScript codebase had 39 direct dependencies resolving to 1,000+ total packages; its Python backend had 45 resolving to 65. The "isarray" package — a one-liner — consumed 140 GB of bandwidth monthly. The attack surface from thousands of individually-maintained packages is unmanageable. Ronacher advocates shrinkwrap, package tagging, and a cultural shift away from "install a package for everything."

**Key takeaways:**
- The transitive dependency graph is the real risk surface, not the direct dependencies a team can audit.
- Python's less fragmented culture produces dramatically smaller dependency graphs for equivalent functionality.
- Micro-package culture optimises for code reuse at the cost of trust and supply chain security.

---

### [free VS free](https://lucumr.pocoo.org/2009/7/14/free-vs-free/)
**Type:** Article
**Date:** 2009-07
**Tags/Topics:** BSD license, permissive licensing, freedom philosophy

Ronacher's early argument for BSD-style permissive licensing. Core claim: "forcing people to freedom is not exactly my definition of being free." GPL-style copyleft mandates that downstream uses remain open; BSD grants freedom to use code any way one wishes, including proprietary relicensing. He values visibility of his code in use — receiving emails from developers at constrained companies, knowing his work runs at scale — over licensing restrictions that might limit adoption. His preferred model: release freely, be compensated for support.

**Key takeaways:**
- Permissive licensing treats freedom as the absence of restrictions; copyleft treats it as the enforced propagation of rights.
- BSD maximises adoption by removing legal friction, even for commercial use.
- The visibility and use of your code can be more rewarding than licensing restrictions that limit it.

---

### [Are you sure you want to use GPL?](https://lucumr.pocoo.org/2009/2/12/are-you-sure-you-want-to-use-gpl/)
**Type:** Article
**Date:** 2009-02
**Tags/Topics:** GPL, BSD, licensing philosophy, incompatibility

Ronacher urges developers to consider GPL's practical consequences before defaulting to it. GPL-licensed libraries cannot be used in non-GPL projects; readline's GPL license forced Apple to ship an ancient bash version. BSD restricts rights (attribution, no warranty) while permitting any use; GPL permits downstream use but mandates copyleft propagation. Both encode legitimate philosophies but serve different goals. The problem is developers choosing GPL without understanding its incompatibility consequences.

**Key takeaways:**
- GPL and BSD encode different definitions of freedom; choose based on which you actually hold.
- GPL incompatibility with non-GPL projects is a practical consequence that affects real integrations.
- Dual-licensing (proprietary + GPL) is a viable monetisation strategy that BSD does not enable.
