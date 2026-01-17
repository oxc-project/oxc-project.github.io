---
url: /docs/guide/usage/linter/rules/vue/no-export-in-script-setup.md
---

### What it does

Disallow `export` in `<script setup>`

### Why is this bad?

The previous version of `<script setup>` RFC used `export` to define variables used in templates,
but the new `<script setup>` RFC has been updated to define without using `export`.
See [Vue RFCs - 0040-script-setup](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) for more details.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script setup>
export let msg = "Hello!";
</script>
```

Examples of **correct** code for this rule:

```vue
<script setup>
let msg = "Hello!";
</script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/no-export-in-script-setup": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/no-export-in-script-setup --vue-plugin
```

:::

## References

* Rule Source
