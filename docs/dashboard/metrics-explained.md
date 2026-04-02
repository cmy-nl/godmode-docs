---
id: metrics-explained
title: Metrics explained
sidebar_label: Metrics explained
---

# Metrics explained

This page covers what each dashboard metric represents and how it is calculated.

## Active instances
The count of instances in a `running` state with a valid, non-expired license attached. Instances in `provisioning`, `suspended`, or `error` state are excluded from this count but shown separately in the instance health panel.

## Active licenses
Licenses with status `valid`. Suspended licenses (manually paused) and expired licenses (past the end date) appear in their own counters below the main card.

## Credits consumed (30d)
The sum of all credits deducted across every reseller instance in the past 30 rolling days. This includes AI Brand Setup fees, credit pack usage, and any manual adjustments.

## Total resellers
All reseller accounts regardless of status. Active and inactive resellers are counted together; use the Resellers section to filter by status.
