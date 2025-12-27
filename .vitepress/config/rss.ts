import { Author, Feed } from "feed";
import container from "markdown-it-container";
import type Token from "markdown-it/lib/token.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  createContentLoader,
  createMarkdownRenderer,
  defineConfig,
  type SiteConfig,
} from "vitepress";
import { TEAM_MEMBERS_MAP } from "../theme/constants/team";
import { sharedConfig } from "./shared";

// Thanks to https://laros.io/generating-an-rss-feed-with-vitepress
export const rssConfig = defineConfig({
  head: [
    [
      "link",
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Oxc Blog (RSS)",
        href: "/feeds/blog-en.rss",
      },
    ],
    [
      "link",
      {
        rel: "alternate",
        type: "application/atom+xml",
        title: "Oxc Blog (Atom)",
        href: "/feeds/blog-en.atom",
      },
    ],
  ],
  buildEnd: async (config: SiteConfig) => {
    const feed = new Feed({
      title: "The Oxidation Compiler Blog",
      id: "https://oxc.rs",
      link: "https://oxc.rs",
      language: "en",
      favicon: "https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/square.ico",
      copyright: sharedConfig.themeConfig!.footer!.copyright!,
    });

    const md = await createMarkdownRenderer(
      config.srcDir,
      config.markdown,
      config.site.base,
      config.logger,
    );
    // Wrap code groups with <table>s
    // Reference: https://github.com/vuejs/vitepress/blob/179ee6/src/node/markdown/plugins/preWrapper.ts#L8
    md.use((md) => {
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args;
        const token = tokens[idx];

        const title = token.info.match(/\[(.*)\]/)?.[1];
        // Code blocks in a code group have titles
        return title == null
          ? fence(...args)
          : "<tr>" + `<td>${title}</td>` + `<td>${fence(...args)}</td>` + "</tr>";
      };
    });
    // Override https://github.com/vuejs/vitepress/blob/179ee6/src/node/markdown/plugins/containers.ts#L26
    md.use(container, "code-group", {
      render(tokens: Token[], idx: number) {
        return tokens[idx].nesting === 1 ? "<table><tbody>" : "</tbody></table>\n";
      },
    });
    // `createMarkdownRenderer` returns a cached global renderer, so the above modifications will be applied to the next rendering
    const posts = await createContentLoader("blog/*.md", {
      excerpt: true,
      render: true,
    }).load();

    posts.sort(
      (a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string),
    );

    for (const { url, excerpt, frontmatter, html } of posts) {
      // Skip the blog index redirect page
      if (url.endsWith("/blog/") || url.endsWith("/blog/index.html")) {
        continue;
      }

      const result = url.match(/blog\/(?<dateGroup>\d{4}-\d{2}-\d{2})-.*$/);
      // The date is required by the `feed` package, but the logic that deals with date parsing from blog posts in this repo doesn't guarantee a date
      if (!result || !result.groups) {
        throw new Error(`Blog post at ${url} does not have a valid date.`);
      }
      const { dateGroup } = result.groups;
      const date = new Date(dateGroup);

      feed.addItem({
        title: frontmatter.title,
        id: `https://oxc.rs${url.replace(/\.html$/, "")}`,
        link: `https://oxc.rs${url.replace(/\.html$/, "")}`,
        description: excerpt,
        content: html,
        author: (frontmatter.authors as string[]).map<Author>((id) => {
          const author = TEAM_MEMBERS_MAP[id];

          return {
            name: author.name,
            // It might simply be better to not include a link?
            link: author.links ? author.links[0].link : undefined,
          };
        }),
        date,
      });
    }

    mkdirSync(path.join(config.outDir, "feeds"));
    writeFileSync(path.join(config.outDir, "feeds/blog-en.rss"), feed.rss2());
    writeFileSync(path.join(config.outDir, "feeds/blog-en.atom"), feed.atom1());
  },
});
