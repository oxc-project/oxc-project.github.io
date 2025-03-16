import{_ as l,C as t,c as r,o as p,j as e,ag as c,a,G as n,w as h}from"./chunks/framework.Az7Yw7dm.js";const C=JSON.parse('{"title":"nextjs/no-async-client-component","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-async-client-component.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-async-client-component.md"}'),d={name:"docs/guide/usage/linter/rules/nextjs/no-async-client-component.md"},u={id:"nextjs-no-async-client-component",tabindex:"-1"},k={class:"rule-meta"};function g(b,s,m,y,x,E){const i=t("Badge"),o=t("Alert");return p(),r("div",null,[e("h1",u,[s[0]||(s[0]=a("nextjs/no-async-client-component ")),n(i,{type:"info",text:"Correctness"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#nextjs-no-async-client-component","aria-label":'Permalink to "nextjs/no-async-client-component <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",k,[n(o,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-97dzW" id="tab-nO-qKAt" checked><label data-title="CLI" for="tab-nO-qKAt">CLI</label><input type="radio" name="group-97dzW" id="tab-HIsFogE"><label data-title="Config (.oxlintrc.json)" for="tab-HIsFogE">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nextjs/no-async-client-component</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nextjs-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nextjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;nextjs/no-async-client-component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/nextjs/no_async_client_component.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const v=l(d,[["render",g]]);export{C as __pageData,v as default};
