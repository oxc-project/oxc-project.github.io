<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/prefer_code_point.rs`;
</script>

# unicorn/prefer-code-point <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Prefers usage of `String.prototype.codePointAt` over `String.prototype.charCodeAt`.
Prefers usage of `String.fromCodePoint` over `String.fromCharCode`.

### Why is this bad?

Unicode is better supported in [`String#codePointAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) and [`String.fromCodePoint()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint).

[Difference between `String.fromCodePoint()` and `String.fromCharCode()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#compared_to_fromcharcode)

### Examples

Examples of **incorrect** code for this rule:

```javascript
"🦄".charCodeAt(0);
String.fromCharCode(0x1f984);
```

Examples of **correct** code for this rule:

```javascript
"🦄".codePointAt(0);
String.fromCodePoint(0x1f984);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-code-point
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-code-point": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
