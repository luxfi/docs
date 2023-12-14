---
tags: [Tooling, LuxGo APIs]
description: The LuxGo Postman collection includes all the public API calls that are available on LuxGo instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.
pagination_label: LuxGo Install Script
sidebar_position: 4
---

# Data Visualization

## API calls with Data Visualization

Data visualization is available for a number of API calls whose responses 
are transformed and presented in tabular format for easy reference.

Please check out
[Setting up Postman](../luxd-postman-collection/setup#setup) and
[Making API Calls](../luxd-postman-collection/making-api-calls.md)
beforehand, as this guide assumes that the user has already gone through these steps.

Data visualizations are available for following API calls: 

### C-Chain

* [`eth_baseFee`](../../reference/luxd/c-chain/api#eth_basefee)
* [`eth_blockNumber`](https://www.quicknode.com/docs/ethereum/eth_blockNumber)
* [`eth_chainId`](https://www.quicknode.com/docs/ethereum/eth_chainId)
* [`eth_getAssetBalance`](../../reference/luxd/c-chain/api#eth_getassetbalance)
* [`eth_getBalance`](https://www.quicknode.com/docs/ethereum/eth_getBalance)
* [`eth_getBlockByHash`](https://www.quicknode.com/docs/ethereum/eth_getBlockByHash)
* [`eth_getBlockByNumber`](https://www.quicknode.com/docs/ethereum/eth_getBlockByNumber)
* [`eth_getTransactionByHash`](https://www.quicknode.com/docs/ethereum/eth_getTransactionByHash)
* [`eth_getTransactionReceipt`](https://www.quicknode.com/docs/ethereum/eth_getTransactionReceipt)
* [`lux.getAtomicTx`](../../reference/luxd/c-chain/api#luxgetatomictx)

### P-Chain

* [`platform.getCurrentValidators`](../../reference/luxd/p-chain/api#platformgetcurrentvalidators)

### X-Chain

* [`avm.getAssetDescription`](../../reference/luxd/x-chain/api#avmgetassetdescription)
* [`avm.getBlock`](../../reference/luxd/x-chain/api#avmgetblock)
* [`avm.getBlockByHeight`](../../reference/luxd/x-chain/api#avmgetblockbyheight)
* [`avm.getTx`](../../reference/luxd/x-chain/api#avmgettx)

<iframe src="https://www.youtube.com/embed/2jS5EFWLoGs?modestbranding=1&rel=0&color=white&autoplay=1" allow='autoplay' width="1000" height="800" frameborder="0" allowfullscreen></iframe>



## Data Visualization Features

* The response output is displayed in tabular format, each data category having a
different color.

![Data Visualization Feature](/img/postman/postman-24-visualization-feature.png)

* Unix timestamps are converted to date and time.

![Data Visualization Feature](/img/postman/postman-25-visualization-feature.png)

* Hexadecimal to decimal conversions.

![Data Visualization Feature](/img/postman/postman-26-visualization-feature.png)

* Native token amounts shown as LUX and/or gwei and wei.

![Data Visualization Feature](/img/postman/postman-27-visualization-feature.png)

* The name of the transaction type added besides the transaction type ID.

![Data Visualization Feature](/img/postman/postman-28-visualization-feature.png)

* Percentages added for the amount of gas used. This percent represents what percentage
of gas was used our of the `gasLimit`.

![Data Visualization Feature](/img/postman/postman-29-visualization-feature.png)

* Convert the output for atomic transactions from hexadecimal to user readable.

:::info
Please note that this only works for C-Chain Mainnet, not Fuji. 
:::


![Data Visualization Feature](/img/postman/postman-30-visualization-feature.png)

## How to Visualize Responses

1. After [installing Postman](../luxd-postman-collection/setup#postman-installation)
and importing the [Lux collection](../luxd-postman-collection/setup#collection-import),
choose an API to make the call. 

2. Make the call. 

3. Click on the **Visualize** tab.

4. Now all data from the output is displayed in tabular format.

:::info 
Learn how to make an API call with Postman with the help of this guide.
:::

![Visualize Response](/img/postman/postman-31-visualize-response.png)
![Visualize Response](/img/postman/postman-32-visualize-response.png)

## Examples

### `eth_getTransactionByHash`

<iframe src="https://www.youtube.com/embed/M83WhbXq5R0?modestbranding=1&rel=0&color=white&autoplay=0" allow='autoplay' width="1000" height="800" frameborder="0" allowfullscreen></iframe>

### `avm.getBlock`

<iframe src="https://www.youtube.com/embed/d5E2pHXFInE?modestbranding=1&rel=0&color=white&autoplay=0" allow='autoplay' width="1000" height="800" frameborder="0" allowfullscreen></iframe>

### `platform.getCurrentValidators`

<iframe src="https://www.youtube.com/embed/Pkf84edkw_0?modestbranding=1&rel=0&color=white&autoplay=0" allow='autoplay' width="1000" height="800" frameborder="0" allowfullscreen></iframe>

### `lux.getAtomicTx`

<iframe src="https://www.youtube.com/embed/AYIgdQomHqc?modestbranding=1&rel=0&color=white&autoplay=0" allow='autoplay' width="1000" height="800" frameborder="0" allowfullscreen></iframe>

### `eth_getBalance`

<iframe src="https://www.youtube.com/embed/M3n7cm1DYLE?modestbranding=1&rel=0&color=white&autoplay=0" allow='autoplay' width="1000" height="800" frameborder="0" allowfullscreen></iframe>
