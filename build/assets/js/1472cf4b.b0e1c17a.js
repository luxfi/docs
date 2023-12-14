"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5564],{41540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(85893),o=n(11151);const r={tags:["Build","Dapps"],description:"This document shows how to integrate Lux Network with your Dapp, either by Core or MetaMask.",sidebar_label:"Add Network Programmatically",pagination_label:"Add Lux Network Programmatically",sidebar_position:2},s="Add Lux Network Programmatically",i={id:"build/dapp/advanced/add-lux-programmatically",title:"Add Lux Network Programmatically",description:"This document shows how to integrate Lux Network with your Dapp, either by Core or MetaMask.",source:"@site/docs/build/dapp/advanced/add-lux-programmatically.md",sourceDirName:"build/dapp/advanced",slug:"/build/dapp/advanced/add-lux-programmatically",permalink:"/build/dapp/advanced/add-lux-programmatically",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/dapp/advanced/add-lux-programmatically.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Build","Dapps"],description:"This document shows how to integrate Lux Network with your Dapp, either by Core or MetaMask.",sidebar_label:"Add Network Programmatically",pagination_label:"Add Lux Network Programmatically",sidebar_position:2},sidebar:"build-dapp",previous:{title:"Sending Transactions with Dynamic Fees using JavaScript",permalink:"/build/dapp/advanced/sending-transactions-with-dynamic-fees-using-javascript"},next:{title:"C-Chain Exchange Integration",permalink:"/build/dapp/advanced/integrate-exchange"}},d={},c=[{value:"Core",id:"core",level:2},{value:"MetaMask",id:"metamask",level:2},{value:"EIP-3035 &amp; MetaMask",id:"eip-3035--metamask",level:3},{value:"Data Structures",id:"data-structures",level:3},{value:"Adding the Network",id:"adding-the-network",level:3},{value:"User Experience",id:"user-experience",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"add-lux-network-programmatically",children:"Add Lux Network Programmatically"}),"\n",(0,a.jsx)(t.p,{children:"This document shows how to integrate Lux Network with your Dapp, either by Core or MetaMask."}),"\n",(0,a.jsx)(t.h2,{id:"core",children:"Core"}),"\n",(0,a.jsxs)(t.p,{children:["Powered by Lux,\n",(0,a.jsx)(t.a,{href:"https://core.app/en/",children:"Core"}),"\nis an all-in-one operating system bringing together Lux apps, Subnets,\nbridges, and NFTs in one seamless, high-performance browser experience. Putting\nin another way, Core is more than a wallet. It is a curated web3 operating\nsystem combining Wallet, Explorer, Bridge, Subnets, dApps, and more."]}),"\n",(0,a.jsx)(t.p,{children:"Getting a Dapp ready to connect to Core is made simple with pre-built tools from the Core Team."}),"\n",(0,a.jsxs)(t.p,{children:["First download and install the Core browser extension from ",(0,a.jsx)(t.a,{href:"https://chrome.google.com/webstore/detail/core/agoakfejjabomempkjlepdflaleeobhb",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/luxdefi/dapp-sdks",children:"dapp-sdks"})," contains\nan example of how to connect via @web3-react/core to the Core extension\nspecifically."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/luxdefi/dapp-sdks.git\ncd dapp-sdks\nyarn bootstrap\n"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"The repository cloning method used is HTTPS, but SSH can be used too:"}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"git clone git@github.com:luxdefi/dapp-sdks.git"})}),(0,a.jsxs)(t.p,{children:["You can find more about SSH and how to use it\n",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(t.p,{children:["Then check out ",(0,a.jsxs)(t.a,{href:"https://github.com/luxdefi/dapp-sdks/tree/alpha-release/packages/connector-example#readme",children:["this sample project under ",(0,a.jsx)(t.code,{children:"packages/connector-example"})]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"cd packages/connector-example\nnpm start\n"})}),"\n",(0,a.jsx)(t.p,{children:'If everything works as expected, you should be able to load\n[http://localhost:3000/] on your browser, click on the "Connect Lux"\nbutton on the page as below:'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"connect core",src:n(35768).Z+"",width:"397",height:"640"})}),"\n",(0,a.jsxs)(t.p,{children:["Check out the\n",(0,a.jsx)(t.a,{href:"https://github.com/luxdefi/dapp-sdks/tree/alpha-release/packages/connector-example#readme",children:"README"}),"\nto see details how this works and use it to fit your needs."]}),"\n",(0,a.jsxs)(t.p,{children:["This ",(0,a.jsx)(t.a,{href:"https://drive.google.com/drive/folders/1pQ98mIs65ET9JBGThzAAlGKv85BuQCAu?usp=sharing",children:"Google\nDrive"}),"\nhas the assets needed to create a Connect with Core button."]}),"\n",(0,a.jsx)(t.h2,{id:"metamask",children:"MetaMask"}),"\n",(0,a.jsx)(t.p,{children:"Adding new networks to MetaMask is not a trivial task for people that are not\ntechnically savvy, and it can be error prone. To help easier onboarding of users\nto your application it is useful to simplify that process as much as possible.\nThis tutorial will show how to build a simple button in your front-end\napplication that will automate the process of adding the Lux network to\nMetaMask."}),"\n",(0,a.jsx)(t.h3,{id:"eip-3035--metamask",children:"EIP-3035 & MetaMask"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-3085",children:"EIP-3035"})," is an ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/",children:"Ethereum Improvement\nProposal"})," that defines an RPC method for adding\nEthereum-compatible chains to wallet applications."]}),"\n",(0,a.jsxs)(t.p,{children:["Since March 2021 MetaMask has implemented that EIP as part of their MetaMask ",(0,a.jsx)(t.a,{href:"https://consensys.net/blog/metamask/connect-users-to-layer-2-networks-with-the-metamask-custom-networks-api/",children:"Custom Networks API"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Let's see how it works."}),"\n",(0,a.jsx)(t.h3,{id:"data-structures",children:"Data Structures"}),"\n",(0,a.jsx)(t.p,{children:"To add the Lux network to MetaMask, we need to prepare the data structures\nthat will be contain all the necessary data."}),"\n",(0,a.jsx)(t.p,{children:"Main network data:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'export const LUX_MAINNET_PARAMS = {\n  chainId: "0xA86A",\n  chainName: "Lux Mainnet C-Chain",\n  nativeCurrency: {\n    name: "Lux",\n    symbol: "LUX",\n    decimals: 18,\n  },\n  rpcUrls: ["https://api.lux.network/ext/bc/C/rpc"],\n  blockExplorerUrls: ["https://snowtrace.io/"],\n};\n'})}),"\n",(0,a.jsx)(t.p,{children:"Test network data:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'export const LUX_TESTNET_PARAMS = {\n  chainId: "0xA869",\n  chainName: "Lux Testnet C-Chain",\n  nativeCurrency: {\n    name: "Lux",\n    symbol: "LUX",\n    decimals: 18,\n  },\n  rpcUrls: ["https://api.lux-test.network/ext/bc/C/rpc"],\n  blockExplorerUrls: ["https://testnet.snowtrace.io/"],\n};\n'})}),"\n",(0,a.jsx)(t.h3,{id:"adding-the-network",children:"Adding the Network"}),"\n",(0,a.jsxs)(t.p,{children:["To add the network to MetaMask, we need to call the ",(0,a.jsx)(t.code,{children:"wallet_addEthereumChain"}),"\nmethod, exposed by the web3 provider."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'function addLuxNetwork() {\n  injected.getProvider().then((provider) => {\n    provider\n      .request({\n        method: "wallet_addEthereumChain",\n        params: [LUX_MAINNET_PARAMS],\n      })\n      .catch((error: any) => {\n        console.log(error);\n      });\n  });\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Where ",(0,a.jsx)(t.code,{children:"injected"})," is initialized as a ",(0,a.jsx)(t.code,{children:"web3-react/injected-connector"})," used to\ninterface with MetaMask APIs. Usage for other popular web frameworks is similar.\nReplace ",(0,a.jsx)(t.code,{children:"LUX_MAINNET_PARAMS"})," with ",(0,a.jsx)(t.code,{children:"LUX_TESTNET_PARAMS"})," if you want\nto add the test network."]}),"\n",(0,a.jsxs)(t.p,{children:["Typical usage pattern would be to expose a button calling that method if you get\n",(0,a.jsx)(t.code,{children:"Wrong Network"})," or ",(0,a.jsx)(t.code,{children:"Error connecting"})," errors when attempting to establish a\nconnection to MetaMask."]}),"\n",(0,a.jsx)(t.h3,{id:"user-experience",children:"User Experience"}),"\n",(0,a.jsx)(t.p,{children:"When users first come to your dapp's website they need to approve connection to\nMetaMask. After they do that, if you don't detect successful web3 network\nconnection, you can present them with a dialog asking them to confirm switch to\na new network:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"wrong network",src:n(55415).Z+"",width:"407",height:"201"})}),"\n",(0,a.jsx)(t.p,{children:"If they press the button, they are shown a dialog from MetaMask asking for approval to add the new network:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"add a network",src:n(41801).Z+"",width:"404",height:"679"})}),"\n",(0,a.jsx)(t.p,{children:"If they approve, your app will be connected to the Lux network. Very easy,\nno need for any data entry, no chance of wrong data entry. And that's it, users\nare ready to interact with your dapp!"}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"Dapps users are often not very technically sophisticated and onboarding them\nneeds to be as seamless and easy as possible. Manually adding a new network is a\nhurdle than a certain percentage of your potential users will not be able to\nclear. Removing that requirement is a simple step that will enhance their\nexperience and enable more users to get to actually use your dapp."}),"\n",(0,a.jsxs)(t.p,{children:["If you have any questions, problems, or ideas on how to improve, or simply want\nto join our developer community, you can contact us on our\n",(0,a.jsx)(t.a,{href:"https://chat.lux.network/",children:"Discord"})," server."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},55415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-to-metamask-01-wrong-network-754515e90ee8ea525e00d67abc7ad65e.png"},41801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-to-metamask-02-add-network-37da9492d32dfc0355075c7c563d7e4f.png"},35768:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-core-16d83e1baeb4c006b2d7d5165674afa6.jpeg"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);