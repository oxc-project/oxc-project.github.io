---
outline: [2, 3]
editLink: false
---

# Nested configuration files

It is possible to have multiple configuration files within the same project. Oxlint will automatically detect the presence of these files and use them in addition to the top-level configuration file. Config files must be named `.oxlintrc.json` for nested configuration to work.

For example, consider the following project structure:

```
my-project/
├── .oxlintrc.json
├── src/
│   ├── index.js
├── package1/
│   ├── .oxlintrc.json
│   └── index.js
└── package2/
    ├── .oxlintrc.json
    └── index.js
```

Oxlint will always use the nearest configuration file to the file currently being processed and use that for linting. In the example above, that means:

- `src/index.js` will be linted using `my-project/.oxlintrc.json`
- `package1/index.js` will be linted using `my-project/package1/.oxlintrc.json`
- `package2/index.js` will be linted using `my-project/package2/.oxlintrc.json`

Configuration files are not automatically merged, and the configuration in a child configuration file will not affect the parent configuration. However, options passed in the command-line will override any configuration file, regardless of whether it is in the parent or child directory. In addition, using the `--config` option to specify a singular file for configuration will disable the use of nested configuration files.

## Extending configuration files

Files can use configuration from other files by using the `extends` property in a configuration file. The value of the `extends` property is an array of file paths to other configuration files, which are resolved relative to the location of the configuration file. Files may be called anything and do not need to be called `.oxlintrc.json`, but still need to be valid JSON configuration files.

```jsonc
// oxlint-typescript.json
{
  "plugins": ["typescript"],
  "rules": {
    "typescript/no-explicit-any": "error"
  }
}
// .oxlintrc.json
{
  "extends": ["oxlint-typescript.json"],
  "rules": {
    "no-unused-vars": "warn"
  }
}
```

Not all properties can be extended, but the following properties are supported:

- `rules`
- `plugins`
- `overrides`
