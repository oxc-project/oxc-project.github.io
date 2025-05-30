<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/jsdoc/require_param.rs`;
</script>

# jsdoc/require-param <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Requires that all function parameters are documented with JSDoc `@param` tags.

### Why is this bad?

The rule is aimed at enforcing code quality and maintainability by requiring that all function parameters are documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param foo */
function quux(foo, bar) {}
```

Examples of **correct** code for this rule:

```javascript
/** @param foo */
function quux(foo) {}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jsdoc/require-param --jsdoc-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-param": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
