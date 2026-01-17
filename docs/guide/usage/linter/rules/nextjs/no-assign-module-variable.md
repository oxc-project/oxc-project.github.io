---
url: /docs/guide/usage/linter/rules/nextjs/no-assign-module-variable.md
---

### What it does

Prevents the assignment or declaration of variables named `module` in Next.js applications.

### Why is this bad?

The variable name `module` is reserved in Next.js for internal use and module system
functionality. Declaring your own `module` variable can conflict with Next.js's internal
module system, lead to unexpected behavior in your application, and cause issues with code
splitting and hot module replacement.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// Declaring module variable
let module = {};

// Using module in variable declaration
const module = {
  exports: {},
};

// Assigning to module
module = { id: "my-module" };
```

Examples of **correct** code for this rule:

```javascript
// Use a different variable name
let myModule = {};

// Use a more descriptive name
const customModule = {
  exports: {},
};

// Access actual module object (when available)
console.log(module.exports);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-assign-module-variable": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-assign-module-variable --nextjs-plugin
```

:::

## References

* Rule Source
