<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/no_useless_promise_resolve_reject.rs`;
</script>

# unicorn/no-useless-promise-resolve-reject <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Disallows returning values wrapped in `Promise.resolve` or `Promise.reject` in an async function or a `Promise#then`/`catch`/`finally` callback.

### Why is this bad?

Wrapping a return value in `Promise.resolve` in an async function or a `Promise#then`/`catch`/`finally` callback is unnecessary as all return values in async functions and promise callback functions are already wrapped in a `Promise`. Similarly, returning an error wrapped in `Promise.reject` is equivalent to simply `throw`ing the error. This is the same for `yield`ing in async generators as well.

### Examples

Examples of **incorrect** code for this rule:

```javascript
(async () => Promise.resolve(bar));
```

Examples of **correct** code for this rule:

```javascript
(async () => bar);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-useless-promise-resolve-reject
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-promise-resolve-reject": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
