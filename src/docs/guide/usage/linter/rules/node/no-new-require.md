<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# node/no-new-require <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Warn about calling `new` on `require`.

### Why is this bad?

The `require` function is used to include modules and might return a constructor. As this
is not always the case this can be confusing.

### Examples

Examples of **incorrect** code for this rule:

```js
var appHeader = new require("app-header");
```

Examples of **correct** code for this rule:

```js
var AppHeader = require("app-header");
var appHeader = new AppHeader();
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/node/no_new_require.rs)