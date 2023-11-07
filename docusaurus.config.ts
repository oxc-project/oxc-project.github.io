import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Oxc',
  tagline: 'The JavaScript Oxidation Compiler',
  favicon: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png',
  url: 'https://oxc-project.github.io',
  baseUrl: '/',
  organizationName: 'oxc-project',
  projectName: 'oxc-project.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/oxc-project/oxc-project.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/oxc-project/oxc-project.github.io/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@vegaprotocol/docusaurus-theme-github-codeblock'],
  themeConfig: {
    image: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/preview-dark-transparent.png',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Oxc Logo',
        src: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/web-infra-dev/oxc',
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
              label: 'Discord',
              href: 'https://discord.gg/9uXCAwqQZW',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/boshen_c',
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
              href: 'https://github.com/web-infra-dev/oxc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oxc`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
