import{_ as s,c as i,j as t,a as e,I as n,a4 as l,o as r,E as o}from"./chunks/framework.D6UG3LSr.js";const x=JSON.parse('{"title":"eslint/no-template-curly-in-string","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.md","filePath":"docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.md"},h={id:"eslint-no-template-curly-in-string",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#eslint-no-template-curly-in-string","aria-label":'Permalink to "eslint/no-template-curly-in-string <Badge type="info" text="Style" />"'},"​",-1),d=l('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow template literal placeholder syntax in regular strings</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>ECMAScript 6 allows programmers to create strings containing variable or expressions using template literals, instead of string concatenation, by writing expressions like ${variable} between two backtick quotes (`). It can be easy to use the wrong quotes when wanting to use template literals, by writing &quot;${variable}&quot;, and end up with the literal value &quot;${variable}&quot; instead of a string containing the value of the injected expressions.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-template-curly-in-string: &quot;error&quot;*/</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello ${name}!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello ${name}!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Time: ${12 * 60 * 60 * 1000}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_template_curly_in_string.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9);function u(g,m,_,k,b,y){const a=o("Badge");return r(),i("div",null,[t("h1",h,[e("eslint/no-template-curly-in-string "),n(a,{type:"info",text:"Style"}),e(),p]),d])}const q=s(c,[["render",u]]);export{x as __pageData,q as default};