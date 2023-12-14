"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4174],{81398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),a=n(11151);const s={tags:["Build","Dapps"],description:"This tutorial will help users to adjust their priority fee and max fee cap during high network activity and take advantage of the benefits of dynamic fee transactions.",sidebar_label:"Manually Adjust Gas Price",pagination_label:"Adjusting Gas Price During High Network Activity",sidebar_position:0},r="Adjusting Gas Price During High Network Activity",o={id:"build/dapp/advanced/adjusting-gas-price-during-high-network-activity",title:"Adjusting Gas Price During High Network Activity",description:"This tutorial will help users to adjust their priority fee and max fee cap during high network activity and take advantage of the benefits of dynamic fee transactions.",source:"@site/docs/build/dapp/advanced/adjusting-gas-price-during-high-network-activity.md",sourceDirName:"build/dapp/advanced",slug:"/build/dapp/advanced/adjusting-gas-price-during-high-network-activity",permalink:"/build/dapp/advanced/adjusting-gas-price-during-high-network-activity",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/dapp/advanced/adjusting-gas-price-during-high-network-activity.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Build","Dapps"],description:"This tutorial will help users to adjust their priority fee and max fee cap during high network activity and take advantage of the benefits of dynamic fee transactions.",sidebar_label:"Manually Adjust Gas Price",pagination_label:"Adjusting Gas Price During High Network Activity",sidebar_position:0},sidebar:"build-dapp",previous:{title:"Interact with a Solidity Smart Contract from a Go Application",permalink:"/build/dapp/smart-contracts/abigen"},next:{title:"Sending Transactions with Dynamic Fees using JavaScript",permalink:"/build/dapp/advanced/sending-transactions-with-dynamic-fees-using-javascript"}},d={},c=[{value:"Probable Reasons You Are Here",id:"probable-reasons-you-are-here",level:2},{value:"Good to Know Keywords and Concepts",id:"good-to-know-keywords-and-concepts",level:2},{value:"Why My Transaction is on Hold or Failing?",id:"why-my-transaction-is-on-hold-or-failing",level:2},{value:"Adjusting Gas Fees Before Submitting the Transaction",id:"adjusting-gas-fees-before-submitting-the-transaction",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"adjusting-gas-price-during-high-network-activity",children:"Adjusting Gas Price During High Network Activity"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes during periods of high network activity, transactions either remain\npending for a very long duration or instantly get a failed transaction\nnotification. This may confuse and frustrate users, especially if they don't\nunderstand why their transactions are not getting accepted."}),"\n",(0,i.jsx)(t.h2,{id:"probable-reasons-you-are-here",children:"Probable Reasons You Are Here"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Your transaction has stalled, and you don't know what to do"}),"\n",(0,i.jsxs)(t.li,{children:["Your transaction has failed, with an error - ",(0,i.jsx)(t.code,{children:"transaction underpriced"})]}),"\n",(0,i.jsx)(t.li,{children:"It's your first transaction, and you want to be sure about any potential issues"}),"\n",(0,i.jsx)(t.li,{children:"Just for general knowledge on adjusting dynamic fee settings"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If these are your reasons for being here, then you can either go through this\nentire section, for a better understanding of the scenario or directly skip to\nthe ",(0,i.jsx)(t.a,{href:"#adjusting-gas-fees-before-submitting-the-transaction",children:"solution"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"good-to-know-keywords-and-concepts",children:"Good to Know Keywords and Concepts"}),"\n",(0,i.jsxs)(t.p,{children:["The amount of computation used by a transaction is measured in units of ",(0,i.jsx)(t.code,{children:"gas"}),".\nEach unit of gas is paid for in LUX at the ",(0,i.jsx)(t.code,{children:"gas price"})," for the transaction. The\n",(0,i.jsx)(t.code,{children:"gas price"})," of the transaction is determined by the parameters of the\ntransaction and the ",(0,i.jsx)(t.code,{children:"base fee"})," of the block that it is included in."]}),"\n",(0,i.jsxs)(t.p,{children:["To avoid draining the user's wallet due to non-terminating execution through the\nEVM, transactions are submitted with a ",(0,i.jsx)(t.code,{children:"gas limit"}),", which denotes the maximum\nunits of gas that a particular transaction is allowed to consume."]}),"\n",(0,i.jsxs)(t.p,{children:["If a transaction attempts to use more than this limit, then the transaction will\nrevert and still consume and pay for the full ",(0,i.jsx)(t.code,{children:"gas limit"}),". Total fees paid by\nthe user can be calculated as ",(0,i.jsx)(t.code,{children:"(gas consumed) * (gas price)"}),", and is known as\n",(0,i.jsx)(t.code,{children:"gas fees"}),". Similarly, maximum gas fees can be calculated as ",(0,i.jsx)(t.code,{children:"(gas limit) * (gas price)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Originally, transactions could only set a single parameter to define how much\nthey were willing to pay for gas: ",(0,i.jsx)(t.code,{children:"gas price"}),". When dynamic fees were\nintroduced, EIP-1559 style transactions were introduced as well which contain\ntwo parameters ",(0,i.jsx)(t.code,{children:"maxFeeCap"})," and ",(0,i.jsx)(t.code,{children:"maxPriorityFee"})," to determine the price a\ntransaction is willing to pay."]}),"\n",(0,i.jsxs)(t.p,{children:["With the introduction of dynamic fees, legacy style transactions that only have\na single ",(0,i.jsx)(t.code,{children:"gas price"})," parameter can lead to both delayed transactions and\noverpaying for transactions. Dynamic fee transactions are the solution! For more\ninfo, read ",(0,i.jsx)(t.a,{href:"/reference/standards/guides/txn-fees#dynamic-fee-transactions",children:"this"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For the dynamic fee algorithm, when a block is produced or verified, we look\nover the past 10s to see how much gas has been consumed within that window (with\nan added charge for each block produced in that window) to determine the current\nnetwork utilization. This window has a target utilization, which is currently\nset to ",(0,i.jsx)(t.code,{children:"15M"})," gas units. Lastly, there is an added charge if a block is produced\nfaster than the target rate of block production. Currently, the target rate of\nblock production is one block every two seconds, so if a new block is produced\none second after its parent, then there is an additional surcharge added into\nthe base fee calculation."]}),"\n",(0,i.jsx)(t.p,{children:"Base price could increase, decrease, or remain the same depending upon the\namount of activity on the network in the most recent window. If the total gas in\nthe last few blocks of the window is more, less or the same than the target gas,\nthen the base price will increase, decrease, or remain the same, respectively."}),"\n",(0,i.jsx)(t.p,{children:"When estimating the base fee for users, we simply look at the currently\npreferred block and calculate what the base fee would be for a block built on\ntop of that block immediately."}),"\n",(0,i.jsx)(t.p,{children:"Along with a gas limit, users can now pass 2 values in dynamic fee transactions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"gas fee cap"})," and ",(0,i.jsx)(t.code,{children:"gas tip cap"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The maximum price per unit of gas, that the user is willing to pay for their\ntransaction is called ",(0,i.jsx)(t.code,{children:"gas fee cap"}),". If the base price for a block is more than\nthe gas fee cap, then the transaction will remain in the transaction pool until\nthe base fee has been changed to be less than or equal to the provided gas fee\ncap (note: the transaction pool limits the number of pending transactions, so if\nthe number of pending transactions exceeds the configured cap then the\ntransactions with the lowest fees may be evicted from the transaction pool and\nneed to be re-issued)."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Gas tip cap"})," is the maximum price per unit of gas, that the user is willing to\npay above the base price to prioritize their transaction. But the tip is capped\nby both the gas tip cap as well as the gas fee cap. The actual tip paid above\nthe ",(0,i.jsx)(t.code,{children:"base fee"})," of the block is known as the ",(0,i.jsx)(t.code,{children:"effective gas tip"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"EffectiveTip = min(MaxFeeCap - BaseFee, GasTipCap)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Consider the following examples (here Gwei or nLUX is one-billionth of LUX) -"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Transaction"}),(0,i.jsx)(t.th,{children:"Max Fee Cap"}),(0,i.jsx)(t.th,{children:"Gas tip cap"}),(0,i.jsx)(t.th,{children:"Base price"}),(0,i.jsx)(t.th,{children:"Effective tip"}),(0,i.jsx)(t.th,{children:"Total price"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"50 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:"25 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:"25 Gwei"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"50 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:"50 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:"50 Gwei"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"50 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:"60 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"PENDING"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"A"}),(0,i.jsx)(t.td,{children:"50 Gwei"}),(0,i.jsx)(t.td,{children:"10 Gwei"}),(0,i.jsx)(t.td,{children:"40 Gwei"}),(0,i.jsx)(t.td,{children:"10 Gwei"}),(0,i.jsx)(t.td,{children:"50 Gwei"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"B"}),(0,i.jsx)(t.td,{children:"40 Gwei"}),(0,i.jsx)(t.td,{children:"40 Gwei"}),(0,i.jsx)(t.td,{children:"40 Gwei"}),(0,i.jsx)(t.td,{children:"0 Gwei"}),(0,i.jsx)(t.td,{children:"40 Gwei"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Look at transactions ",(0,i.jsx)(t.strong,{children:"A"})," and ",(0,i.jsx)(t.strong,{children:"B"})," (the bottom two transactions). In these\nscenarios, it looks like transaction B is paying a higher tip, however, this\ndepends on the base fee of the block where the transactions are included. The\neffective tip of A is more than that of B. So, if both of these transaction\ncompetes for being included in the next block, then the validators would\nprioritize transaction A since it pays a higher effective tip."]}),"\n",(0,i.jsx)(t.h2,{id:"why-my-transaction-is-on-hold-or-failing",children:"Why My Transaction is on Hold or Failing?"}),"\n",(0,i.jsxs)(t.p,{children:["If your transaction is failing and giving an error - ",(0,i.jsx)(t.code,{children:"transaction underpriced"}),",\nthen the max fee cap of your transaction must be less than the minimum base\nprice that the network supports (as of now, it's 25 nLUX or Gwei). Although the\nbase fee is automatically estimated in wallets like Core or MetaMask, you can try\nincreasing the max fee cap in the wallet."]}),"\n",(0,i.jsx)(t.p,{children:"During a period of heavy congestion on the network, all submitted transactions\ncan't be included in the same block, due to the block's gas limit. So,\nvalidators choose transactions giving higher priority to transactions with the\nhighest effective tips."}),"\n",(0,i.jsx)(t.p,{children:"Another reason your transaction may get stuck in pending, is that the max fee\ncap may be below the current base fee that the network is charging. In this\ncase, you need to increase the max fee cap of your transaction above the current\nbase fee for it to be included in the block."}),"\n",(0,i.jsx)(t.p,{children:"These fee adjustments can be made through wallets like Core or MetaMask."}),"\n",(0,i.jsx)(t.h2,{id:"adjusting-gas-fees-before-submitting-the-transaction",children:"Adjusting Gas Fees Before Submitting the Transaction"}),"\n",(0,i.jsx)(t.p,{children:"You may not need to edit the gas fees on normal days. This is only required if\nthere is heavy congestion on the network, and the base fees are frequently\nfluctuating."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Let's create a sample transaction on Lux Mainnet, in which we will be\nsending 0.1 LUX to a receiver using Core. Four predefined gas settings can\nbe seen, which are Core's inbuilt gas estimation. To set a custom fee select\n\u201cCustom\u201d and enter the gas amount to use. By clicking on the ",(0,i.jsx)(t.strong,{children:"Settings"})," icon,\nwe can review gas fees and the amount which we want to send."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dynamic fees adjustment 1",src:n(88640).Z+"",width:"400",height:"645"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On this page, you can edit the priority fee (Max Priority Fee) and base fee (Max\nbase fee). You can estimate the max fee as shown on\n",(0,i.jsx)(t.a,{href:"https://snowtrace.io/gastracker",children:"Snowtrace"}),", which represents the average max\nfee over the last 3 seconds. For more detailed statistics, you can have a\nlook ",(0,i.jsx)(t.a,{href:"https://stats.lux.network/dashboard/c-chain-activity/",children:"here"}),"."]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dynamic fees adjustment 2",src:n(56269).Z+"",width:"400",height:"642"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If the network activity is high, you have to edit the priority and max fees\naccordingly, as given on Snowtrace. Consider the example below, where the\naverage max fee is 26 Gwei (nLUX)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dynamic fees adjustment 3",src:n(79859).Z+"",width:"2794",height:"930"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"It is recommended to set the max fee cap as the maximum price that you are\nwilling to pay for a transaction, no matter how high or low the base fee will\nbe, as you will only be charged the minimum of base fee and the max fee cap,\nalong with a small priority fee above the base fee. Now let's edit the max\nfee to 35 Gwei. This would ensure that our transaction would not fail until\nthe base fee would exceed this amount. We can set a priority fee to anything\nbetween 0 and 35 Gwei. The higher the priority fee, the faster the transaction\nwill be. For this example, let's set this to 2 Gwei. Now, save and send the\ntransaction."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dynamic fees adjustment 4",src:n(71211).Z+"",width:"400",height:"638"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After submitting the transaction, even if the base fee has decreased, you\nwill only pay 2 Gwei above that fee as a priority fee. If this fee is one of\nthe highest among the pending transactions, then it will be confirmed\nrapidly. We can see the confirmation of the transaction below."}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dynamic fees adjustment 5",src:n(53638).Z+"",width:"400",height:"636"})})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dynamic fees adjustment 6",src:n(3736).Z+"",width:"2778",height:"1362"})}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},88640:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adjust-gas1-0bd1330b59ad3d19fe5278e1386eb38d.png"},56269:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adjust-gas2-1db0fef2ce0e0912a7894b6c0a1fd2e2.png"},79859:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adjust-gas3-9136461f46cf345a139b82cd74068791.png"},71211:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adjust-gas4-81f6a56506b751c79ff7832577300a10.png"},53638:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adjust-gas5-c25a2df8e19da677461bb581e9b29bf6.png"},3736:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/adjust-gas6-6bfbab4d9c1bc28333e109c876fad3ef.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);