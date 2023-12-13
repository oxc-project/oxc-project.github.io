import { defineConfig } from "vitepress";

import { sharedConfig } from "./shared";
import { enConfig } from "./en";
// import { zhConfig } from "./zh";
// import { jaConfig } from "./ja";

export default defineConfig({
  ...sharedConfig,
  locales: {
    ...enConfig,
    // Let's enable i18n when they are ready, i.e. most of the translations are done.
    // ...zhConfig,
    // ...jaConfig,
  },
});
