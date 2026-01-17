---
url: /docs/guide/usage/linter/rules/oxc/only-used-in-recursion.md
---

### What it does

Checks for arguments that are only used in recursion with no side-effects.

Inspired by https://rust-lang.github.io/rust-clippy/master/#/only\_used\_in\_recursion

### Why is this bad?

Supplying an argument that is only used in recursive calls is likely a mistake.

It increase cognitive complexity and may impact performance.

### Examples

Examples of **incorrect** code for this rule:

```ts
function test(only_used_in_recursion) {
  return test(only_used_in_recursion);
}
```

Examples of **correct** code for this rule:

```ts
function f(a: number): number {
  if (a == 0) {
    return 1;
  } else {
    return f(a - 1);
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/only-used-in-recursion": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/only-used-in-recursion
```

:::

## References

* Rule Source
