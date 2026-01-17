---
url: /docs/guide/usage/linter/rules/eslint/no-undefined.md
---

### What it does

Disallow the use of `undefined` as an identifier

### Why is this bad?

Using undefined directly can lead to bugs, since it can be shadowed or overwritten in JavaScript.
It's safer and more intentional to use null or rely on implicit undefined (e.g., missing return) to avoid accidental issues.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = undefined;

var undefined = "foo";

if (foo === undefined) {
  // ...
}

function baz(undefined) {
  // ...
}

bar(undefined, "lorem");
```

Examples of **correct** code for this rule:

```javascript
var foo = void 0;

var Undefined = "foo";

if (typeof foo === "undefined") {
  // ...
}

global.undefined = "foo";

bar(void 0, "lorem");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-undefined": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-undefined
```

:::

## References

* Rule Source
