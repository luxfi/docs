"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2609],{34084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const r={tags:["Build","Dapps"],description:"In this doc, learn how to deploy and test a smart contract on Lux using Remix and Core.",sidebar_label:"Deploy with Remix IDE",pagination_label:"Deploy a Smart Contract on Lux Using Remix and Core"},a="Deploy a Smart Contract on Lux Using Remix and Core",o={id:"build/dapp/smart-contracts/remix-deploy",title:"Deploy a Smart Contract on Lux Using Remix and Core",description:"In this doc, learn how to deploy and test a smart contract on Lux using Remix and Core.",source:"@site/docs/build/dapp/smart-contracts/remix-deploy.md",sourceDirName:"build/dapp/smart-contracts",slug:"/build/dapp/smart-contracts/remix-deploy",permalink:"/build/dapp/smart-contracts/remix-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/dapp/smart-contracts/remix-deploy.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",frontMatter:{tags:["Build","Dapps"],description:"In this doc, learn how to deploy and test a smart contract on Lux using Remix and Core.",sidebar_label:"Deploy with Remix IDE",pagination_label:"Deploy a Smart Contract on Lux Using Remix and Core"},sidebar:"build-dapp",previous:{title:"Get Test Funds from the Testnet Faucet",permalink:"/build/dapp/smart-contracts/get-funds-faucet"},next:{title:"Create an ERC-20 Token Using Solidity",permalink:"/build/dapp/smart-contracts/erc-20"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Setting up Core",id:"step-1-setting-up-core",level:2},{value:"Step 2: Funding Your C-Chain Address",id:"step-2-funding-your-c-chain-address",level:2},{value:"<strong>Using Core web</strong>",id:"using-core-web",level:3},{value:"<strong>Using Test Network Faucet</strong>",id:"using-test-network-faucet",level:3},{value:"Funding on Local Testnet",id:"funding-on-local-testnet",level:3},{value:"Step 3: Connect Core and Deploy a Smart Contract Using Remix",id:"step-3-connect-core-and-deploy-a-smart-contract-using-remix",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"deploy-a-smart-contract-on-lux-using-remix-and-core",children:"Deploy a Smart Contract on Lux Using Remix and Core"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Lux's Primary Network is a Subnet that has three chains: P-Chain, X-Chain,\nand C-Chain. The C-Chain is an instance of the Ethereum Virtual Machine powered\nby Lux\u2019s Snowman consensus protocol. The\n",(0,s.jsx)(t.a,{href:"/reference/luxd/c-chain/api",children:"C-Chain RPC"})," can do anything a typical Ethereum\nclient can by using the Ethereum-standard RPC calls. The immediate benefits of\nusing the C-Chain rather than Ethereum are all of the benefits of using\nLux. These properties that could considerably improve the performance of\nDapps and the user experience."]}),"\n",(0,s.jsx)(t.p,{children:"Today, we will deploy and test a smart contract on Lux using Remix and Core Wallet."}),"\n",(0,s.jsx)(t.h2,{id:"step-1-setting-up-core",children:"Step 1: Setting up Core"}),"\n",(0,s.jsxs)(t.p,{children:["If you don't already have a Core wallet, follow this\n",(0,s.jsx)(t.a,{href:"https://support.lux.network/en/articles/6100129-core-extension-how-do-i-create-a-new-wallet",children:"guide"}),"\nto create a new wallet."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to use the ",(0,s.jsx)(t.strong,{children:"Lux C-Chain"}),", it can be selected from the networks list."]}),"\n",(0,s.jsxs)(t.p,{children:["To switch to the ",(0,s.jsx)(t.strong,{children:"Testnet test network"}),", go to Settings, select Advanced, and then turn Testnet Mode on."]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"testnet",src:n(31049).Z+"",width:"400",height:"650"})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Local Testnet (Lux Netrunner) Settings:"})," ",(0,s.jsx)(t.a,{href:"/tooling/netrunner",children:"(Lux Netrunner Tutorial)"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Network Name"}),": Lux Local C-Chain"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"New RPC URL"}),":\n",(0,s.jsx)(t.a,{href:"http://127.0.0.1:34890/ext/bc/C/rpc",children:"http://127.0.0.1:34890/ext/bc/C/rpc"}),"\n(Note: the port number should match your local setting which can be different\nfrom 34890.)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ChainID"}),": ",(0,s.jsx)(t.code,{children:"43112"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Symbol"}),": ",(0,s.jsx)(t.code,{children:"LUX"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Explorer"}),": N/A"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-funding-your-c-chain-address",children:"Step 2: Funding Your C-Chain Address"}),"\n",(0,s.jsx)(t.h3,{id:"using-core-web",children:(0,s.jsx)(t.strong,{children:"Using Core web"})}),"\n",(0,s.jsxs)(t.p,{children:["On the Mainnet, you can use ",(0,s.jsx)(t.a,{href:"https://core.app/",children:"Core\nweb"})," to transfer funds from the X-Chain to your\nC-Chain address. The process is simple, as explained in this\n",(0,s.jsx)(t.a,{href:"https://support.lux.network/en/articles/8133713-core-web-how-do-i-make-cross-chain-transfers-in-core-stake",children:"tutorial"}),".\nPlease note that you will need ",(0,s.jsx)(t.a,{href:"https://join.core.app/extension",children:"Core wallet"})," connected to Core web for making cross-chain transfers.\nCore wallet can be used on test and local networks, too.\nThis wallet is available for ",(0,s.jsx)(t.a,{href:"https://support.lux.network/en/articles/6115608-core-mobile-where-can-i-download-core-mobile-to-my-phone",children:"mobile"})," too."]}),"\n",(0,s.jsx)(t.h3,{id:"using-test-network-faucet",children:(0,s.jsx)(t.strong,{children:"Using Test Network Faucet"})}),"\n",(0,s.jsxs)(t.p,{children:["For funding on the test network, you can use the Test Network Faucet. Navigate\nto ",(0,s.jsx)(t.a,{href:"https://faucet.lux.network/",children:"https://faucet.lux.network/"})," and paste your\nC-Chain address. Faucet will automatically know that it needs to send the test\nLUX to C-Chain. Click the CAPTCHA checkbox and select 'Request LUX' button.\nYour address will receive test LUX in a few seconds."]}),"\n",(0,s.jsx)(t.h3,{id:"funding-on-local-testnet",children:"Funding on Local Testnet"}),"\n",(0,s.jsxs)(t.p,{children:["On a local network, you can easily fund your addresses by following\n",(0,s.jsx)(t.a,{href:"/build/subnet/hello-subnet#importing-the-test-private-key",children:"this"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"step-3-connect-core-and-deploy-a-smart-contract-using-remix",children:"Step 3: Connect Core and Deploy a Smart Contract Using Remix"}),"\n",(0,s.jsxs)(t.p,{children:["Open ",(0,s.jsx)(t.a,{href:"https://remix.ethereum.org/",children:"Remix"})," -> Select Solidity"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Remix file explorer",src:n(16935).Z+"",width:"2708",height:"1514"})}),"\n",(0,s.jsx)(t.p,{children:"Load or create the smart contracts that we want to compile and deploy using Remix file explorer."}),"\n",(0,s.jsxs)(t.p,{children:["For this example, we will deploy a simple Hello World contract from ",(0,s.jsx)(t.a,{href:"https://blog.chain.link/how-to-create-a-hello-world-smart-contract-with-solidity/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hello world contract",src:n(49621).Z+"",width:"2246",height:"860"})}),"\n",(0,s.jsx)(t.p,{children:"Select the Solidity compiler tab and compile the contract."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Compile contract",src:n(61565).Z+"",width:"1982",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:'Navigate to Deploy & Run transactions Tab -> Open the "ENVIRONMENT" drop-down and select\nInjected Provider (make sure Core is loaded).'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Deploy and run transactions",src:n(63496).Z+"",width:"2140",height:"1194"})}),"\n",(0,s.jsx)(t.p,{children:"A pop up will ask which wallet to use. Select Core."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Choose wallet",src:n(94284).Z+"",width:"400",height:"545"})})}),"\n",(0,s.jsx)(t.p,{children:'Now, the smart contract is compiled, Core is injected, and we are ready to\ndeploy our Hello world contract. Click "Deploy."'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Deploy hello world",src:n(7201).Z+"",width:"2118",height:"896"})}),"\n",(0,s.jsx)(t.p,{children:"Confirm the transaction on the Core pop up."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Confirm TX",src:n(22399).Z+"",width:"400",height:"672"})})}),"\n",(0,s.jsx)(t.p,{children:"Our contract is successfully deployed!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Deployed contract",src:n(36078).Z+"",width:"3324",height:"1848"})}),"\n",(0,s.jsx)(t.p,{children:'Now, we can expand it by selecting it from the "Deployed Contracts" tab and test it out.'}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Interact with contract",src:n(12097).Z+"",width:"612",height:"596"})})}),"\n",(0,s.jsx)(t.p,{children:"The contract ABI and Bytecode are available on the Solidity compiler tab."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ABI and bytecode",src:n(69262).Z+"",width:"450",height:"854"})})}),"\n",(0,s.jsxs)(t.p,{children:["If you had any difficulties following this tutorial or simply want to discuss\nLux with us, you can join our community at ",(0,s.jsx)(t.a,{href:"https://chat.lux.network/",children:"Discord"}),"!"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},69262:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ABI-bytecode-1f7e7644f0e9ed8279c3a795848c4b04.png"},22399:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/approve-86eacf6f4826fb96390c79046f07bac6.png"},61565:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/compile-415795feac8885d923000f06a6139b23.png"},49621:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/contract-504b1b8f86d67e9fa37ae1280b0a4a4e.png"},7201:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/deploy-4f48dbf4e66e76d8960edb2eb02dedaf.png"},36078:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/deployed-64d58b56da162462d840b528cde4224a.png"},12097:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interact-c7781cbb04191a87583d3219e5c2ae37.png"},63496:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/provider-823d0fdf60d96501a1c8f5547244504c.png"},16935:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/remix-2065643e23b2aa821f1f8084cddaa25f.png"},31049:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/testnet-02a0a49c1add441f749e25c17d8455c2.png"},94284:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/wallet-f89fa216975ed635a00d4d980f28b923.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);