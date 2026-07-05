---
type: article
title: "Show Me the Money: Practically Navigating Cloud Costs"
description: "Building an event-sourced system on Amazon S3 involves complex cost calculations beyond simple \"pay for storage and requests\" assumptions."
resource: https://www.architecture-weekly.com/p/show-me-the-money-practically-navigating
tags: ["engineering-culture", "cloud-costs", "s3", "event-sourcing", "cost-optimization", "architecture-economics"]
published: 2024
timestamp: 2026-07-05
---
# Show Me the Money: Practically Navigating Cloud Costs

> Building an event-sourced system on Amazon S3 involves complex cost calculations beyond simple "pay for storage and requests" assumptions.

## Key Facts
- Thoughtful architectural design directly translates to cloud cost efficiency through payload optimization
- Load testing is essential—theoretical calculations reveal only part of the picture for real-world usage
- Format optimization yields significant savings: Parquet compression reduces costs by approximately 5x versus JSON
- Request costs often exceed storage costs in high-throughput systems, making API call optimization critical
- Storage tiering can reduce costs by 41% or more by moving cold data to cheaper tiers automatically
- Event size management through the Claim Check Pattern prevents massive storage cost inflation

## Summary
Building an event-sourced system on Amazon S3 involves complex cost calculations beyond simple "pay for storage and requests" assumptions. Event payload size directly drives storage costs where inflating events from 4KB to 400KB increases annual storage costs from ~$3 to ~$299, a 100x difference. Using the Claim Check Pattern (storing large files separately) prevents this bloat. Switching from JSON to Parquet compression reduces storage costs by approximately 5x through efficient columnar storage, particularly beneficial for structured event data. Implementing tiered storage—Standard for active chunks, Intelligent-Tiering for sealed data, and Glacier for archived records—can reduce costs by 41% or more while maintaining necessary access speeds. PUT, GET, LIST, and DELETE operations generate substantial expenses independent of payload size where optimizing request patterns through caching and strategic chunk management is critical.

## Links
- [Source](https://www.architecture-weekly.com/p/show-me-the-money-practically-navigating) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-engineering-culture.md)
- [Requiem for a 10x Engineer Dream](/architecture-weekly.com/2025-09-requiem-for-a-10x-engineer-dream.md)
- [Why Open Source Isn't Always Fair](/architecture-weekly.com/2025-09-why-open-source-isnt-always-fair.md)
- [Do We Still Need the QA Role?](/architecture-weekly.com/2024-do-we-still-need-the-qa-role.md)
