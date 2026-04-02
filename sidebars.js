/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  godmodeSidebar: [
    {
      type: 'doc',
      id: 'getting-started/index',
      label: '👋 Getting started',
    },
    {
      type: 'category',
      label: '📊 Dashboard',
      collapsed: false,
      link: { type: 'doc', id: 'dashboard/index' },
      items: [
        'dashboard/metrics-explained',
        'dashboard/activity-feed',
        'dashboard/quick-actions',
      ],
    },
    {
      type: 'category',
      label: '🏢 Distributors',
      link: { type: 'doc', id: 'distributors/index' },
      items: [
        'distributors/create-distributor',
        'distributors/manage-distributors',
        'distributors/distributor-permissions',
      ],
    },
    {
      type: 'category',
      label: '🤝 Resellers',
      link: { type: 'doc', id: 'resellers/index' },
      items: [
        'resellers/create-reseller',
        'resellers/manage-resellers',
        'resellers/reseller-dashboard-overview',
        'resellers/reseller-permissions',
      ],
    },
    {
      type: 'category',
      label: '👤 End clients',
      link: { type: 'doc', id: 'end-clients/index' },
      items: [
        'end-clients/create-end-client',
        'end-clients/manage-end-clients',
        'end-clients/client-brand-access',
      ],
    },
    {
      type: 'category',
      label: '📦 Packages',
      link: { type: 'doc', id: 'packages/index' },
      items: [
        'packages/create-package',
        'packages/credit-tiers',
        'packages/volume-discounts',
      ],
    },
    {
      type: 'category',
      label: '🖥️ Instances',
      link: { type: 'doc', id: 'instances/index' },
      items: [
        'instances/create-instance',
        'instances/instance-configuration',
        'instances/whmcs-integration',
        'instances/docker-deployment',
      ],
    },
    {
      type: 'category',
      label: '🔑 Licenses',
      link: { type: 'doc', id: 'licenses/index' },
      items: [
        'licenses/issue-license',
        'licenses/license-types',
        'licenses/revoke-suspend',
      ],
    },
    {
      type: 'category',
      label: '📋 Audit logs',
      link: { type: 'doc', id: 'audit-logs/index' },
      items: [
        'audit-logs/reading-logs',
        'audit-logs/filter-export',
        'audit-logs/log-retention',
      ],
    },
    {
      type: 'category',
      label: '🎨 Brandings',
      link: { type: 'doc', id: 'brandings/index' },
      items: [
        'brandings/create-brand',
        'brandings/logo-colors-fonts',
        'brandings/custom-domain',
        'brandings/email-templates',
      ],
    },
    {
      type: 'category',
      label: '👥 Users',
      link: { type: 'doc', id: 'users/index' },
      items: [
        'users/invite-user',
        'users/roles-permissions',
        'users/manage-users',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Services',
      link: { type: 'doc', id: 'services/index' },
      items: [
        'services/available-services',
        'services/enable-disable',
        'services/service-configuration',
      ],
    },
    {
      type: 'category',
      label: '🔌 API providers',
      link: { type: 'doc', id: 'api-providers/index' },
      items: [
        'api-providers/configure-provider',
        'api-providers/openai-setup',
        'api-providers/anthropic-setup',
        'api-providers/custom-provider',
      ],
    },
    {
      type: 'category',
      label: '💳 Billing',
      link: { type: 'doc', id: 'billing/index' },
      items: [
        'billing/credit-model',
        'billing/top-up-credits',
        'billing/invoices',
        'billing/payment-methods',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Settings',
      link: { type: 'doc', id: 'settings/index' },
      items: [
        'settings/general',
        'settings/security',
        'settings/notifications',
        'settings/integrations',
      ],
    },
  ],
};

module.exports = sidebars;
