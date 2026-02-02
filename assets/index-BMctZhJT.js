(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function pS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var mh={exports:{}},Vo={};var tv;function mS(){if(tv)return Vo;tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Vo.Fragment=t,Vo.jsx=n,Vo.jsxs=n,Vo}var ev;function gS(){return ev||(ev=1,mh.exports=mS()),mh.exports}var St=gS(),gh={exports:{}},pe={};var nv;function vS(){if(nv)return pe;nv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(L,tt,pt){this.props=L,this.context=tt,this.refs=M,this.updater=pt||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=_.prototype;function U(L,tt,pt){this.props=L,this.context=tt,this.refs=M,this.updater=pt||b}var D=U.prototype=new P;D.constructor=U,R(D,_.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function T(L,tt,pt){var wt=pt.ref;return{$$typeof:r,type:L,key:tt,ref:wt!==void 0?wt:null,props:pt}}function C(L,tt){return T(L.type,tt,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Q(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pt){return tt[pt]})}var J=/\/+/g;function ct(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):tt.toString(36)}function rt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function I(L,tt,pt,wt,Ht){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case r:case t:ht=!0;break;case v:return ht=L._init,I(ht(L._payload),tt,pt,wt,Ht)}}if(ht)return Ht=Ht(L),ht=wt===""?"."+ct(L,0):wt,F(Ht)?(pt="",ht!=null&&(pt=ht.replace(J,"$&/")+"/"),I(Ht,tt,pt,"",function(kt){return kt})):Ht!=null&&(H(Ht)&&(Ht=C(Ht,pt+(Ht.key==null||L&&L.key===Ht.key?"":(""+Ht.key).replace(J,"$&/")+"/")+ht)),tt.push(Ht)),1;ht=0;var Dt=wt===""?".":wt+":";if(F(L))for(var Gt=0;Gt<L.length;Gt++)wt=L[Gt],it=Dt+ct(wt,Gt),ht+=I(wt,tt,pt,it,Ht);else if(Gt=S(L),typeof Gt=="function")for(L=Gt.call(L),Gt=0;!(wt=L.next()).done;)wt=wt.value,it=Dt+ct(wt,Gt++),ht+=I(wt,tt,pt,it,Ht);else if(it==="object"){if(typeof L.then=="function")return I(rt(L),tt,pt,wt,Ht);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function V(L,tt,pt){if(L==null)return L;var wt=[],Ht=0;return I(L,wt,"","",function(it){return tt.call(pt,it,Ht++)}),wt}function nt(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(pt){(L._status===0||L._status===-1)&&(L._status=1,L._result=pt)},function(pt){(L._status===0||L._status===-1)&&(L._status=2,L._result=pt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var Et=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:V,forEach:function(L,tt,pt){V(L,function(){tt.apply(this,arguments)},pt)},count:function(L){var tt=0;return V(L,function(){tt++}),tt},toArray:function(L){return V(L,function(tt){return tt})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return pe.Activity=g,pe.Children=Mt,pe.Component=_,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=U,pe.StrictMode=a,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,pe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},pe.cache=function(L){return function(){return L.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(L,tt,pt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var wt=R({},L.props),Ht=L.key;if(tt!=null)for(it in tt.key!==void 0&&(Ht=""+tt.key),tt)!q.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(wt[it]=tt[it]);var it=arguments.length-2;if(it===1)wt.children=pt;else if(1<it){for(var ht=Array(it),Dt=0;Dt<it;Dt++)ht[Dt]=arguments[Dt+2];wt.children=ht}return T(L.type,Ht,wt)},pe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},pe.createElement=function(L,tt,pt){var wt,Ht={},it=null;if(tt!=null)for(wt in tt.key!==void 0&&(it=""+tt.key),tt)q.call(tt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ht[wt]=tt[wt]);var ht=arguments.length-2;if(ht===1)Ht.children=pt;else if(1<ht){for(var Dt=Array(ht),Gt=0;Gt<ht;Gt++)Dt[Gt]=arguments[Gt+2];Ht.children=Dt}if(L&&L.defaultProps)for(wt in ht=L.defaultProps,ht)Ht[wt]===void 0&&(Ht[wt]=ht[wt]);return T(L,it,Ht)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(L){return{$$typeof:h,render:L}},pe.isValidElement=H,pe.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:nt}},pe.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},pe.startTransition=function(L){var tt=z.T,pt={};z.T=pt;try{var wt=L(),Ht=z.S;Ht!==null&&Ht(pt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(B,Et)}catch(it){Et(it)}finally{tt!==null&&pt.types!==null&&(tt.types=pt.types),z.T=tt}},pe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},pe.use=function(L){return z.H.use(L)},pe.useActionState=function(L,tt,pt){return z.H.useActionState(L,tt,pt)},pe.useCallback=function(L,tt){return z.H.useCallback(L,tt)},pe.useContext=function(L){return z.H.useContext(L)},pe.useDebugValue=function(){},pe.useDeferredValue=function(L,tt){return z.H.useDeferredValue(L,tt)},pe.useEffect=function(L,tt){return z.H.useEffect(L,tt)},pe.useEffectEvent=function(L){return z.H.useEffectEvent(L)},pe.useId=function(){return z.H.useId()},pe.useImperativeHandle=function(L,tt,pt){return z.H.useImperativeHandle(L,tt,pt)},pe.useInsertionEffect=function(L,tt){return z.H.useInsertionEffect(L,tt)},pe.useLayoutEffect=function(L,tt){return z.H.useLayoutEffect(L,tt)},pe.useMemo=function(L,tt){return z.H.useMemo(L,tt)},pe.useOptimistic=function(L,tt){return z.H.useOptimistic(L,tt)},pe.useReducer=function(L,tt,pt){return z.H.useReducer(L,tt,pt)},pe.useRef=function(L){return z.H.useRef(L)},pe.useState=function(L){return z.H.useState(L)},pe.useSyncExternalStore=function(L,tt,pt){return z.H.useSyncExternalStore(L,tt,pt)},pe.useTransition=function(){return z.H.useTransition()},pe.version="19.2.4",pe}var iv;function np(){return iv||(iv=1,gh.exports=vS()),gh.exports}var yn=np();const ss=pS(yn);var vh={exports:{}},ko={},_h={exports:{}},xh={};var av;function _S(){return av||(av=1,(function(r){function t(I,V){var nt=I.length;I.push(V);t:for(;0<nt;){var Et=nt-1>>>1,Mt=I[Et];if(0<o(Mt,V))I[Et]=V,I[nt]=Mt,nt=Et;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var V=I[0],nt=I.pop();if(nt!==V){I[0]=nt;t:for(var Et=0,Mt=I.length,L=Mt>>>1;Et<L;){var tt=2*(Et+1)-1,pt=I[tt],wt=tt+1,Ht=I[wt];if(0>o(pt,nt))wt<Mt&&0>o(Ht,pt)?(I[Et]=Ht,I[wt]=nt,Et=wt):(I[Et]=pt,I[tt]=nt,Et=tt);else if(wt<Mt&&0>o(Ht,nt))I[Et]=Ht,I[wt]=nt,Et=wt;else break t}}return V}function o(I,V){var nt=I.sortIndex-V.sortIndex;return nt!==0?nt:I.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,x=3,S=!1,b=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var V=n(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=I)a(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=n(p)}}function F(I){if(R=!1,D(I),!b)if(n(m)!==null)b=!0,B||(B=!0,Q());else{var V=n(p);V!==null&&rt(F,V.startTime-I)}}var B=!1,z=-1,q=5,T=-1;function C(){return M?!0:!(r.unstable_now()-T<q)}function H(){if(M=!1,B){var I=r.unstable_now();T=I;var V=!0;try{t:{b=!1,R&&(R=!1,P(z),z=-1),S=!0;var nt=x;try{e:{for(D(I),g=n(m);g!==null&&!(g.expirationTime>I&&C());){var Et=g.callback;if(typeof Et=="function"){g.callback=null,x=g.priorityLevel;var Mt=Et(g.expirationTime<=I);if(I=r.unstable_now(),typeof Mt=="function"){g.callback=Mt,D(I),V=!0;break e}g===n(m)&&a(m),D(I)}else a(m);g=n(m)}if(g!==null)V=!0;else{var L=n(p);L!==null&&rt(F,L.startTime-I),V=!1}}break t}finally{g=null,x=nt,S=!1}V=void 0}}finally{V?Q():B=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ct=J.port2;J.port1.onmessage=H,Q=function(){ct.postMessage(null)}}else Q=function(){_(H,0)};function rt(I,V){z=_(function(){I(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var nt=x;x=V;try{return I()}finally{x=nt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var nt=x;x=I;try{return V()}finally{x=nt}},r.unstable_scheduleCallback=function(I,V,nt){var Et=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?Et+nt:Et):nt=Et,I){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=nt+Mt,I={id:v++,callback:V,priorityLevel:I,startTime:nt,expirationTime:Mt,sortIndex:-1},nt>Et?(I.sortIndex=nt,t(p,I),n(m)===null&&I===n(p)&&(R?(P(z),z=-1):R=!0,rt(F,nt-Et))):(I.sortIndex=Mt,t(m,I),b||S||(b=!0,B||(B=!0,Q()))),I},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(I){var V=x;return function(){var nt=x;x=V;try{return I.apply(this,arguments)}finally{x=nt}}}})(xh)),xh}var sv;function xS(){return sv||(sv=1,_h.exports=_S()),_h.exports}var yh={exports:{}},Pn={};var rv;function yS(){if(rv)return Pn;rv=1;var r=np();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Pn.flushSync=function(m){var p=f.T,v=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=v,a.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:S}):v==="script"&&a.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);a.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Pn.requestFormReset=function(m){a.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.4",Pn}var ov;function SS(){if(ov)return yh.exports;ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=yS(),yh.exports}var lv;function MS(){if(lv)return ko;lv=1;var r=xS(),t=np(),n=SS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),e;if(d===l)return m(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=u,l=d;else{for(var y=!1,A=u.child;A;){if(A===s){y=!0,s=u,l=d;break}if(A===l){y=!0,l=u,s=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===s){y=!0,s=d,l=u;break}if(A===l){y=!0,l=d,s=u;break}A=A.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var rt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},Et=[],Mt=-1;function L(e){return{current:e}}function tt(e){0>Mt||(e.current=Et[Mt],Et[Mt]=null,Mt--)}function pt(e,i){Mt++,Et[Mt]=e.current,e.current=i}var wt=L(null),Ht=L(null),it=L(null),ht=L(null);function Dt(e,i){switch(pt(it,i),pt(Ht,e),pt(wt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Eg(i),e=bg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(wt),pt(wt,e)}function Gt(){tt(wt),tt(Ht),tt(it)}function kt(e){e.memoizedState!==null&&pt(ht,e);var i=wt.current,s=bg(i,e.type);i!==s&&(pt(Ht,e),pt(wt,s))}function ge(e){Ht.current===e&&(tt(wt),tt(Ht)),ht.current===e&&(tt(ht),Fo._currentValue=nt)}var be,ue;function gt(e){if(be===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);be=i&&i[1]||"",ue=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+ue}var bt=!1;function xt(e,i){if(!e||bt)return"";bt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var st=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){st=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var G=y.split(`
`),et=A.split(`
`);for(u=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(l===G.length||u===et.length)for(l=G.length-1,u=et.length-1;1<=l&&0<=u&&G[l]!==et[u];)u--;for(;1<=l&&0<=u;l--,u--)if(G[l]!==et[u]){if(l!==1||u!==1)do if(l--,u--,0>u||G[l]!==et[u]){var dt=`
`+G[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=u);break}}}finally{bt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?gt(s):""}function Pt(e,i){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return xt(e.type,!1);case 11:return xt(e.type.render,!1);case 1:return xt(e.type,!0);case 31:return gt("Activity");default:return""}}function O(e){try{var i="",s=null;do i+=Pt(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ne=Object.prototype.hasOwnProperty,zt=r.unstable_scheduleCallback,ae=r.unstable_cancelCallback,Ut=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ut=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Jt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Kt=r.log,oe=r.unstable_setDisableYieldValue,Tt=null,Rt=null;function Yt(e){if(typeof Kt=="function"&&oe(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Tt,e)}catch{}}var Xt=Math.clz32?Math.clz32:X,Ot=Math.log,ve=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ot(e)/ve|0)|0}var Ft=256,Ct=262144,Wt=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?u=At(l):(y&=A,y!==0?u=At(y):s||(s=A&~e,s!==0&&(u=At(s))))):(A=l&~d,A!==0?u=At(A):y!==0?u=At(y):s||(s=l&~e,s!==0&&(u=At(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Nt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Wt;return Wt<<=1,(Wt&62914560)===0&&(Wt=4194304),e}function Ce(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,i,s,l,u,d){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(s=y&~s;0<s;){var dt=31-Xt(s),vt=1<<dt;A[dt]=0,G[dt]=-1;var st=et[dt];if(st!==null)for(et[dt]=null,dt=0;dt<st.length;dt++){var lt=st[dt];lt!==null&&(lt.lane&=-536870913)}s&=~vt}l!==0&&ml(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~i))}function ml(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Xt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function Zr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Xt(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function Hs(e,i){var s=i&-i;return s=(s&42)!==0?1:Qr(s),(s&(e.suspendedLanes|i))!==0?0:s}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Oi(e,i){var s=V.p;try{return V.p=e,i()}finally{V.p=s}}var ci=Math.random().toString(36).slice(2),ln="__reactFiber$"+ci,Sn="__reactProps$"+ci,Mi="__reactContainer$"+ci,Vs="__reactEvents$"+ci,ks="__reactListeners$"+ci,gl="__reactHandles$"+ci,Jr="__reactResources$"+ci,ls="__reactMarker$"+ci;function $r(e){delete e[ln],delete e[Sn],delete e[Vs],delete e[ks],delete e[gl]}function Ta(e){var i=e[ln];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Mi]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Ug(e);e!==null;){if(s=e[ln])return s;e=Ug(e)}return i}e=s,s=e.parentNode}return null}function Aa(e){if(e=e[ln]||e[Mi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function cs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function wa(e){var i=e[Jr];return i||(i=e[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(e){e[ls]=!0}var Y=new Set,ot={};function at(e,i){K(e,i),K(e+"Capture",i)}function K(e,i){for(ot[e]=i,e=0;e<i.length;e++)Y.add(i[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},Bt={};function Zt(e){return ne.call(Bt,e)?!0:ne.call(jt,e)?!1:It.test(e)?Bt[e]=!0:(jt[e]=!0,!1)}function $t(e,i,s){if(Zt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function re(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function te(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ye(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function ze(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Oe(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function he(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Mn(e,i,s,l,u,d,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?En(e,y,le(i)):s!=null?En(e,y,le(s)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+le(A):e.removeAttribute("name")}function Zi(e,i,s,l,u,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ye(e);return}s=s!=null?""+le(s):"",i=i!=null?""+le(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ye(e)}function En(e,i,s){i==="number"&&ie(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ui(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+le(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Be(e,i,s){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+le(s):""}function bn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(rt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=le(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ye(e)}function pn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Tn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Xs(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&An(e,u,l)}else for(var d in i)i.hasOwnProperty(d)&&An(e,d,i[d])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return fx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Mp(e){var i=Aa(e);if(i&&(e=i.stateNode)){var s=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Mn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+he(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[Sn]||null;if(!u)throw Error(a(90));Mn(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&ze(l)}break t;case"textarea":Be(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&ui(e,!!s.multiple,i,!1)}}}var du=!1;function Ep(e,i,s){if(du)return e(i,s);du=!0;try{var l=e(i);return l}finally{if(du=!1,(Ws!==null||qs!==null)&&(ac(),Ws&&(i=Ws,e=qs,qs=Ws=null,Mp(i),e)))for(i=0;i<e.length;i++)Mp(e[i])}}function to(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){pu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{pu=!1}var Ra=null,mu=null,_l=null;function bp(){if(_l)return _l;var e,i=mu,s=i.length,l,u="value"in Ra?Ra.value:Ra.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var y=s-e;for(l=1;l<=y&&i[s-l]===u[d-l];l++);return _l=u.slice(e,1<l?1-l:void 0)}function xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Tp(){return!1}function Vn(e){function i(s,l,u,d,y){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Tp,this.isPropagationStopped=Tp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Vn(us),no=g({},us,{view:0,detail:0}),hx=Vn(no),gu,vu,io,Ml=g({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(gu=e.screenX-io.screenX,vu=e.screenY-io.screenY):vu=gu=0,io=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Ap=Vn(Ml),dx=g({},Ml,{dataTransfer:0}),px=Vn(dx),mx=g({},no,{relatedTarget:0}),_u=Vn(mx),gx=g({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Vn(gx),_x=g({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xx=Vn(_x),yx=g({},us,{data:0}),wp=Vn(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ex[e])?!!i[e]:!1}function xu(){return bx}var Tx=g({},no,{key:function(e){if(e.key){var i=Sx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ax=Vn(Tx),wx=g({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Vn(wx),Rx=g({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Cx=Vn(Rx),Dx=g({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=Vn(Dx),Nx=g({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Vn(Nx),Ox=g({},us,{newState:0,oldState:0}),Px=Vn(Ox),Ix=[9,13,27,32],yu=Ki&&"CompositionEvent"in window,ao=null;Ki&&"documentMode"in document&&(ao=document.documentMode);var zx=Ki&&"TextEvent"in window&&!ao,Cp=Ki&&(!yu||ao&&8<ao&&11>=ao),Dp=" ",Up=!1;function Np(e,i){switch(e){case"keyup":return Ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Fx(e,i){switch(e){case"compositionend":return Lp(i);case"keypress":return i.which!==32?null:(Up=!0,Dp);case"textInput":return e=i.data,e===Dp&&Up?null:e;default:return null}}function Bx(e,i){if(Ys)return e==="compositionend"||!yu&&Np(e,i)?(e=bp(),_l=mu=Ra=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cp&&i.locale!=="ko"?null:i.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Hx[e.type]:i==="textarea"}function Pp(e,i,s,l){Ws?qs?qs.push(l):qs=[l]:Ws=l,i=fc(i,"onChange"),0<i.length&&(s=new Sl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var so=null,ro=null;function Gx(e){vg(e,0)}function El(e){var i=cs(e);if(ze(i))return e}function Ip(e,i){if(e==="change")return i}var zp=!1;if(Ki){var Su;if(Ki){var Mu="oninput"in document;if(!Mu){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Mu=typeof Fp.oninput=="function"}Su=Mu}else Su=!1;zp=Su&&(!document.documentMode||9<document.documentMode)}function Bp(){so&&(so.detachEvent("onpropertychange",Hp),ro=so=null)}function Hp(e){if(e.propertyName==="value"&&El(ro)){var i=[];Pp(i,ro,e,hu(e)),Ep(Gx,i)}}function Vx(e,i,s){e==="focusin"?(Bp(),so=i,ro=s,so.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(ro)}function Xx(e,i){if(e==="click")return El(i)}function Wx(e,i){if(e==="input"||e==="change")return El(i)}function qx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:qx;function oo(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!ne.call(i,u)||!Kn(e[u],i[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,i){var s=Gp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Gp(s)}}function kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ie(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ie(e.document)}return i}function Eu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Yx=Ki&&"documentMode"in document&&11>=document.documentMode,js=null,bu=null,lo=null,Tu=!1;function Wp(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Tu||js==null||js!==ie(l)||(l=js,"selectionStart"in l&&Eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&oo(lo,l)||(lo=l,l=fc(bu,"onSelect"),0<l.length&&(i=new Sl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=js)))}function fs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Zs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Au={},qp={};Ki&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function hs(e){if(Au[e])return Au[e];if(!Zs[e])return e;var i=Zs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in qp)return Au[e]=i[s];return e}var Yp=hs("animationend"),jp=hs("animationiteration"),Zp=hs("animationstart"),jx=hs("transitionrun"),Zx=hs("transitionstart"),Qx=hs("transitioncancel"),Qp=hs("transitionend"),Kp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function bi(e,i){Kp.set(e,i),at(i,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Qs=0,Ru=0;function Tl(){for(var e=Qs,i=Ru=Qs=0;i<e;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var u=fi[i];fi[i++]=null;var d=fi[i];if(fi[i++]=null,l!==null&&u!==null){var y=l.pending;y===null?u.next=u:(u.next=y.next,y.next=u),l.pending=u}d!==0&&Jp(s,u,d)}}function Al(e,i,s,l){fi[Qs++]=e,fi[Qs++]=i,fi[Qs++]=s,fi[Qs++]=l,Ru|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cu(e,i,s,l){return Al(e,i,s,l),wl(e)}function ds(e,i){return Al(e,null,null,i),wl(e)}function Jp(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Xt(s),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function wl(e){if(50<Uo)throw Uo=0,Bf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ks={};function Kx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,i,s,l){return new Kx(e,i,s,l)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,i){var s=e.alternate;return s===null?(s=Jn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function $p(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Rl(e,i,s,l,u,d){var y=0;if(l=e,typeof e=="function")Du(e)&&(y=1);else if(typeof e=="string")y=nS(e,s,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=Jn(31,s,i,u),e.elementType=T,e.lanes=d,e;case R:return ps(s.children,u,d,i);case M:y=8,u|=24;break;case _:return e=Jn(12,s,i,u|2),e.elementType=_,e.lanes=d,e;case F:return e=Jn(13,s,i,u),e.elementType=F,e.lanes=d,e;case B:return e=Jn(19,s,i,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case P:y=9;break t;case D:y=11;break t;case z:y=14;break t;case q:y=16,l=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Jn(y,s,i,u),i.elementType=e,i.type=l,i.lanes=d,i}function ps(e,i,s,l){return e=Jn(7,e,l,i),e.lanes=s,e}function Uu(e,i,s){return e=Jn(6,e,null,i),e.lanes=s,e}function tm(e){var i=Jn(18,null,null,0);return i.stateNode=e,i}function Nu(e,i,s){return i=Jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var em=new WeakMap;function hi(e,i){if(typeof e=="object"&&e!==null){var s=em.get(e);return s!==void 0?s:(i={value:e,source:i,stack:O(i)},em.set(e,i),i)}return{value:e,source:i,stack:O(i)}}var Js=[],$s=0,Cl=null,co=0,di=[],pi=0,Ca=null,Pi=1,Ii="";function $i(e,i){Js[$s++]=co,Js[$s++]=Cl,Cl=e,co=i}function nm(e,i,s){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=Ca,Ca=e;var l=Pi;e=Ii;var u=32-Xt(l)-1;l&=~(1<<u),s+=1;var d=32-Xt(i)+u;if(30<d){var y=u-u%5;d=(l&(1<<y)-1).toString(32),l>>=y,u-=y,Pi=1<<32-Xt(i)+u|s<<u|l,Ii=d+e}else Pi=1<<d|s<<u|l,Ii=e}function Lu(e){e.return!==null&&($i(e,1),nm(e,1,0))}function Ou(e){for(;e===Cl;)Cl=Js[--$s],Js[$s]=null,co=Js[--$s],Js[$s]=null;for(;e===Ca;)Ca=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function im(e,i){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=Ca,Pi=i.id,Ii=i.overflow,Ca=e}var wn=null,je=null,we=!1,Da=null,mi=!1,Pu=Error(a(519));function Ua(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(hi(i,e)),Pu}function am(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[ln]=e,i[Sn]=l,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(s=0;s<Lo.length;s++)Me(Lo[s],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Zi(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),bn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Sg(i.textContent,s)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Qi),i=!0):i=!1,i||Ua(e,!0)}function sm(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:wn=wn.return}}function tr(e){if(e!==wn)return!1;if(!we)return sm(e),we=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||th(e.type,e.memoizedProps)),s=!s),s&&je&&Ua(e),sm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=Dg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=Dg(e)}else i===27?(i=je,Wa(e.type)?(e=sh,sh=null,je=e):je=i):je=wn?vi(e.stateNode.nextSibling):null;return!0}function ms(){je=wn=null,we=!1}function Iu(){var e=Da;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Da=null),e}function uo(e){Da===null?Da=[e]:Da.push(e)}var zu=L(null),gs=null,ta=null;function Na(e,i,s){pt(zu,i._currentValue),i._currentValue=s}function ea(e){e._currentValue=zu.current,tt(zu)}function Fu(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Bu(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var G=0;G<i.length;G++)if(A.context===i[G]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),Fu(d.return,s,e),l||(y=null);break t}d=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),Fu(y,s,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function er(e,i,s,l){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var A=u.type;Kn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&Bu(i,e,s,l),i.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){gs=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return rm(gs,e)}function Ul(e,i){return gs===null&&vs(e),rm(e,i)}function rm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ta===null){if(e===null)throw Error(a(308));ta=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ta=ta.next=i;return s}var Jx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},$x=r.unstable_scheduleCallback,ty=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Jx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&$x(ty,function(){e.controller.abort()})}var ho=null,Gu=0,nr=0,ir=null;function ey(e,i){if(ho===null){var s=ho=[];Gu=0,nr=Wf(),ir={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Gu++,i.then(om,om),i}function om(){if(--Gu===0&&ho!==null){ir!==null&&(ir.status="fulfilled");var e=ho;ho=null,nr=0,ir=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ny(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var lm=I.S;I.S=function(e,i){W0=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ey(e,i),lm!==null&&lm(e,i)};var _s=L(null);function Vu(){var e=_s.current;return e!==null?e:qe.pooledCache}function Nl(e,i){i===null?pt(_s,_s.current):pt(_s,i.pool)}function cm(){var e=Vu();return e===null?null:{parent:cn._currentValue,pool:e}}var ar=Error(a(460)),ku=Error(a(474)),Ll=Error(a(542)),Ol={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Qi,Qi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e;default:if(typeof i.status=="string")i.then(Qi,Qi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e}throw ys=i,ar}}function xs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ys=s,ar):s}}var ys=null;function hm(){if(ys===null)throw Error(a(459));var e=ys;return ys=null,e}function dm(e){if(e===ar||e===Ll)throw Error(a(483))}var sr=null,po=0;function Pl(e){var i=po;return po+=1,sr===null&&(sr=[]),fm(sr,e,i)}function mo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Il(e,i){throw i.$$typeof===x?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function pm(e){function i(Z,k){if(e){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function s(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Ji(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,$,mt){return k===null||k.tag!==6?(k=Uu($,Z.mode,mt),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function G(Z,k,$,mt){var se=$.type;return se===R?dt(Z,k,$.props.children,mt,$.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&xs(se)===k.type)?(k=u(k,$.props),mo(k,$),k.return=Z,k):(k=Rl($.type,$.key,$.props,null,Z.mode,mt),mo(k,$),k.return=Z,k)}function et(Z,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Nu($,Z.mode,mt),k.return=Z,k):(k=u(k,$.children||[]),k.return=Z,k)}function dt(Z,k,$,mt,se){return k===null||k.tag!==7?(k=ps($,Z.mode,mt,se),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function vt(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Uu(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return $=Rl(k.type,k.key,k.props,null,Z.mode,$),mo($,k),$.return=Z,$;case b:return k=Nu(k,Z.mode,$),k.return=Z,k;case q:return k=xs(k),vt(Z,k,$)}if(rt(k)||Q(k))return k=ps(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return vt(Z,Pl(k),$);if(k.$$typeof===U)return vt(Z,Ul(Z,k),$);Il(Z,k)}return null}function st(Z,k,$,mt){var se=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return se!==null?null:A(Z,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===se?G(Z,k,$,mt):null;case b:return $.key===se?et(Z,k,$,mt):null;case q:return $=xs($),st(Z,k,$,mt)}if(rt($)||Q($))return se!==null?null:dt(Z,k,$,mt,null);if(typeof $.then=="function")return st(Z,k,Pl($),mt);if($.$$typeof===U)return st(Z,k,Ul(Z,$),mt);Il(Z,$)}return null}function lt(Z,k,$,mt,se){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get($)||null,A(k,Z,""+mt,se);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return Z=Z.get(mt.key===null?$:mt.key)||null,G(k,Z,mt,se);case b:return Z=Z.get(mt.key===null?$:mt.key)||null,et(k,Z,mt,se);case q:return mt=xs(mt),lt(Z,k,$,mt,se)}if(rt(mt)||Q(mt))return Z=Z.get($)||null,dt(k,Z,mt,se,null);if(typeof mt.then=="function")return lt(Z,k,$,Pl(mt),se);if(mt.$$typeof===U)return lt(Z,k,$,Ul(k,mt),se);Il(k,mt)}return null}function Qt(Z,k,$,mt){for(var se=null,Ne=null,ee=k,_e=k=0,Ae=null;ee!==null&&_e<$.length;_e++){ee.index>_e?(Ae=ee,ee=null):Ae=ee.sibling;var Le=st(Z,ee,$[_e],mt);if(Le===null){ee===null&&(ee=Ae);break}e&&ee&&Le.alternate===null&&i(Z,ee),k=d(Le,k,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le,ee=Ae}if(_e===$.length)return s(Z,ee),we&&$i(Z,_e),se;if(ee===null){for(;_e<$.length;_e++)ee=vt(Z,$[_e],mt),ee!==null&&(k=d(ee,k,_e),Ne===null?se=ee:Ne.sibling=ee,Ne=ee);return we&&$i(Z,_e),se}for(ee=l(ee);_e<$.length;_e++)Ae=lt(ee,Z,_e,$[_e],mt),Ae!==null&&(e&&Ae.alternate!==null&&ee.delete(Ae.key===null?_e:Ae.key),k=d(Ae,k,_e),Ne===null?se=Ae:Ne.sibling=Ae,Ne=Ae);return e&&ee.forEach(function(Qa){return i(Z,Qa)}),we&&$i(Z,_e),se}function ce(Z,k,$,mt){if($==null)throw Error(a(151));for(var se=null,Ne=null,ee=k,_e=k=0,Ae=null,Le=$.next();ee!==null&&!Le.done;_e++,Le=$.next()){ee.index>_e?(Ae=ee,ee=null):Ae=ee.sibling;var Qa=st(Z,ee,Le.value,mt);if(Qa===null){ee===null&&(ee=Ae);break}e&&ee&&Qa.alternate===null&&i(Z,ee),k=d(Qa,k,_e),Ne===null?se=Qa:Ne.sibling=Qa,Ne=Qa,ee=Ae}if(Le.done)return s(Z,ee),we&&$i(Z,_e),se;if(ee===null){for(;!Le.done;_e++,Le=$.next())Le=vt(Z,Le.value,mt),Le!==null&&(k=d(Le,k,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le);return we&&$i(Z,_e),se}for(ee=l(ee);!Le.done;_e++,Le=$.next())Le=lt(ee,Z,_e,Le.value,mt),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?_e:Le.key),k=d(Le,k,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le);return e&&ee.forEach(function(dS){return i(Z,dS)}),we&&$i(Z,_e),se}function We(Z,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var se=$.key;k!==null;){if(k.key===se){if(se=$.type,se===R){if(k.tag===7){s(Z,k.sibling),mt=u(k,$.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&xs(se)===k.type){s(Z,k.sibling),mt=u(k,$.props),mo(mt,$),mt.return=Z,Z=mt;break t}s(Z,k);break}else i(Z,k);k=k.sibling}$.type===R?(mt=ps($.props.children,Z.mode,mt,$.key),mt.return=Z,Z=mt):(mt=Rl($.type,$.key,$.props,null,Z.mode,mt),mo(mt,$),mt.return=Z,Z=mt)}return y(Z);case b:t:{for(se=$.key;k!==null;){if(k.key===se)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(Z,k.sibling),mt=u(k,$.children||[]),mt.return=Z,Z=mt;break t}else{s(Z,k);break}else i(Z,k);k=k.sibling}mt=Nu($,Z.mode,mt),mt.return=Z,Z=mt}return y(Z);case q:return $=xs($),We(Z,k,$,mt)}if(rt($))return Qt(Z,k,$,mt);if(Q($)){if(se=Q($),typeof se!="function")throw Error(a(150));return $=se.call($),ce(Z,k,$,mt)}if(typeof $.then=="function")return We(Z,k,Pl($),mt);if($.$$typeof===U)return We(Z,k,Ul(Z,$),mt);Il(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(Z,k.sibling),mt=u(k,$),mt.return=Z,Z=mt):(s(Z,k),mt=Uu($,Z.mode,mt),mt.return=Z,Z=mt),y(Z)):s(Z,k)}return function(Z,k,$,mt){try{po=0;var se=We(Z,k,$,mt);return sr=null,se}catch(ee){if(ee===ar||ee===Ll)throw ee;var Ne=Jn(29,ee,null,Z.mode);return Ne.lanes=mt,Ne.return=Z,Ne}}}var Ss=pm(!0),mm=pm(!1),La=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ie&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=wl(e),Jp(e,null,s),i}return Al(e,l,i,s),wl(e)}function go(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Zr(e,s)}}function qu(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Yu=!1;function vo(){if(Yu){var e=ir;if(e!==null)throw e}}function _o(e,i,s,l){Yu=!1;var u=e.updateQueue;La=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,et=G.next;G.next=null,y===null?d=et:y.next=et,y=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==y&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=G))}if(d!==null){var vt=u.baseState;y=0,dt=et=G=null,A=d;do{var st=A.lane&-536870913,lt=st!==A.lane;if(lt?(Te&st)===st:(l&st)===st){st!==0&&st===nr&&(Yu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Qt=e,ce=A;st=i;var We=s;switch(ce.tag){case 1:if(Qt=ce.payload,typeof Qt=="function"){vt=Qt.call(We,vt,st);break t}vt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=ce.payload,st=typeof Qt=="function"?Qt.call(We,vt,st):Qt,st==null)break t;vt=g({},vt,st);break t;case 2:La=!0}}st=A.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=lt,G=vt):dt=dt.next=lt,y|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),Ha|=y,e.lanes=y,e.memoizedState=vt}}function gm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function vm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)gm(s[e],i)}var rr=L(null),zl=L(0);function _m(e,i){e=ua,pt(zl,e),pt(rr,i),ua=e|i.baseLanes}function ju(){pt(zl,ua),pt(rr,rr.current)}function Zu(){ua=zl.current,tt(rr),tt(zl)}var $n=L(null),gi=null;function Ia(e){var i=e.alternate;pt(sn,sn.current&1),pt($n,e),gi===null&&(i===null||rr.current!==null||i.memoizedState!==null)&&(gi=e)}function Qu(e){pt(sn,sn.current),pt($n,e),gi===null&&(gi=e)}function xm(e){e.tag===22?(pt(sn,sn.current),pt($n,e),gi===null&&(gi=e)):za()}function za(){pt(sn,sn.current),pt($n,$n.current)}function ti(e){tt($n),gi===e&&(gi=null),tt(sn)}var sn=L(0);function Fl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ih(s)||ah(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var na=0,me=null,ke=null,un=null,Bl=!1,or=!1,Ms=!1,Hl=0,xo=0,lr=null,iy=0;function en(){throw Error(a(321))}function Ku(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function Ju(e,i,s,l,u,d){return na=d,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?n0:pf,Ms=!1,d=s(l,u),Ms=!1,or&&(d=Sm(i,s,l,u)),ym(e),d}function ym(e){I.H=Mo;var i=ke!==null&&ke.next!==null;if(na=0,un=ke=me=null,Bl=!1,xo=0,lr=null,i)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&Dl(e)&&(fn=!0))}function Sm(e,i,s,l){me=e;var u=0;do{if(or&&(lr=null),xo=0,or=!1,25<=u)throw Error(a(301));if(u+=1,un=ke=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=i0,d=i(s,l)}while(or);return d}function ay(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?yo(i):i,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(me.flags|=1024),i}function $u(){var e=Hl!==0;return Hl=0,e}function tf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function ef(e){if(Bl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bl=!1}na=0,un=ke=me=null,or=!1,xo=Hl=0,lr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?me.memoizedState=un=e:un=un.next=e,un}function rn(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var i=un===null?me.memoizedState:un.next;if(i!==null)un=i,ke=e;else{if(e===null)throw me.alternate===null?Error(a(467)):Error(a(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?me.memoizedState=un=e:un=un.next=e}return un}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var i=xo;return xo+=1,lr===null&&(lr=[]),e=fm(lr,e,i),i=me,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?n0:pf),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===U)return Rn(e)}throw Error(a(438,String(e)))}function nf(e){var i=null,s=me.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Gl(),me.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=C;return i.index++,s}function ia(e,i){return typeof i=="function"?i(e):i}function kl(e){var i=rn();return af(i,ke,e)}function af(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}i.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var A=y=null,G=null,et=i,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(Te&vt)===vt:(na&vt)===vt){var st=et.revertLane;if(st===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===nr&&(dt=!0);else if((na&st)===st){et=et.next,st===nr&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=vt,y=d):G=G.next=vt,me.lanes|=st,Ha|=st;vt=et.action,Ms&&s(d,vt),d=et.hasEagerState?et.eagerState:s(d,vt)}else st={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=st,y=d):G=G.next=st,me.lanes|=vt,Ha|=vt;et=et.next}while(et!==null&&et!==i);if(G===null?y=d:G.next=A,!Kn(d,e.memoizedState)&&(fn=!0,dt&&(s=ir,s!==null)))throw s;e.memoizedState=d,e.baseState=y,e.baseQueue=G,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sf(e){var i=rn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Kn(d,i.memoizedState)||(fn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Mm(e,i,s){var l=me,u=rn(),d=we;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!Kn((ke||u).memoizedState,s);if(y&&(u.memoizedState=s,fn=!0),u=u.queue,lf(Tm.bind(null,l,u,e),[e]),u.getSnapshot!==i||y||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,l,u,s,i),null),qe===null)throw Error(a(349));d||(na&127)!==0||Em(l,i,s)}return s}function Em(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=me.updateQueue,i===null?(i=Gl(),me.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function bm(e,i,s,l){i.value=s,i.getSnapshot=l,Am(i)&&wm(e)}function Tm(e,i,s){return s(function(){Am(i)&&wm(e)})}function Am(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function wm(e){var i=ds(e,2);i!==null&&Yn(i,e,2)}function rf(e){var i=Bn();if(typeof e=="function"){var s=e;if(e=s(),Ms){Yt(!0);try{s()}finally{Yt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},i}function Rm(e,i,s,l){return e.baseState=s,af(e,ke,typeof l=="function"?l:ia)}function sy(e,i,s,l,u){if(ql(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};I.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,Cm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Cm(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var d=I.T,y={};I.T=y;try{var A=s(u,l),G=I.S;G!==null&&G(y,A),Dm(e,i,A)}catch(et){of(e,i,et)}finally{d!==null&&y.types!==null&&(d.types=y.types),I.T=d}}else try{d=s(u,l),Dm(e,i,d)}catch(et){of(e,i,et)}}function Dm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Um(e,i,l)},function(l){return of(e,i,l)}):Um(e,i,s)}function Um(e,i,s){i.status="fulfilled",i.value=s,Nm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Cm(e,s)))}function of(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Nm(i),i=i.next;while(i!==l)}e.action=null}function Nm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Lm(e,i){return i}function Om(e,i){if(we){var s=qe.formState;if(s!==null){t:{var l=me;if(we){if(je){e:{for(var u=je,d=mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){je=vi(u.nextSibling),l=u.data==="F!";break t}}Ua(l)}l=!1}l&&(i=s[0])}}return s=Bn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:i},s.queue=l,s=$m.bind(null,me,l),l.dispatch=s,l=rf(!1),d=df.bind(null,me,!1,l.queue),l=Bn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=sy.bind(null,me,u,d,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function Pm(e){var i=rn();return Im(i,ke,e)}function Im(e,i,s){if(i=af(e,i,Lm)[0],e=kl(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=yo(i)}catch(y){throw y===ar?Ll:y}else l=i;i=rn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(me.flags|=2048,cr(9,{destroy:void 0},ry.bind(null,u,s),null)),[l,d,e]}function ry(e,i){e.action=i}function zm(e){var i=rn(),s=ke;if(s!==null)return Im(i,s,e);rn(),i=i.memoizedState,s=rn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function cr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=Gl(),me.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Fm(){return rn().memoizedState}function Xl(e,i,s,l){var u=Bn();me.flags|=e,u.memoizedState=cr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Wl(e,i,s,l){var u=rn();l=l===void 0?null:l;var d=u.memoizedState.inst;ke!==null&&l!==null&&Ku(l,ke.memoizedState.deps)?u.memoizedState=cr(i,d,s,l):(me.flags|=e,u.memoizedState=cr(1|i,d,s,l))}function Bm(e,i){Xl(8390656,8,e,i)}function lf(e,i){Wl(2048,8,e,i)}function oy(e){me.flags|=4;var i=me.updateQueue;if(i===null)i=Gl(),me.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Hm(e){var i=rn().memoizedState;return oy({ref:i,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Gm(e,i){return Wl(4,2,e,i)}function Vm(e,i){return Wl(4,4,e,i)}function km(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xm(e,i,s){s=s!=null?s.concat([e]):null,Wl(4,4,km.bind(null,i,e),s)}function cf(){}function Wm(e,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Ku(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function qm(e,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Ku(i,l[1]))return l[0];if(l=e(),Ms){Yt(!0);try{e()}finally{Yt(!1)}}return s.memoizedState=[l,i],l}function uf(e,i,s){return s===void 0||(na&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Y0(),me.lanes|=e,Ha|=e,s)}function Ym(e,i,s,l){return Kn(s,i)?s:rr.current!==null?(e=uf(e,s,l),Kn(e,i)||(fn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Te&261930)===0?(fn=!0,e.memoizedState=s):(e=Y0(),me.lanes|=e,Ha|=e,i)}function jm(e,i,s,l,u){var d=V.p;V.p=d!==0&&8>d?d:8;var y=I.T,A={};I.T=A,df(e,!1,i,s);try{var G=u(),et=I.S;if(et!==null&&et(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=ny(G,l);So(e,i,dt,ii(e))}else So(e,i,l,ii(e))}catch(vt){So(e,i,{then:function(){},status:"rejected",reason:vt},ii())}finally{V.p=d,y!==null&&A.types!==null&&(y.types=A.types),I.T=y}}function ly(){}function ff(e,i,s,l){if(e.tag!==5)throw Error(a(476));var u=Zm(e).queue;jm(e,u,i,nt,s===null?ly:function(){return Qm(e),s(l)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:nt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Qm(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),So(e,i.next.queue,{},ii())}function hf(){return Rn(Fo)}function Km(){return rn().memoizedState}function Jm(){return rn().memoizedState}function cy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ii();e=Oa(s);var l=Pa(i,e,s);l!==null&&(Yn(l,i,s),go(l,i,s)),i={cache:Hu()},e.payload=i;return}i=i.return}}function uy(e,i,s){var l=ii();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ql(e)?t0(i,s):(s=Cu(e,i,s,l),s!==null&&(Yn(s,e,l),e0(s,i,l)))}function $m(e,i,s){var l=ii();So(e,i,s,l)}function So(e,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(ql(e))t0(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,A=d(y,s);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,y))return Al(e,i,u,0),qe===null&&Tl(),!1}catch{}if(s=Cu(e,i,u,l),s!==null)return Yn(s,e,l),e0(s,i,l),!0}return!1}function df(e,i,s,l){if(l={lane:2,revertLane:Wf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(i)throw Error(a(479))}else i=Cu(e,s,l,2),i!==null&&Yn(i,e,2)}function ql(e){var i=e.alternate;return e===me||i!==null&&i===me}function t0(e,i){or=Bl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function e0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Zr(e,s)}}var Mo={readContext:Rn,use:Vl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Mo.useEffectEvent=en;var n0={readContext:Rn,use:Vl,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:Rn,useEffect:Bm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Xl(4194308,4,km.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Xl(4194308,4,e,i)},useInsertionEffect:function(e,i){Xl(4,2,e,i)},useMemo:function(e,i){var s=Bn();i=i===void 0?null:i;var l=e();if(Ms){Yt(!0);try{e()}finally{Yt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Bn();if(s!==void 0){var u=s(i);if(Ms){Yt(!0);try{s(i)}finally{Yt(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=uy.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=rf(e);var i=e.queue,s=$m.bind(null,me,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:cf,useDeferredValue:function(e,i){var s=Bn();return uf(s,e,i)},useTransition:function(){var e=rf(!1);return e=jm.bind(null,me,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=me,u=Bn();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(Te&127)!==0||Em(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,Bm(Tm.bind(null,l,d,e),[e]),l.flags|=2048,cr(9,{destroy:void 0},bm.bind(null,l,d,s,i),null),s},useId:function(){var e=Bn(),i=qe.identifierPrefix;if(we){var s=Ii,l=Pi;s=(l&~(1<<32-Xt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Hl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=iy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=df.bind(null,me,!0,s),s.dispatch=i,[e,i]},useMemoCache:nf,useCacheRefresh:function(){return Bn().memoizedState=cy.bind(null,me)},useEffectEvent:function(e){var i=Bn(),s={impl:e};return i.memoizedState=s,function(){if((Ie&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},pf={readContext:Rn,use:Vl,useCallback:Wm,useContext:Rn,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:kl,useRef:Fm,useState:function(){return kl(ia)},useDebugValue:cf,useDeferredValue:function(e,i){var s=rn();return Ym(s,ke.memoizedState,e,i)},useTransition:function(){var e=kl(ia)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:hf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var s=rn();return Rm(s,ke,e,i)},useMemoCache:nf,useCacheRefresh:Jm};pf.useEffectEvent=Hm;var i0={readContext:Rn,use:Vl,useCallback:Wm,useContext:Rn,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:sf,useRef:Fm,useState:function(){return sf(ia)},useDebugValue:cf,useDeferredValue:function(e,i){var s=rn();return ke===null?uf(s,e,i):Ym(s,ke.memoizedState,e,i)},useTransition:function(){var e=sf(ia)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:hf,useFormState:zm,useActionState:zm,useOptimistic:function(e,i){var s=rn();return ke!==null?Rm(s,ke,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Jm};i0.useEffectEvent=Hm;function mf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var gf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ii(),u=Oa(l);u.payload=i,s!=null&&(u.callback=s),i=Pa(e,u,l),i!==null&&(Yn(i,e,l),go(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ii(),u=Oa(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Pa(e,u,l),i!==null&&(Yn(i,e,l),go(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ii(),l=Oa(s);l.tag=2,i!=null&&(l.callback=i),i=Pa(e,l,s),i!==null&&(Yn(i,e,s),go(i,e,s))}};function a0(e,i,s,l,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!oo(s,l)||!oo(u,d):!0}function s0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&gf.enqueueReplaceState(i,i.state,null)}function Es(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function r0(e){bl(e)}function o0(e){console.error(e)}function l0(e){bl(e)}function Yl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function c0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,i,s){return s=Oa(s),s.tag=3,s.payload={element:null},s.callback=function(){Yl(e,i)},s}function u0(e){return e=Oa(e),e.tag=3,e}function f0(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){c0(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){c0(i,s,l),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function fy(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&er(i,s,u,!0),s=$n.current,s!==null){switch(s.tag){case 31:case 13:return gi===null?sc():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Ol?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Vf(e,l,u)),!1;case 22:return s.flags|=65536,l===Ol?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Vf(e,l,u)),!1}throw Error(a(435,s.tag))}return Vf(e,l,u),sc(),!1}if(we)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==Pu&&(e=Error(a(422),{cause:l}),uo(hi(e,s)))):(l!==Pu&&(i=Error(a(423),{cause:l}),uo(hi(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=hi(l,s),u=vf(e.stateNode,l,u),qu(e,u),nn!==4&&(nn=2)),!1;var d=Error(a(520),{cause:l});if(d=hi(d,s),Do===null?Do=[d]:Do.push(d),nn!==4&&(nn=2),i===null)return!0;l=hi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=vf(s.stateNode,l,e),qu(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=u0(u),f0(u,e,s,l),qu(s,u),!1}s=s.return}while(s!==null);return!1}var _f=Error(a(461)),fn=!1;function Cn(e,i,s,l){i.child=e===null?mm(i,null,s,l):Ss(i,e.child,s,l)}function h0(e,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var A in l)A!=="ref"&&(y[A]=l[A])}else y=l;return vs(i),l=Ju(e,i,s,y,d,u),A=$u(),e!==null&&!fn?(tf(e,i,u),aa(e,i,u)):(we&&A&&Lu(i),i.flags|=1,Cn(e,i,l,u),i.child)}function d0(e,i,s,l,u){if(e===null){var d=s.type;return typeof d=="function"&&!Du(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,p0(e,i,d,l,u)):(e=Rl(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Af(e,u)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:oo,s(y,l)&&e.ref===i.ref)return aa(e,i,u)}return i.flags|=1,e=Ji(d,l),e.ref=i.ref,e.return=i,i.child=e}function p0(e,i,s,l,u){if(e!==null){var d=e.memoizedProps;if(oo(d,l)&&e.ref===i.ref)if(fn=!1,i.pendingProps=l=d,Af(e,u))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,aa(e,i,u)}return xf(e,i,s,l,u)}function m0(e,i,s,l){var u=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(l=i.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return g0(e,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(i,d!==null?d.cachePool:null),d!==null?_m(i,d):ju(),xm(i);else return l=i.lanes=536870912,g0(e,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Nl(i,d.cachePool),_m(i,d),za(),i.memoizedState=null):(e!==null&&Nl(i,null),ju(),za());return Cn(e,i,u,s),i.child}function Eo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function g0(e,i,s,l,u){var d=Vu();return d=d===null?null:{parent:cn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&Nl(i,null),ju(),xm(i),e!==null&&er(e,i,l,!0),i.childLanes=u,null}function jl(e,i){return i=Ql({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function v0(e,i,s){return Ss(i,e.child,null,s),e=jl(i,i.pendingProps),e.flags|=2,ti(i),i.memoizedState=null,e}function hy(e,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=jl(i,l),i.lanes=536870912,Eo(null,e);if(Qu(i),(e=je)?(e=Cg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=tm(e),s.return=i,i.child=s,wn=i,je=null)):e=null,e===null)throw Ua(i);return i.lanes=536870912,null}return jl(i,l)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Qu(i),u)if(i.flags&256)i.flags&=-257,i=v0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(fn||er(e,i,s,!1),u=(s&e.childLanes)!==0,fn||u){if(l=qe,l!==null&&(y=Hs(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,ds(e,y),Yn(l,e,y),_f;sc(),i=v0(e,i,s)}else e=d.treeContext,je=vi(y.nextSibling),wn=i,we=!0,Da=null,mi=!1,e!==null&&im(i,e),i=jl(i,l),i.flags|=4096;return i}return e=Ji(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Zl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function xf(e,i,s,l,u){return vs(i),s=Ju(e,i,s,l,void 0,u),l=$u(),e!==null&&!fn?(tf(e,i,u),aa(e,i,u)):(we&&l&&Lu(i),i.flags|=1,Cn(e,i,s,u),i.child)}function _0(e,i,s,l,u,d){return vs(i),i.updateQueue=null,s=Sm(i,l,s,u),ym(e),l=$u(),e!==null&&!fn?(tf(e,i,d),aa(e,i,d)):(we&&l&&Lu(i),i.flags|=1,Cn(e,i,s,d),i.child)}function x0(e,i,s,l,u){if(vs(i),i.stateNode===null){var d=Ks,y=s.contextType;typeof y=="object"&&y!==null&&(d=Rn(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xu(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?Rn(y):Ks,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(mf(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&gf.enqueueReplaceState(d,d.state,null),_o(i,l,d,u),vo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,G=Es(s,A);d.props=G;var et=d.context,dt=s.contextType;y=Ks,typeof dt=="object"&&dt!==null&&(y=Rn(dt));var vt=s.getDerivedStateFromProps;dt=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||et!==y)&&s0(i,d,l,y),La=!1;var st=i.memoizedState;d.state=st,_o(i,l,d,u),vo(),et=i.memoizedState,A||st!==et||La?(typeof vt=="function"&&(mf(i,s,vt,l),et=i.memoizedState),(G=La||a0(i,s,G,l,st,et,y))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),d.props=l,d.state=et,d.context=y,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wu(e,i),y=i.memoizedProps,dt=Es(s,y),d.props=dt,vt=i.pendingProps,st=d.context,et=s.contextType,G=Ks,typeof et=="object"&&et!==null&&(G=Rn(et)),A=s.getDerivedStateFromProps,(et=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==vt||st!==G)&&s0(i,d,l,G),La=!1,st=i.memoizedState,d.state=st,_o(i,l,d,u),vo();var lt=i.memoizedState;y!==vt||st!==lt||La||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof A=="function"&&(mf(i,s,A,l),lt=i.memoizedState),(dt=La||a0(i,s,dt,l,st,lt,G)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,lt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,lt,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),d.props=l,d.state=lt,d.context=G,l=dt):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Zl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ss(i,e.child,null,u),i.child=Ss(i,null,s,u)):Cn(e,i,s,u),i.memoizedState=d.state,e=i.child):e=aa(e,i,u),e}function y0(e,i,s,l){return ms(),i.flags|=256,Cn(e,i,s,l),i.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:cm()}}function Mf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ni),e}function S0(e,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(u?Ia(i):za(),(e=je)?(e=Cg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=tm(e),s.return=i,i.child=s,wn=i,je=null)):e=null,e===null)throw Ua(i);return ah(e)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,u?(za(),u=i.mode,A=Ql({mode:"hidden",children:A},u),l=ps(l,u,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=Sf(s),l.childLanes=Mf(e,y,s),i.memoizedState=yf,Eo(null,l)):(Ia(i),Ef(i,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)i.flags&256?(Ia(i),i.flags&=-257,i=bf(e,i,s)):i.memoizedState!==null?(za(),i.child=e.child,i.flags|=128,i=null):(za(),A=l.fallback,u=i.mode,l=Ql({mode:"visible",children:l.children},u),A=ps(A,u,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Ss(i,e.child,null,s),l=i.child,l.memoizedState=Sf(s),l.childLanes=Mf(e,y,s),i.memoizedState=yf,i=Eo(null,l));else if(Ia(i),ah(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var et=y.dgst;y=et,l=Error(a(419)),l.stack="",l.digest=y,uo({value:l,source:null,stack:null}),i=bf(e,i,s)}else if(fn||er(e,i,s,!1),y=(s&e.childLanes)!==0,fn||y){if(y=qe,y!==null&&(l=Hs(y,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,ds(e,l),Yn(y,e,l),_f;ih(A)||sc(),i=bf(e,i,s)}else ih(A)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,je=vi(A.nextSibling),wn=i,we=!0,Da=null,mi=!1,e!==null&&im(i,e),i=Ef(i,l.children),i.flags|=4096);return i}return u?(za(),A=l.fallback,u=i.mode,G=e.child,et=G.sibling,l=Ji(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,et!==null?A=Ji(et,A):(A=ps(A,u,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,Eo(null,l),l=i.child,A=e.child.memoizedState,A===null?A=Sf(s):(u=A.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=cm(),A={baseLanes:A.baseLanes|s,cachePool:u}),l.memoizedState=A,l.childLanes=Mf(e,y,s),i.memoizedState=yf,Eo(e.child,l)):(Ia(i),s=e.child,e=s.sibling,s=Ji(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function Ef(e,i){return i=Ql({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ql(e,i){return e=Jn(22,e,null,i),e.lanes=0,e}function bf(e,i,s){return Ss(i,e.child,null,s),e=Ef(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function M0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Fu(e.return,i,s)}function Tf(e,i,s,l,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=u,y.treeForkCount=d)}function E0(e,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var y=sn.current,A=(y&2)!==0;if(A?(y=y&1|2,i.flags|=128):y&=1,pt(sn,y),Cn(e,i,l,s),l=we?co:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,s,i);else if(e.tag===19)M0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Fl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Tf(i,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Fl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Tf(i,!0,s,null,d,l);break;case"together":Tf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function aa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ha|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(er(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ji(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ji(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Af(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function dy(e,i,s){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Na(i,cn,e.memoizedState.cache),ms();break;case 27:case 5:kt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Na(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Qu(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ia(i),i.flags|=128,null):(s&i.child.childLanes)!==0?S0(e,i,s):(Ia(i),e=aa(e,i,s),e!==null?e.sibling:null);Ia(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(er(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return E0(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(sn,sn.current),l)break;return null;case 22:return i.lanes=0,m0(e,i,s,i.pendingProps);case 24:Na(i,cn,e.memoizedState.cache)}return aa(e,i,s)}function b0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!Af(e,s)&&(i.flags&128)===0)return fn=!1,dy(e,i,s);fn=(e.flags&131072)!==0}else fn=!1,we&&(i.flags&1048576)!==0&&nm(i,co,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=xs(i.elementType),i.type=e,typeof e=="function")Du(e)?(l=Es(e,l),i.tag=1,i=x0(null,i,e,l,s)):(i.tag=0,i=xf(null,i,e,l,s));else{if(e!=null){var u=e.$$typeof;if(u===D){i.tag=11,i=h0(null,i,e,l,s);break t}else if(u===z){i.tag=14,i=d0(null,i,e,l,s);break t}}throw i=ct(e)||e,Error(a(306,i,""))}}return i;case 0:return xf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Es(l,i.pendingProps),x0(e,i,l,u,s);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Wu(e,i),_o(i,l,null,s);var y=i.memoizedState;if(l=y.cache,Na(i,cn,l),l!==d.cache&&Bu(i,[cn],s,!0),vo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=y0(e,i,l,s);break t}else if(l!==u){u=hi(Error(a(424)),i),uo(u),i=y0(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=vi(e.firstChild),wn=i,we=!0,Da=null,mi=!0,s=mm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),l===u){i=aa(e,i,s);break t}Cn(e,i,l,s)}i=i.child}return i;case 26:return Zl(e,i),e===null?(s=Pg(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,e=i.pendingProps,l=hc(it.current).createElement(s),l[ln]=i,l[Sn]=e,Dn(l,s,e),w(l),i.stateNode=l):i.memoizedState=Pg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return kt(i),e===null&&we&&(l=i.stateNode=Ng(i.type,i.pendingProps,it.current),wn=i,mi=!0,u=je,Wa(i.type)?(sh=u,je=vi(l.firstChild)):je=u),Cn(e,i,i.pendingProps.children,s),Zl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((u=l=je)&&(l=ky(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,wn=i,je=vi(l.firstChild),mi=!1,u=!0):u=!1),u||Ua(i)),kt(i),u=i.type,d=i.pendingProps,y=e!==null?e.memoizedProps:null,l=d.children,th(u,d)?l=null:y!==null&&th(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=Ju(e,i,ay,null,null,s),Fo._currentValue=u),Zl(e,i),Cn(e,i,l,s),i.child;case 6:return e===null&&we&&((e=s=je)&&(s=Xy(s,i.pendingProps,mi),s!==null?(i.stateNode=s,wn=i,je=null,e=!0):e=!1),e||Ua(i)),null;case 13:return S0(e,i,s);case 4:return Dt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ss(i,null,l,s):Cn(e,i,l,s),i.child;case 11:return h0(e,i,i.type,i.pendingProps,s);case 7:return Cn(e,i,i.pendingProps,s),i.child;case 8:return Cn(e,i,i.pendingProps.children,s),i.child;case 12:return Cn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Na(i,i.type,l.value),Cn(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,vs(i),u=Rn(u),l=l(u),i.flags|=1,Cn(e,i,l,s),i.child;case 14:return d0(e,i,i.type,i.pendingProps,s);case 15:return p0(e,i,i.type,i.pendingProps,s);case 19:return E0(e,i,s);case 31:return hy(e,i,s);case 22:return m0(e,i,s,i.pendingProps);case 24:return vs(i),l=Rn(cn),e===null?(u=Vu(),u===null&&(u=qe,d=Hu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},Xu(i),Na(i,cn,u)):((e.lanes&s)!==0&&(Wu(e,i),_o(i,null,null,s),vo()),u=e.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Na(i,cn,l)):(l=d.cache,Na(i,cn,l),l!==u.cache&&Bu(i,[cn],s,!0))),Cn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function sa(e){e.flags|=4}function wf(e,i,s,l,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(K0())e.flags|=8192;else throw ys=Ol,ku}else e.flags&=-16777217}function T0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(i))if(K0())e.flags|=8192;else throw ys=Ol,ku}function Kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Fe():536870912,e.lanes|=i,dr|=i)}function bo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function py(e,i,s){var l=i.pendingProps;switch(Ou(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ea(cn),Gt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(tr(i)?sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Iu())),Ze(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(sa(i),d!==null?(Ze(i),T0(i,d)):(Ze(i),wf(i,u,null,l,s))):d?d!==e.memoizedState?(sa(i),Ze(i),T0(i,d)):(Ze(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&sa(i),Ze(i),wf(i,u,e,l,s)),null;case 27:if(ge(i),s=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}e=wt.current,tr(i)?am(i):(e=Ng(u,l,s),i.stateNode=e,sa(i))}return Ze(i),null;case 5:if(ge(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}if(d=wt.current,tr(i))am(i);else{var y=hc(it.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(u,{is:l.is}):y.createElement(u)}}d[ln]=i,d[Sn]=l;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;t:switch(Dn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&sa(i)}}return Ze(i),wf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&sa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,tr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=wn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[ln]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Sg(e.nodeValue,s)),e||Ua(i,!0)}else e=hc(e).createTextNode(l),e[ln]=i,i.stateNode=e}return Ze(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=tr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ln]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),e=!1}else s=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ti(i),i):(ti(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ze(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ln]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),u=!1}else u=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ti(i),i):(ti(i),null)}return ti(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Kl(i,i.updateQueue),Ze(i),null);case 4:return Gt(),e===null&&Zf(i.stateNode.containerInfo),Ze(i),null;case 10:return ea(i.type),Ze(i),null;case 19:if(tt(sn),l=i.memoizedState,l===null)return Ze(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)bo(l,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Fl(e),d!==null){for(i.flags|=128,bo(l,!1),e=d.updateQueue,i.updateQueue=e,Kl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)$p(s,e),s=s.sibling;return pt(sn,sn.current&1|2),we&&$i(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&E()>nc&&(i.flags|=128,u=!0,bo(l,!1),i.lanes=4194304)}else{if(!u)if(e=Fl(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Kl(i,e),bo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!we)return Ze(i),null}else 2*E()-l.renderingStartTime>nc&&s!==536870912&&(i.flags|=128,u=!0,bo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=E(),e.sibling=null,s=sn.current,pt(sn,u?s&1|2:s&1),we&&$i(i,l.treeForkCount),e):(Ze(i),null);case 22:case 23:return ti(i),Zu(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),s=i.updateQueue,s!==null&&Kl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&tt(_s),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ea(cn),Ze(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function my(e,i){switch(Ou(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ea(cn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ge(i),null;case 31:if(i.memoizedState!==null){if(ti(i),i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ti(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return tt(sn),null;case 4:return Gt(),null;case 10:return ea(i.type),null;case 22:case 23:return ti(i),Zu(),e!==null&&tt(_s),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function A0(e,i){switch(Ou(i),i.tag){case 3:ea(cn),Gt();break;case 26:case 27:case 5:ge(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&ti(i);break;case 13:ti(i);break;case 19:tt(sn);break;case 10:ea(i.type);break;case 22:case 23:ti(i),Zu(),e!==null&&tt(_s);break;case 24:ea(cn)}}function To(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==u)}}catch(A){Ge(i,i.return,A)}}function Fa(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var y=l.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=i;var G=s,et=A;try{et()}catch(dt){Ge(u,G,dt)}}}l=l.next}while(l!==d)}}catch(dt){Ge(i,i.return,dt)}}function w0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{vm(i,s)}catch(l){Ge(e,e.return,l)}}}function R0(e,i,s){s.props=Es(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ge(e,i,l)}}function Ao(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){Ge(e,i,u)}}function zi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ge(e,i,u)}else s.current=null}function C0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Ge(e,e.return,u)}}function Rf(e,i,s){try{var l=e.stateNode;zy(l,e.type,s,i),l[Sn]=i}catch(u){Ge(e,e.return,u)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Qi));else if(l!==4&&(l===27&&Wa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Df(e,i,s),e=e.sibling;e!==null;)Df(e,i,s),e=e.sibling}function Jl(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Wa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Jl(e,i,s),e=e.sibling;e!==null;)Jl(e,i,s),e=e.sibling}function U0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Dn(i,l,s),i[ln]=e,i[Sn]=s}catch(d){Ge(e,e.return,d)}}var ra=!1,hn=!1,Uf=!1,N0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function gy(e,i){if(e=e.containerInfo,Jf=xc,e=Xp(e),Eu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var y=0,A=-1,G=-1,et=0,dt=0,vt=e,st=null;e:for(;;){for(var lt;vt!==s||u!==0&&vt.nodeType!==3||(A=y+u),vt!==d||l!==0&&vt.nodeType!==3||(G=y+l),vt.nodeType===3&&(y+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)st=vt,vt=lt;for(;;){if(vt===e)break e;if(st===s&&++et===u&&(A=y),st===d&&++dt===l&&(G=y),(lt=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=lt}s=A===-1||G===-1?null:{start:A,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for($f={focusedElem:e,selectionRange:s},xc=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Qt=Es(s.type,u);e=l.getSnapshotBeforeUpdate(Qt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ge(s,s.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)nh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function L0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:la(e,s),l&4&&To(5,s);break;case 1:if(la(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Ge(s,s.return,y)}else{var u=Es(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(s,s.return,y)}}l&64&&w0(s),l&512&&Ao(s,s.return);break;case 3:if(la(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{vm(e,i)}catch(y){Ge(s,s.return,y)}}break;case 27:i===null&&l&4&&U0(s);case 26:case 5:la(e,s),i===null&&l&4&&C0(s),l&512&&Ao(s,s.return);break;case 12:la(e,s);break;case 31:la(e,s),l&4&&I0(e,s);break;case 13:la(e,s),l&4&&z0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Ty.bind(null,s),Wy(e,s))));break;case 22:if(l=s.memoizedState!==null||ra,!l){i=i!==null&&i.memoizedState!==null||hn,u=ra;var d=hn;ra=l,(hn=i)&&!d?ca(e,s,(s.subtreeFlags&8772)!==0):la(e,s),ra=u,hn=d}break;case 30:break;default:la(e,s)}}function O0(e){var i=e.alternate;i!==null&&(e.alternate=null,O0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&$r(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,kn=!1;function oa(e,i,s){for(s=s.child;s!==null;)P0(e,i,s),s=s.sibling}function P0(e,i,s){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Tt,s)}catch{}switch(s.tag){case 26:hn||zi(s,i),oa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:hn||zi(s,i);var l=Ke,u=kn;Wa(s.type)&&(Ke=s.stateNode,kn=!1),oa(e,i,s),Po(s.stateNode),Ke=l,kn=u;break;case 5:hn||zi(s,i);case 6:if(l=Ke,u=kn,Ke=null,oa(e,i,s),Ke=l,kn=u,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(d){Ge(s,i,d)}else try{Ke.removeChild(s.stateNode)}catch(d){Ge(s,i,d)}break;case 18:Ke!==null&&(kn?(e=Ke,wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Sr(e)):wg(Ke,s.stateNode));break;case 4:l=Ke,u=kn,Ke=s.stateNode.containerInfo,kn=!0,oa(e,i,s),Ke=l,kn=u;break;case 0:case 11:case 14:case 15:Fa(2,s,i),hn||Fa(4,s,i),oa(e,i,s);break;case 1:hn||(zi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&R0(s,i,l)),oa(e,i,s);break;case 21:oa(e,i,s);break;case 22:hn=(l=hn)||s.memoizedState!==null,oa(e,i,s),hn=l;break;default:oa(e,i,s)}}function I0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sr(e)}catch(s){Ge(i,i.return,s)}}}function z0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(s){Ge(i,i.return,s)}}function vy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new N0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new N0),i;default:throw Error(a(435,e.tag))}}function $l(e,i){var s=vy(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=Ay.bind(null,e,l);l.then(u,u)}})}function Xn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=e,y=i,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Ke=A.stateNode,kn=!1;break t}break;case 5:Ke=A.stateNode,kn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Ke===null)throw Error(a(160));P0(d,y,u),Ke=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)F0(i,e),i=i.sibling}var Ti=null;function F0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(i,e),Wn(e),l&4&&(Fa(3,e,e.return),To(3,e),Fa(5,e,e.return));break;case 1:Xn(i,e),Wn(e),l&512&&(hn||s===null||zi(s,s.return)),l&64&&ra&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Ti;if(Xn(i,e),Wn(e),l&512&&(hn||s===null||zi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ls]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,l,s),d[ln]=e,w(d),l=d;break t;case"link":var y=Fg("link","href",u).get(l+(s.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(A,1);break e}}d=u.createElement(l),Dn(d,l,s),u.head.appendChild(d);break;case"meta":if(y=Fg("meta","content",u).get(l+(s.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(A,1);break e}}d=u.createElement(l),Dn(d,l,s),u.head.appendChild(d);break;default:throw Error(a(468,l))}d[ln]=e,w(d),l=d}e.stateNode=l}else Bg(u,e.type,e.stateNode);else e.stateNode=zg(u,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Bg(u,e.type,e.stateNode):zg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Xn(i,e),Wn(e),l&512&&(hn||s===null||zi(s,s.return)),s!==null&&l&4&&Rf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Xn(i,e),Wn(e),l&512&&(hn||s===null||zi(s,s.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Qt){Ge(e,e.return,Qt)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Rf(e,u,s!==null?s.memoizedProps:u)),l&1024&&(Uf=!0);break;case 6:if(Xn(i,e),Wn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(mc=null,u=Ti,Ti=dc(i.containerInfo),Xn(i,e),Ti=u,Wn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Sr(i.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}Uf&&(Uf=!1,B0(e));break;case 4:l=Ti,Ti=dc(e.stateNode.containerInfo),Xn(i,e),Wn(e),Ti=l;break;case 12:Xn(i,e),Wn(e);break;case 31:Xn(i,e),Wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$l(e,l)));break;case 13:Xn(i,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ec=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$l(e,l)));break;case 22:u=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,et=ra,dt=hn;if(ra=et||u,hn=dt||G,Xn(i,e),hn=dt,ra=et,Wn(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||ra||hn||bs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=G.stateNode;var vt=G.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Qt){Ge(G,G.return,Qt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qt){Ge(G,G.return,Qt)}}}else if(i.tag===18){if(s===null){G=i;try{var lt=G.stateNode;u?Rg(lt,!0):Rg(G.stateNode,!1)}catch(Qt){Ge(G,G.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,$l(e,s))));break;case 19:Xn(i,e),Wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$l(e,l)));break;case 30:break;case 21:break;default:Xn(i,e),Wn(e)}}function Wn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(D0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=Cf(e);Jl(e,d,u);break;case 5:var y=s.stateNode;s.flags&32&&(pn(y,""),s.flags&=-33);var A=Cf(e);Jl(e,A,y);break;case 3:case 4:var G=s.stateNode.containerInfo,et=Cf(e);Df(e,et,G);break;default:throw Error(a(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;B0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function la(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)L0(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Fa(4,i,i.return),bs(i);break;case 1:zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&R0(i,i.return,s),bs(i);break;case 27:Po(i.stateNode);case 26:case 5:zi(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function ca(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:ca(u,d,s),To(4,d);break;case 1:if(ca(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(l,l.return,et)}if(l=d,u=l.updateQueue,u!==null){var A=l.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)gm(G[u],A)}catch(et){Ge(l,l.return,et)}}s&&y&64&&w0(d),Ao(d,d.return);break;case 27:U0(d);case 26:case 5:ca(u,d,s),s&&l===null&&y&4&&C0(d),Ao(d,d.return);break;case 12:ca(u,d,s);break;case 31:ca(u,d,s),s&&y&4&&I0(u,d);break;case 13:ca(u,d,s),s&&y&4&&z0(u,d);break;case 22:d.memoizedState===null&&ca(u,d,s),Ao(d,d.return);break;case 30:break;default:ca(u,d,s)}i=i.sibling}}function Nf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&fo(s))}function Lf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fo(e))}function Ai(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)H0(e,i,s,l),i=i.sibling}function H0(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(e,i,s,l),u&2048&&To(9,i);break;case 1:Ai(e,i,s,l);break;case 3:Ai(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ai(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(i,i.return,G)}}else Ai(e,i,s,l);break;case 31:Ai(e,i,s,l);break;case 13:Ai(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Ai(e,i,s,l):wo(e,i):d._visibility&2?Ai(e,i,s,l):(d._visibility|=2,ur(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(y,i);break;case 24:Ai(e,i,s,l),u&2048&&Lf(i.alternate,i);break;default:Ai(e,i,s,l)}}function ur(e,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,y=i,A=s,G=l,et=y.flags;switch(y.tag){case 0:case 11:case 15:ur(d,y,A,G,u),To(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?ur(d,y,A,G,u):wo(d,y):(dt._visibility|=2,ur(d,y,A,G,u)),u&&et&2048&&Nf(y.alternate,y);break;case 24:ur(d,y,A,G,u),u&&et&2048&&Lf(y.alternate,y);break;default:ur(d,y,A,G,u)}i=i.sibling}}function wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:wo(s,l),u&2048&&Nf(l.alternate,l);break;case 24:wo(s,l),u&2048&&Lf(l.alternate,l);break;default:wo(s,l)}i=i.sibling}}var Ro=8192;function fr(e,i,s){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)G0(e,i,s),e=e.sibling}function G0(e,i,s){switch(e.tag){case 26:fr(e,i,s),e.flags&Ro&&e.memoizedState!==null&&iS(s,Ti,e.memoizedState,e.memoizedProps);break;case 5:fr(e,i,s);break;case 3:case 4:var l=Ti;Ti=dc(e.stateNode.containerInfo),fr(e,i,s),Ti=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ro,Ro=16777216,fr(e,i,s),Ro=l):fr(e,i,s));break;default:fr(e,i,s)}}function V0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Co(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];_n=l,X0(l,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,tc(e)):Co(e);break;default:Co(e)}}function tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];_n=l,X0(l,e)}V0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Fa(8,i,i.return),tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,tc(i));break;default:tc(i)}e=e.sibling}}function X0(e,i){for(;_n!==null;){var s=_n;switch(s.tag){case 0:case 11:case 15:Fa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,_n=l;else t:for(s=e;_n!==null;){l=_n;var u=l.sibling,d=l.return;if(O0(l),l===s){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var _y={getCacheForType:function(e){var i=Rn(cn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Rn(cn).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,Ie=0,qe=null,Se=null,Te=0,He=0,ei=null,Ba=!1,hr=!1,Of=!1,ua=0,nn=0,Ha=0,Ts=0,Pf=0,ni=0,dr=0,Do=null,qn=null,If=!1,ec=0,W0=0,nc=1/0,ic=null,Ga=null,mn=0,Va=null,pr=null,fa=0,zf=0,Ff=null,q0=null,Uo=0,Bf=null;function ii(){return(Ie&2)!==0&&Te!==0?Te&-Te:I.T!==null?Wf():Kr()}function Y0(){if(ni===0)if((Te&536870912)===0||we){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,i,s){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(mr(e,0),ka(e,Te,ni,!1)),On(e,s),((Ie&2)===0||e!==qe)&&(e===qe&&((Ie&2)===0&&(Ts|=s),nn===4&&ka(e,Te,ni,!1)),Fi(e))}function j0(e,i,s){if((Ie&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Nt(e,i),u=l?My(e,i):Gf(e,i,!0),d=l;do{if(u===0){hr&&!l&&ka(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!yy(s)){u=Gf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var A=e;u=Do;var G=A.current.memoizedState.isDehydrated;if(G&&(mr(A,y).flags|=256),y=Gf(A,y,!1),y!==2){if(Of&&!G){A.errorRecoveryDisabledLanes|=d,Ts|=d,u=4;break t}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){mr(e,0),ka(e,i,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ka(l,i,ni,!Ba);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=ec+300-E(),10<u)){if(ka(l,i,ni,!Ba),_t(l,0,!0)!==0)break t;fa=i,l.timeoutHandle=Tg(Z0.bind(null,l,s,qn,ic,If,i,ni,Ts,dr,Ba,d,"Throttled",-0,0),u);break t}Z0(l,s,qn,ic,If,i,ni,Ts,dr,Ba,d,null,-0,0)}}break}while(!0);Fi(e)}function Z0(e,i,s,l,u,d,y,A,G,et,dt,vt,st,lt){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},G0(i,d,vt);var Qt=(d&62914560)===d?ec-E():(d&4194048)===d?W0-E():0;if(Qt=aS(vt,Qt),Qt!==null){fa=d,e.cancelPendingCommit=Qt(ig.bind(null,e,i,d,s,l,u,y,A,G,dt,vt,null,st,lt)),ka(e,d,y,!et);return}}ig(e,i,d,s,l,u,y,A,G)}function yy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ka(e,i,s,l){i&=~Pf,i&=~Ts,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var d=31-Xt(u),y=1<<d;l[d]=-1,u&=~y}s!==0&&ml(e,s,i)}function ac(){return(Ie&6)===0?(No(0),!1):!0}function Hf(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,ta=gs=null,ef(e),sr=null,po=0,e=Se;for(;e!==null;)A0(e.alternate,e),e=e.return;Se=null}}function mr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Hy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),fa=0,Hf(),qe=e,Se=s=Ji(e.current,null),Te=i,He=0,ei=null,Ba=!1,hr=Nt(e,i),Of=!1,dr=ni=Pf=Ts=Ha=nn=0,qn=Do=null,If=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-Xt(l),d=1<<u;i|=e[u],l&=~d}return ua=i,Tl(),s}function Q0(e,i){me=null,I.H=Mo,i===ar||i===Ll?(i=hm(),He=3):i===ku?(i=hm(),He=4):He=i===_f?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,Se===null&&(nn=1,Yl(e,hi(i,e.current)))}function K0(){var e=$n.current;return e===null?!0:(Te&4194048)===Te?gi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===gi:!1}function J0(){var e=I.H;return I.H=Mo,e===null?Mo:e}function $0(){var e=I.A;return I.A=_y,e}function sc(){nn=4,Ba||(Te&4194048)!==Te&&$n.current!==null||(hr=!0),(Ha&134217727)===0&&(Ts&134217727)===0||qe===null||ka(qe,Te,ni,!1)}function Gf(e,i,s){var l=Ie;Ie|=2;var u=J0(),d=$0();(qe!==e||Te!==i)&&(ic=null,mr(e,i)),i=!1;var y=nn;t:do try{if(He!==0&&Se!==null){var A=Se,G=ei;switch(He){case 8:Hf(),y=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var et=He;if(He=0,ei=null,gr(e,A,G,et),s&&hr){y=0;break t}break;default:et=He,He=0,ei=null,gr(e,A,G,et)}}Sy(),y=nn;break}catch(dt){Q0(e,dt)}while(!0);return i&&e.shellSuspendCounter++,ta=gs=null,Ie=l,I.H=u,I.A=d,Se===null&&(qe=null,Te=0,Tl()),y}function Sy(){for(;Se!==null;)tg(Se)}function My(e,i){var s=Ie;Ie|=2;var l=J0(),u=$0();qe!==e||Te!==i?(ic=null,nc=E()+500,mr(e,i)):hr=Nt(e,i);t:do try{if(He!==0&&Se!==null){i=Se;var d=ei;e:switch(He){case 1:He=0,ei=null,gr(e,i,d,1);break;case 2:case 9:if(um(d)){He=0,ei=null,eg(i);break}i=function(){He!==2&&He!==9||qe!==e||(He=7),Fi(e)},d.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:um(d)?(He=0,ei=null,eg(i)):(He=0,ei=null,gr(e,i,d,7));break;case 5:var y=null;switch(Se.tag){case 26:y=Se.memoizedState;case 5:case 27:var A=Se;if(y?Hg(y):A.stateNode.complete){He=0,ei=null;var G=A.sibling;if(G!==null)Se=G;else{var et=A.return;et!==null?(Se=et,rc(et)):Se=null}break e}}He=0,ei=null,gr(e,i,d,5);break;case 6:He=0,ei=null,gr(e,i,d,6);break;case 8:Hf(),nn=6;break t;default:throw Error(a(462))}}Ey();break}catch(dt){Q0(e,dt)}while(!0);return ta=gs=null,I.H=l,I.A=u,Ie=s,Se!==null?0:(qe=null,Te=0,Tl(),nn)}function Ey(){for(;Se!==null&&!Ut();)tg(Se)}function tg(e){var i=b0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,i===null?rc(e):Se=i}function eg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=_0(s,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=_0(s,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:ef(i);default:A0(s,i),i=Se=$p(i,ua),i=b0(s,i,ua)}e.memoizedProps=e.pendingProps,i===null?rc(e):Se=i}function gr(e,i,s,l){ta=gs=null,ef(i),sr=null,po=0;var u=i.return;try{if(fy(e,u,i,s,Te)){nn=1,Yl(e,hi(s,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;nn=1,Yl(e,hi(s,e.current)),Se=null;return}i.flags&32768?(we||l===1?e=!0:hr||(Te&536870912)!==0?e=!1:(Ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=$n.current,l!==null&&l.tag===13&&(l.flags|=16384))),ng(i,e)):rc(i)}function rc(e){var i=e;do{if((i.flags&32768)!==0){ng(i,Ba);return}e=i.return;var s=py(i.alternate,i,ua);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);nn===0&&(nn=5)}function ng(e,i){do{var s=my(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);nn=6,Se=null}function ig(e,i,s,l,u,d,y,A,G){e.cancelPendingCommit=null;do oc();while(mn!==0);if((Ie&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Ru,Si(e,s,d,y,A,G),e===qe&&(Se=qe=null,Te=0),pr=i,Va=e,fa=s,zf=d,Ff=u,q0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy(ft,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,u=V.p,V.p=2,y=Ie,Ie|=4;try{gy(e,i,s)}finally{Ie=y,V.p=u,I.T=l}}mn=1,ag(),sg(),rg()}}function ag(){if(mn===1){mn=0;var e=Va,i=pr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=V.p;V.p=2;var u=Ie;Ie|=4;try{F0(i,e);var d=$f,y=Xp(e.containerInfo),A=d.focusedElem,G=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(G!==null&&Eu(A)){var et=G.start,dt=G.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Qt=A.textContent.length,ce=Math.min(G.start,Qt),We=G.end===void 0?ce:Math.min(G.end,Qt);!lt.extend&&ce>We&&(y=We,We=ce,ce=y);var Z=Vp(A,ce),k=Vp(A,We);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=vt.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),ce>We?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(vt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}xc=!!Jf,$f=Jf=null}finally{Ie=u,V.p=l,I.T=s}}e.current=i,mn=2}}function sg(){if(mn===2){mn=0;var e=Va,i=pr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=V.p;V.p=2;var u=Ie;Ie|=4;try{L0(e,i.alternate,i)}finally{Ie=u,V.p=l,I.T=s}}mn=3}}function rg(){if(mn===4||mn===3){mn=0,N();var e=Va,i=pr,s=fa,l=q0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,pr=Va=null,og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Gs(s),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,u=V.p,V.p=2,I.T=null;try{for(var d=e.onRecoverableError,y=0;y<l.length;y++){var A=l[y];d(A.value,{componentStack:A.stack})}}finally{I.T=i,V.p=u}}(fa&3)!==0&&oc(),Fi(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===Bf?Uo++:(Uo=0,Bf=e):Uo=0,No(0)}}function og(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,fo(i)))}function oc(){return ag(),sg(),rg(),lg()}function lg(){if(mn!==5)return!1;var e=Va,i=zf;zf=0;var s=Gs(fa),l=I.T,u=V.p;try{V.p=32>s?32:s,I.T=null,s=Ff,Ff=null;var d=Va,y=fa;if(mn=0,pr=Va=null,fa=0,(Ie&6)!==0)throw Error(a(331));var A=Ie;if(Ie|=4,k0(d.current),H0(d,d.current,y,s),Ie=A,No(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Tt,d)}catch{}return!0}finally{V.p=u,I.T=l,og(e,i)}}function cg(e,i,s){i=hi(s,i),i=vf(e.stateNode,i,2),e=Pa(e,i,2),e!==null&&(On(e,2),Fi(e))}function Ge(e,i,s){if(e.tag===3)cg(e,e,s);else for(;i!==null;){if(i.tag===3){cg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ga===null||!Ga.has(l))){e=hi(s,e),s=u0(2),l=Pa(i,s,2),l!==null&&(f0(s,l,i,e),On(l,2),Fi(l));break}}i=i.return}}function Vf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new xy;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(Of=!0,u.add(s),e=by.bind(null,e,i,s),i.then(e,e))}function by(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Te&s)===s&&(nn===4||nn===3&&(Te&62914560)===Te&&300>E()-ec?(Ie&2)===0&&mr(e,0):Pf|=s,dr===Te&&(dr=0)),Fi(e)}function ug(e,i){i===0&&(i=Fe()),e=ds(e,i),e!==null&&(On(e,i),Fi(e))}function Ty(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),ug(e,s)}function Ay(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),ug(e,s)}function wy(e,i){return zt(e,i)}var lc=null,vr=null,kf=!1,cc=!1,Xf=!1,Xa=0;function Fi(e){e!==vr&&e.next===null&&(vr===null?lc=vr=e:vr=vr.next=e),cc=!0,kf||(kf=!0,Cy())}function No(e,i){if(!Xf&&cc){Xf=!0;do for(var s=!1,l=lc;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var y=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-Xt(42|e)+1)-1,d&=u&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,pg(l,d))}else d=Te,d=_t(l,l===qe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Nt(l,d)||(s=!0,pg(l,d));l=l.next}while(s);Xf=!1}}function Ry(){fg()}function fg(){cc=kf=!1;var e=0;Xa!==0&&By()&&(e=Xa);for(var i=E(),s=null,l=lc;l!==null;){var u=l.next,d=hg(l,i);d===0?(l.next=null,s===null?lc=u:s.next=u,u===null&&(vr=s)):(s=l,(e!==0||(d&3)!==0)&&(cc=!0)),l=u}mn!==0&&mn!==5||No(e),Xa!==0&&(Xa=0)}function hg(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Xt(d),A=1<<y,G=u[y];G===-1?((A&s)===0||(A&l)!==0)&&(u[y]=fe(A,i)):G<=i&&(e.expiredLanes|=A),d&=~A}if(i=qe,s=Te,s=_t(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ae(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Nt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ae(l),Gs(s)){case 2:case 8:s=yt;break;case 32:s=ft;break;case 268435456:s=Lt;break;default:s=ft}return l=dg.bind(null,e),s=zt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ae(l),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,i){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(oc()&&e.callbackNode!==s)return null;var l=Te;return l=_t(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(j0(e,l,i),hg(e,E()),e.callbackNode!=null&&e.callbackNode===s?dg.bind(null,e):null)}function pg(e,i){if(oc())return null;j0(e,i,!0)}function Cy(){Gy(function(){(Ie&6)!==0?zt(ut,Ry):fg()})}function Wf(){if(Xa===0){var e=nr;e===0&&(e=Ft,Ft<<=1,(Ft&261888)===0&&(Ft=256)),Xa=e}return Xa}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function gg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Dy(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=mg((u[Sn]||null).action),y=l.submitter;y&&(i=(i=y[Sn]||null)?mg(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var A=new Sl("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var G=y?gg(u,y):new FormData(u);ff(s,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=y?gg(u,y):new FormData(u),ff(s,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var qf=0;qf<wu.length;qf++){var Yf=wu[qf],Uy=Yf.toLowerCase(),Ny=Yf[0].toUpperCase()+Yf.slice(1);bi(Uy,"on"+Ny)}bi(Yp,"onAnimationEnd"),bi(jp,"onAnimationIteration"),bi(Zp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(jx,"onTransitionRun"),bi(Zx,"onTransitionStart"),bi(Qx,"onTransitionCancel"),bi(Qp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function vg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var A=l[y],G=A.instance,et=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(dt){bl(dt)}u.currentTarget=null,d=G}else for(y=0;y<l.length;y++){if(A=l[y],G=A.instance,et=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(dt){bl(dt)}u.currentTarget=null,d=G}}}}function Me(e,i){var s=i[Vs];s===void 0&&(s=i[Vs]=new Set);var l=e+"__bubble";s.has(l)||(_g(i,e,2,!1),s.add(l))}function jf(e,i,s){var l=0;i&&(l|=4),_g(s,e,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[uc]){e[uc]=!0,Y.forEach(function(s){s!=="selectionchange"&&(Ly.has(s)||jf(s,!1,e),jf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uc]||(i[uc]=!0,jf("selectionchange",!1,i))}}function _g(e,i,s,l){switch(Yg(i)){case 2:var u=oS;break;case 8:u=lS;break;default:u=uh}s=u.bind(null,i,s,e),u=void 0,!pu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Qf(e,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var A=l.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=l.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Ta(A),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){l=d=y;continue t}A=A.parentNode}}l=l.return}Ep(function(){var et=d,dt=hu(s),vt=[];t:{var st=Kp.get(e);if(st!==void 0){var lt=Sl,Qt=e;switch(e){case"keypress":if(xl(s)===0)break t;case"keydown":case"keyup":lt=Ax;break;case"focusin":Qt="focus",lt=_u;break;case"focusout":Qt="blur",lt=_u;break;case"beforeblur":case"afterblur":lt=_u;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Cx;break;case Yp:case jp:case Zp:lt=vx;break;case Qp:lt=Ux;break;case"scroll":case"scrollend":lt=hx;break;case"wheel":lt=Lx;break;case"copy":case"cut":case"paste":lt=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Rp;break;case"toggle":case"beforetoggle":lt=Px}var ce=(i&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),Z=ce?st!==null?st+"Capture":null:st;ce=[];for(var k=et,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Z===null||(mt=to(k,Z),mt!=null&&ce.push(Oo(k,mt,$))),We)break;k=k.return}0<ce.length&&(st=new lt(st,Qt,null,s,dt),vt.push({event:st,listeners:ce}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&s!==fu&&(Qt=s.relatedTarget||s.fromElement)&&(Ta(Qt)||Qt[Mi]))break t;if((lt||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Qt=s.relatedTarget||s.toElement,lt=et,Qt=Qt?Ta(Qt):null,Qt!==null&&(We=c(Qt),ce=Qt.tag,Qt!==We||ce!==5&&ce!==27&&ce!==6)&&(Qt=null)):(lt=null,Qt=et),lt!==Qt)){if(ce=Ap,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Rp,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),We=lt==null?st:cs(lt),$=Qt==null?st:cs(Qt),st=new ce(mt,k+"leave",lt,s,dt),st.target=We,st.relatedTarget=$,mt=null,Ta(dt)===et&&(ce=new ce(Z,k+"enter",Qt,s,dt),ce.target=$,ce.relatedTarget=We,mt=ce),We=mt,lt&&Qt)e:{for(ce=Oy,Z=lt,k=Qt,$=0,mt=Z;mt;mt=ce(mt))$++;mt=0;for(var se=k;se;se=ce(se))mt++;for(;0<$-mt;)Z=ce(Z),$--;for(;0<mt-$;)k=ce(k),mt--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){ce=Z;break e}Z=ce(Z),k=ce(k)}ce=null}else ce=null;lt!==null&&xg(vt,st,lt,ce,!1),Qt!==null&&We!==null&&xg(vt,We,Qt,ce,!0)}}t:{if(st=et?cs(et):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ne=Ip;else if(Op(st))if(zp)Ne=Wx;else{Ne=kx;var ee=Vx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&Ei(et.elementType)&&(Ne=Ip):Ne=Xx;if(Ne&&(Ne=Ne(e,et))){Pp(vt,Ne,s,dt);break t}ee&&ee(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&En(st,"number",st.value)}switch(ee=et?cs(et):window,e){case"focusin":(Op(ee)||ee.contentEditable==="true")&&(js=ee,bu=et,lo=null);break;case"focusout":lo=bu=js=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Wp(vt,s,dt);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Wp(vt,s,dt)}var _e;if(yu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Ys?Np(e,s)&&(Ae="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ae="onCompositionStart");Ae&&(Cp&&s.locale!=="ko"&&(Ys||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ys&&(_e=bp()):(Ra=dt,mu="value"in Ra?Ra.value:Ra.textContent,Ys=!0)),ee=fc(et,Ae),0<ee.length&&(Ae=new wp(Ae,e,null,s,dt),vt.push({event:Ae,listeners:ee}),_e?Ae.data=_e:(_e=Lp(s),_e!==null&&(Ae.data=_e)))),(_e=zx?Fx(e,s):Bx(e,s))&&(Ae=fc(et,"onBeforeInput"),0<Ae.length&&(ee=new wp("onBeforeInput","beforeinput",null,s,dt),vt.push({event:ee,listeners:Ae}),ee.data=_e)),Dy(vt,e,et,s,dt)}vg(vt,i)})}function Oo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function fc(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=to(e,s),u!=null&&l.unshift(Oo(e,u,d)),u=to(e,i),u!=null&&l.push(Oo(e,u,d))),e.tag===3)return l;e=e.return}return[]}function Oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,i,s,l,u){for(var d=i._reactName,y=[];s!==null&&s!==l;){var A=s,G=A.alternate,et=A.stateNode;if(A=A.tag,G!==null&&G===l)break;A!==5&&A!==26&&A!==27||et===null||(G=et,u?(et=to(s,d),et!=null&&y.unshift(Oo(s,et,G))):u||(et=to(s,d),et!=null&&y.push(Oo(s,et,G)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var Py=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Iy,"")}function Sg(e,i){return i=yg(i),yg(e)===i}function Xe(e,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||pn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&pn(e,""+l);break;case"className":re(e,"class",l);break;case"tabIndex":re(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,s,l);break;case"style":Xs(e,l,d);break;case"data":if(i!=="object"){re(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=vl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Xe(e,i,"name",u.name,u,null),Xe(e,i,"formEncType",u.formEncType,u,null),Xe(e,i,"formMethod",u.formMethod,u,null),Xe(e,i,"formTarget",u.formTarget,u,null)):(Xe(e,i,"encType",u.encType,u,null),Xe(e,i,"method",u.method,u,null),Xe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=vl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Qi);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=vl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),$t(e,"popover",l);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$t(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ux.get(s)||s,$t(e,s,l))}}function Kf(e,i,s,l,u,d){switch(s){case"style":Xs(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?pn(e,l):(typeof l=="number"||typeof l=="bigint")&&pn(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[Sn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):$t(e,s,l)}}}function Dn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xe(e,i,d,y,s,null)}}u&&Xe(e,i,"srcSet",s.srcSet,s,null),l&&Xe(e,i,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=d=y=u=null,G=null,et=null;for(l in s)if(s.hasOwnProperty(l)){var dt=s[l];if(dt!=null)switch(l){case"name":u=dt;break;case"type":y=dt;break;case"checked":G=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Xe(e,i,l,dt,s,null)}}Zi(e,d,A,G,et,y,u,!1);return;case"select":Me("invalid",e),l=y=d=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":l=A;default:Xe(e,i,u,A,s,null)}i=d,s=y,e.multiple=!!l,i!=null?ui(e,!!l,i,!1):s!=null&&ui(e,!!l,s,!0);return;case"textarea":Me("invalid",e),d=u=l=null;for(y in s)if(s.hasOwnProperty(y)&&(A=s[y],A!=null))switch(y){case"value":l=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Xe(e,i,y,A,s,null)}bn(e,l,u,d);return;case"option":for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!=null)&&(G==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Xe(e,i,G,l,s,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<Lo.length;l++)Me(Lo[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(l=s[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xe(e,i,et,l,s,null)}return;default:if(Ei(i)){for(dt in s)s.hasOwnProperty(dt)&&(l=s[dt],l!==void 0&&Kf(e,i,dt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Xe(e,i,A,l,s,null))}function zy(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,A=null,G=null,et=null,dt=null;for(lt in s){var vt=s[lt];if(s.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=vt;default:l.hasOwnProperty(lt)||Xe(e,i,lt,null,l,vt)}}for(var st in l){var lt=l[st];if(vt=s[st],l.hasOwnProperty(st)&&(lt!=null||vt!=null))switch(st){case"type":d=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":y=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==vt&&Xe(e,i,st,lt,l,vt)}}Mn(e,y,A,G,et,dt,d,u);return;case"select":lt=y=A=st=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":lt=G;default:l.hasOwnProperty(d)||Xe(e,i,d,null,l,G)}for(u in l)if(d=l[u],G=s[u],l.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":st=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==G&&Xe(e,i,u,d,l,G)}i=A,s=y,l=lt,st!=null?ui(e,!!s,st,!1):!!l!=!!s&&(i!=null?ui(e,!!s,i,!0):ui(e,!!s,s?[]:"",!1));return;case"textarea":lt=st=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,i,A,null,l,u)}for(y in l)if(u=l[y],d=s[y],l.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Xe(e,i,y,u,l,d)}Be(e,st,lt);return;case"option":for(var Qt in s)st=s[Qt],s.hasOwnProperty(Qt)&&st!=null&&!l.hasOwnProperty(Qt)&&(Qt==="selected"?e.selected=!1:Xe(e,i,Qt,null,l,st));for(G in l)st=l[G],lt=s[G],l.hasOwnProperty(G)&&st!==lt&&(st!=null||lt!=null)&&(G==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":Xe(e,i,G,st,l,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in s)st=s[ce],s.hasOwnProperty(ce)&&st!=null&&!l.hasOwnProperty(ce)&&Xe(e,i,ce,null,l,st);for(et in l)if(st=l[et],lt=s[et],l.hasOwnProperty(et)&&st!==lt&&(st!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:Xe(e,i,et,st,l,lt)}return;default:if(Ei(i)){for(var We in s)st=s[We],s.hasOwnProperty(We)&&st!==void 0&&!l.hasOwnProperty(We)&&Kf(e,i,We,void 0,l,st);for(dt in l)st=l[dt],lt=s[dt],!l.hasOwnProperty(dt)||st===lt||st===void 0&&lt===void 0||Kf(e,i,dt,st,l,lt);return}}for(var Z in s)st=s[Z],s.hasOwnProperty(Z)&&st!=null&&!l.hasOwnProperty(Z)&&Xe(e,i,Z,null,l,st);for(vt in l)st=l[vt],lt=s[vt],!l.hasOwnProperty(vt)||st===lt||st==null&&lt==null||Xe(e,i,vt,st,l,lt)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,y=u.initiatorType,A=u.duration;if(d&&A&&Mg(y)){for(y=0,A=u.responseEnd,l+=1;l<s.length;l++){var G=s[l],et=G.startTime;if(et>A)break;var dt=G.transferSize,vt=G.initiatorType;dt&&Mg(vt)&&(G=G.responseEnd,y+=dt*(G<A?1:(A-et)/(G-et)))}if(--l,i+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function th(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=null;function By(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(Vy)}:Tg;function Vy(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function wg(e,i){var s=i,l=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(u),Sr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Po(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Po(s);for(var d=s.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&Po(e.ownerDocument.body);s=u}while(s);Sr(i)}function Rg(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function nh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":nh(s),$r(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function ky(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ls])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function Xy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=vi(e.nextSibling),e===null))return null;return e}function Cg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=vi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wy(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var sh=null;function Dg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return vi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function Ng(e,i,s){switch(i=hc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Po(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);$r(e)}var _i=new Map,Lg=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=V.d;V.d={f:qy,r:Yy,D:jy,C:Zy,L:Qy,m:Ky,X:$y,S:Jy,M:tS};function qy(){var e=ha.f(),i=ac();return e||i}function Yy(e){var i=Aa(e);i!==null&&i.tag===5&&i.type==="form"?Qm(i):ha.r(e)}var _r=typeof document>"u"?null:document;function Og(e,i,s){var l=_r;if(l&&typeof i=="string"&&i){var u=he(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Dn(i,"link",e),w(i),l.head.appendChild(i)))}}function jy(e){ha.D(e),Og("dns-prefetch",e,null)}function Zy(e,i){ha.C(e,i),Og("preconnect",e,i)}function Qy(e,i,s){ha.L(e,i,s);var l=_r;if(l&&e&&i){var u='link[rel="preload"][as="'+he(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+he(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+he(s.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var d=u;switch(i){case"style":d=xr(e);break;case"script":d=yr(e)}_i.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),_i.set(d,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(Io(d))||i==="script"&&l.querySelector(zo(d))||(i=l.createElement("link"),Dn(i,"link",e),w(i),l.head.appendChild(i)))}}function Ky(e,i){ha.m(e,i);var s=_r;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+he(l)+'"][href="'+he(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=yr(e)}if(!_i.has(d)&&(e=g({rel:"modulepreload",href:e},i),_i.set(d,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(zo(d)))return}l=s.createElement("link"),Dn(l,"link",e),w(l),s.head.appendChild(l)}}}function Jy(e,i,s){ha.S(e,i,s);var l=_r;if(l&&e){var u=wa(l).hoistableStyles,d=xr(e);i=i||"default";var y=u.get(d);if(!y){var A={loading:0,preload:null};if(y=l.querySelector(Io(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=_i.get(d))&&rh(e,s);var G=y=l.createElement("link");w(G),Dn(G,"link",e),G._p=new Promise(function(et,dt){G.onload=et,G.onerror=dt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,pc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(d,y)}}}function $y(e,i){ha.X(e,i);var s=_r;if(s&&e){var l=wa(s).hoistableScripts,u=yr(e),d=l.get(u);d||(d=s.querySelector(zo(u)),d||(e=g({src:e,async:!0},i),(i=_i.get(u))&&oh(e,i),d=s.createElement("script"),w(d),Dn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function tS(e,i){ha.M(e,i);var s=_r;if(s&&e){var l=wa(s).hoistableScripts,u=yr(e),d=l.get(u);d||(d=s.querySelector(zo(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=_i.get(u))&&oh(e,i),d=s.createElement("script"),w(d),Dn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function Pg(e,i,s,l){var u=(u=it.current)?dc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=xr(s.href),s=wa(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=xr(s.href);var d=wa(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(Io(e)))&&!d._p&&(y.instance=d,y.state.loading=5),_i.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},_i.set(e,s),d||eS(u,e,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=yr(s),s=wa(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function xr(e){return'href="'+he(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function Ig(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),w(i),e.head.appendChild(i))}function yr(e){return'[src="'+he(e)+'"]'}function zo(e){return"script[async]"+e}function zg(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+he(s.href)+'"]');if(l)return i.instance=l,w(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),w(l),Dn(l,"style",u),pc(l,s.precedence,e),i.instance=l;case"stylesheet":u=xr(s.href);var d=e.querySelector(Io(u));if(d)return i.state.loading|=4,i.instance=d,w(d),d;l=Ig(s),(u=_i.get(u))&&rh(l,u),d=(e.ownerDocument||e).createElement("link"),w(d);var y=d;return y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),Dn(d,"link",l),i.state.loading|=4,pc(d,s.precedence,e),i.instance=d;case"script":return d=yr(s.src),(u=e.querySelector(zo(d)))?(i.instance=u,w(u),u):(l=s,(u=_i.get(d))&&(l=g({},s),oh(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),Dn(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pc(l,s.precedence,e));return i.instance}function pc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,y=0;y<l.length;y++){var A=l[y];if(A.dataset.precedence===i)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function rh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var mc=null;function Fg(e,i,s){if(mc===null){var l=new Map,u=mc=new Map;u.set(s,l)}else u=mc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[ls]||d[ln]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=e+y;var A=l.get(y);A?A.push(d):l.set(y,[d])}}return l}function Bg(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function nS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=xr(l.href),d=i.querySelector(Io(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=gc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,w(d);return}d=i.ownerDocument||i,l=Ig(l),(u=_i.get(u))&&rh(l,u),d=d.createElement("link"),w(d);var y=d;y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),Dn(d,"link",l),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=gc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var lh=0;function aS(e,i){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&lh===0&&(lh=62500*Fy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>lh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function _c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(sS,e),vc=null,gc.call(e))}function sS(e,i){if(!(i.state.loading&4)){var s=vc.get(e);if(s)var l=s.get(null);else{s=new Map,vc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}u=i.instance,y=u.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,u),s.set(y,u),this.count++,l=gc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Fo={$$typeof:U,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function rS(e,i,s,l,u,d,y,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Gg(e,i,s,l,u,d,y,A,G,et,dt,vt){return e=new rS(e,i,s,y,G,et,dt,vt,A),i=1,d===!0&&(i|=24),d=Jn(3,null,null,i),e.current=d,d.stateNode=e,i=Hu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Xu(d),e}function Vg(e){return e?(e=Ks,e):Ks}function kg(e,i,s,l,u,d){u=Vg(u),l.context===null?l.context=u:l.pendingContext=u,l=Oa(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Pa(e,l,i),s!==null&&(Yn(s,e,i),go(s,e,i))}function Xg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function ch(e,i){Xg(e,i),(e=e.alternate)&&Xg(e,i)}function Wg(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&Yn(i,e,67108864),ch(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var i=ii();i=Qr(i);var s=ds(e,i);s!==null&&Yn(s,e,i),ch(e,i)}}var xc=!0;function oS(e,i,s,l){var u=I.T;I.T=null;var d=V.p;try{V.p=2,uh(e,i,s,l)}finally{V.p=d,I.T=u}}function lS(e,i,s,l){var u=I.T;I.T=null;var d=V.p;try{V.p=8,uh(e,i,s,l)}finally{V.p=d,I.T=u}}function uh(e,i,s,l){if(xc){var u=fh(l);if(u===null)Qf(e,i,l,yc,s),jg(e,l);else if(uS(u,e,i,s,l))l.stopPropagation();else if(jg(e,l),i&4&&-1<cS.indexOf(e)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=At(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var G=1<<31-Xt(y);A.entanglements[1]|=G,y&=~G}Fi(d),(Ie&6)===0&&(nc=E()+500,No(0))}}break;case 31:case 13:A=ds(d,2),A!==null&&Yn(A,d,2),ac(),ch(d,2)}if(d=fh(l),d===null&&Qf(e,i,l,yc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else Qf(e,i,l,null,s)}}function fh(e){return e=hu(e),hh(e)}var yc=null;function hh(e){if(yc=null,e=Ta(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return yc=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ut:return 2;case yt:return 8;case ft:case Jt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var dh=!1,qa=null,Ya=null,ja=null,Bo=new Map,Ho=new Map,Za=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(e,i){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Bo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(i.pointerId)}}function Go(e,i,s,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Aa(i),i!==null&&Wg(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function uS(e,i,s,l,u){switch(i){case"focusin":return qa=Go(qa,e,i,s,l,u),!0;case"dragenter":return Ya=Go(Ya,e,i,s,l,u),!0;case"mouseover":return ja=Go(ja,e,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Go(Bo.get(d)||null,e,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,e,i,s,l,u)),!0}return!1}function Zg(e){var i=Ta(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Oi(e.priority,function(){qg(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,Oi(e.priority,function(){qg(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=fh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);fu=l,s.target.dispatchEvent(l),fu=null}else return i=Aa(s),i!==null&&Wg(i),e.blockedOn=s,!1;i.shift()}return!0}function Qg(e,i,s){Sc(e)&&s.delete(i)}function fS(){dh=!1,qa!==null&&Sc(qa)&&(qa=null),Ya!==null&&Sc(Ya)&&(Ya=null),ja!==null&&Sc(ja)&&(ja=null),Bo.forEach(Qg),Ho.forEach(Qg)}function Mc(e,i){e.blockedOn===i&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fS)))}var Ec=null;function Kg(e){Ec!==e&&(Ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(hh(l||s)===null)continue;break}var d=Aa(s);d!==null&&(e.splice(i,3),i-=3,ff(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Sr(e){function i(G){return Mc(G,e)}qa!==null&&Mc(qa,e),Ya!==null&&Mc(Ya,e),ja!==null&&Mc(ja,e),Bo.forEach(i),Ho.forEach(i);for(var s=0;s<Za.length;s++){var l=Za[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(s=Za[0],s.blockedOn===null);)Zg(s),s.blockedOn===null&&Za.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],y=u[Sn]||null;if(typeof d=="function")y||Kg(s);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Sn]||null)A=y.formAction;else if(hh(u)!==null)continue}else A=y.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Kg(s)}}}function Jg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}bc.prototype.render=ph.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ii();kg(s,l,e,i,null,null)},bc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;kg(e.current,2,null,e,null,null),ac(),i[Mi]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Kr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Za.length&&i!==0&&i<Za[s].priority;s++);Za.splice(s,0,e),s===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.4")throw Error(a(527,$g,"19.2.4"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Tt=Tc.inject(hS),Rt=Tc}catch{}}return ko.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",u=r0,d=o0,y=l0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Gg(e,1,!1,null,null,s,l,null,u,d,y,Jg),e[Mi]=i.current,Zf(e),new ph(i)},ko.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,u="",d=r0,y=o0,A=l0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=Gg(e,1,!0,i,s??null,l,u,G,d,y,A,Jg),i.context=Vg(null),s=i.current,l=ii(),l=Qr(l),u=Oa(l),u.callback=null,Pa(s,u,l),s=l,i.current.lanes=s,On(i,s),Fi(i),e[Mi]=i.current,Zf(e),new bc(i)},ko.version="19.2.4",ko}var cv;function ES(){if(cv)return vh.exports;cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=MS(),vh.exports}var bS=ES(),Sh,uv;function TS(){if(uv)return Sh;uv=1;var r={linear:function(t,n,a,o){var c=a-n;return c*t/o+n},easeInQuad:function(t,n,a,o){var c=a-n;return c*(t/=o)*t+n},easeOutQuad:function(t,n,a,o){var c=a-n;return-c*(t/=o)*(t-2)+n},easeInOutQuad:function(t,n,a,o){var c=a-n;return(t/=o/2)<1?c/2*t*t+n:-c/2*(--t*(t-2)-1)+n},easeInCubic:function(t,n,a,o){var c=a-n;return c*(t/=o)*t*t+n},easeOutCubic:function(t,n,a,o){var c=a-n;return c*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(t,n,a,o){var c=a-n;return(t/=o/2)<1?c/2*t*t*t+n:c/2*((t-=2)*t*t+2)+n},easeInQuart:function(t,n,a,o){var c=a-n;return c*(t/=o)*t*t*t+n},easeOutQuart:function(t,n,a,o){var c=a-n;return-c*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(t,n,a,o){var c=a-n;return(t/=o/2)<1?c/2*t*t*t*t+n:-c/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(t,n,a,o){var c=a-n;return c*(t/=o)*t*t*t*t+n},easeOutQuint:function(t,n,a,o){var c=a-n;return c*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(t,n,a,o){var c=a-n;return(t/=o/2)<1?c/2*t*t*t*t*t+n:c/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(t,n,a,o){var c=a-n;return-c*Math.cos(t/o*(Math.PI/2))+c+n},easeOutSine:function(t,n,a,o){var c=a-n;return c*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(t,n,a,o){var c=a-n;return-c/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(t,n,a,o){var c=a-n;return t==0?n:c*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(t,n,a,o){var c=a-n;return t==o?n+c:c*(-Math.pow(2,-10*t/o)+1)+n},easeInOutExpo:function(t,n,a,o){var c=a-n;return t===0?n:t===o?n+c:(t/=o/2)<1?c/2*Math.pow(2,10*(t-1))+n:c/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(t,n,a,o){var c=a-n;return-c*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(t,n,a,o){var c=a-n;return c*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(t,n,a,o){var c=a-n;return(t/=o/2)<1?-c/2*(Math.sqrt(1-t*t)-1)+n:c/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(t,n,a,o){var c=a-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=o)===1?n+c:(h||(h=o*.3),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),-(f*Math.pow(2,10*(t-=1))*Math.sin((t*o-m)*(2*Math.PI)/h))+n)},easeOutElastic:function(t,n,a,o){var c=a-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=o)===1?n+c:(h||(h=o*.3),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),f*Math.pow(2,-10*t)*Math.sin((t*o-m)*(2*Math.PI)/h)+c+n)},easeInOutElastic:function(t,n,a,o){var c=a-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=o/2)===2?n+c:(h||(h=o*(.3*1.5)),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),t<1?-.5*(f*Math.pow(2,10*(t-=1))*Math.sin((t*o-m)*(2*Math.PI)/h))+n:f*Math.pow(2,-10*(t-=1))*Math.sin((t*o-m)*(2*Math.PI)/h)*.5+c+n)},easeInBack:function(t,n,a,o,c){var f=a-n;return c===void 0&&(c=1.70158),f*(t/=o)*t*((c+1)*t-c)+n},easeOutBack:function(t,n,a,o,c){var f=a-n;return c===void 0&&(c=1.70158),f*((t=t/o-1)*t*((c+1)*t+c)+1)+n},easeInOutBack:function(t,n,a,o,c){var f=a-n;return c===void 0&&(c=1.70158),(t/=o/2)<1?f/2*(t*t*(((c*=1.525)+1)*t-c))+n:f/2*((t-=2)*t*(((c*=1.525)+1)*t+c)+2)+n},easeInBounce:function(t,n,a,o){var c=a-n,f;return f=r.easeOutBounce(o-t,0,c,o),c-f+n},easeOutBounce:function(t,n,a,o){var c=a-n;return(t/=o)<1/2.75?c*(7.5625*t*t)+n:t<2/2.75?c*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?c*(7.5625*(t-=2.25/2.75)*t+.9375)+n:c*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,a,o){var c=a-n,f;return t<o/2?(f=r.easeInBounce(t*2,0,c,o),f*.5+n):(f=r.easeOutBounce(t*2-o,0,c,o),f*.5+c*.5+n)}};return Sh=r,Sh}var AS=TS();function wS(r){return r*Math.PI/180}function ri(r,t){return r+Math.random()*(t-r)}function RS(r,t){return Math.floor(r+Math.random()*(t-r+1))}var el;(function(r){r[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip"})(el||(el={}));var is;(function(r){r[r.Positive=1]="Positive",r[r.Negative=-1]="Negative"})(is||(is={}));const CS=1e3/60;class DS{constructor(t,n,a,o){this.getOptions=n;const{colors:c,initialVelocityX:f,initialVelocityY:h}=this.getOptions();this.context=t,this.x=a,this.y=o,this.w=ri(5,20),this.h=ri(5,20),this.radius=ri(5,10),this.vx=typeof f=="number"?ri(-f,f):ri(f.min,f.max),this.vy=typeof h=="number"?ri(-h,0):ri(h.min,h.max),this.shape=RS(0,2),this.angle=wS(ri(0,360)),this.angularSpin=ri(-.2,.2),this.color=c[Math.floor(Math.random()*c.length)],this.rotateY=ri(0,1),this.rotationDirection=ri(0,1)?is.Positive:is.Negative}update(t){const{gravity:n,wind:a,friction:o,opacity:c,drawShape:f}=this.getOptions(),h=t/CS;this.x+=this.vx*h,this.y+=this.vy*h,this.vy+=n*h,this.vx+=a*h,this.vx*=o**h,this.vy*=o**h,this.rotateY>=1&&this.rotationDirection===is.Positive?this.rotationDirection=is.Negative:this.rotateY<=-1&&this.rotationDirection===is.Negative&&(this.rotationDirection=is.Positive);const m=.1*this.rotationDirection*h;if(this.rotateY+=m,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=c,this.context.lineCap="round",this.context.lineWidth=2,f&&typeof f=="function")f.call(this,this.context);else switch(this.shape){case el.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case el.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case el.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class US{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=o=>{this.particles.splice(o,1)},this.getParticle=()=>{const o=ri(this.x,this.w+this.x),c=ri(this.y,this.h+this.y);return new DS(this.context,this.getOptions,o,c)},this.animate=o=>{const{canvas:c,context:f,particlesGenerated:h,lastNumberOfPieces:m}=this,{run:p,recycle:v,numberOfPieces:g,debug:x,tweenFunction:S,tweenDuration:b}=this.getOptions();if(!p)return!1;const R=this.particles.length,M=v?R:h;if(M<g){m!==g&&(this.tweenProgress=0,this.tweenFrom=M,this.lastNumberOfPieces=g),this.tweenProgress=Math.min(b,Math.max(0,this.tweenProgress+o));const _=S(this.tweenProgress,this.tweenFrom,g,b),P=Math.round(_-M);for(let U=0;U<P;U++)this.particles.push(this.getParticle());this.particlesGenerated+=P}x&&(f.font="12px sans-serif",f.fillStyle="#333",f.textAlign="right",f.fillText(`Particles: ${R}`,c.width-10,c.height-20));for(let _=this.particles.length-1;_>=0;_--){const P=this.particles[_];P.update(o),(P.y>c.height||P.y<-100||P.x>c.width+100||P.x<-100)&&(v&&M<=g?this.particles[_]=this.getParticle():this.removeParticleAt(_))}return R>0||M<g},this.canvas=t;const a=this.canvas.getContext("2d");if(!a)throw new Error("Could not get canvas context");this.context=a,this.getOptions=n}}const ip={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:AS.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class NS{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=o=>{const c={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...c,...ip,...o},Object.assign(this,o.confettiSource)},this.update=(o=0)=>{const{options:{run:c,onConfettiComplete:f,frameRate:h},canvas:m,context:p}=this,v=Math.min(o-this.lastFrameTime,50);if(h&&v<1e3/h){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=o-(h?v%h:0),c&&(p.fillStyle="white",p.clearRect(0,0,m.width,m.height)),this.generator.animate(v)?this.rafId=requestAnimationFrame(this.update):(f&&typeof f=="function"&&this.generator.particlesGenerated>0&&f.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const a=this.canvas.getContext("2d");if(!a)throw new Error("Could not get canvas context");this.context=a,this.generator=new US(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){const n=this._options?.run,a=this._options?.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&a===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const LS=ss.createRef();class ap extends ss.Component{constructor(t){super(t),this.canvas=ss.createRef(),this.canvas=t.canvasRef||LS}componentDidMount(){if(this.canvas.current){const t=Mh(this.props)[0];this.confetti=new NS(this.canvas.current,t)}}componentDidUpdate(){const t=Mh(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Mh(this.props),a={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return St.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:a})}}ap.defaultProps={...ip};ap.displayName="ReactConfetti";function Mh(r){const t={},n={},a={},o=[...Object.keys(ip),"confettiSource","drawShape","onConfettiComplete","frameRate"],c=["canvasRef"];for(const f in r){const h=r[f];o.includes(f)?t[f]=h:c.includes(f)?c[f]=h:a[f]=h}return[t,a,n]}const OS=ss.forwardRef((r,t)=>St.jsx(ap,{canvasRef:t,...r})),PS=["I'm sorry for not listening when you needed me most","I'm sorry for taking your love for granted","I'm sorry for the times I made you feel unheard","I'm sorry for not appreciating your efforts enough","I'm sorry for letting my pride get in the way","I'm sorry for the nights I made you cry","I'm sorry for not being emotionally available","I'm sorry for breaking promises I should have kept","I'm sorry for not supporting your dreams fully","I'm sorry for the harsh words I can't take back","I'm sorry for not showing you how much you mean to me","I'm sorry for making you doubt our love","I'm sorry for not being the partner you deserved","I'm sorry for the times I chose anger over understanding","I'm sorry for not celebrating your achievements enough","I'm sorry for making you feel alone in our relationship","I'm sorry for not communicating my feelings better","I'm sorry for the trust I broke","I'm sorry for not being patient with you","I'm sorry for the times I was selfish","I'm sorry for not making you feel beautiful every day","I'm sorry for the arguments that could have been avoided","I'm sorry for not being your safe space","I'm sorry for the times I disappointed you","I'm sorry for not showing up when you needed me","I'm sorry for making you question your worth","I'm sorry for not being grateful for your presence","I'm sorry for the pain I caused your heart","I'm sorry for not protecting your feelings","I'm sorry for the times I was inconsiderate","I'm sorry for not making our relationship a priority","I'm sorry for the moments I made you feel small","I'm sorry for not being vulnerable with you","I'm sorry for the times I was defensive instead of understanding","I'm sorry for not appreciating your sacrifices","I'm sorry for making you feel like you weren't enough","I'm sorry for the times I was emotionally distant","I'm sorry for not fighting for us harder","I'm sorry for the tears you shed because of me","I'm sorry for not being consistent in my love","I'm sorry for the times I failed to comfort you","I'm sorry for not making you feel secure","I'm sorry for the promises I didn't keep","I'm sorry for not being honest about my feelings","I'm sorry for the times I was too stubborn to apologize","I'm sorry for not making you feel like a priority","I'm sorry for the moments I took you for granted","I'm sorry for not being the man you fell in love with","I'm sorry for letting fear control my actions","I'm sorry for not showing you enough affection","I'm sorry for the times I was critical instead of supportive","I'm sorry for not being present in our conversations","I'm sorry for making you feel like you had to change","I'm sorry for not celebrating who you are","I'm sorry for the times I was impatient","I'm sorry for not being your biggest cheerleader","I'm sorry for the moments I made you feel unloved","I'm sorry for not appreciating your kindness","I'm sorry for the times I was ungrateful","I'm sorry for not making you laugh enough","I'm sorry for the stress I added to your life","I'm sorry for not being understanding of your needs","I'm sorry for the times I was jealous without reason","I'm sorry for not trusting you completely","I'm sorry for making you feel like you had to prove your love","I'm sorry for not being romantic enough","I'm sorry for the times I was moody and took it out on you","I'm sorry for not making you feel special every day","I'm sorry for the moments I was thoughtless","I'm sorry for not being grateful for your patience","I'm sorry for the times I didn't stand up for you","I'm sorry for not making you feel heard","I'm sorry for the arguments I started unnecessarily","I'm sorry for not being more considerate of your feelings","I'm sorry for the times I was too proud to admit I was wrong","I'm sorry for not making you feel like my queen","I'm sorry for the moments I was insensitive","I'm sorry for not appreciating your love language","I'm sorry for the times I was distracted when you needed attention","I'm sorry for not making our future plans together","I'm sorry for the times I made you feel insecure","I'm sorry for not being more affectionate","I'm sorry for the moments I chose my ego over our love","I'm sorry for not making you feel like home","I'm sorry for the times I was unreliable","I'm sorry for not showing you how proud I am of you","I'm sorry for the moments I made you feel unimportant","I'm sorry for not being more thoughtful with my words","I'm sorry for the times I didn't appreciate your efforts","I'm sorry for not making you feel cherished","I'm sorry for the moments I was selfish with my time","I'm sorry for not being more understanding of your emotions","I'm sorry for the times I failed to make you smile","I'm sorry for not being consistent in showing my love","I'm sorry for the moments I made you doubt yourself","I'm sorry for not being more supportive of your goals","I'm sorry for the times I was too busy to listen","I'm sorry for not making you feel like my priority","I'm sorry for the moments I was ungrateful for your love","I'm sorry for not being the partner who lifts you up","I'm sorry for the times I made you feel alone","I'm sorry for not appreciating your beautiful soul","I'm sorry for the moments I was too focused on myself","I'm sorry for not making you feel safe to be vulnerable","I'm sorry for the times I didn't celebrate your wins","I'm sorry for not being more patient with your feelings"],IS=[{title:"Hey Shrutiiiiiiiiiii... 🌹",message:"From the moment I met you, something shifted in my universe. Your smile became my sunrise, your laugh became my favorite sound. I know I've made mistakes, but my heart has never stopped beating for you. Every single day without you has taught me something precious: how much you mean to me, how empty life feels without your presence, and how deeply I want to make things right."},{title:"The Moments I Cherish 💫",message:"Remember our late-night conversations, Shruti? The way we could talk for hours about everything and nothing? I miss the way you understand me like no one else ever has. I miss being your person, and I miss you being mine. Those weren't just moments—they were the happiest chapters of my life. I've replayed every laugh, every inside joke, every comfortable silence in my mind a thousand times."},{title:"What I've Learned 💭",message:"I've spent so much time reflecting on us, on me, on what went wrong. I've learned that loving someone means growing with them, not taking them for granted. I've learned that you deserve someone who shows up every single day. I want to be that person for you, Shruti—not the person I was, but the person I'm becoming for you. Time apart has given me clarity."},{title:"My Deepest Truth 💕",message:"You're not just someone I love—you're the person I want to choose every single day for the rest of my life, Shrutiiiiiiiiiii. I want to be there for your victories and hold you through your struggles. I want to build dreams with you, laugh until we cry, and create a love story that's uniquely ours. My heart has always been yours, Shruti."},{title:"A Promise From My Soul 🌟",message:"If you give me another chance, Shruti, I promise to love you intentionally. To communicate better. To prioritize us. To show you every day that choosing me wasn't a mistake. I'm not perfect, but I'm perfectly certain about you. I'm laying my heart completely bare here, Shrutiiiiiiiiiii. No games, no pretense—just raw, honest love."},{title:"Our Shared Memories 💬",message:"Those midnight talks, your laugh that I made happen, every moment we shared—they're not just the past, they're the future I want, Shrutiiiiiiiiiii. I still remember exactly how it felt talking to you for the first time. Something just clicked. The way you'd smile at me across the room. Your hand in mine. Everything mattered."},{title:"This Valentine's Day 💝",message:"I'm standing here vulnerable and hopeful, asking you to take a chance on us again, Shruti. On the love that made us both better. On the connection that nothing else has ever matched. This isn't just about romance—it's about partnership, friendship, and choosing each other through everything. Will you be mine, Shruti? 🌹"}],Je={colors:{background:"#0a0a0a",heartPrimary:"#ff0844",particleColor:"#ff1744",textGlow:"rgba(255, 8, 68, 0.8)"},text:{question:"Shrutiiiiiiiiiii... Will You Be My",valentine:"Valentine? 💝",yesButton:"Yes, I will! 💕",maybeButton:"Sochne do 🌹",successTitle:"🎉 You Just Made Me The Happiest Person Alive! 🎉",successMessages:["I know I hurt you, and I'm truly sorry. Thank you for seeing past my mistakes, Shruti 💕","I accept full responsibility for what went wrong. I promise to be the man you deserve ✨","Your forgiveness means everything to me. I won't take this second chance lightly 🌹","I've learned from my mistakes and I'm ready to love you the right way, Shrutiiiiiiiiiii 💖","Thank you for believing in us again. I'll spend every day proving I'm worthy of your love 🙏"],apologyReasons:PS,compliments:IS.map((r,t)=>({title:r.title,message:r.message,delay:t*8e3}))},animation:{heartbeatSpeed:1.5,confettiPieces:400,messageDelay:1e3,complimentDuration:56e3}},zS=()=>{const[r,t]=yn.useState({width:typeof window<"u"?window.innerWidth:1e3,height:typeof window<"u"?window.innerHeight:1e3});return yn.useEffect(()=>{const n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),r};const sp="182",FS=0,fv=1,BS=2,Kc=1,__=2,Ko=3,os=0,Zn=1,xa=2,Sa=0,zr=1,hv=2,dv=3,pv=4,HS=5,Ls=100,GS=101,VS=102,kS=103,XS=104,WS=200,qS=201,YS=202,jS=203,ad=204,sd=205,ZS=206,QS=207,KS=208,JS=209,$S=210,tM=211,eM=212,nM=213,iM=214,rd=0,od=1,ld=2,Br=3,cd=4,ud=5,fd=6,hd=7,rp=0,aM=1,sM=2,ki=0,x_=1,y_=2,S_=3,M_=4,E_=5,b_=6,T_=7,A_=300,Fs=301,Hr=302,dd=303,pd=304,ru=306,md=1e3,ya=1001,gd=1002,Un=1003,rM=1004,Ac=1005,Fn=1006,Eh=1007,Is=1008,li=1009,w_=1010,R_=1011,sl=1012,op=1013,Wi=1014,Gi=1015,Ea=1016,lp=1017,cp=1018,rl=1020,C_=35902,D_=35899,U_=1021,N_=1022,Ui=1023,ba=1026,zs=1027,L_=1028,up=1029,Gr=1030,fp=1031,hp=1033,Jc=33776,$c=33777,tu=33778,eu=33779,vd=35840,_d=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,bd=37488,Td=37489,Ad=37490,wd=37491,Rd=37808,Cd=37809,Dd=37810,Ud=37811,Nd=37812,Ld=37813,Od=37814,Pd=37815,Id=37816,zd=37817,Fd=37818,Bd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,jd=36286,oM=3200,O_=0,lM=1,as="",yi="srgb",Vr="srgb-linear",iu="linear",Ve="srgb",Mr=7680,mv=519,cM=512,uM=513,fM=514,dp=515,hM=516,dM=517,pp=518,pM=519,gv=35044,vv="300 es",Vi=2e3,au=2001;function P_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mM(){const r=su("canvas");return r.style.display="block",r}const _v={};function xv(...r){const t="THREE."+r.shift();console.log(t,...r)}function de(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function ol(...r){const t=r.join(" ");t in _v||(_v[t]=!0,de(...r))}function gM(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Wr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,Zd=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Ee(r,t,n){return Math.max(t,Math.min(n,r))}function vM(r,t){return(r%t+t)%t}function Th(r,t,n){return(1-n)*r+n*t}function Xo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,n=0){qt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,f,h){let m=a[o+0],p=a[o+1],v=a[o+2],g=a[o+3],x=c[f+0],S=c[f+1],b=c[f+2],R=c[f+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=v,t[n+3]=g;return}if(h>=1){t[n+0]=x,t[n+1]=S,t[n+2]=b,t[n+3]=R;return}if(g!==R||m!==x||p!==S||v!==b){let M=m*x+p*S+v*b+g*R;M<0&&(x=-x,S=-S,b=-b,R=-R,M=-M);let _=1-h;if(M<.9995){const P=Math.acos(M),U=Math.sin(P);_=Math.sin(_*P)/U,h=Math.sin(h*P)/U,m=m*_+x*h,p=p*_+S*h,v=v*_+b*h,g=g*_+R*h}else{m=m*_+x*h,p=p*_+S*h,v=v*_+b*h,g=g*_+R*h;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}t[n]=m,t[n+1]=p,t[n+2]=v,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,c,f){const h=a[o],m=a[o+1],p=a[o+2],v=a[o+3],g=c[f],x=c[f+1],S=c[f+2],b=c[f+3];return t[n]=h*b+v*g+m*S-p*x,t[n+1]=m*b+v*x+p*g-h*S,t[n+2]=p*b+v*S+h*x-m*g,t[n+3]=v*b-h*g-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(a/2),v=h(o/2),g=h(c/2),x=m(a/2),S=m(o/2),b=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*S*b,this._y=p*S*g-x*v*b,this._z=p*v*b+x*S*g,this._w=p*v*g-x*S*b;break;case"YXZ":this._x=x*v*g+p*S*b,this._y=p*S*g-x*v*b,this._z=p*v*b-x*S*g,this._w=p*v*g+x*S*b;break;case"ZXY":this._x=x*v*g-p*S*b,this._y=p*S*g+x*v*b,this._z=p*v*b+x*S*g,this._w=p*v*g-x*S*b;break;case"ZYX":this._x=x*v*g-p*S*b,this._y=p*S*g+x*v*b,this._z=p*v*b-x*S*g,this._w=p*v*g+x*S*b;break;case"YZX":this._x=x*v*g+p*S*b,this._y=p*S*g+x*v*b,this._z=p*v*b-x*S*g,this._w=p*v*g-x*S*b;break;case"XZY":this._x=x*v*g-p*S*b,this._y=p*S*g-x*v*b,this._z=p*v*b+x*S*g,this._w=p*v*g+x*S*b;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],v=n[6],g=n[10],x=a+h+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(f-o)*S}else if(a>h&&a>g){const S=2*Math.sqrt(1+a-h-g);this._w=(v-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-a-g);this._w=(c-p)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-a-h);this._w=(f-o)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,v=n._w;return this._x=a*v+f*h+o*p-c*m,this._y=o*v+f*m+c*h-a*p,this._z=c*v+f*p+a*m-o*h,this._w=f*v-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,n=Math.sin(n*p)/v,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,a=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(yv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(yv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*o-h*a),v=2*(h*n-c*o),g=2*(c*a-f*n);return this.x=n+m*p+f*g-h*v,this.y=a+m*v+h*p-c*g,this.z=o+m*g+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-a*m,this.z=a*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new j,yv=new hl;class xe{constructor(t,n,a,o,c,f,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p)}set(t,n,a,o,c,f,h,m,p){const v=this.elements;return v[0]=t,v[1]=o,v[2]=h,v[3]=n,v[4]=c,v[5]=m,v[6]=a,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],v=a[4],g=a[7],x=a[2],S=a[5],b=a[8],R=o[0],M=o[3],_=o[6],P=o[1],U=o[4],D=o[7],F=o[2],B=o[5],z=o[8];return c[0]=f*R+h*P+m*F,c[3]=f*M+h*U+m*B,c[6]=f*_+h*D+m*z,c[1]=p*R+v*P+g*F,c[4]=p*M+v*U+g*B,c[7]=p*_+v*D+g*z,c[2]=x*R+S*P+b*F,c[5]=x*M+S*U+b*B,c[8]=x*_+S*D+b*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return n*f*v-n*h*p-a*c*v+a*h*m+o*c*p-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*f-h*p,x=h*m-v*c,S=p*c-f*m,b=n*g+a*x+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=g*R,t[1]=(o*p-v*a)*R,t[2]=(h*a-o*f)*R,t[3]=x*R,t[4]=(v*n-o*m)*R,t[5]=(o*c-h*n)*R,t[6]=S*R,t[7]=(a*m-p*n)*R,t[8]=(f*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+t,-o*p,o*m,-o*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(wh.makeScale(t,n)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,n){return this.premultiply(wh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new xe,Sv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===as?iu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:a,transfer:iu,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:a,transfer:Ve,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Ue=_M();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class xM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Er===void 0&&(Er=su("canvas")),Er.width=t.width,Er.height=t.height;const o=Er.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Er}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=su("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Ma(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ma(n[a]/255)*255):n[a]=Ma(n[a]);return{data:n,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(Rh(o[f].image)):c.push(Rh(o[f]))}else c=Rh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let SM=0;const Ch=new j;class Gn extends Wr{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,a=ya,o=ya,c=Fn,f=Is,h=Ui,m=li,p=Gn.DEFAULT_ANISOTROPY,v=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=qr(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){de(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=A_;Gn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,a=0,o=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],S=m[5],b=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,D=(S+1)/2,F=(_+1)/2,B=(v+x)/4,z=(g+R)/4,q=(b+M)/4;return U>D&&U>F?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=B/a,c=z/a):D>F?D<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),a=B/o,c=q/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=z/c,o=q/c),this.set(a,o,c,n),this}let P=Math.sqrt((M-b)*(M-b)+(g-R)*(g-R)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(g-R)/P,this.z=(x-v)/P,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MM extends Wr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Gn(o);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new mp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends MM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class I_ extends Gn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends Gn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),wc.copy(a.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Rc.subVectors(this.max,Wo),br.subVectors(t.a,Wo),Tr.subVectors(t.b,Wo),Ar.subVectors(t.c,Wo),Ka.subVectors(Tr,br),Ja.subVectors(Ar,Tr),As.subVectors(br,Ar);let n=[0,-Ka.z,Ka.y,0,-Ja.z,Ja.y,0,-As.z,As.y,Ka.z,0,-Ka.x,Ja.z,0,-Ja.x,As.z,0,-As.x,-Ka.y,Ka.x,0,-Ja.y,Ja.x,0,-As.y,As.x,0];return!Dh(n,br,Tr,Ar,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,br,Tr,Ar,Rc))?!1:(Cc.crossVectors(Ka,Ja),n=[Cc.x,Cc.y,Cc.z],Dh(n,br,Tr,Ar,Rc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new j,new j,new j,new j,new j,new j,new j,new j],wi=new j,wc=new dl,br=new j,Tr=new j,Ar=new j,Ka=new j,Ja=new j,As=new j,Wo=new j,Rc=new j,Cc=new j,ws=new j;function Dh(r,t,n,a,o){for(let c=0,f=r.length-3;c<=f;c+=3){ws.fromArray(r,c);const h=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),m=t.dot(ws),p=n.dot(ws),v=a.dot(ws);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const bM=new dl,qo=new j,Uh=new j;class ou{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):bM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(qo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Uh)),this.expandByPoint(qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pa=new j,Nh=new j,Dc=new j,$a=new j,Lh=new j,Uc=new j,Oh=new j;class z_{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=pa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,n),pa.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Nh.copy(t).add(n).multiplyScalar(.5),Dc.copy(n).sub(t).normalize(),$a.copy(this.origin).sub(Nh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Dc),h=$a.dot(this.direction),m=-$a.dot(Dc),p=$a.lengthSq(),v=Math.abs(1-f*f);let g,x,S,b;if(v>0)if(g=f*m-h,x=f*h-m,b=c*v,g>=0)if(x>=-b)if(x<=b){const R=1/v;g*=R,x*=R,S=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),S=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),S=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),S=-g*g+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Nh).addScaledVector(Dc,x),S}intersectSphere(t,n){pa.subVectors(t.center,this.origin);const a=pa.dot(this.direction),o=pa.dot(pa)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(a=(t.min.x-x.x)*p,o=(t.max.x-x.x)*p):(a=(t.max.x-x.x)*p,o=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,f=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,f=(t.min.y-x.y)*v),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,n,a,o,c){Lh.subVectors(n,t),Uc.subVectors(a,t),Oh.crossVectors(Lh,Uc);let f=this.direction.dot(Oh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,t);const m=h*this.direction.dot(Uc.crossVectors($a,Uc));if(m<0)return null;const p=h*this.direction.dot(Lh.cross($a));if(p<0||m+p>f)return null;const v=-h*$a.dot(Oh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,a,o,c,f,h,m,p,v,g,x,S,b,R,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p,v,g,x,S,b,R,M)}set(t,n,a,o,c,f,h,m,p,v,g,x,S,b,R,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=a,_[12]=o,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=b,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),f=1/wr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*v,S=f*g,b=h*v,R=h*g;n[0]=m*v,n[4]=-m*g,n[8]=p,n[1]=S+b*p,n[5]=x-R*p,n[9]=-h*m,n[2]=R-x*p,n[6]=b+S*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*v,S=m*g,b=p*v,R=p*g;n[0]=x+R*h,n[4]=b*h-S,n[8]=f*p,n[1]=f*g,n[5]=f*v,n[9]=-h,n[2]=S*h-b,n[6]=R+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*v,S=m*g,b=p*v,R=p*g;n[0]=x-R*h,n[4]=-f*g,n[8]=b+S*h,n[1]=S+b*h,n[5]=f*v,n[9]=R-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*v,S=f*g,b=h*v,R=h*g;n[0]=m*v,n[4]=b*p-S,n[8]=x*p+R,n[1]=m*g,n[5]=R*p+x,n[9]=S*p-b,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,b=h*m,R=h*p;n[0]=m*v,n[4]=R-x*g,n[8]=b*g+S,n[1]=g,n[5]=f*v,n[9]=-h*v,n[2]=-p*v,n[6]=S*g+b,n[10]=x-R*g}else if(t.order==="XZY"){const x=f*m,S=f*p,b=h*m,R=h*p;n[0]=m*v,n[4]=-g,n[8]=p*v,n[1]=x*g+R,n[5]=f*v,n[9]=S*g-b,n[2]=b*g-S,n[6]=h*v,n[10]=R*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(TM,t,AM)}lookAt(t,n,a){const o=this.elements;return ai.subVectors(t,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ts.crossVectors(a,ai),ts.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ts.crossVectors(a,ai)),ts.normalize(),Nc.crossVectors(ai,ts),o[0]=ts.x,o[4]=Nc.x,o[8]=ai.x,o[1]=ts.y,o[5]=Nc.y,o[9]=ai.y,o[2]=ts.z,o[6]=Nc.z,o[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],v=a[1],g=a[5],x=a[9],S=a[13],b=a[2],R=a[6],M=a[10],_=a[14],P=a[3],U=a[7],D=a[11],F=a[15],B=o[0],z=o[4],q=o[8],T=o[12],C=o[1],H=o[5],Q=o[9],J=o[13],ct=o[2],rt=o[6],I=o[10],V=o[14],nt=o[3],Et=o[7],Mt=o[11],L=o[15];return c[0]=f*B+h*C+m*ct+p*nt,c[4]=f*z+h*H+m*rt+p*Et,c[8]=f*q+h*Q+m*I+p*Mt,c[12]=f*T+h*J+m*V+p*L,c[1]=v*B+g*C+x*ct+S*nt,c[5]=v*z+g*H+x*rt+S*Et,c[9]=v*q+g*Q+x*I+S*Mt,c[13]=v*T+g*J+x*V+S*L,c[2]=b*B+R*C+M*ct+_*nt,c[6]=b*z+R*H+M*rt+_*Et,c[10]=b*q+R*Q+M*I+_*Mt,c[14]=b*T+R*J+M*V+_*L,c[3]=P*B+U*C+D*ct+F*nt,c[7]=P*z+U*H+D*rt+F*Et,c[11]=P*q+U*Q+D*I+F*Mt,c[15]=P*T+U*J+D*V+F*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],S=t[14],b=t[3],R=t[7],M=t[11],_=t[15],P=m*S-p*x,U=h*S-p*g,D=h*x-m*g,F=f*S-p*v,B=f*x-m*v,z=f*g-h*v;return n*(R*P-M*U+_*D)-a*(b*P-M*F+_*B)+o*(b*U-R*F+_*z)-c*(b*D-R*B+M*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],S=t[11],b=t[12],R=t[13],M=t[14],_=t[15],P=g*M*p-R*x*p+R*m*S-h*M*S-g*m*_+h*x*_,U=b*x*p-v*M*p-b*m*S+f*M*S+v*m*_-f*x*_,D=v*R*p-b*g*p+b*h*S-f*R*S-v*h*_+f*g*_,F=b*g*m-v*R*m-b*h*x+f*R*x+v*h*M-f*g*M,B=n*P+a*U+o*D+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(R*x*c-g*M*c-R*o*S+a*M*S+g*o*_-a*x*_)*z,t[2]=(h*M*c-R*m*c+R*o*p-a*M*p-h*o*_+a*m*_)*z,t[3]=(g*m*c-h*x*c-g*o*p+a*x*p+h*o*S-a*m*S)*z,t[4]=U*z,t[5]=(v*M*c-b*x*c+b*o*S-n*M*S-v*o*_+n*x*_)*z,t[6]=(b*m*c-f*M*c-b*o*p+n*M*p+f*o*_-n*m*_)*z,t[7]=(f*x*c-v*m*c+v*o*p-n*x*p-f*o*S+n*m*S)*z,t[8]=D*z,t[9]=(b*g*c-v*R*c-b*a*S+n*R*S+v*a*_-n*g*_)*z,t[10]=(f*R*c-b*h*c+b*a*p-n*R*p-f*a*_+n*h*_)*z,t[11]=(v*h*c-f*g*c-v*a*p+n*g*p+f*a*S-n*h*S)*z,t[12]=F*z,t[13]=(v*R*o-b*g*o+b*a*x-n*R*x-v*a*M+n*g*M)*z,t[14]=(b*h*o-f*R*o-b*a*m+n*R*m+f*a*M-n*h*M)*z,t[15]=(f*g*o-v*h*o+v*a*m-n*g*m-f*a*x+n*h*x)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,p=c*f,v=c*h;return this.set(p*f+a,p*h-o*m,p*m+o*h,0,p*h+o*m,v*h+a,v*m-o*f,0,p*m-o*h,v*m+o*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,v=f+f,g=h+h,x=c*p,S=c*v,b=c*g,R=f*v,M=f*g,_=h*g,P=m*p,U=m*v,D=m*g,F=a.x,B=a.y,z=a.z;return o[0]=(1-(R+_))*F,o[1]=(S+D)*F,o[2]=(b-U)*F,o[3]=0,o[4]=(S-D)*B,o[5]=(1-(x+_))*B,o[6]=(M+P)*B,o[7]=0,o[8]=(b+U)*z,o[9]=(M-P)*z,o[10]=(1-(x+R))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=wr.set(o[0],o[1],o[2]).length();const f=wr.set(o[4],o[5],o[6]).length(),h=wr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const p=1/c,v=1/f,g=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,n.setFromRotationMatrix(Ri),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,o,c,f,h=Vi,m=!1){const p=this.elements,v=2*c/(n-t),g=2*c/(a-o),x=(n+t)/(n-t),S=(a+o)/(a-o);let b,R;if(m)b=c/(f-c),R=f*c/(f-c);else if(h===Vi)b=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(h===au)b=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,f,h=Vi,m=!1){const p=this.elements,v=2/(n-t),g=2/(a-o),x=-(n+t)/(n-t),S=-(a+o)/(a-o);let b,R;if(m)b=1/(f-c),R=f/(f-c);else if(h===Vi)b=-2/(f-c),R=-(f+c)/(f-c);else if(h===au)b=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const wr=new j,Ri=new $e,TM=new j(0,0,0),AM=new j(1,1,1),ts=new j,Nc=new j,ai=new j,Ev=new $e,bv=new hl;class qi{constructor(t=0,n=0,a=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],p=o[5],v=o[9],g=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Ev.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ev,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return bv.setFromEuler(this),this.setFromQuaternion(bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wM=0;const Tv=new j,Rr=new hl,ma=new $e,Lc=new j,Yo=new j,RM=new j,CM=new hl,Av=new j(1,0,0),wv=new j(0,1,0),Rv=new j(0,0,1),Cv={type:"added"},DM={type:"removed"},Cr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Nn extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new j,n=new qi,a=new hl,o=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new xe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Rr.setFromAxisAngle(t,n),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,n){return Rr.setFromAxisAngle(t,n),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Av,t)}rotateY(t){return this.rotateOnAxis(wv,t)}rotateZ(t){return this.rotateOnAxis(Rv,t)}translateOnAxis(t,n){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Av,t)}translateY(t){return this.translateOnAxis(wv,t)}translateZ(t){return this.translateOnAxis(Rv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Lc.copy(t):Lc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Yo,Lc,this.up):ma.lookAt(Lc,Yo,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),Rr.setFromRotationMatrix(ma),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cv),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(DM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cv),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),g=f(t.shapes),x=f(t.skeletons),S=f(t.animations),b=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),g.length>0&&(a.shapes=g),x.length>0&&(a.skeletons=x),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=o,a;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Nn.DEFAULT_UP=new j(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new j,ga=new j,Ih=new j,va=new j,Dr=new j,Ur=new j,Dv=new j,zh=new j,Fh=new j,Bh=new j,Hh=new an,Gh=new an,Vh=new an;class Di{constructor(t=new j,n=new j,a=new j){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ci.subVectors(t,n),o.cross(Ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ci.subVectors(o,n),ga.subVectors(a,n),Ih.subVectors(t,n);const f=Ci.dot(Ci),h=Ci.dot(ga),m=Ci.dot(Ih),p=ga.dot(ga),v=ga.dot(Ih),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(p*m-h*v)*x,b=(f*v-h*m)*x;return c.set(1-S-b,b,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,n,a,o,c,f,h,m){return this.getBarycoord(t,n,a,o,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(f,va.y),m.addScaledVector(h,va.z),m)}static getInterpolatedAttribute(t,n,a,o,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,a),Vh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(t,n,a,o){return Ci.subVectors(a,n),ga.subVectors(t,n),Ci.cross(ga).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ci.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Di.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Di.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let f,h;Dr.subVectors(o,a),Ur.subVectors(c,a),zh.subVectors(t,a);const m=Dr.dot(zh),p=Ur.dot(zh);if(m<=0&&p<=0)return n.copy(a);Fh.subVectors(t,o);const v=Dr.dot(Fh),g=Ur.dot(Fh);if(v>=0&&g<=v)return n.copy(o);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(a).addScaledVector(Dr,f);Bh.subVectors(t,c);const S=Dr.dot(Bh),b=Ur.dot(Bh);if(b>=0&&S<=b)return n.copy(c);const R=S*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(Ur,h);const M=v*b-S*g;if(M<=0&&g-v>=0&&S-b>=0)return Dv.subVectors(c,o),h=(g-v)/(g-v+(S-b)),n.copy(o).addScaledVector(Dv,h);const _=1/(M+R+x);return f=R*_,h=x*_,n.copy(a).addScaledVector(Dr,f).addScaledVector(Ur,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Re{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ue.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ue.workingColorSpace){if(t=vM(t,1),n=Ee(n,0,1),a=Ee(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,o),this}setStyle(t,n=yi){function a(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:de("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const a=B_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ue.workingToColorSpace(zn.copy(this),t),Math.round(Ee(zn.r*255,0,255))*65536+Math.round(Ee(zn.g*255,0,255))*256+Math.round(Ee(zn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(zn.copy(this),n);const a=zn.r,o=zn.g,c=zn.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case a:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-a)/g+2;break;case c:m=(a-o)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=yi){Ue.workingToColorSpace(zn.copy(this),t);const n=zn.r,a=zn.g,o=zn.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(es),this.setHSL(es.h+t,es.s+n,es.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(es),t.getHSL(Oc);const a=Th(es.h,Oc.h,n),o=Th(es.s,Oc.s,n),c=Th(es.l,Oc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Re;Re.NAMES=B_;let UM=0;class Yr extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=zr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=sd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){de(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(a.blending=this.blending),this.side!==os&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ad&&(a.blendSrc=this.blendSrc),this.blendDst!==sd&&(a.blendDst=this.blendDst),this.blendEquation!==Ls&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class H_ extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new j,Pc=new qt;let NM=0;class Ni{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=gv,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(t),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Xo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gv&&(t.usage=this.usage),t}}class G_ extends Ni{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class V_ extends Ni{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ln extends Ni{constructor(t,n,a){super(new Float32Array(t),n,a)}}let LM=0;const xi=new $e,Xh=new Nn,Nr=new j,si=new dl,jo=new dl,xn=new j;class Qn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P_(t)?V_:G_)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new xe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,n,a){return xi.makeTranslation(t,n,a),this.applyMatrix4(xi),this}scale(t,n,a){return xi.makeScale(t,n,a),this.applyMatrix4(xi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];si.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const a=this.boundingSphere.center;if(si.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(si.min,jo.min),si.expandByPoint(xn),xn.addVectors(si.max,jo.max),si.expandByPoint(xn)):(si.expandByPoint(jo.min),si.expandByPoint(jo.max))}si.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(xn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)xn.fromBufferAttribute(h,p),m&&(Nr.fromBufferAttribute(t,p),xn.add(Nr)),o=Math.max(o,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<a.count;q++)h[q]=new j,m[q]=new j;const p=new j,v=new j,g=new j,x=new qt,S=new qt,b=new qt,R=new j,M=new j;function _(q,T,C){p.fromBufferAttribute(a,q),v.fromBufferAttribute(a,T),g.fromBufferAttribute(a,C),x.fromBufferAttribute(c,q),S.fromBufferAttribute(c,T),b.fromBufferAttribute(c,C),v.sub(p),g.sub(p),S.sub(x),b.sub(x);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(H),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-b.x).multiplyScalar(H),h[q].add(R),h[T].add(R),h[C].add(R),m[q].add(M),m[T].add(M),m[C].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,T=P.length;q<T;++q){const C=P[q],H=C.start,Q=C.count;for(let J=H,ct=H+Q;J<ct;J+=3)_(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const U=new j,D=new j,F=new j,B=new j;function z(q){F.fromBufferAttribute(o,q),B.copy(F);const T=h[q];U.copy(T),U.sub(F.multiplyScalar(F.dot(T))).normalize(),D.crossVectors(B,T);const H=D.dot(m[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,H)}for(let q=0,T=P.length;q<T;++q){const C=P[q],H=C.start,Q=C.count;for(let J=H,ct=H+Q;J<ct;J+=3)z(t.getX(J+0)),z(t.getX(J+1)),z(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,S=a.count;x<S;x++)a.setXYZ(x,0,0,0);const o=new j,c=new j,f=new j,h=new j,m=new j,p=new j,v=new j,g=new j;if(t)for(let x=0,S=t.count;x<S;x+=3){const b=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),f.fromBufferAttribute(n,M),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,M),h.add(v),m.add(v),p.add(v),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),a.setXYZ(x+0,v.x,v.y,v.z),a.setXYZ(x+1,v.x,v.y,v.z),a.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let S=0,b=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?S=m[R]*h.data.stride+h.offset:S=m[R]*v;for(let _=0;_<v;_++)x[b++]=p[S++]}return new Ni(x,v,g)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],S=t(x,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(o[m]=v,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new $e,Rs=new z_,Ic=new ou,Nv=new j,zc=new j,Fc=new j,Bc=new j,Wh=new j,Hc=new j,Lv=new j,Gc=new j;class on extends Nn{constructor(t=new Qn,n=new H_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Wh.fromBufferAttribute(g,t),f?Hc.addScaledVector(Wh,v):Hc.addScaledVector(Wh.sub(n),v))}n.add(Hc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere),Ic.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(Ic.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ic,Nv)===null||Rs.origin.distanceToSquared(Nv)>(t.far-t.near)**2))&&(Uv.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(Uv),!(a.boundingBox!==null&&Rs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Rs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,R=x.length;b<R;b++){const M=x[b],_=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=P,F=U;D<F;D+=3){const B=h.getX(D),z=h.getX(D+1),q=h.getX(D+2);o=Vc(this,_,t,a,p,v,g,B,z,q),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let M=b,_=R;M<_;M+=3){const P=h.getX(M),U=h.getX(M+1),D=h.getX(M+2);o=Vc(this,f,t,a,p,v,g,P,U,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=x.length;b<R;b++){const M=x[b],_=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=P,F=U;D<F;D+=3){const B=D,z=D+1,q=D+2;o=Vc(this,_,t,a,p,v,g,B,z,q),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=b,_=R;M<_;M+=3){const P=M,U=M+1,D=M+2;o=Vc(this,f,t,a,p,v,g,P,U,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function OM(r,t,n,a,o,c,f,h){let m;if(t.side===Zn?m=a.intersectTriangle(f,c,o,!0,h):m=a.intersectTriangle(o,c,f,t.side===os,h),m===null)return null;Gc.copy(h),Gc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Gc);return p<n.near||p>n.far?null:{distance:p,point:Gc.clone(),object:r}}function Vc(r,t,n,a,o,c,f,h,m,p){r.getVertexPosition(h,zc),r.getVertexPosition(m,Fc),r.getVertexPosition(p,Bc);const v=OM(r,t,n,a,zc,Fc,Bc,Lv);if(v){const g=new j;Di.getBarycoord(Lv,zc,Fc,Bc,g),o&&(v.uv=Di.getInterpolatedAttribute(o,h,m,p,g,new qt)),c&&(v.uv1=Di.getInterpolatedAttribute(c,h,m,p,g,new qt)),f&&(v.normal=Di.getInterpolatedAttribute(f,h,m,p,g,new j),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new j,materialIndex:0};Di.getNormal(zc,Fc,Bc,x.normal),v.face=x,v.barycoord=g}return v}class pl extends Qn{constructor(t=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,S=0;b("z","y","x",-1,-1,a,n,t,f,c,0),b("z","y","x",1,-1,a,n,-t,f,c,1),b("x","z","y",1,1,t,a,n,o,f,2),b("x","z","y",1,-1,t,a,-n,o,f,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(g,2));function b(R,M,_,P,U,D,F,B,z,q,T){const C=D/z,H=F/q,Q=D/2,J=F/2,ct=B/2,rt=z+1,I=q+1;let V=0,nt=0;const Et=new j;for(let Mt=0;Mt<I;Mt++){const L=Mt*H-J;for(let tt=0;tt<rt;tt++){const pt=tt*C-Q;Et[R]=pt*P,Et[M]=L*U,Et[_]=ct,p.push(Et.x,Et.y,Et.z),Et[R]=0,Et[M]=0,Et[_]=B>0?1:-1,v.push(Et.x,Et.y,Et.z),g.push(tt/z),g.push(1-Mt/q),V+=1}}for(let Mt=0;Mt<q;Mt++)for(let L=0;L<z;L++){const tt=x+L+rt*Mt,pt=x+L+rt*(Mt+1),wt=x+(L+1)+rt*(Mt+1),Ht=x+(L+1)+rt*Mt;m.push(tt,pt,Ht),m.push(pt,wt,Ht),nt+=6}h.addGroup(S,nt,T),S+=nt,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Hn(r){const t={};for(let n=0;n<r.length;n++){const a=kr(r[n]);for(const o in a)t[o]=a[o]}return t}function PM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function k_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const IM={clone:kr,merge:Hn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=PM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class X_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new j,Ov=new qt,Pv=new qt;class oi extends X_{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,n){return this.getViewBounds(t,Ov,Pv),n.subVectors(Pv,Ov)}setViewOffset(t,n,a,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*a/p,o*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Or=1;class BM extends Nn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(Lr,Or,t,n);o.layers=this.layers,this.add(o);const c=new oi(Lr,Or,t,n);c.layers=this.layers,this.add(c);const f=new oi(Lr,Or,t,n);f.layers=this.layers,this.add(f);const h=new oi(Lr,Or,t,n);h.layers=this.layers,this.add(h);const m=new oi(Lr,Or,t,n);m.layers=this.layers,this.add(m);const p=new oi(Lr,Or,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===Vi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===au)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,o),t.render(n,v),t.setRenderTarget(g,x,S),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class W_ extends Gn{constructor(t=[],n=Fs,a,o,c,f,h,m,p,v){super(t,n,a,o,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class q_ extends Xi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new W_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new pl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:Sa});c.uniforms.tEquirect.value=n;const f=new on(o,c),h=n.minFilter;return n.minFilter===Is&&(n.minFilter=Fn),new BM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(c)}}class Jo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,a),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,b=.005;p.inputState.pinching&&x>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Jo;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class GM extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VM extends Gn{constructor(t=null,n=1,a=1,o,c,f,h,m,p=Un,v=Un,g,x){super(null,f,h,m,p,v,o,c,g,x),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new j,kM=new j,XM=new xe;class Ns{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Yh.subVectors(a,n).cross(kM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Yh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||XM.getNormalMatrix(t),o=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new ou,WM=new qt(.5,.5),kc=new j;class gp{constructor(t=new Ns,n=new Ns,a=new Ns,o=new Ns,c=new Ns,f=new Ns){this.planes=[t,n,a,o,c,f]}set(t,n,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Vi,a=!1){const o=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],S=c[7],b=c[8],R=c[9],M=c[10],_=c[11],P=c[12],U=c[13],D=c[14],F=c[15];if(o[0].setComponents(p-f,S-v,_-b,F-P).normalize(),o[1].setComponents(p+f,S+v,_+b,F+P).normalize(),o[2].setComponents(p+h,S+g,_+R,F+U).normalize(),o[3].setComponents(p-h,S-g,_-R,F-U).normalize(),a)o[4].setComponents(m,x,M,D).normalize(),o[5].setComponents(p-m,S-x,_-M,F-D).normalize();else if(o[4].setComponents(p-m,S-x,_-M,F-D).normalize(),n===Vi)o[5].setComponents(p+m,S+x,_+M,F+D).normalize();else if(n===au)o[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const n=WM.distanceTo(t.center);return Cs.radius=.7071067811865476+n,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(kc.x=o.normal.x>0?t.max.x:t.min.x,kc.y=o.normal.y>0?t.max.y:t.min.y,kc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends Yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Iv=new $e,Qd=new z_,Xc=new ou,Wc=new j;class qM extends Nn{constructor(t=new Qn,n=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Xc.copy(a.boundingSphere),Xc.applyMatrix4(o),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;Iv.copy(o).invert(),Qd.copy(t.ray).applyMatrix4(Iv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,g=a.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let b=x,R=S;b<R;b++){const M=p.getX(b);Wc.fromBufferAttribute(g,M),zv(Wc,M,m,o,t,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let b=x,R=S;b<R;b++)Wc.fromBufferAttribute(g,b),zv(Wc,b,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zv(r,t,n,a,o,c,f){const h=Qd.distanceSqToPoint(r);if(h<n){const m=new j;Qd.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class ll extends Gn{constructor(t,n,a=Wi,o,c,f,h=Un,m=Un,p,v=ba,g=1){if(v!==ba&&v!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:g};super(x,o,c,f,h,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class YM extends ll{constructor(t,n=Wi,a=Fs,o,c,f=Un,h=Un,m,p=ba){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,n,a,o,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class j_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nl extends Qn{constructor(t=1,n=1,a=1,o=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],x=[],S=[];let b=0;const R=[],M=a/2;let _=0;P(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(x,3)),this.setAttribute("uv",new Ln(S,2));function P(){const D=new j,F=new j;let B=0;const z=(n-t)/a;for(let q=0;q<=c;q++){const T=[],C=q/c,H=C*(n-t)+t;for(let Q=0;Q<=o;Q++){const J=Q/o,ct=J*m+h,rt=Math.sin(ct),I=Math.cos(ct);F.x=H*rt,F.y=-C*a+M,F.z=H*I,g.push(F.x,F.y,F.z),D.set(rt,z,I).normalize(),x.push(D.x,D.y,D.z),S.push(J,1-C),T.push(b++)}R.push(T)}for(let q=0;q<o;q++)for(let T=0;T<c;T++){const C=R[T][q],H=R[T+1][q],Q=R[T+1][q+1],J=R[T][q+1];(t>0||T!==0)&&(v.push(C,H,J),B+=3),(n>0||T!==c-1)&&(v.push(H,Q,J),B+=3)}p.addGroup(_,B,0),_+=B}function U(D){const F=b,B=new qt,z=new j;let q=0;const T=D===!0?t:n,C=D===!0?1:-1;for(let Q=1;Q<=o;Q++)g.push(0,M*C,0),x.push(0,C,0),S.push(.5,.5),b++;const H=b;for(let Q=0;Q<=o;Q++){const ct=Q/o*m+h,rt=Math.cos(ct),I=Math.sin(ct);z.x=T*I,z.y=M*C,z.z=T*rt,g.push(z.x,z.y,z.z),x.push(0,C,0),B.x=rt*.5+.5,B.y=I*.5*C+.5,S.push(B.x,B.y),b++}for(let Q=0;Q<o;Q++){const J=F+Q,ct=H+Q;D===!0?v.push(ct,ct+1,J):v.push(ct+1,ct,J),q+=3}p.addGroup(_,q,D===!0?1:2),_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-f,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===f)return o/(c-1);const v=a[o],x=a[o+1]-v,S=(f-v)/x;return(o+S)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),m=n||(f.isVector2?new qt:new j);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new j,o=[],c=[],f=[],h=new j,m=new $e;for(let S=0;S<=t;S++){const b=S/t;o[S]=this.getTangentAt(b,new j)}c[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),g=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,a.set(1,0,0)),g<=p&&(p=g,a.set(0,1,0)),x<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Ee(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,b))}f[S].crossVectors(o[S],c[S])}if(n===!0){let S=Math.acos(Ee(c[0].dot(c[t]),-1,1));S/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],S*b)),f[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vp extends ji{constructor(t=0,n=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new qt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=m-this.aX,S=p-this.aY;m=x*v-S*g+this.aX,p=x*g+S*v+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jM extends vp{constructor(t,n,a,o,c,f){super(t,n,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function _p(){let r=0,t=0,n=0,a=0;function o(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,a=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){o(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,v,g){let x=(f-c)/p-(h-c)/(p+v)+(h-f)/v,S=(h-f)/v-(m-f)/(v+g)+(m-h)/g;x*=v,S*=v,o(f,h,x,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const qc=new j,jh=new _p,Zh=new _p,Qh=new _p;class ZM extends ji{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new j){const a=n,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,v;this.closed||h>0?p=o[(h-1)%c]:(qc.subVectors(o[0],o[1]).add(o[0]),p=qc);const g=o[h%c],x=o[(h+1)%c];if(this.closed||h+2<c?v=o[(h+2)%c]:(qc.subVectors(o[c-1],o[c-2]).add(o[c-1]),v=qc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(g),S),R=Math.pow(g.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(v),S);R<1e-4&&(R=1),b<1e-4&&(b=R),M<1e-4&&(M=R),jh.initNonuniformCatmullRom(p.x,g.x,x.x,v.x,b,R,M),Zh.initNonuniformCatmullRom(p.y,g.y,x.y,v.y,b,R,M),Qh.initNonuniformCatmullRom(p.z,g.z,x.z,v.z,b,R,M)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(p.x,g.x,x.x,v.x,this.tension),Zh.initCatmullRom(p.y,g.y,x.y,v.y,this.tension),Qh.initCatmullRom(p.z,g.z,x.z,v.z,this.tension));return a.set(jh.calc(m),Zh.calc(m),Qh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new j().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fv(r,t,n,a,o){const c=(a-t)*.5,f=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*a+c+f)*m+(-3*n+3*a-2*c-f)*h+c*r+n}function QM(r,t){const n=1-r;return n*n*t}function KM(r,t){return 2*(1-r)*r*t}function JM(r,t){return r*r*t}function il(r,t,n,a){return QM(r,t)+KM(r,n)+JM(r,a)}function $M(r,t){const n=1-r;return n*n*n*t}function tE(r,t){const n=1-r;return 3*n*n*r*t}function eE(r,t){return 3*(1-r)*r*r*t}function nE(r,t){return r*r*r*t}function al(r,t,n,a,o){return $M(r,t)+tE(r,n)+eE(r,a)+nE(r,o)}class Z_ extends ji{constructor(t=new qt,n=new qt,a=new qt,o=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new qt){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(al(t,o.x,c.x,f.x,h.x),al(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iE extends ji{constructor(t=new j,n=new j,a=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new j){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(al(t,o.x,c.x,f.x,h.x),al(t,o.y,c.y,f.y,h.y),al(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q_ extends ji{constructor(t=new qt,n=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new qt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new qt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aE extends ji{constructor(t=new j,n=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new j){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new j){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends ji{constructor(t=new qt,n=new qt,a=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new qt){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(il(t,o.x,c.x,f.x),il(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sE extends ji{constructor(t=new j,n=new j,a=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new j){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(il(t,o.x,c.x,f.x),il(t,o.y,c.y,f.y),il(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new qt){const a=n,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,m=o[f===0?f:f-1],p=o[f],v=o[f>o.length-2?o.length-1:f+1],g=o[f>o.length-3?o.length-1:f+2];return a.set(Fv(h,m.x,p.x,v.x,g.x),Fv(h,m.y,p.y,v.y,g.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new qt().fromArray(o))}return this}}var Kd=Object.freeze({__proto__:null,ArcCurve:jM,CatmullRomCurve3:ZM,CubicBezierCurve:Z_,CubicBezierCurve3:iE,EllipseCurve:vp,LineCurve:Q_,LineCurve3:aE,QuadraticBezierCurve:K_,QuadraticBezierCurve3:sE,SplineCurve:J_});class rE extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const f=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const f=c[o],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const v=m[p];a&&a.equals(v)||(n.push(v),a=v)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new Kd[o.type]().fromJSON(o))}return this}}class Bv extends rE{constructor(t){super(),this.type="Path",this.currentPoint=new qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Q_(this.currentPoint.clone(),new qt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new K_(this.currentPoint.clone(),new qt(t,n),new qt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,f){const h=new Z_(this.currentPoint.clone(),new qt(t,n),new qt(a,o),new qt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new J_(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,f),this}absarc(t,n,a,o,c,f){return this.absellipse(t,n,a,a,o,c,f),this}ellipse(t,n,a,o,c,f,h,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+p,n+v,a,o,c,f,h,m),this}absellipse(t,n,a,o,c,f,h,m){const p=new vp(t,n,a,o,c,f,h,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $_ extends Bv{constructor(t){super(t),this.uuid=qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Bv().fromJSON(o))}return this}}function oE(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=tx(r,0,o,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(a&&(c=hE(r,t,c,n)),r.length>80*n){h=r[0],m=r[1];let v=h,g=m;for(let x=n;x<o;x+=n){const S=r[x],b=r[x+1];S<h&&(h=S),b<m&&(m=b),S>v&&(v=S),b>g&&(g=b)}p=Math.max(v-h,g-m),p=p!==0?32767/p:0}return cl(c,f,n,h,m,p,0),f}function tx(r,t,n,a,o){let c;if(o===EE(r,t,n,a)>0)for(let f=t;f<n;f+=a)c=Hv(f/a|0,r[f],r[f+1],c);else for(let f=n-a;f>=t;f-=a)c=Hv(f/a|0,r[f],r[f+1],c);return c&&Xr(c,c.next)&&(fl(c),c=c.next),c}function Bs(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Xr(n,n.next)||tn(n.prev,n,n.next)===0)){if(fl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function cl(r,t,n,a,o,c,f){if(!r)return;!f&&c&&vE(r,a,o,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?cE(r,a,o,c):lE(r)){t.push(m.i,r.i,p.i),fl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=uE(Bs(r),t),cl(r,t,n,a,o,c,2)):f===2&&fE(r,t,n,a,o,c):cl(Bs(r),t,n,a,o,c,1);break}}}function lE(r){const t=r.prev,n=r,a=r.next;if(tn(t,n,a)>=0)return!1;const o=t.x,c=n.x,f=a.x,h=t.y,m=n.y,p=a.y,v=Math.min(o,c,f),g=Math.min(h,m,p),x=Math.max(o,c,f),S=Math.max(h,m,p);let b=a.next;for(;b!==t;){if(b.x>=v&&b.x<=x&&b.y>=g&&b.y<=S&&$o(o,h,c,m,f,p,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function cE(r,t,n,a){const o=r.prev,c=r,f=r.next;if(tn(o,c,f)>=0)return!1;const h=o.x,m=c.x,p=f.x,v=o.y,g=c.y,x=f.y,S=Math.min(h,m,p),b=Math.min(v,g,x),R=Math.max(h,m,p),M=Math.max(v,g,x),_=Jd(S,b,t,n,a),P=Jd(R,M,t,n,a);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=_&&D&&D.z<=P;){if(U.x>=S&&U.x<=R&&U.y>=b&&U.y<=M&&U!==o&&U!==f&&$o(h,v,m,g,p,x,U.x,U.y)&&tn(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=S&&D.x<=R&&D.y>=b&&D.y<=M&&D!==o&&D!==f&&$o(h,v,m,g,p,x,D.x,D.y)&&tn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=_;){if(U.x>=S&&U.x<=R&&U.y>=b&&U.y<=M&&U!==o&&U!==f&&$o(h,v,m,g,p,x,U.x,U.y)&&tn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=P;){if(D.x>=S&&D.x<=R&&D.y>=b&&D.y<=M&&D!==o&&D!==f&&$o(h,v,m,g,p,x,D.x,D.y)&&tn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function uE(r,t){let n=r;do{const a=n.prev,o=n.next.next;!Xr(a,o)&&nx(a,n,n.next,o)&&ul(a,o)&&ul(o,a)&&(t.push(a.i,n.i,o.i),fl(n),fl(n.next),n=r=o),n=n.next}while(n!==r);return Bs(n)}function fE(r,t,n,a,o,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&yE(f,h)){let m=ix(f,h);f=Bs(f,f.next),m=Bs(m,m.next),cl(f,t,n,a,o,c,0),cl(m,t,n,a,o,c,0);return}h=h.next}f=f.next}while(f!==r)}function hE(r,t,n,a){const o=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*a,m=c<f-1?t[c+1]*a:r.length,p=tx(r,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(xE(p))}o.sort(dE);for(let c=0;c<o.length;c++)n=pE(o[c],n);return n}function dE(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function pE(r,t){const n=mE(r,t);if(!n)return t;const a=ix(n,r);return Bs(a,a.next),Bs(n,n.next)}function mE(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,f;if(Xr(r,n))return n;do{if(Xr(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const g=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=a&&g>c&&(c=g,f=n.x<n.next.x?n:n.next,g===a))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let v=1/0;n=f;do{if(a>=n.x&&n.x>=m&&a!==n.x&&ex(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const g=Math.abs(o-n.y)/(a-n.x);ul(n,r)&&(g<v||g===v&&(n.x>f.x||n.x===f.x&&gE(f,n)))&&(f=n,v=g)}n=n.next}while(n!==h);return f}function gE(r,t){return tn(r.prev,r,t.prev)<0&&tn(t.next,r,r.next)<0}function vE(r,t,n,a){let o=r;do o.z===0&&(o.z=Jd(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,_E(o)}function _E(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let f=a,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||a.z<=f.z)?(o=a,a=a.nextZ,h--):(o=f,f=f.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=f}c.nextZ=null,n*=2}while(t>1);return r}function Jd(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function xE(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function ex(r,t,n,a,o,c,f,h){return(o-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(a-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(o-f)*(a-h)}function $o(r,t,n,a,o,c,f,h){return!(r===f&&t===h)&&ex(r,t,n,a,o,c,f,h)}function yE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!SE(r,t)&&(ul(r,t)&&ul(t,r)&&ME(r,t)&&(tn(r.prev,r,t.prev)||tn(r,t.prev,t))||Xr(r,t)&&tn(r.prev,r,r.next)>0&&tn(t.prev,t,t.next)>0)}function tn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Xr(r,t){return r.x===t.x&&r.y===t.y}function nx(r,t,n,a){const o=jc(tn(r,t,n)),c=jc(tn(r,t,a)),f=jc(tn(n,a,r)),h=jc(tn(n,a,t));return!!(o!==c&&f!==h||o===0&&Yc(r,n,t)||c===0&&Yc(r,a,t)||f===0&&Yc(n,r,a)||h===0&&Yc(n,t,a))}function Yc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function jc(r){return r>0?1:r<0?-1:0}function SE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&nx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function ul(r,t){return tn(r.prev,r,r.next)<0?tn(r,t,r.next)>=0&&tn(r,r.prev,t)>=0:tn(r,t,r.prev)<0||tn(r,r.next,t)<0}function ME(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function ix(r,t){const n=$d(r.i,r.x,r.y),a=$d(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function Hv(r,t,n,a){const o=$d(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function fl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $d(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function EE(r,t,n,a){let o=0;for(let c=t,f=n-a;c<n;c+=a)o+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return o}class bE{static triangulate(t,n,a=2){return oE(t,n,a)}}class Ir{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Ir.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];Gv(t),Vv(a,t);let f=t.length;n.forEach(Gv);for(let m=0;m<n.length;m++)o.push(f),f+=n[m].length,Vv(a,n[m]);const h=bE.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Gv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Vv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class xp extends Qn{constructor(t=new $_([new qt(.5,.5),new qt(-.5,.5),new qt(-.5,-.5),new qt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];f(p)}this.setAttribute("position",new Ln(o,3)),this.setAttribute("uv",new Ln(c,2)),this.computeVertexNormals();function f(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,v=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:1;let x=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,b=n.bevelSize!==void 0?n.bevelSize:S-.1,R=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const _=n.extrudePath,P=n.UVGenerator!==void 0?n.UVGenerator:TE;let U,D=!1,F,B,z,q;if(_){U=_.getSpacedPoints(v),D=!0,x=!1;const gt=_.isCatmullRomCurve3?_.closed:!1;F=_.computeFrenetFrames(v,gt),B=new j,z=new j,q=new j}x||(M=0,S=0,b=0,R=0);const T=h.extractPoints(p);let C=T.shape;const H=T.holes;if(!Ir.isClockWise(C)){C=C.reverse();for(let gt=0,bt=H.length;gt<bt;gt++){const xt=H[gt];Ir.isClockWise(xt)&&(H[gt]=xt.reverse())}}function J(gt){const xt=10000000000000001e-36;let Pt=gt[0];for(let O=1;O<=gt.length;O++){const ne=O%gt.length,zt=gt[ne],ae=zt.x-Pt.x,Ut=zt.y-Pt.y,N=ae*ae+Ut*Ut,E=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(Pt.x),Math.abs(Pt.y)),W=xt*E*E;if(N<=W){gt.splice(ne,1),O--;continue}Pt=zt}}J(C),H.forEach(J);const ct=H.length,rt=C;for(let gt=0;gt<ct;gt++){const bt=H[gt];C=C.concat(bt)}function I(gt,bt,xt){return bt||De("ExtrudeGeometry: vec does not exist"),gt.clone().addScaledVector(bt,xt)}const V=C.length;function nt(gt,bt,xt){let Pt,O,ne;const zt=gt.x-bt.x,ae=gt.y-bt.y,Ut=xt.x-gt.x,N=xt.y-gt.y,E=zt*zt+ae*ae,W=zt*N-ae*Ut;if(Math.abs(W)>Number.EPSILON){const ut=Math.sqrt(E),yt=Math.sqrt(Ut*Ut+N*N),ft=bt.x-ae/ut,Jt=bt.y+zt/ut,Lt=xt.x-N/yt,Kt=xt.y+Ut/yt,oe=((Lt-ft)*N-(Kt-Jt)*Ut)/(zt*N-ae*Ut);Pt=ft+zt*oe-gt.x,O=Jt+ae*oe-gt.y;const Tt=Pt*Pt+O*O;if(Tt<=2)return new qt(Pt,O);ne=Math.sqrt(Tt/2)}else{let ut=!1;zt>Number.EPSILON?Ut>Number.EPSILON&&(ut=!0):zt<-Number.EPSILON?Ut<-Number.EPSILON&&(ut=!0):Math.sign(ae)===Math.sign(N)&&(ut=!0),ut?(Pt=-ae,O=zt,ne=Math.sqrt(E)):(Pt=zt,O=ae,ne=Math.sqrt(E/2))}return new qt(Pt/ne,O/ne)}const Et=[];for(let gt=0,bt=rt.length,xt=bt-1,Pt=gt+1;gt<bt;gt++,xt++,Pt++)xt===bt&&(xt=0),Pt===bt&&(Pt=0),Et[gt]=nt(rt[gt],rt[xt],rt[Pt]);const Mt=[];let L,tt=Et.concat();for(let gt=0,bt=ct;gt<bt;gt++){const xt=H[gt];L=[];for(let Pt=0,O=xt.length,ne=O-1,zt=Pt+1;Pt<O;Pt++,ne++,zt++)ne===O&&(ne=0),zt===O&&(zt=0),L[Pt]=nt(xt[Pt],xt[ne],xt[zt]);Mt.push(L),tt=tt.concat(L)}let pt;if(M===0)pt=Ir.triangulateShape(rt,H);else{const gt=[],bt=[];for(let xt=0;xt<M;xt++){const Pt=xt/M,O=S*Math.cos(Pt*Math.PI/2),ne=b*Math.sin(Pt*Math.PI/2)+R;for(let zt=0,ae=rt.length;zt<ae;zt++){const Ut=I(rt[zt],Et[zt],ne);Gt(Ut.x,Ut.y,-O),Pt===0&&gt.push(Ut)}for(let zt=0,ae=ct;zt<ae;zt++){const Ut=H[zt];L=Mt[zt];const N=[];for(let E=0,W=Ut.length;E<W;E++){const ut=I(Ut[E],L[E],ne);Gt(ut.x,ut.y,-O),Pt===0&&N.push(ut)}Pt===0&&bt.push(N)}}pt=Ir.triangulateShape(gt,bt)}const wt=pt.length,Ht=b+R;for(let gt=0;gt<V;gt++){const bt=x?I(C[gt],tt[gt],Ht):C[gt];D?(z.copy(F.normals[0]).multiplyScalar(bt.x),B.copy(F.binormals[0]).multiplyScalar(bt.y),q.copy(U[0]).add(z).add(B),Gt(q.x,q.y,q.z)):Gt(bt.x,bt.y,0)}for(let gt=1;gt<=v;gt++)for(let bt=0;bt<V;bt++){const xt=x?I(C[bt],tt[bt],Ht):C[bt];D?(z.copy(F.normals[gt]).multiplyScalar(xt.x),B.copy(F.binormals[gt]).multiplyScalar(xt.y),q.copy(U[gt]).add(z).add(B),Gt(q.x,q.y,q.z)):Gt(xt.x,xt.y,g/v*gt)}for(let gt=M-1;gt>=0;gt--){const bt=gt/M,xt=S*Math.cos(bt*Math.PI/2),Pt=b*Math.sin(bt*Math.PI/2)+R;for(let O=0,ne=rt.length;O<ne;O++){const zt=I(rt[O],Et[O],Pt);Gt(zt.x,zt.y,g+xt)}for(let O=0,ne=H.length;O<ne;O++){const zt=H[O];L=Mt[O];for(let ae=0,Ut=zt.length;ae<Ut;ae++){const N=I(zt[ae],L[ae],Pt);D?Gt(N.x,N.y+U[v-1].y,U[v-1].x+xt):Gt(N.x,N.y,g+xt)}}}it(),ht();function it(){const gt=o.length/3;if(x){let bt=0,xt=V*bt;for(let Pt=0;Pt<wt;Pt++){const O=pt[Pt];kt(O[2]+xt,O[1]+xt,O[0]+xt)}bt=v+M*2,xt=V*bt;for(let Pt=0;Pt<wt;Pt++){const O=pt[Pt];kt(O[0]+xt,O[1]+xt,O[2]+xt)}}else{for(let bt=0;bt<wt;bt++){const xt=pt[bt];kt(xt[2],xt[1],xt[0])}for(let bt=0;bt<wt;bt++){const xt=pt[bt];kt(xt[0]+V*v,xt[1]+V*v,xt[2]+V*v)}}a.addGroup(gt,o.length/3-gt,0)}function ht(){const gt=o.length/3;let bt=0;Dt(rt,bt),bt+=rt.length;for(let xt=0,Pt=H.length;xt<Pt;xt++){const O=H[xt];Dt(O,bt),bt+=O.length}a.addGroup(gt,o.length/3-gt,1)}function Dt(gt,bt){let xt=gt.length;for(;--xt>=0;){const Pt=xt;let O=xt-1;O<0&&(O=gt.length-1);for(let ne=0,zt=v+M*2;ne<zt;ne++){const ae=V*ne,Ut=V*(ne+1),N=bt+Pt+ae,E=bt+O+ae,W=bt+O+Ut,ut=bt+Pt+Ut;ge(N,E,W,ut)}}}function Gt(gt,bt,xt){m.push(gt),m.push(bt),m.push(xt)}function kt(gt,bt,xt){be(gt),be(bt),be(xt);const Pt=o.length/3,O=P.generateTopUV(a,o,Pt-3,Pt-2,Pt-1);ue(O[0]),ue(O[1]),ue(O[2])}function ge(gt,bt,xt,Pt){be(gt),be(bt),be(Pt),be(bt),be(xt),be(Pt);const O=o.length/3,ne=P.generateSideWallUV(a,o,O-6,O-3,O-2,O-1);ue(ne[0]),ue(ne[1]),ue(ne[3]),ue(ne[1]),ue(ne[2]),ue(ne[3])}function be(gt){o.push(m[gt*3+0]),o.push(m[gt*3+1]),o.push(m[gt*3+2])}function ue(gt){c.push(gt.x),c.push(gt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return AE(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Kd[o.type]().fromJSON(o)),new xp(a,t.options)}}const TE={generateTopUV:function(r,t,n,a,o){const c=t[n*3],f=t[n*3+1],h=t[a*3],m=t[a*3+1],p=t[o*3],v=t[o*3+1];return[new qt(c,f),new qt(h,m),new qt(p,v)]},generateSideWallUV:function(r,t,n,a,o,c){const f=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[a*3],v=t[a*3+1],g=t[a*3+2],x=t[o*3],S=t[o*3+1],b=t[o*3+2],R=t[c*3],M=t[c*3+1],_=t[c*3+2];return Math.abs(h-v)<Math.abs(f-p)?[new qt(f,1-m),new qt(p,1-g),new qt(x,1-b),new qt(R,1-_)]:[new qt(h,1-m),new qt(v,1-g),new qt(S,1-b),new qt(M,1-_)]}};function AE(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,o=r.length;a<o;a++){const c=r[a];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class lu extends Qn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,v=m+1,g=t/h,x=n/m,S=[],b=[],R=[],M=[];for(let _=0;_<v;_++){const P=_*x-f;for(let U=0;U<p;U++){const D=U*g-c;b.push(D,-P,0),R.push(0,0,1),M.push(U/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const U=P+p*_,D=P+p*(_+1),F=P+1+p*(_+1),B=P+1+p*_;S.push(U,D,B),S.push(D,F,B)}this.setIndex(S),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(R,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Os extends Qn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let p=0;const v=[],g=new j,x=new j,S=[],b=[],R=[],M=[];for(let _=0;_<=a;_++){const P=[],U=_/a;let D=0;_===0&&f===0?D=.5/n:_===a&&m===Math.PI&&(D=-.5/n);for(let F=0;F<=n;F++){const B=F/n;g.x=-t*Math.cos(o+B*c)*Math.sin(f+U*h),g.y=t*Math.cos(f+U*h),g.z=t*Math.sin(o+B*c)*Math.sin(f+U*h),b.push(g.x,g.y,g.z),x.copy(g).normalize(),R.push(x.x,x.y,x.z),M.push(B+D,1-U),P.push(p++)}v.push(P)}for(let _=0;_<a;_++)for(let P=0;P<n;P++){const U=v[_][P+1],D=v[_][P],F=v[_+1][P],B=v[_+1][P+1];(_!==0||f>0)&&S.push(U,D,B),(_!==a-1||m<Math.PI)&&S.push(D,F,B)}this.setIndex(S),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(R,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wE extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _a extends Yr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O_,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class RE extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CE extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yp extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Kh=new $e,kv=new j,Xv=new j;class ax{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;kv.setFromMatrixPosition(t.matrixWorld),n.position.copy(kv),Xv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Xv),n.updateMatrixWorld(),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class DE extends ax{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class UE extends yp{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new DE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Sp extends X_{constructor(t=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class NE extends ax{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LE extends yp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new NE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class OE extends yp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class PE extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Wv(r,t,n,a){const o=IE(a);switch(n){case U_:return r*t;case L_:return r*t/o.components*o.byteLength;case up:return r*t/o.components*o.byteLength;case Gr:return r*t*2/o.components*o.byteLength;case fp:return r*t*2/o.components*o.byteLength;case N_:return r*t*3/o.components*o.byteLength;case Ui:return r*t*4/o.components*o.byteLength;case hp:return r*t*4/o.components*o.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case yd:return Math.max(r,16)*Math.max(t,8)/4;case vd:case xd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case Md:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ed:case Ad:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IE(r){switch(r){case li:case w_:return{byteLength:1,components:1};case sl:case R_:case Ea:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Wi:case op:case Gi:return{byteLength:4,components:1};case C_:case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);function sx(){let r=null,t=!1,n=null,a=null;function o(c,f){n(c,f),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function zE(r){const t=new WeakMap;function n(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<g.length;S++){const b=g[x],R=g[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,g[x]=R)}g.length=x+1;for(let S=0,b=g.length;S<b;S++){const R=g[S];r.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:f}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KE=`#ifdef USE_IRIDESCENCE
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
#endif`,JE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,Ib=`uniform sampler2D dfgLUT;
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
}`,zb=`
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
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
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M1=`float getShadowMask() {
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
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
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
}`,X1=`#if DEPTH_PACKING == 3200
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
}`,W1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,eT=`#define MATCAP
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
}`,nT=`#define MATCAP
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
}`,iT=`#define NORMAL
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
}`,aT=`#define NORMAL
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
}`,sT=`#define PHONG
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
}`,rT=`#define PHONG
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
}`,oT=`#define STANDARD
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
}`,lT=`#define STANDARD
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
}`,cT=`#define TOON
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
}`,uT=`#define TOON
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
}`,fT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,pT=`uniform vec3 color;
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
}`,mT=`uniform float rotation;
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
}`,gT=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:FE,alphahash_pars_fragment:BE,alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:VE,alphatest_pars_fragment:kE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:jE,beginnormal_vertex:ZE,bsdfs:QE,iridescence_fragment:KE,bumpmap_pars_fragment:JE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:eb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:ab,color_pars_vertex:sb,color_vertex:rb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:db,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:vb,envmap_pars_fragment:_b,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Db,envmap_vertex:yb,fog_vertex:Sb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:bb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ob,lights_physical_fragment:Pb,lights_physical_pars_fragment:Ib,lights_fragment_begin:zb,lights_fragment_maps:Fb,lights_fragment_end:Bb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:kb,map_fragment:Xb,map_pars_fragment:Wb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Zb,morphinstance_vertex:Qb,morphcolor_vertex:Kb,morphnormal_vertex:Jb,morphtarget_pars_vertex:$b,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:s1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:c1,iridescence_pars_fragment:u1,opaque_fragment:f1,packing:h1,premultiplied_alpha_fragment:d1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:_1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:y1,shadowmap_vertex:S1,shadowmask_pars_fragment:M1,skinbase_vertex:E1,skinning_pars_vertex:b1,skinning_vertex:T1,skinnormal_vertex:A1,specularmap_fragment:w1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:N1,uv_pars_fragment:L1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:I1,background_vert:z1,background_frag:F1,backgroundCube_vert:B1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:k1,depth_frag:X1,distance_vert:W1,distance_frag:q1,equirect_vert:Y1,equirect_frag:j1,linedashed_vert:Z1,linedashed_frag:Q1,meshbasic_vert:K1,meshbasic_frag:J1,meshlambert_vert:$1,meshlambert_frag:tT,meshmatcap_vert:eT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:hT,shadow_vert:dT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},Vt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Hi={basic:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Hn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Hn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Hn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Hn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Hn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Hn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Hn([Vt.common,Vt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Hn([Vt.lights,Vt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Hi.physical={uniforms:Hn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Zc={r:0,b:0,g:0},Ds=new qi,vT=new $e;function _T(r,t,n,a,o,c,f){const h=new Re(0);let m=c===!0?0:1,p,v,g=null,x=0,S=null;function b(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function R(U){let D=!1;const F=b(U);F===null?_(h,m):F&&F.isColor&&(_(F,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const F=b(D);F&&(F.isCubeTexture||F.mapping===ru)?(v===void 0&&(v=new on(new pl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:kr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Ds.copy(D.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(Ds)),v.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Ve,(g!==F||x!==F.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=F,x=F.version,S=r.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new on(new lu(2,2),new Yi({name:"BackgroundMaterial",uniforms:kr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Ve,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||x!==F.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=F,x=F.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,D){U.getRGB(Zc,k_(r)),a.buffers.color.setClear(Zc.r,Zc.g,Zc.b,D,f)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:R,addToRenderList:M,dispose:P}}function xT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,f=!1;function h(C,H,Q,J,ct){let rt=!1;const I=g(J,Q,H);c!==I&&(c=I,p(c.object)),rt=S(C,J,Q,ct),rt&&b(C,J,Q,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(rt||f)&&(f=!1,D(C,H,Q,J),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function g(C,H,Q){const J=Q.wireframe===!0;let ct=a[C.id];ct===void 0&&(ct={},a[C.id]=ct);let rt=ct[H.id];rt===void 0&&(rt={},ct[H.id]=rt);let I=rt[J];return I===void 0&&(I=x(m()),rt[J]=I),I}function x(C){const H=[],Q=[],J=[];for(let ct=0;ct<n;ct++)H[ct]=0,Q[ct]=0,J[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,H,Q,J){const ct=c.attributes,rt=H.attributes;let I=0;const V=Q.getAttributes();for(const nt in V)if(V[nt].location>=0){const Mt=ct[nt];let L=rt[nt];if(L===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),Mt===void 0||Mt.attribute!==L||L&&Mt.data!==L.data)return!0;I++}return c.attributesNum!==I||c.index!==J}function b(C,H,Q,J){const ct={},rt=H.attributes;let I=0;const V=Q.getAttributes();for(const nt in V)if(V[nt].location>=0){let Mt=rt[nt];Mt===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor));const L={};L.attribute=Mt,Mt&&Mt.data&&(L.data=Mt.data),ct[nt]=L,I++}c.attributes=ct,c.attributesNum=I,c.index=J}function R(){const C=c.newAttributes;for(let H=0,Q=C.length;H<Q;H++)C[H]=0}function M(C){_(C,0)}function _(C,H){const Q=c.newAttributes,J=c.enabledAttributes,ct=c.attributeDivisors;Q[C]=1,J[C]===0&&(r.enableVertexAttribArray(C),J[C]=1),ct[C]!==H&&(r.vertexAttribDivisor(C,H),ct[C]=H)}function P(){const C=c.newAttributes,H=c.enabledAttributes;for(let Q=0,J=H.length;Q<J;Q++)H[Q]!==C[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function U(C,H,Q,J,ct,rt,I){I===!0?r.vertexAttribIPointer(C,H,Q,ct,rt):r.vertexAttribPointer(C,H,Q,J,ct,rt)}function D(C,H,Q,J){R();const ct=J.attributes,rt=Q.getAttributes(),I=H.defaultAttributeValues;for(const V in rt){const nt=rt[V];if(nt.location>=0){let Et=ct[V];if(Et===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const Mt=Et.normalized,L=Et.itemSize,tt=t.get(Et);if(tt===void 0)continue;const pt=tt.buffer,wt=tt.type,Ht=tt.bytesPerElement,it=wt===r.INT||wt===r.UNSIGNED_INT||Et.gpuType===op;if(Et.isInterleavedBufferAttribute){const ht=Et.data,Dt=ht.stride,Gt=Et.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<nt.locationSize;kt++)_(nt.location+kt,ht.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<nt.locationSize;kt++)M(nt.location+kt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let kt=0;kt<nt.locationSize;kt++)U(nt.location+kt,L/nt.locationSize,wt,Mt,Dt*Ht,(Gt+L/nt.locationSize*kt)*Ht,it)}else{if(Et.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)_(nt.location+ht,Et.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let ht=0;ht<nt.locationSize;ht++)M(nt.location+ht);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ht=0;ht<nt.locationSize;ht++)U(nt.location+ht,L/nt.locationSize,wt,Mt,L*Ht,L/nt.locationSize*ht*Ht,it)}}else if(I!==void 0){const Mt=I[V];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(nt.location,Mt);break;case 3:r.vertexAttrib3fv(nt.location,Mt);break;case 4:r.vertexAttrib4fv(nt.location,Mt);break;default:r.vertexAttrib1fv(nt.location,Mt)}}}}P()}function F(){q();for(const C in a){const H=a[C];for(const Q in H){const J=H[Q];for(const ct in J)v(J[ct].object),delete J[ct];delete H[Q]}delete a[C]}}function B(C){if(a[C.id]===void 0)return;const H=a[C.id];for(const Q in H){const J=H[Q];for(const ct in J)v(J[ct].object),delete J[ct];delete H[Q]}delete a[C.id]}function z(C){for(const H in a){const Q=a[H];if(Q[C.id]===void 0)continue;const J=Q[C.id];for(const ct in J)v(J[ct].object),delete J[ct];delete Q[C.id]}}function q(){T(),f=!0,c!==o&&(c=o,p(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:q,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:M,disableUnusedAttributes:P}}function yT(r,t,n){let a;function o(p){a=p}function c(p,v){r.drawArrays(a,p,v),n.update(v,a,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(a,p,v,g),n.update(v,a,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,v,0,g);let S=0;for(let b=0;b<g;b++)S+=v[b];n.update(S,a,1)}function m(p,v,g,x){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)f(p[b],v[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,v,0,x,0,g);let b=0;for(let R=0;R<g;R++)b+=v[R]*x[R];n.update(b,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ST(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Ui&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==li&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Gi&&!q)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(de("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,maxSamples:F,samples:B}}function MT(r){const t=this;let n=null,a=0,o=!1,c=!1;const f=new Ns,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||a!==0||o;return o=x,a=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,S){const b=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,_=r.get(g);if(!o||b===null||b.length===0||c&&!M)c?v(null):p();else{const P=c?0:a,U=P*4;let D=_.clippingState||null;m.value=D,D=v(b,x,U,S);for(let F=0;F!==U;++F)D[F]=n[F];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function v(g,x,S,b){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const _=S+R*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,D=S;U!==R;++U,D+=4)f.copy(g[U]).applyMatrix4(P,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function ET(r){let t=new WeakMap;function n(f,h){return h===dd?f.mapping=Fs:h===pd&&(f.mapping=Hr),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===dd||h===pd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new q_(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const rs=4,qv=[.125,.215,.35,.446,.526,.582],Ps=20,bT=256,Zo=new Sp,Yv=new Re;let Jh=null,$h=0,td=0,ed=!1;const TT=new j;class jv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=TT}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Fs||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ea,format:Ui,colorSpace:Vr,depthBuffer:!1},o=Zv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AT(c)),this._blurMaterial=RT(c,t,n),this._ggxMaterial=wT(c,t,n)}return o}_compileMaterial(t){const n=new on(new Qn,t);this._renderer.compile(n,Zo)}_sceneToCubeUV(t,n,a,o,c){const m=new oi(90,1,n,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Yv),g.toneMapping=ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new on(new pl,new H_({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let _=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,_=!0):(M.color.copy(Yv),_=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const F=this._cubeSize;Pr(o,D*F,U>2?F:0,F,F),g.setRenderTarget(o),_&&g.render(R,m),g.render(t,m)}g.toneMapping=S,g.autoClear=x,t.background=P}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Fs||t.mapping===Hr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Pr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,Zo)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,S=g*x,{_lodMax:b}=this,R=this._sizeLods[a],M=3*R*(a>b-rs?a-b+rs:0),_=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-n,Pr(c,M,_,3*R,2*R),o.setRenderTarget(c),o.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Pr(t,M,_,3*R,2*R),o.setRenderTarget(t),o.render(h,Zo)}_blur(t,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=p;const x=p.uniforms,S=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ps-1),R=c/b,M=isFinite(c)?1+Math.floor(v*R):Ps;M>Ps&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ps}`);const _=[];let P=0;for(let z=0;z<Ps;++z){const q=z/R,T=Math.exp(-q*q/2);_.push(T),z===0?P+=T:z<M&&(P+=2*T)}for(let z=0;z<_.length;z++)_[z]=_[z]/P;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-a;const D=this._sizeLods[o],F=3*D*(o>U-rs?o-U+rs:0),B=4*(this._cubeSize-D);Pr(n,F,B,3*D,2*D),m.setRenderTarget(n),m.render(g,Zo)}}function AT(r){const t=[],n=[],a=[];let o=r;const c=r-rs+1+qv.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);t.push(h);let m=1/h;f>r-rs?m=qv[f-r+rs-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,b=6,R=3,M=2,_=1,P=new Float32Array(R*b*S),U=new Float32Array(M*b*S),D=new Float32Array(_*b*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,q=B>2?0:-1,T=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];P.set(T,R*b*B),U.set(x,M*b*B);const C=[B,B,B,B,B,B];D.set(C,_*b*B)}const F=new Qn;F.setAttribute("position",new Ni(P,R)),F.setAttribute("uv",new Ni(U,M)),F.setAttribute("faceIndex",new Ni(D,_)),a.push(new on(F,null)),o>rs&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Zv(r,t,n){const a=new Xi(r,t,n);return a.texture.mapping=ru,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Pr(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function wT(r,t,n){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function RT(r,t,n){const a=new Float32Array(Ps),o=new j(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Qv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Kv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function CT(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===dd||m===pd,v=m===Fs||m===Hr;if(p||v){let g=t.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new jv(r)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new jv(r)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function o(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function DT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ol("WebGLRenderer: "+a+" extension not supported."),o}}}function UT(r,t,n,a){const o={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete o[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(g,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,b=g.attributes.position;let R=0;if(S!==null){const P=S.array;R=S.version;for(let U=0,D=P.length;U<D;U+=3){const F=P[U+0],B=P[U+1],z=P[U+2];x.push(F,B,B,z,z,F)}}else if(b!==void 0){const P=b.array;R=b.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const F=U+0,B=U+1,z=U+2;x.push(F,B,B,z,z,F)}}else return;const M=new(P_(x)?V_:G_)(x,1);M.version=R;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function NT(r,t,n){let a;function o(x){a=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(a,S,c,x*f),n.update(S,a,1)}function p(x,S,b){b!==0&&(r.drawElementsInstanced(a,S,c,x*f,b),n.update(S,a,b))}function v(x,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,x,0,b);let M=0;for(let _=0;_<b;_++)M+=S[_];n.update(M,a,1)}function g(x,S,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,x,0,R,0,b);let _=0;for(let P=0;P<b;P++)_+=S[P]*R[P];n.update(_,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function LT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function OT(r,t,n){const a=new WeakMap,o=new an;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=a.get(h);if(x===void 0||x.count!==g){let C=function(){q.dispose(),a.delete(h),h.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let F=h.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*g),q=new I_(z,F,B,g);q.type=Gi,q.needsUpdate=!0;const T=D*4;for(let H=0;H<g;H++){const Q=_[H],J=P[H],ct=U[H],rt=F*B*4*H;for(let I=0;I<Q.count;I++){const V=I*T;b===!0&&(o.fromBufferAttribute(Q,I),z[rt+V+0]=o.x,z[rt+V+1]=o.y,z[rt+V+2]=o.z,z[rt+V+3]=0),R===!0&&(o.fromBufferAttribute(J,I),z[rt+V+4]=o.x,z[rt+V+5]=o.y,z[rt+V+6]=o.z,z[rt+V+7]=0),M===!0&&(o.fromBufferAttribute(ct,I),z[rt+V+8]=o.x,z[rt+V+9]=o.y,z[rt+V+10]=o.z,z[rt+V+11]=ct.itemSize===4?o.w:1)}}x={count:g,texture:q,size:new qt(F,B)},a.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function PT(r,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,v=m.geometry,g=t.get(m,v);if(o.get(g)!==p&&(t.update(g),o.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return g}function f(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const IT={[x_]:"LINEAR_TONE_MAPPING",[y_]:"REINHARD_TONE_MAPPING",[S_]:"CINEON_TONE_MAPPING",[M_]:"ACES_FILMIC_TONE_MAPPING",[b_]:"AGX_TONE_MAPPING",[T_]:"NEUTRAL_TONE_MAPPING",[E_]:"CUSTOM_TONE_MAPPING"};function zT(r,t,n,a,o){const c=new Xi(t,n,{type:r,depthBuffer:a,stencilBuffer:o}),f=new Xi(t,n,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),h=new Qn;h.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const m=new wE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new on(h,m),v=new Sp(-1,1,1,-1,0,1);let g=null,x=null,S=!1,b,R=null,M=[],_=!1;this.setSize=function(P,U){c.setSize(P,U),f.setSize(P,U);for(let D=0;D<M.length;D++){const F=M[D];F.setSize&&F.setSize(P,U)}},this.setEffects=function(P){M=P,_=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(U,D)}},this.begin=function(P,U){if(S||P.toneMapping===ki&&M.length===0)return!1;if(R=U,U!==null){const D=U.width,F=U.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return _===!1&&P.setRenderTarget(c),b=P.toneMapping,P.toneMapping=ki,!0},this.hasRenderPass=function(){return _},this.end=function(P,U){P.toneMapping=b,S=!0;let D=c,F=f;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(P,F,D,U),z.needsSwap!==!1)){const q=D;D=F,F=q}}if(g!==P.outputColorSpace||x!==P.toneMapping){g=P.outputColorSpace,x=P.toneMapping,m.defines={},Ue.getTransfer(g)===Ve&&(m.defines.SRGB_TRANSFER="");const B=IT[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(R),P.render(p,v),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const rx=new Gn,tp=new ll(1,1),ox=new I_,lx=new EM,cx=new W_,Jv=[],$v=[],t_=new Float32Array(16),e_=new Float32Array(9),n_=new Float32Array(4);function jr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=Jv[o];if(c===void 0&&(c=new Float32Array(o),Jv[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function vn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function uu(r,t){let n=$v[t];n===void 0&&(n=new Int32Array(t),$v[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function FT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function BT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2fv(this.addr,t),vn(n,t)}}function HT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;r.uniform3fv(this.addr,t),vn(n,t)}}function GT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4fv(this.addr,t),vn(n,t)}}function VT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(gn(n,a))return;n_.set(a),r.uniformMatrix2fv(this.addr,!1,n_),vn(n,a)}}function kT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(gn(n,a))return;e_.set(a),r.uniformMatrix3fv(this.addr,!1,e_),vn(n,a)}}function XT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(gn(n,a))return;t_.set(a),r.uniformMatrix4fv(this.addr,!1,t_),vn(n,a)}}function WT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function qT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2iv(this.addr,t),vn(n,t)}}function YT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3iv(this.addr,t),vn(n,t)}}function jT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4iv(this.addr,t),vn(n,t)}}function ZT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function QT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2uiv(this.addr,t),vn(n,t)}}function KT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3uiv(this.addr,t),vn(n,t)}}function JT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4uiv(this.addr,t),vn(n,t)}}function $T(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(tp.compareFunction=n.isReversedDepthBuffer()?pp:dp,c=tp):c=rx,n.setTexture2D(t||c,o)}function tA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||lx,o)}function eA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||cx,o)}function nA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||ox,o)}function iA(r){switch(r){case 5126:return FT;case 35664:return BT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return QT;case 36295:return KT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return nA}}function aA(r,t){r.uniform1fv(this.addr,t)}function sA(r,t){const n=jr(t,this.size,2);r.uniform2fv(this.addr,n)}function rA(r,t){const n=jr(t,this.size,3);r.uniform3fv(this.addr,n)}function oA(r,t){const n=jr(t,this.size,4);r.uniform4fv(this.addr,n)}function lA(r,t){const n=jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function cA(r,t){const n=jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function uA(r,t){const n=jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function fA(r,t){r.uniform1iv(this.addr,t)}function hA(r,t){r.uniform2iv(this.addr,t)}function dA(r,t){r.uniform3iv(this.addr,t)}function pA(r,t){r.uniform4iv(this.addr,t)}function mA(r,t){r.uniform1uiv(this.addr,t)}function gA(r,t){r.uniform2uiv(this.addr,t)}function vA(r,t){r.uniform3uiv(this.addr,t)}function _A(r,t){r.uniform4uiv(this.addr,t)}function xA(r,t,n){const a=this.cache,o=t.length,c=uu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),vn(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=tp:f=rx;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||f,c[h])}function yA(r,t,n){const a=this.cache,o=t.length,c=uu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),vn(a,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||lx,c[f])}function SA(r,t,n){const a=this.cache,o=t.length,c=uu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),vn(a,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||cx,c[f])}function MA(r,t,n){const a=this.cache,o=t.length,c=uu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),vn(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||ox,c[f])}function EA(r){switch(r){case 5126:return aA;case 35664:return sA;case 35665:return rA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return vA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}class bA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=iA(n.type)}}class TA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EA(n.type)}}class AA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function i_(r,t){r.seq.push(t),r.map[t.id]=t}function wA(r,t,n){const a=r.name,o=a.length;for(nd.lastIndex=0;;){const c=nd.exec(a),f=nd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===o){i_(n,p===void 0?new bA(h,r,t):new TA(h,r,t));break}else{let g=n.map[h];g===void 0&&(g=new AA(h),i_(n,g)),n=g}}}class nu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=t.getActiveUniform(n,f),m=t.getUniformLocation(n,h.name);wA(h,m,this)}const o=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function a_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const RA=37297;let CA=0;function DA(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const s_=new xe;function UA(r){Ue._getMatrix(s_,Ue.workingColorSpace,r);const t=`mat3( ${s_.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(r)){case iu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function r_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+DA(r.getShaderSource(t),h)}else return c}function NA(r,t){const n=UA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const LA={[x_]:"Linear",[y_]:"Reinhard",[S_]:"Cineon",[M_]:"ACESFilmic",[b_]:"AgX",[T_]:"Neutral",[E_]:"Custom"};function OA(r,t){const n=LA[t];return n===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qc=new j;function PA(){Ue.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),t=Qc.y.toFixed(4),n=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function zA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function FA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function tl(r){return r!==""}function o_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(BA,GA)}const HA=new Map;function GA(r,t){let n=ye[t];if(n===void 0){const a=HA.get(t);if(a!==void 0)n=ye[a],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return ep(n)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(r){return r.replace(VA,kA)}function kA(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function u_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const XA={[Kc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function WA(r){return XA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qA={[Fs]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function YA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":qA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const jA={[Hr]:"ENVMAP_MODE_REFRACTION"};function ZA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QA={[rp]:"ENVMAP_BLENDING_MULTIPLY",[aM]:"ENVMAP_BLENDING_MIX",[sM]:"ENVMAP_BLENDING_ADD"};function KA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":QA[r.combine]||"ENVMAP_BLENDING_NONE"}function JA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function $A(r,t,n,a){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=WA(n),p=YA(n),v=ZA(n),g=KA(n),x=JA(n),S=IA(n),b=zA(c),R=o.createProgram();let M,_,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(tl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(tl).join(`
`),_.length>0&&(_+=`
`)):(M=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),_=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?ye.tonemapping_pars_fragment:"",n.toneMapping!==ki?OA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,NA("linearToOutputTexel",n.outputColorSpace),PA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tl).join(`
`)),f=ep(f),f=o_(f,n),f=l_(f,n),h=ep(h),h=o_(h,n),h=l_(h,n),f=c_(f),h=c_(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=P+M+f,D=P+_+h,F=a_(o,o.VERTEX_SHADER,U),B=a_(o,o.FRAGMENT_SHADER,D);o.attachShader(R,F),o.attachShader(R,B),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function z(H){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(R)||"",J=o.getShaderInfoLog(F)||"",ct=o.getShaderInfoLog(B)||"",rt=Q.trim(),I=J.trim(),V=ct.trim();let nt=!0,Et=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,F,B);else{const Mt=r_(o,F,"vertex"),L=r_(o,B,"fragment");De("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+rt+`
`+Mt+`
`+L)}else rt!==""?de("WebGLProgram: Program Info Log:",rt):(I===""||V==="")&&(Et=!1);Et&&(H.diagnostics={runnable:nt,programLog:rt,vertexShader:{log:I,prefix:M},fragmentShader:{log:V,prefix:_}})}o.deleteShader(F),o.deleteShader(B),q=new nu(o,R),T=FA(o,R)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(R,RA)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=B,this}let t2=0;class e2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new n2(t),n.set(t,a)),a}}class n2{constructor(t){this.id=t2++,this.code=t,this.usedTimes=0}}function i2(r,t,n,a,o,c,f){const h=new F_,m=new e2,p=new Set,v=[],g=new Map,x=o.logarithmicDepthBuffer;let S=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,C,H,Q,J){const ct=Q.fog,rt=J.geometry,I=T.isMeshStandardMaterial?Q.environment:null,V=(T.isMeshStandardMaterial?n:t).get(T.envMap||I),nt=V&&V.mapping===ru?V.image.height:null,Et=b[T.type];T.precision!==null&&(S=o.getMaxPrecision(T.precision),S!==T.precision&&de("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const Mt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,L=Mt!==void 0?Mt.length:0;let tt=0;rt.morphAttributes.position!==void 0&&(tt=1),rt.morphAttributes.normal!==void 0&&(tt=2),rt.morphAttributes.color!==void 0&&(tt=3);let pt,wt,Ht,it;if(Et){const Ce=Hi[Et];pt=Ce.vertexShader,wt=Ce.fragmentShader}else pt=T.vertexShader,wt=T.fragmentShader,m.update(T),Ht=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Gt=J.isInstancedMesh===!0,kt=J.isBatchedMesh===!0,ge=!!T.map,be=!!T.matcap,ue=!!V,gt=!!T.aoMap,bt=!!T.lightMap,xt=!!T.bumpMap,Pt=!!T.normalMap,O=!!T.displacementMap,ne=!!T.emissiveMap,zt=!!T.metalnessMap,ae=!!T.roughnessMap,Ut=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,W=T.iridescence>0,ut=T.sheen>0,yt=T.transmission>0,ft=Ut&&!!T.anisotropyMap,Jt=N&&!!T.clearcoatMap,Lt=N&&!!T.clearcoatNormalMap,Kt=N&&!!T.clearcoatRoughnessMap,oe=W&&!!T.iridescenceMap,Tt=W&&!!T.iridescenceThicknessMap,Rt=ut&&!!T.sheenColorMap,Yt=ut&&!!T.sheenRoughnessMap,Xt=!!T.specularMap,Ot=!!T.specularColorMap,ve=!!T.specularIntensityMap,X=yt&&!!T.transmissionMap,Ft=yt&&!!T.thicknessMap,Ct=!!T.gradientMap,Wt=!!T.alphaMap,At=T.alphaTest>0,_t=!!T.alphaHash,Nt=!!T.extensions;let fe=ki;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Fe={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:pt,fragmentShader:wt,defines:T.defines,customVertexShaderID:Ht,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:kt,batchingColor:kt&&J._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,instancingMorph:Gt&&J.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Vr,alphaToCoverage:!!T.alphaToCoverage,map:ge,matcap:be,envMap:ue,envMapMode:ue&&V.mapping,envMapCubeUVHeight:nt,aoMap:gt,lightMap:bt,bumpMap:xt,normalMap:Pt,displacementMap:O,emissiveMap:ne,normalMapObjectSpace:Pt&&T.normalMapType===lM,normalMapTangentSpace:Pt&&T.normalMapType===O_,metalnessMap:zt,roughnessMap:ae,anisotropy:Ut,anisotropyMap:ft,clearcoat:N,clearcoatMap:Jt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Kt,dispersion:E,iridescence:W,iridescenceMap:oe,iridescenceThicknessMap:Tt,sheen:ut,sheenColorMap:Rt,sheenRoughnessMap:Yt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:ve,transmission:yt,transmissionMap:X,thicknessMap:Ft,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===zr&&T.alphaToCoverage===!1,alphaMap:Wt,alphaTest:At,alphaHash:_t,combine:T.combine,mapUv:ge&&R(T.map.channel),aoMapUv:gt&&R(T.aoMap.channel),lightMapUv:bt&&R(T.lightMap.channel),bumpMapUv:xt&&R(T.bumpMap.channel),normalMapUv:Pt&&R(T.normalMap.channel),displacementMapUv:O&&R(T.displacementMap.channel),emissiveMapUv:ne&&R(T.emissiveMap.channel),metalnessMapUv:zt&&R(T.metalnessMap.channel),roughnessMapUv:ae&&R(T.roughnessMap.channel),anisotropyMapUv:ft&&R(T.anisotropyMap.channel),clearcoatMapUv:Jt&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&R(T.sheenRoughnessMap.channel),specularMapUv:Xt&&R(T.specularMap.channel),specularColorMapUv:Ot&&R(T.specularColorMap.channel),specularIntensityMapUv:ve&&R(T.specularIntensityMap.channel),transmissionMapUv:X&&R(T.transmissionMap.channel),thicknessMapUv:Ft&&R(T.thicknessMap.channel),alphaMapUv:Wt&&R(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Pt||Ut),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!rt.attributes.uv&&(ge||Wt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Dt,skinning:J.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:ge&&T.map.isVideoTexture===!0&&Ue.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xa,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||kt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function _(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)C.push(H),C.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(P(C,T),U(C,T),C.push(r.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function P(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function U(T,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),T.push(h.mask)}function D(T){const C=b[T.type];let H;if(C){const Q=Hi[C];H=IM.clone(Q.uniforms)}else H=T.uniforms;return H}function F(T,C){let H=g.get(C);return H!==void 0?++H.usedTimes:(H=new $A(r,C,T,c),v.push(H),g.set(C,H)),H}function B(T){if(--T.usedTimes===0){const C=v.indexOf(T);v[C]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){m.remove(T)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:z,programs:v,dispose:q}}function a2(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function s2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function f_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function h_(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function f(g,x,S,b,R,M){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:b,renderOrder:g.renderOrder,z:R,group:M},r[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=R,_.group=M),t++,_}function h(g,x,S,b,R,M){const _=f(g,x,S,b,R,M);S.transmission>0?a.push(_):S.transparent===!0?o.push(_):n.push(_)}function m(g,x,S,b,R,M){const _=f(g,x,S,b,R,M);S.transmission>0?a.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function p(g,x){n.length>1&&n.sort(g||s2),a.length>1&&a.sort(x||f_),o.length>1&&o.sort(x||f_)}function v(){for(let g=t,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:v,sort:p}}function r2(){let r=new WeakMap;function t(a,o){const c=r.get(a);let f;return c===void 0?(f=new h_,r.set(a,[f])):o>=c.length?(f=new h_,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function o2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Re};break;case"SpotLight":n={position:new j,direction:new j,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=n,n}}}function l2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let c2=0;function u2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function f2(r){const t=new o2,n=l2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new j);const o=new j,c=new $e,f=new $e;function h(p){let v=0,g=0,x=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let S=0,b=0,R=0,M=0,_=0,P=0,U=0,D=0,F=0,B=0,z=0;p.sort(u2);for(let T=0,C=p.length;T<C;T++){const H=p[T],Q=H.color,J=H.intensity,ct=H.distance;let rt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gr?rt=H.shadow.map.texture:rt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Q.r*J,g+=Q.g*J,x+=Q.b*J;else if(H.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(H.sh.coefficients[I],J);z++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,nt=n.get(H);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,a.directionalShadow[S]=nt,a.directionalShadowMap[S]=rt,a.directionalShadowMatrix[S]=H.shadow.matrix,P++}a.directional[S]=I,S++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(Q).multiplyScalar(J),I.distance=ct,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,a.spot[R]=I;const V=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,V.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[R]=V.matrix,H.castShadow){const nt=n.get(H);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,a.spotShadow[R]=nt,a.spotShadowMap[R]=rt,D++}R++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(Q).multiplyScalar(J),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=I,M++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const V=H.shadow,nt=n.get(H);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,nt.shadowCameraNear=V.camera.near,nt.shadowCameraFar=V.camera.far,a.pointShadow[b]=nt,a.pointShadowMap[b]=rt,a.pointShadowMatrix[b]=H.shadow.matrix,U++}a.point[b]=I,b++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(J),I.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[_]=I,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Vt.LTC_FLOAT_1,a.rectAreaLTC2=Vt.LTC_FLOAT_2):(a.rectAreaLTC1=Vt.LTC_HALF_1,a.rectAreaLTC2=Vt.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=g,a.ambient[2]=x;const q=a.hash;(q.directionalLength!==S||q.pointLength!==b||q.spotLength!==R||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==P||q.numPointShadows!==U||q.numSpotShadows!==D||q.numSpotMaps!==F||q.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=R,a.rectArea.length=M,a.point.length=b,a.hemi.length=_,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=D+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,q.directionalLength=S,q.pointLength=b,q.spotLength=R,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=P,q.numPointShadows=U,q.numSpotShadows=D,q.numSpotMaps=F,q.numLightProbes=z,a.version=c2++)}function m(p,v){let g=0,x=0,S=0,b=0,R=0;const M=v.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const U=p[_];if(U.isDirectionalLight){const D=a.directional[g];D.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),g++}else if(U.isSpotLight){const D=a.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=a.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const D=a.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const D=a.hemi[R];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:a}}function d_(r){const t=new f2(r),n=[],a=[];function o(v){p.camera=v,n.length=0,a.length=0}function c(v){n.push(v)}function f(v){a.push(v)}function h(){t.setup(n)}function m(v){t.setupView(n,v)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function h2(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new d_(r),t.set(o,[h])):c>=f.length?(h=new d_(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const d2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`,m2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],g2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],p_=new $e,Qo=new j,id=new j;function v2(r,t,n){let a=new gp;const o=new qt,c=new qt,f=new an,h=new RE,m=new CE,p={},v=n.maxTextureSize,g={[os]:Zn,[Zn]:os,[xa]:xa},x=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:d2,fragmentShader:p2}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Qn;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new on(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let _=this.type;this.render=function(B,z,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===__&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Kc);const T=r.getRenderTarget(),C=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Sa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=_!==this.type;J&&z.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(rt=>rt.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,rt=B.length;ct<rt;ct++){const I=B[ct],V=I.shadow;if(V===void 0){de("WebGLShadowMap:",I,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const nt=V.getFrameExtents();if(o.multiply(nt),c.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/nt.x),o.x=c.x*nt.x,V.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/nt.y),o.y=c.y*nt.y,V.mapSize.y=c.y)),V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ko){if(I.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xi(o.x,o.y,{format:Gr,type:Ea,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=I.name+".shadowMap",V.map.depthTexture=new ll(o.x,o.y,Gi),V.map.depthTexture.name=I.name+".shadowMapDepth",V.map.depthTexture.format=ba,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un}else{I.isPointLight?(V.map=new q_(o.x),V.map.depthTexture=new YM(o.x,Wi)):(V.map=new Xi(o.x,o.y),V.map.depthTexture=new ll(o.x,o.y,Wi)),V.map.depthTexture.name=I.name+".shadowMap",V.map.depthTexture.format=ba;const Mt=r.state.buffers.depth.getReversed();this.type===Kc?(V.map.depthTexture.compareFunction=Mt?pp:dp,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un)}V.camera.updateProjectionMatrix()}const Et=V.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<Et;Mt++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(V.map),r.clear());const L=V.getViewport(Mt);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),Q.viewport(f)}if(I.isPointLight){const L=V.camera,tt=V.matrix,pt=I.distance||L.far;pt!==L.far&&(L.far=pt,L.updateProjectionMatrix()),Qo.setFromMatrixPosition(I.matrixWorld),L.position.copy(Qo),id.copy(L.position),id.add(m2[Mt]),L.up.copy(g2[Mt]),L.lookAt(id),L.updateMatrixWorld(),tt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),p_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),V._frustum.setFromProjectionMatrix(p_,L.coordinateSystem,L.reversedDepth)}else V.updateMatrices(I);a=V.getFrustum(),D(z,q,V.camera,I,this.type)}V.isPointLightShadow!==!0&&this.type===Ko&&P(V,q),V.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(T,C,H)};function P(B,z){const q=t.update(R);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Xi(o.x,o.y,{format:Gr,type:Ea})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,q,x,R,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,q,S,R,null)}function U(B,z,q,T){let C=null;const H=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)C=H;else if(C=q.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=C.uuid,J=z.uuid;let ct=p[Q];ct===void 0&&(ct={},p[Q]=ct);let rt=ct[J];rt===void 0&&(rt=C.clone(),ct[J]=rt,z.addEventListener("dispose",F)),C=rt}if(C.visible=z.visible,C.wireframe=z.wireframe,T===Ko?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=r.properties.get(C);Q.light=q}return C}function D(B,z,q,T,C){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ko)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const J=t.update(B),ct=B.material;if(Array.isArray(ct)){const rt=J.groups;for(let I=0,V=rt.length;I<V;I++){const nt=rt[I],Et=ct[nt.materialIndex];if(Et&&Et.visible){const Mt=U(B,Et,T,C);B.onBeforeShadow(r,B,z,q,J,Mt,nt),r.renderBufferDirect(q,null,J,Mt,B,nt),B.onAfterShadow(r,B,z,q,J,Mt,nt)}}}else if(ct.visible){const rt=U(B,ct,T,C);B.onBeforeShadow(r,B,z,q,J,rt,null),r.renderBufferDirect(q,null,J,rt,B,null),B.onAfterShadow(r,B,z,q,J,rt,null)}}const Q=B.children;for(let J=0,ct=Q.length;J<ct;J++)D(Q[J],z,q,T,C)}function F(B){B.target.removeEventListener("dispose",F);for(const q in p){const T=p[q],C=B.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const _2={[rd]:od,[ld]:fd,[cd]:hd,[Br]:ud,[od]:rd,[fd]:ld,[hd]:cd,[ud]:Br};function x2(r,t){function n(){let X=!1;const Ft=new an;let Ct=null;const Wt=new an(0,0,0,0);return{setMask:function(At){Ct!==At&&!X&&(r.colorMask(At,At,At,At),Ct=At)},setLocked:function(At){X=At},setClear:function(At,_t,Nt,fe,Fe){Fe===!0&&(At*=fe,_t*=fe,Nt*=fe),Ft.set(At,_t,Nt,fe),Wt.equals(Ft)===!1&&(r.clearColor(At,_t,Nt,fe),Wt.copy(Ft))},reset:function(){X=!1,Ct=null,Wt.set(-1,0,0,0)}}}function a(){let X=!1,Ft=!1,Ct=null,Wt=null,At=null;return{setReversed:function(_t){if(Ft!==_t){const Nt=t.get("EXT_clip_control");_t?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),Ft=_t;const fe=At;At=null,this.setClear(fe)}},getReversed:function(){return Ft},setTest:function(_t){_t?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!X&&(r.depthMask(_t),Ct=_t)},setFunc:function(_t){if(Ft&&(_t=_2[_t]),Wt!==_t){switch(_t){case rd:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Wt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){At!==_t&&(Ft&&(_t=1-_t),r.clearDepth(_t),At=_t)},reset:function(){X=!1,Ct=null,Wt=null,At=null,Ft=!1}}}function o(){let X=!1,Ft=null,Ct=null,Wt=null,At=null,_t=null,Nt=null,fe=null,Fe=null;return{setTest:function(Ce){X||(Ce?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ce){Ft!==Ce&&!X&&(r.stencilMask(Ce),Ft=Ce)},setFunc:function(Ce,On,Si){(Ct!==Ce||Wt!==On||At!==Si)&&(r.stencilFunc(Ce,On,Si),Ct=Ce,Wt=On,At=Si)},setOp:function(Ce,On,Si){(_t!==Ce||Nt!==On||fe!==Si)&&(r.stencilOp(Ce,On,Si),_t=Ce,Nt=On,fe=Si)},setLocked:function(Ce){X=Ce},setClear:function(Ce){Fe!==Ce&&(r.clearStencil(Ce),Fe=Ce)},reset:function(){X=!1,Ft=null,Ct=null,Wt=null,At=null,_t=null,Nt=null,fe=null,Fe=null}}}const c=new n,f=new a,h=new o,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,S=[],b=null,R=!1,M=null,_=null,P=null,U=null,D=null,F=null,B=null,z=new Re(0,0,0),q=0,T=!1,C=null,H=null,Q=null,J=null,ct=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(nt)[1]),I=V>=1):nt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),I=V>=2);let Et=null,Mt={};const L=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),pt=new an().fromArray(L),wt=new an().fromArray(tt);function Ht(X,Ft,Ct,Wt){const At=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<Ct;Nt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Wt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Ft+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return _t}const it={};it[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Br),xt(!1),Pt(fv),ht(r.CULL_FACE),gt(Sa);function ht(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Dt(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Gt(X,Ft){return g[X]!==Ft?(r.bindFramebuffer(X,Ft),g[X]=Ft,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ft),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function kt(X,Ft){let Ct=S,Wt=!1;if(X){Ct=x.get(Ft),Ct===void 0&&(Ct=[],x.set(Ft,Ct));const At=X.textures;if(Ct.length!==At.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Nt=At.length;_t<Nt;_t++)Ct[_t]=r.COLOR_ATTACHMENT0+_t;Ct.length=At.length,Wt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Wt=!0);Wt&&r.drawBuffers(Ct)}function ge(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const be={[Ls]:r.FUNC_ADD,[GS]:r.FUNC_SUBTRACT,[VS]:r.FUNC_REVERSE_SUBTRACT};be[kS]=r.MIN,be[XS]=r.MAX;const ue={[WS]:r.ZERO,[qS]:r.ONE,[YS]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[$S]:r.SRC_ALPHA_SATURATE,[KS]:r.DST_COLOR,[ZS]:r.DST_ALPHA,[jS]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[JS]:r.ONE_MINUS_DST_COLOR,[QS]:r.ONE_MINUS_DST_ALPHA,[tM]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[nM]:r.CONSTANT_ALPHA,[iM]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(X,Ft,Ct,Wt,At,_t,Nt,fe,Fe,Ce){if(X===Sa){R===!0&&(Dt(r.BLEND),R=!1);return}if(R===!1&&(ht(r.BLEND),R=!0),X!==HS){if(X!==M||Ce!==T){if((_!==Ls||D!==Ls)&&(r.blendEquation(r.FUNC_ADD),_=Ls,D=Ls),Ce)switch(X){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hv:r.blendFunc(r.ONE,r.ONE);break;case dv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",X);break}else switch(X){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",X);break}P=null,U=null,F=null,B=null,z.set(0,0,0),q=0,M=X,T=Ce}return}At=At||Ft,_t=_t||Ct,Nt=Nt||Wt,(Ft!==_||At!==D)&&(r.blendEquationSeparate(be[Ft],be[At]),_=Ft,D=At),(Ct!==P||Wt!==U||_t!==F||Nt!==B)&&(r.blendFuncSeparate(ue[Ct],ue[Wt],ue[_t],ue[Nt]),P=Ct,U=Wt,F=_t,B=Nt),(fe.equals(z)===!1||Fe!==q)&&(r.blendColor(fe.r,fe.g,fe.b,Fe),z.copy(fe),q=Fe),M=X,T=!1}function bt(X,Ft){X.side===xa?Dt(r.CULL_FACE):ht(r.CULL_FACE);let Ct=X.side===Zn;Ft&&(Ct=!Ct),xt(Ct),X.blending===zr&&X.transparent===!1?gt(Sa):gt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Wt=X.stencilWrite;h.setTest(Wt),Wt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ne(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function Pt(X){X!==FS?(ht(r.CULL_FACE),X!==H&&(X===fv?r.cullFace(r.BACK):X===BS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),H=X}function O(X){X!==Q&&(I&&r.lineWidth(X),Q=X)}function ne(X,Ft,Ct){X?(ht(r.POLYGON_OFFSET_FILL),(J!==Ft||ct!==Ct)&&(r.polygonOffset(Ft,Ct),J=Ft,ct=Ct)):Dt(r.POLYGON_OFFSET_FILL)}function zt(X){X?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ae(X){X===void 0&&(X=r.TEXTURE0+rt-1),Et!==X&&(r.activeTexture(X),Et=X)}function Ut(X,Ft,Ct){Ct===void 0&&(Et===null?Ct=r.TEXTURE0+rt-1:Ct=Et);let Wt=Mt[Ct];Wt===void 0&&(Wt={type:void 0,texture:void 0},Mt[Ct]=Wt),(Wt.type!==X||Wt.texture!==Ft)&&(Et!==Ct&&(r.activeTexture(Ct),Et=Ct),r.bindTexture(X,Ft||it[X]),Wt.type=X,Wt.texture=Ft)}function N(){const X=Mt[Et];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function ut(){try{r.texSubImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function yt(){try{r.texSubImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Jt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function Lt(){try{r.texStorage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Kt(){try{r.texStorage3D(...arguments)}catch(X){De("WebGLState:",X)}}function oe(){try{r.texImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Tt(){try{r.texImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function Rt(X){pt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),pt.copy(X))}function Yt(X){wt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function Xt(X,Ft){let Ct=p.get(Ft);Ct===void 0&&(Ct=new WeakMap,p.set(Ft,Ct));let Wt=Ct.get(X);Wt===void 0&&(Wt=r.getUniformBlockIndex(Ft,X.name),Ct.set(X,Wt))}function Ot(X,Ft){const Wt=p.get(Ft).get(X);m.get(Ft)!==Wt&&(r.uniformBlockBinding(Ft,Wt,X.__bindingPointIndex),m.set(Ft,Wt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Et=null,Mt={},g={},x=new WeakMap,S=[],b=null,R=!1,M=null,_=null,P=null,U=null,D=null,F=null,B=null,z=new Re(0,0,0),q=0,T=!1,C=null,H=null,Q=null,J=null,ct=null,pt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Dt,bindFramebuffer:Gt,drawBuffers:kt,useProgram:ge,setBlending:gt,setMaterial:bt,setFlipSided:xt,setCullFace:Pt,setLineWidth:O,setPolygonOffset:ne,setScissorTest:zt,activeTexture:ae,bindTexture:Ut,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:oe,texImage3D:Tt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:Kt,texSubImage2D:ut,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Jt,scissor:Rt,viewport:Yt,reset:ve}}function y2(r,t,n,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return S?new OffscreenCanvas(N,E):su("canvas")}function R(N,E,W){let ut=1;const yt=Ut(N);if((yt.width>W||yt.height>W)&&(ut=W/Math.max(yt.width,yt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(ut*yt.width),Jt=Math.floor(ut*yt.height);g===void 0&&(g=b(ft,Jt));const Lt=E?b(ft,Jt):g;return Lt.width=ft,Lt.height=Jt,Lt.getContext("2d").drawImage(N,0,0,ft,Jt),de("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Jt+")."),Lt}else return"data"in N&&de("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,E,W,ut,yt=!1){if(N!==null){if(r[N]!==void 0)return r[N];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=E;if(E===r.RED&&(W===r.FLOAT&&(ft=r.R32F),W===r.HALF_FLOAT&&(ft=r.R16F),W===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.R8UI),W===r.UNSIGNED_SHORT&&(ft=r.R16UI),W===r.UNSIGNED_INT&&(ft=r.R32UI),W===r.BYTE&&(ft=r.R8I),W===r.SHORT&&(ft=r.R16I),W===r.INT&&(ft=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ft=r.RG32F),W===r.HALF_FLOAT&&(ft=r.RG16F),W===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RG8UI),W===r.UNSIGNED_SHORT&&(ft=r.RG16UI),W===r.UNSIGNED_INT&&(ft=r.RG32UI),W===r.BYTE&&(ft=r.RG8I),W===r.SHORT&&(ft=r.RG16I),W===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),W===r.UNSIGNED_INT&&(ft=r.RGB32UI),W===r.BYTE&&(ft=r.RGB8I),W===r.SHORT&&(ft=r.RGB16I),W===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),W===r.UNSIGNED_INT&&(ft=r.RGBA32UI),W===r.BYTE&&(ft=r.RGBA8I),W===r.SHORT&&(ft=r.RGBA16I),W===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const Jt=yt?iu:Ue.getTransfer(ut);W===r.FLOAT&&(ft=r.RGBA32F),W===r.HALF_FLOAT&&(ft=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ft=Jt===Ve?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(N,E){let W;return N?E===null||E===Wi||E===rl?W=r.DEPTH24_STENCIL8:E===Gi?W=r.DEPTH32F_STENCIL8:E===sl&&(W=r.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===rl?W=r.DEPTH_COMPONENT24:E===Gi?W=r.DEPTH_COMPONENT32F:E===sl&&(W=r.DEPTH_COMPONENT16),W}function F(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Un&&N.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function B(N){const E=N.target;E.removeEventListener("dispose",B),q(E),E.isVideoTexture&&v.delete(E)}function z(N){const E=N.target;E.removeEventListener("dispose",z),C(E)}function q(N){const E=a.get(N);if(E.__webglInit===void 0)return;const W=N.source,ut=x.get(W);if(ut){const yt=ut[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&T(N),Object.keys(ut).length===0&&x.delete(W)}a.remove(N)}function T(N){const E=a.get(N);r.deleteTexture(E.__webglTexture);const W=N.source,ut=x.get(W);delete ut[E.__cacheKey],f.memory.textures--}function C(N){const E=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let yt=0;yt<E.__webglFramebuffer[ut].length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[ut][yt]);else r.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[ut]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=N.textures;for(let ut=0,yt=W.length;ut<yt;ut++){const ft=a.get(W[ut]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),a.remove(W[ut])}a.remove(N)}let H=0;function Q(){H=0}function J(){const N=H;return N>=o.maxTextures&&de("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ct(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function rt(N,E){const W=a.get(N);if(N.isVideoTexture&&zt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const ut=N.image;if(ut===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,N,E);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function I(N,E){const W=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,E);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function V(N,E){const W=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,E);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function nt(N,E){const W=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ht(W,N,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const Et={[md]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},Mt={[Un]:r.NEAREST,[rM]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Eh]:r.LINEAR_MIPMAP_NEAREST,[Is]:r.LINEAR_MIPMAP_LINEAR},L={[cM]:r.NEVER,[pM]:r.ALWAYS,[uM]:r.LESS,[dp]:r.LEQUAL,[fM]:r.EQUAL,[pp]:r.GEQUAL,[hM]:r.GREATER,[dM]:r.NOTEQUAL};function tt(N,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Eh||E.magFilter===Ac||E.magFilter===Is||E.minFilter===Fn||E.minFilter===Eh||E.minFilter===Ac||E.minFilter===Is)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Et[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Et[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Et[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Mt[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Ac&&E.minFilter!==Is||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function pt(N,E){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",B));const ut=E.source;let yt=x.get(ut);yt===void 0&&(yt={},x.set(ut,yt));const ft=ct(E);if(ft!==N.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),yt[ft].usedTimes++;const Jt=yt[N.__cacheKey];Jt!==void 0&&(yt[N.__cacheKey].usedTimes--,Jt.usedTimes===0&&T(E)),N.__cacheKey=ft,N.__webglTexture=yt[ft].texture}return W}function wt(N,E,W){return Math.floor(Math.floor(N/W)/E)}function Ht(N,E,W,ut){const ft=N.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,ut,E.data);else{ft.sort((Tt,Rt)=>Tt.start-Rt.start);let Jt=0;for(let Tt=1;Tt<ft.length;Tt++){const Rt=ft[Jt],Yt=ft[Tt],Xt=Rt.start+Rt.count,Ot=wt(Yt.start,E.width,4),ve=wt(Rt.start,E.width,4);Yt.start<=Xt+1&&Ot===ve&&wt(Yt.start+Yt.count-1,E.width,4)===Ot?Rt.count=Math.max(Rt.count,Yt.start+Yt.count-Rt.start):(++Jt,ft[Jt]=Yt)}ft.length=Jt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,Rt=ft.length;Tt<Rt;Tt++){const Yt=ft[Tt],Xt=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),ve=Xt%E.width,X=Math.floor(Xt/E.width),Ft=Ot,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,ve,X,Ft,Ct,W,ut,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function it(N,E,W){let ut=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=r.TEXTURE_3D);const yt=pt(N,E),ft=E.source;n.bindTexture(ut,N.__webglTexture,r.TEXTURE0+W);const Jt=a.get(ft);if(ft.version!==Jt.__version||yt===!0){n.activeTexture(r.TEXTURE0+W);const Lt=Ue.getPrimaries(Ue.workingColorSpace),Kt=E.colorSpace===as?null:Ue.getPrimaries(E.colorSpace),oe=E.colorSpace===as||Lt===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Tt=R(E.image,!1,o.maxTextureSize);Tt=ae(E,Tt);const Rt=c.convert(E.format,E.colorSpace),Yt=c.convert(E.type);let Xt=U(E.internalFormat,Rt,Yt,E.colorSpace,E.isVideoTexture);tt(ut,E);let Ot;const ve=E.mipmaps,X=E.isVideoTexture!==!0,Ft=Jt.__version===void 0||yt===!0,Ct=ft.dataReady,Wt=F(E,Tt);if(E.isDepthTexture)Xt=D(E.format===zs,E.type),Ft&&(X?n.texStorage2D(r.TEXTURE_2D,1,Xt,Tt.width,Tt.height):n.texImage2D(r.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Rt,Yt,null));else if(E.isDataTexture)if(ve.length>0){X&&Ft&&n.texStorage2D(r.TEXTURE_2D,Wt,Xt,ve[0].width,ve[0].height);for(let At=0,_t=ve.length;At<_t;At++)Ot=ve[At],X?Ct&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Rt,Yt,Ot.data):n.texImage2D(r.TEXTURE_2D,At,Xt,Ot.width,Ot.height,0,Rt,Yt,Ot.data);E.generateMipmaps=!1}else X?(Ft&&n.texStorage2D(r.TEXTURE_2D,Wt,Xt,Tt.width,Tt.height),Ct&&Ht(E,Tt,Rt,Yt)):n.texImage2D(r.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Rt,Yt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ft&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,Xt,ve[0].width,ve[0].height,Tt.depth);for(let At=0,_t=ve.length;At<_t;At++)if(Ot=ve[At],E.format!==Ui)if(Rt!==null)if(X){if(Ct)if(E.layerUpdates.size>0){const Nt=Wv(Ot.width,Ot.height,E.format,E.type);for(const fe of E.layerUpdates){const Fe=Ot.data.subarray(fe*Nt/Ot.data.BYTES_PER_ELEMENT,(fe+1)*Nt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,fe,Ot.width,Ot.height,1,Rt,Fe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ot.width,Ot.height,Tt.depth,Rt,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Xt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ot.width,Ot.height,Tt.depth,Rt,Yt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,Xt,Ot.width,Ot.height,Tt.depth,0,Rt,Yt,Ot.data)}else{X&&Ft&&n.texStorage2D(r.TEXTURE_2D,Wt,Xt,ve[0].width,ve[0].height);for(let At=0,_t=ve.length;At<_t;At++)Ot=ve[At],E.format!==Ui?Rt!==null?X?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Rt,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,At,Xt,Ot.width,Ot.height,0,Ot.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Rt,Yt,Ot.data):n.texImage2D(r.TEXTURE_2D,At,Xt,Ot.width,Ot.height,0,Rt,Yt,Ot.data)}else if(E.isDataArrayTexture)if(X){if(Ft&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,Xt,Tt.width,Tt.height,Tt.depth),Ct)if(E.layerUpdates.size>0){const At=Wv(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const Nt=Tt.data.subarray(_t*At/Tt.data.BYTES_PER_ELEMENT,(_t+1)*At/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Rt,Yt,Nt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,Yt,Tt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Tt.width,Tt.height,Tt.depth,0,Rt,Yt,Tt.data);else if(E.isData3DTexture)X?(Ft&&n.texStorage3D(r.TEXTURE_3D,Wt,Xt,Tt.width,Tt.height,Tt.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,Yt,Tt.data)):n.texImage3D(r.TEXTURE_3D,0,Xt,Tt.width,Tt.height,Tt.depth,0,Rt,Yt,Tt.data);else if(E.isFramebufferTexture){if(Ft)if(X)n.texStorage2D(r.TEXTURE_2D,Wt,Xt,Tt.width,Tt.height);else{let At=Tt.width,_t=Tt.height;for(let Nt=0;Nt<Wt;Nt++)n.texImage2D(r.TEXTURE_2D,Nt,Xt,At,_t,0,Rt,Yt,null),At>>=1,_t>>=1}}else if(ve.length>0){if(X&&Ft){const At=Ut(ve[0]);n.texStorage2D(r.TEXTURE_2D,Wt,Xt,At.width,At.height)}for(let At=0,_t=ve.length;At<_t;At++)Ot=ve[At],X?Ct&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Rt,Yt,Ot):n.texImage2D(r.TEXTURE_2D,At,Xt,Rt,Yt,Ot);E.generateMipmaps=!1}else if(X){if(Ft){const At=Ut(Tt);n.texStorage2D(r.TEXTURE_2D,Wt,Xt,At.width,At.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Yt,Tt)}else n.texImage2D(r.TEXTURE_2D,0,Xt,Rt,Yt,Tt);M(E)&&_(ut),Jt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ht(N,E,W){if(E.image.length!==6)return;const ut=pt(N,E),yt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const ft=a.get(yt);if(yt.version!==ft.__version||ut===!0){n.activeTexture(r.TEXTURE0+W);const Jt=Ue.getPrimaries(Ue.workingColorSpace),Lt=E.colorSpace===as?null:Ue.getPrimaries(E.colorSpace),Kt=E.colorSpace===as||Jt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let _t=0;_t<6;_t++)!oe&&!Tt?Rt[_t]=R(E.image[_t],!0,o.maxCubemapSize):Rt[_t]=Tt?E.image[_t].image:E.image[_t],Rt[_t]=ae(E,Rt[_t]);const Yt=Rt[0],Xt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),ve=U(E.internalFormat,Xt,Ot,E.colorSpace),X=E.isVideoTexture!==!0,Ft=ft.__version===void 0||ut===!0,Ct=yt.dataReady;let Wt=F(E,Yt);tt(r.TEXTURE_CUBE_MAP,E);let At;if(oe){X&&Ft&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Wt,ve,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){At=Rt[_t].mipmaps;for(let Nt=0;Nt<At.length;Nt++){const fe=At[Nt];E.format!==Ui?Xt!==null?X?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,0,0,fe.width,fe.height,Xt,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,ve,fe.width,fe.height,0,fe.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,0,0,fe.width,fe.height,Xt,Ot,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,ve,fe.width,fe.height,0,Xt,Ot,fe.data)}}}else{if(At=E.mipmaps,X&&Ft){At.length>0&&Wt++;const _t=Ut(Rt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Wt,ve,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Rt[_t].width,Rt[_t].height,Xt,Ot,Rt[_t].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ve,Rt[_t].width,Rt[_t].height,0,Xt,Ot,Rt[_t].data);for(let Nt=0;Nt<At.length;Nt++){const Fe=At[Nt].image[_t].image;X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,0,0,Fe.width,Fe.height,Xt,Ot,Fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,ve,Fe.width,Fe.height,0,Xt,Ot,Fe.data)}}else{X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ot,Rt[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ve,Xt,Ot,Rt[_t]);for(let Nt=0;Nt<At.length;Nt++){const fe=At[Nt];X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,0,0,Xt,Ot,fe.image[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,ve,Xt,Ot,fe.image[_t])}}}M(E)&&_(r.TEXTURE_CUBE_MAP),ft.__version=yt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Dt(N,E,W,ut,yt,ft){const Jt=c.convert(W.format,W.colorSpace),Lt=c.convert(W.type),Kt=U(W.internalFormat,Jt,Lt,W.colorSpace),oe=a.get(E),Tt=a.get(W);if(Tt.__renderTarget=E,!oe.__hasExternalTextures){const Rt=Math.max(1,E.width>>ft),Yt=Math.max(1,E.height>>ft);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?n.texImage3D(yt,ft,Kt,Rt,Yt,E.depth,0,Jt,Lt,null):n.texImage2D(yt,ft,Kt,Rt,Yt,0,Jt,Lt,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),ne(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,yt,Tt.__webglTexture,0,O(E)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,yt,Tt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(N,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,yt=ut&&ut.isDepthTexture?ut.type:null,ft=D(E.stencilBuffer,yt),Jt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(E),ft,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(E),ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Jt,r.RENDERBUFFER,N)}else{const ut=E.textures;for(let yt=0;yt<ut.length;yt++){const ft=ut[yt],Jt=c.convert(ft.format,ft.colorSpace),Lt=c.convert(ft.type),Kt=U(ft.internalFormat,Jt,Lt,ft.colorSpace);ne(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(E),Kt,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(E),Kt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(N,E,W){const ut=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,E.depthTexture);const oe=c.convert(E.depthTexture.format),Tt=c.convert(E.depthTexture.type);let Rt;E.depthTexture.format===ba?Rt=r.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(Rt=r.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Rt,E.width,E.height,0,oe,Tt,null)}}else rt(E.depthTexture,0);const ft=yt.__webglTexture,Jt=O(E),Lt=ut?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Kt=E.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)ne(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Lt,ft,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Lt,ft,0);else if(E.depthTexture.format===zs)ne(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Lt,ft,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Lt,ft,0);else throw new Error("Unknown depthTexture format")}function ge(N){const E=a.get(N),W=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",yt)};ut.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ut=0;ut<6;ut++)kt(E.__webglFramebuffer[ut],N,ut);else{const ut=N.texture.mipmaps;ut&&ut.length>0?kt(E.__webglFramebuffer[0],N,0):kt(E.__webglFramebuffer,N,0)}else if(W){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=r.createRenderbuffer(),Gt(E.__webglDepthbuffer[ut],N,!1);else{const yt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Gt(E.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function be(N,E,W){const ut=a.get(N);E!==void 0&&Dt(ut.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ge(N)}function ue(N){const E=N.texture,W=a.get(N),ut=a.get(E);N.addEventListener("dispose",z);const yt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Jt=yt.length>1;if(Jt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=E.version,f.memory.textures++),ft){W.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Lt]=[];for(let Kt=0;Kt<E.mipmaps.length;Kt++)W.__webglFramebuffer[Lt][Kt]=r.createFramebuffer()}else W.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)W.__webglFramebuffer[Lt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Jt)for(let Lt=0,Kt=yt.length;Lt<Kt;Lt++){const oe=a.get(yt[Lt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&ne(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Lt=0;Lt<yt.length;Lt++){const Kt=yt[Lt];W.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Lt]);const oe=c.convert(Kt.format,Kt.colorSpace),Tt=c.convert(Kt.type),Rt=U(Kt.internalFormat,oe,Tt,Kt.colorSpace,N.isXRRenderTarget===!0),Yt=O(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Rt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,W.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),tt(r.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)Dt(W.__webglFramebuffer[Lt][Kt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Kt);else Dt(W.__webglFramebuffer[Lt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(E)&&_(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Jt){for(let Lt=0,Kt=yt.length;Lt<Kt;Lt++){const oe=yt[Lt],Tt=a.get(oe);let Rt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Tt.__webglTexture),tt(Rt,oe),Dt(W.__webglFramebuffer,N,oe,r.COLOR_ATTACHMENT0+Lt,Rt,0),M(oe)&&_(Rt)}n.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,ut.__webglTexture),tt(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)Dt(W.__webglFramebuffer[Kt],N,E,r.COLOR_ATTACHMENT0,Lt,Kt);else Dt(W.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Lt,0);M(E)&&_(Lt),n.unbindTexture()}N.depthBuffer&&ge(N)}function gt(N){const E=N.textures;for(let W=0,ut=E.length;W<ut;W++){const yt=E[W];if(M(yt)){const ft=P(N),Jt=a.get(yt).__webglTexture;n.bindTexture(ft,Jt),_(ft),n.unbindTexture()}}}const bt=[],xt=[];function Pt(N){if(N.samples>0){if(ne(N)===!1){const E=N.textures,W=N.width,ut=N.height;let yt=r.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Jt=a.get(N),Lt=E.length>1;if(Lt)for(let oe=0;oe<E.length;oe++)n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const Kt=N.texture.mipmaps;Kt&&Kt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[oe]);const Tt=a.get(E[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,W,ut,0,0,W,ut,yt,r.NEAREST),m===!0&&(bt.length=0,xt.length=0,bt.push(r.COLOR_ATTACHMENT0+oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(bt.push(ft),xt.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let oe=0;oe<E.length;oe++){n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[oe]);const Tt=a.get(E[oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Tt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function O(N){return Math.min(o.maxSamples,N.samples)}function ne(N){const E=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(N){const E=f.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function ae(N,E){const W=N.colorSpace,ut=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Vr&&W!==as&&(Ue.getTransfer(W)===Ve?(ut!==Ui||yt!==li)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",W)),E}function Ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=nt,this.rebindTextures=be,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function S2(r,t){function n(a,o=as){let c;const f=Ue.getTransfer(o);if(a===li)return r.UNSIGNED_BYTE;if(a===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===C_)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===D_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===w_)return r.BYTE;if(a===R_)return r.SHORT;if(a===sl)return r.UNSIGNED_SHORT;if(a===op)return r.INT;if(a===Wi)return r.UNSIGNED_INT;if(a===Gi)return r.FLOAT;if(a===Ea)return r.HALF_FLOAT;if(a===U_)return r.ALPHA;if(a===N_)return r.RGB;if(a===Ui)return r.RGBA;if(a===ba)return r.DEPTH_COMPONENT;if(a===zs)return r.DEPTH_STENCIL;if(a===L_)return r.RED;if(a===up)return r.RED_INTEGER;if(a===Gr)return r.RG;if(a===fp)return r.RG_INTEGER;if(a===hp)return r.RGBA_INTEGER;if(a===Jc||a===$c||a===tu||a===eu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===vd||a===_d||a===xd||a===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Sd||a===Md||a===Ed||a===bd||a===Td||a===Ad||a===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Sd||a===Md)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Ed)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===bd)return c.COMPRESSED_R11_EAC;if(a===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Ad)return c.COMPRESSED_RG11_EAC;if(a===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Rd||a===Cd||a===Dd||a===Ud||a===Nd||a===Ld||a===Od||a===Pd||a===Id||a===zd||a===Fd||a===Bd||a===Hd||a===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Rd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Vd||a===kd||a===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Vd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Wd||a===qd||a===Yd||a===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===rl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
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

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new j_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Yi({vertexShader:M2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new on(new lu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T2 extends Wr{constructor(t,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,S=null,b=null;const R=typeof XRWebGLBinding<"u",M=new b2,_={},P=n.getContextAttributes();let U=null,D=null;const F=[],B=[],z=new qt;let q=null;const T=new oi;T.viewport=new an;const C=new oi;C.viewport=new an;const H=[T,C],Q=new PE;let J=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=F[it];return ht===void 0&&(ht=new qh,F[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=F[it];return ht===void 0&&(ht=new qh,F[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=F[it];return ht===void 0&&(ht=new qh,F[it]=ht),ht.getHandSpace()};function rt(it){const ht=B.indexOf(it.inputSource);if(ht===-1)return;const Dt=F[ht];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||f),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){o.removeEventListener("select",rt),o.removeEventListener("selectstart",rt),o.removeEventListener("selectend",rt),o.removeEventListener("squeeze",rt),o.removeEventListener("squeezestart",rt),o.removeEventListener("squeezeend",rt),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",V);for(let it=0;it<F.length;it++){const ht=B[it];ht!==null&&(B[it]=null,F[it].disconnect(ht))}J=null,ct=null,M.reset();for(const it in _)delete _[it];t.setRenderTarget(U),S=null,x=null,g=null,o=null,D=null,Ht.stop(),a.isPresenting=!1,t.setPixelRatio(q),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",rt),o.addEventListener("selectstart",rt),o.addEventListener("selectend",rt),o.addEventListener("squeeze",rt),o.addEventListener("squeezestart",rt),o.addEventListener("squeezeend",rt),o.addEventListener("end",I),o.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Gt=null,kt=null;P.depth&&(kt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=P.stencil?zs:ba,Gt=P.stencil?rl:Wi);const ge={colorFormat:n.RGBA8,depthFormat:kt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ge),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Xi(x.textureWidth,x.textureHeight,{format:Ui,type:li,depthTexture:new ll(x.textureWidth,x.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Dt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Ui,type:li,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(h),Ht.setContext(o),Ht.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(it){for(let ht=0;ht<it.removed.length;ht++){const Dt=it.removed[ht],Gt=B.indexOf(Dt);Gt>=0&&(B[Gt]=null,F[Gt].disconnect(Dt))}for(let ht=0;ht<it.added.length;ht++){const Dt=it.added[ht];let Gt=B.indexOf(Dt);if(Gt===-1){for(let ge=0;ge<F.length;ge++)if(ge>=B.length){B.push(Dt),Gt=ge;break}else if(B[ge]===null){B[ge]=Dt,Gt=ge;break}if(Gt===-1)break}const kt=F[Gt];kt&&kt.connect(Dt)}}const nt=new j,Et=new j;function Mt(it,ht,Dt){nt.setFromMatrixPosition(ht.matrixWorld),Et.setFromMatrixPosition(Dt.matrixWorld);const Gt=nt.distanceTo(Et),kt=ht.projectionMatrix.elements,ge=Dt.projectionMatrix.elements,be=kt[14]/(kt[10]-1),ue=kt[14]/(kt[10]+1),gt=(kt[9]+1)/kt[5],bt=(kt[9]-1)/kt[5],xt=(kt[8]-1)/kt[0],Pt=(ge[8]+1)/ge[0],O=be*xt,ne=be*Pt,zt=Gt/(-xt+Pt),ae=zt*-xt;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ae),it.translateZ(zt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Ut=be+zt,N=ue+zt,E=O-ae,W=ne+(Gt-ae),ut=gt*ue/N*Ut,yt=bt*ue/N*Ut;it.projectionMatrix.makePerspective(E,W,ut,yt,Ut,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let ht=it.near,Dt=it.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),Q.near=C.near=T.near=ht,Q.far=C.far=T.far=Dt,(J!==Q.near||ct!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),J=Q.near,ct=Q.far),Q.layers.mask=it.layers.mask|6,T.layers.mask=Q.layers.mask&3,C.layers.mask=Q.layers.mask&5;const Gt=it.parent,kt=Q.cameras;L(Q,Gt);for(let ge=0;ge<kt.length;ge++)L(kt[ge],Gt);kt.length===2?Mt(Q,T,C):Q.projectionMatrix.copy(T.projectionMatrix),tt(it,Q,Gt)};function tt(it,ht,Dt){Dt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(it){return _[it]};let pt=null;function wt(it,ht){if(v=ht.getViewerPose(p||f),b=ht,v!==null){const Dt=v.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Gt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,Gt=!0);for(let ue=0;ue<Dt.length;ue++){const gt=Dt[ue];let bt=null;if(S!==null)bt=S.getViewport(gt);else{const Pt=g.getViewSubImage(x,gt);bt=Pt.viewport,ue===0&&(t.setRenderTargetTextures(D,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(D))}let xt=H[ue];xt===void 0&&(xt=new oi,xt.layers.enable(ue),xt.viewport=new an,H[ue]=xt),xt.matrix.fromArray(gt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(gt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(bt.x,bt.y,bt.width,bt.height),ue===0&&(Q.matrix.copy(xt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Gt===!0&&Q.cameras.push(xt)}const kt=o.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){g=a.getBinding();const ue=g.getDepthInformation(Dt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,o.renderState)}if(kt&&kt.includes("camera-access")&&R){t.state.unbindTexture(),g=a.getBinding();for(let ue=0;ue<Dt.length;ue++){const gt=Dt[ue].camera;if(gt){let bt=_[gt];bt||(bt=new j_,_[gt]=bt);const xt=g.getCameraImage(gt);bt.sourceTexture=xt}}}}for(let Dt=0;Dt<F.length;Dt++){const Gt=B[Dt],kt=F[Dt];Gt!==null&&kt!==void 0&&kt.update(Gt,ht,p||f)}pt&&pt(it,ht),ht.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Ht=new sx;Ht.setAnimationLoop(wt),this.setAnimationLoop=function(it){pt=it},this.dispose=function(){}}}const Us=new qi,A2=new $e;function w2(r,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function a(M,_){_.color.getRGB(M.fogColor.value,k_(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,P,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&S(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,P,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Zn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Zn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const P=t.get(_),U=P.envMap,D=P.envMapRotation;U&&(M.envMap.value=U,Us.copy(D),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),M.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(Us)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,P,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*P,M.scale.value=U*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,P){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Zn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const P=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function R2(r,t,n,a){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const D=U.program;a.uniformBlockBinding(P,D)}function p(P,U){let D=o[P.id];D===void 0&&(b(P),D=v(P),o[P.id]=D,P.addEventListener("dispose",M));const F=U.program;a.updateUBOMapping(P,F);const B=t.render.frame;c[P.id]!==B&&(x(P),c[P.id]=B)}function v(P){const U=g();P.__bindingPointIndex=U;const D=r.createBuffer(),F=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function g(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=o[P.id],D=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,z=D.length;B<z;B++){const q=Array.isArray(D[B])?D[B]:[D[B]];for(let T=0,C=q.length;T<C;T++){const H=q[T];if(S(H,B,T,F)===!0){const Q=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let rt=0;rt<J.length;rt++){const I=J[rt],V=R(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Q+ct,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ct),ct+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(P,U,D,F){const B=P.value,z=U+"_"+D;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const q=F[z];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[z]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(P){const U=P.uniforms;let D=0;const F=16;for(let z=0,q=U.length;z<q;z++){const T=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,H=T.length;C<H;C++){const Q=T[C],J=Array.isArray(Q.value)?Q.value:[Q.value];for(let ct=0,rt=J.length;ct<rt;ct++){const I=J[ct],V=R(I),nt=D%F,Et=nt%V.boundary,Mt=nt+Et;D+=Et,Mt!==0&&F-Mt<V.storage&&(D+=F-Mt),Q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=V.storage}}}const B=D%F;return B>0&&(D+=F-B),P.__size=D,P.__cache={},this}function R(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function _(){for(const P in o)r.deleteBuffer(o[P]);f=[],o={},c={}}return{bind:m,update:p,dispose:_}}const C2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function D2(){return Bi===null&&(Bi=new VM(C2,16,16,Gr,Ea),Bi.name="DFG_LUT",Bi.minFilter=Fn,Bi.magFilter=Fn,Bi.wrapS=ya,Bi.wrapT=ya,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class U2{constructor(t={}){const{canvas:n=mM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:S=li}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=f;const R=S,M=new Set([hp,fp,up]),_=new Set([li,Wi,sl,rl,lp,cp]),P=new Uint32Array(4),U=new Int32Array(4);let D=null,F=null;const B=[],z=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=yi;let H=0,Q=0,J=null,ct=-1,rt=null;const I=new an,V=new an;let nt=null;const Et=new Re(0);let Mt=0,L=n.width,tt=n.height,pt=1,wt=null,Ht=null;const it=new an(0,0,L,tt),ht=new an(0,0,L,tt);let Dt=!1;const Gt=new gp;let kt=!1,ge=!1;const be=new $e,ue=new j,gt=new an,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Pt(){return J===null?pt:1}let O=a;function ne(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),O===null){const Y="webgl2";if(O=ne(Y,w),O===null)throw ne(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw De("WebGLRenderer: "+w.message),w}let zt,ae,Ut,N,E,W,ut,yt,ft,Jt,Lt,Kt,oe,Tt,Rt,Yt,Xt,Ot,ve,X,Ft,Ct,Wt,At;function _t(){zt=new DT(O),zt.init(),Ct=new S2(O,zt),ae=new ST(O,zt,t,Ct),Ut=new x2(O,zt),ae.reversedDepthBuffer&&x&&Ut.buffers.depth.setReversed(!0),N=new LT(O),E=new a2,W=new y2(O,zt,Ut,E,ae,Ct,N),ut=new ET(T),yt=new CT(T),ft=new zE(O),Wt=new xT(O,ft),Jt=new UT(O,ft,N,Wt),Lt=new PT(O,Jt,ft,N),ve=new OT(O,ae,W),Yt=new MT(E),Kt=new i2(T,ut,yt,zt,ae,Wt,Yt),oe=new w2(T,E),Tt=new r2,Rt=new h2(zt),Ot=new _T(T,ut,yt,Ut,Lt,b,m),Xt=new v2(T,Lt,ae),At=new R2(O,N,ae,Ut),X=new yT(O,zt,N),Ft=new NT(O,zt,N),N.programs=Kt.programs,T.capabilities=ae,T.extensions=zt,T.properties=E,T.renderLists=Tt,T.shadowMap=Xt,T.state=Ut,T.info=N}_t(),R!==li&&(q=new zT(R,n.width,n.height,o,c));const Nt=new T2(T,O);this.xr=Nt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(w){w!==void 0&&(pt=w,this.setSize(L,tt,!1))},this.getSize=function(w){return w.set(L,tt)},this.setSize=function(w,Y,ot=!0){if(Nt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,tt=Y,n.width=Math.floor(w*pt),n.height=Math.floor(Y*pt),ot===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(L*pt,tt*pt).floor()},this.setDrawingBufferSize=function(w,Y,ot){L=w,tt=Y,pt=ot,n.width=Math.floor(w*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(R===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,Y,ot,at){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,Y,ot,at),Ut.viewport(I.copy(it).multiplyScalar(pt).round())},this.getScissor=function(w){return w.copy(ht)},this.setScissor=function(w,Y,ot,at){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,Y,ot,at),Ut.scissor(V.copy(ht).multiplyScalar(pt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){Ut.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){wt=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ot=!0){let at=0;if(w){let K=!1;if(J!==null){const It=J.texture.format;K=M.has(It)}if(K){const It=J.texture.type,jt=_.has(It),Bt=Ot.getClearColor(),Zt=Ot.getClearAlpha(),$t=Bt.r,re=Bt.g,te=Bt.b;jt?(P[0]=$t,P[1]=re,P[2]=te,P[3]=Zt,O.clearBufferuiv(O.COLOR,0,P)):(U[0]=$t,U[1]=re,U[2]=te,U[3]=Zt,O.clearBufferiv(O.COLOR,0,U))}else at|=O.COLOR_BUFFER_BIT}Y&&(at|=O.DEPTH_BUFFER_BIT),ot&&(at|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Ot.dispose(),Tt.dispose(),Rt.dispose(),E.dispose(),ut.dispose(),yt.dispose(),Lt.dispose(),Wt.dispose(),At.dispose(),Kt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Gs),Nt.removeEventListener("sessionend",Kr),Oi.stop()};function fe(w){w.preventDefault(),xv("WebGLRenderer: Context Lost."),C=!0}function Fe(){xv("WebGLRenderer: Context Restored."),C=!1;const w=N.autoReset,Y=Xt.enabled,ot=Xt.autoUpdate,at=Xt.needsUpdate,K=Xt.type;_t(),N.autoReset=w,Xt.enabled=Y,Xt.autoUpdate=ot,Xt.needsUpdate=at,Xt.type=K}function Ce(w){De("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function On(w){const Y=w.target;Y.removeEventListener("dispose",On),Si(Y)}function Si(w){ml(w),E.remove(w)}function ml(w){const Y=E.get(w).programs;Y!==void 0&&(Y.forEach(function(ot){Kt.releaseProgram(ot)}),w.isShaderMaterial&&Kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ot,at,K,It){Y===null&&(Y=bt);const jt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=ls(w,Y,ot,at,K);Ut.setMaterial(at,jt);let Zt=ot.index,$t=1;if(at.wireframe===!0){if(Zt=Jt.getWireframeAttribute(ot),Zt===void 0)return;$t=2}const re=ot.drawRange,te=ot.attributes.position;let le=re.start*$t,Oe=(re.start+re.count)*$t;It!==null&&(le=Math.max(le,It.start*$t),Oe=Math.min(Oe,(It.start+It.count)*$t)),Zt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Zt.count)):te!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,te.count));const Qe=Oe-le;if(Qe<0||Qe===1/0)return;Wt.setup(K,at,Bt,ot,Zt);let Ye,ze=X;if(Zt!==null&&(Ye=ft.get(Zt),ze=Ft,ze.setIndex(Ye)),K.isMesh)at.wireframe===!0?(Ut.setLineWidth(at.wireframeLinewidth*Pt()),ze.setMode(O.LINES)):ze.setMode(O.TRIANGLES);else if(K.isLine){let ie=at.linewidth;ie===void 0&&(ie=1),Ut.setLineWidth(ie*Pt()),K.isLineSegments?ze.setMode(O.LINES):K.isLineLoop?ze.setMode(O.LINE_LOOP):ze.setMode(O.LINE_STRIP)}else K.isPoints?ze.setMode(O.POINTS):K.isSprite&&ze.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ie=K._multiDrawStarts,Pe=K._multiDrawCounts,he=K._multiDrawCount,Mn=Zt?ft.get(Zt).bytesPerElement:1,Zi=E.get(at).currentProgram.getUniforms();for(let En=0;En<he;En++)Zi.setValue(O,"_gl_DrawID",En),ze.render(ie[En]/Mn,Pe[En])}else if(K.isInstancedMesh)ze.renderInstances(le,Qe,K.count);else if(ot.isInstancedBufferGeometry){const ie=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Pe=Math.min(ot.instanceCount,ie);ze.renderInstances(le,Qe,Pe)}else ze.render(le,Qe)};function Zr(w,Y,ot){w.transparent===!0&&w.side===xa&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,ks(w,Y,ot),w.side=os,w.needsUpdate=!0,ks(w,Y,ot),w.side=xa):ks(w,Y,ot)}this.compile=function(w,Y,ot=null){ot===null&&(ot=w),F=Rt.get(ot),F.init(Y),z.push(F),ot.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),w!==ot&&w.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const at=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const It=K.material;if(It)if(Array.isArray(It))for(let jt=0;jt<It.length;jt++){const Bt=It[jt];Zr(Bt,ot,K),at.add(Bt)}else Zr(It,ot,K),at.add(It)}),F=z.pop(),at},this.compileAsync=function(w,Y,ot=null){const at=this.compile(w,Y,ot);return new Promise(K=>{function It(){if(at.forEach(function(jt){E.get(jt).currentProgram.isReady()&&at.delete(jt)}),at.size===0){K(w);return}setTimeout(It,10)}zt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Hs=null;function Qr(w){Hs&&Hs(w)}function Gs(){Oi.stop()}function Kr(){Oi.start()}const Oi=new sx;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){Hs=w,Nt.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},Nt.addEventListener("sessionstart",Gs),Nt.addEventListener("sessionend",Kr),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const ot=Nt.enabled===!0&&Nt.isPresenting===!0,at=q!==null&&(J===null||ot)&&q.begin(T,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,Y,J),F=Rt.get(w,z.length),F.init(Y),z.push(F),be.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(be,Vi,Y.reversedDepth),ge=this.localClippingEnabled,kt=Yt.init(this.clippingPlanes,ge),D=Tt.get(w,B.length),D.init(),B.push(D),Nt.enabled===!0&&Nt.isPresenting===!0){const jt=T.xr.getDepthSensingMesh();jt!==null&&ci(jt,Y,-1/0,T.sortObjects)}ci(w,Y,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(wt,Ht),xt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,xt&&Ot.addToRenderList(D,w),this.info.render.frame++,kt===!0&&Yt.beginShadows();const K=F.state.shadowsArray;if(Xt.render(K,w,Y),kt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&q.hasRenderPass())===!1){const jt=D.opaque,Bt=D.transmissive;if(F.setupLights(),Y.isArrayCamera){const Zt=Y.cameras;if(Bt.length>0)for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];Sn(jt,Bt,w,te)}xt&&Ot.render(w);for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];ln(D,w,te,te.viewport)}}else Bt.length>0&&Sn(jt,Bt,w,Y),xt&&Ot.render(w),ln(D,w,Y)}J!==null&&Q===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),at&&q.end(T),w.isScene===!0&&w.onAfterRender(T,w,Y),Wt.resetDefaultState(),ct=-1,rt=null,z.pop(),z.length>0?(F=z[z.length-1],kt===!0&&Yt.setGlobalState(T.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function ci(w,Y,ot,at){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)F.pushLight(w),w.castShadow&&F.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Gt.intersectsSprite(w)){at&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const jt=Lt.update(w),Bt=w.material;Bt.visible&&D.push(w,jt,Bt,ot,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Gt.intersectsObject(w))){const jt=Lt.update(w),Bt=w.material;if(at&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),gt.copy(jt.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(Bt)){const Zt=jt.groups;for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t],le=Bt[te.materialIndex];le&&le.visible&&D.push(w,jt,le,ot,gt.z,te)}}else Bt.visible&&D.push(w,jt,Bt,ot,gt.z,null)}}const It=w.children;for(let jt=0,Bt=It.length;jt<Bt;jt++)ci(It[jt],Y,ot,at)}function ln(w,Y,ot,at){const{opaque:K,transmissive:It,transparent:jt}=w;F.setupLightsView(ot),kt===!0&&Yt.setGlobalState(T.clippingPlanes,ot),at&&Ut.viewport(I.copy(at)),K.length>0&&Mi(K,Y,ot),It.length>0&&Mi(It,Y,ot),jt.length>0&&Mi(jt,Y,ot),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Sn(w,Y,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const le=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Xi(1,1,{generateMipmaps:!0,type:le?Ea:li,minFilter:Is,samples:ae.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const It=F.state.transmissionRenderTarget[at.id],jt=at.viewport||I;It.setSize(jt.z*T.transmissionResolutionScale,jt.w*T.transmissionResolutionScale);const Bt=T.getRenderTarget(),Zt=T.getActiveCubeFace(),$t=T.getActiveMipmapLevel();T.setRenderTarget(It),T.getClearColor(Et),Mt=T.getClearAlpha(),Mt<1&&T.setClearColor(16777215,.5),T.clear(),xt&&Ot.render(ot);const re=T.toneMapping;T.toneMapping=ki;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),kt===!0&&Yt.setGlobalState(T.clippingPlanes,at),Mi(w,ot,at),W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It),zt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Qe=Y.length;Oe<Qe;Oe++){const Ye=Y[Oe],{object:ze,geometry:ie,material:Pe,group:he}=Ye;if(Pe.side===xa&&ze.layers.test(at.layers)){const Mn=Pe.side;Pe.side=Zn,Pe.needsUpdate=!0,Vs(ze,ot,at,ie,Pe,he),Pe.side=Mn,Pe.needsUpdate=!0,le=!0}}le===!0&&(W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It))}T.setRenderTarget(Bt,Zt,$t),T.setClearColor(Et,Mt),te!==void 0&&(at.viewport=te),T.toneMapping=re}function Mi(w,Y,ot){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,It=w.length;K<It;K++){const jt=w[K],{object:Bt,geometry:Zt,group:$t}=jt;let re=jt.material;re.allowOverride===!0&&at!==null&&(re=at),Bt.layers.test(ot.layers)&&Vs(Bt,Y,ot,Zt,re,$t)}}function Vs(w,Y,ot,at,K,It){w.onBeforeRender(T,Y,ot,at,K,It),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(T,Y,ot,at,w,It),K.transparent===!0&&K.side===xa&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,T.renderBufferDirect(ot,Y,at,K,w,It),K.side=os,K.needsUpdate=!0,T.renderBufferDirect(ot,Y,at,K,w,It),K.side=xa):T.renderBufferDirect(ot,Y,at,K,w,It),w.onAfterRender(T,Y,ot,at,K,It)}function ks(w,Y,ot){Y.isScene!==!0&&(Y=bt);const at=E.get(w),K=F.state.lights,It=F.state.shadowsArray,jt=K.state.version,Bt=Kt.getParameters(w,K.state,It,Y,ot),Zt=Kt.getProgramCacheKey(Bt);let $t=at.programs;at.environment=w.isMeshStandardMaterial?Y.environment:null,at.fog=Y.fog,at.envMap=(w.isMeshStandardMaterial?yt:ut).get(w.envMap||at.environment),at.envMapRotation=at.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",On),$t=new Map,at.programs=$t);let re=$t.get(Zt);if(re!==void 0){if(at.currentProgram===re&&at.lightsStateVersion===jt)return Jr(w,Bt),re}else Bt.uniforms=Kt.getUniforms(w),w.onBeforeCompile(Bt,T),re=Kt.acquireProgram(Bt,Zt),$t.set(Zt,re),at.uniforms=Bt.uniforms;const te=at.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(te.clippingPlanes=Yt.uniform),Jr(w,Bt),at.needsLights=Ta(w),at.lightsStateVersion=jt,at.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=re,at.uniformsList=null,re}function gl(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=nu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Jr(w,Y){const ot=E.get(w);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function ls(w,Y,ot,at,K){Y.isScene!==!0&&(Y=bt),W.resetTextureUnits();const It=Y.fog,jt=at.isMeshStandardMaterial?Y.environment:null,Bt=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Vr,Zt=(at.isMeshStandardMaterial?yt:ut).get(at.envMap||jt),$t=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),te=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let Qe=ki;at.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const Ye=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ze=Ye!==void 0?Ye.length:0,ie=E.get(at),Pe=F.state.lights;if(kt===!0&&(ge===!0||w!==rt)){const Tn=w===rt&&at.id===ct;Yt.setState(at,w,Tn)}let he=!1;at.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Pe.state.version||ie.outputColorSpace!==Bt||K.isBatchedMesh&&ie.batching===!1||!K.isBatchedMesh&&ie.batching===!0||K.isBatchedMesh&&ie.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ie.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ie.instancing===!1||!K.isInstancedMesh&&ie.instancing===!0||K.isSkinnedMesh&&ie.skinning===!1||!K.isSkinnedMesh&&ie.skinning===!0||K.isInstancedMesh&&ie.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ie.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ie.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ie.instancingMorph===!1&&K.morphTexture!==null||ie.envMap!==Zt||at.fog===!0&&ie.fog!==It||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Yt.numPlanes||ie.numIntersection!==Yt.numIntersection)||ie.vertexAlphas!==$t||ie.vertexTangents!==re||ie.morphTargets!==te||ie.morphNormals!==le||ie.morphColors!==Oe||ie.toneMapping!==Qe||ie.morphTargetsCount!==ze)&&(he=!0):(he=!0,ie.__version=at.version);let Mn=ie.currentProgram;he===!0&&(Mn=ks(at,Y,K));let Zi=!1,En=!1,ui=!1;const Be=Mn.getUniforms(),bn=ie.uniforms;if(Ut.useProgram(Mn.program)&&(Zi=!0,En=!0,ui=!0),at.id!==ct&&(ct=at.id,En=!0),Zi||rt!==w){Ut.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(O,"projectionMatrix",w.projectionMatrix),Be.setValue(O,"viewMatrix",w.matrixWorldInverse);const An=Be.map.cameraPosition;An!==void 0&&An.setValue(O,ue.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),rt!==w&&(rt=w,En=!0,ui=!0)}if(ie.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(O,"directionalShadowMap",Pe.state.directionalShadowMap,W),Pe.state.spotShadowMap.length>0&&Be.setValue(O,"spotShadowMap",Pe.state.spotShadowMap,W),Pe.state.pointShadowMap.length>0&&Be.setValue(O,"pointShadowMap",Pe.state.pointShadowMap,W)),K.isSkinnedMesh){Be.setOptional(O,K,"bindMatrix"),Be.setOptional(O,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Be.setValue(O,"boneTexture",Tn.boneTexture,W))}K.isBatchedMesh&&(Be.setOptional(O,K,"batchingTexture"),Be.setValue(O,"batchingTexture",K._matricesTexture,W),Be.setOptional(O,K,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",K._indirectTexture,W),Be.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",K._colorsTexture,W));const pn=ot.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ve.update(K,ot,Mn),(En||ie.receiveShadow!==K.receiveShadow)&&(ie.receiveShadow=K.receiveShadow,Be.setValue(O,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=Zt,bn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=D2()),En&&(Be.setValue(O,"toneMappingExposure",T.toneMappingExposure),ie.needsLights&&$r(bn,ui),It&&at.fog===!0&&oe.refreshFogUniforms(bn,It),oe.refreshMaterialUniforms(bn,at,pt,tt,F.state.transmissionRenderTarget[w.id]),nu.upload(O,gl(ie),bn,W)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(nu.upload(O,gl(ie),bn,W),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(O,"center",K.center),Be.setValue(O,"modelViewMatrix",K.modelViewMatrix),Be.setValue(O,"normalMatrix",K.normalMatrix),Be.setValue(O,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Tn=at.uniformsGroups;for(let An=0,Xs=Tn.length;An<Xs;An++){const Ei=Tn[An];At.update(Ei,Mn),At.bind(Ei,Mn)}}return Mn}function $r(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Ta(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Y,ot){const at=E.get(w);at.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Y,E.get(w.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ot=E.get(w);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Aa=O.createFramebuffer();this.setRenderTarget=function(w,Y=0,ot=0){J=w,H=Y,Q=ot;let at=null,K=!1,It=!1;if(w){const Bt=E.get(w);if(Bt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(O.FRAMEBUFFER,Bt.__webglFramebuffer),I.copy(w.viewport),V.copy(w.scissor),nt=w.scissorTest,Ut.viewport(I),Ut.scissor(V),Ut.setScissorTest(nt),ct=-1;return}else if(Bt.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(Bt.__hasExternalTextures)W.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const re=w.depthTexture;if(Bt.__boundDepthTexture!==re){if(re!==null&&E.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Zt=w.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const $t=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[Y])?at=$t[Y][ot]:at=$t[Y],K=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?at=E.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[ot]:at=$t,I.copy(w.viewport),V.copy(w.scissor),nt=w.scissorTest}else I.copy(it).multiplyScalar(pt).floor(),V.copy(ht).multiplyScalar(pt).floor(),nt=Dt;if(ot!==0&&(at=Aa),Ut.bindFramebuffer(O.FRAMEBUFFER,at)&&Ut.drawBuffers(w,at),Ut.viewport(I),Ut.scissor(V),Ut.setScissorTest(nt),K){const Bt=E.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,ot)}else if(It){const Bt=Y;for(let Zt=0;Zt<w.textures.length;Zt++){const $t=E.get(w.textures[Zt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,ot,Bt)}}else if(w!==null&&ot!==0){const Bt=E.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,ot)}ct=-1},this.readRenderTargetPixels=function(w,Y,ot,at,K,It,jt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Zt=Zt[jt]),Zt){Ut.bindFramebuffer(O.FRAMEBUFFER,Zt);try{const $t=w.textures[Bt],re=$t.format,te=$t.type;if(!ae.textureFormatReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-at&&ot>=0&&ot<=w.height-K&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Bt),O.readPixels(Y,ot,at,K,Ct.convert(re),Ct.convert(te),It))}finally{const $t=J!==null?E.get(J).__webglFramebuffer:null;Ut.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ot,at,K,It,jt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Zt=Zt[jt]),Zt)if(Y>=0&&Y<=w.width-at&&ot>=0&&ot<=w.height-K){Ut.bindFramebuffer(O.FRAMEBUFFER,Zt);const $t=w.textures[Bt],re=$t.format,te=$t.type;if(!ae.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,le),O.bufferData(O.PIXEL_PACK_BUFFER,It.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Bt),O.readPixels(Y,ot,at,K,Ct.convert(re),Ct.convert(te),0);const Oe=J!==null?E.get(J).__webglFramebuffer:null;Ut.bindFramebuffer(O.FRAMEBUFFER,Oe);const Qe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gM(O,Qe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,It),O.deleteBuffer(le),O.deleteSync(Qe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ot=0){const at=Math.pow(2,-ot),K=Math.floor(w.image.width*at),It=Math.floor(w.image.height*at),jt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;W.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,ot,0,0,jt,Bt,K,It),Ut.unbindTexture()};const cs=O.createFramebuffer(),wa=O.createFramebuffer();this.copyTextureToTexture=function(w,Y,ot=null,at=null,K=0,It=null){It===null&&(K!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=K,K=0):It=0);let jt,Bt,Zt,$t,re,te,le,Oe,Qe;const Ye=w.isCompressedTexture?w.mipmaps[It]:w.image;if(ot!==null)jt=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,Zt=ot.isBox3?ot.max.z-ot.min.z:1,$t=ot.min.x,re=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const pn=Math.pow(2,-K);jt=Math.floor(Ye.width*pn),Bt=Math.floor(Ye.height*pn),w.isDataArrayTexture?Zt=Ye.depth:w.isData3DTexture?Zt=Math.floor(Ye.depth*pn):Zt=1,$t=0,re=0,te=0}at!==null?(le=at.x,Oe=at.y,Qe=at.z):(le=0,Oe=0,Qe=0);const ze=Ct.convert(Y.format),ie=Ct.convert(Y.type);let Pe;Y.isData3DTexture?(W.setTexture3D(Y,0),Pe=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Pe=O.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Pe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),Mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zi=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),ui=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$t),O.pixelStorei(O.UNPACK_SKIP_ROWS,re),O.pixelStorei(O.UNPACK_SKIP_IMAGES,te);const Be=w.isDataArrayTexture||w.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const pn=E.get(w),Tn=E.get(Y),An=E.get(pn.__renderTarget),Xs=E.get(Tn.__renderTarget);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Ei=0;Ei<Zt;Ei++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(w).__webglTexture,K,te+Ei),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,It,Qe+Ei)),O.blitFramebuffer($t,re,jt,Bt,le,Oe,jt,Bt,O.DEPTH_BUFFER_BIT,O.NEAREST);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||E.has(w)){const pn=E.get(w),Tn=E.get(Y);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,cs),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,wa);for(let An=0;An<Zt;An++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pn.__webglTexture,K,te+An):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pn.__webglTexture,K),bn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tn.__webglTexture,It,Qe+An):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Tn.__webglTexture,It),K!==0?O.blitFramebuffer($t,re,jt,Bt,le,Oe,jt,Bt,O.COLOR_BUFFER_BIT,O.NEAREST):bn?O.copyTexSubImage3D(Pe,It,le,Oe,Qe+An,$t,re,jt,Bt):O.copyTexSubImage2D(Pe,It,le,Oe,$t,re,jt,Bt);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Pe,It,le,Oe,Qe,jt,Bt,Zt,ze,ie,Ye.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,It,le,Oe,Qe,jt,Bt,Zt,ze,Ye.data):O.texSubImage3D(Pe,It,le,Oe,Qe,jt,Bt,Zt,ze,ie,Ye):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,It,le,Oe,jt,Bt,ze,ie,Ye.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,It,le,Oe,Ye.width,Ye.height,ze,Ye.data):O.texSubImage2D(O.TEXTURE_2D,It,le,Oe,jt,Bt,ze,ie,Ye);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zi),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ui),It===0&&Y.generateMipmaps&&O.generateMipmap(Pe),Ut.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),Ut.unbindTexture()},this.resetState=function(){H=0,Q=0,J=null,Ut.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const N2=()=>{const r=yn.useRef(null);return yn.useEffect(()=>{if(!r.current)return;const t=new GM;t.background=new Re(Je.colors.background);const n=new oi(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,2,8),n.lookAt(0,0,0);const a=new U2({antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.shadowMap.enabled=!0,a.shadowMap.type=__,r.current.appendChild(a.domElement);const o=(T,C,H=!1)=>{const Q=new Jo,J=new nl(.3,.4,H?1:1.5,8),ct=new _a({color:T}),rt=new on(J,ct);rt.position.y=H?.5:.75,Q.add(rt);const I=new Os(.25,16,16),V=new _a({color:"#ffdbac"}),nt=new on(I,V);nt.position.y=H?1.25:1.75,Q.add(nt);const Et=new Os(.04,8,8),Mt=new _a({color:"#000000"}),L=new on(Et,Mt);L.position.set(-.08,H?1.3:1.8,.2),Q.add(L);const tt=new on(Et,Mt);tt.position.set(.08,H?1.3:1.8,.2),Q.add(tt);const pt=new Os(.03,8,8),wt=new _a({color:"#ff6b9d"}),Ht=new on(pt,wt);Ht.position.set(0,H?1.2:1.7,.22),Ht.scale.set(1.5,.5,.5),Q.add(Ht);const it=new Os(.02,8,8),ht=new _a({color:"#ffdbac"}),Dt=new on(it,ht);Dt.position.set(0,H?1.25:1.75,.24),Q.add(Dt);const Gt=new Os(.28,16,16),kt=T==="#e24a90"?"#8B4513":"#654321",ge=new _a({color:kt}),be=new on(Gt,ge);be.position.set(0,H?1.35:1.85,-.05),be.scale.set(1,.8,1),Q.add(be);const ue=new nl(.1,.1,.8,8),gt=new _a({color:"#ffdbac"}),bt=new on(ue,gt);bt.position.set(-.5,H?.8:1.2,0),bt.rotation.z=H?-Math.PI/3:Math.PI/6,Q.add(bt);const xt=new on(ue,gt);if(xt.position.set(.5,H?.8:1.2,0),xt.rotation.z=H?Math.PI/3:-Math.PI/6,Q.add(xt),!H){const Pt=new nl(.12,.12,.8,8),O=new _a({color:T}),ne=new on(Pt,O);ne.position.set(-.2,-.4,0),Q.add(ne);const zt=new on(Pt,O);zt.position.set(.2,-.4,0),Q.add(zt)}return Q.position.copy(C),Q},c=o("#4a90e2",new j(-1.5,0,0),!0),f=o("#e24a90",new j(1.5,0,0),!1);t.add(c),t.add(f);const h=new $_,m=0,p=0;h.moveTo(m+.25,p+.25),h.bezierCurveTo(m+.25,p+.25,m+.2,p,m,p),h.bezierCurveTo(m-.3,p,m-.3,p+.35,m-.3,p+.35),h.bezierCurveTo(m-.3,p+.55,m-.15,p+.77,m+.25,p+.95),h.bezierCurveTo(m+.6,p+.77,m+.8,p+.55,m+.8,p+.35),h.bezierCurveTo(m+.8,p+.35,m+.8,p,m+.5,p),h.bezierCurveTo(m+.35,p,m+.25,p+.25,m+.25,p+.25);const v={depth:.2,bevelEnabled:!0,bevelSegments:5,steps:2,bevelSize:.05,bevelThickness:.05},g=new xp(h,v),x=new _a({color:Je.colors.heartPrimary,emissive:Je.colors.heartPrimary,emissiveIntensity:.3}),S=new on(g,x);S.position.set(-.25,2,0),S.rotation.z=Math.PI,t.add(S);const b=new Qn,R=500,M=new Float32Array(R*3);for(let T=0;T<R*3;T++)M[T]=(Math.random()-.5)*8;b.setAttribute("position",new Ni(M,3));const _=new Y_({size:.03,color:Je.colors.particleColor,transparent:!0,opacity:.6}),P=new qM(b,_);t.add(P);const U=new OE(16777215,.6);t.add(U);const D=new LE(16777215,.8);D.position.set(5,10,5),D.castShadow=!0,t.add(D);const F=new UE(Je.colors.heartPrimary,1,10);F.position.set(0,3,2),t.add(F);let B=0;const z=()=>{requestAnimationFrame(z),B+=.01,S.rotation.y=Math.sin(B*.5)*.2;const T=1+Math.sin(B*2)*.1;S.scale.set(T,T,T),c.rotation.y=Math.sin(B*.3)*.05,f.rotation.y=Math.sin(B*.3+Math.PI)*.05,P.rotation.y+=.002,a.render(t,n)};z();const q=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q),r.current&&r.current.removeChild(a.domElement),a.dispose()}},[]),r},m_=r=>{let t;const n=new Set,a=(p,v)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const x=t;t=v??(typeof g!="object"||g===null)?g:Object.assign({},t,g),n.forEach(S=>S(t,x))}},o=()=>t,h={setState:a,getState:o,getInitialState:()=>m,subscribe:p=>(n.add(p),()=>n.delete(p))},m=t=r(a,o,h);return h},L2=(r=>r?m_(r):m_),O2=r=>r;function P2(r,t=O2){const n=ss.useSyncExternalStore(r.subscribe,ss.useCallback(()=>t(r.getState()),[r,t]),ss.useCallback(()=>t(r.getInitialState()),[r,t]));return ss.useDebugValue(n),n}const g_=r=>{const t=L2(r),n=a=>P2(t,a);return Object.assign(n,t),n},I2=(r=>r?g_(r):g_),Li=I2((r,t)=>({showMessage:!1,showConfetti:!1,saidYes:!1,showCompliments:!1,currentCompliment:0,hasStarted:!1,showTransition:!1,showApologies:!1,currentApology:0,handleStart:()=>r({showTransition:!0}),handleTransitionComplete:()=>{r({hasStarted:!0,showTransition:!1}),setTimeout(()=>{r({showApologies:!0})},500),setTimeout(()=>{r({showApologies:!1,showCompliments:!0})},Je.text.apologyReasons.length*3e3+2e3),setTimeout(()=>{r({showCompliments:!1,showMessage:!0})},Je.text.apologyReasons.length*3e3+Je.animation.complimentDuration+Je.animation.messageDelay+2e3)},handleYesClick:()=>r({saidYes:!0,showConfetti:!0}),nextCompliment:()=>{const{currentCompliment:n}=t(),a=Je.text.compliments;n<a.length&&r({currentCompliment:n+1})},showApologySection:()=>r({showApologies:!0}),nextApology:()=>{const{currentApology:n}=t(),a=Je.text.apologyReasons;n<a.length&&r({currentApology:n+1})},reset:()=>r({showMessage:!1,showConfetti:!1,saidYes:!1,showCompliments:!1,currentCompliment:0,hasStarted:!1,showTransition:!1,showApologies:!1,currentApology:0})})),z2=()=>{const{showCompliments:r,currentCompliment:t,nextCompliment:n}=Li();yn.useEffect(()=>{if(!r)return;const a=Je.text.compliments;if(t>=a.length)return;const o=setTimeout(()=>{n()},8e3);return()=>clearTimeout(o)},[r,t,n])},F2=()=>{const{showApologies:r,currentApology:t,nextApology:n}=Li();yn.useEffect(()=>{if(!r)return;const a=Je.text.apologyReasons;if(t>=a.length)return;const o=setTimeout(()=>{n()},3e3);return()=>clearTimeout(o)},[r,t,n])},B2=()=>{const r=zS(),{showConfetti:t}=Li();return t?St.jsx(OS,{width:r.width,height:r.height,numberOfPieces:Je.animation.confettiPieces,recycle:!0,colors:["#ff0844","#ff1744","#ff6b9d","#ff4081","#f50057","#ff80ab"]}):null},H2=()=>{const r=N2();return St.jsx("div",{ref:r,className:"absolute inset-0"})},G2=()=>{const{saidYes:r}=Li();return r?St.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20 pointer-events-none",children:St.jsxs("div",{className:"bg-gradient-to-br from-pink-900/95 to-red-900/95 backdrop-blur-sm rounded-3xl p-12 max-w-2xl mx-4 shadow-2xl border-4 border-pink-400 animate-bounce-in",style:{boxShadow:"0 0 60px rgba(255, 8, 68, 0.8), 0 0 100px rgba(255, 107, 157, 0.6)",animation:"slideIn 0.5s ease-out"},children:[St.jsx("h2",{className:"text-4xl md:text-6xl font-bold text-white text-center mb-6",style:{textShadow:"0 0 20px rgba(255, 255, 255, 0.8)",fontFamily:"Georgia, serif"},children:Je.text.successTitle}),St.jsx("div",{className:"space-y-4",children:Je.text.successMessages.map((t,n)=>St.jsx("p",{className:"text-xl md:text-2xl text-pink-100 text-center animate-fade-in",style:{animationDelay:`${n*.2}s`,fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:t},n))}),St.jsx("div",{className:"mt-8 text-center",children:St.jsx("div",{className:"inline-block",children:["💕","💖","💗","💓","💝","❤️","🌹","✨"].map((t,n)=>St.jsx("span",{className:"text-4xl mx-2 inline-block animate-float",style:{animationDelay:`${n*.1}s`,display:"inline-block"},children:t},n))})})]})}):null},V2=()=>{const{showMessage:r,saidYes:t,handleYesClick:n}=Li();if(t)return null;const a=o=>{const c=o.target,f=Math.random()*(window.innerWidth-200),h=Math.random()*(window.innerHeight-100);c.style.position="fixed",c.style.left=f+"px",c.style.top=h+"px"};return St.jsxs("div",{className:`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ${r?"opacity-100":"opacity-0"}`,children:[St.jsx("h1",{className:"text-6xl md:text-6xl font-bold text-white mb-8 animate-pulse",style:{textShadow:`0 0 20px ${Je.colors.textGlow}, 0 0 40px rgba(255, 8, 68, 0.6), 0 0 60px rgba(255, 8, 68, 0.4)`,fontFamily:"Georgia, serif"},children:Je.text.question}),St.jsx("h2",{className:"text-7xl md:text-8xl font-bold text-red-500 mb-12",style:{textShadow:"0 0 30px rgba(255, 23, 68, 1), 0 0 60px rgba(255, 23, 68, 0.8)",fontFamily:"Georgia, serif",animation:`heartbeat ${Je.animation.heartbeatSpeed}s ease-in-out infinite`},children:Je.text.valentine}),St.jsxs("div",{className:"flex gap-6 pointer-events-auto",children:[St.jsx("button",{className:"px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300",style:{boxShadow:"0 0 20px rgba(255, 23, 68, 0.6)"},onClick:n,children:Je.text.yesButton}),St.jsx("button",{className:"px-12 py-4 bg-gray-800 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-red-400",onMouseEnter:a,children:Je.text.maybeButton})]})]})},k2=()=>St.jsx("style",{children:`
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

    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
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
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-20px) rotate(5deg);
      }
      50% {
        transform: translateY(-10px) rotate(-5deg);
      }
      75% {
        transform: translateY(-15px) rotate(3deg);
      }
    }

    @keyframes sparkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out forwards;
      opacity: 0;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    .animate-sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }

    .animate-slide-in-right {
      animation: slide-in-right 0.7s ease-out forwards;
    }
  `}),X2=()=>{const{showCompliments:r,currentCompliment:t}=Li();if(z2(),!r)return null;const n=Je.text.compliments,a=n[t-1];return a?St.jsxs("div",{className:"absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-rose-900/90 backdrop-blur-sm",children:[St.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((o,c)=>St.jsx("div",{className:"absolute text-pink-300/30 animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,fontSize:`${Math.random()*20+10}px`,animationDelay:`${Math.random()*5}s`,animationDuration:`${Math.random()*3+2}s`},children:"❤️"},c))}),St.jsxs("div",{className:"max-w-6xl mx-4 w-full relative",children:[St.jsxs("div",{className:"text-center mb-12",children:[St.jsxs("div",{className:"mb-6",children:[St.jsx("span",{className:"text-6xl animate-pulse",children:"💍"}),St.jsx("span",{className:"text-4xl mx-4",children:"✨"}),St.jsx("span",{className:"text-6xl animate-pulse",children:"💍"})]}),St.jsx("h1",{className:"text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse",style:{textShadow:"0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 8, 68, 0.6)",fontFamily:"Georgia, serif",background:"linear-gradient(45deg, #FFD700, #FF69B4, #FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"My Queen Shruti 👑"}),St.jsx("p",{className:"text-2xl md:text-3xl text-yellow-200 mb-4",style:{fontFamily:"Georgia, serif",textShadow:"0 0 20px rgba(255, 215, 0, 0.8)"},children:"✨ Why You Deserve The World ✨"}),St.jsxs("div",{className:"flex justify-center items-center space-x-4",children:[St.jsx("span",{className:"text-2xl",children:"🌹"}),St.jsxs("span",{className:"text-xl text-pink-200",children:["Step ",t," of ",n.length]}),St.jsx("span",{className:"text-2xl",children:"🌹"})]})]}),St.jsxs("div",{className:"relative bg-gradient-to-br from-white/95 via-pink-50/95 to-rose-100/95 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl border-4 border-yellow-300/60 text-center transform transition-all duration-700 animate-slide-in-right",style:{boxShadow:"0 0 80px rgba(255, 215, 0, 0.4), 0 0 120px rgba(255, 8, 68, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.1)",minHeight:"400px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[St.jsx("div",{className:"absolute top-4 left-4 text-3xl text-yellow-500",children:"✨"}),St.jsx("div",{className:"absolute top-4 right-4 text-3xl text-yellow-500",children:"✨"}),St.jsx("div",{className:"absolute bottom-4 left-4 text-3xl text-yellow-500",children:"✨"}),St.jsx("div",{className:"absolute bottom-4 right-4 text-3xl text-yellow-500",children:"✨"}),St.jsx("div",{className:"mb-8",children:St.jsxs("span",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full text-white text-lg font-bold shadow-lg",children:["💎 Step ",t," 💎"]})}),St.jsx("h3",{className:"text-4xl md:text-6xl font-bold mb-8",style:{textShadow:"0 0 30px rgba(255, 215, 0, 0.8)",fontFamily:"Georgia, serif",background:"linear-gradient(45deg, #8B0000, #DC143C, #FF1493)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:a.title}),St.jsx("p",{className:"text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-800",style:{fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.1)",lineHeight:"1.8"},children:a.message}),St.jsxs("div",{className:"flex justify-center items-center mt-8 space-x-4",children:[St.jsx("div",{className:"w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"}),St.jsx("span",{className:"text-3xl",children:"💖"}),St.jsx("div",{className:"w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"})]})]},t),St.jsxs("div",{className:"mt-12 text-center",children:[St.jsx("div",{className:"flex justify-center mb-6",children:St.jsx("div",{className:"flex space-x-3",children:n.map((o,c)=>St.jsx("div",{className:`w-6 h-6 rounded-full transition-all duration-500 border-2 ${c<t?"bg-gradient-to-r from-yellow-400 to-pink-400 border-yellow-300 scale-125 shadow-lg":"bg-pink-200/50 border-pink-300/50"}`},c))})}),St.jsx("div",{className:"w-full bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-rose-200/30 rounded-full h-3 max-w-lg mx-auto border border-pink-300/30",children:St.jsx("div",{className:"bg-gradient-to-r from-yellow-400 via-pink-400 to-rose-400 h-3 rounded-full transition-all duration-700 shadow-lg",style:{width:`${t/n.length*100}%`}})}),St.jsx("p",{className:"text-yellow-200 mt-4 text-lg",style:{fontFamily:"Georgia, serif"},children:"🌹 Creating memories just for you 🌹"})]})]})]}):null},W2=()=>{const{showApologies:r,currentApology:t}=Li();if(F2(),!r)return null;const n=Je.text.apologyReasons,a=n[t-1];return a?St.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-gradient-to-br from-red-900/90 via-pink-900/90 to-purple-900/90 backdrop-blur-sm",children:St.jsxs("div",{className:"max-w-4xl mx-4 w-full relative",children:[St.jsxs("div",{className:"text-center mb-8",children:[St.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse",style:{textShadow:"0 0 40px rgba(255, 0, 0, 0.8), 0 0 60px rgba(255, 8, 68, 0.6)",fontFamily:"Georgia, serif"},children:"I'm Sorry, Shruti 💔"}),St.jsxs("p",{className:"text-xl md:text-2xl text-red-200 mb-4",style:{fontFamily:"Georgia, serif",textShadow:"0 0 20px rgba(255, 0, 0, 0.8)"},children:[t," of ",n.length," reasons why I'm truly sorry"]})]}),St.jsxs("div",{className:"relative bg-gradient-to-br from-white/95 via-red-50/95 to-pink-100/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-red-300/60 text-center transform transition-all duration-700 animate-slide-in-right",style:{boxShadow:"0 0 80px rgba(255, 0, 0, 0.4), 0 0 120px rgba(255, 8, 68, 0.3)",minHeight:"300px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[St.jsx("div",{className:"mb-6",children:St.jsxs("span",{className:"inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-lg font-bold shadow-lg",children:["💔 Reason ",t," 💔"]})}),St.jsx("p",{className:"text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto text-gray-800 font-medium",style:{fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.1)",lineHeight:"1.6"},children:a})]},t),St.jsxs("div",{className:"mt-8 text-center",children:[St.jsx("div",{className:"w-full bg-gradient-to-r from-red-200/30 via-pink-200/30 to-purple-200/30 rounded-full h-3 max-w-lg mx-auto border border-red-300/30",children:St.jsx("div",{className:"bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 h-3 rounded-full transition-all duration-700 shadow-lg",style:{width:`${t/n.length*100}%`}})}),St.jsx("p",{className:"text-red-200 mt-4 text-lg",style:{fontFamily:"Georgia, serif"},children:"💔 From the depths of my heart 💔"})]})]})}):null},q2="/assets/how-do-I-stop-loving-you-Bo14GGQK.mp3",Y2=()=>{const r=yn.useRef(null),{hasStarted:t}=Li();return yn.useEffect(()=>{const n=r.current;n&&t&&(n.volume=.3,n.loop=!0,n.play().catch(()=>{console.log("Autoplay blocked or failed")}))},[t]),St.jsx("audio",{ref:r,src:q2,preload:"auto"})},v_=({text:r,speed:t=100,delay:n=0,className:a="",style:o={}})=>{const[c,f]=yn.useState(""),[h,m]=yn.useState(0),[p,v]=yn.useState(!0);return yn.useEffect(()=>{const g=setTimeout(()=>{if(h<r.length){const x=setTimeout(()=>{f(r.slice(0,h+1)),m(h+1)},t);return()=>clearTimeout(x)}},n);return()=>clearTimeout(g)},[h,r,t,n]),yn.useEffect(()=>{const g=setInterval(()=>{v(x=>!x)},500);return()=>clearInterval(g)},[]),St.jsxs("span",{className:a,style:o,children:[c,h<r.length&&St.jsx("span",{className:`inline-block ${p?"opacity-100":"opacity-0"}`,children:"|"})]})},j2=()=>Array.from({length:15},()=>({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,fontSize:`${Math.random()*30+15}px`,animationDelay:`${Math.random()*5}s`,animationDuration:`${Math.random()*4+3}s`})),Z2=()=>{const[r]=yn.useState(j2),{hasStarted:t,showTransition:n,handleStart:a}=Li();if(t||n)return null;const o=()=>{document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),a()};return St.jsxs("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/50 to-pink-900/50 z-50",children:[St.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:r.map((c,f)=>St.jsx("div",{className:"absolute text-pink-300/20 animate-float",style:c,children:"❤️"},f))}),St.jsxs("div",{className:"text-center relative z-10",children:[St.jsxs("div",{className:"mb-12",children:[St.jsx(v_,{text:"Shrutiiiiiiiiiii, I love you",speed:150,className:"text-4xl md:text-6xl font-bold text-white block mb-4",style:{fontFamily:"Georgia, serif",textShadow:"0 0 30px rgba(255, 8, 68, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)"}}),St.jsx(v_,{text:"✨ Forever and Always ✨",speed:80,delay:3e3,className:"text-2xl md:text-3xl text-yellow-200 block",style:{fontFamily:"Georgia, serif",textShadow:"0 0 20px rgba(255, 215, 0, 0.8)"}})]}),St.jsx("div",{className:"mb-12",children:St.jsx("div",{className:"text-9xl mb-8 cursor-pointer hover:scale-110 transition-transform duration-300 inline-block",onClick:o,style:{animation:"heartbeat 1.5s ease-in-out infinite",filter:"drop-shadow(0 0 30px #ff0844) drop-shadow(0 0 60px #FFD700)"},children:"💖"})}),St.jsxs("div",{className:"max-w-2xl mx-4",children:[St.jsx("p",{className:"text-white text-2xl md:text-3xl font-serif text-center leading-relaxed",children:"💍 Click the heart to begin your royal experience, My Queen 👑"}),St.jsxs("div",{className:"flex justify-center items-center mt-8 space-x-6",children:[St.jsx("span",{className:"text-3xl animate-sparkle",children:"✨"}),St.jsx("span",{className:"text-4xl",children:"🌹"}),St.jsx("span",{className:"text-3xl animate-sparkle",children:"✨"})]})]})]})]})},Q2=({text:r,onComplete:t,className:n="",style:a={}})=>{const[o,c]=yn.useState(r.length);return yn.useEffect(()=>{const f=setInterval(()=>{c(h=>h<=0?(clearInterval(f),setTimeout(t,300),0):h-1)},200);return()=>clearInterval(f)},[t]),St.jsx("div",{className:`relative ${n}`,style:a,children:r.split("").map((f,h)=>St.jsx("span",{className:`absolute transition-all duration-500 ${h<o?"opacity-100 scale-100":"opacity-0 scale-150"}`,style:{left:`${h*.6}em`,animationDelay:`${h*.1}s`,zIndex:r.length-h},children:f===" "?" ":f},h))})},K2=()=>{const{showTransition:r,handleTransitionComplete:t}=Li();return r?St.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/80 to-pink-900/80 z-40",children:St.jsx(Q2,{text:"I LOVE YOU",onComplete:t,className:"text-8xl md:text-9xl font-bold",style:{fontFamily:"Georgia, serif",color:"#FFD700",textShadow:"0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 8, 68, 0.6)",width:"8em",height:"1.2em"}})}):null},J2=()=>{const{saidYes:r}=Li();if(!r)return null;const t=()=>{const n=document.createElement("a");n.href="/letter-to-her.pdf",n.download="My-Love-Letter-To-Shruti.pdf",n.click()};return St.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-40 bg-black/70 backdrop-blur-sm pointer-events-auto p-4",children:St.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-4 md:p-6 w-full h-full max-w-7xl shadow-2xl border-4 border-amber-300 overflow-hidden flex flex-col",children:[St.jsxs("div",{className:"text-center mb-3",children:[St.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-amber-900 mb-1",style:{fontFamily:"Georgia, serif"},children:"💌 A Letter From My Heart 💌"}),St.jsx("p",{className:"text-amber-700 text-base md:text-lg",children:"For you, Shruti"})]}),St.jsx("div",{className:"flex-1 overflow-auto mb-3 border-4 border-amber-200 rounded-xl bg-white",children:St.jsx("iframe",{src:"/letter-to-her.pdf",className:"w-full h-full",title:"Love Letter"})}),St.jsx("button",{onClick:t,className:"w-full py-3 md:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300",style:{boxShadow:"0 0 20px rgba(245, 158, 11, 0.6)"},children:"📥 Download My Letter"})]})})};function $2(){return St.jsxs("div",{className:"relative w-full h-screen overflow-hidden",children:[St.jsx(Z2,{}),St.jsx(K2,{}),St.jsx(Y2,{}),St.jsx(H2,{}),St.jsx(W2,{}),St.jsx(X2,{}),St.jsx(B2,{}),St.jsx(G2,{}),St.jsx(V2,{}),St.jsx(J2,{}),St.jsx(k2,{})]})}bS.createRoot(document.getElementById("root")).render(St.jsx(yn.StrictMode,{children:St.jsx($2,{})}));
