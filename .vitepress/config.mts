import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  srcExclude: [],
  outDir: 'build',
  base: '/',
  title: 'The JavaScript Oxidation Compiler',
  titleTemplate: ':title | The JavaScript Oxidation Compiler',
  description: 'A collection of high-performance JavaScript tools written in Rust',
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png' }],
  ],
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Oxc',
    logo: 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png',
    logoLink: '/',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/usage/linter' },
      { text: 'Contribute', link: '/docs/contribute/intro' },
      { text: 'Learn', link: '/docs/learn/ecosystem' },
      { text: 'Blog', link: '/blog/2022-02-10-js-tooling-research' },
      { text: 'Playground', target: '_blank', link: 'https://oxc-project.github.io/oxc/playground/' },
    ],
    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/boshen_c' },
      { icon: 'discord', link: 'https://discord.gg/9uXCAwqQZW' },
      { icon: 'github', link: 'https://github.com/oxc-project' },
    ],
    editLink: {
      pattern: 'https://github.com/oxc-project/oxc/edit/main/src/:path',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'full',
      },
    },
    sidebar: {
      '/docs/usage/': [
        {
          text: 'Usage',
          items: [
            { text: 'Linter', link: '/docs/usage/linter' },
            { text: 'Parser', link: '/docs/usage/parser' },
            { text: 'Resolver', link: '/docs/usage/resolver' },
          ],
        },
        {
          items: [
            { text: 'Philosophy', link: '/docs/usage/philosophy' },
            { text: 'Benchmarks', link: '/docs/usage/benchmarks' },
          ]
        }
      ],
      '/docs/contribute/': [
        { text: 'Intro', link: '/docs/contribute/intro' },
        { text: 'Rules', link: '/docs/contribute/rules' },
        { text: 'Parser', link: '/docs/contribute/parser' },
        { text: 'Linter', link: '/docs/contribute/linter' },
        { text: 'Resolver', link: '/docs/contribute/resolver' },
        { text: 'Transformer', link: '/docs/contribute/transformer' },
        { text: 'Formatter', link: '/docs/contribute/formatter' },
        { text: 'Codegen', link: '/docs/contribute/codegen' },
        { text: 'Minifier', link: '/docs/contribute/minifier' },
        { text: 'Vscode', link: '/docs/contribute/vscode' },
        { text: 'Performance', link: '/docs/contribute/performance' },
        { text: 'Showcase', link: '/docs/contribute/showcase' },
      ],
      '/docs/learn/': [
        { text: 'Ecosystem', link: '/docs/learn/ecosystem' },
        { text: 'Partnership', link: '/docs/learn/partnership' },
        {
          text: 'Architecture',
          items: [
            { text: 'Intro', link: '/docs/learn/architecture/intro' },
            { text: 'Parser', link: '/docs/learn/architecture/parser' },
            { text: 'Linter', link: '/docs/learn/architecture/linter' },
            { text: 'Resolver', link: '/docs/learn/architecture/resolver' },
            { text: 'Transformer', link: '/docs/learn/architecture/transformer' },
            { text: 'Formatter', link: '/docs/learn/architecture/formatter' },
            { text: 'Minifier', link: '/docs/learn/architecture/minifier' },
          ],
        },
        {
          text: 'ECMAScript',
          items: [
            { text: 'Spec', link: '/docs/learn/ecmascript/spec' },
            { text: 'Grammar', link: '/docs/learn/ecmascript/grammar' },
          ],
        },
        { text: 'Performance', link: '/docs/learn/performance' },
        { text: 'References', link: '/docs/learn/references' },
      ],
      '/blog/': [
        { text: 'Oxlint General Availability', link: '/blog/2023-11-08-announcing-oxlint' },
        { text: 'Announcing Oxc', link: '/blog/2023-11-07-announcing-oxc' },
        { text: 'A research on JavaScript linters', link: '/blog/2022-08-08-linter-research' },
        { text: 'High Performance JavaScript Toolchain', link: '/blog/2022-02-10-js-tooling-research' },
      ]
    },
  },
})
