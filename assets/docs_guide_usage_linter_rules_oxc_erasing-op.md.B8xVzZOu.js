import{_ as h,c as l,j as s,a,I as i,w as p,a3 as r,E as e,o}from"./chunks/framework.wOwjnRe1.js";const F=JSON.parse('{"title":"oxc/erasing-op","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/erasing-op.md","filePath":"docs/guide/usage/linter/rules/oxc/erasing-op.md"}'),d={name:"docs/guide/usage/linter/rules/oxc/erasing-op.md"},k={id:"oxc-erasing-op",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#oxc-erasing-op","aria-label":'Permalink to "oxc/erasing-op <Badge type="info" text="Correctness" />"'},"​",-1),g={class:"rule-meta"},y=s("span",{class:"emoji"},"✅",-1),E=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Checks for erasing operations, e.g., \`x * 0\`\`.</p><p>Based on <a href="https://rust-lang.github.io/rust-clippy/master/#/erasing_op" target="_blank" rel="noreferrer">https://rust-lang.github.io/rust-clippy/master/#/erasing_op</a></p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The whole expression can be replaced by zero. This is most likely not the intended outcome and should probably be corrected.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,7);function _(u,x,m,b,f,A){const t=e("Badge"),n=e("Alert");return o(),l("div",null,[s("h1",k,[a("oxc/erasing-op "),i(t,{type:"info",text:"Correctness"}),a(),c]),s("div",g,[i(n,{class:"default-on",type:"success"},{default:p(()=>[y,a(" This rule is turned on by default. ")]),_:1})]),E])}const D=h(d,[["render",_]]);export{F as __pageData,D as default};
