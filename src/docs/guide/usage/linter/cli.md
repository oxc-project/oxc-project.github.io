# Command-line Interface

## **Usage**

**`oxlint`** \[**`-c`**=_`<./eslintrc.json>`_\] \[**`--fix`**\] \[_`PATH`_\]...

Omitting `PATH` defaults to linting the current working directory.

## Useful Options and Examples

- `--deny-warnings` turn warnings into errors, useful for failing CI with exit code 1.
- `-D all` deny (turn on) all rules.
- `-A all -D eqeqeq` run a single rule.
- `-D correctness -D perf -A debugger -A eqeqeq` deny (turn on) `correctness` and `perf` rules and allow (turn off) the `debugger` and `eqeqeq` rule.
- `-c ./eslintrc.json` use the `rules` field to configure the rules, as documented in [ESLint](https://eslint.org/docs/latest/use/configure/rules#using-configuration-files). Only `json` format is supported.

## **Basic Configuration**

- **`-c`**, **`--config`**=_`<./eslintrc.json>`_ &mdash; ESLint configuration file (experimental)

  - only `.json` extension is supported

- **`    --tsconfig`**=_`<./tsconfig.json>`_ &mdash; TypeScript `tsconfig.json` path for reading path alias and project references for import plugin

## **Allowing / Denying Multiple Lints**

For example `-D correctness -A no-debugger` or `-A all -D no-debugger`.

The default category is `-D correctness`.

See [`rules`](/docs/guide/usage/linter/rules) for rule names.

The categories are:

- `correctness` - code that is outright wrong or useless
- `suspicious` - code that is most likely wrong or useless
- `pedantic` - lints which are rather strict or have occasional false positives
- `style` - code that should be written in a more idiomatic way
- `nursery` - new lints that are still under development
- `restriction` - lints which prevent the use of language and library features
- `all` - all the categories listed above

* **`-A`**, **`--allow`**=_`NAME`_ &mdash; Allow the rule or category (suppress the lint)
* **`-D`**, **`--deny`**=_`NAME`_ &mdash; Deny the rule or category (emit an error)

## **Enable Plugins**

<!-- - **`    --disable-react-plugin`** &mdash; Disable react plugin, which is turned on by default -->
<!-- - **`    --disable-unicorn-plugin`** &mdash; Disable unicorn plugin, which is turned on by default -->
<!-- - **`    --disable-typescript-plugin`** &mdash; Disable TypeScript plugin, which is turned on by default -->

- **`    --import-plugin`** &mdash; Enable the experimental import plugin and detect ESM problems. It is recommended to use along side with the `--tsconfig` option.
- **`    --jsdoc-plugin`** &mdash; Enable the experimental JSDoc plugin and detect JSDoc problems
- **`    --jest-plugin`** &mdash; Enable the Jest plugin and detect test problems
- **`    --jsx-a11y-plugin`** &mdash; Enable the JSX-a11y plugin and detect accessibility problems
- **`    --nextjs-plugin`** &mdash; Enable the Next.js plugin and detect Next.js problems
- **`    --react-perf-plugin`** &mdash; Enable the React performance plugin and detect rendering performance problems

## **Fix Problems**

- **`    --fix`** &mdash; Fix as many issues as possible. Only unfixed issues are reported in the output

## **Ignore Files**

- **`    --ignore-path`**=_`PATH`_ &mdash; Specify the file to use as your .eslintignore
- **`    --ignore-pattern`**=_`PAT`_ &mdash; Specify patterns of files to ignore (in addition to those in .eslintignore)

  The supported syntax is the same as for .eslintignore and .gitignore files You should quote your patterns in order to avoid shell interpretation of glob patterns

- **`    --no-ignore`** &mdash; Disables excluding of files from .eslintignore files, **`--ignore-path`** flags and **`--ignore-pattern`** flags
- **`    --symlinks`** &mdash; Follow symbolic links. Oxlint ignores symbolic links by default.

## **Handle Warnings**

- **`    --quiet`** &mdash; Disable reporting on warnings, only errors are reported
- **`    --deny-warnings`** &mdash; Ensure warnings produce a non-zero exit code
- **`    --max-warnings`**=_`INT`_ &mdash; Specify a warning threshold, which can be used to force exit with an error status if there are too many warning-level rule violations in your project

## **Output**

- **`-f`**, **`--format`**=_`ARG`_ &mdash; Use a specific output format (default, json, unix, checkstyle, GitHub)

## **Miscellaneous**

- **`    --threads`**=_`INT`_ &mdash; Number of threads to use. Set to 1 for using only 1 CPU core

## **Available positional items:**

- _`PATH`_ &mdash; Single file, single path or list of paths

## **Available options:**

- **`    --rules`** &mdash; list all the rules that are currently registered
- **`-h`**, **`--help`** &mdash; Prints help information
