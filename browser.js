// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":f(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var _=String.fromCharCode,O=isNaN,T=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,a,f,l,s,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",l=1,s=0;s<e.length;s++)if(c(n=e[s]))f+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,o;for(t=[],o=0,n=V.exec(e);n;)(r=e.slice(o,V.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),o=V.lastIndex,n=V.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function P(e){return"string"==typeof e}function A(e){var r,t,n;if(!P(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var F,N=Object.prototype,D=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,M=N.__lookupGetter__,B=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(M.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var R=F;function G(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return U&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&z.call(e,r)}var Y="function"==typeof Symbol?Symbol:void 0,J="function"==typeof Y?Y.toStringTag:"",q=Z()?function(e){var r,t,n;if(null==e)return W.call(e);t=e[J],r=X(e,J);try{e[J]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[J]=t:delete e[J],n}:function(e){return W.call(e)},H=Number,K=H.prototype.toString,Q=Z();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function re(e){return L(e)||ee(e)}G(re,"isPrimitive",L),G(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,oe=Math.floor;function ie(e){return oe(e)===e}function ae(e){return e<te&&e>ne&&ie(e)}function ue(e){return L(e)&&ae(e)}function ce(e){return ee(e)&&ae(e.valueOf())}function fe(e){return ue(e)||ce(e)}function le(e){return ue(e)&&e>=0}function se(e){return ce(e)&&e.valueOf()>=0}function pe(e){return le(e)||se(e)}G(fe,"isPrimitive",ue),G(fe,"isObject",ce),G(pe,"isPrimitive",le),G(pe,"isObject",se);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)},de=/./;function ye(e){return"boolean"==typeof e}var be=Boolean,he=Boolean.prototype.toString,ve=Z();function we(e){return"object"==typeof e&&(e instanceof be||(ve?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function me(e){return ye(e)||we(e)}function je(){return new Function("return this;")()}G(me,"isPrimitive",ye),G(me,"isObject",we);var Ee="object"==typeof self?self:null,_e="object"==typeof window?window:null,Oe="object"==typeof globalThis?globalThis:null,Te=function(e){if(arguments.length){if(!ye(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return je()}if(Oe)return Oe;if(Ee)return Ee;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=Te.document&&Te.document.childNodes,xe=Int8Array;function Ve(){return/^\s*function\s*([^(]*)/i}var ke=/^\s*function\s*([^(]*)/i;function Ie(e){return null!==e&&"object"==typeof e}function Pe(e){var r,t,n,o;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ke.exec(n.toString()))return r[1]}return Ie(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(Ve,"REGEXP",ke),G(Ie,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ie));var Ae="function"==typeof de||"object"==typeof xe||"function"==typeof Se?function(e){return Pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Pe(e).toLowerCase():r};function Fe(e){return"function"===Ae(e)}var Ne,De=Object,$e=Object.getPrototypeOf;Ne=Fe(Object.getPrototypeOf)?$e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ce=Ne,Me=Object.prototype;function Be(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(r=function(e){return null==e?null:(e=De(e),Ce(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&Fe(r.constructor)&&"[object Function]"===q(r.constructor)&&X(r,"isPrototypeOf")&&Fe(r.isPrototypeOf)&&(r===Me||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function Re(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ie(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ge(e){return"string"==typeof e}var Le=String.prototype.valueOf,Ue=Z();function Ze(e){return"object"==typeof e&&(e instanceof String||(Ue?function(e){try{return Le.call(e),!0}catch(e){return!1}}(e):"[object String]"===q(e)))}function We(e){return Ge(e)||Ze(e)}function ze(e){return e!=e}function Xe(e){return L(e)&&ze(e)}function Ye(e){return ee(e)&&ze(e.valueOf())}function Je(e){return Xe(e)||Ye(e)}function qe(e,r,t){var n,o,i;if(!Re(e)&&!Ge(e))throw new TypeError(A("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!ue(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));(o=t)<0&&(o=0)}else o=0;if(Ge(e)){if(!Ge(r))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,o)}if(n=e.length,Xe(r)){for(i=o;i<n;i++)if(Xe(e[i]))return!0;return!1}for(i=o;i<n;i++)if(e[i]===r)return!0;return!1}G(We,"isPrimitive",Ge),G(We,"isObject",Ze),G(Je,"isPrimitive",Xe),G(Je,"isObject",Ye);var He="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null,Ke=Math.ceil,Qe=Math.round,er=Date.prototype.getDay,rr=Z();function tr(e){return"object"==typeof e&&(e instanceof Date||(rr?function(e){try{return er.call(e),!0}catch(e){return!1}}(e):"[object Date]"===q(e)))}function nr(e){return Ge(e)?(e=Date.parse(e))!=e?new TypeError(A("invalid argument. Unable to parse date string. Value: `%s`.",e)):e:le(e)?e:tr(e)?e.getTime():new TypeError(A("invalid argument. Must provide either a Date object, a JavaScript timestamp (i.e., a nonnegative integer), or a date string. Value: `%s`.",e))}var or=100,ir="floor",ar=["floor","ceil","round"],ur={floor:oe,ceil:Ke,round:Qe};return function e(r,t,n,o){var i,a,u,c,f,l,s,p,g,d;if((l=nr(r))instanceof Error)throw l;if((s=nr(t))instanceof Error)throw s;if(u={round:ir},3===arguments.length)if(le(n))p=n;else{if(!Be(n))throw new TypeError(A("invalid argument. Third argument must be either a nonnegative integer or an options object. Value: `%s`.",n));if(p=or,X(n,"round")){if(!qe(ar,n.round))throw new TypeError(A("invalid option. Unrecognized rounding mode. Option: `%s`.",n.round));u.round=n.round}}else if(arguments.length>3){if(!le(n))throw new TypeError(A("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(p=n,!Be(o))throw new TypeError(A("invalid argument. Fourth argument must be an object. Value: `%s`.",o));if(X(o,"round")){if(!qe(ar,o.round))throw new TypeError(A("invalid option. Unrecognized rounding mode. Option: `%s`.",o.round));u.round=o.round}}else p=or;return c=ur[u.round],i=(s-l)/(g=p-1),d=-1,G(a={},"next",y),G(a,"return",b),He&&G(a,He,h),a;function y(){return d+=1,f||d>=p?{done:!0}:0===d?{value:new Date(l),done:!1}:d===g?{value:new Date(s),done:!1}:{value:new Date(c(l+d*i)),done:!1}}function b(e){return f=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return e(r,t,p,u)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterDatespace=r();
//# sourceMappingURL=browser.js.map