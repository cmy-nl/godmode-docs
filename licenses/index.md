---
id: index
title: Licenses
sidebar_label: Overview
---

# Licenses

A license is the key that activates and gates access to a BrandForge instance. Every instance must have exactly one active license bound to it. Licenses are issued by the Super Admin and can be tied to WHMCS order lifecycle events for automated management.

:::tip Where is this in the UI?
Navigate to **GodMode → Licenses** in the left sidebar.
:::

## License lifecycle

```
Issued → Active → (Suspended) → Expired / Revoked
```

| Status | Description |
|---|---|
| `active` | Valid and bound to a running instance |
| `unassigned` | Issued but not yet bound to an instance |
| `suspended` | Temporarily deactivated — instance is paused |
| `expired` | Past the license end date |
| `revoked` | Permanently cancelled |

## License types

| Type | Description |
|---|---|
| **Monthly** | Renews on a monthly billing cycle via WHMCS |
| **Annual** | Renews yearly — typically at a discounted rate |
| **Lifetime** | No expiry date — for legacy or special partner agreements |
| **Trial** | Time-limited, usually 14 or 30 days |

## How licenses bind to instances

When an instance is provisioned, GodMode generates a `GODMODE_LICENSE_KEY` and injects it into the instance container as an environment variable. The instance phones home to GodMode to validate the key on startup and periodically during operation. If the license is suspended or revoked, the instance enters a grace period before going offline.

## Grace period

When a license expires or is suspended, the instance enters a **48-hour grace period** before access is blocked. This prevents disruption from payment processing delays. You can configure the grace period duration in [Settings →](/docs/settings/general).

## Related pages

- [Issue a license →](/docs/licenses/issue-license)
- [License types →](/docs/licenses/license-types)
- [Revoke or suspend a license →](/docs/licenses/revoke-suspend)
- [WHMCS integration →](/docs/instances/whmcs-integration)
