---
title: Resolver
outline: deep
---

# Resolver

Module resolution plays a crucial role in JavaScript tooling, especially for tasks like multi-file analysis or bundling. However, it can often become a performance bottleneck.
To address this, we are actively working on porting [enhanced-resolve](https://github.com/webpack/enhanced-resolve).

[eslint-plugin-import](https://github.com/oxc-project/oxc/issues/1117) will be our first application for the resolver, since it is currently a performance and complexity blocker for a lot of projects.
