---
url: /docs/guide/usage/linter/rules/vue/no-import-compiler-macros.md
---

### What it does

Disallow importing Vue compiler macros.

### Why is this bad?

Compiler Macros like:

* `defineProps`
* `defineEmits`
* `defineExpose`
* `withDefaults`
* `defineModel`
* `defineOptions`
* `defineSlots`

are globally available in Vue 3's `<script setup>` and do not require explicit imports.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script setup>
import { defineProps, withDefaults } from "vue";
</script>
```

Examples of **correct** code for this rule:

```vue
<script setup>
import { ref } from "vue";
</script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/no-import-compiler-macros": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/no-import-compiler-macros --vue-plugin
```

:::

## References

* Rule Source
