---
title: Rules and Policy
outline: deep
---

# Introduction

## PR Rules

- We [prefer smaller PRs](https://graphite.dev/blog/how-large-prs-slow-down-development).
- Try stacked PRs with [graphite](https://graphite.dev) if you have write access, which will be given to you when you contribute a lot.
- Please create an issue or discussion if the PR contains architectural changes.

## Development Policy

- All performance issues are considered as bugs in this project, this includes all runtime and compilation performance issues.
- Embrace data-oriented design.
- Keep APIs simple and well-documented.
- Minimize third-party dependencies to reduce compilation speed and project complexity.
- Avoid heavy macros, generics, or any Rust techniques that slow down compilation.
- Always provide a reference to the source if the implementation is from another project.
- Minimize the use of the `regex` crate. Use Rust iterators and string methods for better performance.

## Maintenance Policy

- Monitor code coverage for unused code. Aim for 99% code coverage.
- Actively monitor and work on reducing the CI time to speed up merging of PRs. The current CI time on GitHub actions is around 3 minutes.
- Documentation first - documentation should serve as the source of truth. Keep the documentation updated and share the link instead of repeatedly answering the same questions. See GitLab's [handbook-first](https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first) approach.

## Conventional Commits

We follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/):

The commit contains the following structural elements, to communicate intent to the consumers:

- `fix`: a commit of the type fix patches a bug in your codebase.
- `feat`: a commit of the type feat introduces a new feature to the codebase.
- BREAKING CHANGE: a appends a `!` after the type/scope, introduces a breaking API change, e.g. `feat(parser)!: new feature`.
- the scopes are crate names.
- the types are `feat:`, `fix:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:` and `test:`.

## Action Policy

Taken from [Astral's values](https://astral-sh.notion.site/Astral-s-Values-0ed6a642bcc84e91af6836b2373572f5):

> We bias towards action, even in the face of uncertainty. We favor _pragmatic doing_ over **prolonged debating**; we favor asking for _forgiveness_ over _permission_. We value **decisiveness — especially** when a decision isn’t clear cut, and **especially** when a decision is reversible.
>
> A bias towards action is _not_ the same as recklessness. Rather, it’s a bias towards making _responsible_ decisions and acting on them with _urgency_, even if we’re left with lingering ambiguity or known unknowns.
