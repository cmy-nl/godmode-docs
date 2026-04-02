---
id: index
title: API providers
sidebar_label: Overview
---

# API providers

API providers are the external AI and service APIs that power BrandForge's generative features. GodMode centralizes all provider credentials so resellers never need to manage API keys themselves — they inherit the platform's configured providers.

:::tip Where is this in the UI?
Navigate to **GodMode → API providers** in the left sidebar.
:::

## Why this matters

BrandForge's AI services (logo generation, brand builder, copywriting, image generation) call external APIs under the hood. The API providers section is where you:

- Store and rotate API keys securely
- Switch between providers (e.g. move image generation from one provider to another)
- Monitor API usage and costs per provider
- Configure fallback providers for resilience

## Supported provider categories

| Category | What it powers | Supported providers |
|---|---|---|
| **Large language model** | Brand naming, copywriting, brand voice | Anthropic Claude, OpenAI GPT |
| **Image generation** | Logo concepts, brand mockups, social graphics | OpenAI DALL-E, Stability AI, Replicate |
| **Email delivery** | All transactional emails | SendGrid, Postmark, Mailgun |
| **Domain registrar** | Domain search and registration | OpenSRS, Enom, Hexonet, WHMCS |
| **Payment** | Credit top-up and billing | Stripe, Mollie |

## Security

API keys are encrypted at rest using AES-256. They are never exposed in the GodMode UI after initial entry — only masked values are shown. Keys are injected into instance containers at runtime via environment variables.

## Related pages

- [Configure a provider →](/docs/api-providers/configure-provider)
- [OpenAI setup →](/docs/api-providers/openai-setup)
- [Anthropic setup →](/docs/api-providers/anthropic-setup)
- [Custom provider →](/docs/api-providers/custom-provider)
