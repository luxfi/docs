"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5866],{53921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(85893),r=n(11151);const a={},c="Balance.js",o={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/balance.js",title:"Balance.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/balance.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/balance.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/balance.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/balance.js.md",tags:[],version:"current",frontMatter:{}},i={},l=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"balancejs",children:"Balance.js"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\nconst dotenv = require("dotenv");\n\nconst chains = require("../constants/chains");\n/* Get contract addresses from the file we generated by running the deploy script */\nconst {\n\tLUX_TOKEN_ADDRESS,\n\tLUX_BRIDGE_ADDRESS,\n} = require("../variables/contractAddresses");\n/* Get ABIs of the contracts directly from the artifact folder created by hardhat after each compilation */\nconst LUX_TOKEN_ABI =\n\trequire("../artifacts/contracts/Token/LuxToken.sol/LuxToken").abi;\ndotenv.config();\n\n/* \n  Balance script that allows us to check balances on both chains\n  On Lux it prints out the ERC20 balance of the user and the bridge.\n    (We are printing out the balance of the bridge because as users lock tokens bridge\'s balance of the ERC20 will increase)\n  On Subnet it prints out the native token balance of the user\n*/\nmodule.exports = balance = async (from) => {\n\tlet provider;\n\tlet signer;\n\tlet contract;\n\t/* This script takes command line argument to indicate which chain we are using */\n\tif (from === "lux") {\n\t\t/* Initialize; provider, signer and contract */\n\t\tprovider = new ethers.providers.JsonRpcProvider(chains.lux.rpcUrl);\n\t\tsigner = new ethers.Wallet(process.env.BRIDGE_USER_PRIVATE_KEY, provider);\n\t\tcontract = new ethers.Contract(LUX_TOKEN_ADDRESS, LUX_TOKEN_ABI, signer);\n\t\t/* Get ERC20 balance of the user */\n\t\tconst newUserBalance = await contract.balanceOf(signer.address);\n\t\t/* Get ERC20 balance of the bridge */\n\t\tconst newBridgeBalance = await contract.balanceOf(LUX_BRIDGE_ADDRESS);\n\t\tconsole.log(\n\t\t\t"MERC20 balance of the user: ",\n\t\t\tethers.utils.formatEther(newUserBalance)\n\t\t);\n\t\tconsole.log(\n\t\t\t"MERC20 balance of the bridge: ",\n\t\t\tethers.utils.formatEther(newBridgeBalance)\n\t\t);\n\t} else if (from === "subnet") {\n\t\t/* Initialize; provider, signer */\n\t\tprovider = new ethers.providers.JsonRpcProvider(chains.subnet.rpcUrl);\n\t\tsigner = new ethers.Wallet(process.env.BRIDGE_USER_PRIVATE_KEY, provider);\n\t\t/* Get native token balance of the user */\n\t\tconst balance = await signer.getBalance();\n\t\tconsole.log(\n\t\t\t"Native token balance on Subnet: ",\n\t\t\tethers.utils.formatEther(balance)\n\t\t);\n\t} else {\n\t\treturn;\n\t}\n};\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(67294);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);