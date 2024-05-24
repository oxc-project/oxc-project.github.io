import { defineConfig } from "vitepress";

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
