import type { DefaultTheme, HeadConfig, LocaleConfig, LocaleSpecificConfig } from "vitepress";

type Config = LocaleConfig<DefaultTheme.Config>[string] & {
  lang: NonNullable<LocaleSpecificConfig<DefaultTheme.Config>["lang"]>;
  title: NonNullable<LocaleSpecificConfig<DefaultTheme.Config>["title"]>;
  titleTemplate: NonNullable<LocaleSpecificConfig<DefaultTheme.Config>["titleTemplate"]>;
  description: NonNullable<LocaleSpecificConfig<DefaultTheme.Config>["description"]>;
  themeConfig: NonNullable<LocaleSpecificConfig<DefaultTheme.Config>["themeConfig"]>;
};

export function defineLocaleConfig(key: string, config: Config): LocaleConfig<DefaultTheme.Config> {
  const { title, description, head = [] } = config;

  const newHead: HeadConfig[] = [
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:image:alt", content: title }],
  ];

  head.forEach(([tag, attrs]) => {
    if (tag !== "meta") {
      return;
    }

    let propertyOrName: string | null = null;

    if (attrs.property === "og:title" || attrs.property === "og:description") {
      propertyOrName = attrs.property;
    } else if (
      attrs.name === "twitter:title"
      || attrs.name === "twitter:description"
      || attrs.name === "twitter:image:alt"
    ) {
      propertyOrName = attrs.name;
    }

    if (propertyOrName === null) {
      newHead.push([tag, attrs]);
      return;
    }

    const error = new Error(
      `Do not set \`${propertyOrName}\` in locale-level \`head\` config, because it is supposed to be set automatically according to \`title\` and \`description\` options.`,
    );
    console.error(error);
    throw error;
  });

  config.head = newHead;

  return { [key]: config };
}
