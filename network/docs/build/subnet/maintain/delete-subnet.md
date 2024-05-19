---
tags: [Build, Subnets]
description: To delete a created Subnet configuration, run `lux subnet delete <subnetName>`.
sidebar_label: Delete a Subnet
pagination_label: How to Delete a Subnet
sidebar_position: 2
---

# How to Delete a Subnet

## Deleting a Subnet Configuration

To delete a created Subnet configuration, run

`lux subnet delete <subnetName>`

## Deleting a Deployed Subnet

You can't delete Subnets deployed to Mainnet or the Testnet.

However, you may delete Subnets deployed to a local network by cleaning the network state with

```shell
lux network clean
```
