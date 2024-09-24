import{_ as t,c as r,j as e,a as s,G as n,a2 as o,B as l,o as d}from"./chunks/framework.DlAqvapY.js";const f=JSON.parse('{"title":"import/no-amd","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/import/no-amd.md","filePath":"docs/guide/usage/linter/rules/import/no-amd.md"}'),p={name:"docs/guide/usage/linter/rules/import/no-amd.md"},h={id:"import-no-amd",tabindex:"-1"};function c(k,a,m,u,g,E){const i=l("Badge");return d(),r("div",null,[e("h1",h,[a[0]||(a[0]=s("import/no-amd ")),n(i,{type:"info",text:"Restriction"}),a[1]||(a[1]=s()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#import-no-amd","aria-label":'Permalink to "import/no-amd <Badge type="info" text="Restriction" />"'},"​",-1))]),a[3]||(a[3]=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Forbid AMD <code>require</code> and <code>define</code> calls.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([a, b], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {});</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`../name`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/import/no_amd.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const x=t(p,[["render",c]]);export{f as __pageData,x as default};
