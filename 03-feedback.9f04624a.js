!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function w(e){return c=e,f=setTimeout(S,t),d?g(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function S(){var e=b();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?g(e):(r=o=void 0,u)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(S,t),g(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var w=document.querySelector(".feedback-form"),O=w.querySelector('input[name="email"]'),S=w.querySelector('textarea[name="message"]'),h=e(t)((function(){var e={email:O.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);w.addEventListener("input",h),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=t.email,r=t.message;O.value=n,S.value=r}})),w.addEventListener("submit",(function(e){e.preventDefault();var t=O.value,n=S.value;t&&n?(console.log({email:t,message:n}),alert("Дані відправлені"),localStorage.removeItem("feedback-form-state"),O.value="",S.value=""):alert("Всі поля повинні бути заповнені!")}))}();
//# sourceMappingURL=03-feedback.9f04624a.js.map
