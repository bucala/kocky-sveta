const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-gJDS30SD.js","./vendor-lucide-CeTbX5Qt.js","./vendor-react-oYV170lA.js","./web-65xLe5N6.js","./updatePresence-KmHRPlEF.js","./updateGameState-BpLIbWKF.js"])))=>i.map(i=>d[i]);
import{r as Tp,g as Ap,R as bn,a as j,b as Gd,C as gs,P as Xi,c as At,A as Jd,S as Ca,d as mc,e as ko,W as ii,f as Yd,h as _s,T as pc,V as Sp,i as Np,Z as Rp,j as Qd,k as Bs,U as Xl,I as Pa,l as Xd,L as Cp,m as Zd,n as gc,B as Pp,o as Zl,p as jp,q as Dp,s as Op,t as xo,M as Vp,u as Lp,v as yc,F as Mp,D as Up,w as Fp,x as bc,y as wo,z as eh,X as Kn,E as ja,G as eu,H as tu,J as nu,K as zp,N as zi,O as su,Q as $p,Y as Bp,_ as Hp,$ as Wp,a0 as qp,a1 as Kp,a2 as Gp,a3 as Jp,a4 as Yp}from"./vendor-lucide-CeTbX5Qt.js";import{r as Qp}from"./vendor-react-oYV170lA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var ca={exports:{}},vr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function Xp(){if(ru)return vr;ru=1;var n=Tp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(l,d,h){var m,p={},v=null,I=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(I=d.ref);for(m in d)s.call(d,m)&&!i.hasOwnProperty(m)&&(p[m]=d[m]);if(l&&l.defaultProps)for(m in d=l.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:l,key:v,ref:I,props:p,_owner:r.current}}return vr.Fragment=t,vr.jsx=c,vr.jsxs=c,vr}var iu;function Zp(){return iu||(iu=1,ca.exports=Xp()),ca.exports}var a=Zp(),Si={},ou;function eg(){if(ou)return Si;ou=1;var n=Qp();return Si.createRoot=n.createRoot,Si.hydrateRoot=n.hydrateRoot,Si}var tg=eg();const ng=Ap(tg),sg="modulepreload",rg=function(n,e){return new URL(n,e).href},au={},Dt=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));r=c(t.map(m=>{if(m=rg(m,s),m in au)return;au[m]=!0;const p=m.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(!!s)for(let P=l.length-1;P>=0;P--){const S=l[P];if(S.href===m&&(!p||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${v}`))return;const A=document.createElement("link");if(A.rel=p?"stylesheet":sg,p||(A.as="script"),A.crossOrigin="",A.href=m,h&&A.setAttribute("nonce",h),document.head.appendChild(A),p)return new Promise((P,S)=>{A.addEventListener("load",P),A.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const ig=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},s=(i,c)=>{t.platforms.set(i,c)},r=i=>{t.platforms.has(i)&&(t.currentPlatform=t.platforms.get(i))};return t.addPlatform=s,t.setPlatform=r,t},og=n=>n.CapacitorPlatforms=ig(n),th=og(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});th.addPlatform;th.setPlatform;var Hs;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Hs||(Hs={}));class la extends Error{constructor(e,t,s){super(e),this.message=e,this.code=t,this.data=s}}const ag=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},cg=n=>{var e,t,s,r,i;const c=n.CapacitorCustomPlatform||null,l=n.Capacitor||{},d=l.Plugins=l.Plugins||{},h=n.CapacitorPlatforms,m=()=>c!==null?c.name:ag(n),p=((e=h==null?void 0:h.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||m,v=()=>p()!=="web",I=((t=h==null?void 0:h.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||v,A=w=>{const y=D.get(w);return!!(y!=null&&y.platforms.has(p())||$(w))},P=((s=h==null?void 0:h.currentPlatform)===null||s===void 0?void 0:s.isPluginAvailable)||A,S=w=>{var y;return(y=l.PluginHeaders)===null||y===void 0?void 0:y.find(_=>_.name===w)},$=((r=h==null?void 0:h.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||S,R=w=>n.console.error(w),V=(w,y,_)=>Promise.reject(`${_} does not have an implementation of "${y}".`),D=new Map,H=(w,y={})=>{const _=D.get(w);if(_)return console.warn(`Capacitor plugin "${w}" already registered. Cannot register plugins twice.`),_.proxy;const k=p(),x=$(w);let E;const b=async()=>(!E&&k in y?E=typeof y[k]=="function"?E=await y[k]():E=y[k]:c!==null&&!E&&"web"in y&&(E=typeof y.web=="function"?E=await y.web():E=y.web),E),ae=(ge,Te)=>{var Q,Ge;if(x){const me=x==null?void 0:x.methods.find(_e=>Te===_e.name);if(me)return me.rtype==="promise"?_e=>l.nativePromise(w,Te.toString(),_e):(_e,De)=>l.nativeCallback(w,Te.toString(),_e,De);if(ge)return(Q=ge[Te])===null||Q===void 0?void 0:Q.bind(ge)}else{if(ge)return(Ge=ge[Te])===null||Ge===void 0?void 0:Ge.bind(ge);throw new la(`"${w}" plugin is not implemented on ${k}`,Hs.Unimplemented)}},we=ge=>{let Te;const Q=(...Ge)=>{const me=b().then(_e=>{const De=ae(_e,ge);if(De){const Vt=De(...Ge);return Te=Vt==null?void 0:Vt.remove,Vt}else throw new la(`"${w}.${ge}()" is not implemented on ${k}`,Hs.Unimplemented)});return ge==="addListener"&&(me.remove=async()=>Te()),me};return Q.toString=()=>`${ge.toString()}() { [capacitor code] }`,Object.defineProperty(Q,"name",{value:ge,writable:!1,configurable:!1}),Q},it=we("addListener"),bt=we("removeListener"),Et=(ge,Te)=>{const Q=it({eventName:ge},Te),Ge=async()=>{const _e=await Q;bt({eventName:ge,callbackId:_e},Te)},me=new Promise(_e=>Q.then(()=>_e({remove:Ge})));return me.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Ge()},me},re=new Proxy({},{get(ge,Te){switch(Te){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?Et:it;case"removeListener":return bt;default:return we(Te)}}});return d[w]=re,D.set(w,{name:w,proxy:re,platforms:new Set([...Object.keys(y),...x?[k]:[]])}),re},q=((i=h==null?void 0:h.currentPlatform)===null||i===void 0?void 0:i.registerPlugin)||H;return l.convertFileSrc||(l.convertFileSrc=w=>w),l.getPlatform=p,l.handleError=R,l.isNativePlatform=I,l.isPluginAvailable=P,l.pluginMethodNoop=V,l.registerPlugin=q,l.Exception=la,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},lg=n=>n.Capacitor=cg(n),zr=lg(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Eo=zr.registerPlugin;zr.Plugins;class nh{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(t);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(e);const c=async()=>this.removeListener(e,t);return Promise.resolve({remove:c})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,s){const r=this.listeners[e];if(!r){if(s){let i=this.retainedEventArguments[e];i||(i=[]),i.push(t),this.retainedEventArguments[e]=i}return}r.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:s=>{this.notifyListeners(t,s)}}}unimplemented(e="not implemented"){return new zr.Exception(e,Hs.Unimplemented)}unavailable(e="not available"){return new zr.Exception(e,Hs.Unavailable)}async removeListener(e,t){const s=this.listeners[e];if(!s)return;const r=s.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(s=>{this.notifyListeners(e,s)}))}}const cu=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),lu=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ug extends nh{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[r,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=lu(r).trim(),i=lu(i).trim(),t[r]=i}),t}async setCookie(e){try{const t=cu(e.key),s=cu(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),c=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${s||""}${r}; path=${i}; ${c};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Eo("CapacitorCookies",{web:()=>new ug});const dg=async n=>new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{const r=s.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>t(r),s.readAsDataURL(n)}),hg=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(r=>r.toLocaleLowerCase()).reduce((r,i,c)=>(r[i]=n[e[c]],r),{})},fg=(n,e=!0)=>n?Object.entries(n).reduce((s,r)=>{const[i,c]=r;let l,d;return Array.isArray(c)?(d="",c.forEach(h=>{l=e?encodeURIComponent(h):h,d+=`${i}=${l}&`}),d.slice(0,-1)):(l=e?encodeURIComponent(c):c,d=`${i}=${l}`),`${s}&${d}`},"").substr(1):null,mg=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),r=hg(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(r.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[c,l]of Object.entries(n.data||{}))i.set(c,l);t.body=i.toString()}else if(r.includes("multipart/form-data")||n.data instanceof FormData){const i=new FormData;if(n.data instanceof FormData)n.data.forEach((l,d)=>{i.append(d,l)});else for(const l of Object.keys(n.data))i.append(l,n.data[l]);t.body=i;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(r.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class pg extends nh{async request(e){const t=mg(e,e.webFetchExtra),s=fg(e.params,e.shouldEncodeUrlParams),r=s?`${e.url}?${s}`:e.url,i=await fetch(r,t),c=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?e:{};c.includes("application/json")&&(l="json");let d,h;switch(l){case"arraybuffer":case"blob":h=await i.blob(),d=await dg(h);break;case"json":d=await i.json();break;case"document":case"text":default:d=await i.text()}const m={};return i.headers.forEach((p,v)=>{m[v]=p}),{data:d,headers:m,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Eo("CapacitorHttp",{web:()=>new pg});var Da;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE"})(Da||(Da={}));var uu;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(uu||(uu={}));const gg=Eo("Filesystem",{web:()=>Dt(()=>import("./web-gJDS30SD.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>new n.FilesystemWeb)}),du=Eo("Share",{web:()=>Dt(()=>import("./web-65xLe5N6.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(n=>new n.ShareWeb)});function yg({tournament:n,totals:e,highlightPlayer:t,pendingPreview:s=0,target:r,displayMode:i="delta",onToggleMode:c,hideModeToolbar:l=!1,hideModeToggle:d=!1,compactObserver:h=!1}){if(!n||!Array.isArray(n.players))return null;const{players:m,rounds:p}=n,v=j.useRef(null);j.useEffect(()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)},[p.length]);const I=Math.max(p.length,(n.currentRound??0)+1),A=j.useMemo(()=>{const P=Array.from({length:I},()=>new Array(m.length).fill(null)),S=new Array(m.length).fill(0),$=new Array(m.length).fill(!1);for(let R=0;R<p.length;R++)for(let V=0;V<m.length;V++){const D=p[R][V];typeof D=="number"?(S[V]+=D,$[V]=!0,P[R][V]=S[V]):D==="dash"?P[R][V]=S[V]:P[R][V]=null}return P},[p,I,m.length]);return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[c&&!l&&a.jsxs("div",{className:`flex items-center justify-between border-b border-amber-900/30 bg-stone-950/60 ${h?"px-3 py-1":"px-3 py-1.5"}`,children:[a.jsx("div",{className:`ks-display ks-gold text-center flex-1 ${h?"text-xs":"text-sm"}`,children:"POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE"}),!d&&a.jsxs("button",{onClick:c,className:"ks-press ks-mono ks-gold flex items-center gap-1 rounded-sm hover:bg-amber-900/20 text-[10px] px-2 py-0.5",children:[a.jsx(Gd,{size:10}),i==="delta"?"Σ":"Δ"]})]}),a.jsx("div",{className:"overflow-x-auto ks-live-table-wrap",children:a.jsxs("table",{className:"border-collapse ks-live-table",children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:36}}),m.map((P,S)=>a.jsx("col",{style:{width:`${100/(m.length+.15)}%`,minWidth:`${Math.max(72,300/Math.max(m.length,1))}px`}},S))]}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-amber-900/40",children:[a.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-3 px-2 text-center sticky left-0 backdrop-blur",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),m.map((P,S)=>a.jsx("th",{className:`ks-display py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis ${S===t?"ks-gold":"ks-cream"}`,children:P},S))]})}),a.jsx("tbody",{ref:v,children:Array.from({length:I}).map((P,S)=>a.jsxs("tr",{className:"border-b border-amber-900/15 ks-live-row",children:[a.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:S+1}),m.map(($,R)=>{var w,y;const V=(w=p[S])==null?void 0:w[R],D=(y=A[S])==null?void 0:y[R],H=i==="cumulative"?D:V,q=R===t&&S===n.currentRound;return a.jsxs("td",{className:`text-center py-1.5 px-1 ks-display text-base align-middle ${q?"bg-amber-900/20":""}`,children:[V==="dash"&&i!=="cumulative"&&a.jsx("span",{className:"ks-muted",children:"—"}),typeof H=="number"&&a.jsx("span",{className:`font-medium ${H<0?"text-red-300":"ks-cream"}`,children:H.toLocaleString("sk-SK")}),H==null&&(q&&s>0?a.jsxs("span",{className:"ks-gold italic opacity-70",children:["+",s]}):null)]},R)})]},S))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"border-t-2 border-amber-700/50",children:[a.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"Σ"}),e.map((P,S)=>{const $=r&&P>=r;return a.jsx("td",{className:`text-center py-2 px-2 ks-display text-lg font-bold ${P<0?"text-red-300":$||S===t?"ks-gold":"ks-cream"}`,children:P.toLocaleString("sk-SK")},S)})]})})]})})]})}const Oa=bn.memo(yg),Yt=["#d4b86a","#e07070","#7eb8e0","#7ede9a","#e0a870","#b07ee0","#e0d870","#70e0d4"];function bg({tournament:n,totals:e,target:t}){if(!n||!Array.isArray(n.players))return null;const{players:s,rounds:r}=n,[i,c]=j.useState(null),l=j.useMemo(()=>{const k=[],x=s.map(()=>0);return k.push({kolo:0,...s.reduce((E,b,ae)=>({...E,[`p${ae}`]:0}),{})}),r.forEach((E,b)=>{E.forEach((we,it)=>{typeof we=="number"&&(x[it]+=we)});const ae={kolo:b+1};s.forEach((we,it)=>{ae[`p${it}`]=x[it]}),k.push(ae)}),k},[s,r]),d=s.map((k,x)=>({name:k,total:e[x],i:x,color:Yt[x%Yt.length]})).sort((k,x)=>x.total-k.total),h=600,m=260,p=48,v=16,I=20,A=28,P=h-p-v,S=m-I-A,$=Math.max(t,...e)+200,R=Math.min(0,...e)-100,V=$-R,D=l.length-1||1,H=k=>p+k/D*P,q=k=>I+S-(k-R)/V*S,w=j.useMemo(()=>{const k=Math.pow(10,Math.floor(Math.log10(V/4))),x=[1,2,5,10].map(b=>b*k).find(b=>V/b<=8)||k,E=[];for(let b=Math.ceil(R/x)*x;b<=$;b+=x)E.push(b);return E},[R,$,V]),y=k=>k>=1e3?`${(k/1e3).toFixed(k%1e3===0?0:1)}k`:k<-999?`-${(Math.abs(k)/1e3).toFixed(1)}k`:String(k),_=j.useCallback(k=>{const x=k.currentTarget.getBoundingClientRect(),E=(k.clientX-x.left)*(h/x.width)-p,b=Math.round(E/P*D);b>=0&&b<l.length&&c({idx:b})},[l,D]);return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:d.map((k,x)=>a.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:k.color}}),a.jsxs("div",{className:"ks-display ks-cream text-sm font-semibold truncate flex-1",children:[x===0&&k.total>0&&a.jsx(gs,{size:11,className:"ks-gold inline mr-1 -mt-0.5"}),k.name]}),a.jsx("div",{className:`ks-display text-sm font-bold ${k.total<0?"ks-text-accent":"ks-gold"}`,children:k.total.toLocaleString("sk-SK")})]},k.i))}),a.jsxs("div",{className:"ks-card rounded-sm p-3",children:[a.jsxs("svg",{viewBox:`0 0 ${h} ${m}`,style:{width:"100%",height:280,overflow:"visible"},onMouseMove:_,onMouseLeave:()=>c(null),children:[w.map(k=>a.jsxs("g",{children:[a.jsx("line",{x1:p,x2:p+P,y1:q(k),y2:q(k),stroke:"rgba(201,168,92,0.12)",strokeDasharray:"2 4"}),a.jsx("text",{x:p-4,y:q(k)+4,textAnchor:"end",fontSize:9,fill:"#a89679",children:y(k)})]},k)),l.map((k,x)=>a.jsx("text",{x:H(x),y:I+S+14,textAnchor:"middle",fontSize:9,fill:"#a89679",children:k.kolo},x)),a.jsx("text",{x:p+P/2,y:m-2,textAnchor:"middle",fontSize:9,fill:"#a89679",children:"Kolo"}),R<0&&$>0&&a.jsx("line",{x1:p,x2:p+P,y1:q(0),y2:q(0),stroke:"rgba(201,168,92,0.2)"}),a.jsx("line",{x1:p,x2:p+P,y1:q(t),y2:q(t),stroke:"#d4b86a",strokeDasharray:"4 4",strokeWidth:1.5}),a.jsxs("text",{x:p+P-4,y:q(t)-5,textAnchor:"end",fontSize:9,fill:"#d4b86a",children:["Cieľ ",t.toLocaleString("sk-SK")]}),s.map((k,x)=>{const E=l.map((b,ae)=>`${H(ae)},${q(b[`p${x}`])}`).join(" ");return a.jsxs("g",{children:[a.jsx("polyline",{points:E,fill:"none",stroke:Yt[x%Yt.length],strokeWidth:2,strokeLinejoin:"round"}),l.map((b,ae)=>a.jsx("circle",{cx:H(ae),cy:q(b[`p${x}`]),r:2.5,fill:Yt[x%Yt.length]},ae))]},x)}),i&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:H(i.idx),x2:H(i.idx),y1:I,y2:I+S,stroke:"rgba(212,184,106,0.3)",strokeWidth:1}),s.map((k,x)=>a.jsx("circle",{cx:H(i.idx),cy:q(l[i.idx][`p${x}`]),r:5,fill:Yt[x%Yt.length],stroke:"#0e0c0a",strokeWidth:2},x))]})]}),i&&l[i.idx]&&(()=>{const k=l[i.idx],x=s.map((E,b)=>({name:E,val:k[`p${b}`],color:Yt[b%Yt.length]})).sort((E,b)=>b.val-E.val);return a.jsxs("div",{className:"ks-card rounded-sm p-2.5 mt-2",style:{background:"rgba(20,16,12,0.97)",maxWidth:200},children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:["KOLO ",k.kolo]}),a.jsx("div",{className:"space-y-0.5",children:x.map((E,b)=>a.jsxs("div",{className:"flex items-center gap-2 text-xs ks-body",children:[a.jsx("span",{style:{width:10,height:2,background:E.color,display:"inline-block"}}),a.jsx("span",{className:"ks-cream flex-1",children:E.name}),a.jsx("span",{className:"ks-display ks-gold font-semibold",children:E.val.toLocaleString("sk-SK")})]},b))})]})})()]}),l.length<=1&&a.jsx("div",{className:"ks-muted text-xs italic text-center",children:"Graf sa naplní po prvom kole."})]})}function _g({children:n,onClick:e,disabled:t,className:s="",icon:r,variant:i="gold"}){const c="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return a.jsxs("button",{onClick:e,disabled:t,className:`${c} ${l[i]} ${s}`,children:[r&&a.jsx(r,{size:18,strokeWidth:2}),n]})}function Va(){return a.jsxs("div",{className:"flex items-center justify-center gap-3 my-3",children:[a.jsx("div",{className:"ks-divider flex-1"}),a.jsx("div",{className:"ks-gold text-xs",children:"✦"}),a.jsx("div",{className:"ks-divider flex-1"})]})}const hu=n=>{let e;const t=new Set,s=(h,m)=>{const p=typeof h=="function"?h(e):h;if(!Object.is(p,e)){const v=e;e=m??(typeof p!="object"||p===null)?p:Object.assign({},e,p),t.forEach(I=>I(e,v))}},r=()=>e,l={setState:s,getState:r,getInitialState:()=>d,subscribe:h=>(t.add(h),()=>t.delete(h))},d=e=n(s,r,l);return l},vg=(n=>n?hu(n):hu),kg=n=>n;function xg(n,e=kg){const t=bn.useSyncExternalStore(n.subscribe,bn.useCallback(()=>e(n.getState()),[n,e]),bn.useCallback(()=>e(n.getInitialState()),[n,e]));return bn.useDebugValue(t),t}const wg=n=>{const e=vg(n),t=s=>xg(e,s);return Object.assign(t,e),t},Eg=(n=>wg);function Ig(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var i;const c=d=>d===null?null:JSON.parse(d,void 0),l=(i=t.getItem(r))!=null?i:null;return l instanceof Promise?l.then(c):c(l)},setItem:(r,i)=>t.setItem(r,JSON.stringify(i,void 0)),removeItem:r=>t.removeItem(r)}}const La=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(s){return La(s)(t)},catch(s){return this}}}catch(t){return{then(s){return this},catch(s){return La(s)(t)}}}},Tg=(n,e)=>(t,s,r)=>{let i={storage:Ig(()=>window.localStorage),partialize:S=>S,version:0,merge:(S,$)=>({...$,...S}),...e},c=!1,l=0;const d=new Set,h=new Set;let m=i.storage;if(!m)return n((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...S)},s,r);const p=()=>{const S=i.partialize({...s()});return m.setItem(i.name,{state:S,version:i.version})},v=r.setState;r.setState=(S,$)=>(v(S,$),p());const I=n((...S)=>(t(...S),p()),s,r);r.getInitialState=()=>I;let A;const P=()=>{var S,$;if(!m)return;const R=++l;c=!1,d.forEach(D=>{var H;return D((H=s())!=null?H:I)});const V=(($=i.onRehydrateStorage)==null?void 0:$.call(i,(S=s())!=null?S:I))||void 0;return La(m.getItem.bind(m))(i.name).then(D=>{if(D)if(typeof D.version=="number"&&D.version!==i.version){if(i.migrate){const H=i.migrate(D.state,D.version);return H instanceof Promise?H.then(q=>[!0,q]):[!0,H]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,D.state];return[!1,void 0]}).then(D=>{var H;if(R!==l)return;const[q,w]=D;if(A=i.merge(w,(H=s())!=null?H:I),t(A,!0),q)return p()}).then(()=>{R===l&&(V==null||V(s(),void 0),A=s(),c=!0,h.forEach(D=>D(A)))}).catch(D=>{R===l&&(V==null||V(void 0,D))})};return r.persist={setOptions:S=>{i={...i,...S},S.storage&&(m=S.storage)},clearStorage:()=>{m==null||m.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>P(),hasHydrated:()=>c,onHydrate:S=>(d.add(S),()=>{d.delete(S)}),onFinishHydration:S=>(h.add(S),()=>{h.delete(S)})},i.skipHydration||P(),A||I},Ag=Tg,$r=Eg()(Ag(n=>({roomId:null,uid:null,isRecorder:!1,roomState:null,status:"offline",setRoomId:e=>n({roomId:e}),setUid:e=>n({uid:e}),setIsRecorder:e=>n({isRecorder:e}),setRoomState:e=>n({roomState:e,status:"connected"}),setStatus:e=>n({status:e}),reset:()=>n({roomId:null,uid:null,isRecorder:!1,roomState:null,status:"offline"})}),{name:"ks-online",partialize:n=>({roomId:n.roomId,uid:n.uid,isRecorder:n.isRecorder})}));function Sg({onClick:n}){const e=$r(c=>c.status),t={connected:{Icon:ii,color:"text-green-400",label:"Online"},error:{Icon:ko,color:"text-red-400",label:"Chyba"}},{Icon:s,color:r,label:i}=t[e]||{Icon:Yd,color:"ks-muted",label:"Offline"};return a.jsxs("button",{onClick:n,className:"inline-flex items-center gap-1.5 border ks-border-sub rounded-sm px-2 py-1 mt-2 ks-press",children:[a.jsx(s,{size:12,className:r}),a.jsx("span",{className:`ks-mono text-xs ${r}`,children:i})]})}function Ng({onNew:n,onArchive:e,onrules:t,onSettings:s,onResume:r,onOnline:i,active:c,tournamentCount:l}){return a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsxs("div",{className:"px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade",children:[a.jsx("div",{className:"ks-gold text-xs ks-mono mb-2",children:"★ ZALOŽENÉ 2026 by Marcel ★"}),a.jsxs("h1",{className:"ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none",children:["Kocky",a.jsx("br",{}),a.jsx("span",{className:"italic font-medium",children:"sveta"})]}),a.jsx(Va,{}),a.jsx(Sg,{onClick:i})]}),a.jsxs("div",{className:"flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1",children:[r&&a.jsxs("button",{onClick:r,className:"ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4",style:{borderLeftColor:"#d4b86a"},children:[a.jsx(Xi,{className:"ks-gold",size:24}),a.jsxs("div",{className:"text-left flex-1",children:[a.jsx("div",{className:"ks-mono ks-gold text-sm",children:"POKRAČOVAŤ V TURNAJI"}),a.jsxs("div",{className:"ks-body ks-cream text-sm opacity-80",children:[c.players.length," hráčov · do ",(c.targetScore||1e4).toLocaleString("sk-SK")," · kolo ",c.currentRound+1]})]}),a.jsx(At,{className:"ks-gold",size:20})]}),a.jsx(Ni,{icon:Xi,title:"Nový turnaj",subtitle:c?"Najprv ukonči prebiehajúci turnaj":"Začať novú hru až pre šesť hráčov",onClick:n,primary:!0,disabled:!!c}),a.jsx(Ni,{icon:Jd,title:"Archív turnajov",subtitle:`${l||0} uložených turnajov`,onClick:e}),a.jsx(Ni,{icon:Ca,title:"Pravidlá hry",subtitle:"Bodovanie a kombinácie kociek",onClick:t}),a.jsx(Ni,{icon:mc,title:"Nastavenia",subtitle:"Pravidlá, export, editácia archívu",onClick:s})]}),a.jsxs("div",{className:"text-center ks-muted text-xs pb-6 ks-mono",children:[a.jsx(Va,{}),"KOCKY · SVETA · KOCKY"]})]})}function Ni({icon:n,title:e,subtitle:t,onClick:s,primary:r,disabled:i}){return a.jsxs("button",{onClick:s,disabled:i,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${r?"border-amber-700/40":""} ${i?"opacity-40 cursor-not-allowed":""}`,children:[a.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center ${r?"ks-gold-bg":"border ks-border-sub"}`,children:a.jsx(n,{size:22,className:r?"":"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-sm",children:t})]}),a.jsx(At,{className:"ks-muted",size:20})]})}function sh({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(_s,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}const Rg=[{value:5e3,label:"Krátka hra",sub:"do 5 000 bodov"},{value:1e4,label:"Klasická hra",sub:"do 10 000 bodov"}];function Cg({onBack:n,onStart:e}){const[t,s]=j.useState(3),[r,i]=j.useState(1e4),[c,l]=j.useState(["","","","","",""]),d=(m,p)=>l(v=>v.map((I,A)=>A===m?p:I));function h(){const m=c.slice(0,t).map((p,v)=>p.trim()||`Hráč ${v+1}`);e(m,r)}return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(sh,{title:"Nový turnaj",onBack:n}),a.jsxs("div",{className:"p-5 max-w-md mx-auto space-y-6",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 flex items-center gap-2",children:[a.jsx(pc,{size:12})," CIEĽ HRY"]}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:Rg.map(m=>a.jsxs("button",{onClick:()=>i(m.value),className:`ks-press py-3 px-3 rounded-sm text-left ${r===m.value?"ks-gold-bg":"ks-card ks-cream"}`,children:[a.jsx("div",{className:"ks-display text-2xl font-semibold leading-tight",children:m.value.toLocaleString("sk-SK")}),a.jsx("div",{className:`text-xs ${r===m.value?"opacity-80":"ks-muted"}`,children:m.label})]},m.value))})]}),a.jsx(Va,{}),a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"POČET HRÁČOV"}),a.jsx("div",{className:"grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(m=>a.jsx("button",{onClick:()=>s(m),className:`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${t===m?"ks-gold-bg":"ks-card ks-cream"}`,children:m},m))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"MENÁ HRÁČOV"}),a.jsx("div",{className:"space-y-2",children:Array.from({length:t}).map((m,p)=>a.jsxs("div",{className:"ks-card flex items-center gap-3 p-2 rounded-sm",children:[a.jsx("div",{className:"w-9 h-9 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-semibold",children:p+1}),a.jsx("input",{value:c[p],onChange:v=>d(p,v.target.value),placeholder:`Hráč ${p+1}`,maxLength:18,className:"flex-1 bg-transparent ks-cream ks-body text-lg outline-none placeholder:text-stone-600"})]},p))})]}),a.jsx(_g,{onClick:h,icon:Xi,className:"w-full text-lg",children:"Začať turnaj"})]})]})}const fu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cpath d='M80 20 L93 45 L120 38 L122 65 L148 74 L136 98 L152 118 L126 122 L122 148 L95 138 L80 158 L65 138 L38 148 L34 122 L8 118 L24 98 L12 74 L38 65 L40 38 L67 45 Z' fill='rgba(110%2C55%2C170%2C0.28)'/%3E%3Cpath d='M87 48 L65 87 L82 87 L72 113 L103 72 L86 72 Z' fill='rgba(185%2C135%2C255%2C0.48)'/%3E%3C/svg%3E") repeat`,mu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ccircle cx='80' cy='66' r='48' fill='rgba(205%2C232%2C255%2C0.30)'/%3E%3Ccircle cx='63' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Ccircle cx='97' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Cline x1='50' y1='48' x2='72' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cline x1='110' y1='48' x2='88' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M75 82 L80 74 L85 82Z' fill='rgba(10%2C52%2C130%2C0.45)'/%3E%3Crect x='52' y='102' width='56' height='20' rx='6' fill='rgba(205%2C232%2C255%2C0.22)'/%3E%3Crect x='59' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='75' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='91' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3C/svg%3E") repeat`,Pg=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg stroke='rgba(100%2C62%2C12%2C0.28)' fill='none' stroke-width='2.5'%3E%3Cpolygon points='100 18 145 95 55 95'/%3E%3Ccircle cx='100' cy='68' r='27'/%3E%3Cline x1='100' y1='18' x2='100' y2='95'/%3E%3C/g%3E%3Cpath d='M164 30 L153 54 L163 54 L150 80' stroke='rgba(100%2C62%2C12%2C0.22)' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M35 152 L38 141 L41 152 L52 155 L41 158 L38 169 L35 158 L24 155Z' fill='rgba(100%2C62%2C12%2C0.20)'/%3E%3Ccircle cx='172' cy='164' r='3.5' fill='rgba(100%2C62%2C12%2C0.16)'/%3E%3Ccircle cx='20' cy='128' r='2.5' fill='rgba(100%2C62%2C12%2C0.13)'/%3E%3C/svg%3E") repeat`,jg={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},caveatbrush:{id:"caveatbrush",name:"Caveat Brush",stack:"'Caveat Brush', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}},Ma={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}},brawlstars:{id:"brawlstars",name:"Brawl Stars",bg:`${fu}, radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)`,vars:{"--ks-bg-main":`${fu}, #1a0830`,"--ks-bg-soft":"rgba(52,18,80,0.92)","--ks-bg-soft-2":"rgba(28,10,45,0.96)","--ks-card-sub":"rgba(40,14,62,0.74)","--ks-border":"rgba(200,80,220,0.28)","--ks-border-strong":"rgba(230,120,255,0.62)","--ks-text":"#f8e8ff","--ks-text-muted":"#c0a0d8","--ks-accent":"#e070d0","--ks-accent-2":"#8030b0","--ks-button-text":"#280a3a","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(20,6,34,0.97)","--ks-sticky-bg2":"rgba(14,4,24,0.98)"}},brawlblue:{id:"brawlblue",name:"Brawl Blue",bg:`${mu}, radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)`,vars:{"--ks-bg-main":`${mu}, #061e54`,"--ks-bg-soft":"rgba(10,48,110,0.92)","--ks-bg-soft-2":"rgba(6,26,65,0.96)","--ks-card-sub":"rgba(8,36,88,0.74)","--ks-border":"rgba(40,180,240,0.28)","--ks-border-strong":"rgba(80,210,255,0.62)","--ks-text":"#e8f4ff","--ks-text-muted":"#90b8d8","--ks-accent":"#40d8f0","--ks-accent-2":"#2878c8","--ks-button-text":"#030e28","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(4,14,44,0.97)","--ks-sticky-bg2":"rgba(3,10,32,0.98)"}},harrypotter:{id:"harrypotter",name:"Harry Potter",bg:`${Pg}, radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg, #f8ecd4 0%, #efe0b8 40%, #e8d6a4 70%, #f2e8c8 100%)`,vars:{"--ks-bg-main":"#f0e2c0","--ks-bg-soft":"rgba(252,244,226,0.97)","--ks-bg-soft-2":"rgba(248,238,215,1.0)","--ks-card-sub":"rgba(244,232,206,0.98)","--ks-border":"rgba(140,88,18,0.30)","--ks-border-strong":"rgba(160,100,20,0.62)","--ks-text":"#271608","--ks-text-muted":"#7a5030","--ks-accent":"#8b5814","--ks-accent-2":"#740001","--ks-button-text":"#f8f0de","--ks-danger":"#aa2020","--ks-sticky-bg":"rgba(244,232,202,0.97)","--ks-sticky-bg2":"rgba(238,224,192,0.98)"}}};function rh({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(_s,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function Dg({selectedSkin:n,onSkinChange:e}){const t=Object.values(Ma);return a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t.map(s=>{const r=s.id===n,i=s.vars["--ks-accent"],c=s.vars["--ks-accent-2"],l=s.vars["--ks-bg-main"],d=s.vars["--ks-bg-soft"],h=s.vars["--ks-text"];return a.jsxs("button",{onClick:()=>e(s.id),className:"ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110 relative",style:{minHeight:"120px",background:l,borderColor:r?i:"rgba(255,255,255,0.12)"},children:[r&&a.jsx("div",{className:"absolute top-3 right-3 ks-mono font-bold text-[13px] tracking-wider",style:{color:i},children:"✦ AKTÍVNY"}),a.jsx("div",{className:"flex items-start w-full",children:a.jsx("div",{className:"ks-display text-base font-semibold leading-tight",style:{color:h},children:s.name})}),a.jsxs("div",{className:"mt-auto w-full grid items-end",style:{gridTemplateColumns:"1fr auto",columnGap:"12px",rowGap:"4px"},children:[a.jsx("div",{className:"rounded-[4px] shrink-0",style:{width:38,height:38,background:i,gridColumn:"2",gridRow:"1 / 3"}}),a.jsxs("div",{className:"flex items-center gap-1.5 w-full",children:[a.jsx("div",{className:"rounded-[3px] border border-white/10 flex-1",style:{height:15,background:d}}),a.jsx("div",{className:"rounded-[3px] flex-1",style:{height:15,background:c}})]})]})]},s.id)})})}function Og({selectedFont:n,onFontChange:e}){const t=Object.values(jg);return a.jsx("div",{className:"grid grid-cols-2 gap-3",children:t.map(s=>{const r=s.id===n;return a.jsxs("button",{onClick:()=>e(s.id),className:`ks-press rounded-sm p-3 border-2 transition-all flex flex-col items-center text-center ks-card ${r?"ks-card-prom ks-border-accent":"ks-border-sub hover:shadow-md"}`,children:[r&&a.jsx("div",{className:"ks-mono ks-gold text-[9px] tracking-[0.18em] mb-1",children:"✦ AKTÍVNE"}),a.jsx("div",{className:"ks-cream text-base font-semibold leading-tight",style:{fontFamily:s.stack},children:s.name}),a.jsx("div",{className:"ks-muted text-xs mt-1.5",style:{fontFamily:s.stack},children:"Ukážka · Abc 123"})]},s.id)})})}function Vg({onBack:n,selectedMode:e,onChangeMode:t,selectedSkin:s}){const r=[{id:"basic",title:"Klasický",desc:"Tabuľka hore a zapisovanie bodov pod ňou."},{id:"observer",title:"Pozorovateľ",desc:"Veľký živý prehľad skóre pre obrazovku alebo TV."},{id:"recorder",title:"Zapisovateľ",desc:"Jednoduché veľké ovládanie pre rýchly zápis bodov."}],i=Ma[s]||Ma.classic;return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",style:{background:i.bg},children:[a.jsx(rh,{title:"Zobrazenie hry",onBack:n}),a.jsx("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:r.map(c=>a.jsx("button",{onClick:()=>t(c.id),className:`ks-card w-full p-4 rounded-sm text-left ks-press border ${e===c.id?"border-amber-500/70 bg-amber-900/10":"ks-border-sub"}`,children:a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:c.title}),a.jsx("div",{className:"ks-muted text-sm mt-1",children:c.desc})]}),a.jsxs("div",{className:"shrink-0 w-[62px]",children:[a.jsx("div",{className:"h-[92px] rounded-sm border border-amber-900/25 overflow-hidden",style:{background:i.bg},children:c.id==="basic"?a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"18px 28px 1fr",gap:"4px",padding:"5px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,184,106,0.24)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}):c.id==="observer"?a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 1fr",gap:"4px",padding:"5px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.2)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"8px 1fr 1fr 1fr",gap:"3px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.14)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]})]})]}):a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 22px 1fr 12px",gap:"4px",padding:"5px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 18px",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}})]})]})}),e===c.id?a.jsx("div",{className:"ks-gold ks-mono text-[10px] text-right mt-1",children:"AKTÍVNE"}):a.jsx("div",{className:"h-[14px] mt-1"})]})]})},c.id))})]})}function pu({enabled:n,onToggle:e,labelOn:t,labelOff:s,iconOn:r,iconOff:i}){return a.jsxs("button",{onClick:e,className:`ks-press flex items-center gap-3 w-full px-4 py-3 rounded-sm border transition-colors ${n?"ks-border-accent border bg-amber-950/20":"ks-border-sub border"}`,children:[a.jsx("div",{className:`flex-shrink-0 ${n?"ks-gold":"ks-muted"}`,children:n?a.jsx(r,{size:20}):a.jsx(i,{size:20})}),a.jsx("div",{className:"flex-1 text-left",children:a.jsx("div",{className:`text-sm font-semibold ${n?"ks-cream":"ks-muted"}`,children:n?t:s})}),a.jsx("div",{className:`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${n?"ks-gold-bg":"bg-stone-700"}`,children:a.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${n?"translate-x-5":"translate-x-0"}`})})]})}function Lg({onBack:n,selectedSkin:e,onSkinChange:t,selectedFont:s,onFontChange:r,tournamentViewMode:i,onTournamentViewModeChange:c,onViewModes:l,soundsEnabled:d,onSoundsToggle:h,animationsEnabled:m,onAnimationsToggle:p}){return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(rh,{title:"Vizuál, Zvuky a Skiny",onBack:n}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-5",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"ZVUKOVÉ EFEKTY"}),a.jsx(pu,{enabled:d,onToggle:h,labelOn:"Zvuky zapnuté",labelOff:"Zvuky vypnuté",iconOn:Np,iconOff:Sp}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"ANIMÁCIE"}),a.jsx(pu,{enabled:m,onToggle:p,labelOn:"Animácie zapnuté",labelOff:"Animácie vypnuté",iconOn:Qd,iconOff:Rp}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"SKINY"}),a.jsx(Dg,{selectedSkin:e,onSkinChange:t}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"PÍSMO"}),a.jsx(Og,{selectedFont:s,onFontChange:r})]})]})}const Mg=()=>{};var gu={};/**
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
 */const ih=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ug=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],c=n[t++],l=n[t++],d=((r&7)<<18|(i&63)<<12|(c&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const i=n[t++],c=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|c&63)}}return e.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],c=r+1<n.length,l=c?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,I=h&63;d||(I=64,c||(v=64)),s.push(t[m],t[p],t[v],t[I])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ih(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ug(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||h==null||p==null)throw new Fg;const v=i<<2|l>>4;if(s.push(v),h!==64){const I=l<<4&240|h>>2;if(s.push(I),p!==64){const A=h<<6&192|p;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zg=function(n){const e=ih(n);return oh.encodeByteArray(e,!0)},Zi=function(n){return zg(n).replace(/\./g,"")},ah=function(n){try{return oh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $g(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bg=()=>$g().__FIREBASE_DEFAULTS__,Hg=()=>{if(typeof process>"u"||typeof gu>"u")return;const n=gu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ah(n[1]);return e&&JSON.parse(e)},Io=()=>{try{return Mg()||Bg()||Hg()||Wg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ch=n=>{var e,t;return(t=(e=Io())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},qg=n=>{const e=ch(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},lh=()=>{var n;return(n=Io())==null?void 0:n.config},uh=n=>{var e;return(e=Io())==null?void 0:e[`_${n}`]};/**
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
 */class Kg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Gg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zi(JSON.stringify(t)),Zi(JSON.stringify(c)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Yg(){var e;const n=(e=Io())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ey(){const n=yt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ty(){return!Yg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ny(){try{return typeof indexedDB=="object"}catch{return!1}}function sy(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const ry="FirebaseError";class Sn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ry,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],c=i?iy(i,s):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new Sn(r,l,s)}}function iy(n,e){return n.replace(oy,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const oy=/\{\$([^}]+)}/g;function ay(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],c=e[r];if(yu(i)&&yu(c)){if(!vs(i,c))return!1}else if(i!==c)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function yu(n){return n!==null&&typeof n=="object"}/**
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
 */function Zs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function cy(n,e){const t=new ly(n,e);return t.subscribe.bind(t)}class ly{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");uy(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=ua),r.error===void 0&&(r.error=ua),r.complete===void 0&&(r.complete=ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ua(){}/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}/**
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
 */function ai(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dh(n){return(await fetch(n,{credentials:"include"})).ok}class ks{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class dy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Kg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fy(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&c.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hy(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hy(n){return n===fs?void 0:n}function fy(n){return n.instantiationMode==="EAGER"}/**
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
 */class my{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const py={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},gy=fe.INFO,yy={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},by=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=yy[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=gy,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?py[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const _y=(n,e)=>e.some(t=>n instanceof t);let bu,_u;function vy(){return bu||(bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ky(){return _u||(_u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hh=new WeakMap,Ua=new WeakMap,fh=new WeakMap,da=new WeakMap,vc=new WeakMap;function xy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",c)},i=()=>{t(Un(n.result)),r()},c=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&hh.set(t,n)}).catch(()=>{}),vc.set(e,n),e}function wy(n){if(Ua.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",c),n.removeEventListener("abort",c)},i=()=>{t(),r()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",c),n.addEventListener("abort",c)});Ua.set(n,e)}let Fa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ey(n){Fa=n(Fa)}function Iy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ha(this),e,...t);return fh.set(s,e.sort?e.sort():[e]),Un(s)}:ky().includes(n)?function(...e){return n.apply(ha(this),e),Un(hh.get(this))}:function(...e){return Un(n.apply(ha(this),e))}}function Ty(n){return typeof n=="function"?Iy(n):(n instanceof IDBTransaction&&wy(n),_y(n,vy())?new Proxy(n,Fa):n)}function Un(n){if(n instanceof IDBRequest)return xy(n);if(da.has(n))return da.get(n);const e=Ty(n);return e!==n&&(da.set(n,e),vc.set(e,n)),e}const ha=n=>vc.get(n);function Ay(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const c=indexedDB.open(n,e),l=Un(c);return s&&c.addEventListener("upgradeneeded",d=>{s(Un(c.result),d.oldVersion,d.newVersion,Un(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{i&&d.addEventListener("close",()=>i()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Sy=["get","getKey","getAll","getAllKeys","count"],Ny=["put","add","delete","clear"],fa=new Map;function vu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Ny.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Sy.includes(t)))return;const i=async function(c,...l){const d=this.transaction(c,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&d.done]))[0]};return fa.set(e,i),i}Ey(n=>({...n,get:(e,t,s)=>vu(e,t)||n.get(e,t,s),has:(e,t)=>!!vu(e,t)||n.has(e,t)}));/**
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
 */class Ry{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cy(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Cy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const za="@firebase/app",ku="0.14.12";/**
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
 */const wn=new _c("@firebase/app"),Py="@firebase/app-compat",jy="@firebase/analytics-compat",Dy="@firebase/analytics",Oy="@firebase/app-check-compat",Vy="@firebase/app-check",Ly="@firebase/auth",My="@firebase/auth-compat",Uy="@firebase/database",Fy="@firebase/data-connect",zy="@firebase/database-compat",$y="@firebase/functions",By="@firebase/functions-compat",Hy="@firebase/installations",Wy="@firebase/installations-compat",qy="@firebase/messaging",Ky="@firebase/messaging-compat",Gy="@firebase/performance",Jy="@firebase/performance-compat",Yy="@firebase/remote-config",Qy="@firebase/remote-config-compat",Xy="@firebase/storage",Zy="@firebase/storage-compat",eb="@firebase/firestore",tb="@firebase/ai",nb="@firebase/firestore-compat",sb="firebase",rb="12.13.0";/**
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
 */const $a="[DEFAULT]",ib={[za]:"fire-core",[Py]:"fire-core-compat",[Dy]:"fire-analytics",[jy]:"fire-analytics-compat",[Vy]:"fire-app-check",[Oy]:"fire-app-check-compat",[Ly]:"fire-auth",[My]:"fire-auth-compat",[Uy]:"fire-rtdb",[Fy]:"fire-data-connect",[zy]:"fire-rtdb-compat",[$y]:"fire-fn",[By]:"fire-fn-compat",[Hy]:"fire-iid",[Wy]:"fire-iid-compat",[qy]:"fire-fcm",[Ky]:"fire-fcm-compat",[Gy]:"fire-perf",[Jy]:"fire-perf-compat",[Yy]:"fire-rc",[Qy]:"fire-rc-compat",[Xy]:"fire-gcs",[Zy]:"fire-gcs-compat",[eb]:"fire-fst",[nb]:"fire-fst-compat",[tb]:"fire-vertex","fire-js":"fire-js",[sb]:"fire-js-all"};/**
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
 */const eo=new Map,ob=new Map,Ba=new Map;function xu(n,e){try{n.container.addComponent(e)}catch(t){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ws(n){const e=n.name;if(Ba.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ba.set(e,n);for(const t of eo.values())xu(t,n);for(const t of ob.values())xu(t,n);return!0}function kc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new oi("app","Firebase",ab);/**
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
 */class cb{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const er=rb;function mh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:$a,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Fn.create("bad-app-name",{appName:String(r)});if(t||(t=lh()),!t)throw Fn.create("no-options");const i=eo.get(r);if(i){if(vs(t,i.options)&&vs(s,i.config))return i;throw Fn.create("duplicate-app",{appName:r})}const c=new my(r);for(const d of Ba.values())c.addComponent(d);const l=new cb(t,s,c);return eo.set(r,l),l}function ph(n=$a){const e=eo.get(n);if(!e&&n===$a&&lh())return mh();if(!e)throw Fn.create("no-app",{appName:n});return e}function zn(n,e,t){let s=ib[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(c.join(" "));return}Ws(new ks(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lb="firebase-heartbeat-database",ub=1,Br="firebase-heartbeat-store";let ma=null;function gh(){return ma||(ma=Ay(lb,ub,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Br)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fn.create("idb-open",{originalErrorMessage:n.message})})),ma}async function db(n){try{const t=(await gh()).transaction(Br),s=await t.objectStore(Br).get(yh(n));return await t.done,s}catch(e){if(e instanceof Sn)wn.warn(e.message);else{const t=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(t.message)}}}async function wu(n,e){try{const s=(await gh()).transaction(Br,"readwrite");await s.objectStore(Br).put(e,yh(n)),await s.done}catch(t){if(t instanceof Sn)wn.warn(t.message);else{const s=Fn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wn.warn(s.message)}}}function yh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hb=1024,fb=30;class mb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gb(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Eu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(c=>c.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>fb){const c=yb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eu(),{heartbeatsToSend:s,unsentEntries:r}=pb(this._heartbeatsCache.heartbeats),i=Zi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wn.warn(t),""}}}function Eu(){return new Date().toISOString().substring(0,10)}function pb(n,e=hb){const t=[];let s=n.slice();for(const r of n){const i=t.find(c=>c.agent===r.agent);if(i){if(i.dates.push(r.date),Iu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Iu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ny()?sy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await db(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Iu(n){return Zi(JSON.stringify({version:2,heartbeats:n})).length}function yb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function bb(n){Ws(new ks("platform-logger",e=>new Ry(e),"PRIVATE")),Ws(new ks("heartbeat",e=>new mb(e),"PRIVATE")),zn(za,ku,n),zn(za,ku,"esm2020"),zn("fire-js","")}bb("");/**
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
 */const _b={PHONE:"phone",TOTP:"totp"},vb={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},kb={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},xb={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},wb={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Eb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ib=Eb,_h=bh,vh=new oi("auth","Firebase",bh()),Tb={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const to=new _c("@firebase/auth");function Ab(n,...e){to.logLevel<=fe.WARN&&to.warn(`Auth (${er}): ${n}`,...e)}function $i(n,...e){to.logLevel<=fe.ERROR&&to.error(`Auth (${er}): ${n}`,...e)}/**
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
 */function Rt(n,...e){throw wc(n,...e)}function wt(n,...e){return wc(n,...e)}function xc(n,e,t){const s={..._h(),[e]:t};return new oi("auth","Firebase",s).create(e,{appName:n.name})}function rt(n){return xc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tr(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Rt(n,"argument-error"),xc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wc(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return vh.create(n,...e)}function M(n,e,...t){if(!n)throw wc(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $i(e),new Error(e)}function En(n,e){n||Xt(e)}/**
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
 */function Hr(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ec(){return Tu()==="http:"||Tu()==="https:"}function Tu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Sb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ec()||Xg()||"connection"in navigator)?navigator.onLine:!0}function Nb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,En(t>e,"Short delay should be less than long delay!"),this.isMobile=Jg()||Zg()}get(){return Sb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ic(n,e){En(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class kh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pb=new ci(3e4,6e4);function Ne(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Re(n,e,t,s,r={}){return xh(n,r,async()=>{let i={},c={};s&&(e==="GET"?c=s:i={body:JSON.stringify(s)});const l=Zs({key:n.config.apiKey,...c}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:d,...i};return Qg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ai(n.emulatorConfig.host)&&(h.credentials="include"),kh.fetch()(await wh(n,n.config.apiHost,t,l),h)})}async function xh(n,e,t){n._canInitEmulator=!1;const s={...Rb,...e};try{const r=new Db(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await i.json();if("needConfirmation"in c)throw Ar(n,"account-exists-with-different-credential",c);if(i.ok&&!("errorMessage"in c))return c;{const l=i.ok?c.errorMessage:c.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw Ar(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw Ar(n,"user-disabled",c);const m=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw xc(n,m,h);Rt(n,m)}}catch(r){if(r instanceof Sn)throw r;Rt(n,"network-request-failed",{message:String(r)})}}async function Nn(n,e,t,s,r={}){const i=await Re(n,e,t,s,r);return"mfaPendingCredential"in i&&Rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function wh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,c=i.config.emulator?Ic(n.config,r):`${n.config.apiScheme}://${r}`;return Cb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(c).toString():c}function jb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Db{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(wt(this.auth,"network-request-failed")),Pb.get())})}}function Ar(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=wt(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */function Au(n){return n!==void 0&&n.getResponse!==void 0}function Su(n){return n!==void 0&&n.enterprise!==void 0}class Eh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function Ob(n){return(await Re(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ih(n,e){return Re(n,"GET","/v2/recaptchaConfig",Ne(n,e))}/**
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
 */async function Vb(n,e){return Re(n,"POST","/v1/accounts:delete",e)}async function Lb(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function no(n,e){return Re(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function jr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function Mb(n,e=!1){return te(n).getIdToken(e)}async function Th(n,e=!1){const t=te(n),s=await t.getIdToken(e),r=To(s);M(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,c=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jr(pa(r.auth_time)),issuedAtTime:jr(pa(r.iat)),expirationTime:jr(pa(r.exp)),signInProvider:c||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pa(n){return Number(n)*1e3}function To(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const r=ah(t);return r?JSON.parse(r):($i("Failed to decode base64 JWT payload"),null)}catch(r){return $i("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Nu(n){const e=To(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function In(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Sn&&Ub(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ub({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Fb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ha{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wr(n){var p;const e=n.auth,t=await n.getIdToken(),s=await In(n,no(e,{idToken:t}));M(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?Sh(r.providerUserInfo):[],c=zb(n.providerData,i),l=n.isAnonymous,d=!(n.email&&r.passwordHash)&&!(c!=null&&c.length),h=l?d:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Ha(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Ah(n){const e=te(n);await Wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zb(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Sh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function $b(n,e){const t=await xh(n,{},async()=>{const s=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,c=await wh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return n.emulatorConfig&&ai(n.emulatorConfig.host)&&(d.credentials="include"),kh.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Bb(n,e){return Re(n,"POST","/v2/accounts:revokeToken",Ne(n,e))}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Nu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await $b(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,c=new Ls;return s&&(M(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),r&&(M(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),i&&(M(typeof i=="number","internal-error",{appName:e}),c.expirationTime=i),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function Mn(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Fb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ha(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await In(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Th(this,e)}reload(){return Ah(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Wr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await In(this,Vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,d=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:I,providerData:A,stsTokenManager:P}=t;M(p&&P,e,"internal-error");const S=Ls.fromJSON(this.name,P);M(typeof p=="string",e,"internal-error"),Mn(s,e.name),Mn(r,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof I=="boolean",e,"internal-error"),Mn(i,e.name),Mn(c,e.name),Mn(l,e.name),Mn(d,e.name),Mn(h,e.name),Mn(m,e.name);const $=new $t({uid:p,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:I,photoURL:c,phoneNumber:i,tenantId:l,stsTokenManager:S,createdAt:h,lastLoginAt:m});return A&&Array.isArray(A)&&($.providerData=A.map(R=>({...R}))),d&&($._redirectEventId=d),$}static async _fromIdTokenResponse(e,t,s=!1){const r=new Ls;r.updateFromServerResponse(t);const i=new $t({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Wr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];M(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Sh(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ls;l.updateFromIdToken(s);const d=new $t({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:c}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ha(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(d,h),d}}/**
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
 */const Ru=new Map;function _n(n){En(n instanceof Function,"Expected a class definition");let e=Ru.get(n);return e?(En(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ru.set(n,e),e)}/**
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
 */class Nh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nh.type="NONE";const Wa=Nh;/**
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
 */function Bi(n,e,t){return`firebase:${n}:${e}:${t}`}class Ms{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Bi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bi("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await no(this.auth,{idToken:e}).catch(()=>{});return t?$t._fromGetAccountInfoResponse(this.auth,t,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ms(_n(Wa),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||_n(Wa);const c=Bi(s,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(c);if(m){let p;if(typeof m=="string"){const v=await no(e,{idToken:m}).catch(()=>{});if(!v)break;p=await $t._fromGetAccountInfoResponse(e,v,m)}else p=$t._fromJSON(e,m);h!==i&&(l=p),i=h;break}}catch{}const d=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new Ms(i,e,s):(i=d[0],l&&await i._set(c,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(c)}catch{}})),new Ms(i,e,s))}}/**
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
 */function Cu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Oh(e))return"Blackberry";if(Vh(e))return"Webos";if(Ch(e))return"Safari";if((e.includes("chrome/")||Ph(e))&&!e.includes("edge/"))return"Chrome";if(Dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rh(n=yt()){return/firefox\//i.test(n)}function Ch(n=yt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ph(n=yt()){return/crios\//i.test(n)}function jh(n=yt()){return/iemobile/i.test(n)}function Dh(n=yt()){return/android/i.test(n)}function Oh(n=yt()){return/blackberry/i.test(n)}function Vh(n=yt()){return/webos/i.test(n)}function Tc(n=yt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Hb(n=yt()){var e;return Tc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Wb(){return ey()&&document.documentMode===10}function Lh(n=yt()){return Tc(n)||Dh(n)||Vh(n)||Oh(n)||/windows phone/i.test(n)||jh(n)}/**
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
 */function Mh(n,e=[]){let t;switch(n){case"Browser":t=Cu(yt());break;case"Worker":t=`${Cu(yt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${er}/${s}`}/**
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
 */class qb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((c,l)=>{try{const d=e(i);c(d)}catch(d){l(d)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Kb(n,e={}){return Re(n,"GET","/v2/passwordPolicy",Ne(n,e))}/**
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
 */const Gb=6;class Jb{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Gb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Yb{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new qb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await no(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Le(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===l)&&(d!=null&&d.user)&&(s=d.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(rt(this));const t=e?te(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kb(this),t=new Jb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Bb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{c||i(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,s,r);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ab(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fe(n){return te(n)}class Pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=cy(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qb(n){li=n}function Ac(n){return li.loadJS(n)}function Xb(){return li.recaptchaV2Script}function Zb(){return li.recaptchaEnterpriseScript}function e_(){return li.gapiScript}function Uh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const t_=500,n_=6e4,Ri=1e12;class s_{constructor(e){this.auth=e,this.counter=Ri,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new o_(e,this.auth.name,t||{})),this.counter++,s}reset(e){var s;const t=e||Ri;(s=this._widgets.get(t))==null||s.delete(),this._widgets.delete(t)}getResponse(e){var s;const t=e||Ri;return((s=this._widgets.get(t))==null?void 0:s.getResponse())||""}async execute(e){var s;const t=e||Ri;return(s=this._widgets.get(t))==null||s.execute(),""}}class r_{constructor(){this.enterprise=new i_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class i_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class o_{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;M(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=a_(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},n_)},t_))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function a_(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const c_="recaptcha-enterprise",Dr="NO_RECAPTCHA";class Fh{constructor(e){this.type=c_,this.auth=Fe(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(c,l)=>{Ih(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Eh(d);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,c(h.siteKey)}}).catch(d=>{l(d)})})}function r(i,c,l){const d=window.grecaptcha;Su(d)?d.enterprise.ready(()=>{d.enterprise.execute(i,{action:e}).then(h=>{c(h)}).catch(()=>{c(Dr)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new r_().execute("siteKey",{action:"verify"}):new Promise((i,c)=>{s(this.auth).then(l=>{if(!t&&Su(window.grecaptcha))r(l,i,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Zb();d.length!==0&&(d+=l),Ac(d).then(()=>{r(l,i,c)}).catch(h=>{c(h)})}}).catch(l=>{c(l)})})}}async function kr(n,e,t,s=!1,r=!1){const i=new Fh(n);let c;if(r)c=Dr;else try{c=await i.verify(t)}catch{c=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function $n(n,e,t,s,r){var i,c;if(r==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await kr(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await kr(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(l)});else if(r==="PHONE_PROVIDER")if((c=n._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const l=await kr(n,e,t);return s(n,l).catch(async d=>{var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(d.code==="auth/missing-recaptcha-token"||d.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await kr(n,e,t,!1,!0);return s(n,m)}return Promise.reject(d)})}else{const l=await kr(n,e,t,!1,!0);return s(n,l)}else return Promise.reject(r+" provider is not supported.")}async function zh(n){const e=Fe(n),t=await Ih(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new Eh(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new Fh(e).verify()}/**
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
 */function $h(n,e){const t=kc(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(vs(i,e??{}))return r;Rt(r,"already-initialized")}return t.initialize({options:e})}function l_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Bh(n,e,t){const s=Fe(n);M(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=Hh(e),{host:c,port:l}=u_(e),d=l===null?"":`:${l}`,h={url:`${i}//${c}${d}/`},m=Object.freeze({host:c,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){M(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),M(vs(h,s.config.emulator)&&vs(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,ai(c)?dh(`${i}//${c}${d}`):r||d_()}function Hh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function u_(n){const e=Hh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ju(s.substr(i.length+1))}}else{const[i,c]=s.split(":");return{host:i,port:ju(c)}}}function ju(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function d_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class nr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
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
 */async function Wh(n,e){return Re(n,"POST","/v1/accounts:resetPassword",Ne(n,e))}async function h_(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function f_(n,e){return Re(n,"POST","/v1/accounts:signUp",e)}async function m_(n,e){return Re(n,"POST","/v1/accounts:update",Ne(n,e))}/**
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
 */async function p_(n,e){return Nn(n,"POST","/v1/accounts:signInWithPassword",Ne(n,e))}async function Ao(n,e){return Re(n,"POST","/v1/accounts:sendOobCode",Ne(n,e))}async function g_(n,e){return Ao(n,e)}async function y_(n,e){return Ao(n,e)}async function b_(n,e){return Ao(n,e)}async function __(n,e){return Ao(n,e)}/**
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
 */async function v_(n,e){return Nn(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}async function k_(n,e){return Nn(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}/**
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
 */class qs extends nr{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new qs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $n(e,t,"signInWithPassword",p_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return v_(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $n(e,s,"signUpPassword",f_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return k_(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xn(n,e){return Nn(n,"POST","/v1/accounts:signInWithIdp",Ne(n,e))}/**
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
 */const x_="http://localhost";class rn extends nr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const c=new rn(s,r);return c.idToken=i.idToken||void 0,c.accessToken=i.accessToken||void 0,c.secret=i.secret,c.nonce=i.nonce,c.pendingToken=i.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:x_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
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
 */async function Du(n,e){return Re(n,"POST","/v1/accounts:sendVerificationCode",Ne(n,e))}async function w_(n,e){return Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e))}async function E_(n,e){const t=await Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e));if(t.temporaryProof)throw Ar(n,"account-exists-with-different-credential",t);return t}const I_={USER_NOT_FOUND:"user-not-found"};async function T_(n,e){const t={...e,operation:"REAUTH"};return Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,t),I_)}/**
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
 */class Bn extends nr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Bn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Bn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return w_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return E_(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return T_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new Bn({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
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
 */function A_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S_(n){const e=Ir(Tr(n)).link,t=e?Ir(Tr(e)).deep_link_id:null,s=Ir(Tr(n)).deep_link_id;return(s?Ir(Tr(s)).link:null)||s||t||e||n}class sr{constructor(e){const t=Ir(Tr(e)),s=t.apiKey??null,r=t.oobCode??null,i=A_(t.mode??null);M(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=S_(e);try{return new sr(t)}catch{return null}}}function N_(n){return sr.parseLink(n)}/**
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
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(e,t){return qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=sr.parseLink(t);return M(s,"argument-error"),qs._fromEmailAndCode(e,s.code,s.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rr extends Rn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Or extends rr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),rn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),rn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Or.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Or.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:c,providerId:l}=e;if(!s&&!r&&!t&&!i||!l)return null;try{return new Or(l)._credential({idToken:t,accessToken:s,nonce:c,pendingToken:i})}catch{return null}}}/**
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
 */class mn extends rr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return pn.credential(t,s)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class gn extends rr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */const R_="http://localhost";class qr extends nr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=t;return!s||!r||!i||s!==r?null:new qr(s,i)}static _create(e,t){return new qr(e,t)}buildRequest(){return{requestUri:R_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const C_="saml.";class so extends Rn{constructor(e){M(e.startsWith(C_),"argument-error"),super(e)}static credentialFromResult(e){return so.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return so.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=qr.fromJSON(e);return M(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return qr._create(s,t)}catch{return null}}}/**
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
 */class yn extends rr{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return yn.credential(t,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function qh(n,e){return Nn(n,"POST","/v1/accounts:signUp",Ne(n,e))}/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await $t._fromIdTokenResponse(e,s,r),c=Ou(s);return new Ut({user:i,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Ou(s);return new Ut({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Ou(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Kh(n){var r;if(Le(n.app))return Promise.reject(rt(n));const e=Fe(n);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new Ut({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await qh(e,{returnSecureToken:!0}),s=await Ut._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class ro extends Sn{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ro(e,t,s,r)}}function Gh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(n,i,e,s):i})}/**
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
 */function Jh(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function P_(n,e){const t=te(n);await So(!0,t,e);const{providerUserInfo:s}=await Lb(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Jh(s||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Sc(n,e,t=!1){const s=await In(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",s)}async function So(n,e,t){await Wr(e);const s=Jh(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";M(s.has(t)===n,e.auth,r)}/**
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
 */async function Yh(n,e,t=!1){const{auth:s}=n;if(Le(s.app))return Promise.reject(rt(s));const r="reauthenticate";try{const i=await In(n,Gh(s,r,e,n),t);M(i.idToken,s,"internal-error");const c=To(i.idToken);M(c,s,"internal-error");const{sub:l}=c;return M(n.uid===l,s,"user-mismatch"),Ut._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rt(s,"user-mismatch"),i}}/**
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
 */async function Qh(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const s="signIn",r=await Gh(n,s,e),i=await Ut._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function No(n,e){return Qh(Fe(n),e)}async function Xh(n,e){const t=te(n);return await So(!1,t,e.providerId),Sc(t,e)}async function Zh(n,e){return Yh(te(n),e)}/**
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
 */async function j_(n,e){return Nn(n,"POST","/v1/accounts:signInWithCustomToken",Ne(n,e))}/**
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
 */async function D_(n,e){if(Le(n.app))return Promise.reject(rt(n));const t=Fe(n),s=await j_(t,{token:e,returnSecureToken:!0}),r=await Ut._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
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
 */class ui{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Nc._fromServerResponse(e,t):"totpInfo"in t?Rc._fromServerResponse(e,t):Rt(e,"internal-error")}}class Nc extends ui{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Nc(t)}}class Rc extends ui{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Rc(t)}}/**
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
 */function Ro(n,e,t){var s;M(((s=t.url)==null?void 0:s.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),M(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Cc(n){const e=Fe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function O_(n,e,t){const s=Fe(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ro(s,r,t),await $n(s,r,"getOobCode",y_,"EMAIL_PASSWORD_PROVIDER")}async function V_(n,e,t){await Wh(te(n),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Cc(n),s})}async function L_(n,e){await m_(te(n),{oobCode:e})}async function ef(n,e){const t=te(n),s=await Wh(t,{oobCode:e}),r=s.requestType;switch(M(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":M(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":M(s.mfaInfo,t,"internal-error");default:M(s.email,t,"internal-error")}let i=null;return s.mfaInfo&&(i=ui._fromServerResponse(Fe(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function M_(n,e){const{data:t}=await ef(te(n),e);return t.email}async function U_(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=Fe(n),c=await $n(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qh,"EMAIL_PASSWORD_PROVIDER").catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Cc(n),d}),l=await Ut._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(l.user),l}function F_(n,e,t){return Le(n.app)?Promise.reject(rt(n)):No(te(n),ts.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Cc(n),s})}/**
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
 */async function z_(n,e,t){const s=Fe(n),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(c,l){M(l.handleCodeInApp,s,"argument-error"),l&&Ro(s,c,l)}i(r,t),await $n(s,r,"getOobCode",b_,"EMAIL_PASSWORD_PROVIDER")}function $_(n,e){const t=sr.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function B_(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=te(n),r=ts.credentialWithLink(e,t||Hr());return M(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),No(s,r)}/**
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
 */async function H_(n,e){return Re(n,"POST","/v1/accounts:createAuthUri",Ne(n,e))}/**
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
 */async function W_(n,e){const t=Ec()?Hr():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:r}=await H_(te(n),s);return r||[]}async function q_(n,e){const t=te(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ro(t.auth,r,e);const{email:i}=await g_(t.auth,r);i!==n.email&&await n.reload()}async function K_(n,e,t){const s=te(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ro(s.auth,i,t);const{email:c}=await __(s.auth,i);c!==n.email&&await n.reload()}/**
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
 */async function G_(n,e){return Re(n,"POST","/v1/accounts:update",e)}/**
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
 */async function J_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=te(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await In(s,G_(s.auth,i));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function Y_(n,e){const t=te(n);return Le(t.auth.app)?Promise.reject(rt(t.auth)):tf(t,e,null)}function Q_(n,e){return tf(te(n),null,e)}async function tf(n,e,t){const{auth:s}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const c=await In(n,h_(s,i));await n._updateTokensIfNecessary(c,!0)}/**
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
 */function X_(n){var r,i;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const c=(i=(r=To(n.idToken))==null?void 0:r.firebase)==null?void 0:i.sign_in_provider;if(c){const l=c!=="anonymous"&&c!=="custom"?c:null;return new Us(s,l)}}if(!e)return null;switch(e){case"facebook.com":return new Z_(s,t);case"github.com":return new ev(s,t);case"google.com":return new tv(s,t);case"twitter.com":return new nv(s,t,n.screenName||null);case"custom":case"anonymous":return new Us(s,null);default:return new Us(s,e,t)}}class Us{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class nf extends Us{constructor(e,t,s,r){super(e,t,s),this.username=r}}class Z_ extends Us{constructor(e,t){super(e,"facebook.com",t)}}class ev extends nf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class tv extends Us{constructor(e,t){super(e,"google.com",t)}}class nv extends nf{constructor(e,t,s){super(e,"twitter.com",t,s)}}function sv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:X_(t)}/**
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
 */function sf(n,e){return te(n).setPersistence(e)}function rv(n){return zh(n)}async function iv(n,e){return Fe(n).validatePassword(e)}function rf(n,e,t,s){return te(n).onIdTokenChanged(e,t,s)}function of(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function ov(n,e,t,s){return te(n).onAuthStateChanged(e,t,s)}function av(n){te(n).useDeviceLanguage()}function cv(n,e){return te(n).updateCurrentUser(e)}function lv(n){return te(n).signOut()}function uv(n,e){return Fe(n).revokeAccessToken(e)}async function dv(n){return te(n).delete()}/**
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
 */class ms{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new ms("enroll",e,t)}static _fromMfaPendingCredential(e){return new ms("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ms._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return ms._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Pc{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=Fe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(l=>ui._fromServerResponse(s,l));M(r.mfaPendingCredential,s,"internal-error");const c=ms._fromMfaPendingCredential(r.mfaPendingCredential);return new Pc(c,i,async l=>{const d=await l._process(s,c);delete r.mfaInfo,delete r.mfaPendingCredential;const h={...r,idToken:d.idToken,refreshToken:d.refreshToken};switch(t.operationType){case"signIn":const m=await Ut._fromIdTokenResponse(s,t.operationType,h);return await s._updateCurrentUser(m.user),m;case"reauthenticate":return M(t.user,s,"internal-error"),Ut._forOperation(t.user,t.operationType,h);default:Rt(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function hv(n,e){var r;const t=te(n),s=e;return M(e.customData.operationType,t,"argument-error"),M((r=s.customData._serverResponse)==null?void 0:r.mfaPendingCredential,t,"argument-error"),Pc._fromError(t,s)}/**
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
 */function Vu(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function fv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function mv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function pv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function gv(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(n,e))}class jc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>ui._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new jc(e)}async getSession(){return ms._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,r=await this.getSession(),i=await In(this.user,s._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const r=await In(this.user,gv(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const ga=new WeakMap;function yv(n){const e=te(n);return ga.has(e)||ga.set(e,jc._fromUser(e)),ga.get(e)}const io="__sak";/**
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
 */class af{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bv=1e3,_v=10;class cf extends af{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,d)=>{this.notifyListeners(c,d)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},i=this.storage.getItem(s);Wb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_v):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cf.type="LOCAL";const Dc=cf;/**
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
 */const vv=1e3;function ya(n){var s;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((s=document.cookie.match(t))==null?void 0:s[1])??null}function ba(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class lf{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=ba(e);if(window.cookieStore){const s=await window.cookieStore.get(t);return s==null?void 0:s.value}return ya(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const s=ba(e);document.cookie=`${s}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const s=ba(e);if(window.cookieStore){const l=(h=>{const m=h.changed.find(v=>v.name===s);m&&t(m.value),h.deleted.find(v=>v.name===s)&&t(null)}),d=()=>window.cookieStore.removeEventListener("change",l);return this.listenerUnsubscribes.set(t,d),window.cookieStore.addEventListener("change",l)}let r=ya(s);const i=setInterval(()=>{const l=ya(s);l!==r&&(t(l),r=l)},vv),c=()=>clearInterval(i);this.listenerUnsubscribes.set(t,c)}_removeListener(e,t){const s=this.listenerUnsubscribes.get(t);s&&(s(),this.listenerUnsubscribes.delete(t))}}lf.type="COOKIE";const kv=lf;/**
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
 */class uf extends af{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uf.type="SESSION";const Oc=uf;/**
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
 */function xv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Co(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(c).map(async h=>h(t.origin,i)),d=await xv(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Co.receivers=[];/**
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
 */function Po(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class wv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,c;return new Promise((l,d)=>{const h=Po("",20);r.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},s);c={messageChannel:r,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function We(){return window}function Ev(n){We().location.href=n}/**
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
 */function Vc(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function Iv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Av(){return Vc()?self:null}/**
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
 */const df="firebaseLocalStorageDb",Sv=1,oo="firebaseLocalStorage",hf="fbase_key";class di{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jo(n,e){return n.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function Nv(){const n=indexedDB.deleteDatabase(df);return new di(n).toPromise()}function qa(){const n=indexedDB.open(df,Sv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(oo,{keyPath:hf})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(oo)?e(s):(s.close(),await Nv(),e(await qa()))})})}async function Lu(n,e,t){const s=jo(n,!0).put({[hf]:e,value:t});return new di(s).toPromise()}async function Rv(n,e){const t=jo(n,!1).get(e),s=await new di(t).toPromise();return s===void 0?null:s.value}function Mu(n,e){const t=jo(n,!0).delete(e);return new di(t).toPromise()}const Cv=800,Pv=3;class ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Pv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Co._getInstance(Av()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Iv(),!this.activeServiceWorker)return;this.sender=new wv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qa();return await Lu(e,io,"1"),await Mu(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Rv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=jo(r,!1).getAll();return new di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ff.type="LOCAL";const mf=ff;/**
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
 */function Uu(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:start",Ne(n,e))}function jv(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}function Dv(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}/**
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
 */const _a=Uh("rcb"),Ov=new ci(3e4,6e4);class Vv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=We().grecaptcha)!=null&&e.render)}load(e,t=""){return M(Lv(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Au(We().grecaptcha)?Promise.resolve(We().grecaptcha):new Promise((s,r)=>{const i=We().setTimeout(()=>{r(wt(e,"network-request-failed"))},Ov.get());We()[_a]=()=>{We().clearTimeout(i),delete We()[_a];const l=We().grecaptcha;if(!l||!Au(l)){r(wt(e,"internal-error"));return}const d=l.render;l.render=(h,m)=>{const p=d(h,m);return this.counter++,p},this.hostLanguage=t,s(l)};const c=`${Xb()}?${Zs({onload:_a,render:"explicit",hl:t})}`;Ac(c).catch(()=>{clearTimeout(i),r(wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=We().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Lv(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Mv{async load(e){return new s_(e)}clearedOneInstance(){}}/**
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
 */const Vr="recaptcha",Uv={theme:"light",type:"image"};class Fv{constructor(e,t,s={...Uv}){this.parameters=s,this.type=Vr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;M(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Mv:new Vv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(r=>{const i=c=>{c&&(this.tokenChangeListeners.delete(i),r(c))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=We()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(Ec()&&!Vc(),this.auth,"internal-error"),await zv(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ob(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function zv(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Lc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Bn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function $v(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=Fe(n),r=await Do(s,e,te(t));return new Lc(r,i=>No(s,i))}async function Bv(n,e,t){const s=te(n);await So(!1,s,"phone");const r=await Do(s.auth,e,te(t));return new Lc(r,i=>Xh(s,i))}async function Hv(n,e,t){const s=te(n);if(Le(s.auth.app))return Promise.reject(rt(s.auth));const r=await Do(s.auth,e,te(t));return new Lc(r,i=>Zh(s,i))}async function Do(n,e,t){var s;if(!n._getRecaptchaConfig())try{await zh(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){M(i.type==="enroll",n,"internal-error");const c={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await $n(n,c,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===Dr){M((t==null?void 0:t.type)===Vr,m,"argument-error");const v=await va(m,p,t);return Vu(m,v)}return Vu(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{M(i.type==="signin",n,"internal-error");const c=((s=r.multiFactorHint)==null?void 0:s.uid)||r.multiFactorUid;M(c,n,"missing-multi-factor-info");const l={mfaPendingCredential:i.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await $n(n,l,"mfaSmsSignIn",async(p,v)=>{if(v.phoneSignInInfo.captchaResponse===Dr){M((t==null?void 0:t.type)===Vr,p,"argument-error");const I=await va(p,v,t);return Uu(p,I)}return Uu(p,v)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await $n(n,i,"sendVerificationCode",async(h,m)=>{if(m.captchaResponse===Dr){M((t==null?void 0:t.type)===Vr,h,"argument-error");const p=await va(h,m,t);return Du(h,p)}return Du(h,m)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}}async function Wv(n,e){const t=te(n);if(Le(t.auth.app))return Promise.reject(rt(t.auth));await Sc(t,e)}async function va(n,e,t){M(t.type===Vr,n,"argument-error");const s=await t.verify();M(typeof s=="string",n,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const i=r.phoneEnrollmentInfo.phoneNumber,c=r.phoneEnrollmentInfo.captchaResponse,l=r.phoneEnrollmentInfo.clientType,d=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:s,captchaResponse:c,clientType:l,recaptchaVersion:d}}),r}else if("phoneSignInInfo"in r){const i=r.phoneSignInInfo.captchaResponse,c=r.phoneSignInInfo.clientType,l=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:i,clientType:c,recaptchaVersion:l}}),r}else return Object.assign(r,{recaptchaToken:s}),r}/**
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
 */class ys{constructor(e){this.providerId=ys.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,t){return Do(this.auth,e,te(t))}static credential(e,t){return Bn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ys.credentialFromTaggedObject(t)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?Bn._fromTokenResponse(t,s):null}}ys.PROVIDER_ID="phone";ys.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Es(n,e){return e?_n(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mc extends nr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qv(n){return Qh(n.auth,new Mc(n),n.bypassAuthState)}function Kv(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Yh(t,new Mc(n),n.bypassAuthState)}async function Gv(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Sc(t,new Mc(n),n.bypassAuthState)}/**
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
 */class pf{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:c,type:l}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qv;case"linkViaPopup":case"linkViaRedirect":return Gv;case"reauthViaPopup":case"reauthViaRedirect":return Kv;default:Rt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jv=new ci(2e3,1e4);async function Yv(n,e,t){if(Le(n.app))return Promise.reject(wt(n,"operation-not-supported-in-this-environment"));const s=Fe(n);tr(n,e,Rn);const r=Es(s,t);return new vn(s,"signInViaPopup",e,r).executeNotNull()}async function Qv(n,e,t){const s=te(n);if(Le(s.auth.app))return Promise.reject(wt(s.auth,"operation-not-supported-in-this-environment"));tr(s.auth,e,Rn);const r=Es(s.auth,t);return new vn(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function Xv(n,e,t){const s=te(n);tr(s.auth,e,Rn);const r=Es(s.auth,t);return new vn(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class vn extends pf{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jv.get())};e()}}vn.currentPopupAction=null;/**
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
 */const Zv="pendingRedirect",Hi=new Map;class ek extends pf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const s=await tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(n,e){const t=yf(e),s=gf(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function Uc(n,e){return gf(n)._set(yf(e),"true")}function nk(n,e){Hi.set(n._key(),e)}function gf(n){return _n(n._redirectPersistence)}function yf(n){return Bi(Zv,n.config.apiKey,n.name)}/**
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
 */function sk(n,e,t){return rk(n,e,t)}async function rk(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const s=Fe(n);tr(n,e,Rn),await s._initializationPromise;const r=Es(s,t);return await Uc(r,s),r._openRedirect(s,e,"signInViaRedirect")}function ik(n,e,t){return ok(n,e,t)}async function ok(n,e,t){const s=te(n);if(tr(s.auth,e,Rn),Le(s.auth.app))return Promise.reject(rt(s.auth));await s.auth._initializationPromise;const r=Es(s.auth,t);await Uc(r,s.auth);const i=await _f(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function ak(n,e,t){return ck(n,e,t)}async function ck(n,e,t){const s=te(n);tr(s.auth,e,Rn),await s.auth._initializationPromise;const r=Es(s.auth,t);await So(!1,s,e.providerId),await Uc(r,s.auth);const i=await _f(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function lk(n,e){return await Fe(n)._initializationPromise,bf(n,e,!1)}async function bf(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const s=Fe(n),r=Es(s,e),c=await new ek(s,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}async function _f(n){const e=Po(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const uk=600*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!vf(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fu(e))}saveEventToCache(e){this.cachedEventUids.add(Fu(e)),this.lastProcessedEventTime=Date.now()}}function Fu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vf(n);default:return!1}}/**
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
 */async function fk(n,e={}){return Re(n,"GET","/v1/projects",e)}/**
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
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function gk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fk(n);for(const t of e)try{if(yk(t))return}catch{}Rt(n,"unauthorized-domain")}function yk(n){const e=Hr(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!pk.test(t))return!1;if(mk.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const bk=new ci(3e4,6e4);function zu(){const n=We().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _k(n){return new Promise((e,t)=>{var r,i,c;function s(){zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zu(),t(wt(n,"network-request-failed"))},timeout:bk.get()})}if((i=(r=We().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((c=We().gapi)!=null&&c.load)s();else{const l=Uh("iframefcb");return We()[l]=()=>{gapi.load?s():t(wt(n,"network-request-failed"))},Ac(`${e_()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function vk(n){return Wi=Wi||_k(n),Wi}/**
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
 */const kk=new ci(5e3,15e3),xk="__/auth/iframe",wk="emulator/auth/iframe",Ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ik=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tk(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ic(e,wk):`https://${n.config.authDomain}/${xk}`,s={apiKey:e.apiKey,appName:n.name,v:er},r=Ik.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Zs(s).slice(1)}`}async function Ak(n){const e=await vk(n),t=We().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Tk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ek,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const c=wt(n,"network-request-failed"),l=We().setTimeout(()=>{i(c)},kk.get());function d(){We().clearTimeout(l),r(s)}s.ping(d).then(d,()=>{i(c)})}))}/**
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
 */const Sk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,Rk=600,Ck="_blank",Pk="http://localhost";class $u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jk(n,e,t,s=Nk,r=Rk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...Sk,width:s.toString(),height:r.toString(),top:i,left:c},h=yt().toLowerCase();t&&(l=Ph(h)?Ck:t),Rh(h)&&(e=e||Pk,d.scrollbars="yes");const m=Object.entries(d).reduce((v,[I,A])=>`${v}${I}=${A},`,"");if(Hb(h)&&l!=="_self")return Dk(e||"",l),new $u(null);const p=window.open(e||"",l,m);M(p,n,"popup-blocked");try{p.focus()}catch{}return new $u(p)}function Dk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Ok="__/auth/handler",Vk="emulator/auth/handler",Lk=encodeURIComponent("fac");async function Bu(n,e,t,s,r,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:er,eventId:r};if(e instanceof Rn){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",ay(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))c[m]=p}if(e instanceof rr){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(c.scopes=m.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const d=await n._getAppCheckToken(),h=d?`#${Lk}=${encodeURIComponent(d)}`:"";return`${Mk(n)}?${Zs(l).slice(1)}${h}`}function Mk({config:n}){return n.emulator?Ic(n,Vk):`https://${n.authDomain}/${Ok}`}/**
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
 */const ka="webStorageSupport";class Uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=bf,this._overrideRedirectResult=nk}async _openPopup(e,t,s,r){var c;En((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const i=await Bu(e,t,s,Hr(),r);return jk(e,i,Po())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Bu(e,t,s,Hr(),r);return Ev(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(En(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ak(e),s=new dk(e);return t.register("authEvent",r=>(M(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ka,{type:ka},r=>{var c;const i=(c=r==null?void 0:r[0])==null?void 0:c[ka];i!==void 0&&t(!!i),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lh()||Ch()||Tc()}}const kf=Uk;class xf{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xt("unexpected MultiFactorSessionType")}}}class Fc extends xf{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fc(e)}_finalizeEnroll(e,t,s){return fv(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return jv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wf{constructor(){}static assertion(e){return Fc._fromCredential(e)}}wf.FACTOR_ID="phone";class Ef{static assertionForEnrollment(e,t){return Kr._fromSecret(e,t)}static assertionForSignIn(e,t){return Kr._fromEnrollmentId(e,t)}static async generateSecret(e){var r;const t=e;M(typeof((r=t.user)==null?void 0:r.auth)<"u","internal-error");const s=await mv(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Oo._fromStartTotpMfaEnrollmentResponse(s,t.user.auth)}}Ef.FACTOR_ID="totp";class Kr extends xf{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new Kr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Kr(t,e)}async _finalizeEnroll(e,t,s){return M(typeof this.secret<"u",e,"argument-error"),pv(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){M(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return Dv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class Oo{constructor(e,t,s,r,i,c,l){this.sessionInfo=c,this.auth=l,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Oo(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let s=!1;return(Ci(e)||Ci(t))&&(s=!0),s&&(Ci(e)&&(e=((r=this.auth.currentUser)==null?void 0:r.email)||"unknownuser"),Ci(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ci(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var Hu="@firebase/auth",Wu="1.13.1";/**
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
 */class Fk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $k(n){Ws(new ks("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=s.options;M(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mh(n)},h=new Yb(s,r,i,d);return l_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ws(new ks("auth-internal",e=>{const t=Fe(e.getProvider("auth").getImmediate());return(s=>new Fk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Hu,Wu,zk(n)),zn(Hu,Wu,"esm2020")}/**
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
 */const Bk=300,Hk=uh("authIdTokenMaxAge")||Bk;let qu=null;const Wk=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Hk)return;const r=t==null?void 0:t.token;qu!==r&&(qu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function hi(n=ph()){const e=kc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$h(n,{popupRedirectResolver:kf,persistence:[mf,Dc,Oc]}),s=uh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const c=Wk(i.toString());of(t,c,()=>c(t.currentUser)),rf(t,l=>c(l))}}const r=ch("auth");return r&&Bh(t,`http://${r}`),t}function qk(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Qb({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=wt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",qk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$k("Browser");const Kk=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:wb,ActionCodeURL:sr,AuthCredential:nr,AuthErrorCodes:Tb,EmailAuthCredential:qs,EmailAuthProvider:ts,FacebookAuthProvider:mn,FactorId:_b,GithubAuthProvider:gn,GoogleAuthProvider:pn,OAuthCredential:rn,OAuthProvider:Or,OperationType:xb,PhoneAuthCredential:Bn,PhoneAuthProvider:ys,PhoneMultiFactorGenerator:wf,ProviderId:vb,RecaptchaVerifier:Fv,SAMLAuthProvider:so,SignInMethod:kb,TotpMultiFactorGenerator:Ef,TotpSecret:Oo,TwitterAuthProvider:yn,applyActionCode:L_,beforeAuthStateChanged:of,browserCookiePersistence:kv,browserLocalPersistence:Dc,browserPopupRedirectResolver:kf,browserSessionPersistence:Oc,checkActionCode:ef,confirmPasswordReset:V_,connectAuthEmulator:Bh,createUserWithEmailAndPassword:U_,debugErrorMap:Ib,deleteUser:dv,fetchSignInMethodsForEmail:W_,getAdditionalUserInfo:sv,getAuth:hi,getIdToken:Mb,getIdTokenResult:Th,getMultiFactorResolver:hv,getRedirectResult:lk,inMemoryPersistence:Wa,indexedDBLocalPersistence:mf,initializeAuth:$h,initializeRecaptchaConfig:rv,isSignInWithEmailLink:$_,linkWithCredential:Xh,linkWithPhoneNumber:Bv,linkWithPopup:Xv,linkWithRedirect:ak,multiFactor:yv,onAuthStateChanged:ov,onIdTokenChanged:rf,parseActionCodeURL:N_,prodErrorMap:_h,reauthenticateWithCredential:Zh,reauthenticateWithPhoneNumber:Hv,reauthenticateWithPopup:Qv,reauthenticateWithRedirect:ik,reload:Ah,revokeAccessToken:uv,sendEmailVerification:q_,sendPasswordResetEmail:O_,sendSignInLinkToEmail:z_,setPersistence:sf,signInAnonymously:Kh,signInWithCredential:No,signInWithCustomToken:D_,signInWithEmailAndPassword:F_,signInWithEmailLink:B_,signInWithPhoneNumber:$v,signInWithPopup:Yv,signInWithRedirect:sk,signOut:lv,unlink:P_,updateCurrentUser:cv,updateEmail:Y_,updatePassword:Q_,updatePhoneNumber:Wv,updateProfile:J_,useDeviceLanguage:av,validatePassword:iv,verifyBeforeUpdateEmail:K_,verifyPasswordResetCode:M_},Symbol.toStringTag,{value:"Module"}));var Gk="firebase",Jk="12.13.0";/**
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
 */zn(Gk,Jk,"app");var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,If;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.F=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(k,x,E){for(var b=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)b[ae-2]=arguments[ae];return y.prototype[x].apply(k,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,y,_){_||(_=0);const k=Array(16);if(typeof y=="string")for(var x=0;x<16;++x)k[x]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(x=0;x<16;++x)k[x]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],x=w.g[2];let E=w.g[3],b;b=y+(E^_&(x^E))+k[0]+3614090360&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[1]+3905402710&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[2]+606105819&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[3]+3250441966&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(E^_&(x^E))+k[4]+4118548399&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[5]+1200080426&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[6]+2821735955&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[7]+4249261313&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(E^_&(x^E))+k[8]+1770035416&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[9]+2336552879&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[10]+4294925233&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[11]+2304563134&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(E^_&(x^E))+k[12]+1804603682&4294967295,y=_+(b<<7&4294967295|b>>>25),b=E+(x^y&(_^x))+k[13]+4254626195&4294967295,E=y+(b<<12&4294967295|b>>>20),b=x+(_^E&(y^_))+k[14]+2792965006&4294967295,x=E+(b<<17&4294967295|b>>>15),b=_+(y^x&(E^y))+k[15]+1236535329&4294967295,_=x+(b<<22&4294967295|b>>>10),b=y+(x^E&(_^x))+k[1]+4129170786&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[6]+3225465664&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[11]+643717713&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[0]+3921069994&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(x^E&(_^x))+k[5]+3593408605&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[10]+38016083&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[15]+3634488961&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[4]+3889429448&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(x^E&(_^x))+k[9]+568446438&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[14]+3275163606&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[3]+4107603335&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[8]+1163531501&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(x^E&(_^x))+k[13]+2850285829&4294967295,y=_+(b<<5&4294967295|b>>>27),b=E+(_^x&(y^_))+k[2]+4243563512&4294967295,E=y+(b<<9&4294967295|b>>>23),b=x+(y^_&(E^y))+k[7]+1735328473&4294967295,x=E+(b<<14&4294967295|b>>>18),b=_+(E^y&(x^E))+k[12]+2368359562&4294967295,_=x+(b<<20&4294967295|b>>>12),b=y+(_^x^E)+k[5]+4294588738&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[8]+2272392833&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[11]+1839030562&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[14]+4259657740&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(_^x^E)+k[1]+2763975236&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[4]+1272893353&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[7]+4139469664&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[10]+3200236656&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(_^x^E)+k[13]+681279174&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[0]+3936430074&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[3]+3572445317&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[6]+76029189&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(_^x^E)+k[9]+3654602809&4294967295,y=_+(b<<4&4294967295|b>>>28),b=E+(y^_^x)+k[12]+3873151461&4294967295,E=y+(b<<11&4294967295|b>>>21),b=x+(E^y^_)+k[15]+530742520&4294967295,x=E+(b<<16&4294967295|b>>>16),b=_+(x^E^y)+k[2]+3299628645&4294967295,_=x+(b<<23&4294967295|b>>>9),b=y+(x^(_|~E))+k[0]+4096336452&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[7]+1126891415&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[14]+2878612391&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[5]+4237533241&4294967295,_=x+(b<<21&4294967295|b>>>11),b=y+(x^(_|~E))+k[12]+1700485571&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[3]+2399980690&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[10]+4293915773&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[1]+2240044497&4294967295,_=x+(b<<21&4294967295|b>>>11),b=y+(x^(_|~E))+k[8]+1873313359&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[15]+4264355552&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[6]+2734768916&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[13]+1309151649&4294967295,_=x+(b<<21&4294967295|b>>>11),b=y+(x^(_|~E))+k[4]+4149444226&4294967295,y=_+(b<<6&4294967295|b>>>26),b=E+(_^(y|~x))+k[11]+3174756917&4294967295,E=y+(b<<10&4294967295|b>>>22),b=x+(y^(E|~_))+k[2]+718787259&4294967295,x=E+(b<<15&4294967295|b>>>17),b=_+(E^(x|~y))+k[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(x+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+x&4294967295,w.g[3]=w.g[3]+E&4294967295}s.prototype.v=function(w,y){y===void 0&&(y=w.length);const _=y-this.blockSize,k=this.C;let x=this.h,E=0;for(;E<y;){if(x==0)for(;E<=_;)r(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<y;)if(k[x++]=w.charCodeAt(E++),x==this.blockSize){r(this,k),x=0;break}}else for(;E<y;)if(k[x++]=w[E++],x==this.blockSize){r(this,k),x=0;break}}this.h=x,this.o+=y},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,_=0;_<4;++_)for(let k=0;k<32;k+=8)w[y++]=this.g[_]>>>k&255;return w};function i(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function c(w,y){this.h=y;const _=[];let k=!0;for(let x=w.length-1;x>=0;x--){const E=w[x]|0;k&&E==y||(_[x]=E,k=!1)}this.g=_}var l={};function d(w){return-128<=w&&w<128?i(w,function(y){return new c([y|0],y<0?-1:0)}):new c([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return S(h(-w));const y=[];let _=1;for(let k=0;w>=_;k++)y[k]=w/_|0,_*=4294967296;return new c(y,0)}function m(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return S(m(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let k=p;for(let E=0;E<w.length;E+=8){var x=Math.min(8,w.length-E);const b=parseInt(w.substring(E,E+x),y);x<8?(x=h(Math.pow(y,x)),k=k.j(x).add(h(b))):(k=k.j(_),k=k.add(h(b)))}return k}var p=d(0),v=d(1),I=d(16777216);n=c.prototype,n.m=function(){if(P(this))return-S(this).m();let w=0,y=1;for(let _=0;_<this.g.length;_++){const k=this.i(_);w+=(k>=0?k:4294967296+k)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(P(this))return"-"+S(this).toString(w);const y=h(Math.pow(w,6));var _=this;let k="";for(;;){const x=D(_,y).g;_=$(_,x.j(y));let E=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=x,A(_))return E+k;for(;E.length<6;)E="0"+E;k=E+k}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=$(this,w),P(w)?-1:A(w)?0:1};function S(w){const y=w.g.length,_=[];for(let k=0;k<y;k++)_[k]=~w.g[k];return new c(_,~w.h).add(v)}n.abs=function(){return P(this)?S(this):this},n.add=function(w){const y=Math.max(this.g.length,w.g.length),_=[];let k=0;for(let x=0;x<=y;x++){let E=k+(this.i(x)&65535)+(w.i(x)&65535),b=(E>>>16)+(this.i(x)>>>16)+(w.i(x)>>>16);k=b>>>16,E&=65535,b&=65535,_[x]=b<<16|E}return new c(_,_[_.length-1]&-2147483648?-1:0)};function $(w,y){return w.add(S(y))}n.j=function(w){if(A(this)||A(w))return p;if(P(this))return P(w)?S(this).j(S(w)):S(S(this).j(w));if(P(w))return S(this.j(S(w)));if(this.l(I)<0&&w.l(I)<0)return h(this.m()*w.m());const y=this.g.length+w.g.length,_=[];for(var k=0;k<2*y;k++)_[k]=0;for(k=0;k<this.g.length;k++)for(let x=0;x<w.g.length;x++){const E=this.i(k)>>>16,b=this.i(k)&65535,ae=w.i(x)>>>16,we=w.i(x)&65535;_[2*k+2*x]+=b*we,R(_,2*k+2*x),_[2*k+2*x+1]+=E*we,R(_,2*k+2*x+1),_[2*k+2*x+1]+=b*ae,R(_,2*k+2*x+1),_[2*k+2*x+2]+=E*ae,R(_,2*k+2*x+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new c(_,0)};function R(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function V(w,y){this.g=w,this.h=y}function D(w,y){if(A(y))throw Error("division by zero");if(A(w))return new V(p,p);if(P(w))return y=D(S(w),y),new V(S(y.g),S(y.h));if(P(y))return y=D(w,S(y)),new V(S(y.g),y.h);if(w.g.length>30){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var _=v,k=y;k.l(w)<=0;)_=H(_),k=H(k);var x=q(_,1),E=q(k,1);for(k=q(k,2),_=q(_,2);!A(k);){var b=E.add(k);b.l(w)<=0&&(x=x.add(_),E=b),k=q(k,1),_=q(_,1)}return y=$(w,x.j(y)),new V(x,y)}for(x=p;w.l(y)>=0;){for(_=Math.max(1,Math.floor(w.m()/y.m())),k=Math.ceil(Math.log(_)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),E=h(_),b=E.j(y);P(b)||b.l(w)>0;)_-=k,E=h(_),b=E.j(y);A(E)&&(E=v),x=x.add(E),w=$(w,b)}return new V(x,w)}n.B=function(w){return D(this,w).h},n.and=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let k=0;k<y;k++)_[k]=this.i(k)&w.i(k);return new c(_,this.h&w.h)},n.or=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let k=0;k<y;k++)_[k]=this.i(k)|w.i(k);return new c(_,this.h|w.h)},n.xor=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let k=0;k<y;k++)_[k]=this.i(k)^w.i(k);return new c(_,this.h^w.h)};function H(w){const y=w.g.length+1,_=[];for(let k=0;k<y;k++)_[k]=w.i(k)<<1|w.i(k-1)>>>31;return new c(_,w.h)}function q(w,y){const _=y>>5;y%=32;const k=w.g.length-_,x=[];for(let E=0;E<k;E++)x[E]=y>0?w.i(E+_)>>>y|w.i(E+_+1)<<32-y:w.i(E+_);return new c(x,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,If=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=h,c.fromString=m,Hn=c}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tf,Sr,Af,qi,Ka,Sf,Nf,Rf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var f=s;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in f))break e;f=f[N]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},c=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=d,h.apply(null,arguments)}function m(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,N,C){for(var z=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)z[oe-2]=arguments[oe];return u.prototype[N].apply(g,z)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function I(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function A(o,u){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=o.length||0;const C=N.length||0;o.length=f+C;for(let z=0;z<C;z++)o[f+z]=N[z]}else o.push(N)}}class P{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function S(o){c.setTimeout(()=>{throw o},0)}function $(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class R{constructor(){this.h=this.g=null}add(u,f){const g=V.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new P(()=>new D,o=>o.reset());class D{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let H,q=!1,w=new R,y=()=>{const o=Promise.resolve(void 0);H=()=>{o.then(_)}};function _(){for(var o;o=$();){try{o.h.call(o.g)}catch(f){S(f)}var u=V;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}q=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function ae(o,u){x.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(ae,x),ae.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var we="closure_listenable_"+(Math.random()*1e6|0),it=0;function bt(o,u,f,g,N){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=N,this.key=++it,this.da=this.fa=!1}function Et(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function re(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function ge(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Te(o){const u={};for(const f in o)u[f]=o[f];return u}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ge(o,u){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)o[f]=g[f];for(let C=0;C<Q.length;C++)f=Q[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function me(o){this.src=o,this.g={},this.h=0}me.prototype.add=function(o,u,f,g,N){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const z=De(o,u,g,N);return z>-1?(u=o[z],f||(u.fa=!1)):(u=new bt(u,this.src,C,!!g,N),u.fa=f,o.push(u)),u};function _e(o,u){const f=u.type;if(f in o.g){var g=o.g[f],N=Array.prototype.indexOf.call(g,u,void 0),C;(C=N>=0)&&Array.prototype.splice.call(g,N,1),C&&(Et(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function De(o,u,f,g){for(let N=0;N<o.length;++N){const C=o[N];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return N}return-1}var Vt="closure_lm_"+(Math.random()*1e6|0),Je={};function Ct(o,u,f,g,N){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Ct(o,u[C],f,g,N);return null}return f=ot(f),o&&o[we]?o.J(u,f,l(g)?!!g.capture:!1,N):ln(o,u,f,!1,g,N)}function ln(o,u,f,g,N,C){if(!u)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let oe=ye(o);if(oe||(o[Vt]=oe=new me(o)),f=oe.add(u,f,g,z,C),f.proxy)return f;if(g=Ht(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)E||(N=z),N===void 0&&(N=!1),o.addEventListener(u.toString(),g,N);else if(o.attachEvent)o.attachEvent(Wt(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ht(){function o(f){return u.call(o.src,o.listener,f)}const u=As;return o}function _t(o,u,f,g,N){if(Array.isArray(u))for(var C=0;C<u.length;C++)_t(o,u[C],f,g,N);else g=l(g)?!!g.capture:!!g,f=ot(f),o&&o[we]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],f=De(u,f,g,N),f>-1&&(Et(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=ye(o))&&(u=o.g[u.toString()],o=-1,u&&(o=De(u,f,g,N)),(f=o>-1?u[o]:null)&&vt(f))}function vt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[we])_e(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(Wt(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=ye(u))?(_e(f,o),f.h==0&&(f.src=null,u[Vt]=null)):Et(o)}}}function Wt(o){return o in Je?Je[o]:Je[o]="on"+o}function As(o,u){if(o.da)o=!0;else{u=new ae(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&vt(o),o=f.call(g,u)}return o}function ye(o){return o=o[Vt],o instanceof me?o:null}var Lt="__closure_events_fn_"+(Math.random()*1e9>>>0);function ot(o){return typeof o=="function"?o:(o[Lt]||(o[Lt]=function(u){return o.handleEvent(u)}),o[Lt])}function Me(){k.call(this),this.i=new me(this),this.M=this,this.G=null}p(Me,k),Me.prototype[we]=!0,Me.prototype.removeEventListener=function(o,u,f,g){_t(this,o,u,f,g)};function Ce(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new x(u,o);else if(u instanceof x)u.target=u.target||o;else{var N=u;u=new x(g,o),Ge(u,N)}N=!0;let C,z;if(f)for(z=f.length-1;z>=0;z--)C=u.g=f[z],N=qt(C,g,!0,u)&&N;if(C=u.g=o,N=qt(C,g,!0,u)&&N,N=qt(C,g,!1,u)&&N,f)for(z=0;z<f.length;z++)C=u.g=f[z],N=qt(C,g,!1,u)&&N}Me.prototype.N=function(){if(Me.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)Et(f[g]);delete o.g[u],o.h--}}this.G=null},Me.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Me.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function qt(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let N=!0;for(let C=0;C<u.length;++C){const z=u[C];if(z&&!z.da&&z.capture==f){const oe=z.listener,Ze=z.ha||z.src;z.fa&&_e(o.i,z),N=oe.call(Ze,g)!==!1&&N}}return N&&!g.defaultPrevented}function rs(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:c.setTimeout(o,u||0)}function Cn(o){o.g=rs(()=>{o.g=null,o.i&&(o.i=!1,Cn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ss extends k{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Cn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(o){k.call(this),this.h=o,this.g={}}p(un,k);var is=[];function os(o){re(o.g,function(u,f){this.g.hasOwnProperty(f)&&vt(u)},o),o.g={}}un.prototype.N=function(){un.Z.N.call(this),os(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $e=c.JSON.stringify,lr=c.JSON.parse,as=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Kt(){}function dn(){}var F={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function J(){x.call(this,"d")}p(J,x);function K(){x.call(this,"c")}p(K,x);var T={},U=null;function Y(){return U=U||new Me}T.Ia="serverreachability";function Z(o){x.call(this,T.Ia,o)}p(Z,x);function Ee(o){const u=Y();Ce(u,new Z(u))}T.STAT_EVENT="statevent";function ke(o,u){x.call(this,T.STAT_EVENT,o),this.stat=u}p(ke,x);function he(o){const u=Y();Ce(u,new ke(u,o))}T.Ja="timingevent";function Ye(o,u){x.call(this,T.Ja,o),this.size=u}p(Ye,x);function W(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ce(){this.g=!0}ce.prototype.ua=function(){this.g=!1};function be(o,u,f,g,N,C){o.info(function(){if(o.g)if(C){var z="",oe=C.split("&");for(let Ie=0;Ie<oe.length;Ie++){var Ze=oe[Ie].split("=");if(Ze.length>1){const nt=Ze[0];Ze=Ze[1];const Jt=nt.split("_");z=Jt.length>=2&&Jt[1]=="type"?z+(nt+"="+Ze+"&"):z+(nt+"=redacted&")}}}else z=null;else z=C;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+u+`
`+f+`
`+z})}function Qe(o,u,f,g,N,C,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+u+`
`+f+`
`+C+" "+z})}function ht(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Pt(o,f)+(g?" "+g:"")})}function Be(o,u){o.info(function(){return"TIMEOUT: "+u})}ce.prototype.info=function(){};function Pt(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return $e(C)}catch{return u}}var at={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kt;function Pn(){}p(Pn,Kt),Pn.prototype.g=function(){return new XMLHttpRequest},kt=new Pn;function It(o){return encodeURIComponent(String(o))}function cs(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Oe(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ft}function Ft(){this.i=null,this.g="",this.h=!1}var Xe={},xt={};function zt(o,u,f){o.M=1,o.A=vi(Gt(u)),o.u=f,o.R=!0,Ns(o,null)}function Ns(o,u){o.F=Date.now(),Rs(o),o.B=Gt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Rl(f.i,"t",g),o.C=0,f=o.j.L,o.h=new Ft,o.g=Gl(o.j,f?u:null,!o.u),o.P>0&&(o.O=new Ss(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(is[0]=N.toString()),N=is);for(let C=0;C<N.length;C++){const z=Ct(f,N[C],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.J?Te(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Ee(),be(o.i,o.v,o.B,o.l,o.S,o.u)}Oe.prototype.ba=function(o){o=o.target;const u=this.O;u&&On(o)==3?u.j():this.Y(o)},Oe.prototype.Y=function(o){try{if(o==this.g)e:{const oe=On(this.g),Ze=this.g.ya(),Ie=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Ll(this.g)))){this.K||oe!=4||Ze==7||(Ze==8||Ie<=0?Ee(3):Ee(2)),le(this);var u=this.g.ca();this.X=u;var f=Qo(this);if(this.o=u==200,Qe(this.i,this.v,this.B,this.l,this.S,oe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var C=g;break t}}C=null}if(o=C)ht(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tt(this,o);else{this.o=!1,this.m=3,he(12),xe(this),Pe(this);break e}}if(this.R){o=!0;let nt;for(;!this.K&&this.C<f.length;)if(nt=Xo(this,f),nt==xt){oe==4&&(this.m=4,he(14),o=!1),ht(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Xe){this.m=4,he(15),ht(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else ht(this.i,this.l,nt,null),Tt(this,nt);if(ur(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,he(16),o=!1),this.o=this.o&&o,!o)ht(this.i,this.l,f,"[Invalid Chunked Response]"),xe(this),Pe(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),oa(z),z.P=!0,he(11))}}else ht(this.i,this.l,f,null),Tt(this,f);oe==4&&xe(this),this.o&&!this.K&&(oe==4?Hl(this.j,this):(this.o=!1,Rs(this)))}else Ep(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,he(12)):(this.m=0,he(13)),xe(this),Pe(this)}}}catch{}finally{}};function Qo(o){if(!ur(o))return o.g.la();const u=Ll(o.g);if(u==="")return"";let f="";const g=u.length,N=On(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return xe(o),Pe(o),"";o.h.i=new c.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,f+=o.h.i.decode(u[C],{stream:!(N&&C==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function ur(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Xo(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?xt:(f=Number(u.substring(f,g)),isNaN(f)?Xe:(g+=1,g+f>u.length?xt:(u=u.slice(g,g+f),o.C=g+f,u)))}Oe.prototype.cancel=function(){this.K=!0,xe(this)};function Rs(o){o.T=Date.now()+o.H,ne(o,o.H)}function ne(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=W(h(o.aa,o),u)}function le(o){o.D&&(c.clearTimeout(o.D),o.D=null)}Oe.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Be(this.i,this.B),this.M!=2&&(Ee(),he(17)),xe(this),this.m=2,Pe(this)):ne(this,this.T-o)};function Pe(o){o.j.I==0||o.K||Hl(o.j,o)}function xe(o){le(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,os(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Tt(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Zo(f.h,o))){if(!o.L&&Zo(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Ii(f),wi(f);else break e;ia(f),he(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=W(h(f.Va,f),6e3));xl(f.h)<=1&&f.ta&&(f.ta=void 0)}else us(f,11)}else if((o.L||f.g==o)&&Ii(f),!b(u))for(N=f.Ba.g.parse(u),u=0;u<N.length;u++){let Ie=N[u];const nt=Ie[0];if(!(nt<=f.K))if(f.K=nt,Ie=Ie[1],f.I==2)if(Ie[0]=="c"){f.M=Ie[1],f.ba=Ie[2];const Jt=Ie[3];Jt!=null&&(f.ka=Jt,f.j.info("VER="+f.ka));const ds=Ie[4];ds!=null&&(f.za=ds,f.j.info("SVER="+f.za));const Vn=Ie[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(g=1.5*Vn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ln=o.g;if(Ln){const Ai=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var C=g.h;C.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ea(C,C.h),C.h=null))}if(g.G){const aa=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;aa&&(g.wa=aa,Ae(g.J,g.G,aa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=o;if(g.na=Kl(g,g.L?g.ba:null,g.W),z.L){wl(g.h,z);var oe=z,Ze=g.O;Ze&&(oe.H=Ze),oe.D&&(le(oe),Rs(oe)),g.g=z}else $l(g);f.i.length>0&&Ei(f)}else Ie[0]!="stop"&&Ie[0]!="close"||us(f,7);else f.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?us(f,7):ra(f):Ie[0]!="noop"&&f.l&&f.l.qa(Ie),f.A=0)}}Ee(4)}catch{}}var ft=class{constructor(o,u){this.g=o,this.map=u}};function fn(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xl(o){return o.h?1:o.g?o.g.size:0}function Zo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ea(o,u){o.g?o.g.add(u):o.h=u}function wl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}fn.prototype.cancel=function(){if(this.i=El(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function El(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return I(o.i)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hp(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let N,C=null;g>=0?(N=o[f].substring(0,g),C=o[f].substring(g+1)):N=o[f],u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function jn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof jn?(this.l=o.l,dr(this,o.j),this.o=o.o,this.g=o.g,hr(this,o.u),this.h=o.h,ta(this,Cl(o.i)),this.m=o.m):o&&(u=String(o).match(Il))?(this.l=!1,dr(this,u[1]||"",!0),this.o=fr(u[2]||""),this.g=fr(u[3]||"",!0),hr(this,u[4]),this.h=fr(u[5]||"",!0),ta(this,u[6]||"",!0),this.m=fr(u[7]||"")):(this.l=!1,this.i=new pr(null,this.l))}jn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(mr(u,Tl,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(mr(u,Tl,!0),"@"),o.push(It(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(mr(f,f.charAt(0)=="/"?pp:mp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",mr(f,yp)),o.join("")},jn.prototype.resolve=function(o){const u=Gt(this);let f=!!o.j;f?dr(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)hr(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=u.h.lastIndexOf("/");N!=-1&&(g=u.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const C=[];for(let z=0;z<N.length;){const oe=N[z++];oe=="."?g&&z==N.length&&C.push(""):oe==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&z==N.length&&C.push("")):(C.push(oe),g=!0)}g=C.join("/")}else g=N}return f?u.h=g:f=o.i.toString()!=="",f?ta(u,Cl(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Gt(o){return new jn(o)}function dr(o,u,f){o.j=f?fr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function hr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ta(o,u,f){u instanceof pr?(o.i=u,bp(o.i,o.l)):(f||(u=mr(u,gp)),o.i=new pr(u,o.l))}function Ae(o,u,f){o.i.set(u,f)}function vi(o){return Ae(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function fr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function mr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,fp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function fp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Tl=/[#\/\?@]/g,mp=/[#\?:]/g,pp=/[#\?]/g,gp=/[#\?@]/g,yp=/#/g;function pr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ls(o){o.g||(o.g=new Map,o.h=0,o.i&&hp(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=pr.prototype,n.add=function(o,u){ls(this),this.i=null,o=Cs(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Al(o,u){ls(o),u=Cs(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Sl(o,u){return ls(o),u=Cs(o,u),o.g.has(u)}n.forEach=function(o,u){ls(this),this.g.forEach(function(f,g){f.forEach(function(N){o.call(u,N,g,this)},this)},this)};function Nl(o,u){ls(o);let f=[];if(typeof u=="string")Sl(o,u)&&(f=f.concat(o.g.get(Cs(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return ls(this),this.i=null,o=Cs(this,o),Sl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Nl(this,o),o.length>0?String(o[0]):u):u};function Rl(o,u,f){Al(o,u),f.length>0&&(o.i=null,o.g.set(Cs(o,u),I(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const N=It(f);f=Nl(this,f);for(let C=0;C<f.length;C++){let z=N;f[C]!==""&&(z+="="+It(f[C])),o.push(z)}}return this.i=o.join("&")};function Cl(o){const u=new pr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Cs(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function bp(o,u){u&&!o.j&&(ls(o),o.i=null,o.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(Al(this,g),Rl(this,N,f))},o)),o.j=u}function _p(o,u){const f=new ce;if(c.Image){const g=new Image;g.onload=m(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=m(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=m(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(Dn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function vp(o,u){const f=new ce,g=new AbortController,N=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(N),C.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function kp(){this.g=new as}function na(o){this.i=o.Sb||null,this.h=o.ab||!1}p(na,Kt),na.prototype.g=function(){return new ki(this.i,this.h)};function ki(o,u){Me.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ki,Me),n=ki.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,yr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||c).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?gr(this):yr(this),this.readyState==3&&Pl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,gr(this))},n.Na=function(o){this.g&&(this.response=o,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,yr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function yr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function jl(o){let u="";return re(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function sa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=jl(f),typeof o=="string"?f!=null&&It(f):Ae(o,u,f))}function Ue(o){Me.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,Me);var xp=/^https?$/i,wp=["POST","PUT"];n=Ue.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kt.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Dl(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),N=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(wp,u,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,z]of f)this.g.setRequestHeader(C,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Dl(this,C)}};function Dl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Ol(o),xi(o)}function Ol(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ce(this,"complete"),Ce(this,"abort"),xi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),Ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vl(this):this.Xa())},n.Xa=function(){Vl(this)};function Vl(o){if(o.h&&typeof i<"u"){if(o.v&&On(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ce(o,"readystatechange"),On(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=C===0){let z=String(o.D).match(Il)[1]||null;!z&&c.self&&c.self.location&&(z=c.self.location.protocol.slice(0,-1)),g=!xp.test(z?z.toLowerCase():"")}f=g}if(f)Ce(o,"complete"),Ce(o,"success");else{o.o=6;try{var N=On(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",Ol(o)}}finally{xi(o)}}}}function xi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||Ce(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function On(o){return o.g?o.g.readyState:0}n.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),lr(u)}};function Ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ep(o){const u={};o=(o.g&&On(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(b(o[g]))continue;var f=cs(o[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[N]||[];u[N]=C,C.push(f)}ge(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ml(o){this.za=0,this.i=[],this.j=new ce,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=br("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=br("baseRetryDelayMs",5e3,o),this.Za=br("retryDelaySeedMs",1e4,o),this.Ta=br("forwardChannelMaxRetries",2,o),this.va=br("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new fn(o&&o.concurrentRequestLimit),this.Ba=new kp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ml.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){he(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Kl(this,null,this.W),Ei(this)};function ra(o){if(Ul(o),o.I==3){var u=o.V++,f=Gt(o.J);if(Ae(f,"SID",o.M),Ae(f,"RID",u),Ae(f,"TYPE","terminate"),_r(o,f),u=new Oe(o,o.j,u),u.M=2,u.A=vi(Gt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.A,f=!0),f||(u.g=Gl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Rs(u)}ql(o)}function wi(o){o.g&&(oa(o),o.g.cancel(),o.g=null)}function Ul(o){wi(o),o.v&&(c.clearTimeout(o.v),o.v=null),Ii(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function Ei(o){if(!kl(o.h)&&!o.m){o.m=!0;var u=o.Ea;H||y(),q||(H(),q=!0),w.add(u,o),o.D=0}}function Ip(o,u){return xl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=W(h(o.Ea,o,u),Wl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new Oe(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Te(C),Ge(C,this.U)):C=this.U),this.u!==null||this.R||(N.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=zl(this,N,u),f=Gt(this.J),Ae(f,"RID",o),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),_r(this,f),C&&(this.R?u="headers="+It(jl(C))+"&"+u:this.u&&sa(f,this.u,C)),ea(this.h,N),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",u),Ae(f,"SID","null"),N.U=!0,zt(N,f,null)):zt(N,f,u),this.I=2}}else this.I==3&&(o?Fl(this,o):this.i.length==0||kl(this.h)||Fl(this))};function Fl(o,u){var f;u?f=u.l:f=o.V++;const g=Gt(o.J);Ae(g,"SID",o.M),Ae(g,"RID",f),Ae(g,"AID",o.K),_r(o,g),o.u&&o.o&&sa(g,o.u,o.o),f=new Oe(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=zl(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ea(o.h,f),zt(f,g,u)}function _r(o,u){o.H&&re(o.H,function(f,g){Ae(u,g,f)}),o.l&&re({},function(f,g){Ae(u,g,f)})}function zl(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var N=o.i;let oe=-1;for(;;){const Ze=["count="+f];oe==-1?f>0?(oe=N[0].g,Ze.push("ofs="+oe)):oe=0:Ze.push("ofs="+oe);let Ie=!0;for(let nt=0;nt<f;nt++){var C=N[nt].g;const Jt=N[nt].map;if(C-=oe,C<0)oe=Math.max(0,N[nt].g-100),Ie=!1;else try{C="req"+C+"_"||"";try{var z=Jt instanceof Map?Jt:Object.entries(Jt);for(const[ds,Vn]of z){let Ln=Vn;l(Vn)&&(Ln=$e(Vn)),Ze.push(C+ds+"="+encodeURIComponent(Ln))}}catch(ds){throw Ze.push(C+"type="+encodeURIComponent("_badmap")),ds}}catch{g&&g(Jt)}}if(Ie){z=Ze.join("&");break e}}z=void 0}return o=o.i.splice(0,f),u.G=o,z}function $l(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;H||y(),q||(H(),q=!0),w.add(u,o),o.A=0}}function ia(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=W(h(o.Da,o),Wl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Bl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=W(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,he(10),wi(this),Bl(this))};function oa(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function Bl(o){o.g=new Oe(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Gt(o.na);Ae(u,"RID","rpc"),Ae(u,"SID",o.M),Ae(u,"AID",o.K),Ae(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ae(u,"TO",o.ia),Ae(u,"TYPE","xmlhttp"),_r(o,u),o.u&&o.o&&sa(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=vi(Gt(u)),f.u=null,f.R=!0,Ns(f,o)}n.Va=function(){this.C!=null&&(this.C=null,wi(this),ia(this),he(19))};function Ii(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Hl(o,u){var f=null;if(o.g==u){Ii(o),oa(o),o.g=null;var g=2}else if(Zo(o.h,u))f=u.G,wl(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var N=o.D;g=Y(),Ce(g,new Ye(g,f)),Ei(o)}else $l(o);else if(N=u.m,N==3||N==0&&u.X>0||!(g==1&&Ip(o,u)||g==2&&ia(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),N){case 1:us(o,5);break;case 4:us(o,10);break;case 3:us(o,6);break;default:us(o,2)}}}function Wl(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function us(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const N=!g;g=new jn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||dr(g,"https"),vi(g),N?_p(g.toString(),f):vp(g.toString(),f)}else he(2);o.I=0,o.l&&o.l.pa(u),ql(o),Ul(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function ql(o){if(o.I=0,o.ja=[],o.l){const u=El(o.h);(u.length!=0||o.i.length!=0)&&(A(o.ja,u),A(o.ja,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.oa()}}function Kl(o,u,f){var g=f instanceof jn?Gt(f):new jn(f);if(g.g!="")u&&(g.g=u+"."+g.g),hr(g,g.u);else{var N=c.location;g=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;const C=new jn(null);g&&dr(C,g),u&&(C.g=u),N&&hr(C,N),f&&(C.h=f),g=C}return f=o.G,u=o.wa,f&&u&&Ae(g,f,u),Ae(g,"VER",o.ka),_r(o,g),g}function Gl(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ue(new na({ab:f})):new Ue(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jl(){}n=Jl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ti(){}Ti.prototype.g=function(o,u){return new jt(o,u)};function jt(o,u){Me.call(this),this.g=new Ml(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ps(this)}p(jt,Me),jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){ra(this.g)},jt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=$e(o),o=f);u.i.push(new ft(u.Ya++,o)),u.I==3&&Ei(u)},jt.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,jt.Z.N.call(this)};function Yl(o){J.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Yl,J);function Ql(){K.call(this),this.status=1}p(Ql,K);function Ps(o){this.g=o}p(Ps,Jl),Ps.prototype.ra=function(){Ce(this.g,"a")},Ps.prototype.qa=function(o){Ce(this.g,new Yl(o))},Ps.prototype.pa=function(o){Ce(this.g,new Ql)},Ps.prototype.oa=function(){Ce(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Rf=function(){return new Ti},Nf=function(){return Y()},Sf=T,Ka={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,qi=at,hn.COMPLETE="complete",Af=hn,dn.EventType=F,F.OPEN="a",F.CLOSE="b",F.ERROR="c",F.MESSAGE="d",Me.prototype.listen=Me.prototype.J,Sr=dn,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Tf=Ue}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let ir="12.13.0";function Yk(n){ir=n}/**
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
 */const xs=new _c("@firebase/firestore");function js(){return xs.logLevel}function B(n,...e){if(xs.logLevel<=fe.DEBUG){const t=e.map(zc);xs.debug(`Firestore (${ir}): ${n}`,...t)}}function Tn(n,...e){if(xs.logLevel<=fe.ERROR){const t=e.map(zc);xs.error(`Firestore (${ir}): ${n}`,...t)}}function ws(n,...e){if(xs.logLevel<=fe.WARN){const t=e.map(zc);xs.warn(`Firestore (${ir}): ${n}`,...t)}}function zc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function ee(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Cf(n,s,t)}function Cf(n,e,t){let s=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Tn(s),new Error(s)}function ve(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Cf(e,r,s)}function ie(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Pf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pt.UNAUTHENTICATED)))}shutdown(){}}class Xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Zk{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable((()=>r(this.currentUser)))};const c=()=>{const d=i;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},l=d=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string",31837,{l:s}),new Pf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class e0{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class t0{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new e0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0,3512);const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const c=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function s0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class $c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=s0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ue(n,e){return n<e?-1:n>e?1:0}function Ga(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return xa(r)===xa(i)?ue(r,i):xa(r)?1:-1}return ue(n.length,e.length)}const r0=55296,i0=57343;function xa(n){const e=n.charCodeAt(0);return e>=r0&&e<=i0}function Ks(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Ju="__name__";class Qt{constructor(e,t,s){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Qt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const s=Qt.isNumericId(e),r=Qt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Qt.extractNumericId(e).compare(Qt.extractNumericId(t)):Ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class Ve extends Qt{construct(e,t,s){return new Ve(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new G(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new Ve(t)}static emptyPath(){return new Ve([])}}const o0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Qt{construct(e,t,s){return new ut(e,t,s)}static isValidIdentifier(e){return o0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ju}static keyField(){return new ut([Ju])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new G(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new G(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new G(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else l==="`"?(c=!c,r++):l!=="."||c?(s+=l,r++):(i(),r++)}if(i(),c)throw new G(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ve.fromString(e))}static fromName(e){return new X(Ve.fromString(e).popFirst(5))}static empty(){return new X(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ve(e.slice()))}}/**
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
 */function a0(n,e,t){if(!t)throw new G(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function c0(n,e,t,s){if(e===!0&&s===!0)throw new G(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yu(n){if(!X.isDocumentKey(n))throw new G(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function Zt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bc(n);throw new G(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function qe(n,e){const t={typeString:n};return e&&(t.value=e),t}function fi(n,e){if(!jf(n))throw new G(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(r&&typeof c!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&c!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new G(L.INVALID_ARGUMENT,t);return!0}/**
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
 */const Qu=-62135596800,Xu=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Xu);return new Se(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qu)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xu}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fi(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:qe("string",Se._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Se(0,0))}static max(){return new se(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gr=-1;function l0(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=se.fromTimestamp(s===1e9?new Se(t+1,0):new Se(t,s));return new Gn(r,X.empty(),e)}function u0(n){return new Gn(n.readTime,n.key,Gr)}class Gn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Gn(se.min(),X.empty(),Gr)}static max(){return new Gn(se.max(),X.empty(),Gr)}}function d0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const h0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class f0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function or(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==h0)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):O.reject(t)}static resolve(e){return new O(((t,s)=>{t(e)}))}static reject(e){return new O(((t,s)=>{s(e)}))}static waitFor(e){return new O(((t,s)=>{let r=0,i=0,c=!1;e.forEach((l=>{++r,l.next((()=>{++i,c&&i===r&&t()}),(d=>s(d)))})),c=!0,i===r&&t()}))}static or(e){let t=O.resolve(!1);for(const s of e)t=t.next((r=>r?O.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new O(((s,r)=>{const i=e.length,c=new Array(i);let l=0;for(let d=0;d<i;d++){const h=d;t(e[h]).next((m=>{c[h]=m,++l,l===i&&s(c)}),(m=>r(m)))}}))}static doWhile(e,t){return new O(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function m0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ar(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vo.ce=-1;/**
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
 */const Hc=-1;function Lo(n){return n==null}function ao(n){return n===0&&1/n==-1/0}function p0(n){return typeof n=="number"&&Number.isInteger(n)&&!ao(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Df="";function g0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zu(e)),e=y0(n.get(t),e);return Zu(e)}function y0(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Df:t+="";break;default:t+=i}}return t}function Zu(n){return n+Df+""}/**
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
 */function ed(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ns(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Of(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class je{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}}class ji{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ct(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new td(this.data.getIterator())}getIteratorFrom(e){return new td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new tt(this.comparator);return t.data=e,t}}class td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new tt(ut.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Vf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vf("Invalid base64 string: "+i):i}})(e);return new dt(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let c=0;c<r.length;++c)i+=String.fromCharCode(r[c]);return i})(e);return new dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const b0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(ve(!!n,39018),typeof n=="string"){let e=0;const t=b0.exec(n);if(ve(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
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
 */const Lf="server_timestamp",Mf="__type__",Uf="__previous_value__",Ff="__local_write_time__";function Wc(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Mf])==null?void 0:s.stringValue)===Lf}function Mo(n){const e=n.mapValue.fields[Uf];return Wc(e)?Mo(e):e}function Jr(n){const e=Jn(n.mapValue.fields[Ff].timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class _0{constructor(e,t,s,r,i,c,l,d,h,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=p}}const co="(default)";class Yr{constructor(e,t){this.projectId=e,this.database=t||co}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database===co}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}function v0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(n.options.projectId,e)}/**
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
 */const zf="__type__",k0="__max__",Di={mapValue:{}},$f="__vector__",lo="value";function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wc(n)?4:w0(n)?9007199254740991:x0(n)?10:11:ee(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=Qn(n);if(t!==Qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jr(n).isEqual(Jr(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const c=Jn(r.timestampValue),l=Jn(i.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Yn(r.bytesValue).isEqual(Yn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const c=ze(r.doubleValue),l=ze(i.doubleValue);return c===l?ao(c)===ao(l):isNaN(c)&&isNaN(l)}return!1})(n,e);case 9:return Ks(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return(function(r,i){const c=r.mapValue.fields||{},l=i.mapValue.fields||{};if(ed(c)!==ed(l))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!on(c[d],l[d])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function Qr(n,e){return(n.values||[]).find((t=>on(t,e)))!==void 0}function Gs(n,e){if(n===e)return 0;const t=Qn(n),s=Qn(e);if(t!==s)return ue(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,c){const l=ze(i.integerValue||i.doubleValue),d=ze(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1})(n,e);case 3:return nd(n.timestampValue,e.timestampValue);case 4:return nd(Jr(n),Jr(e));case 5:return Ga(n.stringValue,e.stringValue);case 6:return(function(i,c){const l=Yn(i),d=Yn(c);return l.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(i,c){const l=i.split("/"),d=c.split("/");for(let h=0;h<l.length&&h<d.length;h++){const m=ue(l[h],d[h]);if(m!==0)return m}return ue(l.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,c){const l=ue(ze(i.latitude),ze(c.latitude));return l!==0?l:ue(ze(i.longitude),ze(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return sd(n.arrayValue,e.arrayValue);case 10:return(function(i,c){var v,I,A,P;const l=i.fields||{},d=c.fields||{},h=(v=l[lo])==null?void 0:v.arrayValue,m=(I=d[lo])==null?void 0:I.arrayValue,p=ue(((A=h==null?void 0:h.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return p!==0?p:sd(h,m)})(n.mapValue,e.mapValue);case 11:return(function(i,c){if(i===Di.mapValue&&c===Di.mapValue)return 0;if(i===Di.mapValue)return 1;if(c===Di.mapValue)return-1;const l=i.fields||{},d=Object.keys(l),h=c.fields||{},m=Object.keys(h);d.sort(),m.sort();for(let p=0;p<d.length&&p<m.length;++p){const v=Ga(d[p],m[p]);if(v!==0)return v;const I=Gs(l[d[p]],h[m[p]]);if(I!==0)return I}return ue(d.length,m.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function nd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Jn(n),s=Jn(e),r=ue(t.seconds,s.seconds);return r!==0?r:ue(t.nanos,s.nanos)}function sd(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Gs(t[r],s[r]);if(i)return i}return ue(t.length,s.length)}function Js(n){return Ja(n)}function Ja(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Jn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Yn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Ja(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const c of s)i?i=!1:r+=",",r+=`${c}:${Ja(t.fields[c])}`;return r+"}"})(n.mapValue):ee(61005,{value:n})}function Ki(n){switch(Qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mo(n);return e?16+Ki(e):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Ki(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return ns(s.fields,((i,c)=>{r+=i.length+Ki(c)})),r})(n.mapValue);default:throw ee(13486,{value:n})}}function Ya(n){return!!n&&"integerValue"in n}function qc(n){return!!n&&"arrayValue"in n}function rd(n){return!!n&&"nullValue"in n}function id(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gi(n){return!!n&&"mapValue"in n}function x0(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zf])==null?void 0:s.stringValue)===$f}function Lr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ns(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Lr(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Lr(n.arrayValue.values[t]);return e}return{...n}}function w0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===k0}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lr(t)}setAll(e){let t=ut.emptyPath(),s={},r=[];e.forEach(((c,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=l.popLast()}c?s[l.lastSegment()]=Lr(c):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Gi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){ns(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Nt(Lr(this.value))}}function Bf(n){const e=[];return ns(n.fields,((t,s)=>{const r=new ut([t]);if(Gi(s)){const i=Bf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const c of i)e.push(r.child(c))}else e.push(r)})),new Ot(e)}/**
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
 */class gt{constructor(e,t,s,r,i,c,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=c,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,se.min(),se.min(),se.min(),Nt.empty(),0)}static newFoundDocument(e,t,s,r){return new gt(e,1,t,se.min(),s,r,0)}static newNoDocument(e,t){return new gt(e,2,t,se.min(),se.min(),Nt.empty(),0)}static newUnknownDocument(e,t){return new gt(e,3,t,se.min(),se.min(),Nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uo{constructor(e,t){this.position=e,this.inclusive=t}}function od(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],c=n.position[r];if(i.field.isKeyField()?s=X.comparator(X.fromName(c.referenceValue),t.key):s=Gs(c,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ad(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ho{constructor(e,t="asc"){this.field=e,this.dir=t}}function E0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hf{}class et extends Hf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new T0(e,t,s):t==="array-contains"?new N0(e,s):t==="in"?new R0(e,s):t==="not-in"?new C0(e,s):t==="array-contains-any"?new P0(e,s):new et(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new A0(e,s):new S0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gs(t,this.value)):t!==null&&Qn(this.value)===Qn(t)&&this.matchesComparison(Gs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Hf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new an(e,t)}matches(e){return Wf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Wf(n){return n.op==="and"}function qf(n){return I0(n)&&Wf(n)}function I0(n){for(const e of n.filters)if(e instanceof an)return!1;return!0}function Qa(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Js(n.value);if(qf(n))return n.filters.map((e=>Qa(e))).join(",");{const e=n.filters.map((t=>Qa(t))).join(",");return`${n.op}(${e})`}}function Kf(n,e){return n instanceof et?(function(s,r){return r instanceof et&&s.op===r.op&&s.field.isEqual(r.field)&&on(s.value,r.value)})(n,e):n instanceof an?(function(s,r){return r instanceof an&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,c,l)=>i&&Kf(c,r.filters[l])),!0):!1})(n,e):void ee(19439)}function Gf(n){return n instanceof et?(function(t){return`${t.field.canonicalString()} ${t.op} ${Js(t.value)}`})(n):n instanceof an?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gf).join(" ,")+"}"})(n):"Filter"}class T0 extends et{constructor(e,t,s){super(e,t,s),this.key=X.fromName(s.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class A0 extends et{constructor(e,t){super(e,"in",t),this.keys=Jf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class S0 extends et{constructor(e,t){super(e,"not-in",t),this.keys=Jf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Jf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>X.fromName(s.referenceValue)))}class N0 extends et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qc(t)&&Qr(t.arrayValue,this.value)}}class R0 extends et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qr(this.value.arrayValue,t)}}class C0 extends et{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qr(this.value.arrayValue,t)}}class P0 extends et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qr(this.value.arrayValue,s)))}}/**
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
 */class j0{constructor(e,t=null,s=[],r=[],i=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=c,this.endAt=l,this.Te=null}}function cd(n,e=null,t=[],s=[],r=null,i=null,c=null){return new j0(n,e,t,s,r,i,c)}function Kc(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Qa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Lo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Js(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Js(s))).join(",")),e.Te=t}return e.Te}function Gc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!E0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ad(n.startAt,e.startAt)&&ad(n.endAt,e.endAt)}function Xa(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Uo{constructor(e,t=null,s=[],r=[],i=null,c="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=c,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function D0(n,e,t,s,r,i,c,l){return new Uo(n,e,t,s,r,i,c,l)}function Fo(n){return new Uo(n)}function ld(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function O0(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function V0(n){return n.collectionGroup!==null}function Mr(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new tt(ut.comparator);return c.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ho(i,s))})),t.has(ut.keyField().canonicalString())||e.Ie.push(new ho(ut.keyField(),s))}return e.Ie}function en(n){const e=ie(n);return e.Ee||(e.Ee=L0(e,Mr(n))),e.Ee}function L0(n,e){if(n.limitType==="F")return cd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new ho(r.field,i)}));const t=n.endAt?new uo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new uo(n.startAt.position,n.startAt.inclusive):null;return cd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Za(n,e,t){return new Uo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zo(n,e){return Gc(en(n),en(e))&&n.limitType===e.limitType}function Yf(n){return`${Kc(en(n))}|lt:${n.limitType}`}function Ds(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Gf(r))).join(", ")}]`),Lo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Js(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Js(r))).join(",")),`Target(${s})`})(en(n))}; limitType=${n.limitType})`}function $o(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):X.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Mr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(c,l,d){const h=od(c,l,d);return c.inclusive?h<=0:h<0})(s.startAt,Mr(s),r)||s.endAt&&!(function(c,l,d){const h=od(c,l,d);return c.inclusive?h>=0:h>0})(s.endAt,Mr(s),r))})(n,e)}function M0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qf(n){return(e,t)=>{let s=!1;for(const r of Mr(n)){const i=U0(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function U0(n,e,t){const s=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,c,l){const d=c.data.field(i),h=l.data.field(i);return d!==null&&h!==null?Gs(d,h):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ee(19790,{direction:n.dir})}}/**
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
 */class Is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Of(this.inner)}size(){return this.innerSize}}/**
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
 */const F0=new je(X.comparator);function An(){return F0}const Xf=new je(X.comparator);function Nr(...n){let e=Xf;for(const t of n)e=e.insert(t.key,t);return e}function Zf(n){let e=Xf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ps(){return Ur()}function em(){return Ur()}function Ur(){return new Is((n=>n.toString()),((n,e)=>n.isEqual(e)))}const z0=new je(X.comparator),$0=new tt(X.comparator);function de(...n){let e=$0;for(const t of n)e=e.add(t);return e}const B0=new tt(ue);function H0(){return B0}/**
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
 */function Jc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ao(e)?"-0":e}}function tm(n){return{integerValue:""+n}}function W0(n,e){return p0(e)?tm(e):Jc(n,e)}/**
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
 */class Bo{constructor(){this._=void 0}}function q0(n,e,t){return n instanceof Xr?(function(r,i){const c={fields:{[Mf]:{stringValue:Lf},[Ff]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Wc(i)&&(i=Mo(i)),i&&(c.fields[Uf]=i),{mapValue:c}})(t,e):n instanceof Zr?sm(n,e):n instanceof ei?rm(n,e):(function(r,i){const c=nm(r,i),l=ud(c)+ud(r.Ae);return Ya(c)&&Ya(r.Ae)?tm(l):Jc(r.serializer,l)})(n,e)}function K0(n,e,t){return n instanceof Zr?sm(n,e):n instanceof ei?rm(n,e):t}function nm(n,e){return n instanceof fo?(function(s){return Ya(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Xr extends Bo{}class Zr extends Bo{constructor(e){super(),this.elements=e}}function sm(n,e){const t=im(e);for(const s of n.elements)t.some((r=>on(r,s)))||t.push(s);return{arrayValue:{values:t}}}class ei extends Bo{constructor(e){super(),this.elements=e}}function rm(n,e){let t=im(e);for(const s of n.elements)t=t.filter((r=>!on(r,s)));return{arrayValue:{values:t}}}class fo extends Bo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ud(n){return ze(n.integerValue||n.doubleValue)}function im(n){return qc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class G0{constructor(e,t){this.field=e,this.transform=t}}function J0(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Zr&&r instanceof Zr||s instanceof ei&&r instanceof ei?Ks(s.elements,r.elements,on):s instanceof fo&&r instanceof fo?on(s.Ae,r.Ae):s instanceof Xr&&r instanceof Xr})(n.transform,e.transform)}class Y0{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ho{}function om(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cm(n.key,tn.none()):new mi(n.key,n.data,tn.none());{const t=n.data,s=Nt.empty();let r=new tt(ut.comparator);for(let i of e.fields)if(!r.has(i)){let c=t.field(i);c===null&&i.length>1&&(i=i.popLast(),c=t.field(i)),c===null?s.delete(i):s.set(i,c),r=r.add(i)}return new ss(n.key,s,new Ot(r.toArray()),tn.none())}}function Q0(n,e,t){n instanceof mi?(function(r,i,c){const l=r.value.clone(),d=hd(r.fieldTransforms,i,c.transformResults);l.setAll(d),i.convertToFoundDocument(c.version,l).setHasCommittedMutations()})(n,e,t):n instanceof ss?(function(r,i,c){if(!Ji(r.precondition,i))return void i.convertToUnknownDocument(c.version);const l=hd(r.fieldTransforms,i,c.transformResults),d=i.data;d.setAll(am(r)),d.setAll(l),i.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):(function(r,i,c){i.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Fr(n,e,t,s){return n instanceof mi?(function(i,c,l,d){if(!Ji(i.precondition,c))return l;const h=i.value.clone(),m=fd(i.fieldTransforms,d,c);return h.setAll(m),c.convertToFoundDocument(c.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof ss?(function(i,c,l,d){if(!Ji(i.precondition,c))return l;const h=fd(i.fieldTransforms,d,c),m=c.data;return m.setAll(am(i)),m.setAll(h),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(i,c,l){return Ji(i.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l})(n,e,t)}function X0(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=nm(s.transform,r||null);i!=null&&(t===null&&(t=Nt.empty()),t.set(s.field,i))}return t||null}function dd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ks(s,r,((i,c)=>J0(i,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class mi extends Ho{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ss extends Ho{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function am(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function hd(n,e,t){const s=new Map;ve(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],c=i.transform,l=e.data.field(i.field);s.set(i.field,K0(c,l,t[r]))}return s}function fd(n,e,t){const s=new Map;for(const r of n){const i=r.transform,c=t.data.field(r.field);s.set(r.field,q0(i,c,e))}return s}class cm extends Ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z0 extends Ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ex{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Q0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=em();return this.mutations.forEach((r=>{const i=e.get(r.key),c=i.overlayedDocument;let l=this.applyToLocalView(c,i.mutatedFields);l=t.has(r.key)?null:l;const d=om(c,l);d!==null&&s.set(r.key,d),c.isValidDocument()||c.convertToNoDocument(se.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),de())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,((t,s)=>dd(t,s)))&&Ks(this.baseMutations,e.baseMutations,((t,s)=>dd(t,s)))}}class Yc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ve(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return z0})();const i=e.mutations;for(let c=0;c<i.length;c++)r=r.insert(i[c].key,s[c].version);return new Yc(e,t,s,r)}}/**
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
 */class tx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var He,pe;function sx(n){switch(n){case L.OK:return ee(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function lm(n){if(n===void 0)return Tn("GRPC error has no .code"),L.UNKNOWN;switch(n){case He.OK:return L.OK;case He.CANCELLED:return L.CANCELLED;case He.UNKNOWN:return L.UNKNOWN;case He.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case He.INTERNAL:return L.INTERNAL;case He.UNAVAILABLE:return L.UNAVAILABLE;case He.UNAUTHENTICATED:return L.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case He.NOT_FOUND:return L.NOT_FOUND;case He.ALREADY_EXISTS:return L.ALREADY_EXISTS;case He.PERMISSION_DENIED:return L.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case He.ABORTED:return L.ABORTED;case He.OUT_OF_RANGE:return L.OUT_OF_RANGE;case He.UNIMPLEMENTED:return L.UNIMPLEMENTED;case He.DATA_LOSS:return L.DATA_LOSS;default:return ee(39323,{code:n})}}(pe=He||(He={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rx(){return new TextEncoder}/**
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
 */const ix=new Hn([4294967295,4294967295],0);function md(n){const e=rx().encode(n),t=new If;return t.update(e),new Uint8Array(t.digest())}function pd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([t,s],0),new Hn([r,i],0)]}class Qc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Rr(`Invalid padding: ${t}`);if(s<0)throw new Rr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Rr(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Rr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Hn.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Hn.fromNumber(s)));return r.compare(ix)===1&&(r=new Hn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=md(e),[s,r]=pd(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);if(!this.we(c))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),c=new Qc(i,r,t);return s.forEach((l=>c.insert(l))),c}insert(e){if(this.ge===0)return;const t=md(e),[s,r]=pd(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new pi(se.min(),r,new je(ue),An(),de())}}class gi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new gi(s,t,de(),de(),de())}}/**
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
 */class Yi{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class um{constructor(e,t){this.targetId=e,this.Ce=t}}class dm{constructor(e,t,s=dt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class gd{constructor(){this.ve=0,this.Fe=yd(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),t=de(),s=de();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ee(38017,{changeType:i})}})),new gi(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=yd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ox{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=Oi(),this.He=Oi(),this.Ze=new je(ue)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Xa(i))if(s===0){const c=new X(i.path);this.et(t,c,gt.newNoDocument(c,se.min()))}else ve(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const l=this.ut(e),d=l?this.ct(l,e,c):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let c,l;try{c=Yn(s).toUint8Array()}catch(d){if(d instanceof Vf)return ws("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Qc(c,r,i)}catch(d){return ws(d instanceof Rr?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const c=this.Ge.ht(),l=`projects/${c.projectId}/databases/${c.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,c)=>{const l=this.ot(c);if(l){if(i.current&&Xa(l.target)){const d=new X(l.target.path);this.It(d).has(c)||this.Et(c,d)||this.et(c,d,gt.newNoDocument(d,e))}i.Be&&(t.set(c,i.ke()),i.Ke())}}));let s=de();this.He.forEach(((i,c)=>{let l=!0;c.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,c)=>c.setReadTime(e)));const r=new pi(e,t,this.Ze,this.je,s);return this.je=An(),this.Je=Oi(),this.He=Oi(),this.Ze=new je(ue),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new gd,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new tt(ue),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new tt(ue),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new gd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Oi(){return new je(X.comparator)}function yd(){return new je(X.comparator)}const ax={asc:"ASCENDING",desc:"DESCENDING"},cx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lx={and:"AND",or:"OR"};class ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ec(n,e){return n.useProto3Json||Lo(e)?e:{value:e}}function mo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dx(n,e){return mo(n,e.toTimestamp())}function nn(n){return ve(!!n,49232),se.fromTimestamp((function(t){const s=Jn(t);return new Se(s.seconds,s.nanos)})(n))}function Xc(n,e){return tc(n,e).canonicalString()}function tc(n,e){const t=(function(r){return new Ve(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function fm(n){const e=Ve.fromString(n);return ve(bm(e),10190,{key:e.toString()}),e}function nc(n,e){return Xc(n.databaseId,e.path)}function wa(n,e){const t=fm(e);if(t.get(1)!==n.databaseId.projectId)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(pm(t))}function mm(n,e){return Xc(n.databaseId,e)}function hx(n){const e=fm(n);return e.length===4?Ve.emptyPath():pm(e)}function sc(n){return new Ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pm(n){return ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bd(n,e,t){return{name:nc(n,e),fields:t.value.mapValue.fields}}function fx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,m){return h.useProto3Json?(ve(m===void 0||typeof m=="string",58123),dt.fromBase64String(m||"")):(ve(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),dt.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&(function(h){const m=h.code===void 0?L.UNKNOWN:lm(h.code);return new G(m,h.message||"")})(c);t=new dm(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wa(n,s.document.name),i=nn(s.document.updateTime),c=s.document.createTime?nn(s.document.createTime):se.min(),l=new Nt({mapValue:{fields:s.document.fields}}),d=gt.newFoundDocument(r,i,c,l),h=s.targetIds||[],m=s.removedTargetIds||[];t=new Yi(h,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wa(n,s.document),i=s.readTime?nn(s.readTime):se.min(),c=gt.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Yi([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wa(n,s.document),i=s.removedTargetIds||[];t=new Yi([],i,r,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,c=new nx(r,i),l=s.targetId;t=new um(l,c)}}return t}function mx(n,e){let t;if(e instanceof mi)t={update:bd(n,e.key,e.value)};else if(e instanceof cm)t={delete:nc(n,e.key)};else if(e instanceof ss)t={update:bd(n,e.key,e.data),updateMask:wx(e.fieldMask)};else{if(!(e instanceof Z0))return ee(16599,{dt:e.type});t={verify:nc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,c){const l=c.transform;if(l instanceof Xr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ei)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fo)return{fieldPath:c.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:dx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function px(n,e){return n&&n.length>0?(ve(e!==void 0,14353),n.map((t=>(function(r,i){let c=r.updateTime?nn(r.updateTime):nn(i);return c.isEqual(se.min())&&(c=nn(i)),new Y0(c,r.transformResults||[])})(t,e)))):[]}function gx(n,e){return{documents:[mm(n,e.path)]}}function yx(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=mm(n,r);const i=(function(h){if(h.length!==0)return ym(an.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const c=(function(h){if(h.length!==0)return h.map((m=>(function(v){return{field:Os(v.field),direction:vx(v.dir)}})(m)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=ec(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function bx(n){let e=hx(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ve(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(p){const v=gm(p);return v instanceof an&&qf(v)?v.getFilters():[v]})(t.where));let c=[];t.orderBy&&(c=(function(p){return p.map((v=>(function(A){return new ho(Vs(A.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(v)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let v;return v=typeof p=="object"?p.value:p,Lo(v)?null:v})(t.limit));let d=null;t.startAt&&(d=(function(p){const v=!!p.before,I=p.values||[];return new uo(I,v)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const v=!p.before,I=p.values||[];return new uo(I,v)})(t.endAt)),D0(e,r,c,i,l,"F",d,h)}function _x(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Vs(t.unaryFilter.field);return et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Vs(t.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vs(t.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Vs(t.unaryFilter.field);return et.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return et.create(Vs(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return an.create(t.compositeFilter.filters.map((s=>gm(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function vx(n){return ax[n]}function kx(n){return cx[n]}function xx(n){return lx[n]}function Os(n){return{fieldPath:n.canonicalString()}}function Vs(n){return ut.fromServerFormat(n.fieldPath)}function ym(n){return n instanceof et?(function(t){if(t.op==="=="){if(id(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NAN"}};if(rd(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(id(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NOT_NAN"}};if(rd(t.value))return{unaryFilter:{field:Os(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(t.field),op:kx(t.op),value:t.value}}})(n):n instanceof an?(function(t){const s=t.getFilters().map((r=>ym(r)));return s.length===1?s[0]:{compositeFilter:{op:xx(t.op),filters:s}}})(n):ee(54877,{filter:n})}function wx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function bm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function _m(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class kn{constructor(e,t,s,r,i=se.min(),c=se.min(),l=dt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ex{constructor(e){this.yt=e}}function Ix(n){const e=bx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Za(e,e.limit,"L"):e}/**
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
 */class Tx{constructor(){this.bn=new Ax}addToCollectionParentIndex(e,t){return this.bn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Gn.min())}updateCollectionGroup(e,t,s){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Ax{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new tt(Ve.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new tt(Ve.comparator)).toArray()}}/**
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
 */const _d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vm=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(vm,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */class Xn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Xn(0)}static ar(){return new Xn(-1)}}/**
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
 */const vd="LruGarbageCollector",Sx=1048576;function kd([n,e],[t,s]){const r=ue(n,t);return r===0?ue(e,s):r}class Nx{constructor(e){this.Pr=e,this.buffer=new tt(kd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();kd(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(vd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ar(t)?B(vd,"Ignoring IndexedDB error during garbage collection: ",t):await or(t)}await this.Ar(3e5)}))}}class Cx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return O.resolve(Vo.ce);const s=new Nx(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(_d)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_d):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,c,l,d,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,c=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,t)))).next((p=>(i=p,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),js()<=fe.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-m}ms
	Determined least recently used ${r} in `+(l-c)+`ms
	Removed ${i} targets in `+(d-l)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-m}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function Px(n,e){return new Cx(n,e)}/**
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
 */class jx{constructor(){this.changes=new Is((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?O.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Dx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ox{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Fr(s.mutation,r,Ot.empty(),Se.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,de()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=de()){const r=ps();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let c=Nr();return i.forEach(((l,d)=>{c=c.insert(l,d.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=ps();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,de())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((c,l)=>{t.set(c,l)}))}))}computeViews(e,t,s,r){let i=An();const c=Ur(),l=(function(){return Ur()})();return t.forEach(((d,h)=>{const m=s.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof ss)?i=i.insert(h.key,h):m!==void 0?(c.set(h.key,m.mutation.getFieldMask()),Fr(m.mutation,h,m.mutation.getFieldMask(),Se.now())):c.set(h.key,Ot.empty())})),this.recalculateAndSaveOverlays(e,i).next((d=>(d.forEach(((h,m)=>c.set(h,m))),t.forEach(((h,m)=>l.set(h,new Dx(m,c.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=Ur();let r=new je(((c,l)=>c-l)),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const l of c)l.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let m=s.get(d)||Ot.empty();m=l.applyToLocalView(h,m),s.set(d,m);const p=(r.get(l.batchId)||de()).add(d);r=r.insert(l.batchId,p)}))})).next((()=>{const c=[],l=r.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,m=d.value,p=em();m.forEach((v=>{if(!i.has(v)){const I=om(t.get(v),s.get(v));I!==null&&p.set(v,I),i=i.add(v)}})),c.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return O0(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):V0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const c=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):O.resolve(ps());let l=Gr,d=i;return c.next((h=>O.forEach(h,((m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?O.resolve():this.remoteDocumentCache.getEntry(e,m).next((v=>{d=d.insert(m,v)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,d,h,de()))).next((m=>({batchId:l,changes:Zf(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((s=>{let r=Nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let c=Nr();return this.indexManager.getCollectionParents(e,i).next((l=>O.forEach(l,(d=>{const h=(function(p,v){return new Uo(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((m=>{m.forEach(((p,v)=>{c=c.insert(p,v)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(i=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((c=>{i.forEach(((d,h)=>{const m=h.getKey();c.get(m)===null&&(c=c.insert(m,gt.newInvalidDocument(m)))}));let l=Nr();return c.forEach(((d,h)=>{const m=i.get(d);m!==void 0&&Fr(m.mutation,h,Ot.empty(),Se.now()),$o(t,h)&&(l=l.insert(d,h))})),l}))}}/**
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
 */class Vx{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return O.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:nn(r.createTime)}})(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:Ix(r.bundledQuery),readTime:nn(r.readTime)}})(t)),O.resolve()}}/**
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
 */class Lx{constructor(){this.overlays=new je(X.comparator),this.Lr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ps();return O.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),O.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),O.resolve()}getOverlaysForCollection(e,t,s){const r=ps(),i=t.length+1,c=new X(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&d.largestBatchId>s&&r.set(d.getKey(),d)}return O.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new je(((h,m)=>h-m));const c=this.overlays.getIterator();for(;c.hasNext();){const h=c.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let m=i.get(h.largestBatchId);m===null&&(m=ps(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=ps(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,m)=>l.set(h,m))),!(l.size()>=r)););return O.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const c=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new tx(t,s));let i=this.Lr.get(t);i===void 0&&(i=de(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class Mx{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Zc{constructor(){this.kr=new tt(st.Kr),this.qr=new tt(st.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new st(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new st(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new X(new Ve([])),s=new st(t,e),r=new st(t,e+1),i=[];return this.qr.forEachInRange([s,r],(c=>{this.Wr(c),i.push(c.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new X(new Ve([])),s=new st(t,e),r=new st(t,e+1);let i=de();return this.qr.forEachInRange([s,r],(c=>{i=i.add(c.key)})),i}containsKey(e){const t=new st(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return X.comparator(e.key,t.key)||ue(e.Jr,t.Jr)}static Ur(e,t){return ue(e.Jr,t.Jr)||X.comparator(e.key,t.key)}}/**
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
 */class Ux{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new tt(st.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new ex(i,t,s,r);this.mutationQueue.push(c);for(const l of r)this.Hr=this.Hr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(c)}lookupMutationBatch(e,t){return O.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Hc:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new st(t,0),r=new st(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(c=>{const l=this.Zr(c.Jr);i.push(l)})),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new tt(ue);return t.forEach((r=>{const i=new st(r,0),c=new st(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,c],(l=>{s=s.add(l.Jr)}))})),O.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;X.isDocumentKey(i)||(i=i.child(""));const c=new st(new X(i),0);let l=new tt(ue);return this.Hr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(d.Jr)),!0)}),c),O.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ve(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return O.forEach(t.mutations,(r=>{const i=new st(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new st(t,0),r=this.Hr.firstAfterOrEqual(s);return O.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Fx{constructor(e){this.ti=e,this.docs=(function(){return new je(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,c=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return O.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(t))}getEntries(e,t){let s=An();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():gt.newInvalidDocument(r))})),O.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=An();const c=t.path,l=new X(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:m}}=d.getNext();if(!c.isPrefixOf(h.path))break;h.path.length>c.length+1||d0(u0(m),s)<=0||(r.has(m.key)||$o(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ee(9500)}ni(e,t){return O.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zx(this)}getSize(e){return O.resolve(this.size)}}class zx extends jx{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),O.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class $x{constructor(e){this.persistence=e,this.ri=new Is((t=>Kc(t)),Gc),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.ii=0,this.si=new Zc,this.targetCount=0,this.oi=Xn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),O.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Xn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.lr(t),O.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((c,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(c),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),O.waitFor(i).next((()=>r))}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return O.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),O.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((c=>{i.push(r.markPotentiallyOrphaned(e,c))})),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return O.resolve(s)}containsKey(e,t){return O.resolve(this.si.containsKey(t))}}/**
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
 */class km{constructor(e,t){this._i={},this.overlays={},this.ai=new Vo(0),this.ui=!1,this.ui=!0,this.ci=new Mx,this.referenceDelegate=e(this),this.li=new $x(this),this.indexManager=new Tx,this.remoteDocumentCache=(function(r){return new Fx(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Ex(t),this.Pi=new Vx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Ux(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){B("MemoryPersistence","Starting transaction:",e);const r=new Bx(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return O.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Bx extends f0{constructor(e){super(),this.currentSequenceNumber=e}}class el{constructor(e){this.persistence=e,this.Ri=new Zc,this.Ai=null}static Vi(e){return new el(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),O.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,(s=>{const r=X.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,se.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class po{constructor(e,t){this.persistence=e,this.fi=new Is((s=>g0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Px(this,t)}static Vi(e,t){return new po(e,t)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return O.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?O.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(c=>this.wr(e,c,t).next((l=>{l||(s++,i.removeEntry(c,se.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),O.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),O.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ki(e.data.value)),t}wr(e,t,s){return O.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return O.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tl{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=de(),r=de();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new tl(e,t.fromCache,s,r)}}/**
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
 */class Hx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return ty()?8:m0(yt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((c=>{i.result=c})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((c=>{i.result=c}))})).next((()=>{if(i.result)return;const c=new Hx;return this.ys(e,t,c).next((l=>{if(i.result=l,this.As)return this.ws(e,t,c,l.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(js()<=fe.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ds(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(js()<=fe.DEBUG&&B("QueryEngine","Query:",Ds(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(js()<=fe.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ds(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(t))):O.resolve())}gs(e,t){if(ld(t))return O.resolve(null);let s=en(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Za(t,null,"F"),s=en(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const c=de(...i);return this.fs.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.Ss(t,l);return this.bs(t,h,c,d.readTime)?this.gs(e,Za(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return ld(t)||r.isEqual(se.min())?O.resolve(null):this.fs.getDocuments(e,s).next((i=>{const c=this.Ss(t,i);return this.bs(t,c,s,r)?O.resolve(null):(js()<=fe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ds(t)),this.Ds(e,c,t,l0(r,Gr)).next((l=>l)))}))}Ss(e,t){let s=new tt(Qf(e));return t.forEach(((r,i)=>{$o(e,i)&&(s=s.add(i))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return js()<=fe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ds(t)),this.fs.getDocumentsMatchingQuery(e,t,Gn.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((c=>{i=i.insert(c.key,c)})),i)))}}/**
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
 */const nl="LocalStore",qx=3e8;class Kx{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new je(ue),this.Fs=new Is((i=>Kc(i)),Gc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ox(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Gx(n,e,t,s){return new Kx(n,e,t,s)}async function xm(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const c=[],l=[];let d=de();for(const h of r){c.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:c,addedBatchIds:l})))}))}))}function Jx(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(l,d,h,m){const p=h.batch,v=p.keys();let I=O.resolve();return v.forEach((A=>{I=I.next((()=>m.getEntry(d,A))).next((P=>{const S=h.docVersions.get(A);ve(S!==null,48541),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),m.addEntry(P)))}))})),I.next((()=>l.mutationQueue.removeMutationBatch(d,p)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let d=de();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function wm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Yx(n,e){const t=ie(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((m,p)=>{const v=r.get(p);if(!v)return;l.push(t.li.removeMatchingKeys(i,m.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,m.addedDocuments,p))));let I=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(dt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):m.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(m.resumeToken,s)),r=r.insert(p,I),(function(P,S,$){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=qx?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(v,I,m)&&l.push(t.li.updateTargetData(i,I))}));let d=An(),h=de();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(Qx(i,c,e.documentUpdates).next((m=>{d=m.Bs,h=m.Ls}))),!s.isEqual(se.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(m)}return O.waitFor(l).next((()=>c.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,d,h))).next((()=>d))})).then((i=>(t.vs=r,i)))}function Qx(n,e,t){let s=de(),r=de();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let c=An();return t.forEach(((l,d)=>{const h=i.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),d.isNoDocument()&&d.version.isEqual(se.min())?(e.removeEntry(l,d.readTime),c=c.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),c=c.insert(l,d)):B(nl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)})),{Bs:c,Ls:r}}))}function Xx(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Hc),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Zx(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,O.resolve(r)):t.li.allocateTargetId(s).next((c=>(r=new kn(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function rc(n,e,t){const s=ie(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(c=>s.persistence.referenceDelegate.removeTarget(c,r)))}catch(c){if(!ar(c))throw c;B(nl,`Failed to update sequence numbers for target ${e}: ${c}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function xd(n,e,t){const s=ie(n);let r=se.min(),i=de();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(d,h,m){const p=ie(d),v=p.Fs.get(m);return v!==void 0?O.resolve(p.vs.get(v)):p.li.getTargetData(h,m)})(s,c,en(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(c,l.targetId).next((d=>{i=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(c,e,t?r:se.min(),t?i:de()))).next((l=>(ew(s,M0(e),l),{documents:l,ks:i})))))}function ew(n,e,t){let s=n.Ms.get(e)||se.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class wd{constructor(){this.activeTargetIds=H0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tw{constructor(){this.vo=new wd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new wd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nw{Mo(e){}shutdown(){}}/**
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
 */const Ed="ConnectivityMonitor";class Id{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Ed,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vi=null;function ic(){return Vi===null?Vi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vi++,"0x"+Vi.toString(16)}/**
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
 */const Ea="RestConnection",sw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class rw{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===co?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const c=ic(),l=this.Qo(e,t.toUriEncodedString());B(Ea,`Sending RPC '${e}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,i);const{host:h}=new URL(l),m=ai(h);return this.zo(e,l,d,s,m).then((p=>(B(Ea,`Received RPC '${e}' ${c}: `,p),p)),(p=>{throw ws(Ea,`RPC '${e}' ${c} failed with error: `,p,"url: ",l,"request:",s),p}))}jo(e,t,s,r,i,c){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ir})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=sw[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class iw{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const mt="WebChannelConnection",xr=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Fs extends rw{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fs.c_){const e=Nf();xr(e,Sf.STAT_EVENT,(t=>{t.stat===Ka.PROXY?B(mt,"STAT_EVENT: detected buffering proxy"):t.stat===Ka.NOPROXY&&B(mt,"STAT_EVENT: detected no buffering proxy")})),Fs.c_=!0}}zo(e,t,s,r,i){const c=ic();return new Promise(((l,d)=>{const h=new Tf;h.setWithCredentials(!0),h.listenOnce(Af.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case qi.NO_ERROR:const p=h.getResponseJson();B(mt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(p)),l(p);break;case qi.TIMEOUT:B(mt,`RPC '${e}' ${c} timed out`),d(new G(L.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const v=h.getStatus();if(B(mt,`RPC '${e}' ${c} failed with status:`,v,"response text:",h.getResponseText()),v>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const A=I==null?void 0:I.error;if(A&&A.status&&A.message){const P=(function($){const R=$.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(R)>=0?R:L.UNKNOWN})(A.status);d(new G(P,A.message))}else d(new G(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new G(L.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:c,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(mt,`RPC '${e}' ${c} completed.`)}}));const m=JSON.stringify(r);B(mt,`RPC '${e}' ${c} sending request:`,r),h.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=ic(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const h=i.join("");B(mt,`Creating RPC '${e}' stream ${r}: ${h}`,l);const m=c.createWebChannel(h,l);this.I_(m);let p=!1,v=!1;const I=new iw({Jo:A=>{v?B(mt,`Not sending because RPC '${e}' stream ${r} is closed:`,A):(p||(B(mt,`Opening RPC '${e}' stream ${r} transport.`),m.open(),p=!0),B(mt,`RPC '${e}' stream ${r} sending:`,A),m.send(A))},Ho:()=>m.close()});return xr(m,Sr.EventType.OPEN,(()=>{v||(B(mt,`RPC '${e}' stream ${r} transport opened.`),I.i_())})),xr(m,Sr.EventType.CLOSE,(()=>{v||(v=!0,B(mt,`RPC '${e}' stream ${r} transport closed`),I.o_(),this.E_(m))})),xr(m,Sr.EventType.ERROR,(A=>{v||(v=!0,ws(mt,`RPC '${e}' stream ${r} transport errored. Name:`,A.name,"Message:",A.message),I.o_(new G(L.UNAVAILABLE,"The operation could not be completed")))})),xr(m,Sr.EventType.MESSAGE,(A=>{var P;if(!v){const S=A.data[0];ve(!!S,16349);const $=S,R=($==null?void 0:$.error)||((P=$[0])==null?void 0:P.error);if(R){B(mt,`RPC '${e}' stream ${r} received error:`,R);const V=R.status;let D=(function(w){const y=He[w];if(y!==void 0)return lm(y)})(V),H=R.message;V==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&ws(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=L.INTERNAL,H="Unknown error status: "+V+" with message "+R.message),v=!0,I.o_(new G(D,H)),m.close()}else B(mt,`RPC '${e}' stream ${r} received:`,S),I.__(S)}})),Fs.u_(),setTimeout((()=>{I.s_()}),0),I}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Rf()}}/**
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
 */function ow(n){return new Fs(n)}function Ia(){return typeof document<"u"?document:null}/**
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
 */function Wo(n){return new ux(n,!0)}/**
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
 */Fs.c_=!1;class Em{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Td="PersistentStream";class Im{constructor(e,t,s,r,i,c,l,d){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Em(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new G(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(Td,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(B(Td,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aw extends Im{constructor(e,t,s,r,i,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fx(this.serializer,e),s=(function(i){if(!("targetChange"in i))return se.min();const c=i.targetChange;return c.targetIds&&c.targetIds.length?se.min():c.readTime?nn(c.readTime):se.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=sc(this.serializer),t.addTarget=(function(i,c){let l;const d=c.target;if(l=Xa(d)?{documents:gx(i,d)}:{query:yx(i,d).ft},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=hm(i,c.resumeToken);const h=ec(i,c.expectedCount);h!==null&&(l.expectedCount=h)}else if(c.snapshotVersion.compareTo(se.min())>0){l.readTime=mo(i,c.snapshotVersion.toTimestamp());const h=ec(i,c.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=_x(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=sc(this.serializer),t.removeTarget=e,this.K_(t)}}class cw extends Im{constructor(e,t,s,r,i,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=px(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=sc(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>mx(this.serializer,s)))};this.K_(t)}}/**
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
 */class lw{}class uw extends lw{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,c])=>this.connection.Wo(e,tc(t,s),r,i,c))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(L.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,l])=>this.connection.jo(e,tc(t,s),r,c,l,i))).catch((c=>{throw c.name==="FirebaseError"?(c.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new G(L.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function dw(n,e,t,s){return new uw(n,e,t,s)}class hw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tn(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cn="RemoteStore";class fw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Xn(1e3),this.Va=new Xn(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((c=>{s.enqueueAndForget((async()=>{Ts(this)&&(B(cn,"Restarting streams for network reachability change."),await(async function(d){const h=ie(d);h.da.add(4),await yi(h),h.ga.set("Unknown"),h.da.delete(4),await qo(h)})(this))}))})),this.ga=new hw(s,r)}}async function qo(n){if(Ts(n))for(const e of n.ma)await e(!0)}async function yi(n){for(const e of n.ma)await e(!1)}function oc(n,e){return n.Ea.get(e)||void 0}function Tm(n,e){const t=ie(n),s=oc(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const r=(function(l,d){const h=oc(l,d);h!==void 0&&l.Ra.delete(h);const m=(function(v,I){return I%2!=0?v.Va.next():v.Aa.next()})(l,d);return l.Ea.set(d,m),l.Ra.set(m,d),m})(t,e.targetId);B(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new kn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,i),ol(t)?il(t):cr(t).O_()&&rl(t,i)}function sl(n,e){const t=ie(n),s=cr(t),r=oc(t,e);B(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),s.O_()&&Am(t,r),t.Ia.size===0&&(s.O_()?s.L_():Ts(t)&&t.ga.set("Unknown"))}function rl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void B(cn,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}cr(n).Z_(e)}function Am(n,e){n.pa.$e(e),cr(n).X_(e)}function il(n){n.pa=new ox({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):de()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),cr(n).start(),n.ga.ua()}function ol(n){return Ts(n)&&!cr(n).x_()&&n.Ia.size>0}function Ts(n){return ie(n).da.size===0}function Sm(n){n.pa=void 0}async function mw(n){n.ga.set("Online")}async function pw(n){n.Ia.forEach(((e,t)=>{rl(n,e)}))}async function gw(n,e){Sm(n),ol(n)?(n.ga.ha(e),il(n)):n.ga.set("Unknown")}async function yw(n,e,t){if(n.ga.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await(async function(r,i){const c=i.cause;for(const l of i.targetIds){if(r.Ia.has(l)){const d=r.Ra.get(l);d!==void 0&&(await r.remoteSyncer.rejectListen(d,c),r.Ea.delete(d),r.Ra.delete(l)),r.Ia.delete(l)}r.pa.removeTarget(l)}})(n,e)}catch(s){B(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await go(n,s)}else if(e instanceof Yi?n.pa.Xe(e):e instanceof um?n.pa.st(e):n.pa.tt(e),!t.isEqual(se.min()))try{const s=await wm(n.localStore);t.compareTo(s)>=0&&await(function(i,c){const l=i.pa.Tt(c);l.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(m);p&&i.Ia.set(m,p.withResumeToken(h.resumeToken,c))}})),l.targetMismatches.forEach(((h,m)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(dt.EMPTY_BYTE_STRING,p.snapshotVersion)),Am(i,h);const v=new kn(p.target,h,m,p.sequenceNumber);rl(i,v)}));const d=(function(m,p){const v=new Map;p.targetChanges.forEach(((A,P)=>{const S=m.Ra.get(P);S!==void 0&&v.set(S,A)}));let I=new je(ue);return p.targetMismatches.forEach(((A,P)=>{const S=m.Ra.get(A);S!==void 0&&(I=I.insert(S,P))})),new pi(p.snapshotVersion,v,I,p.documentUpdates,p.resolvedLimboDocuments)})(i,l);return i.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){B(cn,"Failed to raise snapshot:",s),await go(n,s)}}async function go(n,e,t){if(!ar(e))throw e;n.da.add(1),await yi(n),n.ga.set("Offline"),t||(t=()=>wm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(cn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await qo(n)}))}function Nm(n,e){return e().catch((t=>go(n,t,e)))}async function Ko(n){const e=ie(n),t=Zn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hc;for(;bw(e);)try{const r=await Xx(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,_w(e,r)}catch(r){await go(e,r)}Rm(e)&&Cm(e)}function bw(n){return Ts(n)&&n.Ta.length<10}function _w(n,e){n.Ta.push(e);const t=Zn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Rm(n){return Ts(n)&&!Zn(n).x_()&&n.Ta.length>0}function Cm(n){Zn(n).start()}async function vw(n){Zn(n).ra()}async function kw(n){const e=Zn(n);for(const t of n.Ta)e.ea(t.mutations)}async function xw(n,e,t){const s=n.Ta.shift(),r=Yc.from(s,e,t);await Nm(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Ko(n)}async function ww(n,e){e&&Zn(n).Y_&&await(async function(s,r){if((function(c){return sx(c)&&c!==L.ABORTED})(r.code)){const i=s.Ta.shift();Zn(s).B_(),await Nm(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Ko(s)}})(n,e),Rm(n)&&Cm(n)}async function Ad(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),B(cn,"RemoteStore received new credentials");const s=Ts(t);t.da.add(3),await yi(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await qo(t)}async function Ew(n,e){const t=ie(n);e?(t.da.delete(2),await qo(t)):e||(t.da.add(2),await yi(t),t.ga.set("Unknown"))}function cr(n){return n.ya||(n.ya=(function(t,s,r){const i=ie(t);return i.sa(),new aw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:mw.bind(null,n),Yo:pw.bind(null,n),t_:gw.bind(null,n),H_:yw.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),ol(n)?il(n):n.ga.set("Unknown")):(await n.ya.stop(),Sm(n))}))),n.ya}function Zn(n){return n.wa||(n.wa=(function(t,s,r){const i=ie(t);return i.sa(),new cw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:vw.bind(null,n),t_:ww.bind(null,n),ta:kw.bind(null,n),na:xw.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await Ko(n)):(await n.wa.stop(),n.Ta.length>0&&(B(cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
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
 */class al{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const c=Date.now()+s,l=new al(e,t,c,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cl(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),ar(n))return new G(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zs{static emptySet(e){return new zs(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||X.comparator(t.key,s.key):(t,s)=>X.comparator(t.key,s.key),this.keyedMap=Nr(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Sd{constructor(){this.Sa=new je(X.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):ee(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ys{constructor(e,t,s,r,i,c,l,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const c=[];return t.forEach((l=>{c.push({type:0,doc:l})})),new Ys(e,t,zs.emptySet(t),c,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Iw{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Tw{constructor(){this.queries=Nd(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const r=ie(t),i=r.queries;r.queries=Nd(),i.forEach(((c,l)=>{for(const d of l.va)d.onError(s)}))})(this,new G(L.ABORTED,"Firestore shutting down"))}}function Nd(){return new Is((n=>Yf(n)),zo)}async function Pm(n,e){const t=ie(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Fa()&&e.Ma()&&(s=2):(i=new Iw,s=e.Ma()?0:1);try{switch(s){case 0:i.Ca=await t.onListen(r,!0);break;case 1:i.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const l=cl(c,`Initialization of query '${Ds(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&ll(t)}async function jm(n,e){const t=ie(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const c=i.va.indexOf(e);c>=0&&(i.va.splice(c,1),i.va.length===0?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Aw(n,e){const t=ie(n);let s=!1;for(const r of e){const i=r.query,c=t.queries.get(i);if(c){for(const l of c.va)l.Na(r)&&(s=!0);c.Ca=r}}s&&ll(t)}function Sw(n,e,t){const s=ie(n),r=s.queries.get(e);if(r)for(const i of r.va)i.onError(t);s.queries.delete(e)}function ll(n){n.xa.forEach((e=>{e.next()}))}var ac,Rd;(Rd=ac||(ac={})).Ba="default",Rd.Cache="cache";class Dm{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ys(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==ac.Cache}}/**
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
 */class Om{constructor(e){this.key=e}}class Vm{constructor(e){this.key=e}}class Nw{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=de(),this.mutatedKeys=de(),this.iu=Qf(e),this.su=new zs(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new Sd,r=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,c=r,l=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,p)=>{const v=r.get(m),I=$o(this.query,p)?p:null,A=!!v&&this.mutatedKeys.has(v.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let S=!1;v&&I?v.data.isEqual(I.data)?A!==P&&(s.track({type:3,doc:I}),S=!0):this.uu(v,I)||(s.track({type:2,doc:I}),S=!0,(d&&this.iu(I,d)>0||h&&this.iu(I,h)<0)&&(l=!0)):!v&&I?(s.track({type:0,doc:I}),S=!0):v&&!I&&(s.track({type:1,doc:v}),S=!0,(d||h)&&(l=!0)),S&&(I?(c=c.add(I),i=P?i.add(m):i.delete(m)):(c=c.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const m=this.query.limitType==="F"?c.last():c.first();c=c.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{su:c,au:s,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const c=e.au.Da();c.sort(((m,p)=>(function(I,A){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:S})}};return P(I)-P(A)})(m.type,p.type)||this.iu(m.doc,p.doc))),this.cu(s),r=r??!1;const l=t&&!r?this.lu():[],d=this.ru.size===0&&this.current&&!r?1:0,h=d!==this.nu;return this.nu=d,c.length!==0||h?{snapshot:new Ys(this.query,e.su,i,c,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Sd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=de(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new Vm(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new Om(s))})),t}Tu(e){this.tu=e.ks,this.ru=de();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Ys.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ul="SyncEngine";class Rw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Cw{constructor(e){this.key=e,this.Eu=!1}}class Pw{constructor(e,t,s,r,i,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=c,this.Ru={},this.Au=new Is((l=>Yf(l)),zo),this.Vu=new Map,this.du=new Set,this.mu=new je(X.comparator),this.fu=new Map,this.gu=new Zc,this.pu={},this.yu=new Map,this.wu=Xn.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function jw(n,e,t=!0){const s=$m(n);let r;const i=s.Au.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await Lm(s,e,t,!0),r}async function Dw(n,e){const t=$m(n);await Lm(t,e,!0,!1)}async function Lm(n,e,t,s){const r=await Zx(n.localStore,en(e)),i=r.targetId,c=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await Ow(n,e,i,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&Tm(n.remoteStore,r),l}async function Ow(n,e,t,s,r){n.bu=(p,v,I)=>(async function(P,S,$,R){let V=S.view._u($);V.bs&&(V=await xd(P.localStore,S.query,!1).then((({documents:w})=>S.view._u(w,V))));const D=R&&R.targetChanges.get(S.targetId),H=R&&R.targetMismatches.get(S.targetId)!=null,q=S.view.applyChanges(V,P.isPrimaryClient,D,H);return Pd(P,S.targetId,q.hu),q.snapshot})(n,p,v,I);const i=await xd(n.localStore,e,!0),c=new Nw(e,i.ks),l=c._u(i.documents),d=gi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=c.applyChanges(l,n.isPrimaryClient,d);Pd(n,t,h.hu);const m=new Rw(e,t,c);return n.Au.set(e,m),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function Vw(n,e,t){const s=ie(n),r=s.Au.get(e),i=s.Vu.get(r.targetId);if(i.length>1)return s.Vu.set(r.targetId,i.filter((c=>!zo(c,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await rc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&sl(s.remoteStore,r.targetId),cc(s,r.targetId)})).catch(or)):(cc(s,r.targetId),await rc(s.localStore,r.targetId,!0))}async function Lw(n,e){const t=ie(n),s=t.Au.get(e),r=t.Vu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sl(t.remoteStore,s.targetId))}async function Mw(n,e,t){const s=Ww(n);try{const r=await(function(c,l){const d=ie(c),h=Se.now(),m=l.reduce(((I,A)=>I.add(A.key)),de());let p,v;return d.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let A=An(),P=de();return d.xs.getEntries(I,m).next((S=>{A=S,A.forEach((($,R)=>{R.isValidDocument()||(P=P.add($))}))})).next((()=>d.localDocuments.getOverlayedDocuments(I,A))).next((S=>{p=S;const $=[];for(const R of l){const V=X0(R,p.get(R.key).overlayedDocument);V!=null&&$.push(new ss(R.key,V,Bf(V.value.mapValue),tn.exists(!0)))}return d.mutationQueue.addMutationBatch(I,h,$,l)})).next((S=>{v=S;const $=S.applyToLocalDocumentSet(p,P);return d.documentOverlayCache.saveOverlays(I,S.batchId,$)}))})).then((()=>({batchId:v.batchId,changes:Zf(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(c,l,d){let h=c.pu[c.currentUser.toKey()];h||(h=new je(ue)),h=h.insert(l,d),c.pu[c.currentUser.toKey()]=h})(s,r.batchId,t),await bi(s,r.changes),await Ko(s.remoteStore)}catch(r){const i=cl(r,"Failed to persist write");t.reject(i)}}async function Mm(n,e){const t=ie(n);try{const s=await Yx(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const c=t.fu.get(i);c&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?c.Eu=!0:r.modifiedDocuments.size>0?ve(c.Eu,14607):r.removedDocuments.size>0&&(ve(c.Eu,42227),c.Eu=!1))})),await bi(t,s,e)}catch(s){await or(s)}}function Cd(n,e,t){const s=ie(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Au.forEach(((i,c)=>{const l=c.view.Oa(e);l.snapshot&&r.push(l.snapshot)})),(function(c,l){const d=ie(c);d.onlineState=l;let h=!1;d.queries.forEach(((m,p)=>{for(const v of p.va)v.Oa(l)&&(h=!0)})),h&&ll(d)})(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Uw(n,e,t){const s=ie(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.fu.get(e),i=r&&r.key;if(i){let c=new je(X.comparator);c=c.insert(i,gt.newNoDocument(i,se.min()));const l=de().add(i),d=new pi(se.min(),new Map,new je(ue),c,l);await Mm(s,d),s.mu=s.mu.remove(i),s.fu.delete(e),dl(s)}else await rc(s.localStore,e,!1).then((()=>cc(s,e,t))).catch(or)}async function Fw(n,e){const t=ie(n),s=e.batch.batchId;try{const r=await Jx(t.localStore,e);Fm(t,s,null),Um(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await bi(t,r)}catch(r){await or(r)}}async function zw(n,e,t){const s=ie(n);try{const r=await(function(c,l){const d=ie(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return d.mutationQueue.lookupMutationBatch(h,l).next((p=>(ve(p!==null,37113),m=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,m,l))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>d.localDocuments.getDocuments(h,m)))}))})(s.localStore,e);Fm(s,e,t),Um(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await bi(s,r)}catch(r){await or(r)}}function Um(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function Fm(n,e,t){const s=ie(n);let r=s.pu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function cc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Vu.get(e))n.Au.delete(s),t&&n.Ru.Du(s,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((s=>{n.gu.containsKey(s)||zm(n,s)}))}function zm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(sl(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),dl(n))}function Pd(n,e,t){for(const s of t)s instanceof Om?(n.gu.addReference(s.key,e),$w(n,s)):s instanceof Vm?(B(ul,"Document no longer in limbo: "+s.key),n.gu.removeReference(s.key,e),n.gu.containsKey(s.key)||zm(n,s.key)):ee(19791,{Cu:s})}function $w(n,e){const t=e.key,s=t.path.canonicalString();n.mu.get(t)||n.du.has(s)||(B(ul,"New document in limbo: "+t),n.du.add(s),dl(n))}function dl(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new X(Ve.fromString(e)),s=n.wu.next();n.fu.set(s,new Cw(t)),n.mu=n.mu.insert(t,s),Tm(n.remoteStore,new kn(en(Fo(t.path)),s,"TargetPurposeLimboResolution",Vo.ce))}}async function bi(n,e,t){const s=ie(n),r=[],i=[],c=[];s.Au.isEmpty()||(s.Au.forEach(((l,d)=>{c.push(s.bu(d,e,t).then((h=>{var m;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=tl.Es(d.targetId,h);i.push(p)}})))})),await Promise.all(c),s.Ru.H_(r),await(async function(d,h){const m=ie(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>O.forEach(h,(v=>O.forEach(v.Ts,(I=>m.persistence.referenceDelegate.addReference(p,v.targetId,I))).next((()=>O.forEach(v.Is,(I=>m.persistence.referenceDelegate.removeReference(p,v.targetId,I)))))))))}catch(p){if(!ar(p))throw p;B(nl,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const I=m.vs.get(v),A=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(v,P)}}})(s.localStore,i))}async function Bw(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){B(ul,"User change. New user:",e.toKey());const s=await xm(t.localStore,e);t.currentUser=e,(function(i,c){i.yu.forEach((l=>{l.forEach((d=>{d.reject(new G(L.CANCELLED,c))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await bi(t,s.Ns)}}function Hw(n,e){const t=ie(n),s=t.fu.get(e);if(s&&s.Eu)return de().add(s.key);{let r=de();const i=t.Vu.get(e);if(!i)return r;for(const c of i){const l=t.Au.get(c);r=r.unionWith(l.view.ou)}return r}}function $m(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uw.bind(null,e),e.Ru.H_=Aw.bind(null,e.eventManager),e.Ru.Du=Sw.bind(null,e.eventManager),e}function Ww(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zw.bind(null,e),e}class yo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wo(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return Gx(this.persistence,new Wx,e.initialUser,this.serializer)}xu(e){return new km(el.Vi,this.serializer)}Mu(e){return new tw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yo.provider={build:()=>new yo};class qw extends yo{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){ve(this.persistence.referenceDelegate instanceof po,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Rx(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new km((s=>po.Vi(s,t)),this.serializer)}}class lc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bw.bind(null,this.syncEngine),await Ew(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Tw})()}createDatastore(e){const t=Wo(e.databaseInfo.databaseId),s=ow(e.databaseInfo);return dw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,c,l){return new fw(s,r,i,c,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Cd(this.syncEngine,t,0)),(function(){return Id.v()?new Id:new nw})())}createSyncEngine(e,t){return(function(r,i,c,l,d,h,m){const p=new Pw(r,i,c,l,d,h);return m&&(p.Su=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=ie(r);B(cn,"RemoteStore shutting down."),i.da.add(5),await yi(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}lc.provider={build:()=>new lc};/**
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
 */class Bm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const es="FirestoreClient";class Kw{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=$c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async c=>{B(es,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(B(es,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=cl(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ta(n,e){n.asyncQueue.verifyOperationInProgress(),B(es,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await xm(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function jd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gw(n);B(es,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Ad(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Ad(e.remoteStore,r))),n._onlineComponents=e}async function Gw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(es,"Using user provided OfflineComponentProvider");try{await Ta(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===L.FAILED_PRECONDITION||r.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;ws("Error using user provided cache. Falling back to memory cache: "+t),await Ta(n,new yo)}}else B(es,"Using default OfflineComponentProvider"),await Ta(n,new qw(void 0));return n._offlineComponents}async function Hm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(es,"Using user provided OnlineComponentProvider"),await jd(n,n._uninitializedComponentsProvider._online)):(B(es,"Using default OnlineComponentProvider"),await jd(n,new lc))),n._onlineComponents}function Jw(n){return Hm(n).then((e=>e.syncEngine))}async function uc(n){const e=await Hm(n),t=e.eventManager;return t.onListen=jw.bind(null,e.syncEngine),t.onUnlisten=Vw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Lw.bind(null,e.syncEngine),t}function Yw(n,e,t,s){const r=new Bm(s),i=new Dm(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>Pm(await uc(n),i))),()=>{r.Ku(),n.asyncQueue.enqueueAndForget((async()=>jm(await uc(n),i)))}}function Qw(n,e,t={}){const s=new Wn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,d,h){const m=new Bm({next:v=>{m.Ku(),c.enqueueAndForget((()=>jm(i,p)));const I=v.docs.has(l);!I&&v.fromCache?h.reject(new G(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&v.fromCache&&d&&d.source==="server"?h.reject(new G(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new Dm(Fo(l.path),m,{includeMetadataChanges:!0,Wa:!0});return Pm(i,p)})(await uc(n),n.asyncQueue,e,t,s))),s.promise}function Xw(n,e){const t=new Wn;return n.asyncQueue.enqueueAndForget((async()=>Mw(await Jw(n),e,t))),t.promise}/**
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
 */function Wm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zw="ComponentProvider",Dd=new Map;function eE(n,e,t,s,r){return new _0(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wm(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const qm="firestore.googleapis.com",Od=!0;class Vd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qm,this.ssl=Od}else this.host=e.host,this.ssl=e.ssl??Od;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sx)throw new G(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wm(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hl{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Qk;switch(s.type){case"firstParty":return new t0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new G(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Dd.get(t);s&&(B(Zw,"Removing Datastore"),Dd.delete(t),s.terminate())})(this),Promise.resolve()}}function tE(n,e,t,s={}){var h;n=Zt(n,hl);const r=ai(e),i=n._getSettings(),c={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&dh(`https://${l}`),i.host!==qm&&i.host!==l&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...i,host:l,ssl:r,emulatorOptions:s};if(!vs(d,c)&&(n._setSettings(d),s.mockUserToken)){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=pt.MOCK_USER;else{m=Gg(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new G(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(v)}n._authCredentials=new Xk(new Pf(m,p))}}/**
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
 */class Go{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class Ke{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(fi(t,Ke._jsonSchema))return new Ke(e,s||null,new X(Ve.fromString(t.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:qe("string",Ke._jsonSchemaVersion),referencePath:qe("string")};class ti extends Go{constructor(e,t,s){super(e,t,Fo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new X(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function fl(n,e,...t){if(n=te(n),arguments.length===1&&(e=$c.newId()),a0("doc","path",e),n instanceof hl){const s=Ve.fromString(e,...t);return Yu(s),new Ke(n,null,new X(s))}{if(!(n instanceof Ke||n instanceof ti))throw new G(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ve.fromString(e,...t));return Yu(s),new Ke(n.firestore,n instanceof ti?n.converter:null,new X(s))}}/**
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
 */const Ld="AsyncQueue";class Md{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Em(this,"async_queue_retry"),this.lc=()=>{const s=Ia();s&&B(Ld,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=Ia();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Ia();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new Wn;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ar(e))throw e;B(Ld,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,Tn("INTERNAL UNHANDLED ERROR: ",Ud(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=al.createAndSchedule(this,e,t,s,(i=>this.Ec(i)));return this.oc.push(r),r}Pc(){this._c&&ee(47125,{Rc:Ud(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Ud(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Qs extends hl{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Md,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Md(e),this._firestoreClient=void 0,await e}}}function nE(n,e){const t=typeof n=="object"?n:ph(),s=typeof n=="string"?n:co,r=kc(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=qg("firestore");i&&tE(r,...i)}return r}function ml(n){if(n._terminated)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sE(n),n._firestoreClient}function sE(n){var s,r,i,c;const e=n._freezeSettings(),t=eE(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Kw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(dt.fromBase64String(e))}catch(t){throw new G(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mt(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fi(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:qe("string",Mt._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class pl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jo{constructor(e){this._methodName=e}}/**
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
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(fi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:qe("string",sn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
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
 */class Bt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fi(e,Bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Bt(e.vectorValues);throw new G(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:qe("string",Bt._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const rE=/^__.*__$/;class iE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new mi(e,this.data,t,this.fieldTransforms)}}class Km{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ss(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class gl{constructor(e,t,s,r,i,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new gl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return bo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Gm(this.dataSource)&&rE.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class oE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wo(e)}V(e,t,s,r=!1){return new gl({dataSource:e,methodName:t,targetDoc:s,path:ut.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jm(n){const e=n._freezeSettings(),t=Wo(n._databaseId);return new oE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function aE(n,e,t,s,r,i={}){const c=n.V(i.merge||i.mergeFields?2:0,e,t,r);bl("Data must be an object, but it was:",c,s);const l=Ym(s,c);let d,h;if(i.merge)d=new Ot(c.fieldMask),h=c.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=ni(e,p,t);if(!c.contains(v))throw new G(L.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Zm(m,v)||m.push(v)}d=new Ot(m),h=c.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=c.fieldTransforms;return new iE(new Nt(l),d,h)}class _i extends Jo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _i}}class yl extends Jo{_toFieldTransform(e){return new G0(e.path,new Xr)}isEqual(e){return e instanceof yl}}function cE(n,e,t,s){const r=n.V(1,e,t);bl("Data must be an object, but it was:",r,s);const i=[],c=Nt.empty();ns(s,((d,h)=>{const m=Xm(e,d,t);h=te(h);const p=r.Sc(m);if(h instanceof _i)i.push(m);else{const v=Yo(h,p);v!=null&&(i.push(m),c.set(m,v))}}));const l=new Ot(i);return new Km(c,l,r.fieldTransforms)}function lE(n,e,t,s,r,i){const c=n.V(1,e,t),l=[ni(e,s,t)],d=[r];if(i.length%2!=0)throw new G(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(ni(e,i[v])),d.push(i[v+1]);const h=[],m=Nt.empty();for(let v=l.length-1;v>=0;--v)if(!Zm(h,l[v])){const I=l[v];let A=d[v];A=te(A);const P=c.Sc(I);if(A instanceof _i)h.push(I);else{const S=Yo(A,P);S!=null&&(h.push(I),m.set(I,S))}}const p=new Ot(h);return new Km(m,p,c.fieldTransforms)}function Yo(n,e){if(Qm(n=te(n)))return bl("Unsupported field value:",e,n),Ym(n,e);if(n instanceof Jo)return(function(s,r){if(!Gm(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,r){const i=[];let c=0;for(const l of s){let d=Yo(l,r.bc(c));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),c++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=te(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return W0(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Se.fromDate(s);return{timestampValue:mo(r.serializer,i)}}if(s instanceof Se){const i=new Se(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:mo(r.serializer,i)}}if(s instanceof sn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mt)return{bytesValue:hm(r.serializer,s._byteString)};if(s instanceof Ke){const i=r.databaseId,c=s.firestore._databaseId;if(!c.isEqual(i))throw r.Dc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xc(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Bt)return(function(c,l){const d=c instanceof Bt?c.toArray():c;return{mapValue:{fields:{[zf]:{stringValue:$f},[lo]:{arrayValue:{values:d.map((m=>{if(typeof m!="number")throw l.Dc("VectorValues must only contain numeric values.");return Jc(l.serializer,m)}))}}}}}})(s,r);if(_m(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Bc(s)}`)})(n,e)}function Ym(n,e){const t={};return Of(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(n,((s,r)=>{const i=Yo(r,e.yc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Qm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof sn||n instanceof Mt||n instanceof Ke||n instanceof Jo||n instanceof Bt||_m(n))}function bl(n,e,t){if(!Qm(t)||!jf(t)){const s=Bc(t);throw s==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+s)}}function ni(n,e,t){if((e=te(e))instanceof pl)return e._internalPath;if(typeof e=="string")return Xm(n,e);throw bo("Field path arguments must be of type string or ",n,!1,void 0,t)}const uE=new RegExp("[~\\*/\\[\\]]");function Xm(n,e,t){if(e.search(uE)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pl(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bo(n,e,t,s,r){const i=s&&!s.isEmpty(),c=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(i||c)&&(d+=" (found",i&&(d+=` in field ${s}`),c&&(d+=` in document ${r}`),d+=")"),new G(L.INVALID_ARGUMENT,l+n+d)}function Zm(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class dE{convertValue(e,t="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ns(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[lo].arrayValue)==null?void 0:r.values)==null?void 0:i.map((c=>ze(c.doubleValue)));return new Bt(t)}convertGeoPoint(e){return new sn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Mo(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ve.fromString(e);ve(bm(s),9688,{name:e});const r=new Yr(s.get(1),s.get(3)),i=new X(s.popFirst(5));return r.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class ep extends dE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}/**
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
 */function hE(){return new _i("deleteField")}function dc(){return new yl("serverTimestamp")}const Fd="@firebase/firestore",zd="4.14.1";/**
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
 */function $d(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class tp{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ni("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fE extends tp{data(){return super.data()}}/**
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
 */function mE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function pE(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Cr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bs extends tp{constructor(e,t,s,r,i,c){super(e,t,s,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ni("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",bs._jsonSchema={type:qe("string",bs._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class Qi extends bs{data(e={}){return super.data(e)}}class $s{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Cr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Qi(this._firestore,this._userDataWriter,s.key,s,new Cr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((l=>{const d=new Qi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Cr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const d=new Qi(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Cr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return l.type!==0&&(h=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),m=c.indexOf(l.doc.key)),{type:gE(l.type),doc:d,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
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
 */$s._jsonSchemaVersion="firestore/querySnapshot/1.0",$s._jsonSchema={type:qe("string",$s._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};/**
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
 */function yE(n){n=Zt(n,Ke);const e=Zt(n.firestore,Qs),t=ml(e);return Qw(t,n._key).then((s=>sp(e,n,s)))}function bE(n,e,t){n=Zt(n,Ke);const s=Zt(n.firestore,Qs),r=pE(n.converter,e),i=Jm(s);return np(s,[aE(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,tn.none())])}function _E(n,e,t,...s){n=Zt(n,Ke);const r=Zt(n.firestore,Qs),i=Jm(r);let c;return c=typeof(e=te(e))=="string"||e instanceof pl?lE(i,"updateDoc",n._key,e,t,s):cE(i,"updateDoc",n._key,e),np(r,[c.toMutation(n._key,tn.exists(!0))])}function vE(n,...e){var h,m,p;n=te(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||$d(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($d(e[s])){const v=e[s];e[s]=(h=v.next)==null?void 0:h.bind(v),e[s+1]=(m=v.error)==null?void 0:m.bind(v),e[s+2]=(p=v.complete)==null?void 0:p.bind(v)}let i,c,l;if(n instanceof Ke)c=Zt(n.firestore,Qs),l=Fo(n._key.path),i={next:v=>{e[s]&&e[s](sp(c,n,v))},error:e[s+1],complete:e[s+2]};else{const v=Zt(n,Go);c=Zt(v.firestore,Qs),l=v._query;const I=new ep(c);i={next:A=>{e[s]&&e[s](new $s(c,I,v,A))},error:e[s+1],complete:e[s+2]},mE(n._query)}const d=ml(c);return Yw(d,l,r,i)}function np(n,e){const t=ml(n);return Xw(t,e)}function sp(n,e,t){const s=t.docs.get(e._key),r=new ep(n);return new bs(n,r,e._key,s,new Cr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Yk(er),Ws(new ks("firestore",((s,{instanceIdentifier:r,options:i})=>{const c=s.getProvider("app").getImmediate(),l=new Qs(new Zk(s.getProvider("auth-internal")),new n0(c,s.getProvider("app-check-internal")),v0(c,r),c);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),zn(Fd,zd,e),zn(Fd,zd,"esm2020")})();const kE={apiKey:"AIzaSyC1lWDUwmBOlDmJHiqn8PBdGXf63GFZM8g",authDomain:"kocky-sveta-2026.firebaseapp.com",projectId:"kocky-sveta-2026",storageBucket:"kocky-sveta-2026.firebasestorage.app",messagingSenderId:"390822285835",appId:"1:390822285835:web:31021a6bb7c67d7a58ad0e",measurementId:"G-VB20M681V5"},rp=mh(kE),_l=nE(rp),xE=hi(rp);sf(xE,Dc).catch(()=>{});async function wE(n){const t=new TextEncoder().encode(n),s=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(s)).map(i=>i.toString(16).padStart(2,"0")).join("")}function ip(){try{let n=localStorage.getItem("ks-device-id");return n||(n=Math.random().toString(36).slice(2,10)+Date.now().toString(36),localStorage.setItem("ks-device-id",n)),n}catch{return"unknown"}}function EE(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function IE(){return String(Math.floor(1e3+Math.random()*9e3))}async function op(n){var l;const e=n.customRoomId?n.customRoomId.toUpperCase().trim():EE(),t=n.pin||IE(),s=await wE(t),r=(l=hi().currentUser)==null?void 0:l.uid;if(!r)throw new Error("Nie si prihlásený");const i=ip(),c={ownerPinHash:s,status:"waiting",updatedAt:dc(),selectedSkin:n.selectedSkin,rules:n.rules,activeTournament:null,players:{[r]:{name:n.hostName,score:0,isReady:!1,online:!0,deviceId:i,lastSeen:dc()}},gameState:{currentTurn:r,lastRoll:[],history:[]}};return await bE(fl(_l,"rooms",e),c),window.__ksVerboseFirebase&&console.log("[createRoom] roomId:",e,"uid:",r,"deviceId:",i),{roomId:e,pin:t}}const TE=Object.freeze(Object.defineProperty({__proto__:null,createRoom:op},Symbol.toStringTag,{value:"Module"}));async function AE(n){var l,d;const e=fl(_l,"rooms",n.roomId),t=await yE(e);if(!t.exists())throw window.__ksVerboseFirebase&&console.error("[joinRoom] Miestnosť neexistuje:",n.roomId),new Error("Miestnosť neexistuje");const s=(l=hi().currentUser)==null?void 0:l.uid;if(!s)throw new Error("Nie si prihlásený");const r=ip(),i=((d=t.data())==null?void 0:d.players)??{},c={};for(const[h,m]of Object.entries(i))m.deviceId===r&&h!==s&&(c[`players.${h}`]=hE(),window.__ksVerboseFirebase&&console.log("[joinRoom] removing ghost uid:",h,"for deviceId:",r));return c[`players.${s}`]={name:n.playerName,score:0,isReady:!1,online:!0,deviceId:r,lastSeen:dc()},await _E(e,c),window.__ksVerboseFirebase&&console.log("[joinRoom] roomId:",n.roomId,"uid:",s,"deviceId:",r),{uid:s}}function SE(){const n=$r(e=>e.status);return n==="connected"?a.jsx(ii,{size:18,className:"text-green-400"}):n==="error"?a.jsx(ko,{size:18,className:"text-red-400"}):a.jsx(Yd,{size:18,className:"ks-muted"})}function NE(n){var e,t;if(n.lastSeen){const s=((t=(e=n.lastSeen)==null?void 0:e.toMillis)==null?void 0:t.call(e))??n.lastSeen;if(typeof s=="number")return Date.now()-s<3e4}return n.online??!1}function RE({roomState:n,myUid:e}){if(!(n!=null&&n.players))return null;const t=Object.entries(n.players);if(t.length===0)return null;const[,s]=bn.useState(0);return bn.useEffect(()=>{const r=setInterval(()=>s(i=>i+1),15e3);return()=>clearInterval(r)},[]),a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono",children:[a.jsx(Zd,{size:13}),"HRÁČI V MIESTNOSTI (",t.length,")"]}),a.jsx("div",{className:"divide-y ks-border-sub",children:t.map(([r,i])=>{const c=NE(i);return a.jsxs("div",{className:"flex items-center gap-3 px-4 py-3",children:[a.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${c?"bg-green-400":"bg-zinc-600"}`}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"ks-cream text-sm font-medium truncate",children:[i.name||"hráč",r===e&&a.jsx("span",{className:"ks-muted text-xs ml-1.5",children:"(ty)"})]}),a.jsx("div",{className:"ks-muted text-xs",children:c?"online":"offline"})]})]},r)})})]})}function CE({onBack:n,activeSkin:e,activeRules:t,defaultRoomName:s}){const{roomId:r,uid:i,roomState:c,status:l,setRoomId:d,setUid:h,setRoomState:m,setStatus:p,setIsRecorder:v,reset:I}=$r(),[A,P]=j.useState(""),[S,$]=j.useState(""),[R,V]=j.useState(""),[D,H]=j.useState(!1),[q,w]=j.useState(!1),[y,_]=j.useState(!!s),[k,x]=j.useState(s||""),E=async()=>{const re=hi();return await re.authStateReady(),re.currentUser||await Kh(re),re.currentUser.uid},b=y&&k.trim()?k.trim():"hráč",ae=async()=>{H(!0),V("");try{const re=await E(),{roomId:ge}=await op({hostName:b,selectedSkin:e||"classic",rules:t||[]});d(ge),h(re),v(!0),p("connected")}catch(re){const ge=(re==null?void 0:re.message)||String(re);V(`Chyba: ${ge}`),console.error("[OnlineScreen] createRoom failed:",re)}finally{H(!1)}},we=async()=>{const re=A.toUpperCase().trim();if(!re){$("Zadaj kód miestnosti");return}H(!0),$("");try{const ge=await E();await AE({roomId:re,playerName:b}),d(re),h(ge),v(!1),p("connected")}catch(ge){$(ge.message||"Miestnosť neexistuje")}finally{H(!1)}},it=()=>{n()},bt=()=>{window.confirm("Naozaj sa chceš odhlásiť? Máš zapísaný kód miestnosti?")&&(I(),n())},Et=()=>{navigator.clipboard.writeText(r||"").then(()=>{w(!0),setTimeout(()=>w(!1),2e3)})};return a.jsxs("div",{className:"min-h-screen ks-bg ks-cream ks-body flex flex-col",children:[a.jsxs("div",{className:"flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-4 border-b ks-border-sub",children:[a.jsx("button",{onClick:it,className:"ks-press p-2 rounded-sm ks-border-sub border",children:a.jsx(_s,{size:20,className:"ks-gold"})}),a.jsx("h2",{className:"ks-display ks-gold text-2xl font-semibold flex-1",children:"Online miestnosť"}),a.jsx(SE,{})]}),a.jsxs("div",{className:"flex-1 px-4 py-5 max-w-md w-full mx-auto flex flex-col gap-4 overflow-y-auto",children:[!r&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:a.jsxs("div",{className:"px-4 py-4 space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"ks-muted text-xs ks-mono block mb-1",children:"KÓD MIESTNOSTI"}),a.jsx("input",{value:A,onChange:re=>{P(re.target.value.toUpperCase().slice(0,8)),$(""),V("")},onKeyDown:re=>re.key==="Enter"&&we(),placeholder:"Zadaj existujúci kód",className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none ks-mono tracking-widest"})]}),a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>_(re=>!re),className:"flex items-center gap-2 ks-press",children:[a.jsx("div",{className:`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${y?"ks-gold-bg border-transparent":"ks-border-sub border"}`,children:y&&a.jsx(Bs,{size:11,className:"text-black"})}),a.jsx(Xl,{size:13,className:"ks-muted"}),a.jsx("span",{className:"ks-muted text-xs",children:"Chcem zadať meno zariadenia"})]}),a.jsx("p",{className:"ks-muted text-xs mt-1 ml-6 leading-relaxed opacity-70",children:"Meno sa zobrazí druhému zariadeniu. Je to len voliteľné označenie."}),y&&a.jsx("div",{className:"mt-3 ml-6",children:a.jsx("input",{value:k,onChange:re=>x(re.target.value.slice(0,20)),placeholder:"napr. Obývačka, Telefón...",autoFocus:!0,className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"})})]}),S&&a.jsx("p",{className:"text-red-400 text-xs",children:S}),a.jsx("button",{onClick:we,disabled:D||!A.trim(),className:"ks-gold-bg w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm",children:D?"Pripájam...":"PRIPOJIŤ SA"})]})}),a.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:a.jsxs("div",{className:"px-4 py-4 space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Pa,{size:16,className:"ks-muted"}),a.jsx("h3",{className:"ks-cream font-semibold",children:"Vytvoriť novú miestnosť"})]}),a.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Toto vytvorí nový kód miestnosti pre synchronizáciu aktuálnej hry, archívu a skinu."}),R&&a.jsx("p",{className:"text-red-400 text-xs",children:R}),a.jsx("button",{onClick:ae,disabled:D,className:"border ks-border-sub w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm ks-gold",children:D?"Vytváram...":"VYTVORIŤ MIESTNOSŤ"})]})})]}),r&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b ks-border-sub",children:[a.jsxs("div",{className:"flex items-center gap-2 ks-muted text-xs ks-mono",children:[a.jsx(ii,{size:13}),"AKTÍVNA MIESTNOSŤ"]}),a.jsxs("div",{className:`flex items-center gap-1.5 text-xs ks-mono ${l==="error"?"text-red-400":"text-green-400"}`,children:[a.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${l==="error"?"bg-red-400":"bg-green-400"}`}),l==="error"?"CHYBA":"ONLINE"]})]}),a.jsxs("div",{className:"px-4 py-6 text-center",children:[a.jsx("div",{className:"ks-gold ks-mono text-5xl font-bold tracking-widest mb-2",children:r}),a.jsx("div",{className:"ks-muted text-xs",children:"Zdieľaj tento kód s druhým zariadením"}),y&&k.trim()&&a.jsxs("div",{className:"mt-3 flex items-center justify-center gap-1.5 ks-muted text-xs",children:[a.jsx(Xl,{size:12}),a.jsxs("span",{children:["Toto zariadenie: ",a.jsx("span",{className:"ks-cream font-semibold",children:k.trim()})]})]})]}),a.jsxs("div",{className:"border-t ks-border-sub",children:[a.jsxs("button",{onClick:Et,className:"w-full flex items-center justify-center gap-2 py-3 ks-press ks-muted text-sm border-b ks-border-sub",children:[q?a.jsx(Bs,{size:16,className:"text-green-400"}):a.jsx(Xd,{size:16}),q?"Skopírované!":"Kopírovať kód"]}),a.jsxs("button",{onClick:bt,className:"w-full flex items-center justify-center gap-2 py-2.5 ks-press ks-muted text-xs",children:[a.jsx(Cp,{size:14}),"Odhlásiť sa"]})]})]}),a.jsx(RE,{roomState:c,myUid:i})]}),a.jsxs("div",{className:"mt-auto ks-card border ks-border-sub rounded-sm px-4 py-4 flex gap-3",children:[a.jsx(Pa,{size:18,className:"ks-muted flex-shrink-0 mt-0.5"}),a.jsx("p",{className:"ks-muted text-sm leading-relaxed",children:"Synchronizuje sa aktuálna hra, archív hier a aktívny skin v reálnom čase cez Firebase. Každé zariadenie hrá lokálne."})]})]})]})}function Li({label:n}){return a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4 pb-1",children:n})}function Aa({icon:n,title:e,subtitle:t,value:s,onChange:r}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs leading-relaxed",children:t})]}),a.jsx("button",{onClick:()=>r(!s),role:"switch","aria-checked":s,style:{flexShrink:0,position:"relative",cursor:"pointer",width:36,height:20,borderRadius:10,border:"none",padding:0,background:s?"var(--ks-accent, #d4b86a)":"rgba(82,82,91,0.8)",transition:"background 0.2s"},children:a.jsx("span",{style:{position:"absolute",top:2,left:s?18:2,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.18s",boxShadow:"0 1px 3px rgba(0,0,0,0.35)"}})})]})}function PE({icon:n,title:e,subtitle:t,value:s,onChange:r,placeholder:i,maxLength:c=30,actionLabel:l,onAction:d}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{value:s,onChange:h=>r(h.target.value.slice(0,c)),placeholder:i,className:"flex-1 ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"}),l&&a.jsx("button",{onClick:d,className:"ks-gold-bg ks-press px-2.5 py-1 rounded-sm ks-mono text-xs font-bold flex-shrink-0",children:l})]})]})}function jE({icon:n,title:e,subtitle:t,value:s,onChange:r,min:i,max:c,step:l=50}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]}),a.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[a.jsx("button",{onClick:()=>r(Math.max(i,s-l)),className:"w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none",children:"−"}),a.jsx("span",{className:"ks-mono ks-cream text-sm w-12 text-center",children:s}),a.jsx("button",{onClick:()=>r(Math.min(c,s+l)),className:"w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none",children:"+"})]})]})}function Sa({icon:n,title:e,subtitle:t,label:s,onClick:r,danger:i}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:`w-12 h-12 rounded-sm border flex items-center justify-center flex-shrink-0 ${i?"border-red-700/50":"ks-border-sub"}`,children:a.jsx(n,{size:22,className:i?"text-red-400":"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:`ks-display text-lg font-semibold ${i?"text-red-300":"ks-cream"}`,children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]}),a.jsx("button",{onClick:r,className:`ks-press px-2.5 py-1 rounded-sm ks-mono text-xs flex-shrink-0 ${i?"border border-red-700/50 text-red-400":"ks-gold-bg"}`,children:s})]})}function DE({adminSettings:n,tournaments:e,active:t,appVersion:s}){const r=(()=>{try{let c=0;for(const l of Object.keys(localStorage))c+=(localStorage.getItem(l)||"").length;return(c/1024).toFixed(1)+" KB"}catch{return"—"}})(),i=[["Verzia app",s||"1.5.3"],["Turnaje v archíve",`${(e==null?void 0:e.length)??0}`],["Aktívna hra",t?`${t.players.length} hráčov, kolo ${t.currentRound+1}`:"žiadna"],["localStorage",r],["Debug mód",n.debugMode?"zapnutý":"vypnutý"],["Custom room name",n.roomName||"(predvolené)"],["Min. zápis override",n.minWriteOffOverride?`${n.minWriteOffOverride} b.`:"vypnutý"]];return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono",children:[a.jsx(Op,{size:13}),"DIAGNOSTIKA"]}),a.jsx("div",{className:"divide-y ks-border-sub",children:i.map(([c,l])=>a.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[a.jsx("span",{className:"ks-muted text-xs",children:c}),a.jsx("span",{className:"ks-cream ks-mono text-xs",children:l})]},c))})]})}function OE({onBack:n,adminSettings:e,onAdminChange:t,tournaments:s,active:r,appVersion:i,onSimulateTurn:c,onExportState:l,onCreateRoom:d}){const[h,m]=j.useState(!1),p=j.useCallback((I,A)=>{t({...e,[I]:A})},[e,t]),v=()=>{l&&l(),m(!0),setTimeout(()=>m(!1),2500)};return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(sh,{title:"Admin nastavenia",onBack:n}),a.jsxs("div",{className:"mx-4 mt-3 mb-1 flex items-center gap-2 px-3 py-2 rounded-sm border border-amber-700/40 bg-amber-950/20",children:[a.jsx(gc,{size:14,className:"ks-gold flex-shrink-0"}),a.jsx("span",{className:"ks-muted text-xs",children:"Interné nastavenia — zmeny ovplyvňujú správanie aplikácie"})]}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx(Li,{label:"ONLINE MIESTNOSŤ"}),a.jsx(PE,{icon:ii,title:"Vlastný kód miestnosti",subtitle:"Zadaj vlastný kód miestnosti (napr. RUBIKON) a stlač VYTVORIŤ — miestnosť sa vytvorí okamžite s týmto kódom, aktuálnym skinom a pravidlami.",value:e.roomName||"",onChange:I=>p("roomName",I),placeholder:"napr. Obývačka, Tablet Marcel...",maxLength:24,actionLabel:"VYTVORIŤ",onAction:d}),a.jsx(Li,{label:"DEBUG A TESTOVANIE"}),a.jsx(Aa,{icon:Pp,title:"Debug mód",subtitle:"Zobrazí overlay s interným stavom hry (currentPlayer, currentRound, pendingDecision, winner).",value:!!e.debugMode,onChange:I=>p("debugMode",I)}),a.jsx(Sa,{icon:Qd,title:"Simulovať ťah",subtitle:"Automaticky zapíše náhodné skóre (násobok 50) pre aktuálneho hráča. Len pri aktívnej hre.",label:"Simuluj",onClick:c}),a.jsx(Sa,{icon:Xd,title:"Export stavu do schránky",subtitle:"Skopíruje celý stav aplikácie (tournaments, active, adminSettings) ako JSON.",label:h?"✓ Skopírované":"Kopírovať",onClick:v}),a.jsx(Li,{label:"OVERRIDE HERNÝCH HODNÔT"}),a.jsx(Aa,{icon:Zl,title:"Override min. zápis",subtitle:"Ak zapnuté, prepisuje pravidlo minWriteOff pre všetky turnaje v tejto session.",value:!!e.minWriteOffOverride,onChange:I=>p("minWriteOffOverride",I?50:null)}),e.minWriteOffOverride!=null&&a.jsx(jE,{icon:Zl,title:"Hodnota min. zápisu",subtitle:"Aktuálna override hodnota (predvolená v pravidlách je 300 b.)",value:e.minWriteOffOverride||50,onChange:I=>p("minWriteOffOverride",I),min:50,max:1e3,step:50}),a.jsx(Aa,{icon:jp,title:"Verbose Firebase logy",subtitle:"Zapne podrobné logy Firebase operácií do konzoly prehliadača.",value:!!e.verboseFirebase,onChange:I=>p("verboseFirebase",I)}),a.jsx(Li,{label:"SYSTÉM"}),a.jsx(DE,{adminSettings:e,tournaments:s,active:r,appVersion:i}),a.jsx(Sa,{icon:Dp,title:"Resetovať admin nastavenia",subtitle:"Vráti všetky admin nastavenia na predvolené hodnoty. Dáta turnajov ostanú nedotknuté.",label:"Reset",onClick:()=>t(ap),danger:!0})]})]})}const VE="58290347";function LE({onSuccess:n,onCancel:e}){const[t,s]=j.useState(""),[r,i]=j.useState(!1),c=()=>{t===VE?n():(i(!0),s(""),setTimeout(()=>i(!1),1500))};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6",children:a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm w-full max-w-xs p-6 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[a.jsx(gc,{size:18,className:"ks-gold"}),a.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:"Admin prístup"})]}),a.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Zadaj prístupový kód pre admin nastavenia."}),a.jsx("input",{type:"password",inputMode:"numeric",maxLength:8,value:t,onChange:l=>{s(l.target.value.replace(/\D/g,"").slice(0,8)),i(!1)},onKeyDown:l=>l.key==="Enter"&&c(),placeholder:"••••••••",autoFocus:!0,className:`w-full ks-card px-3 py-3 rounded-sm bg-transparent border outline-none ks-mono text-center text-xl tracking-[0.4em] transition-colors ${r?"border-red-500 text-red-400":"ks-border-sub ks-cream"}`}),r&&a.jsx("p",{className:"text-red-400 text-xs text-center",children:"Nesprávny kód"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:e,className:"flex-1 py-2.5 border ks-border-sub rounded-sm ks-muted text-sm ks-press",children:"Zrušiť"}),a.jsx("button",{onClick:c,className:"flex-1 py-2.5 ks-gold-bg rounded-sm ks-mono text-sm font-bold ks-press",children:"Potvrdiť"})]})]})})}const ap={roomName:"",debugMode:!1,minWriteOffOverride:null,verboseFirebase:!1};function ME(n,e,t){j.useEffect(()=>{if(!n)return;const s=fl(_l,"rooms",n),r=vE(s,i=>{i.exists()&&(console.log("[useRoomSubscription] update:",n),e(i.data()))},i=>{console.error("[useRoomSubscription] chyba:",i.code,i.message),t==null||t(i)});return()=>r()},[n])}function vl(n,e){return new Array(e).fill(0).map((t,s)=>{let r=0;for(const i of Array.isArray(n)?n:[]){const c=i==null?void 0:i[s];typeof c=="number"&&Number.isFinite(c)&&(r+=c)}return r})}function UE(n){var t;const e=n==null?void 0:n._suddenWin;return e&&typeof e.playerIdx=="number"&&e.playerIdx>=0&&e.playerIdx<(((t=n.players)==null?void 0:t.length)??0)?{isSuddenWin:!0,playerIdx:e.playerIdx,round:e.round??null}:{isSuddenWin:!1,playerIdx:null,round:null}}function _o(n){const e=(n==null?void 0:n.players)||[],t=(n==null?void 0:n.rounds)||[],s=(n==null?void 0:n.targetScore)||1e4,r=vl(t,e.length),i=UE(n);if(i.isSuddenWin){const A=i.playerIdx;return{winners:[A],totals:r,playerTotals:r,achievers:[A],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:`Náhla výhra — hráč ${e[A]} hodil 6 rovnakých s 6 kockami.`,isSuddenWin:!0}}if(n.pendingDecision&&n.pendingDecision.status==="pending")return{winners:[],totals:r,playerTotals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!1,errors:["Hra čaká na rozhodnutie skupiny (pendingDecision)."],reason:"Otvorené pendingDecision — hra ešte nemá finálny výsledok.",isSuddenWin:!1};const c=r.map((A,P)=>({idx:P,total:A})).filter(A=>A.total>=s).map(A=>A.idx);if(c.length===0)return{winners:[],totals:r,playerTotals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:"Žiadny hráč ešte nedosiahol cieľ.",isSuddenWin:!1};const l=(n.rules||[]).find(A=>A.id==="r18"),d=!l||l.selected!=="Áno";let h=[],m="",p=[];if(d){const A=c.map(S=>{var R;let $=0;for(let V=0;V<t.length;V++){const D=(R=t[V])==null?void 0:R[S];if(typeof D=="number"&&Number.isFinite(D)&&($+=D),$>=s)return{idx:S,round:V}}return{idx:S,round:1/0}}),P=Math.min(...A.map(S=>S.round));h=A.filter(S=>S.round===P).map(S=>S.idx),m=h.length===1?`Hráč dosiahol cieľ ako prvý v kole ${P+1}.`:`${h.length} hráči dosiahli cieľ v rovnakom kole (${P+1}). Remíza.`}else{const P=(Array.isArray(n._confirmedDetailed)?n._confirmedDetailed:[]).filter(R=>c.includes(R.player));if(p=c.filter(R=>!P.some(V=>V.player===R)),P.length===0)return{winners:[],totals:r,playerTotals:r,achievers:c,pendingAchievers:p,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${c.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],reason:`${c.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`,isSuddenWin:!1};if(p.length>0)return{winners:[],totals:r,playerTotals:r,achievers:c,pendingAchievers:p,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${p.length} hráč(ov) ešte nepotvrdil(i) výhru.`],reason:`${p.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`,isSuddenWin:!1};const S=Math.min(...P.map(R=>R.round));h=P.filter(R=>R.round===S).map(R=>R.player),m=h.length===1?`Víťazstvo potvrdené najskôr v kole ${S+1}.`:`${h.length} hráči potvrdili víťazstvo v rovnakom kole (${S+1}). Remíza.`}const v=[];for(const A of h){if(typeof A!="number"||A<0||A>=e.length){v.push(`Neplatný index víťaza: ${A}.`);continue}r[A]<s&&v.push(`Víťaz "${e[A]}" má skóre ${r[A]}, čo je menej ako cieľ ${s}.`)}const I=v.length===0;return{winners:I?h:[],playerTotals:r,achievers:c,pendingAchievers:p,isDraw:I&&h.length>1,valid:I,errors:v,reason:m,isSuddenWin:!1}}let Na=null,wr=!0;function Mi(){return Na||(Na=new(window.AudioContext||window.webkitAudioContext)),Na}const Ra={setEnabled(n){wr=n},playClick(){if(wr)try{const n=Mi(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.frequency.value=880,e.type="sine",t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.06),e.start(),e.stop(n.currentTime+.06)}catch{}},playWin(){if(wr)try{const n=Mi();[523,659,784,1047].forEach((e,t)=>{const s=n.createOscillator(),r=n.createGain();s.connect(r),r.connect(n.destination),s.frequency.value=e,s.type="triangle";const i=n.currentTime+t*.14;r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.18,i+.04),r.gain.exponentialRampToValueAtTime(.001,i+.35),s.start(i),s.stop(i+.35)})}catch{}},playStart(){if(wr)try{const n=Mi();[330,392,494].forEach((e,t)=>{const s=n.createOscillator(),r=n.createGain();s.connect(r),r.connect(n.destination),s.frequency.value=e,s.type="square";const i=n.currentTime+t*.08;r.gain.setValueAtTime(.08,i),r.gain.exponentialRampToValueAtTime(.001,i+.15),s.start(i),s.stop(i+.15)})}catch{}},playPenalty(){if(wr)try{const n=Mi(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.frequency.value=180,e.type="sawtooth",t.gain.setValueAtTime(.15,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.start(),e.stop(n.currentTime+.25)}catch{}}},FE=["🎲","🎲","🃏","🪙","🎰","⭐","💠","🎲"],zE=["💠","🌊","⚡","🔷","❄️","🌀","💎","⚡"],$E=["⚡","🦉","🪄","✨","🔮","🐍","⭐","🪄"],BE={brawlstars:"ks-brawl-float",brawlblue:"ks-brawl-float",harrypotter:"ks-hp-float"};function HE({skin:n}){const e=n==="brawlblue"?zE:n==="harrypotter"?$E:FE,t=BE[n]||"ks-brawl-float",s=j.useMemo(()=>e.map((r,i)=>({sym:r,left:`${8+i*12%84}%`,animationDelay:`${i*1.4}s`,animationDuration:`${10+i%4*2}s`,fontSize:`${1.5+i%3*.45}rem`})),[n]);return a.jsx(a.Fragment,{children:s.map((r,i)=>a.jsx("span",{className:t,style:{left:r.left,animationDelay:r.animationDelay,animationDuration:r.animationDuration,fontSize:r.fontSize},children:r.sym},i))})}const WE={1:Yp,2:Jp,3:Gp,4:Kp,5:qp,6:Wp},vo={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}},brawlstars:{id:"brawlstars",name:"Brawl Stars",bg:"radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)",vars:{"--ks-bg-main":"#1a0830","--ks-bg-soft":"rgba(52,18,80,0.92)","--ks-bg-soft-2":"rgba(28,10,45,0.96)","--ks-card-sub":"rgba(40,14,62,0.74)","--ks-border":"rgba(200,80,220,0.28)","--ks-border-strong":"rgba(230,120,255,0.62)","--ks-text":"#f8e8ff","--ks-text-muted":"#c0a0d8","--ks-accent":"#e070d0","--ks-accent-2":"#8030b0","--ks-button-text":"#280a3a","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(20,6,34,0.97)","--ks-sticky-bg2":"rgba(14,4,24,0.98)"}},brawlblue:{id:"brawlblue",name:"Brawl Blue",bg:"radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)",vars:{"--ks-bg-main":"#061e54","--ks-bg-soft":"rgba(10,48,110,0.92)","--ks-bg-soft-2":"rgba(6,26,65,0.96)","--ks-card-sub":"rgba(8,36,88,0.74)","--ks-border":"rgba(40,180,240,0.28)","--ks-border-strong":"rgba(80,210,255,0.62)","--ks-text":"#e8f4ff","--ks-text-muted":"#90b8d8","--ks-accent":"#40d8f0","--ks-accent-2":"#2878c8","--ks-button-text":"#030e28","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(4,14,44,0.97)","--ks-sticky-bg2":"rgba(3,10,32,0.98)"}},harrypotter:{id:"harrypotter",name:"Harry Potter",bg:"radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg,#f8ecd4 0%,#efe0b8 40%,#e8d6a4 70%,#f2e8c8 100%)",vars:{"--ks-bg-main":"#f0e2c0","--ks-bg-soft":"rgba(252,244,226,0.97)","--ks-bg-soft-2":"rgba(248,238,215,1.0)","--ks-card-sub":"rgba(244,232,206,0.98)","--ks-border":"rgba(140,88,18,0.30)","--ks-border-strong":"rgba(160,100,20,0.62)","--ks-text":"#271608","--ks-text-muted":"#7a5030","--ks-accent":"#8b5814","--ks-accent-2":"#740001","--ks-button-text":"#f8f0de","--ks-danger":"#aa2020","--ks-sticky-bg":"rgba(244,232,202,0.97)","--ks-sticky-bg2":"rgba(238,224,192,0.98)"}}},hc={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},inkfree:{id:"inkfree",name:"Ink Free",stack:"'Ink Free', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"},caveatbrush:{id:"caveatbrush",name:"Caveat Brush",stack:"'Caveat Brush', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}};function qE(n,e){const t=hc[e]||hc.default,r=(vo[n]||vo.classic).vars;let i=":root{"+Object.entries(r).map(([c,l])=>`${c}:${l}`).join(";")+`;--ks-font-display:${t.stack};--ks-font-body:${t.stack};--ks-font-mono:${t.monoStack}}`;return n==="blackwhite"&&(i+=`
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
`),i}const Bd=[50,100,300,400,500,600,1e3,1500,2e3],Er=-1e3,Hd=[{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"fight"},{msg:"Také mrviny? Vážne?",emoji:"😀",variant:"doubt"},{msg:"Toto ťa nezachráni…",emoji:"💀",variant:"doom"},{msg:"Tak takto sa hra nevyhráva!",emoji:"🎭",variant:"fight"},{msg:"Hej majster… si si istý?",emoji:"😆",variant:"doubt"},{msg:"Riskni to konečne!",emoji:"🎲",variant:"fight"}],Pr=[{id:"cat-basic",title:"Bodové hodnoty kociek",subtitle:"Samostatné kocky",ruleIds:["r1","r2"]},{id:"cat-trio",title:"Trojice rovnakých",subtitle:"Tri rovnaké kocky",ruleIds:["r3","r4","r5","r6","r7","r8"]},{id:"cat-special",title:"Špeciálne kombinácie",subtitle:"Postupka a tri páry",ruleIds:["r9","r10"]},{id:"cat-multi",title:"Násobky kociek",subtitle:"Štyri, päť, šesť rovnakých",ruleIds:["r11","r12","r13"]}],Wd=["r14","r15","r16","r17","r18"];function si(n){return n?new Date(n).toLocaleString("sk-SK",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function cp(n,e){if(!n||!e)return null;const t=new Date(e)-new Date(n);if(t<0)return null;const s=Math.floor(t/6e4);if(s<60)return`${s} min`;const r=Math.floor(s/60),i=s%60;return`${r} h ${i} min`}const ri={POPUP_DISPLAY_DURATION:2e3,QUEUE_SIZE:1,VERTICAL_OFFSET:"0px",OPACITY:.92},Ui=[{id:"r1",name:"Jednotka",description:"Samostatná kocka s hodnotou 1",points:100,type:"numeric",dice:[1]},{id:"r2",name:"Päťka",description:"Samostatná kocka s hodnotou 5",points:50,type:"numeric",dice:[5]},{id:"r3",name:"Tri jednotky",description:"Trojica jednotiek",points:1e3,type:"numeric",dice:[1,1,1]},{id:"r4",name:"Tri dvojky",description:"Trojica dvojok",points:200,type:"numeric",dice:[2,2,2]},{id:"r5",name:"Tri trojky",description:"Trojica trojok",points:300,type:"numeric",dice:[3,3,3]},{id:"r6",name:"Tri štvorky",description:"Trojica štvoriek",points:400,type:"numeric",dice:[4,4,4]},{id:"r7",name:"Tri päťky",description:"Trojica päťok",points:500,type:"numeric",dice:[5,5,5]},{id:"r8",name:"Tri šestky",description:"Trojica šestiek",points:600,type:"numeric",dice:[6,6,6]},{id:"r9",name:"Postupka 1–6",description:"Šesť kociek za sebou: 1·2·3·4·5·6",points:2e3,type:"numeric",dice:[1,2,3,4,5,6]},{id:"r10",name:"Tri páry",description:"Tri rôzne páry kociek",points:1e3,type:"numeric",dice:[2,2,4,4,6,6]},{id:"r11",name:"Štyri rovnaké",description:"Štyri rovnaké kocky",points:0,type:"select",options:["Dvojnásobok trojice","Pevná hodnota"],selected:"Dvojnásobok trojice",dice:[3,3,3,3]},{id:"r12",name:"Päť rovnakých",description:"Päť rovnakých kociek",points:0,type:"select",options:["Štvornásobok trojice","Pevná hodnota"],selected:"Štvornásobok trojice",dice:[4,4,4,4,4]},{id:"r13",name:"Šesť rovnakých",description:"Všetkých šesť kociek rovnakých",points:0,type:"select",options:["Automatická výhra","Pevná hodnota 3000"],selected:"Automatická výhra",dice:[5,5,5,5,5,5]},{id:"r14",name:"Minimálny odpis (prvý zápis)",description:"Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.",points:300,type:"numeric",dice:[]},{id:"r15",name:"Cieľové skóre",description:"Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.",points:1e4,type:"numeric",dice:[]},{id:"r16",name:"Nič nehodené",description:"Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.",points:-1e3,type:"numeric",dice:[2,3,4,6]},{id:"r17",name:"Prekročenie cieľa",description:"Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).",points:0,type:"select",options:["Automatická čiarka","Hod sa neuznáva"],selected:"Automatická čiarka",dice:[]},{id:"r18",name:"Režim potvrdenia víťazstva",description:"Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.",points:0,type:"select",options:["Áno","Nie"],selected:"Áno",dice:[]}];function fc({value:n,size:e=28}){const t=WE[n];return t?a.jsx(t,{size:e,strokeWidth:1.5}):null}function lp({dice:n,size:e=24}){return!n||n.length===0?a.jsx("span",{className:"ks-muted text-sm italic",children:"—"}):a.jsx("div",{className:"flex flex-wrap gap-1 items-center",children:n.map((t,s)=>a.jsx("div",{className:"ks-gold",style:{display:"inline-flex"},children:a.jsx(fc,{value:t,size:e})},s))})}function lt({children:n,onClick:e,disabled:t,className:s="",icon:r,variant:i="gold"}){const c="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return a.jsxs("button",{onClick:e,disabled:t,className:`${c} ${l[i]} ${s}`,children:[r&&a.jsx(r,{size:18,strokeWidth:2}),n]})}function qn({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(_s,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function KE({msg:n,kind:e,onClose:t}){const s={info:"ks-border-accent bg-amber-950/90 ks-cream",warn:"border-amber-600/70 bg-amber-900/80 ks-text-accent",overshoot:"border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50"},r=e==="overshoot"?xo:e==="warn"?ko:Bs;return a.jsx("div",{className:"fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor",style:{pointerEvents:"none"},children:a.jsxs("div",{className:`max-w-md mx-auto p-3 rounded-sm border ${s[e]||s.info} flex items-start gap-2 shadow-2xl`,style:{pointerEvents:"auto",opacity:"var(--ks-popup-opacity, 0.92)"},children:[a.jsx(r,{size:20,className:"shrink-0 mt-0.5"}),a.jsx("div",{className:"ks-body flex-1 text-sm font-medium",children:n}),a.jsx("button",{"aria-label":"Zatvoriť",onClick:t,className:"opacity-70 hover:opacity-100",children:a.jsx(Kn,{size:16})})]})})}function up({size:n=96,color:e="#d4b86a",strikeColor:t="#c44848"}){return a.jsxs("svg",{width:n,height:n,viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"},children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"crownGold",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"1"}),a.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.7"})]})}),a.jsx("path",{d:"M 16 36 L 24 60 L 72 60 L 80 36 L 66 48 L 48 24 L 30 48 Z",fill:"url(#crownGold)",stroke:e,strokeWidth:"2",strokeLinejoin:"round"}),a.jsx("rect",{x:"22",y:"60",width:"52",height:"8",fill:e,stroke:e,strokeWidth:"1",rx:"1"}),a.jsx("circle",{cx:"48",cy:"32",r:"3.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("circle",{cx:"20",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("circle",{cx:"76",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:"#000",strokeWidth:"7",strokeLinecap:"round",opacity:"0.5"}),a.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:t,strokeWidth:"4",strokeLinecap:"round"})]})}function Fi({kind:n,title:e,subtitle:t,onClose:s,actionLabel:r}){const i={victory:{accent:"#d4b86a",label:"VÍŤAZ"},draw:{accent:"#d4b86a",label:"REMÍZA"},"temporary-king":{accent:"#c44848",label:"DOČASNÝ KRÁĽ"},"win-pending":{accent:"#d4b86a",label:"POTVRD VÝHRU"}}[n]||{accent:"#d4b86a",label:""},c=({size:l=56})=>n==="temporary-king"?a.jsx(up,{size:l}):a.jsx(gs,{size:l,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"}});return a.jsx("div",{className:"fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center",onClick:s,children:a.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:i.accent,opacity:"var(--ks-popup-opacity, 0.92)",cursor:"pointer"},children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx(c,{})}),a.jsx("div",{className:"ks-mono text-xs tracking-widest mb-2",style:{color:i.accent},children:i.label}),e&&a.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:e}),t&&a.jsx("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug",children:t}),r&&a.jsx("div",{className:"ks-mono text-[10px] ks-muted mt-3 tracking-widest",children:r})]})})}function qd({data:n,onClose:e}){const t=typeof n=="string"?n:n==null?void 0:n.msg,s=typeof n=="string"?"🤨":(n==null?void 0:n.emoji)||"🤨",r=typeof n=="string"?"doubt":(n==null?void 0:n.variant)||"doubt",i={doubt:{bg:"radial-gradient(circle at center, rgba(80,30,30,0.95), rgba(0,0,0,0.95))",label:"DOTAZ Z PUBLIKA",glow:"rgba(212,184,106,0.4)",labelColor:"#d4b86a"},fight:{bg:"radial-gradient(circle at center, rgba(120,40,30,0.95), rgba(20,10,5,0.97))",label:"POVZBUDENIE",glow:"rgba(231,128,82,0.5)",labelColor:"#e08854"},doom:{bg:"radial-gradient(circle at center, rgba(60,20,20,0.97), rgba(0,0,0,0.98))",label:"PROROCTVO",glow:"rgba(196,72,72,0.5)",labelColor:"#c44848"}},c=i[r]||i.doubt;return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:c.bg},onClick:e,children:[a.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[a.jsx("div",{className:"absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`}}),a.jsx("div",{className:"absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`,animationDelay:"1s"}}),a.jsx("div",{className:"absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`,animationDelay:"0.5s"}})]}),a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${c.labelColor})`}}),a.jsx("span",{style:{color:c.labelColor},className:"text-xs",children:"✦"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${c.labelColor}, transparent)`}})]}),a.jsx("div",{className:"mb-3 ks-funny-emoji flex justify-center",style:{filter:`drop-shadow(0 4px 16px ${c.glow})`},children:s==="strikethrough-crown"?a.jsx(up,{size:112,color:"#d4b86a",strikeColor:"#c44848"}):a.jsx("span",{className:"text-7xl",children:s})}),a.jsx("div",{className:"ks-mono text-xs mb-3 tracking-widest",style:{color:c.labelColor},children:c.label}),a.jsx("div",{className:"ks-display text-5xl font-bold ks-cream leading-tight px-4",style:{textShadow:`0 4px 24px ${c.glow}, 0 0 40px ${c.glow}`},children:t}),a.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${c.labelColor})`}}),a.jsx("span",{style:{color:c.labelColor},className:"text-xs",children:"✦"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${c.labelColor}, transparent)`}})]}),a.jsx("button",{onClick:e,className:"ks-press mt-5 ks-mono ks-muted text-xs tracking-widest",children:"ZATVORIŤ"})]})]})}function GE({kind:n,icon:e,children:t}){const s={info:"border-amber-800/30 bg-amber-950/30 ks-text-accent/90",warn:"border-red-800/40 bg-red-950/30 ks-text-accent",gold:"border-amber-600/60 bg-amber-900/30 ks-text-accent"};return a.jsxs("div",{className:`flex items-start gap-2 text-sm border rounded-sm p-2 ${s[n]}`,children:[a.jsx(e,{size:16,className:"mt-0.5 shrink-0 ks-gold"}),a.jsx("div",{className:"ks-body",children:t})]})}function JE(){const[n,e]=j.useState("menu"),[t,s]=j.useState([]),[r,i]=j.useState(null),[c,l]=j.useState(Ui),[d,h]=j.useState(null),[m,p]=j.useState("menu"),[v,I]=j.useState(!1),[A,P]=j.useState("classic"),[S,$]=j.useState("default"),[R,V]=j.useState(!0),[D,H]=j.useState(!0),[q,w]=j.useState("delta"),[y,_]=j.useState("basic"),[k,x]=j.useState("standard"),[E,b]=j.useState(ap),[ae,we]=j.useState(!1),[it,bt]=j.useState(!1),{setRoomId:Et,setUid:re,setStatus:ge,setRoomState:Te,roomId:Q,uid:Ge,roomState:me,isRecorder:_e}=$r();ME(Q,Te,()=>ge("error")),j.useEffect(()=>{if(!Q||!Ge)return;let T=!1;const U=()=>{T||Dt(async()=>{const{updatePresence:Z}=await import("./updatePresence-KmHRPlEF.js");return{updatePresence:Z}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updatePresence:Z})=>{Z(Q,Ge).catch(()=>{})})};U();const Y=setInterval(U,15e3);return()=>{T=!0,clearInterval(Y),Dt(async()=>{const{markOffline:Z}=await import("./updatePresence-KmHRPlEF.js");return{markOffline:Z}},__vite__mapDeps([4,1,2]),import.meta.url).then(({markOffline:Z})=>{Z(Q,Ge).catch(()=>{})})}},[Q,Ge]),j.useEffect(()=>{(async()=>{try{const T=await window.storage.get("rules");T!=null&&T.value&&l(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("scoreDisplayMode");T!=null&&T.value&&w(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("tournamentViewMode");T!=null&&T.value&&_(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("funnyWindowsDisplayMode");T!=null&&T.value&&x(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("selectedFont");if(T!=null&&T.value){const U=JSON.parse(T.value);$(hc[U]?U:"default")}}catch{}try{const T=await window.storage.get("selectedSkin");if(T!=null&&T.value){const U=JSON.parse(T.value);P(vo[U]?U:"classic")}}catch{try{const T=localStorage.getItem("ks-skin");T&&P(T)}catch{}}try{const T=await window.storage.get("soundsEnabled");T!=null&&T.value&&V(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("animationsEnabled");T!=null&&T.value&&H(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("tournaments");T!=null&&T.value&&s(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("active");T!=null&&T.value&&i(JSON.parse(T.value))}catch{}try{const T=await window.storage.get("adminSettings");T!=null&&T.value&&b(JSON.parse(T.value))}catch{}I(!0)})()},[]),j.useEffect(()=>{v&&window.storage.set("scoreDisplayMode",JSON.stringify(q)).catch(()=>{})},[q,v]),j.useEffect(()=>{v&&window.storage.set("tournamentViewMode",JSON.stringify(y)).catch(()=>{})},[y,v]),j.useEffect(()=>{v&&window.storage.set("funnyWindowsDisplayMode",JSON.stringify(k)).catch(()=>{})},[k,v]),j.useEffect(()=>{v&&window.storage.set("selectedFont",JSON.stringify(S)).catch(()=>{})},[S,v]),j.useEffect(()=>{if(v){window.storage.set("selectedSkin",JSON.stringify(A)).catch(()=>{});try{localStorage.setItem("ks-skin",A)}catch{}}},[A,v]),j.useEffect(()=>{v&&window.storage.set("soundsEnabled",JSON.stringify(R)).catch(()=>{})},[R,v]),j.useEffect(()=>{v&&window.storage.set("animationsEnabled",JSON.stringify(D)).catch(()=>{})},[D,v]),j.useEffect(()=>{Ra.setEnabled(R)},[R]),j.useEffect(()=>{v&&window.storage.set("rules",JSON.stringify(c)).catch(()=>{})},[c,v]),j.useEffect(()=>{v&&window.storage.set("tournaments",JSON.stringify(t)).catch(()=>{})},[t,v]),j.useEffect(()=>{v&&(r?window.storage.set("active",JSON.stringify(r)).catch(()=>{}):window.storage.delete("active").catch(()=>{}))},[r,v]),j.useEffect(()=>{v&&window.storage.set("adminSettings",JSON.stringify(E)).catch(()=>{})},[E,v]);const De=720*60*1e3,Vt=120*1e3,[Je,Ct]=j.useState(!1),ln=j.useRef(Date.now());j.useEffect(()=>{const T=()=>{ln.current=Date.now(),Ct(!1)};return window.addEventListener("mousemove",T,{passive:!0}),window.addEventListener("keydown",T,{passive:!0}),window.addEventListener("click",T,{passive:!0}),window.addEventListener("touchstart",T,{passive:!0}),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("keydown",T),window.removeEventListener("click",T),window.removeEventListener("touchstart",T)}},[]),j.useEffect(()=>{if(!Q){Ct(!1);return}const T=setInterval(()=>{const U=Date.now()-ln.current;U>=De?(Ct(!1),$r.getState().reset()):U>=De-Vt&&Ct(!0)},3e4);return()=>clearInterval(T)},[Q]);const Ht=j.useRef(null),_t=j.useRef(null),vt=j.useRef(null);j.useEffect(()=>{Ht.current=null,_t.current=null,vt.current=null},[Q]),j.useEffect(()=>{if(!Q||_e)return;const T=me==null?void 0:me.activeTournament;if(T===void 0)return;const U=JSON.stringify(T??null);U!==Ht.current&&(Ht.current=U,i(T??null))},[Q,_e,JSON.stringify(me==null?void 0:me.activeTournament)]),j.useEffect(()=>{if(!v||!Q||!_e)return;const T=JSON.stringify(r??null);if(T===Ht.current)return;Ht.current=T;const U=setTimeout(()=>{Dt(async()=>{const{updateGameState:Y}=await import("./updateGameState-BpLIbWKF.js");return{updateGameState:Y}},__vite__mapDeps([5,1,2]),import.meta.url).then(({updateGameState:Y})=>{Y(Q,{activeTournament:r??null}).catch(Z=>{console.error("[sync] activeTournament write failed:",Z)})})},300);return()=>clearTimeout(U)},[r,Q,v,_e]),j.useEffect(()=>{if(!Q||_e)return;const T=me==null?void 0:me.syncedTournaments;if(T===void 0)return;const U=JSON.stringify(T??[]);U!==_t.current&&(_t.current=U,s(T??[]))},[Q,_e,JSON.stringify(me==null?void 0:me.syncedTournaments)]),j.useEffect(()=>{if(!v||!Q||!_e)return;const T=JSON.stringify(t??[]);if(T===_t.current)return;_t.current=T;const U=setTimeout(()=>{Dt(async()=>{const{updateGameState:Y}=await import("./updateGameState-BpLIbWKF.js");return{updateGameState:Y}},__vite__mapDeps([5,1,2]),import.meta.url).then(({updateGameState:Y})=>{Y(Q,{syncedTournaments:t??[]}).catch(Z=>{console.error("[sync] tournaments write failed:",Z)})})},500);return()=>clearTimeout(U)},[t,Q,v,_e]),j.useEffect(()=>{if(!Q||_e)return;const T=me==null?void 0:me.selectedSkin;!T||T===vt.current||(vt.current=T,vo[T]&&P(T))},[Q,_e,me==null?void 0:me.selectedSkin]),j.useEffect(()=>{if(!v||!Q||!_e||A===vt.current)return;vt.current=A;const T=setTimeout(()=>{Dt(async()=>{const{updateGameState:U}=await import("./updateGameState-BpLIbWKF.js");return{updateGameState:U}},__vite__mapDeps([5,1,2]),import.meta.url).then(({updateGameState:U})=>{U(Q,{selectedSkin:A}).catch(console.error)})},500);return()=>clearTimeout(T)},[A,Q,v,_e]);const Wt=j.useMemo(()=>{const T=c.find(U=>U.id==="r14");return T&&Number(T.points)||300},[c]);E.minWriteOffOverride,j.useEffect(()=>{window.__ksVerboseFirebase=!!E.verboseFirebase},[E.verboseFirebase]);const As=j.useCallback(()=>e("menu"),[]),ye=j.useCallback(()=>{w(T=>T==="delta"?"cumulative":"delta")},[]),[Lt,ot]=j.useState([]),Me=j.useRef(null);j.useEffect(()=>{Me.current=r},[r]);const Ce=j.useCallback(T=>{const U=Me.current;U&&ot(Y=>[...Y.slice(-4),U]),i(Y=>typeof T=="function"?T(Y):T)},[]),qt=j.useCallback(()=>{ot(T=>T.length?(i(T[T.length-1]),T.slice(0,-1)):T)},[]),rs=j.useRef(null),Cn=j.useRef(null);rs.current=as,Cn.current=Kt;const Ss=j.useCallback(T=>{rs.current(T)},[]),un=j.useCallback(()=>{Cn.current()},[]),is=j.useCallback(()=>{if(!r){window.alert("Žiadna aktívna hra.");return}const T=(Math.floor(Math.random()*20)+1)*50;Ce(U=>{if(!U)return U;const Y=U.rounds.slice();for(;Y.length<=U.currentRound;)Y.push(new Array(U.players.length).fill(null));Y[U.currentRound]=[...Y[U.currentRound]||new Array(U.players.length).fill(null)],Y[U.currentRound][U.currentPlayer]=T;const Z=(U.currentPlayer+1)%U.players.length,Ee=Z===0;return{...U,rounds:Y,currentPlayer:Z,currentRound:U.currentRound+(Ee?1:0)}})},[r,Ce]),os=j.useCallback(()=>{const T={tournaments:t,active:r,adminSettings:E};navigator.clipboard.writeText(JSON.stringify(T,null,2)).catch(()=>{})},[t,r,E]),$e=j.useCallback(async()=>{var U;const T=(U=E.roomName)==null?void 0:U.toUpperCase().trim();if(!T){window.alert("Zadaj názov miestnosti.");return}try{const{getAuth:Y,signInAnonymously:Z}=await Dt(async()=>{const{getAuth:W,signInAnonymously:ce}=await Promise.resolve().then(()=>Kk);return{getAuth:W,signInAnonymously:ce}},void 0,import.meta.url),{createRoom:Ee}=await Dt(async()=>{const{createRoom:W}=await Promise.resolve().then(()=>TE);return{createRoom:W}},void 0,import.meta.url),ke=Y();await ke.authStateReady(),ke.currentUser||await Z(ke);const he=ke.currentUser.uid,{roomId:Ye}=await Ee({hostName:"hráč",selectedSkin:A||"classic",rules:c||[],customRoomId:T});Et(Ye),re(he),ge("connected"),e("online")}catch(Y){window.alert(`Chyba: ${(Y==null?void 0:Y.message)||Y}`)}},[E.roomName,c,A,Et,re,ge]);function lr(T,U){Ra.playStart(),ot([]),i({id:Date.now(),date:new Date().toISOString(),players:T,rounds:[],currentPlayer:0,currentRound:0,status:"active",winner:null,confirmationPendingPlayer:null,confirmationQueue:[],confirmationRoundComplete:!1,pendingDecision:null,targetScore:U,minWriteOff:Wt}),e("tournament")}function as(T){if(!r)return;const U=_o({...r});if(!U.valid){const he=`Turnaj nemôže byť uzatvorený — nájdené nezhody:

`+U.errors.join(`
`)+`

Reason: `+U.reason;window.alert(he),console.error("[finishTournament] Validation failed:",U);return}const Y=Array.isArray(T)?[...T]:[T],Z=[...U.winners];if(Y.sort(),Z.sort(),!(Y.length===Z.length&&Y.every((he,Ye)=>he===Z[Ye]))){const he=`Diskrepancia v určení víťaza:

Hra deklaruje víťazov: ${Y.map(Ye=>r.players[Ye]).join(", ")}
Validácia podľa súčtov: ${Z.map(Ye=>r.players[Ye]).join(", ")}

Turnaj sa neuzatvorí — kontaktuj vývojára (alebo skús presný stav v archíve).`;window.alert(he),console.error("[finishTournament] Winner mismatch:",{declaredWinners:Y,computedWinners:Z,totals:U.totals});return}const ke={...r,status:"finished",winner:Z.length===1?Z[0]:Z,finishedAt:new Date().toISOString(),_validatedTotals:U.totals};Ra.playWin(),s(he=>[ke,...he]),i(null),h(ke),e("archiveDetail")}function Kt(){r&&window.confirm("Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.")&&(s(T=>[{...r,status:"aborted",finishedAt:new Date().toISOString()},...T]),i(null),e("menu"))}function dn(T,U){s(Y=>Y.map(Z=>Z.id===T?{...Z,...U}:Z)),(d==null?void 0:d.id)===T&&h(Y=>({...Y,...U}))}async function F(){if(t.length===0){window.alert("Archív je prázdny — nie je čo exportovať.");return}const T=(await Dt(async()=>{const{default:W}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:W}},[],import.meta.url)).default||await Dt(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url);function U(W){return W.winner===null||W.winner===void 0?[]:(Array.isArray(W.winner)?W.winner:[W.winner]).map(be=>W.players[be])}function Y(W){const ce=U(W);return ce.length===0?"—":ce.length===1?ce[0]:`Remíza: ${ce.join(", ")}`}const Z=T.utils.book_new(),Ee=t.map((W,ce)=>({"#":ce+1,Začiatok:si(W.date),Koniec:W.finishedAt?si(W.finishedAt):"—",Cieľ:W.targetScore||1e4,"Počet hráčov":W.players.length,Hráči:W.players.join(", "),Víťaz:Y(W),Stav:W.status==="finished"?"Dokončený":W.status==="aborted"?"Nedokončený":"Aktívny"})),ke=T.utils.json_to_sheet(Ee);ke["!cols"]=[{wch:5},{wch:20},{wch:20},{wch:8},{wch:12},{wch:30},{wch:20},{wch:14}],T.utils.book_append_sheet(Z,ke,"Prehľad"),t.forEach((W,ce)=>{const be=[],Qe=new Date(W.date),ht=W.finishedAt?new Date(W.finishedAt):null,Be=Qe.toLocaleDateString("sk-SK",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\s/g,""),Pt=Qe.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}),at=ht?ht.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}):"",hn=at?`${Pt}-${at}`:Pt;be.push([`Hra ${Be} ${hn} — ${W.players.join(", ")}`]),be.push([]),be.push(["Kolo",...W.players]);const kt=new Array(W.players.length).fill(0);(W.rounds||[]).forEach((Oe,Ft)=>{const Xe=[Ft+1];for(let xt=0;xt<W.players.length;xt++){const zt=Oe[xt];typeof zt=="number"?(kt[xt]+=zt,Xe.push(kt[xt])):zt==="dash"?Xe.push("—"):Xe.push(null)}be.push(Xe)}),be.push(["MAX",...kt]);let Pn="— Nedokončený turnaj";const It=U(W);if(It.length===1){const Oe=Array.isArray(W.winner)?W.winner[0]:W.winner;Pn=`🏆 Víťaz: ${It[0]} (${kt[Oe]})`}else It.length>1&&(Pn=`🏆 Remíza: ${(Array.isArray(W.winner)?W.winner:[W.winner]).map(Xe=>`${W.players[Xe]} (${kt[Xe]})`).join(", ")}`);be.push([Pn]);const cs=T.utils.aoa_to_sheet(be);cs["!cols"]=[{wch:6},...W.players.map(()=>({wch:14}))],T.utils.book_append_sheet(Z,cs,`Hra ${ce+1}`.substring(0,31))});const he=`kocky-sveta-${new Date().toISOString().slice(0,10)}.xlsx`,Ye=T.write(Z,{bookType:"xlsx",type:"base64"});try{if(zr.isNativePlatform()){const W=await gg.writeFile({path:he,data:Ye,directory:Da.Documents,recursive:!0}),ce=await du.canShare();ce!=null&&ce.value?await du.share({title:"Export Kocky sveta",text:"Exportované dáta z aplikácie Kocky sveta",url:W.uri,dialogTitle:"Uložiť alebo zdieľať export"}):window.alert("Export uložený do Documents: "+he);return}}catch(W){console.error("Native Android export failed:",W),window.alert("Natívny export zlyhal: "+((W==null?void 0:W.message)||"neznáma chyba")+`

Skontroluj, či si po npm install spustil aj npx cap sync android.`)}try{T.writeFile(Z,he)}catch{const ce=new Blob([T.write(Z,{bookType:"xlsx",type:"array"})],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),be=URL.createObjectURL(ce),Qe=document.createElement("a");Qe.href=be,Qe.download=he,document.body.appendChild(Qe),Qe.click(),Qe.remove(),URL.revokeObjectURL(be),setTimeout(()=>URL.revokeObjectURL(be),4e3)}}async function J(T){try{const U=(await Dt(async()=>{const{default:W}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:W}},[],import.meta.url)).default||await Dt(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url),Y=await T.arrayBuffer(),Z=U.read(Y,{type:"array"}),Ee=[],ke=[];for(const W of Z.SheetNames){let ce=function(ne){if(ne==null)return!1;const le=String(ne).trim();return le==="—"||le==="-"||le==="–"||le==="−"},be=function(ne){return ne==null?!0:String(ne).trim()===""},Qe=function(ne){if(typeof ne=="number")return ne;if(typeof ne=="string"){const le=ne.replace(/\s/g,"").replace(",","."),Pe=parseFloat(le);return Number.isFinite(Pe)?Pe:null}return null};if(/prehľad|prehlad|summary/i.test(W))continue;const ht=Z.Sheets[W],Be=U.utils.sheet_to_json(ht,{header:1,defval:null,raw:!0});if(!Be||Be.length<4){ke.push(`${W}: príliš krátky list`);continue}const Pt=Be[0],at=(Pt&&Pt[0]?String(Pt[0]):"").trim(),hn=at.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/),kt=at.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/),Pn=at.match(/[—–-]\s*(.+)$/);let It=-1;for(let ne=0;ne<Math.min(Be.length,6);ne++){const le=Be[ne]||[];if(le[0]&&/^kolo$/i.test(String(le[0]).trim())){It=ne;break}}if(It<0){ke.push(`${W}: nenájdený riadok "Kolo"`);continue}const cs=Be[It],Oe=[];for(let ne=1;ne<cs.length;ne++){const le=cs[ne];if(le&&String(le).trim())Oe.push(String(le).trim());else break}if(Oe.length<2){ke.push(`${W}: nenájdené mená hráčov`);continue}const Ft=[];for(let ne=It+1;ne<Be.length;ne++){const le=Be[ne]||[];if(!le[0])break;const Pe=String(le[0]).trim();if(/^max$/i.test(Pe)||/^¤â$/i.test(Pe)||/^suma$/i.test(Pe)||/víťaz|vitaz|🏆/i.test(Pe))break;const xe=parseInt(Pe,10);if(!Number.isFinite(xe))break;Ft.push(le.slice(1,1+Oe.length))}if(Ft.length===0){ke.push(`${W}: žiadne dátové riadky`);continue}const Xe=Ft.map(()=>new Array(Oe.length).fill(null));for(let ne=0;ne<Oe.length;ne++){let le=0,Pe=!1;for(let xe=0;xe<Ft.length;xe++){const Tt=Ft[xe][ne];if(ce(Tt))Xe[xe][ne]="dash";else if(be(Tt))Xe[xe][ne]=null;else{const ft=Qe(Tt);if(ft===null)Xe[xe][ne]=null;else{const fn=Pe?ft-le:ft;Xe[xe][ne]=fn,le=ft,Pe=!0}}}}let xt=null;for(let ne=0;ne<Be.length;ne++){const le=Be[ne]||[],xe=(le[0]?String(le[0]):"").match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);if(xe){const Tt=xe[1].trim(),ft=Oe.findIndex(fn=>fn.toLowerCase()===Tt.toLowerCase());ft>=0&&(xt=ft);break}}if(xt===null){const ne=Oe.map((Pe,xe)=>Xe.reduce((Tt,ft)=>Tt+(typeof ft[xe]=="number"?ft[xe]:0),0)),le=ne.indexOf(Math.max(...ne));ne[le]>=5e3&&(xt=le)}let zt=new Date,Ns=null;if(hn){const ne=parseInt(hn[1],10),le=parseInt(hn[2],10)-1,Pe=parseInt(hn[3],10);let xe=12,Tt=0,ft=null,fn=null;kt&&(xe=parseInt(kt[1],10),Tt=parseInt(kt[2],10),kt[3]&&(ft=parseInt(kt[3],10),fn=parseInt(kt[4],10))),zt=new Date(Pe,le,ne,xe,Tt),ft!==null&&(Ns=new Date(Pe,le,ne,ft,fn))}const Qo=Oe.map((ne,le)=>Xe.reduce((Pe,xe)=>Pe+(typeof xe[le]=="number"?xe[le]:0),0)),ur=Math.max(...Qo),Xo=ur>=7500?1e4:ur>=3500?5e3:1e4,Rs={id:Date.now()+Math.floor(Math.random()*1e3)+Ee.length,date:zt.toISOString(),finishedAt:Ns?Ns.toISOString():zt.toISOString(),players:Oe,rounds:Xe,currentPlayer:0,currentRound:Xe.length,status:xt!==null?"finished":"aborted",winner:xt,confirmationPendingPlayer:null,targetScore:Xo,minWriteOff:300,imported:!0,importedFrom:W};Ee.push(Rs)}if(Ee.length===0){window.alert(`Žiadne turnaje neboli importované.${ke.length?`

Preskočené listy:
`+ke.join(`
`):""}`);return}const he=[...Ee,...t];s(he);let Ye=`Úspešne importované: ${Ee.length} ${Ee.length===1?"turnaj":Ee.length<5?"turnaje":"turnajov"}.`;ke.length&&(Ye+=`

Preskočené:
${ke.join(`
`)}`),window.alert(Ye)}catch(U){console.error(U),window.alert("Chyba pri importe: "+(U.message||"neznáma chyba"))}}async function K(){if(!window.confirm(`⚠️ POZOR: Toto vymaže VŠETKY turnaje z archívu, rozohranú hru aj uložené pravidlá z tohto zariadenia.

Odporúčame najprv vytvoriť zálohu cez Export do Excelu.

Chceš pokračovať?`))return;if(window.prompt("Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).")!=="VYMAZAŤ"){window.alert("Vymazanie zrušené.");return}s([]),i(null),h(null),l(Ui),P("classic"),$("default"),await window.storage.delete("tournaments").catch(()=>{}),await window.storage.delete("selectedFont").catch(()=>{}),await window.storage.delete("active").catch(()=>{}),await window.storage.set("rules",JSON.stringify(Ui)).catch(()=>{}),await window.storage.set("selectedSkin",JSON.stringify("classic")).catch(()=>{}),window.alert("Všetky dáta boli vymazané.")}return a.jsxs("div",{className:"ks-bg min-h-screen ks-cream ks-body","data-skin":A,"data-animations":D?"on":"off",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:[a.jsx("style",{children:qE(A,S)}),a.jsx("style",{children:`:root { --ks-popup-offset: ${ri.VERTICAL_OFFSET}; --ks-popup-opacity: ${ri.OPACITY}; }`}),(A==="brawlstars"||A==="brawlblue"||A==="harrypotter")&&D&&a.jsx(HE,{skin:A}),n==="menu"&&a.jsx(Ng,{onNew:()=>e("newTournament"),onArchive:()=>{p("menu"),e("archive")},onrules:()=>e("rules"),onSettings:()=>e("settings"),onOnline:()=>e("online"),onResume:r?()=>e("tournament"):null,active:r,tournamentCount:t.length}),n==="settings"&&a.jsx(YE,{onBack:()=>e("menu"),onOnline:()=>e("online"),onRulesEditor:()=>e("rulesEditor"),onExport:F,onImport:J,onClearAll:K,onArchive:()=>{p("settings"),e("archive")},tournamentCount:t.length,selectedSkin:A,onSkinChange:P,selectedFont:S,onFontChange:$,tournamentViewMode:y,onTournamentViewModeChange:_,onViewModes:()=>e("viewModes"),onVisualAndSkins:()=>e("visual"),funnyWindowsDisplayMode:k,onFunnyWindowsDisplayModeChange:x,onAdmin:()=>we(!0),onShowEgg:()=>bt(!0)}),n==="admin"&&a.jsx(OE,{onBack:()=>e("settings"),adminSettings:E,onAdminChange:b,tournaments:t,active:r,appVersion:"1.5.4",onSimulateTurn:is,onExportState:os,onCreateRoom:$e}),n==="viewModes"&&a.jsx(Vg,{onBack:()=>e("settings"),selectedMode:y,onChangeMode:_,selectedSkin:A}),n==="visual"&&a.jsx(Lg,{onBack:()=>e("settings"),selectedSkin:A,onSkinChange:P,selectedFont:S,onFontChange:$,tournamentViewMode:y,onTournamentViewModeChange:_,onViewModes:()=>e("viewModes"),soundsEnabled:R,onSoundsToggle:()=>V(T=>!T),animationsEnabled:D,onAnimationsToggle:()=>H(T=>!T)}),n==="newTournament"&&a.jsx(Cg,{onBack:()=>e("menu"),onStart:lr}),n==="tournament"&&(r?a.jsx(ZE,{tournament:r,rules:c,onUpdate:Ce,onFinish:Ss,onAbort:un,onMenu:As,scoreDisplayMode:q,onToggleScoreMode:ye,selectedSkin:A,onSkinChange:P,tournamentViewMode:y,funnyWindowsDisplayMode:k,debugMode:E.debugMode,minWriteOffOverride:E.minWriteOffOverride,canUndo:Lt.length>0,onUndo:qt}):a.jsx(Xs,{title:"Turnaj sa nepodarilo načítať"})),n==="archive"&&a.jsx(aI,{tournaments:Array.isArray(t)?t:[],onBack:()=>e(m),onView:T=>{h(T),e("archiveDetail")},onDelete:T=>{window.confirm("Vymazať tento turnaj z archívu?")&&s(U=>U.filter(Y=>Y.id!==T))},readOnly:m==="menu"}),n==="archiveDetail"&&(d?a.jsx(lI,{tournament:d,onBack:()=>e("archive"),onUpdate:T=>dn(d.id,T),readOnly:m==="menu",scoreDisplayMode:q,onToggleScoreMode:ye,selectedSkin:A}):a.jsx(Xs,{title:"Dáta turnaja sa nepodarilo načítať"})),n==="rules"&&a.jsx(nI,{rules:c,onBack:()=>e("menu")}),n==="online"&&a.jsx(CE,{onBack:()=>e("menu"),activeSkin:A,activeRules:c,defaultRoomName:E.roomName}),n==="rulesEditor"&&a.jsx(sI,{rules:c,onSave:l,onBack:()=>e("settings"),onReset:()=>{window.confirm("Obnoviť všetky pravidlá na pôvodné nastavenia?")&&l(Ui)},selectedSkin:A}),ae&&a.jsx(LE,{onSuccess:()=>{we(!1),e("admin")},onCancel:()=>we(!1)}),Je&&Q&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-[9990] px-4 pb-[max(16px,env(safe-area-inset-bottom))]",children:a.jsxs("div",{className:"max-w-md mx-auto ks-card border-2 border-amber-700/60 rounded-sm px-4 py-3 flex items-center gap-3 shadow-2xl",children:[a.jsx(xo,{size:18,className:"ks-gold shrink-0"}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-cream text-sm font-semibold ks-display",children:"Neaktivita — čoskoro sa odpojíš"}),a.jsx("div",{className:"ks-muted text-xs",children:"Miestnosť sa odpojí za menej ako 2 minúty."})]}),a.jsx("button",{onClick:()=>{ln.current=Date.now(),Ct(!1)},className:"ks-gold-bg ks-press px-3 py-1.5 rounded-sm ks-mono text-xs font-bold shrink-0",children:"ZOSTAŤ"})]})}),it&&a.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/95",onClick:()=>bt(!1),children:a.jsx("img",{src:"/Easteregg.jpg",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",display:"block"},alt:"",draggable:!1})})]})}function Xs({title:n="Dáta sa nepodarilo načítať"}){return a.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 ks-cream",children:a.jsxs("div",{className:"ks-card rounded-sm p-5 text-center max-w-md",children:[a.jsx("div",{className:"ks-display text-2xl ks-gold mb-2",children:n}),a.jsx("div",{className:"ks-muted text-sm",children:"Skús sa vrátiť späť alebo otvoriť turnaj znova."})]})})}function YE({onBack:n,onOnline:e,onRulesEditor:t,onExport:s,onImport:r,onClearAll:i,onArchive:c,tournamentCount:l,selectedSkin:d,onSkinChange:h,selectedFont:m,onFontChange:p,tournamentViewMode:v,onTournamentViewModeChange:I,onViewModes:A,onVisualAndSkins:P,funnyWindowsDisplayMode:S,onFunnyWindowsDisplayModeChange:$,onAdmin:R,onShowEgg:V}){const D=j.useRef(null),[H,q]=j.useState(0);function w(){const _=H+1;q(_),_>=5&&(V==null||V(),q(0))}function y(_){var x;const k=(x=_.target.files)==null?void 0:x[0];k&&r&&r(k),D.current&&(D.current.value="")}return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(qn,{title:"Nastavenia",onBack:n}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"ONLINE"}),a.jsxs("button",{onClick:e,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(ii,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Online miestnosť"}),a.jsx("div",{className:"ks-muted text-sm",children:"Synchronizácia hry, archívu a skinu cez Firebase"})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"PRAVIDLÁ A HODNOTY HRY"}),a.jsxs("button",{onClick:t,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(mc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Úprava pravidiel"}),a.jsx("div",{className:"ks-muted text-sm",children:"Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"VIZUÁL, ZVUKY A SKINY"}),a.jsxs("button",{onClick:A,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Vp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Režim zobrazenia hry"}),a.jsx("div",{className:"ks-muted text-sm",children:v==="observer"?"Pozorovateľ":v==="recorder"?"Zapisovateľ":"Klasický"})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Lp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Štýl oznámení"}),a.jsx("div",{className:"ks-muted text-sm",children:"Fullscreen funny okná, malé popupy alebo potlačený režim"})]})]}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:[["standard","Štandardný"],["simplified","Zjednodušený"],["suppressed","Potlačený"]].map(([_,k])=>a.jsx("button",{onClick:()=>$(_),className:`ks-press px-3 py-2 rounded-sm text-sm ${S===_?"ks-gold-bg":"border ks-border-sub ks-card ks-cream"}`,children:k},_))})]}),a.jsxs("button",{onClick:P,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(yc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Vizuál, Zvuky a Skiny"}),a.jsx("div",{className:"ks-muted text-sm",children:"Farby, písmo a vzhľad aplikácie"})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"SPRÁVA TURNAJOV"}),a.jsxs("button",{onClick:s,disabled:!l,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${l?"":"opacity-40 cursor-not-allowed"}`,children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Mp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Export do Excelu"}),a.jsx("div",{className:"ks-muted text-sm",children:l>0?`${l} turnajov · súbor .xlsx s listami`:"Žiadne turnaje na export"})]}),a.jsx(Up,{className:"ks-muted",size:20})]}),a.jsxs("button",{onClick:()=>{var _;return(_=D.current)==null?void 0:_.click()},className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Fp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Import z Excelu"}),a.jsx("div",{className:"ks-muted text-sm",children:"Pridá turnaje z .xlsx súboru do archívu"})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsx("input",{ref:D,type:"file",accept:".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:y,className:"hidden"}),a.jsxs("button",{onClick:c,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(bc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Editácia archívu"}),a.jsx("div",{className:"ks-muted text-sm",children:'Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá'})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsxs("button",{onClick:R,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(gc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Admin nastavenia"}),a.jsx("div",{className:"ks-muted text-sm",children:"Interné nastavenia · debug · override · diagnostika"})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5",children:[a.jsx(xo,{size:11})," NEBEZPEČNÁ ZÓNA"]}),a.jsxs("button",{onClick:i,className:"ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center",children:a.jsx(wo,{size:22,className:"ks-text-accent"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-text-accent text-xl font-semibold",children:"Vymazať všetky dáta"}),a.jsx("div",{className:"ks-text-accent/70 text-sm",children:"Archív, rozohraná hra, pravidlá — nenávratná akcia"})]}),a.jsx(At,{className:"ks-text-accent",size:20})]}),a.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2",children:[a.jsx(ko,{size:14,className:"ks-gold shrink-0 mt-0.5"}),a.jsxs("div",{children:["Pred vymazaním dát si ",a.jsx("strong",{className:"ks-gold",children:"vytvor zálohu"})," cez Export do Excelu. Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca."]})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4",children:"O APLIKÁCII"}),a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("button",{onClick:w,className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center ks-press select-none",children:a.jsx(Pa,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Kocky sveta"}),a.jsx("div",{className:"ks-muted text-sm",children:"React + Vite + Firebase + Capacitor"})]})]}),a.jsxs("div",{className:"space-y-2 text-xs ks-muted leading-relaxed border-t ks-border-sub pt-3",children:[a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Technológie:"})," React 18, Vite, Tailwind CSS, Firebase Firestore, Capacitor (Android/iOS)"]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Dáta:"})," Ukladané lokálne. Online sync cez Firebase Firestore v reálnom čase."]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Exporty:"})," XLSX (SheetJS) — každý turnaj ako list + súhrnný prehľad."]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Vývoj:"})," Marcel, 2026. Herná logika a pravidlá sú autorské."]})]})]})]})]})}function QE(n){const e=(n||[]).find(t=>t.id==="r18");return!e||e.selected!=="Áno"}function XE(){const[n,e]=j.useState(null),t=j.useRef([]),s=j.useRef(0),r=j.useRef(null),i=ri.POPUP_DISPLAY_DURATION,c=ri.QUEUE_SIZE;function l(){r.current&&(clearTimeout(r.current),r.current=null)}function d(){if(l(),t.current.length===0){e(null);return}const v=t.current.shift();s.current=Date.now()+i,e(v),r.current=setTimeout(d,v.duration??i)}function h(v){if(v){if(!n){s.current=Date.now()+i,e(v),l(),r.current=setTimeout(d,v.duration??i);return}t.current.length>=c?t.current[t.current.length-1]=v:t.current.push(v)}}function m(){l();const v=Date.now(),I=Math.max(0,s.current-v);e(null),t.current.length>0&&(r.current=setTimeout(d,I))}function p(){t.current=[],l(),e(null),s.current=0}return j.useEffect(()=>l,[]),{active:n,enqueue:h,dismiss:m,clear:p}}function ZE({tournament:n,rules:e,onUpdate:t,onFinish:s,onAbort:r,onMenu:i,scoreDisplayMode:c,onToggleScoreMode:l,selectedSkin:d,onSkinChange:h,tournamentViewMode:m,funnyWindowsDisplayMode:p,debugMode:v,minWriteOffOverride:I}){if(!n)return a.jsx(Xs,{});const A=n.targetScore||1e4,P=I??n.minWriteOff??300,S=Array.isArray(n.players)?n.players:[],$=Array.isArray(n.rounds)?n.rounds:[],{currentPlayer:R=0,currentRound:V=0}=n,[D,H]=j.useState([]),[q,w]=j.useState(""),[y,_]=j.useState(!1),[k,x]=j.useState(!1),[E,b]=j.useState(null),ae=XE(),we=ae.active,[it,bt]=j.useState(!1),[Et,re]=j.useState(null),[ge,Te]=j.useState(!1),[Q,Ge]=j.useState(null),me=j.useRef(S.map(()=>0)),_e=j.useRef(new Set),De=j.useMemo(()=>vl($,S.length),[$,S.length]),Vt=j.useMemo(()=>S.map((F,J)=>$.some(K=>typeof K[J]=="number"&&K[J]>=0)),[S,$]),Je=De[R];Vt[R];const Ct=Je>=A-P&&Je<A,ln=QE(e),Ht=ln?null:n.confirmationPendingPlayer,_t=Ht===R&&Ht!==null,vt=A-Je,Wt=R===S.length-1,As=!!n.pendingDecision||_t,ye=D.reduce((F,J)=>F+(typeof J=="number"?J:0),0),Lt=Je+ye;function ot(F,J="info"){b({msg:F,kind:J}),setTimeout(()=>b(null),3500)}function Me(F,J={}){const K=F?typeof F=="string"?{msg:F,emoji:"🎭",variant:"fight"}:F:Hd[Math.floor(Math.random()*Hd.length)];if(!(p==="suppressed"&&!J.forceFullscreen)){if(p==="simplified"&&!J.forceFullscreen){const T=J.duration??Math.max(ri.POPUP_DISPLAY_DURATION,2600);b({msg:K.msg,kind:"info"}),setTimeout(()=>b(null),T);return}ae.enqueue({...K,duration:J.duration??3500})}}function Ce(){if(ye<=0||ye>=500||me.current[R]>=3)return;const F=Math.max(...De),J=Math.min(...De),K=Je<F-1500,T=Je===J&&De.some(U=>U>Je+800);(K||T)&&Math.random()<.55&&(me.current[R]++,Me())}function qt(F){if(!(!Number.isFinite(F)||F===0)){if(_t){ot("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(D.some(J=>J==="dash"||J===Er)){H([F]);return}H(J=>[...J,F])}}function rs(){D.length===1&&D[0]==="dash"||H(["dash"])}function Cn(){if(_t){ot("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}D.length===1&&D[0]===Er||H([Er])}function Ss(F){H(J=>J.filter((K,T)=>T!==F))}function un(){H([])}function is(){if(D.length!==0){if(D[0]==="dash"){if(_t){$e("dash",{confirmWin:!0,confirmedRound:V,confirmedPlayer:R});return}$e("dash");return}if(_t){ot("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(D.some(F=>F<0)){if(D.length>1||D[0]!==Er){ot("Penalizácia −1 000 sa nedá kombinovať s inými bodmi.","warn");return}$e(Er);return}if(Ct){if(ye===vt){if(ln){Ce(),Wt||ot(`${S[R]} dosiahol cieľ ${A.toLocaleString("sk-SK")}! Kolo sa dohrá a hra skončí.`,"info"),$e(ye,{addCandidate:R,autoConfirm:!0,confirmedRound:V,confirmedPlayer:R});return}const F=De[R];t(J=>({...J,pendingDecision:{id:`${J.currentPlayer}-${J.currentRound}-${ye}`,type:"exact-hit-verification",player:J.currentPlayer,round:J.currentRound,score:ye,baseTotal:F,target:J.targetScore,status:"pending"}})),Wt||(re(`${R}-${V}-${ye}-endgame`),Te(!0));return}ot(`Koncovka — treba presne ${vt} bodov. Automatická čiarka!`,"overshoot"),$e("dash");return}if(ye>0&&ye<P){ot(`Každý zápis musí byť aspoň ${P} bodov, alebo daj čiarku.`,"warn");return}if(Lt>A){ot(`Prekročenie ${A.toLocaleString("sk-SK")} – automatická čiarka!`,"overshoot"),$e("dash");return}if(Lt===A){if(Ce(),ln){Wt||ot(`${S[R]} dosiahol cieľ ... Kolo sa dohrá a hra skončí.`),$e(ye,{addCandidate:R,autoConfirm:!0,confirmedRound:V,confirmedPlayer:R});return}if(Wt){Ce(),$e(ye,{addCandidate:R,autoConfirm:!0,confirmedRound:V,confirmedPlayer:R});return}re(`${R}-${V}-${ye}`),bt(!0),$e(ye,{addCandidate:R});return}Ce(),$e(ye)}}function os(F,J){const K=n.pendingDecision;!K||K.id!==F||(J==="confirm"?$e(K.score,{confirmWin:!0,confirmedRound:K.round,confirmedPlayer:K.player}):$e("dash"))}function $e(F,J={}){t(K=>{const T=K.rounds.slice();for(T[K.currentRound]=[...K.rounds[K.currentRound]||[]];T.length<=K.currentRound;)T.push(new Array(K.players.length).fill(null));T[K.currentRound][K.currentPlayer]=F;let U=K.winner,Y=K.confirmationPendingPlayer,Z=[...K.confirmationQueue||[]],Ee=K.confirmationRoundComplete;J.addCandidate!==void 0&&(Z.includes(J.addCandidate)||Z.push(J.addCandidate));let ke=K._confirmedDetailed;if(J.autoConfirm){const ce={player:J.confirmedPlayer??K.currentPlayer,round:J.confirmedRound??K.currentRound,confirmedAt:Date.now()};ke=Array.isArray(K._confirmedDetailed)?[...K._confirmedDetailed.filter(be=>!(be.player===ce.player&&be.round===ce.round)),ce]:[ce]}if(J.confirmWin){const ce={player:J.confirmedPlayer??K.currentPlayer,round:J.confirmedRound??K.currentRound,confirmedAt:Date.now()},be=Array.isArray(K._confirmedDetailed)?[...K._confirmedDetailed.filter(Pt=>!(Pt.player===ce.player&&Pt.round===ce.round)),ce]:[ce],Qe=(K.currentPlayer+1)%K.players.length,ht=Qe===0,Be=K.currentRound+(ht?1:0);if(Y=null,ht){const Pt={...K,rounds:T,_confirmedDetailed:be,rules:K.rules,pendingDecision:null},at=_o(Pt);return U=at.valid&&at.winners.length>0?at.winners.length===1?at.winners[0]:at.winners:null,{...K,rounds:T,currentPlayer:Qe,currentRound:Be,winner:U,confirmationPendingPlayer:Y,confirmationQueue:Z,confirmationRoundComplete:U!==null,_confirmedDetailed:be,pendingDecision:null}}return{...K,rounds:T,currentPlayer:Qe,currentRound:Be,winner:U,confirmationPendingPlayer:Y,confirmationQueue:Z,confirmationRoundComplete:Ee,_confirmedDetailed:be,pendingDecision:null}}const he=(K.currentPlayer+1)%K.players.length,Ye=he===0,W=K.currentRound+(Ye?1:0);if(Ye){const ce={...K,rounds:T,_confirmedDetailed:ke,rules:K.rules,pendingDecision:null},be=_o(ce);if(!be.valid&&be.achievers.length>0){const Qe=be.achievers.filter(ht=>!(ke||[]).some(Be=>Be.player===ht&&Be.round===K.currentRound));if(Qe.length>0)return Y=Qe[0],Ee=!0,{...K,rounds:T,currentPlayer:Y,currentRound:W,winner:null,confirmationPendingPlayer:Y,confirmationQueue:Z,confirmationRoundComplete:Ee,_confirmedDetailed:ke,pendingDecision:null}}if(be.winners.length>0)return U=be.winners.length===1?be.winners[0]:be.winners,Ee=!0,{...K,rounds:T,currentPlayer:he,currentRound:K.currentRound,winner:U,confirmationPendingPlayer:null,confirmationQueue:Z,confirmationRoundComplete:Ee,_confirmedDetailed:ke,pendingDecision:null}}return{...K,rounds:T,currentPlayer:he,currentRound:W,winner:U,confirmationPendingPlayer:Ye?null:Y,confirmationQueue:Z,confirmationRoundComplete:Ee,_confirmedDetailed:ke,pendingDecision:null}}),H([]),w("")}j.useEffect(()=>{if(n.winner!==null&&n.winner!==void 0){ae.clear(),b(null);const F=Array.isArray(n.winner)?n.winner:[n.winner];Ge({winnerArr:F,isDraw:F.length>1});const J=setTimeout(()=>{Ge(null),s(n.winner)},2200);return()=>clearTimeout(J)}},[n.winner]),j.useEffect(()=>{if(!Ct)return;const F=`${R}_${V}`;if(_e.current.has(F))return;_e.current.add(F);const J=setTimeout(()=>{Me({msg:`Hoď presne ${vt}! V koncovke potom treba potvrdenie. 😤`,emoji:"🤙",variant:"fight"},{duration:4500})},400);return()=>clearTimeout(J)},[R,V,Ct,_t,vt]);const lr=m==="observer",as=m==="recorder",Kt=it&&Et!==null;function dn(){const F=parseInt(q,10);if(!(!Number.isFinite(F)||F===0)){if(F%50!==0){ot("Hodnota musí byť násobok 50 (50, 100, 150…)","warn");return}qt(F),w("")}}return!n||!Array.isArray(n.players)||!Array.isArray(n.rounds)?a.jsx(Xs,{}):a.jsxs("div",{className:`min-h-screen ks-fade ks-bg ${as?"pb-6":"pb-32"}`,children:[!as&&a.jsx(qn,{title:`Turnaj · do ${A.toLocaleString("sk-SK")}`,onBack:i,right:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:l,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:c==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:c==="delta"?a.jsx(eh,{size:16}):a.jsx(yc,{size:16})}),a.jsx("button",{onClick:r,className:"ks-press ks-text-accent px-2 py-1 text-xs ks-mono",children:"ZRUŠIŤ"})]})}),lr?a.jsx("div",{className:"px-2 pt-1 pb-3 h-[100dvh] flex flex-col",children:a.jsx("div",{className:"flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden",children:a.jsx("div",{className:"h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]",children:a.jsx(Oa,{tournament:n,totals:De,highlightPlayer:R,pendingPreview:ye>0?ye:0,target:A,displayMode:c,onToggleMode:l,hideModeToolbar:!1,hideModeToggle:!0,compactObserver:!0})})})}):as?a.jsxs("div",{className:"min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]",children:[a.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[a.jsxs("button",{onClick:i,className:"ks-press ks-cream flex items-center gap-1 px-2 py-1",children:[a.jsx(_s,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}),a.jsx("div",{className:"ks-display ks-gold text-lg text-center",children:S[R]}),a.jsx("button",{onClick:r,className:"ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent",children:"ZRUŠIŤ"})]}),a.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[a.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",V+1]}),a.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",A.toLocaleString("sk-SK")]})]}),a.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),a.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:S[R]})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),a.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${Je<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:Je>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:Je.toLocaleString("sk-SK")})]})]})]}),a.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[D.length>0&&D[0]!=="dash"&&Number.isFinite(Lt)&&a.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",Lt.toLocaleString("sk-SK")]}),D[0]==="dash"?a.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):a.jsxs("div",{className:`ks-display text-6xl font-bold ${ye<0?"ks-text-accent":"ks-gold"}`,children:[ye>0?"+":"",ye.toLocaleString("sk-SK")]})]})]}),D.length>0?a.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:D.map((F,J)=>a.jsxs("button",{onClick:()=>Ss(J),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${F==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":F<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[a.jsx("span",{className:"ks-display font-semibold",children:F==="dash"?"— čiarka":F>0?`+${F}`:F}),a.jsx(Kn,{size:14,className:"opacity-60 group-hover:opacity-100"})]},J))}):a.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),a.jsx(lt,{onClick:is,disabled:D.length===0,icon:Bs,className:"w-full text-lg",children:"Zapísať"})]}),a.jsxs("div",{className:"ks-card-sub rounded-sm p-4 flex-1",children:[a.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),a.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:Bd.map(F=>a.jsxs("button",{onClick:()=>qt(F),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",F]},F))}),a.jsxs("div",{className:"flex gap-2 mb-3",children:[a.jsx("input",{type:"number",value:q,onChange:F=>w(F.target.value),onKeyDown:F=>F.key==="Enter"&&dn(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),a.jsx(lt,{onClick:dn,icon:ja,variant:"outline",children:"Pridaj"})]}),a.jsx("div",{className:"ks-divider my-3"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("button",{onClick:rs,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(eu,{size:20,className:"ks-muted"}),a.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),a.jsxs("button",{onClick:Cn,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(tu,{size:20,className:"ks-text-accent"}),a.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4",children:[a.jsx(lt,{onClick:()=>x(!0),icon:nu,variant:"ghost",children:"Priebeh hry"}),a.jsx(lt,{onClick:()=>_(!0),icon:Ca,variant:"ghost",children:"Pravidlá"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-3 pt-3",children:a.jsx(Oa,{tournament:n,totals:De,highlightPlayer:R,pendingPreview:ye>0?ye:0,target:A,displayMode:c,onToggleMode:l,hideModeToolbar:!0})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[a.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",V+1]}),a.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",A.toLocaleString("sk-SK")]})]}),a.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),a.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:S[R]})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),a.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${Je<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:Je>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:Je.toLocaleString("sk-SK")})]})]}),a.jsx("div",{className:"mt-3 space-y-1.5",children:Ct&&a.jsxs(GE,{kind:"warn",icon:pc,children:[a.jsx("strong",{children:"Koncovka!"})," Treba presne ",a.jsx("strong",{children:vt})," bodov."]})})]})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[D.length>0&&D[0]!=="dash"&&Number.isFinite(Lt)&&a.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",Lt.toLocaleString("sk-SK")]}),D[0]==="dash"?a.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):a.jsxs("div",{className:`ks-display text-6xl font-bold ${ye<0?"ks-text-accent":"ks-gold"}`,children:[ye>0?"+":"",ye.toLocaleString("sk-SK")]})]})]}),D.length>0?a.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[D.map((F,J)=>a.jsxs("button",{onClick:()=>Ss(J),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${F==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":F<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[a.jsx("span",{className:"ks-display font-semibold",children:F==="dash"?"— čiarka":F>0?`+${F}`:F}),a.jsx(Kn,{size:14,className:"opacity-60 group-hover:opacity-100"})]},J)),D.length>1&&a.jsx("button",{onClick:un,className:"ks-press px-3 py-1.5 rounded-sm ks-text-accent text-xs ks-mono",children:"VYMAZAŤ VŠETKO"})]}):a.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),a.jsx(lt,{onClick:is,disabled:D.length===0,icon:Bs,className:"w-full text-lg",children:"Zapísať"})]})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-sub rounded-sm p-4",children:[a.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),a.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:Bd.map(F=>a.jsxs("button",{onClick:()=>qt(F),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",F]},F))}),a.jsxs("div",{className:"flex gap-2 mb-3",children:[a.jsx("input",{type:"number",value:q,onChange:F=>w(F.target.value),onKeyDown:F=>F.key==="Enter"&&dn(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),a.jsx(lt,{onClick:dn,icon:ja,variant:"outline",children:"Pridaj"})]}),a.jsx("div",{className:"ks-divider my-3"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("button",{onClick:rs,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(eu,{size:20,className:"ks-muted"}),a.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),a.jsxs("button",{onClick:Cn,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(tu,{size:20,className:"ks-text-accent"}),a.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[a.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Hod bez zápisu (— pomlčka)"}),a.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Nič nehodené (penalizácia)"})]})]})}),a.jsxs("div",{className:"px-4 mt-4 grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:()=>x(!0),icon:nu,variant:"ghost",children:"Priebeh hry"}),a.jsx(lt,{onClick:()=>_(!0),icon:Ca,variant:"ghost",children:"Pravidlá"})]})]}),E&&a.jsx(KE,{...E,onClose:()=>b(null)}),!Kt&&we&&!As&&p==="standard"&&a.jsx(qd,{data:we,onClose:ae.dismiss}),k&&a.jsx(Kd,{onClose:()=>x(!1),title:"Priebeh hry",children:a.jsx(bg,{tournament:n,totals:De,target:A})}),y&&a.jsx(Kd,{onClose:()=>_(!1),title:"Pravidlá hry",children:a.jsx(dp,{rules:e,compact:!0})}),Kt&&p==="standard"&&a.jsx(qd,{data:{msg:"Dočasný kráľ! Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",emoji:"strikethrough-crown",variant:"fight"},onClose:()=>{bt(!1),re(null),Te(!1)}}),Kt&&p==="simplified"&&a.jsx(Fi,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{bt(!1),re(null),Te(!1)}}),Kt&&p==="suppressed"&&a.jsx(Fi,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{bt(!1),re(null),Te(!1)}}),Q&&p==="standard"&&a.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg",style:{background:"var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))"},children:a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-md",children:[a.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",children:Q.isDraw?"👑👑":"👑"}),a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:Q.isDraw?`REMÍZA — ${Q.winnerArr.length} VÍŤAZI`:"VÍŤAZ"}),a.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",children:Q.isDraw?"Víťazi":"Víťaz"}),a.jsx("div",{className:"ks-body ks-cream text-base mb-1 leading-snug",children:Q.winnerArr.map(F=>`${S[F]} (${(De[F]||0).toLocaleString("sk-SK")})`).join(", ")})]})}),Q&&p==="simplified"&&a.jsx(Fi,{kind:Q.isDraw?"draw":"victory",title:Q.isDraw?`Víťazi (${Q.winnerArr.length})`:"Víťaz",subtitle:Q.winnerArr.map(F=>`${S[F]} (${(De[F]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),Q&&p==="suppressed"&&a.jsx(Fi,{kind:Q.isDraw?"draw":"victory",title:Q.isDraw?`Víťazi (${Q.winnerArr.length})`:"Víťaz",subtitle:Q.winnerArr.map(F=>`${S[F]} (${(De[F]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),!Kt&&As&&a.jsx(eI,{playerName:S[R],target:A,displayMode:p,onConfirm:()=>{ge&&Et!==null&&bt(!0),n.pendingDecision?os(n.pendingDecision.id,"confirm"):$e("dash",{confirmWin:!0,confirmedRound:V,confirmedPlayer:R})},onReject:()=>{Te(!1),re(null),n.pendingDecision?os(n.pendingDecision.id,"reject"):$e("dash")}}),v&&a.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-[9999] bg-black/85 text-green-400 font-mono text-[10px] px-3 py-2 space-y-0.5 pointer-events-none",children:[a.jsxs("div",{children:["🐛 DEBUG · currentPlayer: ",R," (",S[R],") · round: ",V]}),a.jsxs("div",{children:["minWO: ",P,I!=null?" (override)":""," · winner: ",JSON.stringify(n.winner)," · pendingDecision: ",n.pendingDecision?n.pendingDecision.type:"null"]}),a.jsxs("div",{children:["confirmQueue: [",(n.confirmationQueue||[]).join(", "),"] · pending: [",D.join(", "),"]"]})]})]})}function eI({playerName:n,target:e,displayMode:t,onConfirm:s,onReject:r}){return t==="standard"?a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:"var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))"},children:[a.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[a.jsx("div",{className:"absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)"}}),a.jsx("div",{className:"absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)",animationDelay:"1s"}})]}),a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, transparent, var(--ks-popup-accent, #d4b86a))"}}),a.jsx(gs,{size:16,className:"ks-gold"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, var(--ks-popup-accent, #d4b86a), transparent)"}})]}),a.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",style:{filter:"drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.6)))"},children:"😤"}),a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:["🏁 DOSIAHOL ",e.toLocaleString("sk-SK")," — POTVRD VÝHRU"]}),a.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",style:{textShadow:"0 4px 24px var(--ks-glow-orb, rgba(212,184,106,0.4)), 0 0 40px var(--ks-glow-orb, rgba(212,184,106,0.4))"},children:n}),a.jsxs("div",{className:"ks-body ks-cream text-base mb-5 leading-snug",children:["Hráč ",a.jsx("em",{className:"ks-gold",children:n})," dosiahol cieľ!",a.jsx("br",{}),"Skupina potvrdzuje výhru — bola hra čistá?"]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("button",{onClick:s,className:"ks-press py-4 px-3 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125",children:[a.jsx(gs,{size:20,className:"ks-gold mx-auto mb-1"}),a.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"}),a.jsx("div",{className:"ks-muted text-[10px] ks-mono mt-0.5",children:"VÝHRA POTVRDENÁ"})]}),a.jsxs("button",{onClick:r,className:"ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125",children:[a.jsx(Kn,{size:20,className:"ks-text-accent mx-auto mb-1"}),a.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"Nepotvrdil"}),a.jsx("div",{className:"ks-text-accent/60 text-[10px] ks-mono mt-0.5",children:"VÝHRA NEPOTVRDENÁ"})]})]})]})]}):a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4",style:{background:"var(--ks-modal-dark-overlay, rgba(10,8,6,0.92))"},children:a.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:"var(--ks-popup-accent, #d4b86a)"},children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx(gs,{size:48,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.5)))"}})}),a.jsx("div",{className:"ks-mono ks-gold text-xs tracking-widest mb-2",children:"POTVRD VÝHRU"}),a.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:n}),a.jsxs("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug mb-5",children:["Hráč ",a.jsx("em",{className:"ks-gold",children:n})," dosiahol ",a.jsx("strong",{children:e.toLocaleString("sk-SK")}),".",a.jsx("br",{}),"Potvrďte, že v overovom hode nič nepadlo."]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx("button",{onClick:s,className:"ks-press py-3 px-2 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125",children:a.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"})}),a.jsx("button",{onClick:r,className:"ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125",children:a.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"✗ Nepotvrdil"})})]})]})})}function Kd({children:n,onClose:e,title:t}){return a.jsx("div",{className:"fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4",style:{background:"rgba(0,0,0,0.7)"},onClick:e,children:a.jsxs("div",{className:"ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade",onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b ks-border-sub",children:[a.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:t}),a.jsx("button",{"aria-label":"Zatvoriť",onClick:e,className:"ks-press ks-cream p-1",children:a.jsx(Kn,{size:22})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto p-4",style:{WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:n})]})})}function tI({players:n,totals:e,target:t}){const s=n.map((r,i)=>({name:r,total:e[i],i})).sort((r,i)=>i.total-r.total);return a.jsx("div",{className:"space-y-2",children:s.map((r,i)=>{const c=t?Math.min(100,Math.max(0,r.total/t*100)):0;return a.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm border ks-border-sub",children:[a.jsx("div",{className:`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${i===0?"ks-gold-bg":"border ks-border-sub ks-gold"}`,children:i+1}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:r.name}),t&&a.jsx("div",{className:"h-1 bg-stone-900 rounded-full overflow-hidden mt-1",children:a.jsx("div",{className:"h-full ks-gold-bg",style:{width:`${c}%`}})})]}),a.jsx("div",{className:`ks-display text-2xl font-bold ${r.total<0?"ks-text-accent":"ks-gold"}`,children:r.total.toLocaleString("sk-SK")})]},r.i)})})}function nI({rules:n,onBack:e}){var c,l,d;const t=Number((c=n.find(h=>h.id==="r14"))==null?void 0:c.points)||300,s=Number((l=n.find(h=>h.id==="r15"))==null?void 0:l.points)||1e4,r=Number((d=n.find(h=>h.id==="r16"))==null?void 0:d.points)||-1e3,i=Pr.flatMap(h=>h.ruleIds).map(h=>n.find(m=>m.id===h)).filter(Boolean);return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(qn,{title:"Pravidlá hry",onBack:e}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsxs("div",{className:"ks-card rounded-sm p-5",children:[a.jsxs("p",{className:"ks-body ks-cream leading-relaxed",children:["Cieľom hry ",a.jsx("em",{className:"ks-gold",children:"Kocky"})," je byť prvým hráčom, ktorý dosiahne cieľové skóre —",a.jsxs("strong",{className:"ks-gold",children:[" ",s.toLocaleString("sk-SK")]})," v klasickej hre alebo",a.jsx("strong",{className:"ks-gold",children:" 5 000"})," v skrátenej. Hráči sa striedajú v hodoch šesťkociek."]}),a.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Každý zápis musí byť aspoň ",a.jsxs("strong",{className:"ks-gold",children:[t," bodov"]})," (minimálny odpis) — alebo daj ",a.jsx("em",{children:"čiarku"}),". Hru sa dá začať aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka, z aktuálneho skóre sa odpočíta ",a.jsxs("strong",{className:"ks-text-accent",children:["−",Math.abs(r).toLocaleString("sk-SK")," bodov"]}),"."]}),a.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Ak hod prekročí cieľ, body sa nezapočítajú a podľa nastavenia sa zapíše spravidla ",a.jsx("em",{children:"čiarka"}),". V závere hry treba dohrať na ",a.jsx("em",{className:"ks-gold",children:"presný cieľ"}),"; ak sa zapne potvrdenie víťazstva, po presnom zásahu nasleduje ešte overovací ťah, v ktorom musí padnúť ",a.jsx("em",{children:"niečohodnenie"}),"."]}),a.jsxs("p",{className:"ks-muted ks-body text-xs italic mt-3",children:["Hodnoty cieľa, minimálneho odpisu a penalizácie sa dajú upraviť v ",a.jsx("em",{children:"Nastavenia → Úprava pravidiel"}),"."]})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),a.jsx(dp,{rules:i})]})]})}function dp({rules:n,compact:e=!1}){return a.jsx("div",{className:"space-y-2",children:n.map(t=>a.jsx("div",{className:`ks-card rounded-sm ${e?"p-3":"p-4"} flex items-start gap-3`,children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-baseline justify-between gap-2 mb-1",children:[a.jsx("h4",{className:"ks-display ks-cream text-lg font-semibold",children:t.name}),a.jsx("div",{className:`ks-display text-xl font-bold whitespace-nowrap ${Number(t.points)<0?"ks-text-accent":"ks-gold"}`,children:t.type==="select"?a.jsx("span",{className:"text-sm italic",children:t.selected}):`${Number(t.points).toLocaleString("sk-SK")} b.`})]}),a.jsx("p",{className:"ks-muted text-sm leading-snug mb-2",children:t.description}),a.jsx(lp,{dice:t.dice,size:e?20:24})]})},t.id))})}function sI({rules:n,onSave:e,onBack:t,onReset:s,selectedSkin:r}){const[i,c]=j.useState(n),[l,d]=j.useState(null),[h,m]=j.useState(null);function p(R,V){c(D=>D.map(H=>H.id===R?{...H,...V}:H))}function v(R){window.confirm("Vymazať toto pravidlo?")&&c(V=>V.filter(D=>D.id!==R))}function I(){const R="r"+Date.now(),V={id:R,name:"Nové pravidlo",description:"Popis pravidla",points:100,type:"numeric",dice:[]};c(D=>[...D,V]),m(R)}function A(){e(i),t()}function P(R){const V=Pr.find(D=>D.id===R);return V?V.ruleIds.map(D=>i.find(H=>H.id===D)).filter(Boolean):[]}const S=j.useMemo(()=>Wd.map(R=>i.find(V=>V.id===R)).filter(Boolean),[i]),$=j.useMemo(()=>{const R=new Set([...Pr.flatMap(V=>V.ruleIds),...Wd]);return i.filter(V=>!R.has(V.id))},[i]);if(l==="cat-settings")return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(qn,{title:"Hodnoty hry",onBack:()=>d(null)}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:"Hodnoty cieľa, prvého zápisu, penalizácie za ničnehodenie, správania pri prekročení cieľa a potvrdenia výhry. Tieto sa premietnu aj do popisu v Pravidlách hry."}),S.map(R=>a.jsx(rI,{rule:R,onUpdate:V=>p(R.id,V)},R.id))]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:()=>d(null),variant:"outline",icon:_s,children:"Späť"}),a.jsx(lt,{onClick:A,icon:zi,children:"Uložiť všetko"})]})})]});if(l){const R=l==="cat-custom"?{title:"Vlastné pravidlá",subtitle:"Tebou pridané pravidlá"}:Pr.find(D=>D.id===l),V=l==="cat-custom"?$:P(l);return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(qn,{title:R.title,onBack:()=>{d(null),m(null)}}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:[R.subtitle,". Klepni na pravidlo pre úpravu hodnôt."]}),V.length===0&&a.jsx("div",{className:"ks-card rounded-sm p-6 text-center ks-muted italic ks-body",children:"Žiadne pravidlá v tejto kategórii."}),V.map(D=>a.jsx(iI,{rule:D,isEditing:h===D.id,onEdit:()=>m(h===D.id?null:D.id),onUpdate:H=>p(D.id,H),onRemove:()=>v(D.id)},D.id)),l==="cat-custom"&&a.jsxs("button",{onClick:I,className:"ks-press ks-card w-full p-3 rounded-sm flex items-center justify-center gap-2 border-dashed",children:[a.jsx(su,{size:18,className:"ks-gold"}),a.jsx("span",{className:"ks-display ks-gold",children:"Pridať vlastné pravidlo"})]})]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:()=>{d(null),m(null)},variant:"outline",icon:_s,children:"Späť"}),a.jsx(lt,{onClick:A,icon:zi,children:"Uložiť všetko"})]})})]})}return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(qn,{title:"Úprava pravidiel",onBack:t}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-2",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),Pr.map(R=>{const V=P(R.id);return a.jsxs("button",{onClick:()=>d(R.id),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold",children:V.length}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:R.title}),a.jsx("div",{className:"ks-muted text-sm",children:R.subtitle})]}),a.jsx(At,{className:"ks-muted",size:20})]},R.id)}),a.jsxs("button",{onClick:()=>d("cat-custom"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-dashed",children:[a.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold flex items-center justify-center",children:a.jsx(su,{size:18})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Vlastné pravidlá"}),a.jsxs("div",{className:"ks-muted text-sm",children:[$.length," pridaných pravidiel"]})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"NASTAVENIA HRY"}),a.jsxs("button",{onClick:()=>d("cat-settings"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4",style:{borderLeftColor:"#d4b86a"},children:[a.jsx("div",{className:"w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center",children:a.jsx(mc,{size:18})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Hodnoty hry"}),a.jsx("div",{className:"ks-muted text-sm",children:"Cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),a.jsx(At,{className:"ks-muted",size:20})]})]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-3 gap-2",children:[a.jsx(lt,{onClick:s,variant:"danger",icon:Gd,children:"Reset"}),a.jsx(lt,{onClick:t,variant:"outline",icon:Kn,children:"Zrušiť"}),a.jsx(lt,{onClick:A,icon:zi,children:"Uložiť"})]})})]})}function rI({rule:n,onUpdate:e}){const t=n.type==="numeric",s=Number(n.points)<0;return a.jsxs("div",{className:"ks-card rounded-sm p-4",children:[a.jsx("div",{className:"flex items-baseline justify-between gap-3 mb-2",children:a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:n.name})}),a.jsx("p",{className:"ks-muted text-sm leading-snug mb-3",children:n.description}),t?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"number",value:n.points,onChange:r=>e({points:parseInt(r.target.value,10)||0}),className:`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${s?"ks-text-accent":"ks-gold"}`}),a.jsx("div",{className:"ks-mono ks-muted text-xs",children:"BODOV"})]}):a.jsx("select",{value:n.selected,onChange:r=>e({selected:r.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700",children:(n.options||[]).map(r=>a.jsx("option",{value:r,children:r},r))})]})}function iI({rule:n,isEditing:e,onEdit:t,onUpdate:s,onRemove:r}){var c;const i=Number(n.points)<0;return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-3 p-3",onClick:t,children:[a.jsxs("div",{className:"flex-1 cursor-pointer",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:n.name}),a.jsx("div",{className:`text-xs italic ${i?"ks-text-accent":"ks-muted"}`,children:n.type==="select"?n.selected:`${n.points} bodov`})]}),a.jsx(lp,{dice:(c=n.dice)==null?void 0:c.slice(0,6),size:18}),a.jsx("button",{"aria-label":"Upraviť",onClick:l=>{l.stopPropagation(),t()},className:"ks-press ks-gold p-1",children:a.jsx(Hp,{size:16})})]}),e&&a.jsxs("div",{className:"border-t ks-border-sub p-3 space-y-3 ks-fade",children:[a.jsx(hs,{label:"Názov",children:a.jsx("input",{value:n.name,onChange:l=>s({name:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})}),a.jsx(hs,{label:"Popis",children:a.jsx("textarea",{value:n.description,onChange:l=>s({description:l.target.value}),rows:2,className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none"})}),a.jsx(hs,{label:"Typ pravidla",children:a.jsxs("select",{value:n.type,onChange:l=>{var h;const d=l.target.value;s(d==="select"?{type:"select",options:n.options||["Možnosť 1","Možnosť 2"],selected:n.selected||((h=n.options)==null?void 0:h[0])||"Možnosť 1"}:{type:"numeric"})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:[a.jsx("option",{value:"numeric",children:"Číselné (pevný počet bodov)"}),a.jsx("option",{value:"select",children:"Výber zo zoznamu"})]})}),n.type==="numeric"?a.jsx(hs,{label:"Body (môže byť aj záporné)",children:a.jsx("input",{type:"number",value:n.points,onChange:l=>s({points:parseInt(l.target.value,10)||0}),className:`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${i?"ks-text-accent":"ks-gold"}`})}):a.jsxs(a.Fragment,{children:[a.jsx(hs,{label:"Aktívna možnosť",children:a.jsx("select",{value:n.selected,onChange:l=>s({selected:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:(n.options||[]).map(l=>a.jsx("option",{value:l,children:l},l))})}),a.jsx(hs,{label:"Možnosti (oddelené čiarkou)",children:a.jsx("input",{value:(n.options||[]).join(", "),onChange:l=>{const d=l.target.value.split(",").map(m=>m.trim()).filter(Boolean),h=d.includes(n.selected)?n.selected:d[0]||"";s({options:d,selected:h})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})})]}),a.jsx(hs,{label:"Kocky (piktogramy)",children:a.jsx(oI,{dice:n.dice||[],onChange:l=>s({dice:l})})}),a.jsxs("button",{onClick:r,className:"ks-press ks-text-accent ks-mono text-xs flex items-center gap-1",children:[a.jsx(wo,{size:14})," Vymazať pravidlo"]})]})]})}function hs({label:n,children:e}){return a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:n.toUpperCase()}),e]})}function oI({dice:n,onChange:e}){return a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40",children:[n.length===0&&a.jsx("span",{className:"ks-muted text-sm italic",children:"Žiadne kocky"}),n.map((t,s)=>a.jsx("button",{onClick:()=>e(n.filter((r,i)=>i!==s)),className:"ks-press ks-gold relative",children:a.jsx(fc,{value:t,size:26})},s))]}),a.jsxs("div",{className:"flex gap-1.5",children:[[1,2,3,4,5,6].map(t=>a.jsx("button",{onClick:()=>n.length<6&&e([...n,t]),className:"ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm",children:a.jsx(fc,{value:t,size:22})},t)),n.length>0&&a.jsx("button",{onClick:()=>e([]),className:"ks-press ml-auto ks-text-accent ks-mono text-xs px-2",children:"VYMAZAŤ"})]})]})}function aI({tournaments:n,onBack:e,onView:t,onDelete:s,readOnly:r}){return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(qn,{title:r?"Archív turnajov":"Editácia archívu",onBack:e}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto",children:[!r&&a.jsxs("div",{className:"ks-card rounded-sm p-3 mb-3 ks-body text-xs ks-muted italic flex items-start gap-2",children:[a.jsx(bc,{size:14,className:"ks-gold shrink-0 mt-0.5"}),a.jsx("div",{children:"Klepni na turnaj pre úpravu skóre, víťaza alebo kôl. Mazanie cez tlačidlo dolu."})]}),n.length===0?a.jsxs("div",{className:"ks-card rounded-sm p-8 text-center",children:[a.jsx(Jd,{className:"ks-gold mx-auto opacity-40",size:48}),a.jsx("p",{className:"ks-muted ks-body mt-3 italic",children:"Zatiaľ žiadne turnaje v archíve."})]}):a.jsx("div",{className:"space-y-2",children:n.map(i=>a.jsx(cI,{t:i,onView:()=>t(i),onDelete:()=>s(i.id),readOnly:r},i.id))})]})]})}function cI({t:n,onView:e,onDelete:t,readOnly:s}){const r=n.players.map((h,m)=>(n.rounds||[]).reduce((p,v)=>p+(typeof v[m]=="number"?v[m]:0),0));if(!n||!Array.isArray(n.players)||!Array.isArray(n.rounds))return a.jsx(Xs,{title:"Poškodený turnaj v archíve"});const i=n.winner===null||n.winner===void 0?[]:Array.isArray(n.winner)?n.winner:[n.winner],c=i.length===0?null:i.length===1?n.players[i[0]]:`Remíza: ${i.map(h=>n.players[h]).join(", ")}`,l=n.targetScore||1e4,d=cp(n.date,n.finishedAt);return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("button",{onClick:e,className:"ks-press w-full p-4 text-left flex items-center gap-3",children:[a.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center
          ${n.status==="finished"?"ks-gold-bg":"border ks-border-sub ks-muted"}`,children:n.status==="finished"?a.jsx($p,{size:22}):a.jsx(Kn,{size:22})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:c?a.jsxs(a.Fragment,{children:[i.length>1?"":"Víťaz: ",a.jsx("span",{className:"ks-gold",children:c})]}):a.jsx("span",{className:"italic ks-muted",children:"Nedokončený turnaj"})}),a.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[a.jsx(Bp,{size:11,className:"ks-muted"}),a.jsxs("div",{className:"ks-mono ks-muted text-xs truncate",children:[si(n.date),d?` · ${d}`:""]})]}),a.jsxs("div",{className:"ks-muted text-xs truncate mt-0.5",children:[n.players.length," hráčov · do ",l.toLocaleString("sk-SK")," · ",n.players.join(" · ")]})]}),a.jsx(At,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"border-t border-amber-900/20 px-4 py-2 flex items-center justify-between",children:[a.jsxs("div",{className:"ks-mono ks-gold text-sm",children:[Math.max(...r).toLocaleString("sk-SK")," bodov"]}),!s&&a.jsxs("button",{onClick:t,className:"ks-press ks-text-accent text-xs ks-mono flex items-center gap-1",children:[a.jsx(wo,{size:12})," VYMAZAŤ"]})]})]})}function lI({tournament:n,onBack:e,onUpdate:t,readOnly:s,scoreDisplayMode:r,onToggleScoreMode:i,selectedSkin:c}){if(!n||!Array.isArray(n.players)||!Array.isArray(n.rounds))return a.jsx(Xs,{title:"Poškodený turnaj v archíve"});const[l,d]=j.useState(!1),[h,m]=j.useState(null);function p(){m({players:[...n.players],rounds:(n.rounds||[]).map(_=>[..._]),winner:n.winner,targetScore:n.targetScore||1e4}),d(!0)}function v(){m(null),d(!1)}function I(){h.players.map((k,x)=>h.rounds.reduce((E,b)=>E+(typeof b[x]=="number"?b[x]:0),0));let _=h.winner;t({players:h.players,rounds:h.rounds,winner:_}),d(!1),m(null)}function A(_,k,x){m(E=>{const b=E.rounds.map(ae=>[...ae]);for(;b.length<=_;)b.push(new Array(E.players.length).fill(null));return b[_][k]=x,{...E,rounds:b}})}function P(){m(_=>({..._,rounds:[..._.rounds,new Array(_.players.length).fill(null)]}))}function S(_){window.confirm(`Vymazať kolo ${_+1}?`)&&m(k=>({...k,rounds:k.rounds.filter((x,E)=>E!==_)}))}function $(_){m(k=>{const x=k.winner,E=x==null?[]:Array.isArray(x)?[...x]:[x],b=E.indexOf(_);b>=0?E.splice(b,1):E.push(_);const ae=E.length===0?null:E.length===1?E[0]:E.sort((we,it)=>we-it);return{...k,winner:ae}})}const R=l&&h?h:n,V=vl(R.rounds,R.players.length),D=R.targetScore||1e4,H=cp(n.date,n.finishedAt),q=j.useMemo(()=>n.status!=="finished"?null:_o({...R,_confirmedDetailed:n._confirmedDetailed,rules:n.rules}),[R,n]),w=R.winner===null||R.winner===void 0?[]:Array.isArray(R.winner)?[...R.winner]:[R.winner],y=q&&(()=>{if(q.winners.length!==w.length)return!0;const _=[...q.winners].sort(),k=[...w].sort();return!_.every((x,E)=>x===k[E])})();return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx(qn,{title:"Detail turnaja",onBack:l?v:e,right:a.jsxs("div",{className:"flex items-center gap-2",children:[!l&&a.jsx("button",{onClick:i,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:r==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:r==="delta"?a.jsx(eh,{size:16}):a.jsx(yc,{size:16})}),l||s?null:a.jsxs("button",{onClick:p,className:"ks-press ks-gold flex items-center gap-1 text-xs ks-mono",children:[a.jsx(bc,{size:14})," UPRAVIŤ"]})]})}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-4",children:[a.jsxs("div",{className:"ks-card rounded-sm p-5 text-center",children:[n.status==="finished"&&R.winner!==null&&R.winner!==void 0?(()=>{const _=Array.isArray(R.winner)?R.winner:[R.winner],k=_.length>1;return a.jsxs(a.Fragment,{children:[a.jsx(gs,{className:"ks-gold mx-auto",size:40}),a.jsx("div",{className:"ks-mono ks-gold text-xs mt-2",children:k?`REMÍZA · ${_.length} VÍŤAZI`:"VÍŤAZ"}),a.jsx("div",{className:"space-y-1.5 mt-1",children:_.map(x=>a.jsxs("div",{children:[a.jsx("div",{className:"ks-display ks-cream text-2xl font-bold",children:R.players[x]}),a.jsx("div",{className:"ks-display ks-gold text-xl",children:V[x].toLocaleString("sk-SK")})]},x))})]})})():a.jsx("div",{className:"ks-muted italic",children:n.status==="aborted"?"Zrušený turnaj":"Nedokončený turnaj"}),a.jsxs("div",{className:"mt-4 pt-4 border-t ks-border-sub grid grid-cols-2 gap-3 text-left",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Xi,{size:10})," ZAČIATOK"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:si(n.date)})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Bs,{size:10})," KONIEC"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:n.finishedAt?si(n.finishedAt):"—"})]}),H&&a.jsxs("div",{className:"col-span-2",children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(zp,{size:10})," TRVANIE"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:H})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(pc,{size:10})," CIEĽ"]}),a.jsxs("div",{className:"ks-body ks-cream text-sm mt-0.5",children:[D.toLocaleString("sk-SK")," b."]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Zd,{size:10})," HRÁČI"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:R.players.length})]})]})]}),y&&q&&a.jsx("div",{className:"ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30",children:a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(xo,{size:20,className:"ks-text-accent shrink-0 mt-0.5"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-mono ks-text-accent text-xs tracking-widest mb-1",children:"⚠ NEZHODA V URČENÍ VÍŤAZA"}),a.jsxs("div",{className:"ks-body ks-cream text-sm leading-snug",children:["Hlavička uvádza:"," ",a.jsx("strong",{className:"ks-gold",children:w.length===0?"—":w.map(_=>R.players[_]).join(", ")}),a.jsx("br",{}),"Súčty kôl však dávajú:"," ",a.jsx("strong",{className:"ks-gold",children:q.winners.length===0?"— (nikto nedosiahol cieľ)":q.winners.map(_=>`${R.players[_]} (${(V[_]||0).toLocaleString("sk-SK")})`).join(", ")})]}),q.errors.length>0&&a.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2",children:q.errors.join(" · ")}),!s&&a.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2 italic",children:"Použi tlačidlo UPRAVIŤ na opravu zoznamu víťazov."})]})]})}),!l&&a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-2",children:"FINÁLNA TABUĽKA"}),a.jsx(tI,{players:R.players,totals:V,target:D})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:l?"ÚPRAVA TABUĽKY":"HISTÓRIA KÔL"}),l&&a.jsxs("button",{onClick:P,className:"ks-press ks-gold ks-mono text-xs flex items-center gap-1",children:[a.jsx(ja,{size:12})," PRIDAŤ KOLO"]})]}),l?a.jsx(uI,{players:h.players,rounds:h.rounds,totals:V,target:D,winner:h.winner,onChangeCell:A,onRemoveRound:S,onSetWinner:$}):a.jsx(Oa,{tournament:{...R,currentRound:-1},totals:V,highlightPlayer:R.winner??-1,target:D,displayMode:r,onToggleMode:i,hideModeToolbar:!0})]})]}),l&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(lt,{onClick:v,variant:"outline",icon:Kn,children:"Zrušiť"}),a.jsx(lt,{onClick:I,icon:zi,children:"Uložiť zmeny"})]})})]})}function uI({players:n,rounds:e,totals:t,target:s,winner:r,onChangeCell:i,onRemoveRound:c,onSetWinner:l}){function d(h){const m=(h||"").trim();if(m===""||m==="·")return null;if(m==="—"||m==="-"||m.toLowerCase()==="dash")return"dash";const p=parseInt(m,10);return Number.isFinite(p)?p:null}return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full border-collapse",style:{tableLayout:"fixed",minWidth:`${36+Math.max(n.length,1)*Math.max(80,300/Math.max(n.length,1))}px`},children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:36}}),n.map((h,m)=>a.jsx("col",{style:{width:`${100/(n.length+.25)}%`,minWidth:`${Math.max(80,300/Math.max(n.length,1))}px`}},m)),a.jsx("col",{style:{width:36}})]}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b ks-border-sub",children:[a.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-2 px-2 text-center sticky left-0",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),n.map((h,m)=>a.jsx("th",{className:"ks-display ks-cream py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis",children:h},m)),a.jsx("th",{style:{width:36}})]})}),a.jsx("tbody",{children:e.map((h,m)=>a.jsxs("tr",{className:"border-b border-amber-900/15",children:[a.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:m+1}),n.map((p,v)=>{const I=h[v],A=I==="dash"?"—":typeof I=="number"?String(I):"";return a.jsx("td",{className:"p-0.5",children:a.jsx("input",{value:A,onChange:P=>i(m,v,d(P.target.value)),placeholder:"·",className:`w-full bg-stone-950/40 border ks-border-sub rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${I==="dash"?"ks-muted":typeof I=="number"&&I<0?"ks-text-accent":"ks-cream"}`})},v)}),a.jsx("td",{className:"text-center",children:a.jsx("button",{onClick:()=>c(m),className:"ks-press ks-text-accent hover:ks-text-accent p-1",children:a.jsx(wo,{size:12})})})]},m))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"border-t-2 ks-border-accent",children:[a.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"∑"}),t.map((h,m)=>{const p=h>=s,I=(r==null?new Set:Array.isArray(r)?new Set(r):new Set([r])).has(m);return a.jsx("td",{className:"text-center py-2 px-2",children:a.jsxs("button",{onClick:()=>l(m),className:`ks-press w-full ks-display text-base font-bold rounded-sm py-1 px-2 ${I?"ks-gold-bg":p?"ks-gold border border-amber-700/40":h<0?"ks-text-accent":"ks-cream"}`,children:[I&&a.jsx(gs,{size:12,className:"inline mr-1"}),h.toLocaleString("sk-SK")]})},m)}),a.jsx("td",{})]})})]})}),a.jsx("div",{className:"p-2 border-t border-amber-900/20 ks-muted text-xs italic text-center ks-body",children:'Klepni na bunku pre úpravu · Klepni na súčet pre nastavenie víťaza · Číslo, „—" alebo prázdne pre vymazanie'})]})}class dI extends bn.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("[ErrorBoundary]",e,t.componentStack)}render(){var e;return this.state.error?a.jsxs("div",{style:{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",background:"#0e0c0a",color:"#f3ead4",fontFamily:"sans-serif",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🎲"}),a.jsx("div",{style:{fontSize:22,fontWeight:700,marginBottom:8,color:"#d4b86a"},children:"Nastala neočakávaná chyba"}),a.jsx("div",{style:{fontSize:13,color:"#a89679",marginBottom:24,maxWidth:320},children:((e=this.state.error)==null?void 0:e.message)||"Neznáma chyba"}),a.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 28px",borderRadius:4,border:"none",cursor:"pointer",background:"#d4b86a",color:"#1a1410",fontWeight:700,fontSize:14},children:"Znova načítať"})]}):this.props.children}}typeof window<"u"&&!window.storage&&(window.storage={async get(n){try{const e=localStorage.getItem(n);return e===null?null:{key:n,value:e,shared:!1}}catch{return null}},async set(n,e){try{return localStorage.setItem(n,e),{key:n,value:e,shared:!1}}catch{return null}},async delete(n){try{return localStorage.removeItem(n),{key:n,deleted:!0,shared:!1}}catch{return null}},async list(n=""){const e=[];for(let t=0;t<localStorage.length;t++){const s=localStorage.key(t);s&&s.startsWith(n)&&e.push(s)}return{keys:e,prefix:n,shared:!1}}});const hI=typeof window<"u"&&(window.location.protocol==="https:"||window.location.protocol==="http:");"serviceWorker"in navigator&&hI&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("SW registered:",e.scope)}).catch(e=>{console.warn("SW registration failed:",e)})});document.addEventListener("contextmenu",n=>{!(n.target instanceof HTMLInputElement)&&!(n.target instanceof HTMLTextAreaElement)&&n.preventDefault()},{capture:!0});ng.createRoot(document.getElementById("root")).render(a.jsx(bn.StrictMode,{children:a.jsx(dI,{children:a.jsx(JE,{})})}));export{uu as E,nh as W,_l as a,mg as b,fl as d,_E as u};
