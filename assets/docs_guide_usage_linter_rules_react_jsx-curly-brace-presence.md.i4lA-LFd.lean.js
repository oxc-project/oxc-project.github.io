import{_ as a,c as n,j as e,a as t,G as l,a2 as r,B as o,o as p}from"./chunks/framework.DlAqvapY.js";const f=JSON.parse('{"title":"react/jsx-curly-brace-presence","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.md","filePath":"docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.md"}'),h={name:"docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.md"},d={id:"react-jsx-curly-brace-presence",tabindex:"-1"};function k(c,s,u,g,y,E){const i=o("Badge");return p(),n("div",null,[e("h1",d,[s[0]||(s[0]=t("react/jsx-curly-brace-presence ")),l(i,{type:"info",text:"Style"}),s[1]||(s[1]=t()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#react-jsx-curly-brace-presence","aria-label":'Permalink to "react/jsx-curly-brace-presence <Badge type="info" text="Style" />"'},"​",-1))]),s[3]||(s[3]=r(`<div class="rule-meta"></div><h1 id="disallow-unnecessary-jsx-expressions-when-literals-alone-are" tabindex="-1">Disallow unnecessary JSX expressions when literals alone are <a class="header-anchor" href="#disallow-unnecessary-jsx-expressions-when-literals-alone-are" aria-label="Permalink to &quot;Disallow unnecessary JSX expressions when literals alone are&quot;">​</a></h1><p>sufficient or enforce JSX expressions on literals in JSX children or attributes (<code>react/jsx-curly-brace-presence</code>)</p><pre><code>🔧 This rule is automatically fixable by the [\`--fix\` CLI option](https://oxc-project.github.io/docs/guide/usage/linter/cli.html#fix-problems).
</code></pre><p>This rule allows you to enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.</p><p>For situations where JSX expressions are unnecessary, please refer to <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank" rel="noreferrer">the React doc</a> and <a href="https://github.com/facebook/react/blob/v15.4.0-rc.3/docs/docs/02.3-jsx-gotchas.md#html-entities" target="_blank" rel="noreferrer">this page about JSX gotchas</a>.</p><pre><code>## Rule Details
</code></pre><p>By default, this rule will check for and warn about unnecessary curly braces in both JSX props and children. For the sake of backwards compatibility, prop values that are JSX elements are not considered by default.</p><p>You can pass in options to enforce the presence of curly braces on JSX props, children, JSX prop values that are JSX elements, or any combination of the three. The same options are available for not allowing unnecessary curly braces as well as ignoring the check.</p><p><strong>Note</strong>: it is <em>highly recommended</em> that you configure this rule with an object, and that you set &quot;propElementValues&quot; to &quot;always&quot;. The ability to omit curly braces around prop values that are JSX elements is obscure, and intentionally undocumented, and should not be relied upon.</p><pre><code>## Rule Options

\`\`\`js
...
&quot;react/jsx-curly-brace-presence&quot;: [&lt;enabled&gt;, { &quot;props&quot;: &lt;string&gt;, &quot;children&quot;: &lt;string&gt;, &quot;propElementValues&quot;: &lt;string&gt; }]
...
\`\`\`

or alternatively

\`\`\`js
...
&quot;react/jsx-curly-brace-presence&quot;: [&lt;enabled&gt;, &lt;string&gt;]
...
\`\`\`

### Valid options for \`&lt;string&gt;\`
</code></pre><p>They are <code>always</code>, <code>never</code> and <code>ignore</code> for checking on JSX props and children.</p><pre><code>- \`always\`: always enforce curly braces inside JSX props, children, and/or JSX prop values that are JSX Elements
- \`never\`: never allow unnecessary curly braces inside JSX props, children, and/or JSX prop values that are JSX Elements
- \`ignore\`: ignore the rule for JSX props, children, and/or JSX prop values that are JSX Elements

If passed in the option to fix, this is how a style violation will get fixed

- \`always\`: wrap a JSX attribute in curly braces/JSX expression and/or a JSX child the same way but also with double quotes
- \`never\`: get rid of curly braces from a JSX attribute and/or a JSX child

- All fixing operations use double quotes.

For examples:

Examples of **incorrect** code for this rule, when configured with \`{ props: &quot;always&quot;, children: &quot;always&quot; }\`:

\`\`\`jsx
&lt;App&gt;Hello world&lt;/App&gt;;
&lt;App prop=&#39;Hello world&#39;&gt;{&#39;Hello world&#39;}&lt;/App&gt;;
\`\`\`

They can be fixed to:

\`\`\`jsx
&lt;App&gt;{&quot;Hello world&quot;}&lt;/App&gt;;
&lt;App prop={&quot;Hello world&quot;}&gt;{&#39;Hello world&#39;}&lt;/App&gt;;
\`\`\`

Examples of **incorrect** code for this rule, when configured with \`{ props: &quot;never&quot;, children: &quot;never&quot; }\`:

\`\`\`jsx
&lt;App&gt;{&#39;Hello world&#39;}&lt;/App&gt;;
&lt;App prop={&#39;Hello world&#39;} attr={&quot;foo&quot;} /&gt;;
\`\`\`

They can be fixed to:

\`\`\`jsx
&lt;App&gt;Hello world&lt;/App&gt;;
&lt;App prop=&quot;Hello world&quot; attr=&quot;foo&quot; /&gt;;
\`\`\`

Examples of **incorrect** code for this rule, when configured with \`{ props: &quot;always&quot;, children: &quot;always&quot;, &quot;propElementValues&quot;: &quot;always&quot; }\`:

\`\`\`jsx
&lt;App prop=&lt;div /&gt; /&gt;;
\`\`\`

They can be fixed to:

\`\`\`jsx
&lt;App prop={&lt;div /&gt;} /&gt;;
\`\`\`

Examples of **incorrect** code for this rule, when configured with \`{ props: &quot;never&quot;, children: &quot;never&quot;, &quot;propElementValues&quot;: &quot;never&quot; }\`:

\`\`\`jsx
&lt;App prop={&lt;div /&gt;} /&gt;;
\`\`\`

They can be fixed to:

\`\`\`jsx
&lt;App prop=&lt;div /&gt; /&gt;;
\`\`\`

### Alternative syntax

The options are also \`always\`, \`never\`, and \`ignore\` for the same meanings.
</code></pre><p>In this syntax, only a string is provided and the default will be set to that option for checking on both JSX props and children.</p><pre><code>For examples:

Examples of **incorrect** code for this rule, when configured with \`&quot;always&quot;\`:

\`\`\`jsx
&lt;App&gt;Hello world&lt;/App&gt;;
&lt;App prop=&#39;Hello world&#39; attr=&quot;foo&quot;&gt;Hello world&lt;/App&gt;;
\`\`\`

They can be fixed to:

\`\`\`jsx
&lt;App&gt;{&quot;Hello world&quot;}&lt;/App&gt;;
&lt;App prop={&quot;Hello world&quot;} attr={&quot;foo&quot;}&gt;{&quot;Hello world&quot;}&lt;/App&gt;;
\`\`\`

Examples of **incorrect** code for this rule, when configured with \`&quot;never&quot;\`:

\`\`\`jsx
&lt;App prop={&#39;foo&#39;} attr={&quot;bar&quot;}&gt;{&#39;Hello world&#39;}&lt;/App&gt;;
\`\`\`

It can fixed to:

\`\`\`jsx
&lt;App prop=&quot;foo&quot; attr=&quot;bar&quot;&gt;Hello world&lt;/App&gt;;
\`\`\`

## Edge cases
</code></pre><p>The fix also deals with template literals, strings with quotes, and strings with escapes characters.</p><ul><li><p>If the rule is set to get rid of unnecessary curly braces and the template literal inside a JSX expression has no expression, it will throw a warning and be fixed with double quotes. For example:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello world\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello world\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>will be warned and fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li><p>If the rule is set to enforce curly braces and the strings have quotes, it will be fixed with double quotes for JSX children and the normal way for JSX attributes. Also, double quotes will be escaped in the fix.</p><p>For example:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello &quot;foo&quot; world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello &#39;foo&#39; &quot;bar&quot; world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>will warned and fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello &quot;foo&quot; world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello &#39;foo&#39; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li><p>If the rule is set to get rid of unnecessary curly braces(JSX expression) and there are characters that need to be escaped in its JSX form, such as quote characters, <a href="https://facebook.github.io/jsx/" target="_blank" rel="noreferrer">forbidden JSX text characters</a>, escaped characters and anything that looks like HTML entity names, the code will not be warned because the fix may make the code less readable.</p><p>Examples of <strong>correct</strong> code for this rule, even when configured with <code>&quot;never&quot;</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Color</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u00a0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u00b7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.main { margin-top: 0; }&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * there&#39;s no way to inject a whitespace into jsx without a container so this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * will always be allowed.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;     &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* comment */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bpp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// the comment makes the container necessary</span></span></code></pre></div><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2></li></ul><p>You should turn this rule off if you are not concerned about maintaining consistency regarding the use of curly braces in JSX props and/or children as well as the use of unnecessary JSX expressions.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/jsx_curly_brace_presence.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,20))])}const F=a(h,[["render",k]]);export{f as __pageData,F as default};
