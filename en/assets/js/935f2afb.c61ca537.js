"use strict";(self.webpackChunknapilinux=self.webpackChunknapilinux||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"v0.1.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f","href":"/en/docs/","docId":"index"},{"type":"link","label":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","href":"/en/docs/arch","docId":"arch"},{"type":"link","label":"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435","href":"/en/docs/access","docId":"access"},{"type":"link","label":"\u0421\u043e\u0441\u0442\u0430\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b","href":"/en/docs/struct","docId":"struct"},{"type":"category","label":"NapiConfig","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433","href":"/en/docs/Napiconfig/system","docId":"Napiconfig/system"},{"type":"link","label":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438","href":"/en/docs/Napiconfig/net","docId":"Napiconfig/net"},{"type":"link","label":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0432\u0435\u0440\u043b\u0435\u044f\u043c\u0438","href":"/en/docs/Napiconfig/overlay","docId":"Napiconfig/overlay"}],"href":"/en/docs/category/napiconfig"},{"type":"link","label":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 NapiLinux","href":"/en/docs/upgrade","docId":"upgrade"},{"type":"link","label":"\u0421\u043e\u0431\u0435\u0440\u0438 \u0441\u0430\u043c (\u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0441\u0431\u043e\u0440\u043e\u043a)","href":"/en/docs/biuld-base","docId":"biuld-base"}]},"docs":{"access":{"id":"access","title":"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435","description":"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0432\u0435\u0436\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0441\u0435\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u043f\u043e IP (\u0441\u043c \u0434\u043e\u0441\u0442\u0443\u043f \u0447\u0435\u0440\u0435\u0437 Ethernet). \u0414\u0440\u0443\u0433\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439","sidebar":"tutorialSidebar"},"arch":{"id":"arch","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","description":"NapiLinux \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f embedded \u0441\u0438\u0441\u0442\u0435\u043c \u0438 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u043f\u0434\u0435\u0439\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043e\u0442\u043a\u0430\u0442\u043e\u0432. \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e NapiLinux \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u043e\u0432 (Debian, Ubuntu, DietPi) -\u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.","sidebar":"tutorialSidebar"},"biuld-base":{"id":"biuld-base","title":"\u0421\u043e\u0431\u0435\u0440\u0438 \u0441\u0430\u043c (\u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0441\u0431\u043e\u0440\u043e\u043a)","description":"\u0417\u0434\u0435\u0441\u044c \u043c\u044b \u043e\u043f\u0438\u0448\u0435\u043c \u043a\u0430\u043a \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0437 NapiLinux","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Napi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f","description":"\u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","sidebar":"tutorialSidebar"},"Napiconfig/net":{"id":"Napiconfig/net","title":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438","description":"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b systemd","sidebar":"tutorialSidebar"},"Napiconfig/overlay":{"id":"Napiconfig/overlay","title":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0432\u0435\u0440\u043b\u0435\u044f\u043c\u0438","description":"\u0422\u0430\u043a \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c NapiLinux \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b, \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b NapiConfig \u0434\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0431\u043e\u0440\u043a\u0438 \u0438\u043c\u0438\u0434\u0436\u0430.","sidebar":"tutorialSidebar"},"Napiconfig/system":{"id":"Napiconfig/system","title":"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433","description":"\u0412\u0445\u043e\u0434 \u0432 \u043c\u0435\u043d\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438","sidebar":"tutorialSidebar"},"struct":{"id":"struct","title":"\u0421\u043e\u0441\u0442\u0430\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b","description":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043c\u0435\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0438 \u0440\u0435\u0446\u0435\u043f\u0442\u044b","sidebar":"tutorialSidebar"},"upgrade":{"id":"upgrade","title":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 NapiLinux","description":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0438 \u0431\u0435\u0437","sidebar":"tutorialSidebar"}}}')}}]);