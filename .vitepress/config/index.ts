import { defineConfig } from "vitepress";
import { enConfig } from "./en";
import { jaConfig } from "./ja";
import { sharedConfig } from "./shared";

export default defineConfig({
  ...sharedConfig,
  locales: {
    ...enConfig,
    ...jaConfig,
  },
});
