---
id: index
title: Getting started with GodMode
sidebar_label: Getting started
slug: /
---

import DocCard from '@theme/DocCard';
import DocCardList from '@theme/DocCardList';

# Getting started with GodMode

**GodMode** is the multi-tenant Super Admin and Reseller management platform powering BrandForge. It gives you full control over your entire partner hierarchy — from distributors and resellers all the way through to end clients — from a single interface.

## What you can do in GodMode

- Provision and manage white-label **instances** of BrandForge for reseller partners
- Issue and revoke **licenses** tied to WHMCS or Upmind provisioning
- Configure **branding** per reseller — logo, colors, custom domain, email templates
- Manage **credits** across the full hierarchy with volume discounts
- Monitor platform health and usage via the **dashboard**
- Inspect a full **audit log** of every action taken on the platform

## Who uses GodMode?

| Role | Access level | What they manage |
|---|---|---|
| **Super Admin** | Full GodMode access | Everything — instances, licenses, all resellers |
| **Distributor** | Distributor panel | Their reseller accounts and credit pools |
| **Reseller** | Reseller dashboard | Their own customers, branding, and credits |

:::info Access control
The Super Admin panel is only accessible to the BrandForge team. Distributors and resellers see a scoped version of GodMode with only their relevant sections visible.
:::

## Platform architecture

BrandForge runs on a **multi-instance architecture**. Each reseller partner gets their own isolated instance with its own database, subdomain, and branding configuration. GodMode sits above all instances and manages them centrally.

```
GodMode (Super Admin)
├── Distributor A
│   ├── Reseller 1  →  Instance 1 (custom domain)
│   └── Reseller 2  →  Instance 2 (custom domain)
└── Distributor B
    └── Reseller 3  →  Instance 3 (custom domain)
```

## Quick links

- [Dashboard overview →](/dashboard)
- [Create your first reseller →](/resellers/create-reseller)
- [Issue a license →](/licenses/issue-license)
- [Configure branding →](/brandings/create-brand)
