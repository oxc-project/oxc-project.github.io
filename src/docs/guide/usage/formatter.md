---
title: Oxfmt
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxfmt
    alt: npm weekly downloads
---

# Oxfmt

<AppBadgeList />

Oxfmt (`/oʊ-ɛks-fɔːr-mæt/`) is a high-performance formatter for the JavaScript ecosystem.

:::info
Oxfmt is currently in alpha.

Please join the discussion!

> RFC: Formatter · oxc-project/oxc · Discussion #13608\
> https://github.com/oxc-project/oxc/discussions/13608

Waiting on Oxfmt to implement additional features? Consider using [@prettier/plugin-oxc](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc) in Prettier to gain some parsing speed in the meantime.
:::

## Built for scale

Oxfmt targets large codebases and CI environments, with an emphasis on high throughput and predictable performance.

It is built on the Oxc compiler stack and avoids architectural bottlenecks common in existing formatter implementations.

Our [benchmarks](https://github.com/oxc-project/bench-formatter) show Oxfmt to be approximately 30× faster than Prettier and 2× faster than Biome.

## Prettier-compatible

Oxfmt integrates into existing Prettier-based workflows.

The `oxfmt` CLI behaves similarly to Prettier by default, allowing adoption with minimal changes to scripts and tooling.

Oxfmt matches Prettier’s JavaScript formatting. When migrating from recent versions of Prettier, formatting differences should not occur; any differences are considered bugs.

Oxfmt currently passes approximately 95% of Prettier’s JavaScript and TypeScript test suite. The remaining cases are niche scenarios, and we work with the Prettier team to converge on formatting over time.

## Getting started

Install `oxfmt` as a dev dependency:

```sh
pnpm add -D oxfmt
```

Add scripts to `package.json`:

```json [package.json]
{
  "scripts": {
    "fmt": "oxfmt",
    "fmt:check": "oxfmt --check"
  }
}
```

Format files:

```sh
pnpm run fmt
```

Check formatting without writing files:

```sh
pnpm run fmt:check
```

## Next steps:

- [Quickstart](./formatter/quickstart)
- [Configuration](./formatter/config)
- [Setup editors](./formatter/editors)
- [Setup CI](./formatter/ci)

## Supported languages

Oxfmt formats JavaScript and TypeScript natively and supports many other file types commonly handled by Prettier, including:

- JavaScript, JSX
- TypeScript, TSX
- JSON, JSONC, JSON5
- YAML
- TOML
- HTML (including Angular, Vue, MJML)
- CSS, SCSS, Less
- Markdown, MDX
- GraphQL
- Ember, Handlebars

## Features

- [Import, package.json and tailwindcss sorting](./formatter/sorting)
- [Embedded formatting](./formatter/embedded-formatting)

## References

- [CLI reference](./formatter/cli)
- [Config file reference](./formatter/config)
- [Unsupported features](./formatter/unsupported-features)
