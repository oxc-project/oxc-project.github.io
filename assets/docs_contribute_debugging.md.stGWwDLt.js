import{_ as i,c as a,o as e,ag as t}from"./chunks/framework.K3-BBDXc.js";const g=JSON.parse('{"title":"Debugging","description":"","frontmatter":{"title":"Debugging","outline":"deep"},"headers":[],"relativePath":"docs/contribute/debugging.md","filePath":"docs/contribute/debugging.md"}'),n={name:"docs/contribute/debugging.md"};function l(h,s,p,o,k,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="debugging" tabindex="-1">Debugging <a class="header-anchor" href="#debugging" aria-label="Permalink to &quot;Debugging&quot;">​</a></h1><h2 id="rust-lldb" tabindex="-1">rust-lldb <a class="header-anchor" href="#rust-lldb" aria-label="Permalink to &quot;rust-lldb&quot;">​</a></h2><p>rust-lldb can be used to get panic information from debug builds.</p><p>Enable debug symbols:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">release</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">debug = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strip = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">panic = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unwind&quot;</span></span></code></pre></div><p>Build the binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --features</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allocator</span></span></code></pre></div><p>Run the binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rust-lldb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./target/release/oxlint</span></span></code></pre></div><p>Once it launches, press <code>r</code> for running the program.</p><h2 id="debug-typescript-in-vscode" tabindex="-1">Debug TypeScript in VSCode <a class="header-anchor" href="#debug-typescript-in-vscode" aria-label="Permalink to &quot;Debug TypeScript in VSCode&quot;">​</a></h2><p>According to their <a href="https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md#debugging-the-tests" target="_blank" rel="noreferrer">debugging guide</a>, in the TypeScript repository:</p><ul><li>rename <code>.vscode/launch.template.json</code> to <code>launch.json</code></li><li>add <code>tests/cases/compiler/foo.ts</code></li><li>change <code>&quot;\${fileBasenameNoExtension}&quot;</code> to <code>foo.ts</code></li><li>set a breakpoint somewhere in TypeScript&#39;s source code</li><li>from the menu &quot;Run - Debugging&quot;, or press F5</li><li>while debugging, tsc will evaluate global <code>.d.ts</code> files before the targeted test file</li><li><code>Debug.formatXXX(value)</code> from <code>src/compiler/debug.ts</code> can be used to print out enum values</li><li>use the &quot;WATCH&quot; section to &quot;see&quot; value of interest</li></ul><h2 id="debug-linter-in-vscode" tabindex="-1">Debug Linter in VSCode <a class="header-anchor" href="#debug-linter-in-vscode" aria-label="Permalink to &quot;Debug Linter in VSCode&quot;">​</a></h2><p>It&#39;s easy to debug Linter for a npm project somewhere else with <a href="https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb" target="_blank" rel="noreferrer">CodeLLDB</a>.</p><p>In <code>.vscode/launch.json</code>, change config fields to your need:</p><ul><li><code>cwd</code>: absolute path to the npm project</li><li><code>args</code>: arguments passed to linter</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lldb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;launch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Debug Oxlint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;cargo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;RUSTFLAGS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-g&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--bin=oxlint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--package=oxlint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;filter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oxlint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;kind&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line has-focus"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;cwd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH-TO-TEST-PROJECT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--ARGS-TO-OXLINT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Open VS Code Debugging panel and select <code>Debug Oxlint</code>, then start debugging.</p><p>The debug process will be launched with specified <code>cwd</code>, like running linter in testing project and attaching debugger into it.</p>`,20)]))}const u=i(n,[["render",l]]);export{g as __pageData,u as default};
