import{_ as o,C as a,c as r,o as p,j as s,ag as d,a as i,G as t,w as c}from"./chunks/framework.Az7Yw7dm.js";const _=JSON.parse('{"title":"unicorn/no-empty-file","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-empty-file.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-empty-file.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-empty-file.md"},u={id:"unicorn-no-empty-file",tabindex:"-1"},k={class:"rule-meta"};function g(b,e,f,m,y,E){const n=a("Badge"),l=a("Alert");return p(),r("div",null,[s("h1",u,[e[0]||(e[0]=i("unicorn/no-empty-file ")),t(n,{type:"info",text:"Correctness"}),e[1]||(e[1]=i()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-no-empty-file","aria-label":'Permalink to "unicorn/no-empty-file <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",k,[t(l,{class:"default-on",type:"success"},{default:c(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows any files only containing the following:</p><ul><li>Whitespace</li><li>Comments</li><li>Directives</li><li>Empty statements</li><li>Empty blocks</li><li>Hashbang</li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Meaningless files clutter a codebase.</p><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PjM06" id="tab-r20cr4r" checked><label data-title="CLI" for="tab-r20cr4r">CLI</label><input type="radio" name="group-PjM06" id="tab-3sVioiB"><label data-title="Config (.oxlintrc.json)" for="tab-3sVioiB">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/no-empty-file</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/no-empty-file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/unicorn/no_empty_file.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,10))])}const v=o(h,[["render",g]]);export{_ as __pageData,v as default};
