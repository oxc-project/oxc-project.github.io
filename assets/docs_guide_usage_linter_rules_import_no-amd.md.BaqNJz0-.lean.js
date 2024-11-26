import{_ as t,c as o,j as a,a as s,G as n,a2 as r,B as d,o as l}from"./chunks/framework.Cm5JpC29.js";const E=JSON.parse('{"title":"import/no-amd","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/import/no-amd.md","filePath":"docs/guide/usage/linter/rules/import/no-amd.md"}'),p={name:"docs/guide/usage/linter/rules/import/no-amd.md"},h={id:"import-no-amd",tabindex:"-1"};function c(m,e,u,k,g,f){const i=d("Badge");return l(),o("div",null,[a("h1",h,[e[0]||(e[0]=s("import/no-amd ")),n(i,{type:"info",text:"Restriction"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#import-no-amd","aria-label":'Permalink to "import/no-amd <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=r('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Forbids the use of AMD <code>require</code> and <code>define</code> calls.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>AMD (Asynchronous Module Definition) is an older module format that is less common in modern JavaScript development, especially with the widespread use of ES6 modules and CommonJS in Node.js. AMD introduces unnecessary complexity and is often considered outdated. This rule enforces the use of more modern module systems to improve maintainability and consistency across the codebase.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([a, b], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {});</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`../name`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/import/no_amd.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const y=t(p,[["render",c]]);export{E as __pageData,y as default};
