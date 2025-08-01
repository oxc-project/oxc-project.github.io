<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/jsx_a11y/prefer_tag_over_role.rs`;
</script>

# jsx_a11y/prefer-tag-over-role <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Enforces using semantic HTML tags over `role` attribute.

### Why is this bad?

Using semantic HTML tags can improve accessibility and readability of the code.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div role="button" />;
```

Examples of **correct** code for this rule:

```jsx
<button />;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jsx-a11y/prefer-tag-over-role --jsx-a11y-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/prefer-tag-over-role": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
