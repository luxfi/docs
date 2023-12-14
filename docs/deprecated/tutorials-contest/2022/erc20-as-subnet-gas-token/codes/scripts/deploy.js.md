# Deploy.js

```javascript
const fs = require("fs");
const { ethers } = require("ethers");
const dotenv = require("dotenv");

/* Get NativeMinter address from constants */
const {
	SUBNET_NATIVE_MINTER_ADDRESS,
} = require("../constants/nativeMinterAddress");

/* Get ABIs of the contracts directly from the artifact folder created by hardhat after each compilation */
/* Get bytecodes of the contracts directly from the artifact folder created by hardhat after each compilation */
const LUX_TOKEN_BYTECODE =
	require("../artifacts/contracts/Token/LuxToken.sol/LuxToken").bytecode;
const LUX_TOKEN_ABI =
	require("../artifacts/contracts/Token/LuxToken.sol/LuxToken").abi;
const LUX_BRIDGE_BYTECODE =
	require("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").bytecode;
const LUX_BRIDGE_ABI =
	require("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").abi;
const SUBNET_BRIDGE_BYTECODE =
	require("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").bytecode;
const SUBNET_BRIDGE_ABI =
	require("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").abi;
const SUBNET_NATIVE_MINTER_ABI =
	require("../artifacts/contracts/Token/INativeMinter.sol/NativeMinterInterface").abi;

/* Get needed util functions */
const initProviders = require("../utils/initProviders");
const initSigners = require("../utils/initSigners");
dotenv.config();

/* 
	Deploy script that allows us to deploy:
		LuxToken, LuxBridge, SubnetBridge contracts
	And set SubnetBridge contract as a `Minter` for the NativeMinter precompile
 */
module.exports = deploy = async () => {
	const providers = initProviders();
	const signers = initSigners(providers);

	/* 
		Deploy LuxToken it gives the total supply of the token to the msg.sender
		(which is the user that will use the bridge in our case) 
	 */
	const LuxTokenFactory = new ethers.ContractFactory(
		LUX_TOKEN_ABI,
		LUX_TOKEN_BYTECODE,
		signers.lux.user
	);
	const luxToken = await LuxTokenFactory.deploy("MyErc20", "MERC20");
	await luxToken.deployTransaction.wait();
	console.log("lux token deployed to: ", luxToken.address);

	/* Deploy LuxBridge it makes msg.sender the admin of the bridge */
	const LuxBridgeFactory = new ethers.ContractFactory(
		LUX_BRIDGE_ABI,
		LUX_BRIDGE_BYTECODE,
		signers.lux.admin
	);
	const luxBridge = await LuxBridgeFactory.deploy(luxToken.address);
	await luxBridge.deployTransaction.wait();
	console.log("lux bridge deployed to: ", luxBridge.address);

	/* Deploy SubnetBridge it makes msg.sender the admin of the bridge */
	const SubnetBridgeFactory = new ethers.ContractFactory(
		SUBNET_BRIDGE_ABI,
		SUBNET_BRIDGE_BYTECODE,
		signers.subnet.admin
	);
	const subnetBridge = await SubnetBridgeFactory.deploy();
	await subnetBridge.deployTransaction.wait();
	console.log("subnet bridge deployed to: ", subnetBridge.address);

	/* Give `Minter` role to SubnetBridge contract so that it can mint native token */
	const nativeMinter = new ethers.Contract(
		SUBNET_NATIVE_MINTER_ADDRESS,
		SUBNET_NATIVE_MINTER_ABI,
		signers.subnet.admin
	);
	const setNativeMinterTx = await nativeMinter.setEnabled(subnetBridge.address);
	await setNativeMinterTx.wait();
	console.log("allowed subnet bridge to mint native coins");

	/* 
		Whenever we run this deploy script, deployed contract addresses will be changed.
		Rather than manually updating them we write the updated address to the `variables/contractAddress.js`
		Inside our code, whenever we try to access the address of a contract we use this file as the source of truth.
	 */
	fs.writeFileSync(
		"variables/contractAddresses.js",
		`module.exports = {
			LUX_TOKEN_ADDRESS: "${luxToken.address}",
           	LUX_BRIDGE_ADDRESS: "${luxBridge.address}",
          	SUBNET_BRIDGE_ADDRESS: "${subnetBridge.address}",
		}`
	);
	console.log(
		"updated contract addresses inside variables/contractAddresses.js"
	);
};
```
