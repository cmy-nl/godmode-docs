---
id: reading-logs
title: Reading audit logs
sidebar_label: Reading logs
---

# Reading audit logs

Each audit log entry contains the following fields:

| Field | Description |
|---|---|
| **Timestamp** | UTC datetime of the action |
| **Actor** | The user who performed the action (name, email, role) |
| **Action** | The type of event (e.g. `license.suspended`) |
| **Entity type** | The type of object affected (e.g. `License`, `Reseller`) |
| **Entity ID** | The unique ID of the affected object |
| **Entity name** | Human-readable name (e.g. reseller company name) |
| **IP address** | The IP from which the action originated |
| **Diff** | A before/after snapshot of changed fields (for update events) |

## Diff view

For update events, clicking on a log entry expands a diff panel showing which fields changed and what the values were before and after the change. Sensitive fields (passwords, API keys) are always redacted in the diff.

## System-generated events

Actions triggered by automated processes (WHMCS webhooks, license expiry checks, scheduled jobs) appear with actor set to `system` rather than a named user.
