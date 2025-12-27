---
url: /docs/guide/usage/linter/rules/eslint/prefer-object-has-own.md
---
# eslint/prefer-object-has-own&#x20;

### What it does

Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`

### Why is this bad?

It is very common to write code like:

```javascript
if (Object.prototype.hasOwnProperty.call(object, "foo")) {
  console.log("has property foo");
}
```

This is a common practice because methods on Object.prototype can sometimes be unavailable or redefined (see the no-prototype-builtins rule).
Introduced in ES2022, Object.hasOwn() is a shorter alternative to Object.prototype.hasOwnProperty.call():

```javascript
if (Object.hasOwn(object, "foo")) {
  console.log("has property foo");
}
```

### Examples

Examples of **incorrect** code for this rule:

```js
Object.prototype.hasOwnProperty.call(obj, "a");
Object.hasOwnProperty.call(obj, "a");
({}).hasOwnProperty.call(obj, "a");
const hasProperty = Object.prototype.hasOwnProperty.call(object, property);
```

Examples of **correct** code for this rule:

```js
Object.hasOwn(obj, "a");
const hasProperty = Object.hasOwn(object, property);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-object-has-own": "error"
  }
}
```

```bash [CLI]
oxlint --deny prefer-object-has-own
```

:::

## References

* Rule Source
