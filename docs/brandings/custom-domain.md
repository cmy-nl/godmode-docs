---
id: custom-domain
title: Custom domain setup
sidebar_label: Custom domain
---

# Custom domain setup

Custom domains allow the reseller's BrandForge instance to be served at their own URL (e.g. `brands.resellerdomain.com`) instead of the default BrandForge subdomain.

## DNS setup

The reseller needs to add the following DNS record at their domain registrar:

```
Type: A
Name: brands (or your chosen subdomain)
Value: [BrandForge server IP — provided in GodMode → Settings → Integrations]
TTL: 300
```

Or, if using a CNAME (not recommended for apex domains):

```
Type: CNAME
Name: brands
Value: proxy.brandforge.software
TTL: 300
```

## Configuring in GodMode

1. Open the branding profile or the instance detail page.
2. Enter the full custom domain (e.g. `brands.resellerdomain.com`) in the **Custom domain** field.
3. Click **Verify domain**. GodMode checks that the DNS record resolves correctly.
4. Once verified, TLS certificate issuance begins automatically via Let's Encrypt.
5. The domain is live within 5 minutes of successful DNS propagation.

## Troubleshooting

- **DNS not resolving** — DNS propagation can take up to 48 hours. Use a tool like [dnschecker.org](https://dnschecker.org) to verify propagation.
- **Certificate error** — If the TLS certificate fails to issue, check that the domain resolves correctly and retry from the domain settings page.
