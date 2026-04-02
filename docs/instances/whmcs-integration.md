---
id: whmcs-integration
title: WHMCS integration
sidebar_label: WHMCS integration
---

# WHMCS integration

The BrandForge WHMCS provisioning module automates reseller instance creation and lifecycle management directly from your WHMCS installation.

## What it automates

| WHMCS event | GodMode action |
|---|---|
| New order placed | Create reseller + provision instance |
| Order activated | Issue license, activate instance |
| Order suspended | Suspend instance |
| Order terminated | Terminate instance |
| Order unsuspended | Reactivate instance |

## Installation

1. Download the module from your BrandForge partner portal.
2. Upload the module folder to `your-whmcs/modules/servers/brandforge/`.
3. In WHMCS, go to **System settings → Products/Services → Servers → Add new server**.
4. Select **BrandForge** as the module type.
5. Enter your GodMode API URL and API key (found in **GodMode → Settings → Integrations**).
6. Test the connection and save.

## Creating a WHMCS product

1. Go to **Products/Services → Create new product**.
2. Assign the **BrandForge server** you configured above.
3. Set the module settings — map WHMCS package fields to BrandForge packages.
4. Save and publish.

See [API providers →](/api-providers) and [Settings → Integrations →](/settings/integrations) for API key management.
