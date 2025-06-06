<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/prefer_string_slice.rs`;
</script>

# unicorn/prefer-string-slice <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Prefer [`String#slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) over [`String#substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) and [`String#substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

### Why is this bad?

[`String#substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) and [`String#substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) are the two lesser known legacy ways to slice a string. It's better to use [`String#slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) as it's a more popular option with clearer behavior that has a consistent [`Array` counterpart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

### Examples

Examples of **incorrect** code for this rule:

```javascript
"foo".substr(1, 2);
```

Examples of **correct** code for this rule:

```javascript
"foo".slice(1, 2);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-string-slice
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-string-slice": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
