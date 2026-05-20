const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-DB1akAW7.js","./vendor-lucide-CeTbX5Qt.js","./vendor-react-oYV170lA.js","./web-Bxyqi430.js","./updateGameState-DONqS5SW.js"])))=>i.map(i=>d[i]);
import{r as Ep,g as Ip,R as ms,a as D,b as Kd,C as ys,P as Qi,c as Tt,A as Gd,S as Ra,d as hc,e as vo,W as ni,f as Jd,h as vs,T as fc,V as Tp,i as Ap,Z as Sp,j as Yd,k as zs,U as Ql,I as Ca,l as Qd,L as Np,m as Xd,n as mc,B as Rp,o as Xl,p as Cp,q as Pp,s as jp,t as ko,M as Dp,u as Op,v as pc,F as Vp,D as Lp,w as Mp,x as gc,y as xo,z as Zd,X as Hn,E as Pa,G as Zl,H as eu,J as tu,K as Up,N as Fi,O as nu,Q as Fp,Y as zp,_ as $p,$ as Bp,a0 as Hp,a1 as Wp,a2 as qp,a3 as Kp,a4 as Gp}from"./vendor-lucide-CeTbX5Qt.js";import{r as Jp}from"./vendor-react-oYV170lA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var aa={exports:{}},yr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function Yp(){if(su)return yr;su=1;var n=Ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(l,d,h){var m,p={},v=null,T=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(T=d.ref);for(m in d)s.call(d,m)&&!i.hasOwnProperty(m)&&(p[m]=d[m]);if(l&&l.defaultProps)for(m in d=l.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:l,key:v,ref:T,props:p,_owner:r.current}}return yr.Fragment=t,yr.jsx=c,yr.jsxs=c,yr}var ru;function Qp(){return ru||(ru=1,aa.exports=Yp()),aa.exports}var a=Qp(),Ai={},iu;function Xp(){if(iu)return Ai;iu=1;var n=Jp();return Ai.createRoot=n.createRoot,Ai.hydrateRoot=n.hydrateRoot,Ai}var Zp=Xp();const eg=Ip(Zp),tg="modulepreload",ng=function(n,e){return new URL(n,e).href},ou={},Bt=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));r=c(t.map(m=>{if(m=ng(m,s),m in ou)return;ou[m]=!0;const p=m.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(!!s)for(let P=l.length-1;P>=0;P--){const S=l[P];if(S.href===m&&(!p||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${v}`))return;const A=document.createElement("link");if(A.rel=p?"stylesheet":tg,p||(A.as="script"),A.crossOrigin="",A.href=m,h&&A.setAttribute("nonce",h),document.head.appendChild(A),p)return new Promise((P,S)=>{A.addEventListener("load",P),A.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const sg=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},s=(i,c)=>{t.platforms.set(i,c)},r=i=>{t.platforms.has(i)&&(t.currentPlatform=t.platforms.get(i))};return t.addPlatform=s,t.setPlatform=r,t},rg=n=>n.CapacitorPlatforms=sg(n),eh=rg(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});eh.addPlatform;eh.setPlatform;var $s;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})($s||($s={}));class ca extends Error{constructor(e,t,s){super(e),this.message=e,this.code=t,this.data=s}}const ig=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},og=n=>{var e,t,s,r,i;const c=n.CapacitorCustomPlatform||null,l=n.Capacitor||{},d=l.Plugins=l.Plugins||{},h=n.CapacitorPlatforms,m=()=>c!==null?c.name:ig(n),p=((e=h==null?void 0:h.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||m,v=()=>p()!=="web",T=((t=h==null?void 0:h.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||v,A=w=>{const y=j.get(w);return!!(y!=null&&y.platforms.has(p())||$(w))},P=((s=h==null?void 0:h.currentPlatform)===null||s===void 0?void 0:s.isPluginAvailable)||A,S=w=>{var y;return(y=l.PluginHeaders)===null||y===void 0?void 0:y.find(_=>_.name===w)},$=((r=h==null?void 0:h.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||S,R=w=>n.console.error(w),V=(w,y,_)=>Promise.reject(`${_} does not have an implementation of "${y}".`),j=new Map,H=(w,y={})=>{const _=j.get(w);if(_)return console.warn(`Capacitor plugin "${w}" already registered. Cannot register plugins twice.`),_.proxy;const k=p(),x=$(w);let E;const b=async()=>(!E&&k in y?E=typeof y[k]=="function"?E=await y[k]():E=y[k]:c!==null&&!E&&"web"in y&&(E=typeof y.web=="function"?E=await y.web():E=y.web),E),oe=(me,Ie)=>{var Q,ae;if(x){const je=x==null?void 0:x.methods.find(Be=>Ie===Be.name);if(je)return je.rtype==="promise"?Be=>l.nativePromise(w,Ie.toString(),Be):(Be,Me)=>l.nativeCallback(w,Ie.toString(),Be,Me);if(me)return(Q=me[Ie])===null||Q===void 0?void 0:Q.bind(me)}else{if(me)return(ae=me[Ie])===null||ae===void 0?void 0:ae.bind(me);throw new ca(`"${w}" plugin is not implemented on ${k}`,$s.Unimplemented)}},ve=me=>{let Ie;const Q=(...ae)=>{const je=b().then(Be=>{const Me=oe(Be,me);if(Me){const Dt=Me(...ae);return Ie=Dt==null?void 0:Dt.remove,Dt}else throw new ca(`"${w}.${me}()" is not implemented on ${k}`,$s.Unimplemented)});return me==="addListener"&&(je.remove=async()=>Ie()),je};return Q.toString=()=>`${me.toString()}() { [capacitor code] }`,Object.defineProperty(Q,"name",{value:me,writable:!1,configurable:!1}),Q},it=ve("addListener"),bt=ve("removeListener"),kt=(me,Ie)=>{const Q=it({eventName:me},Ie),ae=async()=>{const Be=await Q;bt({eventName:me,callbackId:Be},Ie)},je=new Promise(Be=>Q.then(()=>Be({remove:ae})));return je.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await ae()},je},ne=new Proxy({},{get(me,Ie){switch(Ie){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?kt:it;case"removeListener":return bt;default:return ve(Ie)}}});return d[w]=ne,j.set(w,{name:w,proxy:ne,platforms:new Set([...Object.keys(y),...x?[k]:[]])}),ne},q=((i=h==null?void 0:h.currentPlatform)===null||i===void 0?void 0:i.registerPlugin)||H;return l.convertFileSrc||(l.convertFileSrc=w=>w),l.getPlatform=p,l.handleError=R,l.isNativePlatform=T,l.isPluginAvailable=P,l.pluginMethodNoop=V,l.registerPlugin=q,l.Exception=ca,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},ag=n=>n.Capacitor=og(n),Mr=ag(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),wo=Mr.registerPlugin;Mr.Plugins;class th{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(t);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(e);const c=async()=>this.removeListener(e,t);return Promise.resolve({remove:c})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,s){const r=this.listeners[e];if(!r){if(s){let i=this.retainedEventArguments[e];i||(i=[]),i.push(t),this.retainedEventArguments[e]=i}return}r.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:s=>{this.notifyListeners(t,s)}}}unimplemented(e="not implemented"){return new Mr.Exception(e,$s.Unimplemented)}unavailable(e="not available"){return new Mr.Exception(e,$s.Unavailable)}async removeListener(e,t){const s=this.listeners[e];if(!s)return;const r=s.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(s=>{this.notifyListeners(e,s)}))}}const au=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),cu=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class cg extends th{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[r,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=cu(r).trim(),i=cu(i).trim(),t[r]=i}),t}async setCookie(e){try{const t=au(e.key),s=au(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),c=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${s||""}${r}; path=${i}; ${c};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}wo("CapacitorCookies",{web:()=>new cg});const lg=async n=>new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{const r=s.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>t(r),s.readAsDataURL(n)}),ug=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(r=>r.toLocaleLowerCase()).reduce((r,i,c)=>(r[i]=n[e[c]],r),{})},dg=(n,e=!0)=>n?Object.entries(n).reduce((s,r)=>{const[i,c]=r;let l,d;return Array.isArray(c)?(d="",c.forEach(h=>{l=e?encodeURIComponent(h):h,d+=`${i}=${l}&`}),d.slice(0,-1)):(l=e?encodeURIComponent(c):c,d=`${i}=${l}`),`${s}&${d}`},"").substr(1):null,hg=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),r=ug(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(r.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[c,l]of Object.entries(n.data||{}))i.set(c,l);t.body=i.toString()}else if(r.includes("multipart/form-data")||n.data instanceof FormData){const i=new FormData;if(n.data instanceof FormData)n.data.forEach((l,d)=>{i.append(d,l)});else for(const l of Object.keys(n.data))i.append(l,n.data[l]);t.body=i;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(r.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class fg extends th{async request(e){const t=hg(e,e.webFetchExtra),s=dg(e.params,e.shouldEncodeUrlParams),r=s?`${e.url}?${s}`:e.url,i=await fetch(r,t),c=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?e:{};c.includes("application/json")&&(l="json");let d,h;switch(l){case"arraybuffer":case"blob":h=await i.blob(),d=await lg(h);break;case"json":d=await i.json();break;case"document":case"text":default:d=await i.text()}const m={};return i.headers.forEach((p,v)=>{m[v]=p}),{data:d,headers:m,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}wo("CapacitorHttp",{web:()=>new fg});var ja;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE"})(ja||(ja={}));var lu;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(lu||(lu={}));const mg=wo("Filesystem",{web:()=>Bt(()=>import("./web-DB1akAW7.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>new n.FilesystemWeb)}),uu=wo("Share",{web:()=>Bt(()=>import("./web-Bxyqi430.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(n=>new n.ShareWeb)});function pg({tournament:n,totals:e,highlightPlayer:t,pendingPreview:s=0,target:r,displayMode:i="delta",onToggleMode:c,hideModeToolbar:l=!1,hideModeToggle:d=!1,compactObserver:h=!1}){if(!n||!Array.isArray(n.players))return null;const{players:m,rounds:p}=n,v=D.useRef(null);D.useEffect(()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)},[p.length]);const T=Math.max(p.length,(n.currentRound??0)+1),A=D.useMemo(()=>{const P=Array.from({length:T},()=>new Array(m.length).fill(null)),S=new Array(m.length).fill(0),$=new Array(m.length).fill(!1);for(let R=0;R<p.length;R++)for(let V=0;V<m.length;V++){const j=p[R][V];typeof j=="number"?(S[V]+=j,$[V]=!0,P[R][V]=S[V]):j==="dash"?P[R][V]=S[V]:P[R][V]=null}return P},[p,T,m.length]);return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[c&&!l&&a.jsxs("div",{className:`flex items-center justify-between border-b border-amber-900/30 bg-stone-950/60 ${h?"px-3 py-1":"px-3 py-1.5"}`,children:[a.jsx("div",{className:`ks-display ks-gold text-center flex-1 ${h?"text-xs":"text-sm"}`,children:"POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE"}),!d&&a.jsxs("button",{onClick:c,className:"ks-press ks-mono ks-gold flex items-center gap-1 rounded-sm hover:bg-amber-900/20 text-[10px] px-2 py-0.5",children:[a.jsx(Kd,{size:10}),i==="delta"?"Σ":"Δ"]})]}),a.jsx("div",{className:"overflow-x-auto ks-live-table-wrap",children:a.jsxs("table",{className:"border-collapse ks-live-table",children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:36}}),m.map((P,S)=>a.jsx("col",{style:{width:`${100/(m.length+.15)}%`,minWidth:`${Math.max(72,300/Math.max(m.length,1))}px`}},S))]}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-amber-900/40",children:[a.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-3 px-2 text-center sticky left-0 backdrop-blur",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),m.map((P,S)=>a.jsx("th",{className:`ks-display py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis ${S===t?"ks-gold":"ks-cream"}`,children:P},S))]})}),a.jsx("tbody",{ref:v,children:Array.from({length:T}).map((P,S)=>a.jsxs("tr",{className:"border-b border-amber-900/15 ks-live-row",children:[a.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:S+1}),m.map(($,R)=>{var w,y;const V=(w=p[S])==null?void 0:w[R],j=(y=A[S])==null?void 0:y[R],H=i==="cumulative"?j:V,q=R===t&&S===n.currentRound;return a.jsxs("td",{className:`text-center py-1.5 px-1 ks-display text-base align-middle ${q?"bg-amber-900/20":""}`,children:[V==="dash"&&i!=="cumulative"&&a.jsx("span",{className:"ks-muted",children:"—"}),typeof H=="number"&&a.jsx("span",{className:`font-medium ${H<0?"text-red-300":"ks-cream"}`,children:H.toLocaleString("sk-SK")}),H==null&&(q&&s>0?a.jsxs("span",{className:"ks-gold italic opacity-70",children:["+",s]}):null)]},R)})]},S))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"border-t-2 border-amber-700/50",children:[a.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"Σ"}),e.map((P,S)=>{const $=r&&P>=r;return a.jsx("td",{className:`text-center py-2 px-2 ks-display text-lg font-bold ${P<0?"text-red-300":$||S===t?"ks-gold":"ks-cream"}`,children:P.toLocaleString("sk-SK")},S)})]})})]})})]})}const Da=ms.memo(pg),Yt=["#d4b86a","#e07070","#7eb8e0","#7ede9a","#e0a870","#b07ee0","#e0d870","#70e0d4"];function gg({tournament:n,totals:e,target:t}){if(!n||!Array.isArray(n.players))return null;const{players:s,rounds:r}=n,[i,c]=D.useState(null),l=D.useMemo(()=>{const k=[],x=s.map(()=>0);return k.push({kolo:0,...s.reduce((E,b,oe)=>({...E,[`p${oe}`]:0}),{})}),r.forEach((E,b)=>{E.forEach((ve,it)=>{typeof ve=="number"&&(x[it]+=ve)});const oe={kolo:b+1};s.forEach((ve,it)=>{oe[`p${it}`]=x[it]}),k.push(oe)}),k},[s,r]),d=s.map((k,x)=>({name:k,total:e[x],i:x,color:Yt[x%Yt.length]})).sort((k,x)=>x.total-k.total),h=600,m=260,p=48,v=16,T=20,A=28,P=h-p-v,S=m-T-A,$=Math.max(t,...e)+200,R=Math.min(0,...e)-100,V=$-R,j=l.length-1||1,H=k=>p+k/j*P,q=k=>T+S-(k-R)/V*S,w=D.useMemo(()=>{const k=Math.pow(10,Math.floor(Math.log10(V/4))),x=[1,2,5,10].map(b=>b*k).find(b=>V/b<=8)||k,E=[];for(let b=Math.ceil(R/x)*x;b<=$;b+=x)E.push(b);return E},[R,$,V]),y=k=>k>=1e3?`${(k/1e3).toFixed(k%1e3===0?0:1)}k`:k<-999?`-${(Math.abs(k)/1e3).toFixed(1)}k`:String(k),_=D.useCallback(k=>{const x=k.currentTarget.getBoundingClientRect(),E=(k.clientX-x.left)*(h/x.width)-p,b=Math.round(E/P*j);b>=0&&b<l.length&&c({idx:b})},[l,j]);return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:d.map((k,x)=>a.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:k.color}}),a.jsxs("div",{className:"ks-display ks-cream text-sm font-semibold truncate flex-1",children:[x===0&&k.total>0&&a.jsx(ys,{size:11,className:"ks-gold inline mr-1 -mt-0.5"}),k.name]}),a.jsx("div",{className:`ks-display text-sm font-bold ${k.total<0?"ks-text-accent":"ks-gold"}`,children:k.total.toLocaleString("sk-SK")})]},k.i))}),a.jsxs("div",{className:"ks-card rounded-sm p-3",children:[a.jsxs("svg",{viewBox:`0 0 ${h} ${m}`,style:{width:"100%",height:280,overflow:"visible"},onMouseMove:_,onMouseLeave:()=>c(null),children:[w.map(k=>a.jsxs("g",{children:[a.jsx("line",{x1:p,x2:p+P,y1:q(k),y2:q(k),stroke:"rgba(201,168,92,0.12)",strokeDasharray:"2 4"}),a.jsx("text",{x:p-4,y:q(k)+4,textAnchor:"end",fontSize:9,fill:"#a89679",children:y(k)})]},k)),l.map((k,x)=>a.jsx("text",{x:H(x),y:T+S+14,textAnchor:"middle",fontSize:9,fill:"#a89679",children:k.kolo},x)),a.jsx("text",{x:p+P/2,y:m-2,textAnchor:"middle",fontSize:9,fill:"#a89679",children:"Kolo"}),R<0&&$>0&&a.jsx("line",{x1:p,x2:p+P,y1:q(0),y2:q(0),stroke:"rgba(201,168,92,0.2)"}),a.jsx("line",{x1:p,x2:p+P,y1:q(t),y2:q(t),stroke:"#d4b86a",strokeDasharray:"4 4",strokeWidth:1.5}),a.jsxs("text",{x:p+P-4,y:q(t)-5,textAnchor:"end",fontSize:9,fill:"#d4b86a",children:["Cieľ ",t.toLocaleString("sk-SK")]}),s.map((k,x)=>{const E=l.map((b,oe)=>`${H(oe)},${q(b[`p${x}`])}`).join(" ");return a.jsxs("g",{children:[a.jsx("polyline",{points:E,fill:"none",stroke:Yt[x%Yt.length],strokeWidth:2,strokeLinejoin:"round"}),l.map((b,oe)=>a.jsx("circle",{cx:H(oe),cy:q(b[`p${x}`]),r:2.5,fill:Yt[x%Yt.length]},oe))]},x)}),i&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:H(i.idx),x2:H(i.idx),y1:T,y2:T+S,stroke:"rgba(212,184,106,0.3)",strokeWidth:1}),s.map((k,x)=>a.jsx("circle",{cx:H(i.idx),cy:q(l[i.idx][`p${x}`]),r:5,fill:Yt[x%Yt.length],stroke:"#0e0c0a",strokeWidth:2},x))]})]}),i&&l[i.idx]&&(()=>{const k=l[i.idx],x=s.map((E,b)=>({name:E,val:k[`p${b}`],color:Yt[b%Yt.length]})).sort((E,b)=>b.val-E.val);return a.jsxs("div",{className:"ks-card rounded-sm p-2.5 mt-2",style:{background:"rgba(20,16,12,0.97)",maxWidth:200},children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:["KOLO ",k.kolo]}),a.jsx("div",{className:"space-y-0.5",children:x.map((E,b)=>a.jsxs("div",{className:"flex items-center gap-2 text-xs ks-body",children:[a.jsx("span",{style:{width:10,height:2,background:E.color,display:"inline-block"}}),a.jsx("span",{className:"ks-cream flex-1",children:E.name}),a.jsx("span",{className:"ks-display ks-gold font-semibold",children:E.val.toLocaleString("sk-SK")})]},b))})]})})()]}),l.length<=1&&a.jsx("div",{className:"ks-muted text-xs italic text-center",children:"Graf sa naplní po prvom kole."})]})}function yg({children:n,onClick:e,disabled:t,className:s="",icon:r,variant:i="gold"}){const c="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return a.jsxs("button",{onClick:e,disabled:t,className:`${c} ${l[i]} ${s}`,children:[r&&a.jsx(r,{size:18,strokeWidth:2}),n]})}function Oa(){return a.jsxs("div",{className:"flex items-center justify-center gap-3 my-3",children:[a.jsx("div",{className:"ks-divider flex-1"}),a.jsx("div",{className:"ks-gold text-xs",children:"✦"}),a.jsx("div",{className:"ks-divider flex-1"})]})}const du=n=>{let e;const t=new Set,s=(h,m)=>{const p=typeof h=="function"?h(e):h;if(!Object.is(p,e)){const v=e;e=m??(typeof p!="object"||p===null)?p:Object.assign({},e,p),t.forEach(T=>T(e,v))}},r=()=>e,l={setState:s,getState:r,getInitialState:()=>d,subscribe:h=>(t.add(h),()=>t.delete(h))},d=e=n(s,r,l);return l},bg=(n=>n?du(n):du),_g=n=>n;function vg(n,e=_g){const t=ms.useSyncExternalStore(n.subscribe,ms.useCallback(()=>e(n.getState()),[n,e]),ms.useCallback(()=>e(n.getInitialState()),[n,e]));return ms.useDebugValue(t),t}const kg=n=>{const e=bg(n),t=s=>vg(e,s);return Object.assign(t,e),t},xg=(n=>kg);function wg(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var i;const c=d=>d===null?null:JSON.parse(d,void 0),l=(i=t.getItem(r))!=null?i:null;return l instanceof Promise?l.then(c):c(l)},setItem:(r,i)=>t.setItem(r,JSON.stringify(i,void 0)),removeItem:r=>t.removeItem(r)}}const Va=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(s){return Va(s)(t)},catch(s){return this}}}catch(t){return{then(s){return this},catch(s){return Va(s)(t)}}}},Eg=(n,e)=>(t,s,r)=>{let i={storage:wg(()=>window.localStorage),partialize:S=>S,version:0,merge:(S,$)=>({...$,...S}),...e},c=!1,l=0;const d=new Set,h=new Set;let m=i.storage;if(!m)return n((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...S)},s,r);const p=()=>{const S=i.partialize({...s()});return m.setItem(i.name,{state:S,version:i.version})},v=r.setState;r.setState=(S,$)=>(v(S,$),p());const T=n((...S)=>(t(...S),p()),s,r);r.getInitialState=()=>T;let A;const P=()=>{var S,$;if(!m)return;const R=++l;c=!1,d.forEach(j=>{var H;return j((H=s())!=null?H:T)});const V=(($=i.onRehydrateStorage)==null?void 0:$.call(i,(S=s())!=null?S:T))||void 0;return Va(m.getItem.bind(m))(i.name).then(j=>{if(j)if(typeof j.version=="number"&&j.version!==i.version){if(i.migrate){const H=i.migrate(j.state,j.version);return H instanceof Promise?H.then(q=>[!0,q]):[!0,H]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,j.state];return[!1,void 0]}).then(j=>{var H;if(R!==l)return;const[q,w]=j;if(A=i.merge(w,(H=s())!=null?H:T),t(A,!0),q)return p()}).then(()=>{R===l&&(V==null||V(s(),void 0),A=s(),c=!0,h.forEach(j=>j(A)))}).catch(j=>{R===l&&(V==null||V(void 0,j))})};return r.persist={setOptions:S=>{i={...i,...S},S.storage&&(m=S.storage)},clearStorage:()=>{m==null||m.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>P(),hasHydrated:()=>c,onHydrate:S=>(d.add(S),()=>{d.delete(S)}),onFinishHydration:S=>(h.add(S),()=>{h.delete(S)})},i.skipHydration||P(),A||T},Ig=Eg,Ur=xg()(Ig(n=>({roomId:null,uid:null,isRecorder:!1,roomState:null,status:"offline",setRoomId:e=>n({roomId:e}),setUid:e=>n({uid:e}),setIsRecorder:e=>n({isRecorder:e}),setRoomState:e=>n({roomState:e,status:"connected"}),setStatus:e=>n({status:e}),reset:()=>n({roomId:null,uid:null,isRecorder:!1,roomState:null,status:"offline"})}),{name:"ks-online",partialize:n=>({roomId:n.roomId,uid:n.uid,isRecorder:n.isRecorder})}));function Tg({onClick:n}){const e=Ur(c=>c.status),t={connected:{Icon:ni,color:"text-green-400",label:"Online"},error:{Icon:vo,color:"text-red-400",label:"Chyba"}},{Icon:s,color:r,label:i}=t[e]||{Icon:Jd,color:"ks-muted",label:"Offline"};return a.jsxs("button",{onClick:n,className:"inline-flex items-center gap-1.5 border ks-border-sub rounded-sm px-2 py-1 mt-2 ks-press",children:[a.jsx(s,{size:12,className:r}),a.jsx("span",{className:`ks-mono text-xs ${r}`,children:i})]})}function Ag({onNew:n,onArchive:e,onrules:t,onSettings:s,onResume:r,onOnline:i,active:c,tournamentCount:l}){return a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsxs("div",{className:"px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade",children:[a.jsx("div",{className:"ks-gold text-xs ks-mono mb-2",children:"★ ZALOŽENÉ 2026 by Marcel ★"}),a.jsxs("h1",{className:"ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none",children:["Kocky",a.jsx("br",{}),a.jsx("span",{className:"italic font-medium",children:"sveta"})]}),a.jsx(Oa,{}),a.jsx(Tg,{onClick:i})]}),a.jsxs("div",{className:"flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1",children:[r&&a.jsxs("button",{onClick:r,className:"ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4",style:{borderLeftColor:"#d4b86a"},children:[a.jsx(Qi,{className:"ks-gold",size:24}),a.jsxs("div",{className:"text-left flex-1",children:[a.jsx("div",{className:"ks-mono ks-gold text-sm",children:"POKRAČOVAŤ V TURNAJI"}),a.jsxs("div",{className:"ks-body ks-cream text-sm opacity-80",children:[c.players.length," hráčov · do ",(c.targetScore||1e4).toLocaleString("sk-SK")," · kolo ",c.currentRound+1]})]}),a.jsx(Tt,{className:"ks-gold",size:20})]}),a.jsx(Si,{icon:Qi,title:"Nový turnaj",subtitle:c?"Najprv ukonči prebiehajúci turnaj":"Začať novú hru až pre šesť hráčov",onClick:n,primary:!0,disabled:!!c}),a.jsx(Si,{icon:Gd,title:"Archív turnajov",subtitle:`${l||0} uložených turnajov`,onClick:e}),a.jsx(Si,{icon:Ra,title:"Pravidlá hry",subtitle:"Bodovanie a kombinácie kociek",onClick:t}),a.jsx(Si,{icon:hc,title:"Nastavenia",subtitle:"Pravidlá, export, editácia archívu",onClick:s})]}),a.jsxs("div",{className:"text-center ks-muted text-xs pb-6 ks-mono",children:[a.jsx(Oa,{}),"KOCKY · SVETA · KOCKY"]})]})}function Si({icon:n,title:e,subtitle:t,onClick:s,primary:r,disabled:i}){return a.jsxs("button",{onClick:s,disabled:i,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${r?"border-amber-700/40":""} ${i?"opacity-40 cursor-not-allowed":""}`,children:[a.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center ${r?"ks-gold-bg":"border ks-border-sub"}`,children:a.jsx(n,{size:22,className:r?"":"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-sm",children:t})]}),a.jsx(Tt,{className:"ks-muted",size:20})]})}function nh({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(vs,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}const Sg=[{value:5e3,label:"Krátka hra",sub:"do 5 000 bodov"},{value:1e4,label:"Klasická hra",sub:"do 10 000 bodov"}];function Ng({onBack:n,onStart:e}){const[t,s]=D.useState(3),[r,i]=D.useState(1e4),[c,l]=D.useState(["","","","","",""]),d=(m,p)=>l(v=>v.map((T,A)=>A===m?p:T));function h(){const m=c.slice(0,t).map((p,v)=>p.trim()||`Hráč ${v+1}`);e(m,r)}return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(nh,{title:"Nový turnaj",onBack:n}),a.jsxs("div",{className:"p-5 max-w-md mx-auto space-y-6",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 flex items-center gap-2",children:[a.jsx(fc,{size:12})," CIEĽ HRY"]}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:Sg.map(m=>a.jsxs("button",{onClick:()=>i(m.value),className:`ks-press py-3 px-3 rounded-sm text-left ${r===m.value?"ks-gold-bg":"ks-card ks-cream"}`,children:[a.jsx("div",{className:"ks-display text-2xl font-semibold leading-tight",children:m.value.toLocaleString("sk-SK")}),a.jsx("div",{className:`text-xs ${r===m.value?"opacity-80":"ks-muted"}`,children:m.label})]},m.value))})]}),a.jsx(Oa,{}),a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"POČET HRÁČOV"}),a.jsx("div",{className:"grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(m=>a.jsx("button",{onClick:()=>s(m),className:`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${t===m?"ks-gold-bg":"ks-card ks-cream"}`,children:m},m))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"MENÁ HRÁČOV"}),a.jsx("div",{className:"space-y-2",children:Array.from({length:t}).map((m,p)=>a.jsxs("div",{className:"ks-card flex items-center gap-3 p-2 rounded-sm",children:[a.jsx("div",{className:"w-9 h-9 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-semibold",children:p+1}),a.jsx("input",{value:c[p],onChange:v=>d(p,v.target.value),placeholder:`Hráč ${p+1}`,maxLength:18,className:"flex-1 bg-transparent ks-cream ks-body text-lg outline-none placeholder:text-stone-600"})]},p))})]}),a.jsx(yg,{onClick:h,icon:Qi,className:"w-full text-lg",children:"Začať turnaj"})]})]})}const hu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cpath d='M80 20 L93 45 L120 38 L122 65 L148 74 L136 98 L152 118 L126 122 L122 148 L95 138 L80 158 L65 138 L38 148 L34 122 L8 118 L24 98 L12 74 L38 65 L40 38 L67 45 Z' fill='rgba(110%2C55%2C170%2C0.28)'/%3E%3Cpath d='M87 48 L65 87 L82 87 L72 113 L103 72 L86 72 Z' fill='rgba(185%2C135%2C255%2C0.48)'/%3E%3C/svg%3E") repeat`,fu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ccircle cx='80' cy='66' r='48' fill='rgba(205%2C232%2C255%2C0.30)'/%3E%3Ccircle cx='63' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Ccircle cx='97' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Cline x1='50' y1='48' x2='72' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cline x1='110' y1='48' x2='88' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M75 82 L80 74 L85 82Z' fill='rgba(10%2C52%2C130%2C0.45)'/%3E%3Crect x='52' y='102' width='56' height='20' rx='6' fill='rgba(205%2C232%2C255%2C0.22)'/%3E%3Crect x='59' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='75' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='91' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3C/svg%3E") repeat`,Rg=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg stroke='rgba(100%2C62%2C12%2C0.28)' fill='none' stroke-width='2.5'%3E%3Cpolygon points='100 18 145 95 55 95'/%3E%3Ccircle cx='100' cy='68' r='27'/%3E%3Cline x1='100' y1='18' x2='100' y2='95'/%3E%3C/g%3E%3Cpath d='M164 30 L153 54 L163 54 L150 80' stroke='rgba(100%2C62%2C12%2C0.22)' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M35 152 L38 141 L41 152 L52 155 L41 158 L38 169 L35 158 L24 155Z' fill='rgba(100%2C62%2C12%2C0.20)'/%3E%3Ccircle cx='172' cy='164' r='3.5' fill='rgba(100%2C62%2C12%2C0.16)'/%3E%3Ccircle cx='20' cy='128' r='2.5' fill='rgba(100%2C62%2C12%2C0.13)'/%3E%3C/svg%3E") repeat`,Cg={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},caveatbrush:{id:"caveatbrush",name:"Caveat Brush",stack:"'Caveat Brush', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}},La={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}},brawlstars:{id:"brawlstars",name:"Brawl Stars",bg:`${hu}, radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)`,vars:{"--ks-bg-main":`${hu}, #1a0830`,"--ks-bg-soft":"rgba(52,18,80,0.92)","--ks-bg-soft-2":"rgba(28,10,45,0.96)","--ks-card-sub":"rgba(40,14,62,0.74)","--ks-border":"rgba(200,80,220,0.28)","--ks-border-strong":"rgba(230,120,255,0.62)","--ks-text":"#f8e8ff","--ks-text-muted":"#c0a0d8","--ks-accent":"#e070d0","--ks-accent-2":"#8030b0","--ks-button-text":"#280a3a","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(20,6,34,0.97)","--ks-sticky-bg2":"rgba(14,4,24,0.98)"}},brawlblue:{id:"brawlblue",name:"Brawl Blue",bg:`${fu}, radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)`,vars:{"--ks-bg-main":`${fu}, #061e54`,"--ks-bg-soft":"rgba(10,48,110,0.92)","--ks-bg-soft-2":"rgba(6,26,65,0.96)","--ks-card-sub":"rgba(8,36,88,0.74)","--ks-border":"rgba(40,180,240,0.28)","--ks-border-strong":"rgba(80,210,255,0.62)","--ks-text":"#e8f4ff","--ks-text-muted":"#90b8d8","--ks-accent":"#40d8f0","--ks-accent-2":"#2878c8","--ks-button-text":"#030e28","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(4,14,44,0.97)","--ks-sticky-bg2":"rgba(3,10,32,0.98)"}},harrypotter:{id:"harrypotter",name:"Harry Potter",bg:`${Rg}, radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg, #f8ecd4 0%, #efe0b8 40%, #e8d6a4 70%, #f2e8c8 100%)`,vars:{"--ks-bg-main":"#f0e2c0","--ks-bg-soft":"rgba(252,244,226,0.97)","--ks-bg-soft-2":"rgba(248,238,215,1.0)","--ks-card-sub":"rgba(244,232,206,0.98)","--ks-border":"rgba(140,88,18,0.30)","--ks-border-strong":"rgba(160,100,20,0.62)","--ks-text":"#271608","--ks-text-muted":"#7a5030","--ks-accent":"#8b5814","--ks-accent-2":"#740001","--ks-button-text":"#f8f0de","--ks-danger":"#aa2020","--ks-sticky-bg":"rgba(244,232,202,0.97)","--ks-sticky-bg2":"rgba(238,224,192,0.98)"}}};function sh({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(vs,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function Pg({selectedSkin:n,onSkinChange:e}){const t=Object.values(La);return a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t.map(s=>{const r=s.id===n,i=s.vars["--ks-accent"],c=s.vars["--ks-accent-2"],l=s.vars["--ks-bg-main"],d=s.vars["--ks-bg-soft"],h=s.vars["--ks-text"];return a.jsxs("button",{onClick:()=>e(s.id),className:"ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110 relative",style:{minHeight:"120px",background:l,borderColor:r?i:"rgba(255,255,255,0.12)"},children:[r&&a.jsx("div",{className:"absolute top-3 right-3 ks-mono font-bold text-[13px] tracking-wider",style:{color:i},children:"✦ AKTÍVNY"}),a.jsx("div",{className:"flex items-start w-full",children:a.jsx("div",{className:"ks-display text-base font-semibold leading-tight",style:{color:h},children:s.name})}),a.jsxs("div",{className:"mt-auto w-full grid items-end",style:{gridTemplateColumns:"1fr auto",columnGap:"12px",rowGap:"4px"},children:[a.jsx("div",{className:"rounded-[4px] shrink-0",style:{width:38,height:38,background:i,gridColumn:"2",gridRow:"1 / 3"}}),a.jsxs("div",{className:"flex items-center gap-1.5 w-full",children:[a.jsx("div",{className:"rounded-[3px] border border-white/10 flex-1",style:{height:15,background:d}}),a.jsx("div",{className:"rounded-[3px] flex-1",style:{height:15,background:c}})]})]})]},s.id)})})}function jg({selectedFont:n,onFontChange:e}){const t=Object.values(Cg);return a.jsx("div",{className:"grid grid-cols-2 gap-3",children:t.map(s=>{const r=s.id===n;return a.jsxs("button",{onClick:()=>e(s.id),className:`ks-press rounded-sm p-3 border-2 transition-all flex flex-col items-center text-center ks-card ${r?"ks-card-prom ks-border-accent":"ks-border-sub hover:shadow-md"}`,children:[r&&a.jsx("div",{className:"ks-mono ks-gold text-[9px] tracking-[0.18em] mb-1",children:"✦ AKTÍVNE"}),a.jsx("div",{className:"ks-cream text-base font-semibold leading-tight",style:{fontFamily:s.stack},children:s.name}),a.jsx("div",{className:"ks-muted text-xs mt-1.5",style:{fontFamily:s.stack},children:"Ukážka · Abc 123"})]},s.id)})})}function Dg({onBack:n,selectedMode:e,onChangeMode:t,selectedSkin:s}){const r=[{id:"basic",title:"Klasický",desc:"Tabuľka hore a zapisovanie bodov pod ňou."},{id:"observer",title:"Pozorovateľ",desc:"Veľký živý prehľad skóre pre obrazovku alebo TV."},{id:"recorder",title:"Zapisovateľ",desc:"Jednoduché veľké ovládanie pre rýchly zápis bodov."}],i=La[s]||La.classic;return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",style:{background:i.bg},children:[a.jsx(sh,{title:"Zobrazenie hry",onBack:n}),a.jsx("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:r.map(c=>a.jsx("button",{onClick:()=>t(c.id),className:`ks-card w-full p-4 rounded-sm text-left ks-press border ${e===c.id?"border-amber-500/70 bg-amber-900/10":"ks-border-sub"}`,children:a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:c.title}),a.jsx("div",{className:"ks-muted text-sm mt-1",children:c.desc})]}),a.jsxs("div",{className:"shrink-0 w-[62px]",children:[a.jsx("div",{className:"h-[92px] rounded-sm border border-amber-900/25 overflow-hidden",style:{background:i.bg},children:c.id==="basic"?a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"18px 28px 1fr",gap:"4px",padding:"5px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,184,106,0.24)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}):c.id==="observer"?a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 1fr",gap:"4px",padding:"5px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.2)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"8px 1fr 1fr 1fr",gap:"3px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.14)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]})]})]}):a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 22px 1fr 12px",gap:"4px",padding:"5px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 18px",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}})]})]})}),e===c.id?a.jsx("div",{className:"ks-gold ks-mono text-[10px] text-right mt-1",children:"AKTÍVNE"}):a.jsx("div",{className:"h-[14px] mt-1"})]})]})},c.id))})]})}function mu({enabled:n,onToggle:e,labelOn:t,labelOff:s,iconOn:r,iconOff:i}){return a.jsxs("button",{onClick:e,className:`ks-press flex items-center gap-3 w-full px-4 py-3 rounded-sm border transition-colors ${n?"ks-border-accent border bg-amber-950/20":"ks-border-sub border"}`,children:[a.jsx("div",{className:`flex-shrink-0 ${n?"ks-gold":"ks-muted"}`,children:n?a.jsx(r,{size:20}):a.jsx(i,{size:20})}),a.jsx("div",{className:"flex-1 text-left",children:a.jsx("div",{className:`text-sm font-semibold ${n?"ks-cream":"ks-muted"}`,children:n?t:s})}),a.jsx("div",{className:`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${n?"ks-gold-bg":"bg-stone-700"}`,children:a.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${n?"translate-x-5":"translate-x-0"}`})})]})}function Og({onBack:n,selectedSkin:e,onSkinChange:t,selectedFont:s,onFontChange:r,tournamentViewMode:i,onTournamentViewModeChange:c,onViewModes:l,soundsEnabled:d,onSoundsToggle:h,animationsEnabled:m,onAnimationsToggle:p}){return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(sh,{title:"Vizuál, Zvuky a Skiny",onBack:n}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-5",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"ZVUKOVÉ EFEKTY"}),a.jsx(mu,{enabled:d,onToggle:h,labelOn:"Zvuky zapnuté",labelOff:"Zvuky vypnuté",iconOn:Ap,iconOff:Tp}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"ANIMÁCIE"}),a.jsx(mu,{enabled:m,onToggle:p,labelOn:"Animácie zapnuté",labelOff:"Animácie vypnuté",iconOn:Yd,iconOff:Sp}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"SKINY"}),a.jsx(Pg,{selectedSkin:e,onSkinChange:t}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"PÍSMO"}),a.jsx(jg,{selectedFont:s,onFontChange:r})]})]})}const Vg=()=>{};var pu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Lg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],c=n[t++],l=n[t++],d=((r&7)<<18|(i&63)<<12|(c&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const i=n[t++],c=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|c&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],c=r+1<n.length,l=c?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,T=h&63;d||(T=64,c||(v=64)),s.push(t[m],t[p],t[v],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||h==null||p==null)throw new Mg;const v=i<<2|l>>4;if(s.push(v),h!==64){const T=l<<4&240|h>>2;if(s.push(T),p!==64){const A=h<<6&192|p;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(n){const e=rh(n);return ih.encodeByteArray(e,!0)},Xi=function(n){return Ug(n).replace(/\./g,"")},oh=function(n){try{return ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=()=>Fg().__FIREBASE_DEFAULTS__,$g=()=>{if(typeof process>"u"||typeof pu>"u")return;const n=pu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oh(n[1]);return e&&JSON.parse(e)},Eo=()=>{try{return Vg()||zg()||$g()||Bg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ah=n=>{var e,t;return(t=(e=Eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Hg=n=>{const e=ah(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ch=()=>{var n;return(n=Eo())==null?void 0:n.config},lh=n=>{var e;return(e=Eo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xi(JSON.stringify(t)),Xi(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Gg(){var e;const n=(e=Eo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xg(){const n=yt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zg(){return!Gg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ey(){try{return typeof indexedDB=="object"}catch{return!1}}function ty(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="FirebaseError";class Tn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ny,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],c=i?sy(i,s):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new Tn(r,l,s)}}function sy(n,e){return n.replace(ry,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ry=/\{\$([^}]+)}/g;function iy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ks(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],c=e[r];if(gu(i)&&gu(c)){if(!ks(i,c))return!1}else if(i!==c)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function gu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function wr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function oy(n,e){const t=new ay(n,e);return t.subscribe.bind(t)}class ay{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cy(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=la),r.error===void 0&&(r.error=la),r.complete===void 0&&(r.complete=la);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function la(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uh(n){return(await fetch(n,{credentials:"include"})).ok}class xs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Wg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dy(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&c.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uy(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uy(n){return n===fs?void 0:n}function dy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ly(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const fy={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},my=de.INFO,py={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},gy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=py[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yc{constructor(e){this.name=e,this._logLevel=my,this._logHandler=gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const yy=(n,e)=>e.some(t=>n instanceof t);let yu,bu;function by(){return yu||(yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _y(){return bu||(bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dh=new WeakMap,Ma=new WeakMap,hh=new WeakMap,ua=new WeakMap,bc=new WeakMap;function vy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",c)},i=()=>{t(Vn(n.result)),r()},c=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&dh.set(t,n)}).catch(()=>{}),bc.set(e,n),e}function ky(n){if(Ma.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",c),n.removeEventListener("abort",c)},i=()=>{t(),r()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",c),n.addEventListener("abort",c)});Ma.set(n,e)}let Ua={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ma.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xy(n){Ua=n(Ua)}function wy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(da(this),e,...t);return hh.set(s,e.sort?e.sort():[e]),Vn(s)}:_y().includes(n)?function(...e){return n.apply(da(this),e),Vn(dh.get(this))}:function(...e){return Vn(n.apply(da(this),e))}}function Ey(n){return typeof n=="function"?wy(n):(n instanceof IDBTransaction&&ky(n),yy(n,by())?new Proxy(n,Ua):n)}function Vn(n){if(n instanceof IDBRequest)return vy(n);if(ua.has(n))return ua.get(n);const e=Ey(n);return e!==n&&(ua.set(n,e),bc.set(e,n)),e}const da=n=>bc.get(n);function Iy(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const c=indexedDB.open(n,e),l=Vn(c);return s&&c.addEventListener("upgradeneeded",d=>{s(Vn(c.result),d.oldVersion,d.newVersion,Vn(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{i&&d.addEventListener("close",()=>i()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ty=["get","getKey","getAll","getAllKeys","count"],Ay=["put","add","delete","clear"],ha=new Map;function _u(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ha.get(e))return ha.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Ay.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ty.includes(t)))return;const i=async function(c,...l){const d=this.transaction(c,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&d.done]))[0]};return ha.set(e,i),i}xy(n=>({...n,get:(e,t,s)=>_u(e,t)||n.get(e,t,s),has:(e,t)=>!!_u(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ny(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ny(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fa="@firebase/app",vu="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new yc("@firebase/app"),Ry="@firebase/app-compat",Cy="@firebase/analytics-compat",Py="@firebase/analytics",jy="@firebase/app-check-compat",Dy="@firebase/app-check",Oy="@firebase/auth",Vy="@firebase/auth-compat",Ly="@firebase/database",My="@firebase/data-connect",Uy="@firebase/database-compat",Fy="@firebase/functions",zy="@firebase/functions-compat",$y="@firebase/installations",By="@firebase/installations-compat",Hy="@firebase/messaging",Wy="@firebase/messaging-compat",qy="@firebase/performance",Ky="@firebase/performance-compat",Gy="@firebase/remote-config",Jy="@firebase/remote-config-compat",Yy="@firebase/storage",Qy="@firebase/storage-compat",Xy="@firebase/firestore",Zy="@firebase/ai",eb="@firebase/firestore-compat",tb="firebase",nb="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="[DEFAULT]",sb={[Fa]:"fire-core",[Ry]:"fire-core-compat",[Py]:"fire-analytics",[Cy]:"fire-analytics-compat",[Dy]:"fire-app-check",[jy]:"fire-app-check-compat",[Oy]:"fire-auth",[Vy]:"fire-auth-compat",[Ly]:"fire-rtdb",[My]:"fire-data-connect",[Uy]:"fire-rtdb-compat",[Fy]:"fire-fn",[zy]:"fire-fn-compat",[$y]:"fire-iid",[By]:"fire-iid-compat",[Hy]:"fire-fcm",[Wy]:"fire-fcm-compat",[qy]:"fire-perf",[Ky]:"fire-perf-compat",[Gy]:"fire-rc",[Jy]:"fire-rc-compat",[Yy]:"fire-gcs",[Qy]:"fire-gcs-compat",[Xy]:"fire-fst",[eb]:"fire-fst-compat",[Zy]:"fire-vertex","fire-js":"fire-js",[tb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map,rb=new Map,$a=new Map;function ku(n,e){try{n.container.addComponent(e)}catch(t){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bs(n){const e=n.name;if($a.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,n);for(const t of Zi.values())ku(t,n);for(const t of rb.values())ku(t,n);return!0}function _c(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new si("app","Firebase",ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=nb;function fh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:za,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ln.create("bad-app-name",{appName:String(r)});if(t||(t=ch()),!t)throw Ln.create("no-options");const i=Zi.get(r);if(i){if(ks(t,i.options)&&ks(s,i.config))return i;throw Ln.create("duplicate-app",{appName:r})}const c=new hy(r);for(const d of $a.values())c.addComponent(d);const l=new ob(t,s,c);return Zi.set(r,l),l}function mh(n=za){const e=Zi.get(n);if(!e&&n===za&&ch())return fh();if(!e)throw Ln.create("no-app",{appName:n});return e}function Mn(n,e,t){let s=sb[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(c.join(" "));return}Bs(new xs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebase-heartbeat-database",cb=1,Fr="firebase-heartbeat-store";let fa=null;function ph(){return fa||(fa=Iy(ab,cb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ln.create("idb-open",{originalErrorMessage:n.message})})),fa}async function lb(n){try{const t=(await ph()).transaction(Fr),s=await t.objectStore(Fr).get(gh(n));return await t.done,s}catch(e){if(e instanceof Tn)kn.warn(e.message);else{const t=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(t.message)}}}async function xu(n,e){try{const s=(await ph()).transaction(Fr,"readwrite");await s.objectStore(Fr).put(e,gh(n)),await s.done}catch(t){if(t instanceof Tn)kn.warn(t.message);else{const s=Ln.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kn.warn(s.message)}}}function gh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1024,db=30;class hb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mb(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(c=>c.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>db){const c=pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wu(),{heartbeatsToSend:s,unsentEntries:r}=fb(this._heartbeatsCache.heartbeats),i=Xi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kn.warn(t),""}}}function wu(){return new Date().toISOString().substring(0,10)}function fb(n,e=ub){const t=[];let s=n.slice();for(const r of n){const i=t.find(c=>c.agent===r.agent);if(i){if(i.dates.push(r.date),Eu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Eu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ey()?ty().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eu(n){return Xi(JSON.stringify({version:2,heartbeats:n})).length}function pb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n){Bs(new xs("platform-logger",e=>new Sy(e),"PRIVATE")),Bs(new xs("heartbeat",e=>new hb(e),"PRIVATE")),Mn(Fa,vu,n),Mn(Fa,vu,"esm2020"),Mn("fire-js","")}gb("");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={PHONE:"phone",TOTP:"totp"},bb={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},_b={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},vb={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},kb={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wb=xb,bh=yh,_h=new si("auth","Firebase",yh()),Eb={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new yc("@firebase/auth");function Ib(n,...e){eo.logLevel<=de.WARN&&eo.warn(`Auth (${Xs}): ${n}`,...e)}function zi(n,...e){eo.logLevel<=de.ERROR&&eo.error(`Auth (${Xs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,...e){throw kc(n,...e)}function vt(n,...e){return kc(n,...e)}function vc(n,e,t){const s={...bh(),[e]:t};return new si("auth","Firebase",s).create(e,{appName:n.name})}function rt(n){return vc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zs(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Nt(n,"argument-error"),vc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return _h.create(n,...e)}function U(n,e,...t){if(!n)throw kc(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zi(e),new Error(e)}function xn(n,e){n||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function xc(){return Iu()==="http:"||Iu()==="https:"}function Iu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xc()||Yg()||"connection"in navigator)?navigator.onLine:!0}function Ab(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=Kg()||Qg()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n,e){xn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rb=new ii(3e4,6e4);function Ne(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Re(n,e,t,s,r={}){return kh(n,r,async()=>{let i={},c={};s&&(e==="GET"?c=s:i={body:JSON.stringify(s)});const l=Qs({key:n.config.apiKey,...c}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:d,...i};return Jg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ri(n.emulatorConfig.host)&&(h.credentials="include"),vh.fetch()(await xh(n,n.config.apiHost,t,l),h)})}async function kh(n,e,t){n._canInitEmulator=!1;const s={...Sb,...e};try{const r=new Pb(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await i.json();if("needConfirmation"in c)throw Er(n,"account-exists-with-different-credential",c);if(i.ok&&!("errorMessage"in c))return c;{const l=i.ok?c.errorMessage:c.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw Er(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw Er(n,"user-disabled",c);const m=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vc(n,m,h);Nt(n,m)}}catch(r){if(r instanceof Tn)throw r;Nt(n,"network-request-failed",{message:String(r)})}}async function An(n,e,t,s,r={}){const i=await Re(n,e,t,s,r);return"mfaPendingCredential"in i&&Nt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function xh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,c=i.config.emulator?wc(n.config,r):`${n.config.apiScheme}://${r}`;return Nb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(c).toString():c}function Cb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(vt(this.auth,"network-request-failed")),Rb.get())})}}function Er(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=vt(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){return n!==void 0&&n.getResponse!==void 0}function Au(n){return n!==void 0&&n.enterprise!==void 0}class wh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Cb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n){return(await Re(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Eh(n,e){return Re(n,"GET","/v2/recaptchaConfig",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(n,e){return Re(n,"POST","/v1/accounts:delete",e)}async function Ob(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function to(n,e){return Re(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n,e=!1){return ee(n).getIdToken(e)}async function Ih(n,e=!1){const t=ee(n),s=await t.getIdToken(e),r=Io(s);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,c=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Rr(ma(r.auth_time)),issuedAtTime:Rr(ma(r.iat)),expirationTime:Rr(ma(r.exp)),signInProvider:c||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ma(n){return Number(n)*1e3}function Io(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const r=oh(t);return r?JSON.parse(r):(zi("Failed to decode base64 JWT payload"),null)}catch(r){return zi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Su(n){const e=Io(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Tn&&Lb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Lb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n){var p;const e=n.auth,t=await n.getIdToken(),s=await wn(n,to(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?Ah(r.providerUserInfo):[],c=Ub(n.providerData,i),l=n.isAnonymous,d=!(n.email&&r.passwordHash)&&!(c!=null&&c.length),h=l?d:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Ba(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Th(n){const e=ee(n);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ah(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(n,e){const t=await kh(n,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,c=await xh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return n.emulatorConfig&&ri(n.emulatorConfig.host)&&(d.credentials="include"),vh.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zb(n,e){return Re(n,"POST","/v2/accounts:revokeToken",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=Su(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Fb(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,c=new Os;return s&&(U(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),r&&(U(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),c.expirationTime=i),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ba(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await wn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ih(this,e)}reload(){return Th(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await wn(this,Db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,d=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:T,providerData:A,stsTokenManager:P}=t;U(p&&P,e,"internal-error");const S=Os.fromJSON(this.name,P);U(typeof p=="string",e,"internal-error"),On(s,e.name),On(r,e.name),U(typeof v=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),On(i,e.name),On(c,e.name),On(l,e.name),On(d,e.name),On(h,e.name),On(m,e.name);const $=new Ht({uid:p,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:T,photoURL:c,phoneNumber:i,tenantId:l,stsTokenManager:S,createdAt:h,lastLoginAt:m});return A&&Array.isArray(A)&&($.providerData=A.map(R=>({...R}))),d&&($._redirectEventId=d),$}static async _fromIdTokenResponse(e,t,s=!1){const r=new Os;r.updateFromServerResponse(t);const i=new Ht({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $r(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];U(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ah(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Os;l.updateFromIdToken(s);const d=new Ht({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:c}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ba(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map;function yn(n){xn(n instanceof Function,"Expected a class definition");let e=Nu.get(n);return e?(xn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sh.type="NONE";const Ha=Sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e,t){return`firebase:${n}:${e}:${t}`}class Vs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=$i(this.userKey,r.apiKey,i),this.fullPersistenceKey=$i("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await to(this.auth,{idToken:e}).catch(()=>{});return t?Ht._fromGetAccountInfoResponse(this.auth,t,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Vs(yn(Ha),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||yn(Ha);const c=$i(s,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(c);if(m){let p;if(typeof m=="string"){const v=await to(e,{idToken:m}).catch(()=>{});if(!v)break;p=await Ht._fromGetAccountInfoResponse(e,v,m)}else p=Ht._fromJSON(e,m);h!==i&&(l=p),i=h;break}}catch{}const d=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new Vs(i,e,s):(i=d[0],l&&await i._set(c,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(c)}catch{}})),new Vs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dh(e))return"Blackberry";if(Oh(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||Ch(e))&&!e.includes("edge/"))return"Chrome";if(jh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nh(n=yt()){return/firefox\//i.test(n)}function Rh(n=yt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ch(n=yt()){return/crios\//i.test(n)}function Ph(n=yt()){return/iemobile/i.test(n)}function jh(n=yt()){return/android/i.test(n)}function Dh(n=yt()){return/blackberry/i.test(n)}function Oh(n=yt()){return/webos/i.test(n)}function Ec(n=yt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $b(n=yt()){var e;return Ec(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Bb(){return Xg()&&document.documentMode===10}function Vh(n=yt()){return Ec(n)||jh(n)||Oh(n)||Dh(n)||/windows phone/i.test(n)||Ph(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n,e=[]){let t;switch(n){case"Browser":t=Ru(yt());break;case"Worker":t=`${Ru(yt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((c,l)=>{try{const d=e(i);c(d)}catch(d){l(d)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(n,e={}){return Re(n,"GET","/v2/passwordPolicy",Ne(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=6;class Kb{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??qb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new Hb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await to(this,{idToken:e}),s=await Ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Le(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===l)&&(d!=null&&d.user)&&(s=d.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(rt(this));const t=e?ee(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wb(this),t=new Kb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{c||i(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,s,r);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ib(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $e(n){return ee(n)}class Cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=oy(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jb(n){oi=n}function Ic(n){return oi.loadJS(n)}function Yb(){return oi.recaptchaV2Script}function Qb(){return oi.recaptchaEnterpriseScript}function Xb(){return oi.gapiScript}function Mh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=500,e_=6e4,Ni=1e12;class t_{constructor(e){this.auth=e,this.counter=Ni,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new r_(e,this.auth.name,t||{})),this.counter++,s}reset(e){var s;const t=e||Ni;(s=this._widgets.get(t))==null||s.delete(),this._widgets.delete(t)}getResponse(e){var s;const t=e||Ni;return((s=this._widgets.get(t))==null?void 0:s.getResponse())||""}async execute(e){var s;const t=e||Ni;return(s=this._widgets.get(t))==null||s.execute(),""}}class n_{constructor(){this.enterprise=new s_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class s_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class r_{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;U(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=i_(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},e_)},Zb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function i_(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const o_="recaptcha-enterprise",Cr="NO_RECAPTCHA";class Uh{constructor(e){this.type=o_,this.auth=$e(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(c,l)=>{Eh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new wh(d);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,c(h.siteKey)}}).catch(d=>{l(d)})})}function r(i,c,l){const d=window.grecaptcha;Au(d)?d.enterprise.ready(()=>{d.enterprise.execute(i,{action:e}).then(h=>{c(h)}).catch(()=>{c(Cr)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n_().execute("siteKey",{action:"verify"}):new Promise((i,c)=>{s(this.auth).then(l=>{if(!t&&Au(window.grecaptcha))r(l,i,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Qb();d.length!==0&&(d+=l),Ic(d).then(()=>{r(l,i,c)}).catch(h=>{c(h)})}}).catch(l=>{c(l)})})}}async function br(n,e,t,s=!1,r=!1){const i=new Uh(n);let c;if(r)c=Cr;else try{c=await i.verify(t)}catch{c=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Un(n,e,t,s,r){var i,c;if(r==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await br(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await br(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(l)});else if(r==="PHONE_PROVIDER")if((c=n._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const l=await br(n,e,t);return s(n,l).catch(async d=>{var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(d.code==="auth/missing-recaptcha-token"||d.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await br(n,e,t,!1,!0);return s(n,m)}return Promise.reject(d)})}else{const l=await br(n,e,t,!1,!0);return s(n,l)}else return Promise.reject(r+" provider is not supported.")}async function Fh(n){const e=$e(n),t=await Eh(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new wh(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new Uh(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n,e){const t=_c(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(ks(i,e??{}))return r;Nt(r,"already-initialized")}return t.initialize({options:e})}function a_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(yn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $h(n,e,t){const s=$e(n);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=Bh(e),{host:c,port:l}=c_(e),d=l===null?"":`:${l}`,h={url:`${i}//${c}${d}/`},m=Object.freeze({host:c,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(ks(h,s.config.emulator)&&ks(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,ri(c)?uh(`${i}//${c}${d}`):r||l_()}function Bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c_(n){const e=Bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pu(s.substr(i.length+1))}}else{const[i,c]=s.split(":");return{host:i,port:Pu(c)}}}function Pu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function l_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e){return Re(n,"POST","/v1/accounts:resetPassword",Ne(n,e))}async function u_(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function d_(n,e){return Re(n,"POST","/v1/accounts:signUp",e)}async function h_(n,e){return Re(n,"POST","/v1/accounts:update",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e){return An(n,"POST","/v1/accounts:signInWithPassword",Ne(n,e))}async function To(n,e){return Re(n,"POST","/v1/accounts:sendOobCode",Ne(n,e))}async function m_(n,e){return To(n,e)}async function p_(n,e){return To(n,e)}async function g_(n,e){return To(n,e)}async function y_(n,e){return To(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,e){return An(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}async function __(n,e){return An(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends er{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Hs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Hs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,t,"signInWithPassword",f_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return b_(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,s,"signUpPassword",d_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return __(e,{idToken:t,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,e){return An(n,"POST","/v1/accounts:signInWithIdp",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="http://localhost";class rn extends er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const c=new rn(s,r);return c.idToken=i.idToken||void 0,c.accessToken=i.accessToken||void 0,c.secret=i.secret,c.nonce=i.nonce,c.pendingToken=i.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:v_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(n,e){return Re(n,"POST","/v1/accounts:sendVerificationCode",Ne(n,e))}async function k_(n,e){return An(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e))}async function x_(n,e){const t=await An(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e));if(t.temporaryProof)throw Er(n,"account-exists-with-different-credential",t);return t}const w_={USER_NOT_FOUND:"user-not-found"};async function E_(n,e){const t={...e,operation:"REAUTH"};return An(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,t),w_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends er{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return k_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return x_(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return E_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new Fn({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T_(n){const e=xr(wr(n)).link,t=e?xr(wr(e)).deep_link_id:null,s=xr(wr(n)).deep_link_id;return(s?xr(wr(s)).link:null)||s||t||e||n}class tr{constructor(e){const t=xr(wr(e)),s=t.apiKey??null,r=t.oobCode??null,i=I_(t.mode??null);U(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=T_(e);try{return new tr(t)}catch{return null}}}function A_(n){return tr.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(e,t){return Hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=tr.parseLink(t);return U(s,"argument-error"),Hs._fromEmailAndCode(e,s.code,s.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Sn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Pr extends nr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),rn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),rn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Pr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Pr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:c,providerId:l}=e;if(!s&&!r&&!t&&!i||!l)return null;try{return new Pr(l)._credential({idToken:t,accessToken:s,nonce:c,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends nr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return mn.credential(t,s)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends nr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="http://localhost";class Br extends er{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=t;return!s||!r||!i||s!==r?null:new Br(s,i)}static _create(e,t){return new Br(e,t)}buildRequest(){return{requestUri:S_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="saml.";class no extends Sn{constructor(e){U(e.startsWith(N_),"argument-error"),super(e)}static credentialFromResult(e){return no.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return no.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Br.fromJSON(e);return U(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Br._create(s,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends nr{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gn.credential(t,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n,e){return An(n,"POST","/v1/accounts:signUp",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ht._fromIdTokenResponse(e,s,r),c=Du(s);return new Mt({user:i,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Du(s);return new Mt({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Du(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(n){var r;if(Le(n.app))return Promise.reject(rt(n));const e=$e(n);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new Mt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Wh(e,{returnSecureToken:!0}),s=await Mt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Tn{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new so(e,t,s,r)}}function Kh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(n,i,e,s):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(n,e){const t=ee(n);await Ao(!0,t,e);const{providerUserInfo:s}=await Ob(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Gh(s||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Tc(n,e,t=!1){const s=await wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mt._forOperation(n,"link",s)}async function Ao(n,e,t){await $r(e);const s=Gh(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";U(s.has(t)===n,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(n,e,t=!1){const{auth:s}=n;if(Le(s.app))return Promise.reject(rt(s));const r="reauthenticate";try{const i=await wn(n,Kh(s,r,e,n),t);U(i.idToken,s,"internal-error");const c=Io(i.idToken);U(c,s,"internal-error");const{sub:l}=c;return U(n.uid===l,s,"user-mismatch"),Mt._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const s="signIn",r=await Kh(n,s,e),i=await Mt._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function So(n,e){return Yh($e(n),e)}async function Qh(n,e){const t=ee(n);return await Ao(!1,t,e.providerId),Tc(t,e)}async function Xh(n,e){return Jh(ee(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(n,e){return An(n,"POST","/v1/accounts:signInWithCustomToken",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(n,e){if(Le(n.app))return Promise.reject(rt(n));const t=$e(n),s=await C_(t,{token:e,returnSecureToken:!0}),r=await Mt._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ac._fromServerResponse(e,t):"totpInfo"in t?Sc._fromServerResponse(e,t):Nt(e,"internal-error")}}class Ac extends ai{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ac(t)}}class Sc extends ai{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Sc(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n,e,t){var s;U(((s=t.url)==null?void 0:s.length)>0,n,"invalid-continue-uri"),U(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(U(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(U(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(n){const e=$e(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j_(n,e,t){const s=$e(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&No(s,r,t),await Un(s,r,"getOobCode",p_,"EMAIL_PASSWORD_PROVIDER")}async function D_(n,e,t){await Hh(ee(n),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Nc(n),s})}async function O_(n,e){await h_(ee(n),{oobCode:e})}async function Zh(n,e){const t=ee(n),s=await Hh(t,{oobCode:e}),r=s.requestType;switch(U(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(s.mfaInfo,t,"internal-error");default:U(s.email,t,"internal-error")}let i=null;return s.mfaInfo&&(i=ai._fromServerResponse($e(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function V_(n,e){const{data:t}=await Zh(ee(n),e);return t.email}async function L_(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=$e(n),c=await Un(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wh,"EMAIL_PASSWORD_PROVIDER").catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Nc(n),d}),l=await Mt._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(l.user),l}function M_(n,e,t){return Le(n.app)?Promise.reject(rt(n)):So(ee(n),Xn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Nc(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n,e,t){const s=$e(n),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(c,l){U(l.handleCodeInApp,s,"argument-error"),l&&No(s,c,l)}i(r,t),await Un(s,r,"getOobCode",g_,"EMAIL_PASSWORD_PROVIDER")}function F_(n,e){const t=tr.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function z_(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=ee(n),r=Xn.credentialWithLink(e,t||zr());return U(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),So(s,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(n,e){return Re(n,"POST","/v1/accounts:createAuthUri",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(n,e){const t=xc()?zr():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:r}=await $_(ee(n),s);return r||[]}async function H_(n,e){const t=ee(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&No(t.auth,r,e);const{email:i}=await m_(t.auth,r);i!==n.email&&await n.reload()}async function W_(n,e,t){const s=ee(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&No(s.auth,i,t);const{email:c}=await y_(s.auth,i);c!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(n,e){return Re(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ee(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await wn(s,q_(s.auth,i));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function G_(n,e){const t=ee(n);return Le(t.auth.app)?Promise.reject(rt(t.auth)):ef(t,e,null)}function J_(n,e){return ef(ee(n),null,e)}async function ef(n,e,t){const{auth:s}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const c=await wn(n,u_(s,i));await n._updateTokensIfNecessary(c,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){var r,i;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const c=(i=(r=Io(n.idToken))==null?void 0:r.firebase)==null?void 0:i.sign_in_provider;if(c){const l=c!=="anonymous"&&c!=="custom"?c:null;return new Ls(s,l)}}if(!e)return null;switch(e){case"facebook.com":return new Q_(s,t);case"github.com":return new X_(s,t);case"google.com":return new Z_(s,t);case"twitter.com":return new ev(s,t,n.screenName||null);case"custom":case"anonymous":return new Ls(s,null);default:return new Ls(s,e,t)}}class Ls{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class tf extends Ls{constructor(e,t,s,r){super(e,t,s),this.username=r}}class Q_ extends Ls{constructor(e,t){super(e,"facebook.com",t)}}class X_ extends tf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Z_ extends Ls{constructor(e,t){super(e,"google.com",t)}}class ev extends tf{constructor(e,t,s){super(e,"twitter.com",t,s)}}function tv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Y_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e){return ee(n).setPersistence(e)}function nv(n){return Fh(n)}async function sv(n,e){return $e(n).validatePassword(e)}function sf(n,e,t,s){return ee(n).onIdTokenChanged(e,t,s)}function rf(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function rv(n,e,t,s){return ee(n).onAuthStateChanged(e,t,s)}function iv(n){ee(n).useDeviceLanguage()}function ov(n,e){return ee(n).updateCurrentUser(e)}function av(n){return ee(n).signOut()}function cv(n,e){return $e(n).revokeAccessToken(e)}async function lv(n){return ee(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new ps("enroll",e,t)}static _fromMfaPendingCredential(e){return new ps("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ps._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return ps._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=$e(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(l=>ai._fromServerResponse(s,l));U(r.mfaPendingCredential,s,"internal-error");const c=ps._fromMfaPendingCredential(r.mfaPendingCredential);return new Rc(c,i,async l=>{const d=await l._process(s,c);delete r.mfaInfo,delete r.mfaPendingCredential;const h={...r,idToken:d.idToken,refreshToken:d.refreshToken};switch(t.operationType){case"signIn":const m=await Mt._fromIdTokenResponse(s,t.operationType,h);return await s._updateCurrentUser(m.user),m;case"reauthenticate":return U(t.user,s,"internal-error"),Mt._forOperation(t.user,t.operationType,h);default:Nt(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function uv(n,e){var r;const t=ee(n),s=e;return U(e.customData.operationType,t,"argument-error"),U((r=s.customData._serverResponse)==null?void 0:r.mfaPendingCredential,t,"argument-error"),Rc._fromError(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function dv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function hv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function fv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function mv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(n,e))}class Cc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>ai._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Cc(e)}async getSession(){return ps._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,r=await this.getSession(),i=await wn(this.user,s._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const r=await wn(this.user,mv(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const pa=new WeakMap;function pv(n){const e=ee(n);return pa.has(e)||pa.set(e,Cc._fromUser(e)),pa.get(e)}const ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=1e3,yv=10;class af extends of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,d)=>{this.notifyListeners(c,d)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},i=this.storage.getItem(s);Bb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yv):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}af.type="LOCAL";const Pc=af;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=1e3;function ga(n){var s;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((s=document.cookie.match(t))==null?void 0:s[1])??null}function ya(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class cf{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=ya(e);if(window.cookieStore){const s=await window.cookieStore.get(t);return s==null?void 0:s.value}return ga(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const s=ya(e);document.cookie=`${s}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const s=ya(e);if(window.cookieStore){const l=(h=>{const m=h.changed.find(v=>v.name===s);m&&t(m.value),h.deleted.find(v=>v.name===s)&&t(null)}),d=()=>window.cookieStore.removeEventListener("change",l);return this.listenerUnsubscribes.set(t,d),window.cookieStore.addEventListener("change",l)}let r=ga(s);const i=setInterval(()=>{const l=ga(s);l!==r&&(t(l),r=l)},bv),c=()=>clearInterval(i);this.listenerUnsubscribes.set(t,c)}_removeListener(e,t){const s=this.listenerUnsubscribes.get(t);s&&(s(),this.listenerUnsubscribes.delete(t))}}cf.type="COOKIE";const _v=cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lf.type="SESSION";const jc=lf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ro(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(c).map(async h=>h(t.origin,i)),d=await vv(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,c;return new Promise((l,d)=>{const h=Co("",20);r.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},s);c={messageChannel:r,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function xv(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ev(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Iv(){return Dc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="firebaseLocalStorageDb",Tv=1,io="firebaseLocalStorage",df="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Po(n,e){return n.transaction([io],e?"readwrite":"readonly").objectStore(io)}function Av(){const n=indexedDB.deleteDatabase(uf);return new ci(n).toPromise()}function Wa(){const n=indexedDB.open(uf,Tv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(io,{keyPath:df})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(io)?e(s):(s.close(),await Av(),e(await Wa()))})})}async function Vu(n,e,t){const s=Po(n,!0).put({[df]:e,value:t});return new ci(s).toPromise()}async function Sv(n,e){const t=Po(n,!1).get(e),s=await new ci(t).toPromise();return s===void 0?null:s.value}function Lu(n,e){const t=Po(n,!0).delete(e);return new ci(t).toPromise()}const Nv=800,Rv=3;class hf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Rv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(Iv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await wv(),!this.activeServiceWorker)return;this.sender=new kv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ev()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await Vu(e,ro,"1"),await Lu(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Sv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Po(r,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hf.type="LOCAL";const ff=hf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:start",Ne(n,e))}function Cv(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}function Pv(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=Mh("rcb"),jv=new ii(3e4,6e4);class Dv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ke().grecaptcha)!=null&&e.render)}load(e,t=""){return U(Ov(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Tu(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((s,r)=>{const i=Ke().setTimeout(()=>{r(vt(e,"network-request-failed"))},jv.get());Ke()[ba]=()=>{Ke().clearTimeout(i),delete Ke()[ba];const l=Ke().grecaptcha;if(!l||!Tu(l)){r(vt(e,"internal-error"));return}const d=l.render;l.render=(h,m)=>{const p=d(h,m);return this.counter++,p},this.hostLanguage=t,s(l)};const c=`${Yb()}?${Qs({onload:ba,render:"explicit",hl:t})}`;Ic(c).catch(()=>{clearTimeout(i),r(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ke().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ov(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Vv{async load(e){return new t_(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="recaptcha",Lv={theme:"light",type:"image"};class Mv{constructor(e,t,s={...Lv}){this.parameters=s,this.type=jr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;U(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vv:new Dv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(r=>{const i=c=>{c&&(this.tokenChangeListeners.delete(i),r(c))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Ke()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(xc()&&!Dc(),this.auth,"internal-error"),await Uv(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await jb(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Uv(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Fn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Fv(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=$e(n),r=await jo(s,e,ee(t));return new Oc(r,i=>So(s,i))}async function zv(n,e,t){const s=ee(n);await Ao(!1,s,"phone");const r=await jo(s.auth,e,ee(t));return new Oc(r,i=>Qh(s,i))}async function $v(n,e,t){const s=ee(n);if(Le(s.auth.app))return Promise.reject(rt(s.auth));const r=await jo(s.auth,e,ee(t));return new Oc(r,i=>Xh(s,i))}async function jo(n,e,t){var s;if(!n._getRecaptchaConfig())try{await Fh(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){U(i.type==="enroll",n,"internal-error");const c={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Un(n,c,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===Cr){U((t==null?void 0:t.type)===jr,m,"argument-error");const v=await _a(m,p,t);return Ou(m,v)}return Ou(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{U(i.type==="signin",n,"internal-error");const c=((s=r.multiFactorHint)==null?void 0:s.uid)||r.multiFactorUid;U(c,n,"missing-multi-factor-info");const l={mfaPendingCredential:i.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Un(n,l,"mfaSmsSignIn",async(p,v)=>{if(v.phoneSignInInfo.captchaResponse===Cr){U((t==null?void 0:t.type)===jr,p,"argument-error");const T=await _a(p,v,t);return Mu(p,T)}return Mu(p,v)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Un(n,i,"sendVerificationCode",async(h,m)=>{if(m.captchaResponse===Cr){U((t==null?void 0:t.type)===jr,h,"argument-error");const p=await _a(h,m,t);return ju(h,p)}return ju(h,m)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}}async function Bv(n,e){const t=ee(n);if(Le(t.auth.app))return Promise.reject(rt(t.auth));await Tc(t,e)}async function _a(n,e,t){U(t.type===jr,n,"argument-error");const s=await t.verify();U(typeof s=="string",n,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const i=r.phoneEnrollmentInfo.phoneNumber,c=r.phoneEnrollmentInfo.captchaResponse,l=r.phoneEnrollmentInfo.clientType,d=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:s,captchaResponse:c,clientType:l,recaptchaVersion:d}}),r}else if("phoneSignInInfo"in r){const i=r.phoneSignInInfo.captchaResponse,c=r.phoneSignInInfo.clientType,l=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:i,clientType:c,recaptchaVersion:l}}),r}else return Object.assign(r,{recaptchaToken:s}),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.providerId=bs.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,t){return jo(this.auth,e,ee(t))}static credential(e,t){return Fn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bs.credentialFromTaggedObject(t)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?Fn._fromTokenResponse(t,s):null}}bs.PROVIDER_ID="phone";bs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n,e){return e?yn(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hv(n){return Yh(n.auth,new Vc(n),n.bypassAuthState)}function Wv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Jh(t,new Vc(n),n.bypassAuthState)}async function qv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Tc(t,new Vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:c,type:l}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hv;case"linkViaPopup":case"linkViaRedirect":return qv;case"reauthViaPopup":case"reauthViaRedirect":return Wv;default:Nt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new ii(2e3,1e4);async function Gv(n,e,t){if(Le(n.app))return Promise.reject(vt(n,"operation-not-supported-in-this-environment"));const s=$e(n);Zs(n,e,Sn);const r=Is(s,t);return new bn(s,"signInViaPopup",e,r).executeNotNull()}async function Jv(n,e,t){const s=ee(n);if(Le(s.auth.app))return Promise.reject(vt(s.auth,"operation-not-supported-in-this-environment"));Zs(s.auth,e,Sn);const r=Is(s.auth,t);return new bn(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function Yv(n,e,t){const s=ee(n);Zs(s.auth,e,Sn);const r=Is(s.auth,t);return new bn(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class bn extends mf{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kv.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="pendingRedirect",Bi=new Map;class Xv extends mf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const s=await Zv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zv(n,e){const t=gf(e),s=pf(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function Lc(n,e){return pf(n)._set(gf(e),"true")}function ek(n,e){Bi.set(n._key(),e)}function pf(n){return yn(n._redirectPersistence)}function gf(n){return $i(Qv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(n,e,t){return nk(n,e,t)}async function nk(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=$e(n);Zs(n,e,Sn),await s._initializationPromise;const r=Is(s,t);return await Lc(r,s),r._openRedirect(s,e,"signInViaRedirect")}function sk(n,e,t){return rk(n,e,t)}async function rk(n,e,t){const s=ee(n);if(Zs(s.auth,e,Sn),Le(s.auth.app))return Promise.reject(rt(s.auth));await s.auth._initializationPromise;const r=Is(s.auth,t);await Lc(r,s.auth);const i=await bf(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function ik(n,e,t){return ok(n,e,t)}async function ok(n,e,t){const s=ee(n);Zs(s.auth,e,Sn),await s.auth._initializationPromise;const r=Is(s.auth,t);await Ao(!1,s,e.providerId),await Lc(r,s.auth);const i=await bf(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function ak(n,e){return await $e(n)._initializationPromise,yf(n,e,!1)}async function yf(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const s=$e(n),r=Is(s,e),c=await new Xv(s,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}async function bf(n){const e=Co(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=600*1e3;class lk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!_f(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ck&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _f({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _f(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(n,e={}){return Re(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fk=/^https?/;async function mk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dk(n);for(const t of e)try{if(pk(t))return}catch{}Nt(n,"unauthorized-domain")}function pk(n){const e=zr(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!fk.test(t))return!1;if(hk.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new ii(3e4,6e4);function Fu(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yk(n){return new Promise((e,t)=>{var r,i,c;function s(){Fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fu(),t(vt(n,"network-request-failed"))},timeout:gk.get()})}if((i=(r=Ke().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((c=Ke().gapi)!=null&&c.load)s();else{const l=Mh("iframefcb");return Ke()[l]=()=>{gapi.load?s():t(vt(n,"network-request-failed"))},Ic(`${Xb()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function bk(n){return Hi=Hi||yk(n),Hi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new ii(5e3,15e3),vk="__/auth/iframe",kk="emulator/auth/iframe",xk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ek(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wc(e,kk):`https://${n.config.authDomain}/${vk}`,s={apiKey:e.apiKey,appName:n.name,v:Xs},r=wk.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Qs(s).slice(1)}`}async function Ik(n){const e=await bk(n),t=Ke().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:Ek(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const c=vt(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(c)},_k.get());function d(){Ke().clearTimeout(l),r(s)}s.ping(d).then(d,()=>{i(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ak=500,Sk=600,Nk="_blank",Rk="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ck(n,e,t,s=Ak,r=Sk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...Tk,width:s.toString(),height:r.toString(),top:i,left:c},h=yt().toLowerCase();t&&(l=Ch(h)?Nk:t),Nh(h)&&(e=e||Rk,d.scrollbars="yes");const m=Object.entries(d).reduce((v,[T,A])=>`${v}${T}=${A},`,"");if($b(h)&&l!=="_self")return Pk(e||"",l),new zu(null);const p=window.open(e||"",l,m);U(p,n,"popup-blocked");try{p.focus()}catch{}return new zu(p)}function Pk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="__/auth/handler",Dk="emulator/auth/handler",Ok=encodeURIComponent("fac");async function $u(n,e,t,s,r,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Xs,eventId:r};if(e instanceof Sn){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",iy(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))c[m]=p}if(e instanceof nr){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(c.scopes=m.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const d=await n._getAppCheckToken(),h=d?`#${Ok}=${encodeURIComponent(d)}`:"";return`${Vk(n)}?${Qs(l).slice(1)}${h}`}function Vk({config:n}){return n.emulator?wc(n,Dk):`https://${n.authDomain}/${jk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="webStorageSupport";class Lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jc,this._completeRedirectFn=yf,this._overrideRedirectResult=ek}async _openPopup(e,t,s,r){var c;xn((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const i=await $u(e,t,s,zr(),r);return Ck(e,i,Co())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await $u(e,t,s,zr(),r);return xv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(xn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ik(e),s=new lk(e);return t.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(va,{type:va},r=>{var c;const i=(c=r==null?void 0:r[0])==null?void 0:c[va];i!==void 0&&t(!!i),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vh()||Rh()||Ec()}}const vf=Lk;class kf{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xt("unexpected MultiFactorSessionType")}}}class Mc extends kf{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mc(e)}_finalizeEnroll(e,t,s){return dv(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Cv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xf{constructor(){}static assertion(e){return Mc._fromCredential(e)}}xf.FACTOR_ID="phone";class wf{static assertionForEnrollment(e,t){return Hr._fromSecret(e,t)}static assertionForSignIn(e,t){return Hr._fromEnrollmentId(e,t)}static async generateSecret(e){var r;const t=e;U(typeof((r=t.user)==null?void 0:r.auth)<"u","internal-error");const s=await hv(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Do._fromStartTotpMfaEnrollmentResponse(s,t.user.auth)}}wf.FACTOR_ID="totp";class Hr extends kf{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new Hr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Hr(t,e)}async _finalizeEnroll(e,t,s){return U(typeof this.secret<"u",e,"argument-error"),fv(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return Pv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class Do{constructor(e,t,s,r,i,c,l){this.sessionInfo=c,this.auth=l,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Do(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let s=!1;return(Ri(e)||Ri(t))&&(s=!0),s&&(Ri(e)&&(e=((r=this.auth.currentUser)==null?void 0:r.email)||"unknownuser"),Ri(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ri(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var Bu="@firebase/auth",Hu="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fk(n){Bs(new xs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=s.options;U(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lh(n)},h=new Gb(s,r,i,d);return a_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Bs(new xs("auth-internal",e=>{const t=$e(e.getProvider("auth").getImmediate());return(s=>new Mk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Bu,Hu,Uk(n)),Mn(Bu,Hu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=300,$k=lh("authIdTokenMaxAge")||zk;let Wu=null;const Bk=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>$k)return;const r=t==null?void 0:t.token;Wu!==r&&(Wu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function li(n=mh()){const e=_c(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zh(n,{popupRedirectResolver:vf,persistence:[ff,Pc,jc]}),s=lh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const c=Bk(i.toString());rf(t,c,()=>c(t.currentUser)),sf(t,l=>c(l))}}const r=ah("auth");return r&&$h(t,`http://${r}`),t}function Hk(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Jb({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=vt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Hk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fk("Browser");const Wk=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:kb,ActionCodeURL:tr,AuthCredential:er,AuthErrorCodes:Eb,EmailAuthCredential:Hs,EmailAuthProvider:Xn,FacebookAuthProvider:fn,FactorId:yb,GithubAuthProvider:pn,GoogleAuthProvider:mn,OAuthCredential:rn,OAuthProvider:Pr,OperationType:vb,PhoneAuthCredential:Fn,PhoneAuthProvider:bs,PhoneMultiFactorGenerator:xf,ProviderId:bb,RecaptchaVerifier:Mv,SAMLAuthProvider:no,SignInMethod:_b,TotpMultiFactorGenerator:wf,TotpSecret:Do,TwitterAuthProvider:gn,applyActionCode:O_,beforeAuthStateChanged:rf,browserCookiePersistence:_v,browserLocalPersistence:Pc,browserPopupRedirectResolver:vf,browserSessionPersistence:jc,checkActionCode:Zh,confirmPasswordReset:D_,connectAuthEmulator:$h,createUserWithEmailAndPassword:L_,debugErrorMap:wb,deleteUser:lv,fetchSignInMethodsForEmail:B_,getAdditionalUserInfo:tv,getAuth:li,getIdToken:Vb,getIdTokenResult:Ih,getMultiFactorResolver:uv,getRedirectResult:ak,inMemoryPersistence:Ha,indexedDBLocalPersistence:ff,initializeAuth:zh,initializeRecaptchaConfig:nv,isSignInWithEmailLink:F_,linkWithCredential:Qh,linkWithPhoneNumber:zv,linkWithPopup:Yv,linkWithRedirect:ik,multiFactor:pv,onAuthStateChanged:rv,onIdTokenChanged:sf,parseActionCodeURL:A_,prodErrorMap:bh,reauthenticateWithCredential:Xh,reauthenticateWithPhoneNumber:$v,reauthenticateWithPopup:Jv,reauthenticateWithRedirect:sk,reload:Th,revokeAccessToken:cv,sendEmailVerification:H_,sendPasswordResetEmail:j_,sendSignInLinkToEmail:U_,setPersistence:nf,signInAnonymously:qh,signInWithCredential:So,signInWithCustomToken:P_,signInWithEmailAndPassword:M_,signInWithEmailLink:z_,signInWithPhoneNumber:Fv,signInWithPopup:Gv,signInWithRedirect:tk,signOut:av,unlink:R_,updateCurrentUser:ov,updateEmail:G_,updatePassword:J_,updatePhoneNumber:Bv,updateProfile:K_,useDeviceLanguage:iv,validatePassword:sv,verifyBeforeUpdateEmail:W_,verifyPasswordResetCode:V_},Symbol.toStringTag,{value:"Module"}));var qk="firebase",Kk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(qk,Kk,"app");var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,Ef;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.F=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(k,x,E){for(var b=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)b[oe-2]=arguments[oe];return y.prototype[x].apply(k,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,y,_){_||(_=0);const k=Array(16);if(typeof y=="string")for(var x=0;x<16;++x)k[x]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(x=0;x<16;++x)k[x]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],x=w.g[2];let E=w.g[3],b;b=y+(E^_&(x^E))+k[0]+3614090360&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[1]+3905402710&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[2]+606105819&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[3]+3250441966&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(E^_&(x^E))+k[4]+4118548399&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[5]+1200080426&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[6]+2821735955&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[7]+4249261313&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(E^_&(x^E))+k[8]+1770035416&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[9]+2336552879&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[10]+4294925233&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[11]+2304563134&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(E^_&(x^E))+k[12]+1804603682&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[13]+4254626195&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[14]+2792965006&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[15]+1236535329&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(x^E&(_^x))+k[1]+4129170786&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[6]+3225465664&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[11]+643717713&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[0]+3921069994&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(x^E&(_^x))+k[5]+3593408605&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[10]+38016083&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[15]+3634488961&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[4]+3889429448&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(x^E&(_^x))+k[9]+568446438&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[14]+3275163606&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[3]+4107603335&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[8]+1163531501&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(x^E&(_^x))+k[13]+2850285829&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[2]+4243563512&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[7]+1735328473&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[12]+2368359562&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(_^x^E)+k[5]+4294588738&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[8]+2272392833&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[11]+1839030562&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[14]+4259657740&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(_^x^E)+k[1]+2763975236&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[4]+1272893353&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[7]+4139469664&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[10]+3200236656&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(_^x^E)+k[13]+681279174&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[0]+3936430074&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[3]+3572445317&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[6]+76029189&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(_^x^E)+k[9]+3654602809&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[12]+3873151461&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[15]+530742520&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[2]+3299628645&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(x^(_|~E))+k[0]+4096336452&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[7]+1126891415&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[14]+2878612391&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[5]+4237533241&4294967295,_=x+(b<<21&4294967295|b>>>11),b=y+(x^(_|~E))+k[12]+1700485571&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[3]+2399980690&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[10]+4293915773&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[1]+2240044497&4294967295,_=x+(b<<21&4294967295|b>>>11),b=y+(x^(_|~E))+k[8]+1873313359&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[15]+4264355552&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[6]+2734768916&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[13]+1309151649&4294967295,_=x+(b<<21&4294967295|b>>>11),b=y+(x^(_|~E))+k[4]+4149444226&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[11]+3174756917&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[2]+718787259&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(x+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+x&4294967295,w.g[3]=w.g[3]+E&4294967295}s.prototype.v=function(w,y){y===void 0&&(y=w.length);const _=y-this.blockSize,k=this.C;let x=this.h,E=0;for(;E<y;){if(x==0)for(;E<=_;)r(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<y;)if(k[x++]=w.charCodeAt(E++),x==this.blockSize){r(this,k),x=0;break}}else for(;E<y;)if(k[x++]=w[E++],x==this.blockSize){r(this,k),x=0;break}}this.h=x,this.o+=y},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,_=0;_<4;++_)for(let k=0;k<32;k+=8)w[y++]=this.g[_]>>>k&255;return w};function i(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function c(w,y){this.h=y;const _=[];let k=!0;for(let x=w.length-1;x>=0;x--){const E=w[x]|0;k&&E==y||(_[x]=E,k=!1)}this.g=_}var l={};function d(w){return-128<=w&&w<128?i(w,function(y){return new c([y|0],y<0?-1:0)}):new c([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return S(h(-w));const y=[];let _=1;for(let k=0;w>=_;k++)y[k]=w/_|0,_*=4294967296;return new c(y,0)}function m(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return S(m(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let k=p;for(let E=0;E<w.length;E+=8){var x=Math.min(8,w.length-E);const b=parseInt(w.substring(E,E+x),y);x<8?(x=h(Math.pow(y,x)),k=k.j(x).add(h(b))):(k=k.j(_),k=k.add(h(b)))}return k}var p=d(0),v=d(1),T=d(16777216);n=c.prototype,n.m=function(){if(P(this))return-S(this).m();let w=0,y=1;for(let _=0;_<this.g.length;_++){const k=this.i(_);w+=(k>=0?k:4294967296+k)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(P(this))return"-"+S(this).toString(w);const y=h(Math.pow(w,6));var _=this;let k="";for(;;){const x=j(_,y).g;_=$(_,x.j(y));let E=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=x,A(_))return E+k;for(;E.length<6;)E="0"+E;k=E+k}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=$(this,w),P(w)?-1:A(w)?0:1};function S(w){const y=w.g.length,_=[];for(let k=0;k<y;k++)_[k]=~w.g[k];return new c(_,~w.h).add(v)}n.abs=function(){return P(this)?S(this):this},n.add=function(w){const y=Math.max(this.g.length,w.g.length),_=[];let k=0;for(let x=0;x<=y;x++){let E=k+(this.i(x)&65535)+(w.i(x)&65535),b=(E>>>16)+(this.i(x)>>>16)+(w.i(x)>>>16);k=b>>>16,E&=65535,b&=65535,_[x]=b<<16|E}return new c(_,_[_.length-1]&-2147483648?-1:0)};function $(w,y){return w.add(S(y))}n.j=function(w){if(A(this)||A(w))return p;if(P(this))return P(w)?S(this).j(S(w)):S(S(this).j(w));if(P(w))return S(this.j(S(w)));if(this.l(T)<0&&w.l(T)<0)return h(this.m()*w.m());const y=this.g.length+w.g.length,_=[];for(var k=0;k<2*y;k++)_[k]=0;for(k=0;k<this.g.length;k++)for(let x=0;x<w.g.length;x++){const E=this.i(k)>>>16,b=this.i(k)&65535,oe=w.i(x)>>>16,ve=w.i(x)&65535;_[2*k+2*x]+=b*ve,R(_,2*k+2*x),_[2*k+2*x+1]+=E*ve,R(_,2*k+2*x+1),_[2*k+2*x+1]+=b*oe,R(_,2*k+2*x+1),_[2*k+2*x+2]+=E*oe,R(_,2*k+2*x+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new c(_,0)};function R(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function V(w,y){this.g=w,this.h=y}function j(w,y){if(A(y))throw Error("division by zero");if(A(w))return new V(p,p);if(P(w))return y=j(S(w),y),new V(S(y.g),S(y.h));if(P(y))return y=j(w,S(y)),new V(S(y.g),y.h);if(w.g.length>30){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var _=v,k=y;k.l(w)<=0;)_=H(_),k=H(k);var x=q(_,1),E=q(k,1);for(k=q(k,2),_=q(_,2);!A(k);){var b=E.add(k);b.l(w)<=0&&(x=x.add(_),E=b),k=q(k,1),_=q(_,1)}return y=$(w,x.j(y)),new V(x,y)}for(x=p;w.l(y)>=0;){for(_=Math.max(1,Math.floor(w.m()/y.m())),k=Math.ceil(Math.log(_)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),E=h(_),b=E.j(y);P(b)||b.l(w)>0;)_-=k,E=h(_),b=E.j(y);A(E)&&(E=v),x=x.add(E),w=$(w,b)}return new V(x,w)}n.B=function(w){return j(this,w).h},n.and=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let k=0;k<y;k++)_[k]=this.i(k)&w.i(k);return new c(_,this.h&w.h)},n.or=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let k=0;k<y;k++)_[k]=this.i(k)|w.i(k);return new c(_,this.h|w.h)},n.xor=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let k=0;k<y;k++)_[k]=this.i(k)^w.i(k);return new c(_,this.h^w.h)};function H(w){const y=w.g.length+1,_=[];for(let k=0;k<y;k++)_[k]=w.i(k)<<1|w.i(k-1)>>>31;return new c(_,w.h)}function q(w,y){const _=y>>5;y%=32;const k=w.g.length-_,x=[];for(let E=0;E<k;E++)x[E]=y>0?w.i(E+_)>>>y|w.i(E+_+1)<<32-y:w.i(E+_);return new c(x,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ef=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=h,c.fromString=m,zn=c}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var If,Ir,Tf,Wi,qa,Af,Sf,Nf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var f=s;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in f))break e;f=f[N]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},c=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=d,h.apply(null,arguments)}function m(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,N,C){for(var z=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)z[ie-2]=arguments[ie];return u.prototype[N].apply(g,z)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function A(o,u){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=o.length||0;const C=N.length||0;o.length=f+C;for(let z=0;z<C;z++)o[f+z]=N[z]}else o.push(N)}}class P{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function S(o){c.setTimeout(()=>{throw o},0)}function $(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class R{constructor(){this.h=this.g=null}add(u,f){const g=V.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new P(()=>new j,o=>o.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let H,q=!1,w=new R,y=()=>{const o=Promise.resolve(void 0);H=()=>{o.then(_)}};function _(){for(var o;o=$();){try{o.h.call(o.g)}catch(f){S(f)}var u=V;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}q=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function oe(o,u){x.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(oe,x),oe.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&oe.Z.h.call(this)},oe.prototype.h=function(){oe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ve="closure_listenable_"+(Math.random()*1e6|0),it=0;function bt(o,u,f,g,N){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=N,this.key=++it,this.da=this.fa=!1}function kt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ne(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function me(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Ie(o){const u={};for(const f in o)u[f]=o[f];return u}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(o,u){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)o[f]=g[f];for(let C=0;C<Q.length;C++)f=Q[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function je(o){this.src=o,this.g={},this.h=0}je.prototype.add=function(o,u,f,g,N){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const z=Me(o,u,g,N);return z>-1?(u=o[z],f||(u.fa=!1)):(u=new bt(u,this.src,C,!!g,N),u.fa=f,o.push(u)),u};function Be(o,u){const f=u.type;if(f in o.g){var g=o.g[f],N=Array.prototype.indexOf.call(g,u,void 0),C;(C=N>=0)&&Array.prototype.splice.call(g,N,1),C&&(kt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Me(o,u,f,g){for(let N=0;N<o.length;++N){const C=o[N];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return N}return-1}var Dt="closure_lm_"+(Math.random()*1e6|0),De={};function Ut(o,u,f,g,N){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Ut(o,u[C],f,g,N);return null}return f=ht(f),o&&o[ve]?o.J(u,f,l(g)?!!g.capture:!1,N):qt(o,u,f,!1,g,N)}function qt(o,u,f,g,N,C){if(!u)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let ie=ye(o);if(ie||(o[Dt]=ie=new je(o)),f=ie.add(u,f,g,z,C),f.proxy)return f;if(g=ln(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)E||(N=z),N===void 0&&(N=!1),o.addEventListener(u.toString(),g,N);else if(o.attachEvent)o.attachEvent(un(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ln(){function o(f){return u.call(o.src,o.listener,f)}const u=ts;return o}function xt(o,u,f,g,N){if(Array.isArray(u))for(var C=0;C<u.length;C++)xt(o,u[C],f,g,N);else g=l(g)?!!g.capture:!!g,f=ht(f),o&&o[ve]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],f=Me(u,f,g,N),f>-1&&(kt(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=ye(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Me(u,f,g,N)),(f=o>-1?u[o]:null)&&Ot(f))}function Ot(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ve])Be(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(un(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=ye(u))?(Be(f,o),f.h==0&&(f.src=null,u[Dt]=null)):kt(o)}}}function un(o){return o in De?De[o]:De[o]="on"+o}function ts(o,u){if(o.da)o=!0;else{u=new oe(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&Ot(o),o=f.call(g,u)}return o}function ye(o){return o=o[Dt],o instanceof je?o:null}var wt="__closure_events_fn_"+(Math.random()*1e9>>>0);function ht(o){return typeof o=="function"?o:(o[wt]||(o[wt]=function(u){return o.handleEvent(u)}),o[wt])}function Oe(){k.call(this),this.i=new je(this),this.M=this,this.G=null}p(Oe,k),Oe.prototype[ve]=!0,Oe.prototype.removeEventListener=function(o,u,f,g){xt(this,o,u,f,g)};function Ue(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new x(u,o);else if(u instanceof x)u.target=u.target||o;else{var N=u;u=new x(g,o),ae(u,N)}N=!0;let C,z;if(f)for(z=f.length-1;z>=0;z--)C=u.g=f[z],N=Ft(C,g,!0,u)&&N;if(C=u.g=o,N=Ft(C,g,!0,u)&&N,N=Ft(C,g,!1,u)&&N,f)for(z=0;z<f.length;z++)C=u.g=f[z],N=Ft(C,g,!1,u)&&N}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)kt(f[g]);delete o.g[u],o.h--}}this.G=null},Oe.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Oe.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ft(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let N=!0;for(let C=0;C<u.length;++C){const z=u[C];if(z&&!z.da&&z.capture==f){const ie=z.listener,Qe=z.ha||z.src;z.fa&&Be(o.i,z),N=ie.call(Qe,g)!==!1&&N}}return N&&!g.defaultPrevented}function ns(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:c.setTimeout(o,u||0)}function ss(o){o.g=ns(()=>{o.g=null,o.i&&(o.i=!1,ss(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ss extends k{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ss(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(o){k.call(this),this.h=o,this.g={}}p(dn,k);var rs=[];function is(o){ne(o.g,function(u,f){this.g.hasOwnProperty(f)&&Ot(u)},o),o.g={}}dn.prototype.N=function(){dn.Z.N.call(this),is(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var We=c.JSON.stringify,ar=c.JSON.parse,os=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Kt(){}function hn(){}var F={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function G(){x.call(this,"d")}p(G,x);function I(){x.call(this,"c")}p(I,x);var M={},J=null;function re(){return J=J||new Oe}M.Ia="serverreachability";function Te(o){x.call(this,M.Ia,o)}p(Te,x);function pe(o){const u=re();Ue(u,new Te(u))}M.STAT_EVENT="statevent";function Ee(o,u){x.call(this,M.STAT_EVENT,o),this.stat=u}p(Ee,x);function ge(o){const u=re();Ue(u,new Ee(u,o))}M.Ja="timingevent";function W(o,u){x.call(this,M.Ja,o),this.size=u}p(W,x);function _e(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function fe(){this.g=!0}fe.prototype.ua=function(){this.g=!1};function ke(o,u,f,g,N,C){o.info(function(){if(o.g)if(C){var z="",ie=C.split("&");for(let we=0;we<ie.length;we++){var Qe=ie[we].split("=");if(Qe.length>1){const nt=Qe[0];Qe=Qe[1];const Jt=nt.split("_");z=Jt.length>=2&&Jt[1]=="type"?z+(nt+"="+Qe+"&"):z+(nt+"=redacted&")}}}else z=null;else z=C;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+u+`
`+f+`
`+z})}function Rt(o,u,f,g,N,C,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+u+`
`+f+`
`+C+" "+z})}function Ce(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ct(o,f)+(g?" "+g:"")})}function Et(o,u){o.info(function(){return"TIMEOUT: "+u})}fe.prototype.info=function(){};function Ct(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return We(C)}catch{return u}}var ot={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_t={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},as;function Vt(){}p(Vt,Kt),Vt.prototype.g=function(){return new XMLHttpRequest},as=new Vt;function zt(o){return encodeURIComponent(String(o))}function ft(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function at(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new dn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ye}function Ye(){this.i=null,this.g="",this.h=!1}var It={},$t={};function cs(o,u,f){o.M=1,o.A=_i(Gt(u)),o.u=f,o.R=!0,gi(o,null)}function gi(o,u){o.F=Date.now(),X(o),o.B=Gt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Nl(f.i,"t",g),o.C=0,f=o.j.L,o.h=new Ye,o.g=Kl(o.j,f?u:null,!o.u),o.P>0&&(o.O=new Ss(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(rs[0]=N.toString()),N=rs);for(let C=0;C<N.length;C++){const z=Ut(f,N[C],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.J?Ie(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),pe(),ke(o.i,o.v,o.B,o.l,o.S,o.u)}at.prototype.ba=function(o){o=o.target;const u=this.O;u&&Pn(o)==3?u.j():this.Y(o)},at.prototype.Y=function(o){try{if(o==this.g)e:{const ie=Pn(this.g),Qe=this.g.ya(),we=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Vl(this.g)))){this.K||ie!=4||Qe==7||(Qe==8||we<=0?pe(3):pe(2)),Fe(this);var u=this.g.ca();this.X=u;var f=yi(this);if(this.o=u==200,Rt(this.i,this.v,this.B,this.l,this.S,ie,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var C=g;break t}}C=null}if(o=C)Ce(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,tt(this,o);else{this.o=!1,this.m=3,ge(12),et(this),xe(this);break e}}if(this.R){o=!0;let nt;for(;!this.K&&this.C<f.length;)if(nt=Qo(this,f),nt==$t){ie==4&&(this.m=4,ge(14),o=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==It){this.m=4,ge(15),Ce(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Ce(this.i,this.l,nt,null),tt(this,nt);if(bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||f.length!=0||this.h.h||(this.m=1,ge(16),o=!1),this.o=this.o&&o,!o)Ce(this.i,this.l,f,"[Invalid Chunked Response]"),et(this),xe(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ia(z),z.P=!0,ge(11))}}else Ce(this.i,this.l,f,null),tt(this,f);ie==4&&et(this),this.o&&!this.K&&(ie==4?Bl(this.j,this):(this.o=!1,X(this)))}else xp(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,ge(12)):(this.m=0,ge(13)),et(this),xe(this)}}}catch{}finally{}};function yi(o){if(!bi(o))return o.g.la();const u=Vl(o.g);if(u==="")return"";let f="";const g=u.length,N=Pn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return et(o),xe(o),"";o.h.i=new c.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,f+=o.h.i.decode(u[C],{stream:!(N&&C==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function bi(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Qo(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?$t:(f=Number(u.substring(f,g)),isNaN(f)?It:(g+=1,g+f>u.length?$t:(u=u.slice(g,g+f),o.C=g+f,u)))}at.prototype.cancel=function(){this.K=!0,et(this)};function X(o){o.T=Date.now()+o.H,ue(o,o.H)}function ue(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=_e(h(o.aa,o),u)}function Fe(o){o.D&&(c.clearTimeout(o.D),o.D=null)}at.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Et(this.i,this.B),this.M!=2&&(pe(),ge(17)),et(this),this.m=2,xe(this)):ue(this,this.T-o)};function xe(o){o.j.I==0||o.K||Bl(o.j,o)}function et(o){Fe(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,is(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function tt(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Xo(f.h,o))){if(!o.L&&Xo(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Ei(f),xi(f);else break e;ra(f),ge(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=_e(h(f.Va,f),6e3));kl(f.h)<=1&&f.ta&&(f.ta=void 0)}else us(f,11)}else if((o.L||f.g==o)&&Ei(f),!b(u))for(N=f.Ba.g.parse(u),u=0;u<N.length;u++){let we=N[u];const nt=we[0];if(!(nt<=f.K))if(f.K=nt,we=we[1],f.I==2)if(we[0]=="c"){f.M=we[1],f.ba=we[2];const Jt=we[3];Jt!=null&&(f.ka=Jt,f.j.info("VER="+f.ka));const ds=we[4];ds!=null&&(f.za=ds,f.j.info("SVER="+f.za));const jn=we[5];jn!=null&&typeof jn=="number"&&jn>0&&(g=1.5*jn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Dn=o.g;if(Dn){const Ti=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ti){var C=g.h;C.g||Ti.indexOf("spdy")==-1&&Ti.indexOf("quic")==-1&&Ti.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Zo(C,C.h),C.h=null))}if(g.G){const oa=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(g.wa=oa,Ae(g.J,g.G,oa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=o;if(g.na=ql(g,g.L?g.ba:null,g.W),z.L){xl(g.h,z);var ie=z,Qe=g.O;Qe&&(ie.H=Qe),ie.D&&(Fe(ie),X(ie)),g.g=z}else zl(g);f.i.length>0&&wi(f)}else we[0]!="stop"&&we[0]!="close"||us(f,7);else f.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?us(f,7):sa(f):we[0]!="noop"&&f.l&&f.l.qa(we),f.A=0)}}pe(4)}catch{}}var Nn=class{constructor(o,u){this.g=o,this.map=u}};function _l(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function kl(o){return o.h?1:o.g?o.g.size:0}function Xo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Zo(o,u){o.g?o.g.add(u):o.h=u}function xl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}_l.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return T(o.i)}var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function up(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let N,C=null;g>=0?(N=o[f].substring(0,g),C=o[f].substring(g+1)):N=o[f],u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Rn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Rn?(this.l=o.l,cr(this,o.j),this.o=o.o,this.g=o.g,lr(this,o.u),this.h=o.h,ea(this,Rl(o.i)),this.m=o.m):o&&(u=String(o).match(El))?(this.l=!1,cr(this,u[1]||"",!0),this.o=ur(u[2]||""),this.g=ur(u[3]||"",!0),lr(this,u[4]),this.h=ur(u[5]||"",!0),ea(this,u[6]||"",!0),this.m=ur(u[7]||"")):(this.l=!1,this.i=new hr(null,this.l))}Rn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(dr(u,Il,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(dr(u,Il,!0),"@"),o.push(zt(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(dr(f,f.charAt(0)=="/"?fp:hp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",dr(f,pp)),o.join("")},Rn.prototype.resolve=function(o){const u=Gt(this);let f=!!o.j;f?cr(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)lr(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=u.h.lastIndexOf("/");N!=-1&&(g=u.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const C=[];for(let z=0;z<N.length;){const ie=N[z++];ie=="."?g&&z==N.length&&C.push(""):ie==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&z==N.length&&C.push("")):(C.push(ie),g=!0)}g=C.join("/")}else g=N}return f?u.h=g:f=o.i.toString()!=="",f?ea(u,Rl(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Gt(o){return new Rn(o)}function cr(o,u,f){o.j=f?ur(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function lr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ea(o,u,f){u instanceof hr?(o.i=u,gp(o.i,o.l)):(f||(u=dr(u,mp)),o.i=new hr(u,o.l))}function Ae(o,u,f){o.i.set(u,f)}function _i(o){return Ae(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ur(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function dr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,dp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Il=/[#\/\?@]/g,hp=/[#\?:]/g,fp=/[#\?]/g,mp=/[#\?@]/g,pp=/#/g;function hr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ls(o){o.g||(o.g=new Map,o.h=0,o.i&&up(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=hr.prototype,n.add=function(o,u){ls(this),this.i=null,o=Ns(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Tl(o,u){ls(o),u=Ns(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Al(o,u){return ls(o),u=Ns(o,u),o.g.has(u)}n.forEach=function(o,u){ls(this),this.g.forEach(function(f,g){f.forEach(function(N){o.call(u,N,g,this)},this)},this)};function Sl(o,u){ls(o);let f=[];if(typeof u=="string")Al(o,u)&&(f=f.concat(o.g.get(Ns(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return ls(this),this.i=null,o=Ns(this,o),Al(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Sl(this,o),o.length>0?String(o[0]):u):u};function Nl(o,u,f){Tl(o,u),f.length>0&&(o.i=null,o.g.set(Ns(o,u),T(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const N=zt(f);f=Sl(this,f);for(let C=0;C<f.length;C++){let z=N;f[C]!==""&&(z+="="+zt(f[C])),o.push(z)}}return this.i=o.join("&")};function Rl(o){const u=new hr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Ns(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function gp(o,u){u&&!o.j&&(ls(o),o.i=null,o.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(Tl(this,g),Nl(this,N,f))},o)),o.j=u}function yp(o,u){const f=new fe;if(c.Image){const g=new Image;g.onload=m(Cn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=m(Cn,f,"TestLoadImage: error",!1,u,g),g.onabort=m(Cn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(Cn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function bp(o,u){const f=new fe,g=new AbortController,N=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(N),C.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),Cn(f,"TestPingServer: error",!1,u)})}function Cn(o,u,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function _p(){this.g=new os}function ta(o){this.i=o.Sb||null,this.h=o.ab||!1}p(ta,Kt),ta.prototype.g=function(){return new vi(this.i,this.h)};function vi(o,u){Oe.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(vi,Oe),n=vi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,mr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||c).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?fr(this):mr(this),this.readyState==3&&Cl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,fr(this))},n.Na=function(o){this.g&&(this.response=o,fr(this))},n.ga=function(){this.g&&fr(this)};function fr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,mr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pl(o){let u="";return ne(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function na(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Pl(f),typeof o=="string"?f!=null&&zt(f):Ae(o,u,f))}function ze(o){Oe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ze,Oe);var vp=/^https?$/i,kp=["POST","PUT"];n=ze.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():as.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){jl(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),N=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(kp,u,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,z]of f)this.g.setRequestHeader(C,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){jl(this,C)}};function jl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Dl(o),ki(o)}function Dl(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ue(this,"complete"),Ue(this,"abort"),ki(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ki(this,!0)),ze.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ol(this):this.Xa())},n.Xa=function(){Ol(this)};function Ol(o){if(o.h&&typeof i<"u"){if(o.v&&Pn(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ue(o,"readystatechange"),Pn(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=C===0){let z=String(o.D).match(El)[1]||null;!z&&c.self&&c.self.location&&(z=c.self.location.protocol.slice(0,-1)),g=!vp.test(z?z.toLowerCase():"")}f=g}if(f)Ue(o,"complete"),Ue(o,"success");else{o.o=6;try{var N=Pn(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",Dl(o)}}finally{ki(o)}}}}function ki(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||Ue(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Pn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Pn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ar(u)}};function Vl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xp(o){const u={};o=(o.g&&Pn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(b(o[g]))continue;var f=ft(o[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[N]||[];u[N]=C,C.push(f)}me(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function pr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ll(o){this.za=0,this.i=[],this.j=new fe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=pr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=pr("baseRetryDelayMs",5e3,o),this.Za=pr("retryDelaySeedMs",1e4,o),this.Ta=pr("forwardChannelMaxRetries",2,o),this.va=pr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new _l(o&&o.concurrentRequestLimit),this.Ba=new _p,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ll.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){ge(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=ql(this,null,this.W),wi(this)};function sa(o){if(Ml(o),o.I==3){var u=o.V++,f=Gt(o.J);if(Ae(f,"SID",o.M),Ae(f,"RID",u),Ae(f,"TYPE","terminate"),gr(o,f),u=new at(o,o.j,u),u.M=2,u.A=_i(Gt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.A,f=!0),f||(u.g=Kl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),X(u)}Wl(o)}function xi(o){o.g&&(ia(o),o.g.cancel(),o.g=null)}function Ml(o){xi(o),o.v&&(c.clearTimeout(o.v),o.v=null),Ei(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function wi(o){if(!vl(o.h)&&!o.m){o.m=!0;var u=o.Ea;H||y(),q||(H(),q=!0),w.add(u,o),o.D=0}}function wp(o,u){return kl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=_e(h(o.Ea,o,u),Hl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new at(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Ie(C),ae(C,this.U)):C=this.U),this.u!==null||this.R||(N.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Fl(this,N,u),f=Gt(this.J),Ae(f,"RID",o),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),gr(this,f),C&&(this.R?u="headers="+zt(Pl(C))+"&"+u:this.u&&na(f,this.u,C)),Zo(this.h,N),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",u),Ae(f,"SID","null"),N.U=!0,cs(N,f,null)):cs(N,f,u),this.I=2}}else this.I==3&&(o?Ul(this,o):this.i.length==0||vl(this.h)||Ul(this))};function Ul(o,u){var f;u?f=u.l:f=o.V++;const g=Gt(o.J);Ae(g,"SID",o.M),Ae(g,"RID",f),Ae(g,"AID",o.K),gr(o,g),o.u&&o.o&&na(g,o.u,o.o),f=new at(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Fl(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Zo(o.h,f),cs(f,g,u)}function gr(o,u){o.H&&ne(o.H,function(f,g){Ae(u,g,f)}),o.l&&ne({},function(f,g){Ae(u,g,f)})}function Fl(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var N=o.i;let ie=-1;for(;;){const Qe=["count="+f];ie==-1?f>0?(ie=N[0].g,Qe.push("ofs="+ie)):ie=0:Qe.push("ofs="+ie);let we=!0;for(let nt=0;nt<f;nt++){var C=N[nt].g;const Jt=N[nt].map;if(C-=ie,C<0)ie=Math.max(0,N[nt].g-100),we=!1;else try{C="req"+C+"_"||"";try{var z=Jt instanceof Map?Jt:Object.entries(Jt);for(const[ds,jn]of z){let Dn=jn;l(jn)&&(Dn=We(jn)),Qe.push(C+ds+"="+encodeURIComponent(Dn))}}catch(ds){throw Qe.push(C+"type="+encodeURIComponent("_badmap")),ds}}catch{g&&g(Jt)}}if(we){z=Qe.join("&");break e}}z=void 0}return o=o.i.splice(0,f),u.G=o,z}function zl(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;H||y(),q||(H(),q=!0),w.add(u,o),o.A=0}}function ra(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=_e(h(o.Da,o),Hl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,$l(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=_e(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ge(10),xi(this),$l(this))};function ia(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function $l(o){o.g=new at(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Gt(o.na);Ae(u,"RID","rpc"),Ae(u,"SID",o.M),Ae(u,"AID",o.K),Ae(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ae(u,"TO",o.ia),Ae(u,"TYPE","xmlhttp"),gr(o,u),o.u&&o.o&&na(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=_i(Gt(u)),f.u=null,f.R=!0,gi(f,o)}n.Va=function(){this.C!=null&&(this.C=null,xi(this),ra(this),ge(19))};function Ei(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Bl(o,u){var f=null;if(o.g==u){Ei(o),ia(o),o.g=null;var g=2}else if(Xo(o.h,u))f=u.G,xl(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var N=o.D;g=re(),Ue(g,new W(g,f)),wi(o)}else zl(o);else if(N=u.m,N==3||N==0&&u.X>0||!(g==1&&wp(o,u)||g==2&&ra(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),N){case 1:us(o,5);break;case 4:us(o,10);break;case 3:us(o,6);break;default:us(o,2)}}}function Hl(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function us(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const N=!g;g=new Rn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||cr(g,"https"),_i(g),N?yp(g.toString(),f):bp(g.toString(),f)}else ge(2);o.I=0,o.l&&o.l.pa(u),Wl(o),Ml(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function Wl(o){if(o.I=0,o.ja=[],o.l){const u=wl(o.h);(u.length!=0||o.i.length!=0)&&(A(o.ja,u),A(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function ql(o,u,f){var g=f instanceof Rn?Gt(f):new Rn(f);if(g.g!="")u&&(g.g=u+"."+g.g),lr(g,g.u);else{var N=c.location;g=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;const C=new Rn(null);g&&cr(C,g),u&&(C.g=u),N&&lr(C,N),f&&(C.h=f),g=C}return f=o.G,u=o.wa,f&&u&&Ae(g,f,u),Ae(g,"VER",o.ka),gr(o,g),g}function Kl(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ze(new ta({ab:f})):new ze(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}n=Gl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ii(){}Ii.prototype.g=function(o,u){return new Pt(o,u)};function Pt(o,u){Oe.call(this),this.g=new Ll(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rs(this)}p(Pt,Oe),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){sa(this.g)},Pt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=We(o),o=f);u.i.push(new Nn(u.Ya++,o)),u.I==3&&wi(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,sa(this.g),delete this.g,Pt.Z.N.call(this)};function Jl(o){G.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Jl,G);function Yl(){I.call(this),this.status=1}p(Yl,I);function Rs(o){this.g=o}p(Rs,Gl),Rs.prototype.ra=function(){Ue(this.g,"a")},Rs.prototype.qa=function(o){Ue(this.g,new Jl(o))},Rs.prototype.pa=function(o){Ue(this.g,new Yl)},Rs.prototype.oa=function(){Ue(this.g,"b")},Ii.prototype.createWebChannel=Ii.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Nf=function(){return new Ii},Sf=function(){return re()},Af=M,qa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ot.NO_ERROR=0,ot.TIMEOUT=8,ot.HTTP_ERROR=6,Wi=ot,_t.COMPLETE="complete",Tf=_t,hn.EventType=F,F.OPEN="a",F.CLOSE="b",F.ERROR="c",F.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Ir=hn,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,If=ze}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr="12.13.0";function Gk(n){sr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new yc("@firebase/firestore");function Cs(){return ws.logLevel}function B(n,...e){if(ws.logLevel<=de.DEBUG){const t=e.map(Uc);ws.debug(`Firestore (${sr}): ${n}`,...t)}}function En(n,...e){if(ws.logLevel<=de.ERROR){const t=e.map(Uc);ws.error(`Firestore (${sr}): ${n}`,...t)}}function Es(n,...e){if(ws.logLevel<=de.WARN){const t=e.map(Uc);ws.warn(`Firestore (${sr}): ${n}`,...t)}}function Uc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Rf(n,s,t)}function Rf(n,e,t){let s=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw En(s),new Error(s)}function be(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Rf(e,r,s)}function se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pt.UNAUTHENTICATED)))}shutdown(){}}class Yk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qk{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable((()=>r(this.currentUser)))};const c=()=>{const d=i;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},l=d=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new Cf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class Xk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Zk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Xk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ku{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const c=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ku(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ku(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=t0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ce(n,e){return n<e?-1:n>e?1:0}function Ka(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return ka(r)===ka(i)?ce(r,i):ka(r)?1:-1}return ce(n.length,e.length)}const n0=55296,s0=57343;function ka(n){const e=n.charCodeAt(0);return e>=n0&&e<=s0}function Ws(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="__name__";class Qt{constructor(e,t,s){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Qt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const s=Qt.isNumericId(e),r=Qt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Qt.extractNumericId(e).compare(Qt.extractNumericId(t)):Ka(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Ve extends Qt{construct(e,t,s){return new Ve(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new Ve(t)}static emptyPath(){return new Ve([])}}const r0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Qt{construct(e,t,s){return new ut(e,t,s)}static isValidIdentifier(e){return r0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gu}static keyField(){return new ut([Gu])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else l==="`"?(c=!c,r++):l!=="."||c?(s+=l,r++):(i(),r++)}if(i(),c)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ve.fromString(e))}static fromName(e){return new Y(Ve.fromString(e).popFirst(5))}static empty(){return new Y(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n,e,t){if(!t)throw new K(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function o0(n,e,t,s){if(e===!0&&s===!0)throw new K(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ju(n){if(!Y.isDocumentKey(n))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z(12329,{type:typeof n})}function Zt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zc(n);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,e){const t={typeString:n};return e&&(t.value=e),t}function ui(n,e){if(!Pf(n))throw new K(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(r&&typeof c!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&c!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new K(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=-62135596800,Qu=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Qu);return new Se(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yu)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qu}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ui(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:Ge("string",Se._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Se(0,0))}static max(){return new te(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=-1;function a0(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new Se(t+1,0):new Se(t,s));return new Wn(r,Y.empty(),e)}function c0(n){return new Wn(n.readTime,n.key,Wr)}class Wn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Wn(te.min(),Y.empty(),Wr)}static max(){return new Wn(te.max(),Y.empty(),Wr)}}function l0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==u0)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):O.reject(t)}static resolve(e){return new O(((t,s)=>{t(e)}))}static reject(e){return new O(((t,s)=>{s(e)}))}static waitFor(e){return new O(((t,s)=>{let r=0,i=0,c=!1;e.forEach((l=>{++r,l.next((()=>{++i,c&&i===r&&t()}),(d=>s(d)))})),c=!0,i===r&&t()}))}static or(e){let t=O.resolve(!1);for(const s of e)t=t.next((r=>r?O.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new O(((s,r)=>{const i=e.length,c=new Array(i);let l=0;for(let d=0;d<i;d++){const h=d;t(e[h]).next((m=>{c[h]=m,++l,l===i&&s(c)}),(m=>r(m)))}}))}static doWhile(e,t){return new O(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function h0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ir(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=-1;function Vo(n){return n==null}function oo(n){return n===0&&1/n==-1/0}function f0(n){return typeof n=="number"&&Number.isInteger(n)&&!oo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="";function m0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xu(e)),e=p0(n.get(t),e);return Xu(e)}function p0(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case jf:t+="";break;default:t+=i}}return t}function Xu(n){return n+jf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Df(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ct(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ed(this.data.getIterator())}getIteratorFrom(e){return new ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new jt([])}unionWith(e){let t=new Ze(ut.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new jt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Of("Invalid base64 string: "+i):i}})(e);return new dt(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let c=0;c<r.length;++c)i+=String.fromCharCode(r[c]);return i})(e);return new dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const g0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(n){if(be(!!n,39018),typeof n=="string"){let e=0;const t=g0.exec(n);if(be(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:He(n.seconds),nanos:He(n.nanos)}}function He(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kn(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="server_timestamp",Lf="__type__",Mf="__previous_value__",Uf="__local_write_time__";function Bc(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Lf])==null?void 0:s.stringValue)===Vf}function Lo(n){const e=n.mapValue.fields[Mf];return Bc(e)?Lo(e):e}function qr(n){const e=qn(n.mapValue.fields[Uf].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t,s,r,i,c,l,d,h,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=p}}const ao="(default)";class Kr{constructor(e,t){this.projectId=e,this.database=t||ao}static empty(){return new Kr("","")}get isDefaultDatabase(){return this.database===ao}isEqual(e){return e instanceof Kr&&e.projectId===this.projectId&&e.database===this.database}}function b0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="__type__",_0="__max__",ji={mapValue:{}},zf="__vector__",co="value";function Gn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bc(n)?4:k0(n)?9007199254740991:v0(n)?10:11:Z(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=Gn(n);if(t!==Gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qr(n).isEqual(qr(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const c=qn(r.timestampValue),l=qn(i.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Kn(r.bytesValue).isEqual(Kn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return He(r.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return He(r.integerValue)===He(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const c=He(r.doubleValue),l=He(i.doubleValue);return c===l?oo(c)===oo(l):isNaN(c)&&isNaN(l)}return!1})(n,e);case 9:return Ws(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return(function(r,i){const c=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Zu(c)!==Zu(l))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!on(c[d],l[d])))return!1;return!0})(n,e);default:return Z(52216,{left:n})}}function Gr(n,e){return(n.values||[]).find((t=>on(t,e)))!==void 0}function qs(n,e){if(n===e)return 0;const t=Gn(n),s=Gn(e);if(t!==s)return ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return(function(i,c){const l=He(i.integerValue||i.doubleValue),d=He(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1})(n,e);case 3:return td(n.timestampValue,e.timestampValue);case 4:return td(qr(n),qr(e));case 5:return Ka(n.stringValue,e.stringValue);case 6:return(function(i,c){const l=Kn(i),d=Kn(c);return l.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(i,c){const l=i.split("/"),d=c.split("/");for(let h=0;h<l.length&&h<d.length;h++){const m=ce(l[h],d[h]);if(m!==0)return m}return ce(l.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,c){const l=ce(He(i.latitude),He(c.latitude));return l!==0?l:ce(He(i.longitude),He(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return nd(n.arrayValue,e.arrayValue);case 10:return(function(i,c){var v,T,A,P;const l=i.fields||{},d=c.fields||{},h=(v=l[co])==null?void 0:v.arrayValue,m=(T=d[co])==null?void 0:T.arrayValue,p=ce(((A=h==null?void 0:h.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return p!==0?p:nd(h,m)})(n.mapValue,e.mapValue);case 11:return(function(i,c){if(i===ji.mapValue&&c===ji.mapValue)return 0;if(i===ji.mapValue)return 1;if(c===ji.mapValue)return-1;const l=i.fields||{},d=Object.keys(l),h=c.fields||{},m=Object.keys(h);d.sort(),m.sort();for(let p=0;p<d.length&&p<m.length;++p){const v=Ka(d[p],m[p]);if(v!==0)return v;const T=qs(l[d[p]],h[m[p]]);if(T!==0)return T}return ce(d.length,m.length)})(n.mapValue,e.mapValue);default:throw Z(23264,{he:t})}}function td(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=qn(n),s=qn(e),r=ce(t.seconds,s.seconds);return r!==0?r:ce(t.nanos,s.nanos)}function nd(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=qs(t[r],s[r]);if(i)return i}return ce(t.length,s.length)}function Ks(n){return Ga(n)}function Ga(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=qn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Kn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Y.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Ga(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const c of s)i?i=!1:r+=",",r+=`${c}:${Ga(t.fields[c])}`;return r+"}"})(n.mapValue):Z(61005,{value:n})}function qi(n){switch(Gn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lo(n);return e?16+qi(e):16;case 5:return 2*n.stringValue.length;case 6:return Kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+qi(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Zn(s.fields,((i,c)=>{r+=i.length+qi(c)})),r})(n.mapValue);default:throw Z(13486,{value:n})}}function Ja(n){return!!n&&"integerValue"in n}function Hc(n){return!!n&&"arrayValue"in n}function sd(n){return!!n&&"nullValue"in n}function rd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ki(n){return!!n&&"mapValue"in n}function v0(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ff])==null?void 0:s.stringValue)===zf}function Dr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Dr(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dr(n.arrayValue.values[t]);return e}return{...n}}function k0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dr(t)}setAll(e){let t=ut.emptyPath(),s={},r=[];e.forEach(((c,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=l.popLast()}c?s[l.lastSegment()]=Dr(c):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ki(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Zn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new St(Dr(this.value))}}function $f(n){const e=[];return Zn(n.fields,((t,s)=>{const r=new ut([t]);if(Ki(s)){const i=$f(s.mapValue).fields;if(i.length===0)e.push(r);else for(const c of i)e.push(r.child(c))}else e.push(r)})),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,s,r,i,c,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=c,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,te.min(),te.min(),te.min(),St.empty(),0)}static newFoundDocument(e,t,s,r){return new gt(e,1,t,te.min(),s,r,0)}static newNoDocument(e,t){return new gt(e,2,t,te.min(),te.min(),St.empty(),0)}static newUnknownDocument(e,t){return new gt(e,3,t,te.min(),te.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.position=e,this.inclusive=t}}function id(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],c=n.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(c.referenceValue),t.key):s=qs(c,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function od(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t="asc"){this.field=e,this.dir=t}}function x0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{}class Xe extends Bf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new E0(e,t,s):t==="array-contains"?new A0(e,s):t==="in"?new S0(e,s):t==="not-in"?new N0(e,s):t==="array-contains-any"?new R0(e,s):new Xe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new I0(e,s):new T0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qs(t,this.value)):t!==null&&Gn(this.value)===Gn(t)&&this.matchesComparison(qs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Bf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new an(e,t)}matches(e){return Hf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hf(n){return n.op==="and"}function Wf(n){return w0(n)&&Hf(n)}function w0(n){for(const e of n.filters)if(e instanceof an)return!1;return!0}function Ya(n){if(n instanceof Xe)return n.field.canonicalString()+n.op.toString()+Ks(n.value);if(Wf(n))return n.filters.map((e=>Ya(e))).join(",");{const e=n.filters.map((t=>Ya(t))).join(",");return`${n.op}(${e})`}}function qf(n,e){return n instanceof Xe?(function(s,r){return r instanceof Xe&&s.op===r.op&&s.field.isEqual(r.field)&&on(s.value,r.value)})(n,e):n instanceof an?(function(s,r){return r instanceof an&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,c,l)=>i&&qf(c,r.filters[l])),!0):!1})(n,e):void Z(19439)}function Kf(n){return n instanceof Xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ks(t.value)}`})(n):n instanceof an?(function(t){return t.op.toString()+" {"+t.getFilters().map(Kf).join(" ,")+"}"})(n):"Filter"}class E0 extends Xe{constructor(e,t,s){super(e,t,s),this.key=Y.fromName(s.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class I0 extends Xe{constructor(e,t){super(e,"in",t),this.keys=Gf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class T0 extends Xe{constructor(e,t){super(e,"not-in",t),this.keys=Gf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Gf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>Y.fromName(s.referenceValue)))}class A0 extends Xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hc(t)&&Gr(t.arrayValue,this.value)}}class S0 extends Xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gr(this.value.arrayValue,t)}}class N0 extends Xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gr(this.value.arrayValue,t)}}class R0 extends Xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Gr(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t=null,s=[],r=[],i=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=c,this.endAt=l,this.Te=null}}function ad(n,e=null,t=[],s=[],r=null,i=null,c=null){return new C0(n,e,t,s,r,i,c)}function Wc(n){const e=se(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Ya(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Vo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ks(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ks(s))).join(",")),e.Te=t}return e.Te}function qc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!x0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!od(n.startAt,e.startAt)&&od(n.endAt,e.endAt)}function Qa(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t=null,s=[],r=[],i=null,c="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=c,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function P0(n,e,t,s,r,i,c,l){return new Mo(n,e,t,s,r,i,c,l)}function Uo(n){return new Mo(n)}function cd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function j0(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function D0(n){return n.collectionGroup!==null}function Or(n){const e=se(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new Ze(ut.comparator);return c.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new uo(i,s))})),t.has(ut.keyField().canonicalString())||e.Ie.push(new uo(ut.keyField(),s))}return e.Ie}function en(n){const e=se(n);return e.Ee||(e.Ee=O0(e,Or(n))),e.Ee}function O0(n,e){if(n.limitType==="F")return ad(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new uo(r.field,i)}));const t=n.endAt?new lo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new lo(n.startAt.position,n.startAt.inclusive):null;return ad(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Xa(n,e,t){return new Mo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fo(n,e){return qc(en(n),en(e))&&n.limitType===e.limitType}function Jf(n){return`${Wc(en(n))}|lt:${n.limitType}`}function Ps(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Kf(r))).join(", ")}]`),Vo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Ks(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Ks(r))).join(",")),`Target(${s})`})(en(n))}; limitType=${n.limitType})`}function zo(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Y.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Or(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(c,l,d){const h=id(c,l,d);return c.inclusive?h<=0:h<0})(s.startAt,Or(s),r)||s.endAt&&!(function(c,l,d){const h=id(c,l,d);return c.inclusive?h>=0:h>0})(s.endAt,Or(s),r))})(n,e)}function V0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yf(n){return(e,t)=>{let s=!1;for(const r of Or(n)){const i=L0(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function L0(n,e,t){const s=n.field.isKeyField()?Y.comparator(e.key,t.key):(function(i,c,l){const d=c.data.field(i),h=l.data.field(i);return d!==null&&h!==null?qs(d,h):Z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Df(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Pe(Y.comparator);function In(){return M0}const Qf=new Pe(Y.comparator);function Tr(...n){let e=Qf;for(const t of n)e=e.insert(t.key,t);return e}function Xf(n){let e=Qf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function gs(){return Vr()}function Zf(){return Vr()}function Vr(){return new Ts((n=>n.toString()),((n,e)=>n.isEqual(e)))}const U0=new Pe(Y.comparator),F0=new Ze(Y.comparator);function le(...n){let e=F0;for(const t of n)e=e.add(t);return e}const z0=new Ze(ce);function $0(){return z0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(e)?"-0":e}}function em(n){return{integerValue:""+n}}function B0(n,e){return f0(e)?em(e):Kc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this._=void 0}}function H0(n,e,t){return n instanceof Jr?(function(r,i){const c={fields:{[Lf]:{stringValue:Vf},[Uf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Bc(i)&&(i=Lo(i)),i&&(c.fields[Mf]=i),{mapValue:c}})(t,e):n instanceof Yr?nm(n,e):n instanceof Qr?sm(n,e):(function(r,i){const c=tm(r,i),l=ld(c)+ld(r.Ae);return Ja(c)&&Ja(r.Ae)?em(l):Kc(r.serializer,l)})(n,e)}function W0(n,e,t){return n instanceof Yr?nm(n,e):n instanceof Qr?sm(n,e):t}function tm(n,e){return n instanceof ho?(function(s){return Ja(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Jr extends $o{}class Yr extends $o{constructor(e){super(),this.elements=e}}function nm(n,e){const t=rm(e);for(const s of n.elements)t.some((r=>on(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Qr extends $o{constructor(e){super(),this.elements=e}}function sm(n,e){let t=rm(e);for(const s of n.elements)t=t.filter((r=>!on(r,s)));return{arrayValue:{values:t}}}class ho extends $o{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ld(n){return He(n.integerValue||n.doubleValue)}function rm(n){return Hc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t){this.field=e,this.transform=t}}function K0(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Yr&&r instanceof Yr||s instanceof Qr&&r instanceof Qr?Ws(s.elements,r.elements,on):s instanceof ho&&r instanceof ho?on(s.Ae,r.Ae):s instanceof Jr&&r instanceof Jr})(n.transform,e.transform)}class G0{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bo{}function im(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new am(n.key,tn.none()):new di(n.key,n.data,tn.none());{const t=n.data,s=St.empty();let r=new Ze(ut.comparator);for(let i of e.fields)if(!r.has(i)){let c=t.field(i);c===null&&i.length>1&&(i=i.popLast(),c=t.field(i)),c===null?s.delete(i):s.set(i,c),r=r.add(i)}return new es(n.key,s,new jt(r.toArray()),tn.none())}}function J0(n,e,t){n instanceof di?(function(r,i,c){const l=r.value.clone(),d=dd(r.fieldTransforms,i,c.transformResults);l.setAll(d),i.convertToFoundDocument(c.version,l).setHasCommittedMutations()})(n,e,t):n instanceof es?(function(r,i,c){if(!Gi(r.precondition,i))return void i.convertToUnknownDocument(c.version);const l=dd(r.fieldTransforms,i,c.transformResults),d=i.data;d.setAll(om(r)),d.setAll(l),i.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):(function(r,i,c){i.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Lr(n,e,t,s){return n instanceof di?(function(i,c,l,d){if(!Gi(i.precondition,c))return l;const h=i.value.clone(),m=hd(i.fieldTransforms,d,c);return h.setAll(m),c.convertToFoundDocument(c.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof es?(function(i,c,l,d){if(!Gi(i.precondition,c))return l;const h=hd(i.fieldTransforms,d,c),m=c.data;return m.setAll(om(i)),m.setAll(h),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(i,c,l){return Gi(i.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l})(n,e,t)}function Y0(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=tm(s.transform,r||null);i!=null&&(t===null&&(t=St.empty()),t.set(s.field,i))}return t||null}function ud(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ws(s,r,((i,c)=>K0(i,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class di extends Bo{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class es extends Bo{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function om(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function dd(n,e,t){const s=new Map;be(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],c=i.transform,l=e.data.field(i.field);s.set(i.field,W0(c,l,t[r]))}return s}function hd(n,e,t){const s=new Map;for(const r of n){const i=r.transform,c=t.data.field(r.field);s.set(r.field,H0(i,c,e))}return s}class am extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q0 extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&J0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Lr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Lr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Zf();return this.mutations.forEach((r=>{const i=e.get(r.key),c=i.overlayedDocument;let l=this.applyToLocalView(c,i.mutatedFields);l=t.has(r.key)?null:l;const d=im(c,l);d!==null&&s.set(r.key,d),c.isValidDocument()||c.convertToNoDocument(te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),le())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,((t,s)=>ud(t,s)))&&Ws(this.baseMutations,e.baseMutations,((t,s)=>ud(t,s)))}}class Gc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return U0})();const i=e.mutations;for(let c=0;c<i.length;c++)r=r.insert(i[c].key,s[c].version);return new Gc(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,he;function tx(n){switch(n){case L.OK:return Z(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Z(15467,{code:n})}}function cm(n){if(n===void 0)return En("GRPC error has no .code"),L.UNKNOWN;switch(n){case qe.OK:return L.OK;case qe.CANCELLED:return L.CANCELLED;case qe.UNKNOWN:return L.UNKNOWN;case qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case qe.INTERNAL:return L.INTERNAL;case qe.UNAVAILABLE:return L.UNAVAILABLE;case qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case qe.NOT_FOUND:return L.NOT_FOUND;case qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case qe.ABORTED:return L.ABORTED;case qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case qe.DATA_LOSS:return L.DATA_LOSS;default:return Z(39323,{code:n})}}(he=qe||(qe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new zn([4294967295,4294967295],0);function fd(n){const e=nx().encode(n),t=new Ef;return t.update(e),new Uint8Array(t.digest())}function md(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([t,s],0),new zn([r,i],0)]}class Jc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(s<0)throw new Ar(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zn.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(zn.fromNumber(s)));return r.compare(sx)===1&&(r=new zn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=fd(e),[s,r]=md(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);if(!this.we(c))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),c=new Jc(i,r,t);return s.forEach((l=>c.insert(l))),c}insert(e){if(this.ge===0)return;const t=fd(e),[s,r]=md(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hi(te.min(),r,new Pe(ce),In(),le())}}class fi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new fi(s,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class lm{constructor(e,t){this.targetId=e,this.Ce=t}}class um{constructor(e,t,s=dt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class pd{constructor(){this.ve=0,this.Fe=gd(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),t=le(),s=le();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:Z(38017,{changeType:i})}})),new fi(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=gd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class rx{constructor(e){this.Ge=e,this.ze=new Map,this.je=In(),this.Je=Di(),this.He=Di(),this.Ze=new Pe(ce)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Qa(i))if(s===0){const c=new Y(i.path);this.et(t,c,gt.newNoDocument(c,te.min()))}else be(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const l=this.ut(e),d=l?this.ct(l,e,c):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let c,l;try{c=Kn(s).toUint8Array()}catch(d){if(d instanceof Of)return Es("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Jc(c,r,i)}catch(d){return Es(d instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const c=this.Ge.ht(),l=`projects/${c.projectId}/databases/${c.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,c)=>{const l=this.ot(c);if(l){if(i.current&&Qa(l.target)){const d=new Y(l.target.path);this.It(d).has(c)||this.Et(c,d)||this.et(c,d,gt.newNoDocument(d,e))}i.Be&&(t.set(c,i.ke()),i.Ke())}}));let s=le();this.He.forEach(((i,c)=>{let l=!0;c.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,c)=>c.setReadTime(e)));const r=new hi(e,t,this.Ze,this.je,s);return this.je=In(),this.Je=Di(),this.He=Di(),this.Ze=new Pe(ce),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new pd,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Ze(ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Di(){return new Pe(Y.comparator)}function gd(){return new Pe(Y.comparator)}const ix={asc:"ASCENDING",desc:"DESCENDING"},ox={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ax={and:"AND",or:"OR"};class cx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Za(n,e){return n.useProto3Json||Vo(e)?e:{value:e}}function fo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lx(n,e){return fo(n,e.toTimestamp())}function nn(n){return be(!!n,49232),te.fromTimestamp((function(t){const s=qn(t);return new Se(s.seconds,s.nanos)})(n))}function Yc(n,e){return ec(n,e).canonicalString()}function ec(n,e){const t=(function(r){return new Ve(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function hm(n){const e=Ve.fromString(n);return be(ym(e),10190,{key:e.toString()}),e}function tc(n,e){return Yc(n.databaseId,e.path)}function xa(n,e){const t=hm(e);if(t.get(1)!==n.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(mm(t))}function fm(n,e){return Yc(n.databaseId,e)}function ux(n){const e=hm(n);return e.length===4?Ve.emptyPath():mm(e)}function nc(n){return new Ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mm(n){return be(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yd(n,e,t){return{name:tc(n,e),fields:t.value.mapValue.fields}}function dx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,m){return h.useProto3Json?(be(m===void 0||typeof m=="string",58123),dt.fromBase64String(m||"")):(be(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),dt.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&(function(h){const m=h.code===void 0?L.UNKNOWN:cm(h.code);return new K(m,h.message||"")})(c);t=new um(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xa(n,s.document.name),i=nn(s.document.updateTime),c=s.document.createTime?nn(s.document.createTime):te.min(),l=new St({mapValue:{fields:s.document.fields}}),d=gt.newFoundDocument(r,i,c,l),h=s.targetIds||[],m=s.removedTargetIds||[];t=new Ji(h,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xa(n,s.document),i=s.readTime?nn(s.readTime):te.min(),c=gt.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Ji([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xa(n,s.document),i=s.removedTargetIds||[];t=new Ji([],i,r,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,c=new ex(r,i),l=s.targetId;t=new lm(l,c)}}return t}function hx(n,e){let t;if(e instanceof di)t={update:yd(n,e.key,e.value)};else if(e instanceof am)t={delete:tc(n,e.key)};else if(e instanceof es)t={update:yd(n,e.key,e.data),updateMask:kx(e.fieldMask)};else{if(!(e instanceof Q0))return Z(16599,{dt:e.type});t={verify:tc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,c){const l=c.transform;if(l instanceof Jr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qr)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ho)return{fieldPath:c.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:lx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)})(n,e.precondition)),t}function fx(n,e){return n&&n.length>0?(be(e!==void 0,14353),n.map((t=>(function(r,i){let c=r.updateTime?nn(r.updateTime):nn(i);return c.isEqual(te.min())&&(c=nn(i)),new G0(c,r.transformResults||[])})(t,e)))):[]}function mx(n,e){return{documents:[fm(n,e.path)]}}function px(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=fm(n,r);const i=(function(h){if(h.length!==0)return gm(an.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const c=(function(h){if(h.length!==0)return h.map((m=>(function(v){return{field:js(v.field),direction:bx(v.dir)}})(m)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=Za(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function gx(n){let e=ux(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){be(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(p){const v=pm(p);return v instanceof an&&Wf(v)?v.getFilters():[v]})(t.where));let c=[];t.orderBy&&(c=(function(p){return p.map((v=>(function(A){return new uo(Ds(A.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(v)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let v;return v=typeof p=="object"?p.value:p,Vo(v)?null:v})(t.limit));let d=null;t.startAt&&(d=(function(p){const v=!!p.before,T=p.values||[];return new lo(T,v)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const v=!p.before,T=p.values||[];return new lo(T,v)})(t.endAt)),P0(e,r,c,i,l,"F",d,h)}function yx(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ds(t.unaryFilter.field);return Xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Ds(t.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(t.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ds(t.unaryFilter.field);return Xe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Xe.create(Ds(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return an.create(t.compositeFilter.filters.map((s=>pm(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Z(1026)}})(t.compositeFilter.op))})(n):Z(30097,{filter:n})}function bx(n){return ix[n]}function _x(n){return ox[n]}function vx(n){return ax[n]}function js(n){return{fieldPath:n.canonicalString()}}function Ds(n){return ut.fromServerFormat(n.fieldPath)}function gm(n){return n instanceof Xe?(function(t){if(t.op==="=="){if(rd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NAN"}};if(sd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NOT_NAN"}};if(sd(t.value))return{unaryFilter:{field:js(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:js(t.field),op:_x(t.op),value:t.value}}})(n):n instanceof an?(function(t){const s=t.getFilters().map((r=>gm(r)));return s.length===1?s[0]:{compositeFilter:{op:vx(t.op),filters:s}}})(n):Z(54877,{filter:n})}function kx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ym(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function bm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,s,r,i=te.min(),c=te.min(),l=dt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.yt=e}}function wx(n){const e=gx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.bn=new Ix}addToCollectionParentIndex(e,t){return this.bn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Wn.min())}updateCollectionGroup(e,t,s){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ze(Ve.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ze(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_m=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(_m,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Jn(0)}static ar(){return new Jn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="LruGarbageCollector",Tx=1048576;function vd([n,e],[t,s]){const r=ce(n,t);return r===0?ce(e,s):r}class Ax{constructor(e){this.Pr=e,this.buffer=new Ze(vd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vd(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(_d,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ir(t)?B(_d,"Ignoring IndexedDB error during garbage collection: ",t):await rr(t)}await this.Ar(3e5)}))}}class Nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return O.resolve(Oo.ce);const s=new Ax(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(bd)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,c,l,d,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,c=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,t)))).next((p=>(i=p,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),Cs()<=de.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-m}ms
	Determined least recently used ${r} in `+(l-c)+`ms
	Removed ${i} targets in `+(d-l)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-m}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function Rx(n,e){return new Nx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.changes=new Ts((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?O.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Lr(s.mutation,r,jt.empty(),Se.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,le()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=le()){const r=gs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let c=Tr();return i.forEach(((l,d)=>{c=c.insert(l,d.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=gs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,le())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((c,l)=>{t.set(c,l)}))}))}computeViews(e,t,s,r){let i=In();const c=Vr(),l=(function(){return Vr()})();return t.forEach(((d,h)=>{const m=s.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof es)?i=i.insert(h.key,h):m!==void 0?(c.set(h.key,m.mutation.getFieldMask()),Lr(m.mutation,h,m.mutation.getFieldMask(),Se.now())):c.set(h.key,jt.empty())})),this.recalculateAndSaveOverlays(e,i).next((d=>(d.forEach(((h,m)=>c.set(h,m))),t.forEach(((h,m)=>l.set(h,new Px(m,c.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=Vr();let r=new Pe(((c,l)=>c-l)),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const l of c)l.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let m=s.get(d)||jt.empty();m=l.applyToLocalView(h,m),s.set(d,m);const p=(r.get(l.batchId)||le()).add(d);r=r.insert(l.batchId,p)}))})).next((()=>{const c=[],l=r.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,m=d.value,p=Zf();m.forEach((v=>{if(!i.has(v)){const T=im(t.get(v),s.get(v));T!==null&&p.set(v,T),i=i.add(v)}})),c.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return j0(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):D0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const c=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):O.resolve(gs());let l=Wr,d=i;return c.next((h=>O.forEach(h,((m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?O.resolve():this.remoteDocumentCache.getEntry(e,m).next((v=>{d=d.insert(m,v)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,d,h,le()))).next((m=>({batchId:l,changes:Xf(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((s=>{let r=Tr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let c=Tr();return this.indexManager.getCollectionParents(e,i).next((l=>O.forEach(l,(d=>{const h=(function(p,v){return new Mo(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((m=>{m.forEach(((p,v)=>{c=c.insert(p,v)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(i=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((c=>{i.forEach(((d,h)=>{const m=h.getKey();c.get(m)===null&&(c=c.insert(m,gt.newInvalidDocument(m)))}));let l=Tr();return c.forEach(((d,h)=>{const m=i.get(d);m!==void 0&&Lr(m.mutation,h,jt.empty(),Se.now()),zo(t,h)&&(l=l.insert(d,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return O.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:nn(r.createTime)}})(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:wx(r.bundledQuery),readTime:nn(r.readTime)}})(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.overlays=new Pe(Y.comparator),this.Lr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const s=gs();return O.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),O.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),O.resolve()}getOverlaysForCollection(e,t,s){const r=gs(),i=t.length+1,c=new Y(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&d.largestBatchId>s&&r.set(d.getKey(),d)}return O.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Pe(((h,m)=>h-m));const c=this.overlays.getIterator();for(;c.hasNext();){const h=c.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let m=i.get(h.largestBatchId);m===null&&(m=gs(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=gs(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,m)=>l.set(h,m))),!(l.size()>=r)););return O.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const c=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new Z0(t,s));let i=this.Lr.get(t);i===void 0&&(i=le(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.kr=new Ze(st.Kr),this.qr=new Ze(st.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new st(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new st(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new Y(new Ve([])),s=new st(t,e),r=new st(t,e+1),i=[];return this.qr.forEachInRange([s,r],(c=>{this.Wr(c),i.push(c.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Y(new Ve([])),s=new st(t,e),r=new st(t,e+1);let i=le();return this.qr.forEachInRange([s,r],(c=>{i=i.add(c.key)})),i}containsKey(e){const t=new st(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return Y.comparator(e.key,t.key)||ce(e.Jr,t.Jr)}static Ur(e,t){return ce(e.Jr,t.Jr)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Ze(st.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new X0(i,t,s,r);this.mutationQueue.push(c);for(const l of r)this.Hr=this.Hr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(c)}lookupMutationBatch(e,t){return O.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?$c:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new st(t,0),r=new st(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(c=>{const l=this.Zr(c.Jr);i.push(l)})),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ze(ce);return t.forEach((r=>{const i=new st(r,0),c=new st(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,c],(l=>{s=s.add(l.Jr)}))})),O.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const c=new st(new Y(i),0);let l=new Ze(ce);return this.Hr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(d.Jr)),!0)}),c),O.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return O.forEach(t.mutations,(r=>{const i=new st(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new st(t,0),r=this.Hr.firstAfterOrEqual(s);return O.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.ti=e,this.docs=(function(){return new Pe(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,c=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return O.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(t))}getEntries(e,t){let s=In();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():gt.newInvalidDocument(r))})),O.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=In();const c=t.path,l=new Y(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:m}}=d.getNext();if(!c.isPrefixOf(h.path))break;h.path.length>c.length+1||l0(c0(m),s)<=0||(r.has(m.key)||zo(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,s,r){Z(9500)}ni(e,t){return O.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Ux(this)}getSize(e){return O.resolve(this.size)}}class Ux extends Cx{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),O.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.persistence=e,this.ri=new Ts((t=>Wc(t)),qc),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new Qc,this.targetCount=0,this.oi=Jn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),O.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.lr(t),O.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((c,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(c),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),O.waitFor(i).next((()=>r))}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return O.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),O.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((c=>{i.push(r.markPotentiallyOrphaned(e,c))})),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return O.resolve(s)}containsKey(e,t){return O.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this._i={},this.overlays={},this.ai=new Oo(0),this.ui=!1,this.ui=!0,this.ci=new Vx,this.referenceDelegate=e(this),this.li=new Fx(this),this.indexManager=new Ex,this.remoteDocumentCache=(function(r){return new Mx(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new xx(t),this.Pi=new Dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ox,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Lx(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){B("MemoryPersistence","Starting transaction:",e);const r=new zx(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return O.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class zx extends d0{constructor(e){super(),this.currentSequenceNumber=e}}class Xc{constructor(e){this.persistence=e,this.Ri=new Qc,this.Ai=null}static Vi(e){return new Xc(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),O.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,(s=>{const r=Y.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class mo{constructor(e,t){this.persistence=e,this.fi=new Ts((s=>m0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Rx(this,t)}static Vi(e,t){return new mo(e,t)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return O.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?O.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(c=>this.wr(e,c,t).next((l=>{l||(s++,i.removeEntry(c,te.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),O.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),O.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qi(e.data.value)),t}wr(e,t,s){return O.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return O.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=le(),r=le();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Zc(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Zg()?8:h0(yt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((c=>{i.result=c})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((c=>{i.result=c}))})).next((()=>{if(i.result)return;const c=new $x;return this.ys(e,t,c).next((l=>{if(i.result=l,this.As)return this.ws(e,t,c,l.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Cs()<=de.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ps(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(Cs()<=de.DEBUG&&B("QueryEngine","Query:",Ps(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Cs()<=de.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ps(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(t))):O.resolve())}gs(e,t){if(cd(t))return O.resolve(null);let s=en(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Xa(t,null,"F"),s=en(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const c=le(...i);return this.fs.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.Ss(t,l);return this.bs(t,h,c,d.readTime)?this.gs(e,Xa(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return cd(t)||r.isEqual(te.min())?O.resolve(null):this.fs.getDocuments(e,s).next((i=>{const c=this.Ss(t,i);return this.bs(t,c,s,r)?O.resolve(null):(Cs()<=de.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ps(t)),this.Ds(e,c,t,a0(r,Wr)).next((l=>l)))}))}Ss(e,t){let s=new Ze(Yf(e));return t.forEach(((r,i)=>{zo(e,i)&&(s=s.add(i))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Cs()<=de.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ps(t)),this.fs.getDocumentsMatchingQuery(e,t,Wn.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((c=>{i=i.insert(c.key,c)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="LocalStore",Hx=3e8;class Wx{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Pe(ce),this.Fs=new Ts((i=>Wc(i)),qc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function qx(n,e,t,s){return new Wx(n,e,t,s)}async function km(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const c=[],l=[];let d=le();for(const h of r){c.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:c,addedBatchIds:l})))}))}))}function Kx(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(l,d,h,m){const p=h.batch,v=p.keys();let T=O.resolve();return v.forEach((A=>{T=T.next((()=>m.getEntry(d,A))).next((P=>{const S=h.docVersions.get(A);be(S!==null,48541),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),m.addEntry(P)))}))})),T.next((()=>l.mutationQueue.removeMutationBatch(d,p)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let d=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function xm(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Gx(n,e){const t=se(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((m,p)=>{const v=r.get(p);if(!v)return;l.push(t.li.removeMatchingKeys(i,m.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,m.addedDocuments,p))));let T=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(dt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,s)),r=r.insert(p,T),(function(P,S,$){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Hx?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(v,T,m)&&l.push(t.li.updateTargetData(i,T))}));let d=In(),h=le();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(Jx(i,c,e.documentUpdates).next((m=>{d=m.Bs,h=m.Ls}))),!s.isEqual(te.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(m)}return O.waitFor(l).next((()=>c.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,d,h))).next((()=>d))})).then((i=>(t.vs=r,i)))}function Jx(n,e,t){let s=le(),r=le();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let c=In();return t.forEach(((l,d)=>{const h=i.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),d.isNoDocument()&&d.version.isEqual(te.min())?(e.removeEntry(l,d.readTime),c=c.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),c=c.insert(l,d)):B(el,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)})),{Bs:c,Ls:r}}))}function Yx(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=$c),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Qx(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,O.resolve(r)):t.li.allocateTargetId(s).next((c=>(r=new _n(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function sc(n,e,t){const s=se(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(c=>s.persistence.referenceDelegate.removeTarget(c,r)))}catch(c){if(!ir(c))throw c;B(el,`Failed to update sequence numbers for target ${e}: ${c}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function kd(n,e,t){const s=se(n);let r=te.min(),i=le();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(d,h,m){const p=se(d),v=p.Fs.get(m);return v!==void 0?O.resolve(p.vs.get(v)):p.li.getTargetData(h,m)})(s,c,en(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(c,l.targetId).next((d=>{i=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(c,e,t?r:te.min(),t?i:le()))).next((l=>(Xx(s,V0(e),l),{documents:l,ks:i})))))}function Xx(n,e,t){let s=n.Ms.get(e)||te.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class xd{constructor(){this.activeTargetIds=$0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zx{constructor(){this.vo=new xd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new xd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="ConnectivityMonitor";class Ed{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(wd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(wd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi=null;function rc(){return Oi===null?Oi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oi++,"0x"+Oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="RestConnection",tw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nw{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===ao?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const c=rc(),l=this.Qo(e,t.toUriEncodedString());B(wa,`Sending RPC '${e}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,i);const{host:h}=new URL(l),m=ri(h);return this.zo(e,l,d,s,m).then((p=>(B(wa,`Received RPC '${e}' ${c}: `,p),p)),(p=>{throw Es(wa,`RPC '${e}' ${c} failed with error: `,p,"url: ",l,"request:",s),p}))}jo(e,t,s,r,i,c){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=tw[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection",_r=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Ms extends nw{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ms.c_){const e=Sf();_r(e,Af.STAT_EVENT,(t=>{t.stat===qa.PROXY?B(mt,"STAT_EVENT: detected buffering proxy"):t.stat===qa.NOPROXY&&B(mt,"STAT_EVENT: detected no buffering proxy")})),Ms.c_=!0}}zo(e,t,s,r,i){const c=rc();return new Promise(((l,d)=>{const h=new If;h.setWithCredentials(!0),h.listenOnce(Tf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Wi.NO_ERROR:const p=h.getResponseJson();B(mt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(p)),l(p);break;case Wi.TIMEOUT:B(mt,`RPC '${e}' ${c} timed out`),d(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case Wi.HTTP_ERROR:const v=h.getStatus();if(B(mt,`RPC '${e}' ${c} failed with status:`,v,"response text:",h.getResponseText()),v>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const A=T==null?void 0:T.error;if(A&&A.status&&A.message){const P=(function($){const R=$.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(R)>=0?R:L.UNKNOWN})(A.status);d(new K(P,A.message))}else d(new K(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new K(L.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:c,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(mt,`RPC '${e}' ${c} completed.`)}}));const m=JSON.stringify(r);B(mt,`RPC '${e}' ${c} sending request:`,r),h.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=rc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const h=i.join("");B(mt,`Creating RPC '${e}' stream ${r}: ${h}`,l);const m=c.createWebChannel(h,l);this.I_(m);let p=!1,v=!1;const T=new sw({Jo:A=>{v?B(mt,`Not sending because RPC '${e}' stream ${r} is closed:`,A):(p||(B(mt,`Opening RPC '${e}' stream ${r} transport.`),m.open(),p=!0),B(mt,`RPC '${e}' stream ${r} sending:`,A),m.send(A))},Ho:()=>m.close()});return _r(m,Ir.EventType.OPEN,(()=>{v||(B(mt,`RPC '${e}' stream ${r} transport opened.`),T.i_())})),_r(m,Ir.EventType.CLOSE,(()=>{v||(v=!0,B(mt,`RPC '${e}' stream ${r} transport closed`),T.o_(),this.E_(m))})),_r(m,Ir.EventType.ERROR,(A=>{v||(v=!0,Es(mt,`RPC '${e}' stream ${r} transport errored. Name:`,A.name,"Message:",A.message),T.o_(new K(L.UNAVAILABLE,"The operation could not be completed")))})),_r(m,Ir.EventType.MESSAGE,(A=>{var P;if(!v){const S=A.data[0];be(!!S,16349);const $=S,R=($==null?void 0:$.error)||((P=$[0])==null?void 0:P.error);if(R){B(mt,`RPC '${e}' stream ${r} received error:`,R);const V=R.status;let j=(function(w){const y=qe[w];if(y!==void 0)return cm(y)})(V),H=R.message;V==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),j===void 0&&(j=L.INTERNAL,H="Unknown error status: "+V+" with message "+R.message),v=!0,T.o_(new K(j,H)),m.close()}else B(mt,`RPC '${e}' stream ${r} received:`,S),T.__(S)}})),Ms.u_(),setTimeout((()=>{T.s_()}),0),T}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Nf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){return new Ms(n)}function Ea(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){return new cx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ms.c_=!1;class wm{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="PersistentStream";class Em{constructor(e,t,s,r,i,c,l,d){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(En(t.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new K(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(Id,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(B(Id,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iw extends Em{constructor(e,t,s,r,i,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=dx(this.serializer,e),s=(function(i){if(!("targetChange"in i))return te.min();const c=i.targetChange;return c.targetIds&&c.targetIds.length?te.min():c.readTime?nn(c.readTime):te.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=nc(this.serializer),t.addTarget=(function(i,c){let l;const d=c.target;if(l=Qa(d)?{documents:mx(i,d)}:{query:px(i,d).ft},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=dm(i,c.resumeToken);const h=Za(i,c.expectedCount);h!==null&&(l.expectedCount=h)}else if(c.snapshotVersion.compareTo(te.min())>0){l.readTime=fo(i,c.snapshotVersion.toTimestamp());const h=Za(i,c.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=yx(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=nc(this.serializer),t.removeTarget=e,this.K_(t)}}class ow extends Em{constructor(e,t,s,r,i,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=fx(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=nc(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>hx(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{}class cw extends aw{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,c])=>this.connection.Wo(e,ec(t,s),r,i,c))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(L.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,l])=>this.connection.jo(e,ec(t,s),r,c,l,i))).catch((c=>{throw c.name==="FirebaseError"?(c.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new K(L.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function lw(n,e,t,s){return new cw(n,e,t,s)}class uw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(En(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class dw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Jn(1e3),this.Va=new Jn(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((c=>{s.enqueueAndForget((async()=>{As(this)&&(B(cn,"Restarting streams for network reachability change."),await(async function(d){const h=se(d);h.da.add(4),await mi(h),h.ga.set("Unknown"),h.da.delete(4),await Wo(h)})(this))}))})),this.ga=new uw(s,r)}}async function Wo(n){if(As(n))for(const e of n.ma)await e(!0)}async function mi(n){for(const e of n.ma)await e(!1)}function ic(n,e){return n.Ea.get(e)||void 0}function Im(n,e){const t=se(n),s=ic(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const r=(function(l,d){const h=ic(l,d);h!==void 0&&l.Ra.delete(h);const m=(function(v,T){return T%2!=0?v.Va.next():v.Aa.next()})(l,d);return l.Ea.set(d,m),l.Ra.set(m,d),m})(t,e.targetId);B(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new _n(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,i),rl(t)?sl(t):or(t).O_()&&nl(t,i)}function tl(n,e){const t=se(n),s=or(t),r=ic(t,e);B(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),s.O_()&&Tm(t,r),t.Ia.size===0&&(s.O_()?s.L_():As(t)&&t.ga.set("Unknown"))}function nl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void B(cn,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}or(n).Z_(e)}function Tm(n,e){n.pa.$e(e),or(n).X_(e)}function sl(n){n.pa=new rx({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):le()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),or(n).start(),n.ga.ua()}function rl(n){return As(n)&&!or(n).x_()&&n.Ia.size>0}function As(n){return se(n).da.size===0}function Am(n){n.pa=void 0}async function hw(n){n.ga.set("Online")}async function fw(n){n.Ia.forEach(((e,t)=>{nl(n,e)}))}async function mw(n,e){Am(n),rl(n)?(n.ga.ha(e),sl(n)):n.ga.set("Unknown")}async function pw(n,e,t){if(n.ga.set("Online"),e instanceof um&&e.state===2&&e.cause)try{await(async function(r,i){const c=i.cause;for(const l of i.targetIds){if(r.Ia.has(l)){const d=r.Ra.get(l);d!==void 0&&(await r.remoteSyncer.rejectListen(d,c),r.Ea.delete(d),r.Ra.delete(l)),r.Ia.delete(l)}r.pa.removeTarget(l)}})(n,e)}catch(s){B(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await po(n,s)}else if(e instanceof Ji?n.pa.Xe(e):e instanceof lm?n.pa.st(e):n.pa.tt(e),!t.isEqual(te.min()))try{const s=await xm(n.localStore);t.compareTo(s)>=0&&await(function(i,c){const l=i.pa.Tt(c);l.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(m);p&&i.Ia.set(m,p.withResumeToken(h.resumeToken,c))}})),l.targetMismatches.forEach(((h,m)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(dt.EMPTY_BYTE_STRING,p.snapshotVersion)),Tm(i,h);const v=new _n(p.target,h,m,p.sequenceNumber);nl(i,v)}));const d=(function(m,p){const v=new Map;p.targetChanges.forEach(((A,P)=>{const S=m.Ra.get(P);S!==void 0&&v.set(S,A)}));let T=new Pe(ce);return p.targetMismatches.forEach(((A,P)=>{const S=m.Ra.get(A);S!==void 0&&(T=T.insert(S,P))})),new hi(p.snapshotVersion,v,T,p.documentUpdates,p.resolvedLimboDocuments)})(i,l);return i.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){B(cn,"Failed to raise snapshot:",s),await po(n,s)}}async function po(n,e,t){if(!ir(e))throw e;n.da.add(1),await mi(n),n.ga.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(cn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Wo(n)}))}function Sm(n,e){return e().catch((t=>po(n,t,e)))}async function qo(n){const e=se(n),t=Yn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$c;for(;gw(e);)try{const r=await Yx(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,yw(e,r)}catch(r){await po(e,r)}Nm(e)&&Rm(e)}function gw(n){return As(n)&&n.Ta.length<10}function yw(n,e){n.Ta.push(e);const t=Yn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Nm(n){return As(n)&&!Yn(n).x_()&&n.Ta.length>0}function Rm(n){Yn(n).start()}async function bw(n){Yn(n).ra()}async function _w(n){const e=Yn(n);for(const t of n.Ta)e.ea(t.mutations)}async function vw(n,e,t){const s=n.Ta.shift(),r=Gc.from(s,e,t);await Sm(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await qo(n)}async function kw(n,e){e&&Yn(n).Y_&&await(async function(s,r){if((function(c){return tx(c)&&c!==L.ABORTED})(r.code)){const i=s.Ta.shift();Yn(s).B_(),await Sm(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await qo(s)}})(n,e),Nm(n)&&Rm(n)}async function Td(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),B(cn,"RemoteStore received new credentials");const s=As(t);t.da.add(3),await mi(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Wo(t)}async function xw(n,e){const t=se(n);e?(t.da.delete(2),await Wo(t)):e||(t.da.add(2),await mi(t),t.ga.set("Unknown"))}function or(n){return n.ya||(n.ya=(function(t,s,r){const i=se(t);return i.sa(),new iw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:hw.bind(null,n),Yo:fw.bind(null,n),t_:mw.bind(null,n),H_:pw.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),rl(n)?sl(n):n.ga.set("Unknown")):(await n.ya.stop(),Am(n))}))),n.ya}function Yn(n){return n.wa||(n.wa=(function(t,s,r){const i=se(t);return i.sa(),new ow(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bw.bind(null,n),t_:kw.bind(null,n),ta:_w.bind(null,n),na:vw.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await qo(n)):(await n.wa.stop(),n.Ta.length>0&&(B(cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const c=Date.now()+s,l=new il(e,t,c,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(En("AsyncQueue",`${e}: ${n}`),ir(n))return new K(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Y.comparator(t.key,s.key):(t,s)=>Y.comparator(t.key,s.key),this.keyedMap=Tr(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Us;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.Sa=new Pe(Y.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):Z(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Gs{constructor(e,t,s,r,i,c,l,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const c=[];return t.forEach((l=>{c.push({type:0,doc:l})})),new Gs(e,t,Us.emptySet(t),c,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Ew{constructor(){this.queries=Sd(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const r=se(t),i=r.queries;r.queries=Sd(),i.forEach(((c,l)=>{for(const d of l.va)d.onError(s)}))})(this,new K(L.ABORTED,"Firestore shutting down"))}}function Sd(){return new Ts((n=>Jf(n)),Fo)}async function Cm(n,e){const t=se(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Fa()&&e.Ma()&&(s=2):(i=new ww,s=e.Ma()?0:1);try{switch(s){case 0:i.Ca=await t.onListen(r,!0);break;case 1:i.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const l=ol(c,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&al(t)}async function Pm(n,e){const t=se(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const c=i.va.indexOf(e);c>=0&&(i.va.splice(c,1),i.va.length===0?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Iw(n,e){const t=se(n);let s=!1;for(const r of e){const i=r.query,c=t.queries.get(i);if(c){for(const l of c.va)l.Na(r)&&(s=!0);c.Ca=r}}s&&al(t)}function Tw(n,e,t){const s=se(n),r=s.queries.get(e);if(r)for(const i of r.va)i.onError(t);s.queries.delete(e)}function al(n){n.xa.forEach((e=>{e.next()}))}var oc,Nd;(Nd=oc||(oc={})).Ba="default",Nd.Cache="cache";class jm{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==oc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.key=e}}class Om{constructor(e){this.key=e}}class Aw{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=le(),this.mutatedKeys=le(),this.iu=Yf(e),this.su=new Us(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new Ad,r=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,c=r,l=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,p)=>{const v=r.get(m),T=zo(this.query,p)?p:null,A=!!v&&this.mutatedKeys.has(v.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let S=!1;v&&T?v.data.isEqual(T.data)?A!==P&&(s.track({type:3,doc:T}),S=!0):this.uu(v,T)||(s.track({type:2,doc:T}),S=!0,(d&&this.iu(T,d)>0||h&&this.iu(T,h)<0)&&(l=!0)):!v&&T?(s.track({type:0,doc:T}),S=!0):v&&!T&&(s.track({type:1,doc:v}),S=!0,(d||h)&&(l=!0)),S&&(T?(c=c.add(T),i=P?i.add(m):i.delete(m)):(c=c.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const m=this.query.limitType==="F"?c.last():c.first();c=c.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{su:c,au:s,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const c=e.au.Da();c.sort(((m,p)=>(function(T,A){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:S})}};return P(T)-P(A)})(m.type,p.type)||this.iu(m.doc,p.doc))),this.cu(s),r=r??!1;const l=t&&!r?this.lu():[],d=this.ru.size===0&&this.current&&!r?1:0,h=d!==this.nu;return this.nu=d,c.length!==0||h?{snapshot:new Gs(this.query,e.su,i,c,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Ad,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=le(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new Om(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new Dm(s))})),t}Tu(e){this.tu=e.ks,this.ru=le();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Gs.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const cl="SyncEngine";class Sw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Nw{constructor(e){this.key=e,this.Eu=!1}}class Rw{constructor(e,t,s,r,i,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=c,this.Ru={},this.Au=new Ts((l=>Jf(l)),Fo),this.Vu=new Map,this.du=new Set,this.mu=new Pe(Y.comparator),this.fu=new Map,this.gu=new Qc,this.pu={},this.yu=new Map,this.wu=Jn.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Cw(n,e,t=!0){const s=zm(n);let r;const i=s.Au.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await Vm(s,e,t,!0),r}async function Pw(n,e){const t=zm(n);await Vm(t,e,!0,!1)}async function Vm(n,e,t,s){const r=await Qx(n.localStore,en(e)),i=r.targetId,c=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await jw(n,e,i,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&Im(n.remoteStore,r),l}async function jw(n,e,t,s,r){n.bu=(p,v,T)=>(async function(P,S,$,R){let V=S.view._u($);V.bs&&(V=await kd(P.localStore,S.query,!1).then((({documents:w})=>S.view._u(w,V))));const j=R&&R.targetChanges.get(S.targetId),H=R&&R.targetMismatches.get(S.targetId)!=null,q=S.view.applyChanges(V,P.isPrimaryClient,j,H);return Cd(P,S.targetId,q.hu),q.snapshot})(n,p,v,T);const i=await kd(n.localStore,e,!0),c=new Aw(e,i.ks),l=c._u(i.documents),d=fi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=c.applyChanges(l,n.isPrimaryClient,d);Cd(n,t,h.hu);const m=new Sw(e,t,c);return n.Au.set(e,m),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function Dw(n,e,t){const s=se(n),r=s.Au.get(e),i=s.Vu.get(r.targetId);if(i.length>1)return s.Vu.set(r.targetId,i.filter((c=>!Fo(c,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await sc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&tl(s.remoteStore,r.targetId),ac(s,r.targetId)})).catch(rr)):(ac(s,r.targetId),await sc(s.localStore,r.targetId,!0))}async function Ow(n,e){const t=se(n),s=t.Au.get(e),r=t.Vu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),tl(t.remoteStore,s.targetId))}async function Vw(n,e,t){const s=Bw(n);try{const r=await(function(c,l){const d=se(c),h=Se.now(),m=l.reduce(((T,A)=>T.add(A.key)),le());let p,v;return d.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let A=In(),P=le();return d.xs.getEntries(T,m).next((S=>{A=S,A.forEach((($,R)=>{R.isValidDocument()||(P=P.add($))}))})).next((()=>d.localDocuments.getOverlayedDocuments(T,A))).next((S=>{p=S;const $=[];for(const R of l){const V=Y0(R,p.get(R.key).overlayedDocument);V!=null&&$.push(new es(R.key,V,$f(V.value.mapValue),tn.exists(!0)))}return d.mutationQueue.addMutationBatch(T,h,$,l)})).next((S=>{v=S;const $=S.applyToLocalDocumentSet(p,P);return d.documentOverlayCache.saveOverlays(T,S.batchId,$)}))})).then((()=>({batchId:v.batchId,changes:Xf(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(c,l,d){let h=c.pu[c.currentUser.toKey()];h||(h=new Pe(ce)),h=h.insert(l,d),c.pu[c.currentUser.toKey()]=h})(s,r.batchId,t),await pi(s,r.changes),await qo(s.remoteStore)}catch(r){const i=ol(r,"Failed to persist write");t.reject(i)}}async function Lm(n,e){const t=se(n);try{const s=await Gx(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const c=t.fu.get(i);c&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?c.Eu=!0:r.modifiedDocuments.size>0?be(c.Eu,14607):r.removedDocuments.size>0&&(be(c.Eu,42227),c.Eu=!1))})),await pi(t,s,e)}catch(s){await rr(s)}}function Rd(n,e,t){const s=se(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Au.forEach(((i,c)=>{const l=c.view.Oa(e);l.snapshot&&r.push(l.snapshot)})),(function(c,l){const d=se(c);d.onlineState=l;let h=!1;d.queries.forEach(((m,p)=>{for(const v of p.va)v.Oa(l)&&(h=!0)})),h&&al(d)})(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Lw(n,e,t){const s=se(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.fu.get(e),i=r&&r.key;if(i){let c=new Pe(Y.comparator);c=c.insert(i,gt.newNoDocument(i,te.min()));const l=le().add(i),d=new hi(te.min(),new Map,new Pe(ce),c,l);await Lm(s,d),s.mu=s.mu.remove(i),s.fu.delete(e),ll(s)}else await sc(s.localStore,e,!1).then((()=>ac(s,e,t))).catch(rr)}async function Mw(n,e){const t=se(n),s=e.batch.batchId;try{const r=await Kx(t.localStore,e);Um(t,s,null),Mm(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await pi(t,r)}catch(r){await rr(r)}}async function Uw(n,e,t){const s=se(n);try{const r=await(function(c,l){const d=se(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return d.mutationQueue.lookupMutationBatch(h,l).next((p=>(be(p!==null,37113),m=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,m,l))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>d.localDocuments.getDocuments(h,m)))}))})(s.localStore,e);Um(s,e,t),Mm(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await pi(s,r)}catch(r){await rr(r)}}function Mm(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function Um(n,e,t){const s=se(n);let r=s.pu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function ac(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Vu.get(e))n.Au.delete(s),t&&n.Ru.Du(s,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((s=>{n.gu.containsKey(s)||Fm(n,s)}))}function Fm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(tl(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),ll(n))}function Cd(n,e,t){for(const s of t)s instanceof Dm?(n.gu.addReference(s.key,e),Fw(n,s)):s instanceof Om?(B(cl,"Document no longer in limbo: "+s.key),n.gu.removeReference(s.key,e),n.gu.containsKey(s.key)||Fm(n,s.key)):Z(19791,{Cu:s})}function Fw(n,e){const t=e.key,s=t.path.canonicalString();n.mu.get(t)||n.du.has(s)||(B(cl,"New document in limbo: "+t),n.du.add(s),ll(n))}function ll(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new Y(Ve.fromString(e)),s=n.wu.next();n.fu.set(s,new Nw(t)),n.mu=n.mu.insert(t,s),Im(n.remoteStore,new _n(en(Uo(t.path)),s,"TargetPurposeLimboResolution",Oo.ce))}}async function pi(n,e,t){const s=se(n),r=[],i=[],c=[];s.Au.isEmpty()||(s.Au.forEach(((l,d)=>{c.push(s.bu(d,e,t).then((h=>{var m;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=Zc.Es(d.targetId,h);i.push(p)}})))})),await Promise.all(c),s.Ru.H_(r),await(async function(d,h){const m=se(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>O.forEach(h,(v=>O.forEach(v.Ts,(T=>m.persistence.referenceDelegate.addReference(p,v.targetId,T))).next((()=>O.forEach(v.Is,(T=>m.persistence.referenceDelegate.removeReference(p,v.targetId,T)))))))))}catch(p){if(!ir(p))throw p;B(el,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const T=m.vs.get(v),A=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(v,P)}}})(s.localStore,i))}async function zw(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){B(cl,"User change. New user:",e.toKey());const s=await km(t.localStore,e);t.currentUser=e,(function(i,c){i.yu.forEach((l=>{l.forEach((d=>{d.reject(new K(L.CANCELLED,c))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await pi(t,s.Ns)}}function $w(n,e){const t=se(n),s=t.fu.get(e);if(s&&s.Eu)return le().add(s.key);{let r=le();const i=t.Vu.get(e);if(!i)return r;for(const c of i){const l=t.Au.get(c);r=r.unionWith(l.view.ou)}return r}}function zm(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lw.bind(null,e),e.Ru.H_=Iw.bind(null,e.eventManager),e.Ru.Du=Tw.bind(null,e.eventManager),e}function Bw(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uw.bind(null,e),e}class go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ho(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return qx(this.persistence,new Bx,e.initialUser,this.serializer)}xu(e){return new vm(Xc.Vi,this.serializer)}Mu(e){return new Zx}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}go.provider={build:()=>new go};class Hw extends go{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){be(this.persistence.referenceDelegate instanceof mo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Sx(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new vm((s=>mo.Vi(s,t)),this.serializer)}}class cc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zw.bind(null,this.syncEngine),await xw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ew})()}createDatastore(e){const t=Ho(e.databaseInfo.databaseId),s=rw(e.databaseInfo);return lw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,c,l){return new dw(s,r,i,c,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Rd(this.syncEngine,t,0)),(function(){return Ed.v()?new Ed:new ew})())}createSyncEngine(e,t){return(function(r,i,c,l,d,h,m){const p=new Rw(r,i,c,l,d,h);return m&&(p.Su=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=se(r);B(cn,"RemoteStore shutting down."),i.da.add(5),await mi(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}cc.provider={build:()=>new cc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="FirestoreClient";class Ww{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=Fc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async c=>{B(Qn,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(B(Qn,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ol(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ia(n,e){n.asyncQueue.verifyOperationInProgress(),B(Qn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await km(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Pd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qw(n);B(Qn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Td(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Td(e.remoteStore,r))),n._onlineComponents=e}async function qw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(Qn,"Using user provided OfflineComponentProvider");try{await Ia(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===L.FAILED_PRECONDITION||r.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Es("Error using user provided cache. Falling back to memory cache: "+t),await Ia(n,new go)}}else B(Qn,"Using default OfflineComponentProvider"),await Ia(n,new Hw(void 0));return n._offlineComponents}async function Bm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(Qn,"Using user provided OnlineComponentProvider"),await Pd(n,n._uninitializedComponentsProvider._online)):(B(Qn,"Using default OnlineComponentProvider"),await Pd(n,new cc))),n._onlineComponents}function Kw(n){return Bm(n).then((e=>e.syncEngine))}async function lc(n){const e=await Bm(n),t=e.eventManager;return t.onListen=Cw.bind(null,e.syncEngine),t.onUnlisten=Dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ow.bind(null,e.syncEngine),t}function Gw(n,e,t,s){const r=new $m(s),i=new jm(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>Cm(await lc(n),i))),()=>{r.Ku(),n.asyncQueue.enqueueAndForget((async()=>Pm(await lc(n),i)))}}function Jw(n,e,t={}){const s=new $n;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,d,h){const m=new $m({next:v=>{m.Ku(),c.enqueueAndForget((()=>Pm(i,p)));const T=v.docs.has(l);!T&&v.fromCache?h.reject(new K(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&d&&d.source==="server"?h.reject(new K(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new jm(Uo(l.path),m,{includeMetadataChanges:!0,Wa:!0});return Cm(i,p)})(await lc(n),n.asyncQueue,e,t,s))),s.promise}function Yw(n,e){const t=new $n;return n.asyncQueue.enqueueAndForget((async()=>Vw(await Kw(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="ComponentProvider",jd=new Map;function Xw(n,e,t,s,r){return new y0(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Hm(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="firestore.googleapis.com",Dd=!0;class Od{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wm,this.ssl=Dd}else this.host=e.host,this.ssl=e.ssl??Dd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_m;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Tx)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hm(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Od({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Od(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Jk;switch(s.type){case"firstParty":return new Zk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=jd.get(t);s&&(B(Qw,"Removing Datastore"),jd.delete(t),s.terminate())})(this),Promise.resolve()}}function Zw(n,e,t,s={}){var h;n=Zt(n,ul);const r=ri(e),i=n._getSettings(),c={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&uh(`https://${l}`),i.host!==Wm&&i.host!==l&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...i,host:l,ssl:r,emulatorOptions:s};if(!ks(d,c)&&(n._setSettings(d),s.mockUserToken)){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=pt.MOCK_USER;else{m=qg(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(v)}n._authCredentials=new Yk(new Cf(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ko(this.firestore,e,this._query)}}class Je{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ui(t,Je._jsonSchema))return new Je(e,s||null,new Y(Ve.fromString(t.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ge("string",Je._jsonSchemaVersion),referencePath:Ge("string")};class Xr extends Ko{constructor(e,t,s){super(e,t,Uo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Y(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function dl(n,e,...t){if(n=ee(n),arguments.length===1&&(e=Fc.newId()),i0("doc","path",e),n instanceof ul){const s=Ve.fromString(e,...t);return Ju(s),new Je(n,null,new Y(s))}{if(!(n instanceof Je||n instanceof Xr))throw new K(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ve.fromString(e,...t));return Ju(s),new Je(n.firestore,n instanceof Xr?n.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="AsyncQueue";class Ld{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new wm(this,"async_queue_retry"),this.lc=()=>{const s=Ea();s&&B(Vd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=Ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new $n;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ir(e))throw e;B(Vd,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,En("INTERNAL UNHANDLED ERROR: ",Md(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=il.createAndSchedule(this,e,t,s,(i=>this.Ec(i)));return this.oc.push(r),r}Pc(){this._c&&Z(47125,{Rc:Md(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Md(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Js extends ul{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ld,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ld(e),this._firestoreClient=void 0,await e}}}function eE(n,e){const t=typeof n=="object"?n:mh(),s=typeof n=="string"?n:ao,r=_c(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Hg("firestore");i&&Zw(r,...i)}return r}function hl(n){if(n._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tE(n),n._firestoreClient}function tE(n){var s,r,i,c;const e=n._freezeSettings(),t=Xw(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ww(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(dt.fromBase64String(e))}catch(t){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Lt(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ui(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ge("string",Lt._jsonSchemaVersion),bytes:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(ui(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Ge("string",sn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ui(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wt(e.vectorValues);throw new K(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:Ge("string",Wt._jsonSchemaVersion),vectorValues:Ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=/^__.*__$/;class sE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,t,this.fieldTransforms):new di(e,this.data,t,this.fieldTransforms)}}class qm{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new es(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Km(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:n})}}class ml{constructor(e,t,s,r,i,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ml({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return yo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Km(this.dataSource)&&nE.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class rE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ho(e)}V(e,t,s,r=!1){return new ml({dataSource:e,methodName:t,targetDoc:s,path:ut.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gm(n){const e=n._freezeSettings(),t=Ho(n._databaseId);return new rE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iE(n,e,t,s,r,i={}){const c=n.V(i.merge||i.mergeFields?2:0,e,t,r);gl("Data must be an object, but it was:",c,s);const l=Jm(s,c);let d,h;if(i.merge)d=new jt(c.fieldMask),h=c.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=Zr(e,p,t);if(!c.contains(v))throw new K(L.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Xm(m,v)||m.push(v)}d=new jt(m),h=c.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=c.fieldTransforms;return new sE(new St(l),d,h)}class Jo extends Go{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jo}}class pl extends Go{_toFieldTransform(e){return new q0(e.path,new Jr)}isEqual(e){return e instanceof pl}}function oE(n,e,t,s){const r=n.V(1,e,t);gl("Data must be an object, but it was:",r,s);const i=[],c=St.empty();Zn(s,((d,h)=>{const m=Qm(e,d,t);h=ee(h);const p=r.Sc(m);if(h instanceof Jo)i.push(m);else{const v=Yo(h,p);v!=null&&(i.push(m),c.set(m,v))}}));const l=new jt(i);return new qm(c,l,r.fieldTransforms)}function aE(n,e,t,s,r,i){const c=n.V(1,e,t),l=[Zr(e,s,t)],d=[r];if(i.length%2!=0)throw new K(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(Zr(e,i[v])),d.push(i[v+1]);const h=[],m=St.empty();for(let v=l.length-1;v>=0;--v)if(!Xm(h,l[v])){const T=l[v];let A=d[v];A=ee(A);const P=c.Sc(T);if(A instanceof Jo)h.push(T);else{const S=Yo(A,P);S!=null&&(h.push(T),m.set(T,S))}}const p=new jt(h);return new qm(m,p,c.fieldTransforms)}function Yo(n,e){if(Ym(n=ee(n)))return gl("Unsupported field value:",e,n),Jm(n,e);if(n instanceof Go)return(function(s,r){if(!Km(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,r){const i=[];let c=0;for(const l of s){let d=Yo(l,r.bc(c));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),c++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=ee(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return B0(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Se.fromDate(s);return{timestampValue:fo(r.serializer,i)}}if(s instanceof Se){const i=new Se(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fo(r.serializer,i)}}if(s instanceof sn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Lt)return{bytesValue:dm(r.serializer,s._byteString)};if(s instanceof Je){const i=r.databaseId,c=s.firestore._databaseId;if(!c.isEqual(i))throw r.Dc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yc(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Wt)return(function(c,l){const d=c instanceof Wt?c.toArray():c;return{mapValue:{fields:{[Ff]:{stringValue:zf},[co]:{arrayValue:{values:d.map((m=>{if(typeof m!="number")throw l.Dc("VectorValues must only contain numeric values.");return Kc(l.serializer,m)}))}}}}}})(s,r);if(bm(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${zc(s)}`)})(n,e)}function Jm(n,e){const t={};return Df(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,((s,r)=>{const i=Yo(r,e.yc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Ym(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof sn||n instanceof Lt||n instanceof Je||n instanceof Go||n instanceof Wt||bm(n))}function gl(n,e,t){if(!Ym(t)||!Pf(t)){const s=zc(t);throw s==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+s)}}function Zr(n,e,t){if((e=ee(e))instanceof fl)return e._internalPath;if(typeof e=="string")return Qm(n,e);throw yo("Field path arguments must be of type string or ",n,!1,void 0,t)}const cE=new RegExp("[~\\*/\\[\\]]");function Qm(n,e,t){if(e.search(cE)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fl(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yo(n,e,t,s,r){const i=s&&!s.isEmpty(),c=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(i||c)&&(d+=" (found",i&&(d+=` in field ${s}`),c&&(d+=` in document ${r}`),d+=")"),new K(L.INVALID_ARGUMENT,l+n+d)}function Xm(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{convertValue(e,t="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Zn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[co].arrayValue)==null?void 0:r.values)==null?void 0:i.map((c=>He(c.doubleValue)));return new Wt(t)}convertGeoPoint(e){return new sn(He(e.latitude),He(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Lo(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(qr(e));default:return null}}convertTimestamp(e){const t=qn(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ve.fromString(e);be(ym(s),9688,{name:e});const r=new Kr(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(t)||En(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends lE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,t)}}function uE(){return new pl("serverTimestamp")}const Ud="@firebase/firestore",Fd="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Zr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dE extends ep{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function fE(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends ep{constructor(e,t,s,r,i,c){super(e,t,s,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Zr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:Ge("string",_s._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class Yi extends _s{data(e={}){return super.data(e)}}class Fs{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Sr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Yi(this._firestore,this._userDataWriter,s.key,s,new Sr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((l=>{const d=new Yi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Sr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const d=new Yi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Sr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return l.type!==0&&(h=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),m=c.indexOf(l.doc.key)),{type:mE(l.type),doc:d,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fs._jsonSchemaVersion="firestore/querySnapshot/1.0",Fs._jsonSchema={type:Ge("string",Fs._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){n=Zt(n,Je);const e=Zt(n.firestore,Js),t=hl(e);return Jw(t,n._key).then((s=>np(e,n,s)))}function gE(n,e,t){n=Zt(n,Je);const s=Zt(n.firestore,Js),r=fE(n.converter,e),i=Gm(s);return tp(s,[iE(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,tn.none())])}function yE(n,e,t,...s){n=Zt(n,Je);const r=Zt(n.firestore,Js),i=Gm(r);let c;return c=typeof(e=ee(e))=="string"||e instanceof fl?aE(i,"updateDoc",n._key,e,t,s):oE(i,"updateDoc",n._key,e),tp(r,[c.toMutation(n._key,tn.exists(!0))])}function bE(n,...e){var h,m,p;n=ee(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||zd(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(zd(e[s])){const v=e[s];e[s]=(h=v.next)==null?void 0:h.bind(v),e[s+1]=(m=v.error)==null?void 0:m.bind(v),e[s+2]=(p=v.complete)==null?void 0:p.bind(v)}let i,c,l;if(n instanceof Je)c=Zt(n.firestore,Js),l=Uo(n._key.path),i={next:v=>{e[s]&&e[s](np(c,n,v))},error:e[s+1],complete:e[s+2]};else{const v=Zt(n,Ko);c=Zt(v.firestore,Js),l=v._query;const T=new Zm(c);i={next:A=>{e[s]&&e[s](new Fs(c,T,v,A))},error:e[s+1],complete:e[s+2]},hE(n._query)}const d=hl(c);return Gw(d,l,r,i)}function tp(n,e){const t=hl(n);return Yw(t,e)}function np(n,e,t){const s=t.docs.get(e._key),r=new Zm(n);return new _s(n,r,e._key,s,new Sr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Gk(Xs),Bs(new xs("firestore",((s,{instanceIdentifier:r,options:i})=>{const c=s.getProvider("app").getImmediate(),l=new Js(new Qk(s.getProvider("auth-internal")),new e0(c,s.getProvider("app-check-internal")),b0(c,r),c);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Mn(Ud,Fd,e),Mn(Ud,Fd,"esm2020")})();const _E={apiKey:"AIzaSyC1lWDUwmBOlDmJHiqn8PBdGXf63GFZM8g",authDomain:"kocky-sveta-2026.firebaseapp.com",projectId:"kocky-sveta-2026",storageBucket:"kocky-sveta-2026.firebasestorage.app",messagingSenderId:"390822285835",appId:"1:390822285835:web:31021a6bb7c67d7a58ad0e",measurementId:"G-VB20M681V5"},sp=fh(_E),yl=eE(sp),vE=li(sp);nf(vE,Pc).catch(()=>{});async function kE(n){const t=new TextEncoder().encode(n),s=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(s)).map(i=>i.toString(16).padStart(2,"0")).join("")}function xE(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function wE(){return String(Math.floor(1e3+Math.random()*9e3))}async function rp(n){var c;const e=n.customRoomId?n.customRoomId.toUpperCase().trim():xE(),t=n.pin||wE(),s=await kE(t),r=(c=li().currentUser)==null?void 0:c.uid;if(!r)throw new Error("Nie si prihlásený");const i={ownerPinHash:s,status:"waiting",updatedAt:uE(),selectedSkin:n.selectedSkin,rules:n.rules,players:{[r]:{name:n.hostName,score:0,isReady:!1,online:!0}},gameState:{currentTurn:r,lastRoll:[],history:[]}};return await gE(dl(yl,"rooms",e),i),window.__ksVerboseFirebase&&console.log("[createRoom] roomId:",e,"uid:",r,"pin:",t),{roomId:e,pin:t}}const EE=Object.freeze(Object.defineProperty({__proto__:null,createRoom:rp},Symbol.toStringTag,{value:"Module"}));async function IE(n){var r;const e=dl(yl,"rooms",n.roomId);if(!(await pE(e)).exists())throw window.__ksVerboseFirebase&&console.error("[joinRoom] Miestnosť neexistuje:",n.roomId),new Error("Miestnosť neexistuje");const s=(r=li().currentUser)==null?void 0:r.uid;if(!s)throw new Error("Nie si prihlásený");return await yE(e,{[`players.${s}`]:{name:n.playerName,score:0,isReady:!1,online:!0}}),window.__ksVerboseFirebase&&console.log("[joinRoom] roomId:",n.roomId,"uid:",s),{uid:s}}function TE(){const n=Ur(e=>e.status);return n==="connected"?a.jsx(ni,{size:18,className:"text-green-400"}):n==="error"?a.jsx(vo,{size:18,className:"text-red-400"}):a.jsx(Jd,{size:18,className:"ks-muted"})}function AE({roomState:n,myUid:e}){if(!(n!=null&&n.players))return null;const t=Object.entries(n.players);return t.length===0?null:a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono",children:[a.jsx(Xd,{size:13}),"HRÁČI V MIESTNOSTI (",t.length,")"]}),a.jsx("div",{className:"divide-y ks-border-sub",children:t.map(([s,r])=>a.jsxs("div",{className:"flex items-center gap-3 px-4 py-3",children:[a.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${r.online?"bg-green-400":"bg-zinc-600"}`}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"ks-cream text-sm font-medium truncate",children:[r.name||"hráč",s===e&&a.jsx("span",{className:"ks-muted text-xs ml-1.5",children:"(ty)"})]}),a.jsx("div",{className:"ks-muted text-xs",children:r.online?"online":"offline"})]})]},s))})]})}function SE({onBack:n,activeSkin:e,activeRules:t,defaultRoomName:s}){const{roomId:r,uid:i,roomState:c,status:l,setRoomId:d,setUid:h,setRoomState:m,setStatus:p,setIsRecorder:v,reset:T}=Ur(),[A,P]=D.useState(""),[S,$]=D.useState(""),[R,V]=D.useState(""),[j,H]=D.useState(!1),[q,w]=D.useState(!1),[y,_]=D.useState(!!s),[k,x]=D.useState(s||""),E=async()=>{const ne=li();return await ne.authStateReady(),ne.currentUser||await qh(ne),ne.currentUser.uid},b=y&&k.trim()?k.trim():"hráč",oe=async()=>{H(!0),V("");try{const ne=await E(),{roomId:me}=await rp({hostName:b,selectedSkin:e||"classic",rules:t||[]});d(me),h(ne),v(!0),p("connected")}catch(ne){const me=(ne==null?void 0:ne.message)||String(ne);V(`Chyba: ${me}`),console.error("[OnlineScreen] createRoom failed:",ne)}finally{H(!1)}},ve=async()=>{const ne=A.toUpperCase().trim();if(!ne){$("Zadaj kód miestnosti");return}H(!0),$("");try{const me=await E();await IE({roomId:ne,playerName:b}),d(ne),h(me),v(!1),p("connected")}catch(me){$(me.message||"Miestnosť neexistuje")}finally{H(!1)}},it=()=>{n()},bt=()=>{window.confirm("Naozaj sa chceš odhlásiť? Máš zapísaný kód miestnosti?")&&(T(),n())},kt=()=>{navigator.clipboard.writeText(r||"").then(()=>{w(!0),setTimeout(()=>w(!1),2e3)})};return a.jsxs("div",{className:"min-h-screen ks-bg ks-cream ks-body flex flex-col",children:[a.jsxs("div",{className:"flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-4 border-b ks-border-sub",children:[a.jsx("button",{onClick:it,className:"ks-press p-2 rounded-sm ks-border-sub border",children:a.jsx(vs,{size:20,className:"ks-gold"})}),a.jsx("h2",{className:"ks-display ks-gold text-2xl font-semibold flex-1",children:"Online miestnosť"}),a.jsx(TE,{})]}),a.jsxs("div",{className:"flex-1 px-4 py-5 max-w-md w-full mx-auto flex flex-col gap-4 overflow-y-auto",children:[!r&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:a.jsxs("div",{className:"px-4 py-4 space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"ks-muted text-xs ks-mono block mb-1",children:"KÓD MIESTNOSTI"}),a.jsx("input",{value:A,onChange:ne=>{P(ne.target.value.toUpperCase().slice(0,8)),$(""),V("")},onKeyDown:ne=>ne.key==="Enter"&&ve(),placeholder:"Zadaj existujúci kód",className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none ks-mono tracking-widest"})]}),a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>_(ne=>!ne),className:"flex items-center gap-2 ks-press",children:[a.jsx("div",{className:`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${y?"ks-gold-bg border-transparent":"ks-border-sub border"}`,children:y&&a.jsx(zs,{size:11,className:"text-black"})}),a.jsx(Ql,{size:13,className:"ks-muted"}),a.jsx("span",{className:"ks-muted text-xs",children:"Chcem zadať meno zariadenia"})]}),a.jsx("p",{className:"ks-muted text-xs mt-1 ml-6 leading-relaxed opacity-70",children:"Meno sa zobrazí druhému zariadeniu. Je to len voliteľné označenie."}),y&&a.jsx("div",{className:"mt-3 ml-6",children:a.jsx("input",{value:k,onChange:ne=>x(ne.target.value.slice(0,20)),placeholder:"napr. Obývačka, Telefón...",autoFocus:!0,className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"})})]}),S&&a.jsx("p",{className:"text-red-400 text-xs",children:S}),a.jsx("button",{onClick:ve,disabled:j||!A.trim(),className:"ks-gold-bg w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm",children:j?"Pripájam...":"PRIPOJIŤ SA"})]})}),a.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:a.jsxs("div",{className:"px-4 py-4 space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Ca,{size:16,className:"ks-muted"}),a.jsx("h3",{className:"ks-cream font-semibold",children:"Vytvoriť novú miestnosť"})]}),a.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Toto vytvorí nový kód miestnosti pre synchronizáciu aktuálnej hry, archívu a skinu."}),R&&a.jsx("p",{className:"text-red-400 text-xs",children:R}),a.jsx("button",{onClick:oe,disabled:j,className:"border ks-border-sub w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm ks-gold",children:j?"Vytváram...":"VYTVORIŤ MIESTNOSŤ"})]})})]}),r&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b ks-border-sub",children:[a.jsxs("div",{className:"flex items-center gap-2 ks-muted text-xs ks-mono",children:[a.jsx(ni,{size:13}),"AKTÍVNA MIESTNOSŤ"]}),a.jsxs("div",{className:`flex items-center gap-1.5 text-xs ks-mono ${l==="error"?"text-red-400":"text-green-400"}`,children:[a.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${l==="error"?"bg-red-400":"bg-green-400"}`}),l==="error"?"CHYBA":"ONLINE"]})]}),a.jsxs("div",{className:"px-4 py-6 text-center",children:[a.jsx("div",{className:"ks-gold ks-mono text-5xl font-bold tracking-widest mb-2",children:r}),a.jsx("div",{className:"ks-muted text-xs",children:"Zdieľaj tento kód s druhým zariadením"}),y&&k.trim()&&a.jsxs("div",{className:"mt-3 flex items-center justify-center gap-1.5 ks-muted text-xs",children:[a.jsx(Ql,{size:12}),a.jsxs("span",{children:["Toto zariadenie: ",a.jsx("span",{className:"ks-cream font-semibold",children:k.trim()})]})]})]}),a.jsxs("div",{className:"border-t ks-border-sub",children:[a.jsxs("button",{onClick:kt,className:"w-full flex items-center justify-center gap-2 py-3 ks-press ks-muted text-sm border-b ks-border-sub",children:[q?a.jsx(zs,{size:16,className:"text-green-400"}):a.jsx(Qd,{size:16}),q?"Skopírované!":"Kopírovať kód"]}),a.jsxs("button",{onClick:bt,className:"w-full flex items-center justify-center gap-2 py-2.5 ks-press ks-muted text-xs",children:[a.jsx(Np,{size:14}),"Odhlásiť sa"]})]})]}),a.jsx(AE,{roomState:c,myUid:i})]}),a.jsxs("div",{className:"mt-auto ks-card border ks-border-sub rounded-sm px-4 py-4 flex gap-3",children:[a.jsx(Ca,{size:18,className:"ks-muted flex-shrink-0 mt-0.5"}),a.jsx("p",{className:"ks-muted text-sm leading-relaxed",children:"Synchronizuje sa aktuálna hra, archív hier a aktívny skin v reálnom čase cez Firebase. Každé zariadenie hrá lokálne."})]})]})]})}function Vi({label:n}){return a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4 pb-1",children:n})}function Ta({icon:n,title:e,subtitle:t,value:s,onChange:r}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs leading-relaxed",children:t})]}),a.jsx("button",{onClick:()=>r(!s),role:"switch","aria-checked":s,style:{flexShrink:0,position:"relative",cursor:"pointer",width:36,height:20,borderRadius:10,border:"none",padding:0,background:s?"var(--ks-accent, #d4b86a)":"rgba(82,82,91,0.8)",transition:"background 0.2s"},children:a.jsx("span",{style:{position:"absolute",top:2,left:s?18:2,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.18s",boxShadow:"0 1px 3px rgba(0,0,0,0.35)"}})})]})}function NE({icon:n,title:e,subtitle:t,value:s,onChange:r,placeholder:i,maxLength:c=30,actionLabel:l,onAction:d}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{value:s,onChange:h=>r(h.target.value.slice(0,c)),placeholder:i,className:"flex-1 ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"}),l&&a.jsx("button",{onClick:d,className:"ks-gold-bg ks-press px-2.5 py-1 rounded-sm ks-mono text-xs font-bold flex-shrink-0",children:l})]})]})}function RE({icon:n,title:e,subtitle:t,value:s,onChange:r,min:i,max:c,step:l=50}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]}),a.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[a.jsx("button",{onClick:()=>r(Math.max(i,s-l)),className:"w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none",children:"−"}),a.jsx("span",{className:"ks-mono ks-cream text-sm w-12 text-center",children:s}),a.jsx("button",{onClick:()=>r(Math.min(c,s+l)),className:"w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none",children:"+"})]})]})}function Aa({icon:n,title:e,subtitle:t,label:s,onClick:r,danger:i}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:`w-12 h-12 rounded-sm border flex items-center justify-center flex-shrink-0 ${i?"border-red-700/50":"ks-border-sub"}`,children:a.jsx(n,{size:22,className:i?"text-red-400":"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:`ks-display text-lg font-semibold ${i?"text-red-300":"ks-cream"}`,children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]}),a.jsx("button",{onClick:r,className:`ks-press px-2.5 py-1 rounded-sm ks-mono text-xs flex-shrink-0 ${i?"border border-red-700/50 text-red-400":"ks-gold-bg"}`,children:s})]})}function CE({adminSettings:n,tournaments:e,active:t,appVersion:s}){const r=(()=>{try{let c=0;for(const l of Object.keys(localStorage))c+=(localStorage.getItem(l)||"").length;return(c/1024).toFixed(1)+" KB"}catch{return"—"}})(),i=[["Verzia app",s||"1.5.3"],["Turnaje v archíve",`${(e==null?void 0:e.length)??0}`],["Aktívna hra",t?`${t.players.length} hráčov, kolo ${t.currentRound+1}`:"žiadna"],["localStorage",r],["Debug mód",n.debugMode?"zapnutý":"vypnutý"],["Custom room name",n.roomName||"(predvolené)"],["Min. zápis override",n.minWriteOffOverride?`${n.minWriteOffOverride} b.`:"vypnutý"]];return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono",children:[a.jsx(jp,{size:13}),"DIAGNOSTIKA"]}),a.jsx("div",{className:"divide-y ks-border-sub",children:i.map(([c,l])=>a.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[a.jsx("span",{className:"ks-muted text-xs",children:c}),a.jsx("span",{className:"ks-cream ks-mono text-xs",children:l})]},c))})]})}function PE({onBack:n,adminSettings:e,onAdminChange:t,tournaments:s,active:r,appVersion:i,onSimulateTurn:c,onExportState:l,onCreateRoom:d}){const[h,m]=D.useState(!1),p=D.useCallback((T,A)=>{t({...e,[T]:A})},[e,t]),v=()=>{l&&l(),m(!0),setTimeout(()=>m(!1),2500)};return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(nh,{title:"Admin nastavenia",onBack:n}),a.jsxs("div",{className:"mx-4 mt-3 mb-1 flex items-center gap-2 px-3 py-2 rounded-sm border border-amber-700/40 bg-amber-950/20",children:[a.jsx(mc,{size:14,className:"ks-gold flex-shrink-0"}),a.jsx("span",{className:"ks-muted text-xs",children:"Interné nastavenia — zmeny ovplyvňujú správanie aplikácie"})]}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx(Vi,{label:"ONLINE MIESTNOSŤ"}),a.jsx(NE,{icon:ni,title:"Vlastný kód miestnosti",subtitle:"Zadaj vlastný kód miestnosti (napr. RUBIKON) a stlač VYTVORIŤ — miestnosť sa vytvorí okamžite s týmto kódom, aktuálnym skinom a pravidlami.",value:e.roomName||"",onChange:T=>p("roomName",T),placeholder:"napr. Obývačka, Tablet Marcel...",maxLength:24,actionLabel:"VYTVORIŤ",onAction:d}),a.jsx(Vi,{label:"DEBUG A TESTOVANIE"}),a.jsx(Ta,{icon:Rp,title:"Debug mód",subtitle:"Zobrazí overlay s interným stavom hry (currentPlayer, currentRound, pendingDecision, winner).",value:!!e.debugMode,onChange:T=>p("debugMode",T)}),a.jsx(Aa,{icon:Yd,title:"Simulovať ťah",subtitle:"Automaticky zapíše náhodné skóre (násobok 50) pre aktuálneho hráča. Len pri aktívnej hre.",label:"Simuluj",onClick:c}),a.jsx(Aa,{icon:Qd,title:"Export stavu do schránky",subtitle:"Skopíruje celý stav aplikácie (tournaments, active, adminSettings) ako JSON.",label:h?"✓ Skopírované":"Kopírovať",onClick:v}),a.jsx(Vi,{label:"OVERRIDE HERNÝCH HODNÔT"}),a.jsx(Ta,{icon:Xl,title:"Override min. zápis",subtitle:"Ak zapnuté, prepisuje pravidlo minWriteOff pre všetky turnaje v tejto session.",value:!!e.minWriteOffOverride,onChange:T=>p("minWriteOffOverride",T?50:null)}),e.minWriteOffOverride!=null&&a.jsx(RE,{icon:Xl,title:"Hodnota min. zápisu",subtitle:"Aktuálna override hodnota (predvolená v pravidlách je 300 b.)",value:e.minWriteOffOverride||50,onChange:T=>p("minWriteOffOverride",T),min:50,max:1e3,step:50}),a.jsx(Ta,{icon:Cp,title:"Verbose Firebase logy",subtitle:"Zapne podrobné logy Firebase operácií do konzoly prehliadača.",value:!!e.verboseFirebase,onChange:T=>p("verboseFirebase",T)}),a.jsx(Vi,{label:"SYSTÉM"}),a.jsx(CE,{adminSettings:e,tournaments:s,active:r,appVersion:i}),a.jsx(Aa,{icon:Pp,title:"Resetovať admin nastavenia",subtitle:"Vráti všetky admin nastavenia na predvolené hodnoty. Dáta turnajov ostanú nedotknuté.",label:"Reset",onClick:()=>t(ip),danger:!0})]})]})}const jE="58290347";function DE({onSuccess:n,onCancel:e}){const[t,s]=D.useState(""),[r,i]=D.useState(!1),c=()=>{t===jE?n():(i(!0),s(""),setTimeout(()=>i(!1),1500))};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6",children:a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm w-full max-w-xs p-6 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[a.jsx(mc,{size:18,className:"ks-gold"}),a.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:"Admin prístup"})]}),a.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Zadaj prístupový kód pre admin nastavenia."}),a.jsx("input",{type:"password",inputMode:"numeric",maxLength:8,value:t,onChange:l=>{s(l.target.value.replace(/\D/g,"").slice(0,8)),i(!1)},onKeyDown:l=>l.key==="Enter"&&c(),placeholder:"••••••••",autoFocus:!0,className:`w-full ks-card px-3 py-3 rounded-sm bg-transparent border outline-none ks-mono text-center text-xl tracking-[0.4em] transition-colors ${r?"border-red-500 text-red-400":"ks-border-sub ks-cream"}`}),r&&a.jsx("p",{className:"text-red-400 text-xs text-center",children:"Nesprávny kód"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:e,className:"flex-1 py-2.5 border ks-border-sub rounded-sm ks-muted text-sm ks-press",children:"Zrušiť"}),a.jsx("button",{onClick:c,className:"flex-1 py-2.5 ks-gold-bg rounded-sm ks-mono text-sm font-bold ks-press",children:"Potvrdiť"})]})]})})}const ip={roomName:"",debugMode:!1,minWriteOffOverride:null,verboseFirebase:!1};function OE(n,e,t){D.useEffect(()=>{if(!n)return;const s=dl(yl,"rooms",n),r=bE(s,i=>{i.exists()&&(console.log("[useRoomSubscription] update:",n),e(i.data()))},i=>{console.error("[useRoomSubscription] chyba:",i.code,i.message),t==null||t(i)});return()=>r()},[n])}function bl(n,e){return new Array(e).fill(0).map((t,s)=>{let r=0;for(const i of Array.isArray(n)?n:[]){const c=i==null?void 0:i[s];typeof c=="number"&&Number.isFinite(c)&&(r+=c)}return r})}function VE(n){var t;const e=n==null?void 0:n._suddenWin;return e&&typeof e.playerIdx=="number"&&e.playerIdx>=0&&e.playerIdx<(((t=n.players)==null?void 0:t.length)??0)?{isSuddenWin:!0,playerIdx:e.playerIdx,round:e.round??null}:{isSuddenWin:!1,playerIdx:null,round:null}}function bo(n){const e=(n==null?void 0:n.players)||[],t=(n==null?void 0:n.rounds)||[],s=(n==null?void 0:n.targetScore)||1e4,r=bl(t,e.length),i=VE(n);if(i.isSuddenWin){const A=i.playerIdx;return{winners:[A],totals:r,playerTotals:r,achievers:[A],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:`Náhla výhra — hráč ${e[A]} hodil 6 rovnakých s 6 kockami.`,isSuddenWin:!0}}if(n.pendingDecision&&n.pendingDecision.status==="pending")return{winners:[],totals:r,playerTotals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!1,errors:["Hra čaká na rozhodnutie skupiny (pendingDecision)."],reason:"Otvorené pendingDecision — hra ešte nemá finálny výsledok.",isSuddenWin:!1};const c=r.map((A,P)=>({idx:P,total:A})).filter(A=>A.total>=s).map(A=>A.idx);if(c.length===0)return{winners:[],totals:r,playerTotals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:"Žiadny hráč ešte nedosiahol cieľ.",isSuddenWin:!1};const l=(n.rules||[]).find(A=>A.id==="r18"),d=!l||l.selected!=="Áno";let h=[],m="",p=[];if(d){const A=c.map(S=>{var R;let $=0;for(let V=0;V<t.length;V++){const j=(R=t[V])==null?void 0:R[S];if(typeof j=="number"&&Number.isFinite(j)&&($+=j),$>=s)return{idx:S,round:V}}return{idx:S,round:1/0}}),P=Math.min(...A.map(S=>S.round));h=A.filter(S=>S.round===P).map(S=>S.idx),m=h.length===1?`Hráč dosiahol cieľ ako prvý v kole ${P+1}.`:`${h.length} hráči dosiahli cieľ v rovnakom kole (${P+1}). Remíza.`}else{const P=(Array.isArray(n._confirmedDetailed)?n._confirmedDetailed:[]).filter(R=>c.includes(R.player));if(p=c.filter(R=>!P.some(V=>V.player===R)),P.length===0)return{winners:[],totals:r,playerTotals:r,achievers:c,pendingAchievers:p,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${c.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],reason:`${c.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`,isSuddenWin:!1};if(p.length>0)return{winners:[],totals:r,playerTotals:r,achievers:c,pendingAchievers:p,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${p.length} hráč(ov) ešte nepotvrdil(i) výhru.`],reason:`${p.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`,isSuddenWin:!1};const S=Math.min(...P.map(R=>R.round));h=P.filter(R=>R.round===S).map(R=>R.player),m=h.length===1?`Víťazstvo potvrdené najskôr v kole ${S+1}.`:`${h.length} hráči potvrdili víťazstvo v rovnakom kole (${S+1}). Remíza.`}const v=[];for(const A of h){if(typeof A!="number"||A<0||A>=e.length){v.push(`Neplatný index víťaza: ${A}.`);continue}r[A]<s&&v.push(`Víťaz "${e[A]}" má skóre ${r[A]}, čo je menej ako cieľ ${s}.`)}const T=v.length===0;return{winners:T?h:[],playerTotals:r,achievers:c,pendingAchievers:p,isDraw:T&&h.length>1,valid:T,errors:v,reason:m,isSuddenWin:!1}}let Sa=null,vr=!0;function Li(){return Sa||(Sa=new(window.AudioContext||window.webkitAudioContext)),Sa}const Na={setEnabled(n){vr=n},playClick(){if(vr)try{const n=Li(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.frequency.value=880,e.type="sine",t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.06),e.start(),e.stop(n.currentTime+.06)}catch{}},playWin(){if(vr)try{const n=Li();[523,659,784,1047].forEach((e,t)=>{const s=n.createOscillator(),r=n.createGain();s.connect(r),r.connect(n.destination),s.frequency.value=e,s.type="triangle";const i=n.currentTime+t*.14;r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.18,i+.04),r.gain.exponentialRampToValueAtTime(.001,i+.35),s.start(i),s.stop(i+.35)})}catch{}},playStart(){if(vr)try{const n=Li();[330,392,494].forEach((e,t)=>{const s=n.createOscillator(),r=n.createGain();s.connect(r),r.connect(n.destination),s.frequency.value=e,s.type="square";const i=n.currentTime+t*.08;r.gain.setValueAtTime(.08,i),r.gain.exponentialRampToValueAtTime(.001,i+.15),s.start(i),s.stop(i+.15)})}catch{}},playPenalty(){if(vr)try{const n=Li(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.frequency.value=180,e.type="sawtooth",t.gain.setValueAtTime(.15,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.start(),e.stop(n.currentTime+.25)}catch{}}},LE=["🎲","🎲","🃏","🪙","🎰","⭐","💠","🎲"],ME=["💠","🌊","⚡","🔷","❄️","🌀","💎","⚡"],UE=["⚡","🦉","🪄","✨","🔮","🐍","⭐","🪄"],FE={brawlstars:"ks-brawl-float",brawlblue:"ks-brawl-float",harrypotter:"ks-hp-float"};function zE({skin:n}){const e=n==="brawlblue"?ME:n==="harrypotter"?UE:LE,t=FE[n]||"ks-brawl-float",s=D.useMemo(()=>e.map((r,i)=>({sym:r,left:`${8+i*12%84}%`,animationDelay:`${i*1.4}s`,animationDuration:`${10+i%4*2}s`,fontSize:`${1.5+i%3*.45}rem`})),[n]);return a.jsx(a.Fragment,{children:s.map((r,i)=>a.jsx("span",{className:t,style:{left:r.left,animationDelay:r.animationDelay,animationDuration:r.animationDuration,fontSize:r.fontSize},children:r.sym},i))})}const $E={1:Gp,2:Kp,3:qp,4:Wp,5:Hp,6:Bp},_o={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}},brawlstars:{id:"brawlstars",name:"Brawl Stars",bg:"radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)",vars:{"--ks-bg-main":"#1a0830","--ks-bg-soft":"rgba(52,18,80,0.92)","--ks-bg-soft-2":"rgba(28,10,45,0.96)","--ks-card-sub":"rgba(40,14,62,0.74)","--ks-border":"rgba(200,80,220,0.28)","--ks-border-strong":"rgba(230,120,255,0.62)","--ks-text":"#f8e8ff","--ks-text-muted":"#c0a0d8","--ks-accent":"#e070d0","--ks-accent-2":"#8030b0","--ks-button-text":"#280a3a","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(20,6,34,0.97)","--ks-sticky-bg2":"rgba(14,4,24,0.98)"}},brawlblue:{id:"brawlblue",name:"Brawl Blue",bg:"radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)",vars:{"--ks-bg-main":"#061e54","--ks-bg-soft":"rgba(10,48,110,0.92)","--ks-bg-soft-2":"rgba(6,26,65,0.96)","--ks-card-sub":"rgba(8,36,88,0.74)","--ks-border":"rgba(40,180,240,0.28)","--ks-border-strong":"rgba(80,210,255,0.62)","--ks-text":"#e8f4ff","--ks-text-muted":"#90b8d8","--ks-accent":"#40d8f0","--ks-accent-2":"#2878c8","--ks-button-text":"#030e28","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(4,14,44,0.97)","--ks-sticky-bg2":"rgba(3,10,32,0.98)"}},harrypotter:{id:"harrypotter",name:"Harry Potter",bg:"radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg,#f8ecd4 0%,#efe0b8 40%,#e8d6a4 70%,#f2e8c8 100%)",vars:{"--ks-bg-main":"#f0e2c0","--ks-bg-soft":"rgba(252,244,226,0.97)","--ks-bg-soft-2":"rgba(248,238,215,1.0)","--ks-card-sub":"rgba(244,232,206,0.98)","--ks-border":"rgba(140,88,18,0.30)","--ks-border-strong":"rgba(160,100,20,0.62)","--ks-text":"#271608","--ks-text-muted":"#7a5030","--ks-accent":"#8b5814","--ks-accent-2":"#740001","--ks-button-text":"#f8f0de","--ks-danger":"#aa2020","--ks-sticky-bg":"rgba(244,232,202,0.97)","--ks-sticky-bg2":"rgba(238,224,192,0.98)"}}},uc={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},inkfree:{id:"inkfree",name:"Ink Free",stack:"'Ink Free', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"},caveatbrush:{id:"caveatbrush",name:"Caveat Brush",stack:"'Caveat Brush', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}};function BE(n,e){const t=uc[e]||uc.default,r=(_o[n]||_o.classic).vars;let i=":root{"+Object.entries(r).map(([c,l])=>`${c}:${l}`).join(";")+`;--ks-font-display:${t.stack};--ks-font-body:${t.stack};--ks-font-mono:${t.monoStack}}`;return n==="blackwhite"&&(i+=`
.ks-gold{color:#fff!important}
.ks-cream{color:#fff!important}
.ks-muted{color:#aaa!important}
.ks-gold-bg{background:#fff!important;color:#000!important}
.ks-card{background:rgba(16,16,16,0.98)!important;border-color:rgba(255,255,255,0.20)!important}
.ks-card:hover{border-color:rgba(255,255,255,0.42)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(255,255,255,0.10)!important}
.ks-live-pos-1{color:#fff!important;border-color:rgba(255,255,255,0.6)!important}
.ks-live-pos-2{color:#ccc!important}
.ks-live-pos-3{color:#999!important}
`),n==="parchment"&&(i+=`
.ks-card{background:rgba(248,241,226,0.96)!important;border-color:rgba(195,165,112,0.36)!important}
.ks-card:hover{border-color:rgba(200,165,95,0.60)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(195,165,112,0.25)!important}
.ks-live-row:hover td{background:rgba(232,218,196,0.55)!important}
`),n==="whiteblack"&&(i+=`
.ks-gold{color:#111!important}
.ks-cream{color:#111!important}
.ks-muted{color:#555!important}
.ks-gold-bg{background:#111!important;color:#fff!important}
.ks-card{background:rgba(255,255,255,0.97)!important;border-color:rgba(0,0,0,0.13)!important}
.ks-card:hover{border-color:rgba(0,0,0,0.30)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(0,0,0,0.08)!important}
.ks-live-row:hover td{background:rgba(220,220,220,0.45)!important}
.ks-press{border-color:rgba(0,0,0,0.25)!important}
.ks-press:hover{background:rgba(0,0,0,0.07)!important}
.ks-live-pos-1{color:#111!important;border-color:rgba(0,0,0,0.55)!important}
.ks-live-pos-2{color:#333!important}
.ks-live-pos-3{color:#666!important}
`),n==="brawlstars"&&(i+=`
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(80,20,120,0.96),rgba(10,4,28,0.98));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(60,15,100,0.96),rgba(10,4,28,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(100,20,140,0.96),rgba(15,5,35,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(30,8,70,0.97),rgba(5,2,15,0.99));
--ks-modal-overlay:rgba(20,6,40,0.82);
--ks-modal-dark-overlay:rgba(10,4,28,0.94);
--ks-popup-accent:#e070d0;
--ks-glow-orb:rgba(180,80,220,0.50);
--ks-toast-info-bg:rgba(44,10,68,0.92);
--ks-toast-warn-bg:rgba(60,12,88,0.88);
--ks-toast-info-border:rgba(200,80,220,0.70);
--ks-toast-warn-border:rgba(230,120,255,0.60);
}
.ks-gold{color:#e070d0!important}
.ks-gold-bg{background:linear-gradient(135deg,#b030b0,#6010a0)!important;box-shadow:0 0 18px rgba(200,80,230,0.65)!important}
.ks-card{background:rgba(44,16,68,0.90)!important;border-color:rgba(200,80,220,0.32)!important;box-shadow:0 0 12px rgba(160,60,200,0.30)!important}
.ks-border-sub{border-color:rgba(200,80,220,0.20)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(200,80,220,0.18)!important}
.ks-live-row:hover td{background:rgba(80,20,110,0.35)!important}
`),n==="brawlblue"&&(i+=`
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(10,50,130,0.96),rgba(3,10,42,0.98));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(8,40,110,0.96),rgba(3,10,42,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(10,70,160,0.96),rgba(3,14,54,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(5,25,70,0.97),rgba(2,6,24,0.99));
--ks-modal-overlay:rgba(3,12,42,0.82);
--ks-modal-dark-overlay:rgba(3,10,42,0.94);
--ks-popup-accent:#40d8f0;
--ks-glow-orb:rgba(40,180,240,0.50);
--ks-toast-info-bg:rgba(6,28,80,0.92);
--ks-toast-warn-bg:rgba(8,36,100,0.88);
--ks-toast-info-border:rgba(40,180,240,0.70);
--ks-toast-warn-border:rgba(80,210,255,0.60);
}
.ks-gold{color:#40d8f0!important}
.ks-gold-bg{background:linear-gradient(135deg,#1a96d8,#0e5cac)!important;box-shadow:0 0 18px rgba(40,180,240,0.65)!important}
.ks-card{background:rgba(8,38,90,0.90)!important;border-color:rgba(40,180,240,0.30)!important;box-shadow:0 0 12px rgba(30,140,200,0.28)!important}
.ks-border-sub{border-color:rgba(40,180,240,0.18)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(40,180,240,0.14)!important}
.ks-live-row:hover td{background:rgba(10,60,130,0.40)!important}
`),n==="harrypotter"&&(i+=`
.ks-gold{color:#6b3e0c!important}
.ks-cream{color:#271608!important}
.ks-muted{color:#7a5030!important}
.ks-gold-bg{background:linear-gradient(135deg,#8b5814,#740001)!important;color:#f8f0de!important}
.ks-card{background:rgba(252,244,226,0.96)!important;border-color:rgba(150,95,22,0.30)!important}
.ks-card:hover{border-color:rgba(150,95,22,0.55)!important}
.ks-card-prom{background:rgba(248,238,210,0.97)!important;border-color:rgba(160,100,20,0.55)!important}
.ks-border-sub{border-color:rgba(150,95,22,0.22)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(150,95,22,0.20)!important}
.ks-live-row:hover td{background:rgba(238,220,188,0.55)!important}
.ks-live-pos-1{color:#6b3e0c!important;border-color:rgba(140,88,18,0.55)!important}
.ks-live-pos-2{color:#7a5030!important}
.ks-live-pos-3{color:#8a6040!important}
.ks-divider{background:linear-gradient(90deg,transparent,rgba(140,88,18,0.38),transparent)!important}
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(120,80,15,0.94),rgba(30,18,5,0.97));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(100,60,10,0.94),rgba(28,16,4,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(140,60,10,0.95),rgba(35,18,4,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(80,15,10,0.97),rgba(20,6,4,0.99));
--ks-modal-overlay:rgba(30,18,5,0.78);
--ks-modal-dark-overlay:rgba(25,15,4,0.94);
--ks-popup-accent:#c49a28;
--ks-glow-orb:rgba(196,154,40,0.45);
--ks-toast-info-bg:rgba(44,28,6,0.94);
--ks-toast-warn-bg:rgba(55,30,4,0.90);
--ks-toast-info-border:rgba(160,100,20,0.70);
--ks-toast-warn-border:rgba(200,140,30,0.60);
}
`),i}const $d=[50,100,300,400,500,600,1e3,1500,2e3],kr=-1e3,Bd=[{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"fight"},{msg:"Také mrviny? Vážne?",emoji:"😀",variant:"doubt"},{msg:"Toto ťa nezachráni…",emoji:"💀",variant:"doom"},{msg:"Tak takto sa hra nevyhráva!",emoji:"🎭",variant:"fight"},{msg:"Hej majster… si si istý?",emoji:"😆",variant:"doubt"},{msg:"Riskni to konečne!",emoji:"🎲",variant:"fight"}],Nr=[{id:"cat-basic",title:"Bodové hodnoty kociek",subtitle:"Samostatné kocky",ruleIds:["r1","r2"]},{id:"cat-trio",title:"Trojice rovnakých",subtitle:"Tri rovnaké kocky",ruleIds:["r3","r4","r5","r6","r7","r8"]},{id:"cat-special",title:"Špeciálne kombinácie",subtitle:"Postupka a tri páry",ruleIds:["r9","r10"]},{id:"cat-multi",title:"Násobky kociek",subtitle:"Štyri, päť, šesť rovnakých",ruleIds:["r11","r12","r13"]}],Hd=["r14","r15","r16","r17","r18"];function ei(n){return n?new Date(n).toLocaleString("sk-SK",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function op(n,e){if(!n||!e)return null;const t=new Date(e)-new Date(n);if(t<0)return null;const s=Math.floor(t/6e4);if(s<60)return`${s} min`;const r=Math.floor(s/60),i=s%60;return`${r} h ${i} min`}const ti={POPUP_DISPLAY_DURATION:2e3,QUEUE_SIZE:1,VERTICAL_OFFSET:"0px",OPACITY:.92},Mi=[{id:"r1",name:"Jednotka",description:"Samostatná kocka s hodnotou 1",points:100,type:"numeric",dice:[1]},{id:"r2",name:"Päťka",description:"Samostatná kocka s hodnotou 5",points:50,type:"numeric",dice:[5]},{id:"r3",name:"Tri jednotky",description:"Trojica jednotiek",points:1e3,type:"numeric",dice:[1,1,1]},{id:"r4",name:"Tri dvojky",description:"Trojica dvojok",points:200,type:"numeric",dice:[2,2,2]},{id:"r5",name:"Tri trojky",description:"Trojica trojok",points:300,type:"numeric",dice:[3,3,3]},{id:"r6",name:"Tri štvorky",description:"Trojica štvoriek",points:400,type:"numeric",dice:[4,4,4]},{id:"r7",name:"Tri päťky",description:"Trojica päťok",points:500,type:"numeric",dice:[5,5,5]},{id:"r8",name:"Tri šestky",description:"Trojica šestiek",points:600,type:"numeric",dice:[6,6,6]},{id:"r9",name:"Postupka 1–6",description:"Šesť kociek za sebou: 1·2·3·4·5·6",points:2e3,type:"numeric",dice:[1,2,3,4,5,6]},{id:"r10",name:"Tri páry",description:"Tri rôzne páry kociek",points:1e3,type:"numeric",dice:[2,2,4,4,6,6]},{id:"r11",name:"Štyri rovnaké",description:"Štyri rovnaké kocky",points:0,type:"select",options:["Dvojnásobok trojice","Pevná hodnota"],selected:"Dvojnásobok trojice",dice:[3,3,3,3]},{id:"r12",name:"Päť rovnakých",description:"Päť rovnakých kociek",points:0,type:"select",options:["Štvornásobok trojice","Pevná hodnota"],selected:"Štvornásobok trojice",dice:[4,4,4,4,4]},{id:"r13",name:"Šesť rovnakých",description:"Všetkých šesť kociek rovnakých",points:0,type:"select",options:["Automatická výhra","Pevná hodnota 3000"],selected:"Automatická výhra",dice:[5,5,5,5,5,5]},{id:"r14",name:"Minimálny odpis (prvý zápis)",description:"Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.",points:300,type:"numeric",dice:[]},{id:"r15",name:"Cieľové skóre",description:"Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.",points:1e4,type:"numeric",dice:[]},{id:"r16",name:"Nič nehodené",description:"Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.",points:-1e3,type:"numeric",dice:[2,3,4,6]},{id:"r17",name:"Prekročenie cieľa",description:"Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).",points:0,type:"select",options:["Automatická čiarka","Hod sa neuznáva"],selected:"Automatická čiarka",dice:[]},{id:"r18",name:"Režim potvrdenia víťazstva",description:"Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.",points:0,type:"select",options:["Áno","Nie"],selected:"Áno",dice:[]}];function dc({value:n,size:e=28}){const t=$E[n];return t?a.jsx(t,{size:e,strokeWidth:1.5}):null}function ap({dice:n,size:e=24}){return!n||n.length===0?a.jsx("span",{className:"ks-muted text-sm italic",children:"—"}):a.jsx("div",{className:"flex flex-wrap gap-1 items-center",children:n.map((t,s)=>a.jsx("div",{className:"ks-gold",style:{display:"inline-flex"},children:a.jsx(dc,{value:t,size:e})},s))})}function lt({children:n,onClick:e,disabled:t,className:s="",icon:r,variant:i="gold"}){const c="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return a.jsxs("button",{onClick:e,disabled:t,className:`${c} ${l[i]} ${s}`,children:[r&&a.jsx(r,{size:18,strokeWidth:2}),n]})}function Bn({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(vs,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function HE({msg:n,kind:e,onClose:t}){const s={info:"ks-border-accent bg-amber-950/90 ks-cream",warn:"border-amber-600/70 bg-amber-900/80 ks-text-accent",overshoot:"border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50"},r=e==="overshoot"?ko:e==="warn"?vo:zs;return a.jsx("div",{className:"fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor",style:{pointerEvents:"none"},children:a.jsxs("div",{className:`max-w-md mx-auto p-3 rounded-sm border ${s[e]||s.info} flex items-start gap-2 shadow-2xl`,style:{pointerEvents:"auto",opacity:"var(--ks-popup-opacity, 0.92)"},children:[a.jsx(r,{size:20,className:"shrink-0 mt-0.5"}),a.jsx("div",{className:"ks-body flex-1 text-sm font-medium",children:n}),a.jsx("button",{"aria-label":"Zatvoriť",onClick:t,className:"opacity-70 hover:opacity-100",children:a.jsx(Hn,{size:16})})]})})}function cp({size:n=96,color:e="#d4b86a",strikeColor:t="#c44848"}){return a.jsxs("svg",{width:n,height:n,viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"},children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"crownGold",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"1"}),a.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.7"})]})}),a.jsx("path",{d:"M 16 36 L 24 60 L 72 60 L 80 36 L 66 48 L 48 24 L 30 48 Z",fill:"url(#crownGold)",stroke:e,strokeWidth:"2",strokeLinejoin:"round"}),a.jsx("rect",{x:"22",y:"60",width:"52",height:"8",fill:e,stroke:e,strokeWidth:"1",rx:"1"}),a.jsx("circle",{cx:"48",cy:"32",r:"3.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("circle",{cx:"20",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("circle",{cx:"76",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:"#000",strokeWidth:"7",strokeLinecap:"round",opacity:"0.5"}),a.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:t,strokeWidth:"4",strokeLinecap:"round"})]})}function Ui({kind:n,title:e,subtitle:t,onClose:s,actionLabel:r}){const i={victory:{accent:"#d4b86a",label:"VÍŤAZ"},draw:{accent:"#d4b86a",label:"REMÍZA"},"temporary-king":{accent:"#c44848",label:"DOČASNÝ KRÁĽ"},"win-pending":{accent:"#d4b86a",label:"POTVRD VÝHRU"}}[n]||{accent:"#d4b86a",label:""},c=({size:l=56})=>n==="temporary-king"?a.jsx(cp,{size:l}):a.jsx(ys,{size:l,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"}});return a.jsx("div",{className:"fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center",onClick:s,children:a.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:i.accent,opacity:"var(--ks-popup-opacity, 0.92)",cursor:"pointer"},children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx(c,{})}),a.jsx("div",{className:"ks-mono text-xs tracking-widest mb-2",style:{color:i.accent},children:i.label}),e&&a.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:e}),t&&a.jsx("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug",children:t}),r&&a.jsx("div",{className:"ks-mono text-[10px] ks-muted mt-3 tracking-widest",children:r})]})})}function Wd({data:n,onClose:e}){const t=typeof n=="string"?n:n==null?void 0:n.msg,s=typeof n=="string"?"🤨":(n==null?void 0:n.emoji)||"🤨",r=typeof n=="string"?"doubt":(n==null?void 0:n.variant)||"doubt",i={doubt:{bg:"radial-gradient(circle at center, rgba(80,30,30,0.95), rgba(0,0,0,0.95))",label:"DOTAZ Z PUBLIKA",glow:"rgba(212,184,106,0.4)",labelColor:"#d4b86a"},fight:{bg:"radial-gradient(circle at center, rgba(120,40,30,0.95), rgba(20,10,5,0.97))",label:"POVZBUDENIE",glow:"rgba(231,128,82,0.5)",labelColor:"#e08854"},doom:{bg:"radial-gradient(circle at center, rgba(60,20,20,0.97), rgba(0,0,0,0.98))",label:"PROROCTVO",glow:"rgba(196,72,72,0.5)",labelColor:"#c44848"}},c=i[r]||i.doubt;return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:c.bg},onClick:e,children:[a.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[a.jsx("div",{className:"absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`}}),a.jsx("div",{className:"absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`,animationDelay:"1s"}}),a.jsx("div",{className:"absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`,animationDelay:"0.5s"}})]}),a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${c.labelColor})`}}),a.jsx("span",{style:{color:c.labelColor},className:"text-xs",children:"✦"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${c.labelColor}, transparent)`}})]}),a.jsx("div",{className:"mb-3 ks-funny-emoji flex justify-center",style:{filter:`drop-shadow(0 4px 16px ${c.glow})`},children:s==="strikethrough-crown"?a.jsx(cp,{size:112,color:"#d4b86a",strikeColor:"#c44848"}):a.jsx("span",{className:"text-7xl",children:s})}),a.jsx("div",{className:"ks-mono text-xs mb-3 tracking-widest",style:{color:c.labelColor},children:c.label}),a.jsx("div",{className:"ks-display text-5xl font-bold ks-cream leading-tight px-4",style:{textShadow:`0 4px 24px ${c.glow}, 0 0 40px ${c.glow}`},children:t}),a.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${c.labelColor})`}}),a.jsx("span",{style:{color:c.labelColor},className:"text-xs",children:"✦"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${c.labelColor}, transparent)`}})]}),a.jsx("button",{onClick:e,className:"ks-press mt-5 ks-mono ks-muted text-xs tracking-widest",children:"ZATVORIŤ"})]})]})}function WE({kind:n,icon:e,children:t}){const s={info:"border-amber-800/30 bg-amber-950/30 ks-text-accent/90",warn:"border-red-800/40 bg-red-950/30 ks-text-accent",gold:"border-amber-600/60 bg-amber-900/30 ks-text-accent"};return a.jsxs("div",{className:`flex items-start gap-2 text-sm border rounded-sm p-2 ${s[n]}`,children:[a.jsx(e,{size:16,className:"mt-0.5 shrink-0 ks-gold"}),a.jsx("div",{className:"ks-body",children:t})]})}function qE(){const[n,e]=D.useState("menu"),[t,s]=D.useState([]),[r,i]=D.useState(null),[c,l]=D.useState(Mi),[d,h]=D.useState(null),[m,p]=D.useState("menu"),[v,T]=D.useState(!1),[A,P]=D.useState("classic"),[S,$]=D.useState("default"),[R,V]=D.useState(!0),[j,H]=D.useState(!0),[q,w]=D.useState("delta"),[y,_]=D.useState("basic"),[k,x]=D.useState("standard"),[E,b]=D.useState(ip),[oe,ve]=D.useState(!1),[it,bt]=D.useState(!1),{setRoomId:kt,setUid:ne,setStatus:me,setRoomState:Ie,roomId:Q,roomState:ae,isRecorder:je}=Ur();OE(Q,Ie,()=>me("error")),D.useEffect(()=>{(async()=>{try{const I=await window.storage.get("rules");I!=null&&I.value&&l(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("scoreDisplayMode");I!=null&&I.value&&w(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("tournamentViewMode");I!=null&&I.value&&_(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("funnyWindowsDisplayMode");I!=null&&I.value&&x(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("selectedFont");if(I!=null&&I.value){const M=JSON.parse(I.value);$(uc[M]?M:"default")}}catch{}try{const I=await window.storage.get("selectedSkin");if(I!=null&&I.value){const M=JSON.parse(I.value);P(_o[M]?M:"classic")}}catch{try{const I=localStorage.getItem("ks-skin");I&&P(I)}catch{}}try{const I=await window.storage.get("soundsEnabled");I!=null&&I.value&&V(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("animationsEnabled");I!=null&&I.value&&H(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("tournaments");I!=null&&I.value&&s(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("active");I!=null&&I.value&&i(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("adminSettings");I!=null&&I.value&&b(JSON.parse(I.value))}catch{}T(!0)})()},[]),D.useEffect(()=>{v&&window.storage.set("scoreDisplayMode",JSON.stringify(q)).catch(()=>{})},[q,v]),D.useEffect(()=>{v&&window.storage.set("tournamentViewMode",JSON.stringify(y)).catch(()=>{})},[y,v]),D.useEffect(()=>{v&&window.storage.set("funnyWindowsDisplayMode",JSON.stringify(k)).catch(()=>{})},[k,v]),D.useEffect(()=>{v&&window.storage.set("selectedFont",JSON.stringify(S)).catch(()=>{})},[S,v]),D.useEffect(()=>{if(v){window.storage.set("selectedSkin",JSON.stringify(A)).catch(()=>{});try{localStorage.setItem("ks-skin",A)}catch{}}},[A,v]),D.useEffect(()=>{v&&window.storage.set("soundsEnabled",JSON.stringify(R)).catch(()=>{})},[R,v]),D.useEffect(()=>{v&&window.storage.set("animationsEnabled",JSON.stringify(j)).catch(()=>{})},[j,v]),D.useEffect(()=>{Na.setEnabled(R)},[R]),D.useEffect(()=>{v&&window.storage.set("rules",JSON.stringify(c)).catch(()=>{})},[c,v]),D.useEffect(()=>{v&&window.storage.set("tournaments",JSON.stringify(t)).catch(()=>{})},[t,v]),D.useEffect(()=>{v&&(r?window.storage.set("active",JSON.stringify(r)).catch(()=>{}):window.storage.delete("active").catch(()=>{}))},[r,v]),D.useEffect(()=>{v&&window.storage.set("adminSettings",JSON.stringify(E)).catch(()=>{})},[E,v]);const Be=720*60*1e3,Me=120*1e3,[Dt,De]=D.useState(!1),Ut=D.useRef(Date.now());D.useEffect(()=>{const I=()=>{Ut.current=Date.now(),De(!1)};return window.addEventListener("mousemove",I,{passive:!0}),window.addEventListener("keydown",I,{passive:!0}),window.addEventListener("click",I,{passive:!0}),window.addEventListener("touchstart",I,{passive:!0}),()=>{window.removeEventListener("mousemove",I),window.removeEventListener("keydown",I),window.removeEventListener("click",I),window.removeEventListener("touchstart",I)}},[]),D.useEffect(()=>{if(!Q){De(!1);return}const I=setInterval(()=>{const M=Date.now()-Ut.current;M>=Be?(De(!1),Ur.getState().reset()):M>=Be-Me&&De(!0)},3e4);return()=>clearInterval(I)},[Q]);const qt=D.useRef(null),ln=D.useRef(null),xt=D.useRef(null);D.useEffect(()=>{if(!Q)return;const I=ae==null?void 0:ae.activeTournament;if(I===void 0)return;const M=JSON.stringify(I??null);M!==qt.current&&(qt.current=M,i(I??null))},[Q,JSON.stringify(ae==null?void 0:ae.activeTournament)]),D.useEffect(()=>{if(!v||!Q||!je||!ae)return;const I=JSON.stringify(r??null);if(I===qt.current)return;qt.current=I;const M=setTimeout(()=>{Bt(async()=>{const{updateGameState:J}=await import("./updateGameState-DONqS5SW.js");return{updateGameState:J}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updateGameState:J})=>{J(Q,{activeTournament:r??null}).catch(re=>{console.error("[sync] activeTournament write failed:",re)})})},300);return()=>clearTimeout(M)},[r,Q,v,je,!!ae]),D.useEffect(()=>{if(!Q)return;const I=ae==null?void 0:ae.syncedTournaments;if(I===void 0)return;const M=JSON.stringify(I??[]);M!==ln.current&&(ln.current=M,s(I??[]))},[Q,JSON.stringify(ae==null?void 0:ae.syncedTournaments)]),D.useEffect(()=>{if(!v||!Q||!je||!ae)return;const I=JSON.stringify(t??[]);if(I===ln.current)return;ln.current=I;const M=setTimeout(()=>{Bt(async()=>{const{updateGameState:J}=await import("./updateGameState-DONqS5SW.js");return{updateGameState:J}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updateGameState:J})=>{J(Q,{syncedTournaments:t??[]}).catch(re=>{console.error("[sync] tournaments write failed:",re)})})},500);return()=>clearTimeout(M)},[t,Q,v,je,!!ae]),D.useEffect(()=>{if(!Q)return;const I=ae==null?void 0:ae.selectedSkin;!I||I===xt.current||(xt.current=I,_o[I]&&P(I))},[Q,ae==null?void 0:ae.selectedSkin]),D.useEffect(()=>{if(!v||!Q||!je||!ae||A===xt.current)return;xt.current=A;const I=setTimeout(()=>{Bt(async()=>{const{updateGameState:M}=await import("./updateGameState-DONqS5SW.js");return{updateGameState:M}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updateGameState:M})=>{M(Q,{selectedSkin:A}).catch(console.error)})},500);return()=>clearTimeout(I)},[A,Q,v,je,!!ae]);const Ot=D.useMemo(()=>{const I=c.find(M=>M.id==="r14");return I&&Number(I.points)||300},[c]);E.minWriteOffOverride,D.useEffect(()=>{window.__ksVerboseFirebase=!!E.verboseFirebase},[E.verboseFirebase]);const un=D.useCallback(()=>e("menu"),[]),ts=D.useCallback(()=>{w(I=>I==="delta"?"cumulative":"delta")},[]),[ye,wt]=D.useState([]),ht=D.useRef(null);D.useEffect(()=>{ht.current=r},[r]);const Oe=D.useCallback(I=>{const M=ht.current;M&&wt(J=>[...J.slice(-4),M]),i(J=>typeof I=="function"?I(J):I)},[]),Ue=D.useCallback(()=>{wt(I=>I.length?(i(I[I.length-1]),I.slice(0,-1)):I)},[]),Ft=D.useRef(null),ns=D.useRef(null);Ft.current=ar,ns.current=os;const ss=D.useCallback(I=>{Ft.current(I)},[]),Ss=D.useCallback(()=>{ns.current()},[]),dn=D.useCallback(()=>{if(!r){window.alert("Žiadna aktívna hra.");return}const I=(Math.floor(Math.random()*20)+1)*50;Oe(M=>{if(!M)return M;const J=M.rounds.slice();for(;J.length<=M.currentRound;)J.push(new Array(M.players.length).fill(null));J[M.currentRound]=[...J[M.currentRound]||new Array(M.players.length).fill(null)],J[M.currentRound][M.currentPlayer]=I;const re=(M.currentPlayer+1)%M.players.length,Te=re===0;return{...M,rounds:J,currentPlayer:re,currentRound:M.currentRound+(Te?1:0)}})},[r,Oe]),rs=D.useCallback(()=>{const I={tournaments:t,active:r,adminSettings:E};navigator.clipboard.writeText(JSON.stringify(I,null,2)).catch(()=>{})},[t,r,E]),is=D.useCallback(async()=>{var M;const I=(M=E.roomName)==null?void 0:M.toUpperCase().trim();if(!I){window.alert("Zadaj názov miestnosti.");return}try{const{getAuth:J,signInAnonymously:re}=await Bt(async()=>{const{getAuth:W,signInAnonymously:_e}=await Promise.resolve().then(()=>Wk);return{getAuth:W,signInAnonymously:_e}},void 0,import.meta.url),{createRoom:Te}=await Bt(async()=>{const{createRoom:W}=await Promise.resolve().then(()=>EE);return{createRoom:W}},void 0,import.meta.url),pe=J();await pe.authStateReady(),pe.currentUser||await re(pe);const Ee=pe.currentUser.uid,{roomId:ge}=await Te({hostName:"hráč",selectedSkin:A||"classic",rules:c||[],customRoomId:I});kt(ge),ne(Ee),me("connected"),e("online")}catch(J){window.alert(`Chyba: ${(J==null?void 0:J.message)||J}`)}},[E.roomName,c,A,kt,ne,me]);function We(I,M){Na.playStart(),wt([]),i({id:Date.now(),date:new Date().toISOString(),players:I,rounds:[],currentPlayer:0,currentRound:0,status:"active",winner:null,confirmationPendingPlayer:null,confirmationQueue:[],confirmationRoundComplete:!1,pendingDecision:null,targetScore:M,minWriteOff:Ot}),e("tournament")}function ar(I){if(!r)return;const M=bo({...r});if(!M.valid){const Ee=`Turnaj nemôže byť uzatvorený — nájdené nezhody:

`+M.errors.join(`
`)+`

Reason: `+M.reason;window.alert(Ee),console.error("[finishTournament] Validation failed:",M);return}const J=Array.isArray(I)?[...I]:[I],re=[...M.winners];if(J.sort(),re.sort(),!(J.length===re.length&&J.every((Ee,ge)=>Ee===re[ge]))){const Ee=`Diskrepancia v určení víťaza:

Hra deklaruje víťazov: ${J.map(ge=>r.players[ge]).join(", ")}
Validácia podľa súčtov: ${re.map(ge=>r.players[ge]).join(", ")}

Turnaj sa neuzatvorí — kontaktuj vývojára (alebo skús presný stav v archíve).`;window.alert(Ee),console.error("[finishTournament] Winner mismatch:",{declaredWinners:J,computedWinners:re,totals:M.totals});return}const pe={...r,status:"finished",winner:re.length===1?re[0]:re,finishedAt:new Date().toISOString(),_validatedTotals:M.totals};Na.playWin(),s(Ee=>[pe,...Ee]),i(null),h(pe),e("archiveDetail")}function os(){r&&window.confirm("Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.")&&(s(I=>[{...r,status:"aborted",finishedAt:new Date().toISOString()},...I]),i(null),e("menu"))}function Kt(I,M){s(J=>J.map(re=>re.id===I?{...re,...M}:re)),(d==null?void 0:d.id)===I&&h(J=>({...J,...M}))}async function hn(){if(t.length===0){window.alert("Archív je prázdny — nie je čo exportovať.");return}const I=(await Bt(async()=>{const{default:W}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:W}},[],import.meta.url)).default||await Bt(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url);function M(W){return W.winner===null||W.winner===void 0?[]:(Array.isArray(W.winner)?W.winner:[W.winner]).map(fe=>W.players[fe])}function J(W){const _e=M(W);return _e.length===0?"—":_e.length===1?_e[0]:`Remíza: ${_e.join(", ")}`}const re=I.utils.book_new(),Te=t.map((W,_e)=>({"#":_e+1,Začiatok:ei(W.date),Koniec:W.finishedAt?ei(W.finishedAt):"—",Cieľ:W.targetScore||1e4,"Počet hráčov":W.players.length,Hráči:W.players.join(", "),Víťaz:J(W),Stav:W.status==="finished"?"Dokončený":W.status==="aborted"?"Nedokončený":"Aktívny"})),pe=I.utils.json_to_sheet(Te);pe["!cols"]=[{wch:5},{wch:20},{wch:20},{wch:8},{wch:12},{wch:30},{wch:20},{wch:14}],I.utils.book_append_sheet(re,pe,"Prehľad"),t.forEach((W,_e)=>{const fe=[],ke=new Date(W.date),Rt=W.finishedAt?new Date(W.finishedAt):null,Ce=ke.toLocaleDateString("sk-SK",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\s/g,""),Et=ke.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}),Ct=Rt?Rt.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}):"",ot=Ct?`${Et}-${Ct}`:Et;fe.push([`Hra ${Ce} ${ot} — ${W.players.join(", ")}`]),fe.push([]),fe.push(["Kolo",...W.players]);const _t=new Array(W.players.length).fill(0);(W.rounds||[]).forEach((ft,at)=>{const Ye=[at+1];for(let It=0;It<W.players.length;It++){const $t=ft[It];typeof $t=="number"?(_t[It]+=$t,Ye.push(_t[It])):$t==="dash"?Ye.push("—"):Ye.push(null)}fe.push(Ye)}),fe.push(["MAX",..._t]);let as="— Nedokončený turnaj";const Vt=M(W);if(Vt.length===1){const ft=Array.isArray(W.winner)?W.winner[0]:W.winner;as=`🏆 Víťaz: ${Vt[0]} (${_t[ft]})`}else Vt.length>1&&(as=`🏆 Remíza: ${(Array.isArray(W.winner)?W.winner:[W.winner]).map(Ye=>`${W.players[Ye]} (${_t[Ye]})`).join(", ")}`);fe.push([as]);const zt=I.utils.aoa_to_sheet(fe);zt["!cols"]=[{wch:6},...W.players.map(()=>({wch:14}))],I.utils.book_append_sheet(re,zt,`Hra ${_e+1}`.substring(0,31))});const Ee=`kocky-sveta-${new Date().toISOString().slice(0,10)}.xlsx`,ge=I.write(re,{bookType:"xlsx",type:"base64"});try{if(Mr.isNativePlatform()){const W=await mg.writeFile({path:Ee,data:ge,directory:ja.Documents,recursive:!0}),_e=await uu.canShare();_e!=null&&_e.value?await uu.share({title:"Export Kocky sveta",text:"Exportované dáta z aplikácie Kocky sveta",url:W.uri,dialogTitle:"Uložiť alebo zdieľať export"}):window.alert("Export uložený do Documents: "+Ee);return}}catch(W){console.error("Native Android export failed:",W),window.alert("Natívny export zlyhal: "+((W==null?void 0:W.message)||"neznáma chyba")+`

Skontroluj, či si po npm install spustil aj npx cap sync android.`)}try{I.writeFile(re,Ee)}catch{const _e=new Blob([I.write(re,{bookType:"xlsx",type:"array"})],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),fe=URL.createObjectURL(_e),ke=document.createElement("a");ke.href=fe,ke.download=Ee,document.body.appendChild(ke),ke.click(),ke.remove(),URL.revokeObjectURL(fe),setTimeout(()=>URL.revokeObjectURL(fe),4e3)}}async function F(I){try{const M=(await Bt(async()=>{const{default:W}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:W}},[],import.meta.url)).default||await Bt(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url),J=await I.arrayBuffer(),re=M.read(J,{type:"array"}),Te=[],pe=[];for(const W of re.SheetNames){let _e=function(X){if(X==null)return!1;const ue=String(X).trim();return ue==="—"||ue==="-"||ue==="–"||ue==="−"},fe=function(X){return X==null?!0:String(X).trim()===""},ke=function(X){if(typeof X=="number")return X;if(typeof X=="string"){const ue=X.replace(/\s/g,"").replace(",","."),Fe=parseFloat(ue);return Number.isFinite(Fe)?Fe:null}return null};if(/prehľad|prehlad|summary/i.test(W))continue;const Rt=re.Sheets[W],Ce=M.utils.sheet_to_json(Rt,{header:1,defval:null,raw:!0});if(!Ce||Ce.length<4){pe.push(`${W}: príliš krátky list`);continue}const Et=Ce[0],Ct=(Et&&Et[0]?String(Et[0]):"").trim(),ot=Ct.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/),_t=Ct.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/),as=Ct.match(/[—–-]\s*(.+)$/);let Vt=-1;for(let X=0;X<Math.min(Ce.length,6);X++){const ue=Ce[X]||[];if(ue[0]&&/^kolo$/i.test(String(ue[0]).trim())){Vt=X;break}}if(Vt<0){pe.push(`${W}: nenájdený riadok "Kolo"`);continue}const zt=Ce[Vt],ft=[];for(let X=1;X<zt.length;X++){const ue=zt[X];if(ue&&String(ue).trim())ft.push(String(ue).trim());else break}if(ft.length<2){pe.push(`${W}: nenájdené mená hráčov`);continue}const at=[];for(let X=Vt+1;X<Ce.length;X++){const ue=Ce[X]||[];if(!ue[0])break;const Fe=String(ue[0]).trim();if(/^max$/i.test(Fe)||/^¤â$/i.test(Fe)||/^suma$/i.test(Fe)||/víťaz|vitaz|🏆/i.test(Fe))break;const xe=parseInt(Fe,10);if(!Number.isFinite(xe))break;at.push(ue.slice(1,1+ft.length))}if(at.length===0){pe.push(`${W}: žiadne dátové riadky`);continue}const Ye=at.map(()=>new Array(ft.length).fill(null));for(let X=0;X<ft.length;X++){let ue=0,Fe=!1;for(let xe=0;xe<at.length;xe++){const et=at[xe][X];if(_e(et))Ye[xe][X]="dash";else if(fe(et))Ye[xe][X]=null;else{const tt=ke(et);if(tt===null)Ye[xe][X]=null;else{const Nn=Fe?tt-ue:tt;Ye[xe][X]=Nn,ue=tt,Fe=!0}}}}let It=null;for(let X=0;X<Ce.length;X++){const ue=Ce[X]||[],xe=(ue[0]?String(ue[0]):"").match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);if(xe){const et=xe[1].trim(),tt=ft.findIndex(Nn=>Nn.toLowerCase()===et.toLowerCase());tt>=0&&(It=tt);break}}if(It===null){const X=ft.map((Fe,xe)=>Ye.reduce((et,tt)=>et+(typeof tt[xe]=="number"?tt[xe]:0),0)),ue=X.indexOf(Math.max(...X));X[ue]>=5e3&&(It=ue)}let $t=new Date,cs=null;if(ot){const X=parseInt(ot[1],10),ue=parseInt(ot[2],10)-1,Fe=parseInt(ot[3],10);let xe=12,et=0,tt=null,Nn=null;_t&&(xe=parseInt(_t[1],10),et=parseInt(_t[2],10),_t[3]&&(tt=parseInt(_t[3],10),Nn=parseInt(_t[4],10))),$t=new Date(Fe,ue,X,xe,et),tt!==null&&(cs=new Date(Fe,ue,X,tt,Nn))}const gi=ft.map((X,ue)=>Ye.reduce((Fe,xe)=>Fe+(typeof xe[ue]=="number"?xe[ue]:0),0)),yi=Math.max(...gi),bi=yi>=7500?1e4:yi>=3500?5e3:1e4,Qo={id:Date.now()+Math.floor(Math.random()*1e3)+Te.length,date:$t.toISOString(),finishedAt:cs?cs.toISOString():$t.toISOString(),players:ft,rounds:Ye,currentPlayer:0,currentRound:Ye.length,status:It!==null?"finished":"aborted",winner:It,confirmationPendingPlayer:null,targetScore:bi,minWriteOff:300,imported:!0,importedFrom:W};Te.push(Qo)}if(Te.length===0){window.alert(`Žiadne turnaje neboli importované.${pe.length?`

Preskočené listy:
`+pe.join(`
`):""}`);return}const Ee=[...Te,...t];s(Ee);let ge=`Úspešne importované: ${Te.length} ${Te.length===1?"turnaj":Te.length<5?"turnaje":"turnajov"}.`;pe.length&&(ge+=`

Preskočené:
${pe.join(`
`)}`),window.alert(ge)}catch(M){console.error(M),window.alert("Chyba pri importe: "+(M.message||"neznáma chyba"))}}async function G(){if(!window.confirm(`⚠️ POZOR: Toto vymaže VŠETKY turnaje z archívu, rozohranú hru aj uložené pravidlá z tohto zariadenia.

Odporúčame najprv vytvoriť zálohu cez Export do Excelu.

Chceš pokračovať?`))return;if(window.prompt("Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).")!=="VYMAZAŤ"){window.alert("Vymazanie zrušené.");return}s([]),i(null),h(null),l(Mi),P("classic"),$("default"),await window.storage.delete("tournaments").catch(()=>{}),await window.storage.delete("selectedFont").catch(()=>{}),await window.storage.delete("active").catch(()=>{}),await window.storage.set("rules",JSON.stringify(Mi)).catch(()=>{}),await window.storage.set("selectedSkin",JSON.stringify("classic")).catch(()=>{}),window.alert("Všetky dáta boli vymazané.")}return a.jsxs("div",{className:"ks-bg min-h-screen ks-cream ks-body","data-skin":A,"data-animations":j?"on":"off",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:[a.jsx("style",{children:BE(A,S)}),a.jsx("style",{children:`:root { --ks-popup-offset: ${ti.VERTICAL_OFFSET}; --ks-popup-opacity: ${ti.OPACITY}; }`}),(A==="brawlstars"||A==="brawlblue"||A==="harrypotter")&&j&&a.jsx(zE,{skin:A}),n==="menu"&&a.jsx(Ag,{onNew:()=>e("newTournament"),onArchive:()=>{p("menu"),e("archive")},onrules:()=>e("rules"),onSettings:()=>e("settings"),onOnline:()=>e("online"),onResume:r?()=>e("tournament"):null,active:r,tournamentCount:t.length}),n==="settings"&&a.jsx(KE,{onBack:()=>e("menu"),onOnline:()=>e("online"),onRulesEditor:()=>e("rulesEditor"),onExport:hn,onImport:F,onClearAll:G,onArchive:()=>{p("settings"),e("archive")},tournamentCount:t.length,selectedSkin:A,onSkinChange:P,selectedFont:S,onFontChange:$,tournamentViewMode:y,onTournamentViewModeChange:_,onViewModes:()=>e("viewModes"),onVisualAndSkins:()=>e("visual"),funnyWindowsDisplayMode:k,onFunnyWindowsDisplayModeChange:x,onAdmin:()=>ve(!0),onShowEgg:()=>bt(!0)}),n==="admin"&&a.jsx(PE,{onBack:()=>e("settings"),adminSettings:E,onAdminChange:b,tournaments:t,active:r,appVersion:"1.5.4",onSimulateTurn:dn,onExportState:rs,onCreateRoom:is}),n==="viewModes"&&a.jsx(Dg,{onBack:()=>e("settings"),selectedMode:y,onChangeMode:_,selectedSkin:A}),n==="visual"&&a.jsx(Og,{onBack:()=>e("settings"),selectedSkin:A,onSkinChange:P,selectedFont:S,onFontChange:$,tournamentViewMode:y,onTournamentViewModeChange:_,onViewModes:()=>e("viewModes"),soundsEnabled:R,onSoundsToggle:()=>V(I=>!I),animationsEnabled:j,onAnimationsToggle:()=>H(I=>!I)}),n==="newTournament"&&a.jsx(Ng,{onBack:()=>e("menu"),onStart:We}),n==="tournament"&&(r?a.jsx(YE,{tournament:r,rules:c,onUpdate:Oe,onFinish:ss,onAbort:Ss,onMenu:un,scoreDisplayMode:q,onToggleScoreMode:ts,selectedSkin:A,onSkinChange:P,tournamentViewMode:y,funnyWindowsDisplayMode:k,debugMode:E.debugMode,minWriteOffOverride:E.minWriteOffOverride,canUndo:ye.length>0,onUndo:Ue}):a.jsx(Ys,{title:"Turnaj sa nepodarilo načítať"})),n==="archive"&&a.jsx(rI,{tournaments:Array.isArray(t)?t:[],onBack:()=>e(m),onView:I=>{h(I),e("archiveDetail")},onDelete:I=>{window.confirm("Vymazať tento turnaj z archívu?")&&s(M=>M.filter(J=>J.id!==I))},readOnly:m==="menu"}),n==="archiveDetail"&&(d?a.jsx(oI,{tournament:d,onBack:()=>e("archive"),onUpdate:I=>Kt(d.id,I),readOnly:m==="menu",scoreDisplayMode:q,onToggleScoreMode:ts,selectedSkin:A}):a.jsx(Ys,{title:"Dáta turnaja sa nepodarilo načítať"})),n==="rules"&&a.jsx(ZE,{rules:c,onBack:()=>e("menu")}),n==="online"&&a.jsx(SE,{onBack:()=>e("menu"),activeSkin:A,activeRules:c,defaultRoomName:E.roomName}),n==="rulesEditor"&&a.jsx(eI,{rules:c,onSave:l,onBack:()=>e("settings"),onReset:()=>{window.confirm("Obnoviť všetky pravidlá na pôvodné nastavenia?")&&l(Mi)},selectedSkin:A}),oe&&a.jsx(DE,{onSuccess:()=>{ve(!1),e("admin")},onCancel:()=>ve(!1)}),Dt&&Q&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-[9990] px-4 pb-[max(16px,env(safe-area-inset-bottom))]",children:a.jsxs("div",{className:"max-w-md mx-auto ks-card border-2 border-amber-700/60 rounded-sm px-4 py-3 flex items-center gap-3 shadow-2xl",children:[a.jsx(ko,{size:18,className:"ks-gold shrink-0"}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-cream text-sm font-semibold ks-display",children:"Neaktivita — čoskoro sa odpojíš"}),a.jsx("div",{className:"ks-muted text-xs",children:"Miestnosť sa odpojí za menej ako 2 minúty."})]}),a.jsx("button",{onClick:()=>{Ut.current=Date.now(),De(!1)},className:"ks-gold-bg ks-press px-3 py-1.5 rounded-sm ks-mono text-xs font-bold shrink-0",children:"ZOSTAŤ"})]})}),it&&a.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/95",onClick:()=>bt(!1),children:a.jsx("img",{src:"/Easteregg.jpg",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",display:"block"},alt:"",draggable:!1})})]})}function Ys({title:n="Dáta sa nepodarilo načítať"}){return a.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 ks-cream",children:a.jsxs("div",{className:"ks-card rounded-sm p-5 text-center max-w-md",children:[a.jsx("div",{className:"ks-display text-2xl ks-gold mb-2",children:n}),a.jsx("div",{className:"ks-muted text-sm",children:"Skús sa vrátiť späť alebo otvoriť turnaj znova."})]})})}function KE({onBack:n,onOnline:e,onRulesEditor:t,onExport:s,onImport:r,onClearAll:i,onArchive:c,tournamentCount:l,selectedSkin:d,onSkinChange:h,selectedFont:m,onFontChange:p,tournamentViewMode:v,onTournamentViewModeChange:T,onViewModes:A,onVisualAndSkins:P,funnyWindowsDisplayMode:S,onFunnyWindowsDisplayModeChange:$,onAdmin:R,onShowEgg:V}){const j=D.useRef(null),[H,q]=D.useState(0);function w(){const _=H+1;q(_),_>=5&&(V==null||V(),q(0))}function y(_){var x;const k=(x=_.target.files)==null?void 0:x[0];k&&r&&r(k),j.current&&(j.current.value="")}return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(Bn,{title:"Nastavenia",onBack:n}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"ONLINE"}),a.jsxs("button",{onClick:e,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(ni,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Online miestnosť"}),a.jsx("div",{className:"ks-muted text-sm",children:"Synchronizácia hry, archívu a skinu cez Firebase"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"PRAVIDLÁ A HODNOTY HRY"}),a.jsxs("button",{onClick:t,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(hc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Úprava pravidiel"}),a.jsx("div",{className:"ks-muted text-sm",children:"Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"VIZUÁL, ZVUKY A SKINY"}),a.jsxs("button",{onClick:A,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Dp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Režim zobrazenia hry"}),a.jsx("div",{className:"ks-muted text-sm",children:v==="observer"?"Pozorovateľ":v==="recorder"?"Zapisovateľ":"Klasický"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Op,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Štýl oznámení"}),a.jsx("div",{className:"ks-muted text-sm",children:"Fullscreen funny okná, malé popupy alebo potlačený režim"})]})]}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:[["standard","Štandardný"],["simplified","Zjednodušený"],["suppressed","Potlačený"]].map(([_,k])=>a.jsx("button",{onClick:()=>$(_),className:`ks-press px-3 py-2 rounded-sm text-sm ${S===_?"ks-gold-bg":"border ks-border-sub ks-card ks-cream"}`,children:k},_))})]}),a.jsxs("button",{onClick:P,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(pc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Vizuál, Zvuky a Skiny"}),a.jsx("div",{className:"ks-muted text-sm",children:"Farby, písmo a vzhľad aplikácie"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"SPRÁVA TURNAJOV"}),a.jsxs("button",{onClick:s,disabled:!l,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${l?"":"opacity-40 cursor-not-allowed"}`,children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Vp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Export do Excelu"}),a.jsx("div",{className:"ks-muted text-sm",children:l>0?`${l} turnajov · súbor .xlsx s listami`:"Žiadne turnaje na export"})]}),a.jsx(Lp,{className:"ks-muted",size:20})]}),a.jsxs("button",{onClick:()=>{var _;return(_=j.current)==null?void 0:_.click()},className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Mp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Import z Excelu"}),a.jsx("div",{className:"ks-muted text-sm",children:"Pridá turnaje z .xlsx súboru do archívu"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsx("input",{ref:j,type:"file",accept:".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:y,className:"hidden"}),a.jsxs("button",{onClick:c,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(gc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Editácia archívu"}),a.jsx("div",{className:"ks-muted text-sm",children:'Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá'})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsxs("button",{onClick:R,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(mc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Admin nastavenia"}),a.jsx("div",{className:"ks-muted text-sm",children:"Interné nastavenia · debug · override · diagnostika"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5",children:[a.jsx(ko,{size:11})," NEBEZPEČNÁ ZÓNA"]}),a.jsxs("button",{onClick:i,className:"ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center",children:a.jsx(xo,{size:22,className:"ks-text-accent"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-text-accent text-xl font-semibold",children:"Vymazať všetky dáta"}),a.jsx("div",{className:"ks-text-accent/70 text-sm",children:"Archív, rozohraná hra, pravidlá — nenávratná akcia"})]}),a.jsx(Tt,{className:"ks-text-accent",size:20})]}),a.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2",children:[a.jsx(vo,{size:14,className:"ks-gold shrink-0 mt-0.5"}),a.jsxs("div",{children:["Pred vymazaním dát si ",a.jsx("strong",{className:"ks-gold",children:"vytvor zálohu"})," cez Export do Excelu. Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca."]})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4",children:"O APLIKÁCII"}),a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("button",{onClick:w,className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center ks-press select-none",children:a.jsx(Ca,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Kocky sveta"}),a.jsx("div",{className:"ks-muted text-sm",children:"React + Vite + Firebase + Capacitor"})]})]}),a.jsxs("div",{className:"space-y-2 text-xs ks-muted leading-relaxed border-t ks-border-sub pt-3",children:[a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Technológie:"})," React 18, Vite, Tailwind CSS, Firebase Firestore, Capacitor (Android/iOS)"]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Dáta:"})," Ukladané lokálne. Online sync cez Firebase Firestore v reálnom čase."]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Exporty:"})," XLSX (SheetJS) — každý turnaj ako list + súhrnný prehľad."]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Vývoj:"})," Marcel, 2026. Herná logika a pravidlá sú autorské."]})]})]})]})]})}function GE(n){const e=(n||[]).find(t=>t.id==="r18");return!e||e.selected!=="Áno"}function JE(){const[n,e]=D.useState(null),t=D.useRef([]),s=D.useRef(0),r=D.useRef(null),i=ti.POPUP_DISPLAY_DURATION,c=ti.QUEUE_SIZE;function l(){r.current&&(clearTimeout(r.current),r.current=null)}function d(){if(l(),t.current.length===0){e(null);return}const v=t.current.shift();s.current=Date.now()+i,e(v),r.current=setTimeout(d,v.duration??i)}function h(v){if(v){if(!n){s.current=Date.now()+i,e(v),l(),r.current=setTimeout(d,v.duration??i);return}t.current.length>=c?t.current[t.current.length-1]=v:t.current.push(v)}}function m(){l();const v=Date.now(),T=Math.max(0,s.current-v);e(null),t.current.length>0&&(r.current=setTimeout(d,T))}function p(){t.current=[],l(),e(null),s.current=0}return D.useEffect(()=>l,[]),{active:n,enqueue:h,dismiss:m,clear:p}}function YE({tournament:n,rules:e,onUpdate:t,onFinish:s,onAbort:r,onMenu:i,scoreDisplayMode:c,onToggleScoreMode:l,selectedSkin:d,onSkinChange:h,tournamentViewMode:m,funnyWindowsDisplayMode:p,debugMode:v,minWriteOffOverride:T}){if(!n)return a.jsx(Ys,{});const A=n.targetScore||1e4,P=T??n.minWriteOff??300,S=Array.isArray(n.players)?n.players:[],$=Array.isArray(n.rounds)?n.rounds:[],{currentPlayer:R=0,currentRound:V=0}=n,[j,H]=D.useState([]),[q,w]=D.useState(""),[y,_]=D.useState(!1),[k,x]=D.useState(!1),[E,b]=D.useState(null),oe=JE(),ve=oe.active,[it,bt]=D.useState(!1),[kt,ne]=D.useState(null),[me,Ie]=D.useState(!1),[Q,ae]=D.useState(null),je=D.useRef(S.map(()=>0)),Be=D.useRef(new Set),Me=D.useMemo(()=>bl($,S.length),[$,S.length]),Dt=D.useMemo(()=>S.map((F,G)=>$.some(I=>typeof I[G]=="number"&&I[G]>=0)),[S,$]),De=Me[R];Dt[R];const Ut=De>=A-P&&De<A,qt=GE(e),ln=qt?null:n.confirmationPendingPlayer,xt=ln===R&&ln!==null,Ot=A-De,un=R===S.length-1,ts=!!n.pendingDecision||xt,ye=j.reduce((F,G)=>F+(typeof G=="number"?G:0),0),wt=De+ye;function ht(F,G="info"){b({msg:F,kind:G}),setTimeout(()=>b(null),3500)}function Oe(F,G={}){const I=F?typeof F=="string"?{msg:F,emoji:"🎭",variant:"fight"}:F:Bd[Math.floor(Math.random()*Bd.length)];if(!(p==="suppressed"&&!G.forceFullscreen)){if(p==="simplified"&&!G.forceFullscreen){const M=G.duration??Math.max(ti.POPUP_DISPLAY_DURATION,2600);b({msg:I.msg,kind:"info"}),setTimeout(()=>b(null),M);return}oe.enqueue({...I,duration:G.duration??3500})}}function Ue(){if(ye<=0||ye>=500||je.current[R]>=3)return;const F=Math.max(...Me),G=Math.min(...Me),I=De<F-1500,M=De===G&&Me.some(J=>J>De+800);(I||M)&&Math.random()<.55&&(je.current[R]++,Oe())}function Ft(F){if(!(!Number.isFinite(F)||F===0)){if(xt){ht("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(j.some(G=>G==="dash"||G===kr)){H([F]);return}H(G=>[...G,F])}}function ns(){j.length===1&&j[0]==="dash"||H(["dash"])}function ss(){if(xt){ht("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}j.length===1&&j[0]===kr||H([kr])}function Ss(F){H(G=>G.filter((I,M)=>M!==F))}function dn(){H([])}function rs(){if(j.length!==0){if(j[0]==="dash"){if(xt){We("dash",{confirmWin:!0,confirmedRound:V,confirmedPlayer:R});return}We("dash");return}if(xt){ht("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(j.some(F=>F<0)){if(j.length>1||j[0]!==kr){ht("Penalizácia −1 000 sa nedá kombinovať s inými bodmi.","warn");return}We(kr);return}if(Ut){if(ye===Ot){if(qt){Ue(),un||ht(`${S[R]} dosiahol cieľ ${A.toLocaleString("sk-SK")}! Kolo sa dohrá a hra skončí.`,"info"),We(ye,{addCandidate:R,autoConfirm:!0,confirmedRound:V,confirmedPlayer:R});return}const F=Me[R];t(G=>({...G,pendingDecision:{id:`${G.currentPlayer}-${G.currentRound}-${ye}`,type:"exact-hit-verification",player:G.currentPlayer,round:G.currentRound,score:ye,baseTotal:F,target:G.targetScore,status:"pending"}})),un||(ne(`${R}-${V}-${ye}-endgame`),Ie(!0));return}ht(`Koncovka — treba presne ${Ot} bodov. Automatická čiarka!`,"overshoot"),We("dash");return}if(ye>0&&ye<P){ht(`Každý zápis musí byť aspoň ${P} bodov, alebo daj čiarku.`,"warn");return}if(wt>A){ht(`Prekročenie ${A.toLocaleString("sk-SK")} – automatická čiarka!`,"overshoot"),We("dash");return}if(wt===A){if(Ue(),qt){un||ht(`${S[R]} dosiahol cieľ ... Kolo sa dohrá a hra skončí.`),We(ye,{addCandidate:R,autoConfirm:!0,confirmedRound:V,confirmedPlayer:R});return}if(un){Ue(),We(ye,{addCandidate:R,autoConfirm:!0,confirmedRound:V,confirmedPlayer:R});return}ne(`${R}-${V}-${ye}`),bt(!0),We(ye,{addCandidate:R});return}Ue(),We(ye)}}function is(F,G){const I=n.pendingDecision;!I||I.id!==F||(G==="confirm"?We(I.score,{confirmWin:!0,confirmedRound:I.round,confirmedPlayer:I.player}):We("dash"))}function We(F,G={}){t(I=>{const M=I.rounds.slice();for(M[I.currentRound]=[...I.rounds[I.currentRound]||[]];M.length<=I.currentRound;)M.push(new Array(I.players.length).fill(null));M[I.currentRound][I.currentPlayer]=F;let J=I.winner,re=I.confirmationPendingPlayer,Te=[...I.confirmationQueue||[]],pe=I.confirmationRoundComplete;G.addCandidate!==void 0&&(Te.includes(G.addCandidate)||Te.push(G.addCandidate));let Ee=I._confirmedDetailed;if(G.autoConfirm){const fe={player:G.confirmedPlayer??I.currentPlayer,round:G.confirmedRound??I.currentRound,confirmedAt:Date.now()};Ee=Array.isArray(I._confirmedDetailed)?[...I._confirmedDetailed.filter(ke=>!(ke.player===fe.player&&ke.round===fe.round)),fe]:[fe]}if(G.confirmWin){const fe={player:G.confirmedPlayer??I.currentPlayer,round:G.confirmedRound??I.currentRound,confirmedAt:Date.now()},ke=Array.isArray(I._confirmedDetailed)?[...I._confirmedDetailed.filter(Ct=>!(Ct.player===fe.player&&Ct.round===fe.round)),fe]:[fe],Rt=(I.currentPlayer+1)%I.players.length,Ce=Rt===0,Et=I.currentRound+(Ce?1:0);if(re=null,Ce){const Ct={...I,rounds:M,_confirmedDetailed:ke,rules:I.rules,pendingDecision:null},ot=bo(Ct);return J=ot.valid&&ot.winners.length>0?ot.winners.length===1?ot.winners[0]:ot.winners:null,{...I,rounds:M,currentPlayer:Rt,currentRound:Et,winner:J,confirmationPendingPlayer:re,confirmationQueue:Te,confirmationRoundComplete:J!==null,_confirmedDetailed:ke,pendingDecision:null}}return{...I,rounds:M,currentPlayer:Rt,currentRound:Et,winner:J,confirmationPendingPlayer:re,confirmationQueue:Te,confirmationRoundComplete:pe,_confirmedDetailed:ke,pendingDecision:null}}const ge=(I.currentPlayer+1)%I.players.length,W=ge===0,_e=I.currentRound+(W?1:0);if(W){const fe={...I,rounds:M,_confirmedDetailed:Ee,rules:I.rules,pendingDecision:null},ke=bo(fe);if(!ke.valid&&ke.achievers.length>0){const Rt=ke.achievers.filter(Ce=>!(Ee||[]).some(Et=>Et.player===Ce&&Et.round===I.currentRound));if(Rt.length>0)return re=Rt[0],pe=!0,{...I,rounds:M,currentPlayer:re,currentRound:_e,winner:null,confirmationPendingPlayer:re,confirmationQueue:Te,confirmationRoundComplete:pe,_confirmedDetailed:Ee,pendingDecision:null}}if(ke.winners.length>0)return J=ke.winners.length===1?ke.winners[0]:ke.winners,pe=!0,{...I,rounds:M,currentPlayer:ge,currentRound:I.currentRound,winner:J,confirmationPendingPlayer:null,confirmationQueue:Te,confirmationRoundComplete:pe,_confirmedDetailed:Ee,pendingDecision:null}}return{...I,rounds:M,currentPlayer:ge,currentRound:_e,winner:J,confirmationPendingPlayer:W?null:re,confirmationQueue:Te,confirmationRoundComplete:pe,_confirmedDetailed:Ee,pendingDecision:null}}),H([]),w("")}D.useEffect(()=>{if(n.winner!==null&&n.winner!==void 0){oe.clear(),b(null);const F=Array.isArray(n.winner)?n.winner:[n.winner];ae({winnerArr:F,isDraw:F.length>1});const G=setTimeout(()=>{ae(null),s(n.winner)},2200);return()=>clearTimeout(G)}},[n.winner]),D.useEffect(()=>{if(!Ut)return;const F=`${R}_${V}`;if(Be.current.has(F))return;Be.current.add(F);const G=setTimeout(()=>{Oe({msg:`Hoď presne ${Ot}! V koncovke potom treba potvrdenie. 😤`,emoji:"🤙",variant:"fight"},{duration:4500})},400);return()=>clearTimeout(G)},[R,V,Ut,xt,Ot]);const ar=m==="observer",os=m==="recorder",Kt=it&&kt!==null;function hn(){const F=parseInt(q,10);if(!(!Number.isFinite(F)||F===0)){if(F%50!==0){ht("Hodnota musí byť násobok 50 (50, 100, 150…)","warn");return}Ft(F),w("")}}return!n||!Array.isArray(n.players)||!Array.isArray(n.rounds)?a.jsx(Ys,{}):a.jsxs("div",{className:`min-h-screen ks-fade ks-bg ${os?"pb-6":"pb-32"}`,children:[!os&&a.jsx(Bn,{title:`Turnaj · do ${A.toLocaleString("sk-SK")}`,onBack:i,right:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:l,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:c==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:c==="delta"?a.jsx(Zd,{size:16}):a.jsx(pc,{size:16})}),a.jsx("button",{onClick:r,className:"ks-press ks-text-accent px-2 py-1 text-xs ks-mono",children:"ZRUŠIŤ"})]})}),ar?a.jsx("div",{className:"px-2 pt-1 pb-3 h-[100dvh] flex flex-col",children:a.jsx("div",{className:"flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden",children:a.jsx("div",{className:"h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]",children:a.jsx(Da,{tournament:n,totals:Me,highlightPlayer:R,pendingPreview:ye>0?ye:0,target:A,displayMode:c,onToggleMode:l,hideModeToolbar:!1,hideModeToggle:!0,compactObserver:!0})})})}):os?a.jsxs("div",{className:"min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]",children:[a.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[a.jsxs("button",{onClick:i,className:"ks-press ks-cream flex items-center gap-1 px-2 py-1",children:[a.jsx(vs,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}),a.jsx("div",{className:"ks-display ks-gold text-lg text-center",children:S[R]}),a.jsx("button",{onClick:r,className:"ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent",children:"ZRUŠIŤ"})]}),a.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[a.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",V+1]}),a.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",A.toLocaleString("sk-SK")]})]}),a.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),a.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:S[R]})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),a.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${De<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:De>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:De.toLocaleString("sk-SK")})]})]})]}),a.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[j.length>0&&j[0]!=="dash"&&Number.isFinite(wt)&&a.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",wt.toLocaleString("sk-SK")]}),j[0]==="dash"?a.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):a.jsxs("div",{className:`ks-display text-6xl font-bold ${ye<0?"ks-text-accent":"ks-gold"}`,children:[ye>0?"+":"",ye.toLocaleString("sk-SK")]})]})]}),j.length>0?a.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:j.map((F,G)=>a.jsxs("button",{onClick:()=>Ss(G),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${F==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":F<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[a.jsx("span",{className:"ks-display font-semibold",children:F==="dash"?"— čiarka":F>0?`+${F}`:F}),a.jsx(Hn,{size:14,className:"opacity-60 group-hover:opacity-100"})]},G))}):a.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),a.jsx(lt,{onClick:rs,disabled:j.length===0,icon:zs,className:"w-full text-lg",children:"Zapísať"})]}),a.jsxs("div",{className:"ks-card-sub rounded-sm p-4 flex-1",children:[a.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),a.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:$d.map(F=>a.jsxs("button",{onClick:()=>Ft(F),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",F]},F))}),a.jsxs("div",{className:"flex gap-2 mb-3",children:[a.jsx("input",{type:"number",value:q,onChange:F=>w(F.target.value),onKeyDown:F=>F.key==="Enter"&&hn(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),a.jsx(lt,{onClick:hn,icon:Pa,variant:"outline",children:"Pridaj"})]}),a.jsx("div",{className:"ks-divider my-3"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("button",{onClick:ns,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(Zl,{size:20,className:"ks-muted"}),a.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),a.jsxs("button",{onClick:ss,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(eu,{size:20,className:"ks-text-accent"}),a.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4",children:[a.jsx(lt,{onClick:()=>x(!0),icon:tu,variant:"ghost",children:"Priebeh hry"}),a.jsx(lt,{onClick:()=>_(!0),icon:Ra,variant:"ghost",children:"Pravidlá"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-3 pt-3",children:a.jsx(Da,{tournament:n,totals:Me,highlightPlayer:R,pendingPreview:ye>0?ye:0,target:A,displayMode:c,onToggleMode:l,hideModeToolbar:!0})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[a.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",V+1]}),a.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",A.toLocaleString("sk-SK")]})]}),a.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),a.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:S[R]})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),a.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${De<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:De>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:De.toLocaleString("sk-SK")})]})]}),a.jsx("div",{className:"mt-3 space-y-1.5",children:Ut&&a.jsxs(WE,{kind:"warn",icon:fc,children:[a.jsx("strong",{children:"Koncovka!"})," Treba presne ",a.jsx("strong",{children:Ot})," bodov."]})})]})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[j.length>0&&j[0]!=="dash"&&Number.isFinite(wt)&&a.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",wt.toLocaleString("sk-SK")]}),j[0]==="dash"?a.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):a.jsxs("div",{className:`ks-display text-6xl font-bold ${ye<0?"ks-text-accent":"ks-gold"}`,children:[ye>0?"+":"",ye.toLocaleString("sk-SK")]})]})]}),j.length>0?a.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[j.map((F,G)=>a.jsxs("button",{onClick:()=>Ss(G),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${F==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":F<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[a.jsx("span",{className:"ks-display font-semibold",children:F==="dash"?"— čiarka":F>0?`+${F}`:F}),a.jsx(Hn,{size:14,className:"opacity-60 group-hover:opacity-100"})]},G)),j.length>1&&a.jsx("button",{onClick:dn,className:"ks-press px-3 py-1.5 rounded-sm ks-text-accent text-xs ks-mono",children:"VYMAZAŤ VŠETKO"})]}):a.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),a.jsx(lt,{onClick:rs,disabled:j.length===0,icon:zs,className:"w-full text-lg",children:"Zapísať"})]})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-sub rounded-sm p-4",children:[a.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),a.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:$d.map(F=>a.jsxs("button",{onClick:()=>Ft(F),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",F]},F))}),a.jsxs("div",{className:"flex gap-2 mb-3",children:[a.jsx("input",{type:"number",value:q,onChange:F=>w(F.target.value),onKeyDown:F=>F.key==="Enter"&&hn(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),a.jsx(lt,{onClick:hn,icon:Pa,variant:"outline",children:"Pridaj"})]}),a.jsx("div",{className:"ks-divider my-3"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("button",{onClick:ns,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(Zl,{size:20,className:"ks-muted"}),a.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),a.jsxs("button",{onClick:ss,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(eu,{size:20,className:"ks-text-accent"}),a.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[a.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Hod bez zápisu (— pomlčka)"}),a.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Nič nehodené (penalizácia)"})]})]})}),a.jsxs("div",{className:"px-4 mt-4 grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:()=>x(!0),icon:tu,variant:"ghost",children:"Priebeh hry"}),a.jsx(lt,{onClick:()=>_(!0),icon:Ra,variant:"ghost",children:"Pravidlá"})]})]}),E&&a.jsx(HE,{...E,onClose:()=>b(null)}),!Kt&&ve&&!ts&&p==="standard"&&a.jsx(Wd,{data:ve,onClose:oe.dismiss}),k&&a.jsx(qd,{onClose:()=>x(!1),title:"Priebeh hry",children:a.jsx(gg,{tournament:n,totals:Me,target:A})}),y&&a.jsx(qd,{onClose:()=>_(!1),title:"Pravidlá hry",children:a.jsx(lp,{rules:e,compact:!0})}),Kt&&p==="standard"&&a.jsx(Wd,{data:{msg:"Dočasný kráľ! Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",emoji:"strikethrough-crown",variant:"fight"},onClose:()=>{bt(!1),ne(null),Ie(!1)}}),Kt&&p==="simplified"&&a.jsx(Ui,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{bt(!1),ne(null),Ie(!1)}}),Kt&&p==="suppressed"&&a.jsx(Ui,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{bt(!1),ne(null),Ie(!1)}}),Q&&p==="standard"&&a.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg",style:{background:"var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))"},children:a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-md",children:[a.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",children:Q.isDraw?"👑👑":"👑"}),a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:Q.isDraw?`REMÍZA — ${Q.winnerArr.length} VÍŤAZI`:"VÍŤAZ"}),a.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",children:Q.isDraw?"Víťazi":"Víťaz"}),a.jsx("div",{className:"ks-body ks-cream text-base mb-1 leading-snug",children:Q.winnerArr.map(F=>`${S[F]} (${(Me[F]||0).toLocaleString("sk-SK")})`).join(", ")})]})}),Q&&p==="simplified"&&a.jsx(Ui,{kind:Q.isDraw?"draw":"victory",title:Q.isDraw?`Víťazi (${Q.winnerArr.length})`:"Víťaz",subtitle:Q.winnerArr.map(F=>`${S[F]} (${(Me[F]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),Q&&p==="suppressed"&&a.jsx(Ui,{kind:Q.isDraw?"draw":"victory",title:Q.isDraw?`Víťazi (${Q.winnerArr.length})`:"Víťaz",subtitle:Q.winnerArr.map(F=>`${S[F]} (${(Me[F]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),!Kt&&ts&&a.jsx(QE,{playerName:S[R],target:A,displayMode:p,onConfirm:()=>{me&&kt!==null&&bt(!0),n.pendingDecision?is(n.pendingDecision.id,"confirm"):We("dash",{confirmWin:!0,confirmedRound:V,confirmedPlayer:R})},onReject:()=>{Ie(!1),ne(null),n.pendingDecision?is(n.pendingDecision.id,"reject"):We("dash")}}),v&&a.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-[9999] bg-black/85 text-green-400 font-mono text-[10px] px-3 py-2 space-y-0.5 pointer-events-none",children:[a.jsxs("div",{children:["🐛 DEBUG · currentPlayer: ",R," (",S[R],") · round: ",V]}),a.jsxs("div",{children:["minWO: ",P,T!=null?" (override)":""," · winner: ",JSON.stringify(n.winner)," · pendingDecision: ",n.pendingDecision?n.pendingDecision.type:"null"]}),a.jsxs("div",{children:["confirmQueue: [",(n.confirmationQueue||[]).join(", "),"] · pending: [",j.join(", "),"]"]})]})]})}function QE({playerName:n,target:e,displayMode:t,onConfirm:s,onReject:r}){return t==="standard"?a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:"var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))"},children:[a.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[a.jsx("div",{className:"absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)"}}),a.jsx("div",{className:"absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)",animationDelay:"1s"}})]}),a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, transparent, var(--ks-popup-accent, #d4b86a))"}}),a.jsx(ys,{size:16,className:"ks-gold"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, var(--ks-popup-accent, #d4b86a), transparent)"}})]}),a.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",style:{filter:"drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.6)))"},children:"😤"}),a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:["🏁 DOSIAHOL ",e.toLocaleString("sk-SK")," — POTVRD VÝHRU"]}),a.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",style:{textShadow:"0 4px 24px var(--ks-glow-orb, rgba(212,184,106,0.4)), 0 0 40px var(--ks-glow-orb, rgba(212,184,106,0.4))"},children:n}),a.jsxs("div",{className:"ks-body ks-cream text-base mb-5 leading-snug",children:["Hráč ",a.jsx("em",{className:"ks-gold",children:n})," dosiahol cieľ!",a.jsx("br",{}),"Skupina potvrdzuje výhru — bola hra čistá?"]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("button",{onClick:s,className:"ks-press py-4 px-3 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125",children:[a.jsx(ys,{size:20,className:"ks-gold mx-auto mb-1"}),a.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"}),a.jsx("div",{className:"ks-muted text-[10px] ks-mono mt-0.5",children:"VÝHRA POTVRDENÁ"})]}),a.jsxs("button",{onClick:r,className:"ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125",children:[a.jsx(Hn,{size:20,className:"ks-text-accent mx-auto mb-1"}),a.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"Nepotvrdil"}),a.jsx("div",{className:"ks-text-accent/60 text-[10px] ks-mono mt-0.5",children:"VÝHRA NEPOTVRDENÁ"})]})]})]})]}):a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4",style:{background:"var(--ks-modal-dark-overlay, rgba(10,8,6,0.92))"},children:a.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:"var(--ks-popup-accent, #d4b86a)"},children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx(ys,{size:48,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.5)))"}})}),a.jsx("div",{className:"ks-mono ks-gold text-xs tracking-widest mb-2",children:"POTVRD VÝHRU"}),a.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:n}),a.jsxs("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug mb-5",children:["Hráč ",a.jsx("em",{className:"ks-gold",children:n})," dosiahol ",a.jsx("strong",{children:e.toLocaleString("sk-SK")}),".",a.jsx("br",{}),"Potvrďte, že v overovom hode nič nepadlo."]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx("button",{onClick:s,className:"ks-press py-3 px-2 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125",children:a.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"})}),a.jsx("button",{onClick:r,className:"ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125",children:a.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"✗ Nepotvrdil"})})]})]})})}function qd({children:n,onClose:e,title:t}){return a.jsx("div",{className:"fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4",style:{background:"rgba(0,0,0,0.7)"},onClick:e,children:a.jsxs("div",{className:"ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade",onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b ks-border-sub",children:[a.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:t}),a.jsx("button",{"aria-label":"Zatvoriť",onClick:e,className:"ks-press ks-cream p-1",children:a.jsx(Hn,{size:22})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto p-4",style:{WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:n})]})})}function XE({players:n,totals:e,target:t}){const s=n.map((r,i)=>({name:r,total:e[i],i})).sort((r,i)=>i.total-r.total);return a.jsx("div",{className:"space-y-2",children:s.map((r,i)=>{const c=t?Math.min(100,Math.max(0,r.total/t*100)):0;return a.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm border ks-border-sub",children:[a.jsx("div",{className:`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${i===0?"ks-gold-bg":"border ks-border-sub ks-gold"}`,children:i+1}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:r.name}),t&&a.jsx("div",{className:"h-1 bg-stone-900 rounded-full overflow-hidden mt-1",children:a.jsx("div",{className:"h-full ks-gold-bg",style:{width:`${c}%`}})})]}),a.jsx("div",{className:`ks-display text-2xl font-bold ${r.total<0?"ks-text-accent":"ks-gold"}`,children:r.total.toLocaleString("sk-SK")})]},r.i)})})}function ZE({rules:n,onBack:e}){var c,l,d;const t=Number((c=n.find(h=>h.id==="r14"))==null?void 0:c.points)||300,s=Number((l=n.find(h=>h.id==="r15"))==null?void 0:l.points)||1e4,r=Number((d=n.find(h=>h.id==="r16"))==null?void 0:d.points)||-1e3,i=Nr.flatMap(h=>h.ruleIds).map(h=>n.find(m=>m.id===h)).filter(Boolean);return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(Bn,{title:"Pravidlá hry",onBack:e}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsxs("div",{className:"ks-card rounded-sm p-5",children:[a.jsxs("p",{className:"ks-body ks-cream leading-relaxed",children:["Cieľom hry ",a.jsx("em",{className:"ks-gold",children:"Kocky"})," je byť prvým hráčom, ktorý dosiahne cieľové skóre —",a.jsxs("strong",{className:"ks-gold",children:[" ",s.toLocaleString("sk-SK")]})," v klasickej hre alebo",a.jsx("strong",{className:"ks-gold",children:" 5 000"})," v skrátenej. Hráči sa striedajú v hodoch šesťkociek."]}),a.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Každý zápis musí byť aspoň ",a.jsxs("strong",{className:"ks-gold",children:[t," bodov"]})," (minimálny odpis) — alebo daj ",a.jsx("em",{children:"čiarku"}),". Hru sa dá začať aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka, z aktuálneho skóre sa odpočíta ",a.jsxs("strong",{className:"ks-text-accent",children:["−",Math.abs(r).toLocaleString("sk-SK")," bodov"]}),"."]}),a.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Ak hod prekročí cieľ, body sa nezapočítajú a podľa nastavenia sa zapíše spravidla ",a.jsx("em",{children:"čiarka"}),". V závere hry treba dohrať na ",a.jsx("em",{className:"ks-gold",children:"presný cieľ"}),"; ak sa zapne potvrdenie víťazstva, po presnom zásahu nasleduje ešte overovací ťah, v ktorom musí padnúť ",a.jsx("em",{children:"niečohodnenie"}),"."]}),a.jsxs("p",{className:"ks-muted ks-body text-xs italic mt-3",children:["Hodnoty cieľa, minimálneho odpisu a penalizácie sa dajú upraviť v ",a.jsx("em",{children:"Nastavenia → Úprava pravidiel"}),"."]})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),a.jsx(lp,{rules:i})]})]})}function lp({rules:n,compact:e=!1}){return a.jsx("div",{className:"space-y-2",children:n.map(t=>a.jsx("div",{className:`ks-card rounded-sm ${e?"p-3":"p-4"} flex items-start gap-3`,children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-baseline justify-between gap-2 mb-1",children:[a.jsx("h4",{className:"ks-display ks-cream text-lg font-semibold",children:t.name}),a.jsx("div",{className:`ks-display text-xl font-bold whitespace-nowrap ${Number(t.points)<0?"ks-text-accent":"ks-gold"}`,children:t.type==="select"?a.jsx("span",{className:"text-sm italic",children:t.selected}):`${Number(t.points).toLocaleString("sk-SK")} b.`})]}),a.jsx("p",{className:"ks-muted text-sm leading-snug mb-2",children:t.description}),a.jsx(ap,{dice:t.dice,size:e?20:24})]})},t.id))})}function eI({rules:n,onSave:e,onBack:t,onReset:s,selectedSkin:r}){const[i,c]=D.useState(n),[l,d]=D.useState(null),[h,m]=D.useState(null);function p(R,V){c(j=>j.map(H=>H.id===R?{...H,...V}:H))}function v(R){window.confirm("Vymazať toto pravidlo?")&&c(V=>V.filter(j=>j.id!==R))}function T(){const R="r"+Date.now(),V={id:R,name:"Nové pravidlo",description:"Popis pravidla",points:100,type:"numeric",dice:[]};c(j=>[...j,V]),m(R)}function A(){e(i),t()}function P(R){const V=Nr.find(j=>j.id===R);return V?V.ruleIds.map(j=>i.find(H=>H.id===j)).filter(Boolean):[]}const S=D.useMemo(()=>Hd.map(R=>i.find(V=>V.id===R)).filter(Boolean),[i]),$=D.useMemo(()=>{const R=new Set([...Nr.flatMap(V=>V.ruleIds),...Hd]);return i.filter(V=>!R.has(V.id))},[i]);if(l==="cat-settings")return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(Bn,{title:"Hodnoty hry",onBack:()=>d(null)}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:"Hodnoty cieľa, prvého zápisu, penalizácie za ničnehodenie, správania pri prekročení cieľa a potvrdenia výhry. Tieto sa premietnu aj do popisu v Pravidlách hry."}),S.map(R=>a.jsx(tI,{rule:R,onUpdate:V=>p(R.id,V)},R.id))]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:()=>d(null),variant:"outline",icon:vs,children:"Späť"}),a.jsx(lt,{onClick:A,icon:Fi,children:"Uložiť všetko"})]})})]});if(l){const R=l==="cat-custom"?{title:"Vlastné pravidlá",subtitle:"Tebou pridané pravidlá"}:Nr.find(j=>j.id===l),V=l==="cat-custom"?$:P(l);return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(Bn,{title:R.title,onBack:()=>{d(null),m(null)}}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:[R.subtitle,". Klepni na pravidlo pre úpravu hodnôt."]}),V.length===0&&a.jsx("div",{className:"ks-card rounded-sm p-6 text-center ks-muted italic ks-body",children:"Žiadne pravidlá v tejto kategórii."}),V.map(j=>a.jsx(nI,{rule:j,isEditing:h===j.id,onEdit:()=>m(h===j.id?null:j.id),onUpdate:H=>p(j.id,H),onRemove:()=>v(j.id)},j.id)),l==="cat-custom"&&a.jsxs("button",{onClick:T,className:"ks-press ks-card w-full p-3 rounded-sm flex items-center justify-center gap-2 border-dashed",children:[a.jsx(nu,{size:18,className:"ks-gold"}),a.jsx("span",{className:"ks-display ks-gold",children:"Pridať vlastné pravidlo"})]})]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:()=>{d(null),m(null)},variant:"outline",icon:vs,children:"Späť"}),a.jsx(lt,{onClick:A,icon:Fi,children:"Uložiť všetko"})]})})]})}return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(Bn,{title:"Úprava pravidiel",onBack:t}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-2",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),Nr.map(R=>{const V=P(R.id);return a.jsxs("button",{onClick:()=>d(R.id),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold",children:V.length}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:R.title}),a.jsx("div",{className:"ks-muted text-sm",children:R.subtitle})]}),a.jsx(Tt,{className:"ks-muted",size:20})]},R.id)}),a.jsxs("button",{onClick:()=>d("cat-custom"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-dashed",children:[a.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold flex items-center justify-center",children:a.jsx(nu,{size:18})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Vlastné pravidlá"}),a.jsxs("div",{className:"ks-muted text-sm",children:[$.length," pridaných pravidiel"]})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"NASTAVENIA HRY"}),a.jsxs("button",{onClick:()=>d("cat-settings"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4",style:{borderLeftColor:"#d4b86a"},children:[a.jsx("div",{className:"w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center",children:a.jsx(hc,{size:18})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Hodnoty hry"}),a.jsx("div",{className:"ks-muted text-sm",children:"Cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),a.jsx(Tt,{className:"ks-muted",size:20})]})]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-3 gap-2",children:[a.jsx(lt,{onClick:s,variant:"danger",icon:Kd,children:"Reset"}),a.jsx(lt,{onClick:t,variant:"outline",icon:Hn,children:"Zrušiť"}),a.jsx(lt,{onClick:A,icon:Fi,children:"Uložiť"})]})})]})}function tI({rule:n,onUpdate:e}){const t=n.type==="numeric",s=Number(n.points)<0;return a.jsxs("div",{className:"ks-card rounded-sm p-4",children:[a.jsx("div",{className:"flex items-baseline justify-between gap-3 mb-2",children:a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:n.name})}),a.jsx("p",{className:"ks-muted text-sm leading-snug mb-3",children:n.description}),t?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"number",value:n.points,onChange:r=>e({points:parseInt(r.target.value,10)||0}),className:`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${s?"ks-text-accent":"ks-gold"}`}),a.jsx("div",{className:"ks-mono ks-muted text-xs",children:"BODOV"})]}):a.jsx("select",{value:n.selected,onChange:r=>e({selected:r.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700",children:(n.options||[]).map(r=>a.jsx("option",{value:r,children:r},r))})]})}function nI({rule:n,isEditing:e,onEdit:t,onUpdate:s,onRemove:r}){var c;const i=Number(n.points)<0;return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-3 p-3",onClick:t,children:[a.jsxs("div",{className:"flex-1 cursor-pointer",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:n.name}),a.jsx("div",{className:`text-xs italic ${i?"ks-text-accent":"ks-muted"}`,children:n.type==="select"?n.selected:`${n.points} bodov`})]}),a.jsx(ap,{dice:(c=n.dice)==null?void 0:c.slice(0,6),size:18}),a.jsx("button",{"aria-label":"Upraviť",onClick:l=>{l.stopPropagation(),t()},className:"ks-press ks-gold p-1",children:a.jsx($p,{size:16})})]}),e&&a.jsxs("div",{className:"border-t ks-border-sub p-3 space-y-3 ks-fade",children:[a.jsx(hs,{label:"Názov",children:a.jsx("input",{value:n.name,onChange:l=>s({name:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})}),a.jsx(hs,{label:"Popis",children:a.jsx("textarea",{value:n.description,onChange:l=>s({description:l.target.value}),rows:2,className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none"})}),a.jsx(hs,{label:"Typ pravidla",children:a.jsxs("select",{value:n.type,onChange:l=>{var h;const d=l.target.value;s(d==="select"?{type:"select",options:n.options||["Možnosť 1","Možnosť 2"],selected:n.selected||((h=n.options)==null?void 0:h[0])||"Možnosť 1"}:{type:"numeric"})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:[a.jsx("option",{value:"numeric",children:"Číselné (pevný počet bodov)"}),a.jsx("option",{value:"select",children:"Výber zo zoznamu"})]})}),n.type==="numeric"?a.jsx(hs,{label:"Body (môže byť aj záporné)",children:a.jsx("input",{type:"number",value:n.points,onChange:l=>s({points:parseInt(l.target.value,10)||0}),className:`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${i?"ks-text-accent":"ks-gold"}`})}):a.jsxs(a.Fragment,{children:[a.jsx(hs,{label:"Aktívna možnosť",children:a.jsx("select",{value:n.selected,onChange:l=>s({selected:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:(n.options||[]).map(l=>a.jsx("option",{value:l,children:l},l))})}),a.jsx(hs,{label:"Možnosti (oddelené čiarkou)",children:a.jsx("input",{value:(n.options||[]).join(", "),onChange:l=>{const d=l.target.value.split(",").map(m=>m.trim()).filter(Boolean),h=d.includes(n.selected)?n.selected:d[0]||"";s({options:d,selected:h})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})})]}),a.jsx(hs,{label:"Kocky (piktogramy)",children:a.jsx(sI,{dice:n.dice||[],onChange:l=>s({dice:l})})}),a.jsxs("button",{onClick:r,className:"ks-press ks-text-accent ks-mono text-xs flex items-center gap-1",children:[a.jsx(xo,{size:14})," Vymazať pravidlo"]})]})]})}function hs({label:n,children:e}){return a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:n.toUpperCase()}),e]})}function sI({dice:n,onChange:e}){return a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40",children:[n.length===0&&a.jsx("span",{className:"ks-muted text-sm italic",children:"Žiadne kocky"}),n.map((t,s)=>a.jsx("button",{onClick:()=>e(n.filter((r,i)=>i!==s)),className:"ks-press ks-gold relative",children:a.jsx(dc,{value:t,size:26})},s))]}),a.jsxs("div",{className:"flex gap-1.5",children:[[1,2,3,4,5,6].map(t=>a.jsx("button",{onClick:()=>n.length<6&&e([...n,t]),className:"ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm",children:a.jsx(dc,{value:t,size:22})},t)),n.length>0&&a.jsx("button",{onClick:()=>e([]),className:"ks-press ml-auto ks-text-accent ks-mono text-xs px-2",children:"VYMAZAŤ"})]})]})}function rI({tournaments:n,onBack:e,onView:t,onDelete:s,readOnly:r}){return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(Bn,{title:r?"Archív turnajov":"Editácia archívu",onBack:e}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto",children:[!r&&a.jsxs("div",{className:"ks-card rounded-sm p-3 mb-3 ks-body text-xs ks-muted italic flex items-start gap-2",children:[a.jsx(gc,{size:14,className:"ks-gold shrink-0 mt-0.5"}),a.jsx("div",{children:"Klepni na turnaj pre úpravu skóre, víťaza alebo kôl. Mazanie cez tlačidlo dolu."})]}),n.length===0?a.jsxs("div",{className:"ks-card rounded-sm p-8 text-center",children:[a.jsx(Gd,{className:"ks-gold mx-auto opacity-40",size:48}),a.jsx("p",{className:"ks-muted ks-body mt-3 italic",children:"Zatiaľ žiadne turnaje v archíve."})]}):a.jsx("div",{className:"space-y-2",children:n.map(i=>a.jsx(iI,{t:i,onView:()=>t(i),onDelete:()=>s(i.id),readOnly:r},i.id))})]})]})}function iI({t:n,onView:e,onDelete:t,readOnly:s}){const r=n.players.map((h,m)=>(n.rounds||[]).reduce((p,v)=>p+(typeof v[m]=="number"?v[m]:0),0));if(!n||!Array.isArray(n.players)||!Array.isArray(n.rounds))return a.jsx(Ys,{title:"Poškodený turnaj v archíve"});const i=n.winner===null||n.winner===void 0?[]:Array.isArray(n.winner)?n.winner:[n.winner],c=i.length===0?null:i.length===1?n.players[i[0]]:`Remíza: ${i.map(h=>n.players[h]).join(", ")}`,l=n.targetScore||1e4,d=op(n.date,n.finishedAt);return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("button",{onClick:e,className:"ks-press w-full p-4 text-left flex items-center gap-3",children:[a.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center
          ${n.status==="finished"?"ks-gold-bg":"border ks-border-sub ks-muted"}`,children:n.status==="finished"?a.jsx(Fp,{size:22}):a.jsx(Hn,{size:22})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:c?a.jsxs(a.Fragment,{children:[i.length>1?"":"Víťaz: ",a.jsx("span",{className:"ks-gold",children:c})]}):a.jsx("span",{className:"italic ks-muted",children:"Nedokončený turnaj"})}),a.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[a.jsx(zp,{size:11,className:"ks-muted"}),a.jsxs("div",{className:"ks-mono ks-muted text-xs truncate",children:[ei(n.date),d?` · ${d}`:""]})]}),a.jsxs("div",{className:"ks-muted text-xs truncate mt-0.5",children:[n.players.length," hráčov · do ",l.toLocaleString("sk-SK")," · ",n.players.join(" · ")]})]}),a.jsx(Tt,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"border-t border-amber-900/20 px-4 py-2 flex items-center justify-between",children:[a.jsxs("div",{className:"ks-mono ks-gold text-sm",children:[Math.max(...r).toLocaleString("sk-SK")," bodov"]}),!s&&a.jsxs("button",{onClick:t,className:"ks-press ks-text-accent text-xs ks-mono flex items-center gap-1",children:[a.jsx(xo,{size:12})," VYMAZAŤ"]})]})]})}function oI({tournament:n,onBack:e,onUpdate:t,readOnly:s,scoreDisplayMode:r,onToggleScoreMode:i,selectedSkin:c}){if(!n||!Array.isArray(n.players)||!Array.isArray(n.rounds))return a.jsx(Ys,{title:"Poškodený turnaj v archíve"});const[l,d]=D.useState(!1),[h,m]=D.useState(null);function p(){m({players:[...n.players],rounds:(n.rounds||[]).map(_=>[..._]),winner:n.winner,targetScore:n.targetScore||1e4}),d(!0)}function v(){m(null),d(!1)}function T(){h.players.map((k,x)=>h.rounds.reduce((E,b)=>E+(typeof b[x]=="number"?b[x]:0),0));let _=h.winner;t({players:h.players,rounds:h.rounds,winner:_}),d(!1),m(null)}function A(_,k,x){m(E=>{const b=E.rounds.map(oe=>[...oe]);for(;b.length<=_;)b.push(new Array(E.players.length).fill(null));return b[_][k]=x,{...E,rounds:b}})}function P(){m(_=>({..._,rounds:[..._.rounds,new Array(_.players.length).fill(null)]}))}function S(_){window.confirm(`Vymazať kolo ${_+1}?`)&&m(k=>({...k,rounds:k.rounds.filter((x,E)=>E!==_)}))}function $(_){m(k=>{const x=k.winner,E=x==null?[]:Array.isArray(x)?[...x]:[x],b=E.indexOf(_);b>=0?E.splice(b,1):E.push(_);const oe=E.length===0?null:E.length===1?E[0]:E.sort((ve,it)=>ve-it);return{...k,winner:oe}})}const R=l&&h?h:n,V=bl(R.rounds,R.players.length),j=R.targetScore||1e4,H=op(n.date,n.finishedAt),q=D.useMemo(()=>n.status!=="finished"?null:bo({...R,_confirmedDetailed:n._confirmedDetailed,rules:n.rules}),[R,n]),w=R.winner===null||R.winner===void 0?[]:Array.isArray(R.winner)?[...R.winner]:[R.winner],y=q&&(()=>{if(q.winners.length!==w.length)return!0;const _=[...q.winners].sort(),k=[...w].sort();return!_.every((x,E)=>x===k[E])})();return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(Bn,{title:"Detail turnaja",onBack:l?v:e,right:a.jsxs("div",{className:"flex items-center gap-2",children:[!l&&a.jsx("button",{onClick:i,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:r==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:r==="delta"?a.jsx(Zd,{size:16}):a.jsx(pc,{size:16})}),l||s?null:a.jsxs("button",{onClick:p,className:"ks-press ks-gold flex items-center gap-1 text-xs ks-mono",children:[a.jsx(gc,{size:14})," UPRAVIŤ"]})]})}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-4",children:[a.jsxs("div",{className:"ks-card rounded-sm p-5 text-center",children:[n.status==="finished"&&R.winner!==null&&R.winner!==void 0?(()=>{const _=Array.isArray(R.winner)?R.winner:[R.winner],k=_.length>1;return a.jsxs(a.Fragment,{children:[a.jsx(ys,{className:"ks-gold mx-auto",size:40}),a.jsx("div",{className:"ks-mono ks-gold text-xs mt-2",children:k?`REMÍZA · ${_.length} VÍŤAZI`:"VÍŤAZ"}),a.jsx("div",{className:"space-y-1.5 mt-1",children:_.map(x=>a.jsxs("div",{children:[a.jsx("div",{className:"ks-display ks-cream text-2xl font-bold",children:R.players[x]}),a.jsx("div",{className:"ks-display ks-gold text-xl",children:V[x].toLocaleString("sk-SK")})]},x))})]})})():a.jsx("div",{className:"ks-muted italic",children:n.status==="aborted"?"Zrušený turnaj":"Nedokončený turnaj"}),a.jsxs("div",{className:"mt-4 pt-4 border-t ks-border-sub grid grid-cols-2 gap-3 text-left",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Qi,{size:10})," ZAČIATOK"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:ei(n.date)})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(zs,{size:10})," KONIEC"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:n.finishedAt?ei(n.finishedAt):"—"})]}),H&&a.jsxs("div",{className:"col-span-2",children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Up,{size:10})," TRVANIE"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:H})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(fc,{size:10})," CIEĽ"]}),a.jsxs("div",{className:"ks-body ks-cream text-sm mt-0.5",children:[j.toLocaleString("sk-SK")," b."]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Xd,{size:10})," HRÁČI"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:R.players.length})]})]})]}),y&&q&&a.jsx("div",{className:"ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30",children:a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(ko,{size:20,className:"ks-text-accent shrink-0 mt-0.5"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-mono ks-text-accent text-xs tracking-widest mb-1",children:"⚠ NEZHODA V URČENÍ VÍŤAZA"}),a.jsxs("div",{className:"ks-body ks-cream text-sm leading-snug",children:["Hlavička uvádza:"," ",a.jsx("strong",{className:"ks-gold",children:w.length===0?"—":w.map(_=>R.players[_]).join(", ")}),a.jsx("br",{}),"Súčty kôl však dávajú:"," ",a.jsx("strong",{className:"ks-gold",children:q.winners.length===0?"— (nikto nedosiahol cieľ)":q.winners.map(_=>`${R.players[_]} (${(V[_]||0).toLocaleString("sk-SK")})`).join(", ")})]}),q.errors.length>0&&a.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2",children:q.errors.join(" · ")}),!s&&a.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2 italic",children:"Použi tlačidlo UPRAVIŤ na opravu zoznamu víťazov."})]})]})}),!l&&a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-2",children:"FINÁLNA TABUĽKA"}),a.jsx(XE,{players:R.players,totals:V,target:j})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:l?"ÚPRAVA TABUĽKY":"HISTÓRIA KÔL"}),l&&a.jsxs("button",{onClick:P,className:"ks-press ks-gold ks-mono text-xs flex items-center gap-1",children:[a.jsx(Pa,{size:12})," PRIDAŤ KOLO"]})]}),l?a.jsx(aI,{players:h.players,rounds:h.rounds,totals:V,target:j,winner:h.winner,onChangeCell:A,onRemoveRound:S,onSetWinner:$}):a.jsx(Da,{tournament:{...R,currentRound:-1},totals:V,highlightPlayer:R.winner??-1,target:j,displayMode:r,onToggleMode:i,hideModeToolbar:!0})]})]}),l&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:v,variant:"outline",icon:Hn,children:"Zrušiť"}),a.jsx(lt,{onClick:T,icon:Fi,children:"Uložiť zmeny"})]})})]})}function aI({players:n,rounds:e,totals:t,target:s,winner:r,onChangeCell:i,onRemoveRound:c,onSetWinner:l}){function d(h){const m=(h||"").trim();if(m===""||m==="·")return null;if(m==="—"||m==="-"||m.toLowerCase()==="dash")return"dash";const p=parseInt(m,10);return Number.isFinite(p)?p:null}return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full border-collapse",style:{tableLayout:"fixed",minWidth:`${36+Math.max(n.length,1)*Math.max(80,300/Math.max(n.length,1))}px`},children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:36}}),n.map((h,m)=>a.jsx("col",{style:{width:`${100/(n.length+.25)}%`,minWidth:`${Math.max(80,300/Math.max(n.length,1))}px`}},m)),a.jsx("col",{style:{width:36}})]}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b ks-border-sub",children:[a.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-2 px-2 text-center sticky left-0",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),n.map((h,m)=>a.jsx("th",{className:"ks-display ks-cream py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis",children:h},m)),a.jsx("th",{style:{width:36}})]})}),a.jsx("tbody",{children:e.map((h,m)=>a.jsxs("tr",{className:"border-b border-amber-900/15",children:[a.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:m+1}),n.map((p,v)=>{const T=h[v],A=T==="dash"?"—":typeof T=="number"?String(T):"";return a.jsx("td",{className:"p-0.5",children:a.jsx("input",{value:A,onChange:P=>i(m,v,d(P.target.value)),placeholder:"·",className:`w-full bg-stone-950/40 border ks-border-sub rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${T==="dash"?"ks-muted":typeof T=="number"&&T<0?"ks-text-accent":"ks-cream"}`})},v)}),a.jsx("td",{className:"text-center",children:a.jsx("button",{onClick:()=>c(m),className:"ks-press ks-text-accent hover:ks-text-accent p-1",children:a.jsx(xo,{size:12})})})]},m))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"border-t-2 ks-border-accent",children:[a.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"∑"}),t.map((h,m)=>{const p=h>=s,T=(r==null?new Set:Array.isArray(r)?new Set(r):new Set([r])).has(m);return a.jsx("td",{className:"text-center py-2 px-2",children:a.jsxs("button",{onClick:()=>l(m),className:`ks-press w-full ks-display text-base font-bold rounded-sm py-1 px-2 ${T?"ks-gold-bg":p?"ks-gold border border-amber-700/40":h<0?"ks-text-accent":"ks-cream"}`,children:[T&&a.jsx(ys,{size:12,className:"inline mr-1"}),h.toLocaleString("sk-SK")]})},m)}),a.jsx("td",{})]})})]})}),a.jsx("div",{className:"p-2 border-t border-amber-900/20 ks-muted text-xs italic text-center ks-body",children:'Klepni na bunku pre úpravu · Klepni na súčet pre nastavenie víťaza · Číslo, „—" alebo prázdne pre vymazanie'})]})}class cI extends ms.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("[ErrorBoundary]",e,t.componentStack)}render(){var e;return this.state.error?a.jsxs("div",{style:{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",background:"#0e0c0a",color:"#f3ead4",fontFamily:"sans-serif",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🎲"}),a.jsx("div",{style:{fontSize:22,fontWeight:700,marginBottom:8,color:"#d4b86a"},children:"Nastala neočakávaná chyba"}),a.jsx("div",{style:{fontSize:13,color:"#a89679",marginBottom:24,maxWidth:320},children:((e=this.state.error)==null?void 0:e.message)||"Neznáma chyba"}),a.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 28px",borderRadius:4,border:"none",cursor:"pointer",background:"#d4b86a",color:"#1a1410",fontWeight:700,fontSize:14},children:"Znova načítať"})]}):this.props.children}}typeof window<"u"&&!window.storage&&(window.storage={async get(n){try{const e=localStorage.getItem(n);return e===null?null:{key:n,value:e,shared:!1}}catch{return null}},async set(n,e){try{return localStorage.setItem(n,e),{key:n,value:e,shared:!1}}catch{return null}},async delete(n){try{return localStorage.removeItem(n),{key:n,deleted:!0,shared:!1}}catch{return null}},async list(n=""){const e=[];for(let t=0;t<localStorage.length;t++){const s=localStorage.key(t);s&&s.startsWith(n)&&e.push(s)}return{keys:e,prefix:n,shared:!1}}});const lI=typeof window<"u"&&(window.location.protocol==="https:"||window.location.protocol==="http:");"serviceWorker"in navigator&&lI&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("SW registered:",e.scope)}).catch(e=>{console.warn("SW registration failed:",e)})});document.addEventListener("contextmenu",n=>{!(n.target instanceof HTMLInputElement)&&!(n.target instanceof HTMLTextAreaElement)&&n.preventDefault()},{capture:!0});eg.createRoot(document.getElementById("root")).render(a.jsx(ms.StrictMode,{children:a.jsx(cI,{children:a.jsx(qE,{})})}));export{lu as E,th as W,yl as a,hg as b,dl as d,uE as s,yE as u};
