<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/max_lines_per_function.rs`;
</script>

# eslint/max-lines-per-function <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Enforce a maximum number of lines of code in a function. This rule ensures
that functions do not exceed a specified line count, promoting smaller,
more focused functions that are easier to maintain and understand.

### Why is this bad?

Some people consider large functions a code smell. Large functions tend to
do a lot of things and can make it hard to follow what’s going on. Many coding
style guides dictate a limit to the number of lines that a function can
comprise of. This rule can help enforce that style.

### Examples

Examples of **incorrect** code for this rule with a particular max value:

```js
/* { "eslint/max-lines-per-function": ["error", 2] } */
function foo() {
  const x = 0;
}

/* { "eslint/max-lines-per-function": ["error", 4] } */
function foo() {
  // a comment followed by a blank line

  const x = 0;
}
```

Examples of **correct** code for this rule with a particular max value:

```js
/* { "eslint/max-lines-per-function": ["error", 3] } */
function foo() {
  const x = 0;
}

/* { "eslint/max-lines-per-function": ["error", 5] } */
function foo() {
  // a comment followed by a blank line

  const x = 0;
}
```

### Options

#### max

{ type: number, default: 50 }

The `max` enforces a maximum number of lines in a function.

#### skipBlankLines

{ type: boolean, default: false }

The `skipBlankLines` ignore lines made up purely of whitespace.

#### skipComments

{ type: boolean, default: false }

The `skipComments` ignore lines containing just comments.

#### IIFEs

{ type: boolean, default: false }

The `IIFEs` option controls whether IIFEs are included in the line count.
By default, IIFEs are not considered, but when set to `true`, they will
be included in the line count for the function.

Example:

```json
"eslint/max-lines-per-function": [
  "error",
  {
    "max": 50,
    "skipBlankLines": false,
    "skipComments": false,
    "IIFEs": false
  }
]
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny max-lines-per-function
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "max-lines-per-function": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
