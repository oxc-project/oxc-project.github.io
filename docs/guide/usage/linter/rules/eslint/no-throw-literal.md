---
url: /docs/guide/usage/linter/rules/eslint/no-throw-literal.md
---
# eslint/no-throw-literal&#x20;

### What it does

Disallows throwing literals or non-Error objects as exceptions.

### Why is this bad?

It is considered good practice to only throw the Error object itself or an object using
the Error object as base objects for user-defined exceptions. The fundamental benefit of
Error objects is that they automatically keep track of where they were built and originated.

### Examples

Examples of **incorrect** code for this rule:

```js
throw "error";

throw 0;

throw undefined;

throw null;

var err = new Error();
throw "an " + err;
// err is recast to a string literal

var err = new Error();
throw `${err}`;
```

Examples of **correct** code for this rule:

```js
throw new Error();

throw new Error("error");

var e = new Error("error");
throw e;

try {
  throw new Error("error");
} catch (e) {
  throw e;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-throw-literal": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-throw-literal
```

:::

## References

* Rule Source
