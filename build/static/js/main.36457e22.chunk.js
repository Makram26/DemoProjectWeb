(this["webpackJsonpou-code"]=this["webpackJsonpou-code"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),l=a(43);a(29);const c=o.a`
    body {
        margin: 0;
        background-color: rgba(0,0,10,.05);
    }
`,d=e=>{let{baseUrl:t,appName:a,apiVersion:n}=e;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(l.a,null),i.a.createElement(y,{baseUrl:t,appName:a,apiVersion:n}),i.a.createElement(b,null))};let m="";const u=async e=>await(await fetch(m+e,{method:"GET",credentials:"include",headers:{Accept:"application/json"}})).json(),p=async e=>"OK"===(await(async(e,t)=>await(await fetch(m+e,{method:"PUT",credentials:"include",body:JSON.stringify(t),headers:{Accept:"application/json","Content-type":"application/json"}})).json())("organisationUnits/"+e.id,e)).status,h=o.c.section`
    display: flex;
    margin-top: 48px;
    min-height: calc(100vh - 48px);
`,b=()=>{const[e,t]=Object(n.useState)(null),a=async e=>t(await(async e=>{const t=await u(`organisationUnits/${e}?paging=false`);if("ERROR"!==t.status)return t;console.error(t.message)})(e));return i.a.createElement(h,null,i.a.createElement(I,{onSelect:e=>a(e)}),e&&i.a.createElement(k,{orgUnit:e}))};var g=a(10),E=a(45);const f=Object(o.c)(E.a)`
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
`,y=e=>{let{baseUrl:t,appName:a,apiVersion:n}=e;return i.a.createElement(g.a,{baseUrl:t,apiVersion:n},i.a.createElement(f,{appName:a}))};var w=a(46),U=a(22);const D={INPUT:0,RESET:1,SUBMIT:2,UPDATE:3},O={DEFAULT:0,VALID:1,ERROR:2},C=(e,t)=>{switch(t.type){case D.INPUT:return{...e,code:t.code,resetDisabled:t.code===e.originalCode,submitDisabled:["",e.originalCode].includes(t.code),status:O.DEFAULT};case D.RESET:return{...e,code:e.originalCode,resetDisabled:!0,submitDisabled:!0,status:O.DEFAULT};case D.SUBMIT:return{...e,resetDisabled:!0,submitDisabled:!0,status:O.LOADING};case D.UPDATE:{const a=t.status===O.VALID;return{...e,status:t.status,originalCode:a?e.code:e.originalCode,resetDisabled:a,submitDisabled:a}}default:return e}};var N=a(44),T=a(47);const A=o.c.main`
    flex: 1;
`,R=Object(o.c)(N.a)`
    display: block !important;
    height: unset !important;
    width: unset !important;
    margin: 1rem;
    padding: 1rem;
`,j=Object(o.c)(T.a)`
    margin-top: 1rem;
`,k=e=>{let{orgUnit:t}=e;const[a,r,s,o]=(e=>{const[t,a]=Object(n.useReducer)(C,{code:e,originalCode:e,resetDisabled:!0,submitDisabled:!0,status:O.DEFAULT});return[t,a,D,O]})(t.code);return i.a.createElement(A,null,i.a.createElement(R,null,i.a.createElement("h1",null,t.name),i.a.createElement(w.a,{name:"code",label:"Code",onChange:e=>r({type:s.INPUT,code:e.target.value}),value:a.code,valid:a.status===o.VALID,error:a.status===o.ERROR,loading:a.status===o.LOADING,disabled:a.status===o.LOADING}),i.a.createElement(j,{end:!0},i.a.createElement(U.a,{onClick:()=>r({type:s.RESET}),disabled:a.resetDisabled,destructive:!0},"Reset"),i.a.createElement(U.a,{onClick:async()=>{r({type:s.SUBMIT});const e=await p({...t,code:a.code});r({type:s.UPDATE,status:e?o.VALID:o.ERROR})},disabled:a.submitDisabled,primary:!0},"Submit"))))},v=o.c.aside`
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`,S=o.c.h1`
    font-size: 2rem;
`,I=e=>{let{onSelect:t}=e;return i.a.createElement(v,null,i.a.createElement(S,null,"OU Code"),i.a.createElement($,{onSelect:t}))};var x=a(48),L=a(49),V=a(2);const P=o.c.span`
    display: inline-block;
    border-radius: 3px;
    padding: 0 5px;
    line-height: 26px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    ${e=>{let{checked:t}=e;if(t)return o.b`
                background: ${V.c.secondary600};
                color: white;
            `}}
`,B=e=>{let{id:t,selected:a,label:n,onChange:r}=e;const s=t===a;return i.a.createElement(P,{checked:s,onClick:()=>{s||r(t)}},n)},F=Object(o.c)(x.a)`
    margin-left: auto !important;
    margin-right: auto !important;
`,G=e=>{let{id:t,displayName:a,children:r,selected:s,onChange:o,initialOpen:l}=e;const[c,d]=Object(n.useState)(!!l),m=()=>d(!c);return i.a.createElement(L.a,{open:c,onOpen:m,onClose:m,component:i.a.createElement(B,{id:t,selected:s,label:a,onChange:o})},r.map(e=>i.a.createElement(G,{key:e.id,id:e.id,selected:s,displayName:e.displayName,children:e.children,onChange:o})))},$=e=>{let{onSelect:t}=e;const[a,r]=Object(n.useState)(null),[s,o]=Object(n.useState)(null);Object(n.useEffect)(()=>{(async()=>{const e=await(async()=>{const e=(await u("me?fields=organisationUnits")).organisationUnits.map(e=>e.id),t=(await u("organisationUnits?paging=false&fields=id,displayName,path,children")).organisationUnits.filter(t=>e.some(e=>t.path.includes(e))),a=t.filter(t=>e.some(e=>t.id===e));return a.forEach(e=>{const a=e=>{e.children=t.filter(t=>e.children.some(e=>e.id===t.id)),e.children.forEach(e=>a(e))};a(e)}),a})();l(e[0].id),r(e)})()},[]);const l=e=>{o(e),t(e)};return a?i.a.createElement("section",null,a.map(e=>{let{id:t,displayName:a,children:n}=e;return i.a.createElement(G,{key:t,id:t,displayName:a,children:n,selected:s,onChange:l,initialOpen:!0})})):i.a.createElement(F,null)},J=document.getElementById("root"),M=e=>{m=e+"/api"+"/",s.a.render(i.a.createElement(d,{appName:"App Name",baseUrl:e,apiVersion:31}),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})};(async()=>{try{const e=await(await fetch("./manifest.webapp")).json();M(e.activities.dhis.href)}catch(e){console.error("Could not read manifest:",e),s.a.render(i.a.createElement("code",null,"No manifest found"),J)}})()}},[[24,1,2]]]);
//# sourceMappingURL=main.36457e22.chunk.js.map