"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[5219],{30606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var i=t(49214),o=t(43540);const s={},d="Run a DFK Subnet Node",l={id:"deprecated/dfk-subnet-node",title:"Run a DFK Subnet Node",description:"Introduction",source:"@site/docs/deprecated/dfk-subnet-node.md",sourceDirName:"deprecated",slug:"/deprecated/dfk-subnet-node",permalink:"/docs/deprecated/dfk-subnet-node",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/deprecated/dfk-subnet-node.md",tags:[],version:"current",frontMatter:{}},c={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Build <code>Luxd</code> Binary",id:"build-luxd-binary",level:2},{value:"Build <code>subnet-evm</code> Binary",id:"build-subnet-evm-binary",level:2},{value:"Tracking DFK Subnet and Restarting the Node",id:"tracking-dfk-subnet-and-restarting-the-node",level:2},{value:"Updating Config File",id:"updating-config-file",level:3},{value:"Running the Node",id:"running-the-node",level:3},{value:"Just Want the Commands? We Got You",id:"just-want-the-commands-we-got-you",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"run-a-dfk-subnet-node",children:"Run a DFK Subnet Node"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This article describes how to run a Mainnet node on ",(0,i.jsx)(n.a,{href:"https://subnets.lux.network/defi-kingdoms",children:"DeFi Kingdoms (DFK)\nSubnet"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Following necessary steps are needed to run your node on the DFK Subnet:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Build the Luxd binary"}),"\n",(0,i.jsx)(n.li,{children:"Build the plugin binary for the DFK Subnet-EVM"}),"\n",(0,i.jsx)(n.li,{children:"Track the DFK Subnet"}),"\n",(0,i.jsx)(n.li,{children:"Connect to the DFK Subnet!"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Just want the commands? Jump to the ",(0,i.jsx)(n.a,{href:"#just-want-the-commands-we-got-you",children:"end"}),"!"]})}),"\n",(0,i.jsxs)(n.h2,{id:"build-luxd-binary",children:["Build ",(0,i.jsx)(n.code,{children:"Luxd"})," Binary"]}),"\n",(0,i.jsxs)(n.p,{children:["First, you need to download and build Luxd (handles the orchestration of running Custom VMs).\nYou can follow ",(0,i.jsx)(n.a,{href:"/docs/nodes/run/node-manually",children:"this comprehensive guide"})," to complete\nthis step. For this tutorial, we recommend compiling from source instead of using the ",(0,i.jsx)(n.code,{children:"Luxd Installer"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"build-subnet-evm-binary",children:["Build ",(0,i.jsx)(n.code,{children:"subnet-evm"})," Binary"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["For the steps below, we will assume that you completed first step successfully and are now in your\nLuxd directory (within your ",(0,i.jsx)(n.code,{children:"$GOPATH"}),")."]})}),"\n",(0,i.jsx)(n.p,{children:"Next, you will clone the DFK Subnet-EVM repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $GOPATH/src/github.com/luxfi\ncd $GOPATH/src/github.com/luxfi\ngit clone https://github.com/luxfi/subnet-evm.git\ncd subnet-evm\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"The repository cloning method used is HTTPS, but SSH can be used too:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"git clone git@github.com:luxfi/subnet-evm.git"})}),(0,i.jsxs)(n.p,{children:["You can find more about SSH and how to use it\n",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh",children:"here"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Now that you are in the ",(0,i.jsx)(n.code,{children:"luxfi/subnet-evm"})," repository, you will build the binary and place it\ndirectly into the ",(0,i.jsx)(n.code,{children:"plugins"})," directory. To do this, you will pass in the desired\npath to place the plugin binary. You will want to place this binary into the plugins directory of\nLuxd."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./scripts/build.sh ~/.luxd/plugins/mDV3QWRXfwgKUWb9sggkv4vQxAQR4y2CyKrt5pLZ5SzQ7EHBv\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The long string ",(0,i.jsx)(n.code,{children:"mDV3QWRXfwgKUWb9sggkv4vQxAQR4y2CyKrt5pLZ5SzQ7EHBv"})," is the CB58 encoded VMID of the\nDFK Subnet-EVM. Luxd will use the name of this file to determine what VMs are available to\nrun from the ",(0,i.jsx)(n.code,{children:"plugins"})," directory."]}),"\n",(0,i.jsx)(n.h2,{id:"tracking-dfk-subnet-and-restarting-the-node",children:"Tracking DFK Subnet and Restarting the Node"}),"\n",(0,i.jsx)(n.p,{children:"Luxd will only validate the primary network by default. In order to add the DFK Subnet, you\nwill need to add the DFK Subnet ID to the set of tracked Subnets in the node's config file or\npass it through the command-line options of the node. Once the node's config file has been updated,\nyou will need to start the Lux node (restart if already running)."}),"\n",(0,i.jsx)(n.p,{children:"Once you start the node, it will begin syncing the Primary Network. Once the node reaches the point\nin the Platform Chain where the DFK Subnet is created, it will begin syncing the DFK Subnet as well,\nand will start validating once it has fully bootstrapped."}),"\n",(0,i.jsx)(n.h3,{id:"updating-config-file",children:"Updating Config File"}),"\n",(0,i.jsx)(n.p,{children:"You can skip this section if you want to track Subnets through command-line flags."}),"\n",(0,i.jsxs)(n.p,{children:["You need to create a new config file or edit your existing one for your node. In this tutorial, you\nwill create a config file at: ",(0,i.jsx)(n.code,{children:"~/.luxd/config.json"}),". Note: you can create a config file\nanywhere on your file system, you will just need to specify its location via the flag\n",(0,i.jsx)(n.code,{children:"--config-file=<file path>"})," when you start your node. See\n",(0,i.jsx)(n.a,{href:"/docs/nodes/configure/luxd-config-flags#config-file",children:"this"})," for more info on configuration\nfile and flags."]}),"\n",(0,i.jsx)(n.p,{children:"You will need to add the DFK Subnet ID to the track Subnets section of the config file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    <OTHER-CONFIGURATIONS>\n    "track-subnets": "Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Track Subnets is a comma separated list of Subnet IDs, so if you are validating more than one\nSubnet, you can simply add a comma to the end of the list and append the DFK Subnet ID\n",(0,i.jsx)(n.code,{children:"Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"running-the-node",children:"Running the Node"}),"\n",(0,i.jsx)(n.p,{children:"First, make sure to shut down your node in case it is still running. Then, you will navigate back\ninto the Luxd directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi/luxd\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you went through the steps to set up a config file, then you can launch your node by specifying\nthe config file on the command line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./build/luxd --config-file ~/.luxd/config.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to track the Subnets through the command-line flag. You can append the other\nflags or even the ",(0,i.jsx)(n.code,{children:"--config-file"})," flag as well, according to your need."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./build/luxd --track-subnets Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ\n"})}),"\n",(0,i.jsx)(n.h2,{id:"just-want-the-commands-we-got-you",children:"Just Want the Commands? We Got You"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"go version"}),". ",(0,i.jsx)(n.strong,{children:"It should be 1.19.6 or above."})," Run ",(0,i.jsx)(n.code,{children:"echo $GOPATH"}),". ",(0,i.jsx)(n.strong,{children:"It should not be empty."})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $GOPATH/src/github.com/luxfi\ncd $GOPATH/src/github.com/luxfi\ngit clone https://github.com/luxfi/luxd.git\ncd luxd\n./scripts/build.sh\ncd $GOPATH/src/github.com/luxfi\ngit clone https://github.com/luxfi/subnet-evm.git\ncd subnet-evm\n./scripts/build.sh ~/.luxd/plugins/mDV3QWRXfwgKUWb9sggkv4vQxAQR4y2CyKrt5pLZ5SzQ7EHBv\ncd $GOPATH/src/github.com/luxfi/luxd\n./build/luxd --track-subnets Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"The repository cloning method used is HTTPS, but SSH can be used too:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"git clone git@github.com:luxfi/luxd.git"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"git clone git@github.com:luxfi/subnet-evm.git"})}),(0,i.jsxs)(n.p,{children:["You can find more about SSH and how to use it\n",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh",children:"here"}),"."]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},43540:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(48318);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);