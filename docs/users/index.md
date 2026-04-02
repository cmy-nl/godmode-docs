---
id: index
title: Users
sidebar_label: Overview
---

# Users

The Users section manages all human accounts that have access to GodMode and the reseller dashboards. Users are distinct from end clients — a user is someone who operates the platform (Super Admin team, distributor admins, reseller admins), while an end client is a customer using the BrandForge product.

:::tip Where is this in the UI?
Navigate to **GodMode → Users** in the left sidebar. This shows all users with GodMode or reseller dashboard access.
:::

## User roles

| Role | Access scope | Description |
|---|---|---|
| **Super Admin** | Full GodMode | Complete platform access, all sections |
| **Admin** | Full GodMode (no destructive actions) | Same as Super Admin but cannot revoke licenses or terminate instances |
| **Support** | Read-only GodMode + impersonation | Can view all sections and impersonate for debugging, no write access |
| **Distributor admin** | Distributor panel only | Manages their assigned resellers and credit pool |
| **Reseller admin** | Reseller dashboard only | Manages their end clients, branding, and credits |

## Authentication

All users authenticate with email and password. Two-factor authentication (2FA) via TOTP is available and can be **enforced** for Super Admin and Admin roles from [Settings → Security →](/settings/security).

GodMode uses **JWT-based authentication** with role-based permissions enforced server-side on every API request.

## Related pages

- [Invite a user →](/users/invite-user)
- [Roles and permissions →](/users/roles-permissions)
- [Manage users →](/users/manage-users)
- [Settings → Security →](/settings/security)
