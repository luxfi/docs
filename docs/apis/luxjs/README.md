# LuxJS Overview

LuxJS is a JavaScript Library for interfacing with the [Lux](../../overview/getting-started/intro.md) platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.

The APIs currently supported by default are:

- Admin API
- Auth API
- AVM API (X-Chain)
- EVM API (C-Chain)
- Health API
- Index API
- Info API
- Keystore API
- Metrics API
- PlatformVM API
- Socket API

We built LuxJS with ease of use in mind. With this library, any Javascript developer is able to interact with a node on the Lux Platform who has enabled their API endpoints for the developer’s consumption. We keep the library up-to-date with the latest changes in the Lux Platform Specification found in the [Platform Chain Specification](../luxd/apis/p-chain.md), [Exchange Chain (X-Chain) Specification](../luxd/apis/x-chain.md), [Contract Chain (C-Chain) Specification](../luxd/apis/c-chain.md).

Using LuxJS, developers can:

- Locally manage private keys
- Retrieve balances on addresses
- Get UTXOs for addresses
- Build and sign transactions
- Issue signed transactions to the X-Chain, P-Chain and C-Chain on the Primary network
- Create a Subnetwork
- Swap LUX and assets between the X-Chain, P-Chain and C-Chain
- Add a Validator to the Primary network
- Add a Delegator to the Primary network
- Administer a local node
- Retrieve Lux network information from a node

## Requirements

LuxJS requires Node.js version 14.18.0 or higher to compile.

## Installation

Lux is available for install via `npm` or `yarn`. For installing via `npm`:

`npm install --save lux`

For installing via `yarn`:

`yarn add lux`

You can also pull the repo down directly and build it from scratch:

`npm run build`

This will generate a pure Javascript library and place it in a folder named "web" in the project root. The "luxjs" file can then be dropped into any project as a pure javascript implementation of Lux.

The LuxJS library can be imported into your existing Node.js project as follows:

```ts
const lux = require("lux")
```

Or into your TypeScript project like this:

```ts
import { Lux } from "lux"
```

## Importing essentials

```ts
import { Lux, BinTools, Buffer, BN } from "lux"

let bintools = BinTools.getInstance()
```

The above lines import the libraries used in the tutorials. The libraries include:

- lux: Our javascript module.
- bn.js: A bignumber module use by LuxJS.
- buffer: A Buffer library.
- BinTools: A singleton built into LuxJS that is used for dealing with binary data.
