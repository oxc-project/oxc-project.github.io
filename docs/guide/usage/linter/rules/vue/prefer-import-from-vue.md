---
url: /docs/guide/usage/linter/rules/vue/prefer-import-from-vue.md
---

### What it does

Enforce `import from 'vue'` instead of `import from '@vue/*'`.

### Why is this bad?

Imports from the following modules are almost always wrong. You should import from vue instead.

* `@vue/runtime-dom`
* `@vue/runtime-core`
* `@vue/reactivity`
* `@vue/shared`

### Examples

Examples of **incorrect** code for this rule:

```js
import { createApp } from "@vue/runtime-dom";
import { Component } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
```

Examples of **correct** code for this rule:

```js
import { createApp, ref, Component } from "vue";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/prefer-import-from-vue": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/prefer-import-from-vue --vue-plugin
```

:::

## References

* Rule Source
