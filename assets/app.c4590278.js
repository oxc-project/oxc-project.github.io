import{d as A,u as y,g as f,o as n,c as o,F as B,D,k as l,_ as b,h as L,j as w,y as x,t as h,e as S,s as v,a3 as R,a4 as T,a5 as M,a6 as $,a7 as F,a8 as H,a9 as I,aa as O,ab as V,ac as j,X as N,ad as G,ae as U,af as W,ag as X}from"./chunks/framework.725e5b03.js";import{t as q}from"./chunks/theme.996dd6ef.js";import{T as z}from"./chunks/team.da12e21b.js";const J={class:"AppBadgeList"},K=["src","alt"],Q=A({__name:"AppBadgeList",setup(e){const t=y(),a=f(()=>t.frontmatter.value.badges);return(s,r)=>(n(),o("ul",J,[(n(!0),o(B,null,D(a.value,i=>(n(),o("li",{key:i.src,class:"badge"},[l("img",{src:i.src,alt:i.alt},null,8,K)]))),128))]))}});const Y=b(Q,[["__scopeId","data-v-095e1027"]]),Z={class:"AppBlogPostHeader"},ee={key:0},te=["datetime"],ae={class:"authors"},se=["src","alt"],ne={class:"author-text"},oe=["href"],re={key:1,class:"author-name"},ce={class:"author-title"},le=A({__name:"AppBlogPostHeader",setup(e){const t=y(),a=f(()=>t.frontmatter.value.title),s=f(()=>t.frontmatter.value.authors.flatMap(p=>{const c=z[p];if(c){const{avatar:u,links:d,name:_,title:g}=c,{link:k=""}=(d==null?void 0:d.find(C=>C.link.startsWith("https://github.com/")))??{};return[{avatar:u,link:k,name:_,title:g}]}return[]})),r=f(()=>{const c=t.page.value.filePath.match(/^blog\/(?<date>\d{4}-\d{2}-\d{2})-.*$/),{date:u}=(c==null?void 0:c.groups)??{};return u?new Date(u):null}),i=f(()=>{var p;return((p=r.value)==null?void 0:p.toISOString())??null}),P=L("");return w(()=>{x(()=>{r.value&&(P.value=new Intl.DateTimeFormat(t.lang.value,{dateStyle:"long"}).format(r.value))})}),(p,c)=>(n(),o("header",Z,[l("h1",null,h(a.value),1),i.value?(n(),o("p",ee,[l("time",{datetime:i.value},h(P.value),9,te)])):S("",!0),l("ul",ae,[(n(!0),o(B,null,D(s.value,({avatar:u,link:d,name:_,title:g})=>(n(),o("li",{key:_,class:"author"},[l("img",{src:u,alt:_,class:"author-avatar"},null,8,se),l("p",ne,[d?(n(),o("a",{key:0,href:d,target:"_blank",class:"author-name"},h(_),9,oe)):(n(),o("span",re,h(_),1)),l("span",ce,h(g),1)])]))),128))])]))}});const ie=b(le,[["__scopeId","data-v-1f4911dd"]]),pe={extends:q,async enhanceApp({app:e}){e.component("AppBadgeList",Y),e.component("AppBlogPostHeader",ie)}};function E(e){if(e.extends){const t=E(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const m=E(pe),ue=A({name:"VitePressApp",setup(){const{site:e}=y();return w(()=>{x(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),G(),U(),W(),m.setup&&m.setup(),()=>X(m.Layout)}});async function de(){const e=me(),t=_e();t.provide(T,e);const a=M(e.route);return t.provide($,a),t.component("Content",F),t.component("ClientOnly",H),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),m.enhanceApp&&await m.enhanceApp({app:t,router:e,siteData:I}),{app:t,router:e,data:a}}function _e(){return O(ue)}function me(){let e=v,t;return V(a=>{let s=j(a),r=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),r=N(()=>import(s),[])),v&&(e=!1),r},m.NotFound)}v&&de().then(({app:e,router:t,data:a})=>{t.go().then(()=>{R(t.route,a.site),e.mount("#app")})});export{de as createApp};
