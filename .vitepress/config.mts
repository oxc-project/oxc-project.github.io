import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import BLOG_SIDEBAR from "./sidebar.blog.json";

export default defineConfig({
  srcDir: "src",
  srcExclude: [],
  outDir: "build",
  base: "/",
  title: "The JavaScript Oxidation Compiler",
  titleTemplate: ":title | The JavaScript Oxidation Compiler",
  description:
    "A collection of high-performance JavaScript tools written in Rust",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png",
      },
    ],
    [
      "meta",
      {
        property: "description",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
    // Open Graph
    [
      "meta",
      {
        property: "og:title",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A collection of high-performance JavaScript tools written in Rust",
      },
    ],
    ["meta", { property: "og:site_name", content: "OXC" }],
    ["meta", { property: "og:url", content: "https://github.com/oxc-project" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://github.com/oxc-project/oxc-assets/blob/main/preview-white.png?raw=true",
      },
    ],
    // Twitter (X)
    ["meta", { name: "twitter:site", content: "OXC" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A collection of high-performance JavaScript tools written in Rust",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content:
          "https://github.com/oxc-project/oxc-assets/blob/main/preview-white.png?raw=true",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image:alt",
        content: "OXC: The JavaScript Oxidation Compiler",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    siteTitle: "OXC",
    logo: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "twitter", link: "https://x.com/boshen_c" },
      { icon: "discord", link: "https://discord.gg/9uXCAwqQZW" },
      { icon: "github", link: "https://github.com/oxc-project" },
    ],
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
      },
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/docs/guide/introduction" },
          { text: "Learn", link: "/docs/learn/architecture/introduction" },
          { text: "Contribute", link: "/docs/contribute/introduction" },
          { text: "Blog", link: "/blog/2022-02-10-js-tooling-research" },
          {
            text: "Playground",
            target: "_blank",
            link: "https://oxc-project.github.io/oxc/playground/",
          },
        ],
        sidebar: {
          "/docs/guide/": [
            {
              text: "Getting Started",
              items: [
                { text: "Introduction", link: "/docs/guide/introduction" },
                { text: "Benchmarks", link: "/docs/guide/benchmarks" },
              ],
            },
            {
              text: "Usage",
              items: [
                { text: "Linter", link: "/docs/guide/usage/linter" },
                { text: "Parser", link: "/docs/guide/usage/parser" },
                { text: "Resolver", link: "/docs/guide/usage/resolver" },
              ],
            },
          ],
          "/docs/learn/": [
            {
              text: "Architecture",
              items: [
                {
                  text: "Introduction",
                  link: "/docs/learn/architecture/introduction",
                },
                {
                  text: "Parser",
                  link: "/docs/learn/architecture/parser",
                },
                {
                  text: "Linter",
                  link: "/docs/learn/architecture/linter",
                },
                {
                  text: "Resolver",
                  link: "/docs/learn/architecture/resolver",
                },
                {
                  text: "Transformer",
                  link: "/docs/learn/architecture/transformer",
                },
                {
                  text: "Formatter",
                  link: "/docs/learn/architecture/formatter",
                },
                {
                  text: "Minifier",
                  link: "/docs/learn/architecture/minifier",
                },
              ],
            },
            {
              text: "ECMAScript",
              items: [
                { text: "Spec", link: "/docs/learn/ecmascript/spec" },
                {
                  text: "Grammar",
                  link: "/docs/learn/ecmascript/grammar",
                },
              ],
            },
            { text: "Performance", link: "/docs/learn/performance" },
            { text: "Ecosystem", link: "/docs/learn/ecosystem" },
            { text: "References", link: "/docs/learn/references" },
          ],
          "/docs/contribute/": [
            {
              text: "Contributing Guide",
              items: [
                { text: "Introduction", link: "/docs/contribute/introduction" },
                { text: "Development", link: "/docs/contribute/development" },
              ],
            },
            {
              text: "Domain",
              items: [
                { text: "Parser", link: "/docs/contribute/parser" },
                { text: "Linter", link: "/docs/contribute/linter" },
                { text: "Prettier", link: "/docs/contribute/prettier" },
                { text: "Resolver", link: "/docs/contribute/resolver" },
                {
                  text: "Transformer",
                  link: "/docs/contribute/transformer",
                },
                { text: "Formatter", link: "/docs/contribute/formatter" },
                { text: "Codegen", link: "/docs/contribute/codegen" },
                { text: "Minifier", link: "/docs/contribute/minifier" },
                { text: "VSCode", link: "/docs/contribute/vscode" },
              ],
            },
            { text: "Performance", link: "/docs/contribute/performance" },
            { text: "Showcase", link: "/docs/contribute/showcase" },
          ],
          "/blog/": BLOG_SIDEBAR,
        },
        editLink: {
          pattern: "https://github.com/oxc-project/oxc/edit/main/src/:path",
          text: "Edit this page",
        },
        footer: {
          copyright: "© 2023 OXC Project",
        },
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      themeConfig: {
        search: {
          provider: "local",
          options: {
            locales: {
              ja: {
                translations: {
                  button: {
                    buttonText: "検索する",
                    buttonAriaLabel: "検索する",
                  },
                  modal: {
                    noResultsText: "見つかりませんでした",
                    resetButtonTitle: "リセットする",
                    footer: {
                      selectText: "選ぶ",
                      navigateText: "切り替える",
                      closeText: "閉じる",
                    },
                  },
                },
              },
            },
          },
        },
        nav: [
          { text: "ガイド", link: "/ja/docs/guide/introduction" },
          { text: "学ぶ", link: "/ja/docs/learn/architecture/introduction" },
          { text: "貢献", link: "/ja/docs/contribute/introduction" },
          { text: "ブログ", link: "/ja/blog/2022-02-10-js-tooling-research" },
          {
            text: "プレイグラウンド",
            target: "_blank",
            link: "https://oxc-project.github.io/oxc/playground/",
          },
        ],
        sidebar: {
          "/ja/docs/guide/": [
            {
              text: "はじめる",
              items: [
                {
                  text: "イントロダクション",
                  link: "/ja/docs/guide/introduction",
                },
                { text: "ベンチマーク", link: "/ja/docs/guide/benchmarks" },
              ],
            },
            {
              text: "使いかた",
              items: [
                { text: "リンタ", link: "/ja/docs/guide/usage/linter" },
                { text: "パーサ", link: "/ja/docs/guide/usage/parser" },
                { text: "リザルバ", link: "/ja/docs/guide/usage/resolver" },
              ],
            },
          ],
          "/ja/docs/learn/": [
            {
              text: "アーキテクチャ",
              items: [
                {
                  text: "イントロダクション",
                  link: "/ja/docs/learn/architecture/introduction",
                },
                {
                  text: "パーサ",
                  link: "/ja/docs/learn/architecture/parser",
                },
                {
                  text: "リンタ",
                  link: "/ja/docs/learn/architecture/linter",
                },
                {
                  text: "リザルバ",
                  link: "/ja/docs/learn/architecture/resolver",
                },
                {
                  text: "トランスフォーマ",
                  link: "/ja/docs/learn/architecture/transformer",
                },
                {
                  text: "フォーマッタ",
                  link: "/ja/docs/learn/architecture/formatter",
                },
                {
                  text: "モディファイア",
                  link: "/ja/docs/learn/architecture/minifier",
                },
              ],
            },
            {
              text: "ECMAScript",
              items: [
                { text: "仕様", link: "/ja/docs/learn/ecmascript/spec" },
                {
                  text: "文法",
                  link: "/ja/docs/learn/ecmascript/grammar",
                },
              ],
            },
            { text: "パフォーマンス", link: "/ja/docs/learn/performance" },
            { text: "エコシステム", link: "/ja/docs/learn/ecosystem" },
            { text: "参考文献", link: "/ja/docs/learn/references" },
          ],
          "/ja/docs/contribute/": [
            {
              text: "Contributing Guide",
              items: [
                {
                  text: "Introduction",
                  link: "/ja/docs/contribute/introduction",
                },
                {
                  text: "Development",
                  link: "/ja/docs/contribute/development",
                },
              ],
            },
            {
              text: "Domain",
              items: [
                { text: "Parser", link: "/ja/docs/contribute/parser" },
                { text: "Linter", link: "/ja/docs/contribute/linter" },
                { text: "Prettier", link: "/ja/docs/contribute/prettier" },
                { text: "Resolver", link: "/ja/docs/contribute/resolver" },
                {
                  text: "Transformer",
                  link: "/ja/docs/contribute/transformer",
                },
                { text: "Formatter", link: "/ja/docs/contribute/formatter" },
                { text: "Codegen", link: "/ja/docs/contribute/codegen" },
                { text: "Minifier", link: "/ja/docs/contribute/minifier" },
                { text: "VSCode", link: "/ja/docs/contribute/vscode" },
              ],
            },
            { text: "Performance", link: "/ja/docs/contribute/performance" },
            { text: "Showcase", link: "/ja/docs/contribute/showcase" },
          ],
          "/ja/blog/": BLOG_SIDEBAR.map(({ text, link }) => ({
            text,
            link: `/ja${link}`,
          })),
        },
        editLink: {
          pattern: "https://github.com/oxc-project/oxc/edit/main/src/:path",
          text: "このページを編集する",
        },
        footer: {
          copyright: "© 2023 OXC プロジェクト",
        },
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        "@components": `${dirname(
          fileURLToPath(import.meta.url),
        )}/theme/components`,
        "@constants": `${dirname(
          fileURLToPath(import.meta.url),
        )}/theme/constants`,
      },
    },
  },
});
