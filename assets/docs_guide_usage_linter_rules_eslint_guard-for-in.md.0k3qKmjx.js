import{_ as i,c as t,j as a,a as e,I as n,a3 as r,o,E as l}from"./chunks/framework.wOwjnRe1.js";const b=JSON.parse('{"title":"eslint/guard-for-in","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/guard-for-in.md","filePath":"docs/guide/usage/linter/rules/eslint/guard-for-in.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/guard-for-in.md"},h={id:"eslint-guard-for-in",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#eslint-guard-for-in","aria-label":'Permalink to "eslint/guard-for-in <Badge type="info" text="Style" />"'},"​",-1),c=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule is aimed at preventing unexpected behavior that could arise from using a for in loop without filtering the results in the loop. As such, it will warn when for in loops do not filter their results with an if statement.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function u(g,k,_,f,m,E){const s=l("Badge");return o(),t("div",null,[a("h1",h,[e("eslint/guard-for-in "),n(s,{type:"info",text:"Style"}),e(),p]),c])}const x=i(d,[["render",u]]);export{b as __pageData,x as default};