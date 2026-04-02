---
id: roles-permissions
title: Roles and permissions
sidebar_label: Roles & permissions
---

# Roles and permissions

## Permission matrix

| Action | Super Admin | Admin | Support | Distributor admin | Reseller admin |
|---|---|---|---|---|---|
| View all resellers | ✅ | ✅ | ✅ | Own only | ❌ |
| Create / edit reseller | ✅ | ✅ | ❌ | Own only | ❌ |
| Issue license | ✅ | ✅ | ❌ | ❌ | ❌ |
| Revoke license | ✅ | ❌ | ❌ | ❌ | ❌ |
| Terminate instance | ✅ | ❌ | ❌ | ❌ | ❌ |
| Top up credits | ✅ | ✅ | ❌ | Own pool | Own pool |
| Manage branding | ✅ | ✅ | ❌ | ❌ | Own only |
| Impersonate user | ✅ | ❌ | ✅ | ❌ | ❌ |
| View audit logs | ✅ | ✅ | ✅ | Own only | Own only |
| Manage API providers | ✅ | ✅ | ❌ | ❌ | ❌ |
| Change platform settings | ✅ | ✅ | ❌ | ❌ | ❌ |
| Invite GodMode users | ✅ | ✅ | ❌ | ❌ | ❌ |

## Notes on the Support role

The Support role is intended for the BrandForge support team. Supports can read everything and impersonate any user to reproduce issues, but cannot make changes. All impersonation events are logged in the [Audit log →](/docs/audit-logs).
