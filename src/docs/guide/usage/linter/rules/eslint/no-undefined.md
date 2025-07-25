<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_undefined.rs`;
</script>

# eslint/no-undefined <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow the use of `undefined` as an identifier

### Why is this bad?

Using undefined directly can lead to bugs, since it can be shadowed or overwritten in JavaScript.
It's safer and more intentional to use null or rely on implicit undefined (e.g., missing return) to avoid accidental issues.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = undefined;

var undefined = "foo";

if (foo === undefined) {
  // ...
}

function baz(undefined) {
  // ...
}

bar(undefined, "lorem");
```

Examples of **correct** code for this rule:

```javascript
var foo = void 0;

var Undefined = "foo";

if (typeof foo === "undefined") {
  // ...
}

global.undefined = "foo";

bar(void 0, "lorem");
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-undefined
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-undefined": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
