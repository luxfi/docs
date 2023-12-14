---
tags: [Nodes]
description: In this tutorial, you'll learn how to manage your Luxd node.
sidebar_label: Managing Luxd
sidebar_position: 2
---

# Managing Luxd

## Stopping and Starting the Node

To stop Luxd, run:

```bash
sudo systemctl stop luxd
```

To start it again, run:

```bash
sudo systemctl start luxd
```

## Upgrade Your Node

Luxd is an ongoing project and there are regular version upgrades. Most
upgrades are recommended but not required. Advance notice will be given for
upgrades that are not backwards compatible. When a new version of the node is
released, you will notice log lines like:

```text
Jan 08 10:26:45 ip-172-31-16-229 luxd[6335]: INFO [01-08|10:26:45] luxd/network/peer.go#526: beacon 9CkG9MBNavnw7EVSRsuFr7ws9gascDQy3 attempting to connect with newer version lux/1.1.1. You may want to update your client
```

It is recommended to always upgrade to the latest version, because new versions
bring bug fixes, new features and upgrades.

To upgrade your node, just run the installer script again:

```bash
./luxd-installer.sh
```

It will detect that you already have Luxd installed:

```text
Luxd installer
---------------------
Preparing environment...
Found 64bit Intel/AMD architecture...
Found Luxd systemd service already installed, switching to upgrade mode.
Stopping service...
```

It will then upgrade your node to the latest version, and after it's done, start
the node back up, and print out the information about the latest version:

```text
Node upgraded, starting service...
New node version:
lux/1.1.1 [network=mainnet, database=v1.0.0, commit=f76f1fd5f99736cf468413bbac158d6626f712d2]
Done!
```
