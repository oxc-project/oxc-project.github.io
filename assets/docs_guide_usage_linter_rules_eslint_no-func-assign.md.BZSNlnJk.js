import{_ as o,c as l,j as s,a,I as e,w as r,a3 as c,E as t,o as d}from"./chunks/framework.wOwjnRe1.js";const C=JSON.parse('{"title":"eslint/no-func-assign","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-func-assign.md","filePath":"docs/guide/usage/linter/rules/eslint/no-func-assign.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-func-assign.md"},p={id:"eslint-no-func-assign",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#eslint-no-func-assign","aria-label":'Permalink to "eslint/no-func-assign <Badge type="info" text="Correctness" />"'},"​",-1),_={class:"rule-meta"},g=s("span",{class:"emoji"},"✅",-1),f=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow reassigning <code>function</code> declarations</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar;</span></span></code></pre></div>`,6);function k(m,b,E,x,y,v){const i=t("Badge"),n=t("Alert");return d(),l("div",null,[s("h1",p,[a("eslint/no-func-assign "),e(i,{type:"info",text:"Correctness"}),a(),u]),s("div",_,[e(n,{class:"default-on",type:"success"},{default:r(()=>[g,a(" This rule is turned on by default. ")]),_:1})]),f])}const A=o(h,[["render",k]]);export{C as __pageData,A as default};