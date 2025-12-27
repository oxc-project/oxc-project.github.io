---
url: /docs/guide/usage/linter/rules/typescript/only-throw-error.md
---
# typescript/only-throw-error&#x20;

### What it does

This rule disallows throwing non-Error values.

### Why is this bad?

It's considered good practice to only throw Error objects (or subclasses of Error). This is because Error objects automatically capture a stack trace, which is useful for debugging. Additionally, some tools and environments expect thrown values to be Error objects.

### Examples

Examples of **incorrect** code for this rule:

```ts
throw "error"; // throwing string

throw 42; // throwing number

throw true; // throwing boolean

throw { message: "error" }; // throwing plain object

throw null; // throwing null

throw undefined; // throwing undefined

const error = "Something went wrong";
throw error; // throwing non-Error variable
```

Examples of **correct** code for this rule:

```ts
throw new Error("Something went wrong");

throw new TypeError("Invalid type");

throw new RangeError("Value out of range");

// Custom Error subclasses
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
throw new CustomError("Custom error occurred");

// Variables that are Error objects
const error = new Error("Error message");
throw error;
```

## Configuration

This rule accepts a configuration object with the following properties:

### allow

type: `array`

default: `[]`

An array of type or value specifiers for additional types that are allowed to be thrown.
Use this to allow throwing custom error types.

#### allow\[n]

type: `string`

Type or value specifier for matching specific declarations

Supports four types of specifiers:

1. **String specifier** (deprecated): Universal match by name

```json
"Promise"
```

2. **File specifier**: Match types/values declared in local files

```json
{ "from": "file", "name": "MyType" }
{ "from": "file", "name": ["Type1", "Type2"] }
{ "from": "file", "name": "MyType", "path": "./types.ts" }
```

3. **Lib specifier**: Match TypeScript built-in lib types

```json
{ "from": "lib", "name": "Promise" }
{ "from": "lib", "name": ["Promise", "PromiseLike"] }
```

4. **Package specifier**: Match types/values from npm packages

```json
{ "from": "package", "name": "Observable", "package": "rxjs" }
{ "from": "package", "name": ["Observable", "Subject"], "package": "rxjs" }
```

### allowThrowingAny

type: `boolean`

default: `true`

Whether to allow throwing values typed as `any`.

### allowThrowingUnknown

type: `boolean`

default: `true`

Whether to allow throwing values typed as `unknown`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/only-throw-error": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/only-throw-error
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
