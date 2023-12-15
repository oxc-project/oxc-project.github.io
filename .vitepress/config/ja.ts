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
      { text: "学ぶ", link: "/ja/docs/learn/parser_in_rust/intro" },
      { text: "貢献", link: "/ja/docs/contribute/introduction" },
      {
        text: "プレイグラウンド",
        target: "_blank",
        link: "https://oxc-project.github.io/oxc/playground/",
      },
      {
        text: "Resources",
        items: [
          { text: "ブログ", link: "/ja/blog/2023-12-12-announcing-oxlint.html" },
          { text: "Team", link: "/ja/team" },
          { text: "Ecosystem", link: "/ja/ecosystem" },
        ],
      },
    ],
    sidebar: {
      "/ja/docs/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "イントロダクション",
              link: "/ja/docs/guide/introduction",
            },
          ],
        },
        {
          text: "Tools",
          items: [
            { text: "Linter", link: "/ja/docs/guide/usage/linter" },
            { text: "Parser", link: "/ja/docs/guide/usage/parser" },
            { text: "Resolver", link: "/ja/docs/guide/usage/resolver" },
          ],
        },
      ],
      "/ja/docs/learn/": [
        /*
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
        */
        {
          text: "JavaScript Parser in Rust",
          items: [
            { text: "Introduction", link: "/ja/docs/learn/parser_in_rust/intro" },
            { text: "Lexer", link: "/ja/docs/learn/parser_in_rust/lexer" },
            { text: "AST", link: "/ja/docs/learn/parser_in_rust/ast" },
            { text: "Parser", link: "/ja/docs/learn/parser_in_rust/parser" },
            { text: "Errors", link: "/ja/docs/learn/parser_in_rust/errors" },
            { text: "Semantic Analysis", link: "/ja/docs/learn/parser_in_rust/semantic_analysis" },
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
              text: "Getting Started",
              link: "/ja/docs/contribute/development",
            },
          ],
        },
        {
          text: "Tools",
          items: [
            { text: "Parser", link: "/ja/docs/contribute/parser" },
            { text: "Linter", link: "/ja/docs/contribute/linter" },
            { text: "Formatter", link: "/ja/docs/contribute/formatter" },
            { text: "Resolver", link: "/ja/docs/contribute/resolver" },
            {
              text: "Transformer",
              link: "/ja/docs/contribute/transformer",
            },
            { text: "Codegen", link: "/ja/docs/contribute/codegen" },
            { text: "Minifier", link: "/ja/docs/contribute/minifier" },
            { text: "VSCode", link: "/ja/docs/contribute/vscode" },
          ],
        },
        { text: "Performance", link: "/ja/docs/contribute/performance" },
        { text: "Rules and Policy", link: "/ja/docs/contribute/rules" },
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
