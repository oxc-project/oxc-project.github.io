import "virtual:group-icons.css";
import type { Theme } from "vitepress";
import OxcTheme from "@voidzero-dev/vitepress-theme/src/oxc";
import AppBlogPostHeader from "./components/AppBlogPostHeader.vue";

export default {
  extends: OxcTheme as unknown as any,
  async enhanceApp({ app }) {
    app.component("AppBlogPostHeader", AppBlogPostHeader);
  },
} satisfies Theme;
