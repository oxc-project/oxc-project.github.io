<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/max_depth.rs`;
</script>

# eslint/max-depth <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Enforce a maximum depth that blocks can be nested. This rule helps to limit the complexity
of nested blocks, improving readability and maintainability by ensuring that code does not
become too deeply nested.

### Why is this bad?

Many developers consider code difficult to read if blocks are nested beyond a certain depth.
Excessive nesting can make it harder to follow the flow of the code, increasing cognitive load
and making maintenance more error-prone. By enforcing a maximum block depth, this rule encourages
cleaner, more readable code.

### Examples

Examples of **incorrect** code for this rule with the default `{ "max": 3 }` option:

```js
function foo() {
  for (;;) { // Nested 1 deep
    while (true) { // Nested 2 deep
      if (true) { // Nested 3 deep
        if (true) { // Nested 4 deep }
      }
    }
  }
}
```

Examples of **correct** code for this rule with the default `{ "max": 3 }` option:

```js
function foo() {
  for (;;) { // Nested 1 deep
    while (true) { // Nested 2 deep
      if (true) { // Nested 3 deep }
    }
  }
}
```

Note that class static blocks do not count as nested blocks, and that the depth in
them is calculated separately from the enclosing context.

Example:

```js
function foo() {
  if (true) { // Nested 1 deep
    class C {
      static {
        if (true) { // Nested 1 deep
          if (true) { // Nested 2 deep }
        }
      }
    }
  }
}
```

### Options

#### max

`{ type: number, default: 4 }`

The `max` enforces a maximum depth that blocks can be nested

Example:

```json
"eslint/max-depth": ["error", 4]

"eslint/max-depth": [
  "error",
  {
    max: 4
  }
]
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny max-depth
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "max-depth": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
