---
slug: napilinux-0.3.0
title: Обновление NapiLinux 0.3.0
authors: dmn
tags: [napiworld, napi, napilinux, bugfix]
---

## Обновление NapiLinux 0.3.0

>**[Скачать...](https://download.napilinux.ru/napilinux/)**

Вышел релиз napi-linux 0.3.0
Скачать: https://download.napilinux.ru/napilinux/0.3.0

## Что изменилось

Основные изменения:

- Добавлена поддержка графического стека: Wayland, OpenGL, Vulkan
- Добавлен новый графический компонент napi-cog
- Добавлены графические пакеты и утилиты (nnz-graphics, nnz-graphics-tools)
- Добавлен новый образ системы с графикой (режим киоск) (nnz-napi-image-graphics)
- Обновлён Linux kernel до версии 6.18 (linux-napi_6.18) для napi-2
- Обновлены драйверы и графические компоненты для платформ Rockchip (Mesa)
- Добавлены системные утилиты: devmem2, ethtool, fio, mdio-tools, phytool
- Улучшен процесс восстановления системы (recovery init: таймаут root device)
- Исправлены загрузочные параметры и адреса загрузки FIT-образа для napi-2
- Увеличена стабильность загрузки и обновлены компоненты u-boot
- Обновлён набор системных конфигураций Rockchip
- Обновлён терминальный и системный вывод (motd)
- **Скорость консоли переключена на 1500000**
- Изменён стандартный backend рендеринга WPE на wpebackend-fdo
