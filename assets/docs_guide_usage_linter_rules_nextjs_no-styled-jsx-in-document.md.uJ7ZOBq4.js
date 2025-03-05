import{_ as l,C as a,c as d,o as r,j as e,ag as p,a as t,G as i,w as h}from"./chunks/framework.DteEOKvC.js";const C=JSON.parse('{"title":"nextjs/no-styled-jsx-in-document","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.md"}'),c={name:"docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.md"},u={id:"nextjs-no-styled-jsx-in-document",tabindex:"-1"},k={class:"rule-meta"};function g(m,s,x,b,y,f){const n=a("Badge"),o=a("Alert");return r(),d("div",null,[e("h1",u,[s[0]||(s[0]=t("nextjs/no-styled-jsx-in-document ")),i(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=t()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#nextjs-no-styled-jsx-in-document","aria-label":'Permalink to "nextjs/no-styled-jsx-in-document <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",k,[i(o,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"✅",-1),t(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent usage of styled-jsx in pages/_document.js.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Custom CSS like styled-jsx is not allowed in a <a href="https://nextjs.org/docs/pages/building-your-application/routing/custom-document" target="_blank" rel="noreferrer">Custom Document</a>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fsf-p" id="tab-tUtFxNm" checked><label data-title="CLI" for="tab-tUtFxNm">CLI</label><input type="radio" name="group-fsf-p" id="tab-6zOm6Cz"><label data-title="Config (.oxlintrc.json)" for="tab-6zOm6Cz">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nextjs/no-styled-jsx-in-document</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nextjs-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nextjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;nextjs/no-styled-jsx-in-document&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/nextjs/no_styled_jsx_in_document.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const E=l(c,[["render",g]]);export{C as __pageData,E as default};
