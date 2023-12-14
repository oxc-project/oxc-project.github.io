---
title: Oxlint General Availability
outline: deep
authors:
  - boshen
---

<AppBlogPostHeader />

We're thrilled to announce that oxlint is now generally available!
This milestone signifies our team's ability to promptly address and triage issues.

Oxlint is a JavaScript linter designed to catch erroneous or useless code without requiring any configurations by default.

## How to Use

At this stage, oxlint is **not intended to fully replace ESLint**; it serves as an enhancement when ESLint's slowness becomes a bottleneck in your workflow.

For faster feedback loops, we recommend running oxlint before ESLint in your lint-staged or CI setup, considering it only takes a few seconds to run on large codebases.

To test oxlint in your JavaScript / TypeScript codebase, simply execute the following command at the root directory of your repository:

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
$ deno run oxlint@latest
```

:::

Alternatively, refer to the [installation guide](/docs/guide/usage/linter) for detailed instructions.

## Design

### 50-100 Times Faster than ESLint

In real-world scenarios, Shopify reported that their 75 CI minutes ESLint run is now only 10 seconds.

From Jason Miller, Shopify DX and creator of Preact:

> oxlint has been a massive win for us at Shopify. Our previous linting setup took 75 minutes to run, so we were fanning it out across 40+ workers in CI.
>
> By comparison, oxlint takes around 10 seconds to lint the same codebase on a single worker, and the output is easier to interpret.
>
> We even caught a few bugs that were hidden or skipped by our old setup when we migrated!

The majority of the performance gains stem from Oxlint being purposefully designed for performance, utilizing Rust and parallel processing as key factors.

### Lint for Correctness

Oxlint defaults to identifying erroneous, redundant, or confusing code — prioritizing correctness over unnecessary nitpicking rules (categorized as `perf`, `suspicious`, `pedantic`, or `style`), which are disabled by default.

### Ease of Use

Setting up new JavaScript / TypeScript codebases is becoming increasingly complex.
There's a high likelihood of encountering compatibility issues among your tools, potentially resulting in hours of wasted time.

That's why we designed oxlint to be zero-config out of the box; even Node.js is not a requirement.
Most adjustments can be made through the command-line, and reading from ESLint configuration file is currently work in progress.

### Enhanced Diagnostics

Understanding linter messages can be challenging.
Oxlint aims to simplify this by pinpointing root causes and providing helpful messages — eliminating the need for lengthy rule documentation reading, saving valuable time.

Running `oxlint -D perf` in the [vscode repository](https://github.com/microsoft/vscode):

<img width="100%" src="https://github.com/oxc-project/oxc/assets/1430279/094a3b24-0433-42ae-aad2-48a7dec2b985" >

### Consolidated Rules

Oxlint does not provide a plugin system yet, but we are actively consolidating rules from popular plugins like TypeScript, React, Jest, Unicorn, JSX-a11y and Import.

We recognize the importance of plugins in the JavaScript ecosystem and are also investigating a DSL-based plugin system.

However, you might appreciate a standalone linter — no need to manage a list of plugin dependencies,
navigate through [compatibility issues](https://github.com/antfu/eslint-ts-patch),
or [resort to forked plugins due to version constraints](https://github.com/import-js/eslint-plugin-import/pull/2504#issuecomment-1191057877).

---

Happy linting and have a joyful holiday season!

To get started, follow the [installation guide](/docs/guide/usage/linter), or [learn more about the oxc project](/docs/guide/introduction.html).
