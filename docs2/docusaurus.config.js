// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Upscaler.js',
  tagline: 'Upscale images with Javascript',
  url: 'https://upscalerjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thekevinscott',
  projectName: 'upscalerjs',

  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['../packages/upscalerjs/src/index.ts'],
        tsconfig: '../packages/upscalerjs/tsconfig.json',
        watch: process.env.TYPEDOC_WATCH,
        out: 'api',
        readme: 'none',
        sidebar: {
          categoryLabel: 'API',
          position: 3,
          fullNames: true,
        },
      },
    ],

  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/thekevinscott/upscaler',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
        hideOnScroll: true,
        title: 'Upscaler.js',
        logo: {
          alt: 'Upscaler.js Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'demo',
            label: 'Demo',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'models',
            label: 'Models',
            position: 'left',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {
            to: 'support',
            label: 'Support',
            position: 'left',
          },
          {
            href: 'https://npmjs.com/package/upscaler',
            label: 'npm',
            'aria-label': 'Upscaler.js NPM package',
            position: 'right',
          },
          {
            href: 'https://github.com/thekevinscott/upscalerjs',
            'aria-label': 'Upscaler.js GitHub repository',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
      },
    }),
};

module.exports = config;
