<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/jsdoc/require_param_type.rs`;
</script>

# jsdoc/require-param-type <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Requires that each `@param` tag has a type value (within curly brackets).

### Why is this bad?

The type of a parameter should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param foo */
function quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** @param {SomeType} foo */
function quux(foo) {}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jsdoc/require-param-type --jsdoc-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-param-type": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
