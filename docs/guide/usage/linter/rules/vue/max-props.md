---
url: /docs/guide/usage/linter/rules/vue/max-props.md
---
# vue/max-props&#x20;

### What it does

Enforce maximum number of props in Vue component.

### Why is this bad?

This rule enforces a maximum number of props in a Vue SFC,
in order to aid in maintainability and reduce complexity.

### Examples

Examples of **incorrect** code for this rule with the default `{ "maxProps": 1 }` option:

```js
<script setup>
defineProps({
  prop1: String,
  prop2: String,
})
</script>
```

Examples of **correct** code for this rule with the default `{ "maxProps": 1 }` option:

```js
<script setup>
defineProps({
  prop1: String,
})
</script>
```

## Configuration

This rule accepts a configuration object with the following properties:

### maxProps

type: `integer`

default: `1`

The maximum number of props allowed in a Vue Single File Component (SFC).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/max-props": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/max-props --vue-plugin
```

:::

## References

* Rule Source
