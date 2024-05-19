---
tags: [Tooling, Lux CLI]
description: This page demonstrates how to configure nodes to validate the Lux Primary Network. Validation via Lux CLI is currently only supported on Testnet.
pagination_label: Configure Nodes to Validate the Primary Network with Lux CLI
sidebar_label: Validate the Primary Network
sidebar_position: 4
---

# Configure Nodes to Validate the Primary Network with Lux CLI

This page demonstrates how to configure nodes to validate the Primary Network.
Validation via Lux CLI is currently only supported on Testnet.

:::warning

ALPHA WARNING: This command is currently in experimental mode. Proceed at your own risk.

:::

## Prerequisites

Before we begin, you will need to have:

- Created a Cloud Server node as described for [AWS](/tooling/cli-guides/create-a-validator-aws.md)
  or [GCP](/tooling/cli-guides/create-a-validator-gcp.md)
- A node bootstrapped to the Primary Network (run `lux node status <clusterName>`to check
  bootstrap status as described[here](/tooling/cli-guides/create-a-validator-aws.md#check-bootstrap-status)
- Stored key / Ledger with LUX to pay for gas fess associated with adding node as Primary Network.
  Instructions on how to fund stored key on Testnet can be found [here](/build/subnet/deploy/testnet-subnet.md#funding-the-key).

## Be a Primary Network Validator

Once all nodes in a cluster are bootstrapped to Primary Network, we can now have the nodes be
Primary Network Validators.

To have all nodes in cluster `clusterName` be Primary Network Validators, run:

```shell
lux node validate primary <clusterName>
```

The nodes will start validating the Primary Network 20 seconds after the command is run.

The wizard will ask us how we want to pay for the transaction fee.
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

Once all the inputs are completed you will see transaction IDs indicating that all the nodes in the
cluster will be Primary Network Validators once the start time has elapsed.
