import{_ as l,C as e,c as r,o as h,j as a,ag as o,a as i,G as t,w as d}from"./chunks/framework.B7cJCh-b.js";const A=JSON.parse('{"title":"jsdoc/require-property","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/require-property.md","filePath":"docs/guide/usage/linter/rules/jsdoc/require-property.md"}'),k={name:"docs/guide/usage/linter/rules/jsdoc/require-property.md"},c={id:"jsdoc-require-property",tabindex:"-1"},g={class:"rule-meta"};function u(y,s,b,m,E,f){const n=e("Badge"),p=e("Alert");return h(),r("div",null,[a("h1",c,[s[0]||(s[0]=i("jsdoc/require-property ")),t(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#jsdoc-require-property","aria-label":'Permalink to "jsdoc/require-property <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",g,[t(p,{class:"default-on",type:"success"},{default:d(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Requires that all <code>@typedef</code> and <code>@namespace</code> tags have <code>@property</code> tags when their type is a plain <code>object</code>, <code>Object</code>, or <code>PlainObject</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Object type should have properties defined.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SomeNamesoace</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> propName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Prop description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {object}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> someProp</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-H8XRb" id="tab-HJZL96Q" checked><label data-title="CLI" for="tab-HJZL96Q">CLI</label><input type="radio" name="group-H8XRb" id="tab-vEBjefk"><label data-title="Config (.oxlintrc.json)" for="tab-vEBjefk">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsdoc/require-property</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --jsdoc-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jsdoc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jsdoc/require-property&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/jsdoc/require_property.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const v=l(k,[["render",u]]);export{A as __pageData,v as default};
