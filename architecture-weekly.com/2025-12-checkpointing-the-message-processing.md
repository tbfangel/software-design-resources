---
type: article
title: "Checkpointing the Message Processing"
description: "Draws a parallel between old video game checkpoint codes and message processing recovery in distributed systems, addressing how to resume message processing from where a system left off rather than restarting from the beginning after failures while maintaining consistency."
resource: https://www.architecture-weekly.com/p/checkpointing-the-message-processing
tags: ["messaging-and-kafka", "checkpointing", "message-processing", "outbox-pattern", "postgresql", "idempotency"]
published: 2025-12
timestamp: 2026-07-05
---
# Checkpointing the Message Processing

> Draws a parallel between old video game checkpoint codes and message processing recovery in distributed systems, addressing how to resume message processing from where a system left off rather than restarting from the beginning after failures while maintaining consistency.

## Key Facts
- Use mature tools like Emmett rather than building checkpoint management yourself from scratch
- Understand tradeoffs: global ordering guarantees require careful transaction management and performance costs
- Implement business-level idempotence alongside checkpoint detection for robust duplicate handling
- Monitor for noisy neighbors (competing processors) using checkpoint mismatch detection
- Consider performance costs of subscription-based outbox with long-lived transactions
- The approach trades some performance for correctness, suitable for internal module communication

## Summary
Draws a parallel between old video game checkpoint codes and message processing recovery in distributed systems, addressing how to resume message processing from where a system left off rather than restarting from the beginning after failures while maintaining consistency. The author proposes implementing checkpoints using PostgreSQL to track processing state through the Outbox Pattern (storing messages and state changes transactionally together), global ordering using transaction IDs and position numbers to guarantee message sequence, checkpoint storage in a processor_checkpoints table recording last processed message position, and idempotency detection by comparing expected vs. actual positions. Key components include an outbox table storing position, transaction_id, message_id, message_type, and data, polling queries retrieving unprocessed messages using transaction ordering, and a stored procedure using conditional logic to handle updates, inserts, and detect mismatches with return codes signaling success, idempotent skip, advanced position, or lagged position.

## Links
- [Source](https://www.architecture-weekly.com/p/checkpointing-the-message-processing) — original post

## Related
- [Cluster synthesis](/architecture-weekly.com/_synthesis-messaging-and-kafka.md)
- [Understanding Kafka's Consumer Protocol](/architecture-weekly.com/2024-understanding-kafkas-consumer-protocol.md)
- [Kafka Consumers: Under the Hood of Message Processing](/architecture-weekly.com/2024-kafka-consumers-under-the-hood-of.md)
- [How a Kafka-Like Producer Writes Messages](/architecture-weekly.com/2024-how-a-kafka-like-producer-writes.md)
