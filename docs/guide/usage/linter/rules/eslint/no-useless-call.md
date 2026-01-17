---
url: /docs/guide/usage/linter/rules/eslint/no-useless-call.md
---

### What it does

Disallow unnecessary calls to `.call()` and `.apply()`

### Why is this bad?

`Function.prototype.call()` and `Function.prototype.apply()` are slower than the normal function invocation.

This rule compares code statically to check whether or not thisArg is changed.
So if the code about thisArg is a dynamic expression, this rule cannot judge correctly.

### Examples

Examples of **incorrect** code for this rule:

```js
// These are the same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);

// These are the same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);
```

Examples of **correct** code for this rule:

```js
// The `this` binding is different.
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);

// The argument list is variadic.
// Those are warned by the `prefer-spread` rule.
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-useless-call": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-useless-call
```

:::

## References

* Rule Source
