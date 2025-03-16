import{_ as o,C as t,c as r,o as h,j as s,ag as d,a,G as i,w as p}from"./chunks/framework.Az7Yw7dm.js";const v=JSON.parse('{"title":"nextjs/no-head-element","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-head-element.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-head-element.md"}'),c={name:"docs/guide/usage/linter/rules/nextjs/no-head-element.md"},u={id:"nextjs-no-head-element",tabindex:"-1"},k={class:"rule-meta"};function g(b,e,m,x,f,E){const n=t("Badge"),l=t("Alert");return h(),r("div",null,[s("h1",u,[e[0]||(e[0]=a("nextjs/no-head-element ")),i(n,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#nextjs-no-head-element","aria-label":'Permalink to "nextjs/no-head-element <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",k,[i(l,{class:"default-on",type:"success"},{default:p(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent usage of <code>&lt;head&gt;</code> element.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-YLT-7" id="tab-of7MtOq" checked><label data-title="CLI" for="tab-of7MtOq">CLI</label><input type="radio" name="group-YLT-7" id="tab-co6-BpU"><label data-title="Config (.oxlintrc.json)" for="tab-co6-BpU">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nextjs/no-head-element</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nextjs-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nextjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;nextjs/no-head-element&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/nextjs/no_head_element.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,10))])}const C=o(c,[["render",g]]);export{v as __pageData,C as default};
