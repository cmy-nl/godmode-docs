---
id: service-configuration
title: Service configuration
sidebar_label: Configuration
---

# Service configuration

Each service has configuration options accessible from **GodMode → Services → [service name] → Configure**.

## Common settings across all services

- **Credit cost per action** — the number of credits deducted per use
- **Max concurrent jobs** — the number of simultaneous AI generation jobs allowed platform-wide for this service
- **Default output quality** — resolution and file format settings for generated assets

## Brand Builder specific

- **Questionnaire fields** — add, remove, or reorder the brand questionnaire steps
- **AI model** — select which AI provider and model handles brand generation (configured via [API Providers →](/api-providers))
- **Output languages** — languages available for brand name and copy generation

## Web-to-Print specific

- **Supported document types** — enable or disable specific collateral types (business cards, flyers, etc.)
- **Paper sizes** — configure supported paper sizes for each document type
- **Bleed settings** — set default bleed and safe zone values for print output

## Domain Registrar specific

- **Registrar API** — connect to your domain registrar API (OpenSRS, Enom, Hexonet, etc.)
- **Supported TLDs** — the list of TLDs available for registration
- **Markup** — the margin applied on top of registrar cost prices
