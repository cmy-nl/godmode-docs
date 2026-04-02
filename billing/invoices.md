---
id: invoices
title: Invoices
sidebar_label: Invoices
---

# Invoices

GodMode generates invoices for all credit purchases and package subscription renewals. Invoices are issued to distributors and direct resellers (not to end clients).

## Invoice list

Go to **GodMode → Billing → Invoices** to see all invoices. Filter by date range, distributor, reseller, or payment status.

## Invoice statuses

| Status | Meaning |
|---|---|
| `draft` | Created but not yet sent |
| `open` | Sent, awaiting payment |
| `paid` | Payment confirmed |
| `overdue` | Payment not received by due date |
| `void` | Cancelled invoice |

## Automatic invoicing

When WHMCS automation is active, invoices are generated automatically at each billing cycle based on WHMCS order data. Manual top-ups generate invoices immediately upon credit addition.

## Downloading invoices

Click any invoice to open the detail view. Click **Download PDF** to get the invoice as a formatted PDF including your company details and VAT information.
