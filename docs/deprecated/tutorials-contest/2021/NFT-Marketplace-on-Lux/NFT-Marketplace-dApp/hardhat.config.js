require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = ""; // Your wallets private key

module.exports = {
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    testnet: {
      url: "https://api.lux-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: "https://api.lux.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [PRIVATE_KEY],
    },
  },
};
