import{_ as l,C as i,c as r,o as d,j as s,ag as h,a,G as t,w as p}from"./chunks/framework.Az7Yw7dm.js";const C=JSON.parse('{"title":"eslint/unicode-bom","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/unicode-bom.md","filePath":"docs/guide/usage/linter/rules/eslint/unicode-bom.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/unicode-bom.md"},u={id:"eslint-unicode-bom",tabindex:"-1"},k={class:"rule-meta"};function b(g,e,m,f,y,v){const n=i("Badge"),o=i("Alert");return d(),r("div",null,[s("h1",u,[e[0]||(e[0]=a("eslint/unicode-bom ")),t(n,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#eslint-unicode-bom","aria-label":'Permalink to "eslint/unicode-bom <Badge type="info" text="Restriction" />"'},"​",-1))]),s("div",k,[t(o,{class:"fix",type:"info"},{default:p(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require or disallow Unicode byte order mark (BOM)</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The Unicode Byte Order Mark (BOM) is used to specify whether code units are big endian or little endian. That is, whether the most significant or least significant bytes come first. UTF-8 does not require a BOM because byte ordering does not matter when characters are a single byte. Since UTF-8 is the dominant encoding of the web, we make &quot;never&quot; the default option.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5M5SO" id="tab-JVLChm7" checked><label data-title="CLI" for="tab-JVLChm7">CLI</label><input type="radio" name="group-5M5SO" id="tab-4F0Aipy"><label data-title="Config (.oxlintrc.json)" for="tab-4F0Aipy">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicode-bom</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicode-bom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/eslint/unicode_bom.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const x=l(c,[["render",b]]);export{C as __pageData,x as default};
