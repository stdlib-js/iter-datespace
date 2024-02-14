// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDatespace=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,O=isNaN,T=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=V.exec(r);n;)(e=r.slice(o,V.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=V.lastIndex,n=V.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function F(r){var e,t;if(!P(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var A,N=Object.prototype,D=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,M=N.__lookupGetter__,B=N.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(M.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=A;function G(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return U&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&z.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,J="function"==typeof Y?Y.toStringTag:"";var q=Z()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[J],e=X(r,J);try{r[J]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[J]=t:delete r[J],n}:function(r){return W.call(r)},H=Number,K=H.prototype.toString;var Q=Z();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function er(r){return L(r)||rr(r)}G(er,"isPrimitive",L),G(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=H.NEGATIVE_INFINITY,or=Math.floor;function ir(r){return or(r)===r}function ar(r){return r<tr&&r>nr&&ir(r)}function ur(r){return L(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return cr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}G(fr,"isPrimitive",ur),G(fr,"isObject",cr),G(pr,"isPrimitive",lr),G(pr,"isObject",sr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var dr=/./;function br(r){return"boolean"==typeof r}var yr=Boolean,hr=Boolean.prototype.toString;var vr=Z();function wr(r){return"object"==typeof r&&(r instanceof yr||(vr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function mr(r){return br(r)||wr(r)}function jr(){return new Function("return this;")()}G(mr,"isPrimitive",br),G(mr,"isObject",wr);var Er="object"==typeof self?self:null,_r="object"==typeof window?window:null,Or="object"==typeof global?global:null,Tr="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!br(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jr()}if(Tr)return Tr;if(Er)return Er;if(_r)return _r;if(Or)return Or;throw new Error("unexpected error. Unable to resolve global object.")}(),xr=Sr.document&&Sr.document.childNodes,Vr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Ir=/^\s*function\s*([^(]*)/i;function Pr(r){return null!==r&&"object"==typeof r}function Fr(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ir.exec(n.toString()))return e[1]}return Pr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(kr,"REGEXP",Ir),G(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var Ar="function"==typeof dr||"object"==typeof Vr||"function"==typeof xr?function(r){return Fr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Fr(r).toLowerCase():e};function Nr(r){return"function"===Ar(r)}var Dr,$r=Object,Cr=Object.getPrototypeOf;Dr=Nr(Object.getPrototypeOf)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Mr=Dr;var Br=Object.prototype;function Rr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=$r(r),Mr(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&Nr(e.constructor)&&"[object Function]"===q(e.constructor)&&X(e,"isPrototypeOf")&&Nr(e.isPrototypeOf)&&(e===Br||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=9007199254740991}function Lr(r){return"string"==typeof r}var Ur=String.prototype.valueOf;var Zr=Z();function Wr(r){return"object"==typeof r&&(r instanceof String||(Zr?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function zr(r){return Lr(r)||Wr(r)}function Xr(r){return r!=r}function Yr(r){return L(r)&&Xr(r)}function Jr(r){return rr(r)&&Xr(r.valueOf())}function qr(r){return Yr(r)||Jr(r)}function Hr(r,e,t){var n,o,i;if(!Gr(r)&&!Lr(r))throw new TypeError(F("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!ur(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));(o=t)<0&&(o=0)}else o=0;if(Lr(r)){if(!Lr(e))throw new TypeError(F("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1!==r.indexOf(e,o)}if(n=r.length,Yr(e)){for(i=o;i<n;i++)if(Yr(r[i]))return!0;return!1}for(i=o;i<n;i++)if(r[i]===e)return!0;return!1}G(zr,"isPrimitive",Lr),G(zr,"isObject",Wr),G(qr,"isPrimitive",Yr),G(qr,"isObject",Jr);var Kr="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null,Qr=Math.ceil,re=Math.round,ee=Date.prototype.getDay;var te=Z();function ne(r){return"object"==typeof r&&(r instanceof Date||(te?function(r){try{return ee.call(r),!0}catch(r){return!1}}(r):"[object Date]"===q(r)))}function oe(r){return Lr(r)?(r=Date.parse(r))!=r?new TypeError(F("invalid argument. Unable to parse date string. Value: `%s`.",r)):r:lr(r)?r:ne(r)?r.getTime():new TypeError(F("invalid argument. Must provide either a Date object, a JavaScript timestamp (i.e., a nonnegative integer), or a date string. Value: `%s`.",r))}var ie=100,ae="floor",ue=["floor","ceil","round"],ce={floor:or,ceil:Qr,round:re};return function r(e,t,n,o){var i,a,u,c,f,l,s,p,g,d;if((l=oe(e))instanceof Error)throw l;if((s=oe(t))instanceof Error)throw s;if(u={round:ae},3===arguments.length)if(lr(n))p=n;else{if(!Rr(n))throw new TypeError(F("invalid argument. Third argument must be either a nonnegative integer or an options object. Value: `%s`.",n));if(p=ie,X(n,"round")){if(!Hr(ue,n.round))throw new TypeError(F("invalid option. Unrecognized rounding mode. Option: `%s`.",n.round));u.round=n.round}}else if(arguments.length>3){if(!lr(n))throw new TypeError(F("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(p=n,!Rr(o))throw new TypeError(F("invalid argument. Fourth argument must be an object. Value: `%s`.",o));if(X(o,"round")){if(!Hr(ue,o.round))throw new TypeError(F("invalid option. Unrecognized rounding mode. Option: `%s`.",o.round));u.round=o.round}}else p=ie;return c=ce[u.round],i=(s-l)/(g=p-1),d=-1,G(a={},"next",b),G(a,"return",y),Kr&&G(a,Kr,h),a;function b(){return d+=1,f||d>=p?{done:!0}:0===d?{value:new Date(l),done:!1}:d===g?{value:new Date(s),done:!1}:{value:new Date(c(l+d*i)),done:!1}}function y(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function h(){return r(e,t,p,u)}}}));
//# sourceMappingURL=index.js.map
