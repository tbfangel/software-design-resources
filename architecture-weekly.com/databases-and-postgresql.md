# PostgreSQL & Database Patterns

> Part of the [Architecture Weekly overview](overview.md)

This cluster explores PostgreSQL-specific features and patterns, database design tradeoffs, query complexity management, JSONB for semi-structured data, write-ahead logs, and unconventional uses of cloud storage as database foundations.

## Key Insights

**Explicit schema awareness beats implicit global parsing.** Automatic type conversion without schema knowledge forces systems to guess which strings represent dates versus regular data—an impossible task that causes performance nightmares. Instead, use upcasting/downcasting functions that transform declared fields based on known schema, enabling the same mechanism to handle both type conversion and schema migrations. This pattern trades magical convenience for explicit, debuggable transformations.

**PostgreSQL's extension ecosystem is its competitive advantage.** Advisory locks for distributed coordination, JSONB for semi-structured data, logical replication as native CDC, partitioning with pg_partman for lifecycle management—these capabilities let PostgreSQL serve as event store, message queue, and document database without introducing new dependencies. "Legitimate misuses" of PostgreSQL often prove more pragmatic than specialized systems requiring operational expertise teams lack.

**"Just use SQL" accumulates accidental complexity.** What starts as straightforward queries evolves into stringly-typed code with manual parameter coordination, dynamic WHERE clause construction, and operator mapping—essentially building a query compiler without calling it one. This isn't an argument against SQL but recognition that frameworks exist because scaling raw SQL creates predictable problems. Choose solutions matching current and anticipated scope, not ideology.

**JSONB bridges relational rigor with document flexibility.** Store fixed attributes as traditional columns for query performance; put variable data in JSONB fields for schema flexibility. Binary format enables efficient indexing (GIN for multi-attribute searches, B-Tree for specific paths) while eliminating repeated parsing overhead. However, avoid large arrays or deep nesting as TOAST compression degrades performance. Combine JSONB with traditional constraints to enforce required fields despite document flexibility.

**Write-Ahead Logs are the foundation of modern persistence.** PostgreSQL uses WAL for ACID compliance and replication. Kafka treats logs as the core abstraction, enabling horizontal scaling through partitioned append-only structures. MongoDB's oplog enables replica synchronization. The pattern is universal: log first, apply later. Sequential appends are orders of magnitude faster and more reliable than scattered random writes, making logs the preferred durability mechanism across modern infrastructure.

**Cloud storage enables novel database architectures with known tradeoffs.** S3's conditional writes enable strongly consistent event stores through optimistic concurrency control. However, per-request pricing makes small frequent transactions expensive compared to DynamoDB. Building custom ledger databases on S3 + DuckDB can be more cost-effective than proprietary offerings when scale and compliance requirements align. There's no free lunch—weigh snapshot storage costs against GET request reductions, and prototype with real workloads before committing.

---

### [Parse, Don't Guess](https://www.architecture-weekly.com/p/parse-dont-guess)
**Type:** Article
**Date:** 2026-03
**Tags/Topics:** JSON Parsing, Schema Versioning, Performance, TypeScript, Database Drivers

The author initially tried to automatically parse bigints and dates from JSON using regex at the driver level, which caused CPU freezes because the regex ran against every string in every document during deserialization, blocking JavaScript's event loop. The fundamental issue is that the driver has no idea what your schema looks like, making automatic global parsing without schema knowledge an impossible task. Instead of automatic global parsing, the solution implements explicit schema versioning functions: Upcasting (transforms stored data like strings from JSON into application types like Date objects and bigints) and Downcasting (converts application types back to storage format for backward compatibility). This pattern addresses multiple problems simultaneously—conversions run only on declared fields using simple operations, the same mechanism handles structural migrations, and old and new document formats coexist without migrations.

**Key takeaways:**
- Explicit parsing through schema-aware functions beats implicit global guessing every time
- Make conversions run only on declared fields using simple operations rather than scanning all data
- Use the same upcasting/downcasting mechanism for both type conversion and schema versioning
- Enable backward and forward compatibility by allowing old and new document formats to coexist
- Follow Kent Beck's principle: make it work, make it right, make it pretty—shortcuts teach lessons but require refinement
- Performance matters: global regex parsing against every string can block event loops and freeze systems

### [PostgreSQL Partitioning, Logical Replication, and Common Patterns](https://www.architecture-weekly.com/p/postgresql-partitioning-logical-replication)
**Type:** Article
**Date:** 2025-09
**Tags/Topics:** PostgreSQL Partitioning, Logical Replication, WAL, Change Data Capture, pg_partman

Addresses practical implementation challenges around partitioning strategy, logical replication mechanics, and PostgreSQL usage patterns. Partition by time (monthly/weekly/daily) but recognize tradeoffs—weekly partitions over 10 years yields 520 partitions, and while PostgreSQL handles thousands, metadata overhead increases. Implement tiered storage using tablespaces to move older partitions to slower/cheaper disk, and use the pg_partman extension to automate lifecycle management and prevent unbounded WAL growth. For logical replication, leverage Write-Ahead Log (WAL) as native Change Data Capture mechanism, configure replication slots to prevent WAL deletion until subscribers acknowledge, and set max_slot_wal_keep_size as circuit breaker to prevent disk exhaustion. Partition pruning automatically skips irrelevant partitions during queries with range conditions, but data doesn't auto-rebalance—manual migration via detach/insert/drop is necessary when partitioning strategy fails.

**Key takeaways:**
- Partition autonomously and avoid cross-partition queries that negate performance benefits
- Apply VACUUM tuning properly—many teams disable autovacuum without proper configuration, causing problems
- Use connection pooling, EXPLAIN analysis, and prepared statements as foundational performance practices
- Recognize PostgreSQL's extension ecosystem as competitive advantage over alternatives like SQL Server
- Understand that logical replication differs from Kafka: PostgreSQL couples retention to consumption rather than decoupling
- Consider legitimate "misuses" (document databases via JSONB, event stores, message queues) as viable architectural choices

### [Just Use SQL They Say... Or How Accidental Complexity Piles On](https://www.architecture-weekly.com/p/just-use-sql-they-say-or-on-how-accidental)
**Type:** Article
**Date:** 2025-09
**Tags/Topics:** SQL, Query Building, Complexity, ORMs, Dynamic Queries, String Management

While raw SQL seems simple initially—"Just use SQL, no need for ORMs"—it quickly becomes complicated as requirements grow. What starts as straightforward database queries morphs into "stringly typed" code with string manipulation, parameter management, and conditional logic that becomes difficult to maintain. The article traces complexity escalation: basic queries work fine, then SQL injection vulnerabilities emerge when user input enters queries directly, parameterized queries help but introduce coordination problems between SQL strings and parameter arrays, and dynamic filtering requires building WHERE clauses conditionally with messy string concatenation. Supporting multiple optional filter criteria necessitates custom query builders with type definitions, operator mapping, and conditional SQL generation—essentially building a "simple WHERE condition compiler." The proposed solution uses abstraction layers: define structured filter types, create builder functions generating parameterized queries programmatically, map operators to SQL syntax safely, and maintain synchronization between SQL structure and parameter arrays.

**Key takeaways:**
- It's never "just" anything—simple approaches work initially but accumulate accidental complexity as systems grow
- Recognize when "just SQL" becomes unmanageable rather than stubbornly sticking to raw strings
- Evaluate whether frameworks solving these problems align with actual needs rather than dismissing them dogmatically
- Understand that popular library design decisions reflect hard-won lessons from scaling problems
- Choose solutions matching current and anticipated scope, not ideology or simplicity claims
- Quote from Gerald Weinberg: complexity exists "because they got that way"—problems are solved iteratively as requirements evolve

### [PostgreSQL JSONB: Powerful Storage for Semi-Structured Data](https://www.architecture-weekly.com/p/postgresql-jsonb-powerful-storage)
**Type:** Article
**Date:** 2024
**Tags/Topics:** PostgreSQL JSONB, Semi-Structured Data, Indexing, Schema Evolution, Hybrid Storage

Addresses a fundamental database design tension: rigid relational schemas enforce data integrity but resist change, while schemaless document databases offer flexibility but sacrifice consistency guarantees. PostgreSQL's JSONB type bridges this gap by combining document-like flexibility with relational database guarantees. The hybrid storage model stores fixed attributes as traditional columns and variable data in JSONB fields—the binary format enables efficient indexing and querying and eliminates the need for repeated parsing. JSONB allows graceful schema changes without migrations as new fields can be added to documents without altering database structure. Multiple index strategies are supported: GIN indexes for containment checks and existence operators, B-Tree indexes on extracted paths for simple lookups, and partial indexes for conditional filtering. JSONB stores JSON in binary format with hierarchical, tokenized key-value structures including metadata about data types, allowing type-specific operations and comparisons.

**Key takeaways:**
- Use JSONB for semi-structured data with variable schemas across customer types or acquisition channels
- Avoid storing large arrays or deeply nested structures in single JSONB documents due to TOAST compression overhead
- Combine JSONB with traditional columns for frequently queried fixed attributes to optimize performance
- Index strategically: GIN for multi-attribute searches, B-Tree for specific paths you query regularly
- Leverage constraints to enforce required fields despite document flexibility
- PostgreSQL uses hierarchical trees with offsets for efficient child element access and near-constant time retrieval

### [Building Your Own Ledger Database](https://www.architecture-weekly.com/p/building-your-own-ledger-database)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Ledger Databases, S3, DuckDB, QLDB, Immutability, Cost Optimization

Amazon is sunsetting QLDB, forcing companies to migrate. Rather than moving to Aurora PostgreSQL, building custom ledger solutions or using simpler alternatives can be more cost-effective and better tailored to specific needs. The author proposes a three-tier recommendation structure: for massive scale (Stripe, Uber) build proprietary systems optimized for specific requirements, for regulated compliance use S3 + DuckDB combination, and generally don't fear custom solutions if conditions align. The proposed S3 + DuckDB architecture offers S3 with Object Lock for immutability via WORM policies, cost efficiency as S3 storage is significantly cheaper than relational databases especially with tiered access patterns, DuckDB as a modern analytical engine supporting Parquet files and cloud-native queries, and a batching strategy transitioning data from DynamoDB to S3 in batches. The key advantage is that S3 immutability is easier to prove than relational database immutability.

**Key takeaways:**
- Build custom solutions only when: limited feature scope, competition doesn't match needs, sufficient team capacity, favorable cost model, and adequate performance
- Choose replaceable, popular tools (S3, DuckDB) to mitigate risk of proprietary solutions
- Conduct proof-of-concepts before committing to custom infrastructure approaches
- Consider regulatory requirements (data residency, audit trails) explicitly when choosing architectures
- The trend favors both high-complexity custom systems AND simpler, cheaper alternatives depending on scale
- S3 immutability through Object Lock provides compliance-friendly guarantees at lower cost than traditional databases

### [The Write-Ahead Log: A Foundation for Reliability](https://www.architecture-weekly.com/p/the-write-ahead-log-a-foundation)
**Type:** Article
**Date:** 2024
**Tags/Topics:** Write-Ahead Log, WAL, Durability, Crash Recovery, Replication, Database Internals

Write-Ahead Logs (WALs) are an underappreciated yet foundational concept in modern systems, ubiquitous across databases, message brokers, and distributed systems. The WAL mechanism follows a consistent pattern: log first, apply later—log entries are appended sequentially to durable storage before modifications occur, changes are applied asynchronously to actual data structures, and crash recovery replays the log to restore consistency. This guarantees durability (changes aren't lost once logged) and consistency (systems recover to known states). PostgreSQL uses WAL for ACID compliance and replication, supporting both physical replication (block-level streaming) and logical replication (operation-level changes) enabling change data capture. Kafka treats logs as the core abstraction with topics logically divided into physically separate append-only partitions, each with monotonic offsets, enabling horizontal scaling. MongoDB implements the oplog as a capped collection recording high-level operations for replica set synchronization.

**Key takeaways:**
- Sequential appends are far easier, faster, and more reliable than scattered random writes across different locations
- WAL enables durability without requiring synchronous disk writes for every operation, trading latency for throughput
- Understanding WAL mechanics is essential for building reliable systems and debugging failure scenarios
- Physical replication streams block-level changes while logical replication streams operation-level changes
- Kafka's architecture treats the log as the primary abstraction rather than a supporting mechanism
- MongoDB's oplog size limits create recovery windows—understand your system's replay constraints

### [Using S3, But Not the Way You Expected](https://www.architecture-weekly.com/p/using-s3-but-not-the-way-you-expected)
**Type:** Article
**Date:** 2024
**Tags/Topics:** S3, Conditional Writes, Event Store, Optimistic Concurrency, Cloud Storage, Versioning

AWS S3's conditional writes capability fundamentally changes what's possible with cloud storage, enabling S3 to serve as a foundation for building strongly consistent event stores by implementing optimistic concurrency control directly in S3. The proposed key-naming convention follows the pattern {streamPrefix}/{streamType}/{streamId}/{streamVersion}.{chunkVersion}.json, with optimistic concurrency using the If-None-Match="*" header to ensure updates only succeed if a file doesn't already exist at that version number. The chunk structure stores events bundled with metadata and snapshots in JSON files, reducing GET request costs. Each stream version functions like a database write-ahead log ensuring consistency, with state snapshots in chunks minimizing event replays and schema versioning handling migrations. S3's ListObjects API with server-side filtering locates latest chunks, while S3 event notifications can trigger downstream processing.

**Key takeaways:**
- S3 conditional writes enable optimistic concurrency control patterns previously requiring dedicated databases
- Cost considerations matter: S3 charges per-request, making small frequent transactions potentially expensive compared to DynamoDB
- S3 makes sense for large-scale event streaming with batching, not high-frequency transaction systems
- DynamoDB excels at real-time queries, small transactions, and built-in concurrency controls through ConditionalExpressions
- If AWS adds an If-Match header for true version matching, S3's viability as an event store would increase dramatically
- There's no free lunch when weighing snapshot storage costs against GET request reductions

