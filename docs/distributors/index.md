---
id: index
title: Distributors
sidebar_label: Overview
---

# Distributors

A Distributor is the top-level business entity in GodMode — think of them as a Master Reseller or Hosting Company. They buy platform access from the Super Admin, create and manage multiple Resellers under them, and have full white-label control over their own branded environment.

:::tip Where is this in the UI?
Navigate to **GodMode → Distributors** in the left sidebar.
:::

## How distributors fit in the hierarchy

```
GodMode Platform (Super Admin)
        ↓
"Acme Hosting Ltd" (Distributor)
        ↓
"Digital Agency BV" (Reseller)    "Web Solutions Inc" (Reseller)
        ↓                                   ↓
"Startup XYZ" (End Client)        "Ecom Store" (End Client)
```

A Distributor sits between the Super Admin and Resellers. They recruit and manage hosting partners, agencies, or other resellers within their own branded platform — without any BrandForge branding visible to those resellers or their end clients.

## Creating a distributor

### Step 1 — Basic info

| Field | What to enter | Example |
|---|---|---|
| **Company name** | Full legal business name | Acme Hosting Ltd |
| **Slug** | URL-friendly identifier (auto-generated) | `acme-hosting-ltd` |
| **Billing email** | Where invoices are sent | billing@acme.com |
| **Status** | Current operational state | Active |

### Step 2 — Optional settings

| Field | What to enter | Example |
|---|---|---|
| **Custom domain** | Their white-label portal domain | app.acme.com |
| **Owner user** | The admin user who manages this distributor | Select from users |

## Distributor statuses

| Status | Meaning |
|---|---|
| `Active` | Fully operational — resellers can create and serve clients |
| `Onboarding` | Just created, still being set up |
| `Suspended` | Temporarily blocked — all resellers and clients lose access immediately |
| `Cancelled` | Permanently terminated |

:::warning Suspension cascades immediately
When a distributor is suspended, **all resellers and end clients under them lose access at the same moment**. There is no grace period at the distributor level. Use suspension carefully.
:::

## What a distributor can do

**Can do:**
- Create and manage Resellers
- Set package allocations and limits for each reseller (max clients, modules)
- Full white-label control — their own logo, colors, and custom domain
- Impersonate any reseller under them (and then any client under that reseller)
- View all reseller activity and billing within their account

**Cannot do:**
- Access Super Admin functions or GodMode settings
- See other distributors or their data
- Exceed their own package limits set by the Super Admin

## Branding inheritance

Distributors can configure their own logo, colors, and custom domain. Resellers under them **inherit this branding by default** unless they have their own branding profile configured. See [Brandings →](/docs/brandings) for details.

## Common questions

**How many resellers can a distributor have?**
Unlimited by default, controlled by their package allocation set by the Super Admin.

**Can a distributor see end client data?**
Yes — they can impersonate any reseller under them, and from within that reseller's view, impersonate any end client. All impersonation events are recorded in the [Audit log →](/docs/audit-logs).

**What happens when a distributor is suspended?**
All resellers and clients under them lose access immediately. No grace period applies at the distributor level.

**Can a distributor have their own branding?**
Yes. They can set their own logo, colors, and custom domain. Resellers inherit this branding unless they have their own branding profile.

## Related pages

- [Create a distributor →](/docs/distributors/create-distributor)
- [Manage distributors →](/docs/distributors/manage-distributors)
- [Distributor permissions →](/docs/distributors/distributor-permissions)
- [Resellers →](/docs/resellers)
- [Brandings →](/docs/brandings)
- [Billing & credits →](/docs/billing)
