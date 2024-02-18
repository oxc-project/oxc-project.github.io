import{l as W,U as R,p as U,h as S,W as q,aj as T,y as O,ak as K,al as Q,k as z,H as X,d as Y,z as Z,o as ee,c as te,m as A,a as j,q as ne,s as oe,_ as re}from"./framework.BWLfa7pZ.js";function I(e){return K()?(Q(e),!0):!1}function B(e){return typeof e=="function"?e():U(e)}const se=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ie=Object.prototype.toString,ae=e=>ie.call(e)==="[object Object]",ue=()=>{};function ce(e,t){function n(...r){return new Promise((a,i)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(a).catch(i)})}return n}const J=e=>e();function le(e=J){const t=S(!0);function n(){t.value=!1}function r(){t.value=!0}const a=(...i)=>{t.value&&e(...i)};return{isActive:q(t),pause:n,resume:r,eventFilter:a}}function fe(e){return e||T()}function de(e,t,n={}){const{eventFilter:r=J,...a}=n;return O(e,ce(r,t),a)}function pe(e,t,n={}){const{eventFilter:r,...a}=n,{eventFilter:i,pause:u,resume:l,isActive:w}=le(r);return{stop:de(e,t,{...a,eventFilter:i}),pause:u,resume:l,isActive:w}}function k(e,t=!0,n){fe()?W(e,n):t?e():R(e)}function y(e){var t;const n=B(e);return(t=n==null?void 0:n.$el)!=null?t:n}const _=se?window:void 0;function V(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=_):[t,n,r,a]=e,!t)return ue;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],u=()=>{i.forEach(f=>f()),i.length=0},l=(f,o,c,d)=>(f.addEventListener(o,c,d),()=>f.removeEventListener(o,c,d)),w=O(()=>[y(t),B(a)],([f,o])=>{if(u(),!f)return;const c=ae(o)?{...o}:o;i.push(...n.flatMap(d=>r.map(m=>l(f,d,m,c))))},{immediate:!0,flush:"post"}),h=()=>{w(),u()};return I(h),h}function he(){const e=S(!1);return T()&&W(()=>{e.value=!0}),e}function me(e){const t=he();return z(()=>(t.value,!!e()))}const N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__",ve=we();function we(){return C in N||(N[C]=N[C]||{}),N[C]}function be(e,t){return ve[e]||t}function ge(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},D="vueuse-storage";function Se(e,t,n,r={}){var a;const{flush:i="pre",deep:u=!0,listenToStorageChanges:l=!0,writeDefaults:w=!0,mergeDefaults:h=!1,shallow:f,window:o=_,eventFilter:c,onError:d=s=>{console.error(s)},initOnMounted:m}=r,v=(f?X:S)(typeof t=="function"?t():t);if(!n)try{n=be("getDefaultStorage",()=>{var s;return(s=_)==null?void 0:s.localStorage})()}catch(s){d(s)}if(!n)return v;const b=B(t),L=ge(b),x=(a=r.serializer)!=null?a:ye[L],{pause:H,resume:M}=pe(v,()=>P(v.value),{flush:i,deep:u,eventFilter:c});return o&&l&&k(()=>{V(o,"storage",E),V(o,D,$),m&&E()}),m||E(),v;function P(s){try{if(s==null)n.removeItem(e);else{const p=x.write(s),g=n.getItem(e);g!==p&&(n.setItem(e,p),o&&o.dispatchEvent(new CustomEvent(D,{detail:{key:e,oldValue:g,newValue:p,storageArea:n}})))}}catch(p){d(p)}}function G(s){const p=s?s.newValue:n.getItem(e);if(p==null)return w&&b!=null&&n.setItem(e,x.write(b)),b;if(!s&&h){const g=x.read(p);return typeof h=="function"?h(g,b):L==="object"&&!Array.isArray(g)?{...b,...g}:g}else return typeof p!="string"?p:x.read(p)}function $(s){E(s.detail)}function E(s){if(!(s&&s.storageArea!==n)){if(s&&s.key==null){v.value=b;return}if(!(s&&s.key!==e)){H();try{(s==null?void 0:s.newValue)!==x.write(v.value)&&(v.value=G(s))}catch(p){d(p)}finally{s?R(M):M()}}}}}function _e(e,t,n={}){const{window:r=_,...a}=n;let i;const u=me(()=>r&&"ResizeObserver"in r),l=()=>{i&&(i.disconnect(),i=void 0)},w=z(()=>Array.isArray(e)?e.map(o=>y(o)):[y(e)]),h=O(w,o=>{if(l(),u.value&&r){i=new ResizeObserver(t);for(const c of o)c&&i.observe(c,a)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{l(),h()};return I(f),{isSupported:u,stop:f}}function xe(e,t={width:0,height:0},n={}){const{window:r=_,box:a="content-box"}=n,i=z(()=>{var o,c;return(c=(o=y(e))==null?void 0:o.namespaceURI)==null?void 0:c.includes("svg")}),u=S(t.width),l=S(t.height),{stop:w}=_e(e,([o])=>{const c=a==="border-box"?o.borderBoxSize:a==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;if(r&&i.value){const d=y(e);if(d){const m=r.getComputedStyle(d);u.value=Number.parseFloat(m.width),l.value=Number.parseFloat(m.height)}}else if(c){const d=Array.isArray(c)?c:[c];u.value=d.reduce((m,{inlineSize:v})=>m+v,0),l.value=d.reduce((m,{blockSize:v})=>m+v,0)}else u.value=o.contentRect.width,l.value=o.contentRect.height},n);k(()=>{const o=y(e);o&&(u.value="offsetWidth"in o?o.offsetWidth:t.width,l.value="offsetHeight"in o?o.offsetHeight:t.height)});const h=O(()=>y(e),o=>{u.value=o?t.width:0,l.value=o?t.height:0});function f(){w(),h()}return{width:u,height:l,stop:f}}function Ae(e,t,n={}){const{window:r=_}=n;return Se(e,t,r==null?void 0:r.localStorage,n)}const Oe=e=>(ne("data-v-27faa16c"),e=e(),oe(),e),Ee=Oe(()=>A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})],-1)),Ne=[Ee],F="/blog/2023-12-12-announcing-oxlint.html",Ce=Y({__name:"Banner",setup(e){const t=S(),{height:n}=xe(t);Z(()=>{n.value&&document.documentElement.style.setProperty("--vp-layout-top-height",`${n.value+16}px`)});const r=()=>{document.documentElement.classList.remove("banner-dismissed")},a=()=>{document.documentElement.classList.add("banner-dismissed")},i=Ae(`oxc-banner-dismissed-${F}`,!1);O(i,()=>{i.value&&a()},{immediate:!0}),W(()=>{location.pathname.includes(F)?a():i.value||r()});const u=()=>{i.value=!0};return(l,w)=>(ee(),te("div",{ref_key:"el",ref:t,class:"banner"},[A("div",{class:"text"},[j(" Announcing "),A("a",{href:F},"Oxlint General Availability"),j(" 🎉 ")]),A("button",{type:"button",onClick:u},Ne)],512))}}),We=re(Ce,[["__scopeId","data-v-27faa16c"]]);export{We as default};