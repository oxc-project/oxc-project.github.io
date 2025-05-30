<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/unicorn/no_await_expression_member.rs`;
</script>

# unicorn/no-await-expression-member <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">⚠️🛠️️</span> A dangerous auto-fix is available for this rule.
</Alert>
</div>

### What it does

Disallows member access from `await` expressions.

### Why is this bad?

When accessing a member from an `await` expression,
the `await` expression has to be parenthesized, which is not readable.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function bad() {
  const secondElement = (await getArray())[1];
}
```

Examples of **correct** code for this rule:

```javascript
async function good() {
  const [, secondElement] = await getArray();
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-await-expression-member
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-await-expression-member": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
