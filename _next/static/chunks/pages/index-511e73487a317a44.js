(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1985)}])},9198:function(e,t,n){"use strict";n.d(t,{Xd:function(){return a},ol:function(){return c},T3:function(){return d}});var r=n(5893);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e){return(0,r.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}))};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){return(0,r.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})}))},s=n(9008),l=n(1664),u=n(4593),f=n.n(u),d=function(e){var t=e.children,n=e.title,i=e.description,o=e.isBackArrowVisible,c=void 0===o||o;return(0,r.jsxs)("div",{className:f().page,children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:f().grid,children:[(0,r.jsxs)("nav",{className:f().nav,children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[c&&(0,r.jsx)(a,{style:{marginRight:"0.5rem"}}),(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("a",{className:f().logo,children:"meinstein"})})]}),(0,r.jsx)(l.default,{href:"/about",children:(0,r.jsx)("a",{children:"about"})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("main",{className:f().content,children:t})})]})]})}},1985:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return y}});var r=n(5893),i=n(1664),a=n(9198),o=n(214),c=n.n(o),s=n(4051),l=n.n(s),u=n(6829),f=n(3454);function d(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}var m=new u.vd({auth:f.env.GH_AUTH});new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,n=this;this.getSiteMap=(t=l().mark((function e(){var t,r,i,a,o,c,s,u,f,d,p,v,b,g,y,_,j,w;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request("GET /gists",{per_page:100});case 2:return t=e.sent,r=t.data||[],e.next=6,Promise.all(r.filter((function(e){var t,n=Object.keys(e.files),r=n.find((function(e){return"meta.json"===e})),i=1===(null===(t=n.filter((function(e){return e.endsWith(".md")})))||void 0===t?void 0:t.length);return r&&i})).map((function(e){return m.request("GET /gists/{gist_id}",{gist_id:e.id})})));case 6:i=e.sent,a=!0,o=!1,c=void 0,e.prev=8,s=i[Symbol.iterator]();case 10:if(a=(u=s.next()).done){e.next=27;break}if(f=u.value,v=f.data.files||{},b=null===v||void 0===v||null===(d=v["meta.json"])||void 0===d?void 0:d.content,g=Object.keys(v),y=g.find((function(e){return e.endsWith(".md")}))||"",_=(null===(p=v[y])||void 0===p?void 0:p.content)||"",!b||!_){e.next=24;break}return e.next=21,m.request("POST /markdown",{text:_,mode:"gfm"});case 21:j=e.sent,"about"===(w=h({},f.data,{html:j.data,slug:y.slice(0,-3),metadata:JSON.parse(b)})).slug?n.siteMap.about=w:n.siteMap.posts[w.slug]=w;case 24:a=!0,e.next=10;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e.catch(8),o=!0,c=e.t0;case 33:e.prev=33,e.prev=34,a||null==s.return||s.return();case 36:if(e.prev=36,!o){e.next=39;break}throw c;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return e.abrupt("return",n.siteMap);case 42:case"end":return e.stop()}}),e,null,[[8,29,33,41],[34,,36,40]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(e){d(a,r,i,o,c,"next",e)}function c(e){d(a,r,i,o,c,"throw",e)}o(void 0)}))}),this.siteMap={posts:{}}};function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=!0,y=function(e){return(0,r.jsx)(a.T3,{title:"fuhqu",description:"",isBackArrowVisible:!1,children:(0,r.jsx)("ul",{children:Object.entries(e.posts).map((function(e){var t,n=b(e,2),a=n[0],o=n[1];return(0,r.jsx)("li",{className:c().post,children:(0,r.jsx)(i.default,{href:"/post/".concat(a),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("h3",{className:c().title,children:o.metadata.title}),(0,r.jsx)("p",{className:c().snippet,children:o.metadata.snippet}),(0,r.jsxs)("p",{className:c().meta,children:[(t=o.created_at||"",new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}))," \xb7 ",o.comments," comments"]})]})})},o.id)}))})})}},214:function(e){e.exports={post:"Home_post__K8_r2",title:"Home_title__T09hD",snippet:"Home_snippet__pnaXl",meta:"Home_meta__MGCqe"}},4593:function(e){e.exports={page:"Page_page__rN2n_",nav:"Page_nav__Mq9Eu",logo:"Page_logo__HMyyM",content:"Page_content__vhoQF",footer:"Page_footer__57xZV",grid:"Page_grid__a0SBe"}},5696:function(){}},function(e){e.O(0,[734,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);