---
url: /docs/guide/usage/linter/rules/vue/define-props-destructuring.md
---
# vue/define-props-destructuring&#x20;

### What it does

This rule enforces a consistent style for handling Vue 3 Composition API props,
allowing you to choose between requiring destructuring or prohibiting it.

### Why is this bad?

By default, the rule requires you to use destructuring syntax when using `defineProps`
instead of storing props in a variable and warns against combining `withDefaults` with destructuring.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script setup lang="ts">
const props = defineProps(["foo"]);
const propsWithDefaults = withDefaults(defineProps(["foo"]), { foo: "default" });
const { baz } = withDefaults(defineProps(["baz"]), { baz: "default" });
const props = defineProps<{ foo?: string }>();
const propsWithDefaults = withDefaults(defineProps<{ foo?: string }>(), { foo: "default" });
</script>
```

Examples of **correct** code for this rule:

```vue
<script setup lang="ts">
const { foo } = defineProps(["foo"]);
const { bar = "default" } = defineProps(["bar"]);
const { foo } = defineProps<{ foo?: string }>();
const { bar = "default" } = defineProps<{ bar?: string }>();
</script>
```

## Configuration

This rule accepts a configuration object with the following properties:

### destructure

type: `"always" | "never"`

default: `"always"`

Require or prohibit destructuring.

#### `"always"`

Requires destructuring when using `defineProps` and warns against using `withDefaults` with destructuring

#### `"never"`

Requires using a variable to store props and prohibits destructuring

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/define-props-destructuring": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/define-props-destructuring --vue-plugin
```

:::

## References

* Rule Source
