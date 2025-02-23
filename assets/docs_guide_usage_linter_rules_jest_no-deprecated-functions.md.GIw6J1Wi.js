import{_ as n,C as t,c as d,o as l,j as a,ag as c,a as s,G as i,w as h}from"./chunks/framework.DteEOKvC.js";const v=JSON.parse('{"title":"jest/no-deprecated-functions","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-deprecated-functions.md","filePath":"docs/guide/usage/linter/rules/jest/no-deprecated-functions.md"}'),p={name:"docs/guide/usage/linter/rules/jest/no-deprecated-functions.md"},u={id:"jest-no-deprecated-functions",tabindex:"-1"},k={class:"rule-meta"};function m(f,e,g,b,y,q){const o=t("Badge"),r=t("Alert");return l(),d("div",null,[a("h1",u,[e[0]||(e[0]=s("jest/no-deprecated-functions ")),i(o,{type:"info",text:"Style"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#jest-no-deprecated-functions","aria-label":'Permalink to "jest/no-deprecated-functions <Badge type="info" text="Style" />"'},"​",-1))]),a("div",k,[i(r,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Over the years Jest has accrued some debt in the form of functions that have either been renamed for clarity, or replaced with more powerful APIs.</p><p>This rule can also autofix a number of these deprecations for you.</p><h4 id="jest-resetmoduleregistry" tabindex="-1"><code>jest.resetModuleRegistry</code> <a class="header-anchor" href="#jest-resetmoduleregistry" aria-label="Permalink to &quot;`jest.resetModuleRegistry`&quot;">​</a></h4><p>This function was renamed to <code>resetModules</code> in Jest 15 and removed in Jest 27.</p><h4 id="jest-addmatchers" tabindex="-1"><code>jest.addMatchers</code> <a class="header-anchor" href="#jest-addmatchers" aria-label="Permalink to &quot;`jest.addMatchers`&quot;">​</a></h4><p>This function was replaced with <code>expect.extend</code> in Jest 17 and removed in Jest 27.</p><h4 id="require-requireactual-require-requiremock" tabindex="-1"><code>require.requireActual</code> &amp; <code>require.requireMock</code> <a class="header-anchor" href="#require-requireactual-require-requiremock" aria-label="Permalink to &quot;`require.requireActual` &amp; `require.requireMock`&quot;">​</a></h4><p>These functions were replaced in Jest 21 and removed in Jest 26.</p><p>Originally, the <code>requireActual</code> &amp; <code>requireMock</code> the <code>requireActual</code>&amp; <code>requireMock</code> functions were placed onto the <code>require</code> function.</p><p>These functions were later moved onto the <code>jest</code> object in order to be easier for type checkers to handle, and their use via <code>require</code> deprecated. Finally, the release of Jest 26 saw them removed from the <code>require</code> function altogether.</p><h4 id="jest-runtimerstotime" tabindex="-1"><code>jest.runTimersToTime</code> <a class="header-anchor" href="#jest-runtimerstotime" aria-label="Permalink to &quot;`jest.runTimersToTime`&quot;">​</a></h4><p>This function was renamed to <code>advanceTimersByTime</code> in Jest 22 and removed in Jest 27.</p><h4 id="jest-genmockfrommodule" tabindex="-1"><code>jest.genMockFromModule</code> <a class="header-anchor" href="#jest-genmockfrommodule" aria-label="Permalink to &quot;`jest.genMockFromModule`&quot;">​</a></h4><p>This function was renamed to <code>createMockFromModule</code> in Jest 26, and is scheduled for removal in Jest 30.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>While typically these deprecated functions are kept in the codebase for a number of majors, eventually they are removed completely.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jest.resetModuleRegistry; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// since Jest 15</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jest.addMatchers; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// since Jest 17</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BjYV8" id="tab-N0N1Bnk" checked><label data-title="CLI" for="tab-N0N1Bnk">CLI</label><input type="radio" name="group-BjYV8" id="tab-ifCd-5s"><label data-title="Config (.oxlintrc.json)" for="tab-ifCd-5s">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jest/no-deprecated-functions</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --jest-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jest/no-deprecated-functions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/jest/no_deprecated_functions.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',24))])}const E=n(p,[["render",m]]);export{v as __pageData,E as default};
