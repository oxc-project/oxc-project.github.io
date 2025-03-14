<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/new-for-builtins <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Enforces the use of `new` for following builtins: `Object`, `Array`, `ArrayBuffer`, `BigInt64Array`, `BigUint64Array`, `DataView`, `Date`, `Error`, `Float32Array`, `Float64Array`, `Function`, `Int8Array`, `Int16Array`, `Int32Array`, `Map`, `WeakMap`, `Set`, `WeakSet`, `Promise`, `RegExp`, `Uint8Array`, `Uint16Array`, `Uint32Array`, `Uint8ClampedArray`, `SharedArrayBuffer`, `Proxy`, `WeakRef`, `FinalizationRegistry`.

Disallows the use of `new` for following builtins: `String`, `Number`, `Boolean`, `Symbol`, `BigInt`.

These should not use `new` as that would create object wrappers for the primitive values, which is not what you want. However, without `new` they can be useful for coercing a value to that type.

### Why is this bad?

They work the same, but `new` should be preferred for consistency with other constructors.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = new String("hello world");
const bar = Array(1, 2, 3);
```

Examples of **correct** code for this rule:

```javascript
const foo = String("hello world");
const bar = new Array(1, 2, 3);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/new-for-builtins
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/new-for-builtins": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/unicorn/new_for_builtins.rs)
