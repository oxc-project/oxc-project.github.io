# Built-in Plugins

Oxc transformer includes built-in support for popular transformation plugins to improve developer experience and build performance.

## Styled Components

The styled-components plugin adds comprehensive support for styled-components with server-side rendering, style minification, and enhanced debugging capabilities.

### Basic Usage

```javascript
import { transform } from "oxc-transform";

const result = transform("Component.jsx", sourceCode, {
  plugins: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      minify: true,
    },
  },
});
```

### Example

**Input:**

```jsx
import styled from "styled-components";

const Button = styled.div`
  color: blue;
  padding: 10px;
`;
```

**Output (with default options):**

```jsx
import styled from "styled-components";

const Button = styled.div.withConfig({
  displayName: "Button",
  componentId: "sc-1234567-0",
})(["color:blue;padding:10px;"]);
```

### Configuration Options

#### Core Options

| Option        | Type      | Default | Description                                                                         |
| ------------- | --------- | ------- | ----------------------------------------------------------------------------------- |
| `displayName` | `boolean` | `true`  | Enhances the attached CSS class name with component names for easier debugging      |
| `ssr`         | `boolean` | `true`  | Adds unique component IDs to avoid checksum mismatches during server-side rendering |
| `fileName`    | `boolean` | `true`  | Controls whether the displayName is prefixed with the filename                      |

#### Template Literal Options

| Option                      | Type      | Default | Description                                                                    |
| --------------------------- | --------- | ------- | ------------------------------------------------------------------------------ |
| `transpileTemplateLiterals` | `boolean` | `true`  | Converts template literals to a smaller representation for reduced bundle size |
| `minify`                    | `boolean` | `true`  | Minifies CSS content by removing whitespace and comments                       |

#### Advanced Options

| Option                 | Type       | Default     | Description                                                   |
| ---------------------- | ---------- | ----------- | ------------------------------------------------------------- |
| `pure`                 | `boolean`  | `false`     | Adds `/*#__PURE__*/` comments for better tree-shaking         |
| `namespace`            | `string`   | `undefined` | Adds a namespace prefix to component IDs                      |
| `meaninglessFileNames` | `string[]` | `["index"]` | List of filenames considered meaningless for component naming |

#### Not Yet Implemented

| Option                | Type       | Default | Description                           |
| --------------------- | ---------- | ------- | ------------------------------------- |
| `cssProp`             | `boolean`  | `true`  | JSX css prop transformation (planned) |
| `topLevelImportPaths` | `string[]` | `[]`    | Custom import path handling (planned) |

### Supported Import Patterns

The plugin works with various styled-components import patterns:

```javascript
// Default import
import styled from "styled-components";

// Namespace import
import * as styled from "styled-components";

// Named imports
import { createGlobalStyle, css, keyframes } from "styled-components";

// Native and primitives
import styled from "styled-components/native";
import styled from "styled-components/primitives";
```

### Features

**✅ Fully Supported:**

- Display names for debugging
- Filename prefixing in display names
- Server-side rendering support
- Template literal transpilation
- CSS minification
- Namespace prefixes
- Pure annotations for call expressions

**⚠️ Partially Supported:**

- Pure annotations (call expressions only, not tagged templates due to bundler limitations)

**❌ Not Yet Implemented:**

- JSX css prop transformation
- Custom import path handling
