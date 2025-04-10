<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-unused-labels <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Disallow unused labels

### Why is this bad?

Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.

### Example

```javascript
OUTER_LOOP: for (const student of students) {
  if (checkScores(student.scores)) {
    continue;
  }
  doSomething(student);
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-unused-labels
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unused-labels": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/eslint/no_unused_labels.rs)
