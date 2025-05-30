<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/react/react_in_jsx_scope.rs`;
</script>

# react/react-in-jsx-scope <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

Disallow missing React when using JSX

### Why is this bad?

When using JSX, `<a />` expands to `React.createElement("a")`. Therefore
the `React` variable must be in scope.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var a = <a />;
```

Examples of **correct** code for this rule:

```jsx
import React from "react";
var a = <a />;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny react/react-in-jsx-scope --react-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
