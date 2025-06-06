<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/numeric_separators_style.rs`;
</script>

# unicorn/numeric-separators-style <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Enforces a convention of grouping digits using numeric separators.

### Why is this bad?

Long numbers can become really hard to read, so cutting it into groups of digits,
separated with a _, is important to keep your code clear. This rule also enforces
a proper usage of the numeric separator, by checking if the groups of digits are
of the correct size.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const invalid = [
  1_23_4444,
  1_234.56789,
  0xAB_C_D_EF,
  0b10_00_1111,
  0o1_0_44_21,
  1_294_28771_2n,
];
```

Examples of **correct** code for this rule:

```javascript
const valid = [
  1_234_567,
  1_234.567_89,
  0xAB_CD_EF,
  0b1000_1111,
  0o10_4421,
  1_294_287_712n,
];
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/numeric-separators-style
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/numeric-separators-style": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
