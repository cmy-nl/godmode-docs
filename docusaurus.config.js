// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GodMode Documentation',
  tagline: 'BrandForge Super Admin & Reseller Platform',
  favicon: 'img/favicon.ico',

  url: 'https://docs.brandforge.software',
  baseUrl: '/',

  organizationName: 'brandforge',
  projectName: 'godmode-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/brandforge/godmode-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GodMode',
        logo: {
          alt: 'BrandForge GodMode',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'godmodeSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://brandforge.software',
            label: 'BrandForge',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GodMode',
            items: [
              { label: 'Dashboard', to: '/dashboard' },
              { label: 'Instances', to: '/instances' },
              { label: 'Licenses', to: '/licenses' },
            ],
          },
          {
            title: 'Partner resources',
            items: [
              { label: 'Distributors', to: '/distributors' },
              { label: 'Resellers', to: '/resellers' },
              { label: 'WHMCS Integration', to: '/instances/whmcs-integration' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'BrandForge', href: 'https://brandforge.software' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BrandForge.com B.V. — BrandForge`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['ruby', 'bash', 'json', 'php'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
