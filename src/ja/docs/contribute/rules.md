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

- All performance issues (runtime and compilation speed) are considered as bugs in this project.
- Embrace data-oriented design.
- APIs should be simple and well-documented.
- Third-party dependencies should be minimal.
- Avoid the `regex` crate when possible. Regex is slow, most of them can be rewritten in a performant way by using Rust iterator and string methods.
- Avoid heavy macros or generics or any Rust techniques that would penalize compilation speed.
- Always reference the source if the implementation comes from elsewhere.

## Maintenance Policy

- Monitor code coverage for unused code. Aim for 99% code coverage.
- CI time should be actively monitored and reduced to speed up merging of PRs. The current CI time on GitHub actions is around 3 minutes.

## Action Policy

Taken from [Astral's values](https://astral-sh.notion.site/Astral-s-Values-0ed6a642bcc84e91af6836b2373572f5):

> We bias towards action, even in the face of uncertainty. We favor _pragmatic doing_ over **prolonged debating**; we favor asking for _forgiveness_ over _permission_. We value **decisiveness — especially** when a decision isn’t clear cut, and **especially** when a decision is reversible.
>
> A bias towards action is _not_ the same as recklessness. Rather, it’s a bias towards making _responsible_ decisions and acting on them with _urgency_, even if we’re left with lingering ambiguity or known unknowns.
