---
id: index
title: Settings
sidebar_label: Overview
---

# Settings

The Settings section contains platform-level configuration that applies across all instances and resellers. Changes here affect the entire GodMode platform, so they are restricted to **Super Admin** and **Admin** roles.

:::tip Where is this in the UI?
Navigate to **GodMode → Settings** in the left sidebar.
:::

:::caution
Settings changes take effect immediately and may impact live reseller instances. Review changes carefully before saving.
:::

## Settings categories

### General
Platform name, default language, timezone, support contact details, and platform-wide credit cost rates per service action.

### Security
Two-factor authentication enforcement, JWT token expiry, session timeout, IP allowlist for GodMode access, and audit log retention period.

### Notifications
Configure when and how GodMode sends alerts: license expiry warnings, low credit balance alerts, instance error notifications, and the notification delivery method (email, Slack webhook).

### Integrations
API keys and webhook configuration for external services: WHMCS, Stripe, Mollie, Upmind. Also includes the GodMode REST API key used by the WHMCS module.

## Related pages

- [General settings →](/settings/general)
- [Security settings →](/settings/security)
- [Notification settings →](/settings/notifications)
- [Integrations →](/settings/integrations)
