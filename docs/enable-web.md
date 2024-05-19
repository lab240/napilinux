---
sidebar_position: 2
---

# NapiConfig: первый запуск

NapiConfig доступен по адресу:

> https://ваш_ip

Броузер "ругнется" на неподписанный сертификат

![](img-first-start/urgent.jpg)

Нужно принять риск и войти

![](img-first-start/urgent2.jpg)

Логин\пароль: admin\admin

![](img-first-start/first-page.jpg)

## Включение службы NapiConfig 

В некоторых сборках, все дополнительные службы по умолчанию выключены.
Чтобы включить Веб-интерфейс управления системой, нужно зайти по SSH
и выполнить следующие команды

```bash

systemctl enable  gunicorn
reboot

```
:warning: Перезагрузка обязательна !

После этого можно заходить в NapiConfig по адресу


## Запуск служб

>По умолчанию службы telegraf, influx, mqtt, mbusd, grafana ВЫКЛЮЧЕНЫ. Это сделано, чтобы система была максимально не загружена по умолчанию под задачи.

Включите нужные службы из меню "Настройки\Общие"

![](img-first-start/services-default-state.jpg)

- Если Вы решили сделать modbus шлюз включите службу mbusd
- Если вы работаете с датчиками, включите telegraf и influx
- Если вы будете отображать данные через Grafana, включите службы telegraf, inflx, grafana (запускать grafana не рекомендуется на устройствах NAPI)

Запустим telegraf + influx

![](img-first-start/telegraf-influx-on.jpg)

## Активация датчика System

Работа с датчиками происходит в меню "Датчики\Управление"

![](img-first-start/sensors-managment1.jpg)


После включения служб telegraf + influx, можно активировать встроенный датчик System (Включить)

![](img-first-start/sensors-managment2.jpg)

### Встроенные графики

После активации датчика System в разделе "Графики\Системные" будут доступны данные по загрузке системы (с момента активации датчика System)

![](img-first-start/graf1.jpg)
