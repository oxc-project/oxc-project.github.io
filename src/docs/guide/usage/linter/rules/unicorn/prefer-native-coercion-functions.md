<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/prefer_native_coercion_functions.rs`;
</script>

# unicorn/prefer-native-coercion-functions <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Prefers built in functions, over custom ones with the same functionality.

### Why is this bad?

If a function is equivalent to [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), or [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), you should use the built-in one directly.
Wrapping the built-in in a function is moot.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = v => String(v);
foo(1);
const foo = v => Number(v);
array.some((v) => /* comment */ v);
```

Examples of **correct** code for this rule:

```javascript
String(1);
Number(1);
array.some(Boolean);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-native-coercion-functions
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-native-coercion-functions": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
