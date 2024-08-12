import{_ as l,c as h,j as s,a,I as e,w as d,a3 as r,E as i,o}from"./chunks/framework.wOwjnRe1.js";const A=JSON.parse('{"title":"eslint/no-shadow-restricted-names","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md","filePath":"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md"},c={id:"eslint-no-shadow-restricted-names",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-no-shadow-restricted-names","aria-label":'Permalink to "eslint/no-shadow-restricted-names <Badge type="info" text="Correctness" />"'},"​",-1),E={class:"rule-meta"},_=s("span",{class:"emoji"},"✅",-1),u=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow redefine the global variables like &#39;undefined&#39;, &#39;NaN&#39;, &#39;Infinity&#39;, &#39;eval&#39;, &#39;arguments&#39;.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> undefined </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (eval) {}</span></span></code></pre></div>`,5);function g(m,y,f,b,w,x){const t=i("Badge"),n=i("Alert");return o(),h("div",null,[s("h1",c,[a("eslint/no-shadow-restricted-names "),e(t,{type:"info",text:"Correctness"}),a(),k]),s("div",E,[e(n,{class:"default-on",type:"success"},{default:d(()=>[_,a(" This rule is turned on by default. ")]),_:1})]),u])}const F=l(p,[["render",g]]);export{A as __pageData,F as default};
