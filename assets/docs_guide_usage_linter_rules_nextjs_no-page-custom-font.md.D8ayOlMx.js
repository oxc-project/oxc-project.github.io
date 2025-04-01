import{_ as l,C as t,c as p,o as r,j as a,ag as d,a as e,G as i,w as h}from"./chunks/framework.Az7Yw7dm.js";const v=JSON.parse('{"title":"nextjs/no-page-custom-font","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"}'),c={name:"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"},u={id:"nextjs-no-page-custom-font",tabindex:"-1"},g={class:"rule-meta"};function k(b,s,m,f,x,y){const n=t("Badge"),o=t("Alert");return r(),p("div",null,[a("h1",u,[s[0]||(s[0]=e("nextjs/no-page-custom-font ")),i(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#nextjs-no-page-custom-font","aria-label":'Permalink to "nextjs/no-page-custom-font <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",g,[i(o,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent page-only custom fonts.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><ul><li>The custom font you&#39;re adding was added to a page - this only adds the font to the specific page and not the entire application.</li><li>The custom font you&#39;re adding was added to a separate component within pages/_document.js - this disables automatic font optimization.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-33AiR" id="tab-lNsvpFO" checked><label data-title="CLI" for="tab-lNsvpFO">CLI</label><input type="radio" name="group-33AiR" id="tab-RRlVozk"><label data-title="Config (.oxlintrc.json)" for="tab-RRlVozk">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nextjs/no-page-custom-font</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nextjs-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nextjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;nextjs/no-page-custom-font&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/aba3654b81166a7d52f13ac067ffa4bab5e702c9/crates/oxc_linter/src/rules/nextjs/no_page_custom_font.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const C=l(c,[["render",k]]);export{v as __pageData,C as default};
