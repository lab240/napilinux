---
sidebar_position: 7
---
# Собери сам (примеры сборок)

>Статья не закончена

Здесь мы опишем как самостоятельно собрать образ NapiLinux
в базовом варианте и в варианте Frontcontrol.

:::info

Frontcontrol система сбора данных с визуализацией, включает такие пакеты 
как influxdb2, telegraf, grafana, flack. 
В базовой сборке этих пакетов нет.
:::

:::tip 

Сборку будем вести на Linux хосте (например на свежей ubuntu 22.04).
Должны быть остановлены пакеты, необходимые для сборки.

Для Ubuntu
```bash 
     $ sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat libsdl1.2-dev
```
Для других систем можно посмотреть по ссылке https://docs.yoctoproject.org/1.8/yocto-project-qs/yocto-project-qs.html

:::

:boom: **Нужно выделить не менее 80Гб на диске.**

### ШАГ 1: Скачиваем исходники

Получаем данные с git

Для базового состава

```bash
~ $ mkdir yocto
~ $ cd yocto
~/yocto $ git clone --depth 1 git://git.yoctoproject.org/poky -b kirkstone
~/yocto $ cd poky
~/yocto/poky $ git clone --depth 1 git://git.openembedded.org/meta-openembedded.git -b kirkstone
~/yocto.poky $ git clone --depth 1 ssh://git@gitlab.nnz-ipc.net:2222/iot/loracross/meta-nnz.git -b kirkstone
~/yocto.poky $ git clone --depth 1 ssh://git@gitlab.nnz-ipc.net:2222/iot/loracross/meta-readonly-rootfs-overlay.git -b kirkstone
~/yocto.poky $ git clone --depth 1 https://github.com/sbabic/meta-swupdate -b kirkstone
```

Для состава Frontcontrol

```bash
~ $ mkdir yocto
~ $ cd yocto
~/yocto $ git clone --depth 1 git://git.yoctoproject.org/poky -b kirkstone
~/yocto $ cd poky
~/yocto/poky $ git clone --depth 1 git://git.openembedded.org/meta-openembedded.git -b kirkstone
~/yocto.poky $ git clone --depth 1 ssh://git@gitlab.nnz-ipc.net:2222/iot/loracross/meta-influx.git -b kirkstone
~/yocto.poky $ git clone --depth 1 ssh://git@gitlab.nnz-ipc.net:2222/iot/loracross/meta-nnz.git -b kirkstone
~/yocto.poky $ git clone --depth 1 ssh://git@gitlab.nnz-ipc.net:2222/iot/loracross/meta-readonly-rootfs-overlay.git -b kirkstone
~/yocto.poky $ git clone --depth 1 https://github.com/sbabic/meta-swupdate -b kirkstone
```

### Шаг2. Настраиваем окружение.

```bash
~/yocto/poky $ source oe-init-build-env
```

### Шаг3. Настраиваем  bblayers.conf.

Для базового состава

```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/bblayers.conf.sample.napi conf/bblayers.conf
```

Для состава Frontcontrol

```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/bblayers.conf.sample.fc conf/bblayers.conf
```

### Шаг4. Настраиваем local.conf

Для базового и Frontcontrol состава

```bash
~/yocto/poky/build $ cp ../meta-nnz/conf/local.conf.sample conf/local.conf
```

### Шаг5. Сборка образа.

Для базового состава

```bash
~/yocto/poky/build $ bitbake -k nnz-napi-image
```

:::info

После удачной сборки ищите файл `nnz-napi-image-napi-rk3308-gpt.img ` в каталоге `build/tmp/deploy/images/napi-rk3308/`.

:::


Для состава Frontcontrol

```bash
~/yocto/poky/build $ bitbake -k nnz-frontcontrol-image
```

:::info

После удачной сборки ищите файл `nnz-frontcontrol-image-napi-rk3308-gpt.img` в каталоге `build/tmp/deploy/images/napi-rk3308/`.

:::

:boom: Запаситесь кофе и печеньем, компиляция длится около 6 часов !

Заливайте прошивку напрямую или через [update](./upgrade/) (если NapiLinux уже стоит). 

Про доступ к системе можно почитать по [ссылке](./access/)

