<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/no_lonely_if.rs`;
</script>

# unicorn/no-lonely-if <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Disallow `if` statements as the only statement in `if` blocks without `else`.

### Why is this bad?

It can be confusing to have an `if` statement without an `else` clause as the only statement in an `if` block.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (foo) {
  if (bar) {
  }
}
if (foo) { if (bar) baz(); }
```

Examples of **correct** code for this rule:

```javascript
if (foo && bar) {
}
if (foo && bar) baz();
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-lonely-if
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-lonely-if": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
