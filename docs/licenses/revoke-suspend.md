---
id: revoke-suspend
title: Revoke or suspend a license
sidebar_label: Revoke / suspend
---

# Revoke or suspend a license

## Suspending

Suspending a license temporarily deactivates it without permanent cancellation. The bound instance enters a grace period (default 48 hours) before access is blocked.

**When to suspend:** payment failure, account review, reseller request for a temporary pause.

1. Go to **GodMode → Licenses** and open the license.
2. Click **Suspend license**.
3. Optionally add a reason note (visible in the audit log).

To reactivate, click **Reactivate** on the same license detail page.

## Revoking

Revoking permanently cancels a license. The instance it is bound to will go offline after the grace period. Revocation cannot be undone — a new license must be issued if the reseller is reactivated.

**When to revoke:** chargeback, fraud, account closure, end of contract.

1. Open the license detail page.
2. Click **Revoke license**.
3. Confirm the action. Type the license key to confirm (this prevents accidental revocation).

:::danger
Revoking a license is irreversible. If in doubt, use **Suspend** instead.
:::
