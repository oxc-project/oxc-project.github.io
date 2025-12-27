---
url: /docs/guide/usage/linter/rules/unicorn/no-await-expression-member.md
---
# unicorn/no-await-expression-member&#x20;

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

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-await-expression-member": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-await-expression-member
```

:::

## References

* Rule Source
