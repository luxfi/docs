---
tags: [Build, Subnets]
description: This how-to guide focuses on taking an already created permissioned Subnet and transforming it to an elastic (or permissionless) Subnet.
sidebar_label: Make Subnet Permissionless
pagination_label: Transform a Permissioned Subnet into an Elastic Subnet
sidebar_position: 0
---

# How to Transform a Permissioned Subnet into an Elastic Subnet

Elastic Subnets are permissionless Subnets. More information can be found [here](/build/subnet/elastic/elastic-parameters.md).

This how-to guide focuses on taking an already created permissioned Subnet and transforming it to an
elastic (or permissionless) Subnet.

## Prerequisites

- [Lux CLI installed](/tooling/cli-guides/install-cli.md)
- You have deployed a permissioned Subnet on [local](/build/subnet/deploy/local-subnet.md), on 
[Testnet](/build/subnet/deploy/testnet-subnet.md) or on [Mainnet](/build/subnet/deploy/mainnet-subnet.md)

## Getting Started

In the following commands, make sure to substitute the name of your Subnet configuration for
`<subnetName>`.

To transform your permissioned Subnet into an Elastic Subnet (NOTE: this action is irreversible), run

`lux subnet elastic <subnetName>`

and select the network that you want to transform the Subnet on. Alternatively, you can bypass this 
prompt by providing the `--local`, `--testnet`, or `--mainnet` flag. 

Provide the name and the symbol for the permissionless Subnet's native token. You can also bypass 
this prompt by providing the `--tokenName` and `--tokenSymbol` flags.

Next, select the Elastic Subnet config. You can choose to use the default values detailed 
[here](/build/subnet/elastic/elastic-parameters.md#primary-network-parameters-on-mainnet)
or customize the Elastic Subnet config. To bypass the prompt, you can use `--default` flag to use 
the default Elastic Subnet config.

The command may take a couple minutes to run.

### Elastic Subnet Transformation on Testnet and Mainnet

Elastic Subnet transformation on public network requires private key loaded into the tool, or a 
connected ledger device.

Both stored key usage and ledger usage are enabled on Testnet (see more on creating keys 
[here](/build/subnet/deploy/testnet-subnet.md#private-key)) 
while only ledger usage is enabled on Mainnet (see more on setting up your ledger 
[here](/build/subnet/deploy/mainnet-subnet.md#setting-up-your-ledger)).

To transform a permissioned Subnet into Elastic Subnet on public networks, users are required to 
provide the keys that control the Subnet defined during the Subnet deployment process (more info on 
keys in Testnet can be found 
[here](/build/subnet/deploy/testnet-subnet.md#deploy-the-subnet),
while more info on ledger signing in Mainnet can be found 
[here](/build/subnet/deploy/mainnet-subnet.md#deploy-the-subnet)). 

### Results

If all works as expected, you then have the option to automatically transform all existing 
permissioned validators to permissionless validators. 

You can also to skip automatic transformation at this point and choose to manually add 
permissionless validators later.

You can use the output details such as the Asset ID and Elastic Subnet ID to connect to and 
interact with your Elastic Subnet.

## Adding Permissionless Validators to Elastic Subnet

If you are running this command on local network, you will need to first remove permissioned 
validators (by running `lux subnet removeValidator <subnetName>`) so that you can have a list 
of local nodes to choose from to be added as a permissionless validator in the Elastic Subnet.

To add permissionless validators to an Elastic Subnet, run

`lux subnet join <subnetName> --elastic`

You will be prompted with which node you would like to add as a permissionless validator. You can 
skip this prompt by using `--nodeID` flag.

You will then be prompted with the amount of the Subnet native token that you like to stake in the 
validator. Alternatively, you can bypass this prompt by providing the `--stake-amount` flag. Note 
that choosing to add the maximum validator stake amount (defined during Elastic Subnet 
transformation step above) means that you effectively disable delegation in your validator.

Next, select when the validator will start validating and how long it will be validating for. You 
can also bypass these prompts by using `--start-time` and `--staking-period` flags.

## Adding Permissionless Delegator to a Permissionless Validator in Elastic Subnet

To add permissionless delegators, run

`lux subnet addPermissionlessDelegator <subnetName>`

You will be prompted with which Subnet validator you would like to delegate to. You can skip this 
prompt by using `--nodeID` flag.

You will then be prompted with the amount of the Subnet native token that you like to stake in the 
validator. Alternatively, you can bypass this prompt by providing the `--stake-amount` flag. The 
amount that can be delegated to a validator is detailed 
[here](/build/subnet/elastic/elastic-parameters.md#delegators-weight-checks).

Next, select when you want to start delegating and how long you want to delegate for. You can also 
bypass these prompts by using `--start-time` and `--staking-period` flags.


