---
url: /docs/guide/usage/linter/rules/unicorn/no-process-exit.md
---
# unicorn/no-process-exit&#x20;

### What it does

Disallow `process.exit()`.

### Why is this bad?

Only use `process.exit()` in CLI apps. Throw an error instead.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (problem) process.exit(1);
```

Examples of **correct** code for this rule:

```javascript
if (problem) throw new Error("message");
```

```
#!/usr/bin/env node
if (problem) process.exit(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-process-exit": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-process-exit
```

:::

## References

* Rule Source
