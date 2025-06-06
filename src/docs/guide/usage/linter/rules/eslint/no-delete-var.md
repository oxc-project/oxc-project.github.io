<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_delete_var.rs`;
</script>

# eslint/no-delete-var <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

The purpose of the `delete` operator is to remove a property from an
object.

### Why is this bad?

Using the `delete` operator on a variable might lead to unexpected
behavior.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var x;
delete x;
```

Examples of **correct** code for this rule:

```javascript
var x;

var y;
delete y.prop;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-delete-var
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-delete-var": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
