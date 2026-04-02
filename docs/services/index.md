---
id: index
title: Services
sidebar_label: Overview
---

# Services

Services are the individual BrandForge product modules that can be enabled or disabled per reseller instance. Not every reseller needs every module — the Services section lets you control exactly which features are available on each instance.

:::tip Where is this in the UI?
Navigate to **GodMode → Services** in the left sidebar for platform-wide service configuration. Per-instance service settings are in **Instances → [instance] → Services**.
:::

## Available services

| Service | Description |
|---|---|
| **Brand Builder** | AI-powered brand identity creation — the core product |
| **Logo Generator** | Standalone AI logo generation with brand mockups |
| **Web-to-Print** | Print-ready file generation for business cards, flyers, banners |
| **Social Media Kit** | AI-generated social media graphics and templates |
| **Site Builder** | AI-assisted website builder for end clients |
| **E-commerce** | Headless e-commerce storefront for end clients |
| **Domain Registrar** | Domain search and registration integration |

## Service dependencies

Some services depend on others:

- **Web-to-Print** requires **Brand Builder** to be enabled (it uses the brand assets)
- **Social Media Kit** requires **Brand Builder**
- **E-commerce** requires **Site Builder**

GodMode will warn you if you attempt to disable a service that another enabled service depends on.

## Credit consumption per service

Each service has a credit cost per action, configured at the platform level in [Settings →](/settings/general). Resellers and end clients see the credit cost before confirming each action.

## Related pages

- [Available services →](/services/available-services)
- [Enable or disable a service →](/services/enable-disable)
- [Service configuration →](/services/service-configuration)
- [Packages →](/packages) — packages control which services are included per reseller tier
