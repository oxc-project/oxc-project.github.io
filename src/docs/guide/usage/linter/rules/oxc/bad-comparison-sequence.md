<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/oxc/bad_comparison_sequence.rs`;
</script>

# oxc/bad-comparison-sequence <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

This rule applies when the comparison operator is applied two or more times in a row.

### Why is this bad?

Because comparison operator is a binary operator, it is impossible to compare three or more operands at once.
If comparison operator is used to compare three or more operands, only the first two operands are compared and the rest is compared with its result of boolean type.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (a == b == c) {
  console.log("a, b, and c are the same");
}
```

Examples of **correct** code for this rule:

```javascript
if (a == b && b == c) {
  console.log("a, b, and c are the same");
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/bad-comparison-sequence
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-comparison-sequence": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
