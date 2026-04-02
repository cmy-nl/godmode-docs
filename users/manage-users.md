---
id: manage-users
title: Manage users
sidebar_label: Manage users
---

# Manage users

## User list

The user list shows all users with their role, associated account (distributor or reseller), last login date, and 2FA status.

## Editing a user

Click a user to open their detail view. You can:
- Change their **role**
- Change their **associated account** (distributor or reseller)
- **Force password reset** — the user receives a reset email on their next login attempt
- **Revoke 2FA** — removes their 2FA setup (useful if they lose access to their authenticator app)

## Deactivating a user

Click **Deactivate** on the user detail page. The user is immediately logged out and cannot log back in. Their account and history are preserved. Deactivated users appear in the user list with a `deactivated` status and can be reactivated at any time.

## Deleting a user

User accounts cannot be permanently deleted to preserve audit log integrity. Use **Deactivate** instead.
