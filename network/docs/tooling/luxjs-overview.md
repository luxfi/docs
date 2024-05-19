---
tags: [Tooling, LuxJS]
description: LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.
pagination_label: LuxJS
sidebar_label: LuxJS
sidebar_position: 0
---

# LuxJS Overview

LuxJS is a JavaScript Library for interfacing with the
[Lux](/learn/lux/intro.md) platform. It is built using
TypeScript and intended to support both browser and Node.js. The LuxJS
library allows one to issue commands to the Lux node APIs.

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

We built LuxJS with ease of use in mind. With this library, any JavaScript
developer is able to interact with a node on the Lux Platform who has
enabled their API endpoints for the developer’s consumption. We keep the library
up-to-date with the latest changes in the Lux Platform Specification found
in the [Platform Chain Specification](/reference/luxd/p-chain/api.md), [Exchange Chain (X-Chain) Specification](/reference/luxd/x-chain/api.md), [Contract Chain (C-Chain) Specification](/reference/luxd/c-chain/api.md).

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

### Using the NPM Package

Add LuxJS to your project via `npm` or `yarn`.

For installing via `npm`:

`npm install --save @luxfi/luxjs`

For installing via `yarn`:

`yarn add @luxfi/luxjs`

:::caution

Please note that [this](https://www.npmjs.com/package/lux)
npm package is deprecated.
Make sure to always use
[@luxfi/luxjs](https://www.npmjs.com/package/@luxfi/luxjs)
instead.

:::

### Build from Repository

You can also pull the repo down directly and build it from scratch.

Clone the LuxJS repository:

`git clone https://github.com/luxfi/luxjs.git`

Then build it:

`npm run build`

or

`yarn build`

This will generate a pure JavaScript library and place it in a folder named
"web" in the project root. The "luxjs" file can then be dropped into any
project as a pure JavaScript implementation of Lux.

![luxjs](/img/luxjs/luxjs-1.png)

## Use LuxJS in Projects

The LuxJS library can be imported into your existing Node.js project as follows:

```ts
const lux = require("lux");
```

Or into your TypeScript project like this:

```ts
import { Lux } from "lux";
```

## Importing Essentials

```ts
import { Lux, BinTools, Buffer, BN } from "lux";

let bintools = BinTools.getInstance();
```

The above lines import the libraries used in the tutorials. The libraries include:

- lux: Our JavaScript module.
- bn.js: A big number module use by LuxJS.
- buffer: A Buffer library.
- BinTools: A singleton built into LuxJS that is used for dealing with binary data.

## Run Scripts

### TypeScript File

**Via NPM**

Install typescript:

`npm install typescript`

Run the script:

`ts-node script-name.ts`

**Via YARN**

Install typescript:

`yarn add typescript`

Run the script:

`ts-node script-name.ts`

### JavaScript File

As Node.js is already installed per [requirements](/#Requirements),
simply run the script:

`node script-name.js`

### Example

Let's say that the LuxJS repository was cloned. There are a lot of
useful scripts in `Examples`. Suppose the one we want to run is AVM's
`getTx`, which has the path `examples/avm/getTX.ts`.

To execute the script, we use:

`ts-node examples/avm/getTx.ts`

It ran successfully, providing the following output:

```zsh
lavinia@Lavinias-MacBook-Pro luxjs % ts-node examples/avm/getTx.ts
{
  unsignedTx: {
    networkID: 1,
    blockchainID: '11111111111111111111111111111111LpoYY',
    outputs: [ [Object] ],
    inputs: [ [Object] ],
    memo: '0x',
    destinationChain: '2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM',
    exportedOutputs: [ [Object] ]
  },
  credentials: [ { signatures: [Array] } ],
  id: 'MTyhpMPU69qLPJL59dwfYbxpWNzp8bfsHyvy9B4DkzN2kWSQ5'
}
```
