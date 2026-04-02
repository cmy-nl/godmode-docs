---
id: enable-disable
title: Enable or disable a service
sidebar_label: Enable / disable
---

# Enable or disable a service

## Platform-wide toggle

To enable or disable a service across the entire platform:

1. Go to **GodMode → Services**.
2. Find the service and toggle its platform status.
3. Confirm the change.

Disabling a service platform-wide immediately removes it from all instances, regardless of their individual settings.

## Per-instance toggle

To enable or disable a service for a specific reseller instance:

1. Go to **GodMode → Instances** and open the target instance.
2. Go to the **Services** tab.
3. Toggle the services you want to enable or disable for this instance.
4. Save changes.

Per-instance settings override the platform default — you can enable a service for one instance while it is disabled by default for others.

## Effect on end clients

When a service is disabled on an instance, end clients on that instance immediately lose access to it. Any in-progress jobs are completed but new requests are blocked. Existing generated assets (logos, print files) remain accessible.
