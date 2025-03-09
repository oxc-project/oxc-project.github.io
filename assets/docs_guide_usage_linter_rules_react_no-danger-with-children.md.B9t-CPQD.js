import{_ as h,C as e,c as r,o as d,j as i,ag as o,a,G as t,w as p}from"./chunks/framework.B7cJCh-b.js";const f=JSON.parse('{"title":"react/no-danger-with-children","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/no-danger-with-children.md","filePath":"docs/guide/usage/linter/rules/react/no-danger-with-children.md"}'),k={name:"docs/guide/usage/linter/rules/react/no-danger-with-children.md"},c={id:"react-no-danger-with-children",tabindex:"-1"},g={class:"rule-meta"};function E(u,s,y,b,m,C){const n=e("Badge"),l=e("Alert");return d(),r("div",null,[i("h1",c,[s[0]||(s[0]=a("react/no-danger-with-children ")),t(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=a()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#react-no-danger-with-children","aria-label":'Permalink to "react/no-danger-with-children <Badge type="info" text="Correctness" />"'},"​",-1))]),i("div",g,[t(l,{class:"default-on",type:"success"},{default:p(()=>s[3]||(s[3]=[i("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows when a DOM element is using both <code>children</code> and <code>dangerouslySetInnerHTML</code> properties.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>React will throw a warning if this rule is ignored and both <code>children</code> and <code>dangerouslySetInnerHTML</code> are used.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dangerouslySetInnerHTML</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ __html: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTML&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}&gt;Children&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;div&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { dangerouslySetInnerHTML: { __html: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTML&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Children&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Children&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dangerouslySetInnerHTML</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ __html: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTML&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }} /&gt;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QXq3L" id="tab-0wsOh5e" checked><label data-title="CLI" for="tab-0wsOh5e">CLI</label><input type="radio" name="group-QXq3L" id="tab-QhQwMWA"><label data-title="Config (.oxlintrc.json)" for="tab-QhQwMWA">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react/no-danger-with-children</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;react/no-danger-with-children&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/react/no_danger_with_children.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const F=h(k,[["render",E]]);export{f as __pageData,F as default};
