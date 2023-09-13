"use strict";(self.webpackChunknapilinux=self.webpackChunknapilinux||[]).push([[971],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:-1},o="Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",p={unversionedId:"index",id:"index",title:"Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",description:"\u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/en/docs/",draft:!1,editUrl:"https://github.com/lab240/napilinux/blob/main/docs/index.md",tags:[],version:"current",lastUpdatedBy:"dmnovikov",lastUpdatedAt:1694624447,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"tutorialSidebar",next:{title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",permalink:"/en/docs/arch"}},l={},c=[],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"},"Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./arch/"},"\u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./access/"},"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./struct/"},"\u0421\u043e\u0441\u0442\u0430\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./upgrade/"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b")),(0,a.kt)("admonition",{title:"NapiConfig",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u041c\u044b \u0434\u0435\u043b\u0430\u0435\u043c \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0438 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 NapiLinux: ",(0,a.kt)("a",{parentName:"p",href:"category/napiconfig"},(0,a.kt)("strong",{parentName:"a"},"NapiConfig")),"."),(0,a.kt)("p",{parentName:"admonition"},"\u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Napiconfig/net"},"\u0421\u0435\u0442\u044c")),(0,a.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u0447\u0438\u043a\u0430\u043c\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 Lora \u043c\u043e\u0434\u0435\u043c\u043e\u043c"),(0,a.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 LTE-\u043c\u043e\u0434\u0435\u043c\u043e\u043c, \u0441"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0431\u0440\u043e\u0441 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0441\u043a (\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a ) \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0435")),(0,a.kt)("p",{parentName:"admonition"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f !")))}s.isMDXComponent=!0}}]);