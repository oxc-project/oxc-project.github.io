import{_ as l,C as a,c as r,o as p,j as i,ag as h,a as e,G as t,w as d}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"node/no-exports-assign","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/node/no-exports-assign.md","filePath":"docs/guide/usage/linter/rules/node/no-exports-assign.md"}'),k={name:"docs/guide/usage/linter/rules/node/no-exports-assign.md"},c={id:"node-no-exports-assign",tabindex:"-1"},g={class:"rule-meta"};function u(x,s,E,y,m,b){const n=a("Badge"),o=a("Alert");return p(),r("div",null,[i("h1",c,[s[0]||(s[0]=e("node/no-exports-assign ")),t(n,{type:"info",text:"Style"}),s[1]||(s[1]=e()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#node-no-exports-assign","aria-label":'Permalink to "node/no-exports-assign <Badge type="info" text="Style" />"'},"​",-1))]),i("div",g,[t(o,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[i("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows assignment to <code>exports</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Directly using <code>exports = {}</code> can lead to confusion and potential bugs because it reassigns the <code>exports</code> object, which may break module exports. It is more predictable and clearer to use <code>module.exports</code> directly or in conjunction with <code>exports</code>.</p><p>This rule is aimed at disallowing <code>exports = {}</code>, but allows <code>module.exports = exports = {}</code> to avoid conflict with <code>n/exports-style</code> rule&#39;s <code>allowBatchAssign</code> option.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// allows \`exports = {}\` if along with \`module.exports =\`</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/node/no_exports_assign.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const F=l(k,[["render",u]]);export{C as __pageData,F as default};
