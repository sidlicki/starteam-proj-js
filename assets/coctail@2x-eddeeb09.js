function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:ze}=Object.prototype,{getPrototypeOf:ee}=Object,v=(e=>t=>{const n=ze.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>v(t)===e),M=e=>t=>typeof t===e,{isArray:P}=Array,F=M("undefined");function Je(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=A("ArrayBuffer");function $e(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const Ve=M("string"),S=M("function"),Oe=M("number"),q=e=>e!==null&&typeof e=="object",We=e=>e===!0||e===!1,_=e=>{if(v(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ke=A("Date"),Ge=A("File"),Xe=A("Blob"),Qe=A("FileList"),Ze=e=>q(e)&&S(e.pipe),Ye=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=v(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},et=A("URLSearchParams"),tt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!F(e)&&e!==ge;function G(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ae(t,s)||s;_(t[o])&&_(r)?t[o]=G(t[o],r):_(r)?t[o]=G({},r):P(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const nt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&S(s)?e[o]=Se(s,n):e[o]=s},{allOwnKeys:r}),e),rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),st=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ot=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},it=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},at=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Oe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),lt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},dt=A("HTMLFormElement"),ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pt=A("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},ht=e=>{Ce(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return P(e)?r(e):r(String(e).split(t)),n},yt=()=>{},bt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",le="0123456789",xe={DIGIT:le,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+le},Et=(e=16,t=xe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function wt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const St=e=>{const t=new Array(10),n=(r,s)=>{if(q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=P(r)?[]:{};return L(r,(i,l)=>{const d=n(i,s+1);!F(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Rt=A("AsyncFunction"),Ot=e=>e&&(q(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:P,isArrayBuffer:Re,isBuffer:Je,isFormData:Ye,isArrayBufferView:$e,isString:Ve,isNumber:Oe,isBoolean:We,isObject:q,isPlainObject:_,isUndefined:F,isDate:Ke,isFile:Ge,isBlob:Xe,isRegExp:pt,isFunction:S,isStream:Ze,isURLSearchParams:et,isTypedArray:ct,isFileList:Qe,forEach:L,merge:G,extend:nt,trim:tt,stripBOM:rt,inherits:st,toFlatObject:ot,kindOf:v,kindOfTest:A,endsWith:it,toArray:at,forEachEntry:lt,matchAll:ut,isHTMLForm:dt,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:Ce,freezeMethods:ht,toObjectSet:mt,toCamelCase:ft,noop:yt,toFiniteNumber:bt,findKey:Ae,global:ge,isContextDefined:Te,ALPHABET:xe,generateString:Et,isSpecCompliantForm:wt,toJSONObject:St,isAsyncFn:Rt,isThenable:Ot};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=m.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(m,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const At=null;function X(e){return a.isPlainObject(e)||a.isArray(e)}function ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function gt(e){return a.isArray(e)&&!e.some(X)}const Tt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function H(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!a.isUndefined(w[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,h,w){let g=u;if(u&&!w&&typeof u=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&gt(u)||(a.isFileList(u)||a.endsWith(h,"[]"))&&(g=a.toArray(u)))return h=ke(h),g.forEach(function(B,He){!(a.isUndefined(B)||B===null)&&t.append(i===!0?ue([h],He,o):i===null?h:h+"[]",f(B))}),!1}return X(u)?!0:(t.append(ue(w,h,o),f(u)),!1)}const p=[],b=Object.assign(Tt,{defaultVisitor:c,convertValue:f,isVisitable:X});function E(u,h){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(u),a.forEach(u,function(g,R){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(R)?R.trim():R,h,b))===!0&&E(g,h?h.concat(R):[R])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function de(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&H(e,this,t)}const Fe=te.prototype;Fe.append=function(t,n){this._pairs.push([t,n])};Fe.toString=function(t){const n=t?function(r){return t.call(this,r,de)}:de;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ct(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||Ct,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=xt,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt=typeof URLSearchParams<"u"?URLSearchParams:te,Pt=typeof FormData<"u"?FormData:null,kt=typeof Blob<"u"?Blob:null,Ft=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Lt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Pt,Blob:kt},isStandardBrowserEnv:Ft,isStandardBrowserWebWorkerEnv:Lt,protocols:["http","https","file","blob","url","data"]};function Dt(e,t){return H(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Bt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Be(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=_t(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Bt(r),s,n,0)}),n}return null}function Ut(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ne={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return H(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Ut(t)):t}],transformResponse:[function(t){const n=this.transitional||ne.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ne.headers[e]={}});const re=ne,jt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&jt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pe=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function vt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Mt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ht(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,f){const c=k(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||d]=U(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Mt(t)?i(It(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return vt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const l=a.findKey(r,i);l&&(!n||$(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||$(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const l=t?qt(o):String(o).trim();l!==o&&delete n[o],n[l]=U(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pe]=this[pe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=k(i);r[l]||(Ht(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(z);const C=z;function V(e,t){const n=this||re,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jt=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function $t(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!$t(t)?Vt(e,t):t}const Wt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const E=c&&f-c;return E?Math.round(b*1e3/E):void 0}}function he(e,t){let n=0;const r=Gt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const Xt=typeof XMLHttpRequest<"u",Qt=Xt&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+h))}const p=Ue(e.baseURL,e.url);c.open(e.method.toUpperCase(),Le(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=C.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};zt(function(R){n(R),d()},function(R){r(R),d()},w),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||De;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const u=(e.withCredentials||Wt(p))&&e.xsrfCookieName&&Jt.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,w){c.setRequestHeader(w,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new D(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=Kt(p);if(E&&O.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},Q={http:At,xhr:Qt};a.forEach(Q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const me=e=>`- ${e}`,Zt=e=>a.isFunction(e)||e===null||e===!1,je={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Zt(n)&&(r=Q[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(me).join(`
`):" "+me(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Q};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function ye(e){return W(e),e.headers=C.from(e.headers),e.data=V.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),je.getAdapter(e.adapter||re.adapter)(e).then(function(r){return W(e),r.data=V.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return _e(r)||(W(e),r&&r.response&&(r.response.data=V.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const be=e=>e instanceof C?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>s(be(f),be(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==l||(n[c]=b)}),n}const Ie="1.5.1",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ee={};se.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ie+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ee[i]&&(Ee[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function Yt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Z={assertOptions:Yt,validators:se},x=Z.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=C.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let c,p=0,b;if(!d){const u=[ye.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),b=u.length,c=Promise.resolve(n);p<b;)c=c.then(u[p++],u[p++]);return c}b=l.length;let E=n;for(p=0;p<b;){const u=l[p++],h=l[p++];try{E=u(E)}catch(w){h.call(this,w);break}}try{c=ye.call(this,E)}catch(u){return Promise.reject(u)}for(p=0,b=f.length;p<b;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=N(this.defaults,t);const n=Ue(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(N(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const j=I;class oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new D(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new oe(function(s){t=s}),cancel:t}}}const en=oe;function tn(e){return function(n){return e.apply(null,n)}}function nn(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const rn=Y;function ve(e){const t=new j(e),n=Se(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(N(e,s))},n}const y=ve(re);y.Axios=j;y.CanceledError=D;y.CancelToken=en;y.isCancel=_e;y.VERSION=Ie;y.toFormData=H;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=tn;y.isAxiosError=nn;y.mergeConfig=N;y.AxiosHeaders=C;y.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=je.getAdapter;y.HttpStatusCode=rn;y.default=y;const sn=y,Me="https://drinkify.b.goit.study/api/v1",qe=async(e,t={})=>{try{return(await sn.get(e,{params:t})).data}catch{return[]}},mn=async e=>qe(`${Me}/cocktails`,{r:e}),on=async e=>{const n=!Array.isArray(e)?{id:e}:{ids:e.join(",")};return qe(`${Me}/cocktails/lookup`,n)},yn="/starteam-proj-js/assets/sprite-1eb45ddf.svg",K=document.querySelector(".modal-cocktail-content"),an=document.querySelector(".modal-btn-close"),ie=document.querySelector(".overlay"),ae=document.querySelector(".modal"),cn=document.querySelector(".cocktails-list")??document.querySelector(".fav-cocktail-list");let T=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];function ln(e){return e.map(t=>`<li data-id="${t.ingredientId}" class="add-li"><a href="" class="add-two">${t.title}</a>
  </li>`).join("")}function un({drink:e,drinkThumb:t,instructions:n,ingredients:r}){return`<div class="add-cont">
  <img class="modal-cocktail-img" src="${t}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${e}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${ln(r)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${n}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`}cn.addEventListener("click",dn);async function dn(e){if(e.target.nodeName=="BUTTON")try{const t=await on(e.target.id);if(t.length===0){console.log("Error");return}K.innerHTML="",K.innerHTML=un(t[0]),fn();const n=document.querySelector(".modal-add-cocktail-btn-fav"),r=document.querySelector(".modal-remove-cocktail-btn-fav");T.findIndex(o=>o===t[0]._id)!==-1&&(n.classList.add("is-hidden"),r.classList.remove("is-hidden")),n.addEventListener("click",()=>{n.classList.add("is-hidden"),r.classList.remove("is-hidden"),pn(t[0]._id)}),r.addEventListener("click",()=>{n.classList.remove("is-hidden"),r.classList.add("is-hidden"),hn(t[0]._id)}),an.addEventListener("click",we),K.addEventListener("click",o=>{o.target.name=="close-modal"&&we()})}catch(t){console.log(t)}}ie.addEventListener("click",function(){ae.classList.remove("active"),this.classList.remove("active")});function fn(){ie.classList.add("active"),ae.classList.add("active")}function we(){ae.classList.remove("active"),ie.classList.remove("active")}function pn(e){if(T.findIndex(n=>n===e)===-1)return T.push(e),localStorage.setItem("favoriteCocktails",JSON.stringify(T)),T}function hn(e){const t=T.findIndex(n=>n===e);if(t!==-1)return T.splice(t,1),localStorage.setItem("favoriteCocktails",JSON.stringify(T)),T}const bn="/starteam-proj-js/assets/coctail@2x-256bfe20.webp";export{mn as a,bn as d,on as f,yn as s};
