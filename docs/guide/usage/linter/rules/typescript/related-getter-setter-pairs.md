---
url: /docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.md
---

### What it does

This rule enforces that getters and setters for the same property are defined together and have related types.

### Why is this bad?

When you define a getter and setter for the same property, they should typically be defined together and work with compatible types. Having mismatched types or defining them separately can lead to confusion and potential runtime errors.

### Examples

Examples of **incorrect** code for this rule:

```ts
class Example {
  // Getter and setter with incompatible types
  get value(): string {
    return this._value.toString();
  }

  set value(val: number) {
    // Incompatible with getter
    this._value = val;
  }

  private _value: number = 0;
}

// Getter without corresponding setter or vice versa might be flagged
class IncompleteProperty {
  get readOnlyValue(): string {
    return "constant";
  }
  // Missing setter - might be intended, but should be consistent
}
```

Examples of **correct** code for this rule:

```ts
class Example {
  // Getter and setter with compatible types
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
  }

  private _value: string = "";
}

// Read-only property with only getter
class ReadOnlyProperty {
  get constant(): string {
    return "constant value";
  }
}

// Write-only property with only setter (less common but valid)
class WriteOnlyProperty {
  set logger(message: string) {
    console.log(message);
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/related-getter-setter-pairs": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/related-getter-setter-pairs
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
