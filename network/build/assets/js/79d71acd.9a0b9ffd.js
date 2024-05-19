"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[3719],{26123:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(49214),t=s(43540);const o={tags:["Luxd APIs"],description:"This page is an overview of the Keystore API associated with Luxd.",sidebar_label:"Keystore API",pagination_label:"Keystore API"},i="Keystore API",a={id:"reference/luxd/keystore-api",title:"Keystore API",description:"This page is an overview of the Keystore API associated with Luxd.",source:"@site/docs/reference/luxd/keystore-api.md",sourceDirName:"reference/luxd",slug:"/reference/luxd/keystore-api",permalink:"/docs/reference/luxd/keystore-api",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/reference/luxd/keystore-api.md",tags:[{label:"Luxd APIs",permalink:"/docs/tags/luxd-ap-is"}],version:"current",frontMatter:{tags:["Luxd APIs"],description:"This page is an overview of the Keystore API associated with Luxd.",sidebar_label:"Keystore API",pagination_label:"Keystore API"},sidebar:"reference",previous:{title:"IPC API",permalink:"/docs/reference/luxd/ipc-api"},next:{title:"Metrics API",permalink:"/docs/reference/luxd/metrics-api"}},d={},l=[{value:"Format",id:"format",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Methods",id:"methods",level:2},{value:"keystore.createUser",id:"keystorecreateuser",level:3},{value:"keystore.deleteUser",id:"keystoredeleteuser",level:3},{value:"keystore.exportUser",id:"keystoreexportuser",level:3},{value:"keystore.importUser",id:"keystoreimportuser",level:3},{value:"keystore.listUsers",id:"keystorelistusers",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"keystore-api",children:"Keystore API"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Because the node operator has access to your plain-text password, you should only create a\nkeystore user on a node that you operate. If that node is breached, you could lose all your tokens.\nKeystore APIs are not recommended for use on Mainnet."})}),"\n",(0,r.jsxs)(n.p,{children:["Every node has a built-in keystore. Clients create users on the keystore, which act as identities to\nbe used when interacting with blockchains. A keystore exists at the node level, so if you create a\nuser on a node it exists ",(0,r.jsx)(n.em,{children:"only"})," on that node. However, users may be imported and exported using this\nAPI."]}),"\n",(0,r.jsxs)(n.p,{children:["For validation and cross-chain transfer on the Mainnet, you should issue transactions through\n",(0,r.jsx)(n.a,{href:"/tooling/luxjs-overview",children:"LuxJS"}),". That way control keys for your funds won't be stored on\nthe node, which significantly lowers the risk should a computer running a node be compromised. See\nfollowing docs for details:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/tooling/luxjs-guides/cross-chain-transfers",children:"Transfer LUX Tokens Between Chains"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/nodes/validate/add-a-validator",children:"Add a Node to the Validator Set"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This API set is for a specific node, it is unavailable on the ",(0,r.jsx)(n.a,{href:"/docs/tooling/rpc-providers",children:"public server"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,r.jsxs)(n.p,{children:["This API uses the ",(0,r.jsx)(n.code,{children:"json 2.0"})," API format. For more information on making JSON RPC calls, see\n",(0,r.jsx)(n.a,{href:"/docs/reference/standards/guides/issuing-api-calls",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"/ext/keystore\n"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"keystorecreateuser",children:"keystore.createUser"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Deprecated as of ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/luxd/releases/tag/v1.9.12",children:(0,r.jsx)(n.strong,{children:"v1.9.12"})}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Create a new user with the specified username and password."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"keystore.createUser(\n    {\n        username:string,\n        password:string\n    }\n) -> {}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"})," and ",(0,r.jsx)(n.code,{children:"password"})," can be at most 1024 characters."]}),"\n",(0,r.jsxs)(n.li,{children:["Your request will be rejected if ",(0,r.jsx)(n.code,{children:"password"})," is too weak. ",(0,r.jsx)(n.code,{children:"password"})," should be at least 8\ncharacters and contain upper and lower case letters as well as numbers and symbols."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.createUser",\n    "params" :{\n        "username":"myUsername",\n        "password":"myPassword"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keystoredeleteuser",children:"keystore.deleteUser"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Deprecated as of ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/luxd/releases/tag/v1.9.12",children:(0,r.jsx)(n.strong,{children:"v1.9.12"})}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Delete a user."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"keystore.deleteUser({username: string, password:string}) -> {}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.deleteUser",\n    "params" : {\n        "username":"myUsername",\n        "password":"myPassword"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keystoreexportuser",children:"keystore.exportUser"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Deprecated as of ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/luxd/releases/tag/v1.9.12",children:(0,r.jsx)(n.strong,{children:"v1.9.12"})}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Export a user. The user can be imported to another node with\n",(0,r.jsx)(n.a,{href:"/docs/reference/luxd/keystore-api#keystoreimportuser",children:(0,r.jsx)(n.code,{children:"keystore.importUser"})}),". The user\u2019s password\nremains encrypted."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"keystore.exportUser(\n    {\n        username:string,\n        password:string,\n        encoding:string //optional\n    }\n) -> {\n    user:string,\n    encoding:string\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"encoding"})," specifies the format of the string encoding user data. Can only be ",(0,r.jsx)(n.code,{children:"hex"})," when a value is\nprovided."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.exportUser",\n    "params" :{\n        "username":"myUsername",\n        "password":"myPassword"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "user": "7655a29df6fc2747b0874e1148b423b954a25fcdb1f170d0ec8eb196430f7001942ce55b02a83b1faf50a674b1e55bfc00000000",\n    "encoding": "hex"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keystoreimportuser",children:"keystore.importUser"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Deprecated as of ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/luxd/releases/tag/v1.9.12",children:(0,r.jsx)(n.strong,{children:"v1.9.12"})}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Import a user. ",(0,r.jsx)(n.code,{children:"password"})," must match the user\u2019s password. ",(0,r.jsx)(n.code,{children:"username"})," doesn\u2019t have to match the\nusername ",(0,r.jsx)(n.code,{children:"user"})," had when it was exported."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"keystore.importUser(\n    {\n        username:string,\n        password:string,\n        user:string,\n        encoding:string //optional\n    }\n) -> {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"encoding"})," specifies the format of the string encoding user data. Can only be ",(0,r.jsx)(n.code,{children:"hex"})," when a value is\nprovided."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.importUser",\n    "params" :{\n        "username":"myUsername",\n        "password":"myPassword",\n        "user"    :"0x7655a29df6fc2747b0874e1148b423b954a25fcdb1f170d0ec8eb196430f7001942ce55b02a83b1faf50a674b1e55bfc000000008cf2d869"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keystorelistusers",children:"keystore.listUsers"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Deprecated as of ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/luxd/releases/tag/v1.9.12",children:(0,r.jsx)(n.strong,{children:"v1.9.12"})}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"List the users in this keystore."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"keystore.ListUsers() -> {users:[]string}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.listUsers"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "users": ["myUsername"]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},43540:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(48318);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);