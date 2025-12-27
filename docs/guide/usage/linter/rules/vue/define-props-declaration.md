---
url: /docs/guide/usage/linter/rules/vue/define-props-declaration.md
---
# vue/define-props-declaration&#x20;

### What it does

This rule enforces `defineProps` typing style which you should use `type-based` or `runtime` declaration.
This rule only works in setup script and `lang="ts"`.

### Examples

Examples of **incorrect** code for this rule:

```vue
// "vue/define-props-declaration": ["error", "type-based"]
<script setup lang="ts">
const props = defineProps({
  kind: { type: String },
});
</script>

// "vue/define-props-declaration": ["error", "runtime"]
<script setup lang="ts">
const props = defineProps<{
  kind: string;
}>();
</script>
```

Examples of **correct** code for this rule:

```vue
// "vue/define-props-declaration": ["error", "type-based"]
<script setup lang="ts">
const props = defineProps<{
  kind: string;
}>();
</script>

// "vue/define-props-declaration": ["error", "runtime"]
<script setup lang="ts">
const props = defineProps({
  kind: { type: String },
});
</script>
```

## Configuration

This rule accepts one of the following string values:

### `"type-based"`

Enforce type-based declaration.

### `"runtime"`

Enforce runtime declaration.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/define-props-declaration": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/define-props-declaration --vue-plugin
```

:::

## References

* Rule Source
