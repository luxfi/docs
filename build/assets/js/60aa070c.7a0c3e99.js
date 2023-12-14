"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2485],{11289:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=e(85893),o=e(11151);const a={tags:["Build","Dapps"],description:"This tutorial demonstrates how to compile a solidity contract into Golang to deploy and call contracts programmatically.",sidebar_label:"Interact From a Golang App",pagination_label:"Interact with a Solidity Smart Contract from a Go Application"},i="Interact with a Solidity Smart Contract from a Golang Application",c={id:"build/dapp/smart-contracts/abigen",title:"Interact with a Solidity Smart Contract from a Golang Application",description:"This tutorial demonstrates how to compile a solidity contract into Golang to deploy and call contracts programmatically.",source:"@site/docs/build/dapp/smart-contracts/abigen.md",sourceDirName:"build/dapp/smart-contracts",slug:"/build/dapp/smart-contracts/abigen",permalink:"/build/dapp/smart-contracts/abigen",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/dapp/smart-contracts/abigen.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",frontMatter:{tags:["Build","Dapps"],description:"This tutorial demonstrates how to compile a solidity contract into Golang to deploy and call contracts programmatically.",sidebar_label:"Interact From a Golang App",pagination_label:"Interact with a Solidity Smart Contract from a Go Application"},sidebar:"build-dapp",previous:{title:"Using Foundry with the Lux C-Chain",permalink:"/build/dapp/smart-contracts/toolchains/foundry"},next:{title:"Adjusting Gas Price During High Network Activity",permalink:"/build/dapp/advanced/adjusting-gas-price-during-high-network-activity"}},s={},l=[{value:"How to Build",id:"how-to-build",level:2},{value:"Example Code",id:"example-code",level:2}];function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interact-with-a-solidity-smart-contract-from-a-golang-application",children:"Interact with a Solidity Smart Contract from a Golang Application"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"abigen"})," is a tool provided by the Go Ethereum (Geth) client that generates Go bindings for\nSolidity smart contracts. Developers would need to use Abigen when they want to interact with a\nsmart contract written in Solidity from a Go programming language application. It enables developers\nto easily call functions and access data from Solidity contracts in a Go application. This tutorial\ndemonstrates how to compile a solidity contract into Golang to deploy and call contracts\nprogrammatically."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-build",children:"How to Build"}),"\n",(0,r.jsxs)(n.p,{children:["Download the solidity compiler from ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/solc-bin",children:"solc-bin"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Copy the appropriate compiler into your current path. ~/bin/ is a common path in most Linux distributions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# cp linux-amd64/solc-linux-amd64-v0.8.9+commit.e5eed63a ~/bin\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure solc can run."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# solc --version\nsolc, the solidity compiler commandline interface\nVersion: 0.8.9+commit.e5eed63a.Linux.g++\n"})}),"\n",(0,r.jsx)(n.p,{children:"Clone Coreth and Build Abigen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# git clone git@github.com:luxdefi/coreth.git\n# cd coreth/\n# go build -o abigen cmd/abigen/*.go\n# cp abigen ~/bin\n"})}),"\n",(0,r.jsx)(n.p,{children:"Compile a contract."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# abigen --sol counter.sol --pkg main --out counter.go\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will produce ",(0,r.jsx)(n.code,{children:"counter.go"})," suitable to interact with contract."]}),"\n",(0,r.jsx)(n.h2,{id:"example-code",children:"Example Code"}),"\n",(0,r.jsxs)(n.p,{children:["Setup the connection to ",(0,r.jsx)(n.code,{children:"luxd"}),", then deploy, call, and fetch values from the contract."]}),"\n",(0,r.jsx)(n.p,{children:"Abigen offers more features for complicated contracts, the following is provided\nas an example to get started using the basic contract"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"log"\n\t"math/big"\n\t"strings"\n\t"time"\n\n\t"github.com/luxdefi/luxd/utils/constants"\n\t"github.com/luxdefi/luxd/utils/formatting"\n\t"github.com/luxdefi/coreth/accounts/abi/bind"\n\t"github.com/luxdefi/coreth/core/types"\n\t"github.com/luxdefi/coreth/ethclient"\n\t"github.com/luxdefi/coreth/params"\n\t"github.com/luxdefi/coreth/rpc"\n\t"github.com/decred/dcrd/dcrec/secp256k1/v3"\n\t"github.com/ethereum/go-ethereum/common"\n\t"github.com/ethereum/go-ethereum/crypto"\n)\n\nfunc main() {\n\t// setup client\n\trc, err := rpc.Dial("http://localhost:9650/ext/bc/C/rpc")\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tec := ethclient.NewClient(rc)\n\n\tctx := context.Background()\n\n\t// fetch networkid\n\tnetworkId, err := ec.ChainID(ctx)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\t// parse key\n\tprivateKeyString := "PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN"\n\tprivateKeyBytes, err := formatting.Decode(formatting.CB58, strings.TrimPrefix(privateKeyString, constants.SecretKeyPrefix))\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tprivateKey := secp256k1.PrivKeyFromBytes(privateKeyBytes)\n\tprivateKeyECDSA := privateKey.ToECDSA()\n\n\t// derive \'c\' address\n\tcAddress := crypto.PubkeyToAddress(privateKeyECDSA.PublicKey)\n\n\t// setup signer and transaction options.\n\tsigner := types.LatestSignerForChainID(networkId)\n\tto := &bind.TransactOpts{\n\t\tSigner: func(address common.Address, transaction *types.Transaction) (*types.Transaction, error) {\n\t\t\treturn types.SignTx(transaction, signer, privateKeyECDSA)\n\t\t},\n\t\tFrom:     cAddress,\n\t\tContext:  ctx,\n\t\tGasLimit: params.ApricotPhase1GasLimit,\n\t}\n\n\t// deploy the contract\n\tstorageAddress, storageTransaction, storageContract, err := DeployStorage(to, ec)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\t// wait for the transaction to be accepted\n\tfor {\n\t\tr, err := ec.TransactionReceipt(ctx, storageTransaction.Hash())\n\t\tif err != nil {\n\t\t\tif err.Error() != "not found" {\n\t\t\t\tlog.Fatal(err)\n\t\t\t}\n\t\t\ttime.Sleep(1 * time.Second)\n\t\t\tcontinue\n\t\t}\n\t\tif r.Status != 0 {\n\t\t\tbreak\n\t\t}\n\t\ttime.Sleep(1 * time.Second)\n\t}\n\n\tlog.Println("storageAddress", storageAddress)\n\tlog.Println("storageTransaction", storageTransaction)\n\n\t// Call store on the contract\n\tstoreTransaction, err := storageContract.Store(to, big.NewInt(1), common.BytesToAddress([]byte("addr1")))\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\t// wait for the transaction\n\tfor {\n\t\tr, err := ec.TransactionReceipt(ctx, storeTransaction.Hash())\n\t\tif err != nil {\n\t\t\tif err.Error() != "not found" {\n\t\t\t\tlog.Fatal(err)\n\t\t\t}\n\t\t\ttime.Sleep(1 * time.Second)\n\t\t\tcontinue\n\t\t}\n\t\tif r.Status != 0 {\n\t\t\tbreak\n\t\t}\n\t\ttime.Sleep(1 * time.Second)\n\t}\n\n\tlog.Println("storeTransaction", storeTransaction)\n\n\t// setup call options for storage\n\tco := &bind.CallOpts{\n\t\tAccepted: true,\n\t\tContext:  ctx,\n\t\tFrom:     storageAddress,\n\t}\n\n\t// retrieve the value of the contract\n\tstorageValue, err := storageContract.Retrieve(co)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\tlog.Println("storageValue", storageValue)\n}\n'})})]})}function p(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>i});var r=e(67294);const o={},a=r.createContext(o);function i(t){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(a.Provider,{value:n},t.children)}}}]);