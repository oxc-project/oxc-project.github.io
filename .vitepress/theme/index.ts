import "virtual:group-icons.css";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent, h } from "vue";
import Alert from "./components/Alert.vue";
import AppBadgeList from "./components/AppBadgeList.vue";
import AppBlogList from "./components/AppBlogList.vue";
import AppBlogPostHeader from "./components/AppBlogPostHeader.vue";
import "./overrides.css";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.component("AppBadgeList", AppBadgeList);
    app.component("AppBlogList", AppBlogList);
    app.component("AppBlogPostHeader", AppBlogPostHeader);
    app.component("Alert", Alert);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(defineAsyncComponent(() => import("./components/Banner.vue"))),
    });
  },
} satisfies Theme;
