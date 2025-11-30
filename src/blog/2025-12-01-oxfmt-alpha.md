---
title: "Oxfmt: Oxc Formatter Alpha"
outline: deep
authors:
  - boshen
  - Dunqing
  - leaysgur
---

<AppBlogPostHeader />

We’re excited to announce the alpha release of **Oxfmt**, a Rust-powered, Prettier-compatible code formatter. This first release focuses on JavaScript and TypeScript, with support for additional languages coming soon.

Oxfmt is designed with these goals in mind:

- **Performance:** More than 30× faster than Prettier and more than 3× faster than Biome on an initial run without cache ([**benchmark**](https://github.com/oxc-project/bench-formatter)).
- **Compatibility:** Prettier-compatible, so you can adopt Oxfmt in existing projects easily.
- **Developer Experience:** Upcoming features include import sorting, expanded formatting options, and support for Prettier plugins.

## **Quick Start**

Add `oxfmt` to your project:

::: code-group

```bash
$ npm install -D oxfmt@latest
```

```bash
$ pnpm add -D oxfmt@latest
```

```bash
$ yarn add -D oxfmt@latest
```

```bash
$ bun add -D oxfmt@latest
```

```bash
$ deno add -D npm:oxfmt@latest
```

:::

Oxfmt follows Prettier’s configuration format. If you are using Prettier with a JSON configuration file, you can rename it to `.oxfmtrc.jsonc`:

```jsx
cp .prettierrc.json .oxfmtrc.jsonc
```

You can also start from this `.oxfmtrc.jsonc` configuration example:

```jsx
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "printWidth": 80, // Use 80 if migrating from Prettier; 100 is the Oxfmt default
  "ignorePatterns": [] // Same as `.prettierignore`
}
```

Next, add `oxfmt` to your package.json scripts:

```jsx
"scripts": {
  "format": "oxfmt"
}
```

Alternatively, refer to the [installation guide](/docs/guide/usage/formatter.html) for detailed instructions.

## Performance

Oxfmt is incredibly fast. Our benchmark results on the [Outline](https://github.com/outline/outline) repository show:

- Over 30× faster than Prettier’s experimental CLI without cache
- Over 20× faster than Prettier using Oxc’s parser via `@prettier/plugin-oxc`
- Over 3× faster than Biome, another Rust-based formatter

For detailed benchmark setup, please refer to the following repository:

> oxc-project/bench-formatter\
> https://github.com/oxc-project/bench-formatter

## Design

The Oxc team prioritizes compatibility with existing ecosystems, making migrations straightforward, even for large codebases.

### Code formatting results

Oxfmt matches Prettier’s JavaScript formatting. If you are migrating to Oxfmt today, you shouldn’t see any formatting differences compared to Prettier.

You might see minor differences when migrating from older versions of Prettier ([See an example migration](https://github.com/SBoudrias/Inquirer.js/pull/1912)) because we identified areas in which Prettier’s formatting could be improved. We have been actively collaborating with the Prettier team by submitting bug reports and pull requests directly to Prettier. Many of these improvements landed in the recent [Prettier 3.7](https://prettier.io/blog/2025/11/27/3.7.0) release.

Oxfmt currently passes around [95%](https://github.com/oxc-project/oxc/tree/main/tasks/prettier_conformance/snapshots) of Prettier’s JavaScript and TypeScript tests, and we hope to work with the Prettier team to converge on formatting over time.

### `printWidth: 100` by default

We chose `printWidth: 100` as the default line length instead of Prettier's `80`. Our reasons include:

- TypeScript code tends to be longer than JavaScript due to type annotations.
- Import statements often contain many items.
- Larger screens provide more horizontal space.
- Results in slightly fewer LLM tokens.

While Oxfmt remains compatible with Prettier, it uses a different default print width of 100 characters. If you want to avoid large diffs when migrating from Prettier, explicitly set the print width to 80.

## `ignorePatterns`

While Oxfmt supports `.prettierignore`, it also supports an `ignorePatterns` configuration option to consolidate all configuration into a single file.

### Configuration

Prettier JSON configuration files are compatible with Oxfmt. In the simplest case, migrating your config looks like this:

```bash
cp .prettierrc.json .oxfmtrc.jsonc
```

If your editor supports the JSON language server, you can start with this minimal template after adding `oxfmt` to your `devDependencies`:

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "ignorePatterns": []
}
```

While we don’t yet support all of Prettier’s configuration options in this alpha release, we do support the following major options: `printWidth`, `tabWidth`, `useTabs`, `semi`, `singleQuote`, `quoteProps`, `jsxSingleQuote`, `trailingComma`, `bracketSpacing`, `objectWrap`, `bracketSameLine`, `arrowParens`, `endOfLine`, and`singleAttributePerLine`.

Check out all of the options in our [documentation](https://oxc.rs/docs/guide/usage/formatter.html#configuration-file).

### Terminal Output

Oxfmt's default behavior is equivalent to `prettier . --write`, providing the same UX as `cargo fmt` and producing no output. You can use `--check` to see details.

## Beta Release Plans

Here are our plans for the beta release:

- [Support more file formats](https://github.com/oxc-project/oxc/issues/15899) and [add support for embedded language formatting](https://github.com/oxc-project/oxc/issues/15180) - css in js or js in markdown
- [Built-in sorting and aesthetics features](https://github.com/oxc-project/oxc/issues/13610), such as [sort imports](https://github.com/oxc-project/oxc/issues/14253)
- [Prettier plugins](https://github.com/oxc-project/oxc/issues/15665)
- [Node.js API for Oxfmt](https://github.com/oxc-project/oxc/issues/15913)
- [Disable newline at the end of file](https://github.com/oxc-project/oxc/issues/15066)
- [`--migrate prettier`](https://github.com/oxc-project/oxc/issues/15849)
- _… and your feature requests_

You can track our progress towards the beta release here:

> Formatter Beta · Milestone #15 · oxc-project/oxc\
> https://github.com/oxc-project/oxc/milestone/15

We also plan to relax some of the formatting opinions in future versions.

## Next Steps

See the full installation guide in the [Oxfmt docs](https://oxc.rs/docs/guide/usage/formatter.html).

### Reporting Issues

For formatting differences, please refer to [https://github.com/oxc-project/oxc/discussions/14669](https://github.com/oxc-project/oxc/discussions/14669)

For other bugs, please [create a GitHub issue(https://github.com/oxc-project/oxc/issues/new/choose).

### Join the Community

> RFC: Formatter · oxc-project/oxc · Discussion #13608\
> https://github.com/oxc-project/oxc/discussions/13608

We welcome your feedback to help make Oxfmt even better!

## Acknowledgements

Oxfmt builds on a fork of the `biome_formatter` infrastructure, and we’d like to thank the Biome team, especially [@ematipico](https://github.com/ematipico) and [@MichaReiser](https://github.com/MichaReiser). We’d also like to thank the Prettier team and [@fisker](https://github.com/fisker) for collaborating with us on formatting compatibility.
