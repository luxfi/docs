"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[3662],{59704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(49214),a=t(43540);const r={tags:["Build","Dapps"],description:"An end-to-end walkthrough of necessary development activities for a bare-bones decentralized application.",sidebar_label:"Testnet Workflow",pagination_label:"Testnet Workflow"},i="Testnet Workflow",o={id:"build/dapp/testnet-workflow",title:"Testnet Workflow",description:"An end-to-end walkthrough of necessary development activities for a bare-bones decentralized application.",source:"@site/docs/build/dapp/testnet-workflow.md",sourceDirName:"build/dapp",slug:"/build/dapp/testnet-workflow",permalink:"/docs/build/dapp/testnet-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/dapp/testnet-workflow.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Dapps",permalink:"/docs/tags/dapps"}],version:"current",frontMatter:{tags:["Build","Dapps"],description:"An end-to-end walkthrough of necessary development activities for a bare-bones decentralized application.",sidebar_label:"Testnet Workflow",pagination_label:"Testnet Workflow"},sidebar:"build-dapp",previous:{title:"C-Chain Exchange Integration",permalink:"/docs/build/dapp/advanced/integrate-exchange"},next:{title:"Launch a Ethereum Dapp on Lux",permalink:"/docs/build/dapp/launch-dapp"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Set up Testnet Network on Core (optional)",id:"set-up-testnet-network-on-core-optional",level:2},{value:"Generate a Mnemonic",id:"generate-a-mnemonic",level:2},{value:"Derive Addresses",id:"derive-addresses",level:2},{value:"Generate Private Keys from a Mnemonic",id:"generate-private-keys-from-a-mnemonic",level:3},{value:"Get a Drip from the Testnet Faucet",id:"get-a-drip-from-the-testnet-faucet",level:2},{value:"Check the Transaction Details",id:"check-the-transaction-details",level:3},{value:"Get the Balance",id:"get-the-balance",level:3},{value:"Sending LUX",id:"sending-lux",level:2},{value:"Verify Success",id:"verify-success",level:3},{value:"Get the Balance",id:"get-the-balance-1",level:4},{value:"Sign in to Core Extension",id:"sign-in-to-core-extension",level:3},{value:"Summary",id:"summary",level:2},{value:"Resources",id:"resources",level:2},{value:"Faucet",id:"faucet",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Explorer",id:"explorer",level:3},{value:"RPC Endpoints - Public API Server",id:"rpc-endpoints---public-api-server",level:3},{value:"LuxJS Examples",id:"luxjs-examples",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"testnet-workflow",children:"Testnet Workflow"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Testnet is the Lux network's test network. You can use it to test your dapp\nor smart contract after you've developed it locally. (You can use\n",(0,s.jsx)(n.a,{href:"/docs/tooling/netrunner",children:"Lux Netrunner"})," to test things locally.) Testnet is\ntypically on the same version as the Lux Mainnet, but sometimes it is\nrunning an unreleased version of Luxd. In general, you can expect Testnet's\nbehavior to be about the same as Lux Mainnet. Tools such as a explorers\nand wallets should work with the Testnet."]}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we\u2019ll go through an example Testnet workflow to show how it can\nbe used. We'll do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set up Testnet network on Core (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Generate a 24 word english mnemonic via LuxJS"}),"\n",(0,s.jsx)(n.li,{children:"Derive external C-Chain addresses via LuxJS"}),"\n",(0,s.jsx)(n.li,{children:"Get LUX from the Testnet faucet"}),"\n",(0,s.jsx)(n.li,{children:"Send LUX via ethersJS"}),"\n",(0,s.jsx)(n.li,{children:"Examine the resulting transaction on the Lux Explorer"}),"\n",(0,s.jsx)(n.li,{children:"Use a private key derived from a mnemonic to sign into the Core extension (wallet)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"set-up-testnet-network-on-core-optional",children:"Set up Testnet Network on Core (optional)"}),"\n",(0,s.jsxs)(n.p,{children:["To access the Testnet test network, Testnet Mode needs to be enabled.\nIn order to do that, go to ",(0,s.jsx)(n.strong,{children:"Settings"})," and click on ",(0,s.jsx)(n.strong,{children:"Advanced"}),"."]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Settings image 1",src:t(98609).A+"",width:"400",height:"643"})})}),"\n",(0,s.jsxs)(n.p,{children:["Here, turn on the ",(0,s.jsx)(n.strong,{children:"Testnet Mode"})," feature. This will automatically make Core switch to\nTestnet."]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Settings image 2",src:t(90298).A+"",width:"400",height:"643"})})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"If you are using other wallets, like MetaMask, you can add the Testnet\nusing the following specs:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network Name"}),": Lux C-Chain"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"New RPC URL"}),": ",(0,s.jsx)(n.a,{href:"https://api.lux-test.network/ext/bc/C/rpc",children:"https://api.lux-test.network/ext/bc/C/rpc"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ChainID"}),": ",(0,s.jsx)(n.code,{children:"43113"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Symbol"}),": LUX"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Explorer"}),": ",(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/",children:(0,s.jsx)(n.code,{children:"https://testnet.snowtrace.io"})})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"generate-a-mnemonic",children:"Generate a Mnemonic"}),"\n",(0,s.jsxs)(n.p,{children:["To begin, we'll create a mnemonic phrase with\n",(0,s.jsx)(n.a,{href:"/docs/tooling/luxjs-overview",children:"LuxJS"}),". Mnemonics enable us to encode\nstrong security into a human-readable phrase. LuxJS supports 10 languages\nincluding English, Japanese, Spanish, Italian, French, Korean, Czech,\nPortuguese, Chinese Simplified and Chinese Traditional."]}),"\n",(0,s.jsxs)(n.p,{children:["First, generate a 24 word english\n",(0,s.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",children:"BIP39"}),"-compliant\nmnemonic via LuxJS."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { Mnemonic } from "lux";\nconst mnemonic: Mnemonic = Mnemonic.getInstance();\nconst strength: number = 256;\nconst wordlist = mnemonic.getWordlists("english") as string[];\nconst m: string = mnemonic.generateMnemonic(strength, randomBytes, wordlist);\nconsole.log(m);\n// "chimney asset heavy ecology accuse window gold weekend annual oil emerge alley retreat rabbit seed advance define off amused board quick wealth peasant disorder"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"derive-addresses",children:"Derive Addresses"}),"\n",(0,s.jsxs)(n.p,{children:["After generating a mnemonic we can use LuxJS to derive\n",(0,s.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",children:"BIP32"}),"-compliant\nhierarchical deterministic (HD) Keypairs."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import HDNode from "lux/dist/utils/hdnode";\nimport { Lux, Mnemonic, Buffer } from "lux";\nimport { EVMAPI, KeyChain } from "lux/dist/apis/evm";\nimport { ethers } from "ethers";\n\nconst ip: string = "api.lux-test.network";\nconst port: number = 443;\nconst protocol: string = "https";\nconst networkID: number = 5;\nconst lux: Lux = new Lux(ip, port, protocol, networkID);\nconst cchain: EVMAPI = lux.CChain();\n\nconst mnemonic: Mnemonic = Mnemonic.getInstance();\nconst m: string =\n  "chimney asset heavy ecology accuse window gold weekend annual oil emerge alley retreat rabbit seed advance define off amused board quick wealth peasant disorder";\nconst seed: Buffer = mnemonic.mnemonicToSeedSync(m);\nconst hdnode: HDNode = new HDNode(seed);\n\nconst keyChain: KeyChain = cchain.newKeyChain();\n\nconst cAddresses: string[] = [];\n\nfor (let i: number = 0; i <= 2; i++) {\n  const child: HDNode = hdnode.derive(`m/44\'/60\'/0\'/0/${i}`);\n  keyChain.importKey(child.privateKey);\n  const cchainAddress = ethers.utils.computeAddress(child.privateKey);\n  cAddresses.push(cchainAddress);\n}\nconsole.log(cAddresses);\n// [\n//   \'0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559\',\n//   \'0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C\',\n//   \'0xa14dFb7d8593c44a47A07298eCEA774557036ff3\'\n// ]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"generate-private-keys-from-a-mnemonic",children:"Generate Private Keys from a Mnemonic"}),"\n",(0,s.jsx)(n.p,{children:"As long as you have the mnemonic phrase, you can re-generate your private keys\nand the addresses they control."}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to generate the private keys for the first 3 address in the C Chain keychain:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/address/0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559",children:"0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/address/0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C",children:"0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/address/0xa14dFb7d8593c44a47A07298eCEA774557036ff3",children:"0xa14dFb7d8593c44a47A07298eCEA774557036ff3"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"you might update the example script above to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const cAddresses: string[] = [];\nconst privateKeys: string[] = [];\nfor (let i: number = 0; i <= 2; i++) {\n  // Deriving the _i_th external BIP44 C-Chain address\n  const child: HDNode = hdnode.derive(`m/44'/60'/0'/0/${i}`);\n  keyChain.importKey(child.privateKey);\n  // Converting the BIP44 addresses to hexadecimal addresses\n  const cchainAddress = ethers.utils.computeAddress(child.privateKey);\n  privateKeys.push(child.privateKey.toString(\"hex\"));\n  cAddresses.push(cchainAddress);\n}\nconsole.log({ cAddresses, privateKeys });\n// {\n//   cAddresses: [\n//     '0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559',\n//     '0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C',\n//     '0xa14dFb7d8593c44a47A07298eCEA774557036ff3'\n//   ],\n//   privateKeys: [\n//     'cd30aef1af167238c627593537e162ecf5aad1d4ab4ea98ed2f96ad4e47006dc',\n//     'b85479b26bc8fbada4737e90ab2133204f2fa2a9ea33c1e0de4452cbf8fa3be4',\n//     'c72e18ea0f9aa5457396e3bf810e9de8df0177c8e4e5bf83a85f871512d645a9'\n//   ]\n// }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"get-a-drip-from-the-testnet-faucet",children:"Get a Drip from the Testnet Faucet"}),"\n",(0,s.jsxs)(n.p,{children:['We can get a "drip" of LUX from the Testnet faucet. Paste the address into the\n',(0,s.jsx)(n.a,{href:"https://faucet.lux.network",children:"Testnet faucet website"}),". These LUX are for the Testnet\nTestnet and have no monetary value."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Requesting LUX",src:t(72613).A+"",width:"966",height:"891"})}),"\n",(0,s.jsx)(n.p,{children:"The faucet will send some LUX to the address and return a transaction ID\n(txID). This txID can be used with the Testnet Explorer to learn more about\nthe transaction."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Receiving LUX",src:t(84462).A+"",width:"1001",height:"894"})}),"\n",(0,s.jsx)(n.h3,{id:"check-the-transaction-details",children:"Check the Transaction Details"}),"\n",(0,s.jsxs)(n.p,{children:["The txID, ",(0,s.jsx)(n.code,{children:"0x1419b04559bf140ab82216f7696110936fb7d4bc1f147e3b85fef7ca1008a19e"}),",\ncan be seen on the ",(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/tx/0x1419b04559bf140ab82216f7696110936fb7d4bc1f147e3b85fef7ca1008a19e",children:"Testnet\nExplorer"}),".\nLux also has a ",(0,s.jsx)(n.a,{href:"https://explorer.lux.network",children:"Mainnet Explorer"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Transaction details",src:t(93410).A+"",width:"881",height:"565"})}),"\n",(0,s.jsx)(n.h3,{id:"get-the-balance",children:"Get the Balance"}),"\n",(0,s.jsxs)(n.p,{children:["We can also use the Testnet Explorer to get the balance for the 1st address\u2014",(0,s.jsx)(n.a,{href:"https://explorer.lux-test.network/address/0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559",children:"0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"1st derived address balance",src:t(1131).A+"",width:"1387",height:"460"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, we can use ",(0,s.jsx)(n.a,{href:"https://docs.ethers.io/v5/",children:"ethersJS"})," to get the balance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const ethers = require("ethers");\nconst network = "https://api.lux-test.network/ext/bc/C/rpc";\nconst provider = ethers.getDefaultProvider(network);\nconst address = "0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559";\n\nconst main = async (): Promise<any> => {\n  provider.getBalance(address).then((balance) => {\n    // convert a currency unit from wei to ether\n    const balanceInLux = ethers.utils.formatEther(balance);\n    console.log(`balance: ${balanceInLux} LUX`);\n    // balance: 2 LUX\n  });\n};\n\nmain();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sending-lux",children:"Sending LUX"}),"\n",(0,s.jsx)(n.p,{children:"The faucet sent 2 LUX to the first address we generated. Let's send LUX from\nthe 1st address to the 2nd address."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// import ethers.js\nimport { ethers } from "ethers";\n// network: using the Testnet\nconst network = "https://api.lux-test.network/ext/bc/C/rpc";\n// provider: establish and RPC connection to the network\nconst provider = new ethers.providers.JsonRpcProvider(network);\n\n// Sender private key:\n// corresponding address 0x0x2d1d87fF3Ea2ba6E0576bCA4310fC057972F2559\nlet privateKey =\n  "cd30aef1af167238c627593537e162ecf5aad1d4ab4ea98ed2f96ad4e47006dc";\n// Create a wallet instance\nlet wallet = new ethers.Wallet(privateKey, provider);\n// Receiver Address\nlet receiverAddress = "0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C";\n// LUX amount to send\nlet amountInLux = "0.01";\n// Create a transaction object\nlet tx = {\n  to: receiverAddress,\n  // Convert currency unit from ether to wei\n  value: ethers.utils.parseEther(amountInLux),\n};\n// Send a transaction\nwallet.sendTransaction(tx).then((txObj) => {\n  console.log(`"tx, https://testnet.snowtrace.io/tx/${txObj.hash}`);\n  // A transaction result can be checked in a snowtrace with a transaction link which can be obtained here.\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"verify-success",children:"Verify Success"}),"\n",(0,s.jsxs)(n.p,{children:["We can verify that the transaction,\n",(0,s.jsx)(n.code,{children:"0x3a5f4198b3be8d24b272f8255912aae4dcf2fb1f97f70d1787434de7b3097aac"}),", was\nsuccessful using the Testnet Explorer. The transaction can be seen\n",(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/tx/0x3a5f4198b3be8d24b272f8255912aae4dcf2fb1f97f70d1787434de7b3097aac",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Transaction details",src:t(39227).A+"",width:"881",height:"565"})}),"\n",(0,s.jsx)(n.h4,{id:"get-the-balance-1",children:"Get the Balance"}),"\n",(0,s.jsxs)(n.p,{children:["We can also use the Testnet Explorer to get the balance for the 2nd address\u2014",(0,s.jsx)(n.a,{href:"https://testnet.snowtrace.io/address/0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C",children:"0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, we can use ethersJS to get the balance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const ethers = require("ethers");\nconst network = "https://api.lux-test.network/ext/bc/C/rpc";\nconst provider = ethers.getDefaultProvider(network);\nconst address = "0x25d83F090D842c1b4645c1EFA46B15093d4CaC7C";\n\nconst main = async (): Promise<any> => {\n  provider.getBalance(address).then((balance) => {\n    // convert a currency unit from wei to ether\n    const balanceInLux = ethers.utils.formatEther(balance);\n    console.log(`balance: ${balanceInLux} LUX`);\n    // balance: 0.02 LUX\n  });\n};\n\nmain();\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sign-in-to-core-extension",children:"Sign in to Core Extension"}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, we can ",(0,s.jsx)(n.a,{href:"#generate-private-keys-from-a-mnemonic",children:"use the mnemonic to generate a private\nkey"})," to access that account in\n",(0,s.jsx)(n.a,{href:"https://join.core.app/extension",children:"Core extension"}),".\nWe'll see that it has the LUX balance and\nthat it derives the hexadecimal address from the private key."]}),"\n",(0,s.jsx)(n.p,{children:"Use the private key to access the account in Core Extension."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Access the wallet",src:t(39720).A+"",width:"201",height:"323"})}),"\n",(0,s.jsx)(n.p,{children:"The balance is correct and the address is the 1st derived address."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Core extension balance",src:t(79924).A+"",width:"201",height:"153"})," ",(0,s.jsx)(n.img,{alt:"3rd derived BIP44 address",src:t(17642).A+"",width:"201",height:"170"})]}),"\n",(0,s.jsxs)(n.p,{children:["We can repeat this login process using the private keys from the remaining 2\naddresses in the ",(0,s.jsx)(n.a,{href:"#generate-private-keys-from-a-mnemonic",children:"script above"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Wallet derived addresses",src:t(60899).A+"",width:"201",height:"156"}),"\n",(0,s.jsx)(n.img,{alt:"Wallet derived addresses2",src:t(13146).A+"",width:"201",height:"153"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Wallet derived addresses3",src:t(26178).A+"",width:"964",height:"194"})]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"The Testnet plays a critical role in testing dapps, smart\ncontracts and financial products before deploying to the Mainnet. Tooling like\nLuxJS, the public API, faucet, and explorer helps to ensure that your\ntesting and QA environment is close to Mainnet so that you can be confident when\nyou launch on Mainnet."}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(n.p,{children:"For additional and valuable resources please see below."}),"\n",(0,s.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://faucet.lux.network",children:"Testnet Faucet"})," sends LUX to X-Chain or C-Chain\naddresses to help you test. (This testnet LUX has no value.)"]}),"\n",(0,s.jsx)(n.h3,{id:"wallet",children:"Wallet"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://join.core.app/extension",children:"Core extension"})," and\n",(0,s.jsx)(n.a,{href:"https://support.lux.network/en/articles/6115608-core-mobile-where-can-i-download-core-mobile-to-my-phone",children:"Core mobile"}),"\nare simple, secure, non-custodial wallets for storing Lux assets.\nThey support Mainnet, Testnet and custom networks."]}),"\n",(0,s.jsx)(n.h3,{id:"explorer",children:"Explorer"}),"\n",(0,s.jsxs)(n.p,{children:["The Lux Explorer allows you to explore the network on\n",(0,s.jsx)(n.a,{href:"https://explorer.lux.network",children:"Mainnet"})," and\n",(0,s.jsx)(n.a,{href:"https://explorer.lux-test.network",children:"Testnet"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"rpc-endpoints---public-api-server",children:"RPC Endpoints - Public API Server"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/tooling/rpc-providers",children:"here."})]}),"\n",(0,s.jsx)(n.h3,{id:"luxjs-examples",children:"LuxJS Examples"}),"\n",(0,s.jsxs)(n.p,{children:["There are over ",(0,s.jsx)(n.a,{href:"https://github.com/luxfi/luxjs/tree/master/examples",children:"60 example LuxJS\nscripts"})," which\ndemonstrate how to assets and NFTs, send transactions, add validators and more."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},98609:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/settings1-1efd4de385c68f643573a4278ce64419.png"},90298:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/settings2-d548df1aa281a0ca41a472acc76ef8d2.png"},1131:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/faucet-testnet-wf-alt-balance-844ace069ed174f7edd8591c3627f677.png"},93410:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/faucet-testnet-wf-alt-tx1-9b84736bca31efbb5da59358820bd5dc.png"},39720:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-alt-enter-key-33a3535b3676d9dd25b935b5049086e2.png"},39227:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-alt-tx-2-9b84736bca31efbb5da59358820bd5dc.png"},60899:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-alt-wallet-address-2-930f70dd0bc2f8decd5ad39f47abaea7.png"},13146:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-alt-wallet-address-3-443f74c41401bdc75678f7a640d08a0e.png"},17642:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-alt-wallet-address-2443ec84c26e2d3cc47cd7fc3d2ea650.png"},26178:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-alt-wallet-addresses-8ed1c0fb517a2abd98f1b5de86d422ea.png"},79924:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/testnet-wf-wallet-alt-info-443f74c41401bdc75678f7a640d08a0e.png"},72613:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/faucet1-269574a350ea5adee6b7ee84d13bf10d.png"},84462:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/faucet2-26780d14575155c7fea907116f5f5723.png"},43540:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(48318);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);