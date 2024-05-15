"use strict";(self.webpackChunknapilinux=self.webpackChunknapilinux||[]).push([[6540],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:1},l="\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",o={unversionedId:"arch",id:"arch",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",description:"NapiLinux \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f embedded \u0441\u0438\u0441\u0442\u0435\u043c \u0438 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u043f\u0434\u0435\u0439\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043e\u0442\u043a\u0430\u0442\u043e\u0432. \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e NapiLinux \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u043e\u0432 (Debian, Ubuntu, DietPi) -\u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.",source:"@site/docs/arch.md",sourceDirName:".",slug:"/arch",permalink:"/en/docs/arch",draft:!1,editUrl:"https://github.com/lab240/napilinux/blob/main/docs/arch.md",tags:[],version:"current",lastUpdatedBy:"dmnovikov",lastUpdatedAt:1715779827,formattedLastUpdatedAt:"May 15, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",permalink:"/en/docs/"},next:{title:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435",permalink:"/en/docs/access"}},p={},c=[],u={toc:c},d="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"},"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"),(0,a.kt)("p",null,"NapiLinux \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f embedded \u0441\u0438\u0441\u0442\u0435\u043c \u0438 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u043f\u0434\u0435\u0439\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043e\u0442\u043a\u0430\u0442\u043e\u0432. \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e NapiLinux \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u043e\u0432 (Debian, Ubuntu, DietPi) -\u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NapiLinux",src:n(9807).Z,width:"234",height:"316"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"partition"),(0,a.kt)("th",{parentName:"tr",align:null},"size"),(0,a.kt)("th",{parentName:"tr",align:null},"ro\\rw"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/dev/mmcblk1p1"),(0,a.kt)("td",{parentName:"tr",align:null},"1.5G Linux filesystem"),(0,a.kt)("td",{parentName:"tr",align:null},"ro")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/dev/mmcblk1p2"),(0,a.kt)("td",{parentName:"tr",align:null},"1.5G Linux filesystem"),(0,a.kt)("td",{parentName:"tr",align:null},"not mounted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/dev/mmcblk1p3"),(0,a.kt)("td",{parentName:"tr",align:null},"1G  Linux filesystem"),(0,a.kt)("td",{parentName:"tr",align:null},"rw")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NapiLinux",src:n(8895).Z,width:"550",height:"197"})),(0,a.kt)("p",null,'\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 1 (/dev/mmcblk1p1) \u0442\u0430\u043a \u0438 \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 2 (/dev/mmcblk1p2). \u041f\u0440\u0438 \u0430\u043f\u0434\u0435\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 (\u0431\u043e\u043b\u0435\u0435 "\u0441\u0442\u0430\u0440\u044b\u0439"). \u0415\u0441\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430. \u0420\u0430\u0437\u0434\u0435\u043b 3 (/dev/mmcblk1p3) \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0438, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0444\u0430\u0439\u043b\u044b, \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. \u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u043a\u0430\u043f, \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u043a\u0430\u043f \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430. \u0427\u0442\u043e\u0431\u044b "\u043e\u0431\u043d\u0443\u043b\u0438\u0442\u044c" \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0442\u0435\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430.'))}s.isMDXComponent=!0},8895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/p2-d53fcab31d42ec8b8ee998c4c4049f99.jpg"},9807:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/schm1-6af50a19cf2efafeb4ef8b78a8101bed.png"}}]);