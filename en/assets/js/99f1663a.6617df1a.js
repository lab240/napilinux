"use strict";(self.webpackChunknapilinux=self.webpackChunknapilinux||[]).push([[6540],{4137:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(a),c=r,b=u["".concat(o,".").concat(c)]||u[c]||k[c]||l;return a?n.createElement(b,i(i({ref:e},d),{},{components:a})):n.createElement(b,i({ref:e},d))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1451:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:1},i="\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u0441\u043e\u0441\u0442\u0430\u0432",p={unversionedId:"arch",id:"arch",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u0441\u043e\u0441\u0442\u0430\u0432",description:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432",source:"@site/docs/arch.md",sourceDirName:".",slug:"/arch",permalink:"/en/docs/arch",draft:!1,editUrl:"https://github.com/lab240/napilinux/blob/main/docs/arch.md",tags:[],version:"current",lastUpdatedBy:"IgorKha",lastUpdatedAt:1722694479,formattedLastUpdatedAt:"Aug 3, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",permalink:"/en/docs/"},next:{title:"NapiConfig: \u043f\u0435\u0440\u0432\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a",permalink:"/en/docs/enable-web"}},o={},m=[{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432",level:2},{value:"\u0421\u043e\u0441\u0442\u0430\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",id:"\u0441\u043e\u0441\u0442\u0430\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u044b",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",level:3},{value:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0441\u0431\u043e\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-\u0441\u0431\u043e\u0440\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",level:3}],d={toc:m},u="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430-\u0438-\u0441\u043e\u0441\u0442\u0430\u0432"},"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u0441\u043e\u0441\u0442\u0430\u0432"),(0,r.kt)("h2",{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432"),(0,r.kt)("p",null,"NapiLinux \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f embedded \u0441\u0438\u0441\u0442\u0435\u043c \u0438 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u043f\u0434\u0435\u0439\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043e\u0442\u043a\u0430\u0442\u043e\u0432. \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e NapiLinux \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u043e\u0432 (Debian, Ubuntu, DietPi) -\u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NapiLinux",src:a(9807).Z,width:"234",height:"316"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"partition"),(0,r.kt)("th",{parentName:"tr",align:null},"size"),(0,r.kt)("th",{parentName:"tr",align:null},"ro\\rw"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/dev/mmcblk1p1"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5G Linux filesystem"),(0,r.kt)("td",{parentName:"tr",align:null},"ro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/dev/mmcblk1p2"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5G Linux filesystem"),(0,r.kt)("td",{parentName:"tr",align:null},"not mounted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/dev/mmcblk1p3"),(0,r.kt)("td",{parentName:"tr",align:null},"1G  Linux filesystem"),(0,r.kt)("td",{parentName:"tr",align:null},"rw")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NapiLinux",src:a(8895).Z,width:"550",height:"197"})),(0,r.kt)("p",null,'\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 1 (/dev/mmcblk1p1) \u0442\u0430\u043a \u0438 \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 2 (/dev/mmcblk1p2). \u041f\u0440\u0438 \u0430\u043f\u0434\u0435\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 (\u0431\u043e\u043b\u0435\u0435 "\u0441\u0442\u0430\u0440\u044b\u0439"). \u0415\u0441\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430. \u0420\u0430\u0437\u0434\u0435\u043b 3 (/dev/mmcblk1p3) \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0438, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0444\u0430\u0439\u043b\u044b, \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. \u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u043a\u0430\u043f, \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u043a\u0430\u043f \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430. \u0427\u0442\u043e\u0431\u044b "\u043e\u0431\u043d\u0443\u043b\u0438\u0442\u044c" \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0442\u0435\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430. '),(0,r.kt)("h2",{id:"\u0441\u043e\u0441\u0442\u0430\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u044b"},"\u0421\u043e\u0441\u0442\u0430\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),(0,r.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043c\u0435\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0438 \u0440\u0435\u0446\u0435\u043f\u0442\u044b\n\u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043e\u043c."),(0,r.kt)("h3",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0412 \u0441\u0432\u0435\u0436\u0438\u0445 \u0441\u0431\u043e\u0440\u043a\u0430\u0445 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u0432\u0435\u0436\u0438\u0435. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0432\u0435\u0440\u0441\u0438\u044f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kernel"),(0,r.kt)("td",{parentName:"tr",align:null},"6.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uboot"),(0,r.kt)("td",{parentName:"tr",align:null},"2023.04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"swupdate"),(0,r.kt)("td",{parentName:"tr",align:null},"2023.05")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"busybox"),(0,r.kt)("td",{parentName:"tr",align:null},"1.35")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modemmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"1.18.8-r0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modpoll"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0-r1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minicom"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8-r0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i2c-tools"),(0,r.kt)("td",{parentName:"tr",align:null},"4.3-r0")))),(0,r.kt)("p",null,"\ud83d\udca5 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430: bash"),(0,r.kt)("h3",{id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-\u0441\u0431\u043e\u0440\u0430-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0441\u0431\u043e\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0412 \u0441\u0432\u0435\u0436\u0438\u0445 \u0441\u0431\u043e\u0440\u043a\u0430\u0445 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u0432\u0435\u0436\u0438\u0435. ")),(0,r.kt)("p",null,"\u0421\u043e\u0441\u0442\u0430\u0432 \u043e\u043f\u0440\u043e\u0441\u0430 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b\n\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0432\u0435\u0440\u0441\u0438\u044f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python3"),(0,r.kt)("td",{parentName:"tr",align:null},"3.10.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python3-flask"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telegraf"),(0,r.kt)("td",{parentName:"tr",align:null},"1.24.2-r1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modpoll"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbpoll"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modemmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"1.18.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mosquitto"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"9.3.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"influxdb2"),(0,r.kt)("td",{parentName:"tr",align:null},"2.6.1-r1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbusd"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5.2")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f "\u0442\u044f\u0436\u0435\u043b\u044b\u0435" \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a telegraf, grafana, influxdb. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u0438 \u0441\u043b\u0443\u0436\u0431\u044b \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u044b.  \u0421\u043b\u0443\u0436\u0431\u0443 grafana \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430\u0445 rk3308.')))}k.isMDXComponent=!0},8895:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/p2-d53fcab31d42ec8b8ee998c4c4049f99.jpg"},9807:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/schm1-6af50a19cf2efafeb4ef8b78a8101bed.png"}}]);