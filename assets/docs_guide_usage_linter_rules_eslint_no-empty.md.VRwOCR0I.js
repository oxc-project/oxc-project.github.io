import{_ as o,c as l,j as e,a as t,I as a,w as c,a3 as r,E as s,o as d}from"./chunks/framework.wOwjnRe1.js";const P=JSON.parse('{"title":"eslint/no-empty","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-empty.md","filePath":"docs/guide/usage/linter/rules/eslint/no-empty.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-empty.md"},p={id:"eslint-no-empty",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#eslint-no-empty","aria-label":'Permalink to "eslint/no-empty <Badge type="info" text="Restriction" />"'},"​",-1),_={class:"rule-meta"},u=e("span",{class:"emoji"},"🚧",-1),y=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows empty block statements</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Empty block statements, while not technically errors, usually occur due to refactoring that wasn’t completed. They can cause confusion when reading code.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function f(g,k,b,x,E,v){const i=s("Badge"),n=s("Alert");return d(),l("div",null,[e("h1",p,[t("eslint/no-empty "),a(i,{type:"info",text:"Restriction"}),t(),m]),e("div",_,[a(n,{class:"fix",type:"info"},{default:c(()=>[u,t(" An auto-fix is still under development. ")]),_:1})]),y])}const T=o(h,[["render",f]]);export{P as __pageData,T as default};
