---
id: index
title: Resellers
sidebar_label: Overview
---

# Resellers

Resellers are hosting providers, domain registrars, agencies, or telcos that white-label BrandForge for their own customers. Each reseller gets a dedicated BrandForge instance with their own branding, custom domain, and credit pool.

:::tip Where is this in the UI?
Navigate to **GodMode → Resellers** in the left sidebar.
:::

## How resellers fit in the hierarchy

```
Super Admin (BrandForge / GodMode)
├── Distributor
│   └── Reseller  ←  you are here
│       └── End clients
└── Direct reseller (no distributor)
    └── End clients
```

Resellers can be attached to a distributor or created directly under the Super Admin (as direct resellers).

## What a reseller gets

- A dedicated **instance** of BrandForge at their own subdomain or custom domain
- A **reseller dashboard** to manage their end clients independently
- Their own **brand configuration** — logo, colors, custom email templates
- A **credit pool** allocated by the Super Admin or their distributor
- Automated provisioning via **WHMCS** or **Upmind** if enabled

## Reseller statuses

| Status | Meaning |
|---|---|
| `active` | Instance running, credits available, login enabled |
| `suspended` | Login blocked, instance paused, end clients cannot access the platform |
| `pending` | Account created but instance not yet provisioned |
| `expired` | License has passed its end date |

## Related pages

- [Create a reseller →](/docs/resellers/create-reseller)
- [Manage resellers →](/docs/resellers/manage-resellers)
- [Reseller dashboard overview →](/docs/resellers/reseller-dashboard-overview)
- [Reseller permissions →](/docs/resellers/reseller-permissions)
- [Instances →](/docs/instances)
- [Licenses →](/docs/licenses)
- [Brandings →](/docs/brandings)
