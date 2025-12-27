---
url: /docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.md
---
# eslint/no-unexpected-multiline&#x20;

### What it does

In most cases, semicolons are not required in JavaScript in order for code to be parsed
and executed as expected. Typically this occurs because semicolons are automatically
inserted based on a fixed set of rules. This rule exists to detect those cases where a semicolon
is NOT inserted automatically, and may be parsed differently than expected.

### Why is this bad?

Code that has unexpected newlines may be parsed and executed differently than what the
developer intended. This can lead to bugs that are difficult to track down.

### Examples

Examples of **incorrect** code for this rule:

```js
var a = b(x || y).doSomething();

var a = b[(a, b, c)].forEach(doSomething);

let x = (function () {})`hello`;

foo / bar / g.test(baz);
```

Examples of **correct** code for this rule:

```js
var a = b;
(x || y).doSomething();

var a = b;
[a, b, c].forEach(doSomething);

let x = function () {};
`hello`;

foo;
/bar/g.test(baz);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unexpected-multiline": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unexpected-multiline
```

:::

## References

* Rule Source
