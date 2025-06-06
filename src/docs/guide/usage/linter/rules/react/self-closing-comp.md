<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/react/self_closing_comp.rs`;
</script>

# react/self-closing-comp <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Detects components without children which can be self-closed to avoid unnecessary extra
closing tags.

A self closing component which contains whitespace is allowed except when it also contains
a newline.

### Examples

Examples of **incorrect** code for this rule:

```jsx
const elem = <Component linter="oxlint"></Component>;
const dom_elem = <div id="oxlint"></div>;
const welem = (
  <div id="oxlint">
  </div>
);
```

Examples of **correct** code for this rule:

```jsx
const elem = <Component linter="oxlint" />;
const welem = <Component linter="oxlint"></Component>;
const dom_elem = <div id="oxlint" />;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny react/self-closing-comp --react-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/self-closing-comp": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
