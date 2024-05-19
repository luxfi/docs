"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[8473],{79190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var s=t(49214),i=t(43540);const a={tags:["Build","Subnets"],description:"This tutorial demonstrates how to deploy a permissioned Subnet on Lux Mainnet.",sidebar_label:"With Multisig Authorization",pagination_label:"Deploy a Subnet with Multisig Authorization",sidebar_position:4},d="Deploy a Subnet with Multisig Authorization",o={id:"build/subnet/deploy/multisig-auth",title:"Deploy a Subnet with Multisig Authorization",description:"This tutorial demonstrates how to deploy a permissioned Subnet on Lux Mainnet.",source:"@site/docs/build/subnet/deploy/multisig-auth.md",sourceDirName:"build/subnet/deploy",slug:"/build/subnet/deploy/multisig-auth",permalink:"/docs/build/subnet/deploy/multisig-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/subnet/deploy/multisig-auth.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Subnets",permalink:"/docs/tags/subnets"}],version:"current",sidebarPosition:4,frontMatter:{tags:["Build","Subnets"],description:"This tutorial demonstrates how to deploy a permissioned Subnet on Lux Mainnet.",sidebar_label:"With Multisig Authorization",pagination_label:"Deploy a Subnet with Multisig Authorization",sidebar_position:4},sidebar:"build-subnet",previous:{title:"Deploy Subnets on Production Infrastructure",permalink:"/docs/build/subnet/deploy/on-prod-infra"},next:{title:"Deploy a Subnet with Multisig Authorization",permalink:"/docs/build/subnet/deploy/custom-vm-subnet"}},l={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Specify Network",id:"specify-network",level:3},{value:"Set Control Keys",id:"set-control-keys",level:3},{value:"Set Threshold",id:"set-threshold",level:3},{value:"Specify Control Keys to Sign the Chain Creation TX",id:"specify-control-keys-to-sign-the-chain-creation-tx",level:3},{value:"Potential Errors",id:"potential-errors",level:4},{value:"Sign Subnet Deployment TX with the First Address",id:"sign-subnet-deployment-tx-with-the-first-address",level:3},{value:"Gather Remaining Signatures and Issue the Subnet Deployment TX",id:"gather-remaining-signatures-and-issue-the-subnet-deployment-tx",level:2},{value:"Issue the Command to Sign the Chain Creation TX",id:"issue-the-command-to-sign-the-chain-creation-tx",level:3},{value:"Commit the Subnet Deployment TX",id:"commit-the-subnet-deployment-tx",level:3},{value:"Add Validators Using the Multisig",id:"add-validators-using-the-multisig",level:2},{value:"Select Network",id:"select-network",level:3},{value:"Choose Signing Keys",id:"choose-signing-keys",level:3},{value:"Finish Assembling the TX",id:"finish-assembling-the-tx",level:3},{value:"Sign and Commit the Add Validator TX",id:"sign-and-commit-the-add-validator-tx",level:2},{value:"Issue the Command to Sign the Add Validator TX",id:"issue-the-command-to-sign-the-add-validator-tx",level:3},{value:"Issue the Command to Commit the add validator TX",id:"issue-the-command-to-commit-the-add-validator-tx",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-a-subnet-with-multisig-authorization",children:"Deploy a Subnet with Multisig Authorization"}),"\n",(0,s.jsx)(n.p,{children:"Subnet creators can control critical Subnet operations with a N of M multisig. This multisig must be\nsetup at deployment time and can't be edited afterward. Multisigs can are available on both the Testnet\nTestnet and Mainnet."}),"\n",(0,s.jsx)(n.p,{children:"To setup your multisig, you need to know the P-Chain address of each key holder and what you\nwant your signing threshold to be."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Lux-CLI requires Ledgers for Mainnet deployments. This how-to guide assumes the use of Ledgers\nfor setting up your multisig."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/luxfi/cli",children:(0,s.jsx)(n.code,{children:"Lux-CLI"})})," installed"]}),"\n",(0,s.jsxs)(n.li,{children:["Familiarity with process of ",(0,s.jsx)(n.a,{href:"/docs/build/subnet/deploy/testnet-subnet",children:"Deploying a Subnet on Testnet"}),"\nand ",(0,s.jsx)(n.a,{href:"/docs/build/subnet/deploy/mainnet-subnet",children:"Deploying a Permissioned Subnet on Mainnet"})]}),"\n",(0,s.jsxs)(n.li,{children:["Multiple Ledger devices ",(0,s.jsx)(n.a,{href:"/docs/build/subnet/deploy/mainnet-subnet#setting-up-your-ledger",children:"configured for Lux"})]}),"\n",(0,s.jsx)(n.li,{children:"A Subnet configuration ready to deploy to either Testnet or Mainnet"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"When issuing the transactions to create the Subnet, you need to sign the TXs with multiple keys\nfrom the multisig."}),"\n",(0,s.jsx)(n.h3,{id:"specify-network",children:"Specify Network"}),"\n",(0,s.jsx)(n.p,{children:"Start the Subnet deployment with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux subnet deploy testsubnet\n"})}),"\n",(0,s.jsxs)(n.p,{children:["First step is to specify ",(0,s.jsx)(n.code,{children:"Testnet"})," or ",(0,s.jsx)(n.code,{children:"Mainnet"})," as the network:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Choose a network to deploy on:\n    Local Network\n    Testnet\n  \u25b8 Mainnet\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Deploying [testsubnet] to Mainnet\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ledger is automatically recognized as the signature mechanism on ",(0,s.jsx)(n.code,{children:"Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["After that, the CLI shows the first ",(0,s.jsx)(n.code,{children:"Mainnet"})," Ledger address."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Ledger address: P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n"})}),"\n",(0,s.jsx)(n.h3,{id:"set-control-keys",children:"Set Control Keys"}),"\n",(0,s.jsx)(n.p,{children:"Next the CLI asks the user to specify the control keys. This is where you setup your multisig."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Configure which addresses may make changes to the subnet.\nThese addresses are known as your control keys. You are going to also\nset how many control keys are required to make a subnet change (the threshold).\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? How would you like to set your control keys?:\n  \u25b8 Use ledger address\n    Custom list\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.code,{children:"Custom list"})," and add every address that you'd like to be a key holder on the multisig."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u2714 Custom list\n? Enter control keys:\n  \u25b8 Add\n    Delete\n    Preview\n    More Info\n\u2193   Done\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the given menu to add each key, and select ",(0,s.jsx)(n.code,{children:"Done"})," when finished."]}),"\n",(0,s.jsx)(n.p,{children:"The output at this point should look something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u2714 Custom list\n\u2714 Add\nEnter P-Chain address (Example: P-...): P-lux1wryu62weky9qjlp40cpmnqf6ml2hytnagj5q28\n\u2714 Add\nEnter P-Chain address (Example: P-...): P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n\u2714 Add\nEnter P-Chain address (Example: P-...): P-lux12gcy0xl0al6gcjrt0395xqlcuq078ml93wl5h8\n\u2714 Add\nEnter P-Chain address (Example: P-...): P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n\u2714 Add\nEnter P-Chain address (Example: P-...): P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g\n\u2714 Done\nYour Subnet's control keys: [P-lux1wryu62weky9qjlp40cpmnqf6ml2hytnagj5q28 P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5 P-lux12gcy0xl0al6gcjrt0395xqlcuq078ml93wl5h8 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g]\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["When deploying a Subnet with Ledger's, you must include the Ledger's default address determined in\n",(0,s.jsx)(n.a,{href:"#specify-network",children:"Specify Network"})," for the deployment to succeed. You may see an error like"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Error: wallet does not contain subnet auth keys\nexit status 1\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"set-threshold",children:"Set Threshold"}),"\n",(0,s.jsx)(n.p,{children:"Next, specify the threshold. In your N of M multisig, your threshold is N, and M is the number\nof control keys you added in the previous step."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select required number of control key signatures to make a subnet change:\n  \u25b8 1\n    2\n    3\n    4\n    5\n"})}),"\n",(0,s.jsx)(n.h3,{id:"specify-control-keys-to-sign-the-chain-creation-tx",children:"Specify Control Keys to Sign the Chain Creation TX"}),"\n",(0,s.jsx)(n.p,{children:"You now need N of your key holders to sign the Subnet deployment transaction. You must select which\naddresses you want to sign the TX."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"? Choose a subnet auth key:\n  \u25b8 P-lux1wryu62weky9qjlp40cpmnqf6ml2hytnagj5q28\n    P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n    P-lux12gcy0xl0al6gcjrt0395xqlcuq078ml93wl5h8\n    P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n    P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g\n"})}),"\n",(0,s.jsx)(n.p,{children:"A successful control key selection looks like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u2714 2\n\u2714 P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n\u2714 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\nYour subnet auth keys for chain creation: [P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af]\n*** Please sign subnet creation hash on the ledger device ***\n"})}),"\n",(0,s.jsx)(n.h4,{id:"potential-errors",children:"Potential Errors"}),"\n",(0,s.jsx)(n.p,{children:"If the currently connected Ledger address isn't included in your TX signing group, the operation\nfails with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u2714 2\n\u2714 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n\u2714 P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g\nYour subnet auth keys for chain creation: [P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g]\nError: wallet does not contain subnet auth keys\nexit status 1\n"})}),"\n",(0,s.jsx)(n.p,{children:"This can happen either because the original specified control keys -previous step- don't contain the\nLedger address, or because the Ledger address control key wasn't selected in the current step."}),"\n",(0,s.jsx)(n.p,{children:"If the user has the correct address but doesn't have sufficient balance to pay for the TX, the\noperation fails with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'\u2714 2\n\u2714 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n\u2714 P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g\nYour subnet auth keys for chain creation: [P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g]\n*** Please sign subnet creation hash on the ledger device ***\nError: insufficient funds: provided UTXOs need 1000000000 more units of asset "rgNLkDPpANwqg3pHC4o9aGJmf2YU4GgTVUMRKAdnKodihkqgr"\nexit status 1\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sign-subnet-deployment-tx-with-the-first-address",children:"Sign Subnet Deployment TX with the First Address"}),"\n",(0,s.jsx)(n.p,{children:"The Subnet Deployment TX is ready for signing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"*** Please sign subnet creation hash on the ledger device ***\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This activates a ",(0,s.jsx)(n.code,{children:"Please review"})," window on the Ledger. Navigate to the Ledger's ",(0,s.jsx)(n.code,{children:"APPROVE"})," window by\nusing the Ledger's right button, and then authorize the request by pressing both left and right buttons."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Subnet has been created with ID: 2qUKjvPx68Fgc1NMi8w4mtaBt5hStgBzPhsQrS1m7vSub2q9ew. Now creating blockchain...\n*** Please sign blockchain creation hash on the ledger device ***\n"})}),"\n",(0,s.jsx)(n.p,{children:"After successful Subnet creation, the CLI asks the user to sign the blockchain creation TX."}),"\n",(0,s.jsxs)(n.p,{children:["This activates a ",(0,s.jsx)(n.code,{children:"Please review"})," window on the Ledger. Navigate to the Ledger's ",(0,s.jsx)(n.code,{children:"APPROVE"})," window by\nusing the Ledger's right button, and then authorize the request by pressing both left and right buttons."]}),"\n",(0,s.jsx)(n.p,{children:"On success, the CLI provides Subnet deploy details. As only one address signed the chain creation\nTX, the CLI writes a file to disk to save the TX to continue the signing process with another\ncommand."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------------+----------------------------------------------------+\n| DEPLOYMENT RESULTS |                                                    |\n+--------------------+----------------------------------------------------+\n| Chain Name         | testsubnet                                         |\n+--------------------+----------------------------------------------------+\n| Subnet ID          | 2qUKjvPx68Fgc1NMi8w4mtaBt5hStgBzPhsQrS1m7vSub2q9ew |\n+--------------------+----------------------------------------------------+\n| VM ID              | rW1esjm6gy4BtGvxKMpHB2M28MJGFNsqHRY9AmnchdcgeB3ii  |\n+--------------------+----------------------------------------------------+\n\n1 of 2 required Blockchain Creation signatures have been signed. Saving TX to disk to enable remaining signing.\n\nPath to export partially signed TX to:\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enter the name of file to write to disk, such as ",(0,s.jsx)(n.code,{children:"partiallySigned.txt"}),". This file shouldn't exist already."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'Path to export partially signed TX to: partiallySigned.txt\n\nAddresses remaining to sign the tx\n  P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n\nConnect a ledger with one of the remaining addresses or choose a stored key and run the signing command, or send "partiallySigned.txt" to another user for signing.\n\nSigning command:\n  lux transaction sign testsubnet --input-tx-filepath partiallySigned.txt\n'})}),"\n",(0,s.jsx)(n.h2,{id:"gather-remaining-signatures-and-issue-the-subnet-deployment-tx",children:"Gather Remaining Signatures and Issue the Subnet Deployment TX"}),"\n",(0,s.jsxs)(n.p,{children:["So far, one address has signed the Subnet deployment TX, but you need N signatures. Your Subnet has\nnot been fully deployed yet. To get the remaining signatures, you may connect a different Ledger to\nthe same computer you've been working on. Alternatively, you may send the ",(0,s.jsx)(n.code,{children:"partiallySigned.txt"})," file\nto other users to sign themselves."]}),"\n",(0,s.jsxs)(n.p,{children:["The remainder of this section assumes that you are working on a machine with access to both the\nremaining keys and the ",(0,s.jsx)(n.code,{children:"partiallySigned.txt"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"issue-the-command-to-sign-the-chain-creation-tx",children:"Issue the Command to Sign the Chain Creation TX"}),"\n",(0,s.jsxs)(n.p,{children:["Lux-CLI can detect the deployment network automatically. For ",(0,s.jsx)(n.code,{children:"Mainnet"})," TXs, it uses your\nLedger automatically. For ",(0,s.jsx)(n.code,{children:"Testnet"}),", the CLI prompts the user to choose the signing mechanism."]}),"\n",(0,s.jsxs)(n.p,{children:["You can start the signing process with the ",(0,s.jsx)(n.code,{children:"transaction sign"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux transaction sign testsubnet --input-tx-filepath partiallySigned.txt\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Ledger address: P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n*** Please sign TX hash on the ledger device ***\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, the CLI starts a new signing process for the Subnet deployment TX. If the Ledger isn't the correct\none, the following error should appear instead:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Ledger address: P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\nError: wallet does not contain subnet auth keys\nexit status 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This activates a ",(0,s.jsx)(n.code,{children:"Please review"})," window on the Ledger. Navigate to the Ledger's ",(0,s.jsx)(n.code,{children:"APPROVE"})," window by\nusing the Ledger's right button, and then authorize the request by pressing both left and right buttons."]}),"\n",(0,s.jsx)(n.p,{children:"Repeat this processes until all required parties have signed the TX. You should see a message\nlike this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"All 2 required Tx signatures have been signed. Saving TX to disk to enable commit.\n\nOverwritting partiallySigned.txt\n\nTx is fully signed, and ready to be committed\n\nCommit command:\n  lux transaction commit testsubnet --input-tx-filepath partiallySigned.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, ",(0,s.jsx)(n.code,{children:"partiallySigned.txt"})," contains a fully signed TX."]}),"\n",(0,s.jsx)(n.h3,{id:"commit-the-subnet-deployment-tx",children:"Commit the Subnet Deployment TX"}),"\n",(0,s.jsx)(n.p,{children:"To run submit the fully signed TX, run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux transaction commit testsubnet --input-tx-filepath partiallySigned.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"The CLI recognizes the deployment network automatically and submits the TX appropriately."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+--------------------+-------------------------------------------------------------------------------------+\n| DEPLOYMENT RESULTS |                                                                                     |\n+--------------------+-------------------------------------------------------------------------------------+\n| Chain Name         | testsubnet                                                                          |\n+--------------------+-------------------------------------------------------------------------------------+\n| Subnet ID          | 2qUKjvPx68Fgc1NMi8w4mtaBt5hStgBzPhsQrS1m7vSub2q9ew                                  |\n+--------------------+-------------------------------------------------------------------------------------+\n| VM ID              | rW1esjm6gy4BtGvxKMpHB2M28MJGFNsqHRY9AmnchdcgeB3ii                                   |\n+--------------------+-------------------------------------------------------------------------------------+\n| Blockchain ID      | 2fx9EF61C964cWBu55vcz9b7gH9LFBkPwoj49JTSHA6Soqqzoj                                  |\n+--------------------+-------------------------------------------------------------------------------------+\n| RPC URL            | http://127.0.0.1:9650/ext/bc/2fx9EF61C964cWBu55vcz9b7gH9LFBkPwoj49JTSHA6Soqqzoj/rpc |\n+--------------------+-------------------------------------------------------------------------------------+\n| P-Chain TXID       | 2fx9EF61C964cWBu55vcz9b7gH9LFBkPwoj49JTSHA6Soqqzoj                                  |\n+--------------------+-------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Your Subnet successfully deployed with a multisig."}),"\n",(0,s.jsx)(n.h2,{id:"add-validators-using-the-multisig",children:"Add Validators Using the Multisig"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"addValidator"})," command also requires use of the multisig. Before starting, make sure to connect,\nunlock, and run the Lux Ledger app."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux subnet addValidator testsubnet\n"})}),"\n",(0,s.jsx)(n.h3,{id:"select-network",children:"Select Network"}),"\n",(0,s.jsxs)(n.p,{children:["First specify the network. Select either ",(0,s.jsx)(n.code,{children:"Testnet"})," or ",(0,s.jsx)(n.code,{children:"Mainnet"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Use the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Choose a network to add validator to.:\n  \u25b8 Testnet\n    Mainnet\n"})}),"\n",(0,s.jsx)(n.h3,{id:"choose-signing-keys",children:"Choose Signing Keys"}),"\n",(0,s.jsxs)(n.p,{children:["Then, similar to the ",(0,s.jsx)(n.code,{children:"deploy"})," command, the command asks the user to select the N control keys needed\nto sign the TX."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u2714 Mainnet\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Choose a subnet auth key:\n  \u25b8 P-lux1wryu62weky9qjlp40cpmnqf6ml2hytnagj5q28\n    P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n    P-lux12gcy0xl0al6gcjrt0395xqlcuq078ml93wl5h8\n    P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n    P-lux1g4eryh40dtcsltmxn9zk925ny07gdq2xyjtf4g\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u2714 Mainnet\n\u2714 P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n\u2714 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\nYour subnet auth keys for add validator TX creation: [P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5 P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af].\n"})}),"\n",(0,s.jsx)(n.h3,{id:"finish-assembling-the-tx",children:"Finish Assembling the TX"}),"\n",(0,s.jsxs)(n.p,{children:["Take a look at ",(0,s.jsx)(n.a,{href:"/docs/build/subnet/deploy/mainnet-subnet#add-a-validator",children:"Add a Validator"})," for\nadditional help issuing this transaction."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If setting up a multisig, don't select your validator start time to be in one minute. Finishing the\nsigning process takes significantly longer when using a multisig."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Next, we need the NodeID of the validator you want to whitelist.\n\nCheck https://docs.lux.network/apis/luxd/apis/info#infogetnodeid for instructions about how to query the NodeID from your node\n(Edit host IP address and port to match your deployment, if needed).\nWhat is the NodeID of the validator you'd like to whitelist?: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n\u2714 Default (20)\nWhen should your validator start validating?\nIf you validator is not ready by this time, subnet downtime can occur.\n\u2714 Custom\nWhen should the validator start validating? Enter a UTC datetime in 'YYYY-MM-DD HH:MM:SS' format: 2022-11-22 23:00:00\n\u2714 Until primary network validator expires\nNodeID: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\nNetwork: Local Network\nStart time: 2022-11-22 23:00:00\nEnd time: 2023-11-22 15:57:27\nWeight: 20\nInputs complete, issuing transaction to add the provided validator information...\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Ledger address: P-lux1kdzq569g2c9urm9887cmldlsa3w3jhxe0knfy5\n*** Please sign add validator hash on the ledger device ***\n"})}),"\n",(0,s.jsx)(n.p,{children:"After that, the command shows the connected Ledger's address, and asks the user to sign the TX with\nthe Ledger."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Partial TX created\n\n1 of 2 required Add Validator signatures have been signed. Saving TX to disk to enable remaining signing.\n\nPath to export partially signed TX to:\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Because you've setup a multisig, TX isn't fully signed, and the commands asks a file to write into. Use\nsomething like ",(0,s.jsx)(n.code,{children:"partialAddValidatorTx.txt"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'Path to export partially signed TX to: partialAddValidatorTx.txt\n\nAddresses remaining to sign the tx\n  P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n\nConnect a Ledger with one of the remaining addresses or choose a stored key and run the signing command, or send "partialAddValidatorTx.txt" to another user for signing.\n\nSigning command:\n  lux transaction sign testsubnet --input-tx-filepath partialAddValidatorTx.txt\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sign-and-commit-the-add-validator-tx",children:"Sign and Commit the Add Validator TX"}),"\n",(0,s.jsxs)(n.p,{children:["The process is very similar to signing of Subnet Deployment TX. So far, one address has signed the\nTX, but you need N signatures. To get the remaining signatures, you may connect a different Ledger\nto the same computer you've been working on. Alternatively, you may send the\n",(0,s.jsx)(n.code,{children:"partialAddValidatorTx.txt"})," file to other users to sign themselves."]}),"\n",(0,s.jsxs)(n.p,{children:["The remainder of this section assumes that you are working on a machine with access to both the\nremaining keys and the ",(0,s.jsx)(n.code,{children:"partialAddValidatorTx.txt"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"issue-the-command-to-sign-the-add-validator-tx",children:"Issue the Command to Sign the Add Validator TX"}),"\n",(0,s.jsxs)(n.p,{children:["Lux-CLI can detect the deployment network automatically. For ",(0,s.jsx)(n.code,{children:"Mainnet"})," TXs, it uses your Ledger\nautomatically. For ",(0,s.jsx)(n.code,{children:"Testnet"}),", the CLI prompts the user to choose the signing mechanism."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux transaction sign testsubnet --input-tx-filepath partialAddValidatorTx.txt\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Ledger address: P-lux1g7nkguzg8yju8cq3ndzc9lql2yg69s9ejqa2af\n*** Please sign TX hash on the ledger device ***\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, the command is going to start a new signing process for the Add Validator TX."}),"\n",(0,s.jsxs)(n.p,{children:["This activates a ",(0,s.jsx)(n.code,{children:"Please review"})," window on the Ledger. Navigate to the Ledger's ",(0,s.jsx)(n.code,{children:"APPROVE"})," window by\nusing the Ledger's right button, and then authorize the request by pressing both left and right buttons."]}),"\n",(0,s.jsx)(n.p,{children:"Repeat this processes until all required parties have signed the TX. You should see a message like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\nAll 2 required Tx signatures have been signed. Saving TX to disk to enable commit.\n\nOverwritting partialAddValidatorTx.txt\n\nTx is fully signed, and ready to be committed\n\nCommit command:\n  lux transaction commit testsubnet --input-tx-filepath partialAddValidatorTx.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, ",(0,s.jsx)(n.code,{children:"partialAddValidatorTx.txt"})," contains a fully signed TX."]}),"\n",(0,s.jsx)(n.h3,{id:"issue-the-command-to-commit-the-add-validator-tx",children:"Issue the Command to Commit the add validator TX"}),"\n",(0,s.jsx)(n.p,{children:"To run submit the fully signed TX, run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux transaction commit testsubnet --input-tx-filepath partialAddValidatorTx.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"The CLI recognizes the deployment network automatically and submits the TX appropriately."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Transaction successful, transaction ID: K7XNSwcmgjYX7BEdtFB3hEwQc6YFKRq9g7hAUPhW4J5bjhEJG\n"})}),"\n",(0,s.jsx)(n.p,{children:"You've successfully added the validator to the Subnet."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43540:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(48318);const i={},a=s.createContext(i);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);