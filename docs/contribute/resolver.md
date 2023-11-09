---
id: resolver
title: Resolver
---

# Resolver

Module resolution plays a crucial role in JavaScript tooling, especially for tasks like multi-file analysis or bundling. However, it can often become a performance bottleneck.
To address this, we are actively working on porting [enhanced-resolve].

[eslint-plugin-import] will be our first application for the resolver, since it is currently a performance and complexity blocker for a lot of projects.
