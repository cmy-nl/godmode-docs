---
id: hostbill
title: Connect HostBill
sidebar_label: HostBill
sidebar_position: 5
---

# Connect HostBill

This page covers connecting HostBill to BrandForge via Domain Connect. You'll
need administrator access to your HostBill installation.

HostBill exposes a REST/JSON API where every request names a `call` (the action)
and is authenticated with an **API ID** and **API key**.

## 1. Create API credentials

1. In HostBill admin, go to **Settings → API**.
2. Generate a new **API ID** and **API key** for BrandForge.
3. Authorise the IP of the BrandForge server (shown in your BrandForge Domain
   Connect settings) so HostBill accepts its calls.
4. Copy the API ID and key into BrandForge.

A HostBill API request looks like:

```
POST https://your-hostbill.com/admin/api.php
  api_id=YOUR_API_ID
  api_key=YOUR_API_KEY
  call=getClientDomains
```

## 2. Confirm the API calls are permitted

HostBill lets you restrict which `call`s an API token may use. Make sure the
token you created can perform at least:

| Call | Used for |
| --- | --- |
| `getCurrencies` | Reading your currency list |
| `getDomainPricing` / domain lookup | Reading domain prices |
| `domainCheck` | Live availability checks |
| `addClient` | Creating new customers |
| `getClientDetails` | Recognising returning customers |
| `addOrder` / `addDomainOrder` | Creating the order |
| `getInvoice` | Checking payment status |

:::note
Exact call names can vary slightly across HostBill versions. If a call is
rejected as unknown or unauthorised, check **Settings → API** for the available
calls and permitted set on your token.
:::

## 3. Configure TLDs and pricing

1. Go to **Settings → Domains → TLD** (Domain Settings).
2. Add the TLDs you want to sell and set **Register**, **Transfer**, and
   **Renew** prices, in each currency you offer.
3. Attach each TLD to a domain registrar module so orders can be fulfilled.

## 4. Configure currencies

Under **Settings → Currencies**, add each currency and set exchange rates.
Ensure every TLD is priced in every currency you enable.

## 5. Activate a payment gateway

Activate at least one payment gateway under **Settings → Payment Gateways** and
note its identifier so you can select it in BrandForge.

## 6. Enter your details into BrandForge

| BrandForge field | Value |
| --- | --- |
| API URL | `https://your-hostbill.com/admin/api.php` |
| API ID | From step 1 |
| API Key | From step 1 |
| Payment Method | Your active gateway |
| Invoice URL | Your HostBill invoice URL |
| Login URL | Your HostBill client area URL |
| Default Nameservers | e.g. `ns1.your-hostbill.com`, `ns2.your-hostbill.com` |

Click **Test connection** in BrandForge (a read-only `getCurrencies` call), then
place a test order and confirm it appears under your HostBill orders and
invoices.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Authentication / access denied | Wrong API ID/key or IP not authorised | Step 1 |
| `Call not found` / not permitted | Call not allowed on the token | Step 2 |
| No prices appear | TLDs unpriced in that currency | Steps 3–4 |
| Order placed, domain never registers | Invoice unpaid or registrar not attached | Mark invoice paid; check step 3 |
