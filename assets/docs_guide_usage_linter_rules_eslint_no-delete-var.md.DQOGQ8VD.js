import{_ as o,C as t,c as r,o as d,j as a,ag as p,a as s,G as i,w as h}from"./chunks/framework.B7cJCh-b.js";const x=JSON.parse('{"title":"eslint/no-delete-var","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-delete-var.md","filePath":"docs/guide/usage/linter/rules/eslint/no-delete-var.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-delete-var.md"},u={id:"eslint-no-delete-var",tabindex:"-1"},k={class:"rule-meta"};function g(b,e,v,m,f,E){const n=t("Badge"),l=t("Alert");return d(),r("div",null,[a("h1",u,[e[0]||(e[0]=s("eslint/no-delete-var ")),i(n,{type:"info",text:"Correctness"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#eslint-no-delete-var","aria-label":'Permalink to "eslint/no-delete-var <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",k,[i(l,{class:"default-on",type:"success"},{default:h(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"✅",-1),s(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>The purpose of the <code>delete</code> operator is to remove a property from an object.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using the <code>delete</code> operator on a variable might lead to unexpected behavior.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZJ3mm" id="tab-NXD4gD2" checked><label data-title="CLI" for="tab-NXD4gD2">CLI</label><input type="radio" name="group-ZJ3mm" id="tab-Yu4L3tH"><label data-title="Config (.oxlintrc.json)" for="tab-Yu4L3tH">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-delete-var</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-delete-var&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/eslint/no_delete_var.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const C=o(c,[["render",g]]);export{x as __pageData,C as default};
