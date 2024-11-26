import{_ as i,c as a,a2 as e,o as n}from"./chunks/framework.Cm5JpC29.js";const u=JSON.parse('{"title":"Automatic Fixes","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"docs/guide/usage/linter/automatic-fixes.md","filePath":"docs/guide/usage/linter/automatic-fixes.md"}'),t={name:"docs/guide/usage/linter/automatic-fixes.md"};function o(l,s,h,r,d,g){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="automatic-fixes" tabindex="-1">Automatic Fixes <a class="header-anchor" href="#automatic-fixes" aria-label="Permalink to &quot;Automatic Fixes&quot;">​</a></h1><p>In some cases, Oxlint is able to automatically fix lint violations in your code. There are two categories of automatic fixes:</p><ul><li><strong>Fixes</strong>: These are changes that will not change your program&#39;s behavior. It is generally safe to run them in a pre-lint hook.</li><li><strong>Suggestions</strong>: Changes that may change your program&#39;s behavior or make a change you may not want (e.g. removing <code>console.log</code>s). These should be reviewed before being committed to your codebase.</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # Safe fixes only</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-suggestions</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # Safe suggestions only</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-suggestions</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Safe fixes and suggestions</span></span></code></pre></div><p>You can find which rules are fixable from the <a href="./rules.html">rules page</a>.</p><h2 id="dangerous-fixes-and-suggestions" tabindex="-1">Dangerous Fixes and Suggestions <a class="header-anchor" href="#dangerous-fixes-and-suggestions" aria-label="Permalink to &quot;Dangerous Fixes and Suggestions&quot;">​</a></h2><p>Some fixes and suggestions are considered dangerous. Being more aggressive in nature, <strong>these may produce invalid code and/or change the behavior of your program</strong>. These are disabled by default and can be enabled with the <code>--fix-dangerously</code> flag. You should review each change carefully before committing it to your codebase.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are using git, you should stage your changes before running any of the commands below using <code>git add -A</code>.</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Safe and dangerous fixes only</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-dangerously</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Safe and dangerous suggestions only</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-suggestions</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-dangerously</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Applies all possible fixes and suggestions</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-suggestions</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix-dangerously</span></span></code></pre></div><h2 id="pending-fixes" tabindex="-1">Pending Fixes <a class="header-anchor" href="#pending-fixes" aria-label="Permalink to &quot;Pending Fixes&quot;">​</a></h2><p>You may notice that some rules have a 🚧 next to their name. This indicate that they could be automatically fixed, but they are missing an auto-fixer implementation. You can help improve Oxlint by contributing an auto fixer for rules that need them.</p>`,11)]))}const c=i(t,[["render",o]]);export{u as __pageData,c as default};
