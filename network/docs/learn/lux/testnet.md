---
tags: [Testnet]
description: Testnet is the official testnet for the Lux ecosystem.
keywords: [docs, testnet, testnet, build on lux]
sidebar_label: Testnet
---

# Testnet

The Testnet serves as the official testnet for the Lux ecosystem.

Testnet's infrastructure imitates Lux Mainnet. It's comprised of a
[Primary Network](/learn/lux/lux-platform.md) formed by instances of X, P, and C-Chain,
as well as many test Subnets.

## Why Use Testnet Over Mainnet?

Testnet provides users with a platform to simulate the conditions found in the Mainnet environment. It
enables developers to deploy demo Smart Contracts, allowing them to test and refine their applications
before deploying them on the [Primary Network](/learn/lux/lux-platform.md).

Users interested in experimenting with Lux can receive free testnet LUX, allowing them to
explore the platform without any risk. These testnet tokens have no value in the real world and are
only meant for experimentation purposes within the Testnet test network.

To receive testnet tokens, users can request funds from the
[Lux Faucet](/build/dapp/smart-contracts/get-funds-faucet.md).

## Adding Lux Testnet to EVM-Compatible Wallets

To connect your wallet, such as MetaMask, Coinbase Wallet, or Phantom, to the Lux Testnet, use the following configuration:

### Network Configuration for Lux Testnet

| Setting            | Value                       |
|--------------------|-----------------------------|
| **Network Name**   | Lux Testnet                 |
| **RPC URL**        | `https://api.lux-test.network` |
| **Chain ID**       | `96368`                     |
| **Currency Symbol**| `LUX`                       |
| **Block Explorer** | `https://explore.lux-test.network` |

### Instructions for Adding to Wallets

1. **MetaMask**
   - Open MetaMask and click on the network dropdown at the top.
   - Select **Add Network** or **Add a Custom Network**.
   - Enter the settings from the table above.
   - Save the configuration, and the Lux Testnet will now be accessible.

2. **Coinbase Wallet**
   - Open the Coinbase Wallet app and go to **Settings** > **Networks**.
   - Tap **Add Network**.
   - Enter the Lux Testnet settings from the table.
   - Save the configuration, and the Lux Testnet will be added.

3. **Phantom (if EVM-Compatible)**
   - Navigate to the settings menu within the Phantom app.
   - Select **Networks** > **Add Custom Network**.
   - Input the settings from the table.
   - Confirm and save to enable Lux Testnet access.

Once connected, you can use the Lux Testnet for testing transactions, deploying smart contracts, or exploring decentralized applications in a risk-free environment. Be sure to use test LUX tokens, which can be obtained from the [Lux Testnet Faucet](#) (if available).

## Additional Considerations

- Testnet has its own dedicated [block explorer](https://subnets-test.lux.network/).
- The Public API endpoint for Testnet is not the same as Mainnet. More info is available in the
[Public API Server](/tooling/rpc-providers.md)
documentation.
- While Testnet Network is a valuable resource, developers also
have the option to explore
[Lux Netrunner](/tooling/netrunner.md)
as an alternative means of locally testing their projects, ensuring comprehensive evaluation and
fine-tuning before interacting with the wider network.
