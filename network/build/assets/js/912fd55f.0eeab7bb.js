"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[113],{72901:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var a=l(49214),i=l(43540);const t={tags:["Tooling","Luxd APIs"],description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",pagination_label:"Luxd Install Script",sidebar_position:2},o="Making API Calls",s={id:"tooling/luxd-postman-collection/making-api-calls",title:"Making API Calls",description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",source:"@site/docs/tooling/luxd-postman-collection/making-api-calls.md",sourceDirName:"tooling/luxd-postman-collection",slug:"/tooling/luxd-postman-collection/making-api-calls",permalink:"/docs/tooling/luxd-postman-collection/making-api-calls",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/tooling/luxd-postman-collection/making-api-calls.md",tags:[{label:"Tooling",permalink:"/docs/tags/tooling"},{label:"Luxd APIs",permalink:"/docs/tags/luxd-ap-is"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Tooling","Luxd APIs"],description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",pagination_label:"Luxd Install Script",sidebar_position:2},sidebar:"tooling",previous:{title:"Luxd Install Script",permalink:"/docs/tooling/luxd-postman-collection/setup"},next:{title:"Luxd Install Script",permalink:"/docs/tooling/luxd-postman-collection/variables"}},c={},d=[{value:"How to Make an API Call",id:"how-to-make-an-api-call",level:2},{value:"Examples",id:"examples",level:2},{value:"C-Chain Public API Call",id:"c-chain-public-api-call",level:3},{value:"X-Chain Public API Call",id:"x-chain-public-api-call",level:3},{value:"P-Chain Public API Call",id:"p-chain-public-api-call",level:3},{value:"API Call Using Variables",id:"api-call-using-variables",level:3}];function r(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"making-api-calls",children:"Making API Calls"}),"\n",(0,a.jsx)(e.h2,{id:"how-to-make-an-api-call",children:"How to Make an API Call"}),"\n",(0,a.jsxs)(e.p,{children:["After ",(0,a.jsx)(e.a,{href:"../luxd-postman-collection/setup#setup",children:"installing Postman"}),"\nand importing the ",(0,a.jsx)(e.a,{href:"../luxd-postman-collection/setup#collection-import",children:"Lux collection"}),", you can choose an API to make the call."]}),"\n",(0,a.jsx)(e.p,{children:"You should also make sure the URL is the correct one for the call.\nThis URL consists of the base URL and the endpoint:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["The base URL is set by an environment variable called ",(0,a.jsx)(e.code,{children:"baseURL"}),", and it is by\ndefault Lux's ",(0,a.jsx)(e.a,{href:"/docs/tooling/rpc-providers#mainnet-rpc---public-api-server",children:"public API"}),".\nIf you need to make a local API call, simply change the URL to localhost.\nThis can be done by changing the value\nof the ",(0,a.jsx)(e.code,{children:"baseURL"})," variable or changing the URL directly on the call tab.\nCheck out the ",(0,a.jsx)(e.a,{href:"/docs/tooling/rpc-providers",children:"RPC providers"})," to see all public URLs."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["The API endpoint depends on which API is used. Please check out\n",(0,a.jsx)(e.a,{href:"/docs/reference/luxd/c-chain/api",children:"our APIs"})," to find the proper endpoint."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"The last step is to add the needed parameters for the call.\nFor example, if a user wants to fetch data\nabout a certain transaction, the transaction hash is needed. For fetching data about a\nblock, depending on the call used, the block hash or number will be required."}),"\n",(0,a.jsxs)(e.p,{children:["After clicking the ",(0,a.jsx)(e.strong,{children:"Send"})," button, if the call is successfully, the output will be displayed in the ",(0,a.jsx)(e.strong,{children:"Body"})," tab."]}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["Data visualization is available for a number of methods.\nLearn how to use it with the help of\n",(0,a.jsx)(e.a,{href:"/docs/tooling/luxd-postman-collection/data-visualization",children:"this"})," guide."]})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Make Call",src:l(61550).A+"",width:"1672",height:"936"})}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.h3,{id:"c-chain-public-api-call",children:"C-Chain Public API Call"}),"\n",(0,a.jsxs)(e.p,{children:["Fetching data about a C-Chain transaction using ",(0,a.jsx)(e.code,{children:"eth_getTransactionByHash"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"x-chain-public-api-call",children:"X-Chain Public API Call"}),"\n",(0,a.jsxs)(e.p,{children:["Fetching data about an X-Chain block using ",(0,a.jsx)(e.code,{children:"avm.getBlock"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"p-chain-public-api-call",children:"P-Chain Public API Call"}),"\n",(0,a.jsxs)(e.p,{children:["Getting the current P-Chain height using ",(0,a.jsx)(e.code,{children:"platform.getHeight"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"api-call-using-variables",children:"API Call Using Variables"}),"\n",(0,a.jsxs)(e.p,{children:["Let\u2019s say we want fetch data about this ",(0,a.jsx)(e.code,{children:"0x20cb0c03dbbe39e934c7bb04979e3073cc2c93defa30feec41198fde8fabc9b8"}),"\nC-Chain transaction using both:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"eth_getTransactionReceipt"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"eth_getTransactionByHash"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"We can set up an environment variable with the transaction hash as value and use it on both calls."}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["Find out more about variables ",(0,a.jsx)(e.a,{href:"/docs/tooling/luxd-postman-collection/variables",children:"here"}),"."]})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},61550:(n,e,l)=>{l.d(e,{A:()=>a});const a=l.p+"assets/images/postman-38-make-api-call-176b9a7b315f98d6377fbd52294f330f.png"},43540:(n,e,l)=>{l.d(e,{R:()=>o,x:()=>s});var a=l(48318);const i={},t=a.createContext(i);function o(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);