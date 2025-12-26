import { defineConfig } from "vitepress";

import { enConfig } from "./en";
import { rssConfig } from "./rss";
import { sharedConfig } from "./shared";

import { extendConfig } from "@voidzero-dev/vitepress-theme/config";

export default extendConfig(
  defineConfig({
    ...sharedConfig,
    ...rssConfig,
    head: [...sharedConfig.head!, ...rssConfig.head!],
    locales: {
      ...enConfig,
    },
  }),
);
