import{d as r,h as _,ah as u,y as m,ai as p,x as f,j as h,o as v,c as x,k as e,a as l,p as g,m as y,_ as b}from"./framework.cac41693.js";const w=t=>(g("data-v-27faa16c"),t=t(),y(),t),B=w(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})],-1)),L=[B],a="/blog/2023-12-12-announcing-oxlint.html",E=r({__name:"Banner",setup(t){const n=_(),{height:o}=u(n);m(()=>{o.value&&document.documentElement.style.setProperty("--vp-layout-top-height",`${o.value+16}px`)});const i=()=>{document.documentElement.classList.remove("banner-dismissed")},c=()=>{document.documentElement.classList.add("banner-dismissed")},s=p(`oxc-banner-dismissed-${a}`,!1);f(s,()=>{s.value&&c()},{immediate:!0}),h(()=>{location.pathname.includes(a)?c():s.value||i()});const d=()=>{s.value=!0};return(k,S)=>(v(),x("div",{ref_key:"el",ref:n,class:"banner"},[e("div",{class:"text"},[l(" Announcing "),e("a",{href:a},"Oxlint General Availability"),l(" 🎉 ")]),e("button",{type:"button",onClick:d},L)],512))}});const C=b(E,[["__scopeId","data-v-27faa16c"]]);export{C as default};
