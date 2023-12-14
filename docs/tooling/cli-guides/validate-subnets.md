---
tags: [Tooling, Lux-CLI]
description: This page demonstrates how to configure nodes to validate an Lux Subnet. Validation via Lux-CLI is currently only supported on Testnet.
pagination_label: Configure Nodes to Validate a Subnet with Lux-CLI
sidebar_label: Validate a Subnet
sidebar_position: 5
---

# Configure a Node to Validate a Subnet with Lux-CLI

This page demonstrates how to configure nodes to validate an Lux Subnet.
Validation via Lux-CLI is currently only supported on Testnet.

:::warning

ALPHA WARNING: This command is currently in experimental mode. Proceed at your own risk.

:::

## Prerequisites

Before we begin, you will need to have:

- Created a Cloud Server node as described for [AWS](/tooling/cli-guides/create-a-validator-aws.md)
  or [GCP](/tooling/cli-guides/create-a-validator-gcp.md)
- A node bootstrapped to the Primary Network (run `lux node status <clusterName>` to check
  bootstrap status)
- Deployed a Subnet on Testnet through CLI as described [here](/build/subnet/deploy/testnet-subnet)
- Stored key / Ledger with LUX to pay for gas fess associated with adding node as Primary Network
  and Subnet Validator transactions. Instructions on how to fund stored key on Testnet can be found
  [here](/build/subnet/deploy/testnet-subnet.md#funding-the-key)

## Sync with Subnet

Before the nodes can be Subnet Validators, the nodes need to first sync with the Subnet.

To have all nodes in cluster `clusterName` sync with Subnet `subnetName`, run:

```shell
lux node sync <clusterName> <subnetName>
```

All the nodes in cluster `clusterName` will now be syncing to Subnet `subnetName`.

Wait until nodes are successfully `Syncing` with the Subnet before running the next commands.

To check sync status, run `lux node status <clusterName> --subnet <subnetName>`. Once the
node is finished syncing, the response will be:

```text
All nodes in cluster `clusterName` are synced to Subnet `subnetName`
```

## Be a Subnet Validator

Once the nodes have synced, we can now have the nodes be Subnet Validators.

To have the nodes be Subnet Validators, run:

```shell
lux node validate subnet <clusterName> <subnetName>
```

If any of the nodes is not yet a Primary Network Validator, we will first add it as a Primary
Network Validator.

The wizard will ask us how we want to pay for the transaction fees.
Choose `Use stored key` for Testnet:

```text
 Which key source should be used to pay transaction fees?:
  ▸ Use stored key
    Use ledger
```

Once you have selected the key to pay with, choose how many LUX you would like to stake in the
validator. Default is the minimum amount of LUX that can be staked in a Testnet Network Validator.
More info regarding minimum staking amount in different networks can be found [here](/nodes/validate/how-to-stake.md#testnet).

```text
 What stake weight would you like to assign to the validator?:
  ▸ Default (1.00 LUX)
    Custom
```

Next, choose how long the node will be validating for:

```text
 How long should your validator validate for?:
  ▸ Minimum staking duration on primary network
    Custom
```

Once all the inputs are completed you will see a transaction ID indicating that the node is now
a Primary Network Validator.

Note: if you see an error indicating that the transaction is not committed, run
`lux node validate subnet <clusterName> <subnetName>` again as it could be due to
the validator start time having elapsed.

Next, we will wait for 20 seconds for the node to officially start as a Primary Network Validator.

We will then proceed with adding the node as a Subnet Validator. Similar to adding the node as a
Primary Network Validator, the wizard will ask you for how you would like to pay for the transaction
fee.

Once that is completed, you will be asked what stake you would like to assign the Subnet Validator:

```text
 What stake weight would you like to assign to the validator?:
  ▸ Default (20)
    Custom
```

Note that for this part, you are not staking actual LUX in the validator. This is an arbitrary
weight that you are assigning to the validator. You can learn more about the stake weight parameter
in [addSubnetValidator](/reference/luxd/p-chain/api.md#platformaddsubnetvalidator) under the
`weight` section.

Next, enter the start and end time for the node to validate the Subnet.

Once all input is completed, you will another transaction ID indicating that the node is now
scheduled to be a Subnet Validator.

Once the start time that you chose for the node to be a Subnet Validator has elapsed, verify that
the node is a Subnet validator by running `lux node status <clusterName> 
--subnet <subnetName>`.

You should see:

```text
All nodes in cluster `clusterName` are validators to Subnet `subnetName`
```
