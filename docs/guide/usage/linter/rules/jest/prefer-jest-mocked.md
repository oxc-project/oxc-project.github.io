---
url: /docs/guide/usage/linter/rules/jest/prefer-jest-mocked.md
---
# jest/prefer-jest-mocked&#x20;

### What it does

When working with mocks of functions using Jest, it's recommended to use the
`jest.mocked()` helper function to properly type the mocked functions. This rule
enforces the use of `jest.mocked()` for better type safety and readability.

Restricted types:

* `jest.Mock`
* `jest.MockedFunction`
* `jest.MockedClass`
* `jest.MockedObject`

### Why is this bad?

Using type assertions like `fn as jest.Mock` is a less safe approach
than using `jest.mocked()`. The `jest.mocked()` helper provides better
type safety by preserving the original function signature while adding
mock capabilities. It also makes the code more readable and explicit
about mocking intentions.

### Examples

Examples of **incorrect** code for this rule:

```typescript
(foo as jest.Mock).mockReturnValue(1);
const mock = (foo as jest.Mock).mockReturnValue(1);
(foo as unknown as jest.Mock).mockReturnValue(1);
(Obj.foo as jest.Mock).mockReturnValue(1);
([].foo as jest.Mock).mockReturnValue(1);
```

Examples of **correct** code for this rule:

```typescript
jest.mocked(foo).mockReturnValue(1);
const mock = jest.mocked(foo).mockReturnValue(1);
jest.mocked(Obj.foo).mockReturnValue(1);
jest.mocked([].foo).mockReturnValue(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-jest-mocked": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-jest-mocked --jest-plugin
```

:::

## References

* Rule Source
