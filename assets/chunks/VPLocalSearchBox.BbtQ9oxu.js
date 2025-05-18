var e=function(exports){"use strict";function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}function n(e,n){if(t(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||`default`);if(t(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(n===`string`?String:Number)(e)}function r(e){var r=n(e,`string`);return t(r)==`symbol`?r:r+``}function i(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}return exports.defineProperty=i,exports}({});import{__vitePreload as t,computedAsync as n,createApp as r,createSearchTranslate as i,dataSymbol as a,escapeRegExp as o,inBrowser as s,notNullish as c,onKeyStroke as l,pathToFile as u,toArray as d,tryOnScopeDispose as f,unrefElement as p,useData as m,useEventListener as h,useLocalStorage as g,useRouter as _,useScrollLock as v,useSessionStorage as y,vModelText as ee,watchDebounced as te,withModifiers as ne}from"./translation.B67rRdMo.js";import{Fragment as re,Teleport as ie,computed as b,createBaseVNode as x,createBlock as ae,createCommentVNode as oe,createElementBlock as S,createTextVNode as C,defineComponent as w,isRef as se,markRaw as ce,nextTick as T,normalizeClass as le,onBeforeUnmount as ue,onMounted as de,openBlock as E,ref as D,renderList as fe,shallowRef as O,toDisplayString as k,toValue as pe,unref as A,watch as me,watchEffect as he,withDirectives as ge}from"./runtime-core.esm-bundler.xrSZro7G.js";import{__plugin_vue_export_helper_default as j}from"./plugin-vue_export-helper.BuSsDyiE.js";var _e={root:()=>t(()=>import(`./@localSearchIndexroot.BNUVEVjP.js`),[])},ve=[`input:not([inert])`,`select:not([inert])`,`textarea:not([inert])`,`a[href]:not([inert])`,`button:not([inert])`,`[tabindex]:not(slot):not([inert])`,`audio[controls]:not([inert])`,`video[controls]:not([inert])`,`[contenteditable]:not([contenteditable="false"]):not([inert])`,`details>summary:first-of-type:not([inert])`,`details:not([inert])`],M=/* @__PURE__ */ ve.join(`,`),N=typeof Element>`u`,P=N?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,F=!N&&Element.prototype.getRootNode?function(e){var t;return e==null?void 0:(t=e.getRootNode)?.call(e)}:function(e){return e?.ownerDocument},I=function e(t,n){var r;n===void 0&&(n=!0);var i=t==null?void 0:(r=t.getAttribute)?.call(t,`inert`),a=i===``||i===`true`,o=a||n&&t&&e(t.parentNode);return o},L=function(e){var t,n=e==null?void 0:(t=e.getAttribute)?.call(e,`contenteditable`);return n===``||n===`true`},ye=function(e,t,n){if(I(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(M));return t&&P.call(e,M)&&r.unshift(e),r=r.filter(n),r},be=function e(t,n,r){for(var i=[],a=Array.from(t);a.length;){var o=a.shift();if(!I(o,!1))if(o.tagName===`SLOT`){var s=o.assignedElements(),c=s.length?s:o.children,l=e(c,!0,r);r.flatten?i.push.apply(i,l):i.push({scopeParent:o,candidates:l})}else{var u=P.call(o,M);u&&r.filter(o)&&(n||!t.includes(o))&&i.push(o);var d=o.shadowRoot||typeof r.getShadowRoot==`function`&&r.getShadowRoot(o),f=!I(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(o));if(d&&f){var p=e(d===!0?o.children:d.children,!0,r);r.flatten?i.push.apply(i,p):i.push({scopeParent:o,candidates:p})}else a.unshift.apply(a,o.children)}}return i},R=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},z=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||L(e))&&!R(e)?0:e.tabIndex},xe=function(e,t){var n=z(e);return n<0&&t&&!R(e)?0:n},B=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Se=function(e){return e.tagName===`INPUT`},V=function(e){return Se(e)&&e.type===`hidden`},Ce=function(e){var t=e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`});return t},H=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},we=function(e){if(!e.name)return!0;var t=e.form||F(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=H(r,e.form);return!i||i===e},U=function(e){return Se(e)&&e.type===`radio`},W=function(e){return U(e)&&!we(e)},G=function(e){var t,n=e&&F(e),r=(t=n)?.host,i=!1;if(n&&n!==e){var a,o,s;for(i=!!((a=r)!=null&&(o=a.ownerDocument)!=null&&o.contains(r)||e!=null&&(s=e.ownerDocument)!=null&&s.contains(e));!i&&r;){var c,l,u;n=F(r),r=(c=n)?.host,i=!!((l=r)!=null&&(u=l.ownerDocument)!=null&&u.contains(r))}}return i},Te=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},Ee=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility===`hidden`)return!0;var i=P.call(e,`details>summary:first-of-type`),a=i?e.parentElement:e;if(P.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=F(e);if(s&&!s.shadowRoot&&r(s)===!0)return Te(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(G(e))return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return Te(e);return!1},K=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return P.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},q=function(e,t){return!(t.disabled||I(t)||V(t)||Ee(t,e)||Ce(t)||K(t))},De=function(e,t){return!(W(t)||z(t)<0||!q(e,t))},Oe=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},ke=function e(t){var n=[],r=[];return t.forEach(function(t,i){var a=!!t.scopeParent,o=a?t.scopeParent:t,s=xe(o,a),c=a?e(t.candidates):o;s===0?a?n.push.apply(n,c):n.push(o):r.push({documentOrder:i,tabIndex:s,item:t,isScope:a,content:c})}),r.sort(B).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},Ae=function(e,t){t||={};var n;return n=t.getShadowRoot?be([e],t.includeContainer,{filter:De.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Oe}):ye(e,t.includeContainer,De.bind(null,t)),ke(n)},je=function(e,t){t||={};var n;return n=t.getShadowRoot?be([e],t.includeContainer,{filter:q.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):ye(e,t.includeContainer,q.bind(null,t)),n},J=function(e,t){if(t||={},!e)throw Error(`No node provided`);return P.call(e,M)===!1?!1:De(t,e)},Me=/* @__PURE__ */ ve.concat(`iframe`).join(`,`),Ne=function(e,t){if(t||={},!e)throw Error(`No node provided`);return P.call(e,Me)===!1?!1:q(t,e)};function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Fe(e){if(Array.isArray(e))return Pe(e)}function Ie(e,t,n){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Le(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Re(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ze(Object(n),!0).forEach(function(t){Ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ve(e){return Fe(e)||Le(e)||We(e)||Re()}function He(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ue(e){var t=He(e,`string`);return typeof t==`symbol`?t:t+``}function We(e,t){if(e){if(typeof e==`string`)return Pe(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pe(e,t):void 0}}var Ge={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n._setPausedState(!0)}var r=e.indexOf(t);r===-1||e.splice(r,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},Ke=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},qe=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},Y=function(e){return e?.key===`Tab`||e?.keyCode===9},Je=function(e){return Y(e)&&!e.shiftKey},Ye=function(e){return Y(e)&&e.shiftKey},Xe=function(e){return setTimeout(e,0)},X=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return typeof e==`function`?e.apply(void 0,n):e},Ze=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},Qe=[],$e=function(e,t){var n=t?.document||document,r=t?.trapStack||Qe,i=Be({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Je,isKeyBackward:Ye},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r===void 0?!1:r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,Ve(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!Ne(e,i.tabbableOptions))if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0],r=t&&t.firstTabbableNode;e=r||l(`fallbackFocus`)}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=Ae(e,i.tabbableOptions),n=je(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return J(e)}),s=n.slice().reverse().find(function(e){return J(e)}),c=!!t.find(function(e){return z(e)>0});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:c,firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return J(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return J(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){if(e!==!1&&e!==f(document)){if(!e||!e.focus){p(u());return}e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,Ke(e)&&e.select()}},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||(t===!1?!1:e)},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r===void 0?!1:r;t||=Ze(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||Ne(t,i.tabbableOptions)&&!J(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=z(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else Y(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||Ne(t,i.tabbableOptions)&&!J(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=z(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else Y(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){var t=Ze(e);if(!(c(t,e)>=0)){if(X(i.clickOutsideDeactivates,e)){o.deactivate({returnFocus:i.returnFocusOnDeactivate});return}X(i.allowOutsideClick,e)||e.preventDefault()}},_=function(e){var t=Ze(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode)if(z(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return z(e)>0})})||(o=!1);else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(Y(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},ee=function(e){qe(e)&&X(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},te=function(e){var t=Ze(e);c(t,e)>=0||X(i.clickOutsideDeactivates,e)||X(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},ne=function(){if(a.active)return Ge.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?Xe(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,te,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,ee),o},re=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,te,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,ee),o},ie=function(e){var t=e.some(function(e){var t=Array.from(e.removedNodes);return t.some(function(e){return e===a.mostRecentlyFocusedNode})});t&&p(u())},b=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(ie):void 0,x=function(){b&&(b.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){b.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),r=s(e,`onPostActivate`),i=s(e,`checkCanFocusTrap`);i||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=n.activeElement,t?.();var o=function(){i&&d(),ne(),x(),r?.()};return i?(i(a.containers.concat()).then(o,o),this):(o(),this)},deactivate:function(e){if(!a.active)return this;var t=Be({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,re(),a.active=!1,a.paused=!1,x(),Ge.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){Xe(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map(function(e){return typeof e==`string`?n.querySelector(e):e}),a.active&&d(),x(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),re(),x(),r?.()}else{var i=s(t,`onUnpause`),o=s(t,`onPostUnpause`);i?.(),d(),ne(),x(),o?.()}return this}}}),o.updateContainerElements(e),o};function et(e,t={}){let n,{immediate:r,...i}=t,a=O(!1),o=O(!1),s=e=>n&&n.activate(e),l=e=>n&&n.deactivate(e),u=()=>{n&&(n.pause(),o.value=!0)},m=()=>{n&&(n.unpause(),o.value=!1)},h=b(()=>{let t=pe(e);return d(t).map(e=>{let t=pe(e);return typeof t==`string`?t:p(t)}).filter(c)});return me(h,e=>{e.length&&(n=$e(e,{...i,onActivate(){a.value=!0,t.onActivate&&t.onActivate()},onDeactivate(){a.value=!1,t.onDeactivate&&t.onDeactivate()}}),r&&s())},{flush:`post`}),f(()=>l()),{hasFocus:a,isPaused:o,activate:s,deactivate:l,pause:u,unpause:m}}
/**
* Marks search terms in DOM elements
* @example
* new Mark(document.querySelector(".context")).mark("lorem ipsum");
* @example
* new Mark(document.querySelector(".context")).markRegExp(/lorem/gmi);
*/
var tt=class e{
/**
* @param {HTMLElement|HTMLElement[]|NodeList|string} ctx - The context DOM
* element, an array of DOM elements, a NodeList or a selector
* @param {boolean} [iframes=true] - A boolean indicating if iframes should
* be handled
* @param {string[]} [exclude=[]] - An array containing exclusion selectors
* for iframes
* @param {number} [iframesTimeout=5000] - A number indicating the ms to
* wait before an iframe should be skipped, in case the load event isn't
* fired. This also applies if the user is offline and the resource of the
* iframe is online (either by the browsers "offline" mode or because
* there's no internet connection)
*/
constructor(e,t=!0,n=[],r=5e3){
/**
* The maximum ms to wait for a load event before skipping an iframe
* @type {number}
*/
this.ctx=e,this.iframes=t,this.exclude=n,this.iframesTimeout=r}
/**
* Checks if the specified DOM element matches the selector
* @param  {HTMLElement} element - The DOM element
* @param  {string|string[]} selector - The selector or an array with
* selectors
* @return {boolean}
* @access public
*/
static matches(e,t){let n=typeof t==`string`?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){let t=!1;return n.every(n=>r.call(e,n)?(t=!0,!1):!0),t}else return!1}
/**
* Returns all contexts filtered by duplicates (even nested)
* @return {HTMLElement[]} - An array containing DOM contexts
* @access protected
*/
getContexts(){let e,t=[];return e=this.ctx===void 0||!this.ctx?[]:NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:typeof this.ctx==`string`?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx],e.forEach(e=>{let n=t.filter(t=>t.contains(e)).length>0;t.indexOf(e)===-1&&!n&&t.push(e)}),t}
/**
* @callback DOMIterator~getIframeContentsSuccessCallback
* @param {HTMLDocument} contents - The contentDocument of the iframe
*/
/**
* Calls the success callback function with the iframe document. If it can't
* be accessed it calls the error callback function
* @param {HTMLElement} ifr - The iframe DOM element
* @param {DOMIterator~getIframeContentsSuccessCallback} successFn
* @param {function} [errorFn]
* @access protected
*/
getIframeContents(e,t,n=()=>{}){let r;try{let t=e.contentWindow;if(r=t.document,!t||!r)throw Error(`iframe inaccessible`)}catch{n()}r&&t(r)}
/**
* Checks if an iframe is empty (if about:blank is the shown page)
* @param {HTMLElement} ifr - The iframe DOM element
* @return {boolean}
* @access protected
*/
isIframeBlank(e){let t=`about:blank`,n=e.getAttribute(`src`).trim(),r=e.contentWindow.location.href;return r===t&&n!==t&&n}
/**
* Observes the onload event of an iframe and calls the success callback or
* the error callback if the iframe is inaccessible. If the event isn't
* fired within the specified {@link DOMIterator#iframesTimeout}, then it'll
* call the error callback too
* @param {HTMLElement} ifr - The iframe DOM element
* @param {DOMIterator~getIframeContentsSuccessCallback} successFn
* @param {function} errorFn
* @access protected
*/
observeIframeLoad(e,t,n){let r=!1,i=null,a=()=>{if(!r){r=!0,clearTimeout(i);try{this.isIframeBlank(e)||(e.removeEventListener(`load`,a),this.getIframeContents(e,t,n))}catch{n()}}};e.addEventListener(`load`,a),i=setTimeout(a,this.iframesTimeout)}
/**
* Callback when the iframe is ready
* @callback DOMIterator~onIframeReadySuccessCallback
* @param {HTMLDocument} contents - The contentDocument of the iframe
*/
/**
* Callback if the iframe can't be accessed
* @callback DOMIterator~onIframeReadyErrorCallback
*/
/**
* Calls the callback if the specified iframe is ready for DOM access
* @param  {HTMLElement} ifr - The iframe DOM element
* @param  {DOMIterator~onIframeReadySuccessCallback} successFn - Success
* callback
* @param {DOMIterator~onIframeReadyErrorCallback} errorFn - Error callback
* @see {@link http://stackoverflow.com/a/36155560/3894981} for
* background information
* @access protected
*/
onIframeReady(e,t,n){try{e.contentWindow.document.readyState===`complete`?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch{n()}}
/**
* Callback when all iframes are ready for DOM access
* @callback DOMIterator~waitForIframesDoneCallback
*/
/**
* Iterates over all iframes and calls the done callback when all of them
* are ready for DOM access (including nested ones)
* @param {HTMLElement} ctx - The context DOM element
* @param {DOMIterator~waitForIframesDoneCallback} done - Done callback
*/
waitForIframes(e,t){let n=0;this.forEachIframe(e,()=>!0,e=>{n++,this.waitForIframes(e.querySelector(`html`),()=>{--n||t()})},e=>{e||t()})}
/**
* Callback allowing to filter an iframe. Must return true when the element
* should remain, otherwise false
* @callback DOMIterator~forEachIframeFilterCallback
* @param {HTMLElement} iframe - The iframe DOM element
*/
/**
* Callback for each iframe content
* @callback DOMIterator~forEachIframeEachCallback
* @param {HTMLElement} content - The iframe document
*/
/**
* Callback if all iframes inside the context were handled
* @callback DOMIterator~forEachIframeEndCallback
* @param {number} handled - The number of handled iframes (those who
* wheren't filtered)
*/
/**
* Iterates over all iframes inside the specified context and calls the
* callbacks when they're ready. Filters iframes based on the instance
* exclusion selectors
* @param {HTMLElement} ctx - The context DOM element
* @param {DOMIterator~forEachIframeFilterCallback} filter - Filter callback
* @param {DOMIterator~forEachIframeEachCallback} each - Each callback
* @param {DOMIterator~forEachIframeEndCallback} [end] - End callback
* @access protected
*/
forEachIframe(t,n,r,i=()=>{}){let a=t.querySelectorAll(`iframe`),o=a.length,s=0;a=Array.prototype.slice.call(a);let c=()=>{--o<=0&&i(s)};o||c(),a.forEach(t=>{e.matches(t,this.exclude)?c():this.onIframeReady(t,e=>{n(t)&&(s++,r(e)),c()},c)})}
/**
* Creates a NodeIterator on the specified context
* @see {@link https://developer.mozilla.org/en/docs/Web/API/NodeIterator}
* @param {HTMLElement} ctx - The context DOM element
* @param {DOMIterator~whatToShow} whatToShow
* @param {DOMIterator~filterCb} filter
* @return {NodeIterator}
* @access protected
*/
createIterator(e,t,n){return document.createNodeIterator(e,t,n,!1)}
/**
* Creates an instance of DOMIterator in an iframe
* @param {HTMLDocument} contents - Iframe document
* @return {DOMIterator}
* @access protected
*/
createInstanceOnIframe(t){return new e(t.querySelector(`html`),this.iframes)}
/**
* Checks if an iframe occurs between two nodes, more specifically if an
* iframe occurs before the specified node and after the specified prevNode
* @param {HTMLElement} node - The node that should occur after the iframe
* @param {HTMLElement} prevNode - The node that should occur before the
* iframe
* @param {HTMLElement} ifr - The iframe to check against
* @return {boolean}
* @access protected
*/
compareNodeIframe(e,t,n){let r=e.compareDocumentPosition(n),i=Node.DOCUMENT_POSITION_PRECEDING;if(r&i)if(t!==null){let e=t.compareDocumentPosition(n),r=Node.DOCUMENT_POSITION_FOLLOWING;if(e&r)return!0}else return!0;return!1}
/**
* @typedef {DOMIterator~getIteratorNodeReturn}
* @type {object.<string>}
* @property {HTMLElement} prevNode - The previous node or null if there is
* no
* @property {HTMLElement} node - The current node
*/
/**
* Returns the previous and current node of the specified iterator
* @param {NodeIterator} itr - The iterator
* @return {DOMIterator~getIteratorNodeReturn}
* @access protected
*/
getIteratorNode(e){let t=e.previousNode(),n;return n=(t===null||e.nextNode())&&e.nextNode(),{prevNode:t,node:n}}
/**
* An array containing objects. The object key "val" contains an iframe
* DOM element. The object key "handled" contains a boolean indicating if
* the iframe was handled already.
* It wouldn't be enough to save all open or all already handled iframes.
* The information of open iframes is necessary because they may occur after
* all other text nodes (and compareNodeIframe would never be true). The
* information of already handled iframes is necessary as otherwise they may
* be handled multiple times
* @typedef DOMIterator~checkIframeFilterIfr
* @type {object[]}
*/
/**
* Checks if an iframe wasn't handled already and if so, calls
* {@link DOMIterator#compareNodeIframe} to check if it should be handled.
* Information wheter an iframe was or wasn't handled is given within the
* <code>ifr</code> dictionary
* @param {HTMLElement} node - The node that should occur after the iframe
* @param {HTMLElement} prevNode - The node that should occur before the
* iframe
* @param {HTMLElement} currIfr - The iframe to check
* @param {DOMIterator~checkIframeFilterIfr} ifr - The iframe dictionary.
* Will be manipulated (by reference)
* @return {boolean} Returns true when it should be handled, otherwise false
* @access protected
*/
checkIframeFilter(e,t,n,r){let i=!1,a=!1;return r.forEach((e,t)=>{e.val===n&&(i=t,a=e.handled)}),this.compareNodeIframe(e,t,n)?(i===!1&&!a?r.push({val:n,handled:!0}):i!==!1&&!a&&(r[i].handled=!0),!0):(i===!1&&r.push({val:n,handled:!1}),!1)}
/**
* Creates an iterator on all open iframes in the specified array and calls
* the end callback when finished
* @param {DOMIterator~checkIframeFilterIfr} ifr
* @param {DOMIterator~whatToShow} whatToShow
* @param  {DOMIterator~forEachNodeCallback} eCb - Each callback
* @param {DOMIterator~filterCb} fCb
* @access protected
*/
handleOpenIframes(e,t,n,r){e.forEach(e=>{e.handled||this.getIframeContents(e.val,e=>{this.createInstanceOnIframe(e).forEachNode(t,n,r)})})}
/**
* Iterates through all nodes in the specified context and handles iframe
* nodes at the correct position
* @param {DOMIterator~whatToShow} whatToShow
* @param {HTMLElement} ctx - The context
* @param  {DOMIterator~forEachNodeCallback} eachCb - Each callback
* @param {DOMIterator~filterCb} filterCb - Filter callback
* @param {DOMIterator~forEachNodeEndCallback} doneCb - End callback
* @access protected
*/
iterateThroughNodes(e,t,n,r,i){let a=this.createIterator(t,e,r),o=[],s=[],c,l,u=()=>({prevNode:l,node:c}=this.getIteratorNode(a),c);for(;u();)this.iframes&&this.forEachIframe(t,e=>this.checkIframeFilter(c,l,e,o),t=>{this.createInstanceOnIframe(t).forEachNode(e,e=>s.push(e),r)}),s.push(c);s.forEach(e=>{n(e)}),this.iframes&&this.handleOpenIframes(o,e,n,r),i()}
/**
* Callback for each node
* @callback DOMIterator~forEachNodeCallback
* @param {HTMLElement} node - The DOM text node element
*/
/**
* Callback if all contexts were handled
* @callback DOMIterator~forEachNodeEndCallback
*/
/**
* Iterates over all contexts and initializes
* {@link DOMIterator#iterateThroughNodes iterateThroughNodes} on them
* @param {DOMIterator~whatToShow} whatToShow
* @param  {DOMIterator~forEachNodeCallback} each - Each callback
* @param {DOMIterator~filterCb} filter - Filter callback
* @param {DOMIterator~forEachNodeEndCallback} done - End callback
* @access public
*/
forEachNode(e,t,n,r=()=>{}){let i=this.getContexts(),a=i.length;a||r(),i.forEach(i=>{let o=()=>{this.iterateThroughNodes(e,i,t,n,()=>{--a<=0&&r()})};this.iframes?this.waitForIframes(i,o):o()})}},nt=class{
/**
* @param {HTMLElement|HTMLElement[]|NodeList|string} ctx - The context DOM
* element, an array of DOM elements, a NodeList or a selector
*/
constructor(e){
/**
* Specifies if the current browser is a IE (necessary for the node
* normalization bug workaround). See {@link Mark#unwrapMatches}
* @type {boolean}
* @access protected
*/
this.ctx=e,this.ie=!1;let t=window.navigator.userAgent;(t.indexOf(`MSIE`)>-1||t.indexOf(`Trident`)>-1)&&(this.ie=!0)}
/**
* Options defined by the user. They will be initialized from one of the
* public methods. See {@link Mark#mark}, {@link Mark#markRegExp},
* {@link Mark#markRanges} and {@link Mark#unmark} for option properties.
* @type {object}
* @param {object} [val] - An object that will be merged with defaults
* @access protected
*/
set opt(e){this._opt=Object.assign({},{element:``,className:``,exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:`partially`,acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:`disabled`,each:()=>{},noMatch:()=>{},filter:()=>!0,done:()=>{},debug:!1,log:window.console},e)}get opt(){return this._opt}
/**
* An instance of DOMIterator
* @type {DOMIterator}
* @access protected
*/
get iterator(){return new tt(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}
/**
* Logs a message if log is enabled
* @param {string} msg - The message to log
* @param {string} [level="debug"] - The log level, e.g. <code>warn</code>
* <code>error</code>, <code>debug</code>
* @access protected
*/
log(e,t=`debug`){let n=this.opt.log;this.opt.debug&&typeof n==`object`&&typeof n[t]==`function`&&n[t](`mark.js: ${e}`)}
/**
* Escapes a string for usage within a regular expression
* @param {string} str - The string to escape
* @return {string}
* @access protected
*/
escapeStr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`)}
/**
* Creates a regular expression string to match the specified search
* term including synonyms, diacritics and accuracy if defined
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
createRegExp(e){return this.opt.wildcards!==`disabled`&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),this.opt.wildcards!==`disabled`&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e),e}
/**
* Creates a regular expression string to match the defined synonyms
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
createSynonymsRegExp(e){let t=this.opt.synonyms,n=this.opt.caseSensitive?``:`i`,r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?`\0`:``;for(let i in t)if(t.hasOwnProperty(i)){let a=t[i],o=this.opt.wildcards===`disabled`?this.escapeStr(i):this.setupWildcardsRegExp(i),s=this.opt.wildcards===`disabled`?this.escapeStr(a):this.setupWildcardsRegExp(a);o!==``&&s!==``&&(e=e.replace(RegExp(`(${this.escapeStr(o)}|${this.escapeStr(s)})`,`gm${n}`),r+`(${this.processSynomyms(o)}|${this.processSynomyms(s)})`+r))}return e}
/**
* Setup synonyms to work with ignoreJoiners and or ignorePunctuation
* @param {string} str - synonym key or value to process
* @return {string} - processed synonym string
*/
processSynomyms(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}
/**
* Sets up the regular expression string to allow later insertion of
* wildcard regular expression matches
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
setupWildcardsRegExp(e){return e=e.replace(/(?:\\)*\?/g,e=>e.charAt(0)===`\\`?`?`:``),e.replace(/(?:\\)*\*/g,e=>e.charAt(0)===`\\`?`*`:``)}
/**
* Sets up the regular expression string to allow later insertion of
* wildcard regular expression matches
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
createWildcardsRegExp(e){let t=this.opt.wildcards===`withSpaces`;return e.replace(/\u0001/g,t?`[\\S\\s]?`:`\\S?`).replace(/\u0002/g,t?`[\\S\\s]*?`:`\\S*`)}
/**
* Sets up the regular expression string to allow later insertion of
* designated characters (soft hyphens & zero width characters)
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
setupIgnoreJoinersRegExp(e){return e.replace(/[^(|)\\]/g,(e,t,n)=>{let r=n.charAt(t+1);return/[(|)\\]/.test(r)||r===``?e:e+`\0`})}
/**
* Creates a regular expression string to allow ignoring of designated
* characters (soft hyphens, zero width characters & punctuation) based on
* the specified option values of <code>ignorePunctuation</code> and
* <code>ignoreJoiners</code>
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
createJoinersRegExp(e){let t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(``))),this.opt.ignoreJoiners&&t.push(`\\u00ad\\u200b\\u200c\\u200d`),t.length?e.split(/\u0000+/).join(`[${t.join(``)}]*`):e}
/**
* Creates a regular expression string to match diacritics
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
createDiacriticsRegExp(e){let t=this.opt.caseSensitive?``:`i`,n=this.opt.caseSensitive?`aàáảãạăằắẳẵặâầấẩẫậäåāą.AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ.cçćč.CÇĆČ.dđď.DĐĎ.eèéẻẽẹêềếểễệëěēę.EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ.iìíỉĩịîïī.IÌÍỈĨỊÎÏĪ.lł.LŁ.nñňń.NÑŇŃ.oòóỏõọôồốổỗộơởỡớờợöøō.OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ.rř.RŘ.sšśșş.SŠŚȘŞ.tťțţ.TŤȚŢ.uùúủũụưừứửữựûüůū.UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ.yýỳỷỹỵÿ.YÝỲỶỸỴŸ.zžżź.ZŽŻŹ`.split(`.`):[`aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ`,`cçćčCÇĆČ`,`dđďDĐĎ`,`eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ`,`iìíỉĩịîïīIÌÍỈĨỊÎÏĪ`,`lłLŁ`,`nñňńNÑŇŃ`,`oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ`,`rřRŘ`,`sšśșşSŠŚȘŞ`,`tťțţTŤȚŢ`,`uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ`,`yýỳỷỹỵÿYÝỲỶỸỴŸ`,`zžżźZŽŻŹ`],r=[];return e.split(``).forEach(i=>{n.every(n=>{if(n.indexOf(i)!==-1){if(r.indexOf(n)>-1)return!1;e=e.replace(RegExp(`[${n}]`,`gm${t}`),`[${n}]`),r.push(n)}return!0})}),e}
/**
* Creates a regular expression string that merges whitespace characters
* including subsequent ones into a single pattern, one or multiple
* whitespaces
* @param  {string} str - The search term to be used
* @return {string}
* @access protected
*/
createMergedBlanksRegExp(e){return e.replace(/[\s]+/gim,`[\\s]+`)}
/**
* Creates a regular expression string to match the specified string with
* the defined accuracy. As in the regular expression of "exactly" can be
* a group containing a blank at the beginning, all regular expressions will
* be created with two groups. The first group can be ignored (may contain
* the said blank), the second contains the actual match
* @param  {string} str - The searm term to be used
* @return {str}
* @access protected
*/
createAccuracyRegExp(e){let t=`!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~¡¿`,n=this.opt.accuracy,r=typeof n==`string`?n:n.value,i=typeof n==`string`?[]:n.limiters,a=``;switch(i.forEach(e=>{a+=`|${this.escapeStr(e)}`}),r){case`partially`:default:return`()(${e})`;case`complementary`:return a=`\\s`+(a||this.escapeStr(t)),`()([^${a}]*${e}[^${a}]*)`;case`exactly`:return`(^|\\s${a})(${e})(?=$|\\s${a})`}}
/**
* @typedef Mark~separatedKeywords
* @type {object.<string>}
* @property {array.<string>} keywords - The list of keywords
* @property {number} length - The length
*/
/**
* Returns a list of keywords dependent on whether separate word search
* was defined. Also it filters empty keywords
* @param {array} sv - The array of keywords
* @return {Mark~separatedKeywords}
* @access protected
*/
getSeparatedKeywords(e){let t=[];return e.forEach(e=>{this.opt.separateWordSearch?e.split(` `).forEach(e=>{e.trim()&&t.indexOf(e)===-1&&t.push(e)}):e.trim()&&t.indexOf(e)===-1&&t.push(e)}),{keywords:t.sort((e,t)=>t.length-e.length),length:t.length}}
/**
* Check if a value is a number
* @param {number|string} value - the value to check;
* numeric strings allowed
* @return {boolean}
* @access protected
*/
isNumeric(e){return Number(parseFloat(e))==e}
/**
* @typedef Mark~rangeObject
* @type {object}
* @property {number} start - The start position within the composite value
* @property {number} length - The length of the string to mark within the
* composite value.
*/
/**
* @typedef Mark~setOfRanges
* @type {object[]}
* @property {Mark~rangeObject}
*/
/**
* Returns a processed list of integer offset indexes that do not overlap
* each other, and remove any string values or additional elements
* @param {Mark~setOfRanges} array - unprocessed raw array
* @return {Mark~setOfRanges} - processed array with any invalid entries
* removed
* @throws Will throw an error if an array of objects is not passed
* @access protected
*/
checkRanges(e){if(!Array.isArray(e)||Object.prototype.toString.call(e[0])!==`[object Object]`)return this.log(`markRanges() will only accept an array of objects`),this.opt.noMatch(e),[];let t=[],n=0;return e.sort((e,t)=>e.start-t.start).forEach(e=>{let{start:r,end:i,valid:a}=this.callNoMatchOnInvalidRanges(e,n);a&&(e.start=r,e.length=i-r,t.push(e),n=i)}),t}
/**
* @typedef Mark~validObject
* @type {object}
* @property {number} start - The start position within the composite value
* @property {number} end - The calculated end position within the composite
* value.
* @property {boolean} valid - boolean value indicating that the start and
* calculated end range is valid
*/
/**
* Initial validation of ranges for markRanges. Preliminary checks are done
* to ensure the start and length values exist and are not zero or non-
* numeric
* @param {Mark~rangeObject} range - the current range object
* @param {number} last - last index of range
* @return {Mark~validObject}
* @access protected
*/
callNoMatchOnInvalidRanges(e,t){let n,r,i=!1;return e&&e.start!==void 0?(n=parseInt(e.start,10),r=n+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?i=!0:(this.log(`Ignoring invalid or overlapping range: ${JSON.stringify(e)}`),this.opt.noMatch(e))):(this.log(`Ignoring invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)),{start:n,end:r,valid:i}}
/**
* Check valid range for markRanges. Check ranges with access to the context
* string. Range values are double checked, lengths that extend the mark
* beyond the string length are limitied and ranges containing only
* whitespace are ignored
* @param {Mark~rangeObject} range - the current range object
* @param {number} originalLength - original length of the context string
* @param {string} string - current content string
* @return {Mark~validObject}
* @access protected
*/
checkWhitespaceRanges(e,t,n){let r,i=!0,a=n.length,o=t-a,s=parseInt(e.start,10)-o;return s=s>a?a:s,r=s+parseInt(e.length,10),r>a&&(r=a,this.log(`End range automatically set to the max value of ${a}`)),s<0||r-s<0||s>a||r>a?(i=!1,this.log(`Invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)):n.substring(s,r).replace(/\s+/g,``)===``&&(i=!1,this.log(`Skipping whitespace only range: `+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:i}}
/**
* @typedef Mark~getTextNodesDict
* @type {object.<string>}
* @property {string} value - The composite value of all text nodes
* @property {object[]} nodes - An array of objects
* @property {number} nodes.start - The start position within the composite
* value
* @property {number} nodes.end - The end position within the composite
* value
* @property {HTMLElement} nodes.node - The DOM text node element
*/
/**
* Callback
* @callback Mark~getTextNodesCallback
* @param {Mark~getTextNodesDict}
*/
/**
* Calls the callback with an object containing all text nodes (including
* iframe text nodes) with start and end positions and the composite value
* of them (string)
* @param {Mark~getTextNodesCallback} cb - Callback
* @access protected
*/
getTextNodes(e){let t=``,n=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,e=>{n.push({start:t.length,end:(t+=e.textContent).length,node:e})},e=>this.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT,()=>{e({value:t,nodes:n})})}
/**
* Checks if an element matches any of the specified exclude selectors. Also
* it checks for elements in which no marks should be performed (e.g.
* script and style tags) and optionally already marked elements
* @param  {HTMLElement} el - The element to check
* @return {boolean}
* @access protected
*/
matchesExclude(e){return tt.matches(e,this.opt.exclude.concat([`script`,`style`,`title`,`head`,`html`]))}
/**
* Wraps the instance element and class around matches that fit the start
* and end positions within the node
* @param  {HTMLElement} node - The DOM text node
* @param  {number} start - The position where to start wrapping
* @param  {number} end - The position where to end wrapping
* @return {HTMLElement} Returns the splitted text node that will appear
* after the wrapped text node
* @access protected
*/
wrapRangeInTextNode(e,t,n){let r=this.opt.element?this.opt.element:`mark`,i=e.splitText(t),a=i.splitText(n-t),o=document.createElement(r);return o.setAttribute(`data-markjs`,`true`),this.opt.className&&o.setAttribute(`class`,this.opt.className),o.textContent=i.textContent,i.parentNode.replaceChild(o,i),a}
/**
* @typedef Mark~wrapRangeInMappedTextNodeDict
* @type {object.<string>}
* @property {string} value - The composite value of all text nodes
* @property {object[]} nodes - An array of objects
* @property {number} nodes.start - The start position within the composite
* value
* @property {number} nodes.end - The end position within the composite
* value
* @property {HTMLElement} nodes.node - The DOM text node element
*/
/**
* Each callback
* @callback Mark~wrapMatchesEachCallback
* @param {HTMLElement} node - The wrapped DOM element
* @param {number} lastIndex - The last matching position within the
* composite value of text nodes
*/
/**
* Filter callback
* @callback Mark~wrapMatchesFilterCallback
* @param {HTMLElement} node - The matching text node DOM element
*/
/**
* Determines matches by start and end positions using the text node
* dictionary even across text nodes and calls
* {@link Mark#wrapRangeInTextNode} to wrap them
* @param  {Mark~wrapRangeInMappedTextNodeDict} dict - The dictionary
* @param  {number} start - The start position of the match
* @param  {number} end - The end position of the match
* @param  {Mark~wrapMatchesFilterCallback} filterCb - Filter callback
* @param  {Mark~wrapMatchesEachCallback} eachCb - Each callback
* @access protected
*/
wrapRangeInMappedTextNode(e,t,n,r,i){e.nodes.every((a,o)=>{let s=e.nodes[o+1];if(s===void 0||s.start>t){if(!r(a.node))return!1;let s=t-a.start,c=(n>a.end?a.end:n)-a.start,l=e.value.substr(0,a.start),u=e.value.substr(c+a.start);if(a.node=this.wrapRangeInTextNode(a.node,s,c),e.value=l+u,e.nodes.forEach((t,n)=>{n>=o&&(e.nodes[n].start>0&&n!==o&&(e.nodes[n].start-=c),e.nodes[n].end-=c)}),n-=c,i(a.node.previousSibling,a.start),n>a.end)t=a.end;else return!1}return!0})}
/**
* Filter callback before each wrapping
* @callback Mark~wrapMatchesFilterCallback
* @param {string} match - The matching string
* @param {HTMLElement} node - The text node where the match occurs
*/
/**
* Callback for each wrapped element
* @callback Mark~wrapMatchesEachCallback
* @param {HTMLElement} element - The marked DOM element
*/
/**
* Callback on end
* @callback Mark~wrapMatchesEndCallback
*/
/**
* Wraps the instance element and class around matches within single HTML
* elements in all contexts
* @param {RegExp} regex - The regular expression to be searched for
* @param {number} ignoreGroups - A number indicating the amount of RegExp
* matching groups to ignore
* @param {Mark~wrapMatchesFilterCallback} filterCb
* @param {Mark~wrapMatchesEachCallback} eachCb
* @param {Mark~wrapMatchesEndCallback} endCb
* @access protected
*/
wrapMatches(e,t,n,r,i){let a=t===0?0:t+1;this.getTextNodes(t=>{t.nodes.forEach(t=>{t=t.node;let i;for(;(i=e.exec(t.textContent))!==null&&i[a]!==``;){if(!n(i[a],t))continue;let o=i.index;if(a!==0)for(let e=1;e<a;e++)o+=i[e].length;t=this.wrapRangeInTextNode(t,o,o+i[a].length),r(t.previousSibling),e.lastIndex=0}}),i()})}
/**
* Callback for each wrapped element
* @callback Mark~wrapMatchesAcrossElementsEachCallback
* @param {HTMLElement} element - The marked DOM element
*/
/**
* Filter callback before each wrapping
* @callback Mark~wrapMatchesAcrossElementsFilterCallback
* @param {string} match - The matching string
* @param {HTMLElement} node - The text node where the match occurs
*/
/**
* Callback on end
* @callback Mark~wrapMatchesAcrossElementsEndCallback
*/
/**
* Wraps the instance element and class around matches across all HTML
* elements in all contexts
* @param {RegExp} regex - The regular expression to be searched for
* @param {number} ignoreGroups - A number indicating the amount of RegExp
* matching groups to ignore
* @param {Mark~wrapMatchesAcrossElementsFilterCallback} filterCb
* @param {Mark~wrapMatchesAcrossElementsEachCallback} eachCb
* @param {Mark~wrapMatchesAcrossElementsEndCallback} endCb
* @access protected
*/
wrapMatchesAcrossElements(e,t,n,r,i){let a=t===0?0:t+1;this.getTextNodes(t=>{let o;for(;(o=e.exec(t.value))!==null&&o[a]!==``;){let i=o.index;if(a!==0)for(let e=1;e<a;e++)i+=o[e].length;let s=i+o[a].length;this.wrapRangeInMappedTextNode(t,i,s,e=>n(o[a],e),(t,n)=>{e.lastIndex=n,r(t)})}i()})}
/**
* Callback for each wrapped element
* @callback Mark~wrapRangeFromIndexEachCallback
* @param {HTMLElement} element - The marked DOM element
* @param {Mark~rangeObject} range - the current range object; provided
* start and length values will be numeric integers modified from the
* provided original ranges.
*/
/**
* Filter callback before each wrapping
* @callback Mark~wrapRangeFromIndexFilterCallback
* @param {HTMLElement} node - The text node which includes the range
* @param {Mark~rangeObject} range - the current range object
* @param {string} match - string extracted from the matching range
* @param {number} counter - A counter indicating the number of all marks
*/
/**
* Callback on end
* @callback Mark~wrapRangeFromIndexEndCallback
*/
/**
* Wraps the indicated ranges across all HTML elements in all contexts
* @param {Mark~setOfRanges} ranges
* @param {Mark~wrapRangeFromIndexFilterCallback} filterCb
* @param {Mark~wrapRangeFromIndexEachCallback} eachCb
* @param {Mark~wrapRangeFromIndexEndCallback} endCb
* @access protected
*/
wrapRangeFromIndex(e,t,n,r){this.getTextNodes(i=>{let a=i.value.length;e.forEach((e,r)=>{let{start:o,end:s,valid:c}=this.checkWhitespaceRanges(e,a,i.value);c&&this.wrapRangeInMappedTextNode(i,o,s,n=>t(n,e,i.value.substring(o,s),r),t=>{n(t,e)})}),r()})}
/**
* Unwraps the specified DOM node with its content (text nodes or HTML)
* without destroying possibly present events (using innerHTML) and
* normalizes the parent at the end (merge splitted text nodes)
* @param  {HTMLElement} node - The DOM node to unwrap
* @access protected
*/
unwrapMatches(e){let t=e.parentNode,n=document.createDocumentFragment();for(;e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}
/**
* Normalizes text nodes. It's a workaround for the native normalize method
* that has a bug in IE (see attached link). Should only be used in IE
* browsers as it's slower than the native method.
* @see {@link http://tinyurl.com/z5asa8c}
* @param {HTMLElement} node - The DOM node to normalize
* @access protected
*/
normalizeTextNode(e){if(e){if(e.nodeType===3)for(;e.nextSibling&&e.nextSibling.nodeType===3;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}
/**
* Callback when finished
* @callback Mark~commonDoneCallback
* @param {number} totalMatches - The number of marked elements
*/
/**
* @typedef Mark~commonOptions
* @type {object.<string>}
* @property {string} [element="mark"] - HTML element tag name
* @property {string} [className] - An optional class name
* @property {string[]} [exclude] - An array with exclusion selectors.
* Elements matching those selectors will be ignored
* @property {boolean} [iframes=false] - Whether to search inside iframes
* @property {Mark~commonDoneCallback} [done]
* @property {boolean} [debug=false] - Wheter to log messages
* @property {object} [log=window.console] - Where to log messages (only if
* debug is true)
*/
/**
* Callback for each marked element
* @callback Mark~markRegExpEachCallback
* @param {HTMLElement} element - The marked DOM element
*/
/**
* Callback if there were no matches
* @callback Mark~markRegExpNoMatchCallback
* @param {RegExp} regexp - The regular expression
*/
/**
* Callback to filter matches
* @callback Mark~markRegExpFilterCallback
* @param {HTMLElement} textNode - The text node which includes the match
* @param {string} match - The matching string for the RegExp
* @param {number} counter - A counter indicating the number of all marks
*/
/**
* These options also include the common options from
* {@link Mark~commonOptions}
* @typedef Mark~markRegExpOptions
* @type {object.<string>}
* @property {Mark~markRegExpEachCallback} [each]
* @property {Mark~markRegExpNoMatchCallback} [noMatch]
* @property {Mark~markRegExpFilterCallback} [filter]
*/
/**
* Marks a custom regular expression
* @param  {RegExp} regexp - The regular expression
* @param  {Mark~markRegExpOptions} [opt] - Optional options object
* @access public
*/
markRegExp(e,t){this.opt=t,this.log(`Searching with expression "${e}"`);let n=0,r=`wrapMatches`,i=e=>{n++,this.opt.each(e)};this.opt.acrossElements&&(r=`wrapMatchesAcrossElements`),this[r](e,this.opt.ignoreGroups,(e,t)=>this.opt.filter(t,e,n),i,()=>{n===0&&this.opt.noMatch(e),this.opt.done(n)})}
/**
* Callback for each marked element
* @callback Mark~markEachCallback
* @param {HTMLElement} element - The marked DOM element
*/
/**
* Callback if there were no matches
* @callback Mark~markNoMatchCallback
* @param {RegExp} term - The search term that was not found
*/
/**
* Callback to filter matches
* @callback Mark~markFilterCallback
* @param {HTMLElement} textNode - The text node which includes the match
* @param {string} match - The matching term
* @param {number} totalCounter - A counter indicating the number of all
* marks
* @param {number} termCounter - A counter indicating the number of marks
* for the specific match
*/
/**
* @typedef Mark~markAccuracyObject
* @type {object.<string>}
* @property {string} value - A accuracy string value
* @property {string[]} limiters - A custom array of limiters. For example
* <code>["-", ","]</code>
*/
/**
* @typedef Mark~markAccuracySetting
* @type {string}
* @property {"partially"|"complementary"|"exactly"|Mark~markAccuracyObject}
* [accuracy="partially"] - Either one of the following string values:
* <ul>
*   <li><i>partially</i>: When searching for "lor" only "lor" inside
*   "lorem" will be marked</li>
*   <li><i>complementary</i>: When searching for "lor" the whole word
*   "lorem" will be marked</li>
*   <li><i>exactly</i>: When searching for "lor" only those exact words
*   will be marked. In this example nothing inside "lorem". This value
*   is equivalent to the previous option <i>wordBoundary</i></li>
* </ul>
* Or an object containing two properties:
* <ul>
*   <li><i>value</i>: One of the above named string values</li>
*   <li><i>limiters</i>: A custom array of string limiters for accuracy
*   "exactly" or "complementary"</li>
* </ul>
*/
/**
* @typedef Mark~markWildcardsSetting
* @type {string}
* @property {"disabled"|"enabled"|"withSpaces"}
* [wildcards="disabled"] - Set to any of the following string values:
* <ul>
*   <li><i>disabled</i>: Disable wildcard usage</li>
*   <li><i>enabled</i>: When searching for "lor?m", the "?" will match zero
*   or one non-space character (e.g. "lorm", "loram", "lor3m", etc). When
*   searching for "lor*m", the "*" will match zero or more non-space
*   characters (e.g. "lorm", "loram", "lor123m", etc).</li>
*   <li><i>withSpaces</i>: When searching for "lor?m", the "?" will
*   match zero or one space or non-space character (e.g. "lor m", "loram",
*   etc). When searching for "lor*m", the "*" will match zero or more space
*   or non-space characters (e.g. "lorm", "lore et dolor ipsum", "lor: m",
*   etc).</li>
* </ul>
*/
/**
* @typedef Mark~markIgnorePunctuationSetting
* @type {string[]}
* @property {string} The strings in this setting will contain punctuation
* marks that will be ignored:
* <ul>
*   <li>These punctuation marks can be between any characters, e.g. setting
*   this option to <code>["'"]</code> would match "Worlds", "World's" and
*   "Wo'rlds"</li>
*   <li>One or more apostrophes between the letters would still produce a
*   match (e.g. "W'o''r'l'd's").</li>
*   <li>A typical setting for this option could be as follows:
*   <pre>ignorePunctuation: ":;.,-–—‒_(){}[]!'\"+=".split(""),</pre> This
*   setting includes common punctuation as well as a minus, en-dash,
*   em-dash and figure-dash
*   ({@link https://en.wikipedia.org/wiki/Dash#Figure_dash ref}), as well
*   as an underscore.</li>
* </ul>
*/
/**
* These options also include the common options from
* {@link Mark~commonOptions}
* @typedef Mark~markOptions
* @type {object.<string>}
* @property {boolean} [separateWordSearch=true] - Whether to search for
* each word separated by a blank instead of the complete term
* @property {boolean} [diacritics=true] - If diacritic characters should be
* matched. ({@link https://en.wikipedia.org/wiki/Diacritic Diacritics})
* @property {object} [synonyms] - An object with synonyms. The key will be
* a synonym for the value and the value for the key
* @property {Mark~markAccuracySetting} [accuracy]
* @property {Mark~markWildcardsSetting} [wildcards]
* @property {boolean} [acrossElements=false] - Whether to find matches
* across HTML elements. By default, only matches within single HTML
* elements will be found
* @property {boolean} [ignoreJoiners=false] - Whether to ignore word
* joiners inside of key words. These include soft-hyphens, zero-width
* space, zero-width non-joiners and zero-width joiners.
* @property {Mark~markIgnorePunctuationSetting} [ignorePunctuation]
* @property {Mark~markEachCallback} [each]
* @property {Mark~markNoMatchCallback} [noMatch]
* @property {Mark~markFilterCallback} [filter]
*/
/**
* Marks the specified search terms
* @param {string|string[]} [sv] - Search value, either a search string or
* an array containing multiple search strings
* @param  {Mark~markOptions} [opt] - Optional options object
* @access public
*/
mark(e,t){this.opt=t;let n=0,r=`wrapMatches`,{keywords:i,length:a}=this.getSeparatedKeywords(typeof e==`string`?[e]:e),o=this.opt.caseSensitive?``:`i`,s=e=>{let t=new RegExp(this.createRegExp(e),`gm${o}`),c=0;this.log(`Searching with expression "${t}"`),this[r](t,1,(t,r)=>this.opt.filter(r,e,n,c),e=>{c++,n++,this.opt.each(e)},()=>{c===0&&this.opt.noMatch(e),i[a-1]===e?this.opt.done(n):s(i[i.indexOf(e)+1])})};this.opt.acrossElements&&(r=`wrapMatchesAcrossElements`),a===0?this.opt.done(n):s(i[0])}
/**
* Callback for each marked element
* @callback Mark~markRangesEachCallback
* @param {HTMLElement} element - The marked DOM element
* @param {array} range - array of range start and end points
*/
/**
* Callback if a processed range is invalid, out-of-bounds, overlaps another
* range, or only matches whitespace
* @callback Mark~markRangesNoMatchCallback
* @param {Mark~rangeObject} range - a range object
*/
/**
* Callback to filter matches
* @callback Mark~markRangesFilterCallback
* @param {HTMLElement} node - The text node which includes the range
* @param {array} range - array of range start and end points
* @param {string} match - string extracted from the matching range
* @param {number} counter - A counter indicating the number of all marks
*/
/**
* These options also include the common options from
* {@link Mark~commonOptions}
* @typedef Mark~markRangesOptions
* @type {object.<string>}
* @property {Mark~markRangesEachCallback} [each]
* @property {Mark~markRangesNoMatchCallback} [noMatch]
* @property {Mark~markRangesFilterCallback} [filter]
*/
/**
* Marks an array of objects containing a start with an end or length of the
* string to mark
* @param  {Mark~setOfRanges} rawRanges - The original (preprocessed)
* array of objects
* @param  {Mark~markRangesOptions} [opt] - Optional options object
* @access public
*/
markRanges(e,t){this.opt=t;let n=0,r=this.checkRanges(e);r&&r.length?(this.log(`Starting to mark with the following ranges: `+JSON.stringify(r)),this.wrapRangeFromIndex(r,(e,t,n,r)=>this.opt.filter(e,t,n,r),(e,t)=>{n++,this.opt.each(e,t)},()=>{this.opt.done(n)})):this.opt.done(n)}
/**
* Removes all marked elements inside the context with their HTML and
* normalizes the parent at the end
* @param  {Mark~commonOptions} [opt] - Optional options object
* @access public
*/
unmark(e){this.opt=e;let t=this.opt.element?this.opt.element:`*`;t+=`[data-markjs]`,this.opt.className&&(t+=`.${this.opt.className}`),this.log(`Removal selector "${t}"`),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,e=>{this.unwrapMatches(e)},e=>{let n=tt.matches(e,t),r=this.matchesExclude(e);return!n||r?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}};function rt(e){let t=new nt(e);return this.mark=(e,n)=>(t.mark(e,n),this),this.markRegExp=(e,n)=>(t.markRegExp(e,n),this),this.markRanges=(e,n)=>(t.markRanges(e,n),this),this.unmark=e=>(t.unmark(e),this),this}
/** @ignore */
const it=`ENTRIES`,at=`KEYS`,ot=`VALUES`,Z=``;
/**
* @private
*/
var st=class{constructor(e,t){let n=e._tree,r=Array.from(n.keys());this.set=e,this._type=t,this._path=r.length>0?[{node:n,keys:r}]:[]}next(){let e=this.dive();return this.backtrack(),e}dive(){if(this._path.length===0)return{done:!0,value:void 0};let{node:e,keys:t}=Q(this._path);if(Q(t)===Z)return{done:!1,value:this.result()};let n=e.get(Q(t));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;let e=Q(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:e})=>Q(e)).filter(e=>e!==Z).join(``)}value(){return Q(this._path).node.get(Z)}result(){switch(this._type){case ot:return this.value();case at:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}};const Q=e=>e[e.length-1],ct=(e,t,n)=>{let r=new Map;if(t===void 0)return r;let i=t.length+1,a=i+n,o=new Uint8Array(a*i).fill(n+1);for(let e=0;e<i;++e)o[e]=e;for(let e=1;e<a;++e)o[e*i]=e;return lt(e,t,n,r,o,1,i,``),r},lt=(e,t,n,r,i,a,o,s)=>{let c=a*o;key:for(let l of e.keys())if(l===Z){let t=i[c-1];t<=n&&r.set(s,[e.get(l),t])}else{let c=a;for(let e=0;e<l.length;++e,++c){let r=l[e],a=o*c,s=a-o,u=i[a],d=Math.max(0,c-n-1),f=Math.min(o-1,c+n);for(let e=d;e<f;++e){let n=r!==t[e],o=i[s+e]+ +n,c=i[s+e+1]+1,l=i[a+e]+1,d=i[a+e+1]=Math.min(o,c,l);d<u&&(u=d)}if(u>n)continue key}lt(e.get(l),t,n,r,i,c,o,s+l)}};
/**
* A class implementing the same interface as a standard JavaScript
* [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* with string keys, but adding support for efficiently searching entries with
* prefix or fuzzy search. This class is used internally by {@link MiniSearch}
* as the inverted index data structure. The implementation is a radix tree
* (compressed prefix tree).
*
* Since this class can be of general utility beyond _MiniSearch_, it is
* exported by the `minisearch` package and can be imported (or required) as
* `minisearch/SearchableMap`.
*
* @typeParam T  The type of the values stored in the map.
*/
var ut=class e{
/**
* The constructor is normally called without arguments, creating an empty
* map. In order to create a {@link SearchableMap} from an iterable or from an
* object, check {@link SearchableMap.from} and {@link
* SearchableMap.fromObject}.
*
* The constructor arguments are for internal use, when creating derived
* mutable views of a map at a prefix.
*/
constructor(e=new Map,t=``){this._size=void 0,this._tree=e,this._prefix=t}
/**
* Creates and returns a mutable view of this {@link SearchableMap},
* containing only entries that share the given prefix.
*
* ### Usage:
*
* ```javascript
* let map = new SearchableMap()
* map.set("unicorn", 1)
* map.set("universe", 2)
* map.set("university", 3)
* map.set("unique", 4)
* map.set("hello", 5)
*
* let uni = map.atPrefix("uni")
* uni.get("unique") // => 4
* uni.get("unicorn") // => 1
* uni.get("hello") // => undefined
*
* let univer = map.atPrefix("univer")
* univer.get("unique") // => undefined
* univer.get("universe") // => 2
* univer.get("university") // => 3
* ```
*
* @param prefix  The prefix
* @return A {@link SearchableMap} representing a mutable view of the original
* Map at the given prefix
*/
atPrefix(t){if(!t.startsWith(this._prefix))throw Error(`Mismatched prefix`);let[n,r]=dt(this._tree,t.slice(this._prefix.length));if(n===void 0){let[n,i]=_t(r);for(let r of n.keys())if(r!==Z&&r.startsWith(i)){let a=new Map;return a.set(r.slice(i.length),n.get(r)),new e(a,t)}}return new e(n,t)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
*/
clear(){this._size=void 0,this._tree.clear()}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
* @param key  Key to delete
*/
delete(e){return this._size=void 0,mt(this._tree,e)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
* @return An iterator iterating through `[key, value]` entries.
*/
entries(){return new st(this,it)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
* @param fn  Iteration function
*/
forEach(e){for(let[t,n]of this)e(t,n,this)}
/**
* Returns a Map of all the entries that have a key within the given edit
* distance from the search key. The keys of the returned Map are the matching
* keys, while the values are two-element arrays where the first element is
* the value associated to the key, and the second is the edit distance of the
* key to the search key.
*
* ### Usage:
*
* ```javascript
* let map = new SearchableMap()
* map.set('hello', 'world')
* map.set('hell', 'yeah')
* map.set('ciao', 'mondo')
*
* // Get all entries that match the key 'hallo' with a maximum edit distance of 2
* map.fuzzyGet('hallo', 2)
* // => Map(2) { 'hello' => ['world', 1], 'hell' => ['yeah', 2] }
*
* // In the example, the "hello" key has value "world" and edit distance of 1
* // (change "e" to "a"), the key "hell" has value "yeah" and edit distance of 2
* // (change "e" to "a", delete "o")
* ```
*
* @param key  The search key
* @param maxEditDistance  The maximum edit distance (Levenshtein)
* @return A Map of the matching keys to their value and edit distance
*/
fuzzyGet(e,t){return ct(this._tree,e,t)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
* @param key  Key to get
* @return Value associated to the key, or `undefined` if the key is not
* found.
*/
get(e){let t=ft(this._tree,e);return t===void 0?void 0:t.get(Z)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
* @param key  Key
* @return True if the key is in the map, false otherwise
*/
has(e){let t=ft(this._tree,e);return t!==void 0&&t.has(Z)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
* @return An `Iterable` iterating through keys
*/
keys(){return new st(this,at)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
* @param key  Key to set
* @param value  Value to associate to the key
* @return The {@link SearchableMap} itself, to allow chaining
*/
set(e,t){if(typeof e!=`string`)throw Error(`key must be a string`);this._size=void 0;let n=pt(this._tree,e);return n.set(Z,t),this}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
*/
get size(){if(this._size)return this._size;
/** @ignore */
this._size=0;let e=this.entries();for(;!e.next().done;)this._size+=1;return this._size}
/**
* Updates the value at the given key using the provided function. The function
* is called with the current value at the key, and its return value is used as
* the new value to be set.
*
* ### Example:
*
* ```javascript
* // Increment the current value by one
* searchableMap.update('somekey', (currentValue) => currentValue == null ? 0 : currentValue + 1)
* ```
*
* If the value at the given key is or will be an object, it might not require
* re-assignment. In that case it is better to use `fetch()`, because it is
* faster.
*
* @param key  The key to update
* @param fn  The function used to compute the new value from the current one
* @return The {@link SearchableMap} itself, to allow chaining
*/
update(e,t){if(typeof e!=`string`)throw Error(`key must be a string`);this._size=void 0;let n=pt(this._tree,e);return n.set(Z,t(n.get(Z))),this}
/**
* Fetches the value of the given key. If the value does not exist, calls the
* given function to create a new value, which is inserted at the given key
* and subsequently returned.
*
* ### Example:
*
* ```javascript
* const map = searchableMap.fetch('somekey', () => new Map())
* map.set('foo', 'bar')
* ```
*
* @param key  The key to update
* @param initial  A function that creates a new value if the key does not exist
* @return The existing or new value at the given key
*/
fetch(e,t){if(typeof e!=`string`)throw Error(`key must be a string`);this._size=void 0;let n=pt(this._tree,e),r=n.get(Z);return r===void 0&&n.set(Z,r=t()),r}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
* @return An `Iterable` iterating through values.
*/
values(){return new st(this,ot)}
/**
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator
*/
[Symbol.iterator](){return this.entries()}
/**
* Creates a {@link SearchableMap} from an `Iterable` of entries
*
* @param entries  Entries to be inserted in the {@link SearchableMap}
* @return A new {@link SearchableMap} with the given entries
*/
static from(t){let n=new e;for(let[e,r]of t)n.set(e,r);return n}
/**
* Creates a {@link SearchableMap} from the iterable properties of a JavaScript object
*
* @param object  Object of entries for the {@link SearchableMap}
* @return A new {@link SearchableMap} with the given entries
*/
static fromObject(t){return e.from(Object.entries(t))}};const dt=(e,t,n=[])=>{if(t.length===0||e==null)return[e,n];for(let r of e.keys())if(r!==Z&&t.startsWith(r))return n.push([e,r]),dt(e.get(r),t.slice(r.length),n);return n.push([e,t]),dt(void 0,``,n)},ft=(e,t)=>{if(t.length===0||e==null)return e;for(let n of e.keys())if(n!==Z&&t.startsWith(n))return ft(e.get(n),t.slice(n.length))},pt=(e,t)=>{let n=t.length;outer:for(let r=0;e&&r<n;){for(let i of e.keys())if(i!==Z&&t[r]===i[0]){let a=Math.min(n-r,i.length),o=1;for(;o<a&&t[r+o]===i[o];)++o;let s=e.get(i);if(o===i.length)e=s;else{let n=new Map;n.set(i.slice(o),s),e.set(t.slice(r,r+o),n),e.delete(i),e=n}r+=o;continue outer}let i=new Map;return e.set(t.slice(r),i),i}return e},mt=(e,t)=>{let[n,r]=dt(e,t);if(n!==void 0){if(n.delete(Z),n.size===0)ht(r);else if(n.size===1){let[e,t]=n.entries().next().value;gt(r,e,t)}}},ht=e=>{if(e.length===0)return;let[t,n]=_t(e);if(t.delete(n),t.size===0)ht(e.slice(0,-1));else if(t.size===1){let[n,r]=t.entries().next().value;n!==Z&&gt(e.slice(0,-1),n,r)}},gt=(e,t,n)=>{if(e.length===0)return;let[r,i]=_t(e);r.set(i+t,n),r.delete(i)},_t=e=>e[e.length-1],vt=`or`,yt=`and`,bt=`and_not`;
/**
* {@link MiniSearch} is the main entrypoint class, implementing a full-text
* search engine in memory.
*
* @typeParam T  The type of the documents being indexed.
*
* ### Basic example:
*
* ```javascript
* const documents = [
*   {
*     id: 1,
*     title: 'Moby Dick',
*     text: 'Call me Ishmael. Some years ago...',
*     category: 'fiction'
*   },
*   {
*     id: 2,
*     title: 'Zen and the Art of Motorcycle Maintenance',
*     text: 'I can see by my watch...',
*     category: 'fiction'
*   },
*   {
*     id: 3,
*     title: 'Neuromancer',
*     text: 'The sky above the port was...',
*     category: 'fiction'
*   },
*   {
*     id: 4,
*     title: 'Zen and the Art of Archery',
*     text: 'At first sight it must seem...',
*     category: 'non-fiction'
*   },
*   // ...and more
* ]
*
* // Create a search engine that indexes the 'title' and 'text' fields for
* // full-text search. Search results will include 'title' and 'category' (plus the
* // id field, that is always stored and returned)
* const miniSearch = new MiniSearch({
*   fields: ['title', 'text'],
*   storeFields: ['title', 'category']
* })
*
* // Add documents to the index
* miniSearch.addAll(documents)
*
* // Search for documents:
* let results = miniSearch.search('zen art motorcycle')
* // => [
* //   { id: 2, title: 'Zen and the Art of Motorcycle Maintenance', category: 'fiction', score: 2.77258 },
* //   { id: 4, title: 'Zen and the Art of Archery', category: 'non-fiction', score: 1.38629 }
* // ]
* ```
*/
var xt=class e{
/**
* @param options  Configuration options
*
* ### Examples:
*
* ```javascript
* // Create a search engine that indexes the 'title' and 'text' fields of your
* // documents:
* const miniSearch = new MiniSearch({ fields: ['title', 'text'] })
* ```
*
* ### ID Field:
*
* ```javascript
* // Your documents are assumed to include a unique 'id' field, but if you want
* // to use a different field for document identification, you can set the
* // 'idField' option:
* const miniSearch = new MiniSearch({ idField: 'key', fields: ['title', 'text'] })
* ```
*
* ### Options and defaults:
*
* ```javascript
* // The full set of options (here with their default value) is:
* const miniSearch = new MiniSearch({
*   // idField: field that uniquely identifies a document
*   idField: 'id',
*
*   // extractField: function used to get the value of a field in a document.
*   // By default, it assumes the document is a flat object with field names as
*   // property keys and field values as string property values, but custom logic
*   // can be implemented by setting this option to a custom extractor function.
*   extractField: (document, fieldName) => document[fieldName],
*
*   // tokenize: function used to split fields into individual terms. By
*   // default, it is also used to tokenize search queries, unless a specific
*   // `tokenize` search option is supplied. When tokenizing an indexed field,
*   // the field name is passed as the second argument.
*   tokenize: (string, _fieldName) => string.split(SPACE_OR_PUNCTUATION),
*
*   // processTerm: function used to process each tokenized term before
*   // indexing. It can be used for stemming and normalization. Return a falsy
*   // value in order to discard a term. By default, it is also used to process
*   // search queries, unless a specific `processTerm` option is supplied as a
*   // search option. When processing a term from a indexed field, the field
*   // name is passed as the second argument.
*   processTerm: (term, _fieldName) => term.toLowerCase(),
*
*   // searchOptions: default search options, see the `search` method for
*   // details
*   searchOptions: undefined,
*
*   // fields: document fields to be indexed. Mandatory, but not set by default
*   fields: undefined
*
*   // storeFields: document fields to be stored and returned as part of the
*   // search results.
*   storeFields: []
* })
* ```
*/
constructor(e){if(e?.fields==null)throw Error(`MiniSearch: option "fields" must be provided`);let t=e.autoVacuum==null||e.autoVacuum===!0?Mt:e.autoVacuum;this._options={...Dt,...e,autoVacuum:t,searchOptions:{...Ot,...e.searchOptions||{}},autoSuggestOptions:{...kt,...e.autoSuggestOptions||{}}},this._index=new ut,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=jt,this.addFields(this._options.fields)}
/**
* Adds a document to the index
*
* @param document  The document to be indexed
*/
add(e){let{extractField:t,tokenize:n,processTerm:r,fields:i,idField:a}=this._options,o=t(e,a);if(o==null)throw Error(`MiniSearch: document does not have ID field "${a}"`);if(this._idToShortId.has(o))throw Error(`MiniSearch: duplicate ID ${o}`);let s=this.addDocumentId(o);this.saveStoredFields(s,e);for(let a of i){let i=t(e,a);if(i==null)continue;let o=n(i.toString(),a),c=this._fieldIds[a],l=new Set(o).size;this.addFieldLength(s,c,this._documentCount-1,l);for(let e of o){let t=r(e,a);if(Array.isArray(t))for(let e of t)this.addTerm(c,s,e);else t&&this.addTerm(c,s,t)}}}
/**
* Adds all the given documents to the index
*
* @param documents  An array of documents to be indexed
*/
addAll(e){for(let t of e)this.add(t)}
/**
* Adds all the given documents to the index asynchronously.
*
* Returns a promise that resolves (to `undefined`) when the indexing is done.
* This method is useful when index many documents, to avoid blocking the main
* thread. The indexing is performed asynchronously and in chunks.
*
* @param documents  An array of documents to be indexed
* @param options  Configuration options
* @return A promise resolving to `undefined` when the indexing is done
*/
addAllAsync(e,t={}){let{chunkSize:n=10}=t,r={chunk:[],promise:Promise.resolve()},{chunk:i,promise:a}=e.reduce(({chunk:e,promise:t},r,i)=>(e.push(r),(i+1)%n===0?{chunk:[],promise:t.then(()=>new Promise(e=>setTimeout(e,0))).then(()=>this.addAll(e))}:{chunk:e,promise:t}),r);return a.then(()=>this.addAll(i))}
/**
* Removes the given document from the index.
*
* The document to remove must NOT have changed between indexing and removal,
* otherwise the index will be corrupted.
*
* This method requires passing the full document to be removed (not just the
* ID), and immediately removes the document from the inverted index, allowing
* memory to be released. A convenient alternative is {@link
* MiniSearch#discard}, which needs only the document ID, and has the same
* visible effect, but delays cleaning up the index until the next vacuuming.
*
* @param document  The document to be removed
*/
remove(e){let{tokenize:t,processTerm:n,extractField:r,fields:i,idField:a}=this._options,o=r(e,a);if(o==null)throw Error(`MiniSearch: document does not have ID field "${a}"`);let s=this._idToShortId.get(o);if(s==null)throw Error(`MiniSearch: cannot remove document with ID ${o}: it is not in the index`);for(let a of i){let i=r(e,a);if(i==null)continue;let o=t(i.toString(),a),c=this._fieldIds[a],l=new Set(o).size;this.removeFieldLength(s,c,this._documentCount,l);for(let e of o){let t=n(e,a);if(Array.isArray(t))for(let e of t)this.removeTerm(c,s,e);else t&&this.removeTerm(c,s,t)}}this._storedFields.delete(s),this._documentIds.delete(s),this._idToShortId.delete(o),this._fieldLength.delete(s),--this._documentCount}
/**
* Removes all the given documents from the index. If called with no arguments,
* it removes _all_ documents from the index.
*
* @param documents  The documents to be removed. If this argument is omitted,
* all documents are removed. Note that, for removing all documents, it is
* more efficient to call this method with no arguments than to pass all
* documents.
*/
removeAll(e){if(e)for(let t of e)this.remove(t);else if(arguments.length>0)throw Error(`Expected documents to be present. Omit the argument to remove all documents.`);else this._index=new ut,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}
/**
* Discards the document with the given ID, so it won't appear in search results
*
* It has the same visible effect of {@link MiniSearch.remove} (both cause the
* document to stop appearing in searches), but a different effect on the
* internal data structures:
*
*   - {@link MiniSearch#remove} requires passing the full document to be
*   removed as argument, and removes it from the inverted index immediately.
*
*   - {@link MiniSearch#discard} instead only needs the document ID, and
*   works by marking the current version of the document as discarded, so it
*   is immediately ignored by searches. This is faster and more convenient
*   than {@link MiniSearch#remove}, but the index is not immediately
*   modified. To take care of that, vacuuming is performed after a certain
*   number of documents are discarded, cleaning up the index and allowing
*   memory to be released.
*
* After discarding a document, it is possible to re-add a new version, and
* only the new version will appear in searches. In other words, discarding
* and re-adding a document works exactly like removing and re-adding it. The
* {@link MiniSearch.replace} method can also be used to replace a document
* with a new version.
*
* #### Details about vacuuming
*
* Repetite calls to this method would leave obsolete document references in
* the index, invisible to searches. Two mechanisms take care of cleaning up:
* clean up during search, and vacuuming.
*
*   - Upon search, whenever a discarded ID is found (and ignored for the
*   results), references to the discarded document are removed from the
*   inverted index entries for the search terms. This ensures that subsequent
*   searches for the same terms do not need to skip these obsolete references
*   again.
*
*   - In addition, vacuuming is performed automatically by default (see the
*   `autoVacuum` field in {@link Options}) after a certain number of
*   documents are discarded. Vacuuming traverses all terms in the index,
*   cleaning up all references to discarded documents. Vacuuming can also be
*   triggered manually by calling {@link MiniSearch#vacuum}.
*
* @param id  The ID of the document to be discarded
*/
discard(e){let t=this._idToShortId.get(e);if(t==null)throw Error(`MiniSearch: cannot discard document with ID ${e}: it is not in the index`);this._idToShortId.delete(e),this._documentIds.delete(t),this._storedFields.delete(t),(this._fieldLength.get(t)||[]).forEach((e,n)=>{this.removeFieldLength(t,n,this._documentCount,e)}),this._fieldLength.delete(t),--this._documentCount,this._dirtCount+=1,this.maybeAutoVacuum()}maybeAutoVacuum(){if(this._options.autoVacuum===!1)return;let{minDirtFactor:e,minDirtCount:t,batchSize:n,batchWait:r}=this._options.autoVacuum;this.conditionalVacuum({batchSize:n,batchWait:r},{minDirtCount:t,minDirtFactor:e})}
/**
* Discards the documents with the given IDs, so they won't appear in search
* results
*
* It is equivalent to calling {@link MiniSearch#discard} for all the given
* IDs, but with the optimization of triggering at most one automatic
* vacuuming at the end.
*
* Note: to remove all documents from the index, it is faster and more
* convenient to call {@link MiniSearch.removeAll} with no argument, instead
* of passing all IDs to this method.
*/
discardAll(e){let t=this._options.autoVacuum;try{this._options.autoVacuum=!1;for(let t of e)this.discard(t)}finally{this._options.autoVacuum=t}this.maybeAutoVacuum()}
/**
* It replaces an existing document with the given updated version
*
* It works by discarding the current version and adding the updated one, so
* it is functionally equivalent to calling {@link MiniSearch#discard}
* followed by {@link MiniSearch#add}. The ID of the updated document should
* be the same as the original one.
*
* Since it uses {@link MiniSearch#discard} internally, this method relies on
* vacuuming to clean up obsolete document references from the index, allowing
* memory to be released (see {@link MiniSearch#discard}).
*
* @param updatedDocument  The updated document to replace the old version
* with
*/
replace(e){let{idField:t,extractField:n}=this._options,r=n(e,t);this.discard(r),this.add(e)}
/**
* Triggers a manual vacuuming, cleaning up references to discarded documents
* from the inverted index
*
* Vacuuming is only useful for applications that use the {@link
* MiniSearch#discard} or {@link MiniSearch#replace} methods.
*
* By default, vacuuming is performed automatically when needed (controlled by
* the `autoVacuum` field in {@link Options}), so there is usually no need to
* call this method, unless one wants to make sure to perform vacuuming at a
* specific moment.
*
* Vacuuming traverses all terms in the inverted index in batches, and cleans
* up references to discarded documents from the posting list, allowing memory
* to be released.
*
* The method takes an optional object as argument with the following keys:
*
*   - `batchSize`: the size of each batch (1000 by default)
*
*   - `batchWait`: the number of milliseconds to wait between batches (10 by
*   default)
*
* On large indexes, vacuuming could have a non-negligible cost: batching
* avoids blocking the thread for long, diluting this cost so that it is not
* negatively affecting the application. Nonetheless, this method should only
* be called when necessary, and relying on automatic vacuuming is usually
* better.
*
* It returns a promise that resolves (to undefined) when the clean up is
* completed. If vacuuming is already ongoing at the time this method is
* called, a new one is enqueued immediately after the ongoing one, and a
* corresponding promise is returned. However, no more than one vacuuming is
* enqueued on top of the ongoing one, even if this method is called more
* times (enqueuing multiple ones would be useless).
*
* @param options  Configuration options for the batch size and delay. See
* {@link VacuumOptions}.
*/
vacuum(e={}){return this.conditionalVacuum(e)}conditionalVacuum(e,t){return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum??=this._currentVacuum.then(()=>{let t=this._enqueuedVacuumConditions;return this._enqueuedVacuumConditions=jt,this.performVacuuming(e,t)}),this._enqueuedVacuum):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)}async performVacuuming(e,t){let n=this._dirtCount;if(this.vacuumConditionsMet(t)){let t=e.batchSize||At.batchSize,r=e.batchWait||At.batchWait,i=1;for(let[e,n]of this._index){for(let[e,t]of n)for(let[r]of t){if(this._documentIds.has(r))continue;t.size<=1?n.delete(e):t.delete(r)}this._index.get(e).size===0&&this._index.delete(e),i%t===0&&await new Promise(e=>setTimeout(e,r)),i+=1}this._dirtCount-=n}await null,this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null}vacuumConditionsMet(e){if(e==null)return!0;let{minDirtCount:t,minDirtFactor:n}=e;return t||=Mt.minDirtCount,n||=Mt.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=n}
/**
* Is `true` if a vacuuming operation is ongoing, `false` otherwise
*/
get isVacuuming(){return this._currentVacuum!=null}
/**
* The number of documents discarded since the most recent vacuuming
*/
get dirtCount(){return this._dirtCount}
/**
* A number between 0 and 1 giving an indication about the proportion of
* documents that are discarded, and can therefore be cleaned up by vacuuming.
* A value close to 0 means that the index is relatively clean, while a higher
* value means that the index is relatively dirty, and vacuuming could release
* memory.
*/
get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}
/**
* Returns `true` if a document with the given ID is present in the index and
* available for search, `false` otherwise
*
* @param id  The document ID
*/
has(e){return this._idToShortId.has(e)}
/**
* Returns the stored fields (as configured in the `storeFields` constructor
* option) for the given document ID. Returns `undefined` if the document is
* not present in the index.
*
* @param id  The document ID
*/
getStoredFields(e){let t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)}
/**
* Search for documents matching the given search query.
*
* The result is a list of scored document IDs matching the query, sorted by
* descending score, and each including data about which terms were matched and
* in which fields.
*
* ### Basic usage:
*
* ```javascript
* // Search for "zen art motorcycle" with default options: terms have to match
* // exactly, and individual terms are joined with OR
* miniSearch.search('zen art motorcycle')
* // => [ { id: 2, score: 2.77258, match: { ... } }, { id: 4, score: 1.38629, match: { ... } } ]
* ```
*
* ### Restrict search to specific fields:
*
* ```javascript
* // Search only in the 'title' field
* miniSearch.search('zen', { fields: ['title'] })
* ```
*
* ### Field boosting:
*
* ```javascript
* // Boost a field
* miniSearch.search('zen', { boost: { title: 2 } })
* ```
*
* ### Prefix search:
*
* ```javascript
* // Search for "moto" with prefix search (it will match documents
* // containing terms that start with "moto" or "neuro")
* miniSearch.search('moto neuro', { prefix: true })
* ```
*
* ### Fuzzy search:
*
* ```javascript
* // Search for "ismael" with fuzzy search (it will match documents containing
* // terms similar to "ismael", with a maximum edit distance of 0.2 term.length
* // (rounded to nearest integer)
* miniSearch.search('ismael', { fuzzy: 0.2 })
* ```
*
* ### Combining strategies:
*
* ```javascript
* // Mix of exact match, prefix search, and fuzzy search
* miniSearch.search('ismael mob', {
*  prefix: true,
*  fuzzy: 0.2
* })
* ```
*
* ### Advanced prefix and fuzzy search:
*
* ```javascript
* // Perform fuzzy and prefix search depending on the search term. Here
* // performing prefix and fuzzy search only on terms longer than 3 characters
* miniSearch.search('ismael mob', {
*  prefix: term => term.length > 3
*  fuzzy: term => term.length > 3 ? 0.2 : null
* })
* ```
*
* ### Combine with AND:
*
* ```javascript
* // Combine search terms with AND (to match only documents that contain both
* // "motorcycle" and "art")
* miniSearch.search('motorcycle art', { combineWith: 'AND' })
* ```
*
* ### Combine with AND_NOT:
*
* There is also an AND_NOT combinator, that finds documents that match the
* first term, but do not match any of the other terms. This combinator is
* rarely useful with simple queries, and is meant to be used with advanced
* query combinations (see later for more details).
*
* ### Filtering results:
*
* ```javascript
* // Filter only results in the 'fiction' category (assuming that 'category'
* // is a stored field)
* miniSearch.search('motorcycle art', {
*   filter: (result) => result.category === 'fiction'
* })
* ```
*
* ### Wildcard query
*
* Searching for an empty string (assuming the default tokenizer) returns no
* results. Sometimes though, one needs to match all documents, like in a
* "wildcard" search. This is possible by passing the special value
* {@link MiniSearch.wildcard} as the query:
*
* ```javascript
* // Return search results for all documents
* miniSearch.search(MiniSearch.wildcard)
* ```
*
* Note that search options such as `filter` and `boostDocument` are still
* applied, influencing which results are returned, and their order:
*
* ```javascript
* // Return search results for all documents in the 'fiction' category
* miniSearch.search(MiniSearch.wildcard, {
*   filter: (result) => result.category === 'fiction'
* })
* ```
*
* ### Advanced combination of queries:
*
* It is possible to combine different subqueries with OR, AND, and AND_NOT,
* and even with different search options, by passing a query expression
* tree object as the first argument, instead of a string.
*
* ```javascript
* // Search for documents that contain "zen" and ("motorcycle" or "archery")
* miniSearch.search({
*   combineWith: 'AND',
*   queries: [
*     'zen',
*     {
*       combineWith: 'OR',
*       queries: ['motorcycle', 'archery']
*     }
*   ]
* })
*
* // Search for documents that contain ("apple" or "pear") but not "juice" and
* // not "tree"
* miniSearch.search({
*   combineWith: 'AND_NOT',
*   queries: [
*     {
*       combineWith: 'OR',
*       queries: ['apple', 'pear']
*     },
*     'juice',
*     'tree'
*   ]
* })
* ```
*
* Each node in the expression tree can be either a string, or an object that
* supports all {@link SearchOptions} fields, plus a `queries` array field for
* subqueries.
*
* Note that, while this can become complicated to do by hand for complex or
* deeply nested queries, it provides a formalized expression tree API for
* external libraries that implement a parser for custom query languages.
*
* @param query  Search query
* @param searchOptions  Search options. Each option, if not given, defaults to the corresponding value of `searchOptions` given to the constructor, or to the library default.
*/
search(t,n={}){let{searchOptions:r}=this._options,i={...r,...n},a=this.executeQuery(t,n),o=[];for(let[e,{score:t,terms:n,match:r}]of a){let a=n.length||1,s={id:this._documentIds.get(e),score:t*a,terms:Object.keys(r),queryTerms:n,match:r};Object.assign(s,this._storedFields.get(e)),(i.filter==null||i.filter(s))&&o.push(s)}return t===e.wildcard&&i.boostDocument==null||o.sort(Ft),o}
/**
* Provide suggestions for the given search query
*
* The result is a list of suggested modified search queries, derived from the
* given search query, each with a relevance score, sorted by descending score.
*
* By default, it uses the same options used for search, except that by
* default it performs prefix search on the last term of the query, and
* combine terms with `'AND'` (requiring all query terms to match). Custom
* options can be passed as a second argument. Defaults can be changed upon
* calling the {@link MiniSearch} constructor, by passing a
* `autoSuggestOptions` option.
*
* ### Basic usage:
*
* ```javascript
* // Get suggestions for 'neuro':
* miniSearch.autoSuggest('neuro')
* // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 0.46240 } ]
* ```
*
* ### Multiple words:
*
* ```javascript
* // Get suggestions for 'zen ar':
* miniSearch.autoSuggest('zen ar')
* // => [
* //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
* //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
* // ]
* ```
*
* ### Fuzzy suggestions:
*
* ```javascript
* // Correct spelling mistakes using fuzzy search:
* miniSearch.autoSuggest('neromancer', { fuzzy: 0.2 })
* // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 1.03998 } ]
* ```
*
* ### Filtering:
*
* ```javascript
* // Get suggestions for 'zen ar', but only within the 'fiction' category
* // (assuming that 'category' is a stored field):
* miniSearch.autoSuggest('zen ar', {
*   filter: (result) => result.category === 'fiction'
* })
* // => [
* //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
* //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
* // ]
* ```
*
* @param queryString  Query string to be expanded into suggestions
* @param options  Search options. The supported options and default values
* are the same as for the {@link MiniSearch#search} method, except that by
* default prefix search is performed on the last term in the query, and terms
* are combined with `'AND'`.
* @return  A sorted array of suggestions sorted by relevance score.
*/
autoSuggest(e,t={}){t={...this._options.autoSuggestOptions,...t};let n=new Map;for(let{score:r,terms:i}of this.search(e,t)){let e=i.join(` `),t=n.get(e);t==null?n.set(e,{score:r,terms:i,count:1}):(t.score+=r,t.count+=1)}let r=[];for(let[e,{score:t,terms:i,count:a}]of n)r.push({suggestion:e,terms:i,score:t/a});return r.sort(Ft),r}
/**
* Total number of documents available to search
*/
get documentCount(){return this._documentCount}
/**
* Number of terms in the index
*/
get termCount(){return this._index.size}
/**
* Deserializes a JSON index (serialized with `JSON.stringify(miniSearch)`)
* and instantiates a MiniSearch instance. It should be given the same options
* originally used when serializing the index.
*
* ### Usage:
*
* ```javascript
* // If the index was serialized with:
* let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
* miniSearch.addAll(documents)
*
* const json = JSON.stringify(miniSearch)
* // It can later be deserialized like this:
* miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
* ```
*
* @param json  JSON-serialized index
* @param options  configuration options, same as the constructor
* @return An instance of MiniSearch deserialized from the given JSON.
*/
static loadJSON(e,t){if(t==null)throw Error(`MiniSearch: loadJSON should be given the same options used when serializing the index`);return this.loadJS(JSON.parse(e),t)}
/**
* Async equivalent of {@link MiniSearch.loadJSON}
*
* This function is an alternative to {@link MiniSearch.loadJSON} that returns
* a promise, and loads the index in batches, leaving pauses between them to avoid
* blocking the main thread. It tends to be slower than the synchronous
* version, but does not block the main thread, so it can be a better choice
* when deserializing very large indexes.
*
* @param json  JSON-serialized index
* @param options  configuration options, same as the constructor
* @return A Promise that will resolve to an instance of MiniSearch deserialized from the given JSON.
*/
static async loadJSONAsync(e,t){if(t==null)throw Error(`MiniSearch: loadJSON should be given the same options used when serializing the index`);return this.loadJSAsync(JSON.parse(e),t)}
/**
* Returns the default value of an option. It will throw an error if no option
* with the given name exists.
*
* @param optionName  Name of the option
* @return The default value of the given option
*
* ### Usage:
*
* ```javascript
* // Get default tokenizer
* MiniSearch.getDefault('tokenize')
*
* // Get default term processor
* MiniSearch.getDefault('processTerm')
*
* // Unknown options will throw an error
* MiniSearch.getDefault('notExisting')
* // => throws 'MiniSearch: unknown option "notExisting"'
* ```
*/
static getDefault(e){if(Dt.hasOwnProperty(e))return St(Dt,e);throw Error(`MiniSearch: unknown option "${e}"`)}
/**
* @ignore
*/
static loadJS(e,t){let{index:n,documentIds:r,fieldLength:i,storedFields:a,serializationVersion:o}=e,s=this.instantiateMiniSearch(e,t);s._documentIds=Lt(r),s._fieldLength=Lt(i),s._storedFields=Lt(a);for(let[e,t]of s._documentIds)s._idToShortId.set(t,e);for(let[e,t]of n){let n=new Map;for(let e of Object.keys(t)){let r=t[e];o===1&&(r=r.ds),n.set(parseInt(e,10),Lt(r))}s._index.set(e,n)}return s}
/**
* @ignore
*/
static async loadJSAsync(e,t){let{index:n,documentIds:r,fieldLength:i,storedFields:a,serializationVersion:o}=e,s=this.instantiateMiniSearch(e,t);s._documentIds=await $(r),s._fieldLength=await $(i),s._storedFields=await $(a);for(let[e,t]of s._documentIds)s._idToShortId.set(t,e);let c=0;for(let[e,t]of n){let n=new Map;for(let e of Object.keys(t)){let r=t[e];o===1&&(r=r.ds),n.set(parseInt(e,10),await $(r))}++c%1e3==0&&await Rt(0),s._index.set(e,n)}return s}
/**
* @ignore
*/
static instantiateMiniSearch(t,n){let{documentCount:r,nextId:i,fieldIds:a,averageFieldLength:o,dirtCount:s,serializationVersion:c}=t;if(c!==1&&c!==2)throw Error(`MiniSearch: cannot deserialize an index created with an incompatible version`);let l=new e(n);return l._documentCount=r,l._nextId=i,l._idToShortId=new Map,l._fieldIds=a,l._avgFieldLength=o,l._dirtCount=s||0,l._index=new ut,l}
/**
* @ignore
*/
executeQuery(t,n={}){if(t===e.wildcard)return this.executeWildcardQuery(n);if(typeof t!=`string`){let e={...n,...t,queries:void 0},r=t.queries.map(t=>this.executeQuery(t,e));return this.combineResults(r,e.combineWith)}let{tokenize:r,processTerm:i,searchOptions:a}=this._options,o={tokenize:r,processTerm:i,...a,...n},{tokenize:s,processTerm:c}=o,l=s(t).flatMap(e=>c(e)).filter(e=>!!e),u=l.map(Et(o)),d=u.map(e=>this.executeQuerySpec(e,o));return this.combineResults(d,o.combineWith)}
/**
* @ignore
*/
executeQuerySpec(e,t){let n={...this._options.searchOptions,...t},r=(n.fields||this._options.fields).reduce((e,t)=>({...e,[t]:St(n.boost,t)||1}),{}),{boostDocument:i,weights:a,maxFuzzy:o,bm25:s}=n,{fuzzy:c,prefix:l}={...Ot.weights,...a},u=this._index.get(e.term),d=this.termResults(e.term,e.term,1,e.termBoost,u,r,i,s),f,p;if(e.prefix&&(f=this._index.atPrefix(e.term)),e.fuzzy){let t=e.fuzzy===!0?.2:e.fuzzy,n=t<1?Math.min(o,Math.round(e.term.length*t)):t;n&&(p=this._index.fuzzyGet(e.term,n))}if(f)for(let[t,n]of f){let a=t.length-e.term.length;if(!a)continue;p?.delete(t);let o=l*t.length/(t.length+.3*a);this.termResults(e.term,t,o,e.termBoost,n,r,i,s,d)}if(p)for(let t of p.keys()){let[n,a]=p.get(t);if(!a)continue;let o=c*t.length/(t.length+a);this.termResults(e.term,t,o,e.termBoost,n,r,i,s,d)}return d}
/**
* @ignore
*/
executeWildcardQuery(e){let t=new Map,n={...this._options.searchOptions,...e};for(let[e,r]of this._documentIds){let i=n.boostDocument?n.boostDocument(r,``,this._storedFields.get(e)):1;t.set(e,{score:i,terms:[],match:{}})}return t}
/**
* @ignore
*/
combineResults(e,t=vt){if(e.length===0)return new Map;let n=t.toLowerCase(),r=Ct[n];if(!r)throw Error(`Invalid combination operator: ${t}`);return e.reduce(r)||new Map}
/**
* Allows serialization of the index to JSON, to possibly store it and later
* deserialize it with {@link MiniSearch.loadJSON}.
*
* Normally one does not directly call this method, but rather call the
* standard JavaScript `JSON.stringify()` passing the {@link MiniSearch}
* instance, and JavaScript will internally call this method. Upon
* deserialization, one must pass to {@link MiniSearch.loadJSON} the same
* options used to create the original instance that was serialized.
*
* ### Usage:
*
* ```javascript
* // Serialize the index:
* let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
* miniSearch.addAll(documents)
* const json = JSON.stringify(miniSearch)
*
* // Later, to deserialize it:
* miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
* ```
*
* @return A plain-object serializable representation of the search index.
*/
toJSON(){let e=[];for(let[t,n]of this._index){let r={};for(let[e,t]of n)r[e]=Object.fromEntries(t);e.push([t,r])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:e,serializationVersion:2}}
/**
* @ignore
*/
termResults(e,t,n,r,i,a,o,s,c=new Map){if(i==null)return c;for(let l of Object.keys(a)){let u=a[l],d=this._fieldIds[l],f=i.get(d);if(f==null)continue;let p=f.size,m=this._avgFieldLength[d];for(let i of f.keys()){if(!this._documentIds.has(i)){this.removeTerm(d,i,t),--p;continue}let a=o?o(this._documentIds.get(i),t,this._storedFields.get(i)):1;if(!a)continue;let h=f.get(i),g=this._fieldLength.get(i)[d],_=Tt(h,p,this._documentCount,g,m,s),v=n*r*u*a*_,y=c.get(i);if(y){y.score+=v,Nt(y.terms,e);let n=St(y.match,t);n?n.push(l):y.match[t]=[l]}else c.set(i,{score:v,terms:[e],match:{[t]:[l]}})}}return c}
/**
* @ignore
*/
addTerm(e,t,n){let r=this._index.fetch(n,It),i=r.get(e);if(i==null)i=new Map,i.set(t,1),r.set(e,i);else{let e=i.get(t);i.set(t,(e||0)+1)}}
/**
* @ignore
*/
removeTerm(e,t,n){if(!this._index.has(n)){this.warnDocumentChanged(t,e,n);return}let r=this._index.fetch(n,It),i=r.get(e);i==null||i.get(t)==null?this.warnDocumentChanged(t,e,n):i.get(t)<=1?i.size<=1?r.delete(e):i.delete(t):i.set(t,i.get(t)-1),this._index.get(n).size===0&&this._index.delete(n)}
/**
* @ignore
*/
warnDocumentChanged(e,t,n){for(let r of Object.keys(this._fieldIds))if(this._fieldIds[r]===t){this._options.logger(`warn`,`MiniSearch: document with ID ${this._documentIds.get(e)} has changed before removal: term "${n}" was not present in field "${r}". Removing a document after it has changed can corrupt the index!`,`version_conflict`);return}}
/**
* @ignore
*/
addDocumentId(e){let t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t}
/**
* @ignore
*/
addFields(e){for(let t=0;t<e.length;t++)this._fieldIds[e[t]]=t}
/**
* @ignore
*/
addFieldLength(e,t,n,r){let i=this._fieldLength.get(e);i??this._fieldLength.set(e,i=[]),i[t]=r;let a=this._avgFieldLength[t]||0,o=a*n+r;this._avgFieldLength[t]=o/(n+1)}
/**
* @ignore
*/
removeFieldLength(e,t,n,r){if(n===1){this._avgFieldLength[t]=0;return}let i=this._avgFieldLength[t]*n-r;this._avgFieldLength[t]=i/(n-1)}
/**
* @ignore
*/
saveStoredFields(e,t){let{storeFields:n,extractField:r}=this._options;if(n==null||n.length===0)return;let i=this._storedFields.get(e);i??this._storedFields.set(e,i={});for(let e of n){let n=r(t,e);n!==void 0&&(i[e]=n)}}};
/**
* The special wildcard symbol that can be passed to {@link MiniSearch#search}
* to match all documents
*/
xt.wildcard=Symbol(`*`);const St=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,Ct={[vt]:(e,t)=>{for(let n of t.keys()){let r=e.get(n);if(r==null)e.set(n,t.get(n));else{let{score:e,terms:i,match:a}=t.get(n);r.score+=e,r.match=Object.assign(r.match,a),Pt(r.terms,i)}}return e},[yt]:(e,t)=>{let n=new Map;for(let r of t.keys()){let i=e.get(r);if(i==null)continue;let{score:a,terms:o,match:s}=t.get(r);Pt(i.terms,o),n.set(r,{score:i.score+a,terms:i.terms,match:Object.assign(i.match,s)})}return n},[bt]:(e,t)=>{for(let n of t.keys())e.delete(n);return e}},wt={k:1.2,b:.7,d:.5},Tt=(e,t,n,r,i,a)=>{let{k:o,b:s,d:c}=a,l=Math.log(1+(n-t+.5)/(t+.5));return l*(c+e*(o+1)/(e+o*(1-s+s*r/i)))},Et=e=>(t,n,r)=>{let i=typeof e.fuzzy==`function`?e.fuzzy(t,n,r):e.fuzzy||!1,a=typeof e.prefix==`function`?e.prefix(t,n,r):e.prefix===!0,o=typeof e.boostTerm==`function`?e.boostTerm(t,n,r):1;return{term:t,fuzzy:i,prefix:a,termBoost:o}},Dt={idField:`id`,extractField:(e,t)=>e[t],tokenize:e=>e.split(zt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])==`function`&&console[e](t)},autoVacuum:!0},Ot={combineWith:vt,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:wt},kt={combineWith:yt,prefix:(e,t,n)=>t===n.length-1},At={batchSize:1e3,batchWait:10},jt={minDirtFactor:.1,minDirtCount:20},Mt={...At,...jt},Nt=(e,t)=>{e.includes(t)||e.push(t)},Pt=(e,t)=>{for(let n of t)e.includes(n)||e.push(n)},Ft=({score:e},{score:t})=>t-e,It=()=>new Map,Lt=e=>{let t=new Map;for(let n of Object.keys(e))t.set(parseInt(n,10),e[n]);return t},$=async e=>{let t=new Map,n=0;for(let r of Object.keys(e))t.set(parseInt(r,10),e[r]),++n%1e3==0&&await Rt(0);return t},Rt=e=>new Promise(t=>setTimeout(t,e)),zt=/[\n\r\p{Z}\p{P}]+/u;var Bt=class{constructor(t=10){e.defineProperty(this,`max`,void 0),e.defineProperty(this,`cache`,void 0),this.max=t,this.cache=new Map}get(e){let t=this.cache.get(e);return t!==void 0&&(this.cache.delete(e),this.cache.set(e,t)),t}set(e,t){this.cache.has(e)?this.cache.delete(e):this.cache.size===this.max&&this.cache.delete(this.first()),this.cache.set(e,t)}first(){return this.cache.keys().next().value}clear(){this.cache.clear()}};const Vt=[`aria-owns`],Ht={class:`shell`},Ut=[`title`],Wt={class:`search-actions before`},Gt=[`title`],Kt=[`aria-activedescendant`,`aria-controls`,`placeholder`],qt={class:`search-actions`},Jt=[`title`],Yt=[`disabled`,`title`],Xt=[`id`,`role`,`aria-labelledby`],Zt=[`id`,`aria-selected`],Qt=[`href`,`aria-label`,`onMouseenter`,`onFocusin`,`data-index`],$t={class:`titles`},en=[`innerHTML`],tn={class:`title main`},nn=[`innerHTML`],rn={key:0,class:`excerpt-wrapper`},an={key:0,class:`excerpt`,inert:``},on=[`innerHTML`],sn={key:0,class:`no-results`},cn={class:`search-keyboard-shortcuts`},ln=[`aria-label`],un=[`aria-label`],dn=[`aria-label`],fn=[`aria-label`];var pn=/* @__PURE__ */ w({__name:`VPLocalSearchBox`,emits:[`close`],setup(e,{emit:t}){var c,d;let f=t,p=O(),w=O(),pe=O(_e),j=m(),{activate:ve}=et(p,{immediate:!0,allowOutsideClick:!0,clickOutsideDeactivates:!0,escapeDeactivates:!0}),{localeIndex:M,theme:N}=j,P=n(async()=>{var e,t,n,r,i,a,o;return ce(xt.loadJSON((e=await(t=(n=pe.value)[M.value])?.call(n))?.default,{fields:[`title`,`titles`,`text`],storeFields:[`title`,`titles`],searchOptions:{fuzzy:.2,prefix:!0,boost:{title:4,text:2,titles:1},...(r=N.value.search)?.provider===`local`&&((i=N.value.search.options)==null||(i=i.miniSearch)==null?void 0:i.searchOptions)},...(a=N.value.search)?.provider===`local`&&((o=N.value.search.options)==null||(o=o.miniSearch)==null?void 0:o.options)}))}),F=b(()=>{var e,t;return(e=N.value.search)?.provider===`local`&&(t=N.value.search.options)?.disableQueryPersistence===!0}),I=F.value?D(``):y(`vitepress:local-search-filter`,``),L=g(`vitepress:local-search-detailed-list`,(c=N.value.search)?.provider===`local`&&(d=N.value.search.options)?.detailedView===!0),ye=b(()=>{var e,t,n;return(e=N.value.search)?.provider===`local`&&((t=N.value.search.options)?.disableDetailedView===!0||(n=N.value.search.options)?.detailedView===!1)}),be=b(()=>{var e,t,n;let r=(e=N.value.search)?.options??N.value.algolia;return(r==null||(t=r.locales)==null||(t=t[M.value])==null||(t=t.translations)==null||(t=t.button)==null?void 0:t.buttonText)||(r==null||(n=r.translations)==null||(n=n.button)==null?void 0:n.buttonText)||`Search`});he(()=>{ye.value&&(L.value=!1)});let R=O([]),z=D(!1);me(I,()=>{z.value=!1});let xe=n(async()=>{if(w.value)return ce(new rt(w.value))},null),B=new Bt(16);te(()=>[P.value,I.value,L.value],async([e,t,n],i,o)=>{var s,c,l;i?.[0]!==e&&B.clear();let u=!1;if(o(()=>{u=!0}),!e)return;R.value=e.search(t).slice(0,16),z.value=!0;let d=n?await Promise.all(R.value.map(e=>Se(e.id))):[];if(u)return;for(let{id:e,mod:t}of d){let n=e.slice(0,e.indexOf(`#`)),i=B.get(n);if(i)continue;i=new Map,B.set(n,i);let o=t.default??t;if(o?.render||o?.setup){let e=r(o);e.config.warnHandler=()=>{},e.provide(a,j),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return j.frontmatter.value}},$params:{get(){return j.page.value.params}}});let t=document.createElement(`div`);e.mount(t);let n=t.querySelectorAll(`h1, h2, h3, h4, h5, h6`);n.forEach(e=>{var t;let n=(t=e.querySelector(`a`))?.getAttribute(`href`),r=n?.startsWith(`#`)&&n.slice(1);if(!r)return;let a=``;for(;(e=e.nextElementSibling)&&!/^h[1-6]$/i.test(e.tagName);)a+=e.outerHTML;i.set(r,a)}),e.unmount()}if(u)return}let f=new Set;if(R.value=R.value.map(e=>{let[t,n]=e.id.split(`#`),r=B.get(t),i=r?.get(n)??``;for(let t in e.match)f.add(t);return{...e,text:i}}),await T(),u)return;await new Promise(e=>{var t;(t=xe.value)?.unmark({done:()=>{var t;(t=xe.value)?.markRegExp(Oe(f),{done:e})}})});let m=(s=p.value)?.querySelectorAll(`.result .excerpt`)??[];for(let e of m)(c=e.querySelector(`mark[data-markjs="true"]`))?.scrollIntoView({block:`center`});(l=w.value)==null||(l=l.firstElementChild)==null||l.scrollIntoView({block:`start`})},{debounce:200,immediate:!0});async function Se(e){let t=u(e.slice(0,e.indexOf(`#`)));try{if(!t)throw Error(`Cannot find file for id: ${e}`);return{id:e,mod:await import(
/*@vite-ignore*/
t)}}catch(t){return console.error(t),{id:e,mod:{}}}}let V=D(),Ce=b(()=>{var e;return(e=I.value)?.length<=0});function H(e=!0){var t,n;(t=V.value)?.focus(),e&&(n=V.value)?.select()}de(()=>{H()});function we(e){e.pointerType===`mouse`&&H()}let U=D(-1),W=D(!0);me(R,e=>{U.value=e.length?0:-1,G()});function G(){T(()=>{let e=document.querySelector(`.result.selected`);e?.scrollIntoView({block:`nearest`})})}l(`ArrowUp`,e=>{e.preventDefault(),U.value--,U.value<0&&(U.value=R.value.length-1),W.value=!0,G()}),l(`ArrowDown`,e=>{e.preventDefault(),U.value++,U.value>=R.value.length&&(U.value=0),W.value=!0,G()});let Te=_();l(`Enter`,e=>{if(e.isComposing||e.target instanceof HTMLButtonElement&&e.target.type!==`submit`)return;let t=R.value[U.value];if(e.target instanceof HTMLInputElement&&!t){e.preventDefault();return}t&&(Te.go(t.id),f(`close`))}),l(`Escape`,()=>{f(`close`)});let Ee={modal:{displayDetails:`Display detailed list`,resetButtonTitle:`Reset search`,backButtonTitle:`Close search`,noResultsText:`No results for`,footer:{selectText:`to select`,selectKeyAriaLabel:`enter`,navigateText:`to navigate`,navigateUpKeyAriaLabel:`up arrow`,navigateDownKeyAriaLabel:`down arrow`,closeText:`to close`,closeKeyAriaLabel:`escape`}}},K=i(Ee);de(()=>{window.history.pushState(null,``,null)}),h(`popstate`,e=>{e.preventDefault(),f(`close`)});
/** Lock body */
let q=v(s?document.body:null);de(()=>{T(()=>{q.value=!0,T().then(()=>ve())})}),ue(()=>{q.value=!1});function De(){I.value=``,T().then(()=>H(!1))}function Oe(e){return new RegExp([...e].sort((e,t)=>t.length-e.length).map(e=>`(${o(e)})`).join(`|`),`gi`)}function ke(e){var t;if(!W.value)return;let n=(t=e.target)?.closest(`.result`),r=Number.parseInt(n?.dataset.index);r>=0&&r!==U.value&&(U.value=r),W.value=!1}return(e,t)=>{var n,r,i,a,o;return E(),ae(ie,{to:`body`},[x(`div`,{ref_key:`el`,ref:p,role:`button`,"aria-owns":(n=R.value)?.length?`localsearch-list`:void 0,"aria-expanded":`true`,"aria-haspopup":`listbox`,"aria-labelledby":`localsearch-label`,class:`VPLocalSearchBox`},[x(`div`,{class:`backdrop`,onClick:t[0]||=t=>e.$emit(`close`)}),x(`div`,Ht,[x(`form`,{class:`search-bar`,onPointerup:t[4]||=e=>we(e),onSubmit:t[5]||=ne(()=>{},[`prevent`])},[x(`label`,{title:be.value,id:`localsearch-label`,for:`localsearch-input`},t[7]||=[x(`span`,{"aria-hidden":`true`,class:`vpi-search search-icon local-search-icon`},null,-1)],8,Ut),x(`div`,Wt,[x(`button`,{class:`back-button`,title:A(K)(`modal.backButtonTitle`),onClick:t[1]||=t=>e.$emit(`close`)},t[8]||=[x(`span`,{class:`vpi-arrow-left local-search-icon`},null,-1)],8,Gt)]),ge(x(`input`,{ref_key:`searchInput`,ref:V,"onUpdate:modelValue":t[2]||=e=>se(I)?I.value=e:null,"aria-activedescendant":U.value>-1?`localsearch-item-`+U.value:void 0,"aria-autocomplete":`both`,"aria-controls":(r=R.value)?.length?`localsearch-list`:void 0,"aria-labelledby":`localsearch-label`,autocapitalize:`off`,autocomplete:`off`,autocorrect:`off`,class:`search-input`,id:`localsearch-input`,enterkeyhint:`go`,maxlength:`64`,placeholder:be.value,spellcheck:`false`,type:`search`},null,8,Kt),[[ee,A(I)]]),x(`div`,qt,[ye.value?oe(``,!0):(E(),S(`button`,{key:0,class:le([`toggle-layout-button`,{"detailed-list":A(L)}]),type:`button`,title:A(K)(`modal.displayDetails`),onClick:t[3]||=e=>U.value>-1&&(L.value=!A(L))},t[9]||=[x(`span`,{class:`vpi-layout-list local-search-icon`},null,-1)],10,Jt)),x(`button`,{class:`clear-button`,type:`reset`,disabled:Ce.value,title:A(K)(`modal.resetButtonTitle`),onClick:De},t[10]||=[x(`span`,{class:`vpi-delete local-search-icon`},null,-1)],8,Yt)])],32),x(`ul`,{ref_key:`resultsEl`,ref:w,id:(i=R.value)?.length?`localsearch-list`:void 0,role:(a=R.value)?.length?`listbox`:void 0,"aria-labelledby":(o=R.value)?.length?`localsearch-label`:void 0,class:`results`,onMousemove:ke},[(E(!0),S(re,null,fe(R.value,(n,r)=>(E(),S(`li`,{key:n.id,id:`localsearch-item-`+r,"aria-selected":U.value===r?`true`:`false`,role:`option`},[x(`a`,{href:n.id,class:le([`result`,{selected:U.value===r}]),"aria-label":[...n.titles,n.title].join(` > `),onMouseenter:e=>!W.value&&(U.value=r),onFocusin:e=>U.value=r,onClick:t[6]||=t=>e.$emit(`close`),"data-index":r},[x(`div`,null,[x(`div`,$t,[t[12]||=x(`span`,{class:`title-icon`},`#`,-1),(E(!0),S(re,null,fe(n.titles,(e,n)=>(E(),S(`span`,{key:n,class:`title`},[x(`span`,{class:`text`,innerHTML:e},null,8,en),t[11]||=x(`span`,{class:`vpi-chevron-right local-search-icon`},null,-1)]))),128)),x(`span`,tn,[x(`span`,{class:`text`,innerHTML:n.title},null,8,nn)])]),A(L)?(E(),S(`div`,rn,[n.text?(E(),S(`div`,an,[x(`div`,{class:`vp-doc`,innerHTML:n.text},null,8,on)])):oe(``,!0),t[13]||=x(`div`,{class:`excerpt-gradient-bottom`},null,-1),t[14]||=x(`div`,{class:`excerpt-gradient-top`},null,-1)])):oe(``,!0)])],42,Qt)],8,Zt))),128)),A(I)&&!R.value.length&&z.value?(E(),S(`li`,sn,[C(k(A(K)(`modal.noResultsText`))+` "`,1),x(`strong`,null,k(A(I)),1),t[15]||=C(`" `)])):oe(``,!0)],40,Xt),x(`div`,cn,[x(`span`,null,[x(`kbd`,{"aria-label":A(K)(`modal.footer.navigateUpKeyAriaLabel`)},t[16]||=[x(`span`,{class:`vpi-arrow-up navigate-icon`},null,-1)],8,ln),x(`kbd`,{"aria-label":A(K)(`modal.footer.navigateDownKeyAriaLabel`)},t[17]||=[x(`span`,{class:`vpi-arrow-down navigate-icon`},null,-1)],8,un),C(` `+k(A(K)(`modal.footer.navigateText`)),1)]),x(`span`,null,[x(`kbd`,{"aria-label":A(K)(`modal.footer.selectKeyAriaLabel`)},t[18]||=[x(`span`,{class:`vpi-corner-down-left navigate-icon`},null,-1)],8,dn),C(` `+k(A(K)(`modal.footer.selectText`)),1)]),x(`span`,null,[x(`kbd`,{"aria-label":A(K)(`modal.footer.closeKeyAriaLabel`)},`esc`,8,fn),C(` `+k(A(K)(`modal.footer.closeText`)),1)])])])],8,Vt)])}}}),mn=/* @__PURE__ */ j(pn,[[`__scopeId`,`data-v-1e28a2e3`]]);export{mn as default};