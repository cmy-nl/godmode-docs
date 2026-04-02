---
id: openai-setup
title: OpenAI setup
sidebar_label: OpenAI
---

# OpenAI setup

OpenAI powers two categories in BrandForge: large language model (GPT-4o for copywriting and brand naming) and image generation (DALL-E 3 for logo concepts).

## Getting an API key

1. Log in to [platform.openai.com](https://platform.openai.com).
2. Go to **API keys → Create new secret key**.
3. Name the key (e.g. `brandforge-production`) and copy it immediately — it is only shown once.

## Configuring in GodMode

1. Go to **GodMode → API providers → + Add provider**.
2. Select **OpenAI** as the provider type.
3. Paste your API key.
4. Select the service category: **Large language model** and/or **Image generation**.
5. Save. GodMode validates the key with a test call.

## Recommended model settings

| Use case | Model |
|---|---|
| Brand naming and copywriting | `gpt-4o` |
| Logo prompt generation | `gpt-4o` |
| Image generation | `dall-e-3` |

Model selection is configured in **GodMode → Services → [service] → Configure → AI model**.
