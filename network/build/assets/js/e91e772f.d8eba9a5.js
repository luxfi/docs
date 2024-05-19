"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[8057],{89009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(49214),i=t(43540);const a={tags:["Tooling","LuxJS"],description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",pagination_label:"Generate a Transaction ID Using LuxJS",sidebar_label:"Generate a Transaction ID",sidebar_position:1},r="Generate a Transaction ID Using LuxJS",o={id:"tooling/luxjs-guides/generate-a-txid-using-luxjs",title:"Generate a Transaction ID Using LuxJS",description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",source:"@site/docs/tooling/luxjs-guides/generate-a-txid-using-luxjs.md",sourceDirName:"tooling/luxjs-guides",slug:"/tooling/luxjs-guides/generate-a-txid-using-luxjs",permalink:"/docs/tooling/luxjs-guides/generate-a-txid-using-luxjs",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/tooling/luxjs-guides/generate-a-txid-using-luxjs.md",tags:[{label:"Tooling",permalink:"/docs/tags/tooling"},{label:"LuxJS",permalink:"/docs/tags/lux-js"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Tooling","LuxJS"],description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",pagination_label:"Generate a Transaction ID Using LuxJS",sidebar_label:"Generate a Transaction ID",sidebar_position:1},sidebar:"tooling",previous:{title:"Manual Creation of Public-Private Key Pairs using LuxJS",permalink:"/docs/tooling/luxjs-guides/generate-key-pair"},next:{title:"Transfer LUX Tokens Between Chains",permalink:"/docs/tooling/luxjs-guides/cross-chain-transfers"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a Signed Transaction",id:"creating-a-signed-transaction",level:2},{value:"Generate the TxID",id:"generate-the-txid",level:2},{value:"Confirm TxID Is Correct",id:"confirm-txid-is-correct",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"generate-a-transaction-id-using-luxjs",children:"Generate a Transaction ID Using LuxJS"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["A transaction id, or TxID, is a string of numbers and letters which identifies a\nspecific transaction on the blockchain. TXIDs are one of the most core\ncomponents that developers interact with when working on a blockchain system.\nThey're deterministic and can be generated using\n",(0,s.jsx)(n.a,{href:"/reference",children:"Luxd"})," or\n",(0,s.jsx)(n.a,{href:"/docs/tooling/luxjs-overview",children:"LuxJS"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["On the Lux network a TxID is a CB58 encoded string which is created by\n",(0,s.jsx)(n.code,{children:"sha256"})," hashing the transaction.\n",(0,s.jsx)(n.a,{href:"https://support.lux.network/en/articles/4587395-what-is-cb5",children:"CB58"})," is a base58\nencoding with a checksum. Below are the steps for deterministically generating a\nTxID using LuxJS."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-signed-transaction",children:"Creating a Signed Transaction"}),"\n",(0,s.jsxs)(n.p,{children:["The script which we're using can be found in the LuxJS example scripts as\n",(0,s.jsx)(n.a,{href:"https://github.com/luxfi/luxjs/blob/master/examples/avm/baseTx-lux.ts",children:"example/avm/baseTx-LUX.ts"}),".\nFirst, create a\n",(0,s.jsx)(n.a,{href:"/docs/reference/luxd/x-chain/txn-format#what-base-tx-contains",children:"BaseTx"}),".\nWe're omitting that part for the sake of brevity. Once you have a ",(0,s.jsx)(n.code,{children:"BaseTx"})," then\ncreate an ",(0,s.jsx)(n.code,{children:"UnsignedTx"})," and ",(0,s.jsx)(n.code,{children:"sign"})," it. Lastly convert the ",(0,s.jsx)(n.code,{children:"Tx"})," to a ",(0,s.jsx)(n.code,{children:"Buffer"})," by\ncalling ",(0,s.jsx)(n.code,{children:"tx.toBuffer()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Manually build BaseTx via steps in example/avm/baseTx-lux.ts\n// Create an UnsignedTx with the BaseTx\nconst unsignedTx: UnsignedTx = new UnsignedTx(baseTx)\n// Sign the UnsignedTx to create a Tx\nconst tx: Tx = unsignedTx.sign(xKeychain)\n// Convert the Tx to a Buffer\nconst txBuf: Buffer = tx.toBuffer()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"generate-the-txid",children:"Generate the TxID"}),"\n",(0,s.jsxs)(n.p,{children:["Next, create a ",(0,s.jsx)(n.code,{children:"sha256"})," hash of the ",(0,s.jsx)(n.code,{children:"Buffer"})," from the previous step."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// Create sha256 hash of the Tx Buffer\nconst sha256Hash: Buffer = Buffer.from(\n  createHash("sha256").update(txBuf).digest().buffer\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned in the ",(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"}),", a TxID is a CB58 encoded\nstring which is created by ",(0,s.jsx)(n.code,{children:"sha256"})," hashing the transaction. To create the TxID\nnow CB58 encode the newly created ",(0,s.jsx)(n.code,{children:"sha256"})," hash."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// cb58 the sha256 hash\nconst generatedTxID: string = bintools.cb58Encode(sha256Hash)\nconsole.log(`Generated TxID: ${generatedTxID}`)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"generatedTxID"})," will be a CB58 encoded string similar to ",(0,s.jsx)(n.code,{children:"eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"confirm-txid-is-correct",children:"Confirm TxID Is Correct"}),"\n",(0,s.jsxs)(n.p,{children:["To confirm that the ",(0,s.jsx)(n.code,{children:"generatedTxID"})," is correct issue the ",(0,s.jsx)(n.code,{children:"BaseTx"})," to Luxd\nand compare the TxID which is returned with the recently created TxID."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// get the actual txID from the full node\nconst actualTxID: string = await xchain.issueTx(tx)\nconsole.log(`Success! TxID: ${actualTxID}`)\n\n// Note the generated TxID and the returned TxID match\nGenerated TXID: eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX\nReturned TXID: eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX\n"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["TXIDs are a core component of any blockchain system. They are used extensively\nin Lux when creating transactions, issuing new assets and even spinning up\nSubnets and validators. TXIDs are deterministically created by ",(0,s.jsx)(n.code,{children:"sha256"})," hashing\na ",(0,s.jsx)(n.code,{children:"Buffer"})," of the transaction and then CB58 encoding the hash."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43540:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(48318);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);