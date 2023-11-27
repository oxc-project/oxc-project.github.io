import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { EN_LOCALE_CONFIG } from "./config.en.js";
import { JA_LOCALE_CONFIG } from "./config.ja.js";

export default defineConfig({
  srcDir: "src",
  srcExclude: [],
  outDir: "build",
  base: "/",
  title: "The JavaScript Oxidation Compiler",
  titleTemplate: ":title | The JavaScript Oxidation Compiler",
  description: "A collection of high-performance JavaScript tools written in Rust",
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
        content: "A collection of high-performance JavaScript tools written in Rust",
      },
    ],
    ["meta", { property: "og:site_name", content: "OXC" }],
    ["meta", { property: "og:url", content: "https://github.com/oxc-project" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://github.com/oxc-project/oxc-assets/blob/main/preview-white.png?raw=true",
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
        content: "A collection of high-performance JavaScript tools written in Rust",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://github.com/oxc-project/oxc-assets/blob/main/preview-white.png?raw=true",
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
    ...EN_LOCALE_CONFIG,
    ...JA_LOCALE_CONFIG,
  },
  vite: {
    resolve: {
      alias: {
        "@components": `${dirname(fileURLToPath(import.meta.url))}/theme/components`,
        "@constants": `${dirname(fileURLToPath(import.meta.url))}/theme/constants`,
      },
    },
  },
});
