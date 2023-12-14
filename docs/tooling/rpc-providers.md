---
tags: [Tooling, RPC Providers, LuxGo APIs]
description: There are multiple RPC providers which will work as intermediaries to help you interact with the Lux network. You'll experience different latency levels depending on the provider's configurations. You can potentially use multiple providers for redundancy and balancing.
keywords: [rpc, lux rpc, endpoint, curl, rpc provider]
---

# 🔌 RPC Providers

There are multiple RPC providers from which you can choose from. These providers will work as 
intermediaries to help you interact with the Lux network. You'll experience different latency
levels depending on the provider's configurations. You can potentially use multiple providers for 
redundancy and balancing.

## Mainnet RPC - Public API Server

There is a public API server that allows developers to access the Lux
network without having to run a node themselves. The public API server is
actually several [LuxGo](https://github.com/luxdefi/luxd) nodes
behind a load balancer to ensure high availability and high request throughput.

### Using the Public API Nodes

The public API server is at `api.lux.network` for Lux Mainnet and
`api.lux-test.network` for Lux Testnet. To access a particular API,
just append the relevant API endpoint, as documented
[here](/reference/standards/guides/issuing-api-calls.md). Namely, use the following end points for
each chain respectively:

#### HTTP

- For C-Chain API, the URL is `https://api.lux.network/ext/bc/C/rpc`.
- For X-Chain API, the URL is `https://api.lux.network/ext/bc/X`.
- For P-Chain API, the URL is `https://api.lux.network/ext/bc/P`.

Note: on Testnet, use `https://api.lux-test.network/` instead of `https://api.lux.network/`.

#### WebSocket

- For C-Chain API, the URL is `wss://api.lux.network/ext/bc/C/ws`.

Note: on Testnet, the URL is `wss://api.lux-test.network/ext/bc/C/ws`.

#### Supported APIs

The public API server supports all the API endpoints that make sense to be
available on a public-facing service, including APIs for the
[X-Chain](/reference/luxd/x-chain/api.md), [P-Chain](/reference/luxd/p-chain/api.md),
[C-Chain](/reference/luxd/c-chain/api.md), and full archival for the Primary Network.
However, it doesn't support [Index APIs](/reference/luxd/index-api.md), which includes
the X-Chain API's `getAddressTxs` method.

For a full list of available APIs see [here](/reference).

#### Limitations

The public API only supports C-Chain WebSocket API calls for API methods that
don't exist on the C-Chain's HTTP API.

For batched C-Chain requests on the public API node, the maximum number of items
is 40. We're working on to support a larger batch size.

The maximum number of blocks to serve per `getLogs` request is 2048, which is set by [`api-max-blocks-per-request`](/nodes/configure/chain-config-flags.md#api-max-blocks-per-request-int).

#### Sticky Sessions

Requests to the public API server API are distributed by a load balancer to an
individual node. As a result, consecutive requests may go to different nodes.
That can cause issues for some use cases. For example, one node may think a
given transaction is accepted, while for another node the transaction is still
processing. To work around this, you can use 'sticky sessions', as documented
[here](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials).
This allows consecutive API calls to be routed to the same node.

If you're using [LuxJS](/tooling/luxjs-overview.md) to access the public
API, simply set the following in your code:

```javascript
lux.setRequestConfig("withCredentials", true)
```

#### Availability

Usage of public API nodes is free and available to everyone without any
authentication or authorization. Rate limiting is present, but many of the API
calls are cached, and the rate limits are quite high. If your app is
running up against the limits, please [contact us](https://chat.lux.network) or
try using a community RPC provider.

#### Support

If you have questions, problems, or suggestions, join the official [Lux Discord](https://chat.lux.network/).

## Community Providers

:::info Disclaimer

Provided for informational purposes only, without representation, warranty or
guarantee of any kind. None of this is as an endorsement by the Lux
Foundation Limited, Lux Partners Limited or any of their respective subsidiaries or
affiliates, nor is any of this investment or financial advice. Please review
this
[Notice](https://assets.website-files.com/6059b554e81c705f9dd2dd32/60ec9590f189c16edaa086d4_Important%20Notice%20-%20lux.network.pdf)
and conduct your own research to properly evaluate the risks and benefits of any
project.

:::

### ANKR

#### Mainnet

- Standard EVM API, the URL is `https://rpc.ankr.com/lux`.
- For C-Chain API, the URL is `https://rpc.ankr.com/c`. On ANKR the C-Chain API doesn't 
support standard EVM APIs. For that use the Standard EVM API.
- For X-Chain API, the URL is `https://rpc.ankr.com/x`.
- For P-Chain API, the URL is `https://rpc.ankr.com/p`.

#### Testnet (Testnet)

- Standard EVM API, the URL is `https://rpc.ankr.com/lux_testnet`.
- For C-Chain API, the URL is `https://rpc.ankr.com/lux_testnet-c`. On ANKR the C-Chain API 
doesn't support standard EVM APIs. For that use the Standard EVM API.
- For X-Chain API, the URL is `https://rpc.ankr.com/lux_testnet-x`.
- For P-Chain API, the URL is `https://rpc.ankr.com/lux_testnet-p`.

Features:

- Archive Data Included.
- Automatic geo-routing across North America, Europe, and Asia.

Note: soft limited to 1 million daily requests per IP or referring domain. Batch calls limited to 1000.

### Blast

[Blast](https://blastapi.io/public-api/lux) supports the C-Chain, X-Chain, and P-Chain.

#### Mainnet

##### HTTP

- For C-Chain RPC Endpoint ETH, the URL is `https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc`
- For C-Chain RPC Endpoint LUX, the URL is `https://ava-mainnet.public.blastapi.io/ext/bc/C/lux`
- For X-Chain RPC Endpoint, the URL is `https://ava-mainnet.public.blastapi.io/ext/bc/X`
- For P-Chain RPC Endpoint, the URL is `https://ava-mainnet.public.blastapi.io/ext/P`

##### Websockets

- For C-Chain WSS Endpoint, the URL is `wss://ava-mainnet.public.blastapi.io/ext/bc/C/ws`

#### Testnet (Testnet)

##### HTTP

- For C-Chain RPC Endpoint ETH, the URL is `https://ava-testnet.public.blastapi.io/ext/bc/C/rpc`
- For C-Chain RPC Endpoint LUX, the URL is `https://ava-testnet.public.blastapi.io/ext/bc/C/lux`
- For X-Chain RPC Endpoint, the URL is `https://ava-testnet.public.blastapi.io/ext/bc/X`
- For P-Chain RPC Endpoint, the URL is `https://ava-testnet.public.blastapi.io/ext/P`

##### Websockets

- For C-Chain WSS Endpoint, the URL is `wss://ava-testnet.public.blastapi.io/ext/bc/C/ws`

### BlockSpaces

[BlockSpaces](https://www.blockspaces.com/web3-infrastructure) supports the C-Chain.

#### HTTP

- For C-Chain RPC Endpoint LUX, the URL is `https://web3endpoints.com/lux-mainnet`

### Chainstack

[Chainstack](https://chainstack.com/build-better-with-lux/) supports the
C-Chain, X-Chain, P-Chain, and the Testnet.

Features:

- Globally distributed infrastructure for optimal performance.
- Crypto payments natively.
- 24/7 customer support.

#### Mainnet

##### HTTP

- For C-Chain API, the regional elastic node URL is 
`https://nd-123-145-789.p2pify.com/API_KEY/ext/bc/C/rpc`, 
and the global elastic node URL is 
`https://mainnet.core.chainstack.com/ext/bc/C/rpc/API_KEY`
- For X-Chain API, the regional elastic node URL is 
`https://nd-123-145-789.p2pify.com/API_KEY/ext/bc/X`, 
and the global elastic node URL is 
`https://mainnet.core.chainstack.com/ext/bc/X/API_KEY`
- For P-Chain API, the regional elastic node URL is 
`https://nd-123-145-789.p2pify.com/API_KEY/ext/P`,
and the global elastic node URL is 
`https://mainnet.core.chainstack.com/ext/P/API_KEY`

##### Websockets

Websockets are available for the C-chain and the X-chain.

- For C-Chain API, the regional elastic node URL is 
`wss://ws-nd-123-145-789.p2pify.com/API_KEY/ext/bc/C/ws`, 
and the global elastic node URL is 
`wss://mainnet.core.chainstack.com/ws/ext/bc/C/ws/API_KEY`
- For X-Chain API, the regional elastic node URL is 
`wss://ws-nd-123-145-789.p2pify.com/API_KEY/ext/bc/X/events`, 
and the global elastic node URL is 
`wss://mainnet.core.chainstack.com/ws/ext/bc/X/events/API_KEY`

#### Testnet (Testnet)

##### HTTP

- For C-Chain API, the URL is `https://nd-123-145-789.p2pify.com/API_KEY/ext/bc/C/rpc`
- For X-Chain API, the URL is `https://nd-123-145-789.p2pify.com/API_KEY/ext/bc/X`
- For P-Chain API, the URL is `https://nd-123-145-789.p2pify.com/API_KEY/ext/P`

##### Websockets

Websockets are available for the C-chain and the X-chain.

- For C-Chain API, the URL is `wss://ws-nd-123-145-789.p2pify.com/API_KEY/ext/bc/C/ws`
- For X-Chain API, the URL is `wss://ws-nd-123-145-789.p2pify.com/API_KEY/ext/bc/X/events`
 
### DRPC

[DRPC](https://drpc.org/) supports the C-Chain.


#### Mainnet

- For C-Chain RPC Endpoint, the URL is `https://lux.drpc.org`

#### Testnet (Testnet)

- For C-Chain RPC Endpoint, the URL is `https://testnet.drpc.org`

  Features:

- Decentralized RPC nodes
- Node balancing
- Unlimited compute units per month on the free tier
- On free-tier is available Websockets

### GetBlock 

[GetBlock](https://getblock.io/nodes/lux) currently only supports the C-Chain.

#### HTTP

- For C-Chain API, the URL is  `https://lux.getblock.io/api_key/mainnet/ext/bc/C/ws?api_key=`

Note: on Testnet, the URL is `https://lux.getblock.io/api_key/testnet/ext/bc/C/ws?api_key=`.

#### Websockets

- For C-Chain API, the URL is  `wss://lux.getblock.io/api_key/mainnet/ext/bc/C/ws?api_key=`

Note: on Testnet, the URL is `wss://lux.getblock.io/api_key/testnet/ext/bc/C/ws?api_key=`.

### Infura

[Infura](https://docs.infura.io/infura/networks/c-chain/how-to/choose-a-network) currently
only supports the C-Chain.

#### HTTP

- For C-Chain API, the URL is  `https://mainnet.infura.io/v3/YOUR-API-KEY`

Note: on Testnet, the URL is `https://testnet.infura.io/v3/YOUR-API-KEY`.

### Moralis

[Moralis](https://moralis.io/?utm_source=lux-docs) currently supports the C-Chain.

#### Mainnet

- [NFT API](https://moralis.io/api/nft/?utm_source=lux-docs) for getting NFT metadata, balances,
transfers, sales and more
- [Token API](https://moralis.io/api/token/?utm_source=lux-docs) for getting ERC20 metadata, balances,
transfers, prices, burns, mints and more
- [Wallet API](https://moralis.io/api/wallet/?utm_source=lux-docs) for getting wallet balances,
transaction history, net worth and more
- [Blockchain API](https://moralis.io/api/block/?utm_source=lux-docs) for getting data about blocks,
transactions, logs and events
- [Streams API](https://moralis.io/streams/?utm_source=lux-docs) for getting real-time webhooks about
any on-chain event

Features:

- Free plan available
- Supports all major EVM networks

### Nodies

[Nodies](https://nodies.app) supports the C, X, P, and DFK Subnet chains.

Features:

- Generous free tier
- Globally distributed infrastructure in 3+ geographic regions
- Decentralized and Centralized API's

#### HTTP

- For `C-Chain`, the URL is  `https://lb.nodies.app/v1/105f8099e80f4123976b59df1ebfb433/ext/bc/C/rpc`
- For `X-Chain`, the URL is  `https://lb.nodies.app/v1/105f8099e80f4123976b59df1ebfb433/ext/bc/X`
- For `P-Chain`, the URL is  `https://lb.nodies.app/v1/105f8099e80f4123976b59df1ebfb433/ext/bc/P`
- For `DFK-Subnet`, the URL is
`https://lb.nodies.app/v1/105f8099e80f4123976b59df1ebfb433/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc`

### QuickNode

[QuickNode](https://www.quicknode.com/chains/lux) supports the X-Chain,
P-Chain, C-Chain, and Index API.

#### HTTP

- The URL is  `http://sample-endpoint-name.network.quiknode.pro/token-goes-here/`

#### Websockets

- The URL is  `wss://sample-endpoint-name.network.quiknode.pro/token-goes-here/`

### Stackup

[Stackup](https://www.stackup.sh) currently supports the Lux C-Chain on Mainnet and Testnet.

Features:

- Free
- Account abstraction RPC endpoints
- ERC-4337 bundlers and paymasters

#### HTTP

- The URL is `https://api.stackup.sh/v1/node/YOUR-API-KEY`

### NOWNodes

[NOWNodes](https://nownodes.io/nodes/lux) supports the X-Chain, P-Chain, C-Chain, and Blockbook.

Features:

- Privacy oriented (non custodial, no KYC)
- Dedicated access with no limits by request
- Free starter plan
- Technical guides 

#### Mainnet

#### RPC

- The URL is  `https://lux.nownodes.io/your-api-key`
  
#### Blockbook

- The URL is  `https://lux-blockbook.nownodes.io/your-request`

### PublicNode by Allnodes

[PublicNode](https://lux.publicnode.com) supports the C-Chain on the Mainnet.

Features:

- Free
- Privacy oriented
- Globally distributed infrastructure on Allnodes
- Optimized for speed and reliability - check our page for stats

#### Mainnet

- For C-Chain API, the URL is `https://c-chain.publicnode.com`

### 1RPC

[1RPC](https://1rpc.io), by Automata Network supports the C-Chain, X-Chain, and P-Chain.

Features:

- Free to use
- First RPC relay to be attested on-chain
- Eradicate metadata exposure and leakage
- Zero tracking

#### Mainnet RPC

- For C-Chain RPC Endpoint, the URL is `https://1rpc.io/lux/c`
- For X-Chain RPC Endpoint, the URL is `https://1rpc.io/lux/x`
- For P-Chain RPC Endpoint, the URL is `https://1rpc.io/lux/p`

## Subnets RPC - Public API Servers 

### Beam

#### HTTP

- The URL is `https://subnets.lux.network/beam/mainnet/rpc`.

Note: on Testnet, the URL is `https://subnets.lux.network/beam/testnet/rpc`.

#### Websockets

- The URL is `wss://subnets.lux.network/beam/mainnet/ws`.

Note: on Testnet, the URL is `wss://subnets.lux.network/beam/testnet/ws`.

### DeFi Kingdom (DFK)

#### HTTP

- The URL is `https://subnets.lux.network/defi-kingdoms/dfk-chain/rpc`.

Note: on Testnet, the URL is `https://subnets.lux.network/defi-kingdoms/dfk-chain-testnet/rpc`.

#### Websockets

- The URL is `wss://subnets.lux.network/defi-kingdoms/dfk-chain/ws`.

Note: on Testnet, the URL is `wss://subnets.lux.network/defi-kingdoms/dfk-chain-testnet/ws`.

### Dexalot

#### HTTP

- The URL is `https://subnets.lux.network/dexalot/mainnet/rpc`.

Note: on Testnet, the URL is `https://subnets.lux.network/dexalot/testnet/rpc`.

#### Websockets

- The URL is `wss://subnets.lux.network/dexalot/mainnet/ws`.

Note: on Testnet, the URL is `wss://subnets.lux.network/dexalot/testnet/ws`.
