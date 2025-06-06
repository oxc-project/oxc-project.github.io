<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/prefer_includes.rs`;
</script>

# unicorn/prefer-includes <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Prefer `includes()` over `indexOf()` when checking for existence or non-existence.
All built-ins have `.includes()` in addition to `.indexOf()`.

### Why is this bad?

The `.includes()` method is more readable and less error-prone than `.indexOf()`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (str.indexOf("foo") !== -1) {}
```

Examples of **correct** code for this rule:

```javascript
if (str.includes("foo")) {}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-includes
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-includes": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
