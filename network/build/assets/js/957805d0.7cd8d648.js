"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[2877],{37849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(49214),s=t(43540);const i={tags:["Standards"],description:"In order to prevent spam, transactions require the payment of a transaction fee.",sidebar_label:"Transaction Fees",pagination_label:"Lux Transaction Fees",sidebar_position:1},r="Lux Transaction Fee",o={id:"reference/standards/guides/txn-fees",title:"Lux Transaction Fee",description:"In order to prevent spam, transactions require the payment of a transaction fee.",source:"@site/docs/reference/standards/guides/txn-fees.md",sourceDirName:"reference/standards/guides",slug:"/reference/standards/guides/txn-fees",permalink:"/docs/reference/standards/guides/txn-fees",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/reference/standards/guides/txn-fees.md",tags:[{label:"Standards",permalink:"/docs/tags/standards"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Standards"],description:"In order to prevent spam, transactions require the payment of a transaction fee.",sidebar_label:"Transaction Fees",pagination_label:"Lux Transaction Fees",sidebar_position:1},sidebar:"reference",previous:{title:"Issuing API Calls",permalink:"/docs/reference/standards/guides/issuing-api-calls"},next:{title:"X-Chain Migration Guide - Lux Cortina",permalink:"/docs/reference/standards/guides/x-chain-migration"}},c={},d=[{value:"Fee Schedule",id:"fee-schedule",level:2},{value:"C-Chain Fees",id:"c-chain-fees",level:2},{value:"Dynamic Fee Transactions",id:"dynamic-fee-transactions",level:3},{value:"Base Fee",id:"base-fee",level:4},{value:"Further Readings",id:"further-readings",level:4},{value:"Atomic Transaction Fees",id:"atomic-transaction-fees",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"lux-transaction-fee",children:"Lux Transaction Fee"}),"\n",(0,a.jsxs)(n.p,{children:["In order to prevent spam, transactions on Lux require the payment of a\ntransaction fee. The fee is paid in LUX. ",(0,a.jsx)(n.strong,{children:"The transaction fee is burned\n(destroyed forever)."})]}),"\n",(0,a.jsx)(n.p,{children:"When you issue a transaction through Lux\u2019s API, the transaction fee is\nautomatically deducted from one of the addresses you control."}),"\n",(0,a.jsx)(n.h2,{id:"fee-schedule",children:"Fee Schedule"}),"\n",(0,a.jsx)(n.p,{children:"Different types of transactions require payment of a different transaction fee.\nThis table shows the transaction fee schedule:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+----------+----------------------+-------------------------+\n| Chain    : Transaction Type     |  Transaction Fee (LUX) |\n+----------+----------------------+-------------------------+\n| P        : Create Subnet        |                       1 |\n+----------+----------------------+-------------------------+\n| P        : Create Blockchain    |                       1 |\n+----------+----------------------+-------------------------+\n| P        : Add Validator        |                       0 |\n+----------+----------------------+-------------------------+\n| P        : Add Subnet Validator |                   0.001 |\n+----------+----------------------+-------------------------+\n| P        : Add Permissionless   | Primary Network:      0 |\n|          : Validator            | Subnet:           0.001 |\n+----------+----------------------+-------------------------+\n| P        : Add Delegator        |                       0 |\n+----------+----------------------+-------------------------+\n| P        : Add Subnet Delegator |                   0.001 |\n+----------+----------------------+-------------------------+\n| P        : Add Permissionless   | Primary Network:      0 |\n|          : Delegator            | Subnet:           0.001 |\n+----------+----------------------+-------------------------+\n| P        : Import LUX          |                   0.001 |\n+----------+----------------------+-------------------------+\n| P        : Export LUX          |                   0.001 |\n+----------+----------------------+-------------------------+\n| X        : Send                 |                   0.001 |\n+----------+----------------------+-------------------------+\n| X        : Create Asset         |                    0.01 |\n+----------+----------------------+-------------------------+\n| X        : Mint Asset           |                   0.001 |\n+----------+----------------------+-------------------------+\n| X        : Import LUX          |                   0.001 |\n+----------+----------------------+-------------------------+\n| X        : Export LUX          |                   0.001 |\n+----------+----------------------+-------------------------+\n| C        : Simple send          |            >= 0.001575* |\n+----------+----------------------+-------------------------+\n\n(*) C-Chain gas price varies. See below.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c-chain-fees",children:"C-Chain Fees"}),"\n",(0,a.jsx)(n.p,{children:'The Lux C-Chain uses an algorithm to determine the "base fee" for a\ntransaction. The base fee increases when network utilization is above the target\nutilization and decreases when network utilization is below the target.'}),"\n",(0,a.jsx)(n.h3,{id:"dynamic-fee-transactions",children:"Dynamic Fee Transactions"}),"\n",(0,a.jsx)(n.p,{children:"Transaction fees for non-atomic transactions are based on Ethereum's EIP-1559\nstyle Dynamic Fee Transactions, which consists of a gas fee cap and a gas tip\ncap."}),"\n",(0,a.jsxs)(n.p,{children:["The fee cap specifies the maximum price the transaction is willing to pay per\nunit of gas. The tip cap (also called the priority fee) specifies the maximum\namount above the base fee that the transaction is willing to pay per unit of\ngas. Therefore, the effective gas price paid by a transaction will be\n",(0,a.jsx)(n.code,{children:"min(gasFeeCap, baseFee + gasTipCap)"}),". Unlike in Ethereum, where the priority\nfee is paid to the miner that produces the block, in Lux both the base fee\nand the priority fee are burned. For legacy transactions, which only specify a\nsingle gas price, the gas price serves as both the gas fee cap and the gas tip\ncap."]}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.a,{href:"/docs/reference/luxd/c-chain/api#eth_basefee",children:(0,a.jsx)(n.code,{children:"eth_baseFee"})})," API\nmethod to estimate the base fee for the next block. If more blocks are produced\nin between the time that you construct your transaction and it is included in a\nblock, the base fee could be different from the base fee estimated by the API\ncall, so it is important to treat this value as an estimate."]}),"\n",(0,a.jsxs)(n.p,{children:["Next, use\n",(0,a.jsx)(n.a,{href:"/docs/reference/luxd/c-chain/api#eth_maxpriorityfeepergas",children:"eth_maxPriorityFeePerGas"}),"\nAPI call to estimate the priority fee needed to be included in a block. This API\ncall will look at the most recent blocks and see what tips have been paid by\nrecent transactions in order to be included in the block."]}),"\n",(0,a.jsx)(n.p,{children:"Transactions are ordered by the priority fee, then the timestamp (oldest first)."}),"\n",(0,a.jsxs)(n.p,{children:["Based off of this information, you can specify the ",(0,a.jsx)(n.code,{children:"gasFeeCap"})," and ",(0,a.jsx)(n.code,{children:"gasTipCap"}),"\nto your liking based on how you prioritize getting your transaction included as\nquickly as possible vs. minimizing the price paid per unit of gas."]}),"\n",(0,a.jsx)(n.h4,{id:"base-fee",children:"Base Fee"}),"\n",(0,a.jsxs)(n.p,{children:["The base fee can go as low as 25 nLUX (Gwei) and has no upper bound. You can\nuse the ",(0,a.jsx)(n.a,{href:"/docs/reference/luxd/c-chain/api#eth_basefee",children:(0,a.jsx)(n.code,{children:"eth_baseFee"})})," and\n",(0,a.jsx)(n.a,{href:"/docs/reference/luxd/c-chain/api#eth_maxpriorityfeepergas",children:"eth_maxPriorityFeePerGas"}),"\nAPI methods, or ",(0,a.jsx)(n.a,{href:"https://snowtrace.io/gastracker",children:"Snowtrace's C-Chain Gas\nTracker"}),", to estimate the gas price to use in\nyour transactions."]}),"\n",(0,a.jsx)(n.h4,{id:"further-readings",children:"Further Readings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/build/dapp/advanced/adjusting-gas-price-during-high-network-activity",children:"Adjusting Gas Price During High Network Activity"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/build/dapp/advanced/sending-transactions-with-dynamic-fees-using-javascript",children:"Sending Transactions with Dynamic Fees using JavaScript"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"atomic-transaction-fees",children:"Atomic Transaction Fees"}),"\n",(0,a.jsx)(n.p,{children:"C-Chain atomic transactions (that is imports and exports from/to other chains)\ncharge dynamic fees based on the amount of gas used by the transaction and the\nbase fee of the block that includes the atomic transaction."}),"\n",(0,a.jsx)(n.p,{children:"Gas Used:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"+---------------------+-------+\n| Item                : Gas   |\n+---------------------+-------+\n| Unsigned Tx Byte    : 1     |\n+---------------------+-------+\n| Signature           : 1000  |\n+---------------------+-------+\n| Per Atomic Tx       : 10000 |\n+---------------------+-------+\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Therefore, the gas used by an atomic transaction is ",(0,a.jsx)(n.code,{children:"1 * len(unsignedTxBytes) + 1,000 * numSignatures + 10,000"})]}),"\n",(0,a.jsxs)(n.p,{children:["The TX fee additionally takes the base fee into account. Due to the fact that\natomic transactions use units denominated in 9 decimal places, the base fee must\nbe converted to 9 decimal places before calculating the actual fee paid by the\ntransaction. Therefore, the actual fee is: ",(0,a.jsx)(n.code,{children:"gasUsed * baseFee (converted to 9 decimals)"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},43540:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(48318);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);