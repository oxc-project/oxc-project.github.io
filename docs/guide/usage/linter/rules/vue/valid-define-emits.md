---
url: /docs/guide/usage/linter/rules/vue/valid-define-emits.md
---
# vue/valid-define-emits&#x20;

### What it does

This rule checks whether defineEmits compiler macro is valid.

This rule reports defineEmits compiler macros in the following cases:

* `defineEmits` is referencing locally declared variables.
* `defineEmits` has both a literal type and an argument. e.g. `defineEmits<(e: 'foo')=>void>(['bar'])`
* `defineEmits` has been called multiple times.
* Custom events are defined in both `defineEmits` and `export default {}`.
* Custom events are not defined in either `defineEmits` or `export default {}`.

### Why is this bad?

Misusing `defineEmits` can lead to runtime errors, unclear component contracts, and lost type safety.
Vue may still compile the code, but emitted events may break silently or be typed incorrectly.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script setup>
const def = { notify: null };
defineEmits(def);
</script>
```

```vue
<script setup lang="ts">
defineEmits<(e: "notify") => void>({ submit: null });
</script>
```

```vue
<script setup>
defineEmits({ notify: null });
defineEmits({ submit: null });
</script>
```

```vue
<script>
export default {
  emits: ["notify"],
};
</script>
<script setup>
defineEmits({ submit: null });
</script>
```

Examples of **correct** code for this rule:

```vue
<script setup>
defineEmits({ notify: null });
</script>
```

```vue
<script setup>
defineEmits(["notify"]);
</script>
```

```vue
<script setup lang="ts">
defineEmits<(e: "notify") => void>();
</script>
```

```vue
<script>
export default {
  emits: ["notify"],
};
</script>
<script setup>
defineEmits();
</script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/valid-define-emits": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/valid-define-emits --vue-plugin
```

:::

## References

* Rule Source
