---
url: /docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.md
---
# oxc/no-rest-spread-properties&#x20;

### What it does

Disallow [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread#readme).

### Why is this bad?

Object rest/spread properties are a relatively new JavaScript feature that may
not be supported in all target environments. If you need to support older
browsers or JavaScript engines that don't support these features, using them
can cause runtime errors. This rule helps maintain compatibility with older
environments by preventing the use of these modern syntax features.

### Examples

Examples of **incorrect** code for this rule:

```javascript
let { x, ...y } = z;
let z = { x, ...y };
```

## Configuration

This rule accepts a configuration object with the following properties:

### objectRestMessage

type: `string`

default: `""`

A message to display when object rest properties are found.

### objectSpreadMessage

type: `string`

default: `""`

A message to display when object spread properties are found.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-rest-spread-properties": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/no-rest-spread-properties
```

:::

## References

* Rule Source
