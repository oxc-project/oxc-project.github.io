---
url: /docs/guide/usage/linter/rules/eslint/no-console.md
---
# eslint/no-console&#x20;

### What it does

Disallow the use of console.

### Why is this bad?

In JavaScript that is designed to be executed in the browser, it’s considered a best
practice to avoid using methods on console. Such messages are considered to be for
debugging purposes and therefore not suitable to ship to the client. In general, calls
using console should be stripped before being pushed to production.

### Examples

Examples of **incorrect** code for this rule:

```javascript
console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");
console.log = foo();
```

Examples of **correct** code for this rule:

```javascript
// custom console
Console.log("Hello world!");
```

## Configuration

This rule accepts a configuration object with the following properties:

### allow

type: `string[]`

default: `[]`

The `allow` option permits the given list of console methods to be used as exceptions to
this rule.

Say the option was configured as `{ "allow": ["info"] }` then the rule would behave as
follows:

Example of **incorrect** code for this option:

```javascript
console.log("foo");
```

Example of **correct** code for this option:

```javascript
console.info("foo");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-console": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-console
```

:::

## References

* Rule Source
