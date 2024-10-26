import{_ as o,c as l,j as e,a as s,G as i,w as h,a2 as d,B as n,o as c}from"./chunks/framework.8qdJL5ht.js";const _=JSON.parse('{"title":"unicorn/no-instanceof-array","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md"},k={id:"unicorn-no-instanceof-array",tabindex:"-1"},u={class:"rule-meta"};function f(y,a,g,m,E,b){const t=n("Badge"),r=n("Alert");return c(),l("div",null,[e("h1",k,[a[0]||(a[0]=s("unicorn/no-instanceof-array ")),i(t,{type:"info",text:"Pedantic"}),a[1]||(a[1]=s()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#unicorn-no-instanceof-array","aria-label":'Permalink to "unicorn/no-instanceof-array <Badge type="info" text="Pedantic" />"'},"​",-1))]),e("div",u,[i(r,{class:"fix",type:"info"},{default:h(()=>a[3]||(a[3]=[e("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule. ")])),_:1})]),a[4]||(a[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require <code>Array.isArray()</code> instead of <code>instanceof Array</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The instanceof Array check doesn&#39;t work across realms/contexts, for example, frames/windows in browsers or the vm module in Node.js.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_instanceof_array.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const v=o(p,[["render",f]]);export{_ as __pageData,v as default};
