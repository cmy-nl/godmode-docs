---
id: integrations
title: Integrations
sidebar_label: Integrations
---

# Integrations

The Integrations settings page is where you configure external service connections that power GodMode's automation and billing.

## GodMode REST API

The GodMode REST API key is used by the WHMCS module and any external systems that need to call GodMode programmatically.

To generate or rotate the API key:
1. Go to **Settings → Integrations → GodMode API**.
2. Click **Generate new key**. The current key is invalidated immediately.
3. Copy and store the key securely — it is only shown once.
4. Update the key in your WHMCS module configuration. See [WHMCS integration →](/instances/whmcs-integration).

## WHMCS

| Field | Description |
|---|---|
| WHMCS URL | The base URL of your WHMCS installation |
| WHMCS API identifier | The API credentials for GodMode to call WHMCS |
| WHMCS API secret | The API secret |

## Stripe

See [Payment methods → Stripe →](/billing/payment-methods).

## Mollie

See [Payment methods → Mollie →](/billing/payment-methods).

## Upmind

Upmind integration follows the same pattern as WHMCS — GodMode exposes a provisioning API and Upmind calls it on order lifecycle events. Enter the Upmind API credentials and configure the webhook endpoint in Upmind.
