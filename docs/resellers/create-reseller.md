---
id: create-reseller
title: Create a reseller
sidebar_label: Create a reseller
---

# Create a reseller

## Prerequisites

Before creating a reseller, ensure you have:
- A license ready to assign (or create one during this flow). See [Licenses →](/licenses/issue-license)
- Credits to allocate from the Super Admin pool (or distributor pool)
- The reseller's company details and admin email

## Steps

1. Go to **GodMode → Resellers** and click **+ New reseller**.
2. Fill in **company details**:
   - Company name
   - Admin email (becomes the reseller's login)
   - Country and VAT number (optional)
3. Select or create a **package** to assign. The package determines which services and credit tier the reseller starts on.
4. Assign a **license**. You can select an existing unassigned license or issue a new one inline.
5. Configure the **instance** — subdomain or custom domain, region if applicable.
6. Click **Create reseller**. GodMode provisions the instance in the background.

## After creation

The reseller admin receives an invitation email. Instance provisioning typically takes under 2 minutes. Once provisioned, the instance status changes from `pending` to `active` on the Instances page.

:::tip WHMCS provisioning
If the reseller was provisioned via the WHMCS module, steps 1–6 happen automatically. You only need to manually create resellers for direct accounts. See [WHMCS integration →](/instances/whmcs-integration)
:::
