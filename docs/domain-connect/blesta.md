---
id: blesta
title: Connect Blesta
sidebar_label: Blesta
sidebar_position: 3
---

# Connect Blesta

This page covers connecting your Blesta installation to BrandForge via Domain
Connect. You'll need administrator access to your Blesta.

Blesta's API exposes its internal **model methods** (for example the `Domains`,
`Clients`, and `Currencies` models), and authenticates with a user and key sent
as request headers.

## 1. Create an API key

1. In Blesta, go to **Settings → System → API Access**.
2. Click **Add API Key**.
3. Give it a name (e.g. "BrandForge / Domain Connect").
4. Restrict it to the IP of the BrandForge server (shown in your BrandForge
   Domain Connect settings).
5. Save, then copy the **API User** and **API Key** into BrandForge.

Domain Connect authenticates using header-based auth:

```
BLESTA-API-USER: your_api_user
BLESTA-API-KEY:  your_api_key
```

:::note Authentication on your server
Blesta reads these from request headers. If your server strips Authorization
headers (common with PHP-FPM), set `CGIPassAuth On` in your `.htaccess` so the
credentials reach Blesta. This is a Blesta-side requirement documented in their
API guide.
:::

## 2. Note your company ID

If you run more than one Blesta company, Domain Connect needs to know which one
to use.

1. Go to **Settings → System → Companies**.
2. Click **Edit** on the company you're connecting and note the `id` in the URL.
3. Enter it into BrandForge (use `1` if you have a single company).

## 3. Configure TLDs and pricing

1. Go to **Packages → Domain Options → TLDs**.
2. Import or add the TLDs you want to sell, then **Edit** each to set your
   **Register**, **Transfer**, and **Renew** prices.
3. If you have more than one currency enabled, set a price per currency.
4. Set default nameservers per TLD if you want them auto-assigned.
5. Enable each TLD.

:::tip
Only enabled, priced TLDs are sellable. If an extension is "missing" in the
BrandForge flow, it usually has no price in the selected currency.
:::

## 4. Configure currencies

Go to **Settings → Company → Currencies**, add each currency, and set exchange
rates. Ensure every TLD is priced in every currency you enable.

## 5. Activate a payment gateway

1. Go to **Settings → Company → Payment Gateways**.
2. Install and activate at least one gateway (e.g. Stripe, PayPal).
3. Note how it's identified so you can select it in BrandForge.

## 6. Enter your details into BrandForge

| BrandForge field | Value |
| --- | --- |
| API URL | `https://your-blesta.com/api/` |
| API User | From step 1 |
| API Key | From step 1 |
| Company ID | From step 2 |
| Payment Method | Your active gateway |
| Login URL | Your Blesta client area URL |
| Default Nameservers | e.g. `ns1.your-blesta.com`, `ns2.your-blesta.com` |

Domain Connect calls model methods at `…/api/{model}/{method}.json`. For
example, a read-only connection test calls `…/api/companies/get.json`.

Click **Test connection**, then place a test order and confirm it appears under
your Blesta orders and invoices.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| 401 / authentication error | Wrong user/key, or headers stripped | Recheck step 1; set `CGIPassAuth On` |
| Connection refused from API | Server IP not authorised on the key | Add the BrandForge IP in step 1 |
| Wrong company's data | Company ID mismatch | Step 2 |
| No prices appear | TLDs unpriced/disabled in that currency | Steps 3–4 |
| API keys with special characters fail to save | Known Blesta quirk | Use a key without special characters |
