import{_ as l,C as e,c as p,o as r,j as a,ag as h,a as i,G as t,w as d}from"./chunks/framework.B7cJCh-b.js";const m=JSON.parse('{"title":"eslint/no-proto","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-proto.md","filePath":"docs/guide/usage/linter/rules/eslint/no-proto.md"}'),k={name:"docs/guide/usage/linter/rules/eslint/no-proto.md"},c={id:"eslint-no-proto",tabindex:"-1"},u={class:"rule-meta"};function g(E,s,b,y,_,f){const n=e("Badge"),o=e("Alert");return r(),p("div",null,[a("h1",c,[s[0]||(s[0]=i("eslint/no-proto ")),t(n,{type:"info",text:"Restriction"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#eslint-no-proto","aria-label":'Permalink to "eslint/no-proto <Badge type="info" text="Restriction" />"'},"​",-1))]),a("div",u,[t(o,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🚧",-1),i(" An auto-fix is still under development. ")])),_:1})]),s[4]||(s[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the use of the <code>__proto__</code> property</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>__proto__</code> property has been deprecated as of ECMAScript 3.1 and shouldn’t be used in new code. Use <code>Object.getPrototypeOf</code> and <code>Object.setPrototypeOf</code> instead.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-proto: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__proto__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__proto__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QG4vI" id="tab-hC6umcs" checked><label data-title="CLI" for="tab-hC6umcs">CLI</label><input type="radio" name="group-QG4vI" id="tab-v42kMWG"><label data-title="Config (.oxlintrc.json)" for="tab-v42kMWG">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-proto</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-proto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/eslint/no_proto.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const C=l(k,[["render",g]]);export{m as __pageData,C as default};
