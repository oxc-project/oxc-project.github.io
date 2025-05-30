<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_plusplus.rs`;
</script>

# eslint/no-plusplus <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">💡</span> A suggestion is available for this rule for some violations.
</Alert>
</div>

### What it does

Disallow the unary operators `++` and `--`.

### Why is this bad?

Because the unary `++` and `--` operators are subject to automatic semicolon insertion, differences in whitespace
can change the semantics of source code. For example, these two code blocks are not equivalent:

```js
var i = 10;
var j = 20;

i++;
j;
// => i = 11, j = 20
```

```js
var i = 10;
var j = 20;

i;
++j;
// => i = 10, j = 21
```

### Examples

Examples of **incorrect** code for this rule:

```js
var x = 0;
x++;
var y = 0;
y--;
for (let i = 0; i < l; i++) {
  doSomething(i);
}
```

Examples of **correct** code for this rule:

````js
var x = 0; x += 1;
var y = 0; y -= 1;
for (let i = 0; i < l; i += 1) {
   doSomething(i);
}

### Options

#### allowForLoopAfterthoughts

`{ type: boolean, default: false }`

Pass `"allowForLoopAfterthoughts": true` to allow `++` and `--` in for loop afterthoughts.

Example:
```json
"no-plusplus": [
  "error",
  { "allowForLoopAfterthoughts": true }
]
````

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-plusplus
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-plusplus": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
