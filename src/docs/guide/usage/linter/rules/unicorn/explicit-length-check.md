<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/explicit_length_check.rs`;
</script>

# unicorn/explicit-length-check <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

Enforce explicitly comparing the length or size property of a value.

The non-zero option can be configured with one of the following:
greater-than (default)
Enforces non-zero to be checked with: foo.length > 0
not-equal
Enforces non-zero to be checked with: foo.length !== 0

### Why is this bad?

### Examples

Examples of **incorrect** code for this rule:

```javascript
const isEmpty = foo.length == 0;
const isEmpty = foo.length < 1;
const isEmpty = 0 === foo.length;
const isEmpty = 0 == foo.length;
const isEmpty = 1 > foo.length;

const isEmpty = !foo.length;
const isEmpty = !(foo.length > 0);
const isEmptySet = !foo.size;
```

Examples of **correct** code for this rule:

```javascript
const isEmpty = foo.length === 0;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/explicit-length-check
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/explicit-length-check": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
