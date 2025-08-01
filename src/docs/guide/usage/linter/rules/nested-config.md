---
title: Nested Configuration
outline: deep
---

# Nested Configuration

Oxlint supports nested configuration files that allow you to apply different linting rules to different parts of your project. This is particularly useful for large codebases where different directories may have different requirements.

## How It Works

When Oxlint processes a file, it looks for configuration files starting from the file's directory and walking up the directory tree. The closest configuration file takes precedence, with settings from parent configurations being inherited and potentially overridden.

## Configuration File Discovery

Oxlint looks for configuration files in the following order:

1. `.oxlintrc.json`
2. `.oxlintrc.js`
3. `.oxlintrc.yml` / `.oxlintrc.yaml`
4. `oxlint.json` in `package.json`

## Example Structure

Consider the following project structure:

```
project/
├── .oxlintrc.json          # Root configuration
├── src/
│   ├── components/
│   │   ├── .oxlintrc.json  # Component-specific rules
│   │   └── Button.tsx
│   └── utils/
│       └── helpers.ts
└── tests/
    ├── .oxlintrc.json      # Test-specific rules
    └── example.test.ts
```

## Configuration Inheritance

Child configurations inherit rules from their parent configurations. You can:

- **Override specific rules**: Change the severity or options for inherited rules
- **Add new rules**: Enable additional rules not present in parent configurations
- **Disable inherited rules**: Turn off rules that are enabled in parent configurations

### Root Configuration Example

`.oxlintrc.json` (root):
```json
{
  "rules": {
    "no-unused-vars": "error",
    "prefer-const": "warn",
    "no-console": "warn"
  }
}
```

### Nested Configuration Example

`src/components/.oxlintrc.json`:
```json
{
  "rules": {
    "no-console": "off",           
    "react/prop-types": "error",   
    "prefer-const": "error"        
  }
}
```

`tests/.oxlintrc.json`:
```json
{
  "rules": {
    "no-unused-vars": "off",       
    "no-console": "off"            
  }
}
```

## Practical Use Cases

### 1. Framework-Specific Rules

Apply React-specific rules only to component directories:

```json
{
  "plugins": ["react", "jsx-a11y"],
  "rules": {
    "react/no-unused-prop-types": "error",
    "jsx-a11y/alt-text": "error"
  }
}
```

### 2. Test Environment Configuration

Relax certain rules for test files:

```json
{
  "env": {
    "jest": true
  },
  "rules": {
    "no-unused-expressions": "off",
    "max-lines": "off"
  }
}
```

### 3. Legacy Code Sections

Gradually migrate legacy code by applying stricter rules to new sections:

```json
{
  "rules": {
    "no-var": "off",
    "prefer-arrow-callback": "off"
  }
}
```

## Best Practices

1. **Keep configurations minimal**: Only override what's necessary in nested configs
2. **Document special cases**: Add comments explaining why specific rules are overridden
3. **Use consistent structure**: Maintain similar configuration patterns across the project
4. **Test your configuration**: Run Oxlint with `--print-config` to verify the final configuration for specific files

## Debugging Configuration

To see the effective configuration for a specific file, use:

```bash
oxlint --print-config src/components/Button.tsx
```

This shows the final merged configuration that will be applied to that file, helping you debug configuration inheritance issues.
