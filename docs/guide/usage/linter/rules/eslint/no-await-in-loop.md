---
url: /docs/guide/usage/linter/rules/eslint/no-await-in-loop.md
---

### What it does

This rule disallows the use of `await` within loop bodies. (for, for-in, for-of, while, do-while).

### Why is this bad?

It potentially indicates that the async operations are not being effectively parallelized.
Instead, they are being run in series, which can lead to poorer performance.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function bad() {
  for (const user of users) {
    const userRecord = await getUserRecord(user);
  }
}
```

Examples of **correct** code for this rule:

```javascript
async function good() {
  await Promise.all(users.map((user) => getUserRecord(user)));
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-await-in-loop": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-await-in-loop
```

:::

## References

* Rule Source
