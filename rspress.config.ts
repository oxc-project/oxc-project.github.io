import { defineConfig } from "rspress/config";

export default defineConfig({
  root: "docs",
  title: "Oxc",
  icon: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png",
  logo: "https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png",
  themeConfig: {
    socialLinks: [
      {
        icon: "twitter",
        mode: "link",
        content: "https://twitter.com/boshen_c",
      },
      {
        icon: "discord",
        mode: "link",
        content: "https://discord.com/invite/9uXCAwqQZW",
      },
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/oxc-project/oxc",
      },
    ],
  },
});
