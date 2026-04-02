---
id: configure-provider
title: Configure a provider
sidebar_label: Configure a provider
---

# Configure a provider

1. Go to **GodMode → API providers**.
2. Click **+ Add provider** or click an existing provider to edit it.
3. Select the **provider type** from the dropdown.
4. Enter the **API key** (and any secondary keys or secrets required by that provider).
5. Select which **service** this provider handles (LLM, image generation, email, etc.).
6. Optionally set this as the **default provider** for its category — the default is used when no specific provider is assigned to a service.
7. Click **Save**.

GodMode validates the API key immediately by making a lightweight test call. If validation fails, the key is not saved.

## Setting a fallback provider

For resilience, configure a fallback provider for each category:

1. Open the primary provider.
2. In the **Fallback** field, select the backup provider.
3. Save.

If the primary provider returns an error or rate limit response, BrandForge automatically retries using the fallback provider.
