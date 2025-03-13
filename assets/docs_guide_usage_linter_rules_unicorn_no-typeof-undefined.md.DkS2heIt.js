import{_ as l,C as a,c as d,o as r,j as s,ag as p,a as i,G as t,w as h}from"./chunks/framework.B7cJCh-b.js";const C=JSON.parse('{"title":"unicorn/no-typeof-undefined","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md"},u={id:"unicorn-no-typeof-undefined",tabindex:"-1"},k={class:"rule-meta"};function g(f,e,b,y,E,v){const n=a("Badge"),o=a("Alert");return r(),d("div",null,[s("h1",u,[e[0]||(e[0]=i("unicorn/no-typeof-undefined ")),t(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=i()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-no-typeof-undefined","aria-label":'Permalink to "unicorn/no-typeof-undefined <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",k,[t(o,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),i(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow <code>typeof</code> comparisons with <code>undefined</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Checking if a value is <code>undefined</code> by using <code>typeof value === &#39;undefined&#39;</code> is needlessly verbose. It&#39;s generally better to compare against <code>undefined</code> directly. The only time <code>typeof</code> is needed is when a global variable potentially does not exists, in which case, using <code>globalThis.value === undefined</code> may be better.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;undefined&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HRuXk" id="tab-BHTC-YW" checked><label data-title="CLI" for="tab-BHTC-YW">CLI</label><input type="radio" name="group-HRuXk" id="tab-gt0se8R"><label data-title="Config (.oxlintrc.json)" for="tab-gt0se8R">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/no-typeof-undefined</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/no-typeof-undefined&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/unicorn/no_typeof_undefined.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const x=l(c,[["render",g]]);export{C as __pageData,x as default};
