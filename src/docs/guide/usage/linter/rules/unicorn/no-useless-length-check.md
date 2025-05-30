<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/no_useless_length_check.rs`;
</script>

# unicorn/no-useless-length-check <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

It checks for an unnecessary array length check in a logical expression.

The cases are:

- `array.length === 0 || array.every(Boolean)` (`array.every` returns `true` if array is has elements)
- `array.length > 0 && array.some(Boolean)` (`array.some` returns `false` if array is empty)

### Why is this bad?

An extra unnecessary length check is done.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (array.length === 0 || array.every(Boolean)) {
  // do something!
}
```

Examples of **correct** code for this rule:

```javascript
if (array.every(Boolean)) {
  // do something!
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-useless-length-check
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-length-check": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
