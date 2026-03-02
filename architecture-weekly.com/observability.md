# Observability & System Quality

> Part of the [Architecture Weekly overview](overview.md)

This cluster explores observability strategies, measurement practices, OpenTelemetry implementation, modern tracing approaches, defining success metrics, performance benchmarking, and transitioning from monitoring to true system understanding.

## Key Insights

**Define measurable outcomes before deployment to avoid building features that consume resources without providing value.** A cautionary tale: one company spent 90% of cloud infrastructure costs on a full-text search feature that only one customer rarely used. Without observability, this waste remained invisible. Correlate technical and product observability data to understand system behavior holistically. Distinguish between known unknowns (handled by classical metrics) and unknown unknowns (requiring granular traces capturing technical and product contexts).

**Observability should be a quality parameter verified through tests, not an afterthought added before production.** Treat telemetry data (spans and metrics) as system outputs verified through automated tests using in-memory exporters. Define telemetry requirements upfront through tests before implementing features. Use semantic naming conventions (dotted notation like "aw.db.connection_pool.connection_acquisition") to create understandable, queryable observability data. Test both spans and metrics to ensure complete instrumentation coverage while keeping testing reasonable by verifying critical attributes without excessive granularity.

**Traditional monitoring (logs and metrics) provides only fragmented snapshots; modern observability reveals causation through distributed tracing.** You might see "all 100 connections are in use" but cannot easily determine why or which operations caused the bottleneck. Traces follow a request's complete journey through distributed systems, spans capture individual units of work with timing and metadata, and span events mark important milestones. Tools like OpenTelemetry and Grafana Tempo enable interactive troubleshooting by querying spans, grouping by task ID, correlating across services, and analyzing attributes to discover root causes.

**Approach observability as a business and technical alignment problem, not purely technical tooling.** Start with clear strategic goals before selecting tools to avoid tooling-first thinking. Build observability progressively rather than attempting comprehensive solutions immediately. Mix different observability tools pragmatically based on specific needs rather than seeking a single perfect solution. Recognize that the "hardest problems to solve are the social ones" in organizational adoption. Facilitate discussions between technical and product teams about what matters to observe.

**Success isn't measured by how long code lasts, but by the value it creates during its lifetime—features should be designed with removability in mind.** Before building, establish killer metrics: define the "why" (actual business problem), establish metrics (specific, quantifiable targets with timeframes), gather baseline data (analyze current analytics, logs, competitor features), and conduct small experiments first (test with 100 users before full implementation). Frame conversations around "Bring me problems, not solutions" to shift discussions toward measurable outcomes and create psychological permission to remove unsuccessful features.

**Systematically benchmark rather than speculate about performance issues.** Benchmarks revealed dramatic differences: non-pooled connections achieved ~2-3 operations/second with 400ms+ execution time, while pooled connections achieved ~9-27 operations/second with 36-109ms execution time. Use statistical tools like Benchmark.js rather than manual timer-based measurements. Remain critical of benchmark results and test methodology to catch contaminated data. Progress iteratively: Make It Work → Make It Right → Make It Fast. Don't assume connection pooling is always available due to serverless constraints.

---

### [Why to Measure and Make Our System Observable](https://www.architecture-weekly.com/p/why-to-measure-and-make-our-system)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Observability, Cynefin Framework, Measurement, Business Metrics, Unknown Unknowns

Systems operate in an unpredictable world requiring observability to handle complexity. The Cynefin framework's four domains (clear, complicated, complex, chaotic) show that mismatches between expectations and reality—whether bugs, exploits, or user misalignments—can be catastrophic without proper measurement. The author shares a cautionary tale where his company launched a "clickbait feature" enabling cloud-based full-text search of on-premises files, discovering 90% of cloud spending went toward this feature that only one customer barely used because they lacked observability. The three-pronged strategy involves defining measurable outcomes before deployment ensuring adequate data collection (telemetry, events, analytics), building metrics and verifying progress over time to determine whether features merit continuation or pivoting, and employing systematic experimentation to convert "lucky accidents" into systematic discoveries. Distinguish between known knowns/unknowns (predictable via classical metrics, alarms, CPU/memory monitoring) and unknown unknowns (requiring granular traces and events capturing technical/product contexts).

**Key takeaways:**
- Embrace the chaotic world's unpredictability by starting with business metrics and analyzing features through complexity lenses
- Provide rich observability data without assuming perfection, enabling post-incident investigation and systematic learning
- Correlate technical and product observability data to understand system behavior holistically
- Implement cost control through sampling, filtering, and retention policies to prevent prohibitive expenses
- Define measurable outcomes before deployment to avoid building features that consume resources without providing value
- Use observability to identify mismatches between technical implementation and business reality

### [Making Your System Observability Predictable](https://www.architecture-weekly.com/p/making-your-system-observability)
**Type:** Article
**Date:** 2024
**Tags/Topics:** OpenTelemetry, Test-Driven Instrumentation, Telemetry Testing, Spans, Metrics

Most teams treat observability as an afterthought, adding auto-instrumentation just before production without ensuring predictable, testable telemetry data. This reactive approach fails to catch observability gaps. Instead, observability should be a quality parameter verified through tests, similar to how we test business logic. The author proposes treating telemetry data (spans and metrics) as system outputs that should be verified through automated tests, ensuring observability is built predictably from the ground up. The implementation uses TracerProvider and MeterProvider for centralized telemetry configuration, in-memory span exporters and metric readers for test verification, spans to track distributed operations like connection acquisition, and histograms to record value distributions like acquisition time. Span names follow dotted notation like "aw.db.connection_pool.connection_acquisition" for clarity.

**Key takeaways:**
- Define telemetry requirements upfront through tests before implementing features
- Use semantic naming conventions to create understandable, queryable observability data
- Test both spans and metrics to ensure complete instrumentation coverage
- Keep testing reasonable by verifying critical attributes and events without excessive granularity
- Treat observability as a quality parameter verified through automated tests, not an afterthought
- Leverage OpenTelemetry standard with in-memory exporters for test verification during development

### [When Logs and Metrics Aren't Enough: Discovering Modern Observability](https://www.architecture-weekly.com/p/when-logs-and-metrics-arent-enough)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Distributed Tracing, OpenTelemetry, Grafana Tempo, Spans, Observability Tools

Traditional monitoring approaches using logs and metrics provide only fragmented snapshots of system health, failing to reveal causation and context in distributed systems. You might see that "all 100 connections are in use" but cannot easily determine why or which specific operations caused the bottleneck. Modern observability uses three core components: Traces (following a request's complete journey through distributed systems), Spans (individual units of work within traces, capturing timing and metadata), and Span Events (markers for important milestones within operations). Tools like OpenTelemetry (instrumentation) and Grafana Tempo (visualization) enable interactive troubleshooting by correlating data across services. The article walks through diagnosing connection pool exhaustion by querying spans where connection-acquired duration exceeded 1 second, grouping problematic connections by task ID, correlating with database query spans to identify slow SELECT statements, and analyzing query attributes revealing 50,000 rows returned, discovering long-running queries on the orders table consistently held connections during peak utilization.

**Key takeaways:**
- Instrument from the ground up with tracing capabilities, not just logs and metrics
- Leverage query capabilities in tools like Grafana Tempo to slice and correlate data across services
- Move beyond aggregated metrics to understand individual request lifecycles and causation
- Use observability proactively to understand system behavior deeply before problems occur
- Traces reveal why problems happen, not just that they happened
- Correlation across services is the key differentiator between traditional monitoring and modern observability

### [Applying Observability: From Strategy to Practice with Hazel Weakly](https://www.architecture-weekly.com/p/applying-observability-from-strategy)
**Type:** Discussion
**Date:** 2024
**Tags/Topics:** Observability Strategy, Organizational Change, OpenTelemetry, Monitoring vs. Observability, Tooling

Organizations struggle to translate observability strategy into practical implementation, grasping the concept but failing to align tooling and approach with strategic goals. Hazel Weakly emphasizes defining observability properly by moving beyond logs, metrics, and traces as separate concerns toward understanding systems holistically. Build incrementally by implementing observability in both existing and new systems pragmatically, mix tools reasonably by combining different observability tools rather than seeking a single perfect solution, and address organizational change by facilitating discussions between technical and product teams about what matters to observe. The speakers cover how observability differs from monitoring, practical implementation strategies for collecting metrics, traces, and logs, handling challenges like long-running spans in OpenTelemetry, and real-world examples like managing Hachyderm's infrastructure during unexpected traffic spikes.

**Key takeaways:**
- Approach observability as a business and technical alignment problem, not purely technical tooling
- Start with clear strategic goals before selecting tools to avoid tooling-first thinking
- Build observability progressively rather than attempting comprehensive solutions immediately
- Recognize that the "hardest problems to solve are the social ones" in organizational adoption
- Consider event-driven architecture in relation to observability needs for better system understanding
- Combine different observability tools pragmatically based on specific needs rather than seeking perfection

### [Defining Your Paranoia Level: Navigating New Technology Adoption](https://www.architecture-weekly.com/p/defining-your-paranoia-level-navigating)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Learning, Technology Adoption, Event Sourcing, Document Databases, Cognitive Biases

Learning new technologies is fundamentally about unlearning old habits, not just acquiring new knowledge. The core challenge isn't complexity—it's our brain's resistance to contradicting established intuitions. Bridge from the familiar by identifying parallels: for document databases, recognize that embedded documents function like denormalized views developers already create; in event sourcing, audit logs and status tracking already represent events—you're just making them explicit. Graduated paranoia means adjusting caution based on learning phase: early (low paranoia, focus on understanding differences), middle (develop nuanced judgment recognizing what works and what creates problems), and mature (precisely paranoid, knowing exactly where careful attention matters). Event sourcing illustrates "radical simplicity through apparent complexity" by eliminating scattered complexity—instead of maintaining separate audit logs, status fields, and analytics tables, recording events creates a natural audit trail solving multiple problems simultaneously.

**Key takeaways:**
- Assess your actual problems before adopting new patterns rather than following trends
- Evaluate team bandwidth and deadline pressure to determine appropriate caution level
- Start with minimal viable changes and document tradeoffs intentionally
- Focus experiments on realistic scenarios specific to your pain points, not theoretical cases
- Build throwaway prototypes testing your specific challenges like concurrent queue handling
- Recognize that event sourcing and similar patterns require unlearning old habits, not just learning new ones

### [Killer Metrics: Or Why You Should Measure Feature Success](https://www.architecture-weekly.com/p/killer-metrics-or-why-you-should)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Feature Metrics, Success Criteria, Technical Debt, Feature Removal, Product Management

Organizations build features without defining upfront when to remove them, wasting resources maintaining unused functionality. The author illustrates with a real case where a company spent 90% of cloud infrastructure costs on a full-text search feature that only one customer rarely used, with absence of success metrics preventing timely removal. Success isn't measured by how long code lasts, but by the value it creates during its lifetime—features should be designed with removability in mind from inception. Before building, collaborate with business stakeholders to establish killer metrics: Define the Why (understand actual business problem like increasing customer retention), Establish Metrics (set specific, quantifiable targets with timeframes like "if weekly returns don't improve 5% within two months, or unsubscribe rates exceed 8%, discontinue"), Gather Baseline Data (analyze current analytics, production logs, competitor features, customer behavior), and conduct Small Experiments First (test concepts through limited rollouts to 100 users before full implementation).

**Key takeaways:**
- Frame conversations around "Bring me problems, not solutions" rather than accepting vague directives
- Shift discussions toward measurable outcomes to create psychological permission to remove unsuccessful features
- Mine production data, examine SLA commitments, review server logs, and study comparable products before building
- Define success metrics upfront with specific timeframes and failure thresholds for discontinuation
- Test concepts through limited rollouts to validate assumptions cheaply before committing to full implementation
- Recognize that removing unsuccessful features is success, not failure, when measured against opportunity cost

### [Talk is Cheap, Show Me the Numbers: Benchmarking for Performance](https://www.architecture-weekly.com/p/talk-is-cheap-show-me-the-numbers)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Performance Benchmarking, Connection Pooling, Serverless, OpenTelemetry, Flame Graphs

The author encountered performance issues with his open-source Node.js tools (Emmett and Pongo) when users deployed them in serverless environments where initial requests took over one second. Rather than guess at causes, systematic benchmarking identified bottlenecks. Benchmarks revealed dramatic performance differences: non-pooled connections achieved ~2-3 operations/second with 400ms+ execution time, while pooled connections achieved ~9-27 operations/second with 36-109ms execution time. The data showed that establishing database connections consumed the majority of latency. Immediate improvements included pre-generating database schemas upfront to eliminate redundant CREATE statements on each cold start, adding explicit connection sessions (similar to MongoDB's session API) allowing read-append sequences to reuse connections, and implementing CLI tools for upfront schema generation in serverless contexts. High standard deviations in initial results indicated test contamination where schema creation on first runs skewed averages.

**Key takeaways:**
- Don't assume connection pooling is always available due to serverless constraints and cold starts
- Systematically benchmark rather than speculate about performance issues based on assumptions
- Use statistical tools like Benchmark.js; avoid manual timer-based measurements that introduce bias
- Remain critical of benchmark results and test methodology to catch contaminated data
- Progress iteratively following: Make It Work → Make It Right → Make It Fast
- Integrate OpenTelemetry for detailed tracing and use Flame Graphs to visualize performance bottlenecks

