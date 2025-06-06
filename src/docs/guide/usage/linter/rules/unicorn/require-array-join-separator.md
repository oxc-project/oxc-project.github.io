<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/require_array_join_separator.rs`;
</script>

# unicorn/require-array-join-separator <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

Enforce using the separator argument with Array#join()

### Why is this bad?

It's better to make it clear what the separator is when calling Array#join(),
instead of relying on the default comma (',') separator.

### Examples

Examples of **incorrect** code for this rule:

```javascript
foo.join();
```

Examples of **correct** code for this rule:

```javascript
foo.join(",");
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/require-array-join-separator
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/require-array-join-separator": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
