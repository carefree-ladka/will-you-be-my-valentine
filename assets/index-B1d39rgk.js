(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function oy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hh={exports:{}},Io={};var Qg;function ly(){if(Qg)return Io;Qg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=n,Io.jsxs=n,Io}var Kg;function cy(){return Kg||(Kg=1,hh.exports=ly()),hh.exports}var xe=cy(),dh={exports:{}},de={};var Jg;function uy(){if(Jg)return de;Jg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(L,$,pt){this.props=L,this.context=$,this.refs=M,this.updater=pt||b}x.prototype.isReactComponent={},x.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=x.prototype;function N(L,$,pt){this.props=L,this.context=$,this.refs=M,this.updater=pt||b}var U=N.prototype=new P;U.constructor=N,R(U,x.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function H(){}var F={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(L,$,pt){var At=pt.ref;return{$$typeof:r,type:L,key:$,ref:At!==void 0?At:null,props:pt}}function w(L,$){return C(L.type,$,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function st(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pt){return $[pt]})}var at=/\/+/g;function dt(L,$){return typeof L=="object"&&L!==null&&L.key!=null?st(""+L.key):$.toString(36)}function ot(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,$,pt,At,kt){var tt=typeof L;(tt==="undefined"||tt==="boolean")&&(L=null);var ft=!1;if(L===null)ft=!0;else switch(tt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(L.$$typeof){case r:case t:ft=!0;break;case g:return ft=L._init,z(ft(L._payload),$,pt,At,kt)}}if(ft)return kt=kt(L),ft=At===""?"."+dt(L,0):At,I(kt)?(pt="",ft!=null&&(pt=ft.replace(at,"$&/")+"/"),z(kt,$,pt,"",function(Wt){return Wt})):kt!=null&&(V(kt)&&(kt=w(kt,pt+(kt.key==null||L&&L.key===kt.key?"":(""+kt.key).replace(at,"$&/")+"/")+ft)),$.push(kt)),1;ft=0;var Nt=At===""?".":At+":";if(I(L))for(var Ht=0;Ht<L.length;Ht++)At=L[Ht],tt=Nt+dt(At,Ht),ft+=z(At,$,pt,tt,kt);else if(Ht=y(L),typeof Ht=="function")for(L=Ht.call(L),Ht=0;!(At=L.next()).done;)At=At.value,tt=Nt+dt(At,Ht++),ft+=z(At,$,pt,tt,kt);else if(tt==="object"){if(typeof L.then=="function")return z(ot(L),$,pt,At,kt);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ft}function G(L,$,pt){if(L==null)return L;var At=[],kt=0;return z(L,At,"","",function(tt){return $.call(pt,tt,kt++)}),At}function et(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(pt){(L._status===0||L._status===-1)&&(L._status=1,L._result=pt)},function(pt){(L._status===0||L._status===-1)&&(L._status=2,L._result=pt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},yt={map:G,forEach:function(L,$,pt){G(L,function(){$.apply(this,arguments)},pt)},count:function(L){var $=0;return G(L,function(){$++}),$},toArray:function(L){return G(L,function($){return $})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return de.Activity=_,de.Children=yt,de.Component=x,de.Fragment=n,de.Profiler=l,de.PureComponent=N,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,de.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},de.cache=function(L){return function(){return L.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(L,$,pt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=R({},L.props),kt=L.key;if($!=null)for(tt in $.key!==void 0&&(kt=""+$.key),$)!j.call($,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&$.ref===void 0||(At[tt]=$[tt]);var tt=arguments.length-2;if(tt===1)At.children=pt;else if(1<tt){for(var ft=Array(tt),Nt=0;Nt<tt;Nt++)ft[Nt]=arguments[Nt+2];At.children=ft}return C(L.type,kt,At)},de.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},de.createElement=function(L,$,pt){var At,kt={},tt=null;if($!=null)for(At in $.key!==void 0&&(tt=""+$.key),$)j.call($,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(kt[At]=$[At]);var ft=arguments.length-2;if(ft===1)kt.children=pt;else if(1<ft){for(var Nt=Array(ft),Ht=0;Ht<ft;Ht++)Nt[Ht]=arguments[Ht+2];kt.children=Nt}if(L&&L.defaultProps)for(At in ft=L.defaultProps,ft)kt[At]===void 0&&(kt[At]=ft[At]);return C(L,tt,kt)},de.createRef=function(){return{current:null}},de.forwardRef=function(L){return{$$typeof:h,render:L}},de.isValidElement=V,de.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:et}},de.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},de.startTransition=function(L){var $=F.T,pt={};F.T=pt;try{var At=L(),kt=F.S;kt!==null&&kt(pt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(H,Mt)}catch(tt){Mt(tt)}finally{$!==null&&pt.types!==null&&($.types=pt.types),F.T=$}},de.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},de.use=function(L){return F.H.use(L)},de.useActionState=function(L,$,pt){return F.H.useActionState(L,$,pt)},de.useCallback=function(L,$){return F.H.useCallback(L,$)},de.useContext=function(L){return F.H.useContext(L)},de.useDebugValue=function(){},de.useDeferredValue=function(L,$){return F.H.useDeferredValue(L,$)},de.useEffect=function(L,$){return F.H.useEffect(L,$)},de.useEffectEvent=function(L){return F.H.useEffectEvent(L)},de.useId=function(){return F.H.useId()},de.useImperativeHandle=function(L,$,pt){return F.H.useImperativeHandle(L,$,pt)},de.useInsertionEffect=function(L,$){return F.H.useInsertionEffect(L,$)},de.useLayoutEffect=function(L,$){return F.H.useLayoutEffect(L,$)},de.useMemo=function(L,$){return F.H.useMemo(L,$)},de.useOptimistic=function(L,$){return F.H.useOptimistic(L,$)},de.useReducer=function(L,$,pt){return F.H.useReducer(L,$,pt)},de.useRef=function(L){return F.H.useRef(L)},de.useState=function(L){return F.H.useState(L)},de.useSyncExternalStore=function(L,$,pt){return F.H.useSyncExternalStore(L,$,pt)},de.useTransition=function(){return F.H.useTransition()},de.version="19.2.4",de}var $g;function $d(){return $g||($g=1,dh.exports=uy()),dh.exports}var wi=$d();const Jc=oy(wi);var ph={exports:{}},Bo={},mh={exports:{}},gh={};var t_;function fy(){return t_||(t_=1,(function(r){function t(z,G){var et=z.length;z.push(G);t:for(;0<et;){var Mt=et-1>>>1,yt=z[Mt];if(0<l(yt,G))z[Mt]=G,z[et]=yt,et=Mt;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var G=z[0],et=z.pop();if(et!==G){z[0]=et;t:for(var Mt=0,yt=z.length,L=yt>>>1;Mt<L;){var $=2*(Mt+1)-1,pt=z[$],At=$+1,kt=z[At];if(0>l(pt,et))At<yt&&0>l(kt,pt)?(z[Mt]=kt,z[At]=et,Mt=At):(z[Mt]=pt,z[$]=et,Mt=$);else if(At<yt&&0>l(kt,et))z[Mt]=kt,z[At]=et,Mt=At;else break t}}return G}function l(z,G){var et=z.sortIndex-G.sortIndex;return et!==0?et:z.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,S=3,y=!1,b=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var G=n(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=z)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=n(p)}}function I(z){if(R=!1,U(z),!b)if(n(m)!==null)b=!0,H||(H=!0,st());else{var G=n(p);G!==null&&ot(I,G.startTime-z)}}var H=!1,F=-1,j=5,C=-1;function w(){return M?!0:!(r.unstable_now()-C<j)}function V(){if(M=!1,H){var z=r.unstable_now();C=z;var G=!0;try{t:{b=!1,R&&(R=!1,P(F),F=-1),y=!0;var et=S;try{e:{for(U(z),_=n(m);_!==null&&!(_.expirationTime>z&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,S=_.priorityLevel;var yt=Mt(_.expirationTime<=z);if(z=r.unstable_now(),typeof yt=="function"){_.callback=yt,U(z),G=!0;break e}_===n(m)&&s(m),U(z)}else s(m);_=n(m)}if(_!==null)G=!0;else{var L=n(p);L!==null&&ot(I,L.startTime-z),G=!1}}break t}finally{_=null,S=et,y=!1}G=void 0}}finally{G?st():H=!1}}}var st;if(typeof N=="function")st=function(){N(V)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=V,st=function(){dt.postMessage(null)}}else st=function(){x(V,0)};function ot(z,G){F=x(function(){z(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(z){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var et=S;S=G;try{return z()}finally{S=et}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var et=S;S=z;try{return G()}finally{S=et}},r.unstable_scheduleCallback=function(z,G,et){var Mt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Mt+et:Mt):et=Mt,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=et+yt,z={id:g++,callback:G,priorityLevel:z,startTime:et,expirationTime:yt,sortIndex:-1},et>Mt?(z.sortIndex=et,t(p,z),n(m)===null&&z===n(p)&&(R?(P(F),F=-1):R=!0,ot(I,et-Mt))):(z.sortIndex=yt,t(m,z),b||y||(b=!0,H||(H=!0,st()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var G=S;return function(){var et=S;S=G;try{return z.apply(this,arguments)}finally{S=et}}}})(gh)),gh}var e_;function hy(){return e_||(e_=1,mh.exports=fy()),mh.exports}var _h={exports:{}},Nn={};var n_;function dy(){if(n_)return Nn;n_=1;var r=$d();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var i_;function py(){if(i_)return _h.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=dy(),_h.exports}var a_;function my(){if(a_)return Bo;a_=1;var r=hy(),t=$d(),n=py();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,o=d;break}if(T===o){v=!0,o=u,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,o=u;break}if(T===o){v=!0,o=d,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:dt(e.type)||"Memo";case j:i=e._payload,e=e._init;try{return dt(e(i))}catch{}}return null}var ot=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Mt=[],yt=-1;function L(e){return{current:e}}function $(e){0>yt||(e.current=Mt[yt],Mt[yt]=null,yt--)}function pt(e,i){yt++,Mt[yt]=e.current,e.current=i}var At=L(null),kt=L(null),tt=L(null),ft=L(null);function Nt(e,i){switch(pt(tt,i),pt(kt,e),pt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?xg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=xg(i),e=Sg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(At),pt(At,e)}function Ht(){$(At),$(kt),$(tt)}function Wt(e){e.memoizedState!==null&&pt(ft,e);var i=At.current,a=Sg(i,e.type);i!==a&&(pt(kt,e),pt(At,a))}function Se(e){kt.current===e&&($(At),$(kt)),ft.current===e&&($(ft),Oo._currentValue=et)}var Ue,ce;function gt(e){if(Ue===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ue=i&&i[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+ce}var Tt=!1;function St(e,i){if(!e||Tt)return"";Tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var it=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){it=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){it=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var B=v.split(`
`),J=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function zt(e,i){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return St(e.type,!1);case 11:return St(e.type.render,!1);case 1:return St(e.type,!0);case 31:return gt("Activity");default:return""}}function O(e){try{var i="",a=null;do i+=zt(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ee=Object.prototype.hasOwnProperty,Bt=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,wt=r.unstable_shouldYield,D=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ct=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Kt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,Qt=r.log,re=r.unstable_setDisableYieldValue,Et=null,Rt=null;function qt(e){if(typeof Qt=="function"&&re(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,e)}catch{}}var Gt=Math.clz32?Math.clz32:k,Lt=Math.log,me=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Lt(e)/me|0)|0}var Pt=256,Ct=262144,Vt=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=bt(o):(v&=T,v!==0?u=bt(v):a||(a=T&~e,a!==0&&(u=bt(a))))):(T=o&~d,T!==0?u=bt(T):v!==0?u=bt(v):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ue(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Ce(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Un(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,i,a,o,u,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Gt(a),_t=1<<ht;T[ht]=0,B[ht]=-1;var it=J[ht];if(it!==null)for(J[ht]=null,ht=0;ht<it.length;ht++){var lt=it[ht];lt!==null&&(lt.lane&=-536870913)}a&=~_t}o!==0&&cl(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function cl(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Gt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Gt(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function zs(e,i){var a=i&-i;return a=(a&42)!==0?1:qr(a),(a&(e.suspendedLanes|i))!==0?0:a}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Xg(e.type))}function Ni(e,i){var a=G.p;try{return G.p=e,i()}finally{G.p=a}}var si=Math.random().toString(36).slice(2),rn="__reactFiber$"+si,xn="__reactProps$"+si,xi="__reactContainer$"+si,Is="__reactEvents$"+si,Bs="__reactListeners$"+si,ul="__reactHandles$"+si,Zr="__reactResources$"+si,ss="__reactMarker$"+si;function jr(e){delete e[rn],delete e[xn],delete e[Is],delete e[Bs],delete e[ul]}function Ea(e){var i=e[rn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[xi]||a[rn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Rg(e);e!==null;){if(a=e[rn])return a;e=Rg(e)}return i}e=a,a=e.parentNode}return null}function ba(e){if(e=e[rn]||e[xi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function rs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ta(e){var i=e[Zr];return i||(i=e[Zr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function A(e){e[ss]=!0}var q=new Set,rt={};function nt(e,i){Q(e,i),Q(e+"Capture",i)}function Q(e,i){for(rt[e]=i,e=0;e<i.length;e++)q.add(i[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yt={},Ft={};function Zt(e){return ee.call(Ft,e)?!0:ee.call(Yt,e)?!1:Ot.test(e)?Ft[e]=!0:(Yt[e]=!0,!1)}function Jt(e,i,a){if(Zt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function se(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function $t(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function oe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ye(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function Fe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function fe(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Sn(e,i,a,o,u,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+oe(i)):e.value!==""+oe(i)&&(e.value=""+oe(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?yn(e,v,oe(i)):a!=null?yn(e,v,oe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+oe(T):e.removeAttribute("name")}function Zi(e,i,a,o,u,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ye(e);return}a=a!=null?""+oe(a):"",i=i!=null?""+oe(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ye(e)}function yn(e,i,a){i==="number"&&ne(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ri(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+oe(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Be(e,i,a){if(i!=null&&(i=""+oe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+oe(a):""}function Mn(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=oe(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function hn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||En.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Hs(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&bn(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&bn(e,d,i[d])}function Si(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function vp(e){var i=ba(e);if(i&&(e=i.stateNode)){var a=e[xn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));Sn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Fe(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&ri(e,!!a.multiple,i,!1)}}}var uu=!1;function xp(e,i,a){if(uu)return e(i,a);uu=!0;try{var o=e(i);return o}finally{if(uu=!1,(Gs!==null||Vs!==null)&&(Jl(),Gs&&(i=Gs,e=Vs,Vs=Gs=null,vp(i),e)))for(i=0;i<e.length;i++)vp(e[i])}}function Qr(e,i){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Qi)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{fu=!1}var Aa=null,hu=null,hl=null;function Sp(){if(hl)return hl;var e,i=hu,a=i.length,o,u="value"in Aa?Aa.value:Aa.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&i[a-o]===u[d-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function yp(){return!1}function Bn(e){function i(a,o,u,d,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:yp,this.isPropagationStopped=yp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Bn(os),Jr=_({},os,{view:0,detail:0}),sx=Bn(Jr),du,pu,$r,gl=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(du=e.screenX-$r.screenX,pu=e.screenY-$r.screenY):pu=du=0,$r=e),du)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),Mp=Bn(gl),rx=_({},gl,{dataTransfer:0}),ox=Bn(rx),lx=_({},Jr,{relatedTarget:0}),mu=Bn(lx),cx=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Bn(cx),fx=_({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hx=Bn(fx),dx=_({},os,{data:0}),Ep=Bn(dx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=gx[e])?!!i[e]:!1}function gu(){return _x}var vx=_({},Jr,{key:function(e){if(e.key){var i=px[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=Bn(vx),Sx=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Bn(Sx),yx=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Mx=Bn(yx),Ex=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=Bn(Ex),Tx=_({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Bn(Tx),Rx=_({},os,{newState:0,oldState:0}),Cx=Bn(Rx),wx=[9,13,27,32],_u=Qi&&"CompositionEvent"in window,to=null;Qi&&"documentMode"in document&&(to=document.documentMode);var Dx=Qi&&"TextEvent"in window&&!to,Tp=Qi&&(!_u||to&&8<to&&11>=to),Ap=" ",Rp=!1;function Cp(e,i){switch(e){case"keyup":return wx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Ux(e,i){switch(e){case"compositionend":return wp(i);case"keypress":return i.which!==32?null:(Rp=!0,Ap);case"textInput":return e=i.data,e===Ap&&Rp?null:e;default:return null}}function Nx(e,i){if(Xs)return e==="compositionend"||!_u&&Cp(e,i)?(e=Sp(),hl=hu=Aa=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tp&&i.locale!=="ko"?null:i.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Lx[e.type]:i==="textarea"}function Up(e,i,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,i=sc(i,"onChange"),0<i.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var eo=null,no=null;function Ox(e){dg(e,0)}function _l(e){var i=rs(e);if(Fe(i))return e}function Np(e,i){if(e==="change")return i}var Lp=!1;if(Qi){var vu;if(Qi){var xu="oninput"in document;if(!xu){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),xu=typeof Op.oninput=="function"}vu=xu}else vu=!1;Lp=vu&&(!document.documentMode||9<document.documentMode)}function Pp(){eo&&(eo.detachEvent("onpropertychange",zp),no=eo=null)}function zp(e){if(e.propertyName==="value"&&_l(no)){var i=[];Up(i,no,e,cu(e)),xp(Ox,i)}}function Px(e,i,a){e==="focusin"?(Pp(),eo=i,no=a,eo.attachEvent("onpropertychange",zp)):e==="focusout"&&Pp()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(no)}function Fx(e,i){if(e==="click")return _l(i)}function Ix(e,i){if(e==="input"||e==="change")return _l(i)}function Bx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Bx;function io(e,i){if(Zn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ee.call(i,u)||!Zn(e[u],i[u]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,i){var a=Fp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fp(a)}}function Bp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Bp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ne(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ne(e.document)}return i}function Su(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Hx=Qi&&"documentMode"in document&&11>=document.documentMode,ks=null,yu=null,ao=null,Mu=!1;function Gp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||ks==null||ks!==ne(o)||(o=ks,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=sc(yu,"onSelect"),0<o.length&&(i=new ml("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=ks)))}function ls(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ws={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Eu={},Vp={};Qi&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function cs(e){if(Eu[e])return Eu[e];if(!Ws[e])return e;var i=Ws[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vp)return Eu[e]=i[a];return e}var Xp=cs("animationend"),kp=cs("animationiteration"),Wp=cs("animationstart"),Gx=cs("transitionrun"),Vx=cs("transitionstart"),Xx=cs("transitioncancel"),qp=cs("transitionend"),Yp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function yi(e,i){Yp.set(e,i),nt(i,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],qs=0,Tu=0;function xl(){for(var e=qs,i=Tu=qs=0;i<e;){var a=oi[i];oi[i++]=null;var o=oi[i];oi[i++]=null;var u=oi[i];oi[i++]=null;var d=oi[i];if(oi[i++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}d!==0&&Zp(a,u,d)}}function Sl(e,i,a,o){oi[qs++]=e,oi[qs++]=i,oi[qs++]=a,oi[qs++]=o,Tu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Au(e,i,a,o){return Sl(e,i,a,o),yl(e)}function us(e,i){return Sl(e,null,null,i),yl(e)}function Zp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Gt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),d):null}function yl(e){if(50<Ro)throw Ro=0,zf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ys={};function kx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,i,a,o){return new kx(e,i,a,o)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var a=e.alternate;return a===null?(a=jn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ml(e,i,a,o,u,d){var v=0;if(o=e,typeof e=="function")Ru(e)&&(v=1);else if(typeof e=="string")v=jS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=jn(31,a,i,u),e.elementType=C,e.lanes=d,e;case R:return fs(a.children,u,d,i);case M:v=8,u|=24;break;case x:return e=jn(12,a,i,u|2),e.elementType=x,e.lanes=d,e;case I:return e=jn(13,a,i,u),e.elementType=I,e.lanes=d,e;case H:return e=jn(19,a,i,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case P:v=9;break t;case U:v=11;break t;case F:v=14;break t;case j:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=jn(v,a,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function fs(e,i,a,o){return e=jn(7,e,o,i),e.lanes=a,e}function Cu(e,i,a){return e=jn(6,e,null,i),e.lanes=a,e}function Qp(e){var i=jn(18,null,null,0);return i.stateNode=e,i}function wu(e,i,a){return i=jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Kp=new WeakMap;function li(e,i){if(typeof e=="object"&&e!==null){var a=Kp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:O(i)},Kp.set(e,i),i)}return{value:e,source:i,stack:O(i)}}var Zs=[],js=0,El=null,so=0,ci=[],ui=0,Ra=null,Li=1,Oi="";function Ji(e,i){Zs[js++]=so,Zs[js++]=El,El=e,so=i}function Jp(e,i,a){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Ra,Ra=e;var o=Li;e=Oi;var u=32-Gt(o)-1;o&=~(1<<u),a+=1;var d=32-Gt(i)+u;if(30<d){var v=u-u%5;d=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Li=1<<32-Gt(i)+u|a<<u|o,Oi=d+e}else Li=1<<d|a<<u|o,Oi=e}function Du(e){e.return!==null&&(Ji(e,1),Jp(e,1,0))}function Uu(e){for(;e===El;)El=Zs[--js],Zs[js]=null,so=Zs[--js],Zs[js]=null;for(;e===Ra;)Ra=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null}function $p(e,i){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Ra,Li=i.id,Oi=i.overflow,Ra=e}var Tn=null,Ze=null,Ae=!1,Ca=null,fi=!1,Nu=Error(s(519));function wa(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(li(i,e)),Nu}function tm(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[rn]=e,i[xn]=o,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<wo.length;a++)Me(wo[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Zi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Mn(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||_g(i.textContent,a)?(o.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),o.onScroll!=null&&Me("scroll",i),o.onScrollEnd!=null&&Me("scrollend",i),o.onClick!=null&&(i.onclick=ji),i=!0):i=!1,i||wa(e,!0)}function em(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Qs(e){if(e!==Tn)return!1;if(!Ae)return em(e),Ae=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Ze&&wa(e),em(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Ag(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Ag(e)}else i===27?(i=Ze,Xa(e.type)?(e=nh,nh=null,Ze=e):Ze=i):Ze=Tn?di(e.stateNode.nextSibling):null;return!0}function hs(){Ze=Tn=null,Ae=!1}function Lu(){var e=Ca;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Ca=null),e}function ro(e){Ca===null?Ca=[e]:Ca.push(e)}var Ou=L(null),ds=null,$i=null;function Da(e,i,a){pt(Ou,i._currentValue),i._currentValue=a}function ta(e){e._currentValue=Ou.current,$(Ou)}function Pu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function zu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=u;for(var B=0;B<i.length;B++)if(T.context===i[B]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Pu(d.return,a,e),o||(v=null);break t}d=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Pu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(e,i,a,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;Zn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===ft.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}u=u.return}e!==null&&zu(i,e,a,o),i.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){ds=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return nm(ds,e)}function Tl(e,i){return ds===null&&ps(e),nm(e,i)}function nm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else $i=$i.next=i;return a}var Wx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},qx=r.unstable_scheduleCallback,Yx=r.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Wx,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&qx(Yx,function(){e.controller.abort()})}var lo=null,Iu=0,Js=0,$s=null;function Zx(e,i){if(lo===null){var a=lo=[];Iu=0,Js=Vf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,i.then(im,im),i}function im(){if(--Iu===0&&lo!==null){$s!==null&&($s.status="fulfilled");var e=lo;lo=null,Js=0,$s=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function jx(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var am=z.S;z.S=function(e,i){G0=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Zx(e,i),am!==null&&am(e,i)};var ms=L(null);function Bu(){var e=ms.current;return e!==null?e:qe.pooledCache}function Al(e,i){i===null?pt(ms,ms.current):pt(ms,i.pool)}function sm(){var e=Bu();return e===null?null:{parent:on._currentValue,pool:e}}var tr=Error(s(460)),Hu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function rm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function om(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ji,ji),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,cm(e),e;default:if(typeof i.status=="string")i.then(ji,ji);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,cm(e),e}throw _s=i,tr}}function gs(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,tr):a}}var _s=null;function lm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function cm(e){if(e===tr||e===Rl)throw Error(s(483))}var er=null,co=0;function wl(e){var i=co;return co+=1,er===null&&(er=[]),om(er,e,i)}function uo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Dl(e,i){throw i.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function um(e){function i(Y,X){if(e){var K=Y.deletions;K===null?(Y.deletions=[X],Y.flags|=16):K.push(X)}}function a(Y,X){if(!e)return null;for(;X!==null;)i(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Ki(Y,X),Y.index=0,Y.sibling=null,Y}function d(Y,X,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<X?(Y.flags|=67108866,X):K):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,X,K,mt){return X===null||X.tag!==6?(X=Cu(K,Y.mode,mt),X.return=Y,X):(X=u(X,K),X.return=Y,X)}function B(Y,X,K,mt){var ae=K.type;return ae===R?ht(Y,X,K.props.children,mt,K.key):X!==null&&(X.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===j&&gs(ae)===X.type)?(X=u(X,K.props),uo(X,K),X.return=Y,X):(X=Ml(K.type,K.key,K.props,null,Y.mode,mt),uo(X,K),X.return=Y,X)}function J(Y,X,K,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=wu(K,Y.mode,mt),X.return=Y,X):(X=u(X,K.children||[]),X.return=Y,X)}function ht(Y,X,K,mt,ae){return X===null||X.tag!==7?(X=fs(K,Y.mode,mt,ae),X.return=Y,X):(X=u(X,K),X.return=Y,X)}function _t(Y,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cu(""+X,Y.mode,K),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return K=Ml(X.type,X.key,X.props,null,Y.mode,K),uo(K,X),K.return=Y,K;case b:return X=wu(X,Y.mode,K),X.return=Y,X;case j:return X=gs(X),_t(Y,X,K)}if(ot(X)||st(X))return X=fs(X,Y.mode,K,null),X.return=Y,X;if(typeof X.then=="function")return _t(Y,wl(X),K);if(X.$$typeof===N)return _t(Y,Tl(Y,X),K);Dl(Y,X)}return null}function it(Y,X,K,mt){var ae=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return ae!==null?null:T(Y,X,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===ae?B(Y,X,K,mt):null;case b:return K.key===ae?J(Y,X,K,mt):null;case j:return K=gs(K),it(Y,X,K,mt)}if(ot(K)||st(K))return ae!==null?null:ht(Y,X,K,mt,null);if(typeof K.then=="function")return it(Y,X,wl(K),mt);if(K.$$typeof===N)return it(Y,X,Tl(Y,K),mt);Dl(Y,K)}return null}function lt(Y,X,K,mt,ae){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(K)||null,T(X,Y,""+mt,ae);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return Y=Y.get(mt.key===null?K:mt.key)||null,B(X,Y,mt,ae);case b:return Y=Y.get(mt.key===null?K:mt.key)||null,J(X,Y,mt,ae);case j:return mt=gs(mt),lt(Y,X,K,mt,ae)}if(ot(mt)||st(mt))return Y=Y.get(K)||null,ht(X,Y,mt,ae,null);if(typeof mt.then=="function")return lt(Y,X,K,wl(mt),ae);if(mt.$$typeof===N)return lt(Y,X,K,Tl(X,mt),ae);Dl(X,mt)}return null}function jt(Y,X,K,mt){for(var ae=null,Ne=null,te=X,ge=X=0,Te=null;te!==null&&ge<K.length;ge++){te.index>ge?(Te=te,te=null):Te=te.sibling;var Le=it(Y,te,K[ge],mt);if(Le===null){te===null&&(te=Te);break}e&&te&&Le.alternate===null&&i(Y,te),X=d(Le,X,ge),Ne===null?ae=Le:Ne.sibling=Le,Ne=Le,te=Te}if(ge===K.length)return a(Y,te),Ae&&Ji(Y,ge),ae;if(te===null){for(;ge<K.length;ge++)te=_t(Y,K[ge],mt),te!==null&&(X=d(te,X,ge),Ne===null?ae=te:Ne.sibling=te,Ne=te);return Ae&&Ji(Y,ge),ae}for(te=o(te);ge<K.length;ge++)Te=lt(te,Y,ge,K[ge],mt),Te!==null&&(e&&Te.alternate!==null&&te.delete(Te.key===null?ge:Te.key),X=d(Te,X,ge),Ne===null?ae=Te:Ne.sibling=Te,Ne=Te);return e&&te.forEach(function(Za){return i(Y,Za)}),Ae&&Ji(Y,ge),ae}function le(Y,X,K,mt){if(K==null)throw Error(s(151));for(var ae=null,Ne=null,te=X,ge=X=0,Te=null,Le=K.next();te!==null&&!Le.done;ge++,Le=K.next()){te.index>ge?(Te=te,te=null):Te=te.sibling;var Za=it(Y,te,Le.value,mt);if(Za===null){te===null&&(te=Te);break}e&&te&&Za.alternate===null&&i(Y,te),X=d(Za,X,ge),Ne===null?ae=Za:Ne.sibling=Za,Ne=Za,te=Te}if(Le.done)return a(Y,te),Ae&&Ji(Y,ge),ae;if(te===null){for(;!Le.done;ge++,Le=K.next())Le=_t(Y,Le.value,mt),Le!==null&&(X=d(Le,X,ge),Ne===null?ae=Le:Ne.sibling=Le,Ne=Le);return Ae&&Ji(Y,ge),ae}for(te=o(te);!Le.done;ge++,Le=K.next())Le=lt(te,Y,ge,Le.value,mt),Le!==null&&(e&&Le.alternate!==null&&te.delete(Le.key===null?ge:Le.key),X=d(Le,X,ge),Ne===null?ae=Le:Ne.sibling=Le,Ne=Le);return e&&te.forEach(function(ry){return i(Y,ry)}),Ae&&Ji(Y,ge),ae}function We(Y,X,K,mt){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var ae=K.key;X!==null;){if(X.key===ae){if(ae=K.type,ae===R){if(X.tag===7){a(Y,X.sibling),mt=u(X,K.props.children),mt.return=Y,Y=mt;break t}}else if(X.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===j&&gs(ae)===X.type){a(Y,X.sibling),mt=u(X,K.props),uo(mt,K),mt.return=Y,Y=mt;break t}a(Y,X);break}else i(Y,X);X=X.sibling}K.type===R?(mt=fs(K.props.children,Y.mode,mt,K.key),mt.return=Y,Y=mt):(mt=Ml(K.type,K.key,K.props,null,Y.mode,mt),uo(mt,K),mt.return=Y,Y=mt)}return v(Y);case b:t:{for(ae=K.key;X!==null;){if(X.key===ae)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(Y,X.sibling),mt=u(X,K.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,X);break}else i(Y,X);X=X.sibling}mt=wu(K,Y.mode,mt),mt.return=Y,Y=mt}return v(Y);case j:return K=gs(K),We(Y,X,K,mt)}if(ot(K))return jt(Y,X,K,mt);if(st(K)){if(ae=st(K),typeof ae!="function")throw Error(s(150));return K=ae.call(K),le(Y,X,K,mt)}if(typeof K.then=="function")return We(Y,X,wl(K),mt);if(K.$$typeof===N)return We(Y,X,Tl(Y,K),mt);Dl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(Y,X.sibling),mt=u(X,K),mt.return=Y,Y=mt):(a(Y,X),mt=Cu(K,Y.mode,mt),mt.return=Y,Y=mt),v(Y)):a(Y,X)}return function(Y,X,K,mt){try{co=0;var ae=We(Y,X,K,mt);return er=null,ae}catch(te){if(te===tr||te===Rl)throw te;var Ne=jn(29,te,null,Y.mode);return Ne.lanes=mt,Ne.return=Y,Ne}}}var vs=um(!0),fm=um(!1),Ua=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=yl(e),Zp(e,null,a),i}return Sl(e,o,i,a),yl(e)}function fo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Wr(e,a)}}function Xu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var ku=!1;function ho(){if(ku){var e=$s;if(e!==null)throw e}}function po(e,i,a,o){ku=!1;var u=e.updateQueue;Ua=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,J=B.next;B.next=null,v===null?d=J:v.next=J,v=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=J:T.next=J,ht.lastBaseUpdate=B))}if(d!==null){var _t=u.baseState;v=0,ht=J=B=null,T=d;do{var it=T.lane&-536870913,lt=it!==T.lane;if(lt?(be&it)===it:(o&it)===it){it!==0&&it===Js&&(ku=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var jt=e,le=T;it=i;var We=a;switch(le.tag){case 1:if(jt=le.payload,typeof jt=="function"){_t=jt.call(We,_t,it);break t}_t=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=le.payload,it=typeof jt=="function"?jt.call(We,_t,it):jt,it==null)break t;_t=_({},_t,it);break t;case 2:Ua=!0}}it=T.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(J=ht=lt,B=_t):ht=ht.next=lt,v|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=ht,d===null&&(u.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=_t}}function hm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function dm(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hm(a[e],i)}var nr=L(null),Ul=L(0);function pm(e,i){e=ca,pt(Ul,e),pt(nr,i),ca=e|i.baseLanes}function Wu(){pt(Ul,ca),pt(nr,nr.current)}function qu(){ca=Ul.current,$(nr),$(Ul)}var Qn=L(null),hi=null;function Oa(e){var i=e.alternate;pt(an,an.current&1),pt(Qn,e),hi===null&&(i===null||nr.current!==null||i.memoizedState!==null)&&(hi=e)}function Yu(e){pt(an,an.current),pt(Qn,e),hi===null&&(hi=e)}function mm(e){e.tag===22?(pt(an,an.current),pt(Qn,e),hi===null&&(hi=e)):Pa()}function Pa(){pt(an,an.current),pt(Qn,Qn.current)}function Kn(e){$(Qn),hi===e&&(hi=null),$(an)}var an=L(0);function Nl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||eh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ea=0,pe=null,Xe=null,ln=null,Ll=!1,ir=!1,xs=!1,Ol=0,mo=0,ar=null,Qx=0;function tn(){throw Error(s(321))}function Zu(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Zn(e[a],i[a]))return!1;return!0}function ju(e,i,a,o,u,d){return ea=d,pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?Jm:ff,xs=!1,d=a(o,u),xs=!1,ir&&(d=_m(i,a,o,u)),gm(e),d}function gm(e){z.H=vo;var i=Xe!==null&&Xe.next!==null;if(ea=0,ln=Xe=pe=null,Ll=!1,mo=0,ar=null,i)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&bl(e)&&(cn=!0))}function _m(e,i,a,o){pe=e;var u=0;do{if(ir&&(ar=null),mo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,ln=Xe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=$m,d=i(a,o)}while(ir);return d}function Kx(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?go(i):i,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(pe.flags|=1024),i}function Qu(){var e=Ol!==0;return Ol=0,e}function Ku(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Ju(e){if(Ll){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ll=!1}ea=0,ln=Xe=pe=null,ir=!1,mo=Ol=0,ar=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?pe.memoizedState=ln=e:ln=ln.next=e,ln}function sn(){if(Xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var i=ln===null?pe.memoizedState:ln.next;if(i!==null)ln=i,Xe=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},ln===null?pe.memoizedState=ln=e:ln=ln.next=e}return ln}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var i=mo;return mo+=1,ar===null&&(ar=[]),e=om(ar,e,i),i=pe,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?Jm:ff),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===N)return An(e)}throw Error(s(438,String(e)))}function $u(e){var i=null,a=pe.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Pl(),pe.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=w;return i.index++,a}function na(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=sn();return tf(i,Xe,e)}function tf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var T=v=null,B=null,J=i,ht=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(be&_t)===_t:(ea&_t)===_t){var it=J.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Js&&(ht=!0);else if((ea&it)===it){J=J.next,it===Js&&(ht=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=_t,v=d):B=B.next=_t,pe.lanes|=it,Ia|=it;_t=J.action,xs&&a(d,_t),d=J.hasEagerState?J.eagerState:a(d,_t)}else it={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=it,v=d):B=B.next=it,pe.lanes|=_t,Ia|=_t;J=J.next}while(J!==null&&J!==i);if(B===null?v=d:B.next=T,!Zn(d,e.memoizedState)&&(cn=!0,ht&&(a=$s,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ef(e){var i=sn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do d=e(d,v.action),v=v.next;while(v!==u);Zn(d,i.memoizedState)||(cn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function vm(e,i,a){var o=pe,u=sn(),d=Ae;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!Zn((Xe||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,sf(ym.bind(null,o,u,e),[e]),u.getSnapshot!==i||v||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},Sm.bind(null,o,u,a,i),null),qe===null)throw Error(s(349));d||(ea&127)!==0||xm(o,i,a)}return a}function xm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=pe.updateQueue,i===null?(i=Pl(),pe.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Sm(e,i,a,o){i.value=a,i.getSnapshot=o,Mm(i)&&Em(e)}function ym(e,i,a){return a(function(){Mm(i)&&Em(e)})}function Mm(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Zn(e,a)}catch{return!0}}function Em(e){var i=us(e,2);i!==null&&kn(i,e,2)}function nf(e){var i=zn();if(typeof e=="function"){var a=e;if(e=a(),xs){qt(!0);try{a()}finally{qt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},i}function bm(e,i,a,o){return e.baseState=a,tf(e,Xe,typeof o=="function"?o:na)}function Jx(e,i,a,o,u){if(Hl(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Tm(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Tm(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=z.T,v={};z.T=v;try{var T=a(u,o),B=z.S;B!==null&&B(v,T),Am(e,i,T)}catch(J){af(e,i,J)}finally{d!==null&&v.types!==null&&(d.types=v.types),z.T=d}}else try{d=a(u,o),Am(e,i,d)}catch(J){af(e,i,J)}}function Am(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rm(e,i,o)},function(o){return af(e,i,o)}):Rm(e,i,a)}function Rm(e,i,a){i.status="fulfilled",i.value=a,Cm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Tm(e,a)))}function af(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Cm(i),i=i.next;while(i!==o)}e.action=null}function Cm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function wm(e,i){return i}function Dm(e,i){if(Ae){var a=qe.formState;if(a!==null){t:{var o=pe;if(Ae){if(Ze){e:{for(var u=Ze,d=fi;u.nodeType!==8;){if(!d){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=di(u.nextSibling),o=u.data==="F!";break t}}wa(o)}o=!1}o&&(i=a[0])}}return a=zn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:i},a.queue=o,a=jm.bind(null,pe,o),o.dispatch=a,o=nf(!1),d=uf.bind(null,pe,!1,o.queue),o=zn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=Jx.bind(null,pe,u,d,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function Um(e){var i=sn();return Nm(i,Xe,e)}function Nm(e,i,a){if(i=tf(e,i,wm)[0],e=Fl(na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=go(i)}catch(v){throw v===tr?Rl:v}else o=i;i=sn();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(pe.flags|=2048,sr(9,{destroy:void 0},$x.bind(null,u,a),null)),[o,d,e]}function $x(e,i){e.action=i}function Lm(e){var i=sn(),a=Xe;if(a!==null)return Nm(i,a,e);sn(),i=i.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function sr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=pe.updateQueue,i===null&&(i=Pl(),pe.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Om(){return sn().memoizedState}function Il(e,i,a,o){var u=zn();pe.flags|=e,u.memoizedState=sr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,i,a,o){var u=sn();o=o===void 0?null:o;var d=u.memoizedState.inst;Xe!==null&&o!==null&&Zu(o,Xe.memoizedState.deps)?u.memoizedState=sr(i,d,a,o):(pe.flags|=e,u.memoizedState=sr(1|i,d,a,o))}function Pm(e,i){Il(8390656,8,e,i)}function sf(e,i){Bl(2048,8,e,i)}function tS(e){pe.flags|=4;var i=pe.updateQueue;if(i===null)i=Pl(),pe.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function zm(e){var i=sn().memoizedState;return tS({ref:i,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Fm(e,i){return Bl(4,2,e,i)}function Im(e,i){return Bl(4,4,e,i)}function Bm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Hm(e,i,a){a=a!=null?a.concat([e]):null,Bl(4,4,Bm.bind(null,i,e),a)}function rf(){}function Gm(e,i){var a=sn();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Zu(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Vm(e,i){var a=sn();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Zu(i,o[1]))return o[0];if(o=e(),xs){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,i],o}function of(e,i,a){return a===void 0||(ea&1073741824)!==0&&(be&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=X0(),pe.lanes|=e,Ia|=e,a)}function Xm(e,i,a,o){return Zn(a,i)?a:nr.current!==null?(e=of(e,a,o),Zn(e,i)||(cn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(be&261930)===0?(cn=!0,e.memoizedState=a):(e=X0(),pe.lanes|=e,Ia|=e,i)}function km(e,i,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var v=z.T,T={};z.T=T,uf(e,!1,i,a);try{var B=u(),J=z.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=jx(B,o);_o(e,i,ht,ti(e))}else _o(e,i,o,ti(e))}catch(_t){_o(e,i,{then:function(){},status:"rejected",reason:_t},ti())}finally{G.p=d,v!==null&&T.types!==null&&(v.types=T.types),z.T=v}}function eS(){}function lf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=Wm(e).queue;km(e,u,i,et,a===null?eS:function(){return qm(e),a(o)})}function Wm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:et},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function qm(e){var i=Wm(e);i.next===null&&(i=e.alternate.memoizedState),_o(e,i.next.queue,{},ti())}function cf(){return An(Oo)}function Ym(){return sn().memoizedState}function Zm(){return sn().memoizedState}function nS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=ti();e=Na(a);var o=La(i,e,a);o!==null&&(kn(o,i,a),fo(o,i,a)),i={cache:Fu()},e.payload=i;return}i=i.return}}function iS(e,i,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Qm(i,a):(a=Au(e,i,a,o),a!==null&&(kn(a,e,o),Km(a,i,o)))}function jm(e,i,a){var o=ti();_o(e,i,a,o)}function _o(e,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Qm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(u.hasEagerState=!0,u.eagerState=T,Zn(T,v))return Sl(e,i,u,0),qe===null&&xl(),!1}catch{}if(a=Au(e,i,u,o),a!==null)return kn(a,e,o),Km(a,i,o),!0}return!1}function uf(e,i,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(i)throw Error(s(479))}else i=Au(e,a,o,2),i!==null&&kn(i,e,2)}function Hl(e){var i=e.alternate;return e===pe||i!==null&&i===pe}function Qm(e,i){ir=Ll=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Km(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Wr(e,a)}}var vo={readContext:An,use:zl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};vo.useEffectEvent=tn;var Jm={readContext:An,use:zl,useCallback:function(e,i){return zn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:Pm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Il(4194308,4,Bm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Il(4194308,4,e,i)},useInsertionEffect:function(e,i){Il(4,2,e,i)},useMemo:function(e,i){var a=zn();i=i===void 0?null:i;var o=e();if(xs){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=zn();if(a!==void 0){var u=a(i);if(xs){qt(!0);try{a(i)}finally{qt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=iS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var i=zn();return e={current:e},i.memoizedState=e},useState:function(e){e=nf(e);var i=e.queue,a=jm.bind(null,pe,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,i){var a=zn();return of(a,e,i)},useTransition:function(){var e=nf(!1);return e=km.bind(null,pe,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=pe,u=zn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),qe===null)throw Error(s(349));(be&127)!==0||xm(o,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,Pm(ym.bind(null,o,d,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},Sm.bind(null,o,d,a,i),null),a},useId:function(){var e=zn(),i=qe.identifierPrefix;if(Ae){var a=Oi,o=Li;a=(o&~(1<<32-Gt(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Ol++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=Qx++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:cf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var i=zn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=uf.bind(null,pe,!0,a),a.dispatch=i,[e,i]},useMemoCache:$u,useCacheRefresh:function(){return zn().memoizedState=nS.bind(null,pe)},useEffectEvent:function(e){var i=zn(),a={impl:e};return i.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:An,use:zl,useCallback:Gm,useContext:An,useEffect:sf,useImperativeHandle:Hm,useInsertionEffect:Fm,useLayoutEffect:Im,useMemo:Vm,useReducer:Fl,useRef:Om,useState:function(){return Fl(na)},useDebugValue:rf,useDeferredValue:function(e,i){var a=sn();return Xm(a,Xe.memoizedState,e,i)},useTransition:function(){var e=Fl(na)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:cf,useFormState:Um,useActionState:Um,useOptimistic:function(e,i){var a=sn();return bm(a,Xe,e,i)},useMemoCache:$u,useCacheRefresh:Zm};ff.useEffectEvent=zm;var $m={readContext:An,use:zl,useCallback:Gm,useContext:An,useEffect:sf,useImperativeHandle:Hm,useInsertionEffect:Fm,useLayoutEffect:Im,useMemo:Vm,useReducer:ef,useRef:Om,useState:function(){return ef(na)},useDebugValue:rf,useDeferredValue:function(e,i){var a=sn();return Xe===null?of(a,e,i):Xm(a,Xe.memoizedState,e,i)},useTransition:function(){var e=ef(na)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:cf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,i){var a=sn();return Xe!==null?bm(a,Xe,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Zm};$m.useEffectEvent=zm;function hf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:_({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=ti(),u=Na(o);u.payload=i,a!=null&&(u.callback=a),i=La(e,u,o),i!==null&&(kn(i,e,o),fo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=ti(),u=Na(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=La(e,u,o),i!==null&&(kn(i,e,o),fo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=ti(),o=Na(a);o.tag=2,i!=null&&(o.callback=i),i=La(e,o,a),i!==null&&(kn(i,e,a),fo(i,e,a))}};function t0(e,i,a,o,u,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):i.prototype&&i.prototype.isPureReactComponent?!io(a,o)||!io(u,d):!0}function e0(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&df.enqueueReplaceState(i,i.state,null)}function Ss(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function n0(e){vl(e)}function i0(e){console.error(e)}function a0(e){vl(e)}function Gl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function s0(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(e,i,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,i)},a}function r0(e){return e=Na(e),e.tag=3,e}function o0(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){s0(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){s0(i,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function aS(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Ks(i,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?$l():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Bf(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Bf(e,o,u)),!1}throw Error(s(435,a.tag))}return Bf(e,o,u),$l(),!1}if(Ae)return i=Qn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Nu&&(e=Error(s(422),{cause:o}),ro(li(e,a)))):(o!==Nu&&(i=Error(s(423),{cause:o}),ro(li(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=pf(e.stateNode,o,u),Xu(e,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=li(d,a),Ao===null?Ao=[d]:Ao.push(d),en!==4&&(en=2),i===null)return!0;o=li(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=pf(a.stateNode,o,e),Xu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ba===null||!Ba.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=r0(u),o0(u,e,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),cn=!1;function Rn(e,i,a,o){i.child=e===null?fm(i,null,a,o):vs(i,e.child,a,o)}function l0(e,i,a,o,u){a=a.render;var d=i.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return ps(i),o=ju(e,i,a,v,d,u),T=Qu(),e!==null&&!cn?(Ku(e,i,u),ia(e,i,u)):(Ae&&T&&Du(i),i.flags|=1,Rn(e,i,o,u),i.child)}function c0(e,i,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Ru(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,u0(e,i,d,o,u)):(e=Ml(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Ef(e,u)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(v,o)&&e.ref===i.ref)return ia(e,i,u)}return i.flags|=1,e=Ki(d,o),e.ref=i.ref,e.return=i,i.child=e}function u0(e,i,a,o,u){if(e!==null){var d=e.memoizedProps;if(io(d,o)&&e.ref===i.ref)if(cn=!1,i.pendingProps=o=d,Ef(e,u))(e.flags&131072)!==0&&(cn=!0);else return i.lanes=e.lanes,ia(e,i,u)}return gf(e,i,a,o,u)}function f0(e,i,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return h0(e,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(i,d!==null?d.cachePool:null),d!==null?pm(i,d):Wu(),mm(i);else return o=i.lanes=536870912,h0(e,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Al(i,d.cachePool),pm(i,d),Pa(),i.memoizedState=null):(e!==null&&Al(i,null),Wu(),Pa());return Rn(e,i,u,a),i.child}function xo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function h0(e,i,a,o,u){var d=Bu();return d=d===null?null:{parent:on._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Al(i,null),Wu(),mm(i),e!==null&&Ks(e,i,o,!0),i.childLanes=u,null}function Vl(e,i){return i=kl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function d0(e,i,a){return vs(i,e.child,null,a),e=Vl(i,i.pendingProps),e.flags|=2,Kn(i),i.memoizedState=null,e}function sS(e,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Vl(i,o),i.lanes=536870912,xo(null,e);if(Yu(i),(e=Ze)?(e=Tg(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=i,i.child=a,Tn=i,Ze=null)):e=null,e===null)throw wa(i);return i.lanes=536870912,null}return Vl(i,o)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(Yu(i),u)if(i.flags&256)i.flags&=-257,i=d0(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(cn||Ks(e,i,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=qe,o!==null&&(v=zs(o,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,us(e,v),kn(o,e,v),mf;$l(),i=d0(e,i,a)}else e=d.treeContext,Ze=di(v.nextSibling),Tn=i,Ae=!0,Ca=null,fi=!1,e!==null&&$p(i,e),i=Vl(i,o),i.flags|=4096;return i}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Xl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function gf(e,i,a,o,u){return ps(i),a=ju(e,i,a,o,void 0,u),o=Qu(),e!==null&&!cn?(Ku(e,i,u),ia(e,i,u)):(Ae&&o&&Du(i),i.flags|=1,Rn(e,i,a,u),i.child)}function p0(e,i,a,o,u,d){return ps(i),i.updateQueue=null,a=_m(i,o,a,u),gm(e),o=Qu(),e!==null&&!cn?(Ku(e,i,d),ia(e,i,d)):(Ae&&o&&Du(i),i.flags|=1,Rn(e,i,a,d),i.child)}function m0(e,i,a,o,u){if(ps(i),i.stateNode===null){var d=Ys,v=a.contextType;typeof v=="object"&&v!==null&&(d=An(v)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=df,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Gu(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?An(v):Ys,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(hf(i,a,v,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&df.enqueueReplaceState(d,d.state,null),po(i,o,d,u),ho(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,B=Ss(a,T);d.props=B;var J=d.context,ht=a.contextType;v=Ys,typeof ht=="object"&&ht!==null&&(v=An(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||J!==v)&&e0(i,d,o,v),Ua=!1;var it=i.memoizedState;d.state=it,po(i,o,d,u),ho(),J=i.memoizedState,T||it!==J||Ua?(typeof _t=="function"&&(hf(i,a,_t,o),J=i.memoizedState),(B=Ua||t0(i,a,B,o,it,J,v))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=J),d.props=o,d.state=J,d.context=v,o=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Vu(e,i),v=i.memoizedProps,ht=Ss(a,v),d.props=ht,_t=i.pendingProps,it=d.context,J=a.contextType,B=Ys,typeof J=="object"&&J!==null&&(B=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==_t||it!==B)&&e0(i,d,o,B),Ua=!1,it=i.memoizedState,d.state=it,po(i,o,d,u),ho();var lt=i.memoizedState;v!==_t||it!==lt||Ua||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof T=="function"&&(hf(i,a,T,o),lt=i.memoizedState),(ht=Ua||t0(i,a,ht,o,it,lt,B)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,lt,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,lt,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=lt),d.props=o,d.state=lt,d.context=B,o=ht):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Xl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=vs(i,e.child,null,u),i.child=vs(i,null,a,u)):Rn(e,i,a,u),i.memoizedState=d.state,e=i.child):e=ia(e,i,u),e}function g0(e,i,a,o){return hs(),i.flags|=256,Rn(e,i,a,o),i.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:sm()}}function xf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=$n),e}function _0(e,i,a){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),v&&(u=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ae){if(u?Oa(i):Pa(),(e=Ze)?(e=Tg(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=i,i.child=a,Tn=i,Ze=null)):e=null,e===null)throw wa(i);return eh(e)?i.lanes=32:i.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Pa(),u=i.mode,T=kl({mode:"hidden",children:T},u),o=fs(o,u,a,null),T.return=i,o.return=i,T.sibling=o,i.child=T,o=i.child,o.memoizedState=vf(a),o.childLanes=xf(e,v,a),i.memoizedState=_f,xo(null,o)):(Oa(i),Sf(i,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(d)i.flags&256?(Oa(i),i.flags&=-257,i=yf(e,i,a)):i.memoizedState!==null?(Pa(),i.child=e.child,i.flags|=128,i=null):(Pa(),T=o.fallback,u=i.mode,o=kl({mode:"visible",children:o.children},u),T=fs(T,u,a,null),T.flags|=2,o.return=i,T.return=i,o.sibling=T,i.child=o,vs(i,e.child,null,a),o=i.child,o.memoizedState=vf(a),o.childLanes=xf(e,v,a),i.memoizedState=_f,i=xo(null,o));else if(Oa(i),eh(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var J=v.dgst;v=J,o=Error(s(419)),o.stack="",o.digest=v,ro({value:o,source:null,stack:null}),i=yf(e,i,a)}else if(cn||Ks(e,i,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=qe,v!==null&&(o=zs(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,us(e,o),kn(v,e,o),mf;th(T)||$l(),i=yf(e,i,a)}else th(T)?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,Ze=di(T.nextSibling),Tn=i,Ae=!0,Ca=null,fi=!1,e!==null&&$p(i,e),i=Sf(i,o.children),i.flags|=4096);return i}return u?(Pa(),T=o.fallback,u=i.mode,B=e.child,J=B.sibling,o=Ki(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?T=Ki(J,T):(T=fs(T,u,a,null),T.flags|=2),T.return=i,o.return=i,o.sibling=T,i.child=o,xo(null,o),o=i.child,T=e.child.memoizedState,T===null?T=vf(a):(u=T.cachePool,u!==null?(B=on._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=sm(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=xf(e,v,a),i.memoizedState=_f,xo(e.child,o)):(Oa(i),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Sf(e,i){return i=kl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function kl(e,i){return e=jn(22,e,null,i),e.lanes=0,e}function yf(e,i,a){return vs(i,e.child,null,a),e=Sf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function v0(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Pu(e.return,i,a)}function Mf(e,i,a,o,u,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=d)}function x0(e,i,a){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var v=an.current,T=(v&2)!==0;if(T?(v=v&1|2,i.flags|=128):v&=1,pt(an,v),Rn(e,i,o,a),o=Ae?so:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&v0(e,a,i);else if(e.tag===19)v0(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Mf(i,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(i,!0,a,null,d,o);break;case"together":Mf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ia(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ia|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Ks(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ki(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Ef(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function rS(e,i,a){switch(i.tag){case 3:Nt(i,i.stateNode.containerInfo),Da(i,on,e.memoizedState.cache),hs();break;case 27:case 5:Wt(i);break;case 4:Nt(i,i.stateNode.containerInfo);break;case 10:Da(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Yu(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(i),i.flags|=128,null):(a&i.child.childLanes)!==0?_0(e,i,a):(Oa(i),e=ia(e,i,a),e!==null?e.sibling:null);Oa(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Ks(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return x0(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(an,an.current),o)break;return null;case 22:return i.lanes=0,f0(e,i,a,i.pendingProps);case 24:Da(i,on,e.memoizedState.cache)}return ia(e,i,a)}function S0(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)cn=!0;else{if(!Ef(e,a)&&(i.flags&128)===0)return cn=!1,rS(e,i,a);cn=(e.flags&131072)!==0}else cn=!1,Ae&&(i.flags&1048576)!==0&&Jp(i,so,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=gs(i.elementType),i.type=e,typeof e=="function")Ru(e)?(o=Ss(e,o),i.tag=1,i=m0(null,i,e,o,a)):(i.tag=0,i=gf(null,i,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){i.tag=11,i=l0(null,i,e,o,a);break t}else if(u===F){i.tag=14,i=c0(null,i,e,o,a);break t}}throw i=dt(e)||e,Error(s(306,i,""))}}return i;case 0:return gf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Ss(o,i.pendingProps),m0(e,i,o,u,a);case 3:t:{if(Nt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Vu(e,i),po(i,o,null,a);var v=i.memoizedState;if(o=v.cache,Da(i,on,o),o!==d.cache&&zu(i,[on],a,!0),ho(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=g0(e,i,o,a);break t}else if(o!==u){u=li(Error(s(424)),i),ro(u),i=g0(e,i,o,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=di(e.firstChild),Tn=i,Ae=!0,Ca=null,fi=!0,a=fm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),o===u){i=ia(e,i,a);break t}Rn(e,i,o,a)}i=i.child}return i;case 26:return Xl(e,i),e===null?(a=Ug(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ae||(a=i.type,e=i.pendingProps,o=rc(tt.current).createElement(a),o[rn]=i,o[xn]=e,Cn(o,a,e),A(o),i.stateNode=o):i.memoizedState=Ug(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Wt(i),e===null&&Ae&&(o=i.stateNode=Cg(i.type,i.pendingProps,tt.current),Tn=i,fi=!0,u=Ze,Xa(i.type)?(nh=u,Ze=di(o.firstChild)):Ze=u),Rn(e,i,i.pendingProps.children,a),Xl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ae&&((u=o=Ze)&&(o=zS(o,i.type,i.pendingProps,fi),o!==null?(i.stateNode=o,Tn=i,Ze=di(o.firstChild),fi=!1,u=!0):u=!1),u||wa(i)),Wt(i),u=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,Kf(u,d)?o=null:v!==null&&Kf(u,v)&&(i.flags|=32),i.memoizedState!==null&&(u=ju(e,i,Kx,null,null,a),Oo._currentValue=u),Xl(e,i),Rn(e,i,o,a),i.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=FS(a,i.pendingProps,fi),a!==null?(i.stateNode=a,Tn=i,Ze=null,e=!0):e=!1),e||wa(i)),null;case 13:return _0(e,i,a);case 4:return Nt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=vs(i,null,o,a):Rn(e,i,o,a),i.child;case 11:return l0(e,i,i.type,i.pendingProps,a);case 7:return Rn(e,i,i.pendingProps,a),i.child;case 8:return Rn(e,i,i.pendingProps.children,a),i.child;case 12:return Rn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Da(i,i.type,o.value),Rn(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,ps(i),u=An(u),o=o(u),i.flags|=1,Rn(e,i,o,a),i.child;case 14:return c0(e,i,i.type,i.pendingProps,a);case 15:return u0(e,i,i.type,i.pendingProps,a);case 19:return x0(e,i,a);case 31:return sS(e,i,a);case 22:return f0(e,i,a,i.pendingProps);case 24:return ps(i),o=An(on),e===null?(u=Bu(),u===null&&(u=qe,d=Fu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:o,cache:u},Gu(i),Da(i,on,u)):((e.lanes&a)!==0&&(Vu(e,i),po(i,null,null,a),ho()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Da(i,on,o)):(o=d.cache,Da(i,on,o),o!==u.cache&&zu(i,[on],a,!0))),Rn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function aa(e){e.flags|=4}function bf(e,i,a,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Y0())e.flags|=8192;else throw _s=Cl,Hu}else e.flags&=-16777217}function y0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(i))if(Y0())e.flags|=8192;else throw _s=Cl,Hu}function Wl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,cr|=i)}function So(e,i){if(!Ae)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function oS(e,i,a){var o=i.pendingProps;switch(Uu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ta(on),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(i)?aa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Lu())),je(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(aa(i),d!==null?(je(i),y0(i,d)):(je(i),bf(i,u,null,o,a))):d?d!==e.memoizedState?(aa(i),je(i),y0(i,d)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(i),je(i),bf(i,u,e,o,a)),null;case 27:if(Se(i),a=tt.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&aa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}e=At.current,Qs(i)?tm(i):(e=Cg(u,o,a),i.stateNode=e,aa(i))}return je(i),null;case 5:if(Se(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&aa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}if(d=At.current,Qs(i))tm(i);else{var v=rc(tt.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}d[rn]=i,d[xn]=o;t:for(v=i.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===i)break t;for(;v.sibling===null;){if(v.return===null||v.return===i)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}i.stateNode=d;t:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&aa(i)}}return je(i),bf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&aa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=tt.current,Qs(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_g(e.nodeValue,a)),e||wa(i,!0)}else e=rc(e).createTextNode(o),e[rn]=i,i.stateNode=e}return je(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=Qs(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(Kn(i),i):(Kn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Qs(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Kn(i),i):(Kn(i),null)}return Kn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),Wl(i,i.updateQueue),je(i),null);case 4:return Ht(),e===null&&qf(i.stateNode.containerInfo),je(i),null;case 10:return ta(i.type),je(i),null;case 19:if($(an),o=i.memoizedState,o===null)return je(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)So(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Nl(e),d!==null){for(i.flags|=128,So(o,!1),e=d.updateQueue,i.updateQueue=e,Wl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)jp(a,e),a=a.sibling;return pt(an,an.current&1|2),Ae&&Ji(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&E()>Ql&&(i.flags|=128,u=!0,So(o,!1),i.lanes=4194304)}else{if(!u)if(e=Nl(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Wl(i,e),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ae)return je(i),null}else 2*E()-o.renderingStartTime>Ql&&a!==536870912&&(i.flags|=128,u=!0,So(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=an.current,pt(an,u?a&1|2:a&1),Ae&&Ji(i,o.treeForkCount),e):(je(i),null);case 22:case 23:return Kn(i),qu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),a=i.updateQueue,a!==null&&Wl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&$(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ta(on),je(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function lS(e,i){switch(Uu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ta(on),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Se(i),null;case 31:if(i.memoizedState!==null){if(Kn(i),i.alternate===null)throw Error(s(340));hs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Kn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));hs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(an),null;case 4:return Ht(),null;case 10:return ta(i.type),null;case 22:case 23:return Kn(i),qu(),e!==null&&$(ms),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ta(on),null;case 25:return null;default:return null}}function M0(e,i){switch(Uu(i),i.tag){case 3:ta(on),Ht();break;case 26:case 27:case 5:Se(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&Kn(i);break;case 13:Kn(i);break;case 19:$(an);break;case 10:ta(i.type);break;case 22:case 23:Kn(i),qu(),e!==null&&$(ms);break;case 24:ta(on)}}function yo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==u)}}catch(T){Ge(i,i.return,T)}}function za(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=i;var B=a,J=T;try{J()}catch(ht){Ge(u,B,ht)}}}o=o.next}while(o!==d)}}catch(ht){Ge(i,i.return,ht)}}function E0(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{dm(i,a)}catch(o){Ge(e,e.return,o)}}}function b0(e,i,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,i,o)}}function Mo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,i,u)}}function Pi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,i,u)}else a.current=null}function T0(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Tf(e,i,a){try{var o=e.stateNode;DS(o,e.type,a,i),o[xn]=i}catch(u){Ge(e,e.return,u)}}function A0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||A0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ji));else if(o!==4&&(o===27&&Xa(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Rf(e,i,a),e=e.sibling;e!==null;)Rf(e,i,a),e=e.sibling}function ql(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,i,a),e=e.sibling;e!==null;)ql(e,i,a),e=e.sibling}function R0(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Cn(i,o,a),i[rn]=e,i[xn]=a}catch(d){Ge(e,e.return,d)}}var sa=!1,un=!1,Cf=!1,C0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function cS(e,i){if(e=e.containerInfo,jf=dc,e=Hp(e),Su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,B=-1,J=0,ht=0,_t=e,it=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(T=v+u),_t!==d||o!==0&&_t.nodeType!==3||(B=v+o),_t.nodeType===3&&(v+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)it=_t,_t=lt;for(;;){if(_t===e)break e;if(it===a&&++J===u&&(T=v),it===d&&++ht===o&&(B=v),(lt=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=lt}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:e,selectionRange:a},dc=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var jt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(jt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){Ge(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function w0(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&yo(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Ge(a,a.return,v)}else{var u=Ss(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(a,a.return,v)}}o&64&&E0(a),o&512&&Mo(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{dm(e,i)}catch(v){Ge(a,a.return,v)}}break;case 27:i===null&&o&4&&R0(a);case 26:case 5:oa(e,a),i===null&&o&4&&T0(a),o&512&&Mo(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&N0(e,a);break;case 13:oa(e,a),o&4&&L0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vS.bind(null,a),IS(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){i=i!==null&&i.memoizedState!==null||un,u=sa;var d=un;sa=o,(un=i)&&!d?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,un=d}break;case 30:break;default:oa(e,a)}}function D0(e){var i=e.alternate;i!==null&&(e.alternate=null,D0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&jr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Hn=!1;function ra(e,i,a){for(a=a.child;a!==null;)U0(e,i,a),a=a.sibling}function U0(e,i,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:un||Pi(a,i),ra(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Pi(a,i);var o=Ke,u=Hn;Xa(a.type)&&(Ke=a.stateNode,Hn=!1),ra(e,i,a),Uo(a.stateNode),Ke=o,Hn=u;break;case 5:un||Pi(a,i);case 6:if(o=Ke,u=Hn,Ke=null,ra(e,i,a),Ke=o,Hn=u,Ke!==null)if(Hn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(d){Ge(a,i,d)}else try{Ke.removeChild(a.stateNode)}catch(d){Ge(a,i,d)}break;case 18:Ke!==null&&(Hn?(e=Ke,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):Eg(Ke,a.stateNode));break;case 4:o=Ke,u=Hn,Ke=a.stateNode.containerInfo,Hn=!0,ra(e,i,a),Ke=o,Hn=u;break;case 0:case 11:case 14:case 15:za(2,a,i),un||za(4,a,i),ra(e,i,a);break;case 1:un||(Pi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&b0(a,i,o)),ra(e,i,a);break;case 21:ra(e,i,a);break;case 22:un=(o=un)||a.memoizedState!==null,ra(e,i,a),un=o;break;default:ra(e,i,a)}}function N0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Ge(i,i.return,a)}}}function L0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Ge(i,i.return,a)}}function uS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new C0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new C0),i;default:throw Error(s(435,e.tag))}}function Yl(e,i){var a=uS(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=xS.bind(null,e,o);o.then(u,u)}})}function Gn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Xa(T.type)){Ke=T.stateNode,Hn=!1;break t}break;case 5:Ke=T.stateNode,Hn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(Ke===null)throw Error(s(160));U0(d,v,u),Ke=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)O0(i,e),i=i.sibling}var Mi=null;function O0(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(i,e),Vn(e),o&4&&(za(3,e,e.return),yo(3,e),za(5,e,e.return));break;case 1:Gn(i,e),Vn(e),o&512&&(un||a===null||Pi(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Gn(i,e),Vn(e),o&512&&(un||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ss]||d[rn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[rn]=e,A(d),o=d;break t;case"link":var v=Og("link","href",u).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(v=Og("meta","content",u).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[rn]=e,A(d),o=d}e.stateNode=o}else Pg(u,e.type,e.stateNode);else e.stateNode=Lg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Pg(u,e.type,e.stateNode):Lg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(i,e),Vn(e),o&512&&(un||a===null||Pi(a,a.return)),a!==null&&o&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(i,e),Vn(e),o&512&&(un||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{hn(u,"")}catch(jt){Ge(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(Gn(i,e),Vn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){Ge(e,e.return,jt)}}break;case 3:if(cc=null,u=Mi,Mi=oc(i.containerInfo),Gn(i,e),Mi=u,Vn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(i.containerInfo)}catch(jt){Ge(e,e.return,jt)}Cf&&(Cf=!1,P0(e));break;case 4:o=Mi,Mi=oc(e.stateNode.containerInfo),Gn(i,e),Vn(e),Mi=o;break;case 12:Gn(i,e),Vn(e);break;case 31:Gn(i,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 13:Gn(i,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=sa,ht=un;if(sa=J||u,un=ht||B,Gn(i,e),un=ht,sa=J,Vn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||B||sa||un||ys(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){B=a=i;try{if(d=B.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var _t=B.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(jt){Ge(B,B.return,jt)}}}else if(i.tag===6){if(a===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(jt){Ge(B,B.return,jt)}}}else if(i.tag===18){if(a===null){B=i;try{var lt=B.stateNode;u?bg(lt,!0):bg(B.stateNode,!1)}catch(jt){Ge(B,B.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(e,a))));break;case 19:Gn(i,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 30:break;case 21:break;default:Gn(i,e),Vn(e)}}function Vn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(A0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Af(e);ql(e,d,u);break;case 5:var v=a.stateNode;a.flags&32&&(hn(v,""),a.flags&=-33);var T=Af(e);ql(e,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,J=Af(e);Rf(e,J,B);break;default:throw Error(s(161))}}catch(ht){Ge(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function P0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;P0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function oa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)w0(e,i.alternate,i),i=i.sibling}function ys(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:za(4,i,i.return),ys(i);break;case 1:Pi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&b0(i,i.return,a),ys(i);break;case 27:Uo(i.stateNode);case 26:case 5:Pi(i,i.return),ys(i);break;case 22:i.memoizedState===null&&ys(i);break;case 30:ys(i);break;default:ys(i)}e=e.sibling}}function la(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:la(u,d,a),yo(4,d);break;case 1:if(la(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ge(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)hm(B[u],T)}catch(J){Ge(o,o.return,J)}}a&&v&64&&E0(d),Mo(d,d.return);break;case 27:R0(d);case 26:case 5:la(u,d,a),a&&o===null&&v&4&&T0(d),Mo(d,d.return);break;case 12:la(u,d,a);break;case 31:la(u,d,a),a&&v&4&&N0(u,d);break;case 13:la(u,d,a),a&&v&4&&L0(u,d);break;case 22:d.memoizedState===null&&la(u,d,a),Mo(d,d.return);break;case 30:break;default:la(u,d,a)}i=i.sibling}}function wf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Df(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&oo(e))}function Ei(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)z0(e,i,a,o),i=i.sibling}function z0(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ei(e,i,a,o),u&2048&&yo(9,i);break;case 1:Ei(e,i,a,o);break;case 3:Ei(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Ei(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ge(i,i.return,B)}}else Ei(e,i,a,o);break;case 31:Ei(e,i,a,o);break;case 13:Ei(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?Ei(e,i,a,o):Eo(e,i):d._visibility&2?Ei(e,i,a,o):(d._visibility|=2,rr(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&wf(v,i);break;case 24:Ei(e,i,a,o),u&2048&&Df(i.alternate,i);break;default:Ei(e,i,a,o)}}function rr(e,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,v=i,T=a,B=o,J=v.flags;switch(v.tag){case 0:case 11:case 15:rr(d,v,T,B,u),yo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?rr(d,v,T,B,u):Eo(d,v):(ht._visibility|=2,rr(d,v,T,B,u)),u&&J&2048&&wf(v.alternate,v);break;case 24:rr(d,v,T,B,u),u&&J&2048&&Df(v.alternate,v);break;default:rr(d,v,T,B,u)}i=i.sibling}}function Eo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&wf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Df(o.alternate,o);break;default:Eo(a,o)}i=i.sibling}}var bo=8192;function or(e,i,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)F0(e,i,a),e=e.sibling}function F0(e,i,a){switch(e.tag){case 26:or(e,i,a),e.flags&bo&&e.memoizedState!==null&&QS(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:or(e,i,a);break;case 3:case 4:var o=Mi;Mi=oc(e.stateNode.containerInfo),or(e,i,a),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,or(e,i,a),bo=o):or(e,i,a));break;default:or(e,i,a)}}function I0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function To(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];_n=o,H0(o,e)}I0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)B0(e),e=e.sibling}function B0(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&za(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zl(e)):To(e);break;default:To(e)}}function Zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];_n=o,H0(o,e)}I0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:za(8,i,i.return),Zl(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(i));break;default:Zl(i)}e=e.sibling}}function H0(e,i){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:za(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(D0(o),o===a){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var fS={getCacheForType:function(e){var i=An(on),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return An(on).controller.signal}},hS=typeof WeakMap=="function"?WeakMap:Map,ze=0,qe=null,ye=null,be=0,He=0,Jn=null,Fa=!1,lr=!1,Uf=!1,ca=0,en=0,Ia=0,Ms=0,Nf=0,$n=0,cr=0,Ao=null,Xn=null,Lf=!1,jl=0,G0=0,Ql=1/0,Kl=null,Ba=null,dn=0,Ha=null,ur=null,ua=0,Of=0,Pf=null,V0=null,Ro=0,zf=null;function ti(){return(ze&2)!==0&&be!==0?be&-be:z.T!==null?Vf():Yr()}function X0(){if($n===0)if((be&536870912)===0||Ae){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),$n=e}else $n=536870912;return e=Qn.current,e!==null&&(e.flags|=32),$n}function kn(e,i,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Ga(e,be,$n,!1)),Un(e,a),((ze&2)===0||e!==qe)&&(e===qe&&((ze&2)===0&&(Ms|=a),en===4&&Ga(e,be,$n,!1)),zi(e))}function k0(e,i,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Dt(e,i),u=o?mS(e,i):If(e,i,!0),d=o;do{if(u===0){lr&&!o&&Ga(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!dS(a)){u=If(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;u=Ao;var B=T.current.memoizedState.isDehydrated;if(B&&(fr(T,v).flags|=256),v=If(T,v,!1),v!==2){if(Uf&&!B){T.errorRecoveryDisabledLanes|=d,Ms|=d,u=4;break t}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){fr(e,0),Ga(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ga(o,i,$n,!Fa);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=jl+300-E(),10<u)){if(Ga(o,i,$n,!Fa),vt(o,0,!0)!==0)break t;ua=i,o.timeoutHandle=yg(W0.bind(null,o,a,Xn,Kl,Lf,i,$n,Ms,cr,Fa,d,"Throttled",-0,0),u);break t}W0(o,a,Xn,Kl,Lf,i,$n,Ms,cr,Fa,d,null,-0,0)}}break}while(!0);zi(e)}function W0(e,i,a,o,u,d,v,T,B,J,ht,_t,it,lt){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},F0(i,d,_t);var jt=(d&62914560)===d?jl-E():(d&4194048)===d?G0-E():0;if(jt=KS(_t,jt),jt!==null){ua=d,e.cancelPendingCommit=jt($0.bind(null,e,i,d,a,o,u,v,T,B,ht,_t,null,it,lt)),Ga(e,d,v,!J);return}}$0(e,i,d,a,o,u,v,T,B)}function dS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ga(e,i,a,o){i&=~Nf,i&=~Ms,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Gt(u),v=1<<d;o[d]=-1,u&=~v}a!==0&&cl(e,a,i)}function Jl(){return(ze&6)===0?(Co(0),!1):!0}function Ff(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,$i=ds=null,Ju(e),er=null,co=0,e=ye;for(;e!==null;)M0(e.alternate,e),e=e.return;ye=null}}function fr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,LS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Ff(),qe=e,ye=a=Ki(e.current,null),be=i,He=0,Jn=null,Fa=!1,lr=Dt(e,i),Uf=!1,cr=$n=Nf=Ms=Ia=en=0,Xn=Ao=null,Lf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Gt(o),d=1<<u;i|=e[u],o&=~d}return ca=i,xl(),a}function q0(e,i){pe=null,z.H=vo,i===tr||i===Rl?(i=lm(),He=3):i===Hu?(i=lm(),He=4):He=i===mf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jn=i,ye===null&&(en=1,Gl(e,li(i,e.current)))}function Y0(){var e=Qn.current;return e===null?!0:(be&4194048)===be?hi===null:(be&62914560)===be||(be&536870912)!==0?e===hi:!1}function Z0(){var e=z.H;return z.H=vo,e===null?vo:e}function j0(){var e=z.A;return z.A=fS,e}function $l(){en=4,Fa||(be&4194048)!==be&&Qn.current!==null||(lr=!0),(Ia&134217727)===0&&(Ms&134217727)===0||qe===null||Ga(qe,be,$n,!1)}function If(e,i,a){var o=ze;ze|=2;var u=Z0(),d=j0();(qe!==e||be!==i)&&(Kl=null,fr(e,i)),i=!1;var v=en;t:do try{if(He!==0&&ye!==null){var T=ye,B=Jn;switch(He){case 8:Ff(),v=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(i=!0);var J=He;if(He=0,Jn=null,hr(e,T,B,J),a&&lr){v=0;break t}break;default:J=He,He=0,Jn=null,hr(e,T,B,J)}}pS(),v=en;break}catch(ht){q0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,$i=ds=null,ze=o,z.H=u,z.A=d,ye===null&&(qe=null,be=0,xl()),v}function pS(){for(;ye!==null;)Q0(ye)}function mS(e,i){var a=ze;ze|=2;var o=Z0(),u=j0();qe!==e||be!==i?(Kl=null,Ql=E()+500,fr(e,i)):lr=Dt(e,i);t:do try{if(He!==0&&ye!==null){i=ye;var d=Jn;e:switch(He){case 1:He=0,Jn=null,hr(e,i,d,1);break;case 2:case 9:if(rm(d)){He=0,Jn=null,K0(i);break}i=function(){He!==2&&He!==9||qe!==e||(He=7),zi(e)},d.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:rm(d)?(He=0,Jn=null,K0(i)):(He=0,Jn=null,hr(e,i,d,7));break;case 5:var v=null;switch(ye.tag){case 26:v=ye.memoizedState;case 5:case 27:var T=ye;if(v?zg(v):T.stateNode.complete){He=0,Jn=null;var B=T.sibling;if(B!==null)ye=B;else{var J=T.return;J!==null?(ye=J,tc(J)):ye=null}break e}}He=0,Jn=null,hr(e,i,d,5);break;case 6:He=0,Jn=null,hr(e,i,d,6);break;case 8:Ff(),en=6;break t;default:throw Error(s(462))}}gS();break}catch(ht){q0(e,ht)}while(!0);return $i=ds=null,z.H=o,z.A=u,ze=a,ye!==null?0:(qe=null,be=0,xl(),en)}function gS(){for(;ye!==null&&!wt();)Q0(ye)}function Q0(e){var i=S0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,i===null?tc(e):ye=i}function K0(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=p0(a,i,i.pendingProps,i.type,void 0,be);break;case 11:i=p0(a,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:Ju(i);default:M0(a,i),i=ye=jp(i,ca),i=S0(a,i,ca)}e.memoizedProps=e.pendingProps,i===null?tc(e):ye=i}function hr(e,i,a,o){$i=ds=null,Ju(i),er=null,co=0;var u=i.return;try{if(aS(e,u,i,a,be)){en=1,Gl(e,li(a,e.current)),ye=null;return}}catch(d){if(u!==null)throw ye=u,d;en=1,Gl(e,li(a,e.current)),ye=null;return}i.flags&32768?(Ae||o===1?e=!0:lr||(be&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),J0(i,e)):tc(i)}function tc(e){var i=e;do{if((i.flags&32768)!==0){J0(i,Fa);return}e=i.return;var a=oS(i.alternate,i,ca);if(a!==null){ye=a;return}if(i=i.sibling,i!==null){ye=i;return}ye=i=e}while(i!==null);en===0&&(en=5)}function J0(e,i){do{var a=lS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);en=6,ye=null}function $0(e,i,a,o,u,d,v,T,B){e.cancelPendingCommit=null;do ec();while(dn!==0);if((ze&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Tu,vi(e,a,d,v,T,B),e===qe&&(ye=qe=null,be=0),ur=i,Ha=e,ua=a,Of=d,Pf=u,V0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,SS(ut,function(){return ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=G.p,G.p=2,v=ze,ze|=4;try{cS(e,i,a)}finally{ze=v,G.p=u,z.T=o}}dn=1,tg(),eg(),ng()}}function tg(){if(dn===1){dn=0;var e=Ha,i=ur,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{O0(i,e);var d=Qf,v=Hp(e.containerInfo),T=d.focusedElem,B=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Bp(T.ownerDocument.documentElement,T)){if(B!==null&&Su(T)){var J=B.start,ht=B.end;if(ht===void 0&&(ht=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var lt=it.getSelection(),jt=T.textContent.length,le=Math.min(B.start,jt),We=B.end===void 0?le:Math.min(B.end,jt);!lt.extend&&le>We&&(v=We,We=le,le=v);var Y=Ip(T,le),X=Ip(T,We);if(Y&&X&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var K=_t.createRange();K.setStart(Y.node,Y.offset),lt.removeAllRanges(),le>We?(lt.addRange(K),lt.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),lt.addRange(K))}}}}for(_t=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}dc=!!jf,Qf=jf=null}finally{ze=u,G.p=o,z.T=a}}e.current=i,dn=2}}function eg(){if(dn===2){dn=0;var e=Ha,i=ur,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{w0(e,i.alternate,i)}finally{ze=u,G.p=o,z.T=a}}dn=3}}function ng(){if(dn===4||dn===3){dn=0,D();var e=Ha,i=ur,a=ua,o=V0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?dn=5:(dn=0,ur=Ha=null,ig(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),Fs(a),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,u=G.p,G.p=2,z.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];d(T.value,{componentStack:T.stack})}}finally{z.T=i,G.p=u}}(ua&3)!==0&&ec(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?Ro++:(Ro=0,zf=e):Ro=0,Co(0)}}function ig(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,oo(i)))}function ec(){return tg(),eg(),ng(),ag()}function ag(){if(dn!==5)return!1;var e=Ha,i=Of;Of=0;var a=Fs(ua),o=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=Pf,Pf=null;var d=Ha,v=ua;if(dn=0,ur=Ha=null,ua=0,(ze&6)!==0)throw Error(s(331));var T=ze;if(ze|=4,B0(d.current),z0(d,d.current,v,a),ze=T,Co(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,d)}catch{}return!0}finally{G.p=u,z.T=o,ig(e,i)}}function sg(e,i,a){i=li(a,i),i=pf(e.stateNode,i,2),e=La(e,i,2),e!==null&&(Un(e,2),zi(e))}function Ge(e,i,a){if(e.tag===3)sg(e,e,a);else for(;i!==null;){if(i.tag===3){sg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){e=li(a,e),a=r0(2),o=La(i,a,2),o!==null&&(o0(a,o,i,e),Un(o,2),zi(o));break}}i=i.return}}function Bf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new hS;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(Uf=!0,u.add(a),e=_S.bind(null,e,i,a),i.then(e,e))}function _S(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>E()-jl?(ze&2)===0&&fr(e,0):Nf|=a,cr===be&&(cr=0)),zi(e)}function rg(e,i){i===0&&(i=Ie()),e=us(e,i),e!==null&&(Un(e,i),zi(e))}function vS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),rg(e,a)}function xS(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),rg(e,a)}function SS(e,i){return Bt(e,i)}var nc=null,dr=null,Hf=!1,ic=!1,Gf=!1,Va=0;function zi(e){e!==dr&&e.next===null&&(dr===null?nc=dr=e:dr=dr.next=e),ic=!0,Hf||(Hf=!0,MS())}function Co(e,i){if(!Gf&&ic){Gf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var v=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Gt(42|e)+1)-1,d&=u&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,ug(o,d))}else d=be,d=vt(o,o===qe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Dt(o,d)||(a=!0,ug(o,d));o=o.next}while(a);Gf=!1}}function yS(){og()}function og(){ic=Hf=!1;var e=0;Va!==0&&NS()&&(e=Va);for(var i=E(),a=null,o=nc;o!==null;){var u=o.next,d=lg(o,i);d===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(d&3)!==0)&&(ic=!0)),o=u}dn!==0&&dn!==5||Co(e),Va!==0&&(Va=0)}function lg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Gt(d),T=1<<v,B=u[v];B===-1?((T&a)===0||(T&o)!==0)&&(u[v]=ue(T,i)):B<=i&&(e.expiredLanes|=T),d&=~T}if(i=qe,a=be,a=vt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&ie(o),Fs(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ut;break;default:a=ut}return o=cg.bind(null,e),a=Bt(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function cg(e,i){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=be;return o=vt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(k0(e,o,i),lg(e,E()),e.callbackNode!=null&&e.callbackNode===a?cg.bind(null,e):null)}function ug(e,i){if(ec())return null;k0(e,i,!0)}function MS(){OS(function(){(ze&6)!==0?Bt(ct,yS):og()})}function Vf(){if(Va===0){var e=Js;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),Va=e}return Va}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function hg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function ES(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var d=fg((u[xn]||null).action),v=o.submitter;v&&(i=(i=v[xn]||null)?fg(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ml("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Va!==0){var B=v?hg(u,v):new FormData(u);lf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(T.preventDefault(),B=v?hg(u,v):new FormData(u),lf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Xf=0;Xf<bu.length;Xf++){var kf=bu[Xf],bS=kf.toLowerCase(),TS=kf[0].toUpperCase()+kf.slice(1);yi(bS,"on"+TS)}yi(Xp,"onAnimationEnd"),yi(kp,"onAnimationIteration"),yi(Wp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Gx,"onTransitionRun"),yi(Vx,"onTransitionStart"),yi(Xx,"onTransitionCancel"),yi(qp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function dg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var v=o.length-1;0<=v;v--){var T=o[v],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=J;try{d(u)}catch(ht){vl(ht)}u.currentTarget=null,d=B}else for(v=0;v<o.length;v++){if(T=o[v],B=T.instance,J=T.currentTarget,T=T.listener,B!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=J;try{d(u)}catch(ht){vl(ht)}u.currentTarget=null,d=B}}}}function Me(e,i){var a=i[Is];a===void 0&&(a=i[Is]=new Set);var o=e+"__bubble";a.has(o)||(pg(i,e,2,!1),a.add(o))}function Wf(e,i,a){var o=0;i&&(o|=4),pg(a,e,o,i)}var ac="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[ac]){e[ac]=!0,q.forEach(function(a){a!=="selectionchange"&&(AS.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ac]||(i[ac]=!0,Wf("selectionchange",!1,i))}}function pg(e,i,a,o){switch(Xg(i)){case 2:var u=ty;break;case 8:u=ey;break;default:u=oh}a=u.bind(null,i,a,e),u=void 0,!fu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function Yf(e,i,a,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Ea(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=d=v;continue t}T=T.parentNode}}o=o.return}xp(function(){var J=d,ht=cu(a),_t=[];t:{var it=Yp.get(e);if(it!==void 0){var lt=ml,jt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":lt=xx;break;case"focusin":jt="focus",lt=mu;break;case"focusout":jt="blur",lt=mu;break;case"beforeblur":case"afterblur":lt=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Mx;break;case Xp:case kp:case Wp:lt=ux;break;case qp:lt=bx;break;case"scroll":case"scrollend":lt=sx;break;case"wheel":lt=Ax;break;case"copy":case"cut":case"paste":lt=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=bp;break;case"toggle":case"beforetoggle":lt=Cx}var le=(i&4)!==0,We=!le&&(e==="scroll"||e==="scrollend"),Y=le?it!==null?it+"Capture":null:it;le=[];for(var X=J,K;X!==null;){var mt=X;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||Y===null||(mt=Qr(X,Y),mt!=null&&le.push(Do(X,mt,K))),We)break;X=X.return}0<le.length&&(it=new lt(it,jt,null,a,ht),_t.push({event:it,listeners:le}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==lu&&(jt=a.relatedTarget||a.fromElement)&&(Ea(jt)||jt[xi]))break t;if((lt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(jt=a.relatedTarget||a.toElement,lt=J,jt=jt?Ea(jt):null,jt!==null&&(We=c(jt),le=jt.tag,jt!==We||le!==5&&le!==27&&le!==6)&&(jt=null)):(lt=null,jt=J),lt!==jt)){if(le=Mp,mt="onMouseLeave",Y="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(le=bp,mt="onPointerLeave",Y="onPointerEnter",X="pointer"),We=lt==null?it:rs(lt),K=jt==null?it:rs(jt),it=new le(mt,X+"leave",lt,a,ht),it.target=We,it.relatedTarget=K,mt=null,Ea(ht)===J&&(le=new le(Y,X+"enter",jt,a,ht),le.target=K,le.relatedTarget=We,mt=le),We=mt,lt&&jt)e:{for(le=RS,Y=lt,X=jt,K=0,mt=Y;mt;mt=le(mt))K++;mt=0;for(var ae=X;ae;ae=le(ae))mt++;for(;0<K-mt;)Y=le(Y),K--;for(;0<mt-K;)X=le(X),mt--;for(;K--;){if(Y===X||X!==null&&Y===X.alternate){le=Y;break e}Y=le(Y),X=le(X)}le=null}else le=null;lt!==null&&mg(_t,it,lt,le,!1),jt!==null&&We!==null&&mg(_t,We,jt,le,!0)}}t:{if(it=J?rs(J):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ne=Np;else if(Dp(it))if(Lp)Ne=Ix;else{Ne=zx;var te=Px}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Si(J.elementType)&&(Ne=Np):Ne=Fx;if(Ne&&(Ne=Ne(e,J))){Up(_t,Ne,a,ht);break t}te&&te(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&yn(it,"number",it.value)}switch(te=J?rs(J):window,e){case"focusin":(Dp(te)||te.contentEditable==="true")&&(ks=te,yu=J,ao=null);break;case"focusout":ao=yu=ks=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Gp(_t,a,ht);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Gp(_t,a,ht)}var ge;if(_u)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Xs?Cp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Tp&&a.locale!=="ko"&&(Xs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Xs&&(ge=Sp()):(Aa=ht,hu="value"in Aa?Aa.value:Aa.textContent,Xs=!0)),te=sc(J,Te),0<te.length&&(Te=new Ep(Te,e,null,a,ht),_t.push({event:Te,listeners:te}),ge?Te.data=ge:(ge=wp(a),ge!==null&&(Te.data=ge)))),(ge=Dx?Ux(e,a):Nx(e,a))&&(Te=sc(J,"onBeforeInput"),0<Te.length&&(te=new Ep("onBeforeInput","beforeinput",null,a,ht),_t.push({event:te,listeners:Te}),te.data=ge)),ES(_t,e,J,a,ht)}dg(_t,i)})}function Do(e,i,a){return{instance:e,listener:i,currentTarget:a}}function sc(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Qr(e,a),u!=null&&o.unshift(Do(e,u,d)),u=Qr(e,i),u!=null&&o.push(Do(e,u,d))),e.tag===3)return o;e=e.return}return[]}function RS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mg(e,i,a,o,u){for(var d=i._reactName,v=[];a!==null&&a!==o;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||J===null||(B=J,u?(J=Qr(a,d),J!=null&&v.unshift(Do(a,J,B))):u||(J=Qr(a,d),J!=null&&v.push(Do(a,J,B)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var CS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(CS,`
`).replace(wS,"")}function _g(e,i){return i=gg(i),gg(e)===i}function ke(e,i,a,o,u,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||hn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&hn(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,o);break;case"style":Hs(e,o,d);break;case"data":if(i!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&ke(e,i,"name",u.name,u,null),ke(e,i,"formEncType",u.formEncType,u,null),ke(e,i,"formMethod",u.formMethod,u,null),ke(e,i,"formTarget",u.formTarget,u,null)):(ke(e,i,"encType",u.encType,u,null),ke(e,i,"method",u.method,u,null),ke(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Jt(e,"popover",o);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ix.get(a)||a,Jt(e,a,o))}}function Zf(e,i,a,o,u,d){switch(a){case"style":Hs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?hn(e,o):(typeof o=="number"||typeof o=="bigint")&&hn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Jt(e,a,o)}}}function Cn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ke(e,i,d,v,a,null)}}u&&ke(e,i,"srcSet",a.srcSet,a,null),o&&ke(e,i,"src",a.src,a,null);return;case"input":Me("invalid",e);var T=d=v=u=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":v=ht;break;case"checked":B=ht;break;case"defaultChecked":J=ht;break;case"value":d=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,i));break;default:ke(e,i,o,ht,a,null)}}Zi(e,d,T,B,J,v,u,!1);return;case"select":Me("invalid",e),o=v=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:ke(e,i,u,T,a,null)}i=d,a=v,e.multiple=!!o,i!=null?ri(e,!!o,i,!1):a!=null&&ri(e,!!o,a,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:ke(e,i,v,T,a,null)}Mn(e,o,u,d);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ke(e,i,B,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)Me(wo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ke(e,i,J,o,a,null)}return;default:if(Si(i)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Zf(e,i,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&ke(e,i,T,o,a,null))}function DS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,T=null,B=null,J=null,ht=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:o.hasOwnProperty(lt)||ke(e,i,lt,null,o,_t)}}for(var it in o){var lt=o[it];if(_t=a[it],o.hasOwnProperty(it)&&(lt!=null||_t!=null))switch(it){case"type":d=lt;break;case"name":u=lt;break;case"checked":J=lt;break;case"defaultChecked":ht=lt;break;case"value":v=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,i));break;default:lt!==_t&&ke(e,i,it,lt,o,_t)}}Sn(e,v,T,B,J,ht,d,u);return;case"select":lt=v=T=it=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":lt=B;default:o.hasOwnProperty(d)||ke(e,i,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":it=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==B&&ke(e,i,u,d,o,B)}i=T,a=v,o=lt,it!=null?ri(e,!!a,it,!1):!!o!=!!a&&(i!=null?ri(e,!!a,i,!0):ri(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ke(e,i,T,null,o,u)}for(v in o)if(u=o[v],d=a[v],o.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&ke(e,i,v,u,o,d)}Be(e,it,lt);return;case"option":for(var jt in a)it=a[jt],a.hasOwnProperty(jt)&&it!=null&&!o.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:ke(e,i,jt,null,o,it));for(B in o)it=o[B],lt=a[B],o.hasOwnProperty(B)&&it!==lt&&(it!=null||lt!=null)&&(B==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":ke(e,i,B,it,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)it=a[le],a.hasOwnProperty(le)&&it!=null&&!o.hasOwnProperty(le)&&ke(e,i,le,null,o,it);for(J in o)if(it=o[J],lt=a[J],o.hasOwnProperty(J)&&it!==lt&&(it!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,i));break;default:ke(e,i,J,it,o,lt)}return;default:if(Si(i)){for(var We in a)it=a[We],a.hasOwnProperty(We)&&it!==void 0&&!o.hasOwnProperty(We)&&Zf(e,i,We,void 0,o,it);for(ht in o)it=o[ht],lt=a[ht],!o.hasOwnProperty(ht)||it===lt||it===void 0&&lt===void 0||Zf(e,i,ht,it,o,lt);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!o.hasOwnProperty(Y)&&ke(e,i,Y,null,o,it);for(_t in o)it=o[_t],lt=a[_t],!o.hasOwnProperty(_t)||it===lt||it==null&&lt==null||ke(e,i,_t,it,o,lt)}function vg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,v=u.initiatorType,T=u.duration;if(d&&T&&vg(v)){for(v=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],J=B.startTime;if(J>T)break;var ht=B.transferSize,_t=B.initiatorType;ht&&vg(_t)&&(B=B.responseEnd,v+=ht*(B<T?1:(T-J)/(B-J)))}if(--o,i+=8*(d+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,Qf=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Kf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jf=null;function NS(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(PS)}:yg;function PS(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function Eg(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var v=d.nextSibling,T=d.nodeName;d[ss]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&Uo(e.ownerDocument.body);a=u}while(a);_r(i)}function bg(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function $f(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zS(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ss])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function FS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function Tg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=di(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function IS(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var nh=null;function Ag(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return di(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function Rg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function Cg(e,i,a){switch(i=rc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Uo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);jr(e)}var pi=new Map,wg=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=G.d;G.d={f:BS,r:HS,D:GS,C:VS,L:XS,m:kS,X:qS,S:WS,M:YS};function BS(){var e=fa.f(),i=Jl();return e||i}function HS(e){var i=ba(e);i!==null&&i.tag===5&&i.type==="form"?qm(i):fa.r(e)}var pr=typeof document>"u"?null:document;function Dg(e,i,a){var o=pr;if(o&&typeof i=="string"&&i){var u=fe(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),wg.has(u)||(wg.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Cn(i,"link",e),A(i),o.head.appendChild(i)))}}function GS(e){fa.D(e),Dg("dns-prefetch",e,null)}function VS(e,i){fa.C(e,i),Dg("preconnect",e,i)}function XS(e,i,a){fa.L(e,i,a);var o=pr;if(o&&e&&i){var u='link[rel="preload"][as="'+fe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fe(a.imageSizes)+'"]')):u+='[href="'+fe(e)+'"]';var d=u;switch(i){case"style":d=mr(e);break;case"script":d=gr(e)}pi.has(d)||(e=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),pi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(No(d))||i==="script"&&o.querySelector(Lo(d))||(i=o.createElement("link"),Cn(i,"link",e),A(i),o.head.appendChild(i)))}}function kS(e,i){fa.m(e,i);var a=pr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+fe(o)+'"][href="'+fe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gr(e)}if(!pi.has(d)&&(e=_({rel:"modulepreload",href:e},i),pi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(d)))return}o=a.createElement("link"),Cn(o,"link",e),A(o),a.head.appendChild(o)}}}function WS(e,i,a){fa.S(e,i,a);var o=pr;if(o&&e){var u=Ta(o).hoistableStyles,d=mr(e);i=i||"default";var v=u.get(d);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(No(d)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},a),(a=pi.get(d))&&ih(e,a);var B=v=o.createElement("link");A(B),Cn(B,"link",e),B._p=new Promise(function(J,ht){B.onload=J,B.onerror=ht}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,lc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(d,v)}}}function qS(e,i){fa.X(e,i);var a=pr;if(a&&e){var o=Ta(a).hoistableScripts,u=gr(e),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(e=_({src:e,async:!0},i),(i=pi.get(u))&&ah(e,i),d=a.createElement("script"),A(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function YS(e,i){fa.M(e,i);var a=pr;if(a&&e){var o=Ta(a).hoistableScripts,u=gr(e),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(e=_({src:e,async:!0,type:"module"},i),(i=pi.get(u))&&ah(e,i),d=a.createElement("script"),A(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ug(e,i,a,o){var u=(u=tt.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=mr(a.href),a=Ta(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var d=Ta(u).hoistableStyles,v=d.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=u.querySelector(No(e)))&&!d._p&&(v.instance=d,v.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),d||ZS(u,e,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=gr(a),a=Ta(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+fe(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function Ng(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ZS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",a),A(i),e.head.appendChild(i))}function gr(e){return'[src="'+fe(e)+'"]'}function Lo(e){return"script[async]"+e}function Lg(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(o)return i.instance=o,A(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),A(o),Cn(o,"style",u),lc(o,a.precedence,e),i.instance=o;case"stylesheet":u=mr(a.href);var d=e.querySelector(No(u));if(d)return i.state.loading|=4,i.instance=d,A(d),d;o=Ng(a),(u=pi.get(u))&&ih(o,u),d=(e.ownerDocument||e).createElement("link"),A(d);var v=d;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Cn(d,"link",o),i.state.loading|=4,lc(d,a.precedence,e),i.instance=d;case"script":return d=gr(a.src),(u=e.querySelector(Lo(d)))?(i.instance=u,A(u),u):(o=a,(u=pi.get(d))&&(o=_({},a),ah(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),A(u),Cn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,lc(o,a.precedence,e));return i.instance}function lc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===i)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function ih(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var cc=null;function Og(e,i,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ss]||d[rn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=o.get(v);T?T.push(d):o.set(v,[d])}}return o}function Pg(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function jS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function QS(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(o.href),d=i.querySelector(No(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=uc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,A(d);return}d=i.ownerDocument||i,o=Ng(o),(u=pi.get(u))&&ih(o,u),d=d.createElement("link"),A(d);var v=d;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Cn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var sh=0;function KS(e,i){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&sh===0&&(sh=62500*US());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>sh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(JS,e),fc=null,uc.call(e))}function JS(e,i){if(!(i.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=i.instance,v=u.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,u),a.set(v,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Oo={$$typeof:N,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function $S(e,i,a,o,u,d,v,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Fg(e,i,a,o,u,d,v,T,B,J,ht,_t){return e=new $S(e,i,a,v,B,J,ht,_t,T),i=1,d===!0&&(i|=24),d=jn(3,null,null,i),e.current=d,d.stateNode=e,i=Fu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Gu(d),e}function Ig(e){return e?(e=Ys,e):Ys}function Bg(e,i,a,o,u,d){u=Ig(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=La(e,o,i),a!==null&&(kn(a,e,i),fo(a,e,i))}function Hg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function rh(e,i){Hg(e,i),(e=e.alternate)&&Hg(e,i)}function Gg(e){if(e.tag===13||e.tag===31){var i=us(e,67108864);i!==null&&kn(i,e,67108864),rh(e,67108864)}}function Vg(e){if(e.tag===13||e.tag===31){var i=ti();i=qr(i);var a=us(e,i);a!==null&&kn(a,e,i),rh(e,i)}}var dc=!0;function ty(e,i,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=2,oh(e,i,a,o)}finally{G.p=d,z.T=u}}function ey(e,i,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=8,oh(e,i,a,o)}finally{G.p=d,z.T=u}}function oh(e,i,a,o){if(dc){var u=lh(o);if(u===null)Yf(e,i,o,pc,a),kg(e,o);else if(iy(u,e,i,a,o))o.stopPropagation();else if(kg(e,o),i&4&&-1<ny.indexOf(e)){for(;u!==null;){var d=ba(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=bt(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Gt(v);T.entanglements[1]|=B,v&=~B}zi(d),(ze&6)===0&&(Ql=E()+500,Co(0))}}break;case 31:case 13:T=us(d,2),T!==null&&kn(T,d,2),Jl(),rh(d,2)}if(d=lh(o),d===null&&Yf(e,i,o,pc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Yf(e,i,o,null,a)}}function lh(e){return e=cu(e),ch(e)}var pc=null;function ch(e){if(pc=null,e=Ea(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=h(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return pc=e,null}function Xg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ct:return 2;case xt:return 8;case ut:case Kt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var uh=!1,ka=null,Wa=null,qa=null,Po=new Map,zo=new Map,Ya=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(e,i){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(i.pointerId)}}function Fo(e,i,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ba(i),i!==null&&Gg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function iy(e,i,a,o,u){switch(i){case"focusin":return ka=Fo(ka,e,i,a,o,u),!0;case"dragenter":return Wa=Fo(Wa,e,i,a,o,u),!0;case"mouseover":return qa=Fo(qa,e,i,a,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,Fo(Po.get(d)||null,e,i,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,zo.set(d,Fo(zo.get(d)||null,e,i,a,o,u)),!0}return!1}function Wg(e){var i=Ea(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Ni(e.priority,function(){Vg(a)});return}}else if(i===31){if(i=h(a),i!==null){e.blockedOn=i,Ni(e.priority,function(){Vg(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=lh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return i=ba(a),i!==null&&Gg(i),e.blockedOn=a,!1;i.shift()}return!0}function qg(e,i,a){mc(e)&&a.delete(i)}function ay(){uh=!1,ka!==null&&mc(ka)&&(ka=null),Wa!==null&&mc(Wa)&&(Wa=null),qa!==null&&mc(qa)&&(qa=null),Po.forEach(qg),zo.forEach(qg)}function gc(e,i){e.blockedOn===i&&(e.blockedOn=null,uh||(uh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ay)))}var _c=null;function Yg(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(ch(o||a)===null)continue;break}var d=ba(a);d!==null&&(e.splice(i,3),i-=3,lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function i(B){return gc(B,e)}ka!==null&&gc(ka,e),Wa!==null&&gc(Wa,e),qa!==null&&gc(qa,e),Po.forEach(i),zo.forEach(i);for(var a=0;a<Ya.length;a++){var o=Ya[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Wg(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],v=u[xn]||null;if(typeof d=="function")v||Yg(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[xn]||null)T=v.formAction;else if(ch(u)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Yg(a)}}}function Zg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function fh(e){this._internalRoot=e}vc.prototype.render=fh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=ti();Bg(a,o,e,i,null,null)},vc.prototype.unmount=fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Bg(e.current,2,null,e,null,null),Jl(),i[xi]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Yr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ya.length&&i!==0&&i<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Wg(e)}};var jg=t.version;if(jg!=="19.2.4")throw Error(s(527,jg,"19.2.4"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Et=xc.inject(sy),Rt=xc}catch{}}return Bo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=n0,d=i0,v=a0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),i=Fg(e,1,!1,null,null,a,o,null,u,d,v,Zg),e[xi]=i.current,qf(e),new fh(i)},Bo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=n0,v=i0,T=a0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),i=Fg(e,1,!0,i,a??null,o,u,B,d,v,T,Zg),i.context=Ig(null),a=i.current,o=ti(),o=qr(o),u=Na(o),u.callback=null,La(a,u,o),a=o,i.current.lanes=a,Un(i,a),zi(i),e[xi]=i.current,qf(e),new vc(i)},Bo.version="19.2.4",Bo}var s_;function gy(){if(s_)return ph.exports;s_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ph.exports=my(),ph.exports}var _y=gy();const vy=()=>{const[r,t]=wi.useState({width:typeof window<"u"?window.innerWidth:1e3,height:typeof window<"u"?window.innerHeight:1e3});return wi.useEffect(()=>{const n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),r},pn={colors:{background:"#0a0a0a",heartPrimary:"#ff4d6d",heartSecondary:"#ff9aa2",particleColor:"#ff5c8a",textGlow:"rgba(255, 77, 109, 0.85)"},text:{question:"So umm…",valentine:"Will you be my Valentine? 👀💗",yesButton:"Okay fine 😌💖",maybeButton:"Sochne do 😴",successTitle:"MISSION SUCCESS 🎉",successMessages:["Okay wow, I did NOT expect that 😳💘","Reddit really works in mysterious ways 🫶","I promise not to spam you… much 😇","I’ll reply in more than 1 second, pakka 😌","This just became my favorite notification ever 📱✨"],compliments:[{title:"Neembu Paani Energy 🍋",message:"You’re refreshing, unpredictable, and slightly dangerous if taken lightly. 10/10 vibes 😌✨",delay:0},{title:"Sleepy Head 😴",message:"You give strong ‘replying half-asleep but still funny’ energy, and honestly? It’s adorable.",delay:3e3},{title:"Instant Reply Police 🚨",message:"I love how you roast me for expecting fast replies like ‘kya 1 sec mein reply karun?’ Fair. I deserved that 😭",delay:6e3},{title:"Easily Annoyed™ 😤",message:"You get annoyed easily, but somehow it’s cute and not scary. That’s a rare talent 😌",delay:9e3},{title:"Reddit Fate 🧵",message:"Out of all the weird corners of Reddit, meeting you was unexpectedly… nice ✨",delay:12e3},{title:"Low-Key Funny 😏",message:"You don’t even try to be funny — it just happens. Effortless humor is dangerous, you know?",delay:15e3},{title:"No Pressure Zone 💖",message:"No drama, no rush, no expectations. Just vibes, laughs, and maybe more memes 😌",delay:18e3}]},animation:{heartbeatSpeed:1.3,particleCount:800,confettiPieces:300,messageDelay:1e3,complimentDuration:22e3}},xy=()=>{const[r,t]=wi.useState({showMessage:!1,showConfetti:!1,saidYes:!1,showCompliments:!1,currentCompliment:0,hasStarted:!1});return wi.useEffect(()=>{if(!r.hasStarted)return;const l=setTimeout(()=>{t(f=>({...f,showCompliments:!0}))},500),c=setTimeout(()=>{t(f=>({...f,showCompliments:!1,showMessage:!0}))},pn.animation.complimentDuration+pn.animation.messageDelay);return()=>{clearTimeout(l),clearTimeout(c)}},[r.hasStarted]),wi.useEffect(()=>{if(!r.showCompliments)return;const l=pn.text.compliments;if(r.currentCompliment>=l.length)return;const c=setTimeout(()=>{t(f=>({...f,currentCompliment:f.currentCompliment+1}))},r.currentCompliment===0?l[0].delay+3e3:3e3);return()=>clearTimeout(c)},[r.showCompliments,r.currentCompliment]),{...r,handleStart:()=>{t(l=>({...l,hasStarted:!0}))},handleYesClick:()=>{t(l=>({...l,saidYes:!0,showConfetti:!0}))}}};const tp="182",Sy=0,r_=1,yy=2,qc=1,My=2,Yo=3,as=0,Yn=1,_a=2,xa=0,Lr=1,ed=2,o_=3,l_=4,Ey=5,Ds=100,by=101,Ty=102,Ay=103,Ry=104,Cy=200,wy=201,Dy=202,Uy=203,nd=204,id=205,Ny=206,Ly=207,Oy=208,Py=209,zy=210,Fy=211,Iy=212,By=213,Hy=214,ad=0,sd=1,rd=2,Pr=3,od=4,ld=5,cd=6,ud=7,ep=0,Gy=1,Vy=2,Gi=0,fv=1,hv=2,dv=3,pv=4,mv=5,gv=6,_v=7,vv=300,Os=301,zr=302,fd=303,hd=304,iu=306,dd=1e3,va=1001,pd=1002,wn=1003,Xy=1004,Sc=1005,Pn=1006,vh=1007,Ns=1008,ai=1009,xv=1010,Sv=1011,$o=1012,np=1013,Xi=1014,Bi=1015,ya=1016,ip=1017,ap=1018,tl=1020,yv=35902,Mv=35899,Ev=1021,bv=1022,Ci=1023,Ma=1026,Ls=1027,Tv=1028,sp=1029,Fr=1030,rp=1031,op=1033,Yc=33776,Zc=33777,jc=33778,Qc=33779,md=35840,gd=35841,_d=35842,vd=35843,xd=36196,Sd=37492,yd=37496,Md=37488,Ed=37489,bd=37490,Td=37491,Ad=37808,Rd=37809,Cd=37810,wd=37811,Dd=37812,Ud=37813,Nd=37814,Ld=37815,Od=37816,Pd=37817,zd=37818,Fd=37819,Id=37820,Bd=37821,Hd=36492,Gd=36494,Vd=36495,Xd=36283,kd=36284,Wd=36285,qd=36286,ky=3200,Av=0,Wy=1,ns="",gi="srgb",Ir="srgb-linear",$c="linear",Ve="srgb",vr=7680,c_=519,qy=512,Yy=513,Zy=514,lp=515,jy=516,Qy=517,cp=518,Ky=519,u_=35044,f_="300 es",Hi=2e3,tu=2001;function Rv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jy(){const r=eu("canvas");return r.style.display="block",r}const h_={};function d_(...r){const t="THREE."+r.shift();console.log(t,...r)}function he(...r){const t="THREE."+r.shift();console.warn(t,...r)}function we(...r){const t="THREE."+r.shift();console.error(t,...r)}function el(...r){const t=r.join(" ");t in h_||(h_[t]=!0,he(...r))}function $y(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Gr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,nu=180/Math.PI;function Vr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Ee(r,t,n){return Math.max(t,Math.min(n,r))}function tM(r,t){return(r%t+t)%t}function Sh(r,t,n){return(1-n)*r+n*t}function Ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,n=0){Xt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=c[f+0],y=c[f+1],b=c[f+2],R=c[f+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h>=1){t[n+0]=S,t[n+1]=y,t[n+2]=b,t[n+3]=R;return}if(_!==R||m!==S||p!==y||g!==b){let M=m*S+p*y+g*b+_*R;M<0&&(S=-S,y=-y,b=-b,R=-R,M=-M);let x=1-h;if(M<.9995){const P=Math.acos(M),N=Math.sin(P);x=Math.sin(x*P)/N,h=Math.sin(h*P)/N,m=m*x+S*h,p=p*x+y*h,g=g*x+b*h,_=_*x+R*h}else{m=m*x+S*h,p=p*x+y*h,g=g*x+b*h,_=_*x+R*h;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],S=c[f+1],y=c[f+2],b=c[f+3];return t[n]=h*b+g*_+m*y-p*S,t[n+1]=m*b+g*S+p*_-h*y,t[n+2]=p*b+g*y+h*S-m*_,t[n+3]=g*b-h*_-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),S=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=S*g*_+p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_-S*y*b;break;case"YXZ":this._x=S*g*_+p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_+S*y*b;break;case"ZXY":this._x=S*g*_-p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_-S*y*b;break;case"ZYX":this._x=S*g*_-p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_+S*y*b;break;case"YZX":this._x=S*g*_+p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_-S*y*b;break;case"XZY":this._x=S*g*_-p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_+S*y*b;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],S=s+h+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,n=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(p_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*n-c*l),_=2*(c*s-f*n);return this.x=n+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yh=new Z,p_=new rl;class _e{constructor(t,n,s,l,c,f,h,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,m,p)}set(t,n,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],y=s[5],b=s[8],R=l[0],M=l[3],x=l[6],P=l[1],N=l[4],U=l[7],I=l[2],H=l[5],F=l[8];return c[0]=f*R+h*P+m*I,c[3]=f*M+h*N+m*H,c[6]=f*x+h*U+m*F,c[1]=p*R+g*P+_*I,c[4]=p*M+g*N+_*H,c[7]=p*x+g*U+_*F,c[2]=S*R+y*P+b*I,c[5]=S*M+y*N+b*H,c[8]=S*x+y*U+b*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,S=h*m-g*c,y=p*c-f*m,b=n*_+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(l*p-g*s)*R,t[2]=(h*s-l*f)*R,t[3]=S*R,t[4]=(g*n-l*m)*R,t[5]=(l*c-h*n)*R,t[6]=y*R,t[7]=(s*m-p*n)*R,t[8]=(f*n-s*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Mh.makeScale(t,n)),this}rotate(t){return this.premultiply(Mh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Mh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new _e,m_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const De=eM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class nM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=eu("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=eu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Sa(n[s]/255)*255):n[s]=Sa(n[s]);return{data:n,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iM=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Eh(l[f].image)):c.push(Eh(l[f]))}else c=Eh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let aM=0;const bh=new Z;class In extends Gr{constructor(t=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,s=va,l=va,c=Pn,f=Ns,h=Ci,m=ai,p=In.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Vr(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){he(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dd:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dd:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=vv;In.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,n=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],y=m[5],b=m[9],R=m[2],M=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,U=(y+1)/2,I=(x+1)/2,H=(g+S)/4,F=(_+R)/4,j=(b+M)/4;return N>U&&N>I?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=H/s,c=F/s):U>I?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=H/l,c=j/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=F/c,l=j/c),this.set(s,l,c,n),this}let P=Math.sqrt((M-b)*(M-b)+(_-R)*(_-R)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(_-R)/P,this.z=(S-g)/P,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Gr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new In(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends sM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class Cv extends In{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends In{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),Mc.subVectors(this.max,Go),Sr.subVectors(t.a,Go),yr.subVectors(t.b,Go),Mr.subVectors(t.c,Go),ja.subVectors(yr,Sr),Qa.subVectors(Mr,yr),Es.subVectors(Sr,Mr);let n=[0,-ja.z,ja.y,0,-Qa.z,Qa.y,0,-Es.z,Es.y,ja.z,0,-ja.x,Qa.z,0,-Qa.x,Es.z,0,-Es.x,-ja.y,ja.x,0,-Qa.y,Qa.x,0,-Es.y,Es.x,0];return!Th(n,Sr,yr,Mr,Mc)||(n=[1,0,0,0,1,0,0,0,1],!Th(n,Sr,yr,Mr,Mc))?!1:(Ec.crossVectors(ja,Qa),n=[Ec.x,Ec.y,Ec.z],Th(n,Sr,yr,Mr,Mc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],bi=new Z,yc=new ol,Sr=new Z,yr=new Z,Mr=new Z,ja=new Z,Qa=new Z,Es=new Z,Go=new Z,Mc=new Z,Ec=new Z,bs=new Z;function Th(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){bs.fromArray(r,c);const h=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=n.dot(bs),g=s.dot(bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const oM=new ol,Vo=new Z,Ah=new Z;class au{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):oM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Ah)),this.expandByPoint(Vo.copy(t.center).sub(Ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const da=new Z,Rh=new Z,bc=new Z,Ka=new Z,Ch=new Z,Tc=new Z,wh=new Z;class wv{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,n),da.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Rh.copy(t).add(n).multiplyScalar(.5),bc.copy(n).sub(t).normalize(),Ka.copy(this.origin).sub(Rh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(bc),h=Ka.dot(this.direction),m=-Ka.dot(bc),p=Ka.lengthSq(),g=Math.abs(1-f*f);let _,S,y,b;if(g>0)if(_=f*m-h,S=f*h-m,b=c*g,_>=0)if(S>=-b)if(S<=b){const R=1/g;_*=R,S*=R,y=_*(_+f*S+2*h)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+h)),y=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+h)),y=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-f*c+h)),S=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(_=Math.max(0,-(f*c+h)),S=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+h)),y=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Rh).addScaledVector(bc,S),y}intersectSphere(t,n){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,f=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,f=(t.min.y-S.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(h=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,n,s,l,c){Ch.subVectors(n,t),Tc.subVectors(s,t),wh.crossVectors(Ch,Tc);let f=this.direction.dot(wh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ka.subVectors(this.origin,t);const m=h*this.direction.dot(Tc.crossVectors(Ka,Tc));if(m<0)return null;const p=h*this.direction.dot(Ch.cross(Ka));if(p<0||m+p>f)return null;const g=-h*Ka.dot(wh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,n,s,l,c,f,h,m,p,g,_,S,y,b,R,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,m,p,g,_,S,y,b,R,M)}set(t,n,s,l,c,f,h,m,p,g,_,S,y,b,R,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=y,x[7]=b,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),f=1/Er.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=f*g,y=f*_,b=h*g,R=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+b*p,n[5]=S-R*p,n[9]=-h*m,n[2]=R-S*p,n[6]=b+y*p,n[10]=f*m}else if(t.order==="YXZ"){const S=m*g,y=m*_,b=p*g,R=p*_;n[0]=S+R*h,n[4]=b*h-y,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=y*h-b,n[6]=R+S*h,n[10]=f*m}else if(t.order==="ZXY"){const S=m*g,y=m*_,b=p*g,R=p*_;n[0]=S-R*h,n[4]=-f*_,n[8]=b+y*h,n[1]=y+b*h,n[5]=f*g,n[9]=R-S*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const S=f*g,y=f*_,b=h*g,R=h*_;n[0]=m*g,n[4]=b*p-y,n[8]=S*p+R,n[1]=m*_,n[5]=R*p+S,n[9]=y*p-b,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const S=f*m,y=f*p,b=h*m,R=h*p;n[0]=m*g,n[4]=R-S*_,n[8]=b*_+y,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*_+b,n[10]=S-R*_}else if(t.order==="XZY"){const S=f*m,y=f*p,b=h*m,R=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=S*_+R,n[5]=f*g,n[9]=y*_-b,n[2]=b*_-y,n[6]=h*g,n[10]=R*_+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lM,t,cM)}lookAt(t,n,s){const l=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ja.crossVectors(s,ei),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ja.crossVectors(s,ei)),Ja.normalize(),Ac.crossVectors(ei,Ja),l[0]=Ja.x,l[4]=Ac.x,l[8]=ei.x,l[1]=Ja.y,l[5]=Ac.y,l[9]=ei.y,l[2]=Ja.z,l[6]=Ac.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],y=s[13],b=s[2],R=s[6],M=s[10],x=s[14],P=s[3],N=s[7],U=s[11],I=s[15],H=l[0],F=l[4],j=l[8],C=l[12],w=l[1],V=l[5],st=l[9],at=l[13],dt=l[2],ot=l[6],z=l[10],G=l[14],et=l[3],Mt=l[7],yt=l[11],L=l[15];return c[0]=f*H+h*w+m*dt+p*et,c[4]=f*F+h*V+m*ot+p*Mt,c[8]=f*j+h*st+m*z+p*yt,c[12]=f*C+h*at+m*G+p*L,c[1]=g*H+_*w+S*dt+y*et,c[5]=g*F+_*V+S*ot+y*Mt,c[9]=g*j+_*st+S*z+y*yt,c[13]=g*C+_*at+S*G+y*L,c[2]=b*H+R*w+M*dt+x*et,c[6]=b*F+R*V+M*ot+x*Mt,c[10]=b*j+R*st+M*z+x*yt,c[14]=b*C+R*at+M*G+x*L,c[3]=P*H+N*w+U*dt+I*et,c[7]=P*F+N*V+U*ot+I*Mt,c[11]=P*j+N*st+U*z+I*yt,c[15]=P*C+N*at+U*G+I*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],y=t[14],b=t[3],R=t[7],M=t[11],x=t[15],P=m*y-p*S,N=h*y-p*_,U=h*S-m*_,I=f*y-p*g,H=f*S-m*g,F=f*_-h*g;return n*(R*P-M*N+x*U)-s*(b*P-M*I+x*H)+l*(b*N-R*I+x*F)-c*(b*U-R*H+M*F)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],y=t[11],b=t[12],R=t[13],M=t[14],x=t[15],P=_*M*p-R*S*p+R*m*y-h*M*y-_*m*x+h*S*x,N=b*S*p-g*M*p-b*m*y+f*M*y+g*m*x-f*S*x,U=g*R*p-b*_*p+b*h*y-f*R*y-g*h*x+f*_*x,I=b*_*m-g*R*m-b*h*S+f*R*S+g*h*M-f*_*M,H=n*P+s*N+l*U+c*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=P*F,t[1]=(R*S*c-_*M*c-R*l*y+s*M*y+_*l*x-s*S*x)*F,t[2]=(h*M*c-R*m*c+R*l*p-s*M*p-h*l*x+s*m*x)*F,t[3]=(_*m*c-h*S*c-_*l*p+s*S*p+h*l*y-s*m*y)*F,t[4]=N*F,t[5]=(g*M*c-b*S*c+b*l*y-n*M*y-g*l*x+n*S*x)*F,t[6]=(b*m*c-f*M*c-b*l*p+n*M*p+f*l*x-n*m*x)*F,t[7]=(f*S*c-g*m*c+g*l*p-n*S*p-f*l*y+n*m*y)*F,t[8]=U*F,t[9]=(b*_*c-g*R*c-b*s*y+n*R*y+g*s*x-n*_*x)*F,t[10]=(f*R*c-b*h*c+b*s*p-n*R*p-f*s*x+n*h*x)*F,t[11]=(g*h*c-f*_*c-g*s*p+n*_*p+f*s*y-n*h*y)*F,t[12]=I*F,t[13]=(g*R*l-b*_*l+b*s*S-n*R*S-g*s*M+n*_*M)*F,t[14]=(b*h*l-f*R*l-b*s*m+n*R*m+f*s*M-n*h*M)*F,t[15]=(f*_*l-g*h*l+g*s*m-n*_*m-f*s*S+n*h*S)*F,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,_=h+h,S=c*p,y=c*g,b=c*_,R=f*g,M=f*_,x=h*_,P=m*p,N=m*g,U=m*_,I=s.x,H=s.y,F=s.z;return l[0]=(1-(R+x))*I,l[1]=(y+U)*I,l[2]=(b-N)*I,l[3]=0,l[4]=(y-U)*H,l[5]=(1-(S+x))*H,l[6]=(M+P)*H,l[7]=0,l[8]=(b+N)*F,l[9]=(M-P)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Er.set(l[0],l[1],l[2]).length();const f=Er.set(l[4],l[5],l[6]).length(),h=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,g=1/f,_=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,n.setFromRotationMatrix(Ti),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,l,c,f,h=Hi,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(s-l),S=(n+t)/(n-t),y=(s+l)/(s-l);let b,R;if(m)b=c/(f-c),R=f*c/(f-c);else if(h===Hi)b=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(h===tu)b=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,f,h=Hi,m=!1){const p=this.elements,g=2/(n-t),_=2/(s-l),S=-(n+t)/(n-t),y=-(s+l)/(s-l);let b,R;if(m)b=1/(f-c),R=f/(f-c);else if(h===Hi)b=-2/(f-c),R=-(f+c)/(f-c);else if(h===tu)b=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Er=new Z,Ti=new Je,lM=new Z(0,0,0),cM=new Z(1,1,1),Ja=new Z,Ac=new Z,ei=new Z,__=new Je,v_=new rl;class ki{constructor(t=0,n=0,s=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uM=0;const x_=new Z,br=new rl,pa=new Je,Rc=new Z,Xo=new Z,fM=new Z,hM=new rl,S_=new Z(1,0,0),y_=new Z(0,1,0),M_=new Z(0,0,1),E_={type:"added"},dM={type:"removed"},Tr={type:"childadded",child:null},Dh={type:"childremoved",child:null};class Dn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new Z,n=new ki,s=new rl,l=new Z(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new _e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return br.setFromAxisAngle(t,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,n){return br.setFromAxisAngle(t,n),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(S_,t)}rotateY(t){return this.rotateOnAxis(y_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,n){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(S_,t)}translateY(t){return this.translateOnAxis(y_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Rc.copy(t):Rc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Xo,Rc,this.up):pa.lookAt(Rc,Xo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),br.setFromRotationMatrix(pa),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(dM),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,fM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,hM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),S=f(t.skeletons),y=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new Z(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new Z,ma=new Z,Uh=new Z,ga=new Z,Ar=new Z,Rr=new Z,b_=new Z,Nh=new Z,Lh=new Z,Oh=new Z,Ph=new nn,zh=new nn,Fh=new nn;class Ri{constructor(t=new Z,n=new Z,s=new Z){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Ai.subVectors(t,n),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Ai.subVectors(l,n),ma.subVectors(s,n),Uh.subVectors(t,n);const f=Ai.dot(Ai),h=Ai.dot(ma),m=Ai.dot(Uh),p=ma.dot(ma),g=ma.dot(Uh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const S=1/_,y=(p*m-h*g)*S,b=(f*g-h*m)*S;return c.set(1-y-b,b,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,n,s,l,c,f,h,m){return this.getBarycoord(t,n,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(t,n,s,l,c,f){return Ph.setScalar(0),zh.setScalar(0),Fh.setScalar(0),Ph.fromBufferAttribute(t,n),zh.fromBufferAttribute(t,s),Fh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ph,c.x),f.addScaledVector(zh,c.y),f.addScaledVector(Fh,c.z),f}static isFrontFacing(t,n,s,l){return Ai.subVectors(s,n),ma.subVectors(t,n),Ai.cross(ma).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ai.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ri.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,h;Ar.subVectors(l,s),Rr.subVectors(c,s),Nh.subVectors(t,s);const m=Ar.dot(Nh),p=Rr.dot(Nh);if(m<=0&&p<=0)return n.copy(s);Lh.subVectors(t,l);const g=Ar.dot(Lh),_=Rr.dot(Lh);if(g>=0&&_<=g)return n.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(s).addScaledVector(Ar,f);Oh.subVectors(t,c);const y=Ar.dot(Oh),b=Rr.dot(Oh);if(b>=0&&y<=b)return n.copy(c);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(s).addScaledVector(Rr,h);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return b_.subVectors(c,l),h=(_-g)/(_-g+(y-b)),n.copy(l).addScaledVector(b_,h);const x=1/(M+R+S);return f=R*x,h=S*x,n.copy(s).addScaledVector(Ar,f).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Ih(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Re{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=De.workingColorSpace){return this.r=t,this.g=n,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=De.workingColorSpace){if(t=tM(t,1),n=Ee(n,0,1),s=Ee(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Ih(f,c,t+1/3),this.g=Ih(f,c,t),this.b=Ih(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,n=gi){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){const s=Uv[t.toLowerCase()];return s!==void 0?this.setHex(s,n):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return De.workingToColorSpace(On.copy(this),t),Math.round(Ee(On.r*255,0,255))*65536+Math.round(Ee(On.g*255,0,255))*256+Math.round(Ee(On.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(On.copy(this),n);const s=On.r,l=On.g,c=On.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=gi){De.workingToColorSpace(On.copy(this),t);const n=On.r,s=On.g,l=On.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+n,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL($a),t.getHSL(Cc);const s=Sh($a.h,Cc.h,n),l=Sh($a.s,Cc.s,n),c=Sh($a.l,Cc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Re;Re.NAMES=Uv;let pM=0;class Xr extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Lr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){he(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==nd&&(s.blendSrc=this.blendSrc),this.blendDst!==id&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Nv extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new Z,wc=new Xt;let mM=0;class Di{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=u_,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(t),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),s=Wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class Lv extends Di{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class Ov extends Di{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Ui extends Di{constructor(t,n,s){super(new Float32Array(t),n,s)}}let gM=0;const mi=new Je,Bh=new Dn,Cr=new Z,ni=new ol,ko=new ol,vn=new Z;class _i extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rv(t)?Ov:Lv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,s){return mi.makeTranslation(t,n,s),this.applyMatrix4(mi),this}scale(t,n,s){return mi.makeScale(t,n,s),this.applyMatrix4(mi),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ui(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,ko.min),ni.expandByPoint(vn),vn.addVectors(ni.max,ko.max),ni.expandByPoint(vn)):(ni.expandByPoint(ko.min),ni.expandByPoint(ko.max))}ni.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(Cr.fromBufferAttribute(t,p),vn.add(Cr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<s.count;j++)h[j]=new Z,m[j]=new Z;const p=new Z,g=new Z,_=new Z,S=new Xt,y=new Xt,b=new Xt,R=new Z,M=new Z;function x(j,C,w){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),S.fromBufferAttribute(c,j),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(S),b.sub(S);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(V),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),h[j].add(R),h[C].add(R),h[w].add(R),m[j].add(M),m[C].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let j=0,C=P.length;j<C;++j){const w=P[j],V=w.start,st=w.count;for(let at=V,dt=V+st;at<dt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new Z,U=new Z,I=new Z,H=new Z;function F(j){I.fromBufferAttribute(l,j),H.copy(I);const C=h[j];N.copy(C),N.sub(I.multiplyScalar(I.dot(C))).normalize(),U.crossVectors(H,C);const V=U.dot(m[j])<0?-1:1;f.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,C=P.length;j<C;++j){const w=P[j],V=w.start,st=w.count;for(let at=V,dt=V+st;at<dt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new Z,c=new Z,f=new Z,h=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let S=0,y=t.count;S<y;S+=3){const b=t.getX(S+0),R=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),f.fromBufferAttribute(n,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=n.count;S<y;S+=3)l.fromBufferAttribute(n,S+0),c.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)vn.fromBufferAttribute(t,n),vn.normalize(),t.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*g;for(let x=0;x<g;x++)S[b++]=p[y++]}return new Di(S,g,_)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const S=p[g],y=t(S,s);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,y=_.length;S<y;S++)g.push(_[S].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new Je,Ts=new wv,Dc=new au,A_=new Z,Uc=new Z,Nc=new Z,Lc=new Z,Hh=new Z,Oc=new Z,R_=new Z,Pc=new Z;class Wi extends Dn{constructor(t=new _i,n=new Nv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Hh.fromBufferAttribute(_,t),f?Oc.addScaledVector(Hh,g):Oc.addScaledVector(Hh.sub(n),g))}n.add(Oc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(Dc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Dc,A_)===null||Ts.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(T_),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Ts)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,R=S.length;b<R;b++){const M=S[b],x=f[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,I=N;U<I;U+=3){const H=h.getX(U),F=h.getX(U+1),j=h.getX(U+2);l=zc(this,x,t,s,p,g,_,H,F,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let M=b,x=R;M<x;M+=3){const P=h.getX(M),N=h.getX(M+1),U=h.getX(M+2);l=zc(this,f,t,s,p,g,_,P,N,U),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=S.length;b<R;b++){const M=S[b],x=f[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,I=N;U<I;U+=3){const H=U,F=U+1,j=U+2;l=zc(this,x,t,s,p,g,_,H,F,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,x=R;M<x;M+=3){const P=M,N=M+1,U=M+2;l=zc(this,f,t,s,p,g,_,P,N,U),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function _M(r,t,n,s,l,c,f,h){let m;if(t.side===Yn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===as,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Pc);return p<n.near||p>n.far?null:{distance:p,point:Pc.clone(),object:r}}function zc(r,t,n,s,l,c,f,h,m,p){r.getVertexPosition(h,Uc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Lc);const g=_M(r,t,n,s,Uc,Nc,Lc,R_);if(g){const _=new Z;Ri.getBarycoord(R_,Uc,Nc,Lc,_),l&&(g.uv=Ri.getInterpolatedAttribute(l,h,m,p,_,new Xt)),c&&(g.uv1=Ri.getInterpolatedAttribute(c,h,m,p,_,new Xt)),f&&(g.normal=Ri.getInterpolatedAttribute(f,h,m,p,_,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new Z,materialIndex:0};Ri.getNormal(Uc,Nc,Lc,S.normal),g.face=S,g.barycoord=_}return g}class ll extends _i{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let S=0,y=0;b("z","y","x",-1,-1,s,n,t,f,c,0),b("z","y","x",1,-1,s,n,-t,f,c,1),b("x","z","y",1,1,t,s,n,l,f,2),b("x","z","y",1,-1,t,s,-n,l,f,3),b("x","y","z",1,-1,t,n,s,l,c,4),b("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ui(p,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(_,2));function b(R,M,x,P,N,U,I,H,F,j,C){const w=U/F,V=I/j,st=U/2,at=I/2,dt=H/2,ot=F+1,z=j+1;let G=0,et=0;const Mt=new Z;for(let yt=0;yt<z;yt++){const L=yt*V-at;for(let $=0;$<ot;$++){const pt=$*w-st;Mt[R]=pt*P,Mt[M]=L*N,Mt[x]=dt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[M]=0,Mt[x]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push($/F),_.push(1-yt/j),G+=1}}for(let yt=0;yt<j;yt++)for(let L=0;L<F;L++){const $=S+L+ot*yt,pt=S+L+ot*(yt+1),At=S+(L+1)+ot*(yt+1),kt=S+(L+1)+ot*yt;m.push($,pt,kt),m.push(pt,At,kt),et+=6}h.addGroup(y,et,C),y+=et,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Fn(r){const t={};for(let n=0;n<r.length;n++){const s=Br(r[n]);for(const l in s)t[l]=s[l]}return t}function vM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Pv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const xM={clone:Br,merge:Fn};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=vM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class zv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new Z,C_=new Xt,w_=new Xt;class qn extends zv{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=nu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,n){return this.getViewBounds(t,C_,w_),n.subVectors(w_,C_)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(xh*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wr=-90,Dr=1;class MM extends Dn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(wr,Dr,t,n);l.layers=this.layers,this.add(l);const c=new qn(wr,Dr,t,n);c.layers=this.layers,this.add(c);const f=new qn(wr,Dr,t,n);f.layers=this.layers,this.add(f);const h=new qn(wr,Dr,t,n);h.layers=this.layers,this.add(h);const m=new qn(wr,Dr,t,n);m.layers=this.layers,this.add(m);const p=new qn(wr,Dr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,m),t.setRenderTarget(s,4,l),t.render(n,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(_,S,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Fv extends In{constructor(t=[],n=Os,s,l,c,f,h,m,p,g){super(t,n,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iv extends Vi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Fv(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ll(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:xa});c.uniforms.tEquirect.value=n;const f=new Wi(l,c),h=n.minFilter;return n.minFilter===Ns&&(n.minFilter=Pn),new MM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class Fc extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EM={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,s),x=this._getHandJoint(p,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class bM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class TM extends In{constructor(t=null,n=1,s=1,l,c,f,h,m,p=wn,g=wn,_,S){super(null,f,h,m,p,g,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new Z,AM=new Z,RM=new _e;class ws{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=Vh.subVectors(s,n).cross(AM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||RM.getNormalMatrix(t),l=this.coplanarPoint(Vh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new au,CM=new Xt(.5,.5),Ic=new Z;class fp{constructor(t=new ws,n=new ws,s=new ws,l=new ws,c=new ws,f=new ws){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Hi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],y=c[7],b=c[8],R=c[9],M=c[10],x=c[11],P=c[12],N=c[13],U=c[14],I=c[15];if(l[0].setComponents(p-f,y-g,x-b,I-P).normalize(),l[1].setComponents(p+f,y+g,x+b,I+P).normalize(),l[2].setComponents(p+h,y+_,x+R,I+N).normalize(),l[3].setComponents(p-h,y-_,x-R,I-N).normalize(),s)l[4].setComponents(m,S,M,U).normalize(),l[5].setComponents(p-m,y-S,x-M,I-U).normalize();else if(l[4].setComponents(p-m,y-S,x-M,I-U).normalize(),n===Hi)l[5].setComponents(p+m,y+S,x+M,I+U).normalize();else if(n===tu)l[5].setComponents(m,S,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);const n=CM.distanceTo(t.center);return As.radius=.7071067811865476+n,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bv extends Xr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const D_=new Je,Yd=new wv,Bc=new au,Hc=new Z;class wM extends Dn{constructor(t=new _i,n=new Bv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;D_.copy(l).invert(),Yd.copy(t.ray).applyMatrix4(D_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const S=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=S,R=y;b<R;b++){const M=p.getX(b);Hc.fromBufferAttribute(_,M),U_(Hc,M,m,l,t,n,this)}}else{const S=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let b=S,R=y;b<R;b++)Hc.fromBufferAttribute(_,b),U_(Hc,b,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function U_(r,t,n,s,l,c,f){const h=Yd.distanceSqToPoint(r);if(h<n){const m=new Z;Yd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class nl extends In{constructor(t,n,s=Xi,l,c,f,h=wn,m=wn,p,g=Ma,_=1){if(g!==Ma&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:n,depth:_};super(S,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class DM extends nl{constructor(t,n=Xi,s=Os,l,c,f=wn,h=wn,m,p=Ma){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],S=s[l+1]-g,y=(f-g)/S;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=n||(f.isVector2?new Xt:new Z);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new Z,l=[],c=[],f=[],h=new Z,m=new Je;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new Z)}c[0]=new Z,f[0]=new Z;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),S=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),S<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Ee(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,b))}f[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(Ee(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hp extends Yi{constructor(t=0,n=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Xt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),S=m-this.aX,y=p-this.aY;m=S*g-y*_+this.aX,p=S*_+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class UM extends hp{constructor(t,n,s,l,c,f){super(t,n,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function dp(){let r=0,t=0,n=0,s=0;function l(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,_){let S=(f-c)/p-(h-c)/(p+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+_)+(m-h)/_;S*=g,y*=g,l(f,h,S,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+s*h}}}const Gc=new Z,Xh=new dp,kh=new dp,Wh=new dp;class NM extends Yi{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new Z){const s=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(Gc.subVectors(l[0],l[1]).add(l[0]),p=Gc);const _=l[h%c],S=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Gc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),y),R=Math.pow(_.distanceToSquared(S),y),M=Math.pow(S.distanceToSquared(g),y);R<1e-4&&(R=1),b<1e-4&&(b=R),M<1e-4&&(M=R),Xh.initNonuniformCatmullRom(p.x,_.x,S.x,g.x,b,R,M),kh.initNonuniformCatmullRom(p.y,_.y,S.y,g.y,b,R,M),Wh.initNonuniformCatmullRom(p.z,_.z,S.z,g.z,b,R,M)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(p.x,_.x,S.x,g.x,this.tension),kh.initCatmullRom(p.y,_.y,S.y,g.y,this.tension),Wh.initCatmullRom(p.z,_.z,S.z,g.z,this.tension));return s.set(Xh.calc(m),kh.calc(m),Wh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Z().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function N_(r,t,n,s,l){const c=(s-t)*.5,f=(l-n)*.5,h=r*r,m=r*h;return(2*n-2*s+c+f)*m+(-3*n+3*s-2*c-f)*h+c*r+n}function LM(r,t){const n=1-r;return n*n*t}function OM(r,t){return 2*(1-r)*r*t}function PM(r,t){return r*r*t}function Qo(r,t,n,s){return LM(r,t)+OM(r,n)+PM(r,s)}function zM(r,t){const n=1-r;return n*n*n*t}function FM(r,t){const n=1-r;return 3*n*n*r*t}function IM(r,t){return 3*(1-r)*r*r*t}function BM(r,t){return r*r*r*t}function Ko(r,t,n,s,l){return zM(r,t)+FM(r,n)+IM(r,s)+BM(r,l)}class Gv extends Yi{constructor(t=new Xt,n=new Xt,s=new Xt,l=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Xt){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(Ko(t,l.x,c.x,f.x,h.x),Ko(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class HM extends Yi{constructor(t=new Z,n=new Z,s=new Z,l=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Z){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(Ko(t,l.x,c.x,f.x,h.x),Ko(t,l.y,c.y,f.y,h.y),Ko(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vv extends Yi{constructor(t=new Xt,n=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Xt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Xt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class GM extends Yi{constructor(t=new Z,n=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Z){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xv extends Yi{constructor(t=new Xt,n=new Xt,s=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Xt){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(Qo(t,l.x,c.x,f.x),Qo(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class VM extends Yi{constructor(t=new Z,n=new Z,s=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Z){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(Qo(t,l.x,c.x,f.x),Qo(t,l.y,c.y,f.y),Qo(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kv extends Yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Xt){const s=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(N_(h,m.x,p.x,g.x,_.x),N_(h,m.y,p.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Xt().fromArray(l))}return this}}var Zd=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:NM,CubicBezierCurve:Gv,CubicBezierCurve3:HM,EllipseCurve:hp,LineCurve:Vv,LineCurve3:GM,QuadraticBezierCurve:Xv,QuadraticBezierCurve3:VM,SplineCurve:kv});class XM extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zd[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(n.push(g),s=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new Zd[l.type]().fromJSON(l))}return this}}class L_ extends XM{constructor(t){super(),this.type="Path",this.currentPoint=new Xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new Vv(this.currentPoint.clone(),new Xt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new Xv(this.currentPoint.clone(),new Xt(t,n),new Xt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,f){const h=new Gv(this.currentPoint.clone(),new Xt(t,n),new Xt(s,l),new Xt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new kv(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,s,l,c,f),this}absarc(t,n,s,l,c,f){return this.absellipse(t,n,s,s,l,c,f),this}ellipse(t,n,s,l,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,s,l,c,f,h,m),this}absellipse(t,n,s,l,c,f,h,m){const p=new hp(t,n,s,l,c,f,h,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wv extends L_{constructor(t){super(t),this.uuid=Vr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,l=this.holes.length;s<l;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(new L_().fromJSON(l))}return this}}function kM(r,t,n=2){const s=t&&t.length,l=s?t[0]*n:r.length;let c=qv(r,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(s&&(c=jM(r,t,c,n)),r.length>80*n){h=r[0],m=r[1];let g=h,_=m;for(let S=n;S<l;S+=n){const y=r[S],b=r[S+1];y<h&&(h=y),b<m&&(m=b),y>g&&(g=y),b>_&&(_=b)}p=Math.max(g-h,_-m),p=p!==0?32767/p:0}return il(c,f,n,h,m,p,0),f}function qv(r,t,n,s,l){let c;if(l===rE(r,t,n,s)>0)for(let f=t;f<n;f+=s)c=O_(f/s|0,r[f],r[f+1],c);else for(let f=n-s;f>=t;f-=s)c=O_(f/s|0,r[f],r[f+1],c);return c&&Hr(c,c.next)&&(sl(c),c=c.next),c}function Ps(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(Hr(n,n.next)||$e(n.prev,n,n.next)===0)){if(sl(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function il(r,t,n,s,l,c,f){if(!r)return;!f&&c&&tE(r,s,l,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?qM(r,s,l,c):WM(r)){t.push(m.i,r.i,p.i),sl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=YM(Ps(r),t),il(r,t,n,s,l,c,2)):f===2&&ZM(r,t,n,s,l,c):il(Ps(r),t,n,s,l,c,1);break}}}function WM(r){const t=r.prev,n=r,s=r.next;if($e(t,n,s)>=0)return!1;const l=t.x,c=n.x,f=s.x,h=t.y,m=n.y,p=s.y,g=Math.min(l,c,f),_=Math.min(h,m,p),S=Math.max(l,c,f),y=Math.max(h,m,p);let b=s.next;for(;b!==t;){if(b.x>=g&&b.x<=S&&b.y>=_&&b.y<=y&&Zo(l,h,c,m,f,p,b.x,b.y)&&$e(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function qM(r,t,n,s){const l=r.prev,c=r,f=r.next;if($e(l,c,f)>=0)return!1;const h=l.x,m=c.x,p=f.x,g=l.y,_=c.y,S=f.y,y=Math.min(h,m,p),b=Math.min(g,_,S),R=Math.max(h,m,p),M=Math.max(g,_,S),x=jd(y,b,t,n,s),P=jd(R,M,t,n,s);let N=r.prevZ,U=r.nextZ;for(;N&&N.z>=x&&U&&U.z<=P;){if(N.x>=y&&N.x<=R&&N.y>=b&&N.y<=M&&N!==l&&N!==f&&Zo(h,g,m,_,p,S,N.x,N.y)&&$e(N.prev,N,N.next)>=0||(N=N.prevZ,U.x>=y&&U.x<=R&&U.y>=b&&U.y<=M&&U!==l&&U!==f&&Zo(h,g,m,_,p,S,U.x,U.y)&&$e(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;N&&N.z>=x;){if(N.x>=y&&N.x<=R&&N.y>=b&&N.y<=M&&N!==l&&N!==f&&Zo(h,g,m,_,p,S,N.x,N.y)&&$e(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;U&&U.z<=P;){if(U.x>=y&&U.x<=R&&U.y>=b&&U.y<=M&&U!==l&&U!==f&&Zo(h,g,m,_,p,S,U.x,U.y)&&$e(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function YM(r,t){let n=r;do{const s=n.prev,l=n.next.next;!Hr(s,l)&&Zv(s,n,n.next,l)&&al(s,l)&&al(l,s)&&(t.push(s.i,n.i,l.i),sl(n),sl(n.next),n=r=l),n=n.next}while(n!==r);return Ps(n)}function ZM(r,t,n,s,l,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&iE(f,h)){let m=jv(f,h);f=Ps(f,f.next),m=Ps(m,m.next),il(f,t,n,s,l,c,0),il(m,t,n,s,l,c,0);return}h=h.next}f=f.next}while(f!==r)}function jM(r,t,n,s){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=qv(r,h,m,s,!1);p===p.next&&(p.steiner=!0),l.push(nE(p))}l.sort(QM);for(let c=0;c<l.length;c++)n=KM(l[c],n);return n}function QM(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=s-l}return n}function KM(r,t){const n=JM(r,t);if(!n)return t;const s=jv(n,r);return Ps(s,s.next),Ps(n,n.next)}function JM(r,t){let n=t;const s=r.x,l=r.y;let c=-1/0,f;if(Hr(r,n))return n;do{if(Hr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const _=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=s&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===s))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let g=1/0;n=f;do{if(s>=n.x&&n.x>=m&&s!==n.x&&Yv(l<p?s:c,l,m,p,l<p?c:s,l,n.x,n.y)){const _=Math.abs(l-n.y)/(s-n.x);al(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&$M(f,n)))&&(f=n,g=_)}n=n.next}while(n!==h);return f}function $M(r,t){return $e(r.prev,r,t.prev)<0&&$e(t.next,r,r.next)<0}function tE(r,t,n,s){let l=r;do l.z===0&&(l.z=jd(l.x,l.y,t,n,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,eE(l)}function eE(r){let t,n=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,h--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,n*=2}while(t>1);return r}function jd(r,t,n,s,l){return r=(r-n)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function nE(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Yv(r,t,n,s,l,c,f,h){return(l-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(s-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(s-h)}function Zo(r,t,n,s,l,c,f,h){return!(r===f&&t===h)&&Yv(r,t,n,s,l,c,f,h)}function iE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!aE(r,t)&&(al(r,t)&&al(t,r)&&sE(r,t)&&($e(r.prev,r,t.prev)||$e(r,t.prev,t))||Hr(r,t)&&$e(r.prev,r,r.next)>0&&$e(t.prev,t,t.next)>0)}function $e(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Hr(r,t){return r.x===t.x&&r.y===t.y}function Zv(r,t,n,s){const l=Xc($e(r,t,n)),c=Xc($e(r,t,s)),f=Xc($e(n,s,r)),h=Xc($e(n,s,t));return!!(l!==c&&f!==h||l===0&&Vc(r,n,t)||c===0&&Vc(r,s,t)||f===0&&Vc(n,r,s)||h===0&&Vc(n,t,s))}function Vc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Xc(r){return r>0?1:r<0?-1:0}function aE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&Zv(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function al(r,t){return $e(r.prev,r,r.next)<0?$e(r,t,r.next)>=0&&$e(r,r.prev,t)>=0:$e(r,t,r.prev)<0||$e(r,r.next,t)<0}function sE(r,t){let n=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function jv(r,t){const n=Qd(r.i,r.x,r.y),s=Qd(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function O_(r,t,n,s){const l=Qd(r,t,n);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function sl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Qd(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rE(r,t,n,s){let l=0;for(let c=t,f=n-s;c<n;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class oE{static triangulate(t,n,s=2){return kM(t,n,s)}}class Nr{static area(t){const n=t.length;let s=0;for(let l=n-1,c=0;c<n;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,n){const s=[],l=[],c=[];P_(t),z_(s,t);let f=t.length;n.forEach(P_);for(let m=0;m<n.length;m++)l.push(f),f+=n[m].length,z_(s,n[m]);const h=oE.triangulate(s,l);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function P_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function z_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class pp extends _i{constructor(t=new Wv([new Xt(.5,.5),new Xt(-.5,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];f(p)}this.setAttribute("position",new Ui(l,3)),this.setAttribute("uv",new Ui(c,2)),this.computeVertexNormals();function f(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let S=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,b=n.bevelSize!==void 0?n.bevelSize:y-.1,R=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,P=n.UVGenerator!==void 0?n.UVGenerator:lE;let N,U=!1,I,H,F,j;if(x){N=x.getSpacedPoints(g),U=!0,S=!1;const gt=x.isCatmullRomCurve3?x.closed:!1;I=x.computeFrenetFrames(g,gt),H=new Z,F=new Z,j=new Z}S||(M=0,y=0,b=0,R=0);const C=h.extractPoints(p);let w=C.shape;const V=C.holes;if(!Nr.isClockWise(w)){w=w.reverse();for(let gt=0,Tt=V.length;gt<Tt;gt++){const St=V[gt];Nr.isClockWise(St)&&(V[gt]=St.reverse())}}function at(gt){const St=10000000000000001e-36;let zt=gt[0];for(let O=1;O<=gt.length;O++){const ee=O%gt.length,Bt=gt[ee],ie=Bt.x-zt.x,wt=Bt.y-zt.y,D=ie*ie+wt*wt,E=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(zt.x),Math.abs(zt.y)),W=St*E*E;if(D<=W){gt.splice(ee,1),O--;continue}zt=Bt}}at(w),V.forEach(at);const dt=V.length,ot=w;for(let gt=0;gt<dt;gt++){const Tt=V[gt];w=w.concat(Tt)}function z(gt,Tt,St){return Tt||we("ExtrudeGeometry: vec does not exist"),gt.clone().addScaledVector(Tt,St)}const G=w.length;function et(gt,Tt,St){let zt,O,ee;const Bt=gt.x-Tt.x,ie=gt.y-Tt.y,wt=St.x-gt.x,D=St.y-gt.y,E=Bt*Bt+ie*ie,W=Bt*D-ie*wt;if(Math.abs(W)>Number.EPSILON){const ct=Math.sqrt(E),xt=Math.sqrt(wt*wt+D*D),ut=Tt.x-ie/ct,Kt=Tt.y+Bt/ct,Ut=St.x-D/xt,Qt=St.y+wt/xt,re=((Ut-ut)*D-(Qt-Kt)*wt)/(Bt*D-ie*wt);zt=ut+Bt*re-gt.x,O=Kt+ie*re-gt.y;const Et=zt*zt+O*O;if(Et<=2)return new Xt(zt,O);ee=Math.sqrt(Et/2)}else{let ct=!1;Bt>Number.EPSILON?wt>Number.EPSILON&&(ct=!0):Bt<-Number.EPSILON?wt<-Number.EPSILON&&(ct=!0):Math.sign(ie)===Math.sign(D)&&(ct=!0),ct?(zt=-ie,O=Bt,ee=Math.sqrt(E)):(zt=Bt,O=ie,ee=Math.sqrt(E/2))}return new Xt(zt/ee,O/ee)}const Mt=[];for(let gt=0,Tt=ot.length,St=Tt-1,zt=gt+1;gt<Tt;gt++,St++,zt++)St===Tt&&(St=0),zt===Tt&&(zt=0),Mt[gt]=et(ot[gt],ot[St],ot[zt]);const yt=[];let L,$=Mt.concat();for(let gt=0,Tt=dt;gt<Tt;gt++){const St=V[gt];L=[];for(let zt=0,O=St.length,ee=O-1,Bt=zt+1;zt<O;zt++,ee++,Bt++)ee===O&&(ee=0),Bt===O&&(Bt=0),L[zt]=et(St[zt],St[ee],St[Bt]);yt.push(L),$=$.concat(L)}let pt;if(M===0)pt=Nr.triangulateShape(ot,V);else{const gt=[],Tt=[];for(let St=0;St<M;St++){const zt=St/M,O=y*Math.cos(zt*Math.PI/2),ee=b*Math.sin(zt*Math.PI/2)+R;for(let Bt=0,ie=ot.length;Bt<ie;Bt++){const wt=z(ot[Bt],Mt[Bt],ee);Ht(wt.x,wt.y,-O),zt===0&&gt.push(wt)}for(let Bt=0,ie=dt;Bt<ie;Bt++){const wt=V[Bt];L=yt[Bt];const D=[];for(let E=0,W=wt.length;E<W;E++){const ct=z(wt[E],L[E],ee);Ht(ct.x,ct.y,-O),zt===0&&D.push(ct)}zt===0&&Tt.push(D)}}pt=Nr.triangulateShape(gt,Tt)}const At=pt.length,kt=b+R;for(let gt=0;gt<G;gt++){const Tt=S?z(w[gt],$[gt],kt):w[gt];U?(F.copy(I.normals[0]).multiplyScalar(Tt.x),H.copy(I.binormals[0]).multiplyScalar(Tt.y),j.copy(N[0]).add(F).add(H),Ht(j.x,j.y,j.z)):Ht(Tt.x,Tt.y,0)}for(let gt=1;gt<=g;gt++)for(let Tt=0;Tt<G;Tt++){const St=S?z(w[Tt],$[Tt],kt):w[Tt];U?(F.copy(I.normals[gt]).multiplyScalar(St.x),H.copy(I.binormals[gt]).multiplyScalar(St.y),j.copy(N[gt]).add(F).add(H),Ht(j.x,j.y,j.z)):Ht(St.x,St.y,_/g*gt)}for(let gt=M-1;gt>=0;gt--){const Tt=gt/M,St=y*Math.cos(Tt*Math.PI/2),zt=b*Math.sin(Tt*Math.PI/2)+R;for(let O=0,ee=ot.length;O<ee;O++){const Bt=z(ot[O],Mt[O],zt);Ht(Bt.x,Bt.y,_+St)}for(let O=0,ee=V.length;O<ee;O++){const Bt=V[O];L=yt[O];for(let ie=0,wt=Bt.length;ie<wt;ie++){const D=z(Bt[ie],L[ie],zt);U?Ht(D.x,D.y+N[g-1].y,N[g-1].x+St):Ht(D.x,D.y,_+St)}}}tt(),ft();function tt(){const gt=l.length/3;if(S){let Tt=0,St=G*Tt;for(let zt=0;zt<At;zt++){const O=pt[zt];Wt(O[2]+St,O[1]+St,O[0]+St)}Tt=g+M*2,St=G*Tt;for(let zt=0;zt<At;zt++){const O=pt[zt];Wt(O[0]+St,O[1]+St,O[2]+St)}}else{for(let Tt=0;Tt<At;Tt++){const St=pt[Tt];Wt(St[2],St[1],St[0])}for(let Tt=0;Tt<At;Tt++){const St=pt[Tt];Wt(St[0]+G*g,St[1]+G*g,St[2]+G*g)}}s.addGroup(gt,l.length/3-gt,0)}function ft(){const gt=l.length/3;let Tt=0;Nt(ot,Tt),Tt+=ot.length;for(let St=0,zt=V.length;St<zt;St++){const O=V[St];Nt(O,Tt),Tt+=O.length}s.addGroup(gt,l.length/3-gt,1)}function Nt(gt,Tt){let St=gt.length;for(;--St>=0;){const zt=St;let O=St-1;O<0&&(O=gt.length-1);for(let ee=0,Bt=g+M*2;ee<Bt;ee++){const ie=G*ee,wt=G*(ee+1),D=Tt+zt+ie,E=Tt+O+ie,W=Tt+O+wt,ct=Tt+zt+wt;Se(D,E,W,ct)}}}function Ht(gt,Tt,St){m.push(gt),m.push(Tt),m.push(St)}function Wt(gt,Tt,St){Ue(gt),Ue(Tt),Ue(St);const zt=l.length/3,O=P.generateTopUV(s,l,zt-3,zt-2,zt-1);ce(O[0]),ce(O[1]),ce(O[2])}function Se(gt,Tt,St,zt){Ue(gt),Ue(Tt),Ue(zt),Ue(Tt),Ue(St),Ue(zt);const O=l.length/3,ee=P.generateSideWallUV(s,l,O-6,O-3,O-2,O-1);ce(ee[0]),ce(ee[1]),ce(ee[3]),ce(ee[1]),ce(ee[2]),ce(ee[3])}function Ue(gt){l.push(m[gt*3+0]),l.push(m[gt*3+1]),l.push(m[gt*3+2])}function ce(gt){c.push(gt.x),c.push(gt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return cE(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];s.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Zd[l.type]().fromJSON(l)),new pp(s,t.options)}}const lE={generateTopUV:function(r,t,n,s,l){const c=t[n*3],f=t[n*3+1],h=t[s*3],m=t[s*3+1],p=t[l*3],g=t[l*3+1];return[new Xt(c,f),new Xt(h,m),new Xt(p,g)]},generateSideWallUV:function(r,t,n,s,l,c){const f=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[s*3],g=t[s*3+1],_=t[s*3+2],S=t[l*3],y=t[l*3+1],b=t[l*3+2],R=t[c*3],M=t[c*3+1],x=t[c*3+2];return Math.abs(h-g)<Math.abs(f-p)?[new Xt(f,1-m),new Xt(p,1-_),new Xt(S,1-b),new Xt(R,1-x)]:[new Xt(h,1-m),new Xt(g,1-_),new Xt(y,1-b),new Xt(M,1-x)]}};function cE(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class su extends _i{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,S=n/m,y=[],b=[],R=[],M=[];for(let x=0;x<g;x++){const P=x*S-f;for(let N=0;N<p;N++){const U=N*_-c;b.push(U,-P,0),R.push(0,0,1),M.push(N/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<h;P++){const N=P+p*x,U=P+p*(x+1),I=P+1+p*(x+1),H=P+1+p*x;y.push(N,U,H),y.push(U,I,H)}this.setIndex(y),this.setAttribute("position",new Ui(b,3)),this.setAttribute("normal",new Ui(R,3)),this.setAttribute("uv",new Ui(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.width,t.height,t.widthSegments,t.heightSegments)}}class uE extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fE extends Xr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Av,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hE extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dE extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mp extends Dn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const qh=new Je,F_=new Z,I_=new Z;class Qv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;F_.setFromMatrixPosition(t.matrixWorld),n.position.copy(F_),I_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(I_),n.updateMatrixWorld(),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pE extends Qv{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,s=nu*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(s!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=s,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class mE extends mp{constructor(t,n,s=0,l=Math.PI/3,c=0,f=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new pE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class gE extends Qv{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class B_ extends mp{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new gE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Kv extends zv{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _E extends mp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vE extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function H_(r,t,n,s){const l=xE(s);switch(n){case Ev:return r*t;case Tv:return r*t/l.components*l.byteLength;case sp:return r*t/l.components*l.byteLength;case Fr:return r*t*2/l.components*l.byteLength;case rp:return r*t*2/l.components*l.byteLength;case bv:return r*t*3/l.components*l.byteLength;case Ci:return r*t*4/l.components*l.byteLength;case op:return r*t*4/l.components*l.byteLength;case Yc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case jc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:case vd:return Math.max(r,16)*Math.max(t,8)/4;case md:case _d:return Math.max(r,8)*Math.max(t,8)/2;case xd:case Sd:case Md:case Ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yd:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hd:case Gd:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xE(r){switch(r){case ai:case xv:return{byteLength:1,components:1};case $o:case Sv:case ya:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case Xi:case np:case Bi:return{byteLength:4,components:1};case yv:case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);function Jv(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function SE(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<_.length;y++){const b=_[S],R=_[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,_[S]=R)}_.length=S+1;for(let y=0,b=_.length;y<b;y++){const R=_[y];r.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ME=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Db=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,J1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:yE,alphahash_pars_fragment:ME,alphamap_fragment:EE,alphamap_pars_fragment:bE,alphatest_fragment:TE,alphatest_pars_fragment:AE,aomap_fragment:RE,aomap_pars_fragment:CE,batching_pars_vertex:wE,batching_vertex:DE,begin_vertex:UE,beginnormal_vertex:NE,bsdfs:LE,iridescence_fragment:OE,bumpmap_pars_fragment:PE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:IE,clipping_planes_vertex:BE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:VE,color_vertex:XE,common:kE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:qE,displacementmap_pars_vertex:YE,displacementmap_vertex:ZE,emissivemap_fragment:jE,emissivemap_pars_fragment:QE,colorspace_fragment:KE,colorspace_pars_fragment:JE,envmap_fragment:$E,envmap_common_pars_fragment:tb,envmap_pars_fragment:eb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:db,envmap_vertex:ib,fog_vertex:ab,fog_pars_vertex:sb,fog_fragment:rb,fog_pars_fragment:ob,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:fb,lights_pars_begin:hb,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:_b,lights_physical_fragment:vb,lights_physical_pars_fragment:xb,lights_fragment_begin:Sb,lights_fragment_maps:yb,lights_fragment_end:Mb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:Ab,map_fragment:Rb,map_pars_fragment:Cb,map_particle_fragment:wb,map_particle_pars_fragment:Db,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Lb,morphcolor_vertex:Ob,morphnormal_vertex:Pb,morphtarget_pars_vertex:zb,morphtarget_vertex:Fb,normal_fragment_begin:Ib,normal_fragment_maps:Bb,normal_pars_fragment:Hb,normal_pars_vertex:Gb,normal_vertex:Vb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Wb,clearcoat_pars_fragment:qb,iridescence_pars_fragment:Yb,opaque_fragment:Zb,packing:jb,premultiplied_alpha_fragment:Qb,project_vertex:Kb,dithering_fragment:Jb,dithering_pars_fragment:$b,roughnessmap_fragment:t1,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:a1,shadowmask_pars_fragment:s1,skinbase_vertex:r1,skinning_pars_vertex:o1,skinning_vertex:l1,skinnormal_vertex:c1,specularmap_fragment:u1,specularmap_pars_fragment:f1,tonemapping_fragment:h1,tonemapping_pars_fragment:d1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:_1,uv_vertex:v1,worldpos_vertex:x1,background_vert:S1,background_frag:y1,backgroundCube_vert:M1,backgroundCube_frag:E1,cube_vert:b1,cube_frag:T1,depth_vert:A1,depth_frag:R1,distance_vert:C1,distance_frag:w1,equirect_vert:D1,equirect_frag:U1,linedashed_vert:N1,linedashed_frag:L1,meshbasic_vert:O1,meshbasic_frag:P1,meshlambert_vert:z1,meshlambert_frag:F1,meshmatcap_vert:I1,meshmatcap_frag:B1,meshnormal_vert:H1,meshnormal_frag:G1,meshphong_vert:V1,meshphong_frag:X1,meshphysical_vert:k1,meshphysical_frag:W1,meshtoon_vert:q1,meshtoon_frag:Y1,points_vert:Z1,points_frag:j1,shadow_vert:Q1,shadow_frag:K1,sprite_vert:J1,sprite_frag:$1},It={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Fn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Fn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Fn([It.points,It.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Fn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Fn([It.common,It.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Fn([It.sprite,It.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Fn([It.common,It.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Fn([It.lights,It.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const kc={r:0,b:0,g:0},Rs=new ki,tT=new Je;function eT(r,t,n,s,l,c,f){const h=new Re(0);let m=c===!0?0:1,p,g,_=null,S=0,y=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?n:t).get(U)),U}function R(N){let U=!1;const I=b(N);I===null?x(h,m):I&&I.isColor&&(x(I,1),U=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,U){const I=b(U);I&&(I.isCubeTexture||I.mapping===iu)?(g===void 0&&(g=new Wi(new ll(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Br(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Rs.copy(U.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Rs)),g.material.toneMapped=De.getTransfer(I.colorSpace)!==Ve,(_!==I||S!==I.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=I,S=I.version,y=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Wi(new su(2,2),new qi({name:"BackgroundMaterial",uniforms:Br(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(I.colorSpace)!==Ve,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,S=I.version,y=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(kc,Pv(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,U,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,U=1){h.set(N),m=U,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:R,addToRenderList:M,dispose:P}}function nT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,f=!1;function h(w,V,st,at,dt){let ot=!1;const z=_(at,st,V);c!==z&&(c=z,p(c.object)),ot=y(w,at,st,dt),ot&&b(w,at,st,dt),dt!==null&&t.update(dt,r.ELEMENT_ARRAY_BUFFER),(ot||f)&&(f=!1,U(w,V,st,at),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,V,st){const at=st.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let ot=dt[V.id];ot===void 0&&(ot={},dt[V.id]=ot);let z=ot[at];return z===void 0&&(z=S(m()),ot[at]=z),z}function S(w){const V=[],st=[],at=[];for(let dt=0;dt<n;dt++)V[dt]=0,st[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:at,object:w,attributes:{},index:null}}function y(w,V,st,at){const dt=c.attributes,ot=V.attributes;let z=0;const G=st.getAttributes();for(const et in G)if(G[et].location>=0){const yt=dt[et];let L=ot[et];if(L===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),yt===void 0||yt.attribute!==L||L&&yt.data!==L.data)return!0;z++}return c.attributesNum!==z||c.index!==at}function b(w,V,st,at){const dt={},ot=V.attributes;let z=0;const G=st.getAttributes();for(const et in G)if(G[et].location>=0){let yt=ot[et];yt===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const L={};L.attribute=yt,yt&&yt.data&&(L.data=yt.data),dt[et]=L,z++}c.attributes=dt,c.attributesNum=z,c.index=at}function R(){const w=c.newAttributes;for(let V=0,st=w.length;V<st;V++)w[V]=0}function M(w){x(w,0)}function x(w,V){const st=c.newAttributes,at=c.enabledAttributes,dt=c.attributeDivisors;st[w]=1,at[w]===0&&(r.enableVertexAttribArray(w),at[w]=1),dt[w]!==V&&(r.vertexAttribDivisor(w,V),dt[w]=V)}function P(){const w=c.newAttributes,V=c.enabledAttributes;for(let st=0,at=V.length;st<at;st++)V[st]!==w[st]&&(r.disableVertexAttribArray(st),V[st]=0)}function N(w,V,st,at,dt,ot,z){z===!0?r.vertexAttribIPointer(w,V,st,dt,ot):r.vertexAttribPointer(w,V,st,at,dt,ot)}function U(w,V,st,at){R();const dt=at.attributes,ot=st.getAttributes(),z=V.defaultAttributeValues;for(const G in ot){const et=ot[G];if(et.location>=0){let Mt=dt[G];if(Mt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const yt=Mt.normalized,L=Mt.itemSize,$=t.get(Mt);if($===void 0)continue;const pt=$.buffer,At=$.type,kt=$.bytesPerElement,tt=At===r.INT||At===r.UNSIGNED_INT||Mt.gpuType===np;if(Mt.isInterleavedBufferAttribute){const ft=Mt.data,Nt=ft.stride,Ht=Mt.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<et.locationSize;Wt++)x(et.location+Wt,ft.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<et.locationSize;Wt++)M(et.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Wt=0;Wt<et.locationSize;Wt++)N(et.location+Wt,L/et.locationSize,At,yt,Nt*kt,(Ht+L/et.locationSize*Wt)*kt,tt)}else{if(Mt.isInstancedBufferAttribute){for(let ft=0;ft<et.locationSize;ft++)x(et.location+ft,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ft=0;ft<et.locationSize;ft++)M(et.location+ft);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ft=0;ft<et.locationSize;ft++)N(et.location+ft,L/et.locationSize,At,yt,L*kt,L/et.locationSize*ft*kt,tt)}}else if(z!==void 0){const yt=z[G];if(yt!==void 0)switch(yt.length){case 2:r.vertexAttrib2fv(et.location,yt);break;case 3:r.vertexAttrib3fv(et.location,yt);break;case 4:r.vertexAttrib4fv(et.location,yt);break;default:r.vertexAttrib1fv(et.location,yt)}}}}P()}function I(){j();for(const w in s){const V=s[w];for(const st in V){const at=V[st];for(const dt in at)g(at[dt].object),delete at[dt];delete V[st]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const st in V){const at=V[st];for(const dt in at)g(at[dt].object),delete at[dt];delete V[st]}delete s[w.id]}function F(w){for(const V in s){const st=s[V];if(st[w.id]===void 0)continue;const at=st[w.id];for(const dt in at)g(at[dt].object),delete at[dt];delete st[w.id]}}function j(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:M,disableUnusedAttributes:P}}function iT(r,t,n){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),n.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),n.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];n.update(y,s,1)}function m(p,g,_,S){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],g[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let b=0;for(let R=0;R<_;R++)b+=g[R]*S[R];n.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function aT(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const j=F===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ai&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!j)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(he("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,S=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:U,maxSamples:I,samples:H}}function sT(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new ws,h=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||s!==0||l;return l=S,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){n=g(_,S,0)},this.setState=function(_,S,y){const b=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const P=c?0:s,N=P*4;let U=x.clippingState||null;m.value=U,U=g(b,S,N,y);for(let I=0;I!==N;++I)U[I]=n[I];x.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,y,b){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const x=y+R*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,U=y;N!==R;++N,U+=4)f.copy(_[N]).applyMatrix4(P,h),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function rT(r){let t=new WeakMap;function n(f,h){return h===fd?f.mapping=Os:h===hd&&(f.mapping=zr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===fd||h===hd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Iv(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const is=4,G_=[.125,.215,.35,.446,.526,.582],Us=20,oT=256,Wo=new Kv,V_=new Re;let Yh=null,Zh=0,jh=0,Qh=!1;const lT=new Z;class X_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=lT}=c;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,Zh,jh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Os||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ya,format:Ci,colorSpace:Ir,depthBuffer:!1},l=k_(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cT(c)),this._blurMaterial=fT(c,t,n),this._ggxMaterial=uT(c,t,n)}return l}_compileMaterial(t){const n=new Wi(new _i,t);this._renderer.compile(n,Wo)}_sceneToCubeUV(t,n,s,l,c){const m=new qn(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(V_),_.toneMapping=Gi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new ll,new Nv({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let x=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,x=!0):(M.color.copy(V_),x=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const I=this._cubeSize;Ur(l,U*I,N>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(R,m),_.render(t,m)}_.toneMapping=y,_.autoClear=S,t.background=P}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Os||t.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ur(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(f,Wo)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,y=_*S,{_lodMax:b}=this,R=this._sizeLods[s],M=3*R*(s>b-is?s-b+is:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-n,Ur(c,M,x,3*R,2*R),l.setRenderTarget(c),l.render(h,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Ur(t,M,x,3*R,2*R),l.setRenderTarget(t),l.render(h,Wo)}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Us-1),R=c/b,M=isFinite(c)?1+Math.floor(g*R):Us;M>Us&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Us}`);const x=[];let P=0;for(let F=0;F<Us;++F){const j=F/R,C=Math.exp(-j*j/2);x.push(C),F===0?P+=C:F<M&&(P+=2*C)}for(let F=0;F<x.length;F++)x[F]=x[F]/P;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const U=this._sizeLods[l],I=3*U*(l>N-is?l-N+is:0),H=4*(this._cubeSize-U);Ur(n,I,H,3*U,2*U),m.setRenderTarget(n),m.render(_,Wo)}}function cT(r){const t=[],n=[],s=[];let l=r;const c=r-is+1+G_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-is?m=G_[f-r+is-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,R=3,M=2,x=1,P=new Float32Array(R*b*y),N=new Float32Array(M*b*y),U=new Float32Array(x*b*y);for(let H=0;H<y;H++){const F=H%3*2/3-1,j=H>2?0:-1,C=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];P.set(C,R*b*H),N.set(S,M*b*H);const w=[H,H,H,H,H,H];U.set(w,x*b*H)}const I=new _i;I.setAttribute("position",new Di(P,R)),I.setAttribute("uv",new Di(N,M)),I.setAttribute("faceIndex",new Di(U,x)),s.push(new Wi(I,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function k_(r,t,n){const s=new Vi(r,t,n);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function uT(r,t,n){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function fT(r,t,n){const s=new Float32Array(Us),l=new Z(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function W_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function q_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hT(r){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===fd||m===hd,g=m===Os||m===zr;if(p||g){let _=t.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return n===null&&(n=new X_(r)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new X_(r)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function dT(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&el("WebGLRenderer: "+s+" extension not supported."),l}}}function pT(r,t,n,s){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",f),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,n.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)t.update(S[y],r.ARRAY_BUFFER)}function p(_){const S=[],y=_.index,b=_.attributes.position;let R=0;if(y!==null){const P=y.array;R=y.version;for(let N=0,U=P.length;N<U;N+=3){const I=P[N+0],H=P[N+1],F=P[N+2];S.push(I,H,H,F,F,I)}}else if(b!==void 0){const P=b.array;R=b.version;for(let N=0,U=P.length/3-1;N<U;N+=3){const I=N+0,H=N+1,F=N+2;S.push(I,H,H,F,F,I)}}else return;const M=new(Rv(S)?Ov:Lv)(S,1);M.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const S=c.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function mT(r,t,n){let s;function l(S){s=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function m(S,y){r.drawElements(s,y,c,S*f),n.update(y,s,1)}function p(S,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,S*f,b),n.update(y,s,b))}function g(S,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,s,1)}function _(S,y,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/f,y[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,R,0,b);let x=0;for(let P=0;P<b;P++)x+=y[P]*R[P];n.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function gT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:we("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function _T(r,t,n){const s=new WeakMap,l=new nn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(h);if(S===void 0||S.count!==_){let w=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let U=0;b===!0&&(U=1),R===!0&&(U=2),M===!0&&(U=3);let I=h.attributes.position.count*U,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*H*4*_),j=new Cv(F,I,H,_);j.type=Bi,j.needsUpdate=!0;const C=U*4;for(let V=0;V<_;V++){const st=x[V],at=P[V],dt=N[V],ot=I*H*4*V;for(let z=0;z<st.count;z++){const G=z*C;b===!0&&(l.fromBufferAttribute(st,z),F[ot+G+0]=l.x,F[ot+G+1]=l.y,F[ot+G+2]=l.z,F[ot+G+3]=0),R===!0&&(l.fromBufferAttribute(at,z),F[ot+G+4]=l.x,F[ot+G+5]=l.y,F[ot+G+6]=l.z,F[ot+G+7]=0),M===!0&&(l.fromBufferAttribute(dt,z),F[ot+G+8]=l.x,F[ot+G+9]=l.y,F[ot+G+10]=l.z,F[ot+G+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new Xt(I,H)},s.set(h,S),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function vT(r,t,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const xT={[fv]:"LINEAR_TONE_MAPPING",[hv]:"REINHARD_TONE_MAPPING",[dv]:"CINEON_TONE_MAPPING",[pv]:"ACES_FILMIC_TONE_MAPPING",[gv]:"AGX_TONE_MAPPING",[_v]:"NEUTRAL_TONE_MAPPING",[mv]:"CUSTOM_TONE_MAPPING"};function ST(r,t,n,s,l){const c=new Vi(t,n,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Vi(t,n,{type:ya,depthBuffer:!1,stencilBuffer:!1}),h=new _i;h.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const m=new uE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Wi(h,m),g=new Kv(-1,1,1,-1,0,1);let _=null,S=null,y=!1,b,R=null,M=[],x=!1;this.setSize=function(P,N){c.setSize(P,N),f.setSize(P,N);for(let U=0;U<M.length;U++){const I=M[U];I.setSize&&I.setSize(P,N)}},this.setEffects=function(P){M=P,x=M.length>0&&M[0].isRenderPass===!0;const N=c.width,U=c.height;for(let I=0;I<M.length;I++){const H=M[I];H.setSize&&H.setSize(N,U)}},this.begin=function(P,N){if(y||P.toneMapping===Gi&&M.length===0)return!1;if(R=N,N!==null){const U=N.width,I=N.height;(c.width!==U||c.height!==I)&&this.setSize(U,I)}return x===!1&&P.setRenderTarget(c),b=P.toneMapping,P.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(P,N){P.toneMapping=b,y=!0;let U=c,I=f;for(let H=0;H<M.length;H++){const F=M[H];if(F.enabled!==!1&&(F.render(P,I,U,N),F.needsSwap!==!1)){const j=U;U=I,I=j}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},De.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const H=xT[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,P.setRenderTarget(R),P.render(p,g),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const $v=new In,Kd=new nl(1,1),tx=new Cv,ex=new rM,nx=new Fv,Y_=[],Z_=[],j_=new Float32Array(16),Q_=new Float32Array(9),K_=new Float32Array(4);function kr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=Y_[l];if(c===void 0&&(c=new Float32Array(l),Y_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function mn(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function gn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function ou(r,t){let n=Z_[t];n===void 0&&(n=new Int32Array(t),Z_[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function yT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function MT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2fv(this.addr,t),gn(n,t)}}function ET(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;r.uniform3fv(this.addr,t),gn(n,t)}}function bT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4fv(this.addr,t),gn(n,t)}}function TT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,s))return;K_.set(s),r.uniformMatrix2fv(this.addr,!1,K_),gn(n,s)}}function AT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,s))return;Q_.set(s),r.uniformMatrix3fv(this.addr,!1,Q_),gn(n,s)}}function RT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,s))return;j_.set(s),r.uniformMatrix4fv(this.addr,!1,j_),gn(n,s)}}function CT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function wT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2iv(this.addr,t),gn(n,t)}}function DT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3iv(this.addr,t),gn(n,t)}}function UT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4iv(this.addr,t),gn(n,t)}}function NT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function LT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2uiv(this.addr,t),gn(n,t)}}function OT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3uiv(this.addr,t),gn(n,t)}}function PT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4uiv(this.addr,t),gn(n,t)}}function zT(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Kd.compareFunction=n.isReversedDepthBuffer()?cp:lp,c=Kd):c=$v,n.setTexture2D(t||c,l)}function FT(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||ex,l)}function IT(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||nx,l)}function BT(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||tx,l)}function HT(r){switch(r){case 5126:return yT;case 35664:return MT;case 35665:return ET;case 35666:return bT;case 35674:return TT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return NT;case 36294:return LT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return BT}}function GT(r,t){r.uniform1fv(this.addr,t)}function VT(r,t){const n=kr(t,this.size,2);r.uniform2fv(this.addr,n)}function XT(r,t){const n=kr(t,this.size,3);r.uniform3fv(this.addr,n)}function kT(r,t){const n=kr(t,this.size,4);r.uniform4fv(this.addr,n)}function WT(r,t){const n=kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function qT(r,t){const n=kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function YT(r,t){const n=kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function ZT(r,t){r.uniform1iv(this.addr,t)}function jT(r,t){r.uniform2iv(this.addr,t)}function QT(r,t){r.uniform3iv(this.addr,t)}function KT(r,t){r.uniform4iv(this.addr,t)}function JT(r,t){r.uniform1uiv(this.addr,t)}function $T(r,t){r.uniform2uiv(this.addr,t)}function tA(r,t){r.uniform3uiv(this.addr,t)}function eA(r,t){r.uniform4uiv(this.addr,t)}function nA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Kd:f=$v;for(let h=0;h!==l;++h)n.setTexture2D(t[h]||f,c[h])}function iA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||ex,c[f])}function aA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||nx,c[f])}function sA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||tx,c[f])}function rA(r){switch(r){case 5126:return GT;case 35664:return VT;case 35665:return XT;case 35666:return kT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return jT;case 35668:case 35672:return QT;case 35669:case 35673:return KT;case 5125:return JT;case 36294:return $T;case 36295:return tA;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}class oA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=HT(n.type)}}class lA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rA(n.type)}}class cA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function J_(r,t){r.seq.push(t),r.map[t.id]=t}function uA(r,t,n){const s=r.name,l=s.length;for(Kh.lastIndex=0;;){const c=Kh.exec(s),f=Kh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){J_(n,p===void 0?new oA(h,r,t):new lA(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new cA(h),J_(n,_)),n=_}}}class Kc{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(n,f),m=t.getUniformLocation(n,h.name);uA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function $_(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const fA=37297;let hA=0;function dA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const tv=new _e;function pA(r){De._getMatrix(tv,De.workingColorSpace,r);const t=`mat3( ${tv.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ev(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+dA(r.getShaderSource(t),h)}else return c}function mA(r,t){const n=pA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gA={[fv]:"Linear",[hv]:"Reinhard",[dv]:"Cineon",[pv]:"ACESFilmic",[gv]:"AgX",[_v]:"Neutral",[mv]:"Custom"};function _A(r,t){const n=gA[t];return n===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wc=new Z;function vA(){De.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),n=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function SA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function yA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function jo(r){return r!==""}function nv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(MA,bA)}const EA=new Map;function bA(r,t){let n=ve[t];if(n===void 0){const s=EA.get(t);if(s!==void 0)n=ve[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(n)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(r){return r.replace(TA,AA)}function AA(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const RA={[qc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function CA(r){return RA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wA={[Os]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function DA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UA={[zr]:"ENVMAP_MODE_REFRACTION"};function NA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LA={[ep]:"ENVMAP_BLENDING_MULTIPLY",[Gy]:"ENVMAP_BLENDING_MIX",[Vy]:"ENVMAP_BLENDING_ADD"};function OA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LA[r.combine]||"ENVMAP_BLENDING_NONE"}function PA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function zA(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=CA(n),p=DA(n),g=NA(n),_=OA(n),S=PA(n),y=xA(n),b=SA(c),R=l.createProgram();let M,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(jo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(jo).join(`
`),x.length>0&&(x+=`
`)):(M=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),x=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?ve.tonemapping_pars_fragment:"",n.toneMapping!==Gi?_A("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,mA("linearToOutputTexel",n.outputColorSpace),vA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jo).join(`
`)),f=Jd(f),f=nv(f,n),f=iv(f,n),h=Jd(h),h=nv(h,n),h=iv(h,n),f=av(f),h=av(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+M+f,U=P+x+h,I=$_(l,l.VERTEX_SHADER,N),H=$_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,I),l.attachShader(R,H),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(R)||"",at=l.getShaderInfoLog(I)||"",dt=l.getShaderInfoLog(H)||"",ot=st.trim(),z=at.trim(),G=dt.trim();let et=!0,Mt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,I,H);else{const yt=ev(l,I,"vertex"),L=ev(l,H,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ot+`
`+yt+`
`+L)}else ot!==""?he("WebGLProgram: Program Info Log:",ot):(z===""||G==="")&&(Mt=!1);Mt&&(V.diagnostics={runnable:et,programLog:ot,vertexShader:{log:z,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(H),j=new Kc(l,R),C=yA(l,R)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,fA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=H,this}let FA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new BA(t),n.set(t,s)),s}}class BA{constructor(t){this.id=FA++,this.code=t,this.usedTimes=0}}function HA(r,t,n,s,l,c,f){const h=new Dv,m=new IA,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,V,st,at){const dt=st.fog,ot=at.geometry,z=C.isMeshStandardMaterial?st.environment:null,G=(C.isMeshStandardMaterial?n:t).get(C.envMap||z),et=G&&G.mapping===iu?G.image.height:null,Mt=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&he("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const yt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,L=yt!==void 0?yt.length:0;let $=0;ot.morphAttributes.position!==void 0&&($=1),ot.morphAttributes.normal!==void 0&&($=2),ot.morphAttributes.color!==void 0&&($=3);let pt,At,kt,tt;if(Mt){const Ce=Ii[Mt];pt=Ce.vertexShader,At=Ce.fragmentShader}else pt=C.vertexShader,At=C.fragmentShader,m.update(C),kt=m.getVertexShaderID(C),tt=m.getFragmentShaderID(C);const ft=r.getRenderTarget(),Nt=r.state.buffers.depth.getReversed(),Ht=at.isInstancedMesh===!0,Wt=at.isBatchedMesh===!0,Se=!!C.map,Ue=!!C.matcap,ce=!!G,gt=!!C.aoMap,Tt=!!C.lightMap,St=!!C.bumpMap,zt=!!C.normalMap,O=!!C.displacementMap,ee=!!C.emissiveMap,Bt=!!C.metalnessMap,ie=!!C.roughnessMap,wt=C.anisotropy>0,D=C.clearcoat>0,E=C.dispersion>0,W=C.iridescence>0,ct=C.sheen>0,xt=C.transmission>0,ut=wt&&!!C.anisotropyMap,Kt=D&&!!C.clearcoatMap,Ut=D&&!!C.clearcoatNormalMap,Qt=D&&!!C.clearcoatRoughnessMap,re=W&&!!C.iridescenceMap,Et=W&&!!C.iridescenceThicknessMap,Rt=ct&&!!C.sheenColorMap,qt=ct&&!!C.sheenRoughnessMap,Gt=!!C.specularMap,Lt=!!C.specularColorMap,me=!!C.specularIntensityMap,k=xt&&!!C.transmissionMap,Pt=xt&&!!C.thicknessMap,Ct=!!C.gradientMap,Vt=!!C.alphaMap,bt=C.alphaTest>0,vt=!!C.alphaHash,Dt=!!C.extensions;let ue=Gi;C.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Ie={shaderID:Mt,shaderType:C.type,shaderName:C.name,vertexShader:pt,fragmentShader:At,defines:C.defines,customVertexShaderID:kt,customFragmentShaderID:tt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&at._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&at.instanceColor!==null,instancingMorph:Ht&&at.morphTexture!==null,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ir,alphaToCoverage:!!C.alphaToCoverage,map:Se,matcap:Ue,envMap:ce,envMapMode:ce&&G.mapping,envMapCubeUVHeight:et,aoMap:gt,lightMap:Tt,bumpMap:St,normalMap:zt,displacementMap:O,emissiveMap:ee,normalMapObjectSpace:zt&&C.normalMapType===Wy,normalMapTangentSpace:zt&&C.normalMapType===Av,metalnessMap:Bt,roughnessMap:ie,anisotropy:wt,anisotropyMap:ut,clearcoat:D,clearcoatMap:Kt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:W,iridescenceMap:re,iridescenceThicknessMap:Et,sheen:ct,sheenColorMap:Rt,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:Lt,specularIntensityMap:me,transmission:xt,transmissionMap:k,thicknessMap:Pt,gradientMap:Ct,opaque:C.transparent===!1&&C.blending===Lr&&C.alphaToCoverage===!1,alphaMap:Vt,alphaTest:bt,alphaHash:vt,combine:C.combine,mapUv:Se&&R(C.map.channel),aoMapUv:gt&&R(C.aoMap.channel),lightMapUv:Tt&&R(C.lightMap.channel),bumpMapUv:St&&R(C.bumpMap.channel),normalMapUv:zt&&R(C.normalMap.channel),displacementMapUv:O&&R(C.displacementMap.channel),emissiveMapUv:ee&&R(C.emissiveMap.channel),metalnessMapUv:Bt&&R(C.metalnessMap.channel),roughnessMapUv:ie&&R(C.roughnessMap.channel),anisotropyMapUv:ut&&R(C.anisotropyMap.channel),clearcoatMapUv:Kt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:qt&&R(C.sheenRoughnessMap.channel),specularMapUv:Gt&&R(C.specularMap.channel),specularColorMapUv:Lt&&R(C.specularColorMap.channel),specularIntensityMapUv:me&&R(C.specularIntensityMap.channel),transmissionMapUv:k&&R(C.transmissionMap.channel),thicknessMapUv:Pt&&R(C.thicknessMap.channel),alphaMapUv:Vt&&R(C.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(zt||wt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ot.attributes.uv&&(Se||Vt),fog:!!dt,useFog:C.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Nt,skinning:at.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Se&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:ee&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===_a,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Dt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&C.extensions.multiDraw===!0||Wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(P(w,C),N(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function P(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function N(C,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function U(C){const w=b[C.type];let V;if(w){const st=Ii[w];V=xM.clone(st.uniforms)}else V=C.uniforms;return V}function I(C,w){let V=_.get(w);return V!==void 0?++V.usedTimes:(V=new zA(r,w,C,c),g.push(V),_.set(w,V)),V}function H(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function F(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:I,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:j}}function GA(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function VA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function rv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ov(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(_,S,y,b,R,M){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:y,groupOrder:b,renderOrder:_.renderOrder,z:R,group:M},r[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=y,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=R,x.group=M),t++,x}function h(_,S,y,b,R,M){const x=f(_,S,y,b,R,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):n.push(x)}function m(_,S,y,b,R,M){const x=f(_,S,y,b,R,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):n.unshift(x)}function p(_,S){n.length>1&&n.sort(_||VA),s.length>1&&s.sort(S||rv),l.length>1&&l.sort(S||rv)}function g(){for(let _=t,S=r.length;_<S;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function XA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new ov,r.set(s,[f])):l>=c.length?(f=new ov,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function kA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new Re};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=n,n}}}function WA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let qA=0;function YA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ZA(r){const t=new kA,n=WA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new Je,f=new Je;function h(p){let g=0,_=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,b=0,R=0,M=0,x=0,P=0,N=0,U=0,I=0,H=0,F=0;p.sort(YA);for(let C=0,w=p.length;C<w;C++){const V=p[C],st=V.color,at=V.intensity,dt=V.distance;let ot=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Fr?ot=V.shadow.map.texture:ot=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=st.r*at,_+=st.g*at,S+=st.b*at;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],at);F++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,et=n.get(V);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=ot,s.directionalShadowMatrix[y]=V.shadow.matrix,P++}s.directional[y]=z,y++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(st).multiplyScalar(at),z.distance=dt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[R]=z;const G=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,G.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[R]=G.matrix,V.castShadow){const et=n.get(V);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,s.spotShadow[R]=et,s.spotShadowMap[R]=ot,U++}R++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(st).multiplyScalar(at),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=z,M++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const G=V.shadow,et=n.get(V);et.shadowIntensity=G.intensity,et.shadowBias=G.bias,et.shadowNormalBias=G.normalBias,et.shadowRadius=G.radius,et.shadowMapSize=G.mapSize,et.shadowCameraNear=G.camera.near,et.shadowCameraFar=G.camera.far,s.pointShadow[b]=et,s.pointShadowMap[b]=ot,s.pointShadowMatrix[b]=V.shadow.matrix,N++}s.point[b]=z,b++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(at),z.groundColor.copy(V.groundColor).multiplyScalar(at),s.hemi[x]=z,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==P||j.numPointShadows!==N||j.numSpotShadows!==U||j.numSpotMaps!==I||j.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+I-H,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=F,j.directionalLength=y,j.pointLength=b,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=P,j.numPointShadows=N,j.numSpotShadows=U,j.numSpotMaps=I,j.numLightProbes=F,s.version=qA++)}function m(p,g){let _=0,S=0,y=0,b=0,R=0;const M=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const N=p[x];if(N.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),_++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:s}}function lv(r){const t=new ZA(r),n=[],s=[];function l(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function jA(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new lv(r),t.set(l,[h])):c>=f.length?(h=new lv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],$A=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],cv=new Je,qo=new Z,Jh=new Z;function tR(r,t,n){let s=new fp;const l=new Xt,c=new Xt,f=new nn,h=new hE,m=new dE,p={},g=n.maxTextureSize,_={[as]:Yn,[Yn]:as,[_a]:_a},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:QA,fragmentShader:KA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new _i;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Wi(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let x=this.type;this.render=function(H,F,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===My&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=qc);const C=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),st=r.state;st.setBlending(xa),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=x!==this.type;at&&F.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ot=>ot.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ot=H.length;dt<ot;dt++){const z=H[dt],G=z.shadow;if(G===void 0){he("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const et=G.getFrameExtents();if(l.multiply(et),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/et.x),l.x=c.x*et.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/et.y),l.y=c.y*et.y,G.mapSize.y=c.y)),G.map===null||at===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Yo){if(z.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vi(l.x,l.y,{format:Fr,type:ya,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new nl(l.x,l.y,Bi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else{z.isPointLight?(G.map=new Iv(l.x),G.map.depthTexture=new DM(l.x,Xi)):(G.map=new Vi(l.x,l.y),G.map.depthTexture=new nl(l.x,l.y,Xi)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Ma;const yt=r.state.buffers.depth.getReversed();this.type===qc?(G.map.depthTexture.compareFunction=yt?cp:lp,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn)}G.camera.updateProjectionMatrix()}const Mt=G.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<Mt;yt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,yt),r.clear();else{yt===0&&(r.setRenderTarget(G.map),r.clear());const L=G.getViewport(yt);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),st.viewport(f)}if(z.isPointLight){const L=G.camera,$=G.matrix,pt=z.distance||L.far;pt!==L.far&&(L.far=pt,L.updateProjectionMatrix()),qo.setFromMatrixPosition(z.matrixWorld),L.position.copy(qo),Jh.copy(L.position),Jh.add(JA[yt]),L.up.copy($A[yt]),L.lookAt(Jh),L.updateMatrixWorld(),$.makeTranslation(-qo.x,-qo.y,-qo.z),cv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G._frustum.setFromProjectionMatrix(cv,L.coordinateSystem,L.reversedDepth)}else G.updateMatrices(z);s=G.getFrustum(),U(F,j,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Yo&&P(G,j),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(C,w,V)};function P(H,F){const j=t.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Vi(l.x,l.y,{format:Fr,type:ya})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(F,null,j,S,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(F,null,j,y,R,null)}function N(H,F,j,C){let w=null;const V=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=j.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=w.uuid,at=F.uuid;let dt=p[st];dt===void 0&&(dt={},p[st]=dt);let ot=dt[at];ot===void 0&&(ot=w.clone(),dt[at]=ot,F.addEventListener("dispose",I)),w=ot}if(w.visible=F.visible,w.wireframe=F.wireframe,C===Yo?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=r.properties.get(w);st.light=j}return w}function U(H,F,j,C,w){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Yo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const at=t.update(H),dt=H.material;if(Array.isArray(dt)){const ot=at.groups;for(let z=0,G=ot.length;z<G;z++){const et=ot[z],Mt=dt[et.materialIndex];if(Mt&&Mt.visible){const yt=N(H,Mt,C,w);H.onBeforeShadow(r,H,F,j,at,yt,et),r.renderBufferDirect(j,null,at,yt,H,et),H.onAfterShadow(r,H,F,j,at,yt,et)}}}else if(dt.visible){const ot=N(H,dt,C,w);H.onBeforeShadow(r,H,F,j,at,ot,null),r.renderBufferDirect(j,null,at,ot,H,null),H.onAfterShadow(r,H,F,j,at,ot,null)}}const st=H.children;for(let at=0,dt=st.length;at<dt;at++)U(st[at],F,j,C,w)}function I(H){H.target.removeEventListener("dispose",I);for(const j in p){const C=p[j],w=H.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const eR={[ad]:sd,[rd]:cd,[od]:ud,[Pr]:ld,[sd]:ad,[cd]:rd,[ud]:od,[ld]:Pr};function nR(r,t){function n(){let k=!1;const Pt=new nn;let Ct=null;const Vt=new nn(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!k&&(r.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){k=bt},setClear:function(bt,vt,Dt,ue,Ie){Ie===!0&&(bt*=ue,vt*=ue,Dt*=ue),Pt.set(bt,vt,Dt,ue),Vt.equals(Pt)===!1&&(r.clearColor(bt,vt,Dt,ue),Vt.copy(Pt))},reset:function(){k=!1,Ct=null,Vt.set(-1,0,0,0)}}}function s(){let k=!1,Pt=!1,Ct=null,Vt=null,bt=null;return{setReversed:function(vt){if(Pt!==vt){const Dt=t.get("EXT_clip_control");vt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Pt=vt;const ue=bt;bt=null,this.setClear(ue)}},getReversed:function(){return Pt},setTest:function(vt){vt?ft(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(vt){Ct!==vt&&!k&&(r.depthMask(vt),Ct=vt)},setFunc:function(vt){if(Pt&&(vt=eR[vt]),Vt!==vt){switch(vt){case ad:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case rd:r.depthFunc(r.LESS);break;case Pr:r.depthFunc(r.LEQUAL);break;case od:r.depthFunc(r.EQUAL);break;case ld:r.depthFunc(r.GEQUAL);break;case cd:r.depthFunc(r.GREATER);break;case ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Vt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){bt!==vt&&(Pt&&(vt=1-vt),r.clearDepth(vt),bt=vt)},reset:function(){k=!1,Ct=null,Vt=null,bt=null,Pt=!1}}}function l(){let k=!1,Pt=null,Ct=null,Vt=null,bt=null,vt=null,Dt=null,ue=null,Ie=null;return{setTest:function(Ce){k||(Ce?ft(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(Ce){Pt!==Ce&&!k&&(r.stencilMask(Ce),Pt=Ce)},setFunc:function(Ce,Un,vi){(Ct!==Ce||Vt!==Un||bt!==vi)&&(r.stencilFunc(Ce,Un,vi),Ct=Ce,Vt=Un,bt=vi)},setOp:function(Ce,Un,vi){(vt!==Ce||Dt!==Un||ue!==vi)&&(r.stencilOp(Ce,Un,vi),vt=Ce,Dt=Un,ue=vi)},setLocked:function(Ce){k=Ce},setClear:function(Ce){Ie!==Ce&&(r.clearStencil(Ce),Ie=Ce)},reset:function(){k=!1,Pt=null,Ct=null,Vt=null,bt=null,vt=null,Dt=null,ue=null,Ie=null}}}const c=new n,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],b=null,R=!1,M=null,x=null,P=null,N=null,U=null,I=null,H=null,F=new Re(0,0,0),j=0,C=!1,w=null,V=null,st=null,at=null,dt=null;const ot=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const et=r.getParameter(r.VERSION);et.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(et)[1]),z=G>=1):et.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),z=G>=2);let Mt=null,yt={};const L=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),pt=new nn().fromArray(L),At=new nn().fromArray($);function kt(k,Pt,Ct,Vt){const bt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(k,vt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<Ct;Dt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Pt+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return vt}const tt={};tt[r.TEXTURE_2D]=kt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=kt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=kt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=kt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ft(r.DEPTH_TEST),f.setFunc(Pr),St(!1),zt(r_),ft(r.CULL_FACE),gt(xa);function ft(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Nt(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Ht(k,Pt){return _[k]!==Pt?(r.bindFramebuffer(k,Pt),_[k]=Pt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Wt(k,Pt){let Ct=y,Vt=!1;if(k){Ct=S.get(Pt),Ct===void 0&&(Ct=[],S.set(Pt,Ct));const bt=k.textures;if(Ct.length!==bt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Dt=bt.length;vt<Dt;vt++)Ct[vt]=r.COLOR_ATTACHMENT0+vt;Ct.length=bt.length,Vt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Vt=!0);Vt&&r.drawBuffers(Ct)}function Se(k){return b!==k?(r.useProgram(k),b=k,!0):!1}const Ue={[Ds]:r.FUNC_ADD,[by]:r.FUNC_SUBTRACT,[Ty]:r.FUNC_REVERSE_SUBTRACT};Ue[Ay]=r.MIN,Ue[Ry]=r.MAX;const ce={[Cy]:r.ZERO,[wy]:r.ONE,[Dy]:r.SRC_COLOR,[nd]:r.SRC_ALPHA,[zy]:r.SRC_ALPHA_SATURATE,[Oy]:r.DST_COLOR,[Ny]:r.DST_ALPHA,[Uy]:r.ONE_MINUS_SRC_COLOR,[id]:r.ONE_MINUS_SRC_ALPHA,[Py]:r.ONE_MINUS_DST_COLOR,[Ly]:r.ONE_MINUS_DST_ALPHA,[Fy]:r.CONSTANT_COLOR,[Iy]:r.ONE_MINUS_CONSTANT_COLOR,[By]:r.CONSTANT_ALPHA,[Hy]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(k,Pt,Ct,Vt,bt,vt,Dt,ue,Ie,Ce){if(k===xa){R===!0&&(Nt(r.BLEND),R=!1);return}if(R===!1&&(ft(r.BLEND),R=!0),k!==Ey){if(k!==M||Ce!==C){if((x!==Ds||U!==Ds)&&(r.blendEquation(r.FUNC_ADD),x=Ds,U=Ds),Ce)switch(k){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ed:r.blendFunc(r.ONE,r.ONE);break;case o_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case l_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",k);break}else switch(k){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ed:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case o_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",k);break}P=null,N=null,I=null,H=null,F.set(0,0,0),j=0,M=k,C=Ce}return}bt=bt||Pt,vt=vt||Ct,Dt=Dt||Vt,(Pt!==x||bt!==U)&&(r.blendEquationSeparate(Ue[Pt],Ue[bt]),x=Pt,U=bt),(Ct!==P||Vt!==N||vt!==I||Dt!==H)&&(r.blendFuncSeparate(ce[Ct],ce[Vt],ce[vt],ce[Dt]),P=Ct,N=Vt,I=vt,H=Dt),(ue.equals(F)===!1||Ie!==j)&&(r.blendColor(ue.r,ue.g,ue.b,Ie),F.copy(ue),j=Ie),M=k,C=!1}function Tt(k,Pt){k.side===_a?Nt(r.CULL_FACE):ft(r.CULL_FACE);let Ct=k.side===Yn;Pt&&(Ct=!Ct),St(Ct),k.blending===Lr&&k.transparent===!1?gt(xa):gt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Vt=k.stencilWrite;h.setTest(Vt),Vt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function St(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function zt(k){k!==Sy?(ft(r.CULL_FACE),k!==V&&(k===r_?r.cullFace(r.BACK):k===yy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),V=k}function O(k){k!==st&&(z&&r.lineWidth(k),st=k)}function ee(k,Pt,Ct){k?(ft(r.POLYGON_OFFSET_FILL),(at!==Pt||dt!==Ct)&&(r.polygonOffset(Pt,Ct),at=Pt,dt=Ct)):Nt(r.POLYGON_OFFSET_FILL)}function Bt(k){k?ft(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function ie(k){k===void 0&&(k=r.TEXTURE0+ot-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function wt(k,Pt,Ct){Ct===void 0&&(Mt===null?Ct=r.TEXTURE0+ot-1:Ct=Mt);let Vt=yt[Ct];Vt===void 0&&(Vt={type:void 0,texture:void 0},yt[Ct]=Vt),(Vt.type!==k||Vt.texture!==Pt)&&(Mt!==Ct&&(r.activeTexture(Ct),Mt=Ct),r.bindTexture(k,Pt||tt[k]),Vt.type=k,Vt.texture=Pt)}function D(){const k=yt[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function ct(){try{r.texSubImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function xt(){try{r.texSubImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function Ut(){try{r.texStorage2D(...arguments)}catch(k){we("WebGLState:",k)}}function Qt(){try{r.texStorage3D(...arguments)}catch(k){we("WebGLState:",k)}}function re(){try{r.texImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function Et(){try{r.texImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function Rt(k){pt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function qt(k){At.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function Gt(k,Pt){let Ct=p.get(Pt);Ct===void 0&&(Ct=new WeakMap,p.set(Pt,Ct));let Vt=Ct.get(k);Vt===void 0&&(Vt=r.getUniformBlockIndex(Pt,k.name),Ct.set(k,Vt))}function Lt(k,Pt){const Vt=p.get(Pt).get(k);m.get(Pt)!==Vt&&(r.uniformBlockBinding(Pt,Vt,k.__bindingPointIndex),m.set(Pt,Vt))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Mt=null,yt={},_={},S=new WeakMap,y=[],b=null,R=!1,M=null,x=null,P=null,N=null,U=null,I=null,H=null,F=new Re(0,0,0),j=0,C=!1,w=null,V=null,st=null,at=null,dt=null,pt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ft,disable:Nt,bindFramebuffer:Ht,drawBuffers:Wt,useProgram:Se,setBlending:gt,setMaterial:Tt,setFlipSided:St,setCullFace:zt,setLineWidth:O,setPolygonOffset:ee,setScissorTest:Bt,activeTexture:ie,bindTexture:wt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:re,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Lt,texStorage2D:Ut,texStorage3D:Qt,texSubImage2D:ct,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Kt,scissor:Rt,viewport:qt,reset:me}}function iR(r,t,n,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,g=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,E){return y?new OffscreenCanvas(D,E):eu("canvas")}function R(D,E,W){let ct=1;const xt=wt(D);if((xt.width>W||xt.height>W)&&(ct=W/Math.max(xt.width,xt.height)),ct<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ut=Math.floor(ct*xt.width),Kt=Math.floor(ct*xt.height);_===void 0&&(_=b(ut,Kt));const Ut=E?b(ut,Kt):_;return Ut.width=ut,Ut.height=Kt,Ut.getContext("2d").drawImage(D,0,0,ut,Kt),he("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Kt+")."),Ut}else return"data"in D&&he("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(D,E,W,ct,xt=!1){if(D!==null){if(r[D]!==void 0)return r[D];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut=E;if(E===r.RED&&(W===r.FLOAT&&(ut=r.R32F),W===r.HALF_FLOAT&&(ut=r.R16F),W===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.R8UI),W===r.UNSIGNED_SHORT&&(ut=r.R16UI),W===r.UNSIGNED_INT&&(ut=r.R32UI),W===r.BYTE&&(ut=r.R8I),W===r.SHORT&&(ut=r.R16I),W===r.INT&&(ut=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ut=r.RG32F),W===r.HALF_FLOAT&&(ut=r.RG16F),W===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RG8UI),W===r.UNSIGNED_SHORT&&(ut=r.RG16UI),W===r.UNSIGNED_INT&&(ut=r.RG32UI),W===r.BYTE&&(ut=r.RG8I),W===r.SHORT&&(ut=r.RG16I),W===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),W===r.UNSIGNED_INT&&(ut=r.RGB32UI),W===r.BYTE&&(ut=r.RGB8I),W===r.SHORT&&(ut=r.RGB16I),W===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),W===r.UNSIGNED_INT&&(ut=r.RGBA32UI),W===r.BYTE&&(ut=r.RGBA8I),W===r.SHORT&&(ut=r.RGBA16I),W===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const Kt=xt?$c:De.getTransfer(ct);W===r.FLOAT&&(ut=r.RGBA32F),W===r.HALF_FLOAT&&(ut=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ut=Kt===Ve?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(D,E){let W;return D?E===null||E===Xi||E===tl?W=r.DEPTH24_STENCIL8:E===Bi?W=r.DEPTH32F_STENCIL8:E===$o&&(W=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===tl?W=r.DEPTH_COMPONENT24:E===Bi?W=r.DEPTH_COMPONENT32F:E===$o&&(W=r.DEPTH_COMPONENT16),W}function I(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function H(D){const E=D.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&g.delete(E)}function F(D){const E=D.target;E.removeEventListener("dispose",F),w(E)}function j(D){const E=s.get(D);if(E.__webglInit===void 0)return;const W=D.source,ct=S.get(W);if(ct){const xt=ct[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(D),Object.keys(ct).length===0&&S.delete(W)}s.remove(D)}function C(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const W=D.source,ct=S.get(W);delete ct[E.__cacheKey],f.memory.textures--}function w(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let xt=0;xt<E.__webglFramebuffer[ct].length;xt++)r.deleteFramebuffer(E.__webglFramebuffer[ct][xt]);else r.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)r.deleteFramebuffer(E.__webglFramebuffer[ct]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=D.textures;for(let ct=0,xt=W.length;ct<xt;ct++){const ut=s.get(W[ct]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(W[ct])}s.remove(D)}let V=0;function st(){V=0}function at(){const D=V;return D>=l.maxTextures&&he("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function dt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ot(D,E){const W=s.get(D);if(D.isVideoTexture&&Bt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ct=D.image;if(ct===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(W,D,E);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function z(D,E){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){tt(W,D,E);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function G(D,E){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){tt(W,D,E);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function et(D,E){const W=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ft(W,D,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const Mt={[dd]:r.REPEAT,[va]:r.CLAMP_TO_EDGE,[pd]:r.MIRRORED_REPEAT},yt={[wn]:r.NEAREST,[Xy]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[vh]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},L={[qy]:r.NEVER,[Ky]:r.ALWAYS,[Yy]:r.LESS,[lp]:r.LEQUAL,[Zy]:r.EQUAL,[cp]:r.GEQUAL,[jy]:r.GREATER,[Qy]:r.NOTEQUAL};function $(D,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===vh||E.magFilter===Sc||E.magFilter===Ns||E.minFilter===Pn||E.minFilter===vh||E.minFilter===Sc||E.minFilter===Ns)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Mt[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Mt[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Mt[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,yt[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Sc&&E.minFilter!==Ns||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function pt(D,E){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",H));const ct=E.source;let xt=S.get(ct);xt===void 0&&(xt={},S.set(ct,xt));const ut=dt(E);if(ut!==D.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),xt[ut].usedTimes++;const Kt=xt[D.__cacheKey];Kt!==void 0&&(xt[D.__cacheKey].usedTimes--,Kt.usedTimes===0&&C(E)),D.__cacheKey=ut,D.__webglTexture=xt[ut].texture}return W}function At(D,E,W){return Math.floor(Math.floor(D/W)/E)}function kt(D,E,W,ct){const ut=D.updateRanges;if(ut.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,ct,E.data);else{ut.sort((Et,Rt)=>Et.start-Rt.start);let Kt=0;for(let Et=1;Et<ut.length;Et++){const Rt=ut[Kt],qt=ut[Et],Gt=Rt.start+Rt.count,Lt=At(qt.start,E.width,4),me=At(Rt.start,E.width,4);qt.start<=Gt+1&&Lt===me&&At(qt.start+qt.count-1,E.width,4)===Lt?Rt.count=Math.max(Rt.count,qt.start+qt.count-Rt.start):(++Kt,ut[Kt]=qt)}ut.length=Kt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Rt=ut.length;Et<Rt;Et++){const qt=ut[Et],Gt=Math.floor(qt.start/4),Lt=Math.ceil(qt.count/4),me=Gt%E.width,k=Math.floor(Gt/E.width),Pt=Lt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),n.texSubImage2D(r.TEXTURE_2D,0,me,k,Pt,Ct,W,ct,E.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,re)}}function tt(D,E,W){let ct=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=r.TEXTURE_3D);const xt=pt(D,E),ut=E.source;n.bindTexture(ct,D.__webglTexture,r.TEXTURE0+W);const Kt=s.get(ut);if(ut.version!==Kt.__version||xt===!0){n.activeTexture(r.TEXTURE0+W);const Ut=De.getPrimaries(De.workingColorSpace),Qt=E.colorSpace===ns?null:De.getPrimaries(E.colorSpace),re=E.colorSpace===ns||Ut===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Et=R(E.image,!1,l.maxTextureSize);Et=ie(E,Et);const Rt=c.convert(E.format,E.colorSpace),qt=c.convert(E.type);let Gt=N(E.internalFormat,Rt,qt,E.colorSpace,E.isVideoTexture);$(ct,E);let Lt;const me=E.mipmaps,k=E.isVideoTexture!==!0,Pt=Kt.__version===void 0||xt===!0,Ct=ut.dataReady,Vt=I(E,Et);if(E.isDepthTexture)Gt=U(E.format===Ls,E.type),Pt&&(k?n.texStorage2D(r.TEXTURE_2D,1,Gt,Et.width,Et.height):n.texImage2D(r.TEXTURE_2D,0,Gt,Et.width,Et.height,0,Rt,qt,null));else if(E.isDataTexture)if(me.length>0){k&&Pt&&n.texStorage2D(r.TEXTURE_2D,Vt,Gt,me[0].width,me[0].height);for(let bt=0,vt=me.length;bt<vt;bt++)Lt=me[bt],k?Ct&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Rt,qt,Lt.data):n.texImage2D(r.TEXTURE_2D,bt,Gt,Lt.width,Lt.height,0,Rt,qt,Lt.data);E.generateMipmaps=!1}else k?(Pt&&n.texStorage2D(r.TEXTURE_2D,Vt,Gt,Et.width,Et.height),Ct&&kt(E,Et,Rt,qt)):n.texImage2D(r.TEXTURE_2D,0,Gt,Et.width,Et.height,0,Rt,qt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Pt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,Gt,me[0].width,me[0].height,Et.depth);for(let bt=0,vt=me.length;bt<vt;bt++)if(Lt=me[bt],E.format!==Ci)if(Rt!==null)if(k){if(Ct)if(E.layerUpdates.size>0){const Dt=H_(Lt.width,Lt.height,E.format,E.type);for(const ue of E.layerUpdates){const Ie=Lt.data.subarray(ue*Dt/Lt.data.BYTES_PER_ELEMENT,(ue+1)*Dt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ue,Lt.width,Lt.height,1,Rt,Ie)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Et.depth,Rt,Lt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Gt,Lt.width,Lt.height,Et.depth,0,Lt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Et.depth,Rt,qt,Lt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,bt,Gt,Lt.width,Lt.height,Et.depth,0,Rt,qt,Lt.data)}else{k&&Pt&&n.texStorage2D(r.TEXTURE_2D,Vt,Gt,me[0].width,me[0].height);for(let bt=0,vt=me.length;bt<vt;bt++)Lt=me[bt],E.format!==Ci?Rt!==null?k?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Rt,Lt.data):n.compressedTexImage2D(r.TEXTURE_2D,bt,Gt,Lt.width,Lt.height,0,Lt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ct&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Rt,qt,Lt.data):n.texImage2D(r.TEXTURE_2D,bt,Gt,Lt.width,Lt.height,0,Rt,qt,Lt.data)}else if(E.isDataArrayTexture)if(k){if(Pt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,Gt,Et.width,Et.height,Et.depth),Ct)if(E.layerUpdates.size>0){const bt=H_(Et.width,Et.height,E.format,E.type);for(const vt of E.layerUpdates){const Dt=Et.data.subarray(vt*bt/Et.data.BYTES_PER_ELEMENT,(vt+1)*bt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,Rt,qt,Dt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Rt,qt,Et.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Gt,Et.width,Et.height,Et.depth,0,Rt,qt,Et.data);else if(E.isData3DTexture)k?(Pt&&n.texStorage3D(r.TEXTURE_3D,Vt,Gt,Et.width,Et.height,Et.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Rt,qt,Et.data)):n.texImage3D(r.TEXTURE_3D,0,Gt,Et.width,Et.height,Et.depth,0,Rt,qt,Et.data);else if(E.isFramebufferTexture){if(Pt)if(k)n.texStorage2D(r.TEXTURE_2D,Vt,Gt,Et.width,Et.height);else{let bt=Et.width,vt=Et.height;for(let Dt=0;Dt<Vt;Dt++)n.texImage2D(r.TEXTURE_2D,Dt,Gt,bt,vt,0,Rt,qt,null),bt>>=1,vt>>=1}}else if(me.length>0){if(k&&Pt){const bt=wt(me[0]);n.texStorage2D(r.TEXTURE_2D,Vt,Gt,bt.width,bt.height)}for(let bt=0,vt=me.length;bt<vt;bt++)Lt=me[bt],k?Ct&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Rt,qt,Lt):n.texImage2D(r.TEXTURE_2D,bt,Gt,Rt,qt,Lt);E.generateMipmaps=!1}else if(k){if(Pt){const bt=wt(Et);n.texStorage2D(r.TEXTURE_2D,Vt,Gt,bt.width,bt.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,qt,Et)}else n.texImage2D(r.TEXTURE_2D,0,Gt,Rt,qt,Et);M(E)&&x(ct),Kt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ft(D,E,W){if(E.image.length!==6)return;const ct=pt(D,E),xt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+W);const ut=s.get(xt);if(xt.version!==ut.__version||ct===!0){n.activeTexture(r.TEXTURE0+W);const Kt=De.getPrimaries(De.workingColorSpace),Ut=E.colorSpace===ns?null:De.getPrimaries(E.colorSpace),Qt=E.colorSpace===ns||Kt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const re=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let vt=0;vt<6;vt++)!re&&!Et?Rt[vt]=R(E.image[vt],!0,l.maxCubemapSize):Rt[vt]=Et?E.image[vt].image:E.image[vt],Rt[vt]=ie(E,Rt[vt]);const qt=Rt[0],Gt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),me=N(E.internalFormat,Gt,Lt,E.colorSpace),k=E.isVideoTexture!==!0,Pt=ut.__version===void 0||ct===!0,Ct=xt.dataReady;let Vt=I(E,qt);$(r.TEXTURE_CUBE_MAP,E);let bt;if(re){k&&Pt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,me,qt.width,qt.height);for(let vt=0;vt<6;vt++){bt=Rt[vt].mipmaps;for(let Dt=0;Dt<bt.length;Dt++){const ue=bt[Dt];E.format!==Ci?Gt!==null?k?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,ue.width,ue.height,Gt,ue.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,me,ue.width,ue.height,0,ue.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,ue.width,ue.height,Gt,Lt,ue.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,me,ue.width,ue.height,0,Gt,Lt,ue.data)}}}else{if(bt=E.mipmaps,k&&Pt){bt.length>0&&Vt++;const vt=wt(Rt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,me,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){k?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Rt[vt].width,Rt[vt].height,Gt,Lt,Rt[vt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,me,Rt[vt].width,Rt[vt].height,0,Gt,Lt,Rt[vt].data);for(let Dt=0;Dt<bt.length;Dt++){const Ie=bt[Dt].image[vt].image;k?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Ie.width,Ie.height,Gt,Lt,Ie.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,me,Ie.width,Ie.height,0,Gt,Lt,Ie.data)}}else{k?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Gt,Lt,Rt[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,me,Gt,Lt,Rt[vt]);for(let Dt=0;Dt<bt.length;Dt++){const ue=bt[Dt];k?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Gt,Lt,ue.image[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,me,Gt,Lt,ue.image[vt])}}}M(E)&&x(r.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Nt(D,E,W,ct,xt,ut){const Kt=c.convert(W.format,W.colorSpace),Ut=c.convert(W.type),Qt=N(W.internalFormat,Kt,Ut,W.colorSpace),re=s.get(E),Et=s.get(W);if(Et.__renderTarget=E,!re.__hasExternalTextures){const Rt=Math.max(1,E.width>>ut),qt=Math.max(1,E.height>>ut);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?n.texImage3D(xt,ut,Qt,Rt,qt,E.depth,0,Kt,Ut,null):n.texImage2D(xt,ut,Qt,Rt,qt,0,Kt,Ut,null)}n.bindFramebuffer(r.FRAMEBUFFER,D),ee(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,xt,Et.__webglTexture,0,O(E)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,xt,Et.__webglTexture,ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(D,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const ct=E.depthTexture,xt=ct&&ct.isDepthTexture?ct.type:null,ut=U(E.stencilBuffer,xt),Kt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ee(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(E),ut,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(E),ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,D)}else{const ct=E.textures;for(let xt=0;xt<ct.length;xt++){const ut=ct[xt],Kt=c.convert(ut.format,ut.colorSpace),Ut=c.convert(ut.type),Qt=N(ut.internalFormat,Kt,Ut,ut.colorSpace);ee(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(E),Qt,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(E),Qt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Wt(D,E,W){const ct=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),$(r.TEXTURE_CUBE_MAP,E.depthTexture);const re=c.convert(E.depthTexture.format),Et=c.convert(E.depthTexture.type);let Rt;E.depthTexture.format===Ma?Rt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(Rt=r.DEPTH24_STENCIL8);for(let qt=0;qt<6;qt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+qt,0,Rt,E.width,E.height,0,re,Et,null)}}else ot(E.depthTexture,0);const ut=xt.__webglTexture,Kt=O(E),Ut=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Qt=E.depthTexture.format===Ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)ee(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Ut,ut,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Ut,ut,0);else if(E.depthTexture.format===Ls)ee(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Ut,ut,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Ut,ut,0);else throw new Error("Unknown depthTexture format")}function Se(D){const E=s.get(D),W=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ct=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",xt)};ct.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ct}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ct=0;ct<6;ct++)Wt(E.__webglFramebuffer[ct],D,ct);else{const ct=D.texture.mipmaps;ct&&ct.length>0?Wt(E.__webglFramebuffer[0],D,0):Wt(E.__webglFramebuffer,D,0)}else if(W){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=r.createRenderbuffer(),Ht(E.__webglDepthbuffer[ct],D,!1);else{const xt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ut)}}else{const ct=D.texture.mipmaps;if(ct&&ct.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ht(E.__webglDepthbuffer,D,!1);else{const xt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ut)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(D,E,W){const ct=s.get(D);E!==void 0&&Nt(ct.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Se(D)}function ce(D){const E=D.texture,W=s.get(D),ct=s.get(E);D.addEventListener("dispose",F);const xt=D.textures,ut=D.isWebGLCubeRenderTarget===!0,Kt=xt.length>1;if(Kt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=E.version,f.memory.textures++),ut){W.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ut]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)W.__webglFramebuffer[Ut][Qt]=r.createFramebuffer()}else W.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)W.__webglFramebuffer[Ut]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Ut=0,Qt=xt.length;Ut<Qt;Ut++){const re=s.get(xt[Ut]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&ee(D)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ut=0;Ut<xt.length;Ut++){const Qt=xt[Ut];W.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ut]);const re=c.convert(Qt.format,Qt.colorSpace),Et=c.convert(Qt.type),Rt=N(Qt.internalFormat,re,Et,Qt.colorSpace,D.isXRRenderTarget===!0),qt=O(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Rt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(W.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){n.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),$(r.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Nt(W.__webglFramebuffer[Ut][Qt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt);else Nt(W.__webglFramebuffer[Ut],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(E)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Ut=0,Qt=xt.length;Ut<Qt;Ut++){const re=xt[Ut],Et=s.get(re);let Rt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Rt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Et.__webglTexture),$(Rt,re),Nt(W.__webglFramebuffer,D,re,r.COLOR_ATTACHMENT0+Ut,Rt,0),M(re)&&x(Rt)}n.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ut,ct.__webglTexture),$(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Nt(W.__webglFramebuffer[Qt],D,E,r.COLOR_ATTACHMENT0,Ut,Qt);else Nt(W.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,Ut,0);M(E)&&x(Ut),n.unbindTexture()}D.depthBuffer&&Se(D)}function gt(D){const E=D.textures;for(let W=0,ct=E.length;W<ct;W++){const xt=E[W];if(M(xt)){const ut=P(D),Kt=s.get(xt).__webglTexture;n.bindTexture(ut,Kt),x(ut),n.unbindTexture()}}}const Tt=[],St=[];function zt(D){if(D.samples>0){if(ee(D)===!1){const E=D.textures,W=D.width,ct=D.height;let xt=r.COLOR_BUFFER_BIT;const ut=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(D),Ut=E.length>1;if(Ut)for(let re=0;re<E.length;re++)n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Qt=D.texture.mipmaps;Qt&&Qt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let re=0;re<E.length;re++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[re]);const Et=s.get(E[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,W,ct,0,0,W,ct,xt,r.NEAREST),m===!0&&(Tt.length=0,St.length=0,Tt.push(r.COLOR_ATTACHMENT0+re),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Tt.push(ut),St.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,St)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let re=0;re<E.length;re++){n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[re]);const Et=s.get(E[re]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,Et,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function O(D){return Math.min(l.maxSamples,D.samples)}function ee(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(D){const E=f.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function ie(D,E){const W=D.colorSpace,ct=D.format,xt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Ir&&W!==ns&&(De.getTransfer(W)===Ve?(ct!==Ci||xt!==ai)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",W)),E}function wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=ot,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=et,this.rebindTextures=Ue,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function aR(r,t){function n(s,l=ns){let c;const f=De.getTransfer(l);if(s===ai)return r.UNSIGNED_BYTE;if(s===ip)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===yv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Mv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===xv)return r.BYTE;if(s===Sv)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===np)return r.INT;if(s===Xi)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===Ev)return r.ALPHA;if(s===bv)return r.RGB;if(s===Ci)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===Tv)return r.RED;if(s===sp)return r.RED_INTEGER;if(s===Fr)return r.RG;if(s===rp)return r.RG_INTEGER;if(s===op)return r.RGBA_INTEGER;if(s===Yc||s===Zc||s===jc||s===Qc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===md||s===gd||s===_d||s===vd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xd||s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xd||s===Sd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Md)return c.COMPRESSED_R11_EAC;if(s===Ed)return c.COMPRESSED_SIGNED_R11_EAC;if(s===bd)return c.COMPRESSED_RG11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ad)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hd||s===Gd||s===Vd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Hd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===kd||s===Wd||s===qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new Hv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new qi({vertexShader:sR,fragmentShader:rR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wi(new su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lR extends Gr{constructor(t,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,S=null,y=null,b=null;const R=typeof XRWebGLBinding<"u",M=new oR,x={},P=n.getContextAttributes();let N=null,U=null;const I=[],H=[],F=new Xt;let j=null;const C=new qn;C.viewport=new nn;const w=new qn;w.viewport=new nn;const V=[C,w],st=new vE;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=I[tt];return ft===void 0&&(ft=new Gh,I[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=I[tt];return ft===void 0&&(ft=new Gh,I[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=I[tt];return ft===void 0&&(ft=new Gh,I[tt]=ft),ft.getHandSpace()};function ot(tt){const ft=H.indexOf(tt.inputSource);if(ft===-1)return;const Nt=I[ft];Nt!==void 0&&(Nt.update(tt.inputSource,tt.frame,p||f),Nt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let tt=0;tt<I.length;tt++){const ft=H[tt];ft!==null&&(H[tt]=null,I[tt].disconnect(ft))}at=null,dt=null,M.reset();for(const tt in x)delete x[tt];t.setRenderTarget(N),y=null,S=null,_=null,l=null,U=null,kt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await n.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Ht=null,Wt=null;P.depth&&(Wt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Nt=P.stencil?Ls:Ma,Ht=P.stencil?tl:Xi);const Se={colorFormat:n.RGBA8,depthFormat:Wt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(Se),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Vi(S.textureWidth,S.textureHeight,{format:Ci,type:ai,depthTexture:new nl(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Nt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Nt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),kt.setContext(l),kt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(tt){for(let ft=0;ft<tt.removed.length;ft++){const Nt=tt.removed[ft],Ht=H.indexOf(Nt);Ht>=0&&(H[Ht]=null,I[Ht].disconnect(Nt))}for(let ft=0;ft<tt.added.length;ft++){const Nt=tt.added[ft];let Ht=H.indexOf(Nt);if(Ht===-1){for(let Se=0;Se<I.length;Se++)if(Se>=H.length){H.push(Nt),Ht=Se;break}else if(H[Se]===null){H[Se]=Nt,Ht=Se;break}if(Ht===-1)break}const Wt=I[Ht];Wt&&Wt.connect(Nt)}}const et=new Z,Mt=new Z;function yt(tt,ft,Nt){et.setFromMatrixPosition(ft.matrixWorld),Mt.setFromMatrixPosition(Nt.matrixWorld);const Ht=et.distanceTo(Mt),Wt=ft.projectionMatrix.elements,Se=Nt.projectionMatrix.elements,Ue=Wt[14]/(Wt[10]-1),ce=Wt[14]/(Wt[10]+1),gt=(Wt[9]+1)/Wt[5],Tt=(Wt[9]-1)/Wt[5],St=(Wt[8]-1)/Wt[0],zt=(Se[8]+1)/Se[0],O=Ue*St,ee=Ue*zt,Bt=Ht/(-St+zt),ie=Bt*-St;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ie),tt.translateZ(Bt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const wt=Ue+Bt,D=ce+Bt,E=O-ie,W=ee+(Ht-ie),ct=gt*ce/D*wt,xt=Tt*ce/D*wt;tt.projectionMatrix.makePerspective(E,W,ct,xt,wt,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function L(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let ft=tt.near,Nt=tt.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),st.near=w.near=C.near=ft,st.far=w.far=C.far=Nt,(at!==st.near||dt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,dt=st.far),st.layers.mask=tt.layers.mask|6,C.layers.mask=st.layers.mask&3,w.layers.mask=st.layers.mask&5;const Ht=tt.parent,Wt=st.cameras;L(st,Ht);for(let Se=0;Se<Wt.length;Se++)L(Wt[Se],Ht);Wt.length===2?yt(st,C,w):st.projectionMatrix.copy(C.projectionMatrix),$(tt,st,Ht)};function $(tt,ft,Nt){Nt===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(Nt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=nu*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(tt){return x[tt]};let pt=null;function At(tt,ft){if(g=ft.getViewerPose(p||f),b=ft,g!==null){const Nt=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ht=!1;Nt.length!==st.cameras.length&&(st.cameras.length=0,Ht=!0);for(let ce=0;ce<Nt.length;ce++){const gt=Nt[ce];let Tt=null;if(y!==null)Tt=y.getViewport(gt);else{const zt=_.getViewSubImage(S,gt);Tt=zt.viewport,ce===0&&(t.setRenderTargetTextures(U,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(U))}let St=V[ce];St===void 0&&(St=new qn,St.layers.enable(ce),St.viewport=new nn,V[ce]=St),St.matrix.fromArray(gt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(gt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ce===0&&(st.matrix.copy(St.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Ht===!0&&st.cameras.push(St)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const ce=_.getDepthInformation(Nt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,l.renderState)}if(Wt&&Wt.includes("camera-access")&&R){t.state.unbindTexture(),_=s.getBinding();for(let ce=0;ce<Nt.length;ce++){const gt=Nt[ce].camera;if(gt){let Tt=x[gt];Tt||(Tt=new Hv,x[gt]=Tt);const St=_.getCameraImage(gt);Tt.sourceTexture=St}}}}for(let Nt=0;Nt<I.length;Nt++){const Ht=H[Nt],Wt=I[Nt];Ht!==null&&Wt!==void 0&&Wt.update(Ht,ft,p||f)}pt&&pt(tt,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const kt=new Jv;kt.setAnimationLoop(At),this.setAnimationLoop=function(tt){pt=tt},this.dispose=function(){}}}const Cs=new ki,cR=new Je;function uR(r,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Pv(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,N,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),S(M,x),x.isMeshPhysicalMaterial&&y(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,P,N):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,U=P.envMapRotation;N&&(M.envMap.value=N,Cs.copy(U),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),M.envMapRotation.value.setFromMatrix4(cR.makeRotationFromEuler(Cs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=N*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const P=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fR(r,t,n,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const U=N.program;s.uniformBlockBinding(P,U)}function p(P,N){let U=l[P.id];U===void 0&&(b(P),U=g(P),l[P.id]=U,P.addEventListener("dispose",M));const I=N.program;s.updateUBOMapping(P,I);const H=t.render.frame;c[P.id]!==H&&(S(P),c[P.id]=H)}function g(P){const N=_();P.__bindingPointIndex=N;const U=r.createBuffer(),I=P.__size,H=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,I,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],U=P.uniforms,I=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let H=0,F=U.length;H<F;H++){const j=Array.isArray(U[H])?U[H]:[U[H]];for(let C=0,w=j.length;C<w;C++){const V=j[C];if(y(V,H,C,I)===!0){const st=V.__offset,at=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ot=0;ot<at.length;ot++){const z=at[ot],G=R(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,st+dt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,dt),dt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,N,U,I){const H=P.value,F=N+"_"+U;if(I[F]===void 0)return typeof H=="number"||typeof H=="boolean"?I[F]=H:I[F]=H.clone(),!0;{const j=I[F];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return I[F]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function b(P){const N=P.uniforms;let U=0;const I=16;for(let F=0,j=N.length;F<j;F++){const C=Array.isArray(N[F])?N[F]:[N[F]];for(let w=0,V=C.length;w<V;w++){const st=C[w],at=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ot=at.length;dt<ot;dt++){const z=at[dt],G=R(z),et=U%I,Mt=et%G.boundary,yt=et+Mt;U+=Mt,yt!==0&&I-yt<G.storage&&(U+=I-yt),st.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=G.storage}}}const H=U%I;return H>0&&(U+=I-H),P.__size=U,P.__cache={},this}function R(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const hR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function dR(){return Fi===null&&(Fi=new TM(hR,16,16,Fr,ya),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=va,Fi.wrapT=va,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class pR{constructor(t={}){const{canvas:n=Jy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:y=ai}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const R=y,M=new Set([op,rp,sp]),x=new Set([ai,Xi,$o,tl,ip,ap]),P=new Uint32Array(4),N=new Int32Array(4);let U=null,I=null;const H=[],F=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=gi;let V=0,st=0,at=null,dt=-1,ot=null;const z=new nn,G=new nn;let et=null;const Mt=new Re(0);let yt=0,L=n.width,$=n.height,pt=1,At=null,kt=null;const tt=new nn(0,0,L,$),ft=new nn(0,0,L,$);let Nt=!1;const Ht=new fp;let Wt=!1,Se=!1;const Ue=new Je,ce=new Z,gt=new nn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function zt(){return at===null?pt:1}let O=s;function ee(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),O===null){const q="webgl2";if(O=ee(q,A),O===null)throw ee(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw we("WebGLRenderer: "+A.message),A}let Bt,ie,wt,D,E,W,ct,xt,ut,Kt,Ut,Qt,re,Et,Rt,qt,Gt,Lt,me,k,Pt,Ct,Vt,bt;function vt(){Bt=new dT(O),Bt.init(),Ct=new aR(O,Bt),ie=new aT(O,Bt,t,Ct),wt=new nR(O,Bt),ie.reversedDepthBuffer&&S&&wt.buffers.depth.setReversed(!0),D=new gT(O),E=new GA,W=new iR(O,Bt,wt,E,ie,Ct,D),ct=new rT(C),xt=new hT(C),ut=new SE(O),Vt=new nT(O,ut),Kt=new pT(O,ut,D,Vt),Ut=new vT(O,Kt,ut,D),me=new _T(O,ie,W),qt=new sT(E),Qt=new HA(C,ct,xt,Bt,ie,Vt,qt),re=new uR(C,E),Et=new XA,Rt=new jA(Bt),Lt=new eT(C,ct,xt,wt,Ut,b,m),Gt=new tR(C,Ut,ie),bt=new fR(O,D,ie,wt),k=new iT(O,Bt,D),Pt=new mT(O,Bt,D),D.programs=Qt.programs,C.capabilities=ie,C.extensions=Bt,C.properties=E,C.renderLists=Et,C.shadowMap=Gt,C.state=wt,C.info=D}vt(),R!==ai&&(j=new ST(R,n.width,n.height,l,c));const Dt=new lR(C,O);this.xr=Dt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(A){A!==void 0&&(pt=A,this.setSize(L,$,!1))},this.getSize=function(A){return A.set(L,$)},this.setSize=function(A,q,rt=!0){if(Dt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,$=q,n.width=Math.floor(A*pt),n.height=Math.floor(q*pt),rt===!0&&(n.style.width=A+"px",n.style.height=q+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(L*pt,$*pt).floor()},this.setDrawingBufferSize=function(A,q,rt){L=A,$=q,pt=rt,n.width=Math.floor(A*rt),n.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(R===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,q,rt,nt){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,q,rt,nt),wt.viewport(z.copy(tt).multiplyScalar(pt).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,q,rt,nt){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,q,rt,nt),wt.scissor(G.copy(ft).multiplyScalar(pt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(A){wt.setScissorTest(Nt=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){kt=A},this.getClearColor=function(A){return A.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let nt=0;if(A){let Q=!1;if(at!==null){const Ot=at.texture.format;Q=M.has(Ot)}if(Q){const Ot=at.texture.type,Yt=x.has(Ot),Ft=Lt.getClearColor(),Zt=Lt.getClearAlpha(),Jt=Ft.r,se=Ft.g,$t=Ft.b;Yt?(P[0]=Jt,P[1]=se,P[2]=$t,P[3]=Zt,O.clearBufferuiv(O.COLOR,0,P)):(N[0]=Jt,N[1]=se,N[2]=$t,N[3]=Zt,O.clearBufferiv(O.COLOR,0,N))}else nt|=O.COLOR_BUFFER_BIT}q&&(nt|=O.DEPTH_BUFFER_BIT),rt&&(nt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Lt.dispose(),Et.dispose(),Rt.dispose(),E.dispose(),ct.dispose(),xt.dispose(),Ut.dispose(),Vt.dispose(),bt.dispose(),Qt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Fs),Dt.removeEventListener("sessionend",Yr),Ni.stop()};function ue(A){A.preventDefault(),d_("WebGLRenderer: Context Lost."),w=!0}function Ie(){d_("WebGLRenderer: Context Restored."),w=!1;const A=D.autoReset,q=Gt.enabled,rt=Gt.autoUpdate,nt=Gt.needsUpdate,Q=Gt.type;vt(),D.autoReset=A,Gt.enabled=q,Gt.autoUpdate=rt,Gt.needsUpdate=nt,Gt.type=Q}function Ce(A){we("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){const q=A.target;q.removeEventListener("dispose",Un),vi(q)}function vi(A){cl(A),E.remove(A)}function cl(A){const q=E.get(A).programs;q!==void 0&&(q.forEach(function(rt){Qt.releaseProgram(rt)}),A.isShaderMaterial&&Qt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,nt,Q,Ot){q===null&&(q=Tt);const Yt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=ss(A,q,rt,nt,Q);wt.setMaterial(nt,Yt);let Zt=rt.index,Jt=1;if(nt.wireframe===!0){if(Zt=Kt.getWireframeAttribute(rt),Zt===void 0)return;Jt=2}const se=rt.drawRange,$t=rt.attributes.position;let oe=se.start*Jt,Oe=(se.start+se.count)*Jt;Ot!==null&&(oe=Math.max(oe,Ot.start*Jt),Oe=Math.min(Oe,(Ot.start+Ot.count)*Jt)),Zt!==null?(oe=Math.max(oe,0),Oe=Math.min(Oe,Zt.count)):$t!=null&&(oe=Math.max(oe,0),Oe=Math.min(Oe,$t.count));const Qe=Oe-oe;if(Qe<0||Qe===1/0)return;Vt.setup(Q,nt,Ft,rt,Zt);let Ye,Fe=k;if(Zt!==null&&(Ye=ut.get(Zt),Fe=Pt,Fe.setIndex(Ye)),Q.isMesh)nt.wireframe===!0?(wt.setLineWidth(nt.wireframeLinewidth*zt()),Fe.setMode(O.LINES)):Fe.setMode(O.TRIANGLES);else if(Q.isLine){let ne=nt.linewidth;ne===void 0&&(ne=1),wt.setLineWidth(ne*zt()),Q.isLineSegments?Fe.setMode(O.LINES):Q.isLineLoop?Fe.setMode(O.LINE_LOOP):Fe.setMode(O.LINE_STRIP)}else Q.isPoints?Fe.setMode(O.POINTS):Q.isSprite&&Fe.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ne=Q._multiDrawStarts,Pe=Q._multiDrawCounts,fe=Q._multiDrawCount,Sn=Zt?ut.get(Zt).bytesPerElement:1,Zi=E.get(nt).currentProgram.getUniforms();for(let yn=0;yn<fe;yn++)Zi.setValue(O,"_gl_DrawID",yn),Fe.render(ne[yn]/Sn,Pe[yn])}else if(Q.isInstancedMesh)Fe.renderInstances(oe,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const ne=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Pe=Math.min(rt.instanceCount,ne);Fe.renderInstances(oe,Qe,Pe)}else Fe.render(oe,Qe)};function Wr(A,q,rt){A.transparent===!0&&A.side===_a&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Bs(A,q,rt),A.side=as,A.needsUpdate=!0,Bs(A,q,rt),A.side=_a):Bs(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),I=Rt.get(rt),I.init(q),F.push(I),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),A!==rt&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const nt=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ot=Q.material;if(Ot)if(Array.isArray(Ot))for(let Yt=0;Yt<Ot.length;Yt++){const Ft=Ot[Yt];Wr(Ft,rt,Q),nt.add(Ft)}else Wr(Ot,rt,Q),nt.add(Ot)}),I=F.pop(),nt},this.compileAsync=function(A,q,rt=null){const nt=this.compile(A,q,rt);return new Promise(Q=>{function Ot(){if(nt.forEach(function(Yt){E.get(Yt).currentProgram.isReady()&&nt.delete(Yt)}),nt.size===0){Q(A);return}setTimeout(Ot,10)}Bt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let zs=null;function qr(A){zs&&zs(A)}function Fs(){Ni.stop()}function Yr(){Ni.start()}const Ni=new Jv;Ni.setAnimationLoop(qr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){zs=A,Dt.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},Dt.addEventListener("sessionstart",Fs),Dt.addEventListener("sessionend",Yr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=Dt.enabled===!0&&Dt.isPresenting===!0,nt=j!==null&&(at===null||rt)&&j.begin(C,at);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,at),I=Rt.get(A,F.length),I.init(q),F.push(I),Ue.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ht.setFromProjectionMatrix(Ue,Hi,q.reversedDepth),Se=this.localClippingEnabled,Wt=qt.init(this.clippingPlanes,Se),U=Et.get(A,H.length),U.init(),H.push(U),Dt.enabled===!0&&Dt.isPresenting===!0){const Yt=C.xr.getDepthSensingMesh();Yt!==null&&si(Yt,q,-1/0,C.sortObjects)}si(A,q,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(At,kt),St=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,St&&Lt.addToRenderList(U,A),this.info.render.frame++,Wt===!0&&qt.beginShadows();const Q=I.state.shadowsArray;if(Gt.render(Q,A,q),Wt===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&j.hasRenderPass())===!1){const Yt=U.opaque,Ft=U.transmissive;if(I.setupLights(),q.isArrayCamera){const Zt=q.cameras;if(Ft.length>0)for(let Jt=0,se=Zt.length;Jt<se;Jt++){const $t=Zt[Jt];xn(Yt,Ft,A,$t)}St&&Lt.render(A);for(let Jt=0,se=Zt.length;Jt<se;Jt++){const $t=Zt[Jt];rn(U,A,$t,$t.viewport)}}else Ft.length>0&&xn(Yt,Ft,A,q),St&&Lt.render(A),rn(U,A,q)}at!==null&&st===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),nt&&j.end(C),A.isScene===!0&&A.onAfterRender(C,A,q),Vt.resetDefaultState(),dt=-1,ot=null,F.pop(),F.length>0?(I=F[F.length-1],Wt===!0&&qt.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,H.pop(),H.length>0?U=H[H.length-1]:U=null};function si(A,q,rt,nt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ht.intersectsSprite(A)){nt&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ue);const Yt=Ut.update(A),Ft=A.material;Ft.visible&&U.push(A,Yt,Ft,rt,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ht.intersectsObject(A))){const Yt=Ut.update(A),Ft=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),gt.copy(Yt.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ft)){const Zt=Yt.groups;for(let Jt=0,se=Zt.length;Jt<se;Jt++){const $t=Zt[Jt],oe=Ft[$t.materialIndex];oe&&oe.visible&&U.push(A,Yt,oe,rt,gt.z,$t)}}else Ft.visible&&U.push(A,Yt,Ft,rt,gt.z,null)}}const Ot=A.children;for(let Yt=0,Ft=Ot.length;Yt<Ft;Yt++)si(Ot[Yt],q,rt,nt)}function rn(A,q,rt,nt){const{opaque:Q,transmissive:Ot,transparent:Yt}=A;I.setupLightsView(rt),Wt===!0&&qt.setGlobalState(C.clippingPlanes,rt),nt&&wt.viewport(z.copy(nt)),Q.length>0&&xi(Q,q,rt),Ot.length>0&&xi(Ot,q,rt),Yt.length>0&&xi(Yt,q,rt),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function xn(A,q,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[nt.id]===void 0){const oe=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[nt.id]=new Vi(1,1,{generateMipmaps:!0,type:oe?ya:ai,minFilter:Ns,samples:ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ot=I.state.transmissionRenderTarget[nt.id],Yt=nt.viewport||z;Ot.setSize(Yt.z*C.transmissionResolutionScale,Yt.w*C.transmissionResolutionScale);const Ft=C.getRenderTarget(),Zt=C.getActiveCubeFace(),Jt=C.getActiveMipmapLevel();C.setRenderTarget(Ot),C.getClearColor(Mt),yt=C.getClearAlpha(),yt<1&&C.setClearColor(16777215,.5),C.clear(),St&&Lt.render(rt);const se=C.toneMapping;C.toneMapping=Gi;const $t=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),I.setupLightsView(nt),Wt===!0&&qt.setGlobalState(C.clippingPlanes,nt),xi(A,rt,nt),W.updateMultisampleRenderTarget(Ot),W.updateRenderTargetMipmap(Ot),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Oe=0,Qe=q.length;Oe<Qe;Oe++){const Ye=q[Oe],{object:Fe,geometry:ne,material:Pe,group:fe}=Ye;if(Pe.side===_a&&Fe.layers.test(nt.layers)){const Sn=Pe.side;Pe.side=Yn,Pe.needsUpdate=!0,Is(Fe,rt,nt,ne,Pe,fe),Pe.side=Sn,Pe.needsUpdate=!0,oe=!0}}oe===!0&&(W.updateMultisampleRenderTarget(Ot),W.updateRenderTargetMipmap(Ot))}C.setRenderTarget(Ft,Zt,Jt),C.setClearColor(Mt,yt),$t!==void 0&&(nt.viewport=$t),C.toneMapping=se}function xi(A,q,rt){const nt=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ot=A.length;Q<Ot;Q++){const Yt=A[Q],{object:Ft,geometry:Zt,group:Jt}=Yt;let se=Yt.material;se.allowOverride===!0&&nt!==null&&(se=nt),Ft.layers.test(rt.layers)&&Is(Ft,q,rt,Zt,se,Jt)}}function Is(A,q,rt,nt,Q,Ot){A.onBeforeRender(C,q,rt,nt,Q,Ot),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(C,q,rt,nt,A,Ot),Q.transparent===!0&&Q.side===_a&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,C.renderBufferDirect(rt,q,nt,Q,A,Ot),Q.side=as,Q.needsUpdate=!0,C.renderBufferDirect(rt,q,nt,Q,A,Ot),Q.side=_a):C.renderBufferDirect(rt,q,nt,Q,A,Ot),A.onAfterRender(C,q,rt,nt,Q,Ot)}function Bs(A,q,rt){q.isScene!==!0&&(q=Tt);const nt=E.get(A),Q=I.state.lights,Ot=I.state.shadowsArray,Yt=Q.state.version,Ft=Qt.getParameters(A,Q.state,Ot,q,rt),Zt=Qt.getProgramCacheKey(Ft);let Jt=nt.programs;nt.environment=A.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(A.isMeshStandardMaterial?xt:ct).get(A.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",Un),Jt=new Map,nt.programs=Jt);let se=Jt.get(Zt);if(se!==void 0){if(nt.currentProgram===se&&nt.lightsStateVersion===Yt)return Zr(A,Ft),se}else Ft.uniforms=Qt.getUniforms(A),A.onBeforeCompile(Ft,C),se=Qt.acquireProgram(Ft,Zt),Jt.set(Zt,se),nt.uniforms=Ft.uniforms;const $t=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=qt.uniform),Zr(A,Ft),nt.needsLights=Ea(A),nt.lightsStateVersion=Yt,nt.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.currentProgram=se,nt.uniformsList=null,se}function ul(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Kc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Zr(A,q){const rt=E.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function ss(A,q,rt,nt,Q){q.isScene!==!0&&(q=Tt),W.resetTextureUnits();const Ot=q.fog,Yt=nt.isMeshStandardMaterial?q.environment:null,Ft=at===null?C.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ir,Zt=(nt.isMeshStandardMaterial?xt:ct).get(nt.envMap||Yt),Jt=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),$t=!!rt.morphAttributes.position,oe=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let Qe=Gi;nt.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qe=C.toneMapping);const Ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Fe=Ye!==void 0?Ye.length:0,ne=E.get(nt),Pe=I.state.lights;if(Wt===!0&&(Se===!0||A!==ot)){const En=A===ot&&nt.id===dt;qt.setState(nt,A,En)}let fe=!1;nt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Pe.state.version||ne.outputColorSpace!==Ft||Q.isBatchedMesh&&ne.batching===!1||!Q.isBatchedMesh&&ne.batching===!0||Q.isBatchedMesh&&ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ne.instancing===!1||!Q.isInstancedMesh&&ne.instancing===!0||Q.isSkinnedMesh&&ne.skinning===!1||!Q.isSkinnedMesh&&ne.skinning===!0||Q.isInstancedMesh&&ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ne.instancingMorph===!1&&Q.morphTexture!==null||ne.envMap!==Zt||nt.fog===!0&&ne.fog!==Ot||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==qt.numPlanes||ne.numIntersection!==qt.numIntersection)||ne.vertexAlphas!==Jt||ne.vertexTangents!==se||ne.morphTargets!==$t||ne.morphNormals!==oe||ne.morphColors!==Oe||ne.toneMapping!==Qe||ne.morphTargetsCount!==Fe)&&(fe=!0):(fe=!0,ne.__version=nt.version);let Sn=ne.currentProgram;fe===!0&&(Sn=Bs(nt,q,Q));let Zi=!1,yn=!1,ri=!1;const Be=Sn.getUniforms(),Mn=ne.uniforms;if(wt.useProgram(Sn.program)&&(Zi=!0,yn=!0,ri=!0),nt.id!==dt&&(dt=nt.id,yn=!0),Zi||ot!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(O,"projectionMatrix",A.projectionMatrix),Be.setValue(O,"viewMatrix",A.matrixWorldInverse);const bn=Be.map.cameraPosition;bn!==void 0&&bn.setValue(O,ce.setFromMatrixPosition(A.matrixWorld)),ie.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Be.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),ot!==A&&(ot=A,yn=!0,ri=!0)}if(ne.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(O,"directionalShadowMap",Pe.state.directionalShadowMap,W),Pe.state.spotShadowMap.length>0&&Be.setValue(O,"spotShadowMap",Pe.state.spotShadowMap,W),Pe.state.pointShadowMap.length>0&&Be.setValue(O,"pointShadowMap",Pe.state.pointShadowMap,W)),Q.isSkinnedMesh){Be.setOptional(O,Q,"bindMatrix"),Be.setOptional(O,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Be.setValue(O,"boneTexture",En.boneTexture,W))}Q.isBatchedMesh&&(Be.setOptional(O,Q,"batchingTexture"),Be.setValue(O,"batchingTexture",Q._matricesTexture,W),Be.setOptional(O,Q,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",Q._indirectTexture,W),Be.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",Q._colorsTexture,W));const hn=rt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&me.update(Q,rt,Sn),(yn||ne.receiveShadow!==Q.receiveShadow)&&(ne.receiveShadow=Q.receiveShadow,Be.setValue(O,"receiveShadow",Q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Mn.envMap.value=Zt,Mn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=dR()),yn&&(Be.setValue(O,"toneMappingExposure",C.toneMappingExposure),ne.needsLights&&jr(Mn,ri),Ot&&nt.fog===!0&&re.refreshFogUniforms(Mn,Ot),re.refreshMaterialUniforms(Mn,nt,pt,$,I.state.transmissionRenderTarget[A.id]),Kc.upload(O,ul(ne),Mn,W)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Kc.upload(O,ul(ne),Mn,W),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Be.setValue(O,"center",Q.center),Be.setValue(O,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(O,"normalMatrix",Q.normalMatrix),Be.setValue(O,"modelMatrix",Q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const En=nt.uniformsGroups;for(let bn=0,Hs=En.length;bn<Hs;bn++){const Si=En[bn];bt.update(Si,Sn),bt.bind(Si,Sn)}}return Sn}function jr(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ea(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(A,q,rt){const nt=E.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=q,E.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=E.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ba=O.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){at=A,V=q,st=rt;let nt=null,Q=!1,Ot=!1;if(A){const Ft=E.get(A);if(Ft.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(O.FRAMEBUFFER,Ft.__webglFramebuffer),z.copy(A.viewport),G.copy(A.scissor),et=A.scissorTest,wt.viewport(z),wt.scissor(G),wt.setScissorTest(et),dt=-1;return}else if(Ft.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Ft.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Ft.__boundDepthTexture!==se){if(se!==null&&E.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Zt=A.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ot=!0);const Jt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[q])?nt=Jt[q][rt]:nt=Jt[q],Q=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?nt=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?nt=Jt[rt]:nt=Jt,z.copy(A.viewport),G.copy(A.scissor),et=A.scissorTest}else z.copy(tt).multiplyScalar(pt).floor(),G.copy(ft).multiplyScalar(pt).floor(),et=Nt;if(rt!==0&&(nt=ba),wt.bindFramebuffer(O.FRAMEBUFFER,nt)&&wt.drawBuffers(A,nt),wt.viewport(z),wt.scissor(G),wt.setScissorTest(et),Q){const Ft=E.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,rt)}else if(Ot){const Ft=q;for(let Zt=0;Zt<A.textures.length;Zt++){const Jt=E.get(A.textures[Zt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,rt,Ft)}}else if(A!==null&&rt!==0){const Ft=E.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(A,q,rt,nt,Q,Ot,Yt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt){wt.bindFramebuffer(O.FRAMEBUFFER,Zt);try{const Jt=A.textures[Ft],se=Jt.format,$t=Jt.type;if(!ie.textureFormatReadable(se)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable($t)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-nt&&rt>=0&&rt<=A.height-Q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ft),O.readPixels(q,rt,nt,Q,Ct.convert(se),Ct.convert($t),Ot))}finally{const Jt=at!==null?E.get(at).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,nt,Q,Ot,Yt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt)if(q>=0&&q<=A.width-nt&&rt>=0&&rt<=A.height-Q){wt.bindFramebuffer(O.FRAMEBUFFER,Zt);const Jt=A.textures[Ft],se=Jt.format,$t=Jt.type;if(!ie.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,oe),O.bufferData(O.PIXEL_PACK_BUFFER,Ot.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ft),O.readPixels(q,rt,nt,Q,Ct.convert(se),Ct.convert($t),0);const Oe=at!==null?E.get(at).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,Oe);const Qe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await $y(O,Qe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,oe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ot),O.deleteBuffer(oe),O.deleteSync(Qe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const nt=Math.pow(2,-rt),Q=Math.floor(A.image.width*nt),Ot=Math.floor(A.image.height*nt),Yt=q!==null?q.x:0,Ft=q!==null?q.y:0;W.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,rt,0,0,Yt,Ft,Q,Ot),wt.unbindTexture()};const rs=O.createFramebuffer(),Ta=O.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,nt=null,Q=0,Ot=null){Ot===null&&(Q!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=Q,Q=0):Ot=0);let Yt,Ft,Zt,Jt,se,$t,oe,Oe,Qe;const Ye=A.isCompressedTexture?A.mipmaps[Ot]:A.image;if(rt!==null)Yt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Zt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,se=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const hn=Math.pow(2,-Q);Yt=Math.floor(Ye.width*hn),Ft=Math.floor(Ye.height*hn),A.isDataArrayTexture?Zt=Ye.depth:A.isData3DTexture?Zt=Math.floor(Ye.depth*hn):Zt=1,Jt=0,se=0,$t=0}nt!==null?(oe=nt.x,Oe=nt.y,Qe=nt.z):(oe=0,Oe=0,Qe=0);const Fe=Ct.convert(q.format),ne=Ct.convert(q.type);let Pe;q.isData3DTexture?(W.setTexture3D(q,0),Pe=O.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Pe=O.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Pe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment);const fe=O.getParameter(O.UNPACK_ROW_LENGTH),Sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zi=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),ri=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,se),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t);const Be=A.isDataArrayTexture||A.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const hn=E.get(A),En=E.get(q),bn=E.get(hn.__renderTarget),Hs=E.get(En.__renderTarget);wt.bindFramebuffer(O.READ_FRAMEBUFFER,bn.__webglFramebuffer),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Si=0;Si<Zt;Si++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Q,$t+Si),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ot,Qe+Si)),O.blitFramebuffer(Jt,se,Yt,Ft,oe,Oe,Yt,Ft,O.DEPTH_BUFFER_BIT,O.NEAREST);wt.bindFramebuffer(O.READ_FRAMEBUFFER,null),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||E.has(A)){const hn=E.get(A),En=E.get(q);wt.bindFramebuffer(O.READ_FRAMEBUFFER,rs),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ta);for(let bn=0;bn<Zt;bn++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hn.__webglTexture,Q,$t+bn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hn.__webglTexture,Q),Mn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,En.__webglTexture,Ot,Qe+bn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,En.__webglTexture,Ot),Q!==0?O.blitFramebuffer(Jt,se,Yt,Ft,oe,Oe,Yt,Ft,O.COLOR_BUFFER_BIT,O.NEAREST):Mn?O.copyTexSubImage3D(Pe,Ot,oe,Oe,Qe+bn,Jt,se,Yt,Ft):O.copyTexSubImage2D(Pe,Ot,oe,Oe,Jt,se,Yt,Ft);wt.bindFramebuffer(O.READ_FRAMEBUFFER,null),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Pe,Ot,oe,Oe,Qe,Yt,Ft,Zt,Fe,ne,Ye.data):q.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,Ot,oe,Oe,Qe,Yt,Ft,Zt,Fe,Ye.data):O.texSubImage3D(Pe,Ot,oe,Oe,Qe,Yt,Ft,Zt,Fe,ne,Ye):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ot,oe,Oe,Yt,Ft,Fe,ne,Ye.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ot,oe,Oe,Ye.width,Ye.height,Fe,Ye.data):O.texSubImage2D(O.TEXTURE_2D,Ot,oe,Oe,Yt,Ft,Fe,ne,Ye);O.pixelStorei(O.UNPACK_ROW_LENGTH,fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zi),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ri),Ot===0&&q.generateMipmaps&&O.generateMipmap(Pe),wt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){V=0,st=0,at=null,wt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}const mR=()=>{const r=wi.useRef(null);return wi.useEffect(()=>{if(!r.current)return;const t=new bM;t.background=new Re(pn.colors.background);const n=new qn(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const s=new pR({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(s.domElement);const l=new Wv,c=0,f=0;l.moveTo(c+.5,f+.5),l.bezierCurveTo(c+.5,f+.5,c+.4,f,c,f),l.bezierCurveTo(c-.6,f,c-.6,f+.7,c-.6,f+.7),l.bezierCurveTo(c-.6,f+1.1,c-.3,f+1.54,c+.5,f+1.9),l.bezierCurveTo(c+1.2,f+1.54,c+1.6,f+1.1,c+1.6,f+.7),l.bezierCurveTo(c+1.6,f+.7,c+1.6,f,c+1,f),l.bezierCurveTo(c+.7,f,c+.5,f+.5,c+.5,f+.5);const h={depth:.4,bevelEnabled:!0,bevelSegments:10,steps:2,bevelSize:.1,bevelThickness:.1},m=new pp(l,h),p=new fE({color:pn.colors.heartPrimary,emissive:pn.colors.heartPrimary,emissiveIntensity:.3,shininess:100,specular:pn.colors.heartSecondary}),g=new Wi(m,p);g.position.set(-.5,-1,0),g.rotation.z=Math.PI,t.add(g);const _=new _i,S=pn.animation.particleCount,y=new Float32Array(S*3);for(let F=0;F<S*3;F++)y[F]=(Math.random()-.5)*10;_.setAttribute("position",new Di(y,3));const b=new Bv({size:.02,color:pn.colors.particleColor,transparent:!0,opacity:.8,blending:ed}),R=new wM(_,b);t.add(R);const M=new _E(16777215,.5);t.add(M);const x=new B_(16717636,2,100);x.position.set(2,2,2),t.add(x);const P=new B_(16717636,2,100);P.position.set(-2,-2,2),t.add(P);const N=new mE(16777215,1);N.position.set(0,5,5),N.angle=Math.PI/6,t.add(N);let U=0;const I=()=>{requestAnimationFrame(I),U+=.01,g.rotation.y=Math.sin(U*.5)*.3;const F=1+Math.sin(U*2)*.1;g.scale.set(F,F,F),R.rotation.y+=.001,R.rotation.x+=5e-4;const j=R.geometry.attributes.position.array;for(let C=0;C<j.length;C+=3)j[C+1]=Math.sin(U+j[C])*.5;R.geometry.attributes.position.needsUpdate=!0,x.position.x=Math.sin(U)*3,x.position.y=Math.cos(U)*3,P.position.x=Math.cos(U)*3,P.position.y=Math.sin(U)*3,s.render(t,n)};I();const H=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H),r.current&&r.current.removeChild(s.domElement),m.dispose(),p.dispose(),_.dispose(),b.dispose(),s.dispose()}},[]),r};var $h,uv;function gR(){if(uv)return $h;uv=1;var r={linear:function(t,n,s,l){var c=s-n;return c*t/l+n},easeInQuad:function(t,n,s,l){var c=s-n;return c*(t/=l)*t+n},easeOutQuad:function(t,n,s,l){var c=s-n;return-c*(t/=l)*(t-2)+n},easeInOutQuad:function(t,n,s,l){var c=s-n;return(t/=l/2)<1?c/2*t*t+n:-c/2*(--t*(t-2)-1)+n},easeInCubic:function(t,n,s,l){var c=s-n;return c*(t/=l)*t*t+n},easeOutCubic:function(t,n,s,l){var c=s-n;return c*((t=t/l-1)*t*t+1)+n},easeInOutCubic:function(t,n,s,l){var c=s-n;return(t/=l/2)<1?c/2*t*t*t+n:c/2*((t-=2)*t*t+2)+n},easeInQuart:function(t,n,s,l){var c=s-n;return c*(t/=l)*t*t*t+n},easeOutQuart:function(t,n,s,l){var c=s-n;return-c*((t=t/l-1)*t*t*t-1)+n},easeInOutQuart:function(t,n,s,l){var c=s-n;return(t/=l/2)<1?c/2*t*t*t*t+n:-c/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(t,n,s,l){var c=s-n;return c*(t/=l)*t*t*t*t+n},easeOutQuint:function(t,n,s,l){var c=s-n;return c*((t=t/l-1)*t*t*t*t+1)+n},easeInOutQuint:function(t,n,s,l){var c=s-n;return(t/=l/2)<1?c/2*t*t*t*t*t+n:c/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(t,n,s,l){var c=s-n;return-c*Math.cos(t/l*(Math.PI/2))+c+n},easeOutSine:function(t,n,s,l){var c=s-n;return c*Math.sin(t/l*(Math.PI/2))+n},easeInOutSine:function(t,n,s,l){var c=s-n;return-c/2*(Math.cos(Math.PI*t/l)-1)+n},easeInExpo:function(t,n,s,l){var c=s-n;return t==0?n:c*Math.pow(2,10*(t/l-1))+n},easeOutExpo:function(t,n,s,l){var c=s-n;return t==l?n+c:c*(-Math.pow(2,-10*t/l)+1)+n},easeInOutExpo:function(t,n,s,l){var c=s-n;return t===0?n:t===l?n+c:(t/=l/2)<1?c/2*Math.pow(2,10*(t-1))+n:c/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(t,n,s,l){var c=s-n;return-c*(Math.sqrt(1-(t/=l)*t)-1)+n},easeOutCirc:function(t,n,s,l){var c=s-n;return c*Math.sqrt(1-(t=t/l-1)*t)+n},easeInOutCirc:function(t,n,s,l){var c=s-n;return(t/=l/2)<1?-c/2*(Math.sqrt(1-t*t)-1)+n:c/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(t,n,s,l){var c=s-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=l)===1?n+c:(h||(h=l*.3),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),-(f*Math.pow(2,10*(t-=1))*Math.sin((t*l-m)*(2*Math.PI)/h))+n)},easeOutElastic:function(t,n,s,l){var c=s-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=l)===1?n+c:(h||(h=l*.3),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),f*Math.pow(2,-10*t)*Math.sin((t*l-m)*(2*Math.PI)/h)+c+n)},easeInOutElastic:function(t,n,s,l){var c=s-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=l/2)===2?n+c:(h||(h=l*(.3*1.5)),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),t<1?-.5*(f*Math.pow(2,10*(t-=1))*Math.sin((t*l-m)*(2*Math.PI)/h))+n:f*Math.pow(2,-10*(t-=1))*Math.sin((t*l-m)*(2*Math.PI)/h)*.5+c+n)},easeInBack:function(t,n,s,l,c){var f=s-n;return c===void 0&&(c=1.70158),f*(t/=l)*t*((c+1)*t-c)+n},easeOutBack:function(t,n,s,l,c){var f=s-n;return c===void 0&&(c=1.70158),f*((t=t/l-1)*t*((c+1)*t+c)+1)+n},easeInOutBack:function(t,n,s,l,c){var f=s-n;return c===void 0&&(c=1.70158),(t/=l/2)<1?f/2*(t*t*(((c*=1.525)+1)*t-c))+n:f/2*((t-=2)*t*(((c*=1.525)+1)*t+c)+2)+n},easeInBounce:function(t,n,s,l){var c=s-n,f;return f=r.easeOutBounce(l-t,0,c,l),c-f+n},easeOutBounce:function(t,n,s,l){var c=s-n;return(t/=l)<1/2.75?c*(7.5625*t*t)+n:t<2/2.75?c*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?c*(7.5625*(t-=2.25/2.75)*t+.9375)+n:c*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,s,l){var c=s-n,f;return t<l/2?(f=r.easeInBounce(t*2,0,c,l),f*.5+n):(f=r.easeOutBounce(t*2-l,0,c,l),f*.5+c*.5+n)}};return $h=r,$h}var _R=gR();function vR(r){return r*Math.PI/180}function ii(r,t){return r+Math.random()*(t-r)}function xR(r,t){return Math.floor(r+Math.random()*(t-r+1))}var Jo;(function(r){r[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip"})(Jo||(Jo={}));var es;(function(r){r[r.Positive=1]="Positive",r[r.Negative=-1]="Negative"})(es||(es={}));const SR=1e3/60;class yR{constructor(t,n,s,l){this.getOptions=n;const{colors:c,initialVelocityX:f,initialVelocityY:h}=this.getOptions();this.context=t,this.x=s,this.y=l,this.w=ii(5,20),this.h=ii(5,20),this.radius=ii(5,10),this.vx=typeof f=="number"?ii(-f,f):ii(f.min,f.max),this.vy=typeof h=="number"?ii(-h,0):ii(h.min,h.max),this.shape=xR(0,2),this.angle=vR(ii(0,360)),this.angularSpin=ii(-.2,.2),this.color=c[Math.floor(Math.random()*c.length)],this.rotateY=ii(0,1),this.rotationDirection=ii(0,1)?es.Positive:es.Negative}update(t){const{gravity:n,wind:s,friction:l,opacity:c,drawShape:f}=this.getOptions(),h=t/SR;this.x+=this.vx*h,this.y+=this.vy*h,this.vy+=n*h,this.vx+=s*h,this.vx*=l**h,this.vy*=l**h,this.rotateY>=1&&this.rotationDirection===es.Positive?this.rotationDirection=es.Negative:this.rotateY<=-1&&this.rotationDirection===es.Negative&&(this.rotationDirection=es.Positive);const m=.1*this.rotationDirection*h;if(this.rotateY+=m,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=c,this.context.lineCap="round",this.context.lineWidth=2,f&&typeof f=="function")f.call(this,this.context);else switch(this.shape){case Jo.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Jo.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Jo.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class MR{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=l=>{this.particles.splice(l,1)},this.getParticle=()=>{const l=ii(this.x,this.w+this.x),c=ii(this.y,this.h+this.y);return new yR(this.context,this.getOptions,l,c)},this.animate=l=>{const{canvas:c,context:f,particlesGenerated:h,lastNumberOfPieces:m}=this,{run:p,recycle:g,numberOfPieces:_,debug:S,tweenFunction:y,tweenDuration:b}=this.getOptions();if(!p)return!1;const R=this.particles.length,M=g?R:h;if(M<_){m!==_&&(this.tweenProgress=0,this.tweenFrom=M,this.lastNumberOfPieces=_),this.tweenProgress=Math.min(b,Math.max(0,this.tweenProgress+l));const x=y(this.tweenProgress,this.tweenFrom,_,b),P=Math.round(x-M);for(let N=0;N<P;N++)this.particles.push(this.getParticle());this.particlesGenerated+=P}S&&(f.font="12px sans-serif",f.fillStyle="#333",f.textAlign="right",f.fillText(`Particles: ${R}`,c.width-10,c.height-20));for(let x=this.particles.length-1;x>=0;x--){const P=this.particles[x];P.update(l),(P.y>c.height||P.y<-100||P.x>c.width+100||P.x<-100)&&(g&&M<=_?this.particles[x]=this.getParticle():this.removeParticleAt(x))}return R>0||M<_},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=n}}const gp={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:_R.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class ER{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=l=>{const c={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...c,...gp,...l},Object.assign(this,l.confettiSource)},this.update=(l=0)=>{const{options:{run:c,onConfettiComplete:f,frameRate:h},canvas:m,context:p}=this,g=Math.min(l-this.lastFrameTime,50);if(h&&g<1e3/h){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=l-(h?g%h:0),c&&(p.fillStyle="white",p.clearRect(0,0,m.width,m.height)),this.generator.animate(g)?this.rafId=requestAnimationFrame(this.update):(f&&typeof f=="function"&&this.generator.particlesGenerated>0&&f.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new MR(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){const n=this._options?.run,s=this._options?.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const bR=Jc.createRef();class _p extends Jc.Component{constructor(t){super(t),this.canvas=Jc.createRef(),this.canvas=t.canvasRef||bR}componentDidMount(){if(this.canvas.current){const t=td(this.props)[0];this.confetti=new ER(this.canvas.current,t)}}componentDidUpdate(){const t=td(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=td(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return xe.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:s})}}_p.defaultProps={...gp};_p.displayName="ReactConfetti";function td(r){const t={},n={},s={},l=[...Object.keys(gp),"confettiSource","drawShape","onConfettiComplete","frameRate"],c=["canvasRef"];for(const f in r){const h=r[f];l.includes(f)?t[f]=h:c.includes(f)?c[f]=h:s[f]=h}return[t,s,n]}const TR=Jc.forwardRef((r,t)=>xe.jsx(_p,{canvasRef:t,...r})),AR=({windowSize:r,show:t})=>t?xe.jsx(TR,{width:r.width,height:r.height,numberOfPieces:pn.animation.confettiPieces,recycle:!0,colors:["#ff0844","#ff1744","#ff6b9d","#ff4081","#f50057","#ff80ab"]}):null,RR=()=>{const r=mR();return xe.jsx("div",{ref:r,className:"absolute inset-0"})},CR=({show:r})=>r?xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20 pointer-events-none",children:xe.jsxs("div",{className:"bg-gradient-to-br from-pink-900/95 to-red-900/95 backdrop-blur-sm rounded-3xl p-12 max-w-2xl mx-4 shadow-2xl border-4 border-pink-400 animate-bounce-in",style:{boxShadow:"0 0 60px rgba(255, 8, 68, 0.8), 0 0 100px rgba(255, 107, 157, 0.6)",animation:"slideIn 0.5s ease-out"},children:[xe.jsx("h2",{className:"text-4xl md:text-6xl font-bold text-white text-center mb-6",style:{textShadow:"0 0 20px rgba(255, 255, 255, 0.8)",fontFamily:"Georgia, serif"},children:pn.text.successTitle}),xe.jsx("div",{className:"space-y-4",children:pn.text.successMessages.map((t,n)=>xe.jsx("p",{className:"text-xl md:text-2xl text-pink-100 text-center animate-fade-in",style:{animationDelay:`${n*.2}s`,fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:t},n))}),xe.jsx("div",{className:"mt-8 text-center",children:xe.jsx("div",{className:"inline-block",children:["💕","💖","💗","💓","💝","❤️","🌹","✨"].map((t,n)=>xe.jsx("span",{className:"text-4xl mx-2 inline-block animate-float",style:{animationDelay:`${n*.1}s`,display:"inline-block"},children:t},n))})})]})}):null,wR=({showMessage:r,saidYes:t,onYesClick:n})=>{if(t)return null;const s=l=>{const c=l.target,f=Math.random()*(window.innerWidth-200),h=Math.random()*(window.innerHeight-100);c.style.position="fixed",c.style.left=f+"px",c.style.top=h+"px"};return xe.jsxs("div",{className:`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ${r?"opacity-100":"opacity-0"}`,children:[xe.jsx("h1",{className:"text-6xl md:text-6xl font-bold text-white mb-8 animate-pulse",style:{textShadow:`0 0 20px ${pn.colors.textGlow}, 0 0 40px rgba(255, 8, 68, 0.6), 0 0 60px rgba(255, 8, 68, 0.4)`,fontFamily:"Georgia, serif"},children:pn.text.question}),xe.jsx("h2",{className:"text-7xl md:text-8xl font-bold text-red-500 mb-12",style:{textShadow:"0 0 30px rgba(255, 23, 68, 1), 0 0 60px rgba(255, 23, 68, 0.8)",fontFamily:"Georgia, serif",animation:`heartbeat ${pn.animation.heartbeatSpeed}s ease-in-out infinite`},children:pn.text.valentine}),xe.jsxs("div",{className:"flex gap-6 pointer-events-auto",children:[xe.jsx("button",{className:"px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300",style:{boxShadow:"0 0 20px rgba(255, 23, 68, 0.6)"},onClick:n,children:pn.text.yesButton}),xe.jsx("button",{className:"px-12 py-4 bg-gray-800 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-red-400",onMouseEnter:s,children:pn.text.maybeButton})]})]})},DR=()=>xe.jsx("style",{children:`
    @keyframes heartbeat {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-50px) scale(0.8);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out forwards;
      opacity: 0;
    }

    .animate-float {
      animation: float 2s ease-in-out infinite;
    }
  `}),UR=({show:r,currentCompliment:t})=>{if(!r)return null;const n=pn.text.compliments,l=Math.max(0,t-4),c=n.slice(l,t);return xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-black/50 backdrop-blur-sm",children:xe.jsx("div",{className:"max-w-4xl mx-4 space-y-4 max-h-[80vh] overflow-hidden",children:c.map((f,h)=>{const m=l+h;return xe.jsxs("div",{className:"bg-gradient-to-r from-pink-900/95 to-purple-900/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-pink-400/50",style:{animation:`slideIn 0.8s ease-out ${h*.2}s both`,boxShadow:"0 0 40px rgba(255, 8, 68, 0.4)"},children:[xe.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white text-center mb-3",style:{textShadow:"0 0 15px rgba(255, 255, 255, 0.8)",fontFamily:"Georgia, serif"},children:f.title}),xe.jsx("p",{className:"text-lg md:text-xl text-pink-100 text-center leading-relaxed",style:{fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:f.message})]},m)})})})},NR="/will-you-be-my-valentine/assets/music-for-valentine-cinematic-love-462815-B4MyWfJk.mp3",LR=({shouldPlay:r})=>{const t=wi.useRef(null);return wi.useEffect(()=>{const n=t.current;n&&r&&(n.volume=.3,n.loop=!0,n.play().catch(()=>{}))},[r]),xe.jsx("audio",{ref:t,src:NR,preload:"auto"})},OR=({onStart:r})=>{const t=()=>{document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),r()};return xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-400 z-50",children:xe.jsxs("div",{className:"text-center",children:[xe.jsx("div",{className:"text-9xl mb-8 cursor-pointer hover:scale-110 transition-transform duration-300",onClick:t,style:{animation:"heartbeat 1.5s ease-in-out infinite",filter:"drop-shadow(0 0 20px #ff0844)"},children:"💖"}),xe.jsx("p",{className:"text-white text-2xl font-serif",children:"Click the heart to start"})]})})};function PR(){const r=vy(),{showMessage:t,showConfetti:n,saidYes:s,showCompliments:l,currentCompliment:c,hasStarted:f,handleStart:h,handleYesClick:m}=xy();return xe.jsxs("div",{className:"relative w-full h-screen overflow-hidden",children:[!f&&xe.jsx(OR,{onStart:h}),xe.jsx(LR,{shouldPlay:f}),xe.jsx(RR,{}),xe.jsx(UR,{show:l,currentCompliment:c}),xe.jsx(AR,{windowSize:r,show:n}),xe.jsx(CR,{show:s}),xe.jsx(wR,{showMessage:t,saidYes:s,onYesClick:m}),xe.jsx(DR,{})]})}_y.createRoot(document.getElementById("root")).render(xe.jsx(wi.StrictMode,{children:xe.jsx(PR,{})}));
