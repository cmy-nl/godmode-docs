---
id: index
title: End clients
sidebar_label: Overview
---

# End clients

End clients are the businesses or individuals that use BrandForge through a reseller's white-labeled instance. They interact only with the reseller's branded platform — they have no visibility of BrandForge, GodMode, or the reseller's technical setup.

:::tip Where is this in the UI?
Navigate to **GodMode → End clients** in the left sidebar. This shows all end clients across all resellers. To manage a specific reseller's clients, go to **Resellers → [reseller name] → End clients**.
:::

## How end clients fit in the hierarchy

```
Super Admin → Distributor → Reseller → End client  ←  you are here
```

## What end clients can do

End clients access BrandForge features through the reseller's branded portal:
- AI brand creation and brand builder
- Logo generator
- Web-to-print
- Social media kit
- Site builder (if enabled by the reseller)
- E-commerce (if enabled by the reseller)

## Credit consumption

End clients consume credits from their reseller's pool each time they use an AI-powered feature. The reseller sets any limits on their end clients' credit usage. The Super Admin sees total consumption platform-wide on the [Dashboard →](/dashboard).

## End client statuses

| Status | Meaning |
|---|---|
| `active` | Can log in and use the platform |
| `suspended` | Blocked by their reseller or Super Admin |
| `invited` | Invitation sent but account not yet activated |

## Related pages

- [Create an end client →](/end-clients/create-end-client)
- [Manage end clients →](/end-clients/manage-end-clients)
- [Client brand access →](/end-clients/client-brand-access)
- [Resellers →](/resellers)
