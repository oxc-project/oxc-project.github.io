import{_ as r,C as i,c as o,o as h,j as a,ag as d,a as e,G as t,w as p}from"./chunks/framework.K3-BBDXc.js";const x=JSON.parse('{"title":"eslint/no-class-assign","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-class-assign.md","filePath":"docs/guide/usage/linter/rules/eslint/no-class-assign.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-class-assign.md"},k={id:"eslint-no-class-assign",tabindex:"-1"},g={class:"rule-meta"};function u(b,s,m,f,_,y){const n=i("Badge"),l=i("Alert");return h(),o("div",null,[a("h1",k,[s[0]||(s[0]=e("eslint/no-class-assign ")),t(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#eslint-no-class-assign","aria-label":'Permalink to "eslint/no-class-assign <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",g,[t(l,{class:"default-on",type:"success"},{default:p(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow reassigning class variables.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>ClassDeclaration</code> creates a variable that can be re-assigned, but the re-assignment is a mistake in most cases.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Error</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/eslint/no_class_assign.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const C=r(c,[["render",u]]);export{x as __pageData,C as default};
