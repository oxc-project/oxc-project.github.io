import { defineConfig } from "vitepress";

import { sharedConfig } from "./shared";
import { enConfig } from "./en";
import { zhConfig } from "./zh";
import { jaConfig } from "./ja";

export default defineConfig({
  ...sharedConfig,
  locales: {
    ...enConfig,
    ...zhConfig,
    ...jaConfig,
  },
});
