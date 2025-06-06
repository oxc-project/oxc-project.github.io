<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_dupe_else_if.rs`;
</script>

# eslint/no-dupe-else-if <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow duplicate conditions in if-else-if chains

### Why is this bad?

if-else-if chains are commonly used when there is a need to execute only one branch (or at most one branch) out of several possible branches, based on certain conditions.
Two identical test conditions in the same chain are almost always a mistake in the code. Unless there are side effects in the expressions,
a duplicate will evaluate to the same true or false value as the identical expression earlier in the chain, meaning that its branch can never execute.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (a) {
  foo();
} else if (b) {
  bar();
} else if (b) {
  baz();
}
```

```javascript
if (a || b) {
  foo();
} else if (a) {
  bar();
}
```

```javascript
if (n === 1) {
  foo();
} else if (n === 2) {
  bar();
} else if (n === 3) {
  baz();
} else if (n === 2) {
  quux();
} else if (n === 5) {
  quuux();
}
```

Examples of **correct** code for this rule:

```javascript
if (a) {
  foo();
} else if (b) {
  bar();
} else if (c) {
  baz();
}
```

```javascript
if (a || b) {
  foo();
} else if (c) {
  bar();
}
```

```javascript
if (n === 1) {
  foo();
} else if (n === 2) {
  bar();
} else if (n === 3) {
  baz();
} else if (n === 4) {
  quux();
} else if (n === 5) {
  quuux();
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-dupe-else-if
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-dupe-else-if": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
