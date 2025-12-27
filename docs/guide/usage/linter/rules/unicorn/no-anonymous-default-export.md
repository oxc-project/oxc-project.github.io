---
url: /docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.md
---
# unicorn/no-anonymous-default-export&#x20;

### What it does

Disallows anonymous functions and classes as default exports.

### Why is this bad?

Naming default exports improves searchability and ensures consistent
identifiers for a module’s default export in both declaration and import.

### Examples

Examples of **incorrect** code for this rule:

```javascript
export default class {}
export default function () {}
export default () => {};
module.exports = class {};
module.exports = function () {};
module.exports = () => {};
```

Examples of **correct** code for this rule:

```javascript
export default class Foo {}
export default function foo () {}

const foo = () => {};
export default foo;

module.exports = class Foo {};
module.exports = function foo () {};

const foo = () => {};
module.exports = foo;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-anonymous-default-export": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-anonymous-default-export
```

:::

## References

* Rule Source
