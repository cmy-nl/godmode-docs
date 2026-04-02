---
id: instance-configuration
title: Instance configuration
sidebar_label: Configuration
---

# Instance configuration

From the instance detail view, you can adjust the following settings after provisioning:

## General settings
- **Custom domain** — change the domain or subdomain
- **Docker image tag** — upgrade or rollback the instance to a specific release
- **Maintenance mode** — puts the reseller portal into a maintenance page without terminating the instance

## Performance settings
- **Worker concurrency** — number of Solid Queue workers for background AI jobs
- **Redis connection** — advanced: override the Redis URL if using a dedicated Redis instance

## Danger zone
- **Suspend instance** — pauses all access without deleting data
- **Terminate instance** — permanently deletes the instance and all associated data. This action cannot be undone.
