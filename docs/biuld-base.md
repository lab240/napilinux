---
sidebar_position: 8
---
# Собери сам (примеры сборок)

Здесь мы опишем, как самостоятельно собрать образ NapiLinux с использованием OpenEmbedded/Yocto Project.

:::info

Доступные варианты сборки:
- **Базовый образ (nnz-napi-image)** — минимальная система
- **Frontcontrol (nnz-frontcontrol-image)** — система сбора данных с визуализацией, включает influxdb2, telegraf, grafana, flask
- **Dev-версии** — образы для разработки с дополнительными инструментами

:::

:::tip

**Требования к хост-системе:**

Сборку рекомендуется вести на Linux-хосте (например, Ubuntu 22.04 или новее).
Должны быть установлены пакеты, необходимые для сборки Yocto Project.

Для Ubuntu/Debian:
```bash 
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
build-essential chrpath socat libsdl1.2-dev
```
Для других систем смотрите документацию: https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html

:::

:boom: **Нужно выделить не менее 80Гб свободного места на диске.**

### ШАГ 1. Скачиваем исходники

Создаём рабочий каталог и клонируем необходимые репозитории:

```bash
~ $ mkdir yocto
~ $ cd yocto
~/yocto $ git clone --depth 1 git://git.yoctoproject.org/poky -b scarthgap
~/yocto $ cd poky
~/yocto/poky $ git clone --depth 1 git://git.openembedded.org/meta-openembedded.git -b scarthgap
~/yocto/poky $ git clone --depth 1 git://git.yoctoproject.org/meta-arm.git -b scarthgap
~/yocto/poky $ git clone --depth 1 https://gitlab.nnz-ipc.net/pub/napilinux/meta-influx.git -b scarthgap
~/yocto/poky $ git clone --depth 1 https://gitlab.nnz-ipc.net/pub/napilinux/meta-nnz.git -b scarthgap
~/yocto/poky $ git clone --depth 1 https://github.com/sbabic/meta-swupdate -b scarthgap
```

:::info

**Дополнительные слои (опционально):**

Для поддержки Raspberry Pi:
```bash
~/yocto/poky $ git clone git://git.yoctoproject.org/meta-raspberrypi -b scarthgap
```

Для поддержки Intel x86:
```bash
~/yocto/poky $ git clone git://git.yoctoproject.org/meta-intel -b scarthgap
```

:::

:::tip

Все репозитории теперь используют ветку **scarthgap** — актуальную стабильную версию Yocto Project.

:::

### ШАГ 2. Настраиваем окружение

Инициализируем окружение сборки:

```bash
~/yocto/poky $ source oe-init-build-env
```

### ШАГ 3. Настраиваем bblayers.conf

Выберите нужный файл конфигурации слоёв в зависимости от целевой платформы:

**Для базового образа NapiLinux:**
```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/bblayers.conf.sample.napi conf/bblayers.conf
```

**Для образа Frontcontrol:**
```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/bblayers.conf.sample.fc conf/bblayers.conf
```

**Для Raspberry Pi:**
```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/bblayers.conf.sample.rpi conf/bblayers.conf
```

**Для Intel x86:**
```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/bblayers.conf.sample.x86 conf/bblayers.conf
```

### ШАГ 4. Настраиваем local.conf

Копируем и настраиваем файл локальной конфигурации:

```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/local.conf.sample conf/local.conf
```

:::tip

В файле `conf/local.conf` раскомментируйте строку с нужной машиной (`MACHINE`), для которой хотите собрать образ.

:::

### ШАГ 5. Сборка образа

Выберите и соберите нужный образ:

**Доступные цели сборки:**

```bash
# Базовый образ
~/yocto/poky/build $ bitbake -k nnz-napi-image

# Frontcontrol с системой мониторинга  
~/yocto/poky/build $ bitbake -k nnz-frontcontrol-image

# Версия для разработки
~/yocto/poky/build $ bitbake -k nnz-napi-image-dev

# Версия для разработки без автообновлений (для Raspberry Pi/x86)
~/yocto/poky/build $ bitbake -k nnz-napi-image-dev-noupdate
```

:::info

**Поддерживаемые устройства:**
- `napi-rk3308` — основная платформа NapiLinux
- `napi-rk3308b-s` — модификация с дополнительными возможностями  
- `roc-pc-rk3328` — мини-ПК на базе RK3328
- `rockpro64-rk3399` — мощная плата на RK3399
- `repka-pi4-optimal` — оптимизированная версия для Raspberry Pi 4

:::

:::info

**Результаты сборки:**

После удачной сборки образы находятся в каталоге `build/tmp/deploy/images/[имя_машины]/`:
- Для napi-rk3308: `nnz-napi-image-napi-rk3308-gpt.img`
- Для frontcontrol: `nnz-frontcontrol-image-napi-rk3308-gpt.img`

:::

:boom: **Запаситесь терпением — компиляция длится 4-8 часов в зависимости от производительности системы!**

## Установка и доступ к системе

Записывайте образ на SD-карту или устанавливайте через [систему обновлений](./upgrade/) (если NapiLinux уже установлена).

**Данные для входа в систему:**
- Логин: `root`  
- Пароль: `napilinux`

**Последовательная консоль:** доступна на UART-0

Подробнее о доступе к системе читайте в [соответствующем разделе](./access/)
