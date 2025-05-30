<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/no_thenable.rs`;
</script>

# unicorn/no-thenable <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow `then` property

### Why is this bad?

If an object is defined as "thenable", once it's accidentally
used in an await expression, it may cause problems:

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function example() {
  const foo = {
    unicorn: 1,
    then() {},
  };

  const { unicorn } = await foo;

  console.log("after"); // <- This will never execute
}
```

Examples of **correct** code for this rule:

```javascript
async function example() {
  const foo = {
    unicorn: 1,
    bar() {},
  };

  const { unicorn } = await foo;

  console.log("after");
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-thenable
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-thenable": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
