---
tags: [Nodos]
description: Esta página muestra cómo configurar un archivo `luxd.service` para permitir que un nodo validador desplegado manualmente se ejecute en segundo plano en un servidor en lugar de en la terminal directamente.
sidebar_label: Ejecutar como un Servicio en Segundo Plano
pagination_label: Ejecutar un Nodo Lux como un Servicio en Segundo Plano
sidebar_position: 6
---

# Ejecutar un Nodo Lux como un Servicio en Segundo Plano

## Resumen

Esta página muestra cómo configurar un archivo `luxd.service` para
permitir que un nodo validador desplegado manualmente se ejecute en segundo plano en
un servidor en lugar de en la terminal directamente.

## Prerrequisitos

- LuxGo instalado

## Pasos

### Configuración para la Testnet

Ejecuta este comando en tu terminal para crear el archivo `luxd.service`

```shell
sudo nano /etc/systemd/system/luxd.service
```

Pega la siguiente configuración en el archivo `luxd.service`

**_Recuerda modificar los valores de:_**

- **_user=_**
- **_group=_**
- **_WorkingDirectory=_**
- **_ExecStart=_**

**_Por aquellos que has configurado en tu servidor_**

```shell
[Unit]
Description=Servicio de Nodo Lux
After=network.target

[Service]
User='TuUsuarioAquí'
Group='TuUsuarioAquí'
Restart=always
PrivateTmp=true
TimeoutStopSec=60s
TimeoutStartSec=10s
StartLimitInterval=120s
StartLimitBurst=5
WorkingDirectory=/Tu/Ruta/Hacia/luxd
ExecStart=/Tu/Ruta/Hacia/luxd/./luxd \
   --network-id=testnet \
   --api-metrics-enabled=true

[Install]
WantedBy=multi-user.target
```

Presiona **Ctrl + X**, luego **Y** y luego **Enter** para guardar y salir.

Ahora, ejecuta:

```shell
sudo systemctl daemon-reload
```

### Configuración para la Mainnet

Ejecuta este comando en tu terminal para crear el archivo `luxd.service`

```shell
sudo nano /etc/systemd/system/luxd.service
```

Pega la siguiente configuración en el archivo `luxd.service`

```shell
[Unit]
Description=Servicio de Nodo Lux
After=network.target

[Service]
User='TuUsuarioAquí'
Group='TuUsuarioAquí'
Restart=always
PrivateTmp=true
TimeoutStopSec=60s
TimeoutStartSec=10s
StartLimitInterval=120s
StartLimitBurst=5
WorkingDirectory=/Tu/Ruta/Hacia/luxd
ExecStart=/Tu/Ruta/Hacia/luxd/./luxd \
   --api-metrics-enabled=true

[Install]
WantedBy=multi-user.target
```

Presiona **Ctrl + X**, luego **Y** y luego **Enter** para guardar y salir.

Ahora, ejecuta:

```shell
sudo systemctl daemon-reload
```

## Iniciar el Nodo

Este comando hace que tu nodo se inicie automáticamente en caso de un reinicio, ejecútalo:

```shell
sudo systemctl enable luxd
```

Para iniciar el nodo, ejecuta:

```shell
sudo systemctl start luxd
sudo systemctl status luxd
```

Salida:

```Lua
socopower@node-01:~$ sudo systemctl status luxd
● luxd.service - Servicio de Nodo Lux
     Loaded: loaded (/etc/systemd/system/luxd.service; enabled; vendor p>
     Active: active (running) since Tue 2023-08-29 23:14:45 UTC; 5h 46min ago
   Main PID: 2226 (luxd)
      Tasks: 27 (limit: 38489)
     Memory: 8.7G
        CPU: 5h 50min 31.165s
     CGroup: /system.slice/luxd.service
             └─2226 /usr/local/bin/luxd/./luxd --network-id=testnet

Aug 30 03:02:50 node-01 luxd[2226]: INFO [08-30|03:02:50.685] >
Aug 30 03:02:51 node-01 luxd[2226]: INFO [08-30|03:02:51.185] >
Aug 30 03:03:09 node-01 luxd[2226]: [08-30|03:03:09.380] INFO >
Aug 30 03:03:23 node-01 luxd[2226]: [08-30|03:03:23.983] INFO >
Aug 30 03:05:15 node-01 luxd[2226]: [08-30|03:05:15.192] INFO >
Aug 30 03:05:15 node-01 luxd[2226]: [08-30|03:05:15.237] INFO >
Aug 30 03:05:15 node-01 luxd[2226]: [08-30|03:05:15.238] INFO >
Aug 30 03:05:19 node-01 luxd[2226]: [08-30|03:05:19.809] INFO >
Aug 30 03:05:19 node-01 luxd[2226]: [08-30|03:05:19.809] INFO >
Aug 30 05:00:47 node-01 luxd[2226]: [08-30|05:00:47.001] INFO
```

Para ver el proceso de sincronización, puedes ejecutar el siguiente comando:

```shell
sudo journalctl -fu luxd
```
