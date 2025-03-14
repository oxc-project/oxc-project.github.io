---
title: Oxlint Beta
outline: deep
authors:
  - boshen
  - camchenry
---

<AppBlogPostHeader />

We are thrilled to announce that oxlint is now in beta release, after more than a year of development by the community!

This milestone signifies feature completeness and stability.

## How to Use

At this stage, oxlint can be used to fully replace eslint in small to medium projects.

For larger projects, our advice is to turn off eslint rules via the eslint plugin [eslint-plugin-oxlint](https://www.npmjs.com/package/eslint-plugin-oxlint), and run oxlint before ESLint in your lint-staged or CI setup.

To test oxlint in your JavaScript / TypeScript codebase, execute the following command at the root directory of your repository:

::: code-group

```sh [npm]
$ npx oxlint@latest
```

```sh [pnpm]
$ pnpm dlx oxlint@latest
```

```sh [yarn]
$ yarn dlx oxlint@latest
```

```sh [bun]
$ bunx oxlint@latest
```

```sh [deno]
$ deno run npm:oxlint@latest
```

:::

Alternatively, refer to the [installation guide](/docs/guide/usage/linter) for detailed instructions.

## New Features since General Availability

* No performance regression.
* Over 500+ rules to choose from.
* Completed most rules from `typescript`, `unicorn`, `react`, `react-perf`, `nextjs`, `import`, `jsdoc`, `jsx-a11y`, `node`, `promise`, `jest`, `vitest` plugins.
* `.oxlintrc.json` [configuration file](/docs/guide/usage/linter/config.html#configuration-file-format).
* Lint `<script>` content in `.astro`, `.svelte` and `.vue` files.
* [automatic fixes](/docs/guide/usage/linter/automatic-fixes.html)
* [Nested config file discovery](/docs/guide/usage/linter/config.html#nesting-configuration-files).

## Next Major Release

Custom linter plugins written in JavaScript - we have completed all the prerequisites for authoring linter plugins.

## Acknowledgements

Oxlint beta would not have been possible without the 200 contributors.

Special thank you goes to:

- [@cam314](https://github.com/camc314), [@mysteryven](https://github.com/mysteryven), [shulaoda](https://github.com/shulaoda) for implementing many sophisticated lint rules, testing, and constantly improving everything.
- [@Sysix](https://github.com/Sysix) for maintaining `eslint-plugin-oxlint`.
- [@DonIsaac](https://github.com/DonIsaac) for improving configuration, documentation and website. For representing oxc in [Squiggle Conf](https://2024.squiggleconf.com).
- [@leaysgur](https://github.com/leaysgur) for the regex parser and jsdoc plugin.
- [@u9g](https://github.com/u9g) and [@rzvxa](https://github.com/rzvxa) for implementing the control flow graph.
- [@camchenry](https://github.com/camchenry) for implementing nested-config.
- [@branchseer](https://github.com/branchseer) for implementing the multi-file analysis runtime.
