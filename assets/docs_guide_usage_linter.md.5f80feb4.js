import{_ as a,C as e,o as l,c as o,H as p,k as s,a as t,Q as r}from"./chunks/framework.cac41693.js";const f=JSON.parse('{"title":"Linter","description":"","frontmatter":{"title":"Linter","outline":"deep","badges":[{"src":"https://img.shields.io/npm/dw/oxlint","alt":"npm weekly downloads"}]},"headers":[],"relativePath":"docs/guide/usage/linter.md","filePath":"docs/guide/usage/linter.md"}'),c={name:"docs/guide/usage/linter.md"},i=s("h1",{id:"linter-oxlint",tabindex:"-1"},[t("Linter (oxlint) "),s("a",{class:"header-anchor",href:"#linter-oxlint","aria-label":'Permalink to "Linter (oxlint)"'},"​")],-1),d=r(`<p>Oxlint is designed to catch erroneous or useless code without requiring any configurations by default.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>At the current stage, oxlint is <strong>not intended to fully replace ESLint</strong>; it serves as an enhancement when ESLint&#39;s slowness becomes a bottleneck in your workflow.</p><p>We recommend running oxlint before ESLint in your lint-staged or CI setup for a quicker feedback loop, considering it only takes a few seconds to run on large codebases.</p></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>50 - 100 times faster than ESLint, and scales with the number of CPU cores (<a href="https://github.com/oxc-project/bench-javascript-linter" target="_blank" rel="noreferrer">benchmark</a>).</li><li>Over 200 rules with a growing list from <code>eslint</code>, <code>typescript</code>, <code>eslint-plugin-react</code>, <code>eslint-plugin-jest</code>, <code>eslint-plugin-unicorn</code> and <code>eslint-plugin-jsx-a11y</code>.</li><li>Supports <a href="https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file" target="_blank" rel="noreferrer">.eslintignore</a>.</li><li>Supports <a href="https://eslint.org/docs/latest/use/configure/rules#disabling-rules" target="_blank" rel="noreferrer">ESLint comment disabling</a>.</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Run oxlint directly at the root of your repository:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GrUdS" id="tab-3l_MG6f" checked="checked"><label for="tab-3l_MG6f">npm</label><input type="radio" name="group-GrUdS" id="tab-BO9PLgE"><label for="tab-BO9PLgE">pnpm</label><input type="radio" name="group-GrUdS" id="tab-3FuPuh5"><label for="tab-3FuPuh5">yarn</label><input type="radio" name="group-GrUdS" id="tab-OKcasU4"><label for="tab-OKcasU4">bun</label><input type="radio" name="group-GrUdS" id="tab-s9qmO2-"><label for="tab-s9qmO2-">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bunx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bunx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deno</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm:oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deno</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm:oxlint@latest</span></span></code></pre></div></div></div><p>Or save it to your package.json:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-88J1V" id="tab-5ES0e-j" checked="checked"><label for="tab-5ES0e-j">npm</label><input type="radio" name="group-88J1V" id="tab-xYGt0XK"><label for="tab-xYGt0XK">pnpm</label><input type="radio" name="group-88J1V" id="tab-GIuAFJR"><label for="tab-GIuAFJR">yarn</label><input type="radio" name="group-88J1V" id="tab-uvnmaMQ"><label for="tab-uvnmaMQ">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint</span></span></code></pre></div></div></div><p><code>oxlint</code> does not require Node.js, the binaries can be downloaded from the <a href="https://github.com/oxc-project/oxc/releases/latest" target="_blank" rel="noreferrer">latest GitHub releases</a>.</p><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><ul><li><code>npx oxlint@latest --rules</code> for the list of rules.</li><li><code>npx oxlint@latest --help</code> for configuration instructions.</li></ul><details class="details custom-block"><summary>Help details</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Usage: oxlint [-A=NAME | -D=NAME]... [--fix] [PATH]...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Allowing / Denying Multiple Lints</span></span>
<span class="line"><span style="color:#e1e4e8;">  For example \`-D correctness -A no-debugger\` or \`-A all -D no-debugger\`.</span></span>
<span class="line"><span style="color:#e1e4e8;">  The default category is &quot;-D correctness&quot;.</span></span>
<span class="line"><span style="color:#e1e4e8;">  Use &quot;--rules&quot; for rule names.</span></span>
<span class="line"><span style="color:#e1e4e8;">  Use &quot;--help --help&quot; for rule categories.</span></span>
<span class="line"><span style="color:#e1e4e8;">    -A, --allow=NAME          Allow the rule or category (suppress the lint)</span></span>
<span class="line"><span style="color:#e1e4e8;">    -D, --deny=NAME           Deny the rule or category (emit an error)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Enable Plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">        --import-plugin       Enable the experimental import plugin and detect ESM problems</span></span>
<span class="line"><span style="color:#e1e4e8;">        --jest-plugin         Enable the Jest plugin and detect test problems</span></span>
<span class="line"><span style="color:#e1e4e8;">        --jsx-a11y-plugin     Enable the JSX-a11y plugin and detect accessibility problems</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Fix Problems</span></span>
<span class="line"><span style="color:#e1e4e8;">        --fix                 Fix as many issues as possible. Only unfixed issues are reported in the</span></span>
<span class="line"><span style="color:#e1e4e8;">                              output</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Ignore Files</span></span>
<span class="line"><span style="color:#e1e4e8;">        --ignore-path=PATH    Specify the file to use as your .eslintignore</span></span>
<span class="line"><span style="color:#e1e4e8;">        --ignore-pattern=PAT  Specify patterns of files to ignore (in addition to those in .eslintignore)</span></span>
<span class="line"><span style="color:#e1e4e8;">        --no-ignore           Disables excluding of files from .eslintignore files, --ignore-path flags</span></span>
<span class="line"><span style="color:#e1e4e8;">                              and --ignore-pattern flags</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Handle Warnings</span></span>
<span class="line"><span style="color:#e1e4e8;">        --quiet               Disable reporting on warnings, only errors are reported</span></span>
<span class="line"><span style="color:#e1e4e8;">        --deny-warnings       Ensure warnings produce a non-zero exit code</span></span>
<span class="line"><span style="color:#e1e4e8;">        --max-warnings=INT    Specify a warning threshold, which can be used to force exit with an error</span></span>
<span class="line"><span style="color:#e1e4e8;">                              status if there are too many warning-level rule violations in your project</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Miscellaneous</span></span>
<span class="line"><span style="color:#e1e4e8;">        --timing              Display the execution time of each lint rule</span></span>
<span class="line"><span style="color:#e1e4e8;">                              [env:TIMING: not set]</span></span>
<span class="line"><span style="color:#e1e4e8;">        --rules               list all the rules that are currently registered</span></span>
<span class="line"><span style="color:#e1e4e8;">        --threads=INT         Number of threads to use. Set to 1 for using only 1 CPU core</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Codeowners</span></span>
<span class="line"><span style="color:#e1e4e8;">        --codeowners-file=PATH  Path to CODEOWNERS file</span></span>
<span class="line"><span style="color:#e1e4e8;">        --codeowners=NAME     Code owner names, e.g. @Boshen</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available positional items:</span></span>
<span class="line"><span style="color:#e1e4e8;">    PATH                      Single file, single path or list of paths</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Available options:</span></span>
<span class="line"><span style="color:#e1e4e8;">    -h, --help                Prints help information</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Usage: oxlint [-A=NAME | -D=NAME]... [--fix] [PATH]...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Allowing / Denying Multiple Lints</span></span>
<span class="line"><span style="color:#24292e;">  For example \`-D correctness -A no-debugger\` or \`-A all -D no-debugger\`.</span></span>
<span class="line"><span style="color:#24292e;">  The default category is &quot;-D correctness&quot;.</span></span>
<span class="line"><span style="color:#24292e;">  Use &quot;--rules&quot; for rule names.</span></span>
<span class="line"><span style="color:#24292e;">  Use &quot;--help --help&quot; for rule categories.</span></span>
<span class="line"><span style="color:#24292e;">    -A, --allow=NAME          Allow the rule or category (suppress the lint)</span></span>
<span class="line"><span style="color:#24292e;">    -D, --deny=NAME           Deny the rule or category (emit an error)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Enable Plugins</span></span>
<span class="line"><span style="color:#24292e;">        --import-plugin       Enable the experimental import plugin and detect ESM problems</span></span>
<span class="line"><span style="color:#24292e;">        --jest-plugin         Enable the Jest plugin and detect test problems</span></span>
<span class="line"><span style="color:#24292e;">        --jsx-a11y-plugin     Enable the JSX-a11y plugin and detect accessibility problems</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Fix Problems</span></span>
<span class="line"><span style="color:#24292e;">        --fix                 Fix as many issues as possible. Only unfixed issues are reported in the</span></span>
<span class="line"><span style="color:#24292e;">                              output</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Ignore Files</span></span>
<span class="line"><span style="color:#24292e;">        --ignore-path=PATH    Specify the file to use as your .eslintignore</span></span>
<span class="line"><span style="color:#24292e;">        --ignore-pattern=PAT  Specify patterns of files to ignore (in addition to those in .eslintignore)</span></span>
<span class="line"><span style="color:#24292e;">        --no-ignore           Disables excluding of files from .eslintignore files, --ignore-path flags</span></span>
<span class="line"><span style="color:#24292e;">                              and --ignore-pattern flags</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Handle Warnings</span></span>
<span class="line"><span style="color:#24292e;">        --quiet               Disable reporting on warnings, only errors are reported</span></span>
<span class="line"><span style="color:#24292e;">        --deny-warnings       Ensure warnings produce a non-zero exit code</span></span>
<span class="line"><span style="color:#24292e;">        --max-warnings=INT    Specify a warning threshold, which can be used to force exit with an error</span></span>
<span class="line"><span style="color:#24292e;">                              status if there are too many warning-level rule violations in your project</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Miscellaneous</span></span>
<span class="line"><span style="color:#24292e;">        --timing              Display the execution time of each lint rule</span></span>
<span class="line"><span style="color:#24292e;">                              [env:TIMING: not set]</span></span>
<span class="line"><span style="color:#24292e;">        --rules               list all the rules that are currently registered</span></span>
<span class="line"><span style="color:#24292e;">        --threads=INT         Number of threads to use. Set to 1 for using only 1 CPU core</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Codeowners</span></span>
<span class="line"><span style="color:#24292e;">        --codeowners-file=PATH  Path to CODEOWNERS file</span></span>
<span class="line"><span style="color:#24292e;">        --codeowners=NAME     Code owner names, e.g. @Boshen</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available positional items:</span></span>
<span class="line"><span style="color:#24292e;">    PATH                      Single file, single path or list of paths</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Available options:</span></span>
<span class="line"><span style="color:#24292e;">    -h, --help                Prints help information</span></span></code></pre></div></details><h2 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-label="Permalink to &quot;Integration&quot;">​</a></h2><h3 id="vscode-extension" tabindex="-1">VSCode Extension <a class="header-anchor" href="#vscode-extension" aria-label="Permalink to &quot;VSCode Extension&quot;">​</a></h3><p>Download the official <a href="https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode" target="_blank" rel="noreferrer">VSCode extension</a>.</p><h3 id="continuous-integration" tabindex="-1">Continuous Integration <a class="header-anchor" href="#continuous-integration" aria-label="Permalink to &quot;Continuous Integration&quot;">​</a></h3><p>Since <code>oxlint</code> only takes a few seconds to run, we recommend running <code>oxlint</code> prior to ESLint for faster feedback loops.</p><h4 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">oxlint</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lint JS</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npx --yes oxlint@0.0.0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># change to the latest release</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">oxlint</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lint JS</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npx --yes oxlint@0.0.0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># change to the latest release</span></span></code></pre></div><h2 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-label="Permalink to &quot;System Requirements&quot;">​</a></h2><p><code>oxlint</code> is built for darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64 and win32-x64.</p>`,22);function y(u,h,E,g,b,m){const n=e("AppBadgeList");return l(),o("div",null,[i,p(n),d])}const v=a(c,[["render",y]]);export{f as __pageData,v as default};