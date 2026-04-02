---
id: index
title: Audit logs
sidebar_label: Overview
---

# Audit logs

The audit log is a tamper-evident, chronological record of every action taken on the GodMode platform. Every create, update, delete, suspend, revoke, impersonate, and login event is recorded with the actor, timestamp, affected entity, and a before/after diff for data changes.

:::tip Where is this in the UI?
Navigate to **GodMode → Audit logs** in the left sidebar.
:::

## Why audit logs matter

- **Accountability** — know exactly who changed what and when
- **Compliance** — required for SOC 2, ISO 27001, and GDPR audit trails
- **Debugging** — trace the sequence of events that led to a problem
- **Dispute resolution** — verify actions taken by resellers or distributors

## What is logged

| Category | Examples |
|---|---|
| **Authentication** | Login, logout, failed login, password reset |
| **Reseller management** | Create reseller, suspend reseller, edit credit allocation |
| **License management** | Issue license, suspend license, revoke license, bind to instance |
| **Instance management** | Provision instance, terminate instance, change domain |
| **Branding** | Update logo, change colors, set custom domain |
| **Credits** | Top-up credits, manual credit adjustment |
| **User management** | Invite user, change role, remove user |
| **Impersonation** | Super Admin impersonates a reseller or end client |
| **Settings** | Change platform settings, update API provider keys |

## Log retention

Audit logs are retained for **2 years** by default. Retention period can be adjusted in [Settings → Security →](/settings/security). Logs cannot be deleted by any user, including Super Admins.

## Related pages

- [Reading audit logs →](/audit-logs/reading-logs)
- [Filter and export →](/audit-logs/filter-export)
- [Log retention policy →](/audit-logs/log-retention)
