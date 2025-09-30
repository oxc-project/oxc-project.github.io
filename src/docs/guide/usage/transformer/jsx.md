# JSX

Oxc transformer supports transforming JSX.

## Usage

```js
import { transform } from "oxc-transform";

const result = transform("App.jsx", sourceCode, {
  jsx: {
    runtime: "automatic", // or "classic"
    development: false, // or true
    throwIfNamespace: true, // or false
    pure: true, // or false
    importSource: "react",
    pragma: "React.createElement",
    pragmaFrag: "React.Fragment",
    useBuiltIns: false, // or true
    useSpread: false, // or true
    refresh: false, // see below
  },
  // When transforming TSX files:
  typescript: {
    jsxPragma: "React.createElement", // same value with `jsx.pragma`
    jsxPragmaFrag: "React.Fragment", // same value with `jsx.pragmaFrag`
  },
});
```

## React Refresh

React Refresh (also known as React Fast Refresh) provides hot reloading capabilities for React components during development.

### Usage

To enable React Refresh transformation, set `jsx.refresh` option:

```javascript
import { transform } from "oxc-transform";

const result = transform("App.jsx", sourceCode, {
  jsx: {
    development: true,
    refresh: true,
    // or...
    // refresh: {
    //   refreshReg: "$RefreshReg$",
    //   refreshSig: "$RefreshSig$",
    //   emitFullSignatures: true,
    // },
  },
});
```

### Configuration Options

| Option               | Type      | Default          | Description                                                 |
| -------------------- | --------- | ---------------- | ----------------------------------------------------------- |
| `refreshReg`         | `string`  | `"$RefreshReg$"` | The name of the function to register components for refresh |
| `refreshSig`         | `string`  | `"$RefreshSig$"` | The name of the function to create signatures for refresh   |
| `emitFullSignatures` | `boolean` | `false`          | Whether to emit full signatures for better debugging        |
