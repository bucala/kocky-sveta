const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-BYZ9276P.js","./vendor-lucide-Clm7vU7p.js","./vendor-recharts-DXAvTpvT.js","./web-YBAq-qO3.js"])))=>i.map(i=>d[i]);
import{r as Pf,g as Cf,R as on,a as z,b as Ru,P as ri,C as gt,A as Pu,S as Io,d as aa,e as Ii,W as Ai,f as Cu,h as qs,T as ca,i as mn,U as Fc,I as Ao,j as jf,L as Vf,M as Df,B as Of,k as la,F as Lf,D as Mf,l as Uf,m as ua,n as da,o as Si,p as ju,X as ps,q as So,s as zc,t as $c,u as Bc,v as Bs,w as Ff,x as zf,y as Wr,z as Kc,E as $f,G as Bf,H as Kf,J as qf,K as Hf,N as Wf,O as Gf,Q as Qf,V as Jf}from"./vendor-lucide-Clm7vU7p.js";import{r as Yf,R as Xf,L as Zf,C as em,X as tm,Y as sm,T as nm,a as qc,b as rm}from"./vendor-recharts-DXAvTpvT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var ho={exports:{}},zn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function im(){if(Hc)return zn;Hc=1;var s=Pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(l,d,h){var m,p={},b=null,I=null;h!==void 0&&(b=""+h),d.key!==void 0&&(b=""+d.key),d.ref!==void 0&&(I=d.ref);for(m in d)n.call(d,m)&&!i.hasOwnProperty(m)&&(p[m]=d[m]);if(l&&l.defaultProps)for(m in d=l.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:l,key:b,ref:I,props:p,_owner:r.current}}return zn.Fragment=t,zn.jsx=a,zn.jsxs=a,zn}var Wc;function om(){return Wc||(Wc=1,ho.exports=im()),ho.exports}var c=om(),Or={},Gc;function am(){if(Gc)return Or;Gc=1;var s=Yf();return Or.createRoot=s.createRoot,Or.hydrateRoot=s.hydrateRoot,Or}var cm=am();const lm=Cf(cm),um="modulepreload",dm=function(s,e){return new URL(s,e).href},Qc={},ii=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let a=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));r=a(t.map(m=>{if(m=dm(m,n),m in Qc)return;Qc[m]=!0;const p=m.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(!!n)for(let P=l.length-1;P>=0;P--){const T=l[P];if(T.href===m&&(!p||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${b}`))return;const S=document.createElement("link");if(S.rel=p?"stylesheet":um,p||(S.as="script"),S.crossOrigin="",S.href=m,h&&S.setAttribute("nonce",h),document.head.appendChild(S),p)return new Promise((P,T)=>{S.addEventListener("load",P),S.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const hm=s=>{const e=new Map;e.set("web",{name:"web"});const t=s.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},n=(i,a)=>{t.platforms.set(i,a)},r=i=>{t.platforms.has(i)&&(t.currentPlatform=t.platforms.get(i))};return t.addPlatform=n,t.setPlatform=r,t},fm=s=>s.CapacitorPlatforms=hm(s),Vu=fm(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});Vu.addPlatform;Vu.setPlatform;var pn;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(pn||(pn={}));class fo extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const mm=s=>{var e,t;return s!=null&&s.androidBridge?"android":!((t=(e=s==null?void 0:s.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},pm=s=>{var e,t,n,r,i;const a=s.CapacitorCustomPlatform||null,l=s.Capacitor||{},d=l.Plugins=l.Plugins||{},h=s.CapacitorPlatforms,m=()=>a!==null?a.name:mm(s),p=((e=h==null?void 0:h.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||m,b=()=>p()!=="web",I=((t=h==null?void 0:h.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||b,S=x=>{const y=U.get(x);return!!(y!=null&&y.platforms.has(p())||L(x))},P=((n=h==null?void 0:h.currentPlatform)===null||n===void 0?void 0:n.isPluginAvailable)||S,T=x=>{var y;return(y=l.PluginHeaders)===null||y===void 0?void 0:y.find(_=>_.name===x)},L=((r=h==null?void 0:h.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||T,N=x=>s.console.error(x),V=(x,y,_)=>Promise.reject(`${_} does not have an implementation of "${y}".`),U=new Map,H=(x,y={})=>{const _=U.get(x);if(_)return console.warn(`Capacitor plugin "${x}" already registered. Cannot register plugins twice.`),_.proxy;const w=p(),k=L(x);let E;const v=async()=>(!E&&w in y?E=typeof y[w]=="function"?E=await y[w]():E=y[w]:a!==null&&!E&&"web"in y&&(E=typeof y.web=="function"?E=await y.web():E=y.web),E),ye=(Z,le)=>{var Ee,de;if(k){const pe=k==null?void 0:k.methods.find(F=>le===F.name);if(pe)return pe.rtype==="promise"?F=>l.nativePromise(x,le.toString(),F):(F,re)=>l.nativeCallback(x,le.toString(),F,re);if(Z)return(Ee=Z[le])===null||Ee===void 0?void 0:Ee.bind(Z)}else{if(Z)return(de=Z[le])===null||de===void 0?void 0:de.bind(Z);throw new fo(`"${x}" plugin is not implemented on ${w}`,pn.Unimplemented)}},ne=Z=>{let le;const Ee=(...de)=>{const pe=v().then(F=>{const re=ye(F,Z);if(re){const ve=re(...de);return le=ve==null?void 0:ve.remove,ve}else throw new fo(`"${x}.${Z}()" is not implemented on ${w}`,pn.Unimplemented)});return Z==="addListener"&&(pe.remove=async()=>le()),pe};return Ee.toString=()=>`${Z.toString()}() { [capacitor code] }`,Object.defineProperty(Ee,"name",{value:Z,writable:!1,configurable:!1}),Ee},Ne=ne("addListener"),D=ne("removeListener"),B=(Z,le)=>{const Ee=Ne({eventName:Z},le),de=async()=>{const F=await Ee;D({eventName:Z,callbackId:F},le)},pe=new Promise(F=>Ee.then(()=>F({remove:de})));return pe.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await de()},pe},fe=new Proxy({},{get(Z,le){switch(le){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?B:Ne;case"removeListener":return D;default:return ne(le)}}});return d[x]=fe,U.set(x,{name:x,proxy:fe,platforms:new Set([...Object.keys(y),...k?[w]:[]])}),fe},Y=((i=h==null?void 0:h.currentPlatform)===null||i===void 0?void 0:i.registerPlugin)||H;return l.convertFileSrc||(l.convertFileSrc=x=>x),l.getPlatform=p,l.handleError=N,l.isNativePlatform=I,l.isPluginAvailable=P,l.pluginMethodNoop=V,l.registerPlugin=Y,l.Exception=fo,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},gm=s=>s.Capacitor=pm(s),er=gm(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ni=er.registerPlugin;er.Plugins;class Du{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i),n&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const r=this.listeners[e];if(!r){if(n){let i=this.retainedEventArguments[e];i||(i=[]),i.push(t),this.retainedEventArguments[e]=i}return}r.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new er.Exception(e,pn.Unimplemented)}unavailable(e="not available"){return new er.Exception(e,pn.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const Jc=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Yc=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ym extends Du{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[r,i]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=Yc(r).trim(),i=Yc(i).trim(),t[r]=i}),t}async setCookie(e){try{const t=Jc(e.key),n=Jc(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${r}; path=${i}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Ni("CapacitorCookies",{web:()=>new ym});const bm=async s=>new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const r=n.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},n.onerror=r=>t(r),n.readAsDataURL(s)}),_m=(s={})=>{const e=Object.keys(s);return Object.keys(s).map(r=>r.toLocaleLowerCase()).reduce((r,i,a)=>(r[i]=s[e[a]],r),{})},vm=(s,e=!0)=>s?Object.entries(s).reduce((n,r)=>{const[i,a]=r;let l,d;return Array.isArray(a)?(d="",a.forEach(h=>{l=e?encodeURIComponent(h):h,d+=`${i}=${l}&`}),d.slice(0,-1)):(l=e?encodeURIComponent(a):a,d=`${i}=${l}`),`${n}&${d}`},"").substr(1):null,km=(s,e={})=>{const t=Object.assign({method:s.method||"GET",headers:s.headers},e),r=_m(s.headers)["content-type"]||"";if(typeof s.data=="string")t.body=s.data;else if(r.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[a,l]of Object.entries(s.data||{}))i.set(a,l);t.body=i.toString()}else if(r.includes("multipart/form-data")||s.data instanceof FormData){const i=new FormData;if(s.data instanceof FormData)s.data.forEach((l,d)=>{i.append(d,l)});else for(const l of Object.keys(s.data))i.append(l,s.data[l]);t.body=i;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(r.includes("application/json")||typeof s.data=="object")&&(t.body=JSON.stringify(s.data));return t};class xm extends Du{async request(e){const t=km(e,e.webFetchExtra),n=vm(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?e:{};a.includes("application/json")&&(l="json");let d,h;switch(l){case"arraybuffer":case"blob":h=await i.blob(),d=await bm(h);break;case"json":d=await i.json();break;case"document":case"text":default:d=await i.text()}const m={};return i.headers.forEach((p,b)=>{m[b]=p}),{data:d,headers:m,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Ni("CapacitorHttp",{web:()=>new xm});var No;(function(s){s.Documents="DOCUMENTS",s.Data="DATA",s.Library="LIBRARY",s.Cache="CACHE",s.External="EXTERNAL",s.ExternalStorage="EXTERNAL_STORAGE"})(No||(No={}));var Xc;(function(s){s.UTF8="utf8",s.ASCII="ascii",s.UTF16="utf16"})(Xc||(Xc={}));const wm=Ni("Filesystem",{web:()=>ii(()=>import("./web-BYZ9276P.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(s=>new s.FilesystemWeb)}),Zc=Ni("Share",{web:()=>ii(()=>import("./web-YBAq-qO3.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(s=>new s.ShareWeb)});function Em({tournament:s,totals:e,highlightPlayer:t,pendingPreview:n=0,target:r,displayMode:i="delta",onToggleMode:a,hideModeToolbar:l=!1,hideModeToggle:d=!1,compactObserver:h=!1}){if(!s||!Array.isArray(s.players))return null;const{players:m,rounds:p}=s,b=z.useRef(null);z.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[p.length]);const I=Math.max(p.length,(s.currentRound??0)+1),S=z.useMemo(()=>{const P=Array.from({length:I},()=>new Array(m.length).fill(null)),T=new Array(m.length).fill(0),L=new Array(m.length).fill(!1);for(let N=0;N<p.length;N++)for(let V=0;V<m.length;V++){const U=p[N][V];typeof U=="number"?(T[V]+=U,L[V]=!0,P[N][V]=T[V]):U==="dash"?P[N][V]=T[V]:P[N][V]=null}return P},[p,I,m.length]);return c.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a&&!l&&c.jsxs("div",{className:`flex items-center justify-between border-b border-amber-900/30 bg-stone-950/60 ${h?"px-3 py-1":"px-3 py-1.5"}`,children:[c.jsx("div",{className:`ks-display ks-gold text-center flex-1 ${h?"text-xs":"text-sm"}`,children:"POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE"}),!d&&c.jsxs("button",{onClick:a,className:"ks-press ks-mono ks-gold flex items-center gap-1 rounded-sm hover:bg-amber-900/20 text-[10px] px-2 py-0.5",children:[c.jsx(Ru,{size:10}),i==="delta"?"Σ":"Δ"]})]}),c.jsx("div",{className:"overflow-x-auto ks-live-table-wrap",children:c.jsxs("table",{className:"border-collapse ks-live-table",children:[c.jsxs("colgroup",{children:[c.jsx("col",{style:{width:36}}),m.map((P,T)=>c.jsx("col",{style:{width:`${100/(m.length+.15)}%`,minWidth:`${Math.max(72,300/Math.max(m.length,1))}px`}},T))]}),c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-amber-900/40",children:[c.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-3 px-2 text-center sticky left-0 backdrop-blur",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),m.map((P,T)=>c.jsx("th",{className:`ks-display py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis ${T===t?"ks-gold":"ks-cream"}`,children:P},T))]})}),c.jsx("tbody",{ref:b,children:Array.from({length:I}).map((P,T)=>c.jsxs("tr",{className:"border-b border-amber-900/15 ks-live-row",children:[c.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:T+1}),m.map((L,N)=>{var x,y;const V=(x=p[T])==null?void 0:x[N],U=(y=S[T])==null?void 0:y[N],H=i==="cumulative"?U:V,Y=N===t&&T===s.currentRound;return c.jsxs("td",{className:`text-center py-1.5 px-1 ks-display text-base align-middle ${Y?"bg-amber-900/20":""}`,children:[V==="dash"&&i!=="cumulative"&&c.jsx("span",{className:"ks-muted",children:"—"}),typeof H=="number"&&c.jsx("span",{className:`font-medium ${H<0?"text-red-300":"ks-cream"}`,children:H.toLocaleString("sk-SK")}),H==null&&(Y&&n>0?c.jsxs("span",{className:"ks-gold italic opacity-70",children:["+",n]}):null)]},N)})]},T))}),c.jsx("tfoot",{children:c.jsxs("tr",{className:"border-t-2 border-amber-700/50",children:[c.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"Σ"}),e.map((P,T)=>{const L=r&&P>=r;return c.jsx("td",{className:`text-center py-2 px-2 ks-display text-lg font-bold ${P<0?"text-red-300":L||T===t?"ks-gold":"ks-cream"}`,children:P.toLocaleString("sk-SK")},T)})]})})]})})]})}const Ro=on.memo(Em);function Tm({children:s,onClick:e,disabled:t,className:n="",icon:r,variant:i="gold"}){const a="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return c.jsxs("button",{onClick:e,disabled:t,className:`${a} ${l[i]} ${n}`,children:[r&&c.jsx(r,{size:18,strokeWidth:2}),s]})}function Po(){return c.jsxs("div",{className:"flex items-center justify-center gap-3 my-3",children:[c.jsx("div",{className:"ks-divider flex-1"}),c.jsx("div",{className:"ks-gold text-xs",children:"✦"}),c.jsx("div",{className:"ks-divider flex-1"})]})}const el=s=>{let e;const t=new Set,n=(h,m)=>{const p=typeof h=="function"?h(e):h;if(!Object.is(p,e)){const b=e;e=m??(typeof p!="object"||p===null)?p:Object.assign({},e,p),t.forEach(I=>I(e,b))}},r=()=>e,l={setState:n,getState:r,getInitialState:()=>d,subscribe:h=>(t.add(h),()=>t.delete(h))},d=e=s(n,r,l);return l},Im=(s=>s?el(s):el),Am=s=>s;function Sm(s,e=Am){const t=on.useSyncExternalStore(s.subscribe,on.useCallback(()=>e(s.getState()),[s,e]),on.useCallback(()=>e(s.getInitialState()),[s,e]));return on.useDebugValue(t),t}const tl=s=>{const e=Im(s),t=n=>Sm(e,n);return Object.assign(t,e),t},Nm=(s=>s?tl(s):tl),ha=Nm(s=>({roomId:null,uid:null,roomState:null,status:"offline",setRoomId:e=>s({roomId:e}),setUid:e=>s({uid:e}),setRoomState:e=>s({roomState:e,status:"connected"}),setStatus:e=>s({status:e}),reset:()=>s({roomId:null,uid:null,roomState:null,status:"offline"})}));function Rm(){const s=ha(i=>i.status),e={connected:{Icon:Ai,color:"text-green-400",label:"Online"},error:{Icon:Ii,color:"text-red-400",label:"Chyba"}},{Icon:t,color:n,label:r}=e[s]||{Icon:Cu,color:"ks-muted",label:"Offline"};return c.jsxs("div",{className:"inline-flex items-center gap-1.5 border ks-border-sub rounded-sm px-2 py-1 mt-2",children:[c.jsx(t,{size:12,className:n}),c.jsx("span",{className:`ks-mono text-xs ${n}`,children:r})]})}function Pm({onNew:s,onArchive:e,onrules:t,onSettings:n,onResume:r,active:i,tournamentCount:a}){return c.jsxs("div",{className:"min-h-screen flex flex-col",children:[c.jsxs("div",{className:"px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade",children:[c.jsx("div",{className:"ks-gold text-xs ks-mono mb-2",children:"★ ZALOŽENÉ 2026 by Marcel ★"}),c.jsxs("h1",{className:"ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none",children:["Kocky",c.jsx("br",{}),c.jsx("span",{className:"italic font-medium",children:"sveta"})]}),c.jsx(Po,{}),c.jsx(Rm,{})]}),c.jsxs("div",{className:"flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1",children:[r&&c.jsxs("button",{onClick:r,className:"ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4",style:{borderLeftColor:"#d4b86a"},children:[c.jsx(ri,{className:"ks-gold",size:24}),c.jsxs("div",{className:"text-left flex-1",children:[c.jsx("div",{className:"ks-mono ks-gold text-sm",children:"POKRAČOVAŤ V TURNAJI"}),c.jsxs("div",{className:"ks-body ks-cream text-sm opacity-80",children:[i.players.length," hráčov · do ",(i.targetScore||1e4).toLocaleString("sk-SK")," · kolo ",i.currentRound+1]})]}),c.jsx(gt,{className:"ks-gold",size:20})]}),c.jsx(Lr,{icon:ri,title:"Nový turnaj",subtitle:i?"Najprv ukonči prebiehajúci turnaj":"Začať novú hru až pre šesť hráčov",onClick:s,primary:!0,disabled:!!i}),c.jsx(Lr,{icon:Pu,title:"Archív turnajov",subtitle:`${a||0} uložených turnajov`,onClick:e}),c.jsx(Lr,{icon:Io,title:"Pravidlá hry",subtitle:"Bodovanie a kombinácie kociek",onClick:t}),c.jsx(Lr,{icon:aa,title:"Nastavenia",subtitle:"Pravidlá, export, editácia archívu",onClick:n})]}),c.jsxs("div",{className:"text-center ks-muted text-xs pb-6 ks-mono",children:[c.jsx(Po,{}),"KOCKY · SVETA · KOCKY"]})]})}function Lr({icon:s,title:e,subtitle:t,onClick:n,primary:r,disabled:i}){return c.jsxs("button",{onClick:n,disabled:i,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${r?"border-amber-700/40":""} ${i?"opacity-40 cursor-not-allowed":""}`,children:[c.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center ${r?"ks-gold-bg":"border ks-border-sub"}`,children:c.jsx(s,{size:22,className:r?"":"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:e}),c.jsx("div",{className:"ks-muted text-sm",children:t})]}),c.jsx(gt,{className:"ks-muted",size:20})]})}function Cm({title:s,onBack:e,right:t}){return c.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?c.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[c.jsx(qs,{size:20}),c.jsx("span",{className:"ks-body",children:"Späť"})]}):c.jsx("div",{className:"w-16"}),c.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:s}),c.jsx("div",{className:"w-16 flex justify-end",children:t})]})}const jm=[{value:5e3,label:"Krátka hra",sub:"do 5 000 bodov"},{value:1e4,label:"Klasická hra",sub:"do 10 000 bodov"}];function Vm({onBack:s,onStart:e}){const[t,n]=z.useState(3),[r,i]=z.useState(1e4),[a,l]=z.useState(["","","","","",""]),d=(m,p)=>l(b=>b.map((I,S)=>S===m?p:I));function h(){const m=a.slice(0,t).map((p,b)=>p.trim()||`Hráč ${b+1}`);e(m,r)}return c.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[c.jsx(Cm,{title:"Nový turnaj",onBack:s}),c.jsxs("div",{className:"p-5 max-w-md mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 flex items-center gap-2",children:[c.jsx(ca,{size:12})," CIEĽ HRY"]}),c.jsx("div",{className:"grid grid-cols-2 gap-2",children:jm.map(m=>c.jsxs("button",{onClick:()=>i(m.value),className:`ks-press py-3 px-3 rounded-sm text-left ${r===m.value?"ks-gold-bg":"ks-card ks-cream"}`,children:[c.jsx("div",{className:"ks-display text-2xl font-semibold leading-tight",children:m.value.toLocaleString("sk-SK")}),c.jsx("div",{className:`text-xs ${r===m.value?"opacity-80":"ks-muted"}`,children:m.label})]},m.value))})]}),c.jsx(Po,{}),c.jsxs("div",{children:[c.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"POČET HRÁČOV"}),c.jsx("div",{className:"grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(m=>c.jsx("button",{onClick:()=>n(m),className:`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${t===m?"ks-gold-bg":"ks-card ks-cream"}`,children:m},m))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"MENÁ HRÁČOV"}),c.jsx("div",{className:"space-y-2",children:Array.from({length:t}).map((m,p)=>c.jsxs("div",{className:"ks-card flex items-center gap-3 p-2 rounded-sm",children:[c.jsx("div",{className:"w-9 h-9 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-semibold",children:p+1}),c.jsx("input",{value:a[p],onChange:b=>d(p,b.target.value),placeholder:`Hráč ${p+1}`,maxLength:18,className:"flex-1 bg-transparent ks-cream ks-body text-lg outline-none placeholder:text-stone-600"})]},p))})]}),c.jsx(Tm,{onClick:h,icon:ri,className:"w-full text-lg",children:"Začať turnaj"})]})]})}const Dm={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},inkfree:{id:"inkfree",name:"Ink Free",stack:"'Ink Free', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}},Co={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}}};function Ou({title:s,onBack:e,right:t}){return c.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?c.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[c.jsx(qs,{size:20}),c.jsx("span",{className:"ks-body",children:"Späť"})]}):c.jsx("div",{className:"w-16"}),c.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:s}),c.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function Om({selectedSkin:s,onSkinChange:e}){const t=Object.values(Co);return c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t.map(n=>{const r=n.id===s,i=n.vars["--ks-accent"],a=n.vars["--ks-accent-2"],l=n.vars["--ks-bg-main"],d=n.vars["--ks-bg-soft"],h=n.vars["--ks-text"];return c.jsxs("button",{onClick:()=>e(n.id),className:"ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110 relative",style:{minHeight:"120px",background:l,borderColor:r?i:"rgba(255,255,255,0.12)"},children:[r&&c.jsx("div",{className:"absolute top-3 right-3 ks-mono font-bold text-[13px] tracking-wider",style:{color:i},children:"✦ AKTÍVNY"}),c.jsx("div",{className:"flex items-start w-full",children:c.jsx("div",{className:"ks-display text-base font-semibold leading-tight",style:{color:h},children:n.name})}),c.jsxs("div",{className:"mt-auto w-full grid items-end",style:{gridTemplateColumns:"1fr auto",columnGap:"12px",rowGap:"4px"},children:[c.jsx("div",{className:"rounded-[4px] shrink-0",style:{width:38,height:38,background:i,gridColumn:"2",gridRow:"1 / 3"}}),c.jsxs("div",{className:"flex items-center gap-1.5 w-full",children:[c.jsx("div",{className:"rounded-[3px] border border-white/10 flex-1",style:{height:15,background:d}}),c.jsx("div",{className:"rounded-[3px] flex-1",style:{height:15,background:a}})]})]})]},n.id)})})}function Lm({selectedFont:s,onFontChange:e}){const t=Object.values(Dm);return c.jsx("div",{className:"grid grid-cols-2 gap-3",children:t.map(n=>{const r=n.id===s;return c.jsxs("button",{onClick:()=>e(n.id),className:`ks-press rounded-sm p-3 border-2 transition-all flex flex-col items-center text-center ks-card ${r?"ks-card-prom ks-border-accent":"ks-border-sub hover:shadow-md"}`,children:[r&&c.jsx("div",{className:"ks-mono ks-gold text-[9px] tracking-[0.18em] mb-1",children:"✦ AKTÍVNE"}),c.jsx("div",{className:"ks-cream text-base font-semibold leading-tight",style:{fontFamily:n.stack},children:n.name}),c.jsx("div",{className:"ks-muted text-xs mt-1.5",style:{fontFamily:n.stack},children:"Ukážka · Abc 123"})]},n.id)})})}function Mm({onBack:s,selectedMode:e,onChangeMode:t,selectedSkin:n}){const r=[{id:"basic",title:"Klasický",desc:"Tabuľka hore a zapisovanie bodov pod ňou."},{id:"observer",title:"Pozorovateľ",desc:"Veľký živý prehľad skóre pre obrazovku alebo TV."},{id:"recorder",title:"Zapisovateľ",desc:"Jednoduché veľké ovládanie pre rýchly zápis bodov."}],i=Co[n]||Co.classic;return c.jsxs("div",{className:"min-h-screen ks-fade pb-8",style:{background:i.bg},children:[c.jsx(Ou,{title:"Zobrazenie hry",onBack:s}),c.jsx("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:r.map(a=>c.jsx("button",{onClick:()=>t(a.id),className:`ks-card w-full p-4 rounded-sm text-left ks-press border ${e===a.id?"border-amber-500/70 bg-amber-900/10":"ks-border-sub"}`,children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:a.title}),c.jsx("div",{className:"ks-muted text-sm mt-1",children:a.desc})]}),c.jsxs("div",{className:"shrink-0 w-[62px]",children:[c.jsx("div",{className:"h-[92px] rounded-sm border border-amber-900/25 overflow-hidden",style:{background:i.bg},children:a.id==="basic"?c.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"18px 28px 1fr",gap:"4px",padding:"5px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,184,106,0.24)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),c.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}):a.id==="observer"?c.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 1fr",gap:"4px",padding:"5px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.2)"}}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"8px 1fr 1fr 1fr",gap:"3px"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}})]}),c.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.14)"}})]}),c.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),c.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]})]})]}):c.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 22px 1fr 12px",gap:"4px",padding:"5px"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 18px",gap:"3px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),c.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}}),c.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}})]})]})}),e===a.id?c.jsx("div",{className:"ks-gold ks-mono text-[10px] text-right mt-1",children:"AKTÍVNE"}):c.jsx("div",{className:"h-[14px] mt-1"})]})]})},a.id))})]})}function Um({onBack:s,selectedSkin:e,onSkinChange:t,selectedFont:n,onFontChange:r,tournamentViewMode:i,onTournamentViewModeChange:a,onViewModes:l}){return c.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[c.jsx(Ou,{title:"Vizuál a Skiny",onBack:s}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-5",children:[c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"SKINY"}),c.jsx(Om,{selectedSkin:e,onSkinChange:t}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"PÍSMO"}),c.jsx(Lm,{selectedFont:n,onFontChange:r})]})]})}const Fm=()=>{};var sl={};/**
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
 */const Lu=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zm=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],a=s[t++],l=s[t++],d=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(d>>10)),e[n++]=String.fromCharCode(56320+(d&1023))}else{const i=s[t++],a=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],a=r+1<s.length,l=a?s[r+1]:0,d=r+2<s.length,h=d?s[r+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let b=(l&15)<<2|h>>6,I=h&63;d||(I=64,a||(b=64)),n.push(t[m],t[p],t[b],t[I])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Lu(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):zm(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],l=r<s.length?t[s.charAt(r)]:0;++r;const h=r<s.length?t[s.charAt(r)]:64;++r;const p=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||l==null||h==null||p==null)throw new $m;const b=i<<2|l>>4;if(n.push(b),h!==64){const I=l<<4&240|h>>2;if(n.push(I),p!==64){const S=h<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class $m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bm=function(s){const e=Lu(s);return Mu.encodeByteArray(e,!0)},oi=function(s){return Bm(s).replace(/\./g,"")},Uu=function(s){try{return Mu.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Km(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qm=()=>Km().__FIREBASE_DEFAULTS__,Hm=()=>{if(typeof process>"u"||typeof sl>"u")return;const s=sl.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Wm=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Uu(s[1]);return e&&JSON.parse(e)},Ri=()=>{try{return Fm()||qm()||Hm()||Wm()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Fu=s=>{var e,t;return(t=(e=Ri())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Gm=s=>{const e=Fu(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},zu=()=>{var s;return(s=Ri())==null?void 0:s.config},$u=s=>{var e;return(e=Ri())==null?void 0:e[`_${s}`]};/**
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
 */class Qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Jm(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[oi(JSON.stringify(t)),oi(JSON.stringify(a)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Xm(){var e;const s=(e=Ri())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ep(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const s=ct();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function np(){return!Xm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rp(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const op="FirebaseError";class es extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=op,Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?ap(i,n):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new es(r,l,n)}}function ap(s,e){return s.replace(cp,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const cp=/\{\$([^}]+)}/g;function lp(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Hs(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],a=e[r];if(nl(i)&&nl(a)){if(!Hs(i,a))return!1}else if(i!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function nl(s){return s!==null&&typeof s=="object"}/**
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
 */function pr(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function up(s,e){const t=new dp(s,e);return t.subscribe.bind(t)}class dp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");hp(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=mo),r.error===void 0&&(r.error=mo),r.complete===void 0&&(r.complete=mo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hp(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function mo(){}/**
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
 */function mt(s){return s&&s._delegate?s._delegate:s}/**
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
 */function gr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bu(s){return(await fetch(s,{credentials:"include"})).ok}class Ws{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zs="[DEFAULT]";/**
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
 */class fp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Qm;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pp(e))try{this.getOrInitializeService({instanceIdentifier:zs})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zs){return this.instances.has(e)}getOptions(e=zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&a.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:mp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=zs){return this.component?this.component.multipleInstances?e:zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mp(s){return s===zs?void 0:s}function pp(s){return s.instantiationMode==="EAGER"}/**
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
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(ue||(ue={}));const yp={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},bp=ue.INFO,_p={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},vp=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=_p[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=bp,this._logHandler=vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const kp=(s,e)=>e.some(t=>s instanceof t);let rl,il;function xp(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wp(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ku=new WeakMap,jo=new WeakMap,qu=new WeakMap,po=new WeakMap,ma=new WeakMap;function Ep(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",a)},i=()=>{t(gs(s.result)),r()},a=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ku.set(t,s)}).catch(()=>{}),ma.set(e,s),e}function Tp(s){if(jo.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",a),s.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",a),s.addEventListener("abort",a)});jo.set(s,e)}let Vo={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return jo.get(s);if(e==="objectStoreNames")return s.objectStoreNames||qu.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gs(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Ip(s){Vo=s(Vo)}function Ap(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(go(this),e,...t);return qu.set(n,e.sort?e.sort():[e]),gs(n)}:wp().includes(s)?function(...e){return s.apply(go(this),e),gs(Ku.get(this))}:function(...e){return gs(s.apply(go(this),e))}}function Sp(s){return typeof s=="function"?Ap(s):(s instanceof IDBTransaction&&Tp(s),kp(s,xp())?new Proxy(s,Vo):s)}function gs(s){if(s instanceof IDBRequest)return Ep(s);if(po.has(s))return po.get(s);const e=Sp(s);return e!==s&&(po.set(s,e),ma.set(e,s)),e}const go=s=>ma.get(s);function Np(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(s,e),l=gs(a);return n&&a.addEventListener("upgradeneeded",d=>{n(gs(a.result),d.oldVersion,d.newVersion,gs(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{i&&d.addEventListener("close",()=>i()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Rp=["get","getKey","getAll","getAllKeys","count"],Pp=["put","add","delete","clear"],yo=new Map;function ol(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(yo.get(e))return yo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=Pp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Rp.includes(t)))return;const i=async function(a,...l){const d=this.transaction(a,r?"readwrite":"readonly");let h=d.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&d.done]))[0]};return yo.set(e,i),i}Ip(s=>({...s,get:(e,t,n)=>ol(e,t)||s.get(e,t,n),has:(e,t)=>!!ol(e,t)||s.has(e,t)}));/**
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
 */class Cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function jp(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",al="0.14.12";/**
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
 */const Qt=new fa("@firebase/app"),Vp="@firebase/app-compat",Dp="@firebase/analytics-compat",Op="@firebase/analytics",Lp="@firebase/app-check-compat",Mp="@firebase/app-check",Up="@firebase/auth",Fp="@firebase/auth-compat",zp="@firebase/database",$p="@firebase/data-connect",Bp="@firebase/database-compat",Kp="@firebase/functions",qp="@firebase/functions-compat",Hp="@firebase/installations",Wp="@firebase/installations-compat",Gp="@firebase/messaging",Qp="@firebase/messaging-compat",Jp="@firebase/performance",Yp="@firebase/performance-compat",Xp="@firebase/remote-config",Zp="@firebase/remote-config-compat",eg="@firebase/storage",tg="@firebase/storage-compat",sg="@firebase/firestore",ng="@firebase/ai",rg="@firebase/firestore-compat",ig="firebase",og="12.13.0";/**
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
 */const Oo="[DEFAULT]",ag={[Do]:"fire-core",[Vp]:"fire-core-compat",[Op]:"fire-analytics",[Dp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Lp]:"fire-app-check-compat",[Up]:"fire-auth",[Fp]:"fire-auth-compat",[zp]:"fire-rtdb",[$p]:"fire-data-connect",[Bp]:"fire-rtdb-compat",[Kp]:"fire-fn",[qp]:"fire-fn-compat",[Hp]:"fire-iid",[Wp]:"fire-iid-compat",[Gp]:"fire-fcm",[Qp]:"fire-fcm-compat",[Jp]:"fire-perf",[Yp]:"fire-perf-compat",[Xp]:"fire-rc",[Zp]:"fire-rc-compat",[eg]:"fire-gcs",[tg]:"fire-gcs-compat",[sg]:"fire-fst",[rg]:"fire-fst-compat",[ng]:"fire-vertex","fire-js":"fire-js",[ig]:"fire-js-all"};/**
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
 */const ai=new Map,cg=new Map,Lo=new Map;function cl(s,e){try{s.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function gn(s){const e=s.name;if(Lo.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,s);for(const t of ai.values())cl(t,s);for(const t of cg.values())cl(t,s);return!0}function pa(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function wt(s){return s==null?!1:s.settings!==void 0}/**
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
 */const lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ys=new mr("app","Firebase",lg);/**
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
 */class ug{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ys.create("app-deleted",{appName:this._name})}}/**
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
 */const wn=og;function Hu(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Oo,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw ys.create("bad-app-name",{appName:String(r)});if(t||(t=zu()),!t)throw ys.create("no-options");const i=ai.get(r);if(i){if(Hs(t,i.options)&&Hs(n,i.config))return i;throw ys.create("duplicate-app",{appName:r})}const a=new gp(r);for(const d of Lo.values())a.addComponent(d);const l=new ug(t,n,a);return ai.set(r,l),l}function Wu(s=Oo){const e=ai.get(s);if(!e&&s===Oo&&zu())return Hu();if(!e)throw ys.create("no-app",{appName:s});return e}function bs(s,e,t){let n=ag[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${n}" with version "${e}":`];r&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}gn(new Ws(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const dg="firebase-heartbeat-database",hg=1,tr="firebase-heartbeat-store";let bo=null;function Gu(){return bo||(bo=Np(dg,hg,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(tr)}catch(t){console.warn(t)}}}}).catch(s=>{throw ys.create("idb-open",{originalErrorMessage:s.message})})),bo}async function fg(s){try{const t=(await Gu()).transaction(tr),n=await t.objectStore(tr).get(Qu(s));return await t.done,n}catch(e){if(e instanceof es)Qt.warn(e.message);else{const t=ys.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function ll(s,e){try{const n=(await Gu()).transaction(tr,"readwrite");await n.objectStore(tr).put(e,Qu(s)),await n.done}catch(t){if(t instanceof es)Qt.warn(t.message);else{const n=ys.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}}function Qu(s){return`${s.name}!${s.options.appId}`}/**
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
 */const mg=1024,pg=30;class gg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ul();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>pg){const a=_g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Qt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ul(),{heartbeatsToSend:n,unsentEntries:r}=yg(this._heartbeatsCache.heartbeats),i=oi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Qt.warn(t),""}}}function ul(){return new Date().toISOString().substring(0,10)}function yg(s,e=mg){const t=[];let n=s.slice();for(const r of s){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),dl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),dl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class bg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rp()?ip().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return ll(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return ll(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function dl(s){return oi(JSON.stringify({version:2,heartbeats:s})).length}function _g(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function vg(s){gn(new Ws("platform-logger",e=>new Cp(e),"PRIVATE")),gn(new Ws("heartbeat",e=>new gg(e),"PRIVATE")),bs(Do,al,s),bs(Do,al,"esm2020"),bs("fire-js","")}vg("");function Ju(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kg=Ju,Yu=new mr("auth","Firebase",Ju());/**
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
 */const ci=new fa("@firebase/auth");function xg(s,...e){ci.logLevel<=ue.WARN&&ci.warn(`Auth (${wn}): ${s}`,...e)}function Gr(s,...e){ci.logLevel<=ue.ERROR&&ci.error(`Auth (${wn}): ${s}`,...e)}/**
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
 */function Jt(s,...e){throw ga(s,...e)}function Ct(s,...e){return ga(s,...e)}function Xu(s,e,t){const n={...kg(),[e]:t};return new mr("auth","Firebase",n).create(e,{appName:s.name})}function _s(s){return Xu(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ga(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Yu.create(s,...e)}function ee(s,e,...t){if(!s)throw ga(e,...t)}function Ht(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Gr(e),new Error(e)}function Yt(s,e){s||Ht(e)}/**
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
 */function Mo(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function wg(){return hl()==="http:"||hl()==="https:"}function hl(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function Eg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wg()||ep()||"connection"in navigator)?navigator.onLine:!0}function Tg(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ym()||tp()}get(){return Eg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ya(s,e){Yt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Zu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ag=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sg=new yr(3e4,6e4);function Pi(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function En(s,e,t,n,r={}){return ed(s,r,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const l=pr({key:s.config.apiKey,...a}).slice(1),d=await s._getAdditionalHeaders();d["Content-Type"]="application/json",s.languageCode&&(d["X-Firebase-Locale"]=s.languageCode);const h={method:e,headers:d,...i};return Zm()||(h.referrerPolicy="no-referrer"),s.emulatorConfig&&gr(s.emulatorConfig.host)&&(h.credentials="include"),Zu.fetch()(await sd(s,s.config.apiHost,t,l),h)})}async function ed(s,e,t){s._canInitEmulator=!1;const n={...Ig,...e};try{const r=new Ng(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Mr(s,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(s,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Mr(s,"email-already-in-use",a);if(d==="USER_DISABLED")throw Mr(s,"user-disabled",a);const m=n[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xu(s,m,h);Jt(s,m)}}catch(r){if(r instanceof es)throw r;Jt(s,"network-request-failed",{message:String(r)})}}async function td(s,e,t,n,r={}){const i=await En(s,e,t,n,r);return"mfaPendingCredential"in i&&Jt(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function sd(s,e,t,n){const r=`${e}${t}?${n}`,i=s,a=i.config.emulator?ya(s.config,r):`${s.config.apiScheme}://${r}`;return Ag.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Ng{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ct(this.auth,"network-request-failed")),Sg.get())})}}function Mr(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Ct(s,e,n);return r.customData._tokenResponse=t,r}/**
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
 */async function Rg(s,e){return En(s,"POST","/v1/accounts:delete",e)}async function li(s,e){return En(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qn(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pg(s,e=!1){const t=mt(s),n=await t.getIdToken(e),r=ba(n);ee(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:Qn(_o(r.auth_time)),issuedAtTime:Qn(_o(r.iat)),expirationTime:Qn(_o(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _o(s){return Number(s)*1e3}function ba(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Uu(t);return r?JSON.parse(r):(Gr("Failed to decode base64 JWT payload"),null)}catch(r){return Gr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function fl(s){const e=ba(s);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sr(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof es&&Cg(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Cg({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class jg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ui(s){var p;const e=s.auth,t=await s.getIdToken(),n=await sr(s,li(e,{idToken:t}));ee(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?nd(r.providerUserInfo):[],a=Dg(s.providerData,i),l=s.isAnonymous,d=!(s.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?d:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Uo(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(s,m)}async function Vg(s){const e=mt(s);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dg(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function nd(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Og(s,e){const t=await ed(s,{},async()=>{const n=pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,a=await sd(s,r,"/v1/token",`key=${i}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:n};return s.emulatorConfig&&gr(s.emulatorConfig.host)&&(d.credentials="include"),Zu.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lg(s,e){return En(s,"POST","/v2/accounts:revokeToken",Pi(s,e))}/**
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
 */class cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=fl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Og(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new cn;return n&&(ee(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),r&&(ee(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cn,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function us(s,e){ee(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Et{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new jg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Uo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await sr(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pg(this,e)}reload(){return Vg(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ui(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await sr(this,Rg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,d=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:b,isAnonymous:I,providerData:S,stsTokenManager:P}=t;ee(p&&P,e,"internal-error");const T=cn.fromJSON(this.name,P);ee(typeof p=="string",e,"internal-error"),us(n,e.name),us(r,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof I=="boolean",e,"internal-error"),us(i,e.name),us(a,e.name),us(l,e.name),us(d,e.name),us(h,e.name),us(m,e.name);const L=new Et({uid:p,auth:e,email:r,emailVerified:b,displayName:n,isAnonymous:I,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:T,createdAt:h,lastLoginAt:m});return S&&Array.isArray(S)&&(L.providerData=S.map(N=>({...N}))),d&&(L._redirectEventId=d),L}static async _fromIdTokenResponse(e,t,n=!1){const r=new cn;r.updateFromServerResponse(t);const i=new Et({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ui(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];ee(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?nd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new cn;l.updateFromIdToken(n);const d=new Et({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Uo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(d,h),d}}/**
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
 */const ml=new Map;function Wt(s){Yt(s instanceof Function,"Expected a class definition");let e=ml.get(s);return e?(Yt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,ml.set(s,e),e)}/**
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
 */class rd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rd.type="NONE";const pl=rd;/**
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
 */function Qr(s,e,t){return`firebase:${s}:${e}:${t}`}class ln{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Qr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await li(this.auth,{idToken:e}).catch(()=>{});return t?Et._fromGetAccountInfoResponse(this.auth,t,e):null}return Et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ln(Wt(pl),e,n);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||Wt(pl);const a=Qr(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(a);if(m){let p;if(typeof m=="string"){const b=await li(e,{idToken:m}).catch(()=>{});if(!b)break;p=await Et._fromGetAccountInfoResponse(e,b,m)}else p=Et._fromJSON(e,m);h!==i&&(l=p),i=h;break}}catch{}const d=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new ln(i,e,n):(i=d[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new ln(i,e,n))}}/**
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
 */function gl(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ud(e))return"Blackberry";if(dd(e))return"Webos";if(od(e))return"Safari";if((e.includes("chrome/")||ad(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function id(s=ct()){return/firefox\//i.test(s)}function od(s=ct()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ad(s=ct()){return/crios\//i.test(s)}function cd(s=ct()){return/iemobile/i.test(s)}function ld(s=ct()){return/android/i.test(s)}function ud(s=ct()){return/blackberry/i.test(s)}function dd(s=ct()){return/webos/i.test(s)}function _a(s=ct()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Mg(s=ct()){var e;return _a(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Ug(){return sp()&&document.documentMode===10}function hd(s=ct()){return _a(s)||ld(s)||dd(s)||ud(s)||/windows phone/i.test(s)||cd(s)}/**
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
 */function fd(s,e=[]){let t;switch(s){case"Browser":t=gl(ct());break;case"Worker":t=`${gl(ct())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${n}`}/**
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
 */class Fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,l)=>{try{const d=e(i);a(d)}catch(d){l(d)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function zg(s,e={}){return En(s,"GET","/v2/passwordPolicy",Pi(s,e))}/**
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
 */const $g=6;class Bg{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??$g,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Kg{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yl(this),this.idTokenSubscription=new yl(this),this.beforeStateQueue=new Fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await li(this,{idToken:e}),n=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=n==null?void 0:n._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===l)&&(d!=null&&d.user)&&(n=d.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(_s(this));const t=e?mt(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zg(this),t=new Bg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Lg(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,n,r);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&xg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ci(s){return mt(s)}class yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=up(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qg(s){va=s}function Hg(s){return va.loadJS(s)}function Wg(){return va.gapiScript}function Gg(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Qg(s,e){const t=pa(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Hs(i,e??{}))return r;Jt(r,"already-initialized")}return t.initialize({options:e})}function Jg(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Yg(s,e,t){const n=Ci(s);ee(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=md(e),{host:a,port:l}=Xg(e),d=l===null?"":`:${l}`,h={url:`${i}//${a}${d}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){ee(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ee(Hs(h,n.config.emulator)&&Hs(m,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=m,n.settings.appVerificationDisabledForTesting=!0,gr(a)?Bu(`${i}//${a}${d}`):Zg()}function md(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Xg(s){const e=md(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:bl(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:bl(a)}}}function bl(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Zg(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class pd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,t){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
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
 */async function un(s,e){return td(s,"POST","/v1/accounts:signInWithIdp",Pi(s,e))}/**
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
 */const ey="http://localhost";class Gs extends pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new Gs(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return un(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,un(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,un(e,t)}buildRequest(){const e={requestUri:ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pr(t)}return e}}/**
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
 */class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class br extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ds extends br{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.FACEBOOK_SIGN_IN_METHOD="facebook.com";ds.PROVIDER_ID="facebook.com";/**
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
 */class hs extends br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return hs.credential(t,n)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
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
 */class fs extends br{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
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
 */class ms extends br{constructor(){super("twitter.com")}static credential(e,t){return Gs._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ms.credential(t,n)}catch{return null}}}ms.TWITTER_SIGN_IN_METHOD="twitter.com";ms.PROVIDER_ID="twitter.com";/**
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
 */async function ty(s,e){return td(s,"POST","/v1/accounts:signUp",Pi(s,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Et._fromIdTokenResponse(e,n,r),a=_l(n);return new ws({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=_l(n);return new ws({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function _l(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */async function sy(s){var r;if(wt(s.app))return Promise.reject(_s(s));const e=Ci(s);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new ws({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await ty(e,{returnSecureToken:!0}),n=await ws._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class di extends es{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new di(e,t,n,r)}}function yd(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(s,i,e,n):i})}async function ny(s,e,t=!1){const n=await sr(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return ws._forOperation(s,"link",n)}/**
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
 */async function ry(s,e,t=!1){const{auth:n}=s;if(wt(n.app))return Promise.reject(_s(n));const r="reauthenticate";try{const i=await sr(s,yd(n,r,e,s),t);ee(i.idToken,n,"internal-error");const a=ba(i.idToken);ee(a,n,"internal-error");const{sub:l}=a;return ee(s.uid===l,n,"user-mismatch"),ws._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(n,"user-mismatch"),i}}/**
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
 */async function iy(s,e,t=!1){if(wt(s.app))return Promise.reject(_s(s));const n="signIn",r=await yd(s,n,e),i=await ws._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}function oy(s,e,t,n){return mt(s).onIdTokenChanged(e,t,n)}function ay(s,e,t){return mt(s).beforeAuthStateChanged(e,t)}const hi="__sak";/**
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
 */class bd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cy=1e3,ly=10;class _d extends bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);Ug()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ly):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_d.type="LOCAL";const uy=_d;/**
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
 */class vd extends bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vd.type="SESSION";const kd=vd;/**
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
 */function dy(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new ji(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const l=Array.from(a).map(async h=>h(t.origin,i)),d=await dy(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
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
 */function ka(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class hy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,d)=>{const h=ka("",20);r.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(p){const b=p;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(b.data.response);break;default:clearTimeout(m),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function jt(){return window}function fy(s){jt().location.href=s}/**
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
 */function xd(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function my(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function py(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function gy(){return xd()?self:null}/**
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
 */const wd="firebaseLocalStorageDb",yy=1,fi="firebaseLocalStorage",Ed="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vi(s,e){return s.transaction([fi],e?"readwrite":"readonly").objectStore(fi)}function by(){const s=indexedDB.deleteDatabase(wd);return new _r(s).toPromise()}function Fo(){const s=indexedDB.open(wd,yy);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(fi,{keyPath:Ed})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(fi)?e(n):(n.close(),await by(),e(await Fo()))})})}async function vl(s,e,t){const n=Vi(s,!0).put({[Ed]:e,value:t});return new _r(n).toPromise()}async function _y(s,e){const t=Vi(s,!1).get(e),n=await new _r(t).toPromise();return n===void 0?null:n.value}function kl(s,e){const t=Vi(s,!0).delete(e);return new _r(t).toPromise()}const vy=800,ky=3;class Td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>ky)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(gy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await my(),!this.activeServiceWorker)return;this.sender=new hy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||py()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fo();return await vl(e,hi,"1"),await kl(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>_y(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Vi(r,!1).getAll();return new _r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Td.type="LOCAL";const xy=Td;new yr(3e4,6e4);/**
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
 */function wy(s,e){return e?Wt(e):(ee(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class xa extends pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ey(s){return iy(s.auth,new xa(s),s.bypassAuthState)}function Ty(s){const{auth:e,user:t}=s;return ee(t,e,"internal-error"),ry(t,new xa(s),s.bypassAuthState)}async function Iy(s){const{auth:e,user:t}=s;return ee(t,e,"internal-error"),ny(t,new xa(s),s.bypassAuthState)}/**
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
 */class Id{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ey;case"linkViaPopup":case"linkViaRedirect":return Iy;case"reauthViaPopup":case"reauthViaRedirect":return Ty;default:Jt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ay=new yr(2e3,1e4);class an extends Id{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ay.get())};e()}}an.currentPopupAction=null;/**
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
 */const Sy="pendingRedirect",Jr=new Map;class Ny extends Id{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const n=await Ry(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ry(s,e){const t=jy(e),n=Cy(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function Py(s,e){Jr.set(s._key(),e)}function Cy(s){return Wt(s._redirectPersistence)}function jy(s){return Qr(Sy,s.config.apiKey,s.name)}async function Vy(s,e,t=!1){if(wt(s.app))return Promise.reject(_s(s));const n=Ci(s),r=wy(n,e),a=await new Ny(n,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Dy=600*1e3;class Oy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ly(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ad(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ct(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dy&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Ad({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ly(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ad(s);default:return!1}}/**
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
 */async function My(s,e={}){return En(s,"GET","/v1/projects",e)}/**
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
 */const Uy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fy=/^https?/;async function zy(s){if(s.config.emulator)return;const{authorizedDomains:e}=await My(s);for(const t of e)try{if($y(t))return}catch{}Jt(s,"unauthorized-domain")}function $y(s){const e=Mo(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const a=new URL(s);return a.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Fy.test(t))return!1;if(Uy.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const By=new yr(3e4,6e4);function wl(){const s=jt().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Ky(s){return new Promise((e,t)=>{var r,i,a;function n(){wl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wl(),t(Ct(s,"network-request-failed"))},timeout:By.get()})}if((i=(r=jt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=jt().gapi)!=null&&a.load)n();else{const l=Gg("iframefcb");return jt()[l]=()=>{gapi.load?n():t(Ct(s,"network-request-failed"))},Hg(`${Wg()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function qy(s){return Yr=Yr||Ky(s),Yr}/**
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
 */const Hy=new yr(5e3,15e3),Wy="__/auth/iframe",Gy="emulator/auth/iframe",Qy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yy(s){const e=s.config;ee(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?ya(e,Gy):`https://${s.config.authDomain}/${Wy}`,n={apiKey:e.apiKey,appName:s.name,v:wn},r=Jy.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${pr(n).slice(1)}`}async function Xy(s){const e=await qy(s),t=jt().gapi;return ee(t,s,"internal-error"),e.open({where:document.body,url:Yy(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qy,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const a=Ct(s,"network-request-failed"),l=jt().setTimeout(()=>{i(a)},Hy.get());function d(){jt().clearTimeout(l),r(n)}n.ping(d).then(d,()=>{i(a)})}))}/**
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
 */const Zy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eb=500,tb=600,sb="_blank",nb="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rb(s,e,t,n=eb,r=tb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const d={...Zy,width:n.toString(),height:r.toString(),top:i,left:a},h=ct().toLowerCase();t&&(l=ad(h)?sb:t),id(h)&&(e=e||nb,d.scrollbars="yes");const m=Object.entries(d).reduce((b,[I,S])=>`${b}${I}=${S},`,"");if(Mg(h)&&l!=="_self")return ib(e||"",l),new El(null);const p=window.open(e||"",l,m);ee(p,s,"popup-blocked");try{p.focus()}catch{}return new El(p)}function ib(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const ob="__/auth/handler",ab="emulator/auth/handler",cb=encodeURIComponent("fac");async function Tl(s,e,t,n,r,i){ee(s.config.authDomain,s,"auth-domain-config-required"),ee(s.config.apiKey,s,"invalid-api-key");const a={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:wn,eventId:r};if(e instanceof gd){e.setDefaultLanguage(s.languageCode),a.providerId=e.providerId||"",lp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof br){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}s.tenantId&&(a.tid=s.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const d=await s._getAppCheckToken(),h=d?`#${cb}=${encodeURIComponent(d)}`:"";return`${lb(s)}?${pr(l).slice(1)}${h}`}function lb({config:s}){return s.emulator?ya(s,ab):`https://${s.authDomain}/${ob}`}/**
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
 */const vo="webStorageSupport";class ub{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kd,this._completeRedirectFn=Vy,this._overrideRedirectResult=Py}async _openPopup(e,t,n,r){var a;Yt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Tl(e,t,n,Mo(),r);return rb(e,i,ka())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Tl(e,t,n,Mo(),r);return fy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Yt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Xy(e),n=new Oy(e);return t.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vo,{type:vo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[vo];i!==void 0&&t(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hd()||od()||_a()}}const db=ub;var Il="@firebase/auth",Al="1.13.1";/**
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
 */class hb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fb(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mb(s){gn(new Ws("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const d={apiKey:a,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fd(s)},h=new Kg(n,r,i,d);return Jg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),gn(new Ws("auth-internal",e=>{const t=Ci(e.getProvider("auth").getImmediate());return(n=>new hb(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bs(Il,Al,fb(s)),bs(Il,Al,"esm2020")}/**
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
 */const pb=300,gb=$u("authIdTokenMaxAge")||pb;let Sl=null;const yb=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>gb)return;const r=t==null?void 0:t.token;Sl!==r&&(Sl=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Di(s=Wu()){const e=pa(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Qg(s,{popupRedirectResolver:db,persistence:[xy,uy,kd]}),n=$u("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=yb(i.toString());ay(t,a,()=>a(t.currentUser)),oy(t,l=>a(l))}}const r=Fu("auth");return r&&Yg(t,`http://${r}`),t}function bb(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}qg({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=Ct("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",bb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mb("Browser");var _b="firebase",vb="12.13.0";/**
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
 */bs(_b,vb,"app");var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,Sd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,y){function _(){}_.prototype=y.prototype,x.F=y.prototype,x.prototype=new _,x.prototype.constructor=x,x.D=function(w,k,E){for(var v=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)v[ye-2]=arguments[ye];return y.prototype[k].apply(w,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(x,y,_){_||(_=0);const w=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)w[k]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(k=0;k<16;++k)w[k]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=x.g[0],_=x.g[1],k=x.g[2];let E=x.g[3],v;v=y+(E^_&(k^E))+w[0]+3614090360&4294967295,y=_+(v<<7&4294967295|v>>>25),v=E+(k^y&(_^k))+w[1]+3905402710&4294967295,E=y+(v<<12&4294967295|v>>>20),v=k+(_^E&(y^_))+w[2]+606105819&4294967295,k=E+(v<<17&4294967295|v>>>15),v=_+(y^k&(E^y))+w[3]+3250441966&4294967295,_=k+(v<<22&4294967295|v>>>10),v=y+(E^_&(k^E))+w[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=E+(k^y&(_^k))+w[5]+1200080426&4294967295,E=y+(v<<12&4294967295|v>>>20),v=k+(_^E&(y^_))+w[6]+2821735955&4294967295,k=E+(v<<17&4294967295|v>>>15),v=_+(y^k&(E^y))+w[7]+4249261313&4294967295,_=k+(v<<22&4294967295|v>>>10),v=y+(E^_&(k^E))+w[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=E+(k^y&(_^k))+w[9]+2336552879&4294967295,E=y+(v<<12&4294967295|v>>>20),v=k+(_^E&(y^_))+w[10]+4294925233&4294967295,k=E+(v<<17&4294967295|v>>>15),v=_+(y^k&(E^y))+w[11]+2304563134&4294967295,_=k+(v<<22&4294967295|v>>>10),v=y+(E^_&(k^E))+w[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=E+(k^y&(_^k))+w[13]+4254626195&4294967295,E=y+(v<<12&4294967295|v>>>20),v=k+(_^E&(y^_))+w[14]+2792965006&4294967295,k=E+(v<<17&4294967295|v>>>15),v=_+(y^k&(E^y))+w[15]+1236535329&4294967295,_=k+(v<<22&4294967295|v>>>10),v=y+(k^E&(_^k))+w[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=E+(_^k&(y^_))+w[6]+3225465664&4294967295,E=y+(v<<9&4294967295|v>>>23),v=k+(y^_&(E^y))+w[11]+643717713&4294967295,k=E+(v<<14&4294967295|v>>>18),v=_+(E^y&(k^E))+w[0]+3921069994&4294967295,_=k+(v<<20&4294967295|v>>>12),v=y+(k^E&(_^k))+w[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=E+(_^k&(y^_))+w[10]+38016083&4294967295,E=y+(v<<9&4294967295|v>>>23),v=k+(y^_&(E^y))+w[15]+3634488961&4294967295,k=E+(v<<14&4294967295|v>>>18),v=_+(E^y&(k^E))+w[4]+3889429448&4294967295,_=k+(v<<20&4294967295|v>>>12),v=y+(k^E&(_^k))+w[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=E+(_^k&(y^_))+w[14]+3275163606&4294967295,E=y+(v<<9&4294967295|v>>>23),v=k+(y^_&(E^y))+w[3]+4107603335&4294967295,k=E+(v<<14&4294967295|v>>>18),v=_+(E^y&(k^E))+w[8]+1163531501&4294967295,_=k+(v<<20&4294967295|v>>>12),v=y+(k^E&(_^k))+w[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=E+(_^k&(y^_))+w[2]+4243563512&4294967295,E=y+(v<<9&4294967295|v>>>23),v=k+(y^_&(E^y))+w[7]+1735328473&4294967295,k=E+(v<<14&4294967295|v>>>18),v=_+(E^y&(k^E))+w[12]+2368359562&4294967295,_=k+(v<<20&4294967295|v>>>12),v=y+(_^k^E)+w[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=E+(y^_^k)+w[8]+2272392833&4294967295,E=y+(v<<11&4294967295|v>>>21),v=k+(E^y^_)+w[11]+1839030562&4294967295,k=E+(v<<16&4294967295|v>>>16),v=_+(k^E^y)+w[14]+4259657740&4294967295,_=k+(v<<23&4294967295|v>>>9),v=y+(_^k^E)+w[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=E+(y^_^k)+w[4]+1272893353&4294967295,E=y+(v<<11&4294967295|v>>>21),v=k+(E^y^_)+w[7]+4139469664&4294967295,k=E+(v<<16&4294967295|v>>>16),v=_+(k^E^y)+w[10]+3200236656&4294967295,_=k+(v<<23&4294967295|v>>>9),v=y+(_^k^E)+w[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=E+(y^_^k)+w[0]+3936430074&4294967295,E=y+(v<<11&4294967295|v>>>21),v=k+(E^y^_)+w[3]+3572445317&4294967295,k=E+(v<<16&4294967295|v>>>16),v=_+(k^E^y)+w[6]+76029189&4294967295,_=k+(v<<23&4294967295|v>>>9),v=y+(_^k^E)+w[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=E+(y^_^k)+w[12]+3873151461&4294967295,E=y+(v<<11&4294967295|v>>>21),v=k+(E^y^_)+w[15]+530742520&4294967295,k=E+(v<<16&4294967295|v>>>16),v=_+(k^E^y)+w[2]+3299628645&4294967295,_=k+(v<<23&4294967295|v>>>9),v=y+(k^(_|~E))+w[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=E+(_^(y|~k))+w[7]+1126891415&4294967295,E=y+(v<<10&4294967295|v>>>22),v=k+(y^(E|~_))+w[14]+2878612391&4294967295,k=E+(v<<15&4294967295|v>>>17),v=_+(E^(k|~y))+w[5]+4237533241&4294967295,_=k+(v<<21&4294967295|v>>>11),v=y+(k^(_|~E))+w[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=E+(_^(y|~k))+w[3]+2399980690&4294967295,E=y+(v<<10&4294967295|v>>>22),v=k+(y^(E|~_))+w[10]+4293915773&4294967295,k=E+(v<<15&4294967295|v>>>17),v=_+(E^(k|~y))+w[1]+2240044497&4294967295,_=k+(v<<21&4294967295|v>>>11),v=y+(k^(_|~E))+w[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=E+(_^(y|~k))+w[15]+4264355552&4294967295,E=y+(v<<10&4294967295|v>>>22),v=k+(y^(E|~_))+w[6]+2734768916&4294967295,k=E+(v<<15&4294967295|v>>>17),v=_+(E^(k|~y))+w[13]+1309151649&4294967295,_=k+(v<<21&4294967295|v>>>11),v=y+(k^(_|~E))+w[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=E+(_^(y|~k))+w[11]+3174756917&4294967295,E=y+(v<<10&4294967295|v>>>22),v=k+(y^(E|~_))+w[2]+718787259&4294967295,k=E+(v<<15&4294967295|v>>>17),v=_+(E^(k|~y))+w[9]+3951481745&4294967295,x.g[0]=x.g[0]+y&4294967295,x.g[1]=x.g[1]+(k+(v<<21&4294967295|v>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+E&4294967295}n.prototype.v=function(x,y){y===void 0&&(y=x.length);const _=y-this.blockSize,w=this.C;let k=this.h,E=0;for(;E<y;){if(k==0)for(;E<=_;)r(this,x,E),E+=this.blockSize;if(typeof x=="string"){for(;E<y;)if(w[k++]=x.charCodeAt(E++),k==this.blockSize){r(this,w),k=0;break}}else for(;E<y;)if(w[k++]=x[E++],k==this.blockSize){r(this,w),k=0;break}}this.h=k,this.o+=y},n.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var y=1;y<x.length-8;++y)x[y]=0;y=this.o*8;for(var _=x.length-8;_<x.length;++_)x[_]=y&255,y/=256;for(this.v(x),x=Array(16),y=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)x[y++]=this.g[_]>>>w&255;return x};function i(x,y){var _=l;return Object.prototype.hasOwnProperty.call(_,x)?_[x]:_[x]=y(x)}function a(x,y){this.h=y;const _=[];let w=!0;for(let k=x.length-1;k>=0;k--){const E=x[k]|0;w&&E==y||(_[k]=E,w=!1)}this.g=_}var l={};function d(x){return-128<=x&&x<128?i(x,function(y){return new a([y|0],y<0?-1:0)}):new a([x|0],x<0?-1:0)}function h(x){if(isNaN(x)||!isFinite(x))return p;if(x<0)return T(h(-x));const y=[];let _=1;for(let w=0;x>=_;w++)y[w]=x/_|0,_*=4294967296;return new a(y,0)}function m(x,y){if(x.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x.charAt(0)=="-")return T(m(x.substring(1),y));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let w=p;for(let E=0;E<x.length;E+=8){var k=Math.min(8,x.length-E);const v=parseInt(x.substring(E,E+k),y);k<8?(k=h(Math.pow(y,k)),w=w.j(k).add(h(v))):(w=w.j(_),w=w.add(h(v)))}return w}var p=d(0),b=d(1),I=d(16777216);s=a.prototype,s.m=function(){if(P(this))return-T(this).m();let x=0,y=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);x+=(w>=0?w:4294967296+w)*y,y*=4294967296}return x},s.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(P(this))return"-"+T(this).toString(x);const y=h(Math.pow(x,6));var _=this;let w="";for(;;){const k=U(_,y).g;_=L(_,k.j(y));let E=((_.g.length>0?_.g[0]:_.h)>>>0).toString(x);if(_=k,S(_))return E+w;for(;E.length<6;)E="0"+E;w=E+w}},s.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(let y=0;y<x.g.length;y++)if(x.g[y]!=0)return!1;return!0}function P(x){return x.h==-1}s.l=function(x){return x=L(this,x),P(x)?-1:S(x)?0:1};function T(x){const y=x.g.length,_=[];for(let w=0;w<y;w++)_[w]=~x.g[w];return new a(_,~x.h).add(b)}s.abs=function(){return P(this)?T(this):this},s.add=function(x){const y=Math.max(this.g.length,x.g.length),_=[];let w=0;for(let k=0;k<=y;k++){let E=w+(this.i(k)&65535)+(x.i(k)&65535),v=(E>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);w=v>>>16,E&=65535,v&=65535,_[k]=v<<16|E}return new a(_,_[_.length-1]&-2147483648?-1:0)};function L(x,y){return x.add(T(y))}s.j=function(x){if(S(this)||S(x))return p;if(P(this))return P(x)?T(this).j(T(x)):T(T(this).j(x));if(P(x))return T(this.j(T(x)));if(this.l(I)<0&&x.l(I)<0)return h(this.m()*x.m());const y=this.g.length+x.g.length,_=[];for(var w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let k=0;k<x.g.length;k++){const E=this.i(w)>>>16,v=this.i(w)&65535,ye=x.i(k)>>>16,ne=x.i(k)&65535;_[2*w+2*k]+=v*ne,N(_,2*w+2*k),_[2*w+2*k+1]+=E*ne,N(_,2*w+2*k+1),_[2*w+2*k+1]+=v*ye,N(_,2*w+2*k+1),_[2*w+2*k+2]+=E*ye,N(_,2*w+2*k+2)}for(x=0;x<y;x++)_[x]=_[2*x+1]<<16|_[2*x];for(x=y;x<2*y;x++)_[x]=0;return new a(_,0)};function N(x,y){for(;(x[y]&65535)!=x[y];)x[y+1]+=x[y]>>>16,x[y]&=65535,y++}function V(x,y){this.g=x,this.h=y}function U(x,y){if(S(y))throw Error("division by zero");if(S(x))return new V(p,p);if(P(x))return y=U(T(x),y),new V(T(y.g),T(y.h));if(P(y))return y=U(x,T(y)),new V(T(y.g),y.h);if(x.g.length>30){if(P(x)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var _=b,w=y;w.l(x)<=0;)_=H(_),w=H(w);var k=Y(_,1),E=Y(w,1);for(w=Y(w,2),_=Y(_,2);!S(w);){var v=E.add(w);v.l(x)<=0&&(k=k.add(_),E=v),w=Y(w,1),_=Y(_,1)}return y=L(x,k.j(y)),new V(k,y)}for(k=p;x.l(y)>=0;){for(_=Math.max(1,Math.floor(x.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),E=h(_),v=E.j(y);P(v)||v.l(x)>0;)_-=w,E=h(_),v=E.j(y);S(E)&&(E=b),k=k.add(E),x=L(x,v)}return new V(k,x)}s.B=function(x){return U(this,x).h},s.and=function(x){const y=Math.max(this.g.length,x.g.length),_=[];for(let w=0;w<y;w++)_[w]=this.i(w)&x.i(w);return new a(_,this.h&x.h)},s.or=function(x){const y=Math.max(this.g.length,x.g.length),_=[];for(let w=0;w<y;w++)_[w]=this.i(w)|x.i(w);return new a(_,this.h|x.h)},s.xor=function(x){const y=Math.max(this.g.length,x.g.length),_=[];for(let w=0;w<y;w++)_[w]=this.i(w)^x.i(w);return new a(_,this.h^x.h)};function H(x){const y=x.g.length+1,_=[];for(let w=0;w<y;w++)_[w]=x.i(w)<<1|x.i(w-1)>>>31;return new a(_,x.h)}function Y(x,y){const _=y>>5;y%=32;const w=x.g.length-_,k=[];for(let E=0;E<w;E++)k[E]=y>0?x.i(E+_)>>>y|x.i(E+_+1)<<32-y:x.i(E+_);return new a(k,x.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Sd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,vs=a}).apply(typeof Nl<"u"?Nl:typeof self<"u"?self:typeof window<"u"?window:{});var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nd,Kn,Rd,Xr,zo,Pd,Cd,jd;(function(){var s,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ur=="object"&&Ur];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function r(o,u){if(u)e:{var f=n;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in f))break e;f=f[A]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=d,h.apply(null,arguments)}function m(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,A,R){for(var M=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)M[oe-2]=arguments[oe];return u.prototype[A].apply(g,M)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function I(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function S(o,u){for(let g=1;g<arguments.length;g++){const A=arguments[g];var f=typeof A;if(f=f!="object"?f:A?Array.isArray(A)?"array":f:"null",f=="array"||f=="object"&&typeof A.length=="number"){f=o.length||0;const R=A.length||0;o.length=f+R;for(let M=0;M<R;M++)o[f+M]=A[M]}else o.push(A)}}class P{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function T(o){a.setTimeout(()=>{throw o},0)}function L(){var o=x;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,f){const g=V.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new P(()=>new U,o=>o.reset());class U{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let H,Y=!1,x=new N,y=()=>{const o=Promise.resolve(void 0);H=()=>{o.then(_)}};function _(){for(var o;o=L();){try{o.h.call(o.g)}catch(f){T(f)}var u=V;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}Y=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function ye(o,u){k.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(ye,k),ye.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function D(o,u,f,g,A){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=A,this.key=++Ne,this.da=this.fa=!1}function B(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function fe(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function Z(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function le(o){const u={};for(const f in o)u[f]=o[f];return u}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(o,u){let f,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(f in g)o[f]=g[f];for(let R=0;R<Ee.length;R++)f=Ee[R],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function pe(o){this.src=o,this.g={},this.h=0}pe.prototype.add=function(o,u,f,g,A){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const M=re(o,u,g,A);return M>-1?(u=o[M],f||(u.fa=!1)):(u=new D(u,this.src,R,!!g,A),u.fa=f,o.push(u)),u};function F(o,u){const f=u.type;if(f in o.g){var g=o.g[f],A=Array.prototype.indexOf.call(g,u,void 0),R;(R=A>=0)&&Array.prototype.splice.call(g,A,1),R&&(B(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function re(o,u,f,g){for(let A=0;A<o.length;++A){const R=o[A];if(!R.da&&R.listener==u&&R.capture==!!f&&R.ha==g)return A}return-1}var ve="closure_lm_"+(Math.random()*1e6|0),Ze={};function Be(o,u,f,g,A){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Be(o,u[R],f,g,A);return null}return f=Me(f),o&&o[ne]?o.J(u,f,l(g)?!!g.capture:!1,A):It(o,u,f,!1,g,A)}function It(o,u,f,g,A,R){if(!u)throw Error("Invalid event type");const M=l(A)?!!A.capture:!!A;let oe=dt(o);if(oe||(o[ve]=oe=new pe(o)),f=oe.add(u,f,g,M,R),f.proxy)return f;if(g=Ke(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)E||(A=M),A===void 0&&(A=!1),o.addEventListener(u.toString(),g,A);else if(o.attachEvent)o.attachEvent(lt(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ke(){function o(f){return u.call(o.src,o.listener,f)}const u=ut;return o}function _t(o,u,f,g,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)_t(o,u[R],f,g,A);else g=l(g)?!!g.capture:!!g,f=Me(f),o&&o[ne]?(o=o.i,R=String(u).toString(),R in o.g&&(u=o.g[R],f=re(u,f,g,A),f>-1&&(B(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[R],o.h--)))):o&&(o=dt(o))&&(u=o.g[u.toString()],o=-1,u&&(o=re(u,f,g,A)),(f=o>-1?u[o]:null)&&ke(f))}function ke(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ne])F(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(lt(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=dt(u))?(F(f,o),f.h==0&&(f.src=null,u[ve]=null)):B(o)}}}function lt(o){return o in Ze?Ze[o]:Ze[o]="on"+o}function ut(o,u){if(o.da)o=!0;else{u=new ye(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&ke(o),o=f.call(g,u)}return o}function dt(o){return o=o[ve],o instanceof pe?o:null}var Te="__closure_events_fn_"+(Math.random()*1e9>>>0);function Me(o){return typeof o=="function"?o:(o[Te]||(o[Te]=function(u){return o.handleEvent(u)}),o[Te])}function me(){w.call(this),this.i=new pe(this),this.M=this,this.G=null}p(me,w),me.prototype[ne]=!0,me.prototype.removeEventListener=function(o,u,f,g){_t(this,o,u,f,g)};function W(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new k(u,o);else if(u instanceof k)u.target=u.target||o;else{var A=u;u=new k(g,o),de(u,A)}A=!0;let R,M;if(f)for(M=f.length-1;M>=0;M--)R=u.g=f[M],A=Ce(R,g,!0,u)&&A;if(R=u.g=o,A=Ce(R,g,!0,u)&&A,A=Ce(R,g,!1,u)&&A,f)for(M=0;M<f.length;M++)R=u.g=f[M],A=Ce(R,g,!1,u)&&A}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)B(f[g]);delete o.g[u],o.h--}}this.G=null},me.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},me.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ce(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let R=0;R<u.length;++R){const M=u[R];if(M&&!M.da&&M.capture==f){const oe=M.listener,He=M.ha||M.src;M.fa&&F(o.i,M),A=oe.call(He,g)!==!1&&A}}return A&&!g.defaultPrevented}function Ue(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function js(o){o.g=Ue(()=>{o.g=null,o.i&&(o.i=!1,js(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class $t extends w{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:js(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(o){w.call(this),this.h=o,this.g={}}p(xt,w);var Vs=[];function J(o){fe(o.g,function(u,f){this.g.hasOwnProperty(f)&&ke(u)},o),o.g={}}xt.prototype.N=function(){xt.Z.N.call(this),J(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ie=a.JSON.stringify,je=a.JSON.parse,we=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ge(){}function Oe(){}var Qe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function At(){k.call(this,"d")}p(At,k);function ts(){k.call(this,"c")}p(ts,k);var O={},G=null;function K(){return G=G||new me}O.Ia="serverreachability";function Ve(o){k.call(this,O.Ia,o)}p(Ve,k);function et(o){const u=K();W(u,new Ve(u))}O.STAT_EVENT="statevent";function Je(o,u){k.call(this,O.STAT_EVENT,o),this.stat=u}p(Je,k);function be(o){const u=K();W(u,new Je(u,o))}O.Ja="timingevent";function St(o,u){k.call(this,O.Ja,o),this.size=u}p(St,k);function vt(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Bt(){this.g=!0}Bt.prototype.ua=function(){this.g=!1};function Nn(o,u,f,g,A,R){o.info(function(){if(o.g)if(R){var M="",oe=R.split("&");for(let xe=0;xe<oe.length;xe++){var He=oe[xe].split("=");if(He.length>1){const Ye=He[0];He=He[1];const Rt=Ye.split("_");M=Rt.length>=2&&Rt[1]=="type"?M+(Ye+"="+He+"&"):M+(Ye+"=redacted&")}}}else M=null;else M=R;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+f+`
`+M})}function Ir(o,u,f,g,A,R,M){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+f+`
`+R+" "+M})}function Re(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ss(o,f)+(g?" "+g:"")})}function qe(o,u){o.info(function(){return"TIMEOUT: "+u})}Bt.prototype.info=function(){};function ss(o,u){if(!o.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var f=R[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let M=1;M<g.length;M++)g[M]=""}}}}return ie(R)}catch{return u}}var Kt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ns={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ds;function qt(){}p(qt,ge),qt.prototype.g=function(){return new XMLHttpRequest},Ds=new qt;function Rn(o){return encodeURIComponent(String(o))}function ff(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function rs(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new xt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nc}function nc(){this.i=null,this.g="",this.h=!1}var rc={},Xi={};function Zi(o,u,f){o.M=1,o.A=Sr(Nt(u)),o.u=f,o.R=!0,ic(o,null)}function ic(o,u){o.F=Date.now(),Ar(o),o.B=Nt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),bc(f.i,"t",g),o.C=0,f=o.j.L,o.h=new nc,o.g=Oc(o.j,f?u:null,!o.u),o.P>0&&(o.O=new $t(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Vs[0]=A.toString()),A=Vs);for(let R=0;R<A.length;R++){const M=Be(f,A[R],g||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.J?le(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),et(),Nn(o.i,o.v,o.B,o.l,o.S,o.u)}rs.prototype.ba=function(o){o=o.target;const u=this.O;u&&as(o)==3?u.j():this.Y(o)},rs.prototype.Y=function(o){try{if(o==this.g)e:{const oe=as(this.g),He=this.g.ya(),xe=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Tc(this.g)))){this.K||oe!=4||He==7||(He==8||xe<=0?et(3):et(2)),eo(this);var u=this.g.ca();this.X=u;var f=mf(this);if(this.o=u==200,Ir(this.i,this.v,this.B,this.l,this.S,oe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var R=g;break t}}R=null}if(o=R)Re(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,to(this,o);else{this.o=!1,this.m=3,be(12),Os(this),Pn(this);break e}}if(this.R){o=!0;let Ye;for(;!this.K&&this.C<f.length;)if(Ye=pf(this,f),Ye==Xi){oe==4&&(this.m=4,be(14),o=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==rc){this.m=4,be(15),Re(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Re(this.i,this.l,Ye,null),to(this,Ye);if(oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,be(16),o=!1),this.o=this.o&&o,!o)Re(this.i,this.l,f,"[Invalid Chunked Response]"),Os(this),Pn(this);else if(f.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),lo(M),M.P=!0,be(11))}}else Re(this.i,this.l,f,null),to(this,f);oe==4&&Os(this),this.o&&!this.K&&(oe==4?Cc(this.j,this):(this.o=!1,Ar(this)))}else Nf(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),Os(this),Pn(this)}}}catch{}finally{}};function mf(o){if(!oc(o))return o.g.la();const u=Tc(o.g);if(u==="")return"";let f="";const g=u.length,A=as(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Os(o),Pn(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<g;R++)o.h.h=!0,f+=o.h.i.decode(u[R],{stream:!(A&&R==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function oc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function pf(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Xi:(f=Number(u.substring(f,g)),isNaN(f)?rc:(g+=1,g+f>u.length?Xi:(u=u.slice(g,g+f),o.C=g+f,u)))}rs.prototype.cancel=function(){this.K=!0,Os(this)};function Ar(o){o.T=Date.now()+o.H,ac(o,o.H)}function ac(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=vt(h(o.aa,o),u)}function eo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}rs.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(qe(this.i,this.B),this.M!=2&&(et(),be(17)),Os(this),this.m=2,Pn(this)):ac(this,this.T-o)};function Pn(o){o.j.I==0||o.K||Cc(o.j,o)}function Os(o){eo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,J(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function to(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||so(f.h,o))){if(!o.L&&so(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)jr(f),Pr(f);else break e;co(f),be(18)}}else f.xa=A[1],0<f.xa-f.K&&A[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=vt(h(f.Va,f),6e3));uc(f.h)<=1&&f.ta&&(f.ta=void 0)}else Ms(f,11)}else if((o.L||f.g==o)&&jr(f),!v(u))for(A=f.Ba.g.parse(u),u=0;u<A.length;u++){let xe=A[u];const Ye=xe[0];if(!(Ye<=f.K))if(f.K=Ye,xe=xe[1],f.I==2)if(xe[0]=="c"){f.M=xe[1],f.ba=xe[2];const Rt=xe[3];Rt!=null&&(f.ka=Rt,f.j.info("VER="+f.ka));const Us=xe[4];Us!=null&&(f.za=Us,f.j.info("SVER="+f.za));const cs=xe[5];cs!=null&&typeof cs=="number"&&cs>0&&(g=1.5*cs,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const ls=o.g;if(ls){const Dr=ls.g?ls.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var R=g.h;R.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(no(R,R.h),R.h=null))}if(g.G){const uo=ls.g?ls.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(g.wa=uo,Ie(g.J,g.G,uo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var M=o;if(g.na=Dc(g,g.L?g.ba:null,g.W),M.L){dc(g.h,M);var oe=M,He=g.O;He&&(oe.H=He),oe.D&&(eo(oe),Ar(oe)),g.g=M}else Rc(g);f.i.length>0&&Cr(f)}else xe[0]!="stop"&&xe[0]!="close"||Ms(f,7);else f.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Ms(f,7):ao(f):xe[0]!="noop"&&f.l&&f.l.qa(xe),f.A=0)}}et(4)}catch{}}var gf=class{constructor(o,u){this.g=o,this.map=u}};function cc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uc(o){return o.h?1:o.g?o.g.size:0}function so(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function no(o,u){o.g?o.g.add(u):o.h=u}function dc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}cc.prototype.cancel=function(){if(this.i=hc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return I(o.i)}var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yf(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let A,R=null;g>=0?(A=o[f].substring(0,g),R=o[f].substring(g+1)):A=o[f],u(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function is(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof is?(this.l=o.l,Cn(this,o.j),this.o=o.o,this.g=o.g,jn(this,o.u),this.h=o.h,ro(this,_c(o.i)),this.m=o.m):o&&(u=String(o).match(fc))?(this.l=!1,Cn(this,u[1]||"",!0),this.o=Vn(u[2]||""),this.g=Vn(u[3]||"",!0),jn(this,u[4]),this.h=Vn(u[5]||"",!0),ro(this,u[6]||"",!0),this.m=Vn(u[7]||"")):(this.l=!1,this.i=new On(null,this.l))}is.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Dn(u,mc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Dn(u,mc,!0),"@"),o.push(Rn(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Dn(f,f.charAt(0)=="/"?vf:_f,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Dn(f,xf)),o.join("")},is.prototype.resolve=function(o){const u=Nt(this);let f=!!o.j;f?Cn(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)jn(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=u.h.lastIndexOf("/");A!=-1&&(g=u.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let M=0;M<A.length;){const oe=A[M++];oe=="."?g&&M==A.length&&R.push(""):oe==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),g&&M==A.length&&R.push("")):(R.push(oe),g=!0)}g=R.join("/")}else g=A}return f?u.h=g:f=o.i.toString()!=="",f?ro(u,_c(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Nt(o){return new is(o)}function Cn(o,u,f){o.j=f?Vn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function jn(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ro(o,u,f){u instanceof On?(o.i=u,wf(o.i,o.l)):(f||(u=Dn(u,kf)),o.i=new On(u,o.l))}function Ie(o,u,f){o.i.set(u,f)}function Sr(o){return Ie(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Vn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Dn(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,bf),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function bf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var mc=/[#\/\?@]/g,_f=/[#\?:]/g,vf=/[#\?]/g,kf=/[#\?@]/g,xf=/#/g;function On(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ls(o){o.g||(o.g=new Map,o.h=0,o.i&&yf(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}s=On.prototype,s.add=function(o,u){Ls(this),this.i=null,o=Zs(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function pc(o,u){Ls(o),u=Zs(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function gc(o,u){return Ls(o),u=Zs(o,u),o.g.has(u)}s.forEach=function(o,u){Ls(this),this.g.forEach(function(f,g){f.forEach(function(A){o.call(u,A,g,this)},this)},this)};function yc(o,u){Ls(o);let f=[];if(typeof u=="string")gc(o,u)&&(f=f.concat(o.g.get(Zs(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}s.set=function(o,u){return Ls(this),this.i=null,o=Zs(this,o),gc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},s.get=function(o,u){return o?(o=yc(this,o),o.length>0?String(o[0]):u):u};function bc(o,u,f){pc(o,u),f.length>0&&(o.i=null,o.g.set(Zs(o,u),I(f)),o.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const A=Rn(f);f=yc(this,f);for(let R=0;R<f.length;R++){let M=A;f[R]!==""&&(M+="="+Rn(f[R])),o.push(M)}}return this.i=o.join("&")};function _c(o){const u=new On;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Zs(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function wf(o,u){u&&!o.j&&(Ls(o),o.i=null,o.g.forEach(function(f,g){const A=g.toLowerCase();g!=A&&(pc(this,g),bc(this,A,f))},o)),o.j=u}function Ef(o,u){const f=new Bt;if(a.Image){const g=new Image;g.onload=m(os,f,"TestLoadImage: loaded",!0,u,g),g.onerror=m(os,f,"TestLoadImage: error",!1,u,g),g.onabort=m(os,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(os,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Tf(o,u){const f=new Bt,g=new AbortController,A=setTimeout(()=>{g.abort(),os(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(R=>{clearTimeout(A),R.ok?os(f,"TestPingServer: ok",!0,u):os(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),os(f,"TestPingServer: error",!1,u)})}function os(o,u,f,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(f)}catch{}}function If(){this.g=new we}function io(o){this.i=o.Sb||null,this.h=o.ab||!1}p(io,ge),io.prototype.g=function(){return new Nr(this.i,this.h)};function Nr(o,u){me.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Nr,me),s=Nr.prototype,s.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Mn(this)},s.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},s.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function vc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}s.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ln(this):Mn(this),this.readyState==3&&vc(this)}},s.Oa=function(o){this.g&&(this.response=this.responseText=o,Ln(this))},s.Na=function(o){this.g&&(this.response=o,Ln(this))},s.ga=function(){this.g&&Ln(this)};function Ln(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Mn(o)}s.setRequestHeader=function(o,u){this.A.append(o,u)},s.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Mn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function kc(o){let u="";return fe(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function oo(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=kc(f),typeof o=="string"?f!=null&&Rn(f):Ie(o,u,f))}function De(o){me.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(De,me);var Af=/^https?$/i,Sf=["POST","PUT"];s=De.prototype,s.Fa=function(o){this.H=o},s.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ds.g(),this.g.onreadystatechange=b(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){xc(this,R);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)f.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())f.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Sf,u,void 0)>=0)||g||A||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of f)this.g.setRequestHeader(R,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){xc(this,R)}};function xc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,wc(o),Rr(o)}function wc(o){o.A||(o.A=!0,W(o,"complete"),W(o,"error"))}s.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,W(this,"complete"),W(this,"abort"),Rr(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),De.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Ec(this):this.Xa())},s.Xa=function(){Ec(this)};function Ec(o){if(o.h&&typeof i<"u"){if(o.v&&as(o)==4)setTimeout(o.Ca.bind(o),0);else if(W(o,"readystatechange"),as(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=R===0){let M=String(o.D).match(fc)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),g=!Af.test(M?M.toLowerCase():"")}f=g}if(f)W(o,"complete"),W(o,"success");else{o.o=6;try{var A=as(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",wc(o)}}finally{Rr(o)}}}}function Rr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||W(o,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function as(o){return o.g?o.g.readyState:0}s.ca=function(){try{return as(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),je(u)}};function Tc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nf(o){const u={};o=(o.g&&as(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(v(o[g]))continue;var f=ff(o[g]);const A=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=u[A]||[];u[A]=R,R.push(f)}Z(u,function(g){return g.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ic(o){this.za=0,this.i=[],this.j=new Bt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Un("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Un("baseRetryDelayMs",5e3,o),this.Za=Un("retryDelaySeedMs",1e4,o),this.Ta=Un("forwardChannelMaxRetries",2,o),this.va=Un("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new cc(o&&o.concurrentRequestLimit),this.Ba=new If,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ic.prototype,s.ka=8,s.I=1,s.connect=function(o,u,f,g){be(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Dc(this,null,this.W),Cr(this)};function ao(o){if(Ac(o),o.I==3){var u=o.V++,f=Nt(o.J);if(Ie(f,"SID",o.M),Ie(f,"RID",u),Ie(f,"TYPE","terminate"),Fn(o,f),u=new rs(o,o.j,u),u.M=2,u.A=Sr(Nt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=Oc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ar(u)}Vc(o)}function Pr(o){o.g&&(lo(o),o.g.cancel(),o.g=null)}function Ac(o){Pr(o),o.v&&(a.clearTimeout(o.v),o.v=null),jr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Cr(o){if(!lc(o.h)&&!o.m){o.m=!0;var u=o.Ea;H||y(),Y||(H(),Y=!0),x.add(u,o),o.D=0}}function Rf(o,u){return uc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=vt(h(o.Ea,o,u),jc(o,o.D)),o.D++,!0)}s.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new rs(this,this.j,o);let R=this.o;if(this.U&&(R?(R=le(R),de(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Nc(this,A,u),f=Nt(this.J),Ie(f,"RID",o),Ie(f,"CVER",22),this.G&&Ie(f,"X-HTTP-Session-Id",this.G),Fn(this,f),R&&(this.R?u="headers="+Rn(kc(R))+"&"+u:this.u&&oo(f,this.u,R)),no(this.h,A),this.Ra&&Ie(f,"TYPE","init"),this.S?(Ie(f,"$req",u),Ie(f,"SID","null"),A.U=!0,Zi(A,f,null)):Zi(A,f,u),this.I=2}}else this.I==3&&(o?Sc(this,o):this.i.length==0||lc(this.h)||Sc(this))};function Sc(o,u){var f;u?f=u.l:f=o.V++;const g=Nt(o.J);Ie(g,"SID",o.M),Ie(g,"RID",f),Ie(g,"AID",o.K),Fn(o,g),o.u&&o.o&&oo(g,o.u,o.o),f=new rs(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Nc(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),no(o.h,f),Zi(f,g,u)}function Fn(o,u){o.H&&fe(o.H,function(f,g){Ie(u,g,f)}),o.l&&fe({},function(f,g){Ie(u,g,f)})}function Nc(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let oe=-1;for(;;){const He=["count="+f];oe==-1?f>0?(oe=A[0].g,He.push("ofs="+oe)):oe=0:He.push("ofs="+oe);let xe=!0;for(let Ye=0;Ye<f;Ye++){var R=A[Ye].g;const Rt=A[Ye].map;if(R-=oe,R<0)oe=Math.max(0,A[Ye].g-100),xe=!1;else try{R="req"+R+"_"||"";try{var M=Rt instanceof Map?Rt:Object.entries(Rt);for(const[Us,cs]of M){let ls=cs;l(cs)&&(ls=ie(cs)),He.push(R+Us+"="+encodeURIComponent(ls))}}catch(Us){throw He.push(R+"type="+encodeURIComponent("_badmap")),Us}}catch{g&&g(Rt)}}if(xe){M=He.join("&");break e}}M=void 0}return o=o.i.splice(0,f),u.G=o,M}function Rc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;H||y(),Y||(H(),Y=!0),x.add(u,o),o.A=0}}function co(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=vt(h(o.Da,o),jc(o,o.A)),o.A++,!0)}s.Da=function(){if(this.v=null,Pc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=vt(h(this.Wa,this),o)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),Pr(this),Pc(this))};function lo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Pc(o){o.g=new rs(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Nt(o.na);Ie(u,"RID","rpc"),Ie(u,"SID",o.M),Ie(u,"AID",o.K),Ie(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ie(u,"TO",o.ia),Ie(u,"TYPE","xmlhttp"),Fn(o,u),o.u&&o.o&&oo(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Sr(Nt(u)),f.u=null,f.R=!0,ic(f,o)}s.Va=function(){this.C!=null&&(this.C=null,Pr(this),co(this),be(19))};function jr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Cc(o,u){var f=null;if(o.g==u){jr(o),lo(o),o.g=null;var g=2}else if(so(o.h,u))f=u.G,dc(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;g=K(),W(g,new St(g,f)),Cr(o)}else Rc(o);else if(A=u.m,A==3||A==0&&u.X>0||!(g==1&&Rf(o,u)||g==2&&co(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),A){case 1:Ms(o,5);break;case 4:Ms(o,10);break;case 3:Ms(o,6);break;default:Ms(o,2)}}}function jc(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function Ms(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const A=!g;g=new is(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Cn(g,"https"),Sr(g),A?Ef(g.toString(),f):Tf(g.toString(),f)}else be(2);o.I=0,o.l&&o.l.pa(u),Vc(o),Ac(o)}s.bb=function(o){o?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function Vc(o){if(o.I=0,o.ja=[],o.l){const u=hc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.oa()}}function Dc(o,u,f){var g=f instanceof is?Nt(f):new is(f);if(g.g!="")u&&(g.g=u+"."+g.g),jn(g,g.u);else{var A=a.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const R=new is(null);g&&Cn(R,g),u&&(R.g=u),A&&jn(R,A),f&&(R.h=f),g=R}return f=o.G,u=o.wa,f&&u&&Ie(g,f,u),Ie(g,"VER",o.ka),Fn(o,g),g}function Oc(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new De(new io({ab:f})):new De(o.ma),u.Fa(o.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lc(){}s=Lc.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Vr(){}Vr.prototype.g=function(o,u){return new pt(o,u)};function pt(o,u){me.call(this),this.g=new Ic(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!v(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new en(this)}p(pt,me),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){ao(this.g)},pt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ie(o),o=f);u.i.push(new gf(u.Ya++,o)),u.I==3&&Cr(u)},pt.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,pt.Z.N.call(this)};function Mc(o){At.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Mc,At);function Uc(){ts.call(this),this.status=1}p(Uc,ts);function en(o){this.g=o}p(en,Lc),en.prototype.ra=function(){W(this.g,"a")},en.prototype.qa=function(o){W(this.g,new Mc(o))},en.prototype.pa=function(o){W(this.g,new Uc)},en.prototype.oa=function(){W(this.g,"b")},Vr.prototype.createWebChannel=Vr.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,jd=function(){return new Vr},Cd=function(){return K()},Pd=O,zo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,Xr=Kt,ns.COMPLETE="complete",Rd=ns,Oe.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",me.prototype.listen=me.prototype.J,Kn=Oe,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,Nd=De}).apply(typeof Ur<"u"?Ur:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let Tn="12.13.0";function kb(s){Tn=s}/**
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
 */const Qs=new fa("@firebase/firestore");function tn(){return Qs.logLevel}function $(s,...e){if(Qs.logLevel<=ue.DEBUG){const t=e.map(wa);Qs.debug(`Firestore (${Tn}): ${s}`,...t)}}function Xt(s,...e){if(Qs.logLevel<=ue.ERROR){const t=e.map(wa);Qs.error(`Firestore (${Tn}): ${s}`,...t)}}function Js(s,...e){if(Qs.logLevel<=ue.WARN){const t=e.map(wa);Qs.warn(`Firestore (${Tn}): ${s}`,...t)}}function wa(s){if(typeof s=="string")return s;try{return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
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
 */function X(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Vd(s,n,t)}function Vd(s,e,t){let n=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Xt(n),new Error(n)}function _e(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||Vd(e,r,n)}function se(s,e){return s}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends es{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ks{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Dd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Eb{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_e(this.o===void 0,42304);let n=this.i;const r=d=>this.i!==n?(n=this.i,t(d)):Promise.resolve();let i=new ks;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ks,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const d=i;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},l=d=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ks)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(_e(typeof n.accessToken=="string",31837,{l:n}),new Dd(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class Tb{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ib{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Tb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ab{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){_e(this.o===void 0,3512);const n=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Rl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(_e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Rl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sb(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Sb(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function ae(s,e){return s<e?-1:s>e?1:0}function $o(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return ko(r)===ko(i)?ae(r,i):ko(r)?1:-1}return ae(s.length,e.length)}const Nb=55296,Rb=57343;function ko(s){const e=s.charCodeAt(0);return e>=Nb&&e<=Rb}function yn(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
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
 */const Pl="__name__";class Pt{constructor(e,t,n){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&X(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=Pt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ae(e.length,t.length)}static compareSegments(e,t){const n=Pt.isNumericId(e),r=Pt.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Pt.extractNumericId(e).compare(Pt.extractNumericId(t)):$o(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vs.fromString(e.substring(4,e.length-2))}}class Pe extends Pt{construct(e,t,n){return new Pe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Pe(t)}static emptyPath(){return new Pe([])}}const Pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Pt{construct(e,t,n){return new nt(e,t,n)}static isValidIdentifier(e){return Pb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pl}static keyField(){return new nt([Pl])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=d,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(n+=l,r++):(i(),r++)}if(i(),a)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(t)}static emptyPath(){return new nt([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Pe.fromString(e))}static fromName(e){return new Q(Pe.fromString(e).popFirst(5))}static empty(){return new Q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Pe(e.slice()))}}/**
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
 */function Cb(s,e,t){if(!t)throw new q(j.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function jb(s,e,t,n){if(e===!0&&n===!0)throw new q(j.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Cl(s){if(!Q.isDocumentKey(s))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Od(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Ta(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":X(12329,{type:typeof s})}function Vt(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ta(s);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function ze(s,e){const t={typeString:s};return e&&(t.value=e),t}function vr(s,e){if(!Od(s))throw new q(j.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const a=s[n];if(r&&typeof a!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new q(j.INVALID_ARGUMENT,t);return!0}/**
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
 */const jl=-62135596800,Vl=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Vl);return new Ae(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jl)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vl}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vr(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:ze("string",Ae._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ae(0,0))}static max(){return new te(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nr=-1;function Vb(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=te.fromTimestamp(n===1e9?new Ae(t+1,0):new Ae(t,n));return new Es(r,Q.empty(),e)}function Db(s){return new Es(s.readTime,s.key,nr)}class Es{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Es(te.min(),Q.empty(),nr)}static max(){return new Es(te.max(),Q.empty(),nr)}}function Ob(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(s.documentKey,e.documentKey),t!==0?t:ae(s.largestBatchId,e.largestBatchId))}/**
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
 */const Lb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function In(s){if(s.code!==j.FAILED_PRECONDITION||s.message!==Lb)throw s;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,n)=>{t(e)}))}static reject(e){return new C(((t,n)=>{n(e)}))}static waitFor(e){return new C(((t,n)=>{let r=0,i=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++i,a&&i===r&&t()}),(d=>n(d)))})),a=!0,i===r&&t()}))}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next((r=>r?C.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new C(((n,r)=>{const i=e.length,a=new Array(i);let l=0;for(let d=0;d<i;d++){const h=d;t(e[h]).next((m=>{a[h]=m,++l,l===i&&n(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new C(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function Ub(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function An(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Oi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oi.ce=-1;/**
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
 */const Ia=-1;function Li(s){return s==null}function mi(s){return s===0&&1/s==-1/0}function Fb(s){return typeof s=="number"&&Number.isInteger(s)&&!mi(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ld="";function zb(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Dl(e)),e=$b(s.get(t),e);return Dl(e)}function $b(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case Ld:t+="";break;default:t+=i}}return t}function Dl(s){return s+Ld+""}/**
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
 */function Ol(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Ps(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Md(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||tt.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fr(this.root,e,this.comparator,!0)}}class Fr{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??tt.RED,this.left=r??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new tt(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ll(this.data.getIterator())}getIteratorFrom(e){return new Ll(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ge(this.comparator);return t.data=e,t}}class Ll{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new bt([])}unionWith(e){let t=new Ge(nt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Ud extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ud("Invalid base64 string: "+i):i}})(e);return new rt(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Bb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(s){if(_e(!!s,39018),typeof s=="string"){let e=0;const t=Bb.exec(s);if(_e(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Le(s.seconds),nanos:Le(s.nanos)}}function Le(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Is(s){return typeof s=="string"?rt.fromBase64String(s):rt.fromUint8Array(s)}/**
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
 */const Fd="server_timestamp",zd="__type__",$d="__previous_value__",Bd="__local_write_time__";function Aa(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[zd])==null?void 0:n.stringValue)===Fd}function Mi(s){const e=s.mapValue.fields[$d];return Aa(e)?Mi(e):e}function rr(s){const e=Ts(s.mapValue.fields[Bd].timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class Kb{constructor(e,t,n,r,i,a,l,d,h,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=p}}const pi="(default)";class ir{constructor(e,t){this.projectId=e,this.database=t||pi}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database===pi}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}function qb(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(s.options.projectId,e)}/**
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
 */const Kd="__type__",Hb="__max__",zr={mapValue:{}},qd="__vector__",gi="value";function As(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Aa(s)?4:Gb(s)?9007199254740991:Wb(s)?10:11:X(28295,{value:s})}function Ut(s,e){if(s===e)return!0;const t=As(s);if(t!==As(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return rr(s).isEqual(rr(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Ts(r.timestampValue),l=Ts(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(r,i){return Is(r.bytesValue).isEqual(Is(i.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(s,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Le(r.doubleValue),l=Le(i.doubleValue);return a===l?mi(a)===mi(l):isNaN(a)&&isNaN(l)}return!1})(s,e);case 9:return yn(s.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Ol(a)!==Ol(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!Ut(a[d],l[d])))return!1;return!0})(s,e);default:return X(52216,{left:s})}}function or(s,e){return(s.values||[]).find((t=>Ut(t,e)))!==void 0}function bn(s,e){if(s===e)return 0;const t=As(s),n=As(e);if(t!==n)return ae(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(s.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Le(i.integerValue||i.doubleValue),d=Le(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1})(s,e);case 3:return Ml(s.timestampValue,e.timestampValue);case 4:return Ml(rr(s),rr(e));case 5:return $o(s.stringValue,e.stringValue);case 6:return(function(i,a){const l=Is(i),d=Is(a);return l.compareTo(d)})(s.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),d=a.split("/");for(let h=0;h<l.length&&h<d.length;h++){const m=ae(l[h],d[h]);if(m!==0)return m}return ae(l.length,d.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ae(Le(i.latitude),Le(a.latitude));return l!==0?l:ae(Le(i.longitude),Le(a.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return Ul(s.arrayValue,e.arrayValue);case 10:return(function(i,a){var b,I,S,P;const l=i.fields||{},d=a.fields||{},h=(b=l[gi])==null?void 0:b.arrayValue,m=(I=d[gi])==null?void 0:I.arrayValue,p=ae(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return p!==0?p:Ul(h,m)})(s.mapValue,e.mapValue);case 11:return(function(i,a){if(i===zr.mapValue&&a===zr.mapValue)return 0;if(i===zr.mapValue)return 1;if(a===zr.mapValue)return-1;const l=i.fields||{},d=Object.keys(l),h=a.fields||{},m=Object.keys(h);d.sort(),m.sort();for(let p=0;p<d.length&&p<m.length;++p){const b=$o(d[p],m[p]);if(b!==0)return b;const I=bn(l[d[p]],h[m[p]]);if(I!==0)return I}return ae(d.length,m.length)})(s.mapValue,e.mapValue);default:throw X(23264,{he:t})}}function Ml(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ae(s,e);const t=Ts(s),n=Ts(e),r=ae(t.seconds,n.seconds);return r!==0?r:ae(t.nanos,n.nanos)}function Ul(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=bn(t[r],n[r]);if(i)return i}return ae(t.length,n.length)}function _n(s){return Bo(s)}function Bo(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=Ts(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return Is(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return Q.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=Bo(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of n)i?i=!1:r+=",",r+=`${a}:${Bo(t.fields[a])}`;return r+"}"})(s.mapValue):X(61005,{value:s})}function Zr(s){switch(As(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mi(s);return e?16+Zr(e):16;case 5:return 2*s.stringValue.length;case 6:return Is(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+Zr(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return Ps(n.fields,((i,a)=>{r+=i.length+Zr(a)})),r})(s.mapValue);default:throw X(13486,{value:s})}}function Ko(s){return!!s&&"integerValue"in s}function Sa(s){return!!s&&"arrayValue"in s}function Fl(s){return!!s&&"nullValue"in s}function zl(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function ei(s){return!!s&&"mapValue"in s}function Wb(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Kd])==null?void 0:n.stringValue)===qd}function Jn(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Ps(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Jn(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jn(s.arrayValue.values[t]);return e}return{...s}}function Gb(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Hb}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(t)}setAll(e){let t=nt.emptyPath(),n={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,n,r),n={},r=[],t=l.popLast()}a?n[l.lastSegment()]=Jn(a):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ei(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ps(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new ft(Jn(this.value))}}function Hd(s){const e=[];return Ps(s.fields,((t,n)=>{const r=new nt([t]);if(ei(n)){const i=Hd(n.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new bt(e)}/**
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
 */class at{constructor(e,t,n,r,i,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new at(e,0,te.min(),te.min(),te.min(),ft.empty(),0)}static newFoundDocument(e,t,n,r){return new at(e,1,t,te.min(),n,r,0)}static newNoDocument(e,t){return new at(e,2,t,te.min(),te.min(),ft.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,te.min(),te.min(),ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function $l(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],a=s.position[r];if(i.field.isKeyField()?n=Q.comparator(Q.fromName(a.referenceValue),t.key):n=bn(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Bl(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Ut(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qb(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class Wd{}class We extends Wd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Yb(e,t,n):t==="array-contains"?new e_(e,n):t==="in"?new t_(e,n):t==="not-in"?new s_(e,n):t==="array-contains-any"?new n_(e,n):new We(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Xb(e,n):new Zb(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bn(t,this.value)):t!==null&&As(this.value)===As(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends Wd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ft(e,t)}matches(e){return Gd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gd(s){return s.op==="and"}function Qd(s){return Jb(s)&&Gd(s)}function Jb(s){for(const e of s.filters)if(e instanceof Ft)return!1;return!0}function qo(s){if(s instanceof We)return s.field.canonicalString()+s.op.toString()+_n(s.value);if(Qd(s))return s.filters.map((e=>qo(e))).join(",");{const e=s.filters.map((t=>qo(t))).join(",");return`${s.op}(${e})`}}function Jd(s,e){return s instanceof We?(function(n,r){return r instanceof We&&n.op===r.op&&n.field.isEqual(r.field)&&Ut(n.value,r.value)})(s,e):s instanceof Ft?(function(n,r){return r instanceof Ft&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,a,l)=>i&&Jd(a,r.filters[l])),!0):!1})(s,e):void X(19439)}function Yd(s){return s instanceof We?(function(t){return`${t.field.canonicalString()} ${t.op} ${_n(t.value)}`})(s):s instanceof Ft?(function(t){return t.op.toString()+" {"+t.getFilters().map(Yd).join(" ,")+"}"})(s):"Filter"}class Yb extends We{constructor(e,t,n){super(e,t,n),this.key=Q.fromName(n.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xb extends We{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Zb extends We{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xd(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>Q.fromName(n.referenceValue)))}class e_ extends We{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sa(t)&&or(t.arrayValue,this.value)}}class t_ extends We{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&or(this.value.arrayValue,t)}}class s_ extends We{constructor(e,t){super(e,"not-in",t)}matches(e){if(or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!or(this.value.arrayValue,t)}}class n_ extends We{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>or(this.value.arrayValue,n)))}}/**
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
 */class r_{constructor(e,t=null,n=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Kl(s,e=null,t=[],n=[],r=null,i=null,a=null){return new r_(s,e,t,n,r,i,a)}function Na(s){const e=se(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>qo(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>_n(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>_n(n))).join(",")),e.Te=t}return e.Te}function Ra(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Qb(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Jd(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Bl(s.startAt,e.startAt)&&Bl(s.endAt,e.endAt)}function Ho(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class Ui{constructor(e,t=null,n=[],r=[],i=null,a="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function i_(s,e,t,n,r,i,a,l){return new Ui(s,e,t,n,r,i,a,l)}function Fi(s){return new Ui(s)}function ql(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function o_(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function a_(s){return s.collectionGroup!==null}function Yn(s){const e=se(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ge(nt.comparator);return a.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new bi(i,n))})),t.has(nt.keyField().canonicalString())||e.Ie.push(new bi(nt.keyField(),n))}return e.Ie}function Dt(s){const e=se(s);return e.Ee||(e.Ee=c_(e,Yn(s))),e.Ee}function c_(s,e){if(s.limitType==="F")return Kl(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new bi(r.field,i)}));const t=s.endAt?new yi(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new yi(s.startAt.position,s.startAt.inclusive):null;return Kl(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Wo(s,e,t){return new Ui(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function zi(s,e){return Ra(Dt(s),Dt(e))&&s.limitType===e.limitType}function Zd(s){return`${Na(Dt(s))}|lt:${s.limitType}`}function sn(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>Yd(r))).join(", ")}]`),Li(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>_n(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>_n(r))).join(",")),`Target(${n})`})(Dt(s))}; limitType=${s.limitType})`}function $i(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of Yn(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(a,l,d){const h=$l(a,l,d);return a.inclusive?h<=0:h<0})(n.startAt,Yn(n),r)||n.endAt&&!(function(a,l,d){const h=$l(a,l,d);return a.inclusive?h>=0:h>0})(n.endAt,Yn(n),r))})(s,e)}function l_(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function eh(s){return(e,t)=>{let n=!1;for(const r of Yn(s)){const i=u_(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function u_(s,e,t){const n=s.field.isKeyField()?Q.comparator(e.key,t.key):(function(i,a,l){const d=a.data.field(i),h=l.data.field(i);return d!==null&&h!==null?bn(d,h):X(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return X(19790,{direction:s.dir})}}/**
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
 */class Ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Md(this.inner)}size(){return this.innerSize}}/**
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
 */const d_=new Se(Q.comparator);function Zt(){return d_}const th=new Se(Q.comparator);function qn(...s){let e=th;for(const t of s)e=e.insert(t.key,t);return e}function sh(s){let e=th;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function $s(){return Xn()}function nh(){return Xn()}function Xn(){return new Ys((s=>s.toString()),((s,e)=>s.isEqual(e)))}const h_=new Se(Q.comparator),f_=new Ge(Q.comparator);function ce(...s){let e=f_;for(const t of s)e=e.add(t);return e}const m_=new Ge(ae);function p_(){return m_}/**
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
 */function Pa(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mi(e)?"-0":e}}function rh(s){return{integerValue:""+s}}function g_(s,e){return Fb(e)?rh(e):Pa(s,e)}/**
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
 */class Bi{constructor(){this._=void 0}}function y_(s,e,t){return s instanceof ar?(function(r,i){const a={fields:{[zd]:{stringValue:Fd},[Bd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Aa(i)&&(i=Mi(i)),i&&(a.fields[$d]=i),{mapValue:a}})(t,e):s instanceof cr?oh(s,e):s instanceof lr?ah(s,e):(function(r,i){const a=ih(r,i),l=Hl(a)+Hl(r.Ae);return Ko(a)&&Ko(r.Ae)?rh(l):Pa(r.serializer,l)})(s,e)}function b_(s,e,t){return s instanceof cr?oh(s,e):s instanceof lr?ah(s,e):t}function ih(s,e){return s instanceof _i?(function(n){return Ko(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class ar extends Bi{}class cr extends Bi{constructor(e){super(),this.elements=e}}function oh(s,e){const t=ch(e);for(const n of s.elements)t.some((r=>Ut(r,n)))||t.push(n);return{arrayValue:{values:t}}}class lr extends Bi{constructor(e){super(),this.elements=e}}function ah(s,e){let t=ch(e);for(const n of s.elements)t=t.filter((r=>!Ut(r,n)));return{arrayValue:{values:t}}}class _i extends Bi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Hl(s){return Le(s.integerValue||s.doubleValue)}function ch(s){return Sa(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class __{constructor(e,t){this.field=e,this.transform=t}}function v_(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof cr&&r instanceof cr||n instanceof lr&&r instanceof lr?yn(n.elements,r.elements,Ut):n instanceof _i&&r instanceof _i?Ut(n.Ae,r.Ae):n instanceof ar&&r instanceof ar})(s.transform,e.transform)}class k_{constructor(e,t){this.version=e,this.transformResults=t}}class Ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Ki{}function lh(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new dh(s.key,Ot.none()):new kr(s.key,s.data,Ot.none());{const t=s.data,n=ft.empty();let r=new Ge(nt.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),r=r.add(i)}return new Cs(s.key,n,new bt(r.toArray()),Ot.none())}}function x_(s,e,t){s instanceof kr?(function(r,i,a){const l=r.value.clone(),d=Gl(r.fieldTransforms,i,a.transformResults);l.setAll(d),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(s,e,t):s instanceof Cs?(function(r,i,a){if(!ti(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Gl(r.fieldTransforms,i,a.transformResults),d=i.data;d.setAll(uh(r)),d.setAll(l),i.convertToFoundDocument(a.version,d).setHasCommittedMutations()})(s,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Zn(s,e,t,n){return s instanceof kr?(function(i,a,l,d){if(!ti(i.precondition,a))return l;const h=i.value.clone(),m=Ql(i.fieldTransforms,d,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(s,e,t,n):s instanceof Cs?(function(i,a,l,d){if(!ti(i.precondition,a))return l;const h=Ql(i.fieldTransforms,d,a),m=a.data;return m.setAll(uh(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(s,e,t,n):(function(i,a,l){return ti(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(s,e,t)}function w_(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=ih(n.transform,r||null);i!=null&&(t===null&&(t=ft.empty()),t.set(n.field,i))}return t||null}function Wl(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&yn(n,r,((i,a)=>v_(i,a)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class kr extends Ki{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cs extends Ki{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uh(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function Gl(s,e,t){const n=new Map;_e(s.length===t.length,32656,{Ve:t.length,de:s.length});for(let r=0;r<t.length;r++){const i=s[r],a=i.transform,l=e.data.field(i.field);n.set(i.field,b_(a,l,t[r]))}return n}function Ql(s,e,t){const n=new Map;for(const r of s){const i=r.transform,a=t.data.field(r.field);n.set(r.field,y_(i,a,e))}return n}class dh extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E_ extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class T_{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&x_(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Zn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Zn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=nh();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const d=lh(a,l);d!==null&&n.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(te.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ce())}isEqual(e){return this.batchId===e.batchId&&yn(this.mutations,e.mutations,((t,n)=>Wl(t,n)))&&yn(this.baseMutations,e.baseMutations,((t,n)=>Wl(t,n)))}}class Ca{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){_e(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=(function(){return h_})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,n[a].version);return new Ca(e,t,n,r)}}/**
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
 */class I_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class A_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Fe,he;function S_(s){switch(s){case j.OK:return X(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return X(15467,{code:s})}}function hh(s){if(s===void 0)return Xt("GRPC error has no .code"),j.UNKNOWN;switch(s){case Fe.OK:return j.OK;case Fe.CANCELLED:return j.CANCELLED;case Fe.UNKNOWN:return j.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return j.INTERNAL;case Fe.UNAVAILABLE:return j.UNAVAILABLE;case Fe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Fe.NOT_FOUND:return j.NOT_FOUND;case Fe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Fe.ABORTED:return j.ABORTED;case Fe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Fe.DATA_LOSS:return j.DATA_LOSS;default:return X(39323,{code:s})}}(he=Fe||(Fe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function N_(){return new TextEncoder}/**
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
 */const R_=new vs([4294967295,4294967295],0);function Jl(s){const e=N_().encode(s),t=new Sd;return t.update(e),new Uint8Array(t.digest())}function Yl(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vs([t,n],0),new vs([r,i],0)]}class ja{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Hn(`Invalid padding: ${t}`);if(n<0)throw new Hn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vs.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(vs.fromNumber(n)));return r.compare(R_)===1&&(r=new vs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Jl(e),[n,r]=Yl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,r,i);if(!this.we(a))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ja(i,r,t);return n.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=Jl(e),[n,r]=Yl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,wr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new xr(te.min(),r,new Se(ae),Zt(),ce())}}class wr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new wr(n,t,ce(),ce(),ce())}}/**
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
 */class si{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class fh{constructor(e,t){this.targetId=e,this.Ce=t}}class mh{constructor(e,t,n=rt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Xl{constructor(){this.ve=0,this.Fe=Zl(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),t=ce(),n=ce();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:X(38017,{changeType:i})}})),new wr(this.Me,this.xe,e,t,n)}Ke(){this.Oe=!1,this.Fe=Zl()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class P_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Zt(),this.Je=$r(),this.He=$r(),this.Ze=new Se(ae)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Ho(i))if(n===0){const a=new Q(i.path);this.et(t,a,at.newNoDocument(a,te.min()))}else _e(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),d=l?this.ct(l,e,a):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Is(n).toUint8Array()}catch(d){if(d instanceof Ud)return Js("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new ja(a,r,i)}catch(d){return Js(d instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Ho(l.target)){const d=new Q(l.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,at.newNoDocument(d,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}}));let n=ce();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new xr(e,t,this.Ze,this.je,n);return this.je=Zt(),this.Je=$r(),this.He=$r(),this.Ze=new Se(ae),r}Ye(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Xl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Ge(ae),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ge(ae),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function $r(){return new Se(Q.comparator)}function Zl(){return new Se(Q.comparator)}const C_={asc:"ASCENDING",desc:"DESCENDING"},j_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Go(s,e){return s.useProto3Json||Li(e)?e:{value:e}}function vi(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ph(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function O_(s,e){return vi(s,e.toTimestamp())}function Lt(s){return _e(!!s,49232),te.fromTimestamp((function(t){const n=Ts(t);return new Ae(n.seconds,n.nanos)})(s))}function Va(s,e){return Qo(s,e).canonicalString()}function Qo(s,e){const t=(function(r){return new Pe(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function gh(s){const e=Pe.fromString(s);return _e(kh(e),10190,{key:e.toString()}),e}function Jo(s,e){return Va(s.databaseId,e.path)}function xo(s,e){const t=gh(e);if(t.get(1)!==s.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new Q(bh(t))}function yh(s,e){return Va(s.databaseId,e)}function L_(s){const e=gh(s);return e.length===4?Pe.emptyPath():bh(e)}function Yo(s){return new Pe(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function bh(s){return _e(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function eu(s,e,t){return{name:Jo(s,e),fields:t.value.mapValue.fields}}function M_(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,m){return h.useProto3Json?(_e(m===void 0||typeof m=="string",58123),rt.fromBase64String(m||"")):(_e(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),rt.fromUint8Array(m||new Uint8Array))})(s,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const m=h.code===void 0?j.UNKNOWN:hh(h.code);return new q(m,h.message||"")})(a);t=new mh(n,r,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=xo(s,n.document.name),i=Lt(n.document.updateTime),a=n.document.createTime?Lt(n.document.createTime):te.min(),l=new ft({mapValue:{fields:n.document.fields}}),d=at.newFoundDocument(r,i,a,l),h=n.targetIds||[],m=n.removedTargetIds||[];t=new si(h,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=xo(s,n.document),i=n.readTime?Lt(n.readTime):te.min(),a=at.newNoDocument(r,i),l=n.removedTargetIds||[];t=new si([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=xo(s,n.document),i=n.removedTargetIds||[];t=new si([],i,r,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,a=new A_(r,i),l=n.targetId;t=new fh(l,a)}}return t}function U_(s,e){let t;if(e instanceof kr)t={update:eu(s,e.key,e.value)};else if(e instanceof dh)t={delete:Jo(s,e.key)};else if(e instanceof Cs)t={update:eu(s,e.key,e.data),updateMask:G_(e.fieldMask)};else{if(!(e instanceof E_))return X(16599,{dt:e.type});t={verify:Jo(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,a){const l=a.transform;if(l instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw X(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:O_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)})(s,e.precondition)),t}function F_(s,e){return s&&s.length>0?(_e(e!==void 0,14353),s.map((t=>(function(r,i){let a=r.updateTime?Lt(r.updateTime):Lt(i);return a.isEqual(te.min())&&(a=Lt(i)),new k_(a,r.transformResults||[])})(t,e)))):[]}function z_(s,e){return{documents:[yh(s,e.path)]}}function $_(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=yh(s,r);const i=(function(h){if(h.length!==0)return vh(Ft.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((m=>(function(b){return{field:nn(b.field),direction:q_(b.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Go(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function B_(s){let e=L_(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){_e(n===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(p){const b=_h(p);return b instanceof Ft&&Qd(b)?b.getFilters():[b]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((b=>(function(S){return new bi(rn(S.field),(function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(b)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let b;return b=typeof p=="object"?p.value:p,Li(b)?null:b})(t.limit));let d=null;t.startAt&&(d=(function(p){const b=!!p.before,I=p.values||[];return new yi(I,b)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const b=!p.before,I=p.values||[];return new yi(I,b)})(t.endAt)),i_(e,r,a,i,l,"F",d,h)}function K_(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _h(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=rn(t.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=rn(t.unaryFilter.field);return We.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rn(t.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rn(t.unaryFilter.field);return We.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(s):s.fieldFilter!==void 0?(function(t){return We.create(rn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return Ft.create(t.compositeFilter.filters.map((n=>_h(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(t.compositeFilter.op))})(s):X(30097,{filter:s})}function q_(s){return C_[s]}function H_(s){return j_[s]}function W_(s){return V_[s]}function nn(s){return{fieldPath:s.canonicalString()}}function rn(s){return nt.fromServerFormat(s.fieldPath)}function vh(s){return s instanceof We?(function(t){if(t.op==="=="){if(zl(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NAN"}};if(Fl(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zl(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NAN"}};if(Fl(t.value))return{unaryFilter:{field:nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(t.field),op:H_(t.op),value:t.value}}})(s):s instanceof Ft?(function(t){const n=t.getFilters().map((r=>vh(r)));return n.length===1?n[0]:{compositeFilter:{op:W_(t.op),filters:n}}})(s):X(54877,{filter:s})}function G_(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function kh(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function xh(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}/**
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
 */class Gt{constructor(e,t,n,r,i=te.min(),a=te.min(),l=rt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Q_{constructor(e){this.yt=e}}function J_(s){const e=B_({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Wo(e,e.limit,"L"):e}/**
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
 */class Y_{constructor(){this.bn=new X_}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Es.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class X_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ge(Pe.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ge(Pe.comparator)).toArray()}}/**
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
 */const tu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wh=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(wh,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class Ss{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ss(0)}static ar(){return new Ss(-1)}}/**
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
 */const su="LruGarbageCollector",Z_=1048576;function nu([s,e],[t,n]){const r=ae(s,t);return r===0?ae(e,n):r}class ev{constructor(e){this.Pr=e,this.buffer=new Ge(nu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();nu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(su,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?$(su,"Ignoring IndexedDB error during garbage collection: ",t):await In(t)}await this.Ar(3e5)}))}}class sv{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Oi.ce);const n=new ev(t);return this.Vr.forEachTarget(e,(r=>n.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>n.Er(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(tu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tu):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,a,l,d,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(n=p,l=Date.now(),this.removeTargets(e,n,t)))).next((p=>(i=p,d=Date.now(),this.removeOrphanedDocuments(e,n)))).next((p=>(h=Date.now(),tn()<=ue.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(d-l)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function nv(s,e){return new sv(s,e)}/**
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
 */class rv{constructor(){this.changes=new Ys((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ov{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&Zn(n.mutation,r,bt.empty(),Ae.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,ce()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=ce()){const r=$s();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let a=qn();return i.forEach(((l,d)=>{a=a.insert(l,d.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=$s();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ce())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,n,r){let i=Zt();const a=Xn(),l=(function(){return Xn()})();return t.forEach(((d,h)=>{const m=n.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof Cs)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),Zn(m.mutation,h,m.mutation.getFieldMask(),Ae.now())):a.set(h.key,bt.empty())})),this.recalculateAndSaveOverlays(e,i).next((d=>(d.forEach(((h,m)=>a.set(h,m))),t.forEach(((h,m)=>l.set(h,new iv(m,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const n=Xn();let r=new Se(((a,l)=>a-l)),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let m=n.get(d)||bt.empty();m=l.applyToLocalView(h,m),n.set(d,m);const p=(r.get(l.batchId)||ce()).add(d);r=r.insert(l.batchId,p)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,m=d.value,p=nh();m.forEach((b=>{if(!i.has(b)){const I=lh(t.get(b),n.get(b));I!==null&&p.set(b,I),i=i.add(b)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return C.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return o_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):a_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):C.resolve($s());let l=nr,d=i;return a.next((h=>C.forEach(h,((m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next((b=>{d=d.insert(m,b)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,d,h,ce()))).next((m=>({batchId:l,changes:sh(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next((n=>{let r=qn();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(e,i).next((l=>C.forEach(l,(d=>{const h=(function(p,b){return new Ui(b,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,r).next((m=>{m.forEach(((p,b)=>{a=a.insert(p,b)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((a=>{i.forEach(((d,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,at.newInvalidDocument(m)))}));let l=qn();return a.forEach(((d,h)=>{const m=i.get(d);m!==void 0&&Zn(m.mutation,h,bt.empty(),Ae.now()),$i(t,h)&&(l=l.insert(d,h))})),l}))}}/**
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
 */class av{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Lt(r.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:J_(r.bundledQuery),readTime:Lt(r.readTime)}})(t)),C.resolve()}}/**
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
 */class cv{constructor(){this.overlays=new Se(Q.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$s();return C.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.St(e,t,i)})),C.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const r=$s(),i=t.length+1,a=new Q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&d.largestBatchId>n&&r.set(d.getKey(),d)}return C.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Se(((h,m)=>h-m));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let m=i.get(h.largestBatchId);m===null&&(m=$s(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=$s(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,m)=>l.set(h,m))),!(l.size()>=r)););return C.resolve(l)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new I_(t,n));let i=this.Lr.get(t);i===void 0&&(i=ce(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}/**
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
 */class lv{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class Da{constructor(){this.kr=new Ge(Xe.Kr),this.qr=new Ge(Xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new Xe(e,t);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new Xe(e,t))}Qr(e,t){e.forEach((n=>this.removeReference(n,t)))}Gr(e){const t=new Q(new Pe([])),n=new Xe(t,e),r=new Xe(t,e+1),i=[];return this.qr.forEachInRange([n,r],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Q(new Pe([])),n=new Xe(t,e),r=new Xe(t,e+1);let i=ce();return this.qr.forEachInRange([n,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Xe(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Xe{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return Q.comparator(e.key,t.key)||ae(e.Jr,t.Jr)}static Ur(e,t){return ae(e.Jr,t.Jr)||Q.comparator(e.key,t.key)}}/**
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
 */class uv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Ge(Xe.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new T_(i,t,n,r);this.mutationQueue.push(a);for(const l of r)this.Hr=this.Hr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ia:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xe(t,0),r=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],(a=>{const l=this.Zr(a.Jr);i.push(l)})),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ge(ae);return t.forEach((r=>{const i=new Xe(r,0),a=new Xe(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(l=>{n=n.add(l.Jr)}))})),C.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Q.isDocumentKey(i)||(i=i.child(""));const a=new Xe(new Q(i),0);let l=new Ge(ae);return this.Hr.forEachWhile((d=>{const h=d.key.path;return!!n.isPrefixOf(h)&&(h.length===r&&(l=l.add(d.Jr)),!0)}),a),C.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((n=>{const r=this.Zr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){_e(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return C.forEach(t.mutations,(r=>{const i=new Xe(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=n}))}nr(e){}containsKey(e,t){const n=new Xe(t,0),r=this.Hr.firstAfterOrEqual(n);return C.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class dv{constructor(e){this.ti=e,this.docs=(function(){return new Se(Q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let n=Zt();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():at.newInvalidDocument(r))})),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Zt();const a=t.path,l=new Q(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:m}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ob(Db(m),n)<=0||(r.has(m.key)||$i(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,n,r){X(9500)}ni(e,t){return C.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new hv(this)}getSize(e){return C.resolve(this.size)}}class hv extends rv{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)})),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class fv{constructor(e){this.persistence=e,this.ri=new Ys((t=>Na(t)),Ra),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new Da,this.targetCount=0,this.oi=Ss._r()}forEachTarget(e,t){return this.ri.forEach(((n,r)=>t(r))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ss(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),C.waitFor(i).next((()=>r))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),C.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
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
 */class Eh{constructor(e,t){this._i={},this.overlays={},this.ai=new Oi(0),this.ui=!1,this.ui=!0,this.ci=new lv,this.referenceDelegate=e(this),this.li=new fv(this),this.indexManager=new Y_,this.remoteDocumentCache=(function(r){return new dv(r)})((n=>this.referenceDelegate.hi(n))),this.serializer=new Q_(t),this.Pi=new av(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new uv(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){$("MemoryPersistence","Starting transaction:",e);const r=new mv(this.ai.next());return this.referenceDelegate.Ti(),n(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return C.or(Object.values(this._i).map((n=>()=>n.containsKey(e,t))))}}class mv extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class Oa{constructor(e){this.persistence=e,this.Ri=new Da,this.Ai=null}static Vi(e){return new Oa(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(n=>{const r=Q.fromPath(n);return this.mi(e,r).next((i=>{i||t.removeEntry(r,te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ki{constructor(e,t){this.persistence=e,this.fi=new Ys((n=>zb(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=nv(this,t)}static Vi(e,t){return new ki(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}mr(e,t){return C.forEach(this.fi,((n,r)=>this.wr(e,n,r).next((i=>i?C.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((l=>{l||(n++,i.removeEntry(a,te.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}wr(e,t,n){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return C.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class La{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Is=r}static Es(e,t){let n=ce(),r=ce();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new La(e,t.fromCache,n,r)}}/**
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
 */class pv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return np()?8:Ub(ct())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.gs(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,t,r,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new pv;return this.ys(e,t,a).next((l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)}))})).next((()=>i.result))}ws(e,t,n,r){return n.documentReadCount<this.Vs?(tn()<=ue.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(tn()<=ue.DEBUG&&$("QueryEngine","Query:",sn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(tn()<=ue.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):C.resolve())}gs(e,t){if(ql(t))return C.resolve(null);let n=Dt(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Wo(t,null,"F"),n=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const a=ce(...i);return this.fs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,n).next((d=>{const h=this.Ss(t,l);return this.bs(t,h,a,d.readTime)?this.gs(e,Wo(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,n,r){return ql(t)||r.isEqual(te.min())?C.resolve(null):this.fs.getDocuments(e,n).next((i=>{const a=this.Ss(t,i);return this.bs(t,a,n,r)?C.resolve(null):(tn()<=ue.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),sn(t)),this.Ds(e,a,t,Vb(r,nr)).next((l=>l)))}))}Ss(e,t){let n=new Ge(eh(e));return t.forEach(((r,i)=>{$i(e,i)&&(n=n.add(i))})),n}bs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return tn()<=ue.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",sn(t)),this.fs.getDocumentsMatchingQuery(e,t,Es.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Ma="LocalStore",yv=3e8;class bv{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Se(ae),this.Fs=new Ys((i=>Na(i)),Ra),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ov(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function _v(s,e,t,n){return new bv(s,e,t,n)}async function Th(s,e){const t=se(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],l=[];let d=ce();for(const h of r){a.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(n,d).next((h=>({Ns:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function vv(s,e){const t=se(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(l,d,h,m){const p=h.batch,b=p.keys();let I=C.resolve();return b.forEach((S=>{I=I.next((()=>m.getEntry(d,S))).next((P=>{const T=h.docVersions.get(S);_e(T!==null,48541),P.version.compareTo(T)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),m.addEntry(P)))}))})),I.next((()=>l.mutationQueue.removeMutationBatch(d,p)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let d=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function Ih(s){const e=se(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function kv(s,e){const t=se(s),n=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((m,p)=>{const b=r.get(p);if(!b)return;l.push(t.li.removeMatchingKeys(i,m.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,m.addedDocuments,p))));let I=b.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(rt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):m.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(m.resumeToken,n)),r=r.insert(p,I),(function(P,T,L){return P.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=yv?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(b,I,m)&&l.push(t.li.updateTargetData(i,I))}));let d=Zt(),h=ce();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(xv(i,a,e.documentUpdates).next((m=>{d=m.Bs,h=m.Ls}))),!n.isEqual(te.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,n)));l.push(m)}return C.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,d,h))).next((()=>d))})).then((i=>(t.vs=r,i)))}function xv(s,e,t){let n=ce(),r=ce();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let a=Zt();return t.forEach(((l,d)=>{const h=i.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),d.isNoDocument()&&d.version.isEqual(te.min())?(e.removeEntry(l,d.readTime),a=a.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),a=a.insert(l,d)):$(Ma,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)})),{Bs:a,Ls:r}}))}function wv(s,e){const t=se(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Ia),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ev(s,e){const t=se(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.li.getTargetData(n,e).next((i=>i?(r=i,C.resolve(r)):t.li.allocateTargetId(n).next((a=>(r=new Gt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.vs.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n}))}async function Xo(s,e,t){const n=se(s),r=n.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!An(a))throw a;$(Ma,`Failed to update sequence numbers for target ${e}: ${a}`)}n.vs=n.vs.remove(e),n.Fs.delete(r.target)}function ru(s,e,t){const n=se(s);let r=te.min(),i=ce();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(d,h,m){const p=se(d),b=p.Fs.get(m);return b!==void 0?C.resolve(p.vs.get(b)):p.li.getTargetData(h,m)})(n,a,Dt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,l.targetId).next((d=>{i=d}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,e,t?r:te.min(),t?i:ce()))).next((l=>(Tv(n,l_(e),l),{documents:l,ks:i})))))}function Tv(s,e,t){let n=s.Ms.get(e)||te.min();t.forEach(((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),s.Ms.set(e,n)}class iu{constructor(){this.activeTargetIds=p_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Iv{constructor(){this.vo=new iu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new iu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Av{Mo(e){}shutdown(){}}/**
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
 */const ou="ConnectivityMonitor";class au{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(ou,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(ou,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Br=null;function Zo(){return Br===null?Br=(function(){return 268435456+Math.round(2147483648*Math.random())})():Br++,"0x"+Br.toString(16)}/**
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
 */const wo="RestConnection",Sv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Nv{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===pi?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const a=Zo(),l=this.Qo(e,t.toUriEncodedString());$(wo,`Sending RPC '${e}' ${a}:`,l,n);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,i);const{host:h}=new URL(l),m=gr(h);return this.zo(e,l,d,n,m).then((p=>($(wo,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Js(wo,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",n),p}))}jo(e,t,n,r,i,a){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Tn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const n=Sv[e];let r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class Rv{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const it="WebChannelConnection",$n=(s,e,t)=>{s.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class dn extends Nv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!dn.c_){const e=Cd();$n(e,Pd.STAT_EVENT,(t=>{t.stat===zo.PROXY?$(it,"STAT_EVENT: detected buffering proxy"):t.stat===zo.NOPROXY&&$(it,"STAT_EVENT: detected no buffering proxy")})),dn.c_=!0}}zo(e,t,n,r,i){const a=Zo();return new Promise(((l,d)=>{const h=new Nd;h.setWithCredentials(!0),h.listenOnce(Rd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Xr.NO_ERROR:const p=h.getResponseJson();$(it,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Xr.TIMEOUT:$(it,`RPC '${e}' ${a} timed out`),d(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const b=h.getStatus();if($(it,`RPC '${e}' ${a} failed with status:`,b,"response text:",h.getResponseText()),b>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const P=(function(L){const N=L.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(N)>=0?N:j.UNKNOWN})(S.status);d(new q(P,S.message))}else d(new q(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new q(j.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(it,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);$(it,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",m,n,15)}))}T_(e,t,n){const r=Zo(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const h=i.join("");$(it,`Creating RPC '${e}' stream ${r}: ${h}`,l);const m=a.createWebChannel(h,l);this.I_(m);let p=!1,b=!1;const I=new Rv({Jo:S=>{b?$(it,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(p||($(it,`Opening RPC '${e}' stream ${r} transport.`),m.open(),p=!0),$(it,`RPC '${e}' stream ${r} sending:`,S),m.send(S))},Ho:()=>m.close()});return $n(m,Kn.EventType.OPEN,(()=>{b||($(it,`RPC '${e}' stream ${r} transport opened.`),I.i_())})),$n(m,Kn.EventType.CLOSE,(()=>{b||(b=!0,$(it,`RPC '${e}' stream ${r} transport closed`),I.o_(),this.E_(m))})),$n(m,Kn.EventType.ERROR,(S=>{b||(b=!0,Js(it,`RPC '${e}' stream ${r} transport errored. Name:`,S.name,"Message:",S.message),I.o_(new q(j.UNAVAILABLE,"The operation could not be completed")))})),$n(m,Kn.EventType.MESSAGE,(S=>{var P;if(!b){const T=S.data[0];_e(!!T,16349);const L=T,N=(L==null?void 0:L.error)||((P=L[0])==null?void 0:P.error);if(N){$(it,`RPC '${e}' stream ${r} received error:`,N);const V=N.status;let U=(function(x){const y=Fe[x];if(y!==void 0)return hh(y)})(V),H=N.message;V==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Js(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),U===void 0&&(U=j.INTERNAL,H="Unknown error status: "+V+" with message "+N.message),b=!0,I.o_(new q(U,H)),m.close()}else $(it,`RPC '${e}' stream ${r} received:`,T),I.__(T)}})),dn.u_(),setTimeout((()=>{I.s_()}),0),I}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return jd()}}/**
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
 */function Pv(s){return new dn(s)}function Eo(){return typeof document<"u"?document:null}/**
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
 */function qi(s){return new D_(s,!0)}/**
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
 */dn.c_=!1;class Ah{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const cu="PersistentStream";class Sh{constructor(e,t,n,r,i,a,l,d){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ah(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(Xt(t.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.D_===t&&this.G_(n,r)}),(n=>{e((()=>{const r=new q(j.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)}))}))}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{n((()=>this.z_(r)))})),this.stream.onMessage((r=>{n((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return $(cu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():($(cu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cv extends Sh{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=M_(this.serializer,e),n=(function(i){if(!("targetChange"in i))return te.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?te.min():a.readTime?Lt(a.readTime):te.min()})(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Yo(this.serializer),t.addTarget=(function(i,a){let l;const d=a.target;if(l=Ho(d)?{documents:z_(i,d)}:{query:$_(i,d).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ph(i,a.resumeToken);const h=Go(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(te.min())>0){l.readTime=vi(i,a.snapshotVersion.toTimestamp());const h=Go(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const n=K_(this.serializer,e);n&&(t.labels=n),this.K_(t)}X_(e){const t={};t.database=Yo(this.serializer),t.removeTarget=e,this.K_(t)}}class jv extends Sh{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=F_(e.writeResults,e.commitTime),n=Lt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Yo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>U_(this.serializer,n)))};this.K_(t)}}/**
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
 */class Vv{}class Dv extends Vv{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Qo(t,n),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(j.UNKNOWN,i.toString())}))}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(e,Qo(t,n),r,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(j.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Ov(s,e,t,n){return new Dv(s,e,t,n)}class Lv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xt(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const zt="RemoteStore";class Mv{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ss(1e3),this.Va=new Ss(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((a=>{n.enqueueAndForget((async()=>{Xs(this)&&($(zt,"Restarting streams for network reachability change."),await(async function(d){const h=se(d);h.da.add(4),await Er(h),h.ga.set("Unknown"),h.da.delete(4),await Hi(h)})(this))}))})),this.ga=new Lv(n,r)}}async function Hi(s){if(Xs(s))for(const e of s.ma)await e(!0)}async function Er(s){for(const e of s.ma)await e(!1)}function ea(s,e){return s.Ea.get(e)||void 0}function Nh(s,e){const t=se(s),n=ea(t,e.targetId);if(n!==void 0&&t.Ia.has(n))return;const r=(function(l,d){const h=ea(l,d);h!==void 0&&l.Ra.delete(h);const m=(function(b,I){return I%2!=0?b.Va.next():b.Aa.next()})(l,d);return l.Ea.set(d,m),l.Ra.set(m,d),m})(t,e.targetId);$(zt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new Gt(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,i),$a(t)?za(t):Sn(t).O_()&&Fa(t,i)}function Ua(s,e){const t=se(s),n=Sn(t),r=ea(t,e);$(zt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),n.O_()&&Rh(t,r),t.Ia.size===0&&(n.O_()?n.L_():Xs(t)&&t.ga.set("Unknown"))}function Fa(s,e){if(s.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=s.Ra.get(e.targetId);if(t===void 0)return void $(zt,"SDK target ID not found for remote ID: "+e.targetId);const n=s.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Sn(s).Z_(e)}function Rh(s,e){s.pa.$e(e),Sn(s).X_(e)}function za(s){s.pa=new P_({getRemoteKeysForTarget:e=>{const t=s.Ra.get(e);return t!==void 0?s.remoteSyncer.getRemoteKeysForTarget(t):ce()},At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),Sn(s).start(),s.ga.ua()}function $a(s){return Xs(s)&&!Sn(s).x_()&&s.Ia.size>0}function Xs(s){return se(s).da.size===0}function Ph(s){s.pa=void 0}async function Uv(s){s.ga.set("Online")}async function Fv(s){s.Ia.forEach(((e,t)=>{Fa(s,e)}))}async function zv(s,e){Ph(s),$a(s)?(s.ga.ha(e),za(s)):s.ga.set("Unknown")}async function $v(s,e,t){if(s.ga.set("Online"),e instanceof mh&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const l of i.targetIds){if(r.Ia.has(l)){const d=r.Ra.get(l);d!==void 0&&(await r.remoteSyncer.rejectListen(d,a),r.Ea.delete(d),r.Ra.delete(l)),r.Ia.delete(l)}r.pa.removeTarget(l)}})(s,e)}catch(n){$(zt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await xi(s,n)}else if(e instanceof si?s.pa.Xe(e):e instanceof fh?s.pa.st(e):s.pa.tt(e),!t.isEqual(te.min()))try{const n=await Ih(s.localStore);t.compareTo(n)>=0&&await(function(i,a){const l=i.pa.Tt(a);l.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(m);p&&i.Ia.set(m,p.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,m)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(rt.EMPTY_BYTE_STRING,p.snapshotVersion)),Rh(i,h);const b=new Gt(p.target,h,m,p.sequenceNumber);Fa(i,b)}));const d=(function(m,p){const b=new Map;p.targetChanges.forEach(((S,P)=>{const T=m.Ra.get(P);T!==void 0&&b.set(T,S)}));let I=new Se(ae);return p.targetMismatches.forEach(((S,P)=>{const T=m.Ra.get(S);T!==void 0&&(I=I.insert(T,P))})),new xr(p.snapshotVersion,b,I,p.documentUpdates,p.resolvedLimboDocuments)})(i,l);return i.remoteSyncer.applyRemoteEvent(d)})(s,t)}catch(n){$(zt,"Failed to raise snapshot:",n),await xi(s,n)}}async function xi(s,e,t){if(!An(e))throw e;s.da.add(1),await Er(s),s.ga.set("Offline"),t||(t=()=>Ih(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{$(zt,"Retrying IndexedDB access"),await t(),s.da.delete(1),await Hi(s)}))}function Ch(s,e){return e().catch((t=>xi(s,t,e)))}async function Wi(s){const e=se(s),t=Ns(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ia;for(;Bv(e);)try{const r=await wv(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,Kv(e,r)}catch(r){await xi(e,r)}jh(e)&&Vh(e)}function Bv(s){return Xs(s)&&s.Ta.length<10}function Kv(s,e){s.Ta.push(e);const t=Ns(s);t.O_()&&t.Y_&&t.ea(e.mutations)}function jh(s){return Xs(s)&&!Ns(s).x_()&&s.Ta.length>0}function Vh(s){Ns(s).start()}async function qv(s){Ns(s).ra()}async function Hv(s){const e=Ns(s);for(const t of s.Ta)e.ea(t.mutations)}async function Wv(s,e,t){const n=s.Ta.shift(),r=Ca.from(n,e,t);await Ch(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await Wi(s)}async function Gv(s,e){e&&Ns(s).Y_&&await(async function(n,r){if((function(a){return S_(a)&&a!==j.ABORTED})(r.code)){const i=n.Ta.shift();Ns(n).B_(),await Ch(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Wi(n)}})(s,e),jh(s)&&Vh(s)}async function lu(s,e){const t=se(s);t.asyncQueue.verifyOperationInProgress(),$(zt,"RemoteStore received new credentials");const n=Xs(t);t.da.add(3),await Er(t),n&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Hi(t)}async function Qv(s,e){const t=se(s);e?(t.da.delete(2),await Hi(t)):e||(t.da.add(2),await Er(t),t.ga.set("Unknown"))}function Sn(s){return s.ya||(s.ya=(function(t,n,r){const i=se(t);return i.sa(),new Cv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{Zo:Uv.bind(null,s),Yo:Fv.bind(null,s),t_:zv.bind(null,s),H_:$v.bind(null,s)}),s.ma.push((async e=>{e?(s.ya.B_(),$a(s)?za(s):s.ga.set("Unknown")):(await s.ya.stop(),Ph(s))}))),s.ya}function Ns(s){return s.wa||(s.wa=(function(t,n,r){const i=se(t);return i.sa(),new jv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qv.bind(null,s),t_:Gv.bind(null,s),ta:Hv.bind(null,s),na:Wv.bind(null,s)}),s.ma.push((async e=>{e?(s.wa.B_(),await Wi(s)):(await s.wa.stop(),s.Ta.length>0&&($(zt,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.wa}/**
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
 */class Ba{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,l=new Ba(e,t,a,r,i);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ka(s,e){if(Xt("AsyncQueue",`${e}: ${s}`),An(s))return new q(j.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class hn{static emptySet(e){return new hn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Q.comparator(t.key,n.key):(t,n)=>Q.comparator(t.key,n.key),this.keyedMap=qn(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new hn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class uu{constructor(){this.Sa=new Se(Q.comparator)}track(e){const t=e.doc.key,n=this.Sa.get(t);n?e.type!==0&&n.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&n.type!==1?this.Sa=this.Sa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Sa=this.Sa.remove(t):e.type===1&&n.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,ba:n}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class vn{constructor(e,t,n,r,i,a,l,d,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new vn(e,t,hn.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class Jv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Yv{constructor(){this.queries=du(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,n){const r=se(t),i=r.queries;r.queries=du(),i.forEach(((a,l)=>{for(const d of l.va)d.onError(n)}))})(this,new q(j.ABORTED,"Firestore shutting down"))}}function du(){return new Ys((s=>Zd(s)),zi)}async function Dh(s,e){const t=se(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.Fa()&&e.Ma()&&(n=2):(i=new Jv,n=e.Ma()?0:1);try{switch(n){case 0:i.Ca=await t.onListen(r,!0);break;case 1:i.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=Ka(a,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&qa(t)}async function Oh(s,e){const t=se(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Xv(s,e){const t=se(s);let n=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.va)l.Na(r)&&(n=!0);a.Ca=r}}n&&qa(t)}function Zv(s,e,t){const n=se(s),r=n.queries.get(e);if(r)for(const i of r.va)i.onError(t);n.queries.delete(e)}function qa(s){s.xa.forEach((e=>{e.next()}))}var ta,hu;(hu=ta||(ta={})).Ba="default",hu.Cache="cache";class Lh{constructor(e,t,n){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=n||{}}Na(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new vn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const n=t!=="Offline";return(!this.options.Wa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==ta.Cache}}/**
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
 */class Mh{constructor(e){this.key=e}}class Uh{constructor(e){this.key=e}}class ek{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ce(),this.mutatedKeys=ce(),this.iu=eh(e),this.su=new hn(this.iu)}get ou(){return this.tu}_u(e,t){const n=t?t.au:new uu,r=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,p)=>{const b=r.get(m),I=$i(this.query,p)?p:null,S=!!b&&this.mutatedKeys.has(b.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let T=!1;b&&I?b.data.isEqual(I.data)?S!==P&&(n.track({type:3,doc:I}),T=!0):this.uu(b,I)||(n.track({type:2,doc:I}),T=!0,(d&&this.iu(I,d)>0||h&&this.iu(I,h)<0)&&(l=!0)):!b&&I?(n.track({type:0,doc:I}),T=!0):b&&!I&&(n.track({type:1,doc:b}),T=!0,(d||h)&&(l=!0)),T&&(I?(a=a.add(I),i=P?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{su:a,au:n,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort(((m,p)=>(function(I,S){const P=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:T})}};return P(I)-P(S)})(m.type,p.type)||this.iu(m.doc,p.doc))),this.cu(n),r=r??!1;const l=t&&!r?this.lu():[],d=this.ru.size===0&&this.current&&!r?1:0,h=d!==this.nu;return this.nu=d,a.length!==0||h?{snapshot:new vn(this.query,e.su,i,a,e.mutatedKeys,d===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new uu,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ce(),this.su.forEach((n=>{this.Pu(n.key)&&(this.ru=this.ru.add(n.key))}));const t=[];return e.forEach((n=>{this.ru.has(n)||t.push(new Uh(n))})),this.ru.forEach((n=>{e.has(n)||t.push(new Mh(n))})),t}Tu(e){this.tu=e.ks,this.ru=ce();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return vn.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ha="SyncEngine";class tk{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sk{constructor(e){this.key=e,this.Eu=!1}}class nk{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Ys((l=>Zd(l)),zi),this.Vu=new Map,this.du=new Set,this.mu=new Se(Q.comparator),this.fu=new Map,this.gu=new Da,this.pu={},this.yu=new Map,this.wu=Ss.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function rk(s,e,t=!0){const n=qh(s);let r;const i=n.Au.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await Fh(n,e,t,!0),r}async function ik(s,e){const t=qh(s);await Fh(t,e,!0,!1)}async function Fh(s,e,t,n){const r=await Ev(s.localStore,Dt(e)),i=r.targetId,a=s.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await ok(s,e,i,a==="current",r.resumeToken)),s.isPrimaryClient&&t&&Nh(s.remoteStore,r),l}async function ok(s,e,t,n,r){s.bu=(p,b,I)=>(async function(P,T,L,N){let V=T.view._u(L);V.bs&&(V=await ru(P.localStore,T.query,!1).then((({documents:x})=>T.view._u(x,V))));const U=N&&N.targetChanges.get(T.targetId),H=N&&N.targetMismatches.get(T.targetId)!=null,Y=T.view.applyChanges(V,P.isPrimaryClient,U,H);return mu(P,T.targetId,Y.hu),Y.snapshot})(s,p,b,I);const i=await ru(s.localStore,e,!0),a=new ek(e,i.ks),l=a._u(i.documents),d=wr.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),h=a.applyChanges(l,s.isPrimaryClient,d);mu(s,t,h.hu);const m=new tk(e,t,a);return s.Au.set(e,m),s.Vu.has(t)?s.Vu.get(t).push(e):s.Vu.set(t,[e]),h.snapshot}async function ak(s,e,t){const n=se(s),r=n.Au.get(e),i=n.Vu.get(r.targetId);if(i.length>1)return n.Vu.set(r.targetId,i.filter((a=>!zi(a,e)))),void n.Au.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xo(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Ua(n.remoteStore,r.targetId),sa(n,r.targetId)})).catch(In)):(sa(n,r.targetId),await Xo(n.localStore,r.targetId,!0))}async function ck(s,e){const t=se(s),n=t.Au.get(e),r=t.Vu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ua(t.remoteStore,n.targetId))}async function lk(s,e,t){const n=gk(s);try{const r=await(function(a,l){const d=se(a),h=Ae.now(),m=l.reduce(((I,S)=>I.add(S.key)),ce());let p,b;return d.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let S=Zt(),P=ce();return d.xs.getEntries(I,m).next((T=>{S=T,S.forEach(((L,N)=>{N.isValidDocument()||(P=P.add(L))}))})).next((()=>d.localDocuments.getOverlayedDocuments(I,S))).next((T=>{p=T;const L=[];for(const N of l){const V=w_(N,p.get(N.key).overlayedDocument);V!=null&&L.push(new Cs(N.key,V,Hd(V.value.mapValue),Ot.exists(!0)))}return d.mutationQueue.addMutationBatch(I,h,L,l)})).next((T=>{b=T;const L=T.applyToLocalDocumentSet(p,P);return d.documentOverlayCache.saveOverlays(I,T.batchId,L)}))})).then((()=>({batchId:b.batchId,changes:sh(p)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(a,l,d){let h=a.pu[a.currentUser.toKey()];h||(h=new Se(ae)),h=h.insert(l,d),a.pu[a.currentUser.toKey()]=h})(n,r.batchId,t),await Tr(n,r.changes),await Wi(n.remoteStore)}catch(r){const i=Ka(r,"Failed to persist write");t.reject(i)}}async function zh(s,e){const t=se(s);try{const n=await kv(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.fu.get(i);a&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Eu=!0:r.modifiedDocuments.size>0?_e(a.Eu,14607):r.removedDocuments.size>0&&(_e(a.Eu,42227),a.Eu=!1))})),await Tr(t,n,e)}catch(n){await In(n)}}function fu(s,e,t){const n=se(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Au.forEach(((i,a)=>{const l=a.view.Oa(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const d=se(a);d.onlineState=l;let h=!1;d.queries.forEach(((m,p)=>{for(const b of p.va)b.Oa(l)&&(h=!0)})),h&&qa(d)})(n.eventManager,e),r.length&&n.Ru.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function uk(s,e,t){const n=se(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.fu.get(e),i=r&&r.key;if(i){let a=new Se(Q.comparator);a=a.insert(i,at.newNoDocument(i,te.min()));const l=ce().add(i),d=new xr(te.min(),new Map,new Se(ae),a,l);await zh(n,d),n.mu=n.mu.remove(i),n.fu.delete(e),Wa(n)}else await Xo(n.localStore,e,!1).then((()=>sa(n,e,t))).catch(In)}async function dk(s,e){const t=se(s),n=e.batch.batchId;try{const r=await vv(t.localStore,e);Bh(t,n,null),$h(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Tr(t,r)}catch(r){await In(r)}}async function hk(s,e,t){const n=se(s);try{const r=await(function(a,l){const d=se(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return d.mutationQueue.lookupMutationBatch(h,l).next((p=>(_e(p!==null,37113),m=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,m,l))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>d.localDocuments.getDocuments(h,m)))}))})(n.localStore,e);Bh(n,e,t),$h(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Tr(n,r)}catch(r){await In(r)}}function $h(s,e){(s.yu.get(e)||[]).forEach((t=>{t.resolve()})),s.yu.delete(e)}function Bh(s,e,t){const n=se(s);let r=n.pu[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.pu[n.currentUser.toKey()]=r}}function sa(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Vu.get(e))s.Au.delete(n),t&&s.Ru.Du(n,t);s.Vu.delete(e),s.isPrimaryClient&&s.gu.Gr(e).forEach((n=>{s.gu.containsKey(n)||Kh(s,n)}))}function Kh(s,e){s.du.delete(e.path.canonicalString());const t=s.mu.get(e);t!==null&&(Ua(s.remoteStore,t),s.mu=s.mu.remove(e),s.fu.delete(t),Wa(s))}function mu(s,e,t){for(const n of t)n instanceof Mh?(s.gu.addReference(n.key,e),fk(s,n)):n instanceof Uh?($(Ha,"Document no longer in limbo: "+n.key),s.gu.removeReference(n.key,e),s.gu.containsKey(n.key)||Kh(s,n.key)):X(19791,{Cu:n})}function fk(s,e){const t=e.key,n=t.path.canonicalString();s.mu.get(t)||s.du.has(n)||($(Ha,"New document in limbo: "+t),s.du.add(n),Wa(s))}function Wa(s){for(;s.du.size>0&&s.mu.size<s.maxConcurrentLimboResolutions;){const e=s.du.values().next().value;s.du.delete(e);const t=new Q(Pe.fromString(e)),n=s.wu.next();s.fu.set(n,new sk(t)),s.mu=s.mu.insert(t,n),Nh(s.remoteStore,new Gt(Dt(Fi(t.path)),n,"TargetPurposeLimboResolution",Oi.ce))}}async function Tr(s,e,t){const n=se(s),r=[],i=[],a=[];n.Au.isEmpty()||(n.Au.forEach(((l,d)=>{a.push(n.bu(d,e,t).then((h=>{var m;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=La.Es(d.targetId,h);i.push(p)}})))})),await Promise.all(a),n.Ru.H_(r),await(async function(d,h){const m=se(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>C.forEach(h,(b=>C.forEach(b.Ts,(I=>m.persistence.referenceDelegate.addReference(p,b.targetId,I))).next((()=>C.forEach(b.Is,(I=>m.persistence.referenceDelegate.removeReference(p,b.targetId,I)))))))))}catch(p){if(!An(p))throw p;$(Ma,"Failed to update sequence numbers: "+p)}for(const p of h){const b=p.targetId;if(!p.fromCache){const I=m.vs.get(b),S=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(S);m.vs=m.vs.insert(b,P)}}})(n.localStore,i))}async function mk(s,e){const t=se(s);if(!t.currentUser.isEqual(e)){$(Ha,"User change. New user:",e.toKey());const n=await Th(t.localStore,e);t.currentUser=e,(function(i,a){i.yu.forEach((l=>{l.forEach((d=>{d.reject(new q(j.CANCELLED,a))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Tr(t,n.Ns)}}function pk(s,e){const t=se(s),n=t.fu.get(e);if(n&&n.Eu)return ce().add(n.key);{let r=ce();const i=t.Vu.get(e);if(!i)return r;for(const a of i){const l=t.Au.get(a);r=r.unionWith(l.view.ou)}return r}}function qh(s){const e=se(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uk.bind(null,e),e.Ru.H_=Xv.bind(null,e.eventManager),e.Ru.Du=Zv.bind(null,e.eventManager),e}function gk(s){const e=se(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hk.bind(null,e),e}class wi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qi(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return _v(this.persistence,new gv,e.initialUser,this.serializer)}xu(e){return new Eh(Oa.Vi,this.serializer)}Mu(e){return new Iv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wi.provider={build:()=>new wi};class yk extends wi{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){_e(this.persistence.referenceDelegate instanceof ki,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new tv(n,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Eh((n=>ki.Vi(n,t)),this.serializer)}}class na{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=mk.bind(null,this.syncEngine),await Qv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Yv})()}createDatastore(e){const t=qi(e.databaseInfo.databaseId),n=Pv(e.databaseInfo);return Ov(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,a,l){return new Mv(n,r,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>fu(this.syncEngine,t,0)),(function(){return au.v()?new au:new Av})())}createSyncEngine(e,t){return(function(r,i,a,l,d,h,m){const p=new nk(r,i,a,l,d,h);return m&&(p.Su=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=se(r);$(zt,"RemoteStore shutting down."),i.da.add(5),await Er(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}na.provider={build:()=>new na};/**
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
 */class Hh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Rs="FirestoreClient";class bk{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=Ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{$(Rs,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>($(Rs,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ks;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ka(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function To(s,e){s.asyncQueue.verifyOperationInProgress(),$(Rs,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await Th(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function pu(s,e){s.asyncQueue.verifyOperationInProgress();const t=await _k(s);$(Rs,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>lu(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>lu(e.remoteStore,r))),s._onlineComponents=e}async function _k(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){$(Rs,"Using user provided OfflineComponentProvider");try{await To(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===j.FAILED_PRECONDITION||r.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Js("Error using user provided cache. Falling back to memory cache: "+t),await To(s,new wi)}}else $(Rs,"Using default OfflineComponentProvider"),await To(s,new yk(void 0));return s._offlineComponents}async function Wh(s){return s._onlineComponents||(s._uninitializedComponentsProvider?($(Rs,"Using user provided OnlineComponentProvider"),await pu(s,s._uninitializedComponentsProvider._online)):($(Rs,"Using default OnlineComponentProvider"),await pu(s,new na))),s._onlineComponents}function vk(s){return Wh(s).then((e=>e.syncEngine))}async function ra(s){const e=await Wh(s),t=e.eventManager;return t.onListen=rk.bind(null,e.syncEngine),t.onUnlisten=ak.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ik.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ck.bind(null,e.syncEngine),t}function kk(s,e,t,n){const r=new Hh(n),i=new Lh(e,r,t);return s.asyncQueue.enqueueAndForget((async()=>Dh(await ra(s),i))),()=>{r.Ku(),s.asyncQueue.enqueueAndForget((async()=>Oh(await ra(s),i)))}}function xk(s,e,t={}){const n=new ks;return s.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,d,h){const m=new Hh({next:b=>{m.Ku(),a.enqueueAndForget((()=>Oh(i,p)));const I=b.docs.has(l);!I&&b.fromCache?h.reject(new q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&b.fromCache&&d&&d.source==="server"?h.reject(new q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(b)},error:b=>h.reject(b)}),p=new Lh(Fi(l.path),m,{includeMetadataChanges:!0,Wa:!0});return Dh(i,p)})(await ra(s),s.asyncQueue,e,t,n))),n.promise}function wk(s,e){const t=new ks;return s.asyncQueue.enqueueAndForget((async()=>lk(await vk(s),e,t))),t.promise}/**
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
 */function Gh(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Ek="ComponentProvider",gu=new Map;function Tk(s,e,t,n,r){return new Kb(s,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Gh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n)}/**
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
 */const Qh="firestore.googleapis.com",yu=!0;class bu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qh,this.ssl=yu}else this.host=e.host,this.ssl=e.ssl??yu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Z_)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ga{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new xb;switch(n.type){case"firstParty":return new Ib(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=gu.get(t);n&&($(Ek,"Removing Datastore"),gu.delete(t),n.terminate())})(this),Promise.resolve()}}function Ik(s,e,t,n={}){var h;s=Vt(s,Ga);const r=gr(e),i=s._getSettings(),a={...i,emulatorOptions:s._getEmulatorOptions()},l=`${e}:${t}`;r&&Bu(`https://${l}`),i.host!==Qh&&i.host!==l&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...i,host:l,ssl:r,emulatorOptions:n};if(!Hs(d,a)&&(s._setSettings(d),n.mockUserToken)){let m,p;if(typeof n.mockUserToken=="string")m=n.mockUserToken,p=ot.MOCK_USER;else{m=Jm(n.mockUserToken,(h=s._app)==null?void 0:h.options.projectId);const b=n.mockUserToken.sub||n.mockUserToken.user_id;if(!b)throw new q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(b)}s._authCredentials=new wb(new Dd(m,p))}}/**
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
 */class Gi{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Gi(this.firestore,e,this._query)}}class $e{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(vr(t,$e._jsonSchema))return new $e(e,n||null,new Q(Pe.fromString(t.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:ze("string",$e._jsonSchemaVersion),referencePath:ze("string")};class ur extends Gi{constructor(e,t,n){super(e,t,Fi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new Q(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function Qa(s,e,...t){if(s=mt(s),arguments.length===1&&(e=Ea.newId()),Cb("doc","path",e),s instanceof Ga){const n=Pe.fromString(e,...t);return Cl(n),new $e(s,null,new Q(n))}{if(!(s instanceof $e||s instanceof ur))throw new q(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Pe.fromString(e,...t));return Cl(n),new $e(s.firestore,s instanceof ur?s.converter:null,new Q(n))}}/**
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
 */const _u="AsyncQueue";class vu{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Ah(this,"async_queue_retry"),this.lc=()=>{const n=Eo();n&&$(_u,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.hc=e;const t=Eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new ks;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!An(e))throw e;$(_u,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((n=>{throw this._c=n,this.ac=!1,Xt("INTERNAL UNHANDLED ERROR: ",ku(n)),n})).then((n=>(this.ac=!1,n))))));return this.hc=t,t}enqueueAfterDelay(e,t,n){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=Ba.createAndSchedule(this,e,t,n,(i=>this.Ec(i)));return this.oc.push(r),r}Pc(){this._c&&X(47125,{Rc:ku(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function ku(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class kn extends Ga{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new vu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vu(e),this._firestoreClient=void 0,await e}}}function Ak(s,e){const t=typeof s=="object"?s:Wu(),n=typeof s=="string"?s:pi,r=pa(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=Gm("firestore");i&&Ik(r,...i)}return r}function Ja(s){if(s._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Sk(s),s._firestoreClient}function Sk(s){var n,r,i,a;const e=s._freezeSettings(),t=Tk(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,(r=s._app)==null?void 0:r.options.apiKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new bk(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(s._componentsProvider))}/**
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
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(rt.fromBase64String(e))}catch(t){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vr(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:ze("string",kt._jsonSchemaVersion),bytes:ze("string")};/**
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
 */class Ya{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qi{constructor(e){this._methodName=e}}/**
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
 */class Mt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(e){if(vr(e,Mt._jsonSchema))return new Mt(e.latitude,e.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:ze("string",Mt._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
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
 */class Tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vr(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tt(e.vectorValues);throw new q(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:ze("string",Tt._jsonSchemaVersion),vectorValues:ze("object")};/**
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
 */const Nk=/^__.*__$/;class Rk{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new kr(e,this.data,t,this.fieldTransforms)}}class Jh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yh(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:s})}}class Xa{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Xa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.i({path:t,arrayElement:!1});return n.wc(e),n}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.i({path:t,arrayElement:!1});return n.fc(),n}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ei(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Yh(this.dataSource)&&Nk.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qi(e)}V(e,t,n,r=!1){return new Xa({dataSource:e,methodName:t,targetDoc:n,path:nt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xh(s){const e=s._freezeSettings(),t=qi(s._databaseId);return new Pk(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Ck(s,e,t,n,r,i={}){const a=s.V(i.merge||i.mergeFields?2:0,e,t,r);ec("Data must be an object, but it was:",a,n);const l=Zh(n,a);let d,h;if(i.merge)d=new bt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const b=dr(e,p,t);if(!a.contains(b))throw new q(j.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);sf(m,b)||m.push(b)}d=new bt(m),h=a.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=a.fieldTransforms;return new Rk(new ft(l),d,h)}class Ji extends Qi{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ji}}class Za extends Qi{_toFieldTransform(e){return new __(e.path,new ar)}isEqual(e){return e instanceof Za}}function jk(s,e,t,n){const r=s.V(1,e,t);ec("Data must be an object, but it was:",r,n);const i=[],a=ft.empty();Ps(n,((d,h)=>{const m=tf(e,d,t);h=mt(h);const p=r.Sc(m);if(h instanceof Ji)i.push(m);else{const b=Yi(h,p);b!=null&&(i.push(m),a.set(m,b))}}));const l=new bt(i);return new Jh(a,l,r.fieldTransforms)}function Vk(s,e,t,n,r,i){const a=s.V(1,e,t),l=[dr(e,n,t)],d=[r];if(i.length%2!=0)throw new q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<i.length;b+=2)l.push(dr(e,i[b])),d.push(i[b+1]);const h=[],m=ft.empty();for(let b=l.length-1;b>=0;--b)if(!sf(h,l[b])){const I=l[b];let S=d[b];S=mt(S);const P=a.Sc(I);if(S instanceof Ji)h.push(I);else{const T=Yi(S,P);T!=null&&(h.push(I),m.set(I,T))}}const p=new bt(h);return new Jh(m,p,a.fieldTransforms)}function Yi(s,e){if(ef(s=mt(s)))return ec("Unsupported field value:",e,s),Zh(s,e);if(s instanceof Qi)return(function(n,r){if(!Yh(r.dataSource))throw r.Dc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(n,r){const i=[];let a=0;for(const l of n){let d=Yi(l,r.bc(a));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),a++}return{arrayValue:{values:i}}})(s,e)}return(function(n,r){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return g_(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ae.fromDate(n);return{timestampValue:vi(r.serializer,i)}}if(n instanceof Ae){const i=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vi(r.serializer,i)}}if(n instanceof Mt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof kt)return{bytesValue:ph(r.serializer,n._byteString)};if(n instanceof $e){const i=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw r.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Va(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Tt)return(function(a,l){const d=a instanceof Tt?a.toArray():a;return{mapValue:{fields:{[Kd]:{stringValue:qd},[gi]:{arrayValue:{values:d.map((m=>{if(typeof m!="number")throw l.Dc("VectorValues must only contain numeric values.");return Pa(l.serializer,m)}))}}}}}})(n,r);if(xh(n))return n._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Ta(n)}`)})(s,e)}function Zh(s,e){const t={};return Md(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(s,((n,r)=>{const i=Yi(r,e.yc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function ef(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Ae||s instanceof Mt||s instanceof kt||s instanceof $e||s instanceof Qi||s instanceof Tt||xh(s))}function ec(s,e,t){if(!ef(t)||!Od(t)){const n=Ta(t);throw n==="an object"?e.Dc(s+" a custom object"):e.Dc(s+" "+n)}}function dr(s,e,t){if((e=mt(e))instanceof Ya)return e._internalPath;if(typeof e=="string")return tf(s,e);throw Ei("Field path arguments must be of type string or ",s,!1,void 0,t)}const Dk=new RegExp("[~\\*/\\[\\]]");function tf(s,e,t){if(e.search(Dk)>=0)throw Ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Ya(...e.split("."))._internalPath}catch{throw Ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Ei(s,e,t,n,r){const i=n&&!n.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(i||a)&&(d+=" (found",i&&(d+=` in field ${n}`),a&&(d+=` in document ${r}`),d+=")"),new q(j.INVALID_ARGUMENT,l+s+d)}function sf(s,e){return s.some((t=>t.isEqual(e)))}/**
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
 */class Ok{convertValue(e,t="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ps(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[gi].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>Le(a.doubleValue)));return new Tt(t)}convertGeoPoint(e){return new Mt(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Mi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const t=Ts(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Pe.fromString(e);_e(kh(n),9688,{name:e});const r=new ir(n.get(1),n.get(3)),i=new Q(n.popFirst(5));return r.isEqual(t)||Xt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class nf extends Ok{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function Lk(){return new Za("serverTimestamp")}const xu="@firebase/firestore",wu="4.14.1";/**
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
 */function Eu(s){return(function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1})(s,["next","error","complete"])}/**
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
 */class rf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(dr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mk extends rf{data(){return super.data()}}/**
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
 */function Uk(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Fk(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class Wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ks extends rf{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(dr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ks._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ks._jsonSchema={type:ze("string",Ks._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class ni extends Ks{data(e={}){return super.data(e)}}class fn{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Wn(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ni(this._firestore,this._userDataWriter,n.key,n,new Wn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const d=new ni(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Wn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const d=new ni(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Wn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:zk(l.type),doc:d,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zk(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:s})}}/**
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
 */fn._jsonSchemaVersion="firestore/querySnapshot/1.0",fn._jsonSchema={type:ze("string",fn._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};/**
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
 */function $k(s){s=Vt(s,$e);const e=Vt(s.firestore,kn),t=Ja(e);return xk(t,s._key).then((n=>af(e,s,n)))}function Bk(s,e,t){s=Vt(s,$e);const n=Vt(s.firestore,kn),r=Fk(s.converter,e),i=Xh(n);return of(n,[Ck(i,"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,Ot.none())])}function Kk(s,e,t,...n){s=Vt(s,$e);const r=Vt(s.firestore,kn),i=Xh(r);let a;return a=typeof(e=mt(e))=="string"||e instanceof Ya?Vk(i,"updateDoc",s._key,e,t,n):jk(i,"updateDoc",s._key,e),of(r,[a.toMutation(s._key,Ot.exists(!0))])}function qk(s,...e){var h,m,p;s=mt(s);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Eu(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Eu(e[n])){const b=e[n];e[n]=(h=b.next)==null?void 0:h.bind(b),e[n+1]=(m=b.error)==null?void 0:m.bind(b),e[n+2]=(p=b.complete)==null?void 0:p.bind(b)}let i,a,l;if(s instanceof $e)a=Vt(s.firestore,kn),l=Fi(s._key.path),i={next:b=>{e[n]&&e[n](af(a,s,b))},error:e[n+1],complete:e[n+2]};else{const b=Vt(s,Gi);a=Vt(b.firestore,kn),l=b._query;const I=new nf(a);i={next:S=>{e[n]&&e[n](new fn(a,I,b,S))},error:e[n+1],complete:e[n+2]},Uk(s._query)}const d=Ja(a);return kk(d,l,r,i)}function of(s,e){const t=Ja(s);return wk(t,e)}function af(s,e,t){const n=t.docs.get(e._key),r=new nf(s);return new Ks(s,r,e._key,n,new Wn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){kb(wn),gn(new Ws("firestore",((n,{instanceIdentifier:r,options:i})=>{const a=n.getProvider("app").getImmediate(),l=new kn(new Eb(n.getProvider("auth-internal")),new Ab(a,n.getProvider("app-check-internal")),qb(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),bs(xu,wu,e),bs(xu,wu,"esm2020")})();const Hk={apiKey:"AIzaSyC1lWDUwmBOlDmJHiqn8PBdGXf63GFZM8g",authDomain:"kocky-sveta-2026.firebaseapp.com",projectId:"kocky-sveta-2026",storageBucket:"kocky-sveta-2026.firebasestorage.app",messagingSenderId:"390822285835",appId:"1:390822285835:web:31021a6bb7c67d7a58ad0e",measurementId:"G-VB20M681V5"},cf=Hu(Hk),tc=Ak(cf);Di(cf);async function Wk(s){const t=new TextEncoder().encode(s),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Gk(){const s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>s[Math.floor(Math.random()*s.length)]).join("")}async function Qk(s){var i;const e=Gk(),t=await Wk(s.pin),n=(i=Di().currentUser)==null?void 0:i.uid;if(!n)throw new Error("Nie si prihlásený");const r={ownerPinHash:t,status:"waiting",updatedAt:Lk(),selectedSkin:s.selectedSkin,rules:s.rules,players:{[n]:{name:s.hostName,score:0,isReady:!1,online:!0}},gameState:{currentTurn:n,lastRoll:[],history:[]}};return await Bk(Qa(tc,"rooms",e),r),console.log("[createRoom] roomId:",e,"uid:",n),e}async function Jk(s){var r;const e=Qa(tc,"rooms",s.roomId);if(!(await $k(e)).exists())throw console.error("[joinRoom] Miestnosť neexistuje:",s.roomId),new Error("Miestnosť neexistuje");const n=(r=Di().currentUser)==null?void 0:r.uid;if(!n)throw new Error("Nie si prihlásený");return await Kk(e,{[`players.${n}`]:{name:s.playerName,score:0,isReady:!1,online:!0}}),console.log("[joinRoom] roomId:",s.roomId,"uid:",n),{uid:n}}function Yk(s,e,t){z.useEffect(()=>{if(!s)return;const n=Qa(tc,"rooms",s),r=qk(n,i=>{i.exists()&&(console.log("[useRoomSubscription] update:",s),e(i.data()))},i=>{console.error("[useRoomSubscription] chyba:",i.code,i.message),t==null||t(i)});return()=>r()},[s])}function Xk(){const s=ha(e=>e.status);return s==="connected"?c.jsx(Ai,{size:18,className:"text-green-400"}):s==="error"?c.jsx(Ii,{size:18,className:"text-red-400"}):c.jsx(Cu,{size:18,className:"ks-muted"})}function Zk({onBack:s,activeSkin:e,activeRules:t}){const{roomId:n,status:r,setRoomId:i,setUid:a,setRoomState:l,setStatus:d,reset:h}=ha(),[m,p]=z.useState(""),[b,I]=z.useState(""),[S,P]=z.useState(""),[T,L]=z.useState(!1),[N,V]=z.useState(!1),[U,H]=z.useState(!1),[Y,x]=z.useState("");Yk(n,ne=>l(ne),()=>d("error"));const y=async()=>{const ne=Di();return ne.currentUser||await sy(ne),ne.currentUser.uid},_=U&&Y.trim()?Y.trim():"hráč",w=async()=>{L(!0),P("");try{const ne=await y(),Ne=await Qk({hostName:_,pin:"0000",selectedSkin:e||"classic",rules:t||[]});i(Ne),a(ne),d("connected")}catch{P("Chyba pri vytváraní miestnosti")}finally{L(!1)}},k=async()=>{const ne=m.toUpperCase().trim();if(!ne){I("Zadaj kód miestnosti");return}L(!0),I("");try{const Ne=await y();await Jk({roomId:ne,playerName:_}),i(ne),a(Ne),d("connected")}catch(Ne){I(Ne.message||"Miestnosť neexistuje")}finally{L(!1)}},E=()=>{s()},v=()=>{window.confirm("Naozaj sa chceš odhlásiť? Máš zapísaný kód miestnosti?")&&(h(),s())},ye=()=>{navigator.clipboard.writeText(n||"").then(()=>{V(!0),setTimeout(()=>V(!1),2e3)})};return c.jsxs("div",{className:"min-h-screen ks-bg ks-cream ks-body flex flex-col",children:[c.jsxs("div",{className:"flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-4 border-b ks-border-sub",children:[c.jsx("button",{onClick:E,className:"ks-press p-2 rounded-sm ks-border-sub border",children:c.jsx(qs,{size:20,className:"ks-gold"})}),c.jsx("h2",{className:"ks-display ks-gold text-2xl font-semibold flex-1",children:"Online miestnosť"}),c.jsx(Xk,{})]}),c.jsxs("div",{className:"flex-1 px-4 py-5 max-w-md w-full mx-auto flex flex-col gap-4 overflow-y-auto",children:[!n&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:c.jsxs("div",{className:"px-4 py-4 space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"ks-muted text-xs ks-mono block mb-1",children:"KÓD MIESTNOSTI"}),c.jsx("input",{value:m,onChange:ne=>{p(ne.target.value.toUpperCase().slice(0,8)),I(""),P("")},onKeyDown:ne=>ne.key==="Enter"&&k(),placeholder:"Zadaj existujúci kód",className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none ks-mono tracking-widest"})]}),c.jsxs("div",{children:[c.jsxs("button",{onClick:()=>H(ne=>!ne),className:"flex items-center gap-2 ks-press",children:[c.jsx("div",{className:`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${U?"ks-gold-bg border-transparent":"ks-border-sub border"}`,children:U&&c.jsx(mn,{size:11,className:"text-black"})}),c.jsx(Fc,{size:13,className:"ks-muted"}),c.jsx("span",{className:"ks-muted text-xs",children:"Chcem zadať meno zariadenia"})]}),c.jsx("p",{className:"ks-muted text-xs mt-1 ml-6 leading-relaxed opacity-70",children:"Meno sa zobrazí druhému zariadeniu. Je to len voliteľné označenie."}),U&&c.jsx("div",{className:"mt-3 ml-6",children:c.jsx("input",{value:Y,onChange:ne=>x(ne.target.value.slice(0,20)),placeholder:"napr. Obývačka, Telefón...",autoFocus:!0,className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"})})]}),b&&c.jsx("p",{className:"text-red-400 text-xs",children:b}),c.jsx("button",{onClick:k,disabled:T||!m.trim(),className:"ks-gold-bg w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm",children:T?"Pripájam...":"PRIPOJIŤ SA"})]})}),c.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:c.jsxs("div",{className:"px-4 py-4 space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Ao,{size:16,className:"ks-muted"}),c.jsx("h3",{className:"ks-cream font-semibold",children:"Vytvoriť novú miestnosť"})]}),c.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Toto vytvorí nový kód miestnosti pre synchronizáciu aktuálnej hry, archívu a skinu."}),S&&c.jsx("p",{className:"text-red-400 text-xs",children:S}),c.jsx("button",{onClick:w,disabled:T,className:"border ks-border-sub w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm ks-gold",children:T?"Vytváram...":"VYTVORIŤ MIESTNOSŤ"})]})})]}),n&&c.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[c.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b ks-border-sub",children:[c.jsxs("div",{className:"flex items-center gap-2 ks-muted text-xs ks-mono",children:[c.jsx(Ai,{size:13}),"AKTÍVNA MIESTNOSŤ"]}),c.jsxs("div",{className:`flex items-center gap-1.5 text-xs ks-mono ${r==="error"?"text-red-400":"text-green-400"}`,children:[c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${r==="error"?"bg-red-400":"bg-green-400"}`}),r==="error"?"CHYBA":"ONLINE"]})]}),c.jsxs("div",{className:"px-4 py-6 text-center",children:[c.jsx("div",{className:"ks-gold ks-mono text-5xl font-bold tracking-widest mb-2",children:n}),c.jsx("div",{className:"ks-muted text-xs",children:"Zdieľaj tento kód s druhým zariadením"}),U&&Y.trim()&&c.jsxs("div",{className:"mt-3 flex items-center justify-center gap-1.5 ks-muted text-xs",children:[c.jsx(Fc,{size:12}),c.jsxs("span",{children:["Toto zariadenie: ",c.jsx("span",{className:"ks-cream font-semibold",children:Y.trim()})]})]})]}),c.jsxs("div",{className:"border-t ks-border-sub",children:[c.jsxs("button",{onClick:ye,className:"w-full flex items-center justify-center gap-2 py-3 ks-press ks-muted text-sm border-b ks-border-sub",children:[N?c.jsx(mn,{size:16,className:"text-green-400"}):c.jsx(jf,{size:16}),N?"Skopírované!":"Kopírovať kód"]}),c.jsxs("button",{onClick:v,className:"w-full flex items-center justify-center gap-2 py-2.5 ks-press ks-muted text-xs",children:[c.jsx(Vf,{size:14}),"Odhlásiť sa"]})]})]}),c.jsxs("div",{className:"mt-auto ks-card border ks-border-sub rounded-sm px-4 py-4 flex gap-3",children:[c.jsx(Ao,{size:18,className:"ks-muted flex-shrink-0 mt-0.5"}),c.jsx("p",{className:"ks-muted text-sm leading-relaxed",children:"Synchronizuje sa aktuálna hra, archív hier a aktívny skin v reálnom čase cez Firebase. Každé zariadenie hrá lokálne."})]})]})]})}const e0={1:Jf,2:Qf,3:Gf,4:Wf,5:Hf,6:qf},yt={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}}},ia={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},inkfree:{id:"inkfree",name:"Ink Free",stack:"'Ink Free', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}};function t0(s,e){const t=ia[e]||ia.default,r=(yt[s]||yt.classic).vars;let i=":root{"+Object.entries(r).map(([a,l])=>`${a}:${l}`).join(";")+`;--ks-font-display:${t.stack};--ks-font-body:${t.stack};--ks-font-mono:${t.monoStack}}`;return s==="blackwhite"&&(i+=`
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
`),s==="parchment"&&(i+=`
.ks-card{background:rgba(248,241,226,0.96)!important;border-color:rgba(195,165,112,0.36)!important}
.ks-card:hover{border-color:rgba(200,165,95,0.60)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(195,165,112,0.25)!important}
.ks-live-row:hover td{background:rgba(232,218,196,0.55)!important}
`),s==="whiteblack"&&(i+=`
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
`),i}const Tu=[50,100,300,400,500,600,1e3,1500,2e3],Bn=-1e3,Iu=[{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"fight"},{msg:"Také mrviny? Vážne?",emoji:"😀",variant:"doubt"},{msg:"Toto ťa nezachráni…",emoji:"💀",variant:"doom"},{msg:"Tak takto sa hra nevyhráva!",emoji:"🎭",variant:"fight"},{msg:"Hej majster… si si istý?",emoji:"😆",variant:"doubt"},{msg:"Riskni to konečne!",emoji:"🎲",variant:"fight"}],Gn=[{id:"cat-basic",title:"Bodové hodnoty kociek",subtitle:"Samostatné kocky",ruleIds:["r1","r2"]},{id:"cat-trio",title:"Trojice rovnakých",subtitle:"Tri rovnaké kocky",ruleIds:["r3","r4","r5","r6","r7","r8"]},{id:"cat-special",title:"Špeciálne kombinácie",subtitle:"Postupka a tri páry",ruleIds:["r9","r10"]},{id:"cat-multi",title:"Násobky kociek",subtitle:"Štyri, päť, šesť rovnakých",ruleIds:["r11","r12","r13"]}],Au=["r14","r15","r16","r17","r18"];function hr(s){return s?new Date(s).toLocaleString("sk-SK",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function lf(s,e){if(!s||!e)return null;const t=new Date(e)-new Date(s);if(t<0)return null;const n=Math.floor(t/6e4);if(n<60)return`${n} min`;const r=Math.floor(n/60),i=n%60;return`${r} h ${i} min`}const fr={POPUP_DISPLAY_DURATION:2e3,QUEUE_SIZE:1,VERTICAL_OFFSET:"0px",OPACITY:.92},Kr=[{id:"r1",name:"Jednotka",description:"Samostatná kocka s hodnotou 1",points:100,type:"numeric",dice:[1]},{id:"r2",name:"Päťka",description:"Samostatná kocka s hodnotou 5",points:50,type:"numeric",dice:[5]},{id:"r3",name:"Tri jednotky",description:"Trojica jednotiek",points:1e3,type:"numeric",dice:[1,1,1]},{id:"r4",name:"Tri dvojky",description:"Trojica dvojok",points:200,type:"numeric",dice:[2,2,2]},{id:"r5",name:"Tri trojky",description:"Trojica trojok",points:300,type:"numeric",dice:[3,3,3]},{id:"r6",name:"Tri štvorky",description:"Trojica štvoriek",points:400,type:"numeric",dice:[4,4,4]},{id:"r7",name:"Tri päťky",description:"Trojica päťok",points:500,type:"numeric",dice:[5,5,5]},{id:"r8",name:"Tri šestky",description:"Trojica šestiek",points:600,type:"numeric",dice:[6,6,6]},{id:"r9",name:"Postupka 1–6",description:"Šesť kociek za sebou: 1·2·3·4·5·6",points:2e3,type:"numeric",dice:[1,2,3,4,5,6]},{id:"r10",name:"Tri páry",description:"Tri rôzne páry kociek",points:1e3,type:"numeric",dice:[2,2,4,4,6,6]},{id:"r11",name:"Štyri rovnaké",description:"Štyri rovnaké kocky",points:0,type:"select",options:["Dvojnásobok trojice","Pevná hodnota"],selected:"Dvojnásobok trojice",dice:[3,3,3,3]},{id:"r12",name:"Päť rovnakých",description:"Päť rovnakých kociek",points:0,type:"select",options:["Štvornásobok trojice","Pevná hodnota"],selected:"Štvornásobok trojice",dice:[4,4,4,4,4]},{id:"r13",name:"Šesť rovnakých",description:"Všetkých šesť kociek rovnakých",points:0,type:"select",options:["Automatická výhra","Pevná hodnota 3000"],selected:"Automatická výhra",dice:[5,5,5,5,5,5]},{id:"r14",name:"Minimálny odpis (prvý zápis)",description:"Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.",points:300,type:"numeric",dice:[]},{id:"r15",name:"Cieľové skóre",description:"Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.",points:1e4,type:"numeric",dice:[]},{id:"r16",name:"Nič nehodené",description:"Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.",points:-1e3,type:"numeric",dice:[2,3,4,6]},{id:"r17",name:"Prekročenie cieľa",description:"Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).",points:0,type:"select",options:["Automatická čiarka","Hod sa neuznáva"],selected:"Automatická čiarka",dice:[]},{id:"r18",name:"Režim potvrdenia víťazstva",description:"Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.",points:0,type:"select",options:["Áno","Nie"],selected:"Áno",dice:[]}];function oa({value:s,size:e=28}){const t=e0[s];return t?c.jsx(t,{size:e,strokeWidth:1.5}):null}function uf({dice:s,size:e=24}){return!s||s.length===0?c.jsx("span",{className:"ks-muted text-sm italic",children:"—"}):c.jsx("div",{className:"flex flex-wrap gap-1 items-center",children:s.map((t,n)=>c.jsx("div",{className:"ks-gold",style:{display:"inline-flex"},children:c.jsx(oa,{value:t,size:e})},n))})}function st({children:s,onClick:e,disabled:t,className:n="",icon:r,variant:i="gold"}){const a="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return c.jsxs("button",{onClick:e,disabled:t,className:`${a} ${l[i]} ${n}`,children:[r&&c.jsx(r,{size:18,strokeWidth:2}),s]})}function xs({title:s,onBack:e,right:t}){return c.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?c.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[c.jsx(qs,{size:20}),c.jsx("span",{className:"ks-body",children:"Späť"})]}):c.jsx("div",{className:"w-16"}),c.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:s}),c.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function s0({msg:s,kind:e,onClose:t}){const n={info:"ks-border-accent bg-amber-950/90 ks-cream",warn:"border-amber-600/70 bg-amber-900/80 ks-text-accent",overshoot:"border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50"},r=e==="overshoot"?da:e==="warn"?Ii:mn;return c.jsx("div",{className:"fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor",style:{pointerEvents:"none"},children:c.jsxs("div",{className:`max-w-md mx-auto p-3 rounded-sm border ${n[e]||n.info} flex items-start gap-2 shadow-2xl`,style:{pointerEvents:"auto",opacity:"var(--ks-popup-opacity, 0.92)"},children:[c.jsx(r,{size:20,className:"shrink-0 mt-0.5"}),c.jsx("div",{className:"ks-body flex-1 text-sm font-medium",children:s}),c.jsx("button",{"aria-label":"Zatvoriť",onClick:t,className:"opacity-70 hover:opacity-100",children:c.jsx(ps,{size:16})})]})})}function df({size:s=96,color:e="#d4b86a",strikeColor:t="#c44848"}){return c.jsxs("svg",{width:s,height:s,viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"},children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"crownGold",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"1"}),c.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.7"})]})}),c.jsx("path",{d:"M 16 36 L 24 60 L 72 60 L 80 36 L 66 48 L 48 24 L 30 48 Z",fill:"url(#crownGold)",stroke:e,strokeWidth:"2",strokeLinejoin:"round"}),c.jsx("rect",{x:"22",y:"60",width:"52",height:"8",fill:e,stroke:e,strokeWidth:"1",rx:"1"}),c.jsx("circle",{cx:"48",cy:"32",r:"3.5",fill:"#fff",stroke:e,strokeWidth:"1"}),c.jsx("circle",{cx:"20",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),c.jsx("circle",{cx:"76",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),c.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:"#000",strokeWidth:"7",strokeLinecap:"round",opacity:"0.5"}),c.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:t,strokeWidth:"4",strokeLinecap:"round"})]})}function qr({kind:s,title:e,subtitle:t,onClose:n,actionLabel:r}){const i={victory:{accent:"#d4b86a",label:"VÍŤAZ"},draw:{accent:"#d4b86a",label:"REMÍZA"},"temporary-king":{accent:"#c44848",label:"DOČASNÝ KRÁĽ"},"win-pending":{accent:"#d4b86a",label:"POTVRD VÝHRU"}}[s]||{accent:"#d4b86a",label:""},a=({size:l=56})=>s==="temporary-king"?c.jsx(df,{size:l}):c.jsx(Bs,{size:l,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"}});return c.jsx("div",{className:"fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center",onClick:n,children:c.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:i.accent,opacity:"var(--ks-popup-opacity, 0.92)",cursor:"pointer"},children:[c.jsx("div",{className:"flex justify-center mb-3",children:c.jsx(a,{})}),c.jsx("div",{className:"ks-mono text-xs tracking-widest mb-2",style:{color:i.accent},children:i.label}),e&&c.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:e}),t&&c.jsx("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug",children:t}),r&&c.jsx("div",{className:"ks-mono text-[10px] ks-muted mt-3 tracking-widest",children:r})]})})}function Su({data:s,onClose:e}){const t=typeof s=="string"?s:s==null?void 0:s.msg,n=typeof s=="string"?"🤨":(s==null?void 0:s.emoji)||"🤨",r=typeof s=="string"?"doubt":(s==null?void 0:s.variant)||"doubt",i={doubt:{bg:"radial-gradient(circle at center, rgba(80,30,30,0.95), rgba(0,0,0,0.95))",label:"DOTAZ Z PUBLIKA",glow:"rgba(212,184,106,0.4)",labelColor:"#d4b86a"},fight:{bg:"radial-gradient(circle at center, rgba(120,40,30,0.95), rgba(20,10,5,0.97))",label:"POVZBUDENIE",glow:"rgba(231,128,82,0.5)",labelColor:"#e08854"},doom:{bg:"radial-gradient(circle at center, rgba(60,20,20,0.97), rgba(0,0,0,0.98))",label:"PROROCTVO",glow:"rgba(196,72,72,0.5)",labelColor:"#c44848"}},a=i[r]||i.doubt;return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:a.bg},onClick:e,children:[c.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[c.jsx("div",{className:"absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${a.glow}, transparent 70%)`}}),c.jsx("div",{className:"absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${a.glow}, transparent 70%)`,animationDelay:"1s"}}),c.jsx("div",{className:"absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${a.glow}, transparent 70%)`,animationDelay:"0.5s"}})]}),c.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",onClick:l=>l.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[c.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${a.labelColor})`}}),c.jsx("span",{style:{color:a.labelColor},className:"text-xs",children:"✦"}),c.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${a.labelColor}, transparent)`}})]}),c.jsx("div",{className:"mb-3 ks-funny-emoji flex justify-center",style:{filter:`drop-shadow(0 4px 16px ${a.glow})`},children:n==="strikethrough-crown"?c.jsx(df,{size:112,color:"#d4b86a",strikeColor:"#c44848"}):c.jsx("span",{className:"text-7xl",children:n})}),c.jsx("div",{className:"ks-mono text-xs mb-3 tracking-widest",style:{color:a.labelColor},children:a.label}),c.jsx("div",{className:"ks-display text-5xl font-bold ks-cream leading-tight px-4",style:{textShadow:`0 4px 24px ${a.glow}, 0 0 40px ${a.glow}`},children:t}),c.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4",children:[c.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${a.labelColor})`}}),c.jsx("span",{style:{color:a.labelColor},className:"text-xs",children:"✦"}),c.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${a.labelColor}, transparent)`}})]}),c.jsx("button",{onClick:e,className:"ks-press mt-5 ks-mono ks-muted text-xs tracking-widest",children:"ZATVORIŤ"})]})]})}function n0({kind:s,icon:e,children:t}){const n={info:"border-amber-800/30 bg-amber-950/30 ks-text-accent/90",warn:"border-red-800/40 bg-red-950/30 ks-text-accent",gold:"border-amber-600/60 bg-amber-900/30 ks-text-accent"};return c.jsxs("div",{className:`flex items-start gap-2 text-sm border rounded-sm p-2 ${n[s]}`,children:[c.jsx(e,{size:16,className:"mt-0.5 shrink-0 ks-gold"}),c.jsx("div",{className:"ks-body",children:t})]})}function r0(){console.log("[APP] App component mounted");const[s,e]=z.useState("menu"),[t,n]=z.useState([]),[r,i]=z.useState(null),[a,l]=z.useState(Kr),[d,h]=z.useState(null),[m,p]=z.useState("menu"),[b,I]=z.useState(!1),[S,P]=z.useState("classic"),[T,L]=z.useState("default"),[N,V]=z.useState("delta"),[U,H]=z.useState("basic"),[Y,x]=z.useState("standard");z.useEffect(()=>{console.log("[APP] view changed",s),(async()=>{try{const D=await window.storage.get("rules");D!=null&&D.value&&l(JSON.parse(D.value))}catch{}try{const D=await window.storage.get("scoreDisplayMode");D!=null&&D.value&&V(JSON.parse(D.value))}catch{}try{const D=await window.storage.get("tournamentViewMode");D!=null&&D.value&&H(JSON.parse(D.value))}catch{}try{const D=await window.storage.get("funnyWindowsDisplayMode");D!=null&&D.value&&x(JSON.parse(D.value))}catch{}try{const D=await window.storage.get("selectedFont");if(D!=null&&D.value){const B=JSON.parse(D.value);L(ia[B]?B:"default")}}catch{}try{const D=await window.storage.get("selectedSkin");if(D!=null&&D.value){const B=JSON.parse(D.value);P(yt[B]?B:"classic")}}catch{try{const D=localStorage.getItem("ks-skin");D&&P(D)}catch{}}try{const D=await window.storage.get("tournaments");D!=null&&D.value&&n(JSON.parse(D.value))}catch{}try{const D=await window.storage.get("active");D!=null&&D.value&&i(JSON.parse(D.value))}catch{}I(!0)})()},[]),z.useEffect(()=>{b&&window.storage.set("scoreDisplayMode",JSON.stringify(N)).catch(()=>{})},[N,b]),z.useEffect(()=>{b&&window.storage.set("tournamentViewMode",JSON.stringify(U)).catch(()=>{})},[U,b]),z.useEffect(()=>{b&&window.storage.set("funnyWindowsDisplayMode",JSON.stringify(Y)).catch(()=>{})},[Y,b]),z.useEffect(()=>{b&&window.storage.set("selectedFont",JSON.stringify(T)).catch(()=>{})},[T,b]),z.useEffect(()=>{if(b){window.storage.set("selectedSkin",JSON.stringify(S)).catch(()=>{});try{localStorage.setItem("ks-skin",S)}catch{}}},[S,b]),z.useEffect(()=>{b&&window.storage.set("rules",JSON.stringify(a)).catch(()=>{})},[a,b]),z.useEffect(()=>{b&&window.storage.set("tournaments",JSON.stringify(t)).catch(()=>{})},[t,b]),z.useEffect(()=>{b&&(r?window.storage.set("active",JSON.stringify(r)).catch(()=>{}):window.storage.delete("active").catch(()=>{}))},[r,b]);const y=z.useMemo(()=>{const D=a.find(B=>B.id==="r14");return D&&Number(D.points)||300},[a]);function _(D,B){console.log("[APP] startTournament called",{players:D,targetScore:B}),i({id:Date.now(),date:new Date().toISOString(),players:D,rounds:[],currentPlayer:0,currentRound:0,status:"active",winner:null,winPending:null,winCandidates:[],winRoundComplete:!1,targetScore:B,minWriteOff:y}),e("tournament")}function w(D){i(B=>B&&(typeof D=="function"?D(B):D))}function k(D){if(!r)return;const B=Ti({...r});if(!B.valid){const de=`Turnaj nemôže byť uzatvorený — nájdené nezhody:

`+B.errors.join(`
`)+`

Reason: `+B.reason;window.alert(de),console.error("[finishTournament] Validation failed:",B);return}const fe=Array.isArray(D)?[...D]:[D],Z=[...B.winners];if(fe.sort(),Z.sort(),!(fe.length===Z.length&&fe.every((de,pe)=>de===Z[pe]))){const de=`Diskrepancia v určení víťaza:

Hra deklaruje víťazov: ${fe.map(pe=>r.players[pe]).join(", ")}
Validácia podľa súčtov: ${Z.map(pe=>r.players[pe]).join(", ")}

Turnaj sa neuzatvorí — kontaktuj vývojára (alebo skús presný stav v archíve).`;window.alert(de),console.error("[finishTournament] Winner mismatch:",{declaredWinners:fe,computedWinners:Z,totals:B.totals});return}const Ee={...r,status:"finished",winner:Z.length===1?Z[0]:Z,finishedAt:new Date().toISOString(),_validatedTotals:B.totals};n(de=>[Ee,...de]),i(null),h(Ee),e("archiveDetail")}function E(){r&&window.confirm("Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.")&&(n(D=>[{...r,status:"aborted",finishedAt:new Date().toISOString()},...D]),i(null),e("menu"))}function v(D,B){n(fe=>fe.map(Z=>Z.id===D?{...Z,...B}:Z)),(d==null?void 0:d.id)===D&&h(fe=>({...fe,...B}))}async function ye(){if(t.length===0){window.alert("Archív je prázdny — nie je čo exportovať.");return}const D=(await ii(async()=>{const{default:F}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:F}},[],import.meta.url)).default||await ii(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url);function B(F){return F.winner===null||F.winner===void 0?[]:(Array.isArray(F.winner)?F.winner:[F.winner]).map(ve=>F.players[ve])}function fe(F){const re=B(F);return re.length===0?"—":re.length===1?re[0]:`Remíza: ${re.join(", ")}`}const Z=D.utils.book_new(),le=t.map((F,re)=>({"#":re+1,Začiatok:hr(F.date),Koniec:F.finishedAt?hr(F.finishedAt):"—",Cieľ:F.targetScore||1e4,"Počet hráčov":F.players.length,Hráči:F.players.join(", "),Víťaz:fe(F),Stav:F.status==="finished"?"Dokončený":F.status==="aborted"?"Nedokončený":"Aktívny"})),Ee=D.utils.json_to_sheet(le);Ee["!cols"]=[{wch:5},{wch:20},{wch:20},{wch:8},{wch:12},{wch:30},{wch:20},{wch:14}],D.utils.book_append_sheet(Z,Ee,"Prehľad"),t.forEach((F,re)=>{const ve=[],Ze=new Date(F.date),Be=F.finishedAt?new Date(F.finishedAt):null,It=Ze.toLocaleDateString("sk-SK",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\s/g,""),Ke=Ze.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}),_t=Be?Be.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}):"",ke=_t?`${Ke}-${_t}`:Ke;ve.push([`Hra ${It} ${ke} — ${F.players.join(", ")}`]),ve.push([]),ve.push(["Kolo",...F.players]);const lt=new Array(F.players.length).fill(0);(F.rounds||[]).forEach((Me,me)=>{const W=[me+1];for(let Ce=0;Ce<F.players.length;Ce++){const Ue=Me[Ce];typeof Ue=="number"?(lt[Ce]+=Ue,W.push(lt[Ce])):Ue==="dash"?W.push("—"):W.push(null)}ve.push(W)}),ve.push(["MAX",...lt]);let ut="— Nedokončený turnaj";const dt=B(F);if(dt.length===1){const Me=Array.isArray(F.winner)?F.winner[0]:F.winner;ut=`🏆 Víťaz: ${dt[0]} (${lt[Me]})`}else dt.length>1&&(ut=`🏆 Remíza: ${(Array.isArray(F.winner)?F.winner:[F.winner]).map(W=>`${F.players[W]} (${lt[W]})`).join(", ")}`);ve.push([ut]);const Te=D.utils.aoa_to_sheet(ve);Te["!cols"]=[{wch:6},...F.players.map(()=>({wch:14}))],D.utils.book_append_sheet(Z,Te,`Hra ${re+1}`.substring(0,31))});const de=`kocky-sveta-${new Date().toISOString().slice(0,10)}.xlsx`,pe=D.write(Z,{bookType:"xlsx",type:"base64"});try{if(er.isNativePlatform()){const F=await wm.writeFile({path:de,data:pe,directory:No.Documents,recursive:!0}),re=await Zc.canShare();re!=null&&re.value?await Zc.share({title:"Export Kocky sveta",text:"Exportované dáta z aplikácie Kocky sveta",url:F.uri,dialogTitle:"Uložiť alebo zdieľať export"}):window.alert("Export uložený do Documents: "+de);return}}catch(F){console.error("Native Android export failed:",F),window.alert("Natívny export zlyhal: "+((F==null?void 0:F.message)||"neznáma chyba")+`

Skontroluj, či si po npm install spustil aj npx cap sync android.`)}try{D.writeFile(Z,de)}catch{const re=new Blob([D.write(Z,{bookType:"xlsx",type:"array"})],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),ve=URL.createObjectURL(re),Ze=document.createElement("a");Ze.href=ve,Ze.download=de,document.body.appendChild(Ze),Ze.click(),Ze.remove(),URL.revokeObjectURL(ve),setTimeout(()=>URL.revokeObjectURL(ve),4e3)}}async function ne(D){try{const B=await D.arrayBuffer(),fe=XLSX.read(B,{type:"array"}),Z=[],le=[];for(const pe of fe.SheetNames){let F=function(J){if(J==null)return!1;const ie=String(J).trim();return ie==="—"||ie==="-"||ie==="–"||ie==="−"},re=function(J){return J==null?!0:String(J).trim()===""},ve=function(J){if(typeof J=="number")return J;if(typeof J=="string"){const ie=J.replace(/\s/g,"").replace(",","."),je=parseFloat(ie);return Number.isFinite(je)?je:null}return null};if(/prehľad|prehlad|summary/i.test(pe))continue;const Ze=fe.Sheets[pe],Be=XLSX.utils.sheet_to_json(Ze,{header:1,defval:null,raw:!0});if(!Be||Be.length<4){le.push(`${pe}: príliš krátky list`);continue}const It=Be[0],Ke=(It&&It[0]?String(It[0]):"").trim(),_t=Ke.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/),ke=Ke.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/),lt=Ke.match(/[—–-]\s*(.+)$/);let ut=-1;for(let J=0;J<Math.min(Be.length,6);J++){const ie=Be[J]||[];if(ie[0]&&/^kolo$/i.test(String(ie[0]).trim())){ut=J;break}}if(ut<0){le.push(`${pe}: nenájdený riadok "Kolo"`);continue}const dt=Be[ut],Te=[];for(let J=1;J<dt.length;J++){const ie=dt[J];if(ie&&String(ie).trim())Te.push(String(ie).trim());else break}if(Te.length<2){le.push(`${pe}: nenájdené mená hráčov`);continue}const Me=[];for(let J=ut+1;J<Be.length;J++){const ie=Be[J]||[];if(!ie[0])break;const je=String(ie[0]).trim();if(/^max$/i.test(je)||/^¤â$/i.test(je)||/^suma$/i.test(je)||/víťaz|vitaz|🏆/i.test(je))break;const we=parseInt(je,10);if(!Number.isFinite(we))break;Me.push(ie.slice(1,1+Te.length))}if(Me.length===0){le.push(`${pe}: žiadne dátové riadky`);continue}const me=Me.map(()=>new Array(Te.length).fill(null));for(let J=0;J<Te.length;J++){let ie=0,je=!1;for(let we=0;we<Me.length;we++){const ge=Me[we][J];if(F(ge))me[we][J]="dash";else if(re(ge))me[we][J]=null;else{const Oe=ve(ge);if(Oe===null)me[we][J]=null;else{const Qe=je?Oe-ie:Oe;me[we][J]=Qe,ie=Oe,je=!0}}}}let W=null;for(let J=0;J<Be.length;J++){const ie=Be[J]||[],we=(ie[0]?String(ie[0]):"").match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);if(we){const ge=we[1].trim(),Oe=Te.findIndex(Qe=>Qe.toLowerCase()===ge.toLowerCase());Oe>=0&&(W=Oe);break}}if(W===null){const J=Te.map((je,we)=>me.reduce((ge,Oe)=>ge+(typeof Oe[we]=="number"?Oe[we]:0),0)),ie=J.indexOf(Math.max(...J));J[ie]>=5e3&&(W=ie)}let Ce=new Date,Ue=null;if(_t){const J=parseInt(_t[1],10),ie=parseInt(_t[2],10)-1,je=parseInt(_t[3],10);let we=12,ge=0,Oe=null,Qe=null;ke&&(we=parseInt(ke[1],10),ge=parseInt(ke[2],10),ke[3]&&(Oe=parseInt(ke[3],10),Qe=parseInt(ke[4],10))),Ce=new Date(je,ie,J,we,ge),Oe!==null&&(Ue=new Date(je,ie,J,Oe,Qe))}const js=Te.map((J,ie)=>me.reduce((je,we)=>je+(typeof we[ie]=="number"?we[ie]:0),0)),$t=Math.max(...js),xt=$t>=7500?1e4:$t>=3500?5e3:1e4,Vs={id:Date.now()+Math.floor(Math.random()*1e3)+Z.length,date:Ce.toISOString(),finishedAt:Ue?Ue.toISOString():Ce.toISOString(),players:Te,rounds:me,currentPlayer:0,currentRound:me.length,status:W!==null?"finished":"aborted",winner:W,winPending:null,targetScore:xt,minWriteOff:300,imported:!0,importedFrom:pe};Z.push(Vs)}if(Z.length===0){window.alert(`Žiadne turnaje neboli importované.${le.length?`

Preskočené listy:
`+le.join(`
`):""}`);return}const Ee=[...Z,...t];n(Ee);let de=`Úspešne importované: ${Z.length} ${Z.length===1?"turnaj":Z.length<5?"turnaje":"turnajov"}.`;le.length&&(de+=`

Preskočené:
${le.join(`
`)}`),window.alert(de)}catch(B){console.error(B),window.alert("Chyba pri importe: "+(B.message||"neznáma chyba"))}}async function Ne(){if(!window.confirm(`⚠️ POZOR: Toto vymaže VŠETKY turnaje z archívu, rozohranú hru aj uložené pravidlá z tohto zariadenia.

Odporúčame najprv vytvoriť zálohu cez Export do Excelu.

Chceš pokračovať?`))return;if(window.prompt("Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).")!=="VYMAZAŤ"){window.alert("Vymazanie zrušené.");return}n([]),i(null),h(null),l(Kr),P("classic"),L("default"),await window.storage.delete("tournaments").catch(()=>{}),await window.storage.delete("selectedFont").catch(()=>{}),await window.storage.delete("active").catch(()=>{}),await window.storage.set("rules",JSON.stringify(Kr)).catch(()=>{}),await window.storage.set("selectedSkin",JSON.stringify("classic")).catch(()=>{}),window.alert("Všetky dáta boli vymazané.")}return c.jsxs("div",{className:"ks-bg min-h-screen ks-cream ks-body",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:[c.jsx("style",{children:t0(S,T)}),c.jsx("style",{children:`:root { --ks-popup-offset: ${fr.VERTICAL_OFFSET}; --ks-popup-opacity: ${fr.OPACITY}; }`}),s==="menu"&&c.jsx(Pm,{onNew:()=>e("newTournament"),onArchive:()=>{p("menu"),e("archive")},onrules:()=>e("rules"),onSettings:()=>e("settings"),onResume:r?()=>e("tournament"):null,active:r,tournamentCount:t.length}),s==="settings"&&c.jsx(i0,{onBack:()=>e("menu"),onOnline:()=>e("online"),onRulesEditor:()=>e("rulesEditor"),onExport:ye,onImport:ne,onClearAll:Ne,onArchive:()=>{p("settings"),e("archive")},tournamentCount:t.length,selectedSkin:S,onSkinChange:P,selectedFont:T,onFontChange:L,tournamentViewMode:U,onTournamentViewModeChange:H,onViewModes:()=>e("viewModes"),onVisualAndSkins:()=>e("visual"),funnyWindowsDisplayMode:Y,onFunnyWindowsDisplayModeChange:x}),s==="viewModes"&&c.jsx(Mm,{onBack:()=>e("settings"),selectedMode:U,onChangeMode:H,selectedSkin:S}),s==="visual"&&c.jsx(Um,{onBack:()=>e("settings"),selectedSkin:S,onSkinChange:P,selectedFont:T,onFontChange:L,tournamentViewMode:U,onTournamentViewModeChange:H,onViewModes:()=>e("viewModes")}),s==="newTournament"&&c.jsx(Vm,{onBack:()=>e("menu"),onStart:_}),s==="tournament"&&(r?c.jsx(c0,{tournament:r,rules:a,onUpdate:w,onFinish:k,onAbort:E,onMenu:()=>e("menu"),scoreDisplayMode:N,onToggleScoreMode:()=>V(D=>D==="delta"?"cumulative":"delta"),selectedSkin:S,onSkinChange:P,tournamentViewMode:U,funnyWindowsDisplayMode:Y}):c.jsx(xn,{title:"Turnaj sa nepodarilo načítať"})),s==="archive"&&c.jsx(g0,{tournaments:Array.isArray(t)?t:[],onBack:()=>e(m),onView:D=>{h(D),e("archiveDetail")},onDelete:D=>{window.confirm("Vymazať tento turnaj z archívu?")&&n(B=>B.filter(fe=>fe.id!==D))},readOnly:m==="menu"}),s==="archiveDetail"&&(d?c.jsx(b0,{tournament:d,onBack:()=>e("archive"),onUpdate:D=>v(d.id,D),readOnly:m==="menu",scoreDisplayMode:N,onToggleScoreMode:()=>V(D=>D==="delta"?"cumulative":"delta"),selectedSkin:S}):c.jsx(xn,{title:"Dáta turnaja sa nepodarilo načítať"})),s==="rules"&&c.jsx(d0,{rules:a,onBack:()=>e("menu")}),s==="online"&&c.jsx(Zk,{onBack:()=>e("settings")}),s==="rulesEditor"&&c.jsx(h0,{rules:a,onSave:l,onBack:()=>e("settings"),onReset:()=>{window.confirm("Obnoviť všetky pravidlá na pôvodné nastavenia?")&&l(Kr)},selectedSkin:S})]})}function xn({title:s="Dáta sa nepodarilo načítať"}){return c.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 ks-cream",children:c.jsxs("div",{className:"ks-card rounded-sm p-5 text-center max-w-md",children:[c.jsx("div",{className:"ks-display text-2xl ks-gold mb-2",children:s}),c.jsx("div",{className:"ks-muted text-sm",children:"Skús sa vrátiť späť alebo otvoriť turnaj znova."})]})})}function i0({onBack:s,onOnline:e,onRulesEditor:t,onExport:n,onImport:r,onClearAll:i,onArchive:a,tournamentCount:l,selectedSkin:d,onSkinChange:h,selectedFont:m,onFontChange:p,tournamentViewMode:b,onTournamentViewModeChange:I,onViewModes:S,onVisualAndSkins:P,funnyWindowsDisplayMode:T,onFunnyWindowsDisplayModeChange:L}){const N=z.useRef(null);function V(U){var Y;const H=(Y=U.target.files)==null?void 0:Y[0];H&&r&&r(H),N.current&&(N.current.value="")}return c.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[c.jsx(xs,{title:"Nastavenia",onBack:s}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"ONLINE"}),c.jsxs("button",{onClick:e,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(Ai,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Online miestnosť"}),c.jsx("div",{className:"ks-muted text-sm",children:"Synchronizácia hry, archívu a skinu cez Firebase"})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"PRAVIDLÁ A HODNOTY HRY"}),c.jsxs("button",{onClick:t,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(aa,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Úprava pravidiel"}),c.jsx("div",{className:"ks-muted text-sm",children:"Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"VIZUÁL A SKINY"}),c.jsxs("button",{onClick:S,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(Df,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Režim zobrazenia hry"}),c.jsx("div",{className:"ks-muted text-sm",children:b==="observer"?"Pozorovateľ":b==="recorder"?"Zapisovateľ":"Klasický"})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsxs("div",{className:"ks-card w-full p-4 rounded-sm",children:[c.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(Of,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Štýl oznámení"}),c.jsx("div",{className:"ks-muted text-sm",children:"Fullscreen funny okná, malé popupy alebo potlačený režim"})]})]}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:[["standard","Štandardný"],["simplified","Zjednodušený"],["suppressed","Potlačený"]].map(([U,H])=>c.jsx("button",{onClick:()=>L(U),className:`ks-press px-3 py-2 rounded-sm text-sm ${T===U?"ks-gold-bg":"border ks-border-sub ks-card ks-cream"}`,children:H},U))})]}),c.jsxs("button",{onClick:P,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(la,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Vizuál a Skiny"}),c.jsx("div",{className:"ks-muted text-sm",children:"Farby, písmo a vzhľad aplikácie"})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"SPRÁVA TURNAJOV"}),c.jsxs("button",{onClick:n,disabled:!l,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${l?"":"opacity-40 cursor-not-allowed"}`,children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(Lf,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Export do Excelu"}),c.jsx("div",{className:"ks-muted text-sm",children:l>0?`${l} turnajov · súbor .xlsx s listami`:"Žiadne turnaje na export"})]}),c.jsx(Mf,{className:"ks-muted",size:20})]}),c.jsxs("button",{onClick:()=>{var U;return(U=N.current)==null?void 0:U.click()},className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(Uf,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Import z Excelu"}),c.jsx("div",{className:"ks-muted text-sm",children:"Pridá turnaje z .xlsx súboru do archívu"})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsx("input",{ref:N,type:"file",accept:".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:V,className:"hidden"}),c.jsxs("button",{onClick:a,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(ua,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Editácia archívu"}),c.jsx("div",{className:"ks-muted text-sm",children:'Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá'})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsxs("div",{className:"ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5",children:[c.jsx(da,{size:11})," NEBEZPEČNÁ ZÓNA"]}),c.jsxs("button",{onClick:i,className:"ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center",children:c.jsx(Si,{size:22,className:"ks-text-accent"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-text-accent text-xl font-semibold",children:"Vymazať všetky dáta"}),c.jsx("div",{className:"ks-text-accent/70 text-sm",children:"Archív, rozohraná hra, pravidlá — nenávratná akcia"})]}),c.jsx(gt,{className:"ks-text-accent",size:20})]}),c.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2",children:[c.jsx(Ii,{size:14,className:"ks-gold shrink-0 mt-0.5"}),c.jsxs("div",{children:["Pred vymazaním dát si ",c.jsx("strong",{className:"ks-gold",children:"vytvor zálohu"})," cez Export do Excelu. Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca."]})]}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4",children:"O APLIKÁCII"}),c.jsxs("div",{className:"ks-card w-full p-4 rounded-sm space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:c.jsx(Ao,{size:22,className:"ks-gold"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Kocky sveta"}),c.jsx("div",{className:"ks-muted text-sm",children:"React + Vite + Firebase + Capacitor"})]})]}),c.jsxs("div",{className:"space-y-2 text-xs ks-muted leading-relaxed border-t ks-border-sub pt-3",children:[c.jsxs("p",{children:[c.jsx("span",{className:"ks-cream font-semibold",children:"Technológie:"})," React 18, Vite, Tailwind CSS, Firebase, Capacitor (Android/iOS)"]}),c.jsxs("p",{children:[c.jsx("span",{className:"ks-cream font-semibold",children:"Dáta:"})," Ukladané lokálne. Online sync cez Firebase Realtime DB."]}),c.jsxs("p",{children:[c.jsx("span",{className:"ks-cream font-semibold",children:"Exporty:"})," XLSX (SheetJS) — každý turnaj ako list + súhrnný prehľad."]}),c.jsxs("p",{children:[c.jsx("span",{className:"ks-cream font-semibold",children:"Vývoj:"})," Postavené s pomocou AI (Perplexity / Claude Sonnet). Dizajn, herná logika a pravidlá sú autorské."]})]})]})]})]})}function o0(s){const e=(s||[]).find(t=>t.id==="r18");return!e||e.selected!=="Áno"}function sc(s,e){return new Array(e).fill(0).map((t,n)=>{let r=0;for(const i of Array.isArray(s)?s:[]){const a=i==null?void 0:i[n];typeof a=="number"&&Number.isFinite(a)&&(r+=a)}return r})}function Ti(s){const e=(s==null?void 0:s.players)||[],t=(s==null?void 0:s.rounds)||[],n=(s==null?void 0:s.targetScore)||1e4,r=sc(t,e.length),i=r.map((T,L)=>({idx:L,total:T})).filter(T=>T.total>=n).map(T=>T.idx),a=(s.rules||[]).find(T=>T.id==="r18"),l=!a||a.selected!=="Nie",d=Array.isArray(s._confirmedDetailed)?s._confirmedDetailed:[],h=s.status==="finished"&&l&&d.length===0&&i.length>0,m=!l||h;if(i.length===0)return{winners:[],totals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:"Žiadny hráč ešte nedosiahol cieľ."};let p=[],b="",I=[];if(m){const T=i.map(N=>{var U;let V=0;for(let H=0;H<t.length;H++){const Y=(U=t[H])==null?void 0:U[N];if(typeof Y=="number"&&Number.isFinite(Y)&&(V+=Y),V>=n)return{idx:N,round:H}}return{idx:N,round:1/0}}),L=Math.min(...T.map(N=>N.round));p=T.filter(N=>N.round===L).map(N=>N.idx),b=p.length===1?`Hráč dosiahol cieľ ako prvý v kole ${L+1}.`:`${p.length} hráči dosiahli cieľ v rovnakom kole (${L+1}). Remíza.`}else{const T=d.filter(V=>i.includes(V.player));if(I=i.filter(V=>!T.some(U=>U.player===V)),T.length===0)return{winners:[],totals:r,achievers:i,pendingAchievers:I,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${i.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],reason:`${i.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`};const L=Math.min(...T.map(V=>V.round));if(p=T.filter(V=>V.round===L).map(V=>V.player),I.length>0)return{winners:[],totals:r,achievers:i,pendingAchievers:I,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${I.length} hráč(ov) ešte nepotvrdil(i) výhru.`],reason:`${I.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`};b=p.length===1?`Víťazstvo potvrdené najskôr v kole ${L+1}.`:`${p.length} hráči potvrdili víťazstvo v rovnakom kole (${L+1}). Remíza.`}const S=[];for(const T of p){if(typeof T!="number"||T<0||T>=e.length){S.push(`Neplatný index víťaza: ${T}.`);continue}r[T]<n&&S.push(`Víťaz "${e[T]}" má skóre ${r[T]}, čo je menej ako cieľ ${n}.`)}const P=S.length===0;return{winners:P?p:[],totals:r,achievers:i,pendingAchievers:I,isDraw:P&&p.length>1,valid:P,errors:S,reason:b}}function a0(){const[s,e]=z.useState(null),t=z.useRef([]),n=z.useRef(0),r=z.useRef(null),i=fr.POPUP_DISPLAY_DURATION,a=fr.QUEUE_SIZE;function l(){r.current&&(clearTimeout(r.current),r.current=null)}function d(){if(l(),t.current.length===0){e(null);return}const b=t.current.shift();n.current=Date.now()+i,e(b),r.current=setTimeout(d,b.duration??i)}function h(b){if(b){if(!s){n.current=Date.now()+i,e(b),l(),r.current=setTimeout(d,b.duration??i);return}t.current.length>=a?t.current[t.current.length-1]=b:t.current.push(b)}}function m(){l();const b=Date.now(),I=Math.max(0,n.current-b);e(null),t.current.length>0&&(r.current=setTimeout(d,I))}function p(){t.current=[],l(),e(null),n.current=0}return z.useEffect(()=>l,[]),{active:s,enqueue:h,dismiss:m,clear:p}}function c0({tournament:s,rules:e,onUpdate:t,onFinish:n,onAbort:r,onMenu:i,scoreDisplayMode:a,onToggleScoreMode:l,selectedSkin:d,onSkinChange:h,tournamentViewMode:m,funnyWindowsDisplayMode:p}){if(console.log("[TS] TournamentScreen mounted"),!s)return c.jsx(xn,{});const b=s.targetScore||1e4,I=s.minWriteOff||300,S=Array.isArray(s.players)?s.players:[],P=Array.isArray(s.rounds)?s.rounds:[],{currentPlayer:T=0,currentRound:L=0}=s,[N,V]=z.useState([]),[U,H]=z.useState(""),[Y,x]=z.useState(!1),[y,_]=z.useState(!1),[w,k]=z.useState(null),E=a0(),v=E.active,[ye,ne]=z.useState(!1),[Ne,D]=z.useState(null),[B,fe]=z.useState(null),[Z,le]=z.useState(!1),[Ee,de]=z.useState(null),[pe,F]=z.useState(!1),[re,ve]=z.useState(null),Ze=z.useRef(S.map(()=>0)),Be=z.useRef(new Set),It=z.useRef(new Set),Ke=z.useMemo(()=>sc(P,S.length),[P,S.length]),_t=z.useMemo(()=>S.map((O,G)=>P.some(K=>typeof K[G]=="number"&&K[G]>=0)),[S,P]),ke=Ke[T];_t[T];const lt=ke>=b-I&&ke<b,ut=o0(e),dt=ut?null:s.winPending,Te=dt===T&&dt!==null,Me=b-ke,me=T===S.length-1,W=N.reduce((O,G)=>O+(typeof G=="number"?G:0),0),Ce=ke+W;console.log("[TS] render snapshot",{currentPlayer:T,currentRound:L,isEndgame:lt,isWinPendingTurn:Te,winPendingPlayer:dt,total:ke,exactNeeded:Me,pendingSum:W,newTotal:Ce,showWinPendingPopup:ye});function Ue(O,G="info"){k({msg:O,kind:G}),setTimeout(()=>k(null),3500)}function js(O,G={}){const K=O?typeof O=="string"?{msg:O,emoji:"🎭",variant:"fight"}:O:Iu[Math.floor(Math.random()*Iu.length)];if(!(p==="suppressed"&&!G.forceFullscreen)){if(p==="simplified"&&!G.forceFullscreen){const Ve=G.duration??Math.max(fr.POPUP_DISPLAY_DURATION,2600);k({msg:K.msg,kind:"info"}),setTimeout(()=>k(null),Ve);return}E.enqueue({...K,duration:G.duration??3500})}}function $t(){if(W<=0||W>=500||Ze.current[T]>=3)return;const O=Math.max(...Ke),G=Math.min(...Ke),K=ke<O-1500,Ve=ke===G&&Ke.some(et=>et>ke+800);(K||Ve)&&Math.random()<.55&&(Ze.current[T]++,js())}function xt(O){if(!(!Number.isFinite(O)||O===0)){if(Te){Ue("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(N.some(G=>G==="dash"||G===Bn)){V([O]);return}V(G=>[...G,O])}}function Vs(){N.length===1&&N[0]==="dash"||V(["dash"])}function J(){if(Te){Ue("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}N.length===1&&N[0]===Bn||V([Bn])}function ie(O){V(G=>G.filter((K,Ve)=>Ve!==O))}function je(){V([])}function we(){if(N.length!==0){if(N[0]==="dash"){if(Te){if(Ne!==null&&(B==null?void 0:B.player)===T){ge(Ne,{confirmWin:!0,confirmedRound:(B==null?void 0:B.round)??L,confirmedPlayer:T}),D(null),fe(null);return}ge("dash",{confirmWin:!0,confirmedRound:L,confirmedPlayer:T});return}ge("dash");return}if(Te){if(W===0&&Ne!==null&&(B==null?void 0:B.player)===T){ge(Ne,{confirmWin:!0,confirmedRound:(B==null?void 0:B.round)??L,confirmedPlayer:T}),D(null),fe(null);return}Ue("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(N.some(O=>O<0)){if(N.length>1||N[0]!==Bn){Ue("Penalizácia −1 000 sa nedá kombinovať s inými bodmi.","warn");return}ge(Bn);return}if(lt){if(W===Me){if(ut){$t(),me||(console.log("[APP] HIT_TARGET toast branch",{currentPlayer:T,target:b}),Ue(`${S[T]} dosiahol cieľ ${b.toLocaleString("sk-SK")}! Kolo sa dohrá a hra skončí.`,"info")),ge(W,{addCandidate:T,autoConfirm:!0,confirmedRound:L,confirmedPlayer:T});return}D(W),fe({player:T,round:L}),ne(!0),me||(de(`${T}-${L}-${W}-endgame`),F(!0));return}Ue(`Koncovka — treba presne ${Me} bodov. Automatická čiarka!`,"overshoot"),ge("dash");return}if(W>0&&W<I){Ue(`Každý zápis musí byť aspoň ${I} bodov, alebo daj čiarku.`,"warn");return}if(Ce>b){Ue(`Prekročenie ${b.toLocaleString("sk-SK")} – automatická čiarka!`,"overshoot"),ge("dash");return}if(Ce===b){if($t(),ut){me||Ue(`${S[T]} dosiahol cieľ ... Kolo sa dohrá a hra skončí.`),ge(W,{addCandidate:T,autoConfirm:!0,confirmedRound:L,confirmedPlayer:T});return}if(me){$t(),ge(W,{addCandidate:T,autoConfirm:!0,confirmedRound:L,confirmedPlayer:T});return}de(`${T}-${L}-${W}`),le(!0),ge(W,{addCandidate:T});return}$t(),ge(W)}}function ge(O,G={}){t(K=>{const Ve=K.rounds.slice();for(Ve[K.currentRound]=[...K.rounds[K.currentRound]||[]];Ve.length<=K.currentRound;)Ve.push(new Array(K.players.length).fill(null));Ve[K.currentRound][K.currentPlayer]=O;let et=K.winner,Je=K.winPending,be=[...K.winCandidates||[]],St=K.winRoundComplete;G.confirmCandidate!==void 0&&(be.includes(G.confirmCandidate)||be.push(G.confirmCandidate),Je=G.confirmCandidate),G.addCandidate!==void 0&&(be.includes(G.addCandidate)||be.push(G.addCandidate));let vt=K._confirmedDetailed;if(G.autoConfirm){const Re={player:G.confirmedPlayer??K.currentPlayer,round:G.confirmedRound??K.currentRound,confirmedAt:Date.now()};vt=Array.isArray(K._confirmedDetailed)?[...K._confirmedDetailed.filter(qe=>!(qe.player===Re.player&&qe.round===Re.round)),Re]:[Re]}if(G.confirmWin){const Re={player:G.confirmedPlayer??K.currentPlayer,round:G.confirmedRound??K.currentRound,confirmedAt:Date.now()},qe=Array.isArray(K._confirmedDetailed)?[...K._confirmedDetailed.filter(Ds=>!(Ds.player===Re.player&&Ds.round===Re.round)),Re]:[Re],ss=(K.currentPlayer+1)%K.players.length,Kt=ss===0,ns=K.currentRound+(Kt?1:0);if(Je=null,Kt){const Ds={...K,rounds:Ve,_confirmedDetailed:qe,rules:K.rules},qt=Ti(Ds);return et=qt.valid&&qt.winners.length>0?qt.winners.length===1?qt.winners[0]:qt.winners:null,{...K,rounds:Ve,currentPlayer:ss,currentRound:ns,winner:et,winPending:Je,winCandidates:be,winRoundComplete:et!==null,_confirmedDetailed:qe}}return{...K,rounds:Ve,currentPlayer:ss,currentRound:ns,winner:et,winPending:Je,winCandidates:be,winRoundComplete:St,_confirmedDetailed:qe}}if(G.retryWin||G.declineWin){const Re=(K.currentPlayer+1)%K.players.length,qe=Re===0;return Je=K.currentPlayer,{...K,rounds:Ve,currentPlayer:qe?Je:Re,currentRound:K.currentRound+(qe?1:0),winner:et,winPending:Je,winCandidates:be,winRoundComplete:St}}if(G.__declineWin_removed)return be=be.filter(Re=>Re!==K.currentPlayer),Je=be.length>0?be[0]:null,{...K,rounds:Ve,...Je!==null?{currentPlayer:Je}:{},winner:et,winPending:Je,winCandidates:be};const Bt=(K.currentPlayer+1)%K.players.length,Nn=Bt===0,Ir=K.currentRound+(Nn?1:0);if(Nn){const Re={...K,rounds:Ve,_confirmedDetailed:vt,rules:K.rules},qe=Ti(Re);if(!qe.valid&&qe.achievers.length>0){const ss=qe.achievers.filter(Kt=>!(vt||[]).some(ns=>ns.player===Kt&&ns.round===K.currentRound));if(ss.length>0)return Je=ss[0],St=!0,{...K,rounds:Ve,currentPlayer:Je,currentRound:Ir,winner:null,winPending:Je,winCandidates:be,winRoundComplete:St,_confirmedDetailed:vt}}if(qe.winners.length>0)return et=qe.winners.length===1?qe.winners[0]:qe.winners,St=!0,{...K,rounds:Ve,currentPlayer:Bt,currentRound:K.currentRound,winner:et,winPending:null,winCandidates:be,winRoundComplete:St,_confirmedDetailed:vt}}return{...K,rounds:Ve,currentPlayer:Bt,currentRound:Ir,winner:et,winPending:Nn?null:Je,winCandidates:be,winRoundComplete:St,_confirmedDetailed:vt}}),V([]),H("")}z.useEffect(()=>{if(s.winner!==null&&s.winner!==void 0){E.clear(),k(null);const O=Array.isArray(s.winner)?s.winner:[s.winner];ve({winnerArr:O,isDraw:O.length>1});const G=setTimeout(()=>{ve(null),n(s.winner)},2200);return()=>clearTimeout(G)}},[s.winner]),z.useEffect(()=>{if(!lt)return;const O=`${T}_${L}`;if(Be.current.has(O))return;Be.current.add(O);const G=setTimeout(()=>{js({msg:`Hoď presne ${Me}! V koncovke potom treba potvrdenie. 😤`,emoji:"🤙",variant:"fight"},{duration:4500})},400);return()=>clearTimeout(G)},[T,L,lt,Te,Me]);const Oe=m==="observer",Qe=m==="recorder",At=Z&&Ee!==null;z.useEffect(()=>{if(Oe||Qe||!Te||ye)return;const O=`winpending_${T}_${L}`;if(It.current.has(O))return;It.current.add(O);const G=setTimeout(()=>{ne(!0)},300);return()=>clearTimeout(G)},[Te,T,L,ye,Oe,Qe]);function ts(){const O=parseInt(U,10);if(!(!Number.isFinite(O)||O===0)){if(O%50!==0){Ue("Hodnota musí byť násobok 50 (50, 100, 150…)","warn");return}xt(O),H("")}}return!s||!Array.isArray(s.players)||!Array.isArray(s.rounds)?c.jsx(xn,{}):c.jsxs("div",{className:`min-h-screen ks-fade ${Qe?"pb-6":"pb-32"}`,style:{background:(yt[d]||yt.classic).bg},children:[!Qe&&c.jsx(xs,{title:`Turnaj · do ${b.toLocaleString("sk-SK")}`,onBack:i,right:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:l,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:a==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:a==="delta"?c.jsx(ju,{size:16}):c.jsx(la,{size:16})}),c.jsx("button",{onClick:r,className:"ks-press ks-text-accent px-2 py-1 text-xs ks-mono",children:"ZRUŠIŤ"})]})}),Oe?c.jsx("div",{className:"px-2 pt-1 pb-3 h-[100dvh] flex flex-col",children:c.jsx("div",{className:"flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden",children:c.jsx("div",{className:"h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]",children:c.jsx(Ro,{tournament:s,totals:Ke,highlightPlayer:T,pendingPreview:W>0?W:0,target:b,displayMode:a,onToggleMode:l,hideModeToolbar:!1,hideModeToggle:!0,compactObserver:!0})})})}):Qe?c.jsxs("div",{className:"min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[c.jsxs("button",{onClick:i,className:"ks-press ks-cream flex items-center gap-1 px-2 py-1",children:[c.jsx(qs,{size:20}),c.jsx("span",{className:"ks-body",children:"Späť"})]}),c.jsx("div",{className:"ks-display ks-gold text-lg text-center",children:S[T]}),c.jsx("button",{onClick:r,className:"ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent",children:"ZRUŠIŤ"})]}),c.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[c.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[c.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",L+1]}),c.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",b.toLocaleString("sk-SK")]})]}),c.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),c.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:S[T]})]}),c.jsxs("div",{className:"text-right shrink-0",children:[c.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),c.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${ke<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:ke>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:ke.toLocaleString("sk-SK")})]})]})]}),c.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[N.length>0&&N[0]!=="dash"&&Number.isFinite(Ce)&&c.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",Ce.toLocaleString("sk-SK")]}),N[0]==="dash"?c.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):c.jsxs("div",{className:`ks-display text-6xl font-bold ${W<0?"ks-text-accent":"ks-gold"}`,children:[W>0?"+":"",W.toLocaleString("sk-SK")]})]})]}),N.length>0?c.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:N.map((O,G)=>c.jsxs("button",{onClick:()=>ie(G),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${O==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":O<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[c.jsx("span",{className:"ks-display font-semibold",children:O==="dash"?"— čiarka":O>0?`+${O}`:O}),c.jsx(ps,{size:14,className:"opacity-60 group-hover:opacity-100"})]},G))}):c.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),c.jsx(st,{onClick:we,disabled:N.length===0,icon:mn,className:"w-full text-lg",children:"Zapísať"})]}),c.jsxs("div",{className:"ks-card-sub rounded-sm p-4 flex-1",children:[c.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),c.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:Tu.map(O=>c.jsxs("button",{onClick:()=>xt(O),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",O]},O))}),c.jsxs("div",{className:"flex gap-2 mb-3",children:[c.jsx("input",{type:"number",value:U,onChange:O=>H(O.target.value),onKeyDown:O=>O.key==="Enter"&&ts(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),c.jsx(st,{onClick:ts,icon:So,variant:"outline",children:"Pridaj"})]}),c.jsx("div",{className:"ks-divider my-3"}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("button",{onClick:Vs,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[c.jsx(zc,{size:20,className:"ks-muted"}),c.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),c.jsxs("button",{onClick:J,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[c.jsx($c,{size:20,className:"ks-text-accent"}),c.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4",children:[c.jsx(st,{onClick:()=>_(!0),icon:Bc,variant:"ghost",children:"Priebeh hry"}),c.jsx(st,{onClick:()=>x(!0),icon:Io,variant:"ghost",children:"Pravidlá"})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"px-3 pt-3",children:c.jsx(Ro,{tournament:s,totals:Ke,highlightPlayer:T,pendingPreview:W>0?W:0,target:b,displayMode:a,onToggleMode:l,hideModeToolbar:!0})}),c.jsx("div",{className:"px-4 mt-4",children:c.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[c.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[c.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",L+1]}),c.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",b.toLocaleString("sk-SK")]})]}),c.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),c.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:S[T]})]}),c.jsxs("div",{className:"text-right shrink-0",children:[c.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),c.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${ke<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:ke>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:ke.toLocaleString("sk-SK")})]})]}),c.jsx("div",{className:"mt-3 space-y-1.5",children:lt&&c.jsxs(n0,{kind:"warn",icon:ca,children:[c.jsx("strong",{children:"Koncovka!"})," Treba presne ",c.jsx("strong",{children:Me})," bodov."]})})]})}),c.jsx("div",{className:"px-4 mt-4",children:c.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[N.length>0&&N[0]!=="dash"&&Number.isFinite(Ce)&&c.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",Ce.toLocaleString("sk-SK")]}),N[0]==="dash"?c.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):c.jsxs("div",{className:`ks-display text-6xl font-bold ${W<0?"ks-text-accent":"ks-gold"}`,children:[W>0?"+":"",W.toLocaleString("sk-SK")]})]})]}),N.length>0?c.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[N.map((O,G)=>c.jsxs("button",{onClick:()=>ie(G),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${O==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":O<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[c.jsx("span",{className:"ks-display font-semibold",children:O==="dash"?"— čiarka":O>0?`+${O}`:O}),c.jsx(ps,{size:14,className:"opacity-60 group-hover:opacity-100"})]},G)),N.length>1&&c.jsx("button",{onClick:je,className:"ks-press px-3 py-1.5 rounded-sm ks-text-accent text-xs ks-mono",children:"VYMAZAŤ VŠETKO"})]}):c.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),c.jsx(st,{onClick:we,disabled:N.length===0,icon:mn,className:"w-full text-lg",children:"Zapísať"})]})}),c.jsx("div",{className:"px-4 mt-4",children:c.jsxs("div",{className:"ks-card-sub rounded-sm p-4",children:[c.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),c.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:Tu.map(O=>c.jsxs("button",{onClick:()=>xt(O),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",O]},O))}),c.jsxs("div",{className:"flex gap-2 mb-3",children:[c.jsx("input",{type:"number",value:U,onChange:O=>H(O.target.value),onKeyDown:O=>O.key==="Enter"&&ts(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),c.jsx(st,{onClick:ts,icon:So,variant:"outline",children:"Pridaj"})]}),c.jsx("div",{className:"ks-divider my-3"}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("button",{onClick:Vs,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[c.jsx(zc,{size:20,className:"ks-muted"}),c.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),c.jsxs("button",{onClick:J,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[c.jsx($c,{size:20,className:"ks-text-accent"}),c.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[c.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Hod bez zápisu (— pomlčka)"}),c.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Nič nehodené (penalizácia)"})]})]})}),c.jsxs("div",{className:"px-4 mt-4 grid grid-cols-2 gap-2",children:[c.jsx(st,{onClick:()=>_(!0),icon:Bc,variant:"ghost",children:"Priebeh hry"}),c.jsx(st,{onClick:()=>x(!0),icon:Io,variant:"ghost",children:"Pravidlá"})]})]}),w&&c.jsx(s0,{...w,onClose:()=>k(null)}),!At&&v&&!ye&&p==="standard"&&c.jsx(Su,{data:v,onClose:E.dismiss}),y&&c.jsx(Nu,{onClose:()=>_(!1),title:"Priebeh hry",children:c.jsx(u0,{tournament:s,totals:Ke,target:b})}),Y&&c.jsx(Nu,{onClose:()=>x(!1),title:"Pravidlá hry",children:c.jsx(hf,{rules:e,compact:!0})}),At&&p==="standard"&&c.jsx(Su,{data:{msg:"Dočasný kráľ! Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",emoji:"strikethrough-crown",variant:"fight"},onClose:()=>{le(!1),de(null),F(!1)}}),At&&p==="simplified"&&c.jsx(qr,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{le(!1),de(null),F(!1)}}),At&&p==="suppressed"&&c.jsx(qr,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{le(!1),de(null),F(!1)}}),re&&p==="standard"&&c.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg",style:{background:"radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98))"},children:c.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-md",children:[c.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",children:re.isDraw?"👑👑":"👑"}),c.jsx("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:re.isDraw?`REMÍZA — ${re.winnerArr.length} VÍŤAZI`:"VÍŤAZ"}),c.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",children:re.isDraw?"Víťazi":"Víťaz"}),c.jsx("div",{className:"ks-body ks-cream text-base mb-1 leading-snug",children:re.winnerArr.map(O=>`${S[O]} (${(Ke[O]||0).toLocaleString("sk-SK")})`).join(", ")})]})}),re&&p==="simplified"&&c.jsx(qr,{kind:re.isDraw?"draw":"victory",title:re.isDraw?`Víťazi (${re.winnerArr.length})`:"Víťaz",subtitle:re.winnerArr.map(O=>`${S[O]} (${(Ke[O]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),re&&p==="suppressed"&&c.jsx(qr,{kind:re.isDraw?"draw":"victory",title:re.isDraw?`Víťazi (${re.winnerArr.length})`:"Víťaz",subtitle:re.winnerArr.map(O=>`${S[O]} (${(Ke[O]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),!At&&ye&&p==="standard"&&c.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:"radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98))"},children:[c.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[c.jsx("div",{className:"absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, rgba(212,184,106,0.5), transparent 70%)"}}),c.jsx("div",{className:"absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, rgba(212,184,106,0.5), transparent 70%)",animationDelay:"1s"}})]}),c.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",children:[c.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[c.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, transparent, #d4b86a)"}}),c.jsx(Bs,{size:16,className:"ks-gold"}),c.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, #d4b86a, transparent)"}})]}),c.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.6))"},children:"😤"}),c.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:["­🏁 DOSIAHOL ",b.toLocaleString("sk-SK")," — POTVRD VÝHRU"]}),c.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",style:{textShadow:"0 4px 24px rgba(212,184,106,0.4), 0 0 40px rgba(212,184,106,0.4)"},children:S[T]}),c.jsxs("div",{className:"ks-body ks-cream text-base mb-5 leading-snug",children:["Hráč ",c.jsx("em",{className:"ks-gold",children:S[T]})," dosiahol cieľ!",c.jsx("br",{}),"Skupina potvrdzuje výhru — bola hra čistá?"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("button",{onClick:()=>{const O=pe&&Ee!==null;ne(!1),O&&le(!0),Ne!==null&&(B==null?void 0:B.player)===T?(ge(Ne,{confirmWin:!0,confirmedRound:(B==null?void 0:B.round)??L,confirmedPlayer:T}),D(null),fe(null)):ge("dash",{confirmWin:!0,confirmedRound:L,confirmedPlayer:T})},className:"ks-press py-4 px-3 rounded-sm border-2 ks-border-accent bg-gradient-to-b from-amber-900/40 to-amber-950/40 hover:brightness-125",children:[c.jsx(Bs,{size:20,className:"ks-gold mx-auto mb-1"}),c.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"}),c.jsx("div",{className:"ks-muted text-[10px] ks-mono mt-0.5",children:"VÝHRA POTVRDENÁ"})]}),c.jsxs("button",{onClick:()=>{D(null),fe(null),ne(!1),F(!1),de(null),ge("dash")},className:"ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/40 hover:brightness-125",children:[c.jsx(ps,{size:20,className:"ks-text-accent mx-auto mb-1"}),c.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"Nepotvrdil"}),c.jsx("div",{className:"ks-text-accent/60 text-[10px] ks-mono mt-0.5",children:"VÝHRA NEPOTVRDENÁ"})]})]})]})]}),!At&&ye&&(p==="simplified"||p==="suppressed")&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4",style:{background:"rgba(10,8,6,0.92)"},children:c.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:"#d4b86a"},children:[c.jsx("div",{className:"flex justify-center mb-3",children:c.jsx(Bs,{size:48,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"}})}),c.jsx("div",{className:"ks-mono ks-gold text-xs tracking-widest mb-2",children:"POTVRD VÝHRU"}),c.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:S[T]}),c.jsxs("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug mb-5",children:["Hráč ",c.jsx("em",{className:"ks-gold",children:S[T]})," dosiahol ",c.jsx("strong",{children:b.toLocaleString("sk-SK")}),".",c.jsx("br",{}),"Potvrďte, že v overovom hode nič nepadlo."]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsx("button",{onClick:()=>{const O=pe&&Ee!==null;ne(!1),O&&le(!0),Ne!==null&&(B==null?void 0:B.player)===T?(ge(Ne,{confirmWin:!0,confirmedRound:(B==null?void 0:B.round)??L,confirmedPlayer:T}),D(null),fe(null)):ge("dash",{confirmWin:!0,confirmedRound:L,confirmedPlayer:T})},className:"ks-press py-3 px-2 rounded-sm border-2 ks-border-accent bg-gradient-to-b from-amber-900/40 to-amber-950/40 hover:brightness-125",children:c.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"})}),c.jsx("button",{onClick:()=>{D(null),fe(null),ne(!1),F(!1),de(null),ge("dash")},className:"ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/40 hover:brightness-125",children:c.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"✗ Nepotvrdil"})})]})]})})]})}function Nu({children:s,onClose:e,title:t}){return c.jsx("div",{className:"fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4",style:{background:"rgba(0,0,0,0.7)"},onClick:e,children:c.jsxs("div",{className:"ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade",onClick:n=>n.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b ks-border-sub",children:[c.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:t}),c.jsx("button",{"aria-label":"Zatvoriť",onClick:e,className:"ks-press ks-cream p-1",children:c.jsx(ps,{size:22})})]}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4",style:{WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:s})]})})}function l0({players:s,totals:e,target:t}){const n=s.map((r,i)=>({name:r,total:e[i],i})).sort((r,i)=>i.total-r.total);return c.jsx("div",{className:"space-y-2",children:n.map((r,i)=>{const a=t?Math.min(100,Math.max(0,r.total/t*100)):0;return c.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm border ks-border-sub",children:[c.jsx("div",{className:`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${i===0?"ks-gold-bg":"border ks-border-sub ks-gold"}`,children:i+1}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:r.name}),t&&c.jsx("div",{className:"h-1 bg-stone-900 rounded-full overflow-hidden mt-1",children:c.jsx("div",{className:"h-full ks-gold-bg",style:{width:`${a}%`}})})]}),c.jsx("div",{className:`ks-display text-2xl font-bold ${r.total<0?"ks-text-accent":"ks-gold"}`,children:r.total.toLocaleString("sk-SK")})]},r.i)})})}const Hr=["#d4b86a","#e08854","#7ba88a","#c47880","#80a8c4","#b89580"];function u0({tournament:s,totals:e,target:t}){if(!s||!Array.isArray(s.players))return null;const{players:n,rounds:r}=s,i=z.useMemo(()=>{const m=[],p=n.map(()=>0);return m.push({kolo:0,...n.reduce((b,I,S)=>({...b,[`p${S}`]:0}),{})}),r.forEach((b,I)=>{b.forEach((P,T)=>{typeof P=="number"&&(p[T]+=P)});const S={kolo:I+1};n.forEach((P,T)=>{S[`p${T}`]=p[T]}),m.push(S)}),m},[n,r]),a=n.map((m,p)=>({name:m,total:e[p],i:p,color:Hr[p%Hr.length]})).sort((m,p)=>p.total-m.total),l=Math.max(t,...e)+200,d=Math.min(0,...e)-100,h=({active:m,payload:p,label:b})=>!m||!p||!p.length?null:c.jsxs("div",{className:"ks-card rounded-sm p-2.5",style:{background:"rgba(20,16,12,0.97)"},children:[c.jsxs("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:["KOLO ",b]}),c.jsx("div",{className:"space-y-0.5",children:p.slice().sort((I,S)=>S.value-I.value).map(I=>{const S=parseInt(I.dataKey.slice(1),10);return c.jsxs("div",{className:"flex items-center gap-2 text-xs ks-body",children:[c.jsx("span",{style:{width:10,height:2,background:I.color,display:"inline-block"}}),c.jsx("span",{className:"ks-cream flex-1",children:n[S]}),c.jsx("span",{className:"ks-display ks-gold font-semibold",children:I.value.toLocaleString("sk-SK")})]},I.dataKey)})})]});return c.jsxs("div",{className:"space-y-4",children:[c.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:a.map((m,p)=>(t&&Math.min(100,Math.max(0,m.total/t*100)),c.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30",children:[c.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:m.color}}),c.jsxs("div",{className:"ks-display ks-cream text-sm font-semibold truncate flex-1",children:[p===0&&m.total>0&&c.jsx(Bs,{size:11,className:"ks-gold inline mr-1 -mt-0.5"}),m.name]}),c.jsx("div",{className:`ks-display text-sm font-bold ${m.total<0?"ks-text-accent":"ks-gold"}`,children:m.total.toLocaleString("sk-SK")})]},m.i)))}),c.jsx("div",{className:"ks-card rounded-sm p-3",style:{height:320},children:c.jsx(Xf,{width:"100%",height:"100%",children:c.jsxs(Zf,{data:i,margin:{top:16,right:12,left:-10,bottom:4},children:[c.jsx(em,{strokeDasharray:"2 4",stroke:"rgba(201,168,92,0.12)"}),c.jsx(tm,{dataKey:"kolo",stroke:"#a89679",tick:{fontSize:10,fill:"#a89679"},tickLine:{stroke:"rgba(201,168,92,0.3)"},axisLine:{stroke:"rgba(201,168,92,0.3)"},label:{value:"Kolo",position:"insideBottom",offset:-2,fill:"#a89679",fontSize:10}}),c.jsx(sm,{stroke:"#a89679",tick:{fontSize:10,fill:"#a89679"},tickLine:{stroke:"rgba(201,168,92,0.3)"},axisLine:{stroke:"rgba(201,168,92,0.3)"},domain:[d,l],tickFormatter:m=>m>=1e3?`${(m/1e3).toFixed(m%1e3===0?0:1)}k`:m}),c.jsx(nm,{content:c.jsx(h,{})}),c.jsx(qc,{y:t,stroke:"#d4b86a",strokeDasharray:"4 4",strokeWidth:1.5,label:{value:`Cieľ ${t.toLocaleString("sk-SK")}`,fill:"#d4b86a",fontSize:10,position:"insideTopRight"}}),c.jsx(qc,{y:0,stroke:"rgba(201,168,92,0.2)"}),n.map((m,p)=>c.jsx(rm,{type:"monotone",dataKey:`p${p}`,stroke:Hr[p%Hr.length],strokeWidth:2,dot:{r:2.5,strokeWidth:0},activeDot:{r:5,strokeWidth:2,stroke:"#0e0c0a"},isAnimationActive:!1},p))]})})}),i.length<=1&&c.jsx("div",{className:"ks-muted text-xs italic text-center",children:"Graf sa naplní po prvom kole."})]})}function d0({rules:s,onBack:e}){var a,l,d;const t=Number((a=s.find(h=>h.id==="r14"))==null?void 0:a.points)||300,n=Number((l=s.find(h=>h.id==="r15"))==null?void 0:l.points)||1e4,r=Number((d=s.find(h=>h.id==="r16"))==null?void 0:d.points)||-1e3,i=Gn.flatMap(h=>h.ruleIds).map(h=>s.find(m=>m.id===h)).filter(Boolean);return c.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[c.jsx(xs,{title:"Pravidlá hry",onBack:e}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[c.jsxs("div",{className:"ks-card rounded-sm p-5",children:[c.jsxs("p",{className:"ks-body ks-cream leading-relaxed",children:["Cieľom hry ",c.jsx("em",{className:"ks-gold",children:"Kocky"})," je byť prvým hráčom, ktorý dosiahne cieľové skóre —",c.jsxs("strong",{className:"ks-gold",children:[" ",n.toLocaleString("sk-SK")]})," v klasickej hre alebo",c.jsx("strong",{className:"ks-gold",children:" 5 000"})," v krátkej. Hráči sa striedajú v hodoch šesťkociek."]}),c.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Každý zápis musí byť aspoň ",c.jsxs("strong",{className:"ks-gold",children:[t," bodov"]})," (minimálny odpis) — alebo daj ",c.jsx("em",{children:"čiarku"}),". Hru sa dá ",c.jsx("em",{children:"začať"})," aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka, z aktuálneho skóre sa odpočíta ",c.jsxs("strong",{className:"ks-text-accent",children:[Math.abs(r).toLocaleString("sk-SK")," bodov"]}),"."]}),c.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Ak hod prekročí cieľ, body sa nezapočítajú a podľa nastavenia sa zapíše neplatný ťah, spravidla ",c.jsx("em",{children:"čiarka"}),". V závere hry treba dohrať na ",c.jsx("em",{className:"ks-gold",children:"presný cieľ"}),"; ak sa zapne potvrdenie víťazstva, po presnom zásahu nasleduje ešte overovací ťah, v ktorom musí padnúť ničnehodenie."]}),c.jsxs("p",{className:"ks-muted ks-body text-xs italic mt-3",children:["Hodnoty cieľa, prípisu a penalizácie sa dajú upraviť v ",c.jsx("em",{children:"Nastavenia → Úprava pravidiel → Hodnoty hry"}),"."]})]}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),c.jsx(hf,{rules:i})]})]})}function hf({rules:s,compact:e=!1}){return c.jsx("div",{className:"space-y-2",children:s.map(t=>c.jsx("div",{className:`ks-card rounded-sm ${e?"p-3":"p-4"} flex items-start gap-3`,children:c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex items-baseline justify-between gap-2 mb-1",children:[c.jsx("h4",{className:"ks-display ks-cream text-lg font-semibold",children:t.name}),c.jsx("div",{className:`ks-display text-xl font-bold whitespace-nowrap ${Number(t.points)<0?"ks-text-accent":"ks-gold"}`,children:t.type==="select"?c.jsx("span",{className:"text-sm italic",children:t.selected}):`${Number(t.points).toLocaleString("sk-SK")} b.`})]}),c.jsx("p",{className:"ks-muted text-sm leading-snug mb-2",children:t.description}),c.jsx(uf,{dice:t.dice,size:e?20:24})]})},t.id))})}function h0({rules:s,onSave:e,onBack:t,onReset:n,selectedSkin:r}){const[i,a]=z.useState(s),[l,d]=z.useState(null),[h,m]=z.useState(null);function p(N,V){a(U=>U.map(H=>H.id===N?{...H,...V}:H))}function b(N){window.confirm("Vymazať toto pravidlo?")&&a(V=>V.filter(U=>U.id!==N))}function I(){const N="r"+Date.now(),V={id:N,name:"Nové pravidlo",description:"Popis pravidla",points:100,type:"numeric",dice:[]};a(U=>[...U,V]),m(N)}function S(){e(i),t()}function P(N){const V=Gn.find(U=>U.id===N);return V?V.ruleIds.map(U=>i.find(H=>H.id===U)).filter(Boolean):[]}const T=z.useMemo(()=>Au.map(N=>i.find(V=>V.id===N)).filter(Boolean),[i]),L=z.useMemo(()=>{const N=new Set([...Gn.flatMap(V=>V.ruleIds),...Au]);return i.filter(V=>!N.has(V.id))},[i]);if(l==="cat-settings")return c.jsxs("div",{className:"min-h-screen ks-fade pb-32",style:{background:(yt[r]||yt.classic).bg},children:[c.jsx(xs,{title:"Hodnoty hry",onBack:()=>d(null)}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[c.jsx("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:"Hodnoty cieľa, prvého zápisu, penalizácie za ničnehodenie, správania pri prekročení cieľa a potvrdenia výhry. Tieto sa premietnu aj do popisu v Pravidlách hry."}),T.map(N=>c.jsx(f0,{rule:N,onUpdate:V=>p(N.id,V)},N.id))]}),c.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:c.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[c.jsx(st,{onClick:()=>d(null),variant:"outline",icon:qs,children:"Späť"}),c.jsx(st,{onClick:S,icon:Wr,children:"Uložiť všetko"})]})})]});if(l){const N=l==="cat-custom"?{title:"Vlastné pravidlá",subtitle:"Tebou pridané pravidlá"}:Gn.find(U=>U.id===l),V=l==="cat-custom"?L:P(l);return c.jsxs("div",{className:"min-h-screen ks-fade pb-32",style:{background:(yt[r]||yt.classic).bg},children:[c.jsx(xs,{title:N.title,onBack:()=>{d(null),m(null)}}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[c.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:[N.subtitle,". Klepni na pravidlo pre úpravu hodnôt."]}),V.length===0&&c.jsx("div",{className:"ks-card rounded-sm p-6 text-center ks-muted italic ks-body",children:"Žiadne pravidlá v tejto kategórii."}),V.map(U=>c.jsx(m0,{rule:U,isEditing:h===U.id,onEdit:()=>m(h===U.id?null:U.id),onUpdate:H=>p(U.id,H),onRemove:()=>b(U.id)},U.id)),l==="cat-custom"&&c.jsxs("button",{onClick:I,className:"ks-press ks-card w-full p-3 rounded-sm flex items-center justify-center gap-2 border-dashed",children:[c.jsx(Kc,{size:18,className:"ks-gold"}),c.jsx("span",{className:"ks-display ks-gold",children:"Pridať vlastné pravidlo"})]})]}),c.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:c.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[c.jsx(st,{onClick:()=>{d(null),m(null)},variant:"outline",icon:qs,children:"Späť"}),c.jsx(st,{onClick:S,icon:Wr,children:"Uložiť všetko"})]})})]})}return c.jsxs("div",{className:"min-h-screen ks-fade pb-32",style:{background:(yt[r]||yt.classic).bg},children:[c.jsx(xs,{title:"Úprava pravidiel",onBack:t}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-2",children:[c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),Gn.map(N=>{const V=P(N.id);return c.jsxs("button",{onClick:()=>d(N.id),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[c.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold",children:V.length}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:N.title}),c.jsx("div",{className:"ks-muted text-sm",children:N.subtitle})]}),c.jsx(gt,{className:"ks-muted",size:20})]},N.id)}),c.jsxs("button",{onClick:()=>d("cat-custom"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-dashed",children:[c.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold flex items-center justify-center",children:c.jsx(Kc,{size:18})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Vlastné pravidlá"}),c.jsxs("div",{className:"ks-muted text-sm",children:[L.length," pridaných pravidiel"]})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"NASTAVENIA HRY"}),c.jsxs("button",{onClick:()=>d("cat-settings"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4",style:{borderLeftColor:"#d4b86a"},children:[c.jsx("div",{className:"w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center",children:c.jsx(aa,{size:18})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Hodnoty hry"}),c.jsx("div",{className:"ks-muted text-sm",children:"Cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),c.jsx(gt,{className:"ks-muted",size:20})]})]}),c.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:c.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-3 gap-2",children:[c.jsx(st,{onClick:n,variant:"danger",icon:Ru,children:"Reset"}),c.jsx(st,{onClick:t,variant:"outline",icon:ps,children:"Zrušiť"}),c.jsx(st,{onClick:S,icon:Wr,children:"Uložiť"})]})})]})}function f0({rule:s,onUpdate:e}){const t=s.type==="numeric",n=Number(s.points)<0;return c.jsxs("div",{className:"ks-card rounded-sm p-4",children:[c.jsx("div",{className:"flex items-baseline justify-between gap-3 mb-2",children:c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:s.name})}),c.jsx("p",{className:"ks-muted text-sm leading-snug mb-3",children:s.description}),t?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"number",value:s.points,onChange:r=>e({points:parseInt(r.target.value,10)||0}),className:`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${n?"ks-text-accent":"ks-gold"}`}),c.jsx("div",{className:"ks-mono ks-muted text-xs",children:"BODOV"})]}):c.jsx("select",{value:s.selected,onChange:r=>e({selected:r.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700",children:(s.options||[]).map(r=>c.jsx("option",{value:r,children:r},r))})]})}function m0({rule:s,isEditing:e,onEdit:t,onUpdate:n,onRemove:r}){var a;const i=Number(s.points)<0;return c.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[c.jsxs("div",{className:"flex items-center gap-3 p-3",onClick:t,children:[c.jsxs("div",{className:"flex-1 cursor-pointer",children:[c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:s.name}),c.jsx("div",{className:`text-xs italic ${i?"ks-text-accent":"ks-muted"}`,children:s.type==="select"?s.selected:`${s.points} bodov`})]}),c.jsx(uf,{dice:(a=s.dice)==null?void 0:a.slice(0,6),size:18}),c.jsx("button",{"aria-label":"Upraviť",onClick:l=>{l.stopPropagation(),t()},className:"ks-press ks-gold p-1",children:c.jsx(Kf,{size:16})})]}),e&&c.jsxs("div",{className:"border-t ks-border-sub p-3 space-y-3 ks-fade",children:[c.jsx(Fs,{label:"Názov",children:c.jsx("input",{value:s.name,onChange:l=>n({name:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})}),c.jsx(Fs,{label:"Popis",children:c.jsx("textarea",{value:s.description,onChange:l=>n({description:l.target.value}),rows:2,className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none"})}),c.jsx(Fs,{label:"Typ pravidla",children:c.jsxs("select",{value:s.type,onChange:l=>{var h;const d=l.target.value;n(d==="select"?{type:"select",options:s.options||["Možnosť 1","Možnosť 2"],selected:s.selected||((h=s.options)==null?void 0:h[0])||"Možnosť 1"}:{type:"numeric"})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:[c.jsx("option",{value:"numeric",children:"Číselné (pevný počet bodov)"}),c.jsx("option",{value:"select",children:"Výber zo zoznamu"})]})}),s.type==="numeric"?c.jsx(Fs,{label:"Body (môže byť aj záporné)",children:c.jsx("input",{type:"number",value:s.points,onChange:l=>n({points:parseInt(l.target.value,10)||0}),className:`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${i?"ks-text-accent":"ks-gold"}`})}):c.jsxs(c.Fragment,{children:[c.jsx(Fs,{label:"Aktívna možnosť",children:c.jsx("select",{value:s.selected,onChange:l=>n({selected:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:(s.options||[]).map(l=>c.jsx("option",{value:l,children:l},l))})}),c.jsx(Fs,{label:"Možnosti (oddelené čiarkou)",children:c.jsx("input",{value:(s.options||[]).join(", "),onChange:l=>{const d=l.target.value.split(",").map(m=>m.trim()).filter(Boolean),h=d.includes(s.selected)?s.selected:d[0]||"";n({options:d,selected:h})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})})]}),c.jsx(Fs,{label:"Kocky (piktogramy)",children:c.jsx(p0,{dice:s.dice||[],onChange:l=>n({dice:l})})}),c.jsxs("button",{onClick:r,className:"ks-press ks-text-accent ks-mono text-xs flex items-center gap-1",children:[c.jsx(Si,{size:14})," Vymazať pravidlo"]})]})]})}function Fs({label:s,children:e}){return c.jsxs("div",{children:[c.jsx("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:s.toUpperCase()}),e]})}function p0({dice:s,onChange:e}){return c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40",children:[s.length===0&&c.jsx("span",{className:"ks-muted text-sm italic",children:"Žiadne kocky"}),s.map((t,n)=>c.jsx("button",{onClick:()=>e(s.filter((r,i)=>i!==n)),className:"ks-press ks-gold relative",children:c.jsx(oa,{value:t,size:26})},n))]}),c.jsxs("div",{className:"flex gap-1.5",children:[[1,2,3,4,5,6].map(t=>c.jsx("button",{onClick:()=>s.length<6&&e([...s,t]),className:"ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm",children:c.jsx(oa,{value:t,size:22})},t)),s.length>0&&c.jsx("button",{onClick:()=>e([]),className:"ks-press ml-auto ks-text-accent ks-mono text-xs px-2",children:"VYMAZAŤ"})]})]})}function g0({tournaments:s,onBack:e,onView:t,onDelete:n,readOnly:r}){return c.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[c.jsx(xs,{title:r?"Archív turnajov":"Editácia archívu",onBack:e}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto",children:[!r&&c.jsxs("div",{className:"ks-card rounded-sm p-3 mb-3 ks-body text-xs ks-muted italic flex items-start gap-2",children:[c.jsx(ua,{size:14,className:"ks-gold shrink-0 mt-0.5"}),c.jsx("div",{children:"Klepni na turnaj pre úpravu skóre, víťaza alebo kôl. Mazanie cez tlačidlo dolu."})]}),s.length===0?c.jsxs("div",{className:"ks-card rounded-sm p-8 text-center",children:[c.jsx(Pu,{className:"ks-gold mx-auto opacity-40",size:48}),c.jsx("p",{className:"ks-muted ks-body mt-3 italic",children:"Zatiaľ žiadne turnaje v archíve."})]}):c.jsx("div",{className:"space-y-2",children:s.map(i=>c.jsx(y0,{t:i,onView:()=>t(i),onDelete:()=>n(i.id),readOnly:r},i.id))})]})]})}function y0({t:s,onView:e,onDelete:t,readOnly:n}){const r=s.players.map((h,m)=>(s.rounds||[]).reduce((p,b)=>p+(typeof b[m]=="number"?b[m]:0),0));if(!s||!Array.isArray(s.players)||!Array.isArray(s.rounds))return c.jsx(xn,{title:"Poškodený turnaj v archíve"});const i=s.winner===null||s.winner===void 0?[]:Array.isArray(s.winner)?s.winner:[s.winner],a=i.length===0?null:i.length===1?s.players[i[0]]:`Remíza: ${i.map(h=>s.players[h]).join(", ")}`,l=s.targetScore||1e4,d=lf(s.date,s.finishedAt);return c.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[c.jsxs("button",{onClick:e,className:"ks-press w-full p-4 text-left flex items-center gap-3",children:[c.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center
          ${s.status==="finished"?"ks-gold-bg":"border ks-border-sub ks-muted"}`,children:s.status==="finished"?c.jsx($f,{size:22}):c.jsx(ps,{size:22})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:a?c.jsxs(c.Fragment,{children:[i.length>1?"":"Víťaz: ",c.jsx("span",{className:"ks-gold",children:a})]}):c.jsx("span",{className:"italic ks-muted",children:"Nedokončený turnaj"})}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[c.jsx(Bf,{size:11,className:"ks-muted"}),c.jsxs("div",{className:"ks-mono ks-muted text-xs truncate",children:[hr(s.date),d?` · ${d}`:""]})]}),c.jsxs("div",{className:"ks-muted text-xs truncate mt-0.5",children:[s.players.length," hráčov · do ",l.toLocaleString("sk-SK")," · ",s.players.join(" · ")]})]}),c.jsx(gt,{className:"ks-muted",size:20})]}),c.jsxs("div",{className:"border-t border-amber-900/20 px-4 py-2 flex items-center justify-between",children:[c.jsxs("div",{className:"ks-mono ks-gold text-sm",children:[Math.max(...r).toLocaleString("sk-SK")," bodov"]}),!n&&c.jsxs("button",{onClick:t,className:"ks-press ks-text-accent text-xs ks-mono flex items-center gap-1",children:[c.jsx(Si,{size:12})," VYMAZAŤ"]})]})]})}function b0({tournament:s,onBack:e,onUpdate:t,readOnly:n,scoreDisplayMode:r,onToggleScoreMode:i,selectedSkin:a}){if(!s||!Array.isArray(s.players)||!Array.isArray(s.rounds))return c.jsx(xn,{title:"Poškodený turnaj v archíve"});const[l,d]=z.useState(!1),[h,m]=z.useState(null);function p(){m({players:[...s.players],rounds:(s.rounds||[]).map(_=>[..._]),winner:s.winner,targetScore:s.targetScore||1e4}),d(!0)}function b(){m(null),d(!1)}function I(){h.players.map((w,k)=>h.rounds.reduce((E,v)=>E+(typeof v[k]=="number"?v[k]:0),0));let _=h.winner;t({players:h.players,rounds:h.rounds,winner:_}),d(!1),m(null)}function S(_,w,k){m(E=>{const v=E.rounds.map(ye=>[...ye]);for(;v.length<=_;)v.push(new Array(E.players.length).fill(null));return v[_][w]=k,{...E,rounds:v}})}function P(){m(_=>({..._,rounds:[..._.rounds,new Array(_.players.length).fill(null)]}))}function T(_){window.confirm(`Vymazať kolo ${_+1}?`)&&m(w=>({...w,rounds:w.rounds.filter((k,E)=>E!==_)}))}function L(_){m(w=>{const k=w.winner,E=k==null?[]:Array.isArray(k)?[...k]:[k],v=E.indexOf(_);v>=0?E.splice(v,1):E.push(_);const ye=E.length===0?null:E.length===1?E[0]:E.sort((ne,Ne)=>ne-Ne);return{...w,winner:ye}})}const N=l&&h?h:s,V=sc(N.rounds,N.players.length),U=N.targetScore||1e4,H=lf(s.date,s.finishedAt),Y=z.useMemo(()=>s.status!=="finished"?null:Ti({...N,_confirmedDetailed:s._confirmedDetailed,rules:s.rules}),[N,s]),x=N.winner===null||N.winner===void 0?[]:Array.isArray(N.winner)?[...N.winner]:[N.winner],y=Y&&(()=>{if(Y.winners.length!==x.length)return!0;const _=[...Y.winners].sort(),w=[...x].sort();return!_.every((k,E)=>k===w[E])})();return c.jsxs("div",{className:"min-h-screen ks-fade pb-32",style:{background:(yt[a]||yt.classic).bg},children:[c.jsx(xs,{title:"Detail turnaja",onBack:l?b:e,right:c.jsxs("div",{className:"flex items-center gap-2",children:[!l&&c.jsx("button",{onClick:i,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:r==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:r==="delta"?c.jsx(ju,{size:16}):c.jsx(la,{size:16})}),l||n?null:c.jsxs("button",{onClick:p,className:"ks-press ks-gold flex items-center gap-1 text-xs ks-mono",children:[c.jsx(ua,{size:14})," UPRAVIŤ"]})]})}),c.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-4",children:[c.jsxs("div",{className:"ks-card rounded-sm p-5 text-center",children:[s.status==="finished"&&N.winner!==null&&N.winner!==void 0?(()=>{const _=Array.isArray(N.winner)?N.winner:[N.winner],w=_.length>1;return c.jsxs(c.Fragment,{children:[c.jsx(Bs,{className:"ks-gold mx-auto",size:40}),c.jsx("div",{className:"ks-mono ks-gold text-xs mt-2",children:w?`REMÍZA · ${_.length} VÍŤAZI`:"VÍŤAZ"}),c.jsx("div",{className:"space-y-1.5 mt-1",children:_.map(k=>c.jsxs("div",{children:[c.jsx("div",{className:"ks-display ks-cream text-2xl font-bold",children:N.players[k]}),c.jsx("div",{className:"ks-display ks-gold text-xl",children:V[k].toLocaleString("sk-SK")})]},k))})]})})():c.jsx("div",{className:"ks-muted italic",children:s.status==="aborted"?"Zrušený turnaj":"Nedokončený turnaj"}),c.jsxs("div",{className:"mt-4 pt-4 border-t ks-border-sub grid grid-cols-2 gap-3 text-left",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[c.jsx(ri,{size:10})," ZAČIATOK"]}),c.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:hr(s.date)})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[c.jsx(mn,{size:10})," KONIEC"]}),c.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:s.finishedAt?hr(s.finishedAt):"—"})]}),H&&c.jsxs("div",{className:"col-span-2",children:[c.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[c.jsx(Ff,{size:10})," TRVANIE"]}),c.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:H})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[c.jsx(ca,{size:10})," CIEĽ"]}),c.jsxs("div",{className:"ks-body ks-cream text-sm mt-0.5",children:[U.toLocaleString("sk-SK")," b."]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[c.jsx(zf,{size:10})," HRÁČI"]}),c.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:N.players.length})]})]})]}),y&&Y&&c.jsx("div",{className:"ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30",children:c.jsxs("div",{className:"flex items-start gap-2",children:[c.jsx(da,{size:20,className:"ks-text-accent shrink-0 mt-0.5"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"ks-mono ks-text-accent text-xs tracking-widest mb-1",children:"⚠ NEZHODA V URČENÍ VÍŤAZA"}),c.jsxs("div",{className:"ks-body ks-cream text-sm leading-snug",children:["Hlavička uvádza:"," ",c.jsx("strong",{className:"ks-gold",children:x.length===0?"—":x.map(_=>N.players[_]).join(", ")}),c.jsx("br",{}),"Súčty kôl však dávajú:"," ",c.jsx("strong",{className:"ks-gold",children:Y.winners.length===0?"— (nikto nedosiahol cieľ)":Y.winners.map(_=>`${N.players[_]} (${(V[_]||0).toLocaleString("sk-SK")})`).join(", ")})]}),Y.errors.length>0&&c.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2",children:Y.errors.join(" · ")}),!n&&c.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2 italic",children:"Použi tlačidlo UPRAVIŤ na opravu zoznamu víťazov."})]})]})}),!l&&c.jsxs("div",{children:[c.jsx("div",{className:"ks-mono ks-gold text-xs mb-2",children:"FINÁLNA TABUĽKA"}),c.jsx(l0,{players:N.players,totals:V,target:U})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("div",{className:"ks-mono ks-gold text-xs",children:l?"ÚPRAVA TABUĽKY":"HISTÓRIA KÔL"}),l&&c.jsxs("button",{onClick:P,className:"ks-press ks-gold ks-mono text-xs flex items-center gap-1",children:[c.jsx(So,{size:12})," PRIDAŤ KOLO"]})]}),l?c.jsx(_0,{players:h.players,rounds:h.rounds,totals:V,target:U,winner:h.winner,onChangeCell:S,onRemoveRound:T,onSetWinner:L}):c.jsx(Ro,{tournament:{...N,currentRound:-1},totals:V,highlightPlayer:N.winner??-1,target:U,displayMode:r,onToggleMode:i,hideModeToolbar:!0})]})]}),l&&c.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:c.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[c.jsx(st,{onClick:b,variant:"outline",icon:ps,children:"Zrušiť"}),c.jsx(st,{onClick:I,icon:Wr,children:"Uložiť zmeny"})]})})]})}function _0({players:s,rounds:e,totals:t,target:n,winner:r,onChangeCell:i,onRemoveRound:a,onSetWinner:l}){function d(h){const m=(h||"").trim();if(m===""||m==="·")return null;if(m==="—"||m==="-"||m.toLowerCase()==="dash")return"dash";const p=parseInt(m,10);return Number.isFinite(p)?p:null}return c.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full border-collapse",style:{tableLayout:"fixed",minWidth:`${36+Math.max(s.length,1)*Math.max(80,300/Math.max(s.length,1))}px`},children:[c.jsxs("colgroup",{children:[c.jsx("col",{style:{width:36}}),s.map((h,m)=>c.jsx("col",{style:{width:`${100/(s.length+.25)}%`,minWidth:`${Math.max(80,300/Math.max(s.length,1))}px`}},m)),c.jsx("col",{style:{width:36}})]}),c.jsx("thead",{children:c.jsxs("tr",{className:"border-b ks-border-sub",children:[c.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-2 px-2 text-center sticky left-0",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),s.map((h,m)=>c.jsx("th",{className:"ks-display ks-cream py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis",children:h},m)),c.jsx("th",{style:{width:36}})]})}),c.jsx("tbody",{children:e.map((h,m)=>c.jsxs("tr",{className:"border-b border-amber-900/15",children:[c.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:m+1}),s.map((p,b)=>{const I=h[b],S=I==="dash"?"—":typeof I=="number"?String(I):"";return c.jsx("td",{className:"p-0.5",children:c.jsx("input",{value:S,onChange:P=>i(m,b,d(P.target.value)),placeholder:"·",className:`w-full bg-stone-950/40 border ks-border-sub rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${I==="dash"?"ks-muted":typeof I=="number"&&I<0?"ks-text-accent":"ks-cream"}`})},b)}),c.jsx("td",{className:"text-center",children:c.jsx("button",{onClick:()=>a(m),className:"ks-press ks-text-accent hover:ks-text-accent p-1",children:c.jsx(Si,{size:12})})})]},m))}),c.jsx("tfoot",{children:c.jsxs("tr",{className:"border-t-2 ks-border-accent",children:[c.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"∑"}),t.map((h,m)=>{const p=h>=n,I=(r==null?new Set:Array.isArray(r)?new Set(r):new Set([r])).has(m);return c.jsx("td",{className:"text-center py-2 px-2",children:c.jsxs("button",{onClick:()=>l(m),className:`ks-press w-full ks-display text-base font-bold rounded-sm py-1 px-2 ${I?"ks-gold-bg":p?"ks-gold border border-amber-700/40":h<0?"ks-text-accent":"ks-cream"}`,children:[I&&c.jsx(Bs,{size:12,className:"inline mr-1"}),h.toLocaleString("sk-SK")]})},m)}),c.jsx("td",{})]})})]})}),c.jsx("div",{className:"p-2 border-t border-amber-900/20 ks-muted text-xs italic text-center ks-body",children:'Klepni na bunku pre úpravu · Klepni na súčet pre nastavenie víťaza · Číslo, „—" alebo prázdne pre vymazanie'})]})}typeof window<"u"&&!window.storage&&(window.storage={async get(s){try{const e=localStorage.getItem(s);return e===null?null:{key:s,value:e,shared:!1}}catch{return null}},async set(s,e){try{return localStorage.setItem(s,e),{key:s,value:e,shared:!1}}catch{return null}},async delete(s){try{return localStorage.removeItem(s),{key:s,deleted:!0,shared:!1}}catch{return null}},async list(s=""){const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);n&&n.startsWith(s)&&e.push(n)}return{keys:e,prefix:s,shared:!1}}});const v0=typeof window<"u"&&(window.location.protocol==="https:"||window.location.protocol==="http:");"serviceWorker"in navigator&&v0&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("SW registered:",e.scope)}).catch(e=>{console.warn("SW registration failed:",e)})});lm.createRoot(document.getElementById("root")).render(c.jsx(on.StrictMode,{children:c.jsx(r0,{})}));export{Xc as E,Du as W,km as b};
