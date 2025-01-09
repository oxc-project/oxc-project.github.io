import { defineLocaleConfig } from "./utils";
import BLOG_SIDEBAR from "../sidebar.blog.json";

const TITLE = "The JavaScript Oxidation Compiler";
const DESCRIPTION = "A collection of high-performance JavaScript tools written in Rust";

export const enConfig = defineLocaleConfig("root", {
  label: "English",
  lang: "en",
  title: TITLE,
  titleTemplate: `:title | ${TITLE}`,
  description: DESCRIPTION,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/docs/guide/introduction" },
      { text: "Learn", link: "/docs/learn/parser_in_rust/intro" },
      { text: "Contribute", link: "/docs/contribute/introduction" },
      {
        text: "Playground",
        target: "_blank",
        link: "https://playground.oxc.rs",
      },
      {
        text: "Resources",
        items: [
          { text: "Blog", link: "/blog/2024-10-18-oxlint-v0.10-release" },
          { text: "Team", link: "/team" },
          { text: "Branding", link: "/branding" },
          { text: "Website GitHub", link: "https://github.com/oxc-project/oxc-project.github.io" },
        ],
      },
      { text: "Sponsor", link: "/sponsor" },
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
            {
              text: "Linter",
              link: "/docs/guide/usage/linter",
              items: [
                {
                  text: "Command-line Interface",
                  link: "/docs/guide/usage/linter/cli",
                },
                {
                  text: "Configuration File",
                  link: "/docs/guide/usage/linter/config",
                },
                {
                  text: "Rules",
                  link: "/docs/guide/usage/linter/rules",
                },
                {
                  text: "Plugins",
                  link: "/docs/guide/usage/linter/plugins",
                },
                {
                  text: "Automatic Fixes",
                  link: "/docs/guide/usage/linter/automatic-fixes",
                },
              ],
            },
            { text: "Parser", link: "/docs/guide/usage/parser" },
            { text: "Transformer", link: "/docs/guide/usage/transformer" },
            { text: "Resolver", link: "/docs/guide/usage/resolver" },
          ],
        },
        {
          items: [
            { text: "All benchmarks", link: "/docs/guide/benchmarks" },
            { text: "Projects using Oxc", link: "/docs/guide/projects" },
          ],
        },
      ],
      "/docs/learn/": [
        {
          text: "JavaScript Parser in Rust",
          items: [
            { text: "Introduction", link: "/docs/learn/parser_in_rust/intro" },
            { text: "Lexer", link: "/docs/learn/parser_in_rust/lexer" },
            { text: "AST", link: "/docs/learn/parser_in_rust/ast" },
            { text: "Parser", link: "/docs/learn/parser_in_rust/parser" },
            { text: "Errors", link: "/docs/learn/parser_in_rust/errors" },
            { text: "Semantic Analysis", link: "/docs/learn/parser_in_rust/semantic_analysis" },
          ],
        },
        {
          text: "Architecture",
          items: [
            {
              text: "Parser",
              link: "/docs/learn/architecture/parser",
            },
            {
              text: "Linter",
              link: "/docs/learn/architecture/linter",
            },
            {
              text: "Test Infrastructure",
              link: "/docs/learn/architecture/test",
            },
            {
              text: "AST Tools",
              link: "/docs/learn/architecture/ast-tools",
            },
          ],
        },
        {
          text: "ECMAScript",
          items: [
            { text: "Specification", link: "/docs/learn/ecmascript/spec" },
            {
              text: "Grammar",
              link: "/docs/learn/ecmascript/grammar",
            },
          ],
        },
        { text: "Performance", link: "/docs/learn/performance" },
        { text: "Terminology", link: "/docs/learn/terminology" },
        { text: "References", link: "/docs/learn/references" },
      ],
      "/docs/contribute/": [
        {
          text: "Contribute",
          items: [
            { text: "Introduction", link: "/docs/contribute/introduction" },
            { text: "Getting Started", link: "/docs/contribute/development" },
          ],
        },
        {
          text: "Tools",
          items: [
            {
              text: "Parser",
              link: "/docs/contribute/parser",
              items: [
                {
                  text: "AST",
                  link: "/docs/contribute/parser/ast",
                },
              ],
            },
            {
              text: "Linter",
              link: "/docs/contribute/linter",
              items: [{ text: "Adding Rules", link: "/docs/contribute/linter/adding-rules" }],
            },
            { text: "Formatter", link: "/docs/contribute/formatter" },
            { text: "Resolver", link: "/docs/contribute/resolver" },
            {
              text: "Transformer",
              link: "/docs/contribute/transformer",
            },
            { text: "Minifier", link: "/docs/contribute/minifier" },
            { text: "VSCode", link: "/docs/contribute/vscode" },
          ],
        },
        { text: "Debugging", link: "/docs/contribute/debugging" },
        { text: "Profiling", link: "/docs/contribute/profiling" },
        { text: "Rules and Policy", link: "/docs/contribute/rules" },
      ],
      "/blog/": BLOG_SIDEBAR,
    },
    editLink: {
      pattern: "https://github.com/oxc-project/oxc-project.github.io/edit/main/src/:path",
      text: "Suggest changes to this page",
    },
  },
});
