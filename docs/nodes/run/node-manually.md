---
tags: [Nodes, LuxGo]
description: The quickest way to learn about Lux is to run a node and interact with the network. This tutorial demonstrates how to install and run an Lux node, and connect to the Lux Network by compiling a node from source and running it manually.
sidebar_label: Manually
pagination_label: Run an Lux Node Manually
sidebar_position: 0
keywords:
  [
    lux node,
    run a node,
    rpc,
    rpc node,
    track mainnet,
    lux mainnet,
    build from source,
    binary,
    luxd,
    blockchain node,
  ]
---

# Run an Lux Node Manually

The quickest way to learn about Lux is to run a node and interact with the network.

In this tutorial, we will:

- Install LuxGo and run an Lux node
- Connect to Lux

<details>

<summary>Other Options</summary>
<p>

- To use a third-party service to host your node or run a
  validator, [see here](/nodes/run/third-party/aws-node.md) for dedicated tutorials.

- If you're just interested in setting up a node for staking,
  it's recommended to follow the
  [LuxGo Install Script](/nodes/run/with-installer/installing-luxd.md)
  tutorial.

</p>
</details>

## Hardware and OS Requirements

Lux is an incredibly lightweight protocol, so nodes can run on commodity
hardware. Note that as network usage increases, hardware requirements may
change.

- CPU: Equivalent of 8 AWS vCPU
- RAM: 16 GiB
- Storage: 1 TiB SSD
- OS: Ubuntu 20.04 or MacOS &gt;= 12

:::caution

Please do not try running a node on an HDD, as you may get poor and random
read/write latencies, therefore reducing performance and reliability.

:::

## Run an Lux Node from Source

The following steps walk through downloading the LuxGo source code and locally
building the binary program.

### Install Dependencies

- Install [gcc](https://gcc.gnu.org/)
- Install [go](https://go.dev/)

### Build and Start

#### 1. Set the [$GOPATH](https://github.com/golang/go/wiki/SettingGOPATH)

#### 2. Create a directory in your `$GOPATH`

```bash
mkdir -p $GOPATH/src/github.com/luxdefi
```

#### 3. Clone LuxGo

In the `$GOPATH`, clone [LuxGo](https://github.com/luxdefi/luxd),
the consensus engine and node implementation that is the core of the Lux
Network.

```bash
cd $GOPATH/src/github.com/luxdefi
git clone https://github.com/luxdefi/luxd.git
```

#### 4. Run the Build Script

From the `luxd` directory, run the build script

```bash
cd $GOPATH/src/github.com/luxdefi/luxd
./scripts/build.sh
```

#### 5. Start the Node

On Lux Mainnet:

```bash
cd $GOPATH/src/github.com/luxdefi/luxd
./build/luxd
```

On Testnet:

```bash
cd $GOPATH/src/github.com/luxdefi/luxd
./build/luxd --network-id=testnet
```

:::info
To kill the node, press `Ctrl + C`.
:::

## Run with a Pre-Built Binary

To download a pre-built binary instead of building from source, go
to the [LuxGo releases page](https://github.com/luxdefi/luxd/releases),
and select the desired version.

### Download

Under `Assets`, select the appropriate file.

#### MacOS

Download: `luxd-macos-<VERSION>.zip`

Unzip:

```zsh
unzip luxd-macos-<VERSION>.zip
```

the resulting folder, `luxd-<VERSION>`, contains the binaries.

#### Linux(PCs or Cloud Providers)

Download: `luxd-linux-amd64-<VERSION>.tar.gz`

Unzip:

```bash
tar -xvf luxd-linux-amd64-<VERSION>.tar.gz
```

The resulting folder, `luxd-<VERSION>-linux`, contains the binaries.

#### Linux(Arm64)

Download: `luxd-linux-arm64-<VERSION>.tar.gz`

Unzip:

```bash
tar -xvf luxd-linux-arm64-<VERSION>.tar.gz
```

The resulting folder, `luxd-<VERSION>-linux`, contains the binaries.

### Start the Node

#### MacOS

Lux Mainnet:

```sh
./luxd-<VERSION>/build/luxd
```

Testnet:

```sh
./luxd-<VERSION>/build/luxd --network-id=testnet
```

#### Linux

Lux Mainnet:

```sh
./luxd-<VERSION>-linux/luxd
```

Testnet:

```sh
./luxd-<VERSION>-linux/luxd --network-id=testnet
```

## Run with Docker

See the [LuxGo GitHub](https://github.com/luxdefi/luxd#docker-install)
repository for more information.

## Networking

To run successfully, LuxGo needs to accept connections from the Internet
on the network port `9651`. Before you proceed with the installation, you need
to determine the networking environment your node will run in.

<details>

<summary>Running on a Cloud Provider</summary>
<p>
If your node is running on a cloud provider computer instance, it will have a
static IP. Find out what that static IP is, or set it up if you didn't already.
</p>
</details>

<details>

<summary>Running on a Home Connection</summary>
<p>

If you're running a node on a computer that is on a residential internet
connection, you have a dynamic IP; that is, your IP will change periodically.
**For the sake of demonstration, you can ignore the following information.**
Otherwise, you will need to set up inbound port forwarding of port `9651` from
the internet to the computer the node is installed on.

As there are too many models and router configurations, we cannot provide
instructions on what exactly to do, but there are online guides to be found
(like
[this](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/),
or [this](https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/)
), and your service provider support might help too.

:::warning

Please note that a fully connected Lux node maintains and communicates
over a couple of thousand of live TCP connections. For some low-powered and
older home routers that might be too much to handle. If that is the case you may
experience lagging on other computers connected to the same router, node getting
benched, failing to sync and similar issues.

:::

</p>
</details>

:::info
To be able to make API calls to your node from other machines, include the argument `--http-host=`
when starting the node.
:::

## Bootstrapping

A new node needs to catch up to the latest network state before it can participate in consensus
and serve API calls. This process (called bootstrapping) currently takes several days for a new
node connected to Mainnet, and a day or so for a new node connected to Testnet.
When a given chain is done bootstrapping, it will print logs like this:

```text
[09-09|17:01:45.295] INFO <C Chain> snowman/transitive.go:392 consensus starting {"lastAcceptedBlock": "2qaFwDJtmCCbMKP4jRpJwH8EFws82Q2yC1HhWgAiy3tGrpGFeb"}
[09-09|17:01:46.199] INFO <P Chain> snowman/transitive.go:392 consensus starting {"lastAcceptedBlock": "2ofmPJuWZbdroCPEMv6aHGvZ45oa8SBp2reEm9gNxvFjnfSGFP"}
[09-09|17:01:51.628] INFO <X Chain> snowman/transitive.go:334 consensus starting {"lenFrontier": 1}
```

### Check Bootstrapping Progress

To check if a given chain is done bootstrapping, in another terminal window call
[`info.isBootstrapped`](/reference/luxd/info-api.md#infoisbootstrapped)
by copying and pasting the following command:

```sh
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.isBootstrapped",
    "params": {
        "chain":"X"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/info
```

If this returns `true`, the chain is bootstrapped; otherwise, it returns
`false`. If you make other API calls to a chain that is not done bootstrapping,
it will return `API call rejected because chain is not done bootstrapping`. If
you are still experiencing issues please contact us on
[Discord.](https://chat.lux.network/)

Learn more about bootstrapping [here](/nodes/maintain/node-bootstrap).

## RPC

When finished bootstrapping, the X, P, and C-Chain RPC endpoints will be:

```bash
localhost:9650/ext/bc/P
localhost:9650/ext/bc/X
localhost:9650/ext/bc/C/rpc
```

if run locally, or

```bash
XXX.XX.XX.XXX:9650/ext/bc/P
XXX.XX.XX.XXX:9650/ext/bc/X
XXX.XX.XX.XXX:9650/ext/bc/C/rpc
```

if run on a cloud provider. The “XXX.XX.XX.XXX" should be replaced with the public
IP of your EC2 instance.

For more information on the requests available at these endpoints, please see the
[LuxGo API Reference](/reference) documentation.

## Going Further

Your Lux node will perform consensus on its own, but it is not yet a
validator on the network. This means that the rest of the network will not query
your node when sampling the network during consensus. If you want to add your
node as a validator, check out [Add a Validator](/nodes/validate/add-a-validator.md)
to take it a step further.

Also check out the [Maintain](/nodes/maintain/node-bootstrap.md) section to learn about how
to maintain and customize your node to fit your needs.

To track a Subnet with your node, head to the [Subnet Node](/nodes/run/subnet-node.md) tutorial.
