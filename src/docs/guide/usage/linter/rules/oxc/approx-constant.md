<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/oxc/approx_constant.rs`;
</script>

# oxc/approx-constant <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

Disallows the use of approximate constants, instead preferring the use
of the constants in the `Math` object.

### Why is this bad?

Approximate constants are not as accurate as the constants in the `Math` object.

### Examples

Examples of **incorrect** code for this rule:

```javascript
let log10e = 0.434294;
```

Examples of **correct** code for this rule:

```javascript
let log10e = Math.LOG10E;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/approx-constant
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/approx-constant": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
