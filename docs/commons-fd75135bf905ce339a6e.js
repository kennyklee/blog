(self.webpackChunkkenny_lee_blog=self.webpackChunkkenny_lee_blog||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},8330:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),o=function(){return n.createElement("footer",null,"© ",(new Date).getFullYear(),". Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com",target:"_blank",rel:"noreferrer"},"Gatsby")," ","using"," ",n.createElement("a",{href:"https://gitpod.io",target:"_blank",rel:"noreferrer"},"Gitpod.io")," &"," ",n.createElement("a",{href:"https://github.com/kennyklee/blog/projects/1",target:"_blank",rel:"noreferrer"},"Github"),".")},i=r(5444),a=r(3494),c=a.default.nav.withConfig({displayName:"Nav__NavStyles",componentId:"sc-14jdvxq-0"})(['font-family:var(--font-heading);font-weight:var(--fontWeight-bold);color:var(--color-heading);margin-bottom:1rem;ul{margin:0;padding:0;text-align:center;list-style:none;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:1rem;align-items:center;}a{text-transform:uppercase;text-decoration:none;letter-spacing:0.15em;display:inline-block;padding:15px 20px;position:relative;}a:after{background:none repeat scroll 0 0 transparent;bottom:0;content:"";display:block;height:1px;left:50%;position:absolute;background:var(--color-primary);transition:width 0.3s ease 0s,left 0.3s ease 0s;width:0;}a:hover:after{width:100%;left:0;}']),l=function(){return n.createElement(c,null,n.createElement("ul",null,n.createElement("li",null,n.createElement(i.Link,{to:"/"},"Home")),n.createElement("li",null,n.createElement(i.Link,{to:"/blog"},"Blog")),n.createElement("li",null,n.createElement("a",{href:"https://notes.kennylee.com",target:"_blank",rel:"noreferrer"},"Notes"))))},s=(0,a.createGlobalStyle)([':root{--maxWidth-none:"none";--maxWidth-xs:20rem;--maxWidth-sm:24rem;--maxWidth-md:28rem;--maxWidth-lg:32rem;--maxWidth-xl:36rem;--maxWidth-2xl:42rem;--maxWidth-3xl:48rem;--maxWidth-4xl:56rem;--maxWidth-full:"100%";--maxWidth-wrapper:var(--maxWidth-2xl);--spacing-px:"1px";--spacing-0:0;--spacing-1:0.25rem;--spacing-2:0.5rem;--spacing-3:0.75rem;--spacing-4:1rem;--spacing-5:1.25rem;--spacing-6:1.5rem;--spacing-8:2rem;--spacing-10:2.5rem;--spacing-12:3rem;--spacing-16:4rem;--spacing-20:5rem;--spacing-24:6rem;--spacing-32:8rem;--fontFamily-sans:Montserrat,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--fontFamily-serif:"Merriweather","Georgia",Cambria,"Times New Roman",Times,serif;--font-body:var(--fontFamily-serif);--font-heading:var(--fontFamily-sans);--fontWeight-normal:400;--fontWeight-medium:500;--fontWeight-semibold:600;--fontWeight-bold:700;--fontWeight-extrabold:800;--fontWeight-black:900;--fontSize-root:16px;--lineHeight-none:1;--lineHeight-tight:1.1;--lineHeight-normal:1.5;--lineHeight-relaxed:1.625;--fontSize-0:0.833rem;--fontSize-1:1rem;--fontSize-2:1.2rem;--fontSize-3:1.44rem;--fontSize-4:1.728rem;--fontSize-5:2.074rem;--fontSize-6:2.488rem;--fontSize-7:2.986rem;--color-primary:#005b99;--color-text:#2e353f;--color-text-light:#4f5969;--color-heading:#1a202c;--color-heading-black:black;--color-accent:#d1dce5;--blue:#005b99;--white:#fff;}*,:after,:before{box-sizing:border-box;}html{line-height:var(--lineHeight-normal);font-size:var(--fontSize-root);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{font-family:var(--font-body);font-size:var(--fontSize-1);color:var(--color-text);}footer{padding:var(--spacing-6) var(--spacing-0);}hr{background:var(--color-accent);height:1px;border:0;}h1,h2,h3,h4,h5,h6{font-family:var(--font-heading);margin-top:var(--spacing-12);margin-bottom:var(--spacing-6);line-height:var(--lineHeight-tight);letter-spacing:-0.025em;}h2,h3,h4,h5,h6{font-weight:var(--fontWeight-bold);color:var(--color-heading);}h1{font-weight:var(--fontWeight-black);font-size:var(--fontSize-6);color:var(--color-heading-black);}h2{font-size:var(--fontSize-5);}h3{font-size:var(--fontSize-4);}h4{font-size:var(--fontSize-3);}h5{font-size:var(--fontSize-2);}h6{font-size:var(--fontSize-1);}h1 > a{color:inherit;text-decoration:none;}h2 > a,h3 > a,h4 > a,h5 > a,h6 > a{text-decoration:none;color:inherit;}p{line-height:var(--lineHeight-relaxed);--baseline-multiplier:0.179;--x-height-multiplier:0.35;margin:var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);padding:var(--spacing-0);}ul,ol{margin-left:var(--spacing-0);margin-right:var(--spacing-0);padding:var(--spacing-0);margin-bottom:var(--spacing-8);list-style-position:outside;list-style-image:none;}ul li,ol li{padding-left:var(--spacing-0);margin-bottom:calc(var(--spacing-8) / 2);}li > p{margin-bottom:calc(var(--spacing-8) / 2);}li *:last-child{margin-bottom:var(--spacing-0);}li > ul{margin-left:var(--spacing-8);margin-top:calc(var(--spacing-8) / 2);}blockquote{color:var(--color-text-light);margin-left:calc(-1 * var(--spacing-6));margin-right:var(--spacing-8);padding:var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);border-left:var(--spacing-1) solid var(--color-primary);font-size:var(--fontSize-2);font-style:italic;margin-bottom:var(--spacing-8);}blockquote >:last-child{margin-bottom:var(--spacing-0);}blockquote > ul,blockquote > ol{list-style-position:inside;}table{width:100%;margin-bottom:var(--spacing-8);border-collapse:collapse;border-spacing:0.25rem;}table thead tr th{border-bottom:1px solid var(--color-accent);}a{color:var(--color-primary);}a:hover,a:focus{text-decoration:none;}.global-wrapper{margin:var(--spacing-0) auto;max-width:var(--maxWidth-wrapper);padding:var(--spacing-10) var(--spacing-5);}.global-wrapper[data-is-root-path="true"] .bio{margin-bottom:var(--spacing-20);}.global-header{margin-bottom:var(--spacing-12);}.main-heading{font-size:var(--fontSize-7);margin:0;}.post-list-item{margin-bottom:var(--spacing-8);margin-top:var(--spacing-8);}.post-list-item p{margin-bottom:var(--spacing-0);}.post-list-item h2{font-size:var(--fontSize-4);color:var(--color-primary);margin-bottom:var(--spacing-2);margin-top:var(--spacing-0);}.post-list-item header{margin-bottom:var(--spacing-4);}.header-link-home{font-weight:var(--fontWeight-bold);font-family:var(--font-heading);text-decoration:none;font-size:var(--fontSize-2);}.bio{display:flex;margin-bottom:var(--spacing-4);}.bio p{margin-top:var(--spacing-3);margin-bottom:var(--spacing-0);}.bio-avatar{margin-right:var(--spacing-4);margin-bottom:var(--spacing-0);min-width:50px;border-radius:100%;}.blog-post header h1{margin:var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);}.blog-post header p{font-size:var(--fontSize-2);font-family:var(--font-heading);}.blog-post-nav ul{margin:var(--spacing-0);}.gatsby-highlight{margin-bottom:var(--spacing-8);}html{margin-left:calc(100vw - 100%);}body::-webkit-scrollbar{width:10px;}html{scrollbar-width:thin;scrollbar-color:var(--blue) var(--white);}body::-webkit-scrollbar-track{background:var(--white);}body::-webkit-scrollbar-thumb{background-color:var(--blue);border-radius:8px;border:3px solid var(--white);}@media (max-width:42rem){blockquote{padding:var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);margin-left:var(--spacing-0);}ul,ol{list-style-position:inside;}}']),u=function(e){var t=e.location,r=(e.title,e.children),i="/"===t.pathname;return n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement(s,null),n.createElement(l,null),n.createElement("header",{className:"global-header"},undefined),n.createElement("main",null,r),n.createElement(o,null))}},1633:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,o,i,a,c=r(7294),l=r(5697),s=r.n(l),u=r(4839),f=r.n(u),p=r(2993),d=r.n(p),m=r(6494),g=r.n(m),h="bodyAttributes",b="htmlAttributes",v="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(y).map((function(e){return y[e]})),"charset"),T="cssText",S="href",x="http-equiv",E="innerHTML",A="itemprop",C="name",k="property",O="rel",j="src",z="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",N="encodeSpecialCharacters",M="onChangeClientState",W="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[y.NOSCRIPT,y.SCRIPT,y.STYLE],R="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,y.TITLE),r=J(e,W);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,I);return t||n||void 0},V=function(e){return J(e,M)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===O&&"canonical"===e[r].toLowerCase()||l===O&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==E&&c!==T&&c!==A||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=g()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(y.BODY,n),le(y.HTML,o),ce(f,p);var d={baseTag:se(y.BASE,r),linkTags:se(y.LINK,i),metaTags:se(y.META,a),noscriptTags:se(y.NOSCRIPT,c),scriptTags:se(y.SCRIPT,s),styleTags:se(y.STYLE,u)},m={},g={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=d[e].oldTags)})),t&&t(),l(e,m,g)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(y.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(R),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(R):r.getAttribute(R)!==a.join(",")&&r.setAttribute(R,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(y.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(R,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[R]=!0,o=fe(r,n),[c.createElement(y.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[R]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===E||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===E||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(y.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(b,o,n),link:pe(y.LINK,i,n),meta:pe(y.META,a,n),noscript:pe(y.NOSCRIPT,c,n),script:pe(y.SCRIPT,l,n),style:pe(y.STYLE,s,n),title:pe(y.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:$([S,z],e),bodyAttributes:Z(h,e),defer:J(e,L),encode:J(e,N),htmlAttributes:Z(b,e),linkTags:Q(y.LINK,[O,S],e),metaTags:Q(y.META,[C,w,x,k,A],e),noscriptTags:Q(y.NOSCRIPT,[E],e),onChangeClientState:V(e),scriptTags:Q(y.SCRIPT,[j,E],e),styleTags:Q(y.STYLE,[T],e),title:G(e),titleAttributes:Z(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ge=(o=me,a=i=function(e){function t(){return B(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case y.TITLE:return D({},o,((t={})[n.type]=a,t.titleAttributes=D({},i),t));case y.BODY:return D({},o,{bodyAttributes:D({},i)});case y.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((r={})[n.type]=D({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind;var he=r(5444),be=function(e){var t,r,n,o=e.description,i=e.lang,a=e.meta,l=e.title,s=(0,he.useStaticQuery)("2841359383").site,u=o||s.siteMetadata.description,f=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ge,{htmlAttributes:{lang:i},title:l,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=s.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(a)})};be.defaultProps={lang:"en",meta:[],description:""};var ve=be}}]);
//# sourceMappingURL=commons-fd75135bf905ce339a6e.js.map