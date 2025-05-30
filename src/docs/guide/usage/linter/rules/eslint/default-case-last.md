<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/default_case_last.rs`;
</script>

# eslint/default-case-last <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Enforce default clauses in switch statements to be last

### Why is this bad?

A switch statement can optionally have a default clause.
If present, it’s usually the last clause, but it doesn’t need to be. It is also allowed to put the default clause before all case clauses, or anywhere between. The behavior is mostly the same as if it was the last clause. The default block will be still executed only if there is no match in the case clauses (including those defined after the default), but there is also the ability to “fall through” from the default clause to the following clause in the list. However, such flow is not common and it would be confusing to the readers.
Even if there is no “fall through” logic, it’s still unexpected to see the default clause before or between the case clauses. By convention, it is expected to be the last clause.
If a switch statement should have a default clause, it’s considered a best practice to define it as the last clause.

### Examples

Examples of **incorrect** code for this rule:

```javascript
switch (foo) {
  default:
    bar();
    break;
  case "a":
    baz();
    break;
}

switch (foo) {
  case 1:
    bar();
    break;
  default:
    baz();
    break;
  case 2:
    qux();
    break;
}
```

Examples of **correct** code for this rule:

```javascript
switch (foo) {
  case 1:
    bar();
    break;
  case 2:
    qux();
    break;
  default:
    baz();
    break;
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny default-case-last
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "default-case-last": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
