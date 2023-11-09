"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7199],{112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(1527),i=t(7660);const r={id:"linter",title:"Linter"},l="Oxlint",o={id:"usage/linter",title:"Linter",description:"- Runs 50 -100 times faster than ESLint (Benchmark).",source:"@site/docs/usage/linter.md",sourceDirName:"usage",slug:"/usage/linter",permalink:"/docs/usage/linter",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/oxc-project.github.io/tree/main/docs/usage/linter.md",tags:[],version:"current",frontMatter:{id:"linter",title:"Linter"},sidebar:"usage",next:{title:"Resolver",permalink:"/docs/usage/resolver"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Commands",id:"commands",level:3},{value:"VSCode Extension",id:"vscode-extension",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Without Node.js",id:"without-nodejs",level:2},{value:"System Requirements",id:"system-requirements",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"oxlint",children:"Oxlint"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Runs 50 -100 times faster than ESLint (",(0,s.jsx)(n.a,{href:"https://github.com/oxc-project/bench-javascript-linter",children:"Benchmark"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"No configuration is required for default usage"}),"\n",(0,s.jsx)(n.li,{children:"Reports errors and useless code by default"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx oxlint@latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may also use ",(0,s.jsx)(n.code,{children:"yarn dlx"}),", ",(0,s.jsx)(n.code,{children:"pnpm dlx"}),", ",(0,s.jsx)(n.code,{children:"bunx"})," or ",(0,s.jsx)(n.code,{children:"deno run"})," because oxlint is published to ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/oxlint",children:"npm"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npx oxlint@latest --rules"})," for the list of rules."]}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npx oxlint@latest --help"})," for usage instructions:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Usage: oxlint [-A=NAME | -D=NAME]... [--fix] [PATH]...\n\nAllowing / Denying Multiple Lints\n  For example `-D correctness -A no-debugger` or `-A all -D no-debugger`.\n  The default category is "-D correctness".\n  Use "--rules" for rule names.\n  Use "--help --help" for rule categories.\n    -A, --allow=NAME          Allow the rule or category (suppress the lint)\n    -D, --deny=NAME           Deny the rule or category (emit an error)\n\nEnable Plugins\n        --import-plugin       Enable the experimental import plugin and detect ESM problems\n        --jest-plugin         Enable the Jest plugin and detect test problems\n        --jsx-a11y-plugin     Enable the JSX-a11y plugin and detect accessibility problems\n\nFix Problems\n        --fix                 Fix as many issues as possible. Only unfixed issues are reported in the\n                              output\n\nIgnore Files\n        --ignore-path=PATH    Specify the file to use as your .eslintignore\n        --ignore-pattern=PAT  Specify patterns of files to ignore (in addition to those in .eslintignore)\n        --no-ignore           Disables excluding of files from .eslintignore files, --ignore-path flags\n                              and --ignore-pattern flags\n\nHandle Warnings\n        --quiet               Disable reporting on warnings, only errors are reported\n        --max-warnings=INT    Specify a warning threshold, which can be used to force exit with an error\n                              status if there are too many warning-level rule violations in your project\n\nMiscellaneous\n        --timing              Display the execution time of each lint rule\n                              [env:TIMING: not set]\n        --rules               list all the rules that are currently registered\n        --threads=INT         Number of threads to use. Set to 1 for using only 1 CPU core\n\nCodeowners\n        --codeowners-file=PATH  Path to CODEOWNERS file\n        --codeowners=NAME     Code owner names, e.g. @Boshen\n\nAvailable positional items:\n    PATH                      Single file, single path or list of paths\n\nAvailable options:\n    -h, --help                Prints help information\n'})}),"\n",(0,s.jsx)(n.h2,{id:"vscode-extension",children:"VSCode Extension"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode",children:"https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode"})}),"\n",(0,s.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"oxlint:\n  name: Lint JS\n  runs-on: ubuntu-latest\n  steps:\n    - uses: actions/checkout@v3\n    - name: oxlint\n      run: npx --yes oxlint@latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"without-nodejs",children:"Without Node.js"}),"\n",(0,s.jsx)(n.p,{children:"You may download from the latest GitHub releases:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"https://github.com/web-infra-dev/oxc/releases/latest/download/oxlint-{system}"}),","]}),"\n",(0,s.jsxs)(n.p,{children:["For example: ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/oxc/releases/latest/download/oxlint-darwin-arm64",children:"https://github.com/web-infra-dev/oxc/releases/latest/download/oxlint-darwin-arm64"})]}),"\n",(0,s.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"oxlint"})," is built for the following systems:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"darwin-arm64"}),"\n",(0,s.jsx)(n.li,{children:"darwin-x64"}),"\n",(0,s.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,s.jsx)(n.li,{children:"linux-x64"}),"\n",(0,s.jsx)(n.li,{children:"win32-arm64.exe"}),"\n",(0,s.jsx)(n.li,{children:"win32-x64.exe"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7660:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(959);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);