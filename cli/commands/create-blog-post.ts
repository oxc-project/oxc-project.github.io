import * as fs from "node:fs/promises";
import { defineCommand } from "citty";

export default defineCommand({
  meta: {
    name: "create-blog-post",
    description: "create blog post",
  },
  args: {
    date: {
      type: "positional",
      description: "publish date of the post",
      required: true,
    },
    title: {
      type: "positional",
      description: "title of the post",
      required: true,
    },
    slug: {
      type: "string",
      description: "slug of the post",
      required: false,
    },
    author: {
      type: "string",
      description: "author ID of the post",
      required: false,
    },
  },
  async run({ args }) {
    const { date, title, slug, author } = args;
    const isValidDate = /^(?:20\d{2})-(?:0?[1-9]|1[012])-(?:0?[1-9]|1\d|2\d|3[0-1])$/.test(date);

    if (!isValidDate) {
      console.error(`date is invalid: ${date}`);
    }

    await writeMarkdownFile({ date, title, slug, author });
    await writeSidebarFile({ date, title, slug });

    console.log(`blog post created`);
  },
});

async function writeMarkdownFile({
  date,
  title,
  slug,
  author,
}: {
  date: string;
  title: string;
  slug: string;
  author: string;
}) {
  const filePath = `${process.cwd()}/src${getBlogPostUrl({
    date,
    title,
    slug,
  })}.md`;
  const content = `
---
title: ${title}
outline: deep
authors:
  - ${author || "# TODO: add author ID"}
---

<AppBlogPostHeader />
`.trimStart();

  await fs.writeFile(filePath, content);
}

async function writeSidebarFile({ date, title, slug }: { date: string; title: string; slug: string }) {
  const filePath = `${process.cwd()}/.vitepress/sidebar.blog.json`;
  const currentSidebar = await fs.readFile(filePath, "utf8");
  const sidebar = JSON.parse(currentSidebar) as Record<"text" | "link", string>[];

  sidebar.unshift({
    text: `${date}<br>${title}`,
    link: getBlogPostUrl({ date, title, slug }),
  });

  await fs.writeFile(filePath, JSON.stringify(sidebar, null, 2));
}

function getBlogPostUrl({ date, title, slug }: { date: string; title: string; slug: string }) {
  return `/blog/${date}-${(slug || title).toLocaleLowerCase().replace(/\s+/g, "-")}`;
}
