---
tags: [Build, Tooling, Dapps]
description: The Lux Netrunner (ANR) allows a user to define, create and interact with a network of Lux nodes. It can be used for development and testing.
sidebar_label: Lux Netrunner
pagination_label: Lux Netrunner
---

# Lux Netrunner

The Lux Netrunner **(ANR)** allows a user to define, create and interact with a network
of Lux nodes. It can be used for development and testing.

[Link to GitHub](https://github.com/luxfi/netrunner)

Developing P2P systems is hard, and blockchains are no different. A developer can't just focus on
the functionality of a node, but needs to consider the dynamics of the network, the interaction of
nodes and emergent system properties. A lot of testing can't be addressed by unit testing, but needs
a special kind of integration testing, where the code runs in interaction with other nodes,
attempting to simulate real network scenarios.

In the context of Lux, **[Subnets](/learn/lux/subnets-overview.md)** are a special
focus which requires new tooling and support for playing, working and testing with this unique
feature of the Lux ecosystem.

The ANR aims at being a tool for developers and system integrators alike, offering functionality to
run networks of Luxd nodes with support for custom node, Subnet and network configurations,
allowing to locally test code before deploying to Mainnet or even public testnets like `testnet`.

You can also use the [Lux Netrunner Postman collection](https://github.com/luxfi/netrunner-postman-collection).

**Note that this tool is not for running production nodes, and that because it is being heavily**
**developed right now, documentation might differ slightly from the actual code.**

## Installation

<!-- markdownlint-disable MD013 -->

```bash
curl -sSfL https://raw.githubusercontent.com/luxfi/netrunner/main/scripts/install.sh | sh
```

<!-- markdownlint-enable MD013 -->

The script installs the binary inside the `~/bin` directory. If the directory doesn't exist,
it will be created.

Please make sure that `~/bin` is in your `$PATH`:

```shell
export PATH=~/bin:$PATH
```

To add it to your path permanently, add an export command to your shell initialization script. If
you run `bash`, use `.bashrc`. If you run `zsh`, use `.zshrc`.

Furthermore, `LUXD_EXEC_PATH` should be set properly in all shells you run commands related
to Lux Netrunner. We strongly recommend that you put the following in to your shell's
configuration file.

```bash
# replace execPath with the path to Luxd on your machine
# e.g., ${HOME}/go/src/github.com/luxfi/node/build/luxd
LUXD_EXEC_PATH="${HOME}/go/src/github.com/luxfi/node/build/luxd"
```

Unless otherwise specified, file paths given below are relative to the root of this repository.

## Usage

There are two main ways to use the netrunner:

- Run ANR as a binary

  This is the recommended approach for most use cases. Doesn't require Golang installation and
  provides a RPC server with an HTTP API and a client library for easy interaction.

- Import this repository into your go program

  This allows for custom network scenarios and high flexibility, but requires more code to be
  written.

Running the binary, the user can send requests to the RPC server in order to start a network, create
Subnets, add nodes to the network, remove nodes from the network, restart nodes, etc. You can make
requests through the `netrunner` command or by making API calls. Requests are
"translated" into gRPC and sent to the server.

Each node can then also be reached via
[API](https://github.com/luxfi/netrunner/tree/main/api) endpoints which each node
exposes.

The following diagram is a simplified view of the high level architecture of the tool:
![ANR architecture](/img/grpc-networkrunner.svg)

## Examples

When running with the binary, ANR runs a server process as an RPC server which then waits for API
calls and handles them. Therefore we run one shell with the RPC server, and another one for issuing
calls.

### Start the Server

```bash
netrunner server \
--log-level debug \
--port=":8080" \
--grpc-gateway-port=":8081"
```

Note that the above command will run until you stop it with `CTRL + C`. Further commands will have
to be run in a separate terminal.

The RPC server listens to two ports:

- `port`: the main gRPC port (see [gRPC](https://grpc.io/)).
- `grpc-gateway-port`: the gRPC gateway port (see
  [gRPC-gateway](https://grpc-ecosystem.github.io/grpc-gateway/)), which allows for HTTP requests.

When using the binary to issue calls, the main port will be hit. In this mode, the binary executes
compiled code to issue calls. Alternatively, plain HTTP can be used to issue calls, without the need
to use the binary. In this mode, the `grpc-gateway-port` should be queried.

Each of the examples below will show both modes, clarifying its usage.

### Run Queries

#### Ping the Server

```bash
curl -X POST -k http://localhost:8081/v1/ping -d ''
```

or

```bash
netrunner ping \
--log-level debug \
--endpoint="0.0.0.0:8080"
```

#### Start a New Lux Network with Five Nodes

```bash
curl -X POST -k http://localhost:8081/v1/control/start -d '{"execPath":"'${LUXD_EXEC_PATH}'","numNodes":5}'
```

or

```bash
netrunner control start \
--log-level debug \
--endpoint="0.0.0.0:8080" \
--number-of-nodes=5 \
--luxd-path ${LUXD_EXEC_PATH}
```

Additional optional parameters which can be passed to the start command:

<!-- markdownlint-disable MD013 -->

```bash
  --plugin-dir ${LUXD_PLUGIN_PATH} \
  --blockchain-specs '[{"vm_name":"subnetevm","genesis":"/tmp/subnet-evm.genesis.json"}]' \
	--global-node-config '{"index-enabled":false, "api-admin-enabled":true,"network-peer-list-gossip-frequency":"300ms"}' \
	--custom-node-configs" '{"node1":{"log-level":"debug","api-admin-enabled":false},"node2":{...},...}'
```

<!-- markdownlint-enable MD013 -->

`--plugin-dir` and `--blockchain-specs` are parameters relevant to Subnet operation.

`--plugin-dir` can be used to indicate to ANR where it will find plugin binaries for your own VMs.
It is optional. If not set, ANR will assume a default location which is relative to the
`luxd-path` given.

`--blockchain-specs` specifies details about how to create your own blockchains. It takes a JSON
array for each blockchain, with the following possible fields:

```text
   "vm_name": human readable name for the VM
   "genesis": path to a file containing the genesis for your blockchain (must be a valid path)
```

See the [Lux CLI documentation](/build/subnet/deploy/local-subnet.md) for details about how to
create and run Subnets with our _Lux CLI_ tool.

The netrunner supports Luxd node configuration at different levels.

1. If neither `--global-node-config` nor `--custom-node-configs` is supplied, all nodes get a
   standard set of config options. Currently this set contains:

   ```json
   {
     "network-peer-list-gossip-frequency": "250ms",
     "network-max-reconnect-delay": "1s",
     "public-ip": "127.0.0.1",
     "health-check-frequency": "2s",
     "api-admin-enabled": true,
     "api-ipcs-enabled": true,
     "index-enabled": true
   }
   ```

2. `--global-node-config` is a JSON string representing a _single_ Luxd config, which will be
   applied to **all nodes**. This makes it easy to define common properties to all nodes. Whatever
   is set here will be _combined_ with the standard set above.
3. `--custom-node-configs` is a map of JSON strings representing the _complete_ network with
   individual configs. This allows to configure each node independently. If set, `--number-of-nodes`
   will be **ignored** to avoid conflicts.
4. The configs can be combined and will be merged, that is one could set global `--global-node-config`
   entries applied to each node, and also set `--custom-node-configs` for additional entries.
5. Common `--custom-node-configs` entries override `--global-node-config` entries which override the
   standard set.
6. The following entries will be **ignored in all cases** because the netrunner needs to set
   them internally to function properly:

   ```bash
     --log-dir
     --db-dir
     --http-port
     --staking-port
     --public-ipc
   ```

#### Wait for All the Nodes in the Cluster to Become Healthy

```bash
curl -X POST -k http://localhost:8081/v1/control/health -d ''
```

or

```bash
netrunner control health \
--log-level debug \
--endpoint="0.0.0.0:8080"
```

The response to this call is actually pretty large, as it contains the state of the whole cluster.
At the very end of it there should be a text saying `healthy:true` (it would say `false` if it
wasn't healthy).

#### Get API Endpoints of All Nodes in the Cluster

```bash
curl -X POST -k http://localhost:8081/v1/control/uris -d ''
```

or

```bash
netrunner control uris \
--log-level debug \
--endpoint="0.0.0.0:8080"
```

#### Query Cluster Status from the Server

```bash
curl -X POST -k http://localhost:8081/v1/control/status -d ''
```

or

```bash
netrunner control status \
--log-level debug \
--endpoint="0.0.0.0:8080"
```

#### Stream Cluster Status

```bash
netrunner control \
--request-timeout=3m \
stream-status \
--push-interval=5s \
--log-level debug \
--endpoint="0.0.0.0:8080"
```

#### Remove (Stop) a Node

```bash
curl -X POST -k http://localhost:8081/v1/control/removenode -d '{"name":"node5"}'
```

or

```bash
netrunner control remove-node node5 \
--request-timeout=3m \
--log-level debug \
--endpoint="0.0.0.0:8080" \
```

#### Restart a Node

In this example we are stopping the node named `node1`.

**Note**: By convention all node names start with `node` and a number. We suggest to stick to this
convention to avoid issues.

```bash
# e.g., ${HOME}/go/src/github.com/luxfi/node/build/luxd
LUXD_EXEC_PATH="luxd"
```

Note that you can restart the node with a different binary by providing

```bash
curl -X POST -k http://localhost:8081/v1/control/restartnode -d '{"name":"node1","execPath":"'${LUXD_EXEC_PATH}'"}'
```

or

```bash
netrunner control restart-node node1 \
--request-timeout=3m \
--log-level debug \
--endpoint="0.0.0.0:8080" \
--luxd-path ${LUXD_EXEC_PATH}
```

#### Add a Node

In this example we are adding a node named `node99`.

```bash
# e.g., ${HOME}/go/src/github.com/luxfi/node/build/luxd
LUXD_EXEC_PATH="luxd"
```

Note that you can add the new node with a different binary by providing

```bash
curl -X POST -k http://localhost:8081/v1/control/addnode -d '{"name":"node99","execPath":"'${LUXD_EXEC_PATH}'"}'
```

or

```bash
netrunner control add-node node99 \
--request-timeout=3m \
--endpoint="0.0.0.0:8080" \
--luxd-path ${LUXD_EXEC_PATH}
```

It's also possible to provide individual node config parameters:

```bash
	--node-config '{"index-enabled":false, "api-admin-enabled":true,"network-peer-list-gossip-frequency":"300ms"}'
```

`--node-config` allows to specify specific Luxd config parameters to the new node.
See [here](/nodes/configure/luxd-config-flags.md) for the reference of supported flags.

**Note**: The following parameters will be _ignored_ if set in `--node-config`, because the network
runner needs to set its own in order to function properly: `--log-dir` `--db-dir`

**Note**: The following Subnet parameters will be set from the global network configuration to this node:
`--track-subnets`
`--plugin-dir`

#### Terminate the Cluster

Note that this will still require to stop your RPC server process with `Ctrl-C` to free the shell.

```bash
curl -X POST -k http://localhost:8081/v1/control/stop -d ''
```

or

```bash
netrunner control stop \
--log-level debug \
--endpoint="0.0.0.0:8080"
```

## Subnets

For general Subnet documentation, please refer to [Subnets](/learn/lux/subnets-overview.md).
ANR can be a great helper
working with Subnets, and can be used to develop and test new Subnets before deploying them in
public networks. However, for a smooth and guided experience, we recommend using
[Lux CLI](/build/subnet/deploy/local-subnet.md). These examples expect a basic understanding of
what Subnets are and their usage.

### RPC Server Subnet-EVM Example

The Subnet-EVM is a simplified version of Coreth VM (C-Chain). This chain implements the Ethereum
Virtual Machine and supports Solidity smart-contracts as well as most other Ethereum client
functionality. It can be used to create your own fully Ethereum-compatible Subnet running on
Lux. This means you can run your Ethereum-compatible dApps in custom Subnets, defining your
own gas limits and fees, and deploying solidity smart-contracts while taking advantage of
Lux's validator network, fast finality, consensus mechanism and other features. Essentially,
think of it as your own Ethereum where you can concentrate on your business case rather than the
infrastructure. See [Subnet-EVM](https://github.com/luxfi/subnet-evm) for further information.



## Using Lux Network as a Library

The Lux Netrunner can also be imported as a library into your programs so that you can
use it to programmatically start, interact with and stop Lux networks. For an example of using
the Netrunner in a program, see an
[example](https://github.com/luxfi/netrunner/blob/main/examples/local/fivenodenetwork/main.go).

Creating a network is as simple as:

```go
network, err := local.NewDefaultNetwork(log, binaryPath)
```

where `log` is a logger of type
[`logging.Logger`](https://github.com/luxfi/node/blob/master/utils/logging/logger.go#L12)
and `binaryPath` is the path of the Luxd binary that each node that exists on network startup
will run.

For example, the below snippet creates a new network using default configurations, and each node in
the network runs the binaries at `/home/user/go/src/github.com/luxfi/node/build`:

```go
network, err := local.NewDefaultNetwork(log,"/home/user/go/src/github.com/luxfi/node/build")
```

**Once you create a network, you must eventually call `Stop()` on it to make sure all of the nodes**
**in the network stop.** Calling this method kills all of the Lux nodes in the network. You
probably want to call this method in a `defer` statement to make sure it runs.

To wait until the network is ready to use, use the network's `Healthy` method. It returns a channel
which will be notified when all nodes are healthy.

Each node has a unique name. Use the network's `GetNodeNames()` method to get the names of all
nodes.

Use the network's method `GetNode(string)` to get a node by its name. For example:

```go
names, _ := network.GetNodeNames()
node, _ := network.GetNode(names[0])
```

Then you can make API calls to the node:

<!-- markdownlint-disable MD013 -->

```go
id, _ := node.GetAPIClient().InfoAPI().GetNodeID() // Gets the node's node ID
balance, _ := node.GetAPIClient().XChainAPI().GetBalance(address,assetID,false) // Pretend these arguments are defined
```

<!-- markdownlint-enable MD013 -->

After a network has been created and is healthy, you can add or remove nodes to/from the network:

```go
newNode, _ := network.AddNode(nodeConfig)
err := network.RemoveNode(names[0])
```

Where `nodeConfig` is a struct which contains information about the new node to be created. For a
local node, the most important elements are its name, its binary path and its identity, given by a
TLS key/cert.

You can create a network where nodes are running different binaries -- just provide different binary
paths to each:

```go
  stakingCert, stakingKey, err := staking.NewCertAndKeyBytes()
  if err != nil {
   return err
  }
  nodeConfig := node.Config{
    Name: "New Node",
    ImplSpecificConfig: local.NodeConfig{
      BinaryPath: "/tmp/my-luxd/build",
    },
    StakingKey:  stakingKey,
    StakingCert: stakingCert,
  }
```

After adding a node, you may want to call the network's `Healthy` method again and wait until the
new node is healthy before making API calls to it.

### Creating Custom Networks

To create custom networks, pass a custom config (the second parameter) to the
`local.NewNetwork(logging.Logger, network.Config)` function. The config defines the number of nodes
when the network starts, the genesis state of the network, and the configs for each node.

Please refer to
[NetworkConfig](https://github.com/luxfi/netrunner#network-creation) for more
details.
