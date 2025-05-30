<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_irregular_whitespace.rs`;
</script>

# eslint/no-irregular-whitespace <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallows the use of irregular whitespaces in the code.

### Why is this bad

The use of irregular whitespaces can hinder code readability and
create inconsistencies, making maintenance and collaboration more challenging.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function invalidExample() {
  return 42;
}
```

Examples of **incorrect** code for this rule:

```javascript
function invalidExample() {
  return 42;
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-irregular-whitespace
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-irregular-whitespace": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
