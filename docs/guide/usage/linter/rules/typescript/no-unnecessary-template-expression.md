---
url: >-
  /docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.md
---
# typescript/no-unnecessary-template-expression&#x20;

### What it does

This rule disallows unnecessary template literals.

### Why is this bad?

Template literals should only be used when they are needed for string interpolation or multi-line strings. Using template literals when a simple string would suffice adds unnecessary complexity.

### Examples

Examples of **incorrect** code for this rule:

```ts
const str1 = `Hello world`;

const str2 = `42`;

const str3 = `true`;

// Template with only literal expressions
const str4 = `${"Hello"} ${"world"}`;
```

Examples of **correct** code for this rule:

```ts
const str1 = "Hello world";

const str2 = "42";

const str3 = "true";

// Template with variable interpolation
const name = "world";
const str4 = `Hello ${name}`;

// Multi-line string
const multiline = `
  Hello
  world
`;

// Template with expression
const str5 = `Result: ${1 + 2}`;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unnecessary-template-expression": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-unnecessary-template-expression
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
