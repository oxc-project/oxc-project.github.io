---
url: /docs/guide/usage/linter/rules/typescript/prefer-includes.md
---
# typescript/prefer-includes&#x20;

### What it does

Enforce using `.includes()` instead of `.indexOf() !== -1` or `/regex/.test()`.

### Why is this bad?

`.includes()` is more readable and expressive than checking `.indexOf() !== -1`.
It clearly communicates the intent to check for the presence of a value.
Additionally, for simple string searches, `.includes()` is often preferred over
regex `.test()` for better performance and clarity.

### Examples

Examples of **incorrect** code for this rule:

```ts
// Using indexOf
const str = "hello world";
if (str.indexOf("world") !== -1) {
  console.log("found");
}

if (str.indexOf("world") != -1) {
  console.log("found");
}

if (str.indexOf("world") > -1) {
  console.log("found");
}

// Using regex test for simple strings
if (/world/.test(str)) {
  console.log("found");
}

// Arrays
const arr = [1, 2, 3];
if (arr.indexOf(2) !== -1) {
  console.log("found");
}
```

Examples of **correct** code for this rule:

```ts
// Using includes for strings
const str = "hello world";
if (str.includes("world")) {
  console.log("found");
}

// Using includes for arrays
const arr = [1, 2, 3];
if (arr.includes(2)) {
  console.log("found");
}

// Complex regex patterns are allowed
if (/wo+rld/.test(str)) {
  console.log("found");
}

// Regex with flags
if (/world/i.test(str)) {
  console.log("found");
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/prefer-includes": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/prefer-includes
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
