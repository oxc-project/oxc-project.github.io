"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{9984:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(1527),s=t(7660);const i={id:"biome",title:"Biome"},o=void 0,a={id:"learn/biome",title:"Biome",description:"Rome uses a different set of techniques for parsing JavaScript and TypeScript.",source:"@site/docs/learn/biome.md",sourceDirName:"learn",slug:"/learn/biome",permalink:"/docs/learn/biome",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/oxc-project.github.io/tree/main/docs/learn/biome.md",tags:[],version:"current",frontMatter:{id:"biome",title:"Biome"},sidebar:"learn",previous:{title:"Swc",permalink:"/docs/learn/swc"},next:{title:"References",permalink:"/docs/learn/references"}},l={},c=[{value:"History",id:"history",level:2},{value:"Concrete Syntax Tree",id:"concrete-syntax-tree",level:2},{value:"Grammar",id:"grammar",level:2},{value:"Entry Point",id:"entry-point",level:2},{value:"Contributing",id:"contributing",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/rome/tools",children:"Rome"})," uses a different set of techniques for parsing JavaScript and TypeScript.\nThis tutorial summarizes them in learning order for better understanding."]}),"\n",(0,n.jsx)(r.h2,{id:"history",children:"History"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The Rome codebase was rewritten from TypeScript to Rust, see ",(0,n.jsx)(r.a,{href:"https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust",children:"Rome will be rewritten in Rust"})]}),"\n",(0,n.jsxs)(r.li,{children:["The decision was made after talking to the author of ",(0,n.jsx)(r.a,{href:"https://github.com/rslint/rslint",children:"rslint"})," and ",(0,n.jsx)(r.a,{href:"https://github.com/rust-lang/rust-analyzer",children:"rust-analyzer"})]}),"\n",(0,n.jsx)(r.li,{children:"rust-analyzer proved that IDE-centric tools built around concrete syntax tree are possible"}),"\n",(0,n.jsx)(r.li,{children:"rslint proved that it is possible to write a JavaScript parser in Rust, with the same base libraries as rust-analyzer"}),"\n",(0,n.jsx)(r.li,{children:"Rome ported the rslint codebase to their own repo with permission from rslint's author"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"concrete-syntax-tree",children:"Concrete Syntax Tree"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The base library is called ",(0,n.jsx)(r.a,{href:"https://github.com/rust-analyzer/rowan",children:"rowan"}),", see ",(0,n.jsx)(r.a,{href:"https://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/syntax.md",children:"overview of rowan"})]}),"\n",(0,n.jsxs)(r.li,{children:["Rowan, also known as red-green trees, is named after the real green ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Rowan",children:"rowan tree"})," that makes red berries"]}),"\n",(0,n.jsxs)(r.li,{children:["The origin of red-green trees is described in this ",(0,n.jsx)(r.a,{href:"https://ericlippert.com/2012/06/08/red-green-trees/",children:"blog post"}),", by the authors of the C# programming language"]}),"\n",(0,n.jsx)(r.li,{children:"The whole point of rowan is to define a lossless concrete syntax tree (CST) that describes all the details of the source code and provides a set of traversal APIs (parent, children, siblings, etc)"}),"\n",(0,n.jsxs)(r.li,{children:["Read the advantage of having a CST over an AST: ",(0,n.jsx)(r.a,{href:"https://rdambrosio016.github.io/rust/2020/09/18/pure-ast-based-linting-sucks.html",children:"Pure AST based linting sucks"})]}),"\n",(0,n.jsx)(r.li,{children:"CST provides the ability to build a fully recoverable parser"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"grammar",children:"Grammar"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Just like an AST, we need to define the grammar. The grammar is auto-generated by using ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/xtask/codegen",children:"xtask/codegen"})]}),"\n",(0,n.jsxs)(r.li,{children:["The grammar is generated from the ",(0,n.jsx)(r.a,{href:"https://github.com/rust-analyzer/ungrammar",children:"ungrammar"})," DSL"]}),"\n",(0,n.jsxs)(r.li,{children:["The input ",(0,n.jsx)(r.code,{children:"ungrammar"})," source file is in ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/blob/main/xtask/codegen/js.ungram",children:"xtask/codegen/js.ungram"})]}),"\n",(0,n.jsxs)(r.li,{children:["The output of the codegen is in ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/crates/rome_js_syntax/src/generated",children:"rome_js_syntax/src/generated"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"entry-point",children:"Entry Point"}),"\n",(0,n.jsx)(r.p,{children:"The Rome codebase is getting large and slightly difficult to find the parser entry point."}),"\n",(0,n.jsxs)(r.p,{children:["For first-time contributors, the ",(0,n.jsx)(r.code,{children:"rome_cli"})," crate is the binary entry point for running the code:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cargo run -p rome_cli\n\ntouch test.js\ncargo run -p rome_cli -- check ./test.js\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rome_cli"})," will eventually call ",(0,n.jsx)(r.code,{children:"rome_js_parser::parse"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/parse.rs#L178-L187\n"})}),"\n",(0,n.jsx)(r.p,{children:"and finally the actual parsing code"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/syntax/program.rs#L14-L17\n"})}),"\n",(0,n.jsx)(r.h2,{id:"contributing",children:"Contributing"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/blob/main/CONTRIBUTING.md",children:"CONTRIBUTING.md"})," has instructions on how to contribute"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://rome.github.io/tools/rome_js_parser/index.html",children:"rome_js_parser crate doc"})," has some more details on the parser"]}),"\n",(0,n.jsxs)(r.li,{children:["See ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/xtask/codegen#cargo-codegen-test",children:(0,n.jsx)(r.code,{children:"cargo codegen test"})})," for working with parser tests"]}),"\n",(0,n.jsxs)(r.li,{children:["See ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/xtask/coverage",children:(0,n.jsx)(r.code,{children:"cargo coverage"})})," for working with conformance tests"]}),"\n",(0,n.jsxs)(r.li,{children:["Join the ",(0,n.jsx)(r.a,{href:"https://discord.com/invite/rome",children:"Discord Server"})," for inquiries"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["The JavaScript / TypeScript parser is 99% complete, the best way to help is to test Rome in your own codebases\nor take a look at the ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/issues",children:"issues on Github"}),"."]})})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7660:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(959);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);