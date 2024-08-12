import{_ as h,c as r,j as s,a as i,I as a,w as t,a3 as o,E as n,o as d}from"./chunks/framework.wOwjnRe1.js";const C=JSON.parse('{"title":"eslint/for-direction","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/for-direction.md","filePath":"docs/guide/usage/linter/rules/eslint/for-direction.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/for-direction.md"},k={id:"eslint-for-direction",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#eslint-for-direction","aria-label":'Permalink to "eslint/for-direction <Badge type="info" text="Correctness" />"'},"​",-1),g={class:"rule-meta"},E=s("span",{class:"emoji"},"✅",-1),u=s("span",{class:"emoji"},"⚠️🛠️️",-1),_=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow &quot;for&quot; loop update causing the counter to move in the wrong direction.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>A for loop that is known to run infinitely or never run is considered a bug.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span></code></pre></div>`,6);function f(y,m,b,x,F,A){const l=n("Badge"),e=n("Alert");return d(),r("div",null,[s("h1",k,[i("eslint/for-direction "),a(l,{type:"info",text:"Correctness"}),i(),c]),s("div",g,[a(e,{class:"default-on",type:"success"},{default:t(()=>[E,i(" This rule is turned on by default. ")]),_:1}),a(e,{class:"fix",type:"info"},{default:t(()=>[u,i(" A dangerous auto-fix is available for this rule. ")]),_:1})]),_])}const D=h(p,[["render",f]]);export{C as __pageData,D as default};