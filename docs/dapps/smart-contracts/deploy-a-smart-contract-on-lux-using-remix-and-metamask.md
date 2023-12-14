---
decription: In this doc, learn how to deploy and test a smart contract on Lux using Remix and MetaMask.
---

# Deploy a Smart Contract on Lux Using Remix and MetaMask

## Introduction

![Primary Network](</img/image(21).png>)

Lux's Primary Network is a Subnet that has three chains: P-Chain, X-Chain, and C-Chain. The C-Chain is an instance of the Ethereum Virtual Machine powered by Lux’s Snowman consensus protocol. The [C-Chain RPC](../../apis/luxd/apis/c-chain.md) can do anything a typical Ethereum client can by using the Ethereum-standard RPC calls. The immediate benefits of using the C-Chain rather than Ethereum are all of the benefits of using Lux. These properties that could considerably improve the performance of DApps and the user experience.

Today, we will deploy and test a smart contract on Lux using Remix and MetaMask.

## Step 1: Setting up MetaMask

Log in to MetaMask -&gt; Click the Network drop-down -&gt; Select Custom RPC

![metamask network dropdown](</img/image(60).png>)

#### **Lux Mainnet Settings:**

- **Network Name**: Lux Mainnet C-Chain
- **New RPC URL**: [https://api.lux.network/ext/bc/C/rpc](https://api.lux.network/ext/bc/C/rpc)
- **ChainID**: `43114`
- **Symbol**: `LUX`
- **Explorer**: [https://snowtrace.io/](https://snowtrace.io/)

#### **TESTNET Testnet Settings:**

- **Network Name**: Lux TESTNET C-Chain
- **New RPC URL**: [https://api.lux-test.network/ext/bc/C/rpc](https://api.lux-test.network/ext/bc/C/rpc)
- **ChainID**: `43113`
- **Symbol**: `LUX`
- **Explorer**: [https://testnet.snowtrace.io/](https://testnet.snowtrace.io/)

#### **Local Testnet (Lux Network Runner) Settings:** [(Lux Network Runner Tutorial)](../../subnets/netrunner.md)

- **Network Name**: Lux Local C-Chain
- **New RPC URL**: [http://127.0.0.1:34890/ext/bc/C/rpc](http://127.0.0.1:34890/ext/bc/C/rpc) (Note: the port number should match your local setting which can be different from 34890.)
- **ChainID**: `43112`
- **Symbol**: `LUX`
- **Explorer**: N/A

## Step 2: Funding your C-Chain address

### **Using Lux Wallet**

On the main net, you can use the [Lux Wallet](https://wallet.lux.network/) to transfer funds from the X-Chain to your C-Chain address. The process is simple, as explained in this [tutorial](https://support.lux.network/en/articles/6169872-how-to-make-a-cross-chain-transfer-in-the-lux-wallet). Wallet can be used on test and local networks, too.

### **Using Test Network Faucet**

For funding on the test network, you can use the Test Network Faucet. Navigate to [https://faucet.lux.network/](https://faucet.lux.network/) and paste your C-Chain address. Faucet will automatically know that it needs to send the test LUX to C-Chain. Click the captcha checkbox and select 'Request LUX' button. Your address will receive test LUX in a few seconds.

### Funding on Local Testnet

On a local network, you can easily fund your addresses by following [this](../../quickstart/create-a-local-test-network.md#getting-lux).

## Step 3: Connect MetaMask and deploy a smart contract using Remix

Open [Remix](https://remix.ethereum.org/) -&gt; Select Solidity

![remix file explorer](/img/remix-file-explorer.png)

Load or create the smart contracts that we want to compile and deploy using Remix file explorer.

For this example, we will deploy an ERC20 contract from [OpenZeppelin](https://openzeppelin.com/contracts).

![ERC20 Contract](/img/erc20-contract.png)

Navigate to Deploy Tab -&gt; Open the "ENVIRONMENT" drop-down and select Injected Web3 (make sure MetaMask is loaded)

![Deploy and run transactions](/img/deploy-and-run-transactions.png)

Once we injected the web3-&gt; Go back to the compiler, and compile the selected contract -&gt; Navigate to Deploy Tab

![Solidity compiler](/img/solidity-compiler.png)

Now, the smart contract is compiled, MetaMask is injected, and we are ready to deploy our ERC20. Click "Deploy."

![Deploy erc20](/img/deploy-erc20.png)

Confirm the transaction on the MetaMask pop up.

![Confirm ERC20](/img/confirm-erc20.png)

Our contract is successfully deployed!

![Published metadata](/img/published-metadata.png)

Now, we can expand it by selecting it from the "Deployed Contracts" tab and test it out.

![Interact with contract](/img/interact-with-contract.png)

The contract ABI and Bytecode are available on the compiler tab.

![ABI bytecode](/img/abi-bytecode.png)

If you had any difficulties following this tutorial or simply want to discuss Lux with us, you can join our community at [Discord](https://chat.lux.network/)!
