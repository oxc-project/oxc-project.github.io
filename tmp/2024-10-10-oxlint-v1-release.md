---
title: Oxlint v1 Release
outline: deep
authors:
  - don
editLink: false
---

<AppBlogPostHeader />

We're thrilled to announce the release of Oxlint v1! This release includes
several exciting features, including many improvements to configuration files.

<!-- todo: other features -->

## Configuration Features

Configuration files now support the `plugins` array from ESLint v8 configs.
This allows you to enable plugins without CLI arguments, making it possible to
use plugins in VSCode.

::: code-group

```jsonc [oxlintrc.json]
{
  "plugins": ["@typescript-eslint", "react", "next"], // [!code ++]
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
}
```

:::

# Breaking Changes and Migration Guide

## CLI vs Config File Rule Priority

Before, config files would override rules set in CLI arguments. For example, running this command:

```sh
oxlint -A correctness -c oxlintrc.json
```

With this config file

::: code-group

```jsonc [oxlintrc.json]
{
  "rules": {
    "no-const-assign": "error",
  },
}
```

:::

Would result in a single rule, `no-const-assign` being turned on at an error level with all other rules disabled (i.e. set to "allow").

Now, **CLI arguments will override config files**. That same command with the
same config file will result with **all rules being disabled**. To get the same
behavior as before, enable and disable categories in your config file.

::: code-group

```jsonc [oxlintrc.json]
{
  "categories": {
    // [!code ++]
    "correctness": "allow", // [!code ++]
  }, // [!code ++]
  "rules": {
    "no-const-assign": "error",
  },
}
```

:::
