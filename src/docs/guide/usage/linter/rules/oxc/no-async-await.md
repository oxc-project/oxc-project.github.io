<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/oxc/no_async_await.rs`;
</script>

# oxc/no-async-await <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallows the use of async/await.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function foo() {
  await bar();
  return baz();
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/no-async-await
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-async-await": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
