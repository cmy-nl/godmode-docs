---
id: index
title: Instances
sidebar_label: Overview
---

# Instances

An instance is a dedicated, isolated deployment of BrandForge for a single reseller. Each instance has its own database, subdomain (or custom domain), branding configuration, and credit pool. Instances are the core unit of the multi-tenant architecture.

:::tip Where is this in the UI?
Navigate to **GodMode → Instances** in the left sidebar.
:::

## Instance lifecycle

```
Created → Provisioning → Active → (Suspended) → Terminated
```

| Status | Description |
|---|---|
| `provisioning` | Instance is being deployed. Takes 1–3 minutes. |
| `active` | Running and accessible to the reseller and their end clients |
| `suspended` | Access paused. Instance remains provisioned but inaccessible. |
| `error` | Provisioning or health check failed. Requires investigation. |
| `terminated` | Instance and data deleted. Irreversible. |

## What each instance includes

- **Isolated PostgreSQL database** — reseller and end client data is never shared between instances
- **Dedicated subdomain** — e.g. `resellername.brandforge.software`, or a custom domain
- **Branding configuration** — applied from the [Brandings →](/docs/brandings) section
- **License binding** — each instance requires one active license to remain operational
- **Redis and background job queue** — for async AI generation tasks (Solid Queue)

## Instance vs reseller

An **instance** is the technical deployment. A **reseller** is the commercial entity. A reseller always has exactly one instance. Terminating a reseller account terminates their instance; suspending a reseller suspends their instance.

## Related pages

- [Create an instance →](/docs/instances/create-instance)
- [Instance configuration →](/docs/instances/instance-configuration)
- [WHMCS integration →](/docs/instances/whmcs-integration)
- [Docker deployment →](/docs/instances/docker-deployment)
- [Licenses →](/docs/licenses)
