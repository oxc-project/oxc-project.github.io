---
url: /docs/guide/usage/linter/rules/oxc/no-async-await.md
---
# oxc/no-async-await&#x20;

### What it does

Disallows the use of `async`/`await`.

This rule should generally not be used in modern JavaScript/TypeScript
codebases without good reason.

### Why is this bad?

This rule is useful for environments that don't support `async`/`await` syntax,
or when you want to enforce the use of promises or other asynchronous
patterns instead. It can also be used to maintain consistency in codebases
that use alternative async patterns.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function foo() {
  await bar();
  return baz();
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-async-await": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/no-async-await
```

:::

## References

* Rule Source
