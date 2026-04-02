---
id: filter-export
title: Filter and export
sidebar_label: Filter and export
---

# Filter and export

## Filtering

Use the filter panel to narrow audit log results:

- **Date range** — select a start and end date
- **Actor** — filter by a specific user or by `system`
- **Action type** — filter by event category (authentication, billing, etc.)
- **Entity type** — filter by the type of object affected
- **Reseller** — filter events related to a specific reseller

Multiple filters can be combined. The filtered view updates in real time.

## Exporting

1. Apply the filters you want.
2. Click **Export** in the top right corner of the log list.
3. Choose format: **CSV** or **JSON**.
4. The export is generated and downloaded immediately for up to 10,000 records. For larger exports, a background job runs and you receive an email with a download link.

Export files include all visible columns. Sensitive fields are redacted in exports, the same as in the UI.
