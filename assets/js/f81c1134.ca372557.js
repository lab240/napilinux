"use strict";(self.webpackChunknapilinux=self.webpackChunknapilinux||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"napilinux-0.1.19","metadata":{"permalink":"/blog/napilinux-0.1.19","editUrl":"https://github.com/lab240/napilinux/blob/main/blog/2024-05-150-newrelease/index.md","source":"@site/blog/2024-05-150-newrelease/index.md","title":"\u041d\u043e\u0432\u044b\u0439 \u0440\u0435\u043b\u0438\u0437 0.1.19 NapiLinux \u0438 NapiConfig","description":"\u0427\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0432 \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0435 0.1.19","date":"2024-05-15T00:00:00.000Z","tags":[{"inline":true,"label":"napiworld","permalink":"/blog/tags/napiworld"},{"inline":true,"label":"napi","permalink":"/blog/tags/napi"},{"inline":true,"label":"napilinux","permalink":"/blog/tags/napilinux"}],"readingTime":1.69,"hasTruncateMarker":false,"authors":[{"name":"dmn","title":"lab240 maintainer","url":"https://github.com/dmnovikov","imageURL":"https://avatars.githubusercontent.com/u/17533288?v=4","key":"dmn"}],"frontMatter":{"slug":"napilinux-0.1.19","title":"\u041d\u043e\u0432\u044b\u0439 \u0440\u0435\u043b\u0438\u0437 0.1.19 NapiLinux \u0438 NapiConfig","authors":"dmn","tags":["napiworld","napi","napilinux"]},"unlisted":false},"content":"## \u0427\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0432 \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0435 0.1.19\\n\\n### \u0421\u043e\u0441\u0442\u0430\u0432 Linux\\n\\n- mbusd \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d \u0434\u043e 0.5.2\\n- \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0443\u0442\u0438\u043b\u0438\u0442\u0430 mbpoll (\u043e\u043f\u0440\u043e\u0441 \u043f\u043e modbus tcp\\\\rtu), modpoll \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442\\n- \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0443\u0442\u0438\u043b\u0438\u0442\u0430 htop\\n- \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 snmp (snmp-tools) \u0438 mibs\\n\\n### NapiConfig\\n\\n- \u041d\u043e\u0432\u0430\u044f \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\\n\\n![](img/fp.jpg)\\n\\n- \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0447\u0438\u0432\u0430\u0442\u044c MIB-\u0444\u0430\u0439\u043b\u044b \u0434\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u043e\u043f\u0440\u043e\u0441\u0430 \u043f\u043e SNMP \u0447\u0435\u0440\u0435\u0437 Telegraf\\n\\n>\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u043d\u044e\\n\\n![](img/snmp-1.jpg)\\n\\n>\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c MIB-\u044b (\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0443\u0436\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b). \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e MIB-\u0444\u0430\u0439\u043b\u043e\u0432\\n\\n![](img/snmp-2.jpg)\\n\\n>\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0439 MIB \u043c\u043e\u0436\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c\\n\\n![](img/snmp-3.jpg)\\n\\n- \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438 Linux (telegraf, mbusd, influx, mosquitto)\\n\\n![](img/services.jpg)\\n\\n- \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432 \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430\u043c\\n  - Modbus RTU\\n  - Modbus TCP\\n  - SNMP \\n\\n![](img/sensors.jpg)\\n\\n- \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \\"\u0434\u0430\u0442\u0447\u0438\u043a\\" \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 (\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430, \u0434\u0438\u0441\u043a\u0430, \u043f\u0430\u043c\u044f\u0442\u0438). \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445 telegraf, influx\\n\\n- \u042d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445 telegraf, influx\\n\\n![](img/graph.jpg)\\n\\n- \u041f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0430 \\"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\\", \u0441 \u043a\u0440\u0430\u0442\u043a\u043e\u0439 \u0441\u043f\u0440\u0430\u0432\u043a\u043e\u0439\\n\\n![](img/info.jpg)\\n\\n- \u041f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c\u0443 \u0448\u043b\u044e\u0437\u0443 Modbus RTU-TCP. \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443. \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u0447\u0442\u043e \u0441\u0435\u0440\u0432\u0438\u0441 mbusd \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442 RS485 \u043f\u043e\u0440\u0442, \u0443\u0442\u0438\u043b\u0438\u0442\u044b modpoll\\\\mbpoll \u0438 telegraf \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 modbus rtu \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0443\u0442. \\n\\n![](img/mbusd.jpg)\\n\\n## \u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b\\n\\n- \u0410\u043f\u0434\u0435\u0439\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0438\u0437 \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f swupdate \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0431 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443: http://IP:8082\\n- \u041f\u043e\u0441\u043b\u0435 \u0410\u043f\u0434\u0435\u0439\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 swupdate \u043d\u0430\u0434\u043e \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u0447\u0435\u0440\u0435\u0437 ssh \u0438\u043b\u0438 \u0412\u0435\u0431) \\n- \u0411\u0435\u0437 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0441\u043b\u0443\u0436\u0431 telegraf\\\\influx \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f (\u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u0441\u043a\u0430\u043a\u0438\u0432\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438)\\n- \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u0434\u0430\u0442\u0447\u0438\u043a\u0430, \u0435\u0433\u043e \u043d\u0430\u0434\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0435\u0441\u043b\u0438 \u0444\u0430\u0439\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439, \u0442\u043e telegraf \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f. \u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0435 telegraf \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 (\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0435\u0433\u043e \u0441\u043b\u0443\u0436\u0431\u0430).\\n- \u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b telegraf (\u0438\u0434\u0443\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u043d\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0434\u0443\u0442), \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439, \u0441\u043a\u043e\u0440\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0412\u0435\u0431\\n\\n## \u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b Telegraf\\n\\n\u0412 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0430\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u0433\u0430\u0441\u0438\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443 telegraf \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e.\\n\\n```\\nroot@napi-rk3328:~# telegraf --test -config /etc/telegraf/telegraf.conf --config-directory /data/active/\\n\\n```\\n\u0422\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u043b\u0430\u0436\u043e\u043a ```--debug``\\n\\n\u0423\u0437\u043d\u0430\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0430\u0441\u044c \u043b\u0438 \u0441\u043b\u0443\u0436\u0431\u0430 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439\\n\\n```\\nsystemctl status telegraf\\n```\\n\\n\u0418\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (\u0437\u0435\u043b\u0435\u043d\u0430\u044f (Active) \\\\ \u043a\u0440\u0430\u0441\u043d\u0430\u044f(Inactive)), \u043d\u043e \u043d\u0430\u0434\u043e \u0442\u0430\u043a\u0436\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0447\u0442\u043e \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u043e\u0439."}]}}')}}]);