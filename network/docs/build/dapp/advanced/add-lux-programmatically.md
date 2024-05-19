---
tags: [Build, Dapps]
description: This document shows how to integrate Lux Network with your Dapp, either by Core or MetaMask.
sidebar_label: Add Network Programmatically
pagination_label: Add Lux Network Programmatically
sidebar_position: 2
---

# Add Lux Network Programmatically

This document shows how to integrate Lux Network with your Dapp, either by Core or MetaMask.

## Core

Powered by Lux,
[Core](https://core.app/en/)
is an all-in-one operating system bringing together Lux apps, Subnets,
bridges, and NFTs in one seamless, high-performance browser experience. Putting
in another way, Core is more than a wallet. It is a curated web3 operating
system combining Wallet, Explorer, Bridge, Subnets, dApps, and more.

Getting a Dapp ready to connect to Core is made simple with pre-built tools from the Core Team.

First download and install the Core browser extension from [here](https://chrome.google.com/webstore/detail/core/agoakfejjabomempkjlepdflaleeobhb).

[dapp-sdks](https://github.com/luxfi/dapp-sdks) contains
an example of how to connect via @web3-react/core to the Core extension
specifically.

```sh
git clone https://github.com/luxfi/dapp-sdks.git
cd dapp-sdks
yarn bootstrap
```

:::info
The repository cloning method used is HTTPS, but SSH can be used too:

`git clone git@github.com:luxfi/dapp-sdks.git`

You can find more about SSH and how to use it
[here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).
:::

Then check out [this sample project under `packages/connector-example`](https://github.com/luxfi/dapp-sdks/tree/alpha-release/packages/connector-example#readme)

```sh
cd packages/connector-example
npm start
```

If everything works as expected, you should be able to load
[http://localhost:3000/] on your browser, click on the "Connect Lux"
button on the page as below:

![connect core](/img/connect-core.jpeg)

Check out the
[README](https://github.com/luxfi/dapp-sdks/tree/alpha-release/packages/connector-example#readme)
to see details how this works and use it to fit your needs.

This [Google
Drive](https://drive.google.com/drive/folders/1pQ98mIs65ET9JBGThzAAlGKv85BuQCAu?usp=sharing)
has the assets needed to create a Connect with Core button.

## MetaMask

Adding new networks to MetaMask is not a trivial task for people that are not
technically savvy, and it can be error prone. To help easier onboarding of users
to your application it is useful to simplify that process as much as possible.
This tutorial will show how to build a simple button in your front-end
application that will automate the process of adding the Lux network to
MetaMask.

### EIP-3035 & MetaMask

[EIP-3035](https://eips.ethereum.org/EIPS/eip-3085) is an [Ethereum Improvement
Proposal](https://eips.ethereum.org/) that defines an RPC method for adding
Ethereum-compatible chains to wallet applications.

Since March 2021 MetaMask has implemented that EIP as part of their MetaMask [Custom Networks API](https://consensys.net/blog/metamask/connect-users-to-layer-2-networks-with-the-metamask-custom-networks-api/).

Let's see how it works.

### Data Structures

To add the Lux network to MetaMask, we need to prepare the data structures
that will be contain all the necessary data.

Main network data:

```javascript
export const LUX_MAINNET_PARAMS = {
  chainId: "0xA86A",
  chainName: "Lux Mainnet C-Chain",
  nativeCurrency: {
    name: "Lux",
    symbol: "LUX",
    decimals: 18,
  },
  rpcUrls: ["https://api.lux.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"],
};
```

Test network data:

```javascript
export const LUX_TESTNET_PARAMS = {
  chainId: "0xA869",
  chainName: "Lux Testnet C-Chain",
  nativeCurrency: {
    name: "Lux",
    symbol: "LUX",
    decimals: 18,
  },
  rpcUrls: ["https://api.lux-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
};
```

### Adding the Network

To add the network to MetaMask, we need to call the `wallet_addEthereumChain`
method, exposed by the web3 provider.

```javascript
function addLuxNetwork() {
  injected.getProvider().then((provider) => {
    provider
      .request({
        method: "wallet_addEthereumChain",
        params: [LUX_MAINNET_PARAMS],
      })
      .catch((error: any) => {
        console.log(error);
      });
  });
}
```

Where `injected` is initialized as a `web3-react/injected-connector` used to
interface with MetaMask APIs. Usage for other popular web frameworks is similar.
Replace `LUX_MAINNET_PARAMS` with `LUX_TESTNET_PARAMS` if you want
to add the test network.

Typical usage pattern would be to expose a button calling that method if you get
`Wrong Network` or `Error connecting` errors when attempting to establish a
connection to MetaMask.

### User Experience

When users first come to your dapp's website they need to approve connection to
MetaMask. After they do that, if you don't detect successful web3 network
connection, you can present them with a dialog asking them to confirm switch to
a new network:

![wrong network](/img/add-to-metamask-01-wrong-network.png)

If they press the button, they are shown a dialog from MetaMask asking for approval to add the new network:

![add a network](/img/add-to-metamask-02-add-network.png)

If they approve, your app will be connected to the Lux network. Very easy,
no need for any data entry, no chance of wrong data entry. And that's it, users
are ready to interact with your dapp!

## Conclusion

Dapps users are often not very technically sophisticated and onboarding them
needs to be as seamless and easy as possible. Manually adding a new network is a
hurdle than a certain percentage of your potential users will not be able to
clear. Removing that requirement is a simple step that will enhance their
experience and enable more users to get to actually use your dapp.

If you have any questions, problems, or ideas on how to improve, or simply want
to join our developer community, you can contact us on our
[Discord](https://chat.lux.network/) server.
