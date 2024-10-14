import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { HeadConfig, defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from "vitepress-plugin-group-icons";

const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      href: "https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/square.ico",
    },
  ],
  // Open Graph
  ["meta", { property: "og:site_name", content: "Oxc" }],
  ["meta", { property: "og:url", content: "https://github.com/oxc-project" }],
  [
    "meta",
    {
      property: "og:image",
      content: "https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/preview-universal.png",
    },
  ],
  // Twitter (X)
  ["meta", { name: "twitter:site", content: "Oxc" }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  [
    "meta",
    {
      name: "twitter:image",
      content: "https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/preview-universal.png",
    },
  ],
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
  ["link", { rel: "canonical", href: 'href="https://oxc.rs"' }],
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
  themeConfig: {
    siteTitle: "Oxc",
    logo: "https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round.svg",
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
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          ".oxlintrc": localIconLoader(import.meta.url, "../oxc-logo.svg"),
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: "@components",
          replacement: resolve(dirname(fileURLToPath(import.meta.url)), "../theme/components"),
        },
        {
          find: "@constants",
          replacement: resolve(dirname(fileURLToPath(import.meta.url)), "../theme/constants"),
        },
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: resolve(dirname(fileURLToPath(import.meta.url)), "../theme/components/Hero.vue"),
        },
      ],
    },
  },
});
