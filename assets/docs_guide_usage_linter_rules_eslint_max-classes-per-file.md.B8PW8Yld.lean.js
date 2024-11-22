import{_ as t,c as l,j as a,a as s,G as r,a2 as n,B as o,o as d}from"./chunks/framework.8qdJL5ht.js";const g=JSON.parse('{"title":"eslint/max-classes-per-file","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/max-classes-per-file.md","filePath":"docs/guide/usage/linter/rules/eslint/max-classes-per-file.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/max-classes-per-file.md"},p={id:"eslint-max-classes-per-file",tabindex:"-1"};function h(m,e,u,f,b,k){const i=o("Badge");return d(),l("div",null,[a("h1",p,[e[0]||(e[0]=s("eslint/max-classes-per-file ")),r(i,{type:"info",text:"Pedantic"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#eslint-max-classes-per-file","aria-label":'Permalink to "eslint/max-classes-per-file <Badge type="info" text="Pedantic" />"'},"​",-1))]),e[3]||(e[3]=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce a maximum number of classes per file</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Files containing multiple classes can often result in a less navigable and poorly structured codebase. Best practice is to keep each file limited to a single responsibility.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e91c2878d8c49213790df4d192bb3136503aa08b/crates/oxc_linter/src/rules/eslint/max_classes_per_file.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const y=t(c,[["render",h]]);export{g as __pageData,y as default};
