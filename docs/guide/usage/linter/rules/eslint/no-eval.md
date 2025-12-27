---
url: /docs/guide/usage/linter/rules/eslint/no-eval.md
---
# eslint/no-eval&#x20;

### What it does

Disallows referencing the `eval` function. This rule is aimed at preventing
potentially dangerous, unnecessary, and slow code by disallowing the use of
the `eval()` function.

### Why is this bad?

JavaScript’s `eval()` function is potentially dangerous and is often misused.
Using `eval()` on untrusted code can open a program up to several different
injection attacks. The use of `eval()` in most contexts can be substituted for
a better, safer alternative approach to solving the problem, such as using
`JSON.parse()` or `Function` constructors in safer ways.

### Examples

Examples of **incorrect** code for this rule:

```js
const obj = { x: "foo" },
  key = "x",
  value = eval("obj." + key);

(0, eval)("const a = 0");

const foo = eval;
foo("const a = 0");

this.eval("const a = 0");
```

Examples of **correct** code for this rule:

```js
const obj = { x: "foo" },
  key = "x",
  value = obj[key];

class A {
  foo() {
    this.eval("const a = 0");
  }

  eval() {}

  static {
    this.eval("const a = 0");
  }

  static eval() {}
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowIndirect

type: `boolean`

default: `true`

This `allowIndirect` option allows indirect `eval()` calls.

Indirect calls to `eval`(e.g., `window['eval']`) are less dangerous
than direct calls because they cannot dynamically change the scope.
Indirect `eval()` calls also typically have less impact on performance
compared to direct calls, as they do not invoke JavaScript's scope chain.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-eval": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-eval
```

:::

## References

* Rule Source
