"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[6099],{98271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(49214),o=n(43540);const i={tags:["Build","Dapps"],description:"Launching any new or existing Solidity decentralized app on Lux C-Chain fosters the same developer experience as Ethereum, but benefits from the security, speed, and interoperability of the Lux Network.",sidebar_label:"Thirdweb",pagination_label:"Using thirdweb with the Lux C-Chain",sidebar_position:1,keywords:["make a smartcontract","deploy a smartcontract","smartcontract development","thirdweb sdk","use thirdweb to deploy a smartcontract"]},s="Deploy a Smart Contract on Lux Using thirdweb",a={id:"build/dapp/smart-contracts/toolchains/thirdweb",title:"Deploy a Smart Contract on Lux Using thirdweb",description:"Launching any new or existing Solidity decentralized app on Lux C-Chain fosters the same developer experience as Ethereum, but benefits from the security, speed, and interoperability of the Lux Network.",source:"@site/docs/build/dapp/smart-contracts/toolchains/thirdweb.md",sourceDirName:"build/dapp/smart-contracts/toolchains",slug:"/build/dapp/smart-contracts/toolchains/thirdweb",permalink:"/docs/build/dapp/smart-contracts/toolchains/thirdweb",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/dapp/smart-contracts/toolchains/thirdweb.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Dapps",permalink:"/docs/tags/dapps"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Build","Dapps"],description:"Launching any new or existing Solidity decentralized app on Lux C-Chain fosters the same developer experience as Ethereum, but benefits from the security, speed, and interoperability of the Lux Network.",sidebar_label:"Thirdweb",pagination_label:"Using thirdweb with the Lux C-Chain",sidebar_position:1,keywords:["make a smartcontract","deploy a smartcontract","smartcontract development","thirdweb sdk","use thirdweb to deploy a smartcontract"]},sidebar:"build-dapp",previous:{title:"Using Hardhat with the Lux C-Chain",permalink:"/docs/build/dapp/smart-contracts/toolchains/hardhat"},next:{title:"Using Foundry with the Lux C-Chain",permalink:"/docs/build/dapp/smart-contracts/toolchains/foundry"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Creating Contracts",id:"creating-contracts",level:2},{value:"Deploying Contracts",id:"deploying-contracts",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deploy-a-smart-contract-on-lux-using-thirdweb",children:"Deploy a Smart Contract on Lux Using thirdweb"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial walks through creating and deploying a smart contract using thirdweb's command line\ninterface."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, you can deploy a prebuilt contract for NFTs, tokens, or marketplace directly from the\nthirdweb Explore page:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Go to the thirdweb Explore page: ",(0,r.jsx)(t.a,{href:"https://thirdweb.com/explore",children:"https://thirdweb.com/explore"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Choose the type of contract you want to deploy from the available options: NFTs, tokens,\nmarketplace, and more."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Follow the on-screen prompts to configure and deploy your contract."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["For more information on different contracts available on Explore, check out ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/pre-built-contracts",children:"thirdweb\u2019s documentation."})]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"creating-contracts",children:"Creating Contracts"}),"\n",(0,r.jsx)(t.p,{children:"To create a new smart contract using thirdweb CLI, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In your CLI run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx thirdweb create contract\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Input your preferences for the command line prompts:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Give your project a name."}),"\n",(0,r.jsx)(t.li,{children:"Choose your preferred framework: Hardhat or Foundry."}),"\n",(0,r.jsx)(t.li,{children:"Name your smart contract."}),"\n",(0,r.jsxs)(t.li,{children:["Choose the type of base contract: Empty, ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc20base",children:"ERC20"}),",\n",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc721base",children:"ERC721"}),", or ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc1155base",children:"ERC1155"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Add any desired ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/extensions",children:"extensions"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Once created, navigate to your project\u2019s directory and open in your preferred code editor."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"contracts"})," folder, you will find the smart contract written in Solidity."]}),"\n",(0,r.jsxs)(t.p,{children:["The following is code for an ERC721Base contract without specified extensions. It implements all\nof the logic inside the ",(0,r.jsx)(t.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/base/ERC721Base.sol",children:(0,r.jsx)(t.code,{children:"ERC721Base.sol"})}),"\ncontract; which implements the\n",(0,r.jsx)(t.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/eip/ERC721A.sol",children:(0,r.jsx)(t.code,{children:"ERC721A"})})," standard."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@thirdweb-dev/contracts/base/ERC721Base.sol";\n\ncontract Contract is ERC721Base {\n    constructor(\n        string memory _name,\n        string memory _symbol,\n        address _royaltyRecipient,\n        uint128 _royaltyBps\n    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This contract inherits the functionality of ERC721Base through the following steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Importing the ERC721Base contract."}),"\n",(0,r.jsx)(t.li,{children:"Inheriting the contract by declaring that our contract is an ERC721Base contract."}),"\n",(0,r.jsx)(t.li,{children:"Implementing any required methods, such as the constructor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"After modifying your contract with your desired custom logic, you may deploy it to Lux\nwith the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx thirdweb deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"deploying-contracts",children:"Deploying Contracts"}),"\n",(0,r.jsx)(t.p,{children:"Deploy allows you to deploy a smart contract to any EVM compatible network without configuring RPC\nURLs, exposing your private keys, writing scripts, and other additional setup such as verifying your\ncontract."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"To deploy your smart contract using deploy, navigate to the root directory of your project and\nexecute the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx thirdweb deploy\n"})}),"\n",(0,r.jsx)(t.p,{children:"Executing this command will trigger the following actions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Compiling all the contracts in the current directory."}),"\n",(0,r.jsx)(t.li,{children:"Providing the option to select which contracts you wish to deploy."}),"\n",(0,r.jsx)(t.li,{children:"Uploading your contract source code (ABI) to IPFS."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When it is completed, it will open a dashboard interface to finish filling out the parameters."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_name"}),": contract name"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_symbol"}),': symbol or "ticker"']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_royaltyRecipient"}),": wallet address to receive royalties from secondary sales"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_royaltyBps"}),": basis points (bps) that will be given to the royalty recipient for each\nsecondary sale. For example: 500 = 5%."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Select "Lux" as the network.'}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Manage additional settings on your contract\u2019s dashboard as needed such as uploading NFTs,\nconfiguring permissions, and more."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For additional information on deploying smart contracts with thirdweb, please reference ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/deploy",children:"thirdweb\u2019s documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have any further questions or encounter any issues during the process, please reach out to\nthirdweb support at ",(0,r.jsx)(t.a,{href:"http://support.thirdweb.com/",children:"support.thirdweb.com"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43540:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(48318);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);