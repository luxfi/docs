"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3927],{71336:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=n(85893),r=n(11151);const c={},o="InitContracts.js",i={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initContracts.js",title:"InitContracts.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initContracts.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initContracts.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initContracts.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initContracts.js.md",tags:[],version:"current",frontMatter:{}},a={},d=[];function u(t){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"initcontractsjs",children:"InitContracts.js"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\n/* Get ABIs of the contracts directly from the artifact folder created by hardhat after each compilation */\nconst SUBNET_BRIDGE_ABI =\n\trequire("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").abi;\nconst LUX_BRIDGE_ABI =\n\trequire("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").abi;\n/* Currently we did not deploy our contracts but when we deploy them we will store them in the following file */\nconst {\n\tLUX_BRIDGE_ADDRESS,\n\tSUBNET_BRIDGE_ADDRESS,\n} = require("../variables/contractAddresses");\n\nmodule.exports = (signers) => {\n\t/* LuxBridge contract with signer access of bridgeAdmin */\n\tconst luxBridgeAdmin = new ethers.Contract(\n\t\tLUX_BRIDGE_ADDRESS,\n\t\tLUX_BRIDGE_ABI,\n\t\tsigners.lux.admin\n\t);\n\t/* LuxBridge contract with signer access of user */\n\tconst luxBridgeUser = new ethers.Contract(\n\t\tLUX_BRIDGE_ADDRESS,\n\t\tLUX_BRIDGE_ABI,\n\t\tsigners.lux.user\n\t);\n\t/* SubnetBridge contract with signer access of bridgeAdmin */\n\tconst subnetBridgeAdmin = new ethers.Contract(\n\t\tSUBNET_BRIDGE_ADDRESS,\n\t\tSUBNET_BRIDGE_ABI,\n\t\tsigners.subnet.admin\n\t);\n\t/* SubnetBridge contract with signer access of user */\n\tconst subnetBridgeUser = new ethers.Contract(\n\t\tSUBNET_BRIDGE_ADDRESS,\n\t\tSUBNET_BRIDGE_ABI,\n\t\tsigners.subnet.user\n\t);\n\n\treturn {\n\t\tlux: { admin: luxBridgeAdmin, user: luxBridgeUser },\n\t\tsubnet: { admin: subnetBridgeAdmin, user: subnetBridgeUser },\n\t};\n};\n'})})]})}function l(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>o});var s=n(67294);const r={},c=s.createContext(r);function o(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);