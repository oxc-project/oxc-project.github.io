---
url: /docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.md
---
# unicorn/prefer-reflect-apply&#x20;

### What it does

### Why is this bad?

`Reflect.apply()` is arguably less verbose and easier to understand.
In addition, when you accept arbitrary methods,
it's not safe to assume `.apply()` exists or is not overridden.

### Examples

Examples of **incorrect** code for this rule:

```javascript
foo.apply(null, [42]);
```

Examples of **correct** code for this rule:

```javascript
Reflect.apply(foo, null);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-reflect-apply": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-reflect-apply
```

:::

## References

* Rule Source
