# Embedded Formatting

Oxfmt includes support for embedded language formatting - formatting code for languages embedded within JavaScript/TypeScript files (e.g., CSS in template literals, GraphQL, HTML in JSX). This feature leverages the language’s native formatter where possible, and falls back to Prettier for embedded segments when necessary.

## Overview

Many modern web applications include multiple languages in a single file - for example:

- CSS inside template literals (e.g., `styled-components`, `css`)
- HTML within JSX/TSX
- GraphQL queries embedded in strings
- Handlebars templates in scripts

## Configuration

Oxfmt exposes embedded formatting control through the `embeddedLanguageFormatting` option in the Oxfmt configuration schema. See the configuration reference for full details.

### Example

```json [.oxfmtrc.json]
{
  "embeddedLanguageFormatting": "auto"
}
```

#### Possible Values

- `"auto"` — (Default) Attempt to format embedded sections with appropriate language formatters.
- `"off"` — Do not format embedded languages; only format the outer JS/TS code.

## Supported and Unsupported Cases

### Supported

Oxfmt can format many embedded languages when parsing template literals and JSX attributes, including:

- CSS and SCSS in tagged template literals
- GraphQL queries in strings
- HTML segments in JSX/TSX

## Example

### Before

```jsx
const styles = css`
  .container {
    background: blue;
    color: red;
  }
`;
```

### After (expected embedded CSS formatting)

```jsx
const styles = css`
  .container {
    background: blue;
    color: red;
  }
`;
```
