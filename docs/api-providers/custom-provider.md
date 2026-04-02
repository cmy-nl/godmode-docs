---
id: custom-provider
title: Custom provider
sidebar_label: Custom provider
---

# Custom provider

BrandForge supports custom API providers that expose an OpenAI-compatible API interface. This enables use of self-hosted models, regional providers, or any API that follows the OpenAI messages format.

## Requirements

The custom provider must expose:
- A `/v1/chat/completions` endpoint (for LLM category)
- A `/v1/images/generations` endpoint (for image generation category)
- Bearer token authentication via `Authorization: Bearer {api_key}`

## Configuration

1. Go to **GodMode → API providers → + Add provider**.
2. Select **Custom (OpenAI-compatible)** as the provider type.
3. Enter the **base URL** of your API (e.g. `https://api.yourprovider.com`).
4. Enter the **API key**.
5. Enter the **model name** to use (e.g. `llama-3-70b`).
6. Select the service category.
7. Save.
