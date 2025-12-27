---
url: /docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.md
---
# oxc/no-this-in-exported-function&#x20;

### What it does

Disallows the use of `this` in exported functions.

### Why is this bad?

In most bundlers, the value of `this` is not preserved for exported functions.
When a function is exported and imported in another module, `this` typically
becomes `undefined` instead of the module namespace object. This can lead to
unexpected runtime errors or incorrect behavior.

### Examples

Examples of **incorrect** code for this rule:

```javascript
export function foo() {
  console.log(this);
}

export default function bar() {
  this.something();
}

function baz() {
  const self = this;
}
export { baz };
```

Examples of **correct** code for this rule:

```javascript
function foo() {
  console.log(this);
}

export const bar = () => {
  console.log(this);
};
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-this-in-exported-function": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/no-this-in-exported-function
```

:::

## References

* Rule Source
