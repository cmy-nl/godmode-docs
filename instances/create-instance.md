---
id: create-instance
title: Create an instance
sidebar_label: Create an instance
---

# Create an instance

Instances are typically created automatically when you create a reseller. This page covers manual instance creation and re-provisioning.

## Manual creation

1. Go to **GodMode → Instances → + New instance**.
2. Select the **reseller** this instance belongs to.
3. Choose the **subdomain** or enter a **custom domain**.
4. Assign a **license key**. An instance without a valid license will not activate.
5. Select the **Docker image tag** to deploy (defaults to `latest-stable`).
6. Click **Provision instance**.

Provisioning runs asynchronously via the background job queue. Monitor progress on the instance detail page.

## Custom domain setup

If using a custom domain instead of a subdomain:
1. The reseller points their DNS A record to the BrandForge server IP.
2. Enter the domain in the instance configuration.
3. GodMode issues a TLS certificate via Let's Encrypt automatically.

Allow up to 5 minutes for certificate issuance.
