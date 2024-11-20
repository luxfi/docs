---
tags: [Primary Network, P-Chain, X-Chain, C-Chain, Platform Chain, Contract Chain]
description: Lux features 3 built-in blockchains which includes Exchange Chain (X-Chain), Platform Chain (P-Chain), and Contract Chain (C-Chain). More info here.
keywords: [docs, documentation ( needs checking ), lux, primary network, c-chain, x-chain, p-chain, platform chain, contract chain]
sidebar_label: The Primary Network
---

# The Primary Network

Lux is a heterogeneous network of blockchains. As opposed to homogeneous networks, where
all applications reside in the same chain, heterogeneous networks allow separate chains to be
created for different applications.

The Primary Network is a special [Subnet](subnets-overview.md) that runs three blockchains:

- The Contract Chain [(C-Chain)](lux-platform.md#c-chain)
- The Platform Chain [(P-Chain)](lux-platform.md#p-chain)
- The Exchange Chain [(X-Chain)](lux-platform.md#x-chain)

:::note
[Lux Mainnet](/learn/lux/mainnet.md) is comprised of the Primary Network
and all deployed Subnets.
:::

A node can become a validator for the Primary Network by staking at least **2,000 LUX**.

![Primary network](/img/primary-network.png)

## The Chains

All validators of the Primary Network are required to validate and secure the following:

### C-Chain

The **C-Chain** is an implementation of the Ethereum Virtual Machine (EVM).
The [C-Chain’s API](/reference/luxd/c-chain/api.md) supports Geth's API and supports the
deployment and execution of smart contracts written in Solidity.

The C-Chain is an instance of the
[Coreth](https://github.com/luxfi/coreth) Virtual Machine.

### P-Chain

The **P-Chain** is responsible for all validator and Subnet-level operations.
The [P-Chain API](/reference/luxd/p-chain/api.md) supports the creation of new
blockchains and Subnets, the addition of validators to Subnets, staking operations, and other
platform-level operations.

The P-Chain is an instance of the Platform Virtual Machine.

### X-Chain

The **X-Chain** is responsible for operations on digital smart assets known as **Lux Native
Tokens**. A smart asset is a representation of a real-world resource (for example, equity, or a
bond) with sets of rules that govern its behavior, like "can’t be traded until tomorrow."
The [X-Chain API](/reference/luxd/x-chain/api.md) supports the creation and trade of
Lux Native Tokens.

One asset traded on the X-Chain is LUX. When you issue a transaction to a blockchain on Lux,
you pay a fee denominated in LUX.

The X-Chain is an instance of the Lux Virtual Machine (AVM).
