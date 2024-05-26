import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";

import { sharedConfig } from "./shared";
import { rssConfig } from "./rss";
import { enConfig } from "./en";

export default defineConfig({
  ...sharedConfig,
  ...rssConfig,
  head: [...sharedConfig.head!, ...rssConfig.head!],
  locales: {
    ...enConfig,
  },
});
