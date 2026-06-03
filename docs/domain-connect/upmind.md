---
id: upmind
title: Connect Upmind
sidebar_label: Upmind
sidebar_position: 4
---

# Connect Upmind

This page covers connecting Upmind to BrandForge via Domain Connect. Upmind is
API-first: the admin area, client area, and widgets are all built on the same
public API, so everything Domain Connect needs is available through it.

## 1. Create API credentials

Upmind authenticates with OAuth-style API credentials issued from your account.

1. In the Upmind admin area, go to **Settings → API** (under your
   account/developer settings).
2. Create a new API client / token for BrandForge.
3. Note the credentials issued (client id / secret or token). Enter them into
   BrandForge.

:::note API base
Upmind's API is served from its own API host (for example
`https://api.upmind.io`). BrandForge targets this host with your credentials;
you don't need to expose your own admin URL for API calls.
:::

## 2. Set your brand / storefront

Upmind supports multiple brands and storefronts under one account, each with its
own branding and pricing.

1. Identify the brand (and storefront/order config) you want BrandForge to use.
2. Note its identifier and your store's order config URL, typically of the form
   `https://my.upmind.com/order/product`.
3. Enter the brand identifier into BrandForge so orders and pricing resolve
   against the right storefront.

## 3. Configure domain providers and TLDs

1. Go to **Host Control → Domain Names → Registrars**.
2. Add the domain provider(s) you use and enter their API credentials so Upmind
   can register and check availability.
3. Configure your TLDs and set prices, in each currency you offer. Upmind can
   sync TLD pricing from supported wholesalers.

## 4. Configure currencies

Set up each currency you want to offer with valid exchange rates, and make sure
your TLDs are priced in each. Upmind supports per-customer-group price lists if
you want differentiated pricing.

## 5. Activate a payment gateway

Add and activate at least one payment provider in your Upmind billing settings,
and note it so you can select it in BrandForge.

## 6. Enter your details into BrandForge

| BrandForge field | Value |
| --- | --- |
| API base | `https://api.upmind.io` (or your region's API host) |
| API credentials | From step 1 |
| Brand / storefront ID | From step 2 |
| Order config URL | e.g. `https://my.upmind.com/order/product` |
| Payment Method | Your active gateway |
| Login URL | Your Upmind client area URL |

Click **Test connection** in BrandForge. Because Upmind is API-first, the test
makes a read-only call (such as listing currencies or products) to confirm the
credentials and brand resolve correctly. Then place a test order and confirm it
appears in your Upmind admin area.

:::tip Inspecting the API
Since Upmind's own UI runs on the public API, you can open your browser's
network inspector on any Upmind page to see the exact API calls and shapes if
you need to debug a specific request.
:::

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Authentication error | Wrong/expired API credentials | Reissue in step 1 |
| Pricing or products empty | Wrong brand/storefront selected | Step 2 |
| No prices in a currency | TLD unpriced in that currency | Steps 3–4 |
| Order not provisioning | Domain provider credentials missing | Step 3 |
