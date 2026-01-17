---
url: /docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.md
---

### What it does

This rule prefers borrowing methods from the prototype instead of the instance.

### Why is this bad?

“Borrowing” a method from an instance of `Array` or `Object` is less clear than getting it from the corresponding prototype.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const array = [].slice.apply(bar);
const type = {}.toString.call(foo);
Reflect.apply([].forEach, arrayLike, [callback]);
```

Examples of **correct** code for this rule:

```javascript
const array = Array.prototype.slice.apply(bar);
const type = Object.prototype.toString.call(foo);
Reflect.apply(Array.prototype.forEach, arrayLike, [callback]);
const maxValue = Math.max.apply(Math, numbers);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-prototype-methods": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-prototype-methods
```

:::

## References

* Rule Source
