<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/oxc/bad_replace_all_arg.rs`;
</script>

# oxc/bad-replace-all-arg <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

This rule warns when the `replaceAll` method is called with a regular expression that does not have the global flag (g).

### Why is this bad?

The `replaceAll` method replaces all occurrences of a string with another string. If the global flag (g) is not used in the regular expression, only the first occurrence of the string will be replaced.

### Examples

Examples of **incorrect** code for this rule:

```javascript
withSpaces.replaceAll(/\s+/, ",");
```

Examples of **correct** code for this rule:

```javascript
withSpaces.replaceAll(/\s+/g, ",");
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/bad-replace-all-arg
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-replace-all-arg": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
