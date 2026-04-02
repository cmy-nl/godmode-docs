---
id: email-templates
title: Email templates
sidebar_label: Email templates
---

# Email templates

BrandForge sends transactional emails on behalf of the reseller's brand. Each email type has a customizable template.

## Available templates

| Template | Trigger |
|---|---|
| **Welcome email** | Sent when a new end client account is created |
| **Invitation email** | Sent when a user is invited to the platform |
| **Password reset** | Sent when a user requests a password reset |
| **Credit low warning** | Sent when a reseller's credit balance drops below a threshold |
| **License expiry reminder** | Sent 30 days and 7 days before license expiry |

## Template variables

Templates support the following variables, which are replaced with actual values at send time:

| Variable | Description |
|---|---|
| `{{first_name}}` | Recipient's first name |
| `{{company_name}}` | Reseller's company name |
| `{{login_url}}` | Link to the reseller portal login page |
| `{{support_email}}` | The reseller's configured support email |

## Email sender configuration

To use a custom sender address, the reseller's domain must have SPF and DKIM records configured. GodMode provides the required DNS values in the branding settings after a custom sender address is entered.
