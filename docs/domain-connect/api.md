---
id: api
title: Generic API
sidebar_label: API
sidebar_position: 6
---

# Generic API

If your billing platform isn't one of the natively supported systems
([WHMCS](./whmcs.md), [Blesta](./blesta.md), [Upmind](./upmind.md),
[HostBill](./hostbill.md)), you can still connect it to BrandForge by
implementing the Domain Connect **integration contract**.

Domain Connect needs five capabilities from your platform. As long as your API
can fulfil these, BrandForge can drive the full domain flow against it.

## The integration contract

| Capability | Purpose | Typical inputs | Expected output |
| --- | --- | --- | --- |
| **List currencies** | Build the currency switcher | – | Currencies with code, symbol, id |
| **Get TLD pricing** | Show live prices | currency | Per-TLD register/transfer/renew prices |
| **Check availability** | Validate before ordering | domain name | `available` / `unavailable` |
| **Resolve customer** | Find or create the buyer | email, or full details | customer id |
| **Create order** | Place order + raise invoice | customer id, domains, periods, payment method | order id, invoice id |

An optional sixth capability closes the loop after payment:

| Capability | Purpose | Inputs | Output |
| --- | --- | --- | --- |
| **Order/invoice status** | Confirm payment, trigger provisioning | invoice id (+ order id) | paid status; accepted status |

## Authentication

Domain Connect supports the common patterns; you configure which your platform
uses when you add it in BrandForge:

- **Key + secret** (sent as parameters or headers)
- **Bearer token / OAuth**
- **Basic auth** over HTTPS

All traffic must be over HTTPS. Credentials are stored encrypted in BrandForge
and never returned to the browser.

## Request and response shape

Domain Connect speaks JSON. A pricing response, for example, should resolve to a
map your adapter can read per TLD:

```json
{
  "currency": { "id": 1, "code": "EUR", "prefix": "€", "suffix": "" },
  "pricing": {
    "com": { "register": 9.99, "transfer": 9.99, "renew": 11.99 },
    "net": { "register": 11.50, "transfer": 11.50, "renew": 13.00 }
  }
}
```

An order request carries the resolved customer and the line items:

```json
{
  "clientid": 123,
  "currencyid": 1,
  "domains": [
    { "domain": "example.com", "type": "register", "years": 1 },
    { "domain": "example.net", "type": "register", "years": 1 }
  ],
  "paymentmethod": "your_gateway"
}
```

And the order response returns the identifiers BrandForge needs to send the
customer to payment:

```json
{
  "success": true,
  "orderid": 45,
  "invoiceid": 678,
  "invoiceurl": "https://your-billing.com/viewinvoice.php?id=678"
}
```

## Server-side expectations

For a safe checkout, your adapter (or your platform) should enforce these
server-side, never trusting values from the browser:

- **Re-check availability** at order time, not just at search time.
- **Re-validate pricing** against your live prices, and lock the agreed price
  onto the order so the invoice matches what the customer saw.
- **Be idempotent**: the same submission must not create two orders. Domain
  Connect sends an idempotency key with each attempt; honour it.
- **Collect EPP/auth codes** for transfers.

## Settings BrandForge stores per connection

These are the values you provide when adding a custom connection, mirroring the
native platforms:

- API base URL
- Credentials (key/secret, token, or user/password)
- Payment method identifier
- Invoice URL pattern
- Login URL (for returning customers)
- Default nameservers
- Behaviour toggles (price override, login gate)

## Building an adapter

A custom connection is essentially a small adapter that maps the six
capabilities above onto your platform's own API calls. Each native integration
(WHMCS, Blesta, Upmind, HostBill) is one such adapter. If you'd like help
building one for your platform, contact BrandForge support with your API
documentation and we'll guide the mapping.

:::tip
Start with the read-only capabilities (currencies, pricing, availability) and
get **Test connection** passing before wiring up order creation. It isolates
authentication and connectivity issues from order-logic issues.
:::
