import{_ as o,c as l,j as s,a as e,I as a,w as h,a3 as c,E as t,o as d}from"./chunks/framework.wOwjnRe1.js";const B=JSON.parse('{"title":"oxc/no-const-enum","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/no-const-enum.md","filePath":"docs/guide/usage/linter/rules/oxc/no-const-enum.md"}'),r={name:"docs/guide/usage/linter/rules/oxc/no-const-enum.md"},p={id:"oxc-no-const-enum",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#oxc-no-const-enum","aria-label":'Permalink to "oxc/no-const-enum <Badge type="info" text="Restriction" />"'},"​",-1),k={class:"rule-meta"},m=s("span",{class:"emoji"},"🛠️",-1),_=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow TypeScript <code>const enum</code></p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Const enums are enums that should be inlined at use sites. Const enums are not supported by bundlers and are incompatible with the isolatedModules mode. Their use can lead to import nonexistent values (because const enums are erased).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function g(x,E,b,y,f,C){const i=t("Badge"),n=t("Alert");return d(),l("div",null,[s("h1",p,[e("oxc/no-const-enum "),a(i,{type:"info",text:"Restriction"}),e(),u]),s("div",k,[a(n,{class:"fix",type:"info"},{default:h(()=>[m,e(" An auto-fix is available for this rule. ")]),_:1})]),_])}const F=o(r,[["render",g]]);export{B as __pageData,F as default};