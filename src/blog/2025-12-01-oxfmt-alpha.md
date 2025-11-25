---
title: Oxc Formatter Alpha
outline: deep
authors:
  - boshen
  - Dunqing
  - leaysgur
---

<AppBlogPostHeader />

We are excited to announce an alpha release for Oxfmt!

Oxfmt is a Rust-powered formatter, designed to be compatible with Prettier.

At this alpha stage, Oxfmt mainly focuses on formatting JS and TS files, but we hope you'll give it a try.

## Quick Start

To format files in your current working directory, simply run one of the following commands:

::: code-group

```sh [npm]
$ npx oxfmt@latest
```

```sh [pnpm]
$ pnpm dlx oxfmt@latest
```

```sh [yarn]
$ yarn dlx oxfmt@latest
```

```sh [bun]
$ bunx oxfmt@latest
```

```sh [deno]
$ deno run npm:oxfmt@latest
```

:::

Unlike Prettier, Oxfmt's default behavior is equivalent to `prettier . --write`, providing the same UX as `cargo fmt`.

This command produces no output by default. Use `--check` to see details if needed.

## Prettier compatible

The Oxc team always keeps compatibility with existing ecosystems in mind.

### Formatting results

Oxfmt is carefully implemented to match Prettier's formatting results as closely as possible.

We achieve excellent coverage - over [95%](https://github.com/oxc-project/oxc/tree/main/tasks/prettier_conformance/snapshots) for both JS and TS!

While not 100% compatible, this shouldn't be a concern.

This remaining gap includes cases where Oxfmt produces better formatting than Prettier. And some cases are confirmed as bugs in Prettier itself.
We're actively reporting issues and submitting PRs to Prettier, so the formatting results should converge over time.

For detailed differences, please refer to the following discussion:

> `Oxfmt` differences with `Prettier` · oxc-project/oxc · Discussion #14669\
> https://github.com/oxc-project/oxc/discussions/14669

But we believe you won't encounter these differences often in typical codebases.
We've manually verified Oxfmt on large codebases like [microsoft/vscode](https://github.com/microsoft/vscode) and found no major issues.

So, please let us know if you find any concerns.

Finally, note that our coverage is based on Prettier's `main` branch.
This means Oxfmt provides more stable formatting results compared to the current released version of Prettier (version `3.6.2` at the time of writing).

### Configuration

Additionally, configuration files and ignore files are also compatible with Prettier.

In the simplest case, your config migration experience looks like this:

```sh
cp .prettierrc.json .oxfmtrc.jsonc
```

Or, if your editor supports JSON language server, start with this minimal template after adding `oxfmt` to your dev dependencies:

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json"
}
```

While we don't support all options yet (especially experimental ones), we do support the following major options.

- `printWidth`
- `tabWidth`
- `useTabs`
- `semi`
- `singleQuote`
- `quoteProps`
- `jsxSingleQuote`
- `trailingComma`
- `bracketSpacing`
- `objectWrap`
- `bracketSameLine`
- `arrowParens`
- `endOfLine`
- `singleAttributePerLine`

(Listed in the order they appear in Prettier's [documentation](https://prettier.io/docs/options))

Additionally, we support `ignorePatterns`, which is familiar from ESLint configuration files.
While `.prettierignore` is also supported, using `ignorePatterns` allows you to consolidate everything into a single configuration file!

Please also refer to our Formatter [documentation page](/docs/guide/usage/formatter.html) for more details.

## `printWidth: 100` by default

While we have high coverage and compatible configuration files, this one change may generate many diffs in your codebase.

After thorough discussion, we've decided to adopt `printWidth: 100` as the default instead of Prettier's `80`, providing a better out-of-the-box experience.

> RFC: change oxfmt default print width from 80 to 100 · oxc-project/oxc · Discussion #15851\
> https://github.com/oxc-project/oxc/discussions/15851

If you prefer the old behavior, please add `printWidth: 80` to your configuration.
But we hope you'll like it too.

## Yet better performance

While Oxfmt demonstrates high compatibility with Prettier, performance is a different story — it runs incredibly fast!

Our benchmark result on the [Outline](https://github.com/outline/outline) repository shows:

- Over 30x faster than Prettier on the first run without cache
- Over 20x faster even when using `@prettier/plugin-oxc`
- Over 3x faster than Biome, another Rust-based formatter

While each tool implements different behavior and features, and these numbers may fluctuate as we add functionality, this is a solid starting point.

For detailed benchmark setup, please refer to the following repository:

> oxc-project/bench-formatter\
> https://github.com/oxc-project/bench-formatter

## What's next

While the timeline is not yet determined, we are planning the following initiatives for our next milestone — the beta release.

First, stabilize experimental options currently disabled by default.

- `embeddedLanguageFormatting`
  - Support for embedded languages like CSS-in-JS
  - Currently, we have partial support only for non-substitution templates
- `experimentalSortImports`
  - Built-in support for the in-demand `prettier-plugin-sort-imports` functionality
  - Based on more configurable `eslint-plugin-perfectionist/sort-imports` rule

Next, we plan to support files that Prettier handles natively without plugins, such as `.json` files.

And more, we also plan to support more major Prettier plugins.

This primarily means support for popular frameworks like Svelte and Astro. We've also noticed demand for `prettier-plugin-tailwindcss` support.

The implementation approach is currently under active research and discussion. Stay tuned for updates.

> Formatter Beta · Milestone #15 · oxc-project/oxc\
> https://github.com/oxc-project/oxc/milestone/15

Needless to say, we will continue working daily on performance improvements and CLI UX enhancements!

## Join the Community

> RFC: Formatter · oxc-project/oxc · Discussion #13608\
> https://github.com/oxc-project/oxc/discussions/13608

We welcome your feedback to help make Oxfmt even better!

## Acknowledgements

- Thanks biome, rome and everyone who contributed
  - Especially [@ematipico](https://github.com/ematipico) and [@MichaReiser](https://github.com/MichaReiser)
  - Oxfmt is using a fork of `biome_formatter` infrastructure
- Thanks [@fisker](https://github.com/fisker) for triaging our reported issues for Prettier
