// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterDatespace=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||c.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,e,n;if(null==t)return b.call(t);e=t[m],r=v(t,m);try{t[m]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[m]=e:delete t[m],n}:function(t){return b.call(t)},w=Number,h=w.prototype.toString;var j=s();function _(t){return"object"==typeof t&&(t instanceof w||(j?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function O(t){return p(t)||_(t)}l(O,"isPrimitive",p),l(O,"isObject",_);var E=Number.POSITIVE_INFINITY,S=w.NEGATIVE_INFINITY,T=Math.floor;function P(t){return T(t)===t}function C(t){return t<E&&t>S&&P(t)}function G(t){return p(t)&&C(t)}function I(t){return _(t)&&C(t.valueOf())}function A(t){return G(t)||I(t)}function D(t){return G(t)&&t>=0}function N(t){return I(t)&&t.valueOf()>=0}function V(t){return D(t)||N(t)}l(A,"isPrimitive",G),l(A,"isObject",I),l(V,"isPrimitive",D),l(V,"isObject",N);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var x=/./;function B(t){return"boolean"==typeof t}var M=Boolean.prototype.toString;var k=s();function L(t){return"object"==typeof t&&(t instanceof Boolean||(k?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function R(t){return B(t)||L(t)}function U(){return new Function("return this;")()}l(R,"isPrimitive",B),l(R,"isObject",L);var Y="object"==typeof self?self:null,X="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;var H=function(t){if(arguments.length){if(!B(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return U()}if(Y)return Y;if(X)return X;if(z)return z;throw new Error("unexpected error. Unable to resolve global object.")}(),J=H.document&&H.document.childNodes,K=Int8Array;function Q(){return/^\s*function\s*([^(]*)/i}var W=/^\s*function\s*([^(]*)/i;function Z(t){return null!==t&&"object"==typeof t}function $(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=W.exec(n.toString()))return r[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(Q,"REGEXP",W),l(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!F(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Z));var tt="function"==typeof x||"object"==typeof K||"function"==typeof J?function(t){return $(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?$(t).toLowerCase():r};function rt(t){return"function"===tt(t)}var et,nt=Object.getPrototypeOf;et=rt(Object.getPrototypeOf)?nt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ot=et;var ut=Object.prototype;function it(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!F(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),ot(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&rt(r.constructor)&&"[object Function]"===g(r.constructor)&&v(r,"isPrototypeOf")&&rt(r.isPrototypeOf)&&(r===ut||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function ft(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&P(t.length)&&t.length>=0&&t.length<=9007199254740991}function ct(t){return"string"==typeof t}var at=String.prototype.valueOf;var lt=s();function pt(t){return"object"==typeof t&&(t instanceof String||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function yt(t){return ct(t)||pt(t)}function st(t){return t!=t}function bt(t){return p(t)&&st(t)}function dt(t){return _(t)&&st(t.valueOf())}function vt(t){return bt(t)||dt(t)}function mt(t,r,e){var n,o,u;if(!ft(t)&&!ct(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!G(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");(o=e)<0&&(o=0)}else o=0;if(ct(t)){if(!ct(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==t.indexOf(r,o)}if(n=t.length,bt(r)){for(u=o;u<n;u++)if(bt(t[u]))return!0;return!1}for(u=o;u<n;u++)if(t[u]===r)return!0;return!1}l(yt,"isPrimitive",ct),l(yt,"isObject",pt),l(vt,"isPrimitive",bt),l(vt,"isObject",dt);var gt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&v(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function wt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var ht=Math.ceil,jt=Math.round,_t=Date.prototype.getDay;var Ot=s();function Et(t){return"object"==typeof t&&(t instanceof Date||(Ot?function(t){try{return _t.call(t),!0}catch(t){return!1}}(t):"[object Date]"===g(t)))}function St(t){return ct(t)?(t=Date.parse(t))!=t?new TypeError(wt("0CG4C",t)):t:D(t)?t:Et(t)?t.getTime():new TypeError(wt("0CG4D",t))}var Tt=100,Pt="floor",Ct=["floor","ceil","round"],Gt={floor:T,ceil:ht,round:jt};return function t(r,e,n,o){var u,i,f,c,a,p,y,s,b,d;if((p=St(r))instanceof Error)throw p;if((y=St(e))instanceof Error)throw y;if(f={round:Pt},3===arguments.length)if(D(n))s=n;else{if(!it(n))throw new TypeError(wt("0CG4F",n));if(s=Tt,v(n,"round")){if(!mt(Ct,n.round))throw new TypeError(wt("0CG4E",n.round));f.round=n.round}}else if(arguments.length>3){if(!D(n))throw new TypeError(wt("0CG2y",n));if(s=n,!it(o))throw new TypeError(wt("0CG4G",o));if(v(o,"round")){if(!mt(Ct,o.round))throw new TypeError(wt("0CG4E",o.round));f.round=o.round}}else s=Tt;return c=Gt[f.round],u=(y-p)/(b=s-1),d=-1,l(i={},"next",m),l(i,"return",g),gt&&l(i,gt,w),i;function m(){return d+=1,a||d>=s?{done:!0}:0===d?{value:new Date(p),done:!1}:d===b?{value:new Date(y),done:!1}:{value:new Date(c(p+d*u)),done:!1}}function g(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function w(){return t(r,e,s,f)}}}));
//# sourceMappingURL=index.js.map
