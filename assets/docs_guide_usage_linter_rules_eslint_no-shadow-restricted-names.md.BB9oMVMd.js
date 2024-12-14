import{_ as r,c as d,j as e,a,G as i,w as h,a2 as o,B as t,o as p}from"./chunks/framework.Cm5JpC29.js";const w=JSON.parse('{"title":"eslint/no-shadow-restricted-names","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md","filePath":"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md"},k={id:"eslint-no-shadow-restricted-names",tabindex:"-1"},u={class:"rule-meta"};function g(m,s,E,f,y,b){const n=t("Badge"),l=t("Alert");return p(),d("div",null,[e("h1",k,[s[0]||(s[0]=a("eslint/no-shadow-restricted-names ")),i(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#eslint-no-shadow-restricted-names","aria-label":'Permalink to "eslint/no-shadow-restricted-names <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",u,[i(l,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow redefine the global variables like &#39;undefined&#39;, &#39;NaN&#39;, &#39;Infinity&#39;, &#39;eval&#39;, &#39;arguments&#39;.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> undefined </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (eval) {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/36ebb3e7841818c238c44349d6cf859db4177d55/crates/oxc_linter/src/rules/eslint/no_shadow_restricted_names.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,7))])}const v=r(c,[["render",g]]);export{w as __pageData,v as default};