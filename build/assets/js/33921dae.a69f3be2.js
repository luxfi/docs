"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5197],{32533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(85893),o=t(11151);const r={tags:["Build","Subnets"],description:"A reference for tips to resolve common issues while deploying Subnets on Lux.",sidebar_label:"Troubleshooting",pagination_label:"Troubleshooting Subnet Deployments",sidebar_position:2},i="Troubleshooting Subnet Deployments",l={id:"build/subnet/info/troubleshoot-subnet",title:"Troubleshooting Subnet Deployments",description:"A reference for tips to resolve common issues while deploying Subnets on Lux.",source:"@site/docs/build/subnet/info/troubleshoot-subnet.md",sourceDirName:"build/subnet/info",slug:"/build/subnet/info/troubleshoot-subnet",permalink:"/build/subnet/info/troubleshoot-subnet",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/subnet/info/troubleshoot-subnet.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Subnets",permalink:"/tags/subnets"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Build","Subnets"],description:"A reference for tips to resolve common issues while deploying Subnets on Lux.",sidebar_label:"Troubleshooting",pagination_label:"Troubleshooting Subnet Deployments",sidebar_position:2},sidebar:"build-subnet",previous:{title:"WAGMI Subnet",permalink:"/build/subnet/info/wagmi"}},d={},c=[{value:"Deployment Times Out",id:"deployment-times-out",level:2},{value:"Incompatible RPC Version for Custom VM",id:"incompatible-rpc-version-for-custom-vm",level:2},{value:"Example",id:"example",level:3},{value:"Solution",id:"solution",level:3},{value:"More Information",id:"more-information",level:3},{value:"Fix for MacBook Air M1/M2: \u2018Bad CPU type in executable\u2019 Error",id:"fix-for-macbook-air-m1m2-bad-cpu-type-in-executable-error",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"troubleshooting-subnet-deployments",children:"Troubleshooting Subnet Deployments"}),"\n",(0,s.jsx)(n.p,{children:"If you run into trouble deploying your Subnet, use this document for tips to resolve common issues."}),"\n",(0,s.jsx)(n.h2,{id:"deployment-times-out",children:"Deployment Times Out"}),"\n",(0,s.jsx)(n.p,{children:"During a local deployment, your network may fail to start. Your error may look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[~]$ lux subnet deploy mySubnet\n\u2714 Local Network\nDeploying [mySubnet] to Local Network\nBackend controller started, pid: 26388, output at: /Users/user/.cli/runs/server_20221231_111605/cli-backend\nVMs ready.\nStarting network...\n..................................................................................\n..................................................................................\n......Error: failed to query network health: rpc error: code = DeadlineExceeded desc = context deadline exceeded\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lux-CLI only supports running one local Lux network at a time. If other instances of\nLuxd are running concurrently, your Lux-CLI network fails to start."}),"\n",(0,s.jsx)(n.p,{children:"To test for this error, start by shutting down any Lux nodes started by Lux-CLI."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"lux network clean --hard\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, look for any lingering Luxd processes with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ps aux | grep luxd\n"})}),"\n",(0,s.jsx)(n.p,{children:"If any processes are running, you need to stop them before you can launch your VM with Lux-CLI."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["If you're running a validator node on the same box you're using Lux-CLI, ",(0,s.jsx)(n.strong,{children:"don't"})," end any\nof these lingering Luxd processes. This may shut down your validator and could affect\nyour validation uptime."]})}),"\n",(0,s.jsx)(n.h2,{id:"incompatible-rpc-version-for-custom-vm",children:"Incompatible RPC Version for Custom VM"}),"\n",(0,s.jsx)(n.p,{children:"If you're locally deploying a custom VM, you may run into this error message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[~]$ lux subnet deploy mySubnet\n\u2714 Local Network\nDeploying [mySubnet] to Local Network\nBackend controller started, pid: 26388, output at: /Users/user/.cli/runs/server_20221231_111605/cli-backend\nVMs ready.\nStarting network...\n.........\nBlockchain has been deployed. Wait until network acknowledges...\n..................................................................................\n..................................................................................\n......Error: failed to query network health: rpc error: code = DeadlineExceeded desc = context deadline exceeded\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This error has many possible causes, but a common cause is usually due to ",(0,s.jsx)(n.strong,{children:"an RPC\nprotocol version mismatch."})]}),"\n",(0,s.jsxs)(n.p,{children:["Luxd communicates with custom VMs over RPC using ",(0,s.jsx)(n.a,{href:"https://grpc.io/",children:"gRPC"}),". gRPC defines a\nprotocol specification shared by both Luxd and the VM. ",(0,s.jsx)(n.strong,{children:"Both components must be running\nthe same RPC version for VM deployment to work."})]}),"\n",(0,s.jsx)(n.p,{children:"Your custom VM's RPC version is set by the version of Luxd that you import. By default,\nLux-CLI creates local Avalalanche networks that run the latest Luxd release."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Here's an example with real numbers from the Luxd compatibility page"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the latest Luxd release is version v1.10.11, then Lux-CLI deploys a network with\nRPC version 28."}),"\n",(0,s.jsxs)(n.li,{children:["For your deploy to be successful, your VM must also have RPC version 28. Because only\nLuxd versions v1.10.9, v1.10.10 and v1.10.11 supports RPC version 28,\nyour VM ",(0,s.jsx)(n.strong,{children:"must"})," import one of those versions."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.p,{children:["Error: ",(0,s.jsx)(n.code,{children:"RPCChainVM protocol version mismatch between Luxd and Virtual Machine plugin"})]}),"\n",(0,s.jsx)(n.p,{children:"This error occurs when the RPCChainVM protocol version used by VMs like Subnet-EVM\nare incompatible with the protocol version of Luxd."}),"\n",(0,s.jsx)(n.p,{children:"If your VM has an RPC version mismatch, you have two options:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Update the version of Luxd you use in your VM. This is the correct long-term approach."}),"\n",(0,s.jsxs)(n.li,{children:["Use Lux-CLI to deploy an older version of Luxd by using the\n",(0,s.jsx)(n.code,{children:"--luxd-version"})," flag. Both the ",(0,s.jsx)(n.a,{href:"/tooling/cli#subnet-deploy",children:(0,s.jsx)(n.code,{children:"subnet deploy"})}),"\nand ",(0,s.jsx)(n.a,{href:"/tooling/cli#network-start",children:(0,s.jsx)(n.code,{children:"network start"})})," commands support\nsetting the Luxd version explicitly."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Although it's very important to keep your version of Luxd up-to-date,\nthis workaround helps you avoid broken builds in the short term."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"You must upgrade to the latest Luxd version when deploying publicly to\nTestnet or Lux Mainnet."})}),"\n",(0,s.jsx)(n.h3,{id:"more-information",children:"More Information"}),"\n",(0,s.jsx)(n.p,{children:"Similar version matching is required in different tools on the ecosystem. Here is a compatibility\ntable showing which RPCChainVM Version implements the more recent releases of\nLuxd, Subnet-EVM, Precompile-EVM and LuxSDK."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"RPCChainVM"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Luxd"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Subnet-EVM"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Precompile-EVM"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"LuxSDK"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"26"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v1.10.1-v1.10.4"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.5.1-v0.5.2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.1.0-v0.1.1"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.0.6-v0.0.9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"27"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v1.10.5-v1.10.8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.5.3"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.1.2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.0.10-v0.0.12"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"28"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v1.10.9-v1.10.12"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.5.4-v0.5.6"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.1.3-v0.1.4"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["v0.0.13-",(0,s.jsx)(n.strong,{children:"v0.0.15 (\xfaltima)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"29"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v1.10.13-v1.10.14"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.5.7-v0.5.8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"v0.1.5"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"30"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["v1.10.15-",(0,s.jsx)(n.strong,{children:"v1.10.17 (latest)"})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"v0.5.9 (latest)"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"v0.1.6 (latest)"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can view the full RPC compatibility broken down by release version for each tool here:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/luxd/blob/master/version/compatibility.json",children:"Luxd"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/subnet-evm/blob/master/compatibility.json",children:"Subnet-EVM"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/precompile-evm/blob/main/compatibility.json",children:"Precompile-EVM"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Updates to Luxd's RPC version are ",(0,s.jsx)(n.strong,{children:"not"})," tied to its semantic version scheme. Minor Luxd\nversion bumps may include a breaking RPC version bump."]})}),"\n",(0,s.jsx)(n.h2,{id:"fix-for-macbook-air-m1m2-bad-cpu-type-in-executable-error",children:"Fix for MacBook Air M1/M2: \u2018Bad CPU type in executable\u2019 Error"}),"\n",(0,s.jsxs)(n.p,{children:["When running ",(0,s.jsx)(n.code,{children:"lux subnet deploy"})," via the Lux-CLI, the terminal may throw an error that\ncontains the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"zsh: bad CPU type in executable:\n/Users/user.name/Downloads/build/luxd\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is because some Macs lack support for x86 binaries. Running the following command should fix\nthis issue:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/usr/sbin/softwareupdate --install-rosetta"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);