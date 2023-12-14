# InitContracts.js

```javascript
const { ethers } = require("ethers");
/* Get ABIs of the contracts directly from the artifact folder created by hardhat after each compilation */
const SUBNET_BRIDGE_ABI =
	require("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").abi;
const LUX_BRIDGE_ABI =
	require("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").abi;
/* Currently we did not deploy our contracts but when we deploy them we will store them in the following file */
const {
	LUX_BRIDGE_ADDRESS,
	SUBNET_BRIDGE_ADDRESS,
} = require("../variables/contractAddresses");

module.exports = (signers) => {
	/* LuxBridge contract with signer access of bridgeAdmin */
	const luxBridgeAdmin = new ethers.Contract(
		LUX_BRIDGE_ADDRESS,
		LUX_BRIDGE_ABI,
		signers.lux.admin
	);
	/* LuxBridge contract with signer access of user */
	const luxBridgeUser = new ethers.Contract(
		LUX_BRIDGE_ADDRESS,
		LUX_BRIDGE_ABI,
		signers.lux.user
	);
	/* SubnetBridge contract with signer access of bridgeAdmin */
	const subnetBridgeAdmin = new ethers.Contract(
		SUBNET_BRIDGE_ADDRESS,
		SUBNET_BRIDGE_ABI,
		signers.subnet.admin
	);
	/* SubnetBridge contract with signer access of user */
	const subnetBridgeUser = new ethers.Contract(
		SUBNET_BRIDGE_ADDRESS,
		SUBNET_BRIDGE_ABI,
		signers.subnet.user
	);

	return {
		lux: { admin: luxBridgeAdmin, user: luxBridgeUser },
		subnet: { admin: subnetBridgeAdmin, user: subnetBridgeUser },
	};
};
```
