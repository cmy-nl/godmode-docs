---
id: issue-license
title: Issue a license
sidebar_label: Issue a license
---

# Issue a license

## Manual issuance

1. Go to **GodMode → Licenses → + New license**.
2. Select the **license type** (Monthly, Annual, Lifetime, or Trial).
3. Set the **start date** and **end date** (not applicable for Lifetime licenses).
4. Optionally select the **reseller** to bind it to immediately. You can also leave it unassigned and bind it later during instance creation.
5. Click **Issue license**.

GodMode generates a unique license key and records it in the license list.

## Automated issuance via WHMCS

When a WHMCS order is activated, the provisioning module calls the GodMode API to issue a license automatically and bind it to the newly created instance. No manual steps are required. See [WHMCS integration →](/instances/whmcs-integration).

## Binding an unassigned license

1. Go to **GodMode → Licenses** and find the unassigned license.
2. Click **Bind to instance**.
3. Select the target instance from the dropdown.
4. Confirm. The license key is injected into the instance and takes effect within 60 seconds.
