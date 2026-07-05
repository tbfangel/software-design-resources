---
type: article
title: "Dealing with Eventual Consistency"
description: "Accepting eventual consistency for file uploads—rather than forcing synchronous operations—improves user experience while leveraging cloud infrastructure effectively."
resource: https://www.architecture-weekly.com/p/dealing-with-eventual-consistency
cluster: event-driven-architecture
tags: ["eventual-consistency", "cloud-storage", "async-programming"]
published: 2024
timestamp: 2026-07-05
---
# Dealing with Eventual Consistency

> Accepting eventual consistency for file uploads—rather than forcing synchronous operations—improves user experience while leveraging cloud infrastructure effectively.

## Key Facts
- Decouple user experience from implementation by letting users continue working while uploads happen asynchronously
- Use convention-based routing where URN patterns replace explicit registration, reducing complexity
- Implement periodic reconciliation through background jobs that discover orphaned uploads and clean dead links
- Abstract storage providers so URNs hide whether files live in S3, Azure, or local disk, enabling easy migration
- Respect system constraints by working with distributed nature rather than fighting it
- Combine task-based UI, dumb pipes with smart endpoints, convention over configuration, and asynchronous reconciliation patterns

## Summary
Accepting eventual consistency for file uploads—rather than forcing synchronous operations—improves user experience while leveraging cloud infrastructure effectively. Using predictable identifiers (URNs) enables this pattern without tight coupling between system components. URNs like `urn:files:1:CONSTRUCTION:SAFETY_CHECK:DAILY_INSPECTION:site-photo.jpg` encode context upfront, enabling modules to reference files without direct coupling. The practical flow involves clients generating URNs based on user context, backends validating permissions and returning pre-signed URLs, clients uploading directly to cloud storage, and background services reconciling upload status through periodic validation jobs. This "magic folder" pattern maps URN hierarchies to storage paths automatically, creating logical organization without explicit folder management.

## Links
- [Source](https://www.architecture-weekly.com/p/dealing-with-eventual-consistency) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-event-driven-architecture.md)
- [Practical Introduction to Event Sourcing](/architecture-weekly.com/2023-practical-introduction-to-event-sourcing.md)
- [Handling Events Coming in an Unknown Order](/architecture-weekly.com/2025-11-handling-events-coming-in-an-unknown.md)
- [On Rebuilding Read Models, Dead-Letter Queues and Why Letting Go is Sometimes the Answer](/architecture-weekly.com/2026-01-on-rebuilding-read-models-dead-letter.md)
