<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/import/group_exports.rs`;
</script>

# import/group-exports <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Reports when named exports are not grouped together in a single export declaration
or when multiple assignments to CommonJS module.exports
or exports object are present in a single file.

### Why is this bad?

An export declaration or module.exports assignment can appear anywhere in the code.
By requiring a single export declaration all your exports will remain at one place,
making it easier to see what exports a module provides.

### Examples

Examples of **incorrect** code for this rule:

```js
export const first = true;
export const second = true;
```

Examples of **correct** code for this rule:

```js
const first = true;
const second = true;
export { first, second };
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny import/group-exports --import-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/group-exports": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
