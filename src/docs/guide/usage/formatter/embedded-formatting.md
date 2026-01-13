# Embedded Formatting

:::warning
Not fully implemented. See [tracking issue](https://github.com/oxc-project/oxc/issues/15180).
:::

Formats code embedded in JS/TS files (CSS in template literals, GraphQL, HTML in JSX).

## Configuration

```json [.oxfmtrc.json]
{
  "embeddedLanguageFormatting": "auto"
}
```

### Values

- `"auto"` — (default) Format embedded sections
- `"off"` — Skip embedded formatting

## Example

CSS inside a tagged template literal:

```jsx
const styles = css`
  .container {
    background: blue;
    color: red;
  }
`;
```
