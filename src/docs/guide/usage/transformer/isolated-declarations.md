# Isolated Declarations Emit

Oxc transformer supports emitting TypeScript declarations without using the TypeScript compiler for projects with [isolated declarations](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/#isolated-declarations) enabled.

## Example

**Input**:

```ts
export function foo(a: number, b: string): number {
  return a + Number(b);
}

export enum Bar {
  a,
  b,
}
```

**Output**:

```ts
export declare function foo(a: number, b: string): number;
export declare enum Bar {
  a = 0,
  b = 1,
}
```

## Usage

```js
import { transform } from "oxc-transform";

const result = isolatedDeclaration("lib.ts", sourceCode, {
  sourcemap: false,
  stripInternal: false,
});
```
