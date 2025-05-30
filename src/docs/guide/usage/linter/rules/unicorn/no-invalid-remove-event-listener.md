<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/no_invalid_remove_event_listener.rs`;
</script>

# unicorn/no-invalid-remove-event-listener <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

It warns when you use a non-function value as the second argument of `removeEventListener`.

### Why is this bad?

The [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) function must be called with a reference to the same function that was passed to [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Calling `removeEventListener` with an inline function or the result of an inline `.bind()` call is indicative of an error, and won't actually remove the listener.

### Examples

Examples of **incorrect** code for this rule:

```javascript
el.removeEventListener("click", () => {});
el.removeEventListener("click", function() {});
```

Examples of **correct** code for this rule:

```javascript
el.removeEventListener("click", handler);
el.removeEventListener("click", handler.bind(this));
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-invalid-remove-event-listener
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-invalid-remove-event-listener": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
