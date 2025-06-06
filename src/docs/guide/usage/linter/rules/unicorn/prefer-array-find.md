<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/prefer_array_find.rs`;
</script>

# unicorn/prefer-array-find <Badge type="info" text="Perf" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Encourages using `Array.prototype.find` instead of `filter(...)[0]` or
similar patterns when only the first matching element is needed.

### Why is this bad?

Using `filter(...)[0]` to get the first match is less efficient and more verbose
than using `find(...)`. `find` short-circuits when a match is found,
whereas `filter` evaluates the entire array.

### Examples

Examples of **incorrect** code for this rule:

```js
const match = users.filter(u => u.id === id)[0];
const match = users.filter(fn).shift();
```

Examples of **correct** code for this rule:

```js
const match = users.find(u => u.id === id);
const match = users.find(fn);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-array-find
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-array-find": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
