---
id: docker-deployment
title: Docker deployment
sidebar_label: Docker deployment
---

# Docker deployment

BrandForge instances are deployed as Docker containers via GitHub Container Registry (GHCR). GodMode handles deployment orchestration automatically, but this page documents the underlying setup for reference and troubleshooting.

## Container registry

Images are stored at `ghcr.io/brandforge/platform`. Available tags:
- `latest-stable` — recommended for production
- `edge` — latest development build (unstable)
- `v{version}` — pinned release tags

## Environment variables

Each instance container requires the following environment variables (set automatically by GodMode during provisioning):

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `SECRET_KEY_BASE` | Rails secret key |
| `GODMODE_LICENSE_KEY` | License key for this instance |
| `INSTANCE_DOMAIN` | The custom domain or subdomain |

## CI/CD

Deployments are triggered from GodMode via the Docker API. Rolling updates are used to minimize downtime during upgrades.
