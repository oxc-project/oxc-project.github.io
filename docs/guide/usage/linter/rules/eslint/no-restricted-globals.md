---
url: /docs/guide/usage/linter/rules/eslint/no-restricted-globals.md
---

### What it does

This rule allows you to specify global variable names that you don't want to use in your application.

### Why is this bad?

Disallowing usage of specific global variables can be useful if you want to allow a set of global
variables by enabling an environment, but still want to disallow some of those.

For instance, early Internet Explorer versions exposed the current DOM event as a global variable
`event`, but using this variable has been considered as a bad practice for a long time. Restricting
this will make sure this variable isn't used in browser code.

### Examples

If we have options:

```json
"no-restricted-globals": ["error", "event"]
```

The following patterns are considered problems:

```javascript
function onClick() {
  console.log(event); // Unexpected global variable 'event'. Use local parameter instead.
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### restrictedGlobals

type: `Record<string, string>`

default: `{}`

Objects in the format
`{ "name": "event", "message": "Use local parameter instead." }`, which define what globals
are restricted from use.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-restricted-globals": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-restricted-globals
```

:::

## References

* Rule Source
