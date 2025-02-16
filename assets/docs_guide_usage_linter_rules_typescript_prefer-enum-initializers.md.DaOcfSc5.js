import{_ as r,C as a,c as p,o,j as s,ag as h,a as i,G as t,w as d}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"typescript/prefer-enum-initializers","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.md","filePath":"docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.md"},u={id:"typescript-prefer-enum-initializers",tabindex:"-1"},k={class:"rule-meta"};function g(m,e,b,y,f,E){const n=a("Badge"),l=a("Alert");return o(),p("div",null,[s("h1",u,[e[0]||(e[0]=i("typescript/prefer-enum-initializers ")),t(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=i()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-prefer-enum-initializers","aria-label":'Permalink to "typescript/prefer-enum-initializers <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",k,[t(l,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),i(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require each enum member value to be explicitly initialized.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In projects where the value of <code>enum</code> members are important, allowing implicit values for enums can cause bugs if enums are modified over time.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// wrong, the value of \`Close\` is not constant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Open</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hvbNn" id="tab-ZKHJtAe" checked><label data-title="CLI" for="tab-ZKHJtAe">CLI</label><input type="radio" name="group-hvbNn" id="tab-siBvpIg"><label data-title="Config (.oxlintrc.json)" for="tab-siBvpIg">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/prefer-enum-initializers</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/prefer-enum-initializers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/typescript/prefer_enum_initializers.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const x=r(c,[["render",g]]);export{C as __pageData,x as default};
