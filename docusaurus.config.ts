import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The JavaScript Oxidation Compiler',
  tagline:
    'A collection of high-performance JavaScript tooling written in Rust',
  favicon:
    'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png',
  url: 'https://oxc-project.github.io',
  baseUrl: '/',
  organizationName: 'oxc-project',
  projectName: 'oxc-project.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  // i18n: {
  // defaultLocale: 'en',
  // locales: ['en', 'ja', 'zh-CN'],
  // },
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
          path: 'blog',
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
    image:
      'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/preview-dark-transparent.png',
    navbar: {
      title: 'Oxc',
      logo: {
        alt: 'Oxc Logo',
        src: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'usage',
          label: 'Get Started',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'contribute',
          label: 'Contribute',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'learn',
          label: 'Learn',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          position: 'right',
          label: 'Playground',
          href: 'https://web-infra-dev.github.io/oxc/playground',
          target: '_blank',
        },
        // {
        // type: 'localeDropdown',
        // position: 'right',
        // dropdownItemsAfter: [
        // {
        // type: 'html',
        // value: '<hr style="margin: 0.3rem 0;">',
        // },
        // {
        // href: '',
        // label: 'Help Us Translate',
        // },
        // ],
        // },
        {
          position: 'right',
          href: 'https://x.com/boshen_c',
          className: 'header-icon header-twitter-link',
          'aria-label': 'Twitter',
          target: '_blank',
        },
        {
          position: 'right',
          href: 'https://discord.gg/9uXCAwqQZW',
          className: 'header-icon header-discord-link',
          'aria-label': 'Discord',
          target: '_blank',
        },
        {
          position: 'right',
          href: 'https://github.com/web-infra-dev/oxc',
          className: 'header-icon header-github-link',
          'aria-label': 'GitHub repository',
          target: '_blank',
        },
      ],
    },
    // footer: {
    // style: 'dark',
    // copyright: `Copyright © ${new Date().getFullYear()} Oxc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
