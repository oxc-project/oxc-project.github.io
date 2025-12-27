---
url: /docs/guide/usage/linter/rules/eslint/no-proto.md
---
# eslint/no-proto&#x20;

### What it does

Disallow the use of the `__proto__` property.

### Why is this bad?

The `__proto__` property has been deprecated as of ECMAScript 3.1 and
shouldn’t be used in new code. Use `Object.getPrototypeOf` and
`Object.setPrototypeOf` instead.

For more information, see
[the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

### Examples

Examples of **incorrect** code for this rule:

```javascript
/*eslint no-proto: "error"*/

var a = obj.__proto__;

var a = obj["__proto__"];

obj.__proto__ = b;

obj["__proto__"] = b;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-proto": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-proto
```

:::

## References

* Rule Source
