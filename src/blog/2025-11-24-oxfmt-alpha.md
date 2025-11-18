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

At this alpha stage, Oxfmt can only format JS and TS files, but we hope you'll give it a try.

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

This command produces no output by default. Use `--check` to see details.

## Prettier compatible

The Oxc team always keeps compatibility with existing ecosystems in mind.

### Formatting results

Therefore, Oxfmt is carefully implemented to match Prettier's formatting results as closely as possible.
While not 100% compatible, we achieve excellent coverage, as demonstrated by our test results:

> TODO: The latest coverage numbers here...

Of course, there are cases where we believe Oxfmt produces better formatting than Prettier, and these will produce different results.

We are also actively reporting bugs and submitting PRs to Prettier itself, so the formatting results between the two should converge even more over time.

For detailed differences, please refer to the following discussion:

> `Oxfmt` differences with `Prettier` · oxc-project/oxc · Discussion #14669\
> https://github.com/oxc-project/oxc/discussions/14669

### Configuration

Additionally, configuration files and ignore files are also compatible with Prettier.

In the simplest case, migrating your configuration file looks like this:

```sh
cp .prettierrc.json .oxfmtrc.jsonc
```

Or, start with this minimal template after adding `oxfmt` to your dev dependencies:

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json"
}
```

While we don't support all options yet, we do support the following major options.

- `experimentalOperatorPosition`
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

## Yet better performance

While Oxfmt demonstrates high compatibility with Prettier, performance is a different story — it runs incredibly fast!

Check out our benchmark results on the [Outline](https://github.com/outline/outline) repository:

> TODO: Benchmark numbers with the latest release here...

For detailed benchmark setup, please refer to the following repository:

> oxc-project/bench-formatter\
> https://github.com/oxc-project/bench-formatter/tree/main

## What's next

While the timeline is not yet determined, we are planning the following initiatives for our next milestone — the beta release:

First, stabilize experimental options disabled by default.

- `embeddedLanguageFormatting`
  - Support for embedded languages like CSS-in-JS
  - Currently, partially supported only for non-substitution template
- `experimentalSortImports`
  - Built-in support for the highly-demanded `prettier-plugin-sort-imports` functionality
  - Based on `eslint-plugin-perfectionist/sort-imports` rule

And next, support more major Prettier plugins.

It means primarily support for popular frameworks like Vue, Svelte, and Astro.
he implementation approach is currently under active research and discussion.

> Formatter Beta · Milestone #15 · oxc-project/oxc\
> https://github.com/oxc-project/oxc/milestone/15

Needless to say, we will continue working daily on performance improvements and CLI UX enhancements!

## Join the Community

> RFC: Formatter · oxc-project/oxc · Discussion #13608\
> https://github.com/oxc-project/oxc/discussions/13608

We welcome your feedback to help make Oxfmt even better!

## Acknowledgements

- Thanks biome, rome and everyone who contributed to
  - Especially [@ematipico](https://github.com/ematipico) and [@MichaReiser](https://github.com/MichaReiser)
  - Oxfmt is using fork of `biome_formatter` infrastructure
- Thanks [@fisker](https://github.com/fisker) for triaging our reported issues
