import { defineLocaleConfig } from "./utils";
import BLOG_SIDEBAR from "../sidebar.blog.json";

const TITLE = "The JavaScript Oxidation Compiler";
const DESCRIPTION = "Rust製JavaScriptツールコレクション";

export const jaConfig = defineLocaleConfig("ja", {
  label: "日本語",
  lang: "ja",
  title: TITLE,
  titleTemplate: `:title | ${TITLE}`,
  description: DESCRIPTION,
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
            { text: "Linter", link: "/ja/docs/guide/usage/linter" },
            { text: "Parser", link: "/ja/docs/guide/usage/parser" },
            { text: "Resolver", link: "/ja/docs/guide/usage/resolver" },
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
              text: "Parser",
              link: "/ja/docs/learn/architecture/parser",
            },
            {
              text: "Linter",
              link: "/ja/docs/learn/architecture/linter",
            },
            {
              text: "Resolver",
              link: "/ja/docs/learn/architecture/resolver",
            },
            {
              text: "Transformer",
              link: "/ja/docs/learn/architecture/transformer",
            },
            {
              text: "Formatter",
              link: "/ja/docs/learn/architecture/formatter",
            },
            {
              text: "Modifier",
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
      pattern: "https://github.com/oxc-project/oxc-project.github.io/edit/main/src/:path",
      text: "このページを編集する",
    },
  },
});
