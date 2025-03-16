import{_ as e,c as i,o as a,ag as t}from"./chunks/framework.Az7Yw7dm.js";const k=JSON.parse('{"title":"Oxlint Configuration File","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/generated-config.md","filePath":"docs/guide/usage/linter/generated-config.md"}'),n={name:"docs/guide/usage/linter/generated-config.md"};function o(l,s,r,p,h,c){return a(),i("div",null,s[0]||(s[0]=[t(`<h1 id="oxlint-configuration-file" tabindex="-1">Oxlint Configuration File <a class="header-anchor" href="#oxlint-configuration-file" aria-label="Permalink to &quot;Oxlint Configuration File&quot;">​</a></h1><p>This configuration is aligned with ESLint v8&#39;s configuration schema (<code>eslintrc.json</code>).</p><p>Usage: <code>oxlint -c oxlintrc.json --import-plugin</code></p><div class="danger custom-block"><p class="custom-block-title">NOTE</p><p>Only the <code>.json</code> format is supported. You can use comments in configuration files.</p></div><p>Example</p><p><code>.oxlintrc.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;$schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./node_modules/oxlint/configuration_schema.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;browser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;readonly&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eqeqeq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;import/no-cycle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;react/self-closing-comp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;overrides&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*.test.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*.spec.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;@typescript-eslint/no-explicit-any&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="categories" tabindex="-1">categories <a class="header-anchor" href="#categories" aria-label="Permalink to &quot;categories&quot;">​</a></h2><p>type: <code>object</code></p><p>Configure an entire category of rules all at once.</p><p>Rules enabled or disabled this way will be overwritten by individual rules in the <code>rules</code> field.</p><p>Example</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;$schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./node_modules/oxlint/configuration_schema.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;correctness&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eslint/no-unused-vars&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="categories-correctness" tabindex="-1">categories.correctness <a class="header-anchor" href="#categories-correctness" aria-label="Permalink to &quot;categories.correctness&quot;">​</a></h3><h3 id="categories-nursery" tabindex="-1">categories.nursery <a class="header-anchor" href="#categories-nursery" aria-label="Permalink to &quot;categories.nursery&quot;">​</a></h3><h3 id="categories-pedantic" tabindex="-1">categories.pedantic <a class="header-anchor" href="#categories-pedantic" aria-label="Permalink to &quot;categories.pedantic&quot;">​</a></h3><h3 id="categories-perf" tabindex="-1">categories.perf <a class="header-anchor" href="#categories-perf" aria-label="Permalink to &quot;categories.perf&quot;">​</a></h3><h3 id="categories-restriction" tabindex="-1">categories.restriction <a class="header-anchor" href="#categories-restriction" aria-label="Permalink to &quot;categories.restriction&quot;">​</a></h3><h3 id="categories-style" tabindex="-1">categories.style <a class="header-anchor" href="#categories-style" aria-label="Permalink to &quot;categories.style&quot;">​</a></h3><h3 id="categories-suspicious" tabindex="-1">categories.suspicious <a class="header-anchor" href="#categories-suspicious" aria-label="Permalink to &quot;categories.suspicious&quot;">​</a></h3><h2 id="env" tabindex="-1">env <a class="header-anchor" href="#env" aria-label="Permalink to &quot;env&quot;">​</a></h2><p>type: <code>Record&lt;string, boolean&gt;</code></p><p>Predefine global variables.</p><p>Environments specify what global variables are predefined. See <a href="https://eslint.org/docs/v8.x/use/configure/language-options#specifying-environments" target="_blank" rel="noreferrer">ESLint&#39;s list of environments</a> for what environments are available and what each one provides.</p><h2 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h2><p>type: <code>string[]</code></p><p>Paths of configuration files that this configuration file extends (inherits from). The files are resolved relative to the location of the configuration file that contains the <code>extends</code> property. The configuration files are merged from the first to the last, with the last file overriding the previous ones.</p><h2 id="globals" tabindex="-1">globals <a class="header-anchor" href="#globals" aria-label="Permalink to &quot;globals&quot;">​</a></h2><p>type: <code>Record&lt;string, string&gt;</code></p><p>Add or remove global variables.</p><p>For each global variable, set the corresponding value equal to <code>&quot;writable&quot;</code> to allow the variable to be overwritten or <code>&quot;readonly&quot;</code> to disallow overwriting.</p><p>Globals can be disabled by setting their value to <code>&quot;off&quot;</code>. For example, in an environment where most Es2015 globals are available but <code>Promise</code> is unavailable, you might use this config:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;$schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./node_modules/oxlint/configuration_schema.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;es6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Promise&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>You may also use <code>&quot;readable&quot;</code> or <code>false</code> to represent <code>&quot;readonly&quot;</code>, and <code>&quot;writeable&quot;</code> or <code>true</code> to represent <code>&quot;writable&quot;</code>.</p><h2 id="ignorepatterns" tabindex="-1">ignorePatterns <a class="header-anchor" href="#ignorepatterns" aria-label="Permalink to &quot;ignorePatterns&quot;">​</a></h2><p>type: <code>string[]</code></p><p>default: <code>[]</code></p><p>Globs to ignore during linting. These are resolved from the configuration file path.</p><h2 id="overrides" tabindex="-1">overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;overrides&quot;">​</a></h2><p>type: <code>array</code></p><h3 id="overrides-n" tabindex="-1">overrides[n] <a class="header-anchor" href="#overrides-n" aria-label="Permalink to &quot;overrides[n]&quot;">​</a></h3><p>type: <code>object</code></p><h4 id="overrides-n-files" tabindex="-1">overrides[n].files <a class="header-anchor" href="#overrides-n-files" aria-label="Permalink to &quot;overrides[n].files&quot;">​</a></h4><p>type: <code>string[]</code></p><h4 id="overrides-n-rules" tabindex="-1">overrides[n].rules <a class="header-anchor" href="#overrides-n-rules" aria-label="Permalink to &quot;overrides[n].rules&quot;">​</a></h4><p>type: <code>object</code></p><p>See <a href="https://oxc.rs/docs/guide/usage/linter/rules.html" target="_blank" rel="noreferrer">Oxlint Rules</a></p><h2 id="plugins" tabindex="-1">plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;plugins&quot;">​</a></h2><p>type: <code>string[]</code></p><p>default: <code>[&quot;react&quot;, &quot;unicorn&quot;, &quot;typescript&quot;, &quot;oxc&quot;]</code></p><h2 id="rules" tabindex="-1">rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;rules&quot;">​</a></h2><p>type: <code>object</code></p><p>See <a href="https://oxc.rs/docs/guide/usage/linter/rules.html" target="_blank" rel="noreferrer">Oxlint Rules</a></p><h2 id="settings" tabindex="-1">settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;settings&quot;">​</a></h2><p>type: <code>object</code></p><p>Configure the behavior of linter plugins.</p><p>Here&#39;s an example if you&#39;re using Next.js in a monorepo:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;next&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;rootDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;apps/dashboard/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;linkComponents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Link&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;linkAttribute&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;to&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jsx-a11y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;Link&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;Button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="settings-jsdoc" tabindex="-1">settings.jsdoc <a class="header-anchor" href="#settings-jsdoc" aria-label="Permalink to &quot;settings.jsdoc&quot;">​</a></h3><p>type: <code>object</code></p><h4 id="settings-jsdoc-augmentsextendsreplacesdocs" tabindex="-1">settings.jsdoc.augmentsExtendsReplacesDocs <a class="header-anchor" href="#settings-jsdoc-augmentsextendsreplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.augmentsExtendsReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>false</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-exemptdestructuredrootsfromchecks" tabindex="-1">settings.jsdoc.exemptDestructuredRootsFromChecks <a class="header-anchor" href="#settings-jsdoc-exemptdestructuredrootsfromchecks" aria-label="Permalink to &quot;settings.jsdoc.exemptDestructuredRootsFromChecks&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>false</code></p><p>Only for <code>require-param-type</code> and <code>require-param-description</code> rule</p><h4 id="settings-jsdoc-ignoreinternal" tabindex="-1">settings.jsdoc.ignoreInternal <a class="header-anchor" href="#settings-jsdoc-ignoreinternal" aria-label="Permalink to &quot;settings.jsdoc.ignoreInternal&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>false</code></p><p>For all rules but NOT apply to <code>empty-tags</code> rule</p><h4 id="settings-jsdoc-ignoreprivate" tabindex="-1">settings.jsdoc.ignorePrivate <a class="header-anchor" href="#settings-jsdoc-ignoreprivate" aria-label="Permalink to &quot;settings.jsdoc.ignorePrivate&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>false</code></p><p>For all rules but NOT apply to <code>check-access</code> and <code>empty-tags</code> rule</p><h4 id="settings-jsdoc-ignorereplacesdocs" tabindex="-1">settings.jsdoc.ignoreReplacesDocs <a class="header-anchor" href="#settings-jsdoc-ignorereplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.ignoreReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>true</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-implementsreplacesdocs" tabindex="-1">settings.jsdoc.implementsReplacesDocs <a class="header-anchor" href="#settings-jsdoc-implementsreplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.implementsReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>false</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-overridereplacesdocs" tabindex="-1">settings.jsdoc.overrideReplacesDocs <a class="header-anchor" href="#settings-jsdoc-overridereplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.overrideReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>default: <code>true</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-tagnamepreference" tabindex="-1">settings.jsdoc.tagNamePreference <a class="header-anchor" href="#settings-jsdoc-tagnamepreference" aria-label="Permalink to &quot;settings.jsdoc.tagNamePreference&quot;">​</a></h4><p>type: <code>object</code></p><p>default: <code>{}</code></p><h3 id="settings-jsx-a11y" tabindex="-1">settings.jsx-a11y <a class="header-anchor" href="#settings-jsx-a11y" aria-label="Permalink to &quot;settings.jsx-a11y&quot;">​</a></h3><p>type: <code>object</code></p><p>Configure JSX A11y plugin rules.</p><p>See <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#configurations" target="_blank" rel="noreferrer">eslint-plugin-jsx-a11y</a>&#39;s configuration for a full reference.</p><h4 id="settings-jsx-a11y-components" tabindex="-1">settings.jsx-a11y.components <a class="header-anchor" href="#settings-jsx-a11y-components" aria-label="Permalink to &quot;settings.jsx-a11y.components&quot;">​</a></h4><p>type: <code>Record&lt;string, string&gt;</code></p><p>default: <code>{}</code></p><p>To have your custom components be checked as DOM elements, you can provide a mapping of your component names to the DOM element name.</p><p>Example:</p><p><code>json { &quot;settings&quot;: { &quot;jsx-a11y&quot;: { &quot;components&quot;: { &quot;Link&quot;: &quot;a&quot;, &quot;IconButton&quot;: &quot;button&quot; } } } } </code></p><h4 id="settings-jsx-a11y-polymorphicpropname" tabindex="-1">settings.jsx-a11y.polymorphicPropName <a class="header-anchor" href="#settings-jsx-a11y-polymorphicpropname" aria-label="Permalink to &quot;settings.jsx-a11y.polymorphicPropName&quot;">​</a></h4><p>type: <code>[ string, null ]</code></p><p>An optional setting that define the prop your code uses to create polymorphic components. This setting will be used to determine the element type in rules that require semantic context.</p><p>For example, if you set the <code>polymorphicPropName</code> to <code>as</code>, then this element:</p><p><code>jsx &lt;Box as=&quot;h3&quot;&gt;Hello&lt;/Box&gt; </code></p><p>Will be treated as an <code>h3</code>. If not set, this component will be treated as a <code>Box</code>.</p><h3 id="settings-next" tabindex="-1">settings.next <a class="header-anchor" href="#settings-next" aria-label="Permalink to &quot;settings.next&quot;">​</a></h3><p>type: <code>object</code></p><p>Configure Next.js plugin rules.</p><h4 id="settings-next-rootdir" tabindex="-1">settings.next.rootDir <a class="header-anchor" href="#settings-next-rootdir" aria-label="Permalink to &quot;settings.next.rootDir&quot;">​</a></h4><h3 id="settings-react" tabindex="-1">settings.react <a class="header-anchor" href="#settings-react" aria-label="Permalink to &quot;settings.react&quot;">​</a></h3><p>type: <code>object</code></p><p>Configure React plugin rules.</p><p>Derived from <a href="https://github.com/jsx-eslint/eslint-plugin-react#configuration-legacy-eslintrc-" target="_blank" rel="noreferrer">eslint-plugin-react</a></p><h4 id="settings-react-formcomponents" tabindex="-1">settings.react.formComponents <a class="header-anchor" href="#settings-react-formcomponents" aria-label="Permalink to &quot;settings.react.formComponents&quot;">​</a></h4><p>type: <code>array</code></p><p>default: <code>[]</code></p><p>Components used as alternatives to <code>&lt;form&gt;</code> for forms, such as <code>&lt;Formik&gt;</code>.</p><p>Example:</p><p><code>jsonc { &quot;settings&quot;: { &quot;react&quot;: { &quot;formComponents&quot;: [ &quot;CustomForm&quot;, // OtherForm is considered a form component and has an endpoint attribute { &quot;name&quot;: &quot;OtherForm&quot;, &quot;formAttribute&quot;: &quot;endpoint&quot; }, // allows specifying multiple properties if necessary { &quot;name&quot;: &quot;Form&quot;, &quot;formAttribute&quot;: [&quot;registerEndpoint&quot;, &quot;loginEndpoint&quot;] } ] } } } </code></p><h5 id="settings-react-formcomponents-n" tabindex="-1">settings.react.formComponents[n] <a class="header-anchor" href="#settings-react-formcomponents-n" aria-label="Permalink to &quot;settings.react.formComponents[n]&quot;">​</a></h5><h4 id="settings-react-linkcomponents" tabindex="-1">settings.react.linkComponents <a class="header-anchor" href="#settings-react-linkcomponents" aria-label="Permalink to &quot;settings.react.linkComponents&quot;">​</a></h4><p>type: <code>array</code></p><p>default: <code>[]</code></p><p>Components used as alternatives to <code>&lt;a&gt;</code> for linking, such as <code>&lt;Link&gt;</code>.</p><p>Example:</p><p><code>jsonc { &quot;settings&quot;: { &quot;react&quot;: { &quot;linkComponents&quot;: [ &quot;HyperLink&quot;, // Use \`linkAttribute\` for components that use a different prop name // than \`href\`. { &quot;name&quot;: &quot;MyLink&quot;, &quot;linkAttribute&quot;: &quot;to&quot; }, // allows specifying multiple properties if necessary { &quot;name&quot;: &quot;Link&quot;, &quot;linkAttribute&quot;: [&quot;to&quot;, &quot;href&quot;] } ] } } } </code></p><h5 id="settings-react-linkcomponents-n" tabindex="-1">settings.react.linkComponents[n] <a class="header-anchor" href="#settings-react-linkcomponents-n" aria-label="Permalink to &quot;settings.react.linkComponents[n]&quot;">​</a></h5>`,129)]))}const u=e(n,[["render",o]]);export{k as __pageData,u as default};
