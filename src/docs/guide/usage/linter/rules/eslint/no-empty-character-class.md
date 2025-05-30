<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_empty_character_class.rs`;
</script>

# eslint/no-empty-character-class <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow empty character classes in regular expressions

### Why is this bad?

Because empty character classes in regular expressions do not match anything, they might be typing mistakes.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = /^abc[]/;
```

Examples of **correct** code for this rule:

```javascript
var foo = /^abc/;
var foo2 = /^abc[123]/;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-empty-character-class
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-empty-character-class": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
