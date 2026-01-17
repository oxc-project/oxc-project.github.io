---
url: /docs/guide/usage/linter/rules/unicorn/no-new-buffer.md
---

### What it does

Disallows the deprecated `new Buffer()` constructor.

### Why is this bad?

Enforces the use of [Buffer.from](https://nodejs.org/api/buffer.html#static-method-bufferfromarray) and [Buffer.alloc()](https://nodejs.org/api/buffer.html#static-method-bufferallocsize-fill-encoding) instead of [new Buffer()](https://nodejs.org/api/buffer.html#new-bufferarray), which has been deprecated since Node.js 4.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const buffer = new Buffer(10);
```

Examples of **correct** code for this rule:

```javascript
const buffer = Buffer.alloc(10);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-new-buffer": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-new-buffer
```

:::

## References

* Rule Source
