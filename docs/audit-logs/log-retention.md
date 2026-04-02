---
id: log-retention
title: Log retention
sidebar_label: Log retention
---

# Log retention

## Default retention period

Audit logs are retained for **2 years** (730 days) from the date of the event. After this period, logs are automatically purged from the database.

## Changing the retention period

The retention period can be adjusted in **GodMode → Settings → Security**. Available options: 90 days, 1 year, 2 years (default), 5 years, or indefinite.

:::note
Increasing the retention period increases database storage usage. Monitor disk usage when setting long retention periods on high-activity platforms.
:::

## Immutability

Audit logs are append-only. No user — including Super Admins — can edit or delete individual log entries. The only way audit log data is removed is through automatic purge after the retention period.
