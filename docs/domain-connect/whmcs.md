---
id: whmcs
title: Connect WHMCS
sidebar_label: WHMCS
sidebar_position: 2
---

# Connect WHMCS

This page walks you through connecting your WHMCS installation to BrandForge via
Domain Connect. It takes about 15 minutes and requires administrator access to
your WHMCS.

## 1. Create an API credential

Domain Connect uses an API identifier and secret rather than your admin
password, so access is scoped and revocable.

1. In WHMCS, go to **Configuration → System Settings → API Credentials**.
2. Click **Generate New API Credential**.
3. Choose (or create) an **API Role** with the permissions in
   [step 2](#2-grant-the-required-permissions).
4. Click **Generate**.
5. Copy the **Identifier** and the **Secret** into BrandForge. The secret is
   shown only once; if you lose it, delete the credential and create a new one.

## 2. Grant the required permissions

Edit the API role (**Configuration → System Settings → Administrator Roles**)
and tick these under **API Access**:

| Action | Used for |
| --- | --- |
| `GetCurrencies` | Reading your currency list |
| `GetTLDPricing` | Reading your domain prices |
| `DomainWhois` | Live availability checks |
| `AddClient` | Creating new customers |
| `GetClientsDetails` | Recognising returning customers |
| `ResetPassword` | Password reset for returning customers |
| `AddOrder` | Creating the order |
| `AcceptOrder` | Accepting paid orders for provisioning |
| `GetInvoice` | Checking payment status |

:::tip
Create a dedicated role (e.g. "BrandForge / Domain Connect") with only these
permissions to keep the integration tightly scoped.
:::

## 3. Whitelist the BrandForge server

WHMCS rejects API calls from unknown IPs.

1. Go to **Configuration → System Settings → General Settings → Security**.
2. Under **API IP Access Restriction**, add the BrandForge server IP shown in
   your BrandForge Domain Connect settings.
3. Save.

:::caution Invalid IP error
If you see `Invalid IP …`, this step is the cause. Add the exact IP BrandForge
shows you. If more than one is listed, add them all, one per line.
:::

## 4. Configure TLDs and pricing

Customers only see extensions you've priced.

1. Go to **Configuration → System Settings → Domain Pricing**.
2. For each TLD: set **Register**, **Transfer**, and **Renew** prices, in **each
   currency** you offer, and mark it available for registration.
3. Assign each TLD to a registrar under **Domain Registrars**.

## 5. Configure currencies

Go to **Configuration → System Settings → Currencies**, add each currency, and
set exchange rates. Make sure every TLD has a price in every currency.

## 6. Activate a payment gateway

1. Go to **Configuration → System Settings → Payment Gateways**.
2. Activate at least one gateway.
3. Note its **system name** in lowercase (e.g. `banktransfer`, `stripe`,
   `paypal`) and enter it into BrandForge.

:::caution Invalid Payment Method
If BrandForge reports `Invalid Payment Method`, the name doesn't match an active
gateway. The error lists the valid names.
:::

## 7. (Optional) EU VAT

To make customer VAT numbers trigger reverse charge, activate the **EU VAT
Addon** under **Configuration → System Settings → Addon Modules** and configure
your home country and rates.

## 8. Enter your details into BrandForge

| BrandForge field | Value |
| --- | --- |
| API URL | `https://your-whmcs.com/includes/api.php` |
| API Identifier | From step 1 |
| API Secret | From step 1 |
| Payment Method | Gateway system name from step 6 |
| Invoice URL | `https://your-whmcs.com/viewinvoice.php?id=` |
| Login URL | `https://your-whmcs.com/clientarea.php` |
| Default Nameservers | e.g. `ns1.your-whmcs.com`, `ns2.your-whmcs.com` |

Click **Test connection**, then place a test order and confirm it appears under
**Orders** and **Billing → Invoices** in WHMCS.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| `Invalid IP …` | Server not whitelisted | Step 3 |
| `Invalid Payment Method` | Wrong/inactive gateway | Step 6 |
| Authentication failed | Wrong identifier/secret | Step 1 |
| No prices appear | TLDs unpriced in that currency | Steps 4–5 |
| Order placed, domain never registers | Invoice unpaid or order not accepted | Mark invoice paid in WHMCS |
