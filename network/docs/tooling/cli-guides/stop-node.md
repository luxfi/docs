---
tags: [Tooling, Lux CLI]
description: This page provides instructions for halting cloud server nodes established by Lux CLI.
pagination_label: Stop Nodes Originally Created with Lux CLI
sidebar_label: Stop a Node
sidebar_position: 6
---
# Stop Nodes Originally Created with Lux CLI

This page provides instructions for halting cloud server nodes established by Lux CLI.

:::warning

ALPHA WARNING: This command is currently in experimental mode. Proceed at your own risk.

:::

## Stopping A Node

To stop all nodes in a cluster, run:

```shell
lux node stop <clusterName>
```

:::warning

ALPHA WARNING: This command will delete all files associated with the cloud servers in the cluster. 
This includes the downloaded `staker.crt` and `staker.key` files in your local `.cli` 
directory (which are used to back up your node). More info about node backup can be found [here](/nodes/maintain/node-backup-and-restore.md).

:::


:::note

Please note that a stopped node on AWS / GCP can still incur cost (such as storage fees).

Lux Partners is not responsible for the cost incurred from stopping a Lux node with
Lux CLI.

:::

Once completed, the instance set up on AWS / GCP would have been stopped and the Static Public IP
associated with it would have been released.
