import BLOG_SIDEBAR from "../sidebar.blog.json";
import { defineLocaleConfig } from "./utils";

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
          { text: "Blog", link: "/blog/2025-12-08-type-aware-alpha" },
          { text: "Team", link: "/team" },
          { text: "Release Notes", link: "https://github.com/oxc-project/oxc/releases" },
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
              collapsed: true,
              items: [
                {
                  text: "Configuring Oxlint",
                  link: "/docs/guide/usage/linter/config",
                },
                {
                  text: "Type-Aware Linting",
                  link: "/docs/guide/usage/linter/type-aware",
                },
                {
                  text: "Nested Configs",
                  link: "/docs/guide/usage/linter/nested-config",
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
                  text: "JS Plugins",
                  link: "/docs/guide/usage/linter/js-plugins",
                },
                {
                  text: "Automatic Fixes",
                  link: "/docs/guide/usage/linter/automatic-fixes",
                },
                {
                  text: "CLI reference",
                  link: "/docs/guide/usage/linter/cli",
                },
                {
                  text: "Configuration file reference",
                  link: "/docs/guide/usage/linter/config-file-reference",
                },
                {
                  text: "Versioning",
                  link: "/docs/guide/usage/linter/versioning",
                },
              ],
            },
            {
              text: "Formatter",
              link: "/docs/guide/usage/formatter",
              collapsed: true,
              items: [
                {
                  text: "CLI reference",
                  link: "/docs/guide/usage/formatter/cli",
                },
                {
                  text: "Configuration file reference",
                  link: "/docs/guide/usage/formatter/config-file-reference",
                },
                {
                  text: "Migrating from Prettier",
                  link: "/docs/guide/usage/formatter/migrate-from-prettier",
                },
              ],
            },
            { text: "Parser", link: "/docs/guide/usage/parser" },
            {
              text: "Transformer",
              link: "/docs/guide/usage/transformer",
              collapsed: true,
              items: [
                {
                  text: "Lowering",
                  link: "/docs/guide/usage/transformer/lowering",
                },
                {
                  text: "TypeScript",
                  link: "/docs/guide/usage/transformer/typescript",
                },
                {
                  text: "JSX",
                  link: "/docs/guide/usage/transformer/jsx",
                },
                {
                  text: "Plugins",
                  link: "/docs/guide/usage/transformer/plugins",
                },
                {
                  text: "Global Variable Replacement",
                  link: "/docs/guide/usage/transformer/global-variable-replacement",
                },
                {
                  text: "Isolated Declarations",
                  link: "/docs/guide/usage/transformer/isolated-declarations",
                },
              ],
            },
            {
              text: "Minifier",
              link: "/docs/guide/usage/minifier",
              collapsed: true,
              items: [
                {
                  text: "Dead Code Elimination",
                  link: "/docs/guide/usage/minifier/dead-code-elimination",
                },
                {
                  text: "Syntax Normalization",
                  link: "/docs/guide/usage/minifier/syntax-normalization",
                },
                {
                  text: "Mangling",
                  link: "/docs/guide/usage/minifier/mangling",
                },
                {
                  text: "Whitespace Stripping",
                  link: "/docs/guide/usage/minifier/whitespace-stripping",
                },
                {
                  text: "FAQ",
                  link: "/docs/guide/usage/minifier/faq",
                },
              ],
            },
            { text: "Resolver", link: "/docs/guide/usage/resolver" },
          ],
        },
        {
          items: [
            { text: "Troubleshooting", link: "/docs/guide/troubleshooting" },
            { text: "All benchmarks", link: "/docs/guide/benchmarks" },
            { text: "Projects using Oxc", link: "/docs/guide/projects" },
            { text: "On media", link: "/docs/guide/media" },
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
            { text: "Language Server", link: "/docs/contribute/language_server" },
            { text: "VSCode", link: "/docs/contribute/vscode" },
          ],
        },
        { text: "Debugging", link: "/docs/contribute/debugging" },
        { text: "Profiling", link: "/docs/contribute/profiling" },
        { text: "Rules and Policy", link: "/docs/contribute/rules" },
        { text: "Security Policy", link: "/docs/contribute/security" },
      ],
      "/blog/": BLOG_SIDEBAR,
    },
    outline: {
      level: [2, 3],
    },
    editLink: {
      pattern: "https://github.com/oxc-project/oxc-project.github.io/edit/main/src/:path",
      text: "Suggest changes to this page",
    },
  },
});
