import{_ as n,C as i,c as l,o as p,j as a,ag as d,a as e,G as t,w as h}from"./chunks/framework.K3-BBDXc.js";const y=JSON.parse('{"title":"oxc/misrefactored-assign-op","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.md","filePath":"docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.md"}'),c={name:"docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.md"},k={id:"oxc-misrefactored-assign-op",tabindex:"-1"},g={class:"rule-meta"};function u(f,s,m,E,b,x){const r=i("Badge"),o=i("Alert");return p(),l("div",null,[a("h1",k,[s[0]||(s[0]=e("oxc/misrefactored-assign-op ")),t(r,{type:"info",text:"Suspicious"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#oxc-misrefactored-assign-op","aria-label":'Permalink to "oxc/misrefactored-assign-op <Badge type="info" text="Suspicious" />"'},"​",-1))]),a("div",g,[t(o,{class:"fix",type:"info"},{default:h(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🚧",-1),e(" An auto-fix is still under development. ")])),_:1})]),s[4]||(s[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p><a href="https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op" target="_blank" rel="noreferrer">https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op</a></p><p>Checks for <code>a op= a op b</code> or <code>a op= b op a</code> patterns.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Most likely these are bugs where one meant to write <code>a op= b</code>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/oxc/misrefactored_assign_op.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const v=n(c,[["render",u]]);export{y as __pageData,v as default};
