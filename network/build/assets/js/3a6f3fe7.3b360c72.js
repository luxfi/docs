"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[6920],{80445:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(49214),a=t(43540);const s={tags:["Build","Dapps"],description:"This tutorial walks through verifying a smart contract on a block explorer using Hardhat after deploying it to Lux C-Chain.",sidebar_label:"Using Hardhat",pagination_label:"Verifying Smart Contracts Using Hardhat and Snowtrace"},i="Verifying Smart Contracts Using Hardhat and Snowtrace",c={id:"build/dapp/smart-contracts/verification/verify-hardhat",title:"Verifying Smart Contracts Using Hardhat and Snowtrace",description:"This tutorial walks through verifying a smart contract on a block explorer using Hardhat after deploying it to Lux C-Chain.",source:"@site/docs/build/dapp/smart-contracts/verification/verify-hardhat.md",sourceDirName:"build/dapp/smart-contracts/verification",slug:"/build/dapp/smart-contracts/verification/verify-hardhat",permalink:"/docs/build/dapp/smart-contracts/verification/verify-hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/dapp/smart-contracts/verification/verify-hardhat.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Dapps",permalink:"/docs/tags/dapps"}],version:"current",frontMatter:{tags:["Build","Dapps"],description:"This tutorial walks through verifying a smart contract on a block explorer using Hardhat after deploying it to Lux C-Chain.",sidebar_label:"Using Hardhat",pagination_label:"Verifying Smart Contracts Using Hardhat and Snowtrace"},sidebar:"build-dapp",previous:{title:"Verify Smart Contracts on the C-Chain Explorer",permalink:"/docs/build/dapp/smart-contracts/verification/verify-smart-contracts"},next:{title:"Using Hardhat with the Lux C-Chain",permalink:"/docs/build/dapp/smart-contracts/toolchains/hardhat"}},o={},l=[{value:"Flatten a Smart Contract using Hardhat",id:"flatten-a-smart-contract-using-hardhat",level:2},{value:"Clean up the flattened Smart Contract",id:"clean-up-the-flattened-smart-contract",level:2},{value:"Verify the Smart Contract using Snowtrace",id:"verify-the-smart-contract-using-snowtrace",level:2},{value:"Verifying with Hardhat-Verify",id:"verifying-with-hardhat-verify",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"verifying-smart-contracts-using-hardhat-and-snowtrace",children:"Verifying Smart Contracts Using Hardhat and Snowtrace"}),"\n",(0,r.jsx)(e.p,{children:"This tutorial assumes that the contract was deployed using Hardhat and that all Hardhat dependencies\nare properly installed."}),"\n",(0,r.jsx)(e.p,{children:"After deploying a smart contract one can verify the smart contract on Snowtrace in three steps:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Flatten the Smart Contract"}),"\n",(0,r.jsx)(e.li,{children:"Clean up the flattened contract"}),"\n",(0,r.jsx)(e.li,{children:"Verify using the Snowtrace GUI"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"flatten-a-smart-contract-using-hardhat",children:"Flatten a Smart Contract using Hardhat"}),"\n",(0,r.jsxs)(e.p,{children:["To flatten the contract run the command:\n",(0,r.jsx)(e.code,{children:"npx hardhat flatten <path-to-contract> >> <flat-contract-name>.sol"})]}),"\n",(0,r.jsx)(e.h2,{id:"clean-up-the-flattened-smart-contract",children:"Clean up the flattened Smart Contract"}),"\n",(0,r.jsx)(e.p,{children:"Some clean-up may be necessary to get the code to compile properly in the Snowtrace Contract Verifier"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Remove all but the top SPDX license."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["If the contract uses multiple SPDX licenses, use both licenses by adding AND:\n",(0,r.jsx)(e.code,{children:"SPDX-License-Identifier: MIT AND BSD-3-Clause"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"verify-the-smart-contract-using-snowtrace",children:"Verify the Smart Contract using Snowtrace"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Search for the contract in Snowtrace"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Click on the contract tab"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["If the contract is unverified you will see something similar to the image below\n",(0,r.jsx)(e.img,{alt:"snowtraceHH-1",src:t(82688).A+"",width:"2773",height:"1595"})]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Click Verify and Publish"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"On the next screen in the dropdown menus select the following"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"Solidity (Single file)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"The compiler version you used to compile the deployed contract"})}),"\n",(0,r.jsxs)(e.li,{children:["The open-source license type (select none if applicable)\n",(0,r.jsx)(e.img,{alt:"snowtraceHH-2",src:t(80251).A+"",width:"2770",height:"1655"})]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Copy and paste the code from the flattened contract into the appropriate box"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"If optimization was used when compiling the contract, make sure to select \u201cYes\u201d in the dropdown\nmenu labeled \u201cOptimization\u201d"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["If optimization was used, expand the bottom box labeled \u201cMisc Settings\u201d and input the number\nof runs\n",(0,r.jsx)(e.img,{alt:"snowtraceHH-3",src:t(58706).A+"",width:"2769",height:"1976"})]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Select Verify and Publish"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"If successful, all Contracts with the same bytecode will be verified"}),"\n",(0,r.jsxs)(e.li,{children:["If unsuccessful, read the error messages provided and make the appropriate changes","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Ensure to check that the compiler version and optimizer runs are the same as when you\ncompiled  the contract prior to deployment"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"verifying-with-hardhat-verify",children:"Verifying with Hardhat-Verify"}),"\n",(0,r.jsxs)(e.p,{children:["This part of the tutorial assumes that the contract was deployed using Hardhat and that all Hardhat\ndependencies are properly installed to include ",(0,r.jsx)(e.code,{children:"'@nomiclabs/hardhat-etherscan'"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["You will need to create a ",(0,r.jsx)(e.code,{children:".env.json"})," with your ",(0,r.jsx)(e.em,{children:"Wallet Seed Phrase"})," and ",(0,r.jsx)(e.em,{children:"Snowtrace API key"})]}),"\n",(0,r.jsxs)(e.p,{children:["You will need to obtain an ",(0,r.jsx)(e.em,{children:"API key"})," ",(0,r.jsx)(e.a,{href:"https://snowtrace.io/myapikey",children:"here"})]}),"\n",(0,r.jsxs)(e.p,{children:["Example ",(0,r.jsx)(e.code,{children:".env.json"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "MNEMONIC": "your-wallet-seed-phrase",\n  "APIKEY": "your-snowtrace-api-key"\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.p,{children:["Below is a sample ",(0,r.jsx)(e.code,{children:"hardhat.config.ts"})," used for deployment and verification (See LN 45: ",(0,r.jsx)(e.code,{children:"etherscan"}),")"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { task } from "hardhat/config"\nimport { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"\nimport { BigNumber } from "ethers"\nimport "@typechain/hardhat"\nimport "@nomiclabs/hardhat-ethers"\nimport "@nomiclabs/hardhat-waffle"\nimport "hardhat-gas-reporter"\nimport "@nomiclabs/hardhat-etherscan"\nimport { MNEMONIC, APIKEY } from "./.env.json"\n\n// When using the hardhat network, you may choose to fork Testnet or Lux Mainnet\n// This will allow you to debug contracts using the hardhat network while keeping the current network state\n// To enable forking, turn one of these booleans on, and then run your tasks/scripts using ``--network hardhat``\n// For more information go to the hardhat guide\n// https://hardhat.org/hardhat-network/\n// https://hardhat.org/guides/mainnet-forking.html\nconst FORK_FUJI = false\nconst FORK_MAINNET = false\nconst forkingData = FORK_FUJI\n  ? {\n      url: "https://api.lux-test.network/ext/bc/C/rpc",\n    }\n  : FORK_MAINNET\n  ? {\n      url: "https://api.lux.network/ext/bc/C/rpc",\n    }\n  : undefined\n\ntask(\n  "accounts",\n  "Prints the list of accounts",\n  async (args, hre): Promise<void> => {\n    const accounts: SignerWithAddress[] = await hre.ethers.getSigners()\n    accounts.forEach((account: SignerWithAddress): void => {\n      console.log(account.address)\n    })\n  }\n)\n\ntask(\n  "balances",\n  "Prints the list of LUX account balances",\n  async (args, hre): Promise<void> => {\n    const accounts: SignerWithAddress[] = await hre.ethers.getSigners()\n    for (const account of accounts) {\n      const balance: BigNumber = await hre.ethers.provider.getBalance(\n        account.address\n      )\n      console.log(`${account.address} has balance ${balance.toString()}`)\n    }\n  }\n)\nexport default {\n  etherscan: {\n    // Your API key for Snowtrace\n    // Obtain one at https://snowtrace.io/\n    apiKey: APIKEY,\n  },\n\n  solidity: {\n    compilers: [\n      {\n        version: "0.8.0",\n      },\n      {\n        version: "0.8.10",\n      },\n    ],\n  },\n  networks: {\n    hardhat: {\n      gasPrice: 225000000000,\n      chainId: 43114, //Only specify a chainId if we are not forking\n      // forking: {\n      //   url: \'https://api.lux.network/ext/bc/C/rpc\',\n      // },\n    },\n    testnet: {\n      url: "https://api.lux-test.network/ext/bc/C/rpc",\n      gasPrice: 225000000000,\n      chainId: 43113,\n      accounts: { mnemonic: MNEMONIC },\n    },\n    mainnet: {\n      url: "https://api.lux.network/ext/bc/C/rpc",\n      gasPrice: 225000000000,\n      chainId: 43114,\n      accounts: { mnemonic: MNEMONIC },\n    },\n  },\n}\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Once the contract is deployed, verify with hardhat verify by running the following:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-zsh",children:"npx hardhat verify <contract address> <arguments> --network <network>\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-zsh",children:"npx hardhat verify 0x3972c87769886C4f1Ff3a8b52bc57738E82192D5 MockNFT Mock ipfs://QmQ2RFEmZaMds8bRjZCTJxo4DusvcBdLTS6XuDbhp5BZjY 100 --network testnet\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"You can also verify contracts programmatically via script"}),"\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import console from "console"\nconst hre = require("hardhat")\n\n// Define the NFT\nconst name = "MockNFT"\nconst symbol = "Mock"\nconst _metadataUri = "ipfs://QmQ2RFEmZaMds8bRjZCTJxo4DusvcBdLTS6XuDbhp5BZjY"\nconst _maxTokens = "100"\n\nasync function main() {\n  await hre.run("verify:verify", {\n    address: "0x3972c87769886C4f1Ff3a8b52bc57738E82192D5",\n    constructorArguments: [name, symbol, _metadataUri, _maxTokens],\n  })\n}\n\nmain()\n  .then(() => process.exit(0))\n  .catch((error) => {\n    console.error(error)\n    process.exit(1)\n  })\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"First create your script, then execute it via hardhat by running the following:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-zsh",children:"npx hardhat run scripts/<scriptname.ts> --network <network>\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-zsh",children:"npx hardhat run scripts/5-verifyNFT.ts --network testnet\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.p,{children:["Verifying via terminal will not allow you to pass an array as an argument, however, you can do this\nwhen verifying via script by including the array in your ",(0,r.jsx)(e.em,{children:"Constructor Arguments"})]}),"\n",(0,r.jsxs)(e.p,{children:["Example: (see LN13 ",(0,r.jsx)(e.code,{children:"_custodians"}),", LN 30 ",(0,r.jsx)(e.code,{children:"_custodians"}),")"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import console from "console"\nconst hre = require("hardhat")\n\n// Define the NFT\nconst name = "MockNFT"\nconst symbol = "Mock"\nconst _metadataUri =\n  "ipfs://QmQn2jepp3jZ3tVxoCisMMF8kSi8c5uPKYxd71xGWG38hV/Example"\nconst _royaltyRecipient = "0xcd3b766ccdd6ae721141f452c550ca635964ce71"\nconst _royaltyValue = "50000000000000000"\nconst _custodians = [\n  "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",\n  "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",\n  "0xdd2fd4581271e230360230f9337d5c0430bf44c0",\n]\nconst _saleLength = "172800"\nconst _claimAddress = "0xcd3b766ccdd6ae721141f452c550ca635964ce71"\n\nasync function main() {\n  await hre.run("verify:verify", {\n    address: "0x08bf160B8e56899723f2E6F9780535241F145470",\n    constructorArguments: [\n      name,\n      symbol,\n      _metadataUri,\n      _royaltyRecipient,\n      _royaltyValue,\n      _custodians,\n      _saleLength,\n      _claimAddress,\n    ],\n  })\n}\n\nmain()\n  .then(() => process.exit(0))\n  .catch((error) => {\n    console.error(error)\n    process.exit(1)\n  })\n'})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},82688:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/snowtraceHH-1-3758db5fe995bf993f701a19d8807222.png"},80251:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/snowtraceHH-2-53d6a0be8a2d7e65bbbf74b1e14cf7c5.png"},58706:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/snowtraceHH-3-58d4b2f985f59b7b21bab3e067467677.png"},43540:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(48318);const a={},s=r.createContext(a);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);