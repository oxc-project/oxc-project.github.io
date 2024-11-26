import{_ as l,c as n,j as e,a,G as t,w as c,a2 as d,B as i,o as p}from"./chunks/framework.8qdJL5ht.js";const j=JSON.parse('{"title":"react/jsx-no-script-url","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/jsx-no-script-url.md","filePath":"docs/guide/usage/linter/rules/react/jsx-no-script-url.md"}'),h={name:"docs/guide/usage/linter/rules/react/jsx-no-script-url.md"},u={id:"react-jsx-no-script-url",tabindex:"-1"},k={class:"rule-meta"};function g(f,s,x,m,b,y){const r=i("Badge"),o=i("Alert");return p(),n("div",null,[e("h1",u,[s[0]||(s[0]=a("react/jsx-no-script-url ")),t(r,{type:"info",text:"Suspicious"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#react-jsx-no-script-url","aria-label":'Permalink to "react/jsx-no-script-url <Badge type="info" text="Suspicious" />"'},"​",-1))]),e("div",k,[t(o,{class:"fix",type:"info"},{default:c(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"🚧",-1),a(" An auto-fix is still under development. ")])),_:1})]),s[4]||(s[4]=d('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow usage of <code>javascript:</code> URLs</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>URLs starting with <code>javascript:</code> are a dangerous attack surface because it’s easy to accidentally include unsanitized output in a tag like <code>&lt;a href&gt;</code> and create a security hole. In React 16.9 any URLs starting with <code>javascript:</code> scheme log a warning. In a future major release, React will throw an error if it encounters a <code>javascript:</code> URL.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript:void(0)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Test&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Foo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript:void(0)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/react/jsx_no_script_url.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const v=l(h,[["render",g]]);export{j as __pageData,v as default};
