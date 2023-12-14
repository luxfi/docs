"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5415],{67998:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var t=i(85893),n=i(11151);const l={tags:["Tooling","Luxd APIs"],description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",pagination_label:"Luxd Install Script",sidebar_position:4},s="Data Visualization",o={id:"tooling/luxd-postman-collection/data-visualization",title:"Data Visualization",description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",source:"@site/docs/tooling/luxd-postman-collection/data-visualization.md",sourceDirName:"tooling/luxd-postman-collection",slug:"/tooling/luxd-postman-collection/data-visualization",permalink:"/tooling/luxd-postman-collection/data-visualization",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/tooling/luxd-postman-collection/data-visualization.md",tags:[{label:"Tooling",permalink:"/tags/tooling"},{label:"Luxd APIs",permalink:"/tags/luxd-ap-is"}],version:"current",sidebarPosition:4,frontMatter:{tags:["Tooling","Luxd APIs"],description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",pagination_label:"Luxd Install Script",sidebar_position:4},sidebar:"tooling",previous:{title:"Luxd Install Script",permalink:"/tooling/luxd-postman-collection/variables"},next:{title:"\ud83d\udd0c RPC Providers",permalink:"/tooling/rpc-providers"}},c={},r=[{value:"API calls with Data Visualization",id:"api-calls-with-data-visualization",level:2},{value:"C-Chain",id:"c-chain",level:3},{value:"P-Chain",id:"p-chain",level:3},{value:"X-Chain",id:"x-chain",level:3},{value:"Data Visualization Features",id:"data-visualization-features",level:2},{value:"How to Visualize Responses",id:"how-to-visualize-responses",level:2},{value:"Examples",id:"examples",level:2},{value:"<code>eth_getTransactionByHash</code>",id:"eth_gettransactionbyhash",level:3},{value:"<code>avm.getBlock</code>",id:"avmgetblock",level:3},{value:"<code>platform.getCurrentValidators</code>",id:"platformgetcurrentvalidators",level:3},{value:"<code>lux.getAtomicTx</code>",id:"luxgetatomictx",level:3},{value:"<code>eth_getBalance</code>",id:"eth_getbalance",level:3}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"data-visualization",children:"Data Visualization"}),"\n",(0,t.jsx)(a.h2,{id:"api-calls-with-data-visualization",children:"API calls with Data Visualization"}),"\n",(0,t.jsx)(a.p,{children:"Data visualization is available for a number of API calls whose responses\nare transformed and presented in tabular format for easy reference."}),"\n",(0,t.jsxs)(a.p,{children:["Please check out\n",(0,t.jsx)(a.a,{href:"../luxd-postman-collection/setup#setup",children:"Setting up Postman"})," and\n",(0,t.jsx)(a.a,{href:"/tooling/luxd-postman-collection/making-api-calls",children:"Making API Calls"}),"\nbeforehand, as this guide assumes that the user has already gone through these steps."]}),"\n",(0,t.jsx)(a.p,{children:"Data visualizations are available for following API calls:"}),"\n",(0,t.jsx)(a.h3,{id:"c-chain",children:"C-Chain"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/c-chain/api#eth_basefee",children:(0,t.jsx)(a.code,{children:"eth_baseFee"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_blockNumber",children:(0,t.jsx)(a.code,{children:"eth_blockNumber"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_chainId",children:(0,t.jsx)(a.code,{children:"eth_chainId"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/c-chain/api#eth_getassetbalance",children:(0,t.jsx)(a.code,{children:"eth_getAssetBalance"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_getBalance",children:(0,t.jsx)(a.code,{children:"eth_getBalance"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_getBlockByHash",children:(0,t.jsx)(a.code,{children:"eth_getBlockByHash"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_getBlockByNumber",children:(0,t.jsx)(a.code,{children:"eth_getBlockByNumber"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_getTransactionByHash",children:(0,t.jsx)(a.code,{children:"eth_getTransactionByHash"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.quicknode.com/docs/ethereum/eth_getTransactionReceipt",children:(0,t.jsx)(a.code,{children:"eth_getTransactionReceipt"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/c-chain/api#luxgetatomictx",children:(0,t.jsx)(a.code,{children:"lux.getAtomicTx"})})}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"p-chain",children:"P-Chain"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/p-chain/api#platformgetcurrentvalidators",children:(0,t.jsx)(a.code,{children:"platform.getCurrentValidators"})})}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"x-chain",children:"X-Chain"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/x-chain/api#avmgetassetdescription",children:(0,t.jsx)(a.code,{children:"avm.getAssetDescription"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/x-chain/api#avmgetblock",children:(0,t.jsx)(a.code,{children:"avm.getBlock"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/x-chain/api#avmgetblockbyheight",children:(0,t.jsx)(a.code,{children:"avm.getBlockByHeight"})})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../../reference/luxd/x-chain/api#avmgettx",children:(0,t.jsx)(a.code,{children:"avm.getTx"})})}),"\n"]}),"\n",(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/2jS5EFWLoGs?modestbranding=1&rel=0&color=white&autoplay=1",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(a.h2,{id:"data-visualization-features",children:"Data Visualization Features"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The response output is displayed in tabular format, each data category having a\ndifferent color."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(7149).Z+"",width:"2382",height:"996"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Unix timestamps are converted to date and time."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(19922).Z+"",width:"1648",height:"160"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Hexadecimal to decimal conversions."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(73314).Z+"",width:"1588",height:"186"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Native token amounts shown as LUX and/or gwei and wei."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(69162).Z+"",width:"1588",height:"164"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The name of the transaction type added besides the transaction type ID."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(84469).Z+"",width:"1420",height:"140"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Percentages added for the amount of gas used. This percent represents what percentage\nof gas was used our of the ",(0,t.jsx)(a.code,{children:"gasLimit"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(70309).Z+"",width:"1572",height:"162"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Convert the output for atomic transactions from hexadecimal to user readable."}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"Please note that this only works for C-Chain Mainnet, not Testnet."})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Data Visualization Feature",src:i(36503).Z+"",width:"2494",height:"1508"})}),"\n",(0,t.jsx)(a.h2,{id:"how-to-visualize-responses",children:"How to Visualize Responses"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["After ",(0,t.jsx)(a.a,{href:"../luxd-postman-collection/setup#postman-installation",children:"installing Postman"}),"\nand importing the ",(0,t.jsx)(a.a,{href:"../luxd-postman-collection/setup#collection-import",children:"Lux collection"}),",\nchoose an API to make the call."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Make the call."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Click on the ",(0,t.jsx)(a.strong,{children:"Visualize"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Now all data from the output is displayed in tabular format."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsx)(a.p,{children:"Learn how to make an API call with Postman with the help of this guide."})]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Visualize Response",src:i(61280).Z+"",width:"3450",height:"1920"}),"\n",(0,t.jsx)(a.img,{alt:"Visualize Response",src:i(33331).Z+"",width:"3446",height:"1862"})]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.h3,{id:"eth_gettransactionbyhash",children:(0,t.jsx)(a.code,{children:"eth_getTransactionByHash"})}),"\n",(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/M83WhbXq5R0?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(a.h3,{id:"avmgetblock",children:(0,t.jsx)(a.code,{children:"avm.getBlock"})}),"\n",(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/d5E2pHXFInE?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(a.h3,{id:"platformgetcurrentvalidators",children:(0,t.jsx)(a.code,{children:"platform.getCurrentValidators"})}),"\n",(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/Pkf84edkw_0?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(a.h3,{id:"luxgetatomictx",children:(0,t.jsx)(a.code,{children:"lux.getAtomicTx"})}),"\n",(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/AYIgdQomHqc?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(a.h3,{id:"eth_getbalance",children:(0,t.jsx)(a.code,{children:"eth_getBalance"})}),"\n",(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/M3n7cm1DYLE?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7149:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-24-visualization-feature-3ab5799844b308f4dc6eb7bd60dc6c35.png"},19922:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-25-visualization-feature-4db975bc8dd427a53120fb50c0a300f7.png"},73314:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-26-visualization-feature-bbb51e8f3edf7754ea369194f68b3e44.png"},69162:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-27-visualization-feature-cf0a9e8637603e24fe14a71f3a4ac7be.png"},84469:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-28-visualization-feature-8a0a7fcdbadd51b23ee8a1198ec368b8.png"},70309:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-29-visualization-feature-36d7809aeec4e01981f69cf6cdabebe7.png"},36503:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-30-visualization-feature-16e91930e8c34db6e47cc2249c37e513.png"},61280:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-31-visualize-response-24d513cc72a6429524a0d0c2539a1e0b.png"},33331:(e,a,i)=>{i.d(a,{Z:()=>t});const t=i.p+"assets/images/postman-32-visualize-response-6352968752480f34a8be1f044d55ea8d.png"},11151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>s});var t=i(67294);const n={},l=t.createContext(n);function s(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);