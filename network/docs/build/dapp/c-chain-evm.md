---
tags: [Build, Dapps]
description: Lux C-Chain is a blockchain that can run all the Solidity smart contracts from Ethereum, but with much greater transaction bandwidth and instant finality from Lux's revolutionary consensus mechanism.
sidebar_label: What to Expect
pagination_label: Building on the C-Chain
---

# Building on the C-Chain

Lux is a [network of networks](learn/lux/lux-platform.md). One of the chains
running on Lux Primary Network is an EVM fork called the C-Chain (contract chain).

C-Chain runs a fork of [`go-ethereum`](https://geth.ethereum.org/docs/rpc/server)
called [`coreth`](https://github.com/luxfi/coreth) that has the networking and
consensus portions replaced with Lux equivalents. What's left is the
Ethereum VM, which runs Solidity smart contracts and manages data structures and
blocks on the chain. As a result, you get a blockchain that can run all the
Solidity smart contracts from Ethereum, but with much greater transaction
bandwidth and instant finality that
[Lux's revolutionary consensus](learn/lux/lux-consensus.md) enables.

Coreth is loaded as a plugin into
[Luxd](https://github.com/luxfi/luxd), the client node
application used to run Lux network. Any Dapp deployed to Lux C-Chain will be running
the same as on Ethereum, just faster and cheaper.
