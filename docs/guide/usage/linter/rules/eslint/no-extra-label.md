---
url: /docs/guide/usage/linter/rules/eslint/no-extra-label.md
---
# eslint/no-extra-label&#x20;

### What it does

Disallow unnecessary labels.

### Why is this bad?

If a loop contains no nested loops or switches, labeling the loop is unnecessary.

```js
A: while (a) {
  break A;
}
```

You can achieve the same result by removing the label and using `break` or `continue` without a label.
Probably those labels would confuse developers because they expect labels to jump to further.

### Examples

Examples of **incorrect** code for this rule:

```js
A: while (a) {
  break A;
}

B: for (let i = 0; i < 10; ++i) {
  break B;
}

C: switch (a) {
  case 0:
    break C;
}
```

Examples of **correct** code for this rule:

```js
while (a) {
  break;
}

for (let i = 0; i < 10; ++i) {
  break;
}

switch (a) {
  case 0:
    break;
}

A: {
  break A;
}

B: while (a) {
  while (b) {
    break B;
  }
}

C: switch (a) {
  case 0:
    while (b) {
      break C;
    }
    break;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-extra-label": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-extra-label
```

:::

## References

* Rule Source
