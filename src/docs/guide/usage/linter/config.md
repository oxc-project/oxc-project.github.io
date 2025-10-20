---
outline: [2, 3]
editLink: false
---

# Configuring Oxlint

This is a general overview of how to configure Oxlint for linting your project. There are several ways of configuring Oxlint:

1. **Configuration files**, which can be passed to Oxlint via the `--config` option.
2. **Inline comments**, which can be used to enable/disable specific rules for a specific section of code.
3. **CLI options**, which can be used to override configuration files or specify inputs and outputs. (See [command-line interface](./cli.md) for more information.)

This page will mostly cover how to use configuration files, as they are the primary way of configuring Oxlint, but also includes information on how to use inline comments and CLI options. In general, inline comments and command-line arguments take precedent over the configuration file.

## Configuration file format

Configuration files for Oxlint are written in JSON, with support for comments (JSONC). Oxlint will automatically search for files named `.oxlintrc.json` and automatically use those. But you can name the file anything when you are using the `--config` CLI option.

A configuration file is a JSON object with top-level properties that will change how Oxlint behaves. Some of the most important properties are:

- `rules`: Configures what lint rules are enabled or disabled, their severity, and any rule-specific options.
- `plugins`: Extends the set of available rules with built-in plugins specific to certain frameworks or file types.
- `categories`: Enable groups of lint rules which have similar behavior or purpose, such as stylistic rules or correctness rules.
- `ignorePatterns`: Specifies file patterns to ignore when searching for lintable files.
- `env`: Enables sets of global variables which are known to be predefined based on the environment.
- `globals`: Declares individual global variables as predefined and read-only or writable, and also allows for global variables to be removed from the base set.
- `settings`: Adds configuration for plugins that apply to several rules at once.

## Configuring rules

Rules can be configured in a configuration file using the `rules` property. Rules are declared using the plugin name and rule name as the key, and either a string severity level, or an array with the severity level as the first element and an object with rule-specific options as the second element.

If a rule's name is unique, it can also be configured without specifying the plugin name. For example: `eslint/no-console` is the same rule as `no-console`.

```jsonc
{
  "rules": {
    "no-alert": "error", // Emit an error message when a call to `alert()` is found
    "oxc/approx-constant": "warn", // Show a warning when you write a number close to a known constant
    "no-plusplus": "off", // Allow using the `++` and `--` operators
  },
}
```

The allowed severity levels are:

- Allow rule: `"off"`, `0`, `"allow"`
- Warning on rule: `"warn"`, `1`
- Error on rule: `"error"`, `2`, `"deny"`

To configure a rule with rule-specific options, use an array with the severity level as the first element, and an object with the rule-specific options as the second element. For example:

```jsonc
{
  "rules": {
    // Generally error on `x++`, but allow it be used in a for-loop, like `for (let x = 0; x < 10; x++)`
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
  },
}
```

All of the available rules can be found on the [rules reference](./rules.md) page.

### Configuring rules via the command-line

In the command-line, you can change the severity of a lint rule to allow, warn, or deny, using the `-A` (`--allow`), `-W` (`--warn`), and `-D` (`--deny`) options, respectively:

```sh
oxlint -D no-alert -W oxc/approx-constant -A no-plusplus
```

### Configuring rules via inline configuration comments

Rules can also be enabled or disabled for specific sections of code using inline comments. Comments can be line comments (`//`) or block comments (`/* */`), and must start with a specific directive. These directives are:

- `oxlint-disable`: Disable one or more rules until the end of the file, or it is re-enabled with another comment

  ```javascript
  // Disable oxlint for the rest of the file
  /* oxlint-disable */

  // Disable the `no-console` rule in this file
  /* oxlint-disable no-console */

  // Disable multiple rules in this file
  /* oxlint-disable no-console, no-alert */
  ```

- `oxlint-enable`: Enable one or more rules until the end of the file, or it is disabled with another comment

  ```javascript
  // Enable the `no-console` rule in this file
  /* oxlint-enable no-console */

  // Enable multiple rules in this file
  /* oxlint-enable no-console, no-alert */
  ```

- `oxlint-disable-line`: Disable one or more rules on the current line

  ```javascript
  console.log("Hello, world!"); // oxlint-disable-line no-console
  // Disable multiple rules on this line
  console.log(x++); // oxlint-disable-line no-console, no-plusplus
  ```

- `oxlint-enable-line`: Enable one or more rules on the current line
- `oxlint-disable-next-line`: Disable one or more rules on the line following the comment, then re-enable it

  ```javascript
  // oxlint-disable-next-line no-console
  console.log("Hello, world!"); // allowed because of the previous comment
  console.log(x++); // not allowed because the previous comment only applied to the previous line

  // oxlint-disable-next-line no-console, no-plusplus
  console.log("Hello, world!"); // allowed
  ```

- `oxlint-enable-next-line`: Enable one or more rules on the line following the comment, then re-enable it

Oxlint does not support modifying the configuration of a lint rule through inline comments. If you need to change the configuration of a rule, you should use a configuration file instead. Oxlint also supports all of the following directives with `oxlint` replaced with `eslint` for compatibility with ESLint, such as `/* eslint-disable */` or `// eslint-disable-next`. We recommend preferring `oxlint-*`, and using `eslint-*` only for rules that Oxlint doesn't support yet.

### Enabling groups of rules (categories)

Each lint rule belongs to a category, which describes the general purpose or behavior of the rule. By default, `oxlint` enables all rules in the `correctness` category. Categories can be enabled with the `category` property in a configuration file.

```jsonc
{
  // Enable all rules in the `correctness` and `suspicious` categories
  "categories": {
    "correctness": "error",
    "suspicious": "warn",
  },
}
```

The available categories are:

- `correctness`: Rules to lint code that is definitely wrong or useless
- `suspicious`: Rules to lint code that is likely to be wrong or useless
- `pedantic`: Rules which are extra strict or might have false positives
- `perf`: Rules that aim to improve the performance of code
- `style`: Rules that help maintain a consistent style or enforce idiomatic syntax
- `restriction`: Rules that ban specific patterns, syntax, or features and should be enabled on a case-by-case basis
- `nursery`: Rules that are in development, may change significantly, or contain false positives

Categories can also be enabled or disabled in the command line using the same `-A` (allow), `-W` (warn) and `-D` (deny) options used to configure rules:

```sh
# Enable all correctness and suspicious rules
oxlint -D correctness -D pedantic
```

### Configuring plugins

Plugins are used to extend the set of available rules with built-in plugins specific to certain frameworks or file types. By default, Oxlint enables several plugins which are useful to most codebases.

Plugins can be enabled with the `plugins` property in a configuration file. The value of the `plugins` property is an array of plugin names, and it overwrites the default set of plugins. For example:

```jsonc
{
  // Enable all of these plugins (which are enabled by default):
  "plugins": ["unicorn", "typescript", "oxc"],
}
```

Default plugins can be disabled by setting an empty array as the value of the `plugins` property. For example:

```jsonc
{
  // Disable all default plugins
  "plugins": [],
}
```

For more details, see the [plugins](./plugins.md) page.

### Overriding rule configurations

Rule configurations can be changed depending on the file path, and this is done using the `overrides` property in a configuration file. The value of the `overrides` property is an array of objects, each with the following supported properties:

- `files`: A glob pattern to match file paths against
- `rules`: A rules configuration object (same as the top-level `rules` property)
- `env`: An `env` configuration object (same as the top-level `env` property)
- `plugins`: A `plugins` configuration object (same as the top-level `plugins` property), except plugins will append to the top-level `plugins` property instead of overwriting it
- `globals`: A `globals` configuration object (same as the top-level `globals` property)

```jsonc
{
  "rules": {
    "no-console": "error",
  },
  "overrides": [
    {
      "files": ["script/*.js"],
      "rules": {
        // Allow console.* calls in scripts
        "no-console": "off",
      },
    },
    {
      // Enable TypeScript-specific rules for TypeScript files
      "files": ["**/*.{ts,tsx}"],
      "plugins": ["typescript"],
      "rules": {
        "typescript/no-explicit-any": "error",
      },
    },
    {
      // Enable Jest rules for tests
      "files": ["**/test/**"],
      "plugins": ["jest"],
      "env": {
        "jest": true,
      },
      "rules": {
        "jest/no-disabled-tests": "off",
      },
    },
  ],
}
```

## Specifying files to process

The primary way of specifying files to process is by passing a file path as an argument to the `oxlint` command. By default, files in the current directory and below will be processed. Additionally, `oxlint` will automatically lint all files that have one of the following extensions:

- `.js`
- `.jsx`
- `.mjs`
- `.cjs`
- `.ts`
- `.tsx`
- `.mts`
- `.cts`
- `.astro` _\*_
- `.svelte` _\*_
- `.vue` _\*_

_\*Note: Supports only the `<script>` content, ignores the rest. For Astro, both the frontmatter and component script are linted._

### Ignoring files

You can ignore certain patterns of files by configuring the `ignorePatterns` property in a configuration file. The value of the `ignorePatterns` property is an array of file patterns (globs), which are resolved relative to the location of the configuration file.

```jsonc
{
  "ignorePatterns": ["vendor", "test/snapshots/**", "test.js"],
}
```

### .eslintignore

Oxlint works with our previous [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file) file.
