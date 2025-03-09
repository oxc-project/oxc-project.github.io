import{_ as o,C as i,c as r,o as h,j as a,ag as d,a as e,G as t,w as p}from"./chunks/framework.B7cJCh-b.js";const C=JSON.parse('{"title":"unicorn/no-length-as-slice-end","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md"},g={id:"unicorn-no-length-as-slice-end",tabindex:"-1"},k={class:"rule-meta"};function u(E,s,b,f,y,m){const n=i("Badge"),l=i("Alert");return h(),r("div",null,[a("h1",g,[s[0]||(s[0]=e("unicorn/no-length-as-slice-end ")),t(n,{type:"info",text:"Restriction"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#unicorn-no-length-as-slice-end","aria-label":'Permalink to "unicorn/no-length-as-slice-end <Badge type="info" text="Restriction" />"'},"​",-1))]),a("div",k,[t(l,{class:"fix",type:"info"},{default:p(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow using <code>length</code> as the end argument of a <code>slice</code> call.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Passing <code>length</code> as the end argument of a <code>slice</code> call is unnecessary and can be confusing.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, foo.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-SEiL2" id="tab-Wn_4aaF" checked><label data-title="CLI" for="tab-Wn_4aaF">CLI</label><input type="radio" name="group-SEiL2" id="tab-tnKaxcR"><label data-title="Config (.oxlintrc.json)" for="tab-tnKaxcR">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/no-length-as-slice-end</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/no-length-as-slice-end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/unicorn/no_length_as_slice_end.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const x=o(c,[["render",u]]);export{C as __pageData,x as default};
