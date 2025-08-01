<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_extra_bind.rs`;
</script>

# eslint/no-extra-bind <Badge type="info" text="Suspicious" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Disallow unnecessary calls to .bind()

### Why is this bad?

This rule is aimed at avoiding the unnecessary use of bind()
and as such will warn whenever an immediately-invoked function expression (IIFE) is using bind()
and doesn’t have an appropriate this value.
This rule won’t flag usage of bind() that includes function argument binding.

### Examples

Examples of **incorrect** code for this rule:

```js
const x = function() {
  foo();
}.bind(bar);

const z = (() => {
  this.foo();
}).bind(this);
```

Examples of **correct** code for this rule:

```js
const x = function() {
  this.foo();
}.bind(bar);
const y = function(a) {
  return a + 1;
}.bind(foo, bar);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-extra-bind
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-extra-bind": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
