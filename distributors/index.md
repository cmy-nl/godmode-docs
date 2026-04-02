---
id: index
title: Distributors
sidebar_label: Overview
---

# Distributors

Distributors are the top tier of the BrandForge partner hierarchy, sitting between the Super Admin and Resellers. A distributor manages a group of resellers — typically a regional or channel-specific partner (such as a domain registrar or telco) that recruits and manages hosting partners on your behalf.

:::tip Where is this in the UI?
Navigate to **GodMode → Distributors** in the left sidebar.
:::

## How distributors fit in the hierarchy

```
Super Admin (BrandForge / GodMode)
└── Distributor  ←  you are here
    ├── Reseller A
    ├── Reseller B
    └── Reseller C
```

A distributor can:
- Create and manage reseller accounts within their allocation
- Allocate credits to their resellers from their own credit pool
- View usage and billing across all resellers they manage
- Configure permissions within the bounds the Super Admin has granted them

A distributor **cannot**:
- Access the Super Admin panel or other distributors' data
- Exceed the credit allocation or reseller seat limit set by the Super Admin
- Change platform-level settings or API provider configuration

## Key concepts

### Credit pool
Each distributor has a credit pool, funded by the Super Admin. The distributor allocates portions of this pool to individual resellers. Credits flow downward: Super Admin → Distributor → Reseller → End client.

### Reseller seats
The Super Admin sets a maximum number of reseller accounts a distributor can create. This is visible in the distributor detail view.

## Related pages

- [Create a distributor →](/docs/distributors/create-distributor)
- [Manage distributors →](/docs/distributors/manage-distributors)
- [Distributor permissions →](/docs/distributors/distributor-permissions)
- [Resellers →](/docs/resellers)
- [Billing & credits →](/docs/billing)
