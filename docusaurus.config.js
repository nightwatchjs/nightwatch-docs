// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nightwatch',
  tagline: 'Making JavaScript testing easy',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nightwatchjs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NightwatchJS',
        logo: {
          alt: 'NightwatchJS',
          src: 'img/mini_logo.svg',
        },
        items: [
          {
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
            to: '/guide'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/nightwatchjs/nightwatch',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Nightwatch',
            items: [
              {
                label: 'About',
                to: '/about'
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Newsletter',
                to: 'https://nightwatch.substack.com',
              },
              {
                label: 'Contribute',
                to: '/about/contribute/'
              },
              {
                label: 'Release History',
                to: '/guide/overview/whats-new.html#releases-container'
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nightwatchjs',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ZZ3ZJVFAZb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nightwatchjs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nightwatchjs/',
              },
            ],
          },
          {
            title: 'Get Started',
            items: [
              {
                label: "What is NightwatchJS?",
                to: "/guide/overview/what-is-nightwatch.html",
              },
              {
                label: 'Guides',
                to: '/guide',
              },
              {
                label: 'API Reference',
                to: '/api'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <img style="height:20px;" src='img/browserstack-logo.png' \> BrowserStack`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
