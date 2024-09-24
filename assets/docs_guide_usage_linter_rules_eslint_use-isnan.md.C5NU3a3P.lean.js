import{_ as o,c as h,j as a,a as e,G as i,w as n,a2 as p,B as l,o as d}from"./chunks/framework.DlAqvapY.js";const x=JSON.parse('{"title":"eslint/use-isnan","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/use-isnan.md","filePath":"docs/guide/usage/linter/rules/eslint/use-isnan.md"}'),u={name:"docs/guide/usage/linter/rules/eslint/use-isnan.md"},c={id:"eslint-use-isnan",tabindex:"-1"},k={class:"rule-meta"};function N(f,s,g,E,b,m){const r=l("Badge"),t=l("Alert");return d(),h("div",null,[a("h1",c,[s[0]||(s[0]=e("eslint/use-isnan ")),i(r,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#eslint-use-isnan","aria-label":'Permalink to "eslint/use-isnan <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",k,[i(t,{class:"default-on",type:"success"},{default:n(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1}),i(t,{class:"fix",type:"info"},{default:n(()=>s[4]||(s[4]=[a("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule for some violations. ")])),_:1})]),s[5]||(s[5]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows checking against NaN without using isNaN() call.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In JavaScript, NaN is a special value of the Number type. It’s used to represent any of the “not-a-number” values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic.</p><p>Because NaN is unique in JavaScript by not being equal to anything, including itself, the results of comparisons to NaN are confusing:</p><ul><li>NaN === NaN or NaN == NaN evaluate to false</li><li>NaN !== NaN or NaN != NaN evaluate to true</li></ul><p>Therefore, use Number.isNaN() or global isNaN() functions to test whether a value is NaN.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/use_isnan.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const v=o(u,[["render",N]]);export{x as __pageData,v as default};
