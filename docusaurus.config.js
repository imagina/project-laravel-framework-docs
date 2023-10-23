// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laravel',
  tagline: 'Documentation about Laravel',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://imagina.github.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imagina', // Usually your GitHub org/user name.
  projectName: 'project-laravel-framework-docs', // Usually your repo name.
  
  deploymentBranch:'gh-pages',
  trailingSlash:false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: 'en'
      },
      es: {
        label: 'Español',
        htmlLang: 'es',
        direction: 'ltr',
        path: 'es'
      }
    }
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
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Imagina Logo',
          src: 'img/logo.png',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'LaravelSidebar',
            position: 'left',
            label: 'Laravel',
          },*/
          {
            type: 'docSidebar',
            sidebarId: 'APISidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
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
            title: 'Social Media',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/imaginacolombia?igshid=MzRlODBiNWFlZA==',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100090088891700&mibextid=ZbWKwL',
              },
              {
                label: 'X',
                href: 'https://twitter.com/imaginacolombia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/imagina/project-modules',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Imagina Colombia, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
