"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[5024],{25940:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(49214),t=s(43540);const r={tags:["Nodes","Subnets"],description:"Detailed instructions for running a Lux node that tracks a Subnet.",sidebar_label:"Subnet Nodes",pagination_label:"Run a Subnet Node",sidebar_position:2,keywords:["subnet","lux","lux subnet","run a subnet node","subnet node","track subnet","virtual machine","binary"]},l="Run a Subnet Node",d={id:"nodes/run/subnet-node",title:"Run a Subnet Node",description:"Detailed instructions for running a Lux node that tracks a Subnet.",source:"@site/docs/nodes/run/subnet-node.md",sourceDirName:"nodes/run",slug:"/nodes/run/subnet-node",permalink:"/docs/nodes/run/subnet-node",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/nodes/run/subnet-node.md",tags:[{label:"Nodes",permalink:"/docs/tags/nodes"},{label:"Subnets",permalink:"/docs/tags/subnets"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Nodes","Subnets"],description:"Detailed instructions for running a Lux node that tracks a Subnet.",sidebar_label:"Subnet Nodes",pagination_label:"Run a Subnet Node",sidebar_position:2,keywords:["subnet","lux","lux subnet","run a subnet node","subnet node","track subnet","virtual machine","binary"]},sidebar:"nodes",previous:{title:"Node Config and Maintenance",permalink:"/docs/nodes/run/with-installer/advance-config-maintenance"},next:{title:"Run a Lux Node with Amazon Web Services",permalink:"/docs/nodes/run/third-party/aws-node"}},a={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Build Luxd",id:"build-luxd",level:2},{value:"Manage the Subnet Binaries",id:"manage-the-subnet-binaries",level:2},{value:"1. Clone Subnet-EVM",id:"1-clone-subnet-evm",level:3},{value:"2. Build the Binary and Save as a Plugin",id:"2-build-the-binary-and-save-as-a-plugin",level:3},{value:"3. Specify the Plugin with a Config.json",id:"3-specify-the-plugin-with-a-configjson",level:3},{value:"Run the Node",id:"run-the-node",level:2},{value:"Bootstrapping and RPC Details",id:"bootstrapping-and-rpc-details",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"run-a-subnet-node",children:"Run a Subnet Node"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This article describes how to run a node that tracks a Subnet. It requires building Luxd, adding\nVirtual Machine binaries as plugins to your local data directory, and running Luxd to track these\nbinaries."}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial specifically covers tracking a Subnet built with Lux's\n",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm",children:"Subnet-EVM"}),", the default ",(0,i.jsx)(n.a,{href:"/docs/learn/lux/virtual-machines",children:"Virtual Machine"}),"\nrun by Subnets on Lux."]}),"\n",(0,i.jsx)(n.h2,{id:"build-luxd",children:"Build Luxd"}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended that you first complete ",(0,i.jsx)(n.a,{href:"/docs/nodes/run/node-manually",children:"this comprehensive guide"}),"\nwhich demonstrates how to build and run a basic Lux node. Below are the high level details."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"System Requirements"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CPU: Equivalent of 8 AWS vCPU"}),"\n",(0,i.jsx)(n.li,{children:"RAM: 16 GiB"}),"\n",(0,i.jsx)(n.li,{children:"Storage: 1 TiB SSD"}),"\n",(0,i.jsx)(n.li,{children:"OS: Ubuntu 20.04 or MacOS >= 12"}),"\n"]}),(0,i.jsx)(n.p,{children:"Note that as network usage increases, hardware requirements may\nchange."})]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"To build from source:"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.a,{href:"https://gcc.gnu.org/",children:"gcc"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.a,{href:"https://go.dev/",children:"go"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the ",(0,i.jsx)(n.a,{href:"https://github.com/golang/go/wiki/SettingGOPATH",children:"$GOPATH"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a directory in your ",(0,i.jsx)(n.code,{children:"$GOPATH"})]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $GOPATH/src/github.com/luxfi\n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Clone Luxd"}),"\n"]}),(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"$GOPATH"}),", clone ",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/luxd",children:"Luxd"}),",\nthe consensus engine and node implementation that is the core of the Lux\nNetwork."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi\ngit clone https://github.com/luxfi/luxd.git\n"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Run the Build Script"}),"\n"]}),(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.code,{children:"luxd"})," directory, run the build script"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi/luxd\n./scripts/build.sh\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"manage-the-subnet-binaries",children:"Manage the Subnet Binaries"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"After building Luxd successfully,"})}),"\n",(0,i.jsxs)(n.h3,{id:"1-clone-subnet-evm",children:["1. Clone ",(0,i.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm",children:"Subnet-EVM"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi\ngit clone https://github.com/luxfi/subnet-evm.git\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-build-the-binary-and-save-as-a-plugin",children:"2. Build the Binary and Save as a Plugin"}),"\n",(0,i.jsxs)(n.p,{children:["In the Subnet-EVM directory, run the build script, and save it in the \u201cplugins\u201d folder of your\n",(0,i.jsx)(n.code,{children:".luxd"})," data directory. Name the plugin after the ",(0,i.jsx)(n.code,{children:"VMID"})," of the Subnet you wish to track.\nThe ",(0,i.jsx)(n.code,{children:"VMID"})," of the ZOO Subnet is the value beginning with \u201csrEX...\u201d."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi/subnet-evm\n./scripts/build.sh ~/.luxd/plugins/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Where can I find Subnet parameters like VMID?"}),(0,i.jsxs)("p",{children:[(0,i.jsx)(n.p,{children:'VMID, Subnet ID, ChainID, and all other parameters can be found in the "Chain Info"\nsection of the Subnet Explorer.'}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://subnets.lux.network/c-chain",children:"Lux Mainnet"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://subnets-test.lux.network/wagmi",children:"Testnet"})}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"3-specify-the-plugin-with-a-configjson",children:"3. Specify the Plugin with a Config.json"}),"\n",(0,i.jsxs)(n.p,{children:["Create a file named ",(0,i.jsx)(n.code,{children:"config.json"})," and add a ",(0,i.jsx)(n.code,{children:"track-subnets"})," field that is populated with the\n",(0,i.jsx)(n.code,{children:"SubnetID"})," you wish to track. The ",(0,i.jsx)(n.code,{children:"SubnetID"})," of the ZOO Subnet is the value beginning with\n\u201c28nr...\u201d."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cd ~/.luxd\necho \'{"track-subnets": "28nrH5T2BMvNrWecFcV3mfccjs6axM1TVyqe79MCv2Mhs8kxiY"}\' > config.json\n'})}),"\n",(0,i.jsx)(n.h2,{id:"run-the-node",children:"Run the Node"}),"\n",(0,i.jsxs)(n.p,{children:["Run Luxd with the ",(0,i.jsx)(n.code,{children:"\u2014config-file"})," flag to start your node and ensure it tracks the Subnets\nincluded in the configuration file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi/luxd\n./build/luxd --config-file ~/.luxd/config.json --network-id=testnet\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: The above command includes the ",(0,i.jsx)(n.code,{children:"--network-id=testnet"})," command because the ZOO Subnet is deployed\non Testnet."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Run via the command line instead"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.p,{children:["If you would prefer to track Subnets using a command line flag, you can instead use the ",(0,i.jsx)(n.code,{children:"--track-subnets"}),"\nflag."]}),(0,i.jsx)(n.p,{children:"For example:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./build/luxd --track-subnets 28nrH5T2BMvNrWecFcV3mfccjs6axM1TVyqe79MCv2Mhs8kxiY --network-id=testnet\n"})})]})]}),"\n",(0,i.jsx)(n.p,{children:"You should now see terminal filled with logs and information to suggest the node is properly running\nand has began bootstrapping to the network."}),"\n",(0,i.jsx)(n.h2,{id:"bootstrapping-and-rpc-details",children:"Bootstrapping and RPC Details"}),"\n",(0,i.jsxs)(n.p,{children:["It may take a few hours for the node to fully ",(0,i.jsx)(n.a,{href:"/docs/nodes/run/node-manually#bootstrapping",children:"bootstrap"}),"\nto the Lux Primary Network and tracked Subnets."]}),"\n",(0,i.jsx)(n.p,{children:"When finished bootstrapping, the endpoint will be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"localhost:9650/ext/bc/<BlockchainID>/rpc\n"})}),"\n",(0,i.jsx)(n.p,{children:"if run locally, or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"XXX.XX.XX.XXX:9650/ext/bc/<BlockchainID>/rpc\n"})}),"\n",(0,i.jsx)(n.p,{children:"if run on a cloud provider. The \u201cX\u201ds should be replaced with the public\nIP of your EC2 instance."}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the requests available at these endpoints, please see the\n",(0,i.jsx)(n.a,{href:"/docs/reference/subnet-evm/api",children:"Subnet-EVM API Reference"})," documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["Because each node is also tracking the Primary Network, those\n",(0,i.jsx)(n.a,{href:"/docs/nodes/run/node-manually#rpc",children:"RPC endpoints"})," are available as well."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},43540:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(48318);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);