import { defineAsyncComponent, h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import AppBadgeList from "./components/AppBadgeList.vue";
import AppBlogPostHeader from "./components/AppBlogPostHeader.vue";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.component("AppBadgeList", AppBadgeList);
    app.component("AppBlogPostHeader", AppBlogPostHeader);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(defineAsyncComponent(() => import("./components/Banner.vue"))),
    });
  },
} satisfies Theme;
