import "virtual:group-icons.css";
import type { Theme } from "vitepress";
import VoidZeroTheme from '@voidzero-dev/vitepress-theme'
import '@voidzero-dev/vitepress-theme/index.css'
import { defineAsyncComponent, h } from "vue";
import Alert from "./components/Alert.vue";
import AppBadgeList from "./components/AppBadgeList.vue";
import AppBlogPostHeader from "./components/AppBlogPostHeader.vue";

export default {
  extends: VoidZeroTheme,
  async enhanceApp({ app }) {
    app.component("AppBadgeList", AppBadgeList);
    app.component("AppBlogPostHeader", AppBlogPostHeader);
    app.component("Alert", Alert);
  },
  Layout() {
    return h(VoidZeroTheme.Layout, null, {
      "layout-top": () => h(defineAsyncComponent(() => import("./components/Banner.vue"))),
    });
  },
} satisfies Theme;
