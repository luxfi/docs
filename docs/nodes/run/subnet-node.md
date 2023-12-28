---
tags: [Nodes, Subnets]
description: Detailed instructions for running an Lux node that tracks a Subnet.
sidebar_label: Subnet Nodes
pagination_label: Run a Subnet Node
sidebar_position: 2
keywords:
  [
    subnet,
    lux,
    lux subnet,
    run a subnet node,
    subnet node,
    track subnet,
    virtual machine,
    binary,
  ]
---

# Run a Subnet Node

## Introduction

This article describes how to run a node that tracks a Subnet. It requires building Luxd, adding
Virtual Machine binaries as plugins to your local data directory, and running Luxd to track these
binaries.

This tutorial specifically covers tracking a Subnet built with Lux's
[Subnet-EVM](https://github.com/luxdefi/subnet-evm), the default [Virtual Machine](/learn/lux/virtual-machines.md)
run by Subnets on Lux.

## Build Luxd

It is recommended that you first complete [this comprehensive guide](/nodes/run/node-manually.md)
which demonstrates how to build and run a basic Lux node. Below are the high level details.

<details>

<summary>System Requirements</summary>
<p>

- CPU: Equivalent of 8 AWS vCPU
- RAM: 16 GiB
- Storage: 1 TiB SSD
- OS: Ubuntu 20.04 or MacOS &gt;= 12

Note that as network usage increases, hardware requirements may
change.

</p></details>

<details>

<summary>To build from source:</summary>
<p>

1. Install [gcc](https://gcc.gnu.org/)
2. Install [go](https://go.dev/)

3. Set the [$GOPATH](https://github.com/golang/go/wiki/SettingGOPATH)

4. Create a directory in your `$GOPATH`

```bash
mkdir -p $GOPATH/src/github.com/luxdefi
```

<!-- markdownlint-disable MD029 -->

5. Clone Luxd

In the `$GOPATH`, clone [Luxd](https://github.com/luxdefi/luxd),
the consensus engine and node implementation that is the core of the Lux
Network.

```bash
cd $GOPATH/src/github.com/luxdefi
git clone https://github.com/luxdefi/luxd.git
```

6. Run the Build Script

From the `luxd` directory, run the build script

```bash
cd $GOPATH/src/github.com/luxdefi/luxd
./scripts/build.sh
```

</p>
</details>

## Manage the Subnet Binaries

_After building Luxd successfully,_

### 1. Clone [Subnet-EVM](https://github.com/luxdefi/subnet-evm)

```bash
cd $GOPATH/src/github.com/luxdefi
git clone https://github.com/luxdefi/subnet-evm.git
```

### 2. Build the Binary and Save as a Plugin

In the Subnet-EVM directory, run the build script, and save it in the “plugins” folder of your
`.luxd` data directory. Name the plugin after the `VMID` of the Subnet you wish to track.
The `VMID` of the ZOO Subnet is the value beginning with “srEX...”.

```bash
cd $GOPATH/src/github.com/luxdefi/subnet-evm
./scripts/build.sh ~/.luxd/plugins/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy
```

<details>

<summary>Where can I find Subnet parameters like VMID?</summary>
<p>
VMID, Subnet ID, ChainID, and all other parameters can be found in the "Chain Info" 
section of the Subnet Explorer.

- [Lux Mainnet](https://subnets.lux.network/c-chain)
- [Testnet](https://subnets-test.lux.network/wagmi)

</p>
</details>

### 3. Specify the Plugin with a Config.json

Create a file named `config.json` and add a `track-subnets` field that is populated with the
`SubnetID` you wish to track. The `SubnetID` of the ZOO Subnet is the value beginning with
“28nr...”.

```bash
cd ~/.luxd
echo '{"track-subnets": "28nrH5T2BMvNrWecFcV3mfccjs6axM1TVyqe79MCv2Mhs8kxiY"}' > config.json
```

<!-- markdownlint-enable MD029 -->

## Run the Node

Run Luxd with the `—config-file` flag to start your node and ensure it tracks the Subnets
included in the configuration file.

```bash
cd $GOPATH/src/github.com/luxdefi/luxd
./build/luxd --config-file ~/.luxd/config.json --network-id=testnet
```

Note: The above command includes the `--network-id=testnet` command because the ZOO Subnet is deployed
on Testnet.

<details>

<summary>Run via the command line instead</summary>
<p>

If you would prefer to track Subnets using a command line flag, you can instead use the `--track-subnets`
flag.

For example:

```bash
./build/luxd --track-subnets 28nrH5T2BMvNrWecFcV3mfccjs6axM1TVyqe79MCv2Mhs8kxiY --network-id=testnet
```

</p>
</details>

You should now see terminal filled with logs and information to suggest the node is properly running
and has began bootstrapping to the network.

## Bootstrapping and RPC Details

It may take a few hours for the node to fully [bootstrap](/nodes/run/node-manually.md#bootstrapping)
to the Lux Primary Network and tracked Subnets.

When finished bootstrapping, the endpoint will be:

```bash
localhost:9650/ext/bc/<BlockchainID>/rpc
```

if run locally, or

```bash
XXX.XX.XX.XXX:9650/ext/bc/<BlockchainID>/rpc
```

if run on a cloud provider. The “X”s should be replaced with the public
IP of your EC2 instance.

For more information on the requests available at these endpoints, please see the
[Subnet-EVM API Reference](/reference/subnet-evm/api.md) documentation.

Because each node is also tracking the Primary Network, those
[RPC endpoints](nodes/run/node-manually.md#rpc) are available as well.
