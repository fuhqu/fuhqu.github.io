(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4228)}])},9198:function(e,t,n){"use strict";n.d(t,{Xd:function(){return a},T3:function(){return s}});var r=n(5893);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e){return(0,r.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}))};var i=n(9008),l=n(1664),c=n(4593),u=n.n(c),s=function(e){var t=e.children,n=e.title,o=e.description,c=e.isBackArrowVisible,s=void 0===c||c;return(0,r.jsx)("div",{className:"markdown-body",style:{minHeight:"100vh",padding:"0 2rem"},children:(0,r.jsxs)("div",{style:{maxWidth:860,margin:"0 auto"},children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:u().grid,children:[(0,r.jsxs)("nav",{className:u().nav,children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[s&&(0,r.jsx)(a,{style:{marginRight:"0.5rem"}}),(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("a",{className:u().logo,children:"meinstein"})})]}),(0,r.jsx)(l.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("main",{className:u().content,children:t})}),(0,r.jsx)("footer",{className:u().footer})]})]})})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},l=n(6273),c=n(387),u=n(7190);var s={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=i.default.useMemo((function(){var t=o(l.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,v=a.as,h=e.children,p=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,_=o(u.useIntersection({rootMargin:"200px"}),2),j=_[0],w=_[1],x=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=w&&n&&l.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+v+(t?"%"+t:"")];e&&!o&&f(r,d,v,{locale:t})}),[v,d,w,g,n,r]);var E={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,r,d,v,p,y,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,v,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:r&&r.locale,O=r&&r.isLocaleDomain&&l.getDomainLocale(v,M,r&&r.locales,r&&r.domainLocales);E.href=O||l.addBasePath(l.addLocale(v,M,r&&r.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=a.useRef(),s=o(a.useState(!1),2),f=s[0],d=s[1],v=o(a.useState(t?t.current:null),2),h=v[0],p=v[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]);return a.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&p(t.current)}),[t]),[y,f]};var a=n(7294),i=n(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},4228:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(5893),o=n(9198),a=!0;t.default=function(e){var t=e.html;return(0,r.jsx)(o.T3,{title:"fuhqu",description:"",children:(0,r.jsx)("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t}})})}},4593:function(e){e.exports={nav:"Page_nav__Mq9Eu",logo:"Page_logo__HMyyM",content:"Page_content__vhoQF",footer:"Page_footer__57xZV",grid:"Page_grid__a0SBe"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);