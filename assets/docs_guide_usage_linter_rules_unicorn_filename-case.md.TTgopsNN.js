import{_ as n,C as t,c as l,o,j as a,ag as c,a as e,G as h}from"./chunks/framework.Az7Yw7dm.js";const f=JSON.parse('{"title":"unicorn/filename-case","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/filename-case.md","filePath":"docs/guide/usage/linter/rules/unicorn/filename-case.md"}'),r={name:"docs/guide/usage/linter/rules/unicorn/filename-case.md"},p={id:"unicorn-filename-case",tabindex:"-1"};function d(k,s,u,E,g,m){const i=t("Badge");return o(),l("div",null,[a("h1",p,[s[0]||(s[0]=e("unicorn/filename-case ")),h(i,{type:"info",text:"Style"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#unicorn-filename-case","aria-label":'Permalink to "unicorn/filename-case <Badge type="info" text="Style" />"'},"​",-1))]),s[3]||(s[3]=c(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces specific case styles for filenames. By default, kebab case is enforced.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Inconsistent file naming conventions make it harder to locate files, navigate projects, and enforce consistency across a codebase. Standardizing naming conventions improves readability, reduces cognitive overhead, and aligns with best practices in large-scale development.</p><h3 id="cases" tabindex="-1">Cases <a class="header-anchor" href="#cases" aria-label="Permalink to &quot;Cases&quot;">​</a></h3><p>Examples of <strong>correct</strong> filenames for each case:</p><h4 id="kebabcase" tabindex="-1"><code>kebabCase</code> <a class="header-anchor" href="#kebabcase" aria-label="Permalink to &quot;\`kebabCase\`&quot;">​</a></h4><ul><li><code>some-file-name.js</code></li><li><code>some-file-name.test.js</code></li><li><code>some-file-name.test-utils.js</code></li></ul><h4 id="camelcase" tabindex="-1"><code>camelCase</code> <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;\`camelCase\`&quot;">​</a></h4><ul><li><code>someFileName.js</code></li><li><code>someFileName.test.js</code></li><li><code>someFileName.testUtils.js</code></li></ul><h4 id="snakecase" tabindex="-1"><code>snakeCase</code> <a class="header-anchor" href="#snakecase" aria-label="Permalink to &quot;\`snakeCase\`&quot;">​</a></h4><ul><li><code>some_file_name.js</code></li><li><code>some_file_name.test.js</code></li><li><code>some_file_name.test_utils.js</code></li></ul><h4 id="pascalcase" tabindex="-1"><code>pascalCase</code> <a class="header-anchor" href="#pascalcase" aria-label="Permalink to &quot;\`pascalCase\`&quot;">​</a></h4><ul><li><code>SomeFileName.js</code></li><li><code>SomeFileName.Test.js</code></li><li><code>SomeFileName.TestUtils.js</code></li></ul><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><p>Use <code>kebabCase</code> as the default option.</p><h4 id="case" tabindex="-1">case <a class="header-anchor" href="#case" aria-label="Permalink to &quot;case&quot;">​</a></h4><p><code>{ type: &#39;kebabCase&#39; | &#39;camelCase&#39; | &#39;snakeCase&#39; | &#39;pascalCase&#39; }</code></p><p>You can set the case option like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kebabCase&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h4 id="cases-1" tabindex="-1">cases <a class="header-anchor" href="#cases-1" aria-label="Permalink to &quot;cases&quot;">​</a></h4><p><code>{ type: { [key in &#39;kebabCase&#39; | &#39;camelCase&#39; | &#39;snakeCase&#39; | &#39;pascalCase&#39;]?: boolean } }</code></p><p>You can set the case option like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;cases&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;camelCase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;pascalCase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Z-cDn" id="tab-4trI3Dy" checked><label data-title="CLI" for="tab-4trI3Dy">CLI</label><input type="radio" name="group-Z-cDn" id="tab-STkvxsm"><label data-title="Config (.oxlintrc.json)" for="tab-STkvxsm">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/filename-case</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/unicorn/filename_case.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,30))])}const y=n(r,[["render",d]]);export{f as __pageData,y as default};
