<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_const_assign.rs`;
</script>

# eslint/no-const-assign <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow reassigning `const` variables.

### Why is this bad?

We cannot modify variables that are declared using const keyword.
It will raise a runtime error.

### Examples

Examples of **incorrect** code for this rule:

```js
const a = 0;
a = 1;

const b = 0;
b += 1;
```

Examples of **correct** code for this rule:

```js
const a = 0;
console.log(a);

var b = 0;
b += 1;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-const-assign
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-const-assign": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
