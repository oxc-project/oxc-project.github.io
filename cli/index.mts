import { defineCommand, runMain } from "citty";
import type { CommandDef } from "citty";

const _rDefault = (r: any) => (r.default || r) as Promise<CommandDef>;

const main = defineCommand({
  meta: {
    name: "pnpm run cli",
    description: "CLI for OXC Documentation",
  },
  subCommands: {
    "create-blog-post": () =>
      import("./commands/create-blog-post.mjs").then(_rDefault),
  },
});

runMain(main);
