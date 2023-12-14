---
tags: [Tooling, LuxJS]
description: LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.
pagination_label: Transfer LUX Tokens Between Chains
sidebar_label: Send Tokens Between Chains
sidebar_position: 2
---

# Transfer LUX Tokens Between Chains

## Introduction

This article shows how to transfer LUX tokens programmatically between any two
chains (X/P/C chains) of the Primary Network.

If you are looking for how to transfer LUX tokens using the web wallet, please check out [this article](https://support.lux.network/en/articles/6169872-how-to-make-a-cross-chain-transfer-in-the-wallet).

## Prerequisites

- You are familiar with [Lux's architecture](/learn/lux/platform.md).
- You have completed [Run an Lux Node](/nodes/run/node-manually.md).
- You are familiar with [LuxJS](https://github.com/luxdefi/LuxJS).
- You have installed
  [ts-node](https://www.npmjs.com/package/ts-node#installation) so that you can
  follow examples in this tutorial.

## Getting Started

To use LuxJS, you can clone the repo:

```zsh
git clone https://github.com/luxdefi/luxjs.git
```

:::info
The repository cloning method used is HTTPS, but SSH can be used too:

`git clone git@github.com:luxdefi/luxjs.git`

You can find more about SSH and how to use it
[here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).
:::

or add it to an existing project:

```zsh
yarn add --dev lux
```

For this tutorial we will use `ts-node` to run the example scripts directly from an LuxJS directory.

In order to send LUX, you need to have some LUX. You can use a pre-funded
account on local network or get testnet LUX from the [Lux
Faucet](https://faucet.lux.network), which is an easy way to get to play around
with Lux. After getting comfortable with your code, you can run the code
on Mainnet after making necessary changes.

## Transferring LUX Using LuxJS

The easiest way to transfer LUX between chains is to use
[LuxJS](https://github.com/luxdefi/LuxJS) which is a programmatic
way to access and move LUX.

LuxJS allows you to create and sign transactions locally which is why it
is the recommended way to transfer LUX between chains. We are moving away from
using Luxd's keystore because it requires you to keep your keys on a full
node which makes them a target for malicious hackers.

### Example Code

Following files can be found under the
[examples](https://github.com/luxdefi/luxjs/tree/master/examples)
directory of the LuxJS project.

| Transfer From >> To      | Export                                                                                                                                  | Import                                                                                                                                    |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **_X-Chain >> C-Chain_** | [**X-Chain : Export Lux to C-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildExportTx-cchain-lux.ts)   | [**C-Chain : Import Lux from X-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/evm/buildImportTx-xchain.ts)        |
| **_X-Chain >> P-Chain_** | [**X-Chain : Export Lux to P-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildExportTx-PChain.ts)        | [**P-Chain : Import Lux from X-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/platformvm/buildImportTx-XChain.ts) |
| **_P-Chain >> X-Chain_** | [**P-Chain : Export Lux to X-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/platformvm/buildExportTx-XChain.ts) | [**X-Chain : Import Lux from P-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildImportTx-PChain.ts)        |
| **_P-Chain >> C-Chain_** | [**P-Chain : Export Lux to C-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/platformvm/buildExportTx-CChain.ts) | [**C-Chain : Import Lux from P-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/evm/buildImportTx-PChain.ts)        |
| **_C-Chain >> X-Chain_** | [**C-Chain : Export Lux to X-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/evm/buildExportTx-xchain-lux.ts)   | [**X-Chain : Import Lux from C-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildImportTx-cchain.ts)        |
| **_C-Chain >> P-Chain_** | [**C-Chain : Export Lux to P-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/evm/buildExportTx-pchain.ts)        | [**P-Chain : Import Lux from C-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/platformvm/buildImportTx-CChain.ts) |

:::tip

The naming convention in the file and directory names are:

AVM is for X-Chain, EVM for C-Chain, and PlatformVM for P-Chain.

:::

### Transaction Fee

Transaction fees are fixed on X-Chain and P-Chain, while dynamic on C-Chain, see
[this article](/reference/standards/guides/txn-fees#fee-schedule) for details. When transferring
tokens, please take fee into consideration in calculating total amount to be
transferred.

## Testnet Workflow

This tutorial uses [**X-Chain to
C-Chain**](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildExportTx-cchain-lux.ts)
transfers as an example. Transferring between other chains are very similar.

### Transfer from the X-Chain to the C-Chain

To transfer a specified amount token from X-Chain to C-Chain, the token needs to
be first exported from the X-Chain to the atomic memory, from where it is then
imported to C-Chain.

#### Export the Lux Token From X-Chain to C-Chain

Select the
[**`examples/avm`**](https://github.com/luxdefi/luxjs/tree/master/examples/avm)
folder to view the LuxJS X-Chain examples. To export LUX from the X-Chain
to the C-Chain, select
[`avm/buildExportTx-cchain-lux.ts`](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildExportTx-cchain-lux.ts).

##### Private Key

Locate this line in the file

```js
const privKey: string = `${PrivateKeyPrefix}${DefaultLocalGenesisPrivateKey}`;
```

and replace this with a private key that you control.

```js
const privKey: string = "<YOUR-PRIVATE-KEY-HERE>";
```

##### Network Setting

The following settings work when using a local node started with [`--network-id=testnet`](/nodes/configure/luxd-config-flags.md#network-id):

```js
const ip: string = "localhost";
const port: number = 9650;
const protocol: string = "http";
const networkID: number = 5;
```

However, to connect directly to the [Lux Testnet API server](/tooling/rpc-providers.md), the following changes are
needed:

```js
const ip: string = "api.lux-test.network";
const port: number = 443;
const protocol: string = "https";
const networkID: number = 5;
```

Depending on the networkID passed in when instantiating Lux, the encoded
addresses used will have a distinctive Human Readable Part(HRP) per each
network.

_Example Address: 5 - X-`testnet`19rknw8l0grnfunjrzwxlxync6zrlu33yxqzg0h_

For Testnet, 5 is the correct value to use.

```js
const networkID: number = 5;
```

To learn more about encoded addresses, click [here](/tooling/luxjs-guides/manage-x-chain-keys.md#encode-bech32-addresses).

**Set the Correct Amount To Send:**

By default the scripts send the wallet's entire LUX balance:

```js
const balance: BN = new BN(getBalanceResponse.balance);
const amount: BN = balance.sub(fee);
```

To send a different amount, please replace the code above with the following.
Below sets a new value of 0.01 LUX (`10000000` Gwei). Value is set in Gwei
format where `1,000,000,000` Gwei = 1 LUX

```js
const value: BN = new BN("10000000");
const amount: BN = value.sub(fee);
```

:::tip
Snowtrace provides a [unit converter](https://snowtrace.io/unitconverter) between different units
:::

Run the export script:

```sh
ts-node examples/avm/buildExportTx-cchain-lux.ts
```

This returns:

```sh
Success! TXID: 2uQvMcPZjmPXAyvz9cdKBphDDSmnxxx3vsUrxqpj3U92hsfQcc
```

#### Verify the Transaction

You can now pass this txID `2uQvMcPZjmPXAyvz9cdKBphDDSmnxxx3vsUrxqpj3U92hsfQcc`
into
[examples/avm/getTx.ts](https://github.com/luxdefi/luxjs/blob/master/examples/avm/getTx.ts),
plus other similar network settings, then you can run

```zsh
ts-node examples/avm/getTx.ts
```

which returns:

```js
{
  unsignedTx: {
    networkID: 5,
    blockchainID: '2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm',
    outputs: [ [Object] ],
    inputs: [ [Object], [Object] ],
    memo: '0x41564d207574696c697479206d6574686f64206275696c644578706f7274547820746f206578706f7274204156415820746f2074686520432d436861696e2066726f6d2074686520582d436861696e',
    destinationChain: 'yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp',
    exportedOutputs: [ [Object] ]
  },
  credentials: [
    {
      fxID: 'spdxUxVJQbX85MGxMHbKw1sHxMnSqJ3QBzDyDYEP3h6TLuxqQ',
      credential: [Object]
    },
    {
      fxID: 'spdxUxVJQbX85MGxMHbKw1sHxMnSqJ3QBzDyDYEP3h6TLuxqQ',
      credential: [Object]
    }
  ]
}
```

#### Import the Lux Token From X-Chain to C-Chain

Select the
[**`examples/evm`**](https://github.com/luxdefi/luxjs/tree/master/examples/evm)
folder to view the LuxJS C-Chain examples. To import LUX to the C-Chain
from the X-Chain, select
[`evm/buildImportTx-xchain.ts`](https://github.com/luxdefi/luxjs/blob/master/examples/evm/buildImportTx-xchain.ts)

Copy the [network setting from above](#network-setting) into `evm/buildImportTx-xchain.ts`.

Navigate to this part of the code and ensure that the `cHexAddress`(_Your
C-Chain wallet address_) and `private key` are correct:

```ts
const cHexAddress: string = "<YOUR-CCHAIN-WALLET-ADDRESS-HERE>";
const privKey: string = "<YOUR-PRIVATE-KEY-HERE>";
```

Run the import script:

```sh
ts-node examples/evm/buildImportTx-xchain.ts
```

This returns:

```sh
Success! TXID: 2uQvMcPZjmPXAyvz9cdKBphDDSmnxxx3vsUrxqpj3U92hsfQcc
```

That's it! You've transferred LUX from the X-Chain to C-Chain!

You can verify this TX by copy / pasting the import TXID into [Avascan](https://testnet.avascan.info/blockchain/c/tx/2uQvMcPZjmPXAyvz9cdKBphDDSmnxxx3vsUrxqpj3U92hsfQcc).

### Transfer from the C-Chain to the X-Chain

To return the LUX back to the X-Chain, you need to do the transfer in the opposite direction.

#### Export the Lux Token From C-Chain to X-Chain

Select the
[**`examples/evm`**](https://github.com/luxdefi/luxjs/tree/master/examples/evm)
folder to view the LuxJS C-Chain examples. To export LUX from the X-Chain
to the C-Chain, select
[`evm/buildExportTx-xchain-lux.ts`](https://github.com/luxdefi/luxjs/blob/master/examples/evm/buildExportTx-xchain-lux.ts).

Make necessary changes as above for private key and network settings.

You can change the amount of LUX to send by editing the _BN_ variable:
`luxAmount`. The sample code assigns this as `1e7` or `10000000` (0.01 LUX)

The fee here will only be for exporting the asset. The import fees will be
deducted from the UTXOs present on the Exported Atomic Memory, a memory location
where UTXOs stay after getting exported but before being imported.

```ts
let luxAmount: BN = new BN(1e7);
let fee: BN = baseFee.div(new BN(1e9));
fee = fee.add(new BN(1e6));
```

Run the export script:

```zsh
luxjs $ ts-node examples/evm/buildExportTx-xchain-lux.ts
Success! TXID: UAez3DTv26qmhKKFDvmQTayaXTPAVahHenDKe6xnUMhJbKuxc
```

#### Import the Lux Token From C-Chain to X-Chain

Before we run the [example import
script](https://github.com/luxdefi/luxjs/blob/master/examples/avm/buildImportTx-cchain.ts),
we need to make some changes to the code:

1. Change the [Network Setting](#network-setting) to meet Testnet network requirements.
2. Import your Private Key by following the steps listed [here](#private-key).
3. Run the Script!

```zsh
luxjs $ ts-node examples/avm/buildImportTx-cchain.ts
Success! TXID: Sm6Ec2GyguWyG3Li1pARmTpaZ6qLEPuVAHV8QBGL9JWwWAEgM
```

## Mainnet Workflow

The Testnet workflow above can be adapted to Mainnet with the following modifications:

- The correct private key.
- Network setting should be to a Mainnet node, either [a local node on Mainnet](/nodes/configure/luxd-config-flags.md#network-id) or
  [Lux Mainnet API server](/tooling/rpc-providers.md#using-the-public-api-nodes)
  where `api.lux.network` should be used for the `ip`.
- `const networkID: number = 1` based on [this](/tooling/luxjs-guides/manage-x-chain-keys.md#encode-bech32-addresses).
- Set the correct amount to send.
- The correct receiving address.

## Local Workflow

### Start the Local Network

Follow
[this](/tooling/netrunner.md#start-a-new-network-with-five-nodes)
to start a 5-node local network. Make sure that you get one of the port number
by following
[this](/tooling/netrunner.md#get-api-endpoints-of-all-nodes-in-the-cluster).
In this tutorial, we will assume one of the ports is 30301.

### Locate the Example Code and Make Necessary Changes

Most of the code are already set to run it on a local network. Do check the
following values to make sure they are correct.

```js
const ip: string = "localhost";
const port: number = 30301; // Change this to the correct value
const protocol: string = "http";
const networkID: number = 1337;
```

Then run the export and import scripts to transfer tokens across chains.
