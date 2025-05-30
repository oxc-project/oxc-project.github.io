<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_sparse_arrays.rs`;
</script>

# eslint/no-sparse-arrays <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow sparse arrays.

### Why is this bad?

Take the following example:

```javascript
const items = [, ,];
```

While the items array in this example has a length of 2, there are actually
no values in items[0] or items[1]. The fact that the array literal is
valid with only commas inside, coupled with the length being set and
actual item values not being set, make sparse arrays confusing for many
developers.

The confusion around sparse arrays is enough that it’s recommended to
avoid using them unless you are certain that they are useful in your
code.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var items = [, ,];
```

```javascript
var colors = ["red", , "blue"];
```

Examples of **correct** code for this rule:

```javascript
var items = [];
```

// trailing comma (after the last element) is not a problem

```javascript
var colors = ["red", "blue"];
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-sparse-arrays
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-sparse-arrays": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
