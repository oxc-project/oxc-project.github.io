---
url: /docs/guide/usage/linter/rules/eslint/prefer-spread.md
---
# eslint/prefer-spread&#x20;

This rule is combined 2 rules from `eslint:prefer-spread` and `unicorn:prefer-spread`.

### What it does

Require spread operators instead of .apply()

### Why is this bad?

Before ES2015, one must use Function.prototype.apply() to call variadic functions.

```javascript
var args = [1, 2, 3, 4];
Math.max.apply(Math, args);
```

In ES2015, one can use spread syntax to call variadic functions.

```javascript
var args = [1, 2, 3, 4];
Math.max(...args);
```

### Examples

Examples of **incorrect** code for this rule:

```javascript
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

Examples of **correct** code for this rule:

```javascript
// Using spread syntax
foo(...args);
obj.foo(...args);

// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);

// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-spread": "error"
  }
}
```

```bash [CLI]
oxlint --deny prefer-spread
```

:::

## References

* Rule Source
