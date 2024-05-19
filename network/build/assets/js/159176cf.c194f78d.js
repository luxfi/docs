"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[9719],{57264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(49214),s=t(43540);const a={},i="Deploy a Gnosis Safe on Your Subnet-EVM",r={id:"deprecated/deploy-a-gnosis-safe-on-your-evm",title:"Deploy a Gnosis Safe on Your Subnet-EVM",description:"This document has been deprecated and may contain incorrect/obsolete information.",source:"@site/docs/deprecated/deploy-a-gnosis-safe-on-your-evm.md",sourceDirName:"deprecated",slug:"/deprecated/deploy-a-gnosis-safe-on-your-evm",permalink:"/docs/deprecated/deploy-a-gnosis-safe-on-your-evm",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/deprecated/deploy-a-gnosis-safe-on-your-evm.md",tags:[],version:"current",frontMatter:{}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Custom Network Workflow",id:"custom-network-workflow",level:2},{value:"Setup Network",id:"setup-network",level:3},{value:"Deploy the Safe Contracts",id:"deploy-the-safe-contracts",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-a-gnosis-safe-on-your-subnet-evm",children:"Deploy a Gnosis Safe on Your Subnet-EVM"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This document has been deprecated and may contain incorrect/obsolete information."})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["This article shows how to deploy and interact with a ",(0,o.jsx)(n.a,{href:"https://gnosis-safe.io/",children:"Gnosis Safe"}),"\nprogrammatically on any ",(0,o.jsx)(n.a,{href:"/docs/learn/lux/subnets-overview",children:"Subnet-EVM"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are looking for more information regarding the Gnosis Safe protocol, please check out ",(0,o.jsx)(n.a,{href:"https://docs.gnosis-safe.io/",children:"these\ndeveloper docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"This tutorial assumes that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A Subnet and EVM blockchain has been created. Lux tools allow users to do this on\n",(0,o.jsx)(n.a,{href:"/docs/build/subnet/deploy/mainnet-subnet",children:"Mainnet"}),", ",(0,o.jsx)(n.a,{href:"/docs/build/subnet/deploy/testnet-subnet",children:"Testnet"}),"\nor a ",(0,o.jsx)(n.a,{href:"/docs/build/subnet/deploy/local-subnet",children:"Local network"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Your node is currently validating your target Subnet."}),"\n",(0,o.jsxs)(n.li,{children:["Your wallet has a balance of the Subnet native token (specified under ",(0,o.jsx)(n.em,{children:"alloc"})," in your ",(0,o.jsx)(n.a,{href:"/docs/build/subnet/upgrade/customize-a-subnet#genesis",children:"Genesis File"}),")."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The entirety of this tutorial will require you to work with 3 projects (4 if running locally)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/luxfi/gnosis-subnet",children:"gnosis-Subnet"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/5afe/safe-tasks.git",children:"safe-tasks"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/luxfi/smart-contract-quickstart",children:"smart-contract-quickstart"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/tooling/netrunner",children:"netrunner"})," (Local Workflow)"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"custom-network-workflow",children:"Custom Network Workflow"}),"\n",(0,o.jsx)(n.h3,{id:"setup-network",children:"Setup Network"}),"\n",(0,o.jsxs)(n.p,{children:["In order for the ",(0,o.jsx)(n.code,{children:"gnosis-safe"})," repo to successfully deploy these contracts, ensure that you have ",(0,o.jsx)(n.code,{children:"jq"}),"\nand ",(0,o.jsx)(n.code,{children:"yarn"})," installed."]}),"\n",(0,o.jsxs)(n.p,{children:["On Ubuntu, run ",(0,o.jsx)(n.code,{children:"sudo apt install jq"}),", ",(0,o.jsx)(n.code,{children:"sudo apt install yarn"}),".\nOn Linux, run ",(0,o.jsx)(n.code,{children:"brew install jq"}),", ",(0,o.jsx)(n.code,{children:"brew install yarn"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, clone the library. Change ",(0,o.jsx)(n.code,{children:".env.example"})," to ",(0,o.jsx)(n.code,{children:".env"})," and set the variable,",(0,o.jsx)(n.code,{children:"MNEMONIC"})," to the seed\nphrase of the wallet you intend to deploy the contracts with. Set ",(0,o.jsx)(n.code,{children:"ADDRESS"})," to the public key of the\nsame wallet. Finally, set ",(0,o.jsx)(n.code,{children:"NODE_URL"})," to the URL of your Subnet's RPC."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This address you choose must be funded as the transactions will include a gas fee."})}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:'export MNEMONIC="foo bar foo bar foo bar foo bar foo bar foo bar foo bar foo bar foo bar"\nexport ADDRESS="0xA028036b2aaAED2487654B2B042C2AA9FA5Ef6b8"\nexport NODE_URL="https://api.lux-test.network/ext/bc/C/rpc"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"deploy-the-safe-contracts",children:"Deploy the Safe Contracts"}),"\n",(0,o.jsxs)(n.p,{children:["After setting up the ",(0,o.jsx)(n.code,{children:".env"})," file and installing ",(0,o.jsx)(n.code,{children:"jq"}),", simply run ",(0,o.jsx)(n.code,{children:"./deploy.sh"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'deploying "SimulateTxAccessor" (tx: 0xb2104e7067e35e1d2176ee53f6030bbcef4a12051505daca603d097d87ebd3e2)...: deployed at 0x52C84043CD9c865236f11d9Fc9F56aa003c1f922 with 237301 gas\ndeploying "GnosisSafeProxyFactory" (tx: 0x8faec24dda341141e02d1b898ceefe445b2893b3f600f1f79a5e04e3a91396cd)...: deployed at 0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25 with 865918 gas\ndeploying "DefaultCallbackHandler" (tx: 0xa1a48e8869c71cb10e9ca5f2ce20420c44ce09dc32aa13efbd2ebc3796bcf145)...: deployed at 0x5aa01B3b5877255cE50cc55e8986a7a5fe29C70e with 541390 gas\ndeploying "CompatibilityFallbackHandler" (tx: 0x05d1f9ef7cafd2dbc5d4b9621d15e15f2416e6917371355718e6194d6e39871a)...: deployed at 0x5DB9A7629912EBF95876228C24A848de0bfB43A9 with 1235752 gas\ndeploying "CreateCall" (tx: 0xbb40c1594dc5cdb1a37b8890e2a0e610c0339af157d094d008e8eebcf3eb3275)...: deployed at 0x4Ac1d98D9cEF99EC6546dEd4Bd550b0b287aaD6D with 294075 gas\ndeploying "MultiSend" (tx: 0x075067ca5e4755c31e8dbe5e16cd597f86fb141f45de254d39b050568ef2a3a6)...: deployed at 0xA4cD3b0Eb6E5Ab5d8CE4065BcCD70040ADAB1F00 with 189518 gas\ndeploying "MultiSendCallOnly" (tx: 0xa237e18fb2561c2081341f3621ff559063bd07c6b9f77aefdaf103f976751353)...: deployed at 0xa4DfF80B4a1D748BF28BC4A271eD834689Ea3407 with 141745 gas\ndeploying "SignMessageLib" (tx: 0x1cc1322268015fee470529682dbc9bfc8aa068554df841de824524cdfb8bc2e8)...: deployed at 0xe336d36FacA76840407e6836d26119E1EcE0A2b4 with 261758 gas\ndeploying "GnosisSafeL2" (tx: 0x341ec664d3a5c2c98f1c3f5862651ba82e0c2d12875d69ad3bdf8d1d5e3e074b)...: deployed at 0x95CA0a568236fC7413Cd2b794A7da24422c2BBb6 with 5268965 gas\ndeploying "GnosisSafe" (tx: 0x10dcf8c5f53ae698c77d7f60d6756b4b24f2f8224e14e21658c421e158a84cd4)...: deployed at 0x789a5FDac2b37FCD290fb2924382297A6AE65860 with 5086960 gas\n\u2728  Done in 26.90s.\n'})}),"\n",(0,o.jsx)(n.p,{children:"Not all contracts will deploy, but that is expected behavior. If you see this output, everything worked as expected:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:"Verification status for CompatibilityFallbackHandler: SUCCESS\nVerification status for CreateCall: SUCCESS\nVerification status for DefaultCallbackHandler: SUCCESS\nVerification status for GnosisSafe: SUCCESS\nVerification status for GnosisSafeL2: SUCCESS\nVerification status for GnosisSafeProxyFactory: SUCCESS\nVerification status for MultiSend: FAILURE\nVerification status for MultiSendCallOnly: SUCCESS\nVerification status for SignMessageLib: SUCCESS\nVerification status for SimulateTxAccessor: FAILURE\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Deployment information, including contract addresses can be found in ",(0,o.jsx)(n.code,{children:"safe-contracts/deployments/custom"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Please record your GnosisSafeL2 and GnosisSafeProxyFactory to be able to create a\n",(0,o.jsx)(n.a,{href:"https://github.com/5afe/safe-tasks#gnosis-safe-tasks",children:"Safe"})," on your Subnet."]})}),"\n",(0,o.jsxs)(n.p,{children:["The deployment of the contracts is using a ",(0,o.jsx)(n.a,{href:"https://github.com/safe-global/safe-contracts/blob/v1.3.0/contracts/proxies/GnosisSafeProxyFactory.sol",children:"proxy\nfactory"}),",\ntherefore the address is depending on the bytecode. If the address is the same then the deployment\nbytecode of the contract is also the same (assuming that the target chain follows the EVM\nspecifications set in the Ethereum Yellow Paper)."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},43540:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(48318);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);