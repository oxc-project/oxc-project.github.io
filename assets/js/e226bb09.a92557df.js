"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4955],{9218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(1527),o=n(7660);const r={id:"intro",title:"Installation"},i=void 0,l={id:"contribute/intro",title:"Installation",description:"Clone Repo",source:"@site/docs/contribute/intro.md",sourceDirName:"contribute",slug:"/contribute/intro",permalink:"/docs/contribute/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/oxc-project.github.io/tree/main/docs/contribute/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Installation"},sidebar:"contribute",next:{title:"Rules",permalink:"/docs/contribute/rules"}},c={},a=[{value:"Clone Repo",id:"clone-repo",level:2},{value:"New to Rust",id:"new-to-rust",level:2},{value:"Install Rust",id:"install-rust",level:3},{value:"Cargo Tools",id:"cargo-tools",level:3},{value:"Required tools",id:"required-tools",level:2},{value:"Commands",id:"commands",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"clone-repo",children:"Clone Repo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone --recurse-submodules git@github.com:web-infra-dev/oxc.git\ncd oxc\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"--recurse-submodules"})," flag will also clone some submodules (",(0,s.jsx)(t.a,{href:"https://github.com/tc39/test262",children:"test262"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/babel/babel",children:"babel"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/TypeScript",children:"typescript"}),")."]}),"\n",(0,s.jsx)(t.h2,{id:"new-to-rust",children:"New to Rust"}),"\n",(0,s.jsx)(t.h3,{id:"install-rust",children:"Install Rust"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nrustup show\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"rustup show"})," reads the ",(0,s.jsx)(t.code,{children:"./rust-toolchain.toml"})," file and installs the correct Rust toolchain and components for this project."]}),"\n",(0,s.jsx)(t.h3,{id:"cargo-tools",children:"Cargo Tools"}),"\n",(0,s.jsxs)(t.p,{children:["Some additional Cargo tools are required for developing this project, they can be installed via ",(0,s.jsx)(t.a,{href:"https://github.com/cargo-bins/cargo-binstall",children:(0,s.jsx)(t.code,{children:"cargo binstall"})}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo install cargo-binstall\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"cargo binstall"})," provides a low-complexity mechanism for installing rust binaries as an alternative to building from source via the slower ",(0,s.jsx)(t.code,{children:"cargo install"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also download the ",(0,s.jsx)(t.a,{href:"https://github.com/cargo-bins/cargo-binstall#installation",children:"pre-compiled binary"})," and save it in ",(0,s.jsx)(t.code,{children:"~/.cargo/bin"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"required-tools",children:"Required tools"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo binstall just -y\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/casey/just",children:(0,s.jsx)(t.code,{children:"just"})})," is a handy way to save and run project-specific commands.\nTo initialize all the required tools, run"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"just init\n"})}),"\n",(0,s.jsx)(t.h2,{id:"commands",children:"Commands"}),"\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"just"})," for the list of available commands."]}),"\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"just r"})," (alias for ",(0,s.jsx)(t.code,{children:"just ready"}),") to make sure the whole project builds and runs correctly."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7660:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(959);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);