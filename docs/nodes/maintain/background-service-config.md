---
tags: [Nodes]
description: This page demonstrates how to set up a `luxd.service` file to enable a manually deployed validator node to run in the background of a server instead of in the terminal directly.
sidebar_label: Run as a Background Service
pagination_label: Run an Lux Node as a Background Service
sidebar_position: 6
---
# Run an Lux Node as a Background Service

## Overview

This page demonstrates how to set up a `luxd.service` file to
enable a manually deployed validator node to run in the background of
a server instead of in the terminal directly.

## Prerequisites

- Luxd installed

## Steps

### Testnet Config

Run this command in your terminal to create the `luxd.service` file

```shell
sudo nano /etc/systemd/system/luxd.service
```

Paste the following configuration into the `luxd.service` file

***Remember to modify the values of:***

- ***user=***
- ***group=***
- ***WorkingDirectory=***
- ***ExecStart=***

***For those that you have configured on your Server***

```shell
[Unit]
Description=Lux Node service
After=network.target

[Service]
User='YourUserHere'
Group='YourUserHere'
Restart=always
PrivateTmp=true
TimeoutStopSec=60s
TimeoutStartSec=10s
StartLimitInterval=120s
StartLimitBurst=5
WorkingDirectory=/Your/Path/To/luxd
ExecStart=/Your/Path/To/luxd/./luxd \  
   --network-id=testnet \
   --api-metrics-enabled=true 

[Install]
WantedBy=multi-user.target
```

Press **Ctrl + X** then **Y** then **Enter** to save and exit.

Now, run:

```shell
sudo systemctl daemon-reload
```

### Mainnet Config

Run this command in your terminal to create the `luxd.service` file

```shell
sudo nano /etc/systemd/system/luxd.service
```

Paste the following configuration into the `luxd.service` file

```shell
[Unit]
Description=Lux Node service
After=network.target

[Service]
User='YourUserHere'
Group='YourUserHere'
Restart=always
PrivateTmp=true
TimeoutStopSec=60s
TimeoutStartSec=10s
StartLimitInterval=120s
StartLimitBurst=5
WorkingDirectory=/Your/Path/To/luxd
ExecStart=/Your/Path/To/luxd/./luxd \
   --api-metrics-enabled=true

[Install]
WantedBy=multi-user.target
```

Press **Ctrl + X** then **Y** then **Enter** to save and exit.

Now, run:

```shell
sudo systemctl daemon-reload
```

## Start the Node

This command makes your node start automatically in case of a reboot, run it:

```shell
sudo systemctl enable luxd
```

To start the node, run:

```shell
sudo systemctl start luxd
sudo systemctl status luxd
```

Output:

```Lua
socopower@node-01:~$ sudo systemctl status luxd
● luxd.service - Lux Node service
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

To see the synchronization process, you can run the following command:

```shell
sudo journalctl -fu luxd
```
