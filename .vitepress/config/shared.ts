import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
  srcDir: "src",
  srcExclude: [],
  outDir: "build",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round-min.png",
      },
    ],
    // Open Graph
    ["meta", { property: "og:site_name", content: "Oxc" }],
    ["meta", { property: "og:url", content: "https://github.com/oxc-project" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://github.com/oxc-project/oxc-assets/blob/main/preview-white-min.png?raw=true",
      },
    ],
    // Twitter (X)
    ["meta", { name: "twitter:site", content: "Oxc" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://github.com/oxc-project/oxc-assets/blob/main/preview-white-min.png?raw=true",
      },
    ],
  ],
  lastUpdated: false,
  themeConfig: {
    siteTitle: "Oxc",
    logo: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round-min.png",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "twitter", link: "https://x.com/boshen_c" },
      { icon: "discord", link: "https://discord.gg/9uXCAwqQZW" },
      { icon: "github", link: "https://github.com/oxc-project/oxc" },
    ],
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
      },
    },
    footer: {
      message: `Released under the MIT License.`,
      copyright: "Copyright © 2023-present Boshen & Oxc Contributors",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@components": resolve(dirname(fileURLToPath(import.meta.url)), "../theme/components"),
        "@constants": resolve(dirname(fileURLToPath(import.meta.url)), "../theme/constants"),
      },
    },
  },
});
