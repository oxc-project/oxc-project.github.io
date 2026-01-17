---
url: /docs/guide/usage/linter/rules/eslint/no-func-assign.md
---

### What it does

Disallow reassigning `function` declarations.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

Overwriting/reassigning a function written as a FunctionDeclaration is often indicative of
a mistake or issue.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function foo() {}
foo = bar;
```

```javascript
function foo() {
  foo = bar;
}
```

```javascript
let a = function hello() {
  hello = 123;
};
```

Examples of **correct** code for this rule:

```javascript
let foo = function () {};
foo = bar;
```

```javascript
function baz(baz) {
  // `baz` is shadowed.
  baz = bar;
}
```

```
function qux() {
  const qux = bar;  // `qux` is shadowed.
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-func-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-func-assign
```

:::

## References

* Rule Source
