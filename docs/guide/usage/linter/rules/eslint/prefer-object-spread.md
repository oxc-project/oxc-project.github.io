---
url: /docs/guide/usage/linter/rules/eslint/prefer-object-spread.md
---
# eslint/prefer-object-spread&#x20;

### What it does

Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead

### Why is this bad?

When `Object.assign` is called using an object literal as the first argument, this rule requires using the object spread syntax instead. This rule also warns on cases where an `Object.assign` call is made using a single argument that is an object literal, in this case, the `Object.assign` call is not needed.

### Examples

Examples of **incorrect** code for this rule:

```js
Object.assign({}, foo);

Object.assign({}, { foo: "bar" });

Object.assign({ foo: "bar" }, baz);

Object.assign({}, baz, { foo: "bar" });

Object.assign({}, { ...baz });

// Object.assign with a single argument that is an object literal
Object.assign({});

Object.assign({ foo: bar });
```

Examples of **correct** code for this rule:

```js
({ ...foo });

({ ...baz, foo: "bar" });

// Any Object.assign call without an object literal as the first argument
Object.assign(foo, { bar: baz });

Object.assign(foo, bar);

Object.assign(foo, { bar, baz });

Object.assign(foo, { ...baz });
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-object-spread": "error"
  }
}
```

```bash [CLI]
oxlint --deny prefer-object-spread
```

:::

## References

* Rule Source
