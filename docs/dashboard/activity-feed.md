---
id: activity-feed
title: Activity feed
sidebar_label: Activity feed
---

# Activity feed

The activity feed shows a real-time stream of actions taken across the platform. Each entry includes the actor (user or system), the action taken, the affected entity, and a timestamp.

## Event types

| Event | Triggered by |
|---|---|
| Reseller created | Super Admin or Distributor |
| License issued | Super Admin or automated WHMCS provisioning |
| License suspended | Super Admin or failed payment webhook |
| Credits topped up | Reseller or Super Admin |
| Branding updated | Reseller or Super Admin |
| Instance provisioned | WHMCS module or Super Admin |

## Filtering
Use the filter controls above the feed to scope by event type, actor role, or date range. For a fully exportable, tamper-evident log, see [Audit logs →](/audit-logs).
