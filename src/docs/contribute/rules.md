---
title: Rules
outline: deep
---

# Rules

- We welcome and appreciate any form of contributions.
- Please create an issue or discussion if you are making an architectural change.

## PR related

- [Prefer smaller PRs](https://graphite.dev/blog/how-large-prs-slow-down-development), they will get merged quickly.
- Try stacked PRs with [graphite](https://graphite.dev) if repo write permission is given to you.

## Architecture

- All performance issues (runtime and compilation speed) are considered as bugs in this project.
- Embrace data-oriented design.
- APIs should be simple and well-documented.
- Third-party dependencies should be minimal.
- Avoid the `regex` crate when possible. Regexes are slow, most of them can be rewritten in a performant way by using Rust iterator and string methods.
- Avoid macros, traits or any Rust techniques that would penalize compilation speed.

## Maintenance

- Monitor code coverage for unused code. Aim for 99% code coverage.
- CI time should be actively monitored and reduced to speed up merging of PRs. The current CI time on GitHub actions is around 3 minutes.

---

### Bias towards action

(Taken from [Astral's values](https://astral-sh.notion.site/Astral-s-Values-0ed6a642bcc84e91af6836b2373572f5))

We bias towards action, even in the face of uncertainty. We favor **pragmatic doing** over **prolonged debating**; we favor asking for **forgiveness** over **permission**. We value **decisiveness** — especially when a decision isn’t clear cut, and **especially** when a decision is reversible.

A bias towards action is **not** the same as recklessness. Rather, it’s a bias towards making **responsible** decisions and acting on them with _urgency_, even if we’re left with lingering ambiguity or known unknowns.
