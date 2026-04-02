---
id: notifications
title: Notification settings
sidebar_label: Notifications
---

# Notification settings

Configure when GodMode sends alerts and how they are delivered.

## Alert types

| Alert | Default trigger | Recipients |
|---|---|---|
| License expiry warning | 30 days before expiry | Reseller admin + Super Admin |
| License expiry final warning | 7 days before expiry | Reseller admin + Super Admin |
| License expired | On expiry | Super Admin |
| Low credit balance | Below 10% of monthly allocation | Reseller admin |
| Instance provisioning error | On error event | Super Admin |
| Instance health check failure | After 3 consecutive failures | Super Admin |
| New reseller signup | On creation | Super Admin |

## Delivery channels

### Email
All alerts are delivered by email by default using the configured email API provider. See [API Providers →](/api-providers).

### Slack webhook
Add a Slack incoming webhook URL to receive alerts in a Slack channel. Enter the webhook URL in the Slack field and click **Test** to verify delivery.

### Custom webhook
Enter a custom HTTPS endpoint to receive alert payloads as JSON POST requests. Useful for connecting GodMode alerts to your own monitoring or ticketing system.
