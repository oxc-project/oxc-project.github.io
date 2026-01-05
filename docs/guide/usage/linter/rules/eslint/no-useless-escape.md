---
url: /docs/guide/usage/linter/rules/eslint/no-useless-escape.md
---
# eslint/no-useless-escape&#x20;

### What it does

Disallow unnecessary escape characters.

### Why is this bad?

Escaping characters unnecessarily has no effect on the behavior of strings or regexes,
and can make code harder to read and understand by adding unnecessary complexity.
This applies to string literals, template literals, and regular expressions.

### Examples

Examples of **incorrect** code for this rule:

```javascript
"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
/[\[]/;
/[a-z\-]/;
```

Examples of **correct** code for this rule:

```javascript
"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}}`;
`$\{${foo}}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;
/[[]/;
/[\]]/;
/[a-z-]/;
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowRegexCharacters

type: `string[]`

default: `[]`

An array of characters that are allowed to be escaped unnecessarily in regexes.
For example, setting this to `["#"]` allows `\#` in regexes.

Each string in this array must be a single character.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-useless-escape": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-useless-escape
```

:::

## References

* Rule Source
