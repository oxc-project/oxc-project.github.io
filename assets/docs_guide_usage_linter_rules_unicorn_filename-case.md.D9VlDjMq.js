import{_ as t,C as l,c as o,o as n,j as a,ag as c,a as s,G as r}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"unicorn/filename-case","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/filename-case.md","filePath":"docs/guide/usage/linter/rules/unicorn/filename-case.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/filename-case.md"},h={id:"unicorn-filename-case",tabindex:"-1"};function p(u,e,m,b,k,f){const i=l("Badge");return n(),o("div",null,[a("h1",h,[e[0]||(e[0]=s("unicorn/filename-case ")),r(i,{type:"info",text:"Style"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#unicorn-filename-case","aria-label":'Permalink to "unicorn/filename-case <Badge type="info" text="Style" />"'},"​",-1))]),e[3]||(e[3]=c('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces specific case styles for filenames. By default, kebab case is enforced.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Inconsistent file naming conventions can make it harder to locate files or to create new ones.</p><h3 id="cases" tabindex="-1">Cases <a class="header-anchor" href="#cases" aria-label="Permalink to &quot;Cases&quot;">​</a></h3><p>Examples of <strong>correct</strong> filenames for each case:</p><h4 id="kebabcase" tabindex="-1"><code>kebabCase</code> <a class="header-anchor" href="#kebabcase" aria-label="Permalink to &quot;`kebabCase`&quot;">​</a></h4><ul><li><code>some-file-name.js</code></li><li><code>some-file-name.test.js</code></li><li><code>some-file-name.test-utils.js</code></li></ul><h4 id="camelcase" tabindex="-1"><code>camelCase</code> <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;`camelCase`&quot;">​</a></h4><ul><li><code>someFileName.js</code></li><li><code>someFileName.test.js</code></li><li><code>someFileName.testUtils.js</code></li></ul><h4 id="snakecase" tabindex="-1"><code>snakeCase</code> <a class="header-anchor" href="#snakecase" aria-label="Permalink to &quot;`snakeCase`&quot;">​</a></h4><ul><li><code>some_file_name.js</code></li><li><code>some_file_name.test.js</code></li><li><code>some_file_name.test_utils.js</code></li></ul><h4 id="pascalcase" tabindex="-1"><code>pascalCase</code> <a class="header-anchor" href="#pascalcase" aria-label="Permalink to &quot;`pascalCase`&quot;">​</a></h4><ul><li><code>SomeFileName.js</code></li><li><code>SomeFileName.Test.js</code></li><li><code>SomeFileName.TestUtils.js</code></li></ul><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DU5LI" id="tab-AFF3uph" checked><label data-title="CLI" for="tab-AFF3uph">CLI</label><input type="radio" name="group-DU5LI" id="tab-br6Yigk"><label data-title="Config (.oxlintrc.json)" for="tab-br6Yigk">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/filename-case</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/unicorn/filename_case.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',20))])}const y=t(d,[["render",p]]);export{C as __pageData,y as default};
