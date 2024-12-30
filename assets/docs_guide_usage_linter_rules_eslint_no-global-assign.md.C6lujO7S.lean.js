import{_ as n,c as r,j as e,a as s,G as t,w as d,a2 as c,B as i,o as h}from"./chunks/framework.Cm5JpC29.js";const _=JSON.parse('{"title":"eslint/no-global-assign","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-global-assign.md","filePath":"docs/guide/usage/linter/rules/eslint/no-global-assign.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/no-global-assign.md"},g={id:"eslint-no-global-assign",tabindex:"-1"},u={class:"rule-meta"};function b(f,a,m,k,x,y){const l=i("Badge"),o=i("Alert");return h(),r("div",null,[e("h1",g,[a[0]||(a[0]=s("eslint/no-global-assign ")),t(l,{type:"info",text:"Correctness"}),a[1]||(a[1]=s()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#eslint-no-global-assign","aria-label":'Permalink to "eslint/no-global-assign <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",u,[t(o,{class:"default-on",type:"success"},{default:d(()=>a[3]||(a[3]=[e("span",{class:"emoji"},"✅",-1),s(" This rule is turned on by default. ")])),_:1})]),a[4]||(a[4]=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow modifications to read-only global variables.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In almost all cases, you don’t want to assign a value to these global variables as doing so could result in losing access to important functionality.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/55744fd9775a032ea83215dadc77a6bff3e2a87d/crates/oxc_linter/src/rules/eslint/no_global_assign.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',8))])}const E=n(p,[["render",b]]);export{_ as __pageData,E as default};