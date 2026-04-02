---
id: index
title: Brandings
sidebar_label: Overview
---

# Brandings

The Brandings section is where you configure the white-label visual identity for each reseller's BrandForge instance. Every reseller gets their own branding profile — logo, color palette, typography, custom domain, and email templates — so their end clients experience a fully branded platform with no BrandForge references visible.

:::tip Where is this in the UI?
Navigate to **GodMode → Brandings** in the left sidebar.
:::

## What a branding profile controls

| Element | Description |
|---|---|
| **Logo** | Primary logo shown in the navigation and email headers |
| **Favicon** | Browser tab icon |
| **Primary color** | Used for buttons, links, and key UI accents |
| **Secondary color** | Supporting accent color |
| **Font** | Heading and body font (Google Fonts or uploaded custom font) |
| **Custom domain** | The URL the reseller's portal is served on |
| **Email sender name** | The "From" name on all platform emails |
| **Email sender address** | The "From" address (requires DNS verification) |
| **Email templates** | Customizable templates for welcome, invite, and notification emails |
| **Login page** | Custom headline, subheadline, and background image for the login screen |

## Branding inheritance

Branding profiles are applied at the instance level. An instance inherits its branding from the profile assigned to it in GodMode. If no custom profile is assigned, the default BrandForge branding is used.

:::info Reseller self-service branding
Resellers can update their own branding from their reseller dashboard within the limits you allow. If you want to lock specific elements (e.g. prevent resellers from changing the font), this can be configured in the branding profile settings.
:::

## Related pages

- [Create a brand →](/docs/brandings/create-brand)
- [Logo, colors & fonts →](/docs/brandings/logo-colors-fonts)
- [Custom domain setup →](/docs/brandings/custom-domain)
- [Email templates →](/docs/brandings/email-templates)
