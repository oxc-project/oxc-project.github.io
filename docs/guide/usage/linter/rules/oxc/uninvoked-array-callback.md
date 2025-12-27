---
url: /docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.md
---
# oxc/uninvoked-array-callback&#x20;

### What it does

This rule applies when an Array function has a callback argument used for an array with empty slots.

### Why is this bad?

When the Array constructor is called with a single number argument, an array with the specified number of empty slots (not actual undefined values) is constructed.
If a callback function is passed to the function of this array, the callback function is never invoked because the array has no actual elements.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const list = new Array(5).map((_) => createElement());
```

Examples of **correct** code for this rule:

```javascript
const list = new Array(5).fill().map((_) => createElement());
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/uninvoked-array-callback": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/uninvoked-array-callback
```

:::

## References

* Rule Source
