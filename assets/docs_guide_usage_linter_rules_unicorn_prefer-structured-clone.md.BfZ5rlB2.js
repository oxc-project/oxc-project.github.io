import{_ as l,c as o,j as s,a as i,G as a,w as h,a2 as p,B as t,o as d}from"./chunks/framework.8qdJL5ht.js";const C=JSON.parse('{"title":"unicorn/prefer-structured-clone","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.md"},u={id:"unicorn-prefer-structured-clone",tabindex:"-1"},k={class:"rule-meta"};function g(f,e,y,m,E,b){const r=t("Badge"),n=t("Alert");return d(),o("div",null,[s("h1",u,[e[0]||(e[0]=i("unicorn/prefer-structured-clone ")),a(r,{type:"info",text:"Style"}),e[1]||(e[1]=i()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-prefer-structured-clone","aria-label":'Permalink to "unicorn/prefer-structured-clone <Badge type="info" text="Style" />"'},"​",-1))]),s("div",k,[a(n,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),i(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer using structuredClone to create a deep clone.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>structuredClone is the modern way to create a deep clone of a value.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cloneDeep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> clone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> structuredClone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_structured_clone.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const F=l(c,[["render",g]]);export{C as __pageData,F as default};
