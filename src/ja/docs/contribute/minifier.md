---
title: Minifier
outline: deep
---

# Minifier

JavaScript minification plays a crucial role in optimizing website performance as it reduces the amount of data sent to users,
resulting in faster page loads.
This holds tremendous economic value, particularly for e-commerce websites, where every second can equate to millions of dollars.

However, existing minifiers typically require a trade-off between compression quality and speed.
You have to choose between the slowest for the best compression or the fastest for less compression.
But what if we could develop a faster minifier without compromising on compression?

We are actively working on a prototype that aims to achieve this goal,
by porting all test cases from well-known minifiers such as [google-closure-compiler], [terser], [esbuild], and [tdewolff-minify].

Preliminary results indicate that we are on track to achieve our objectives.
With the Oxc minifier, you can expect faster minification times without sacrificing compression quality.

[google-closure-compiler]: https://github.com/google/closure-compiler
[terser]: https://github.com/terser/terser
[esbuild]: https://github.com/evanw/esbuild
[tdewolff-minify]: https://github.com/tdewolff/minify
