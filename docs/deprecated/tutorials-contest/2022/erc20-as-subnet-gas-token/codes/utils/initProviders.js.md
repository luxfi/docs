# InitProviders.js

```javascript
const { ethers } = require("ethers");
const chains = require("../constants/chains");

module.exports = () => {
	/* Create providers for both chains */
	const luxProvider = new ethers.providers.JsonRpcProvider(chains.lux.rpcUrl);
	const subnetProvider = new ethers.providers.JsonRpcProvider(
		chains.subnet.rpcUrl
	);
	return { lux: luxProvider, subnet: subnetProvider };
};
```
