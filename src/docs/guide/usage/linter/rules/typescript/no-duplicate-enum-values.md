<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/typescript/no_duplicate_enum_values.rs`;
</script>

# typescript/no-duplicate-enum-values <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow duplicate enum member values.

### Why is this bad?

Although TypeScript supports duplicate enum member values, people
usually expect members to have unique values within the same enum.
Duplicate values can lead to bugs that are hard to track down.

### Examples

This rule disallows defining an enum with multiple members initialized
to the same value. Members without initializers will not be checked.

Example of **incorrect** code:

```ts
enum E {
  A = 0,
  B = 0,
}
```

```ts
enum E {
  A = "A",
  B = "A",
}
```

Example of **correct** code:

```ts
enum E {
  A = 0,
  B = 1,
}
```

```ts
enum E {
  A = "A",
  B = "B",
}
```

```ts
enum E {
  A,
  B,
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny typescript/no-duplicate-enum-values
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-duplicate-enum-values": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
