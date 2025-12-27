---
url: /docs/guide/usage/linter/rules/eslint/no-unused-labels.md
---
# eslint/no-unused-labels&#x20;

### What it does

Disallow unused labels

### Why is this bad?

Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.

### Examples

Examples of **incorrect** code for this rule:

```javascript
OUTER_LOOP: for (const student of students) {
  if (checkScores(student.scores)) {
    continue;
  }
  doSomething(student);
}
```

Examples of **correct** code for this rule:

```javascript
for (const student of students) {
  if (checkScores(student.scores)) {
    continue;
  }
  doSomething(student);
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unused-labels": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unused-labels
```

:::

## References

* Rule Source
