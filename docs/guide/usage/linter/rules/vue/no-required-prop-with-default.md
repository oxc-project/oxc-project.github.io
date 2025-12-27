---
url: /docs/guide/usage/linter/rules/vue/no-required-prop-with-default.md
---
# vue/no-required-prop-with-default&#x20;

### What it does

Enforce props with default values to be optional.

### Why is this bad?

If a prop is declared with a default value, whether it is required or not,
we can always skip it in actual use. In that situation, the default value would be applied.
So, a required prop with a default value is essentially the same as an optional prop.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string | number;
    age?: number;
  }>(),
  {
    name: "Foo",
  },
);
</script>
```

Examples of **correct** code for this rule:

```vue
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string | number;
    age?: number;
  }>(),
  {
    name: "Foo",
  },
);
</script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/no-required-prop-with-default": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/no-required-prop-with-default --vue-plugin
```

:::

## References

* Rule Source
