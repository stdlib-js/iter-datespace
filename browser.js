// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var O=String.fromCharCode,_=isNaN,T=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){return"string"==typeof r}function A(r){var e,t,n;if(!V(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var F,L=Object.prototype,N=L.toString,C=L.__defineGetter__,$=L.__defineSetter__,D=L.__lookupGetter__,R=L.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(D.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var B=F;function M(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&X.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",H=U()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[q]=t:delete r[q],n}:function(r){return W.call(r)},J=Number,K=J.prototype.toString,Q=U();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return G(r)||rr(r)}M(er,"isPrimitive",G),M(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,or=Math.floor;function ir(r){return or(r)===r}function ar(r){return r<tr&&r>nr&&ir(r)}function ur(r){return G(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return cr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}M(fr,"isPrimitive",ur),M(fr,"isObject",cr),M(pr,"isPrimitive",lr),M(pr,"isObject",sr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)},dr=/./;function hr(r){return"boolean"==typeof r}var yr=Boolean,br=Boolean.prototype.toString,vr=U();function wr(r){return"object"==typeof r&&(r instanceof yr||(vr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function mr(r){return hr(r)||wr(r)}function jr(){return new Function("return this;")()}M(mr,"isPrimitive",hr),M(mr,"isObject",wr);var Er="object"==typeof self?self:null,Or="object"==typeof window?window:null,_r="object"==typeof globalThis?globalThis:null,Tr=function(r){if(arguments.length){if(!hr(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jr()}if(_r)return _r;if(Er)return Er;if(Or)return Or;throw new Error("unexpected error. Unable to resolve global object.")}(),Sr=Tr.document&&Tr.document.childNodes,xr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Ir=/^\s*function\s*([^(]*)/i;function Pr(r){return null!==r&&"object"==typeof r}function Vr(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ir.exec(n.toString()))return e[1]}return Pr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(kr,"REGEXP",Ir),M(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var Ar="function"==typeof dr||"object"==typeof xr||"function"==typeof Sr?function(r){return Vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Vr(r).toLowerCase():e};function Fr(r){return"function"===Ar(r)}var Lr,Nr=Object,Cr=Object.getPrototypeOf;Lr=Fr(Object.getPrototypeOf)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $r=Lr,Dr=Object.prototype;function Rr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=Nr(r),$r(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&Fr(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&Fr(e.isPrototypeOf)&&(e===Dr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Br(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=9007199254740991}function Mr(r){return"string"==typeof r}var Gr=String.prototype.valueOf,Zr=U();function Ur(r){return"object"==typeof r&&(r instanceof String||(Zr?function(r){try{return Gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Wr(r){return Mr(r)||Ur(r)}function Xr(r){return r!=r}function zr(r){return G(r)&&Xr(r)}function Yr(r){return rr(r)&&Xr(r.valueOf())}function qr(r){return zr(r)||Yr(r)}function Hr(r,e,t){var n,o,i;if(!Br(r)&&!Mr(r))throw new TypeError(A("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!ur(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));(o=t)<0&&(o=0)}else o=0;if(Mr(r)){if(!Mr(e))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1!==r.indexOf(e,o)}if(n=r.length,zr(e)){for(i=o;i<n;i++)if(zr(r[i]))return!0;return!1}for(i=o;i<n;i++)if(r[i]===e)return!0;return!1}M(Wr,"isPrimitive",Mr),M(Wr,"isObject",Ur),M(qr,"isPrimitive",zr),M(qr,"isObject",Yr);var Jr="function"==typeof Y&&"symbol"==typeof Y("foo")&&z(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null;function Kr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Qr=Math.ceil,re=Math.round,ee=Date.prototype.getDay,te=U();function ne(r){return"object"==typeof r&&(r instanceof Date||(te?function(r){try{return ee.call(r),!0}catch(r){return!1}}(r):"[object Date]"===H(r)))}function oe(r){return Mr(r)?(r=Date.parse(r))!=r?new TypeError(Kr("0Oh3z,Lx",r)):r:lr(r)?r:ne(r)?r.getTime():new TypeError(Kr("0Oh40,Ly",r))}var ie=100,ae="floor",ue=["floor","ceil","round"],ce={floor:or,ceil:Qr,round:re};return function r(e,t,n,o){var i,a,u,c,f,l,s,p,g,d;if((l=oe(e))instanceof Error)throw l;if((s=oe(t))instanceof Error)throw s;if(u={round:ae},3===arguments.length)if(lr(n))p=n;else{if(!Rr(n))throw new TypeError(Kr("0Oh42,Lw",n));if(p=ie,z(n,"round")){if(!Hr(ue,n.round))throw new TypeError(Kr("0Oh41,Lv",n.round));u.round=n.round}}else if(arguments.length>3){if(!lr(n))throw new TypeError(Kr("0Oh2m,L9",n));if(p=n,!Rr(o))throw new TypeError(Kr("0Oh43,Lp",o));if(z(o,"round")){if(!Hr(ue,o.round))throw new TypeError(Kr("0Oh41,Lv",o.round));u.round=o.round}}else p=ie;return c=ce[u.round],i=(s-l)/(g=p-1),d=-1,M(a={},"next",h),M(a,"return",y),Jr&&M(a,Jr,b),a;function h(){return d+=1,f||d>=p?{done:!0}:0===d?{value:new Date(l),done:!1}:d===g?{value:new Date(s),done:!1}:{value:new Date(c(l+d*i)),done:!1}}function y(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function b(){return r(e,t,p,u)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDatespace=e();
//# sourceMappingURL=browser.js.map