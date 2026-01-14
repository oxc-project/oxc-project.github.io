import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, HeadConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";
import BLOG_SIDEBAR from "../sidebar.blog.json" with { type: "json" };

function inlineScript(file: string): HeadConfig {
  return ["script", {}, readFileSync(resolve(__dirname, `./inlined-scripts/${file}`), "utf-8")];
}

const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo-without-border.svg",
    },
  ],
  // Open Graph
  ["meta", { property: "og:site_name", content: "Oxc" }],
  [
    "meta",
    {
      property: "og:image",
      content: "https://oxc.rs/og.jpg",
    },
  ],
  // Twitter (X)
  ["meta", { name: "twitter:site", content: "Oxc" }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  [
    "meta",
    {
      name: "twitter:image",
      content: "https://oxc.rs/og.jpg",
    },
  ],
  // banner
  inlineScript("banner.js"),
  // Google Analytics
  ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-X7WQ091KL7" }],
  [
    "script",
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X7WQ091KL7');`,
  ],
];

if (process.env.NODE_ENV === "production" && process.env.REDIRECT) {
  head.unshift(["meta", { "http-equiv": "refresh", content: "0; URL=https://oxc.rs" }]);
}

export const sharedConfig = defineConfig({
  srcDir: "src",
  srcExclude: [],
  outDir: "build",
  base: "/",
  head,
  lastUpdated: false,
  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];

    if (pageData.frontmatter.canonical) {
      pageData.frontmatter.head.push([
        "link",
        {
          rel: "canonical",
          href: pageData.frontmatter.canonical,
        },
      ]);
    }

    // Add page-specific Open Graph and Twitter meta tags
    const title = pageData.frontmatter.title || pageData.title;
    const description =
      pageData.frontmatter.description ||
      pageData.description ||
      "A collection of high-performance JavaScript tools written in Rust";

    // Construct the canonical URL for the page
    let url = "https://oxc.rs";
    if (pageData.relativePath !== "index.md") {
      const path = pageData.relativePath.replace(/\.md$/, ".html").replace(/\/index\.html$/, "/");
      if (path !== "index.html") {
        url += "/" + path.replace(/^\/+/, "");
      }
    }

    if (title) {
      pageData.frontmatter.head.push(["meta", { property: "og:title", content: title }]);
      pageData.frontmatter.head.push(["meta", { name: "twitter:title", content: title }]);
    }

    if (description) {
      pageData.frontmatter.head.push([
        "meta",
        { property: "og:description", content: description },
      ]);
      pageData.frontmatter.head.push([
        "meta",
        { name: "twitter:description", content: description },
      ]);
    }

    pageData.frontmatter.head.push(["meta", { property: "og:url", content: url }]);
  },
  themeConfig: {
    variant: "oxc",

    // NOTE: Also update banner.js when changing this
    banner: {
      id: "type-aware-alpha",
      text: "Announcing Type-Aware Linting Alpha",
      url: "https://oxc.rs/blog/2025-12-08-type-aware-alpha",
    },

    siteTitle: "Oxc",
    logo: "https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round.svg",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "x", link: "https://x.com/OxcProject" },
      { icon: "bluesky", link: "https://bsky.app/profile/boshen.github.io" },
      { icon: "discord", link: "https://discord.gg/9uXCAwqQZW" },
      { icon: "github", link: "https://github.com/oxc-project/oxc" },
    ],
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
      },
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} VoidZero Inc. and Oxc contributors.`,
      nav: [
        {
          title: "Oxc",
          items: [
            { text: "Guide", link: "/docs/guide/introduction" },
            { text: "Learn", link: "/docs/learn/parser_in_rust/intro" },
            { text: "Contribute", link: "/docs/contribute/introduction" },
            { text: "Playground", link: "https://playground.oxc.rs" },
            { text: "Sponsor", link: "/sponsor" },
          ],
        },
        {
          title: "Resources",
          items: [
            { text: "Blog", link: BLOG_SIDEBAR[0].link },
            { text: "Team", link: "/team" },
          ],
        },
        /*{
          title: "Legal",
          items: [
            { text: "Terms & Conditions", link: "https://voidzero.dev/terms" },
            { text: "Privacy Policy", link: "https://voidzero.dev/privacy" },
            { text: "Cookie Policy", link: "https://voidzero.dev/cookies" },
          ],
        },*/
      ],
      social: [
        { icon: "github", link: "https://github.com/oxc-project/oxc" },
        { icon: "discord", link: "https://discord.gg/9uXCAwqQZW" },
        { icon: "x", link: "https://x.com/OxcProject" },
        { icon: "bluesky", link: "https://bsky.app/profile/boshen.github.io" },
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    publicDir: resolve(dirname(fileURLToPath(import.meta.url)), "../../public"),
    optimizeDeps: {
      exclude: ["@docsearch/css"],
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          ".oxlintrc": localIconLoader(import.meta.url, "../../public/logo-without-border.svg"),
        },
      }),
      llmstxt(),
    ],
    resolve: {
      alias: [
        {
          find: "@constants",
          replacement: resolve(dirname(fileURLToPath(import.meta.url)), "../theme/constants"),
        },
        {
          find: "@data",
          replacement: resolve(dirname(fileURLToPath(import.meta.url)), "../data"),
        },
      ],
    },
  },
});
