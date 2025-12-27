---
url: /docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.md
---
# unicorn/require-post-message-target-origin&#x20;

### What it does

Enforce using the targetOrigin argument with window.postMessage()

### Why is this bad?

When calling window.postMessage() without the targetOrigin argument,
the message cannot be received by any window.

### Examples

Examples of **incorrect** code for this rule:

```js
window.postMessage(message);
```

Examples of **correct** code for this rule:

```js
window.postMessage(message, "https://example.com");

window.postMessage(message, "*");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/require-post-message-target-origin": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/require-post-message-target-origin
```

:::

## References

* Rule Source
