import{_ as l,C as i,c as o,o as p,j as a,ag as d,a as s,G as t,w as h}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"typescript/no-unsafe-declaration-merging","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.md","filePath":"docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.md"},u={id:"typescript-no-unsafe-declaration-merging",tabindex:"-1"},g={class:"rule-meta"};function k(b,e,f,m,y,E){const n=i("Badge"),r=i("Alert");return p(),o("div",null,[a("h1",u,[e[0]||(e[0]=s("typescript/no-unsafe-declaration-merging ")),t(n,{type:"info",text:"Correctness"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#typescript-no-unsafe-declaration-merging","aria-label":'Permalink to "typescript/no-unsafe-declaration-merging <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",g,[t(r,{class:"default-on",type:"success"},{default:h(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"✅",-1),s(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow unsafe declaration merging.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Declaration merging between classes and interfaces is unsafe. The TypeScript compiler doesn&#39;t check whether properties are initialized, which can cause lead to TypeScript not detecting code that will cause runtime errors.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4kf1z" id="tab-q5k4zzu" checked><label data-title="CLI" for="tab-q5k4zzu">CLI</label><input type="radio" name="group-4kf1z" id="tab-iuzBJ1r"><label data-title="Config (.oxlintrc.json)" for="tab-iuzBJ1r">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/no-unsafe-declaration-merging</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/no-unsafe-declaration-merging&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/typescript/no_unsafe_declaration_merging.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const _=l(c,[["render",k]]);export{C as __pageData,_ as default};
