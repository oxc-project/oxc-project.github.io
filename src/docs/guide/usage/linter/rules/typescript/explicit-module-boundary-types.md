<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/typescript/explicit_module_boundary_types.rs`;
</script>

# typescript/explicit-module-boundary-types <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Require explicit return and argument types on exported functions' and classes' public class methods.

### Why is this bad?

Explicit types for function return values and arguments makes it clear
to any calling code what is the module boundary's input and output.
Adding explicit type annotations for those types can help improve code
readability. It can also improve TypeScript type checking performance on
larger codebases.

### Examples

Examples of **incorrect** code for this rule:

```ts
// Should indicate that no value is returned (void)
export function test() {
  return;
}

// Should indicate that a string is returned
export var arrowFn = () => "test";

// All arguments should be typed
export var arrowFn = (arg): string => `test ${arg}`;
export var arrowFn = (arg: any): string => `test ${arg}`;

export class Test {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
```

Examples of **correct** code for this rule:

```ts
// A function with no return value (void)
export function test(): void {
  return;
}

// A return value of type string
export var arrowFn = (): string => "test";

// All arguments should be typed
export var arrowFn = (arg: string): string => `test ${arg}`;
export var arrowFn = (arg: unknown): string => `test ${arg}`;

export class Test {
  // A class method with no return value (void)
  method(): void {
    return;
  }
}

// The function does not apply because it is not an exported function.
function test() {
  return;
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny typescript/explicit-module-boundary-types
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/explicit-module-boundary-types": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
