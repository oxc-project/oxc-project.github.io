<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/vitest/no_conditional_tests.rs`;
</script>

# vitest/no-conditional-tests <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

The rule disallows the use of conditional statements within test cases to
ensure that tests are deterministic and clearly readable.

### Why is this bad?

Conditional statements in test cases can make tests unpredictable and
harder to understand. Tests should be consistent and straightforward to
ensure reliable results and maintainability.

### Examples

Examples of **incorrect** code for this rule:

```js
describe("my tests", () => {
  if (true) {
    it("is awesome", () => {
      doTheThing();
    });
  }
});
```

Examples of **correct** code for this rule:

```js
describe("my tests", () => {
  it("is awesome", () => {
    doTheThing();
  });
});
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny vitest/no-conditional-tests --vitest-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/no-conditional-tests": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
