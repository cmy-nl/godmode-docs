---
id: index
title: Billing
sidebar_label: Overview
---

# Billing

The Billing section covers the credit model, invoicing, payment methods, and the financial flow between BrandForge, distributors, resellers, and end clients.

:::tip Where is this in the UI?
Navigate to **GodMode → Billing** in the left sidebar.
:::

## How the credit model works

BrandForge operates on a **credit-based** consumption model. Credits are the universal unit of platform usage — every AI-powered action consumes a defined number of credits.

The financial flow works in layers:

```
BrandForge (sells credits to) → Distributor
Distributor (allocates credits to) → Reseller
Reseller (provides credits to) → End client
End client (consumes credits through) → AI-powered actions
```

Each layer marks up credits to the layer below. BrandForge sets wholesale credit prices; distributors and resellers set their own retail prices independently.

## What the Billing section shows

| Section | Description |
|---|---|
| **Credit overview** | Platform-wide credit pool, allocated vs consumed |
| **Invoices** | All invoices issued to distributors and direct resellers |
| **Transactions** | Every credit top-up, allocation, and consumption event |
| **Payment methods** | Configured payment methods (Stripe, Mollie) |

## Forever pricing

BrandForge operates a **forever pricing commitment**: once a reseller is on a package, their per-credit wholesale price will never increase. This is a deliberate trust signal to avoid the pricing instability that hurt platforms like cPanel/WebPros.

New packages may be introduced for new customers, but existing package holders are grandfathered at their original pricing in perpetuity.

## Related pages

- [Credit model →](/docs/billing/credit-model)
- [Top up credits →](/docs/billing/top-up-credits)
- [Invoices →](/docs/billing/invoices)
- [Payment methods →](/docs/billing/payment-methods)
