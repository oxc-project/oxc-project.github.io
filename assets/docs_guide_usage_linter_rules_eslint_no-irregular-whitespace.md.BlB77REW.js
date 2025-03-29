import{_ as r,C as i,c as o,o as h,j as a,ag as p,a as s,G as t,w as d}from"./chunks/framework.Az7Yw7dm.js";const C=JSON.parse('{"title":"eslint/no-irregular-whitespace","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.md","filePath":"docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.md"},u={id:"eslint-no-irregular-whitespace",tabindex:"-1"},k={class:"rule-meta"};function g(b,e,E,f,m,y){const n=i("Badge"),l=i("Alert");return h(),o("div",null,[a("h1",u,[e[0]||(e[0]=s("eslint/no-irregular-whitespace ")),t(n,{type:"info",text:"Correctness"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#eslint-no-irregular-whitespace","aria-label":'Permalink to "eslint/no-irregular-whitespace <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",k,[t(l,{class:"default-on",type:"success"},{default:d(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"✅",-1),s(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows the use of irregular whitespaces in the code.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad&quot;">​</a></h3><p>The use of irregular whitespaces can hinder code readability and create inconsistencies, making maintenance and collaboration more challenging.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> invalidExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9JVvN" id="tab-8ncezQz" checked><label data-title="CLI" for="tab-8ncezQz">CLI</label><input type="radio" name="group-9JVvN" id="tab-frkLPhv"><label data-title="Config (.oxlintrc.json)" for="tab-frkLPhv">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-irregular-whitespace</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-irregular-whitespace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/0f1e0e87715075c250763ea31c3a82505a4f10d3/crates/oxc_linter/src/rules/eslint/no_irregular_whitespace.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const x=r(c,[["render",g]]);export{C as __pageData,x as default};
