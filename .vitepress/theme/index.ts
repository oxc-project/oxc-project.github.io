import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

// @ts-ignore
import AppBadgeList from "./components/AppBadgeList.vue";

// @ts-ignore
import AppBlogPostHeader from "./components/AppBlogPostHeader.vue";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.component("AppBadgeList", AppBadgeList);
    app.component("AppBlogPostHeader", AppBlogPostHeader);
  },
} satisfies Theme;
