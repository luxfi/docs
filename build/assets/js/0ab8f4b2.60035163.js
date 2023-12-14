"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6488],{28539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(85893),i=t(11151);const s={tags:["Nodes"],description:"This tutorial will guide you through spinning up an Lux node via the one-click validator node through the AWS Marketplace. This includes subscribing to the software, launching it on EC2, connecting to the node over ssh, calling curl commands, adding the node as a validator on the Testnet network using the Lux Web wallet, and confirming the node is a pending validator.",sidebar_label:"AWS Marketplace",pagination_label:"Run an Lux Node with Amazon Web Services with one click",sidebar_position:1},a="Launch an Lux Validator on AWS with One Click",r={id:"nodes/run/third-party/aws-marketplace-one-click",title:"Launch an Lux Validator on AWS with One Click",description:"This tutorial will guide you through spinning up an Lux node via the one-click validator node through the AWS Marketplace. This includes subscribing to the software, launching it on EC2, connecting to the node over ssh, calling curl commands, adding the node as a validator on the Testnet network using the Lux Web wallet, and confirming the node is a pending validator.",source:"@site/docs/nodes/run/third-party/aws-marketplace-one-click.md",sourceDirName:"nodes/run/third-party",slug:"/nodes/run/third-party/aws-marketplace-one-click",permalink:"/nodes/run/third-party/aws-marketplace-one-click",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/nodes/run/third-party/aws-marketplace-one-click.md",tags:[{label:"Nodes",permalink:"/tags/nodes"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Nodes"],description:"This tutorial will guide you through spinning up an Lux node via the one-click validator node through the AWS Marketplace. This includes subscribing to the software, launching it on EC2, connecting to the node over ssh, calling curl commands, adding the node as a validator on the Testnet network using the Lux Web wallet, and confirming the node is a pending validator.",sidebar_label:"AWS Marketplace",pagination_label:"Run an Lux Node with Amazon Web Services with one click",sidebar_position:1},sidebar:"nodes",previous:{title:"Run an Lux Node with Amazon Web Services",permalink:"/nodes/run/third-party/aws-node"},next:{title:"Run an Lux Node with Microsoft Azure",permalink:"/nodes/run/third-party/microsoft-azure-node"}},d={},l=[{value:"How to Launch an Lux Validator using AWS",id:"how-to-launch-an-lux-validator-using-aws",level:2},{value:"Product Overview",id:"product-overview",level:2},{value:"Subscribe to This Software",id:"subscribe-to-this-software",level:2},{value:"Configure This Software",id:"configure-this-software",level:2},{value:"Launch This Software",id:"launch-this-software",level:2},{value:"EC2 Console",id:"ec2-console",level:2},{value:"Node Configuration",id:"node-configuration",level:2},{value:"Switch to Testnet",id:"switch-to-testnet",level:3},{value:"<code>info.getNetworkID</code> Request",id:"infogetnetworkid-request",level:4},{value:"<code>info.getNetworkID</code> Response",id:"infogetnetworkid-response",level:4},{value:"<code>info.getNetworkID</code> Request",id:"infogetnetworkid-request-1",level:4},{value:"<code>info.getNetworkID</code> Response",id:"infogetnetworkid-response-1",level:4},{value:"<code>info.isBootstrapped</code> Request",id:"infoisbootstrapped-request",level:3},{value:"<code>info.isBootstrapped</code> Response",id:"infoisbootstrapped-response",level:3},{value:"<code>info.getNodeID</code> Request",id:"infogetnodeid-request",level:3},{value:"<code>info.getNodeID</code> Response",id:"infogetnodeid-response",level:3},{value:"Add Node as Validator on Testnet via Core web",id:"add-node-as-validator-on-testnet-via-core-web",level:2},{value:"Switching to Testnet Mode",id:"switching-to-testnet-mode",level:3},{value:"On Core Extension",id:"on-core-extension",level:4},{value:"On Core web",id:"on-core-web",level:4},{value:"Adding the Validator",id:"adding-the-validator",level:3},{value:"Confirm That the Node is a Pending Validator on Testnet",id:"confirm-that-the-node-is-a-pending-validator-on-testnet",level:2},{value:"<code>platform.getPendingValidators</code> Request",id:"platformgetpendingvalidators-request",level:3},{value:"<code>platform.getPendingValidators</code> Response",id:"platformgetpendingvalidators-response",level:3},{value:"<code>platform.getCurrentValidators</code> Request",id:"platformgetcurrentvalidators-request",level:3},{value:"<code>platform.getCurrentValidators</code> Response",id:"platformgetcurrentvalidators-response",level:3},{value:"Mainnet",id:"mainnet",level:2},{value:"Maintenance",id:"maintenance",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"launch-an-lux-validator-on-aws-with-one-click",children:"Launch an Lux Validator on AWS with One Click"}),"\n",(0,o.jsx)(n.h2,{id:"how-to-launch-an-lux-validator-using-aws",children:"How to Launch an Lux Validator using AWS"}),"\n",(0,o.jsx)("iframe",{src:"https://www.youtube.com/embed/4RPmgpbC_Cc",width:"100%",height:"480px",title:"How to Launch an Lux Validator using AWS?",className:"video-container",display:"initial",position:"relative",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(n.p,{children:"With the intention of enabling developers and entrepreneurs to on-ramp into the\nLux ecosystem with as little friction as possible, Lux Partners recently\nlaunched an offering to deploy an Lux Validator node via the AWS\nMarketplace. This tutorial will show the main steps required to get this node\nrunning and validating on the Lux Testnet."}),"\n",(0,o.jsx)(n.h2,{id:"product-overview",children:"Product Overview"}),"\n",(0,o.jsxs)(n.p,{children:["The Lux Validator node is available via ",(0,o.jsx)(n.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-nd6wgi2bhhslg",children:"the AWS\nMarketplace"}),'.\nThere you\'ll find a high level product overview. This includes a product\ndescription, pricing information, usage instructions, support information and\ncustomer reviews. After reviewing this information you want to click the "Continue to Subscribe" button.']}),"\n",(0,o.jsx)(n.h2,{id:"subscribe-to-this-software",children:"Subscribe to This Software"}),"\n",(0,o.jsxs)(n.p,{children:["Once on the \"Subscribe to this Software\" page you will see a button which\nenables you to subscribe to this AWS Marketplace offering. In addition you'll\nsee Terms of service including the seller's End User License\nAgreement and the ",(0,o.jsx)(n.a,{href:"https://aws.amazon.com/privacy/",children:"AWS Privacy Notice"}),'. After reviewing\nthese you want to click on the "Continue to Configuration" button.']}),"\n",(0,o.jsx)(n.h2,{id:"configure-this-software",children:"Configure This Software"}),"\n",(0,o.jsxs)(n.p,{children:["This page lets you choose a fulfillment option and software version to launch\nthis software. No changes are needed as the default settings are sufficient.\nLeave the ",(0,o.jsx)(n.code,{children:"Fulfillment Option"})," as ",(0,o.jsx)(n.code,{children:"64-bit (x86) Amazon Machine Image (AMI)"}),". The\nsoftware version is the latest build of ",(0,o.jsx)(n.a,{href:"https://github.com/luxdefi/luxd/releases",children:"the Luxd full\nnode"}),", ",(0,o.jsx)(n.code,{children:"v1.9.5 (Dec 22, 2022)"}),", AKA ",(0,o.jsx)(n.code,{children:"Banff.5"}),". This will always show the latest version. Also, the\nRegion to deploy in can be left as ",(0,o.jsx)(n.code,{children:"US East (N.  Virginia)"}),'. On the right you\'ll\nsee the software and infrastructure pricing. Lastly, click the "Continue to\nLaunch" button.']}),"\n",(0,o.jsx)(n.h2,{id:"launch-this-software",children:"Launch This Software"}),"\n",(0,o.jsxs)(n.p,{children:['Here you can review the launch configuration details and follow the instructions\nto launch the Lux Validator Node. The changes are very minor. Leave the\naction as "Launch from Website." The EC2 Instance Type should remain\n',(0,o.jsx)(n.code,{children:"c5.2xlarge"}),". The primary change you'll need to make is to choose a keypair\nwhich will enable you to ",(0,o.jsx)(n.code,{children:"ssh"})," into the newly created EC2 instance to run ",(0,o.jsx)(n.code,{children:"curl"}),"\ncommands on the Validator node. You can search for existing Keypairs or you can\ncreate a new keypair and download it to your local machine. If you create a new\nkeypair you'll need to move the keypair to the appropriate location, change the\npermissions and add it to the OpenSSH authentication agent. For example, on\nMacOS it would look similar to the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'# In this example we have a keypair called lux.pem which was downloaded from AWS to ~/Downloads/lux.pem\n# Confirm the file exists with the following command\ntest -f ~/Downloads/lux.pem && echo "lux.pem exists."\n\n# Running the above command will output the following:\n# lux.pem exists.\n\n# Move the lux.pem keypair from the ~/Downloads directory to the hidden ~/.ssh directory\nmv ~/Downloads/lux.pem ~/.ssh\n\n# Next add the private key identity to the OpenSSH authentication agent\nssh-add ~/.ssh/lux.pem;\n\n# Change file modes or Access Control Lists\nsudo chmod 600 ~/.ssh/lux.pem\n'})}),"\n",(0,o.jsx)(n.p,{children:'Once these steps are complete you are ready to launch the Validator node on EC2.\nTo make that happen click the "Launch" button'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"launch successful",src:t(62611).Z+"",width:"1093",height:"191"})}),"\n",(0,o.jsxs)(n.p,{children:["You now have an Lux node deployed on an AWS EC2 instance! Copy\nthe ",(0,o.jsx)(n.code,{children:"AMI ID"})," and click on the ",(0,o.jsx)(n.code,{children:"EC2 Console"})," link for the next step."]}),"\n",(0,o.jsx)(n.h2,{id:"ec2-console",children:"EC2 Console"}),"\n",(0,o.jsxs)(n.p,{children:["Now take the ",(0,o.jsx)(n.code,{children:"AMI ID"})," from the previous step and input it into the search bar\non the EC2 Console. This will bring you to the dashboard where you can find the\nEC2 instances public IP address."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"AMI instance",src:t(23409).Z+"",width:"2210",height:"1160"})}),"\n",(0,o.jsxs)(n.p,{children:["Copy that public IP address and open a Terminal or command line prompt. Once you\nhave the new Terminal open ",(0,o.jsx)(n.code,{children:"ssh"})," into the EC2 instance with the following\ncommand."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:"ssh username@ip.address.of.ec2.instance\n"})}),"\n",(0,o.jsx)(n.h2,{id:"node-configuration",children:"Node Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"switch-to-testnet",children:"Switch to Testnet"}),"\n",(0,o.jsx)(n.p,{children:"By default the Lux Node available through the AWS Marketplace syncs the\nMainnet. If this is what you are looking for, you can skip this step."}),"\n",(0,o.jsxs)(n.p,{children:["For this tutorial you want to sync and validate the Testnet. Now\nthat you're ",(0,o.jsx)(n.code,{children:"ssh"}),"ed into the EC2 instance you can make the required changes to\nsync Testnet instead of Mainnet."]}),"\n",(0,o.jsxs)(n.p,{children:["First, confirm that the node is syncing the Mainnet by running the ",(0,o.jsx)(n.code,{children:"info.getNetworkID"})," command."]}),"\n",(0,o.jsxs)(n.h4,{id:"infogetnetworkid-request",children:[(0,o.jsx)(n.code,{children:"info.getNetworkID"})," Request"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNetworkID",\n    "params": {\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,o.jsxs)(n.h4,{id:"infogetnetworkid-response",children:[(0,o.jsx)(n.code,{children:"info.getNetworkID"})," Response"]}),"\n",(0,o.jsxs)(n.p,{children:["The returned ",(0,o.jsx)(n.code,{children:"networkID"})," will be 1 which is the network ID for Mainnet."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "networkID": "1"\n  },\n  "id": 1\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now you want to edit ",(0,o.jsx)(n.code,{children:"/etc/luxd/conf.json"})," and change the ",(0,o.jsx)(n.code,{children:'"network-id"'}),"\nproperty from ",(0,o.jsx)(n.code,{children:'"mainnet"'})," to ",(0,o.jsx)(n.code,{children:'"testnet"'}),". To see the contents of\n",(0,o.jsx)(n.code,{children:"/etc/luxd/conf.json"})," you can ",(0,o.jsx)(n.code,{children:"cat"})," the file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'cat /etc/luxd/conf.json\n{\n  "api-keystore-enabled": false,\n  "http-host": "0.0.0.0",\n  "log-dir": "/var/log/luxd",\n  "db-dir": "/data/luxd",\n  "api-admin-enabled": false,\n  "public-ip-resolution-service": "opendns",\n  "network-id": "mainnet"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Edit that ",(0,o.jsx)(n.code,{children:"/etc/luxd/conf.json"})," with your favorite text editor and change the value of the\n",(0,o.jsx)(n.code,{children:'"network-id"'})," property from ",(0,o.jsx)(n.code,{children:'"mainnet"'})," to ",(0,o.jsx)(n.code,{children:'"testnet"'}),". Once that's complete,\nsave the file and restart the Lux node via ",(0,o.jsx)(n.code,{children:"sudo systemctl restart luxd"}),".\nYou can then call the ",(0,o.jsx)(n.code,{children:"info.getNetworkID"})," endpoint to confirm the\nchange was successful."]}),"\n",(0,o.jsxs)(n.h4,{id:"infogetnetworkid-request-1",children:[(0,o.jsx)(n.code,{children:"info.getNetworkID"})," Request"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNetworkID",\n    "params": {\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,o.jsxs)(n.h4,{id:"infogetnetworkid-response-1",children:[(0,o.jsx)(n.code,{children:"info.getNetworkID"})," Response"]}),"\n",(0,o.jsxs)(n.p,{children:["The returned ",(0,o.jsx)(n.code,{children:"networkID"})," will be 5 which is the network ID for Testnet."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "networkID": "5"\n  },\n  "id": 1\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Next you run the ",(0,o.jsx)(n.code,{children:"info.isBoostrapped"})," command to confirm if the Lux Validator node has\nfinished bootstrapping."]}),"\n",(0,o.jsxs)(n.h3,{id:"infoisbootstrapped-request",children:[(0,o.jsx)(n.code,{children:"info.isBootstrapped"})," Request"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.isBootstrapped",\n    "params": {\n        "chain":"P"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,o.jsx)(n.p,{children:"Once the node is finished bootstrapping, the response will be:"}),"\n",(0,o.jsxs)(n.h3,{id:"infoisbootstrapped-response",children:[(0,o.jsx)(n.code,{children:"info.isBootstrapped"})," Response"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n    "jsonrpc": "2.0",\n    "result": {\n        "isBootstrapped": true\n    },\n    "id": 1\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," that initially the response is ",(0,o.jsx)(n.code,{children:"false"})," because the network is still syncing.",(0,o.jsx)(n.br,{}),"\n","When you're adding your node as a Validator on the Lux Mainnet you'll want to wait for this response\nto return ",(0,o.jsx)(n.code,{children:"true"})," so that you don't suffer from any downtime while validating.\nFor this tutorial you're not going to wait for it to finish syncing as it's not\nstrictly necessary."]}),"\n",(0,o.jsxs)(n.h3,{id:"infogetnodeid-request",children:[(0,o.jsx)(n.code,{children:"info.getNodeID"})," Request"]}),"\n",(0,o.jsxs)(n.p,{children:["Next, you want to get the NodeID which will be used to add the node as a\nValidator. To get the node's ID you call the ",(0,o.jsx)(n.code,{children:"info.getNodeID"})," jsonrpc endpoint."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl --location --request POST \'http://127.0.0.1:9650/ext/info\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeID",\n    "params" :{\n    }\n}\'\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"infogetnodeid-response",children:[(0,o.jsx)(n.code,{children:"info.getNodeID"})," Response"]}),"\n",(0,o.jsxs)(n.p,{children:["Take a note of the ",(0,o.jsx)(n.code,{children:"nodeID"})," value which is returned as you'll need to use it in\nthe next step when adding a validator via the Lux Web Wallet. In this case\nthe ",(0,o.jsx)(n.code,{children:"nodeID"})," is ",(0,o.jsx)(n.code,{children:"NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "nodeID": "NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5",\n    "nodePOP": {\n      "publicKey": "0x85675db18b326a9585bfd43892b25b71bf01b18587dc5fac136dc5343a9e8892cd6c49b0615ce928d53ff5dc7fd8945d",\n      "proofOfPossession": "0x98a56f092830161243c1f1a613ad68a7f1fb25d2462ecf85065f22eaebb4e93a60e9e29649a32252392365d8f628b2571174f520331ee0063a94473f8db6888fc3a722be330d5c51e67d0d1075549cb55376e1f21d1b48f859ef807b978f65d9"\n    }\n  },\n  "id": 1\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"add-node-as-validator-on-testnet-via-core-web",children:"Add Node as Validator on Testnet via Core web"}),"\n",(0,o.jsxs)(n.p,{children:["For adding the new node as a Validator on the Testnet's Primary Network you can\nuse the ",(0,o.jsx)(n.a,{href:"https://core.app/",children:"Core web"}),"\n",(0,o.jsx)(n.a,{href:"https://support.lux.network/en/articles/6639869-core-web-how-do-i-connect-to-core-web",children:"connected"})," to\n",(0,o.jsx)(n.a,{href:"https://join.core.app/extension",children:"Core extension"}),".\nIf you don't have a Core extension already, check out this\n",(0,o.jsx)(n.a,{href:"https://support.lux.network/en/articles/6100129-core-extension-how-do-i-create-a-new-wallet",children:"guide"}),".\nIf you'd like to import an existing wallet to Core extension, follow\n",(0,o.jsx)(n.a,{href:"https://support.lux.network/en/articles/6078933-core-extension-how-do-i-access-my-existing-account",children:"these steps"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Core web",src:t(51167).Z+"",width:"3426",height:"1606"})}),"\n",(0,o.jsx)(n.p,{children:"Core web is a free, all-in-one command center that gives users a more intuitive and comprehensive way to view\nassets, and use dApps across the Lux network, its various Subnets, and Ethereum.\nCore web is optimized for use with the Core browser extension and Core mobile (available on both iOS & Android).\nTogether, they are key components of the Core product suite that brings dApps,\nNFTs, Lux Bridge, Subnets, L2s, and more, directly to users."}),"\n",(0,o.jsx)(n.h3,{id:"switching-to-testnet-mode",children:"Switching to Testnet Mode"}),"\n",(0,o.jsx)(n.p,{children:"By default, Core web and Core extension are connected to Mainnet.\nFor the sake of this demo, you want to connect to the Testnet."}),"\n",(0,o.jsx)(n.h4,{id:"on-core-extension",children:"On Core Extension"}),"\n",(0,o.jsx)(n.p,{children:"From the hamburger menu on the top-left corner, choose Advanced, and then toggle the Testnet Mode on."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/testnet-core-ext.gif",width:"300px"}),"\n",(0,o.jsx)(n.p,{children:"You can follow the same steps for switching back to Mainnet."}),"\n",(0,o.jsx)(n.h4,{id:"on-core-web",children:"On Core web"}),"\n",(0,o.jsx)(n.p,{children:"Click on the Settings button top-right corner of the page, then toggle Testnet Mode on."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/testnet-core-web.gif"}),"\n",(0,o.jsx)(n.p,{children:"You can follow the same steps for switching back to Mainnet."}),"\n",(0,o.jsx)(n.h3,{id:"adding-the-validator",children:"Adding the Validator"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Node ID: A unique ID derived from each individual node\u2019s staker certificate.\nUse the ",(0,o.jsx)(n.code,{children:"NodeID"})," which was returned in the ",(0,o.jsx)(n.code,{children:"info.getNodeID"})," response.\nIn this example it's ",(0,o.jsx)(n.code,{children:"NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Staking End Date: Your LUX tokens will be locked until this date."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stake Amount: The amount of LUX to lock for staking. On Mainnet,\nthe minimum required amount is 2,000 LUX. On Testnet the minimum required\namount is 1 AVAAX."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Delegation Fee: You will claim this % of the rewards from the delegators on\nyour node."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Reward Address: A reward address is the destination address of the accumulated\nstaking rewards."}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"To add a node as a Validator, first select the Stake tab on Core web,\nin the left hand nav menu. Next click the Validate button, and select\nGet Started."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-validate.gif",width:"80%"}),"\n",(0,o.jsx)(n.p,{children:"This page will open up."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-validate-page.png"}),"\n",(0,o.jsx)(n.p,{children:"Choose the desired Staking Amount, then click Next."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-staking-amount.png"}),"\n",(0,o.jsx)(n.p,{children:"Enter you Node ID, then click Next."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-node-id.png"}),"\n",(0,o.jsx)(n.p,{children:"Here, you'll need to choose the staking duration. There are predefined\nvalues, like 1 day, 1 month and so on. You can also choose a custom period\nof time. For this example, 22 days were chosen."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-staking-duration.png"}),"\n",(0,o.jsx)(n.p,{children:"Choose the address that the network will send rewards to.\nMake sure it's the correct address because once the transaction\nis submitted this cannot be changed later or undone. You can choose the\nwallet's P-Chain address, or a custom P-Chain address.\nAfter entering the address, click Next."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-reward-address.png"}),"\n",(0,o.jsx)(n.p,{children:'Other individuals can stake to your validator and receive rewards too, known as "delegating."\nYou will claim this percent of the rewards from the delegators on your node. Click Next.'}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-delegation-fee.png"}),"\n",(0,o.jsx)(n.p,{children:"After entering all these details, a summary of your validation will show up.\nIf everything is correct, you can proceed and click on Submit Validation.\nA new page will open up, prompting you to accept the transaction.\nHere, please approve the transaction."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-validation-summary.png"}),"\n",(0,o.jsx)(n.p,{children:"After the transaction is approved, you will see a message saying that your\nvalidation transaction was submitted."}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/core-web-accepted-tx.png"}),"\n",(0,o.jsxs)(n.p,{children:["If you click on View on explorer, a new browser tab will open with the details of the\n",(0,o.jsx)(n.code,{children:"AddValidatorTx"}),". It will show details such as the total value of LUX transferred, any\nLUX which were burned, the blockchainID, the blockID, the NodeID of the validator,\nand the total time which has elapsed from the entire Validation period."]}),"\n",(0,o.jsx)("img",{src:"/img/one-click-validator-node/explorer-transaction-details.png"}),"\n",(0,o.jsx)(n.h2,{id:"confirm-that-the-node-is-a-pending-validator-on-testnet",children:"Confirm That the Node is a Pending Validator on Testnet"}),"\n",(0,o.jsxs)(n.p,{children:["As a last step you can call the ",(0,o.jsx)(n.code,{children:"platform.getPendingvalidators"})," endpoint to\nconfirm that the Lux node which was recently spun up on AWS is no in the\npending validators queue where it will stay for 5 minutes."]}),"\n",(0,o.jsxs)(n.h3,{id:"platformgetpendingvalidators-request",children:[(0,o.jsx)(n.code,{children:"platform.getPendingValidators"})," Request"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl --location --request POST \'https://api.lux-test.network/ext/bc/P\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "jsonrpc": "2.0",\n    "method": "platform.getPendingValidators",\n    "params": {\n        "subnetID": "11111111111111111111111111111111LpoYY",\n        "nodeIDs": []\n    },\n    "id": 1\n}\'\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"platformgetpendingvalidators-response",children:[(0,o.jsx)(n.code,{children:"platform.getPendingValidators"})," Response"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "validators": [\n      {\n        "txID": "4d7ZboCrND4FjnyNaF3qyosuGQsNeJ2R4KPJhHJ55VCU1Myjd",\n        "startTime": "1673411918",\n        "endTime": "1675313170",\n        "stakeAmount": "1000000000",\n        "nodeID": "NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5",\n        "delegationFee": "2.0000",\n        "connected": false,\n        "delegators": null\n      }\n    ],\n    "delegators": []\n  },\n  "id": 1\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can also pass in the ",(0,o.jsx)(n.code,{children:"NodeID"})," as a string to the ",(0,o.jsx)(n.code,{children:"nodeIDs"})," array in the request body."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl --location --request POST \'https://api.lux-test.network/ext/bc/P\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "jsonrpc": "2.0",\n    "method": "platform.getPendingValidators",\n    "params": {\n        "subnetID": "11111111111111111111111111111111LpoYY",\n        "nodeIDs": ["NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5"]\n    },\n    "id": 1\n}\'\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This will filter the response by the ",(0,o.jsx)(n.code,{children:"nodeIDs"})," array which will save you time by\nno longer requiring you to search through the entire response body for the\nNodeIDs."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "validators": [\n      {\n        "txID": "4d7ZboCrND4FjnyNaF3qyosuGQsNeJ2R4KPJhHJ55VCU1Myjd",\n        "startTime": "1673411918",\n        "endTime": "1675313170",\n        "stakeAmount": "1000000000",\n        "nodeID": "NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5",\n        "delegationFee": "2.0000",\n        "connected": false,\n        "delegators": null\n      }\n    ],\n    "delegators": []\n  },\n  "id": 1\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After 5 minutes the node will officially start validating the Lux Testnet\ntestnet and you will no longer see it in the response body for the\n",(0,o.jsx)(n.code,{children:"platform.getPendingValidators"})," endpoint. Now you will access it via the\n",(0,o.jsx)(n.code,{children:"platform.getCurrentValidators"})," endpoint."]}),"\n",(0,o.jsxs)(n.h3,{id:"platformgetcurrentvalidators-request",children:[(0,o.jsx)(n.code,{children:"platform.getCurrentValidators"})," Request"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'curl --location --request POST \'https://api.lux-test.network/ext/bc/P\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "jsonrpc": "2.0",\n    "method": "platform.getCurrentValidators",\n    "params": {\n        "subnetID": "11111111111111111111111111111111LpoYY",\n        "nodeIDs": ["NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5"]\n    },\n    "id": 1\n}\'\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"platformgetcurrentvalidators-response",children:[(0,o.jsx)(n.code,{children:"platform.getCurrentValidators"})," Response"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-zsh",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "validators": [\n      {\n        "txID": "2hy57Z7KiZ8L3w2KonJJE1fs5j4JDzVHLjEALAHaXPr6VMeDhk",\n        "startTime": "1673411918",\n        "endTime": "1675313170",\n        "stakeAmount": "1000000000",\n        "nodeID": "NodeID-Q8Gfaaio9FAqCmZVEXDq9bFvNPvDi7rt5",\n        "rewardOwner": {\n          "locktime": "0",\n          "threshold": "1",\n          "addresses": [\n            "P-testnet1tgj2c3k56enytw5d78rt0tsq3lzg8wnftffwk7"\n          ]\n        },\n        "validationRewardOwner": {\n          "locktime": "0",\n          "threshold": "1",\n          "addresses": [\n            "P-testnet1tgj2c3k56enytw5d78rt0tsq3lzg8wnftffwk7"\n          ]\n        },\n        "delegationRewardOwner": {\n          "locktime": "0",\n          "threshold": "1",\n          "addresses": [\n            "P-testnet1tgj2c3k56enytw5d78rt0tsq3lzg8wnftffwk7"\n          ]\n        },\n        "potentialReward": "5400963",\n        "delegationFee": "2.0000",\n        "uptime": "0.0000",\n        "connected": false,\n        "delegators": null\n      }\n    ]\n  },\n  "id": 1\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"mainnet",children:"Mainnet"}),"\n",(0,o.jsxs)(n.p,{children:["All of these steps can be applied to Mainnet. However, the minimum required Lux\ntoken amounts to become a validator is 2,000 on the Mainnet. For more information,\nplease read ",(0,o.jsx)(n.a,{href:"/nodes/validate/how-to-stake#validators",children:"this doc"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,o.jsx)(n.p,{children:"AWS one click is meant to be used in automated environments, not as an end-user solution.\nYou can still manage it manually, but it is not as easy as an Ubuntu instance or using the script:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Luxd binary is at ",(0,o.jsx)(n.code,{children:"/usr/local/bin/luxd"})]}),"\n",(0,o.jsxs)(n.li,{children:["Main node config is at ",(0,o.jsx)(n.code,{children:"/etc/luxd/conf.json"})]}),"\n",(0,o.jsxs)(n.li,{children:["Working directory is at ",(0,o.jsx)(n.code,{children:"/home/lux/.luxd/ (and belongs to luxd user)"})]}),"\n",(0,o.jsxs)(n.li,{children:["Database is at ",(0,o.jsx)(n.code,{children:"/data/luxd"})]}),"\n",(0,o.jsxs)(n.li,{children:["Logs are at ",(0,o.jsx)(n.code,{children:"/var/log/luxd"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For a simple upgrade you would need to place the new binary at ",(0,o.jsx)(n.code,{children:"/usr/local/bin/"}),".\nIf you run a Subnet, you would also need to place the VM binary into ",(0,o.jsx)(n.code,{children:"/home/lux/.luxd/plugins"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also look at using\n",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-tutorial-update-ami.html",children:"this guide"}),",\nbut that won't address updating the Subnet, if you have one."]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.p,{children:["Lux is the first decentralized smart contracts platform built for the\nscale of global finance, with near-instant transaction finality. Now with an\nLux Validator node available as a one-click install from the AWS\nMarketplace developers and entrepreneurs can on-ramp into the Lux\necosystem in a matter of minutes. If you have any questions or want to follow up\nin any way please join our Discord server at ",(0,o.jsx)(n.a,{href:"https://chat.lux.network",children:"https://chat.lux.network"}),". For\nmore developer resources please check out our ",(0,o.jsx)(n.a,{href:"https://docs.lux.network",children:"Developer Documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},23409:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ami-instance-10d030866ca337b7b89d05715df12581.png"},51167:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/core-web-46d1c42f03e473dcbecdad723fee2586.png"},62611:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/launch-successful-f3503f11dad54a2606396053a997b0cf.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);