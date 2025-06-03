---
outline: [2, 3]
editLink: false
---

# Versioning

Oxlint follows semantic versioning, with the goal of providing clarity and predictability as you upgrade.

What's considered a **breaking** change:

- Changes to the CLI interface that would break existing workflows.
- Changes to the configuration file (`.oxlintrc.json`).
- Renaming or removing a rule.

What's considered a **non-breaking** change:

- Adding new lint rules.
- Changing the default configuration for a rule.
- Improving rule descriptions or diagnostic messages.

## Are New Lint Errors a Breaking Change?

If a new version of Oxlint reports additional issues in your code, that’s expected. This behavior means Oxlint has improved — not that something in your project broke. New errors reflect stronger analysis, not a broken upgrade.

## What to Expect from New Versions

- **Patch version** (1.0.x): Bug fixes, performance improvements, internal refactors. These are always safe to upgrade.
- **Minor version** (1.x.0): New rules, better diagnostics, new features. These are not considered breaking changes even if they cause new errors to appear in your codebase.
- **Major version** (x.0.0): Reserved for breaking changes to the CLI or configuration format.

## With Renovate Bot

Add the snippet below to your Renovate config to let it keep Oxlint automatically up to date.

```jsonc
{
  "extends": ["config:recommended"],
  "packageRules": [
    {
      "matchPackageNames": ["oxlint"],
      "groupName": "oxlint",
      "automergeType": "branch", // or "pr"
      "stabilityDays": 1 // wait 24 h to catch regressions
    }
  ]
}
```

## With Dependabot

Add the snippet below to your Dependabot config to let it keep Oxlint automatically up to date.

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/" # location of package.json
    schedule:
      interval: "daily"
    groups: # group all Oxlint updates together
      oxlint:
        patterns:
          - "oxlint"
    commit-message: # keep the history tidy
      prefix: "chore"
      include: "scope"
    ignore: # optional: ignore future majors
      - dependency-name: "oxlint"
        update-types: ["version-update:semver-major"]
    open-pull-requests-limit: 1 # one PR at a time
```
