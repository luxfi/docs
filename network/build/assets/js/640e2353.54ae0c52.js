"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[9173],{38066:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(49214),r=s(43540);const i={tags:["Build","Subnets","Lux-CLI"],description:"If you need to send funds to your Subnet control key or need to move funds from one Ledger address index to another, this guide will demostrate how to enable direct transfers between ledger P-Chain addresses using the Lux-CLI command `lux key transfer`.",sidebar_label:"Transfer P-Chain Funds",pagination_label:"How to Use Lux-CLI to Transfer P-Chain Funds",sidebar_position:3},d="How to Use Lux-CLI to Transfer P-Chain Funds",a={id:"build/subnet/maintain/how-to-transfer-funds",title:"How to Use Lux-CLI to Transfer P-Chain Funds",description:"If you need to send funds to your Subnet control key or need to move funds from one Ledger address index to another, this guide will demostrate how to enable direct transfers between ledger P-Chain addresses using the Lux-CLI command `lux key transfer`.",source:"@site/docs/build/subnet/maintain/how-to-transfer-funds.md",sourceDirName:"build/subnet/maintain",slug:"/build/subnet/maintain/how-to-transfer-funds",permalink:"/docs/build/subnet/maintain/how-to-transfer-funds",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/subnet/maintain/how-to-transfer-funds.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Subnets",permalink:"/docs/tags/subnets"},{label:"Lux-CLI",permalink:"/docs/tags/lux-cli"}],version:"current",sidebarPosition:3,frontMatter:{tags:["Build","Subnets","Lux-CLI"],description:"If you need to send funds to your Subnet control key or need to move funds from one Ledger address index to another, this guide will demostrate how to enable direct transfers between ledger P-Chain addresses using the Lux-CLI command `lux key transfer`.",sidebar_label:"Transfer P-Chain Funds",pagination_label:"How to Use Lux-CLI to Transfer P-Chain Funds",sidebar_position:3},sidebar:"build-subnet",previous:{title:"How to Delete a Subnet",permalink:"/docs/build/subnet/maintain/delete-subnet"},next:{title:"Deploy a Smart Contract on Your Subnet-EVM Using Remix and Core",permalink:"/docs/build/subnet/utility/deploy-smart-contract-to-subnet"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example: Sending All Funds From One Ledger to Another",id:"example-sending-all-funds-from-one-ledger-to-another",level:2},{value:"Determine Sender Address Index",id:"determine-sender-address-index",level:3},{value:"Determine Receiver Address Index",id:"determine-receiver-address-index",level:3},{value:"Send the Transfer",id:"send-the-transfer",level:3},{value:"Receive the Transfer",id:"receive-the-transfer",level:3},{value:"Verifying Results of the Transfer Operation using <code>key list</code>",id:"verifying-results-of-the-transfer-operation-using-key-list",level:3},{value:"Recovery Steps",id:"recovery-steps",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-lux-cli-to-transfer-p-chain-funds",children:"How to Use Lux-CLI to Transfer P-Chain Funds"}),"\n",(0,t.jsx)(n.p,{children:"Transferring funds between P-Chain wallets becomes necessary in certain situations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Funds need to be sent to the Subnet control key, which might have a zero balance\ndue to fee payments. The Subnet control key requires funding to ensure proper\nsupport for Subnet operations."}),"\n",(0,t.jsx)(n.li,{children:"Funds need to be moved from one Ledger address index to another. A Ledger manages an\ninfinite sequence of addresses all derived from a master private key and\ncan sign for any of those addresses. Each one is referred to by an index, or the associated\naddress. Lux-CLI usually expects to use index 0, but sometimes, the funds are in a\ndifferent index. Occasionally, a transfer made to a ledger can be made to an address different\nfrom the default one used by the CLI."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To enable direct transfers between P-Chain addresses, use the command\n",(0,t.jsx)(n.code,{children:"lux key transfer"}),". This operation involves a series of import/export\nactions with the P-Chain and X-Chain. The fee for this operation is four times the typical\nimport operation fee, which comes out to 0.004 LUX. You can find more\ninformation about fees ",(0,t.jsx)(n.a,{href:"/reference/standards/guides/txn-fees",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"key transfer"})," command can also be applied to the stored keys managed by the CLI. It enables\nmoving funds from one stored key to another, and from a ledger to a stored key or the other way."]})}),"\n",(0,t.jsx)(n.p,{children:"This how-to guide focuses on transferring funds between ledger accounts."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/tooling/cli-guides/install-cli",children:(0,t.jsx)(n.code,{children:"Lux-CLI"})})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:["Multiple Ledger devices ",(0,t.jsx)(n.a,{href:"/docs/build/subnet/deploy/mainnet-subnet#setting-up-your-ledger",children:"configured for Lux"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-sending-all-funds-from-one-ledger-to-another",children:"Example: Sending All Funds From One Ledger to Another"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Source address: ledger A, index 2 (the web wallet shows 4.5 LUX for this ledger)"}),"\n",(0,t.jsx)(n.li,{children:"Target address: ledger B, index 0 (the web wallet shows 0 LUX for this ledger)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"determine-sender-address-index",children:"Determine Sender Address Index"}),"\n",(0,t.jsx)(n.p,{children:"A ledger can manage an infinite amount of addresses derived from a main private key. Because of this,\nmany operations require the user to specify an address index."}),"\n",(0,t.jsxs)(n.p,{children:["After confirming with a web wallet that 4.5 LUX is available on p-chain address\n",(0,t.jsx)(n.code,{children:"P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0"}),", connect ledger A."]}),"\n",(0,t.jsx)(n.p,{children:"With the lux app running, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key list --mainnet --ledger 0,1,2,3,4,5\n"})}),"\n",(0,t.jsx)(n.p,{children:"To see p-chain addresses and balances for the first 6 indices in the ledger derived owner addresses."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n| ledger | index 0 | P-Chain (Bech32 format) | P-lux1g8yucm7j0cnwwru4rp5lkzw6dpdxjmc2rfkqs9 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 1 |                         | P-lux1drppshkst2ccygyq37m2z9e3ex2jhkd2txcm5r |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 2 |                         | P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0 |     4.5 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 3 |                         | P-lux1yfpm7v5y5rej2nu7t2r0ffgrlpfq36je0rc5k6 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 4 |                         | P-lux17nqvwcqsa8ddgeww8gzmfe932pz2syaj2vyd89 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 5 |                         | P-lux1jzvnd05vsfksrtatm2e3rzu6eux9a287493yf8 |       0 | Mainnet |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The address ",(0,t.jsx)(n.code,{children:"P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0"})," has 4.5 LUX and\nis associated with index 2 of ledger A."]}),"\n",(0,t.jsx)(n.h3,{id:"determine-receiver-address-index",children:"Determine Receiver Address Index"}),"\n",(0,t.jsx)(n.p,{children:"In this case the user wants to use index 0, the one CLI by default expects to contain funds."}),"\n",(0,t.jsx)(n.p,{children:"For the transfer command, it is also needed to know the target p-chain address. Do the following to\nobtain it:"}),"\n",(0,t.jsx)(n.p,{children:"With the ledger B connected and the avalache app running, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key list --mainnet --ledger 0\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n| ledger | index 0 | P-Chain (Bech32 format) | P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm |       0 | Mainnet |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Target address to be used is ",(0,t.jsx)(n.code,{children:"P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm"}),", containing 0 funds."]}),"\n",(0,t.jsx)(n.h3,{id:"send-the-transfer",children:"Send the Transfer"}),"\n",(0,t.jsx)(n.p,{children:"A P-Chain to P-chain transfer is a two-part operation. There is no need for the two parts to be executed\non the same machine, only for them to have some common params. For each part, the appropriate ledger\n(either source or target) must be connected to the machine executing it."}),"\n",(0,t.jsx)(n.p,{children:"The first step moves the money out of the\nsource account into a X-Chain account owner by the receiver. It needs to be signed by the sending ledger."}),"\n",(0,t.jsx)(n.p,{children:"Enter the amount of LUX to send to the recipient. This amount does not include fees."}),"\n",(0,t.jsx)(n.p,{children:"Note that the sending ledger pays all the fees."}),"\n",(0,t.jsx)(n.p,{children:"Then start the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key transfer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["First step is to specify the network. ",(0,t.jsx)(n.code,{children:"Mainnet"})," in this case:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Network to use:\n  \u25b8 Mainnet\n    Testnet\n    Local Network\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, the step of the transfer must be specified. Send in this case:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"? Step of the transfer:\n  \u25b8 Send\n    Receive\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, the key source for the sender address. That is, the key that is going to sign the sending\ntransactions. Select ",(0,t.jsx)(n.code,{children:"Use ledger"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"? Which key source should be used to  for the sender address?:\n    Use stored key\n  \u25b8 Use ledger\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, the ledger index is asked for. Input ",(0,t.jsx)(n.code,{children:"2"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"\u2717 Ledger index to use: 2\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, the amount to be sent is asked for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"\u2717 Amount to send (LUX units): 4.496\n"})}),"\n",(0,t.jsx)(n.p,{children:"The, the target address is required:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"\u2717 Receiver address: P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After that, a confirmation message is printed. Read carefully and choose ",(0,t.jsx)(n.code,{children:"Yes"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"this operation is going to:\n- send 4.496000000 LUX from P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0 to target address P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm\n- take a fee of 0.004000000 LUX from source address P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0\n\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Confirm transfer:\n    No\n  \u25b8 Yes\n"})}),"\n",(0,t.jsx)(n.p,{children:"After this, the first part is completed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Issuing ExportTx P -> X\n"})}),"\n",(0,t.jsx)(n.h3,{id:"receive-the-transfer",children:"Receive the Transfer"}),"\n",(0,t.jsx)(n.p,{children:"In this step, Ledger B signs the transaction to receive the funds. It imports the funds on the X-Chain\nbefore exporting them back to the desired P-Chain address."}),"\n",(0,t.jsx)(n.p,{children:"Connect ledger B and execute lux app."}),"\n",(0,t.jsx)(n.p,{children:"Then start the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key transfer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Specify the ",(0,t.jsx)(n.code,{children:"Mainnet"})," network:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Network to use:\n  \u25b8 Mainnet\n    Testnet\n    Local Network\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, the step of the transfer must be specified. Receive in this case:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"? Step of the transfer:\n    Send\n  \u25b8 Receive\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, select Ledger as the key source that is going to sign the receiver operations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"? Which key source should be used to  for the receiver address?:\n    Use stored key\n  \u25b8 Use ledger\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, the ledger index is asked for. Input ",(0,t.jsx)(n.code,{children:"0"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"\u2717 Ledger index to use: 0\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, the amount to receive is asked for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"\u2717 Amount to send (LUX units): 4.496\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After that, a confirmation message is printed. Select ",(0,t.jsx)(n.code,{children:"Yes"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"this operation is going to:\n- receive 4.496000000 LUX at target address P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm:\n\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Confirm transfer:\n    No\n  \u25b8 Yes\n"})}),"\n",(0,t.jsx)(n.p,{children:"Finally, the second part of the operation is executed and the transfer is completed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Issuing ImportTx P -> X\nIssuing ExportTx X -> P\nIssuing ImportTx X -> P\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"verifying-results-of-the-transfer-operation-using-key-list",children:["Verifying Results of the Transfer Operation using ",(0,t.jsx)(n.code,{children:"key list"})]}),"\n",(0,t.jsx)(n.p,{children:"First verify ledger A accounts. Connect ledger A and open the lux app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key list --mainnet --ledger 0,1,2,3,4,5\n"})}),"\n",(0,t.jsx)(n.p,{children:"With result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n| ledger | index 0 | P-Chain (Bech32 format) | P-lux1g8yucm7j0cnwwru4rp5lkzw6dpdxjmc2rfkqs9 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 1 |                         | P-lux1drppshkst2ccygyq37m2z9e3ex2jhkd2txcm5r |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 2 |                         | P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 3 |                         | P-lux1yfpm7v5y5rej2nu7t2r0ffgrlpfq36je0rc5k6 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 4 |                         | P-lux17nqvwcqsa8ddgeww8gzmfe932pz2syaj2vyd89 |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 5 |                         | P-lux1jzvnd05vsfksrtatm2e3rzu6eux9a287493yf8 |       0 | Mainnet |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, verify ledger B accounts. Connect ledger B and open the lux app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key list --mainnet --ledger 0,1,2,3,4,5\n"})}),"\n",(0,t.jsx)(n.p,{children:"With result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n| ledger | index 0 | P-Chain (Bech32 format) | P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm |   4.496 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 1 |                         | P-lux18e9qsm30du590lhkwydhmkfwhcc9999gvxcaez |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 2 |                         | P-lux1unkkjstggvdty5gtnfhc0mgnl7qxa52z2d4c9y |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 3 |                         | P-lux1ek7n0zky3py7prxcrgnmh44y3wm6lc7r7x5r8e |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 4 |                         | P-lux1rsz6nt6qht5ep37qjk7ht0u9h30mgfhehsmqea |       0 | Mainnet |\n+        +---------+                         +-----------------------------------------------+---------+---------+\n|        | index 5 |                         | P-lux17u5wm4tfex7xr27xlwejm28pyk84tj0jzp42zz |       0 | Mainnet |\n+--------+---------+-------------------------+-----------------------------------------------+---------+---------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"recovery-steps",children:"Recovery Steps"}),"\n",(0,t.jsx)(n.p,{children:"As a multi step operation, the receiving part of the transfer can have intermediate errors, due for example\nto temporal network connections on the client side."}),"\n",(0,t.jsx)(n.p,{children:"The CLI is going to capture errors and provide the user with a recovery message of the kind:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ERROR: restart from this step by using the same command with extra arguments: --receive-recovery-step 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"If this happen, the receiving operation should be started the same way, choosing the same options, but\nadding the extra suggested parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"lux key transfer --receive-recovery-step 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, the CLI is going to resume where it left off."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},43540:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(48318);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);