import{_ as r,C as i,c as h,o,j as s,ag as p,a as e,G as t,w as d}from"./chunks/framework.B7cJCh-b.js";const C=JSON.parse('{"title":"oxc/bad-replace-all-arg","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.md","filePath":"docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.md"}'),c={name:"docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.md"},k={id:"oxc-bad-replace-all-arg",tabindex:"-1"},g={class:"rule-meta"};function u(b,a,E,y,x,f){const l=i("Badge"),n=i("Alert");return o(),h("div",null,[s("h1",k,[a[0]||(a[0]=e("oxc/bad-replace-all-arg ")),t(l,{type:"info",text:"Correctness"}),a[1]||(a[1]=e()),a[2]||(a[2]=s("a",{class:"header-anchor",href:"#oxc-bad-replace-all-arg","aria-label":'Permalink to "oxc/bad-replace-all-arg <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",g,[t(n,{class:"default-on",type:"success"},{default:d(()=>a[3]||(a[3]=[s("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1})]),a[4]||(a[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule warns when the <code>replaceAll</code> method is called with a regular expression that does not have the global flag (g).</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>replaceAll</code> method replaces all occurrences of a string with another string. If the global flag (g) is not used in the regular expression, only the first occurrence of the string will be replaced.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">withSpaces.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">withSpaces.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VkHbO" id="tab-bsWzMON" checked><label data-title="CLI" for="tab-bsWzMON">CLI</label><input type="radio" name="group-VkHbO" id="tab-g3uBLxX"><label data-title="Config (.oxlintrc.json)" for="tab-g3uBLxX">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxc/bad-replace-all-arg</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;oxc/bad-replace-all-arg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/oxc/bad_replace_all_arg.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const m=r(c,[["render",u]]);export{C as __pageData,m as default};
