---
id: payment-methods
title: Payment methods
sidebar_label: Payment methods
---

# Payment methods

BrandForge supports two payment processors: **Stripe** and **Mollie**.

## Stripe

Preferred for international payments. Supports credit cards, SEPA Direct Debit, and most major payment methods.

### Setup
1. Go to **GodMode → Settings → Integrations → Stripe**.
2. Enter your Stripe **Publishable key** and **Secret key**.
3. Configure the **Webhook endpoint** in your Stripe dashboard pointing to `https://[your-godmode-domain]/webhooks/stripe`.
4. Enter the **Webhook signing secret**.
5. Save and test.

## Mollie

Preferred for Dutch and European markets. Supports iDEAL, credit cards, SEPA, Bancontact, and more.

### Setup
1. Go to **GodMode → Settings → Integrations → Mollie**.
2. Enter your Mollie **API key** (use the Live key for production, Test key for testing).
3. Configure the Mollie webhook in the Mollie dashboard pointing to `https://[your-godmode-domain]/webhooks/mollie`.
4. Save and test.

## Manual payment (bank transfer)

For resellers on manual invoicing, select **Bank transfer** as the payment method on the invoice. Credits are added manually by a Super Admin after confirming receipt of payment.
