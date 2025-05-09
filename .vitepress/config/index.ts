import { defineConfig } from "vitepress";

import { enConfig } from "./en";
import { rssConfig } from "./rss";
import { sharedConfig } from "./shared";

export default defineConfig({
  ...sharedConfig,
  ...rssConfig,
  head: [...sharedConfig.head!, ...rssConfig.head!],
  locales: {
    ...enConfig,
  },
});
