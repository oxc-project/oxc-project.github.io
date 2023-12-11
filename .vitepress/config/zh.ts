import { defineLocaleConfig } from "./utils";
import BLOG_SIDEBAR from "../sidebar.blog.json";

const TITLE = "The JavaScript Oxidation Compiler";
const DESCRIPTION = "A collection of high-performance JavaScript tools written in Rust";

export const zhConfig = defineLocaleConfig("zh", {
  label: "简体中文",
  lang: "zh",
  title: TITLE,
  titleTemplate: `:title | ${TITLE}`,
  description: DESCRIPTION,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/docs/guide/introduction" },
      { text: "Learn", link: "/docs/learn/architecture/introduction" },
      { text: "Contribute", link: "/docs/contribute/introduction" },
      {
        text: "Resources",
        items: [
          { text: "Blog", link: "/blog/2023-11-08-announcing-oxlint.html" },
          { text: "Team", link: "/team" },
          {
            items: [
              {
                text: "Playground",
                target: "_blank",
                link: "https://oxc-project.github.io/oxc/playground/",
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/docs/guide/": [
        {
          text: "Guide",
          items: [{ text: "Getting Started", link: "/docs/guide/introduction" }],
        },
        {
          text: "Tools",
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
        {
          text: "JavaScript Parser in Rust",
          items: [
            { text: "Intro", link: "/docs/learn/parser_in_rust/intro" },
            { text: "Lexer", link: "/docs/learn/parser_in_rust/lexer" },
            { text: "AST", link: "/docs/learn/parser_in_rust/ast" },
            { text: "Parser", link: "/docs/learn/parser_in_rust/parser" },
            { text: "Errors", link: "/docs/learn/parser_in_rust/errors" },
            { text: "Semantic Analysis", link: "/docs/learn/parser_in_rust/semantic_analysis" },
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
      pattern: "https://github.com/oxc-project/oxc-project.github.io/edit/main/src/:path",
      text: "Suggest changes to this page",
    },
  },
});
