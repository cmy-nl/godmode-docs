---
id: security
title: Security settings
sidebar_label: Security
---

# Security settings

## Two-factor authentication (2FA)

| Option | Description |
|---|---|
| **Optional** | Users can enable 2FA voluntarily (default) |
| **Required for Super Admin / Admin** | Enforced for privileged roles only |
| **Required for all users** | Enforced for every GodMode and reseller dashboard user |

When 2FA is enforced, users without 2FA set up are redirected to the 2FA enrollment screen on their next login.

## Session settings

- **JWT token expiry** — how long an access token is valid (default: 24 hours)
- **Session timeout** — idle timeout before a user is logged out (default: 60 minutes)
- **Concurrent session limit** — maximum number of active sessions per user (default: 5)

## IP allowlist

Restrict GodMode Super Admin access to specific IP addresses or CIDR ranges. Leave empty to allow access from any IP. Reseller dashboard access is not affected by this allowlist.

:::caution
If you enable an IP allowlist and lock yourself out, contact BrandForge support to reset it.
:::

## Audit log retention

Set how long audit log entries are retained. See [Log retention →](/docs/audit-logs/log-retention).
