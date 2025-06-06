<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_regex_spaces.rs`;
</script>

# eslint/no-regex-spaces <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Disallow 2+ consecutive spaces in regular expressions.

### Why is this bad?

In a regular expression, it is hard to tell how many spaces are
intended to be matched. It is better to use only one space and
then specify how many spaces are expected using a quantifier.

```javascript
var re = /foo {3}bar/;
```

### Examples

Examples of **incorrect** code for this rule:

```javascript
var re = /foo   bar/;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-regex-spaces
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-regex-spaces": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
