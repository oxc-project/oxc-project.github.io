---
url: >-
  /docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.md
---
# typescript/no-unnecessary-template-expression&#x20;

### What it does

Disallows unnecessary template expressions (interpolations) that can be simplified.

### Why is this bad?

Template literals with substitution expressions that are unnecessary add complexity
without providing any benefit. Static string literal expressions or expressions that
are already strings can be simplified.

Note: This rule does not flag template literals without substitution expressions.
For example, `` `hello` `` is allowed even though it could be written as `'hello'`.

### Examples

Examples of **incorrect** code for this rule:

```ts
// Static values can be incorporated into the surrounding template
const ab1 = `${"a"}${"b"}`;
const ab2 = `a${"b"}`;

const stringWithNumber = `${"1 + 1 = "}${2}`;
const stringWithBoolean = `${"true is "}${true}`;

// Expressions that are already strings can be rewritten without a template
const text = "a";
const wrappedText = `${text}`;

declare const intersectionWithString: string & { _brand: "test-brand" };
const wrappedIntersection = `${intersectionWithString}`;
```

Examples of **correct** code for this rule:

```ts
// Static values incorporated into the template
const ab1 = `ab`;

// Template with non-trivial interpolation
const name = "world";
const greeting = `Hello ${name}!`;

// Template with expression
const result = `Result: ${1 + 2}`;

// Simple strings don't need templates
const text = "a";
const wrappedText = text;

// Multi-line strings are fine
const multiline = `
  Hello
  world
`;
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
