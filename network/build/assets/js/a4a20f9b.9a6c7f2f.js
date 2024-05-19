"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[9862],{88532:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(49214),a=i(43540);const r={tags:["Standards"],description:"This document summarizes all of the changes made to the X-Chain API to support Lux Cortina (v1.10.0).",sidebar_label:"X-Chain Migration",pagination_label:"X-Chain Migration Guide - Lux Cortina",sidebar_position:2},s="X-Chain Migration Guide",l={id:"reference/standards/guides/x-chain-migration",title:"X-Chain Migration Guide",description:"This document summarizes all of the changes made to the X-Chain API to support Lux Cortina (v1.10.0).",source:"@site/docs/reference/standards/guides/x-chain-migration.md",sourceDirName:"reference/standards/guides",slug:"/reference/standards/guides/x-chain-migration",permalink:"/docs/reference/standards/guides/x-chain-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/reference/standards/guides/x-chain-migration.md",tags:[{label:"Standards",permalink:"/docs/tags/standards"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Standards"],description:"This document summarizes all of the changes made to the X-Chain API to support Lux Cortina (v1.10.0).",sidebar_label:"X-Chain Migration",pagination_label:"X-Chain Migration Guide - Lux Cortina",sidebar_position:2},sidebar:"reference",previous:{title:"Lux Transaction Fees",permalink:"/docs/reference/standards/guides/txn-fees"},next:{title:"Banff Changes",permalink:"/docs/reference/standards/guides/banff-changes"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Transaction Broadcast and Confirmation",id:"transaction-broadcast-and-confirmation",level:2},{value:"Vertex -&gt; Block Indexing",id:"vertex---block-indexing",level:2},{value:"Deprecated API Calls",id:"deprecated-api-calls",level:2},{value:"Cortina FAQ",id:"cortina-faq",level:2},{value:"Do I Have to Upgrade my Node?",id:"do-i-have-to-upgrade-my-node",level:3},{value:"Is There any Change in Hardware Requirements?",id:"is-there-any-change-in-hardware-requirements",level:3},{value:"Will Updating Decrease my Validator\u2019s Uptime?",id:"will-updating-decrease-my-validators-uptime",level:3},{value:"I Think Something Is Wrong. What Should I Do?",id:"i-think-something-is-wrong-what-should-i-do",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"x-chain-migration-guide",children:"X-Chain Migration Guide"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This document summarizes all of the changes made to the X-Chain API to support\nLux Cortina (v1.10.0), which migrates the X-Chain to run Snowman++.\nIn summary, the core transaction submission and confirmation flow is unchanged,\nhowever, there are new APIs that must be called to index all transactions."}),"\n",(0,t.jsx)(n.h2,{id:"transaction-broadcast-and-confirmation",children:"Transaction Broadcast and Confirmation"}),"\n",(0,t.jsxs)(n.p,{children:["The transaction format on the X-Chain does not change in Cortina. This means that wallets that\nhave already integrated with the X-Chain don\u2019t need to change how they sign transactions.\nAdditionally, there is no change to the format of the ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmissuetx",children:"avm.issueTx"}),"\nor the ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgettx",children:"avm.getTx"})," API."]}),"\n",(0,t.jsxs)(n.p,{children:["However, the ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgettxstatus",children:"avm.getTxStatus"})," endpoint is now\ndeprecated and its usage should be replaced with\n",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgettx",children:"avm.getTx"})," (which only returns accepted transactions\nfor Luxd >= v1.9.12). ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgettxstatus",children:"avm.getTxStatus"}),"\nwill still work up to and after the Cortina activation if you wish to migrate\nafter the network upgrade has occurred."]}),"\n",(0,t.jsx)(n.h2,{id:"vertex---block-indexing",children:"Vertex -> Block Indexing"}),"\n",(0,t.jsxs)(n.p,{children:["Before Cortina, indexing the X-Chain required polling the\n",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/index-api#x-chain-vertices",children:"/ext/index/X/vtx"})," endpoint to fetch new\nvertices. During the Cortina activation, a \u201cstop vertex\u201d will be produced using\na ",(0,t.jsx)(n.a,{href:"https://github.com/luxfi/luxd/blob/c27721a8da1397b218ce9e9ec69839b8a30f9860/snow/engine/lux/vertex/codec.go#L17-L18",children:"new codec\nversion"}),"\nthat will contain no transactions. This new vertex type will be the ",(0,t.jsx)(n.a,{href:"https://github.com/luxfi/luxd/blob/c27721a8da1397b218ce9e9ec69839b8a30f9860/snow/engine/lux/vertex/stateless_vertex.go#L95-L102",children:"same\nformat"}),"\nas previous vertices. To ensure historical data can still be accessed in\nCortina, the ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/index-api#x-chain-vertices",children:"/ext/index/X/vtx"})," will remain\naccessible even though it will no longer be populated with chain data."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The index for the X-chain tx and vtx endpoints will never increase\nagain. The index for the X-chain blocks will increase as new\nblocks are added."})}),"\n",(0,t.jsxs)(n.p,{children:["After Cortina activation, you will need to migrate to using the new\n",(0,t.jsx)(n.em,{children:"ext/index/X/block"})," endpoint (shares the same semantics as\n",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/index-api#p-chain-blocks",children:"/ext/index/P/block"}),") to continue indexing\nX-Chain activity. Because X-Chain ordering is deterministic in Cortina, this\nmeans that X-Chain blocks across all heights will be consistent across all nodes\nand will include a timestamp. Here is an example of iterating over these blocks\nin Golang:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-golang",children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"log"\n\t"time"\n\n\t"github.com/luxfi/luxd/indexer"\n\t"github.com/luxfi/luxd/vms/proposervm/block"\n\t"github.com/luxfi/luxd/wallet/chain/x"\n\t"github.com/luxfi/luxd/wallet/subnet/primary"\n)\n\nfunc main() {\n\tvar (\n\t\turi       = fmt.Sprintf("%s/ext/index/X/block", primary.LocalAPIURI)\n\t\tclient    = indexer.NewClient(uri)\n\t\tctx       = context.Background()\n\t\tnextIndex uint64\n\t)\n\tfor {\n\t\tlog.Printf("polling for next accepted block")\n\t\tcontainer, err := client.GetContainerByIndex(ctx, nextIndex)\n\t\tif err != nil {\n\t\t\ttime.Sleep(time.Second)\n\t\t\tcontinue\n\t\t}\n\n\t\tproposerVMBlock, err := block.Parse(container.Bytes)\n\t\tif err != nil {\n\t\t\tlog.Fatalf("failed to parse proposervm block: %s\\n", err)\n\t\t}\n\n\t\tavmBlockBytes := proposerVMBlock.Block()\n\t\tavmBlock, err := x.Parser.ParseBlock(avmBlockBytes)\n\t\tif err != nil {\n\t\t\tlog.Fatalf("failed to parse avm block: %s\\n", err)\n\t\t}\n\n\t\tacceptedTxs := avmBlock.Txs()\n\t\tlog.Printf("accepted block %s with %d transactions", avmBlock.ID(), len(acceptedTxs))\n\n\t\tfor _, tx := range acceptedTxs {\n\t\t\tlog.Printf("accepted transaction %s", tx.ID())\n\t\t}\n\n\t\tnextIndex++\n\t}\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After Cortina activation, it will also be possible to fetch X-Chain blocks\ndirectly without enabling the Index API. You can use the ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgetblock",children:"avm.getBlock"}),",\n",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgetblockbyheight",children:"avm.getBlockByHeight"}),", and ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/api#avmgetheight",children:"avm.getHeight"}),"\nendpoints to do so. This, again,\nwill be similar to the ",(0,t.jsx)(n.a,{href:"/docs/reference/luxd/p-chain/api#platformgetblock",children:"P-Chain semantics"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deprecated-api-calls",children:"Deprecated API Calls"}),"\n",(0,t.jsx)(n.p,{children:"This long-term deprecation effort will better align usage of Luxd with its purpose, to be a\nminimal and efficient runtime that supports only what is required to validate the Primary Network\nand Subnets. Integrators should make plans to migrate to tools and services that are better\noptimized for serving queries over Lux Network state and avoid keeping any keys on the node\nitself."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This deprecation ONLY applies to APIs that Luxd exposes over the HTTP port.\nTransaction types with similar names to these APIs are NOT being deprecated."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["ipcs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ipcs.publishBlockchain"}),"\n",(0,t.jsx)(n.li,{children:"ipcs.unpublishBlockchain"}),"\n",(0,t.jsx)(n.li,{children:"ipcs.getPublishedBlockchains"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["keystore","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"keystore.createUser"}),"\n",(0,t.jsx)(n.li,{children:"keystore.deleteUser"}),"\n",(0,t.jsx)(n.li,{children:"keystore.listUsers"}),"\n",(0,t.jsx)(n.li,{children:"keystore.importUser"}),"\n",(0,t.jsx)(n.li,{children:"keystore.exportUser"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"avm/pubsub"}),"\n",(0,t.jsxs)(n.li,{children:["avm","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"avm.getAddressTxs"}),"\n",(0,t.jsx)(n.li,{children:"avm.getBalance"}),"\n",(0,t.jsx)(n.li,{children:"avm.getAllBalances"}),"\n",(0,t.jsx)(n.li,{children:"avm.createAsset"}),"\n",(0,t.jsx)(n.li,{children:"avm.createFixedCapAsset"}),"\n",(0,t.jsx)(n.li,{children:"avm.createVariableCapAsset"}),"\n",(0,t.jsx)(n.li,{children:"avm.createNFTAsset"}),"\n",(0,t.jsx)(n.li,{children:"avm.createAddress"}),"\n",(0,t.jsx)(n.li,{children:"avm.listAddresses"}),"\n",(0,t.jsx)(n.li,{children:"avm.exportKey"}),"\n",(0,t.jsx)(n.li,{children:"avm.importKey"}),"\n",(0,t.jsx)(n.li,{children:"avm.mint"}),"\n",(0,t.jsx)(n.li,{children:"avm.sendNFT"}),"\n",(0,t.jsx)(n.li,{children:"avm.mintNFT"}),"\n",(0,t.jsx)(n.li,{children:"avm.import"}),"\n",(0,t.jsx)(n.li,{children:"avm.export"}),"\n",(0,t.jsx)(n.li,{children:"avm.send"}),"\n",(0,t.jsx)(n.li,{children:"avm.sendMultiple"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["avm/wallet","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"wallet.issueTx"}),"\n",(0,t.jsx)(n.li,{children:"wallet.send"}),"\n",(0,t.jsx)(n.li,{children:"wallet.sendMultiple"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["platform","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"platform.exportKey"}),"\n",(0,t.jsx)(n.li,{children:"platform.importKey"}),"\n",(0,t.jsx)(n.li,{children:"platform.getBalance"}),"\n",(0,t.jsx)(n.li,{children:"platform.createAddress"}),"\n",(0,t.jsx)(n.li,{children:"platform.listAddresses"}),"\n",(0,t.jsx)(n.li,{children:"platform.getSubnets"}),"\n",(0,t.jsx)(n.li,{children:"platform.addValidator"}),"\n",(0,t.jsx)(n.li,{children:"platform.addDelegator"}),"\n",(0,t.jsx)(n.li,{children:"platform.addSubnetValidator"}),"\n",(0,t.jsx)(n.li,{children:"platform.createSubnet"}),"\n",(0,t.jsx)(n.li,{children:"platform.exportLUX"}),"\n",(0,t.jsx)(n.li,{children:"platform.importLUX"}),"\n",(0,t.jsx)(n.li,{children:"platform.createBlockchain"}),"\n",(0,t.jsx)(n.li,{children:"platform.getBlockchains"}),"\n",(0,t.jsx)(n.li,{children:"platform.getStake"}),"\n",(0,t.jsx)(n.li,{children:"platform.getMaxStakeAmount"}),"\n",(0,t.jsx)(n.li,{children:"platform.getRewardUTXOs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cortina-faq",children:"Cortina FAQ"}),"\n",(0,t.jsx)(n.h3,{id:"do-i-have-to-upgrade-my-node",children:"Do I Have to Upgrade my Node?"}),"\n",(0,t.jsxs)(n.p,{children:["If you don\u2019t upgrade your validator to ",(0,t.jsx)(n.code,{children:"v1.10.0"})," before the Lux Mainnet activation date,\nyour node will be marked as offline and other nodes will report your node as having lower uptime,\nwhich may jeopardize your staking rewards."]}),"\n",(0,t.jsx)(n.h3,{id:"is-there-any-change-in-hardware-requirements",children:"Is There any Change in Hardware Requirements?"}),"\n",(0,t.jsx)(n.p,{children:"No."}),"\n",(0,t.jsx)(n.h3,{id:"will-updating-decrease-my-validators-uptime",children:"Will Updating Decrease my Validator\u2019s Uptime?"}),"\n",(0,t.jsxs)(n.p,{children:["No. As a reminder, you can check your validator\u2019s estimated uptime using the ",(0,t.jsxs)(n.a,{href:"/docs/reference/luxd/info-api#infouptime",children:[(0,t.jsx)(n.code,{children:"info.uptime"})," API call"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"i-think-something-is-wrong-what-should-i-do",children:"I Think Something Is Wrong. What Should I Do?"}),"\n",(0,t.jsxs)(n.p,{children:["First, make sure that you\u2019ve read the documentation thoroughly and checked\nthe ",(0,t.jsx)(n.a,{href:"https://support.lux.network/en/",children:"FAQs"}),".\nIf you don\u2019t see an answer to your question,\ngo to our ",(0,t.jsx)(n.a,{href:"https://discord.com/invite/RwXY7P6",children:"Discord"}),"\nserver and search for your question.\nIf it has not already been asked, please post it in the appropriate channel."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},43540:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(48318);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);