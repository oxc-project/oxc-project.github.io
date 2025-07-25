<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/react/jsx_key.rs`;
</script>

# react/jsx-key <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Enforce `key` prop for elements in array

### Why is this bad?

React requires a `key` prop for elements in an array to help identify which items have changed, are added, or are removed.

### Examples

Examples of **incorrect** code for this rule:

```jsx
[1, 2, 3].map(x => <App />);
[1, 2, 3]?.map(x => <BabelEslintApp />);
```

Examples of **correct** code for this rule:

```jsx
[1, 2, 3].map(x => <App key={x} />);
[1, 2, 3]?.map(x => <BabelEslintApp key={x} />);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny react/jsx-key --react-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-key": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
