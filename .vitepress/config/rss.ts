import { Author, Feed } from "feed";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createContentLoader, defineConfig, type SiteConfig } from "vitepress";
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

    const posts = await createContentLoader("blog/*.md", {
      excerpt: true,
      render: true,
    }).load();

    posts.sort((a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string));

    for (const { url, excerpt, frontmatter, html } of posts) {
      const result = url.match(/blog\/(?<dateGroup>\d{4}-\d{2}-\d{2})-.*$/);
      // The date is required by the `feed` package, but the logic that deals with date parsing from blog posts in this repo doesn't guarantee a date
      if (!result || !result.groups) throw new Error(`Blog post at ${url} does not have a valid date.`);
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
