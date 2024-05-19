"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[1014],{35705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(49214),s=t(43540);const a={tags:["Build","Subnets"],description:'The ZOO ("We\'re All Going to Make It") Subnet is a high throughput testbed for EVM (Ethereum Virtual Machine) optimizations. It is parameterized to run at a factor more capacity than Testnet/Mainnet C-Chain and will is used to experiment with release candidates before included in an official Coreth release.',sidebar_label:"Case Study: ZOO Subnet",pagination_label:"ZOO Subnet",sidebar_position:1},o="ZOO Subnet",r={id:"build/subnet/info/wagmi",title:"ZOO Subnet",description:'The ZOO ("We\'re All Going to Make It") Subnet is a high throughput testbed for EVM (Ethereum Virtual Machine) optimizations. It is parameterized to run at a factor more capacity than Testnet/Mainnet C-Chain and will is used to experiment with release candidates before included in an official Coreth release.',source:"@site/docs/build/subnet/info/wagmi.md",sourceDirName:"build/subnet/info",slug:"/build/subnet/info/wagmi",permalink:"/docs/build/subnet/info/wagmi",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/subnet/info/wagmi.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Subnets",permalink:"/docs/tags/subnets"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Build","Subnets"],description:'The ZOO ("We\'re All Going to Make It") Subnet is a high throughput testbed for EVM (Ethereum Virtual Machine) optimizations. It is parameterized to run at a factor more capacity than Testnet/Mainnet C-Chain and will is used to experiment with release candidates before included in an official Coreth release.',sidebar_label:"Case Study: ZOO Subnet",pagination_label:"ZOO Subnet",sidebar_position:1},sidebar:"build-subnet",previous:{title:"Upgrade Your Subnet-EVM Precompile Configuration",permalink:"/docs/build/subnet/upgrade/upgrade-precompile"},next:{title:"Troubleshooting Subnet Deployments",permalink:"/docs/build/subnet/info/troubleshoot-subnet"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Network Parameters",id:"network-parameters",level:3},{value:"Adding ZOO to Core",id:"adding-zoo-to-core",level:3},{value:"Case Study: ZOO Upgrade",id:"case-study-zoo-upgrade",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Network Upgrades: Enable/Disable Precompiles",id:"network-upgrades-enabledisable-precompiles",level:3},{value:"Preparation",id:"preparation",level:3},{value:"Deploying upgrade.json",id:"deploying-upgradejson",level:3},{value:"Activation",id:"activation",level:3},{value:"Using Fee Manager",id:"using-fee-manager",level:3},{value:"Conclusion",id:"conclusion",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"zoo-subnet",children:"ZOO Subnet"}),"\n",(0,i.jsx)(n.p,{children:'The ZOO ("We\'re All Going to Make It") Subnet is a high throughput testbed for EVM (Ethereum\nVirtual Machine) optimizations. It is parameterized to run at a factor more capacity than\nTestnet/Mainnet C-Chain and will is used to experiment with release candidates before included\nin an official Coreth release.'}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This is one of the first cases of using Lux Subnets as a proving ground for changes in a\nproduction VM (Coreth). Many underestimate how useful the isolation of Subnets is for performing\ncomplex VM testing on a live network (without impacting the stability of the primary network)."}),"\n",(0,i.jsxs)(n.p,{children:["We created a basic ZOO Explorer ",(0,i.jsx)(n.a,{href:"https://subnets-test.lux.network/wagmi",children:"https://subnets-test.lux.network/wagmi"}),"\nthat surfaces aggregated usage statistics about the Subnet."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["SubnetID: ",(0,i.jsx)(n.a,{href:"https://explorer-xp.lux-test.network/subnet/28nrH5T2BMvNrWecFcV3mfccjs6axM1TVyqe79MCv2Mhs8kxiY?tab=validators",children:"28nrH5T2BMvNrWecFcV3mfccjs6axM1TVyqe79MCv2Mhs8kxiY"})]}),"\n",(0,i.jsxs)(n.li,{children:["ChainID: ",(0,i.jsx)(n.a,{href:"https://testnet.avascan.info/blockchain/2ebCneCbwthjQ1rYT41nhd7M76Hc6YmosMAQrTFhBq8qeqh6tt",children:"2ebCneCbwthjQ1rYT41nhd7M76Hc6YmosMAQrTFhBq8qeqh6tt"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"network-parameters",children:"Network Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NetworkID: 11111"}),"\n",(0,i.jsx)(n.li,{children:"ChainID: 11111"}),"\n",(0,i.jsx)(n.li,{children:"Block Gas Limit: 20,000,000 (2.5x C-Chain)"}),"\n",(0,i.jsx)(n.li,{children:"10s Gas Target: 100,000,000 (~6.67x C-Chain)"}),"\n",(0,i.jsx)(n.li,{children:"Min Fee: 1 Gwei (4% of C-Chain)"}),"\n",(0,i.jsx)(n.li,{children:"Target Block Rate: 2s (Same as C-Chain)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The genesis file of ZOO can be found ",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/public-chain-assets/blob/1951594346dcc91682bdd8929bcf8c1bf6a04c33/chains/11111/genesis.json",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"adding-zoo-to-core",children:"Adding ZOO to Core"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"- Network Name: ZOO\n- RPC URL: [https://subnets.lux.network/wagmi/wagmi-chain-testnet/rpc]\n- WS URL: wss://subnets.lux.network/wagmi/wagmi-chain-testnet/ws\n- Chain ID: 11111\n- Symbol: WGM\n- Explorer: [https://subnets.lux.network/wagmi/wagmi-chain-testnet/explorer]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This can be used with other wallets too, such as MetaMask."})}),"\n",(0,i.jsx)(n.h2,{id:"case-study-zoo-upgrade",children:"Case Study: ZOO Upgrade"}),"\n",(0,i.jsxs)(n.p,{children:["This case study uses ",(0,i.jsx)(n.a,{href:"https://subnets-test.lux.network/wagmi",children:"ZOO"})," Subnet upgrade to show how a\nnetwork upgrade on an EVM-based (Ethereum Virtual Machine) Subnet can be done simply, and how the\nresulting upgrade can be used to dynamically control fee structure on the Subnet."]}),"\n",(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm",children:"Subnet-EVM"})," aims to provide an easy to use toolbox to\ncustomize the EVM for your blockchain. It is meant to run out of the box for many Subnets without\nany modification. But what happens when you want to add a new feature updating the rules of your\nEVM?"]}),"\n",(0,i.jsxs)(n.p,{children:["Instead of hard coding the timing of network upgrades in client code like most EVM chains, requiring\ncoordinated deployments of new code, ",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/releases/tag/v0.2.8",children:"Subnet-EVM\nv0.2.8"})," introduces the long awaited\nfeature to perform network upgrades by just using a few lines of JSON in a configuration file."]}),"\n",(0,i.jsx)(n.h3,{id:"network-upgrades-enabledisable-precompiles",children:"Network Upgrades: Enable/Disable Precompiles"}),"\n",(0,i.jsxs)(n.p,{children:["Detailed description of how to do this can be found in ",(0,i.jsx)(n.a,{href:"/docs/build/subnet/upgrade/customize-a-subnet#network-upgrades-enabledisable-precompiles",children:"Customize a Subnet"})," tutorial.\nHere's a summary:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Network Upgrade utilizes existing precompiles on the Subnet-EVM:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ContractDeployerAllowList, for restricting smart contract deployers"}),"\n",(0,i.jsx)(n.li,{children:"TransactionAllowList, for restricting who can submit transactions"}),"\n",(0,i.jsx)(n.li,{children:"NativeMinter, for minting native coins"}),"\n",(0,i.jsx)(n.li,{children:"FeeManager, for configuring dynamic fees"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Each of these precompiles can be individually enabled or disabled at a given timestamp as a\nnetwork upgrade, or any of the parameters governing its behavior changed."}),"\n",(0,i.jsxs)(n.li,{children:["These upgrades must be specified in a file named ",(0,i.jsx)(n.code,{children:"upgrade.json"})," placed in the same directory where\n",(0,i.jsx)(n.a,{href:"/docs/build/subnet/upgrade/customize-a-subnet#luxd-chain-configs",children:(0,i.jsx)(n.code,{children:"config.json"})})," resides: ",(0,i.jsx)(n.code,{children:"{chain-config-dir}/{blockchainID}/upgrade.json"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsxs)(n.p,{children:["To prepare for the ZOO network upgrade, on August 15, 2022, we had announced on\n",(0,i.jsx)(n.a,{href:"https://twitter.com/AaronBuchwald/status/1559249414102720512",children:"Twitter"})," and shared on other social\nmedia such as Discord, with the following information:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"With Subnet-EVM v0.2.8 It's time for a whole new Subnet Season: Network Upgrade Edition."}),"\n",(0,i.jsx)(n.p,{children:"Like every great show, we're kicking this season off with a pilot episode: ZOO Network Upgrade."}),"\n",(0,i.jsx)(n.p,{children:"Stay tuned because this pilot is literally a can't miss for every ZOO node \ud83d\ude09"}),"\n",(0,i.jsxs)(n.p,{children:["The upgrade will activate the fee config manager, and enable smooth fee config updates in the\nfuture ",(0,i.jsx)(n.a,{href:"https://docs.lux.network/subnets/customize-a-subnet#configuring-dynamic-fees",children:"https://docs.lux.network/subnets/customize-a-subnet#configuring-dynamic-fees"})]}),"\n",(0,i.jsx)(n.p,{children:"This upgrade changes how blocks are processed on ZOO, so every ZOO node needs to upgrade to\ncontinue to validate ZOO correctly."}),"\n",(0,i.jsxs)(n.p,{children:["In order to update your node, you need to update to Subnet-EVM v0.2.8 and follow the instructions\nto enable a stateful precompile on Subnet-EVM here:\n",(0,i.jsx)(n.a,{href:"https://docs.lux.network/subnets/customize-a-subnet#network-upgrades-enabledisable-precompiles",children:"https://docs.lux.network/subnets/customize-a-subnet#network-upgrades-enabledisable-precompiles"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can find the JSON to configure the network upgrade in this gist:\n[",(0,i.jsx)(n.a,{href:"https://gist.github.com/aaronbuchwald/b3af9da34678f542ce31717e7963085b",children:"https://gist.github.com/aaronbuchwald/b3af9da34678f542ce31717e7963085b"}),"]"]}),"\n",(0,i.jsxs)(n.p,{children:["TLDR; you will need to place the JSON file into your node's file directory within\n",(0,i.jsx)(n.code,{children:"chain-config-dir/wagmi blockchainID/upgrade.json"})," and restart your node."]}),"\n",(0,i.jsx)(n.p,{children:"Note: the ZOO blockchainID is 2ebCneCbwthjQ1rYT41nhd7M76Hc6YmosMAQrTFhBq8qeqh6tt."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploying-upgradejson",children:"Deploying upgrade.json"}),"\n",(0,i.jsxs)(n.p,{children:["The content of the ",(0,i.jsx)(n.code,{children:"upgrade.json"})," is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "precompileUpgrades": [\n    {\n      "feeManagerConfig": {\n        "adminAddresses": ["0x6f0f6DA1852857d7789f68a28bba866671f3880D"],\n        "blockTimestamp": 1660658400\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Detailed explanation of feeManagerConfig can be found in the ",(0,i.jsx)(n.a,{href:"/docs/build/subnet/upgrade/customize-a-subnet#configuring-dynamic-fees",children:"precompiles documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["With the above ",(0,i.jsx)(n.code,{children:"upgrade.json"}),", we intend to change the ",(0,i.jsx)(n.code,{children:"adminAddresses"})," at timestamp ",(0,i.jsx)(n.code,{children:"1660658400"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0x6f0f6DA1852857d7789f68a28bba866671f3880D"})," is named as the new Admin of the FeeManager"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1660658400"})," is the ",(0,i.jsx)(n.a,{href:"https://www.unixtimestamp.com/",children:"Unix timestamp"})," for 10:00 AM EDT August 16, 2022\n(future time when we made the announcement) when the new FeeManager change would take effect."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We place the ",(0,i.jsx)(n.code,{children:"upgrade.json"})," file in the chain config directory, which in our case is\n",(0,i.jsx)(n.code,{children:"~/.luxd/configs/chains/2ebCneCbwthjQ1rYT41nhd7M76Hc6YmosMAQrTFhBq8qeqh6tt/"}),". After that, we\nrestart the node so the upgrade file is loaded."]}),"\n",(0,i.jsx)(n.p,{children:"When the node restarts, Luxd reads the contents of the JSON file and passes it into\nSubnet-EVM. We see a log of the chain configuration that includes the updated precompile upgrade. It\nlooks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"INFO [08-15|15:09:36.772] <2ebCneCbwthjQ1rYT41nhd7M76Hc6YmosMAQrTFhBq8qeqh6tt Chain>\ngithub.com/luxfi/subnet-evm/eth/backend.go:155: Initialised chain configuration\nconfig=\u201c{ChainID: 11111 Homestead: 0 EIP150: 0 EIP155: 0 EIP158: 0 Byzantium: 0\nConstantinople: 0 Petersburg: 0 Istanbul: 0, Muir Glacier: 0, Subnet-EVM: 0, FeeConfig:\n{\\\u201cgasLimit\\\u201c:20000000,\\\u201ctargetBlockRate\\\u201c:2,\\\u201cminBaseFee\\\u201c:1000000000,\\\u201ctargetGas\\\n\u201c:100000000,\\\u201cbaseFeeChangeDenominator\\\u201c:48,\\\u201cminBlockGasCost\\\u201c:0,\\\u201cmaxBlockGasCost\\\n\u201c:10000000,\\\u201cblockGasCostStep\\\u201c:500000}, AllowFeeRecipients: false, NetworkUpgrades: {\\\n\u201csubnetEVMTimestamp\\\u201c:0}, PrecompileUpgrade: {}, UpgradeConfig: {\\\u201cprecompileUpgrades\\\u201c:\n[{\\\u201cfeeManagerConfig\\\u201c:{\\\u201cadminAddresses\\\u201c:[\\\n\u201c0x6f0f6da1852857d7789f68a28bba866671f3880d\\\u201c],\\\u201cblockTimestamp\\\u201c:1660658400}}]},\nEngine: Dummy Consensus Engine}\u201d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We note that ",(0,i.jsx)(n.code,{children:"precompileUpgrades"})," correctly shows the upcoming precompile upgrade. Upgrade is locked\nin and ready."]}),"\n",(0,i.jsx)(n.h3,{id:"activation",children:"Activation"}),"\n",(0,i.jsxs)(n.p,{children:["When the time passed 10:00 AM EDT August 16, 2022 (Unix timestamp 1660658400), the ",(0,i.jsx)(n.code,{children:"upgrade.json"})," had\nbeen executed as planned and the new FeeManager admin address has been activated. From now on, we\ndon't need to issue any new code or deploy anything on the ZOO nodes to change the fee structure.\nLet's see how it works in practice!"]}),"\n",(0,i.jsx)(n.h3,{id:"using-fee-manager",children:"Using Fee Manager"}),"\n",(0,i.jsxs)(n.p,{children:["The owner ",(0,i.jsx)(n.code,{children:"0x6f0f6DA1852857d7789f68a28bba866671f3880D"})," can now configure the fees on the Subnet as\nthey see fit. To do that, all that's needed is access to the network, the private key for the newly\nset manager address and making calls on the precompiled contract."]}),"\n",(0,i.jsxs)(n.p,{children:["We will use ",(0,i.jsx)(n.a,{href:"https://remix.ethereum.org",children:"Remix"})," online Solidity IDE and the ",(0,i.jsx)(n.a,{href:"https://support.lux.network/en/articles/6066879-core-extension-how-do-i-add-the-core-extension",children:"Core Browser\nExtension"}),".\nCore comes with ZOO network built-in. MetaMask will do as well but you will need to ",(0,i.jsx)(n.a,{href:"/docs/build/subnet/info/wagmi#adding-wagmi-to-metamask",children:"add ZOO"})," yourself."]}),"\n",(0,i.jsxs)(n.p,{children:["First using Core, we open the account as the owner ",(0,i.jsx)(n.code,{children:"0x6f0f6DA1852857d7789f68a28bba866671f3880D"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Then we connect Core to ZOO, Switch on the ",(0,i.jsx)(n.code,{children:"Testnet Mode"})," in ",(0,i.jsx)(n.code,{children:"Advanced"})," page in the hamburger menu:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Core Testnet mode",src:t(27407).A+"",width:"314",height:"221"})}),"\n",(0,i.jsxs)(n.p,{children:["And then open the ",(0,i.jsx)(n.code,{children:"Manage Networks"})," menu in the networks dropdown. Select ZOO there by clicking\nthe star icon:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Core network selection",src:t(95607).A+"",width:"187",height:"272"})}),"\n",(0,i.jsxs)(n.p,{children:["We then switch to ZOO in the networks dropdown. We are ready to move on to Remix now, so we open\nit in the browser. First, we check that Remix sees the extension and correctly talks to it. We\nselect ",(0,i.jsx)(n.code,{children:"Deploy & run transactions"})," icon on the left edge, and on the Environment dropdown, select\n",(0,i.jsx)(n.code,{children:"Injected Provider"}),". We need to approve the Remix network access in the Core browser extension. When\nthat is done, ",(0,i.jsx)(n.code,{children:"Custom (11111) network"})," is shown:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Injected provider",src:t(9672).A+"",width:"300",height:"151"})}),"\n",(0,i.jsx)(n.p,{children:"Good, we're talking to ZOO Subnet. Next we need to load the contracts into Remix. Using 'load from\nGitHub' option from the Remix home screen we load two contracts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/blob/master/contracts/contracts/interfaces/IAllowList.sol",children:"IAllowList.sol"})}),"\n",(0,i.jsxs)(n.li,{children:["and\n",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/blob/master/contract/contracts/interfaces/IFeeManager.sol",children:"IFeeManager.sol"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["IFeeManager is our precompile, but it references the IAllowList, so we need that one as well. We\ncompile IFeeManager.sol and deploy at the precompile address\n",(0,i.jsx)(n.code,{children:"0x0200000000000000000000000000000000000003"})," used on the\n",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/blob/master/precompile/params.go#L33",children:"Subnet"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deployed contract",src:t(95159).A+"",width:"441",height:"659"})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can interact with the FeeManager precompile from within Remix via Core. For example, we can\nuse the ",(0,i.jsx)(n.code,{children:"getFeeConfig"})," method to check the current fee configuration. This action can be performed\nby anyone as it is just a read operation."]}),"\n",(0,i.jsxs)(n.p,{children:["Once we have the new desired configuration for the fees on the Subnet, we can use the ",(0,i.jsx)(n.code,{children:"setFeeConfig"}),"\nto change the parameters. This action can ",(0,i.jsx)(n.strong,{children:"only"})," be performed by the owner\n",(0,i.jsx)(n.code,{children:"0x6f0f6DA1852857d7789f68a28bba866671f3880D"})," as the ",(0,i.jsx)(n.code,{children:"adminAddress"})," specified in the ",(0,i.jsxs)(n.a,{href:"#deploying-upgradejson",children:[(0,i.jsx)(n.code,{children:"upgrade.json"})," above"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"setFeeConfig",src:t(61682).A+"",width:"315",height:"476"})}),"\n",(0,i.jsxs)(n.p,{children:["When we call that method by pressing the ",(0,i.jsx)(n.code,{children:"transact"})," button, a new transaction is posted to the\nSubnet, and we can see it on ",(0,i.jsx)(n.a,{href:"https://subnets-test.lux.network/wagmi/block/0xad95ccf04f6a8e018ece7912939860553363cc23151a0a31ea429ba6e60ad5a3",children:"the\nexplorer"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"transaction",src:t(52010).A+"",width:"1008",height:"526"})}),"\n",(0,i.jsxs)(n.p,{children:["Immediately after the transaction is accepted, the new fee config takes effect. We can check with\nthe ",(0,i.jsx)(n.code,{children:"getFeeCofig"})," that the values are reflected in the active fee config (again this action can be\nperformed by anyone):"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"getFeeConfig",src:t(55310).A+"",width:"284",height:"249"})}),"\n",(0,i.jsx)(n.p,{children:"That's it, fees changed! No network upgrades, no complex and risky deployments, just making a simple\ncontract call and the new fee configuration is in place!"}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Network upgrades can be complex and perilous procedures to carry out safely. Our continuing efforts\nwith Subnets is to make upgrades as painless and simple as possible. With the powerful combination\nof stateful precompiles and network upgrades via the upgrade configuration files we have managed to\ngreatly simplify both the network upgrades and network parameter changes. This in turn enables much\nsafer experimentation and many new use cases that were too risky and complex to carry out with\nhigh-coordination efforts required with the traditional network upgrade mechanisms."}),"\n",(0,i.jsxs)(n.p,{children:["We hope this case study will help spark ideas for new things you may try on your own. We're looking\nforward to seeing what you have built and how easy upgrades help you in managing your Subnets! If\nyou have any questions or issues, feel free to contact us on our\n",(0,i.jsx)(n.a,{href:"https://chat.lux.network",children:"Discord"}),". Or just reach out to tell us what exciting new things you have\nbuilt!"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},95607:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/core-network-select-56020ede4c9a249219191a029583dd6e.png"},27407:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/core-testnet-mode-88063821605cb59634371f7e8bf741d3.png"},95159:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deployed-contract-d4ecf2b9ffc5c7344bd6b8c9fed02cb3.png"},55310:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/getFeeConfig-e85338a95a44e5c10478c7cf8ee6eaec.png"},9672:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/remix-injected-provider-79225309bca9618a7a880dd28a5a94a7.png"},61682:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/setFeeConfig-2064e131c67b6796cbbc7089784ad18f.png"},52010:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/wagmi-tx-40a7eb647bf54634c0cc87b4547af655.png"},43540:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(48318);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);