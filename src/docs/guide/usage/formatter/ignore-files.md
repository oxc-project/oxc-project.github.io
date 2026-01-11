# Ignore files

Oxfmt provides multiple mechanisms for excluding files from formatting. Each mechanism has a distinct scope and purpose.

## `ignorePatterns`

The recommended way to ignore files in Oxfmt is to use `ignorePatterns` in
`.oxfmtrc.json` or `.oxfmtrc.jsonc`.

```jsonc [.oxfmtrc.jsonc]
{
  "ignorePatterns": ["dist/**", "*.min.js"],
}
```

- Uses `.gitignore` syntax
- Paths are resolved relative to the directory containing the Oxfmt config file
- Formatter-specific and independent of Git

Files ignored via `ignorePatterns` **cannot be formatted**, even if explicitly
specified. This behavior is intended for enforcement workflows such as `husky`.

## `.gitignore`

Oxfmt respects `.gitignore` files located in the current working directory and
its subdirectories.

- Only `.gitignore` files in the current directory tree are read
- Global Git ignore files, Git excludes, and `.gitignore` files in parent
  directories are not respected
- A `.git` directory does not need to exist

Files ignored by `.gitignore` **can still be formatted** if they are explicitly
specified on the command line.

This behavior is safe for workflows such as `husky`, as ignored files are never
staged by default.

## VCS directories and `node_modules`

The following directories are ignored by default:

- `.git`
- `.svn`
- `.jj`
- `node_modules`

To include `node_modules`, use the `--with-node_modules` flag.

If the current working directory is inside one of these directories, formatting
is still allowed.

## Lock files

Lock files such as `package-lock.json` and `pnpm-lock.yaml` are ignored by
default.

These files cannot be formatted, even when explicitly specified.

## `.prettierignore` (compatibility)

Oxfmt supports `.prettierignore` for compatibility with existing Prettier
workflows.

- Read only from the current working directory
- Uses `.gitignore` syntax
- Paths are resolved relative to the ignore file

Files ignored by `.prettierignore` cannot be formatted, even when explicitly
specified.

For new projects, prefer `ignorePatterns`.
