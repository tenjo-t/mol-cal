(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8259:function(e,t,r){"use strict";r.d(t,{H:function(){return u}});var n=r(6265),a=r(7294),o=r(5893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return Math.round(e*Math.pow(10,6))/Math.pow(10,6)},u=function(e){var t=e.data,r=(0,a.useState)(1),n=r[0],c=r[1];return(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"border-b-2 border-t border-gray-800",children:[(0,o.jsx)("th",{className:"px-4 py-1",children:"Symbol"}),(0,o.jsx)("th",{className:"px-4 py-1 ",children:"rate"}),(0,o.jsx)("th",{className:"px-4 py-1",children:"g/mol"}),(0,o.jsx)("th",{className:"px-4 py-1",children:"g"}),(0,o.jsx)("th",{className:"px-4 py-1",children:"Recal"})]})}),(0,o.jsxs)("tbody",{children:[t.atoms.map((function(e){return(0,a.createElement)(l,i(i({data:e},{p:n,setP:c}),{},{key:e.symbol}))})),(0,o.jsxs)("tr",{className:"border-t border-gray-800",children:[(0,o.jsx)("td",{className:"px-4 py-1",colSpan:2,children:"\xa0"}),(0,o.jsx)("td",{className:"px-4 py-1 text-right",children:s(t.tot.gMol)}),(0,o.jsx)("td",{className:"px-4 py-1 text-right",children:s(t.tot.g)}),(0,o.jsx)("th",{className:"px-8 py-1 text-right",children:s(t.tot.g*n)})]})]})]})},l=function(e){var t=e.data,r=e.p,n=e.setP,a=t.symbol,c=t.rate,i=t.gMol,u=t.g;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"px-4 py-1 text-center",children:a}),(0,o.jsx)("td",{className:"px-4 py-1 text-right",children:c}),(0,o.jsx)("td",{className:"px-4 py-1 text-right",children:s(i)}),(0,o.jsx)("td",{className:"px-4 py-1 text-right",children:s(u)}),(0,o.jsx)("th",{className:"px-2 py-1",children:(0,o.jsx)("input",{className:"w-24 px-2 bg-transparent text-right focus:bg-gray-50",type:"number",value:s(r*u),onChange:function(e){n(parseFloat(e.target.value)/u)}})})]},a)}},4332:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var n=r(5893),a=function(e){var t=e.value,r=e.onChange,a=e.type,o=void 0===a?"text":a,c=e.children;return(0,n.jsxs)("label",{className:"block",children:[c,(0,n.jsx)("input",{value:t,onChange:r,type:o,className:"px-4 py-1 ml-4 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-400"})]})}},8532:function(e,t,r){"use strict";r.d(t,{h:function(){return d}});var n=r(6265);var a=r(9391),o=r(355);function c(e){return function(e){if(Array.isArray(e))return e}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i={Yb:173.04,In:114.818,Cu:63.546,Ce:140.116,Y:88.90585,La:138.9055,Ag:107.8682,Au:196.9665,Ga:69.723,Ge:72.61,O:15.9994,S:32.066,Al:26.98153,Si:28.0855,Lu:174.967,Na:22.98977,K:39.0983,Ti:47.867,V:50.9415,Cr:51.9961,Mn:54.93804,Fe:55.845,Co:58.9332,Ni:58.6934,Zn:65.39,Zr:91.224,Nb:92.90638,Mo:95.94,Ru:101.07,Rh:102.9055,Pd:106.42,Cd:112.411,Mg:24.305,Ca:40.078,Sc:44.95591,Cl:35.4527,Br:79.904,I:126.9044,Sn:118.71,Pb:207.2,Bi:208.9803,H:1.00794,Li:6.941,Rb:85.4678,Sr:87.62,Cs:132.9054,Ba:137.327,Pr:140.9076,Nd:144.24,Sm:150.36,Eu:151.964,Gd:157.25,Tb:158.9253,Dy:162.5,Ho:164.9303,Er:167.26,Tm:168.9342,P:30.97376,As:74.9216,Se:78.96,Sb:121.76,Te:127.6,Hf:178.49,Ta:180.9479,W:183.84,Re:186.207,Os:190.23,Ir:192.217,Pt:195.078,Hg:200.59,Tl:204.3833,C:12.0107,B:10.811,Be:9.012182,N:14.00674,F:18.9984,Th:232.0381,Pa:231.0358,U:238.0289,He:4.002602,Ne:20.1797,Ar:39.948,Kr:83.8,Xe:131.29};function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e){var t=/\((.+)\)(\d+\.?\d*)/g,r={};function n(e,t){e in r?r[e]+=t:r[e]=t}var a,o=e.replaceAll(t,""),i=s(e.matchAll(t));try{for(i.s();!(a=i.n()).done;){var u=c(a.value),f=u[0],d=u[1],p=(u.slice(2),l(f));for(var h in p)n(h,p[h]*parseFloat(d))}}catch(x){i.e(x)}finally{i.f()}var y,v=s(o.matchAll(/([A-Z][a-z]?)(\d*\.?\d*)/g));try{for(v.s();!(y=v.n()).done;){var b=c(y.value),m=(b[0],b[1]),g=b[2];b.slice(3);n(m,""==g?1:parseFloat(g))}}catch(x){v.e(x)}finally{v.f()}return r}function f(e){var t=0;for(var r in e)t+=i[r]*e[r];return t}var d=function(e,t){var r=[],a=l(e),o=f(a);for(var c in a){var i=a[c],s=f((0,n.Z)({},c,i));r.push({symbol:c,rate:i,gMol:s,g:s/o*t})}var u=r.reduce((function(e,t){return e+t.g}),0);return{formula:e,atoms:r,tot:{gMol:o,g:u}}}},2167:function(e,t,r){"use strict";var n=r(3848),a=r(9448);t.default=void 0;var o=a(r(7294)),c=r(9414),i=r(4651),s=r(7426),u={};function l(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=(0,i.useRouter)(),f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],i=r[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,y=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(t=o.Children.only(h))&&"object"===typeof t&&t.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),j=n(x,2),N=j[0],w=j[1],O=o.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,o.useEffect)((function(){var e=w&&r&&(0,c.isLocalURL)(d),t="undefined"!==typeof m?m:a&&a.locale,n=u[d+"%"+p+(t?"%"+t:"")];e&&!n&&l(a,d,p,{locale:t})}),[p,d,w,m,r,a]);var S={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:i}))}(e,a,d,p,y,v,b,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof m?m:a&&a.locale,A=a&&a.isLocaleDomain&&(0,c.getDomainLocale)(p,C,a&&a.locales,a&&a.domainLocales);S.href=A||(0,c.addBasePath)((0,c.addLocale)(p,C,a&&a.defaultLocale))}return o.default.cloneElement(t,S)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=n(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r(7294),o=r(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},2562:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(7294),o=r(1664),c=r(4332),i=r(8259),s=r(8532);t.default=function(){var e=(0,a.useState)("Ag50Ga34Yb16"),t=e[0],r=e[1],u=(0,a.useState)(1),l=u[0],f=u[1],d=(0,s.h)(t,l);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"py-2",children:(0,n.jsx)(c.f,{value:t,onChange:function(e){return r(e.target.value)},children:"\u5206\u5b50\u5f0f"})}),(0,n.jsx)("div",{className:"py-2",children:(0,n.jsx)(c.f,{value:l,onChange:function(e){return f(parseFloat(e.target.value))},type:"number",children:"\u5408\u8a08\u91cf\uff08g\uff09"})}),(0,n.jsx)("div",{className:"py-4",children:(0,n.jsx)(i.H,{data:d})}),(0,n.jsx)("div",{className:"pt-16",children:(0,n.jsx)(o.default,{href:"/quasicrystal",children:(0,n.jsx)("a",{className:"text-underline",children:"\u6e96\u7d50\u6676"})})})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])},1664:function(e,t,r){e.exports=r(2167)},5093:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},9391:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,{Z:function(){return n}})},355:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5093);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);