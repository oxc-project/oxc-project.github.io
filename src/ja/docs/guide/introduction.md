---
title: Introduction
outline: deep
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { COMMUNITY_TEAM_MEMBERS, CORE_TEAM_MEMBERS } from '@constants/team'
</script>

# What is OXC?

The Oxidation Compiler is a collection of high-performance tools for the JavaScript and TypeScript language.

We are building a parser, linter, formatter, transpiler, minifier, resolver ... all written in Rust.

Our goal is to create and empower the fastest and most user friendly tools for [The Third Age of JavaScript](https://www.swyx.io/js-third-age).

## Philosophy

This project shares the same philosophies as [Biome][biome] and [Ruff][ruff].

1. JavaScript tooling could be rewritten in a more performant language.
2. An integrated toolchain can tap into efficiencies that are not available to a disparate set of tools.

## Core Team

<VPTeamMembers size="medium" :members="CORE_TEAM_MEMBERS" />

[biome]: https://biomejs.dev
[ruff]: https://beta.ruff.rs
