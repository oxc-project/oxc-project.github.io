---
url: /docs/guide/usage/linter/rules/typescript/ban-ts-comment.md
---
# typescript/ban-ts-comment&#x20;

### What it does

This rule lets you set which directive comments you want to allow in your codebase.

### Why is this bad?

Using TypeScript directives to suppress TypeScript compiler errors
reduces the effectiveness of TypeScript overall.

### Examples

Examples of **incorrect** code for this rule:

```ts
if (false) {
  // @ts-ignore: Unreachable code error
  console.log("hello");
}
```

## Configuration

This rule allows you to specify how different TypeScript directive comments
should be handled.

For each directive (`@ts-expect-error`, `@ts-ignore`, `@ts-nocheck`, `@ts-check`), you can choose one of the following options:

* `true`: Disallow the directive entirely, preventing its use in the entire codebase.
* `false`: Allow the directive without any restrictions.
* `"allow-with-description"`: Allow the directive only if it is followed by a description explaining its use. The description must meet the minimum length specified by `minimumDescriptionLength`.
* `{ "descriptionFormat": "<regex>" }`: Allow the directive only if the description matches the specified regex pattern.

For example:

```json
{
  "ts-expect-error": "allow-with-description",
  "ts-ignore": true,
  "ts-nocheck": { "descriptionFormat": "^: TS\\d+ because .+$" },
  "ts-check": false,
  "minimumDescriptionLength": 3
}
```

This rule accepts a configuration object with the following properties:

### minimumDescriptionLength

type: `integer`

default: `3`

Minimum description length required when using directives with `allow-with-description`.

### ts-check

How to handle the `@ts-check` directive.

### ts-expect-error

How to handle the `@ts-expect-error` directive.

### ts-ignore

How to handle the `@ts-ignore` directive.

### ts-nocheck

How to handle the `@ts-nocheck` directive.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/ban-ts-comment": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/ban-ts-comment
```

:::

## References

* Rule Source
