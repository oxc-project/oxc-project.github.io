# TypeScript

Oxc transformer supports transforming TypeScript to JavaScript.

```js
import { transform } from "oxc-transform";

const result = transform("lib.ts", sourceCode, {
  typescript: {
    jsxPragma: "React.createElement",
    jsxPragmaFrag: "React.Fragment",
    onlyRemoveTypeImports: false,
    allowNamespaces: true,
    removeClassFieldsWithoutInitializer: false,
    rewriteImportExtensions: false,
  },
});
```

## `verbatimModuleSyntax`

By default, TypeScript removes unused imports in a different semantics than the JavaScript specification.
The [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax) option tells TypeScript to align with the JavaScript specification.

If you are using this option, make sure to set `typescript.onlyRemoveTypeImports` option to `true`.

```js
import { transform } from "oxc-transform";

const result = transform("lib.ts", sourceCode, {
  typescript: {
    onlyRemoveTypeImports: true,
  },
});
```

## `useDefineForClassFields`

TypeScript used to have a different semantics for class fields than the JavaScript specification. The [`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig/#useDefineForClassFields) option tells TypeScript to align with the JavaScript specification. This options is enabled by default if the `target` option in the tsconfig is set to `es2022` or higher.

If you are disabling this option, make sure to set `typescript.removeClassFieldsWithoutInitializer` option and `assumptions.setPublicClassFields` to `true`.

```js
import { transform } from "oxc-transform";

const result = transform("lib.ts", sourceCode, {
  typescript: {
    removeClassFieldsWithoutInitializer: true,
  },
  assumptions: {
    setPublicClassFields: true,
  },
});
```

## Decorators

Oxc transformer supports transforming legacy decorators. This is called experimental decorators in TypeScript.

If you are using the [`experimentalDecorators`](https://www.typescriptlang.org/tsconfig/#experimentalDecorators) option in the tsconfig, you can use the `decorators.legacy` option.
If you are using the [`emitDecoratorMetadata`](https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata) option in the tsconfig, you can use the `decorators.emitDecoratorMetadata` option.

```js
import { transform } from "oxc-transform";

const result = transform("lib.ts", sourceCode, {
  decorators: {
    legacy: true,
    emitDecoratorMetadata: true,
  },
});
```

## TSX

Transforming TSX files is supported as well.
See [JSX transform](./jsx) for more information.

## Rewriting import extensions

If you are using the [`rewriteImportExtensions`](https://www.typescriptlang.org/tsconfig/#rewriteImportExtensions) option in the tsconfig, you can use the `typescript.rewriteImportExtensions` option.

```js
import { transform } from "oxc-transform";

const result = transform("lib.ts", sourceCode, {
  typescript: {
    rewriteImportExtensions: "rewrite", // or "remove"
  },
});
```

## Caveats

Because Oxc transformer transforms each files independently, some TypeScript features are not supported.
To avoid using unsupported features, you should enable the [`isolatedModules`](https://www.typescriptlang.org/tsconfig/#isolatedModules) option in your `tsconfig.json` file.
