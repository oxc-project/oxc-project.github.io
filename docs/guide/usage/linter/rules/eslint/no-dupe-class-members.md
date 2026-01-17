---
url: /docs/guide/usage/linter/rules/eslint/no-dupe-class-members.md
---

### What it does

Disallow duplicate class members.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

If there are declarations of the same name in class members,
the last declaration overwrites other declarations silently. It can cause unexpected behaviors.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class A {
  foo() {
    console.log("foo");
  }
  foo = 123;
}
let a = new A();
a.foo(); // Uncaught TypeError: a.foo is not a function
```

Examples of **correct** code for this rule:

```javascript
class A {
  foo() {
    console.log("foo");
  }
}
let a = new A();
a.foo();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-dupe-class-members": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-dupe-class-members
```

:::

## References

* Rule Source
