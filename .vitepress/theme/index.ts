import "virtual:group-icons.css";
import type { Theme } from "vitepress";
import VoidZeroTheme from "@voidzero-dev/vitepress-theme";
import "@voidzero-dev/vitepress-theme/index.css";
import { defineAsyncComponent, h } from "vue";
import AppBlogPostHeader from "./components/AppBlogPostHeader.vue";

export default {
  extends: VoidZeroTheme,
  async enhanceApp({ app }) {
    app.component("AppBlogPostHeader", AppBlogPostHeader);
  },
  Layout() {
    return h(VoidZeroTheme.Layout, null, {});
  },
} satisfies Theme;
