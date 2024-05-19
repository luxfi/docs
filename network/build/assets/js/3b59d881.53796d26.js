"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[7771],{87398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(49214),a=n(43540);n(28237),n(13262);const i={tags:["Build","Virtual Machines"],description:"Getting started with building stateful precompiles for Subnet-EVM and Precompile-EVM",sidebar_label:"Introduction",pagination_label:"Introduction",sidebar_position:0},o="Stateful Precompile Generation Tutorial",s={id:"build/vm/evm/intro",title:"Stateful Precompile Generation Tutorial",description:"Getting started with building stateful precompiles for Subnet-EVM and Precompile-EVM",source:"@site/docs/build/vm/evm/intro.md",sourceDirName:"build/vm/evm",slug:"/build/vm/evm/intro",permalink:"/docs/build/vm/evm/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/vm/evm/intro.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Virtual Machines",permalink:"/docs/tags/virtual-machines"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Build","Virtual Machines"],description:"Getting started with building stateful precompiles for Subnet-EVM and Precompile-EVM",sidebar_label:"Introduction",pagination_label:"Introduction",sidebar_position:0},sidebar:"build-vm",previous:{title:"Build a Rust VM",permalink:"/docs/build/vm/create/rust-vm"},next:{title:"Background and Requirements",permalink:"/docs/build/vm/evm/background-and-reqs"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Precompiled Contracts",id:"precompiled-contracts",level:3},{value:"Stateful Precompiled Contracts",id:"stateful-precompiled-contracts",level:3},{value:"AllowList",id:"allowlist",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"stateful-precompile-generation-tutorial",children:"Stateful Precompile Generation Tutorial"}),"\n","\n",(0,r.jsx)(t.p,{children:"In this tutorial, we are going to walk through how we can generate a stateful precompile from scratch.\nBefore we start, let's brush up on what a precompile is, what a stateful precompile is, and why this\nis extremely useful."}),"\n",(0,r.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(t.h3,{id:"precompiled-contracts",children:"Precompiled Contracts"}),"\n",(0,r.jsx)(t.p,{children:"Ethereum uses precompiles to efficiently implement cryptographic primitives within the EVM instead of\nre-implementing the same primitives in Solidity. The following precompiles are currently included:\necrecover, sha256, blake2f, ripemd-160, Bn256Add, Bn256Mul, Bn256Pairing, the identity function, and\nmodular exponentiation."}),"\n",(0,r.jsxs)(t.p,{children:["We can see these ",(0,r.jsx)(t.a,{href:"https://github.com/ethereum/go-ethereum/blob/v1.11.1/core/vm/contracts.go#L82",children:"precompile"}),"\nmappings from address to function here in the Ethereum VM:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// PrecompiledContractsBerlin contains the default set of pre-compiled Ethereum\n// contracts used in the Berlin release.\nvar PrecompiledContractsBerlin = map[common.Address]PrecompiledContract{\n\tcommon.BytesToAddress([]byte{1}): &ecrecover{},\n\tcommon.BytesToAddress([]byte{2}): &sha256hash{},\n\tcommon.BytesToAddress([]byte{3}): &ripemd160hash{},\n\tcommon.BytesToAddress([]byte{4}): &dataCopy{},\n\tcommon.BytesToAddress([]byte{5}): &bigModExp{eip2565: true},\n\tcommon.BytesToAddress([]byte{6}): &bn256AddIstanbul{},\n\tcommon.BytesToAddress([]byte{7}): &bn256ScalarMulIstanbul{},\n\tcommon.BytesToAddress([]byte{8}): &bn256PairingIstanbul{},\n\tcommon.BytesToAddress([]byte{9}): &blake2F{},\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["These precompile addresses start from ",(0,r.jsx)(t.code,{children:"0x0000000000000000000000000000000000000001"})," and increment by 1."]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.com/luxfi/subnet-evm/blob/helloworld-official-tutorial-v2/core/vm/contracts.go#L54-L57",children:"precompile"}),"\nfollows this interface:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// PrecompiledContract is the basic interface for native Go contracts. The implementation\n// requires a deterministic gas count based on the input size of the Run method of the\n// contract.\ntype PrecompiledContract interface {\n\tRequiredGas(input []byte) uint64  // RequiredPrice calculates the contract gas use\n\tRun(input []byte) ([]byte, error) // Run runs the precompiled contract\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here is an example of the\n",(0,r.jsx)(t.a,{href:"https://github.com/luxfi/subnet-evm/blob/helloworld-official-tutorial-v2/core/vm/contracts.go#L237-L250",children:"sha256 precompile"}),"\nfunction."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type sha256hash struct{}\n\n// RequiredGas returns the gas required to execute the pre-compiled contract.\n//\n// This method does not require any overflow checking as the input size gas costs\n// required for anything significant is so high it's impossible to pay for.\nfunc (c *sha256hash) RequiredGas(input []byte) uint64 {\n\treturn uint64(len(input)+31)/32*params.Sha256PerWordGas + params.Sha256BaseGas\n}\n\nfunc (c *sha256hash) Run(input []byte) ([]byte, error) {\n\th := sha256.Sum256(input)\n\treturn h[:], nil\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"The CALL opcode (CALL, STATICCALL, DELEGATECALL, and CALLCODE) allows us to invoke this precompile."}),"\n",(0,r.jsx)(t.p,{children:"The function signature of CALL in the EVM is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:" Call(\n \tcaller ContractRef,\n \taddr common.Address,\n \tinput []byte,\n \tgas uint64,\n \tvalue *big.Int,\n)(ret []byte, leftOverGas uint64, err error)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Precompiles are a shortcut to execute a function implemented by the EVM itself, rather than an actual\ncontract. A precompile is associated with a fixed address defined in the EVM. There is no byte code\nassociated with that address."}),"\n",(0,r.jsx)(t.p,{children:"When a precompile is called, the EVM checks if the input address is a precompile address, and if so it\nexecutes the precompile. Otherwise, it loads the smart contract at the input address and runs it on the\nEVM interpreter with the specified input data."}),"\n",(0,r.jsx)(t.h3,{id:"stateful-precompiled-contracts",children:"Stateful Precompiled Contracts"}),"\n",(0,r.jsxs)(t.p,{children:["A stateful precompile builds on a precompile in that it adds state access. Stateful precompiles are\nnot available in the default EVM, and are specific to Lux EVMs such as\n",(0,r.jsx)(t.a,{href:"https://github.com/luxfi/coreth",children:"Coreth"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/luxfi/subnet-evm",children:"Subnet-EVM"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["A stateful precompile follows this ",(0,r.jsx)(t.a,{href:"https://github.com/luxfi/subnet-evm/blob/helloworld-official-tutorial-v2/precompile/contract/interfaces.go#L17-L20",children:"interface"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// StatefulPrecompiledContract is the interface for executing a precompiled contract\ntype StatefulPrecompiledContract interface {\n\t// Run executes the precompiled contract.\n\tRun(accessibleState PrecompileAccessibleState,\n\tcaller common.Address,\n\taddr  common.Address,\n\tinput []byte,\n\tsuppliedGas uint64,\n\treadOnly bool)\n\t(ret []byte, remainingGas uint64, err error)\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A stateful precompile injects state access through the ",(0,r.jsx)(t.code,{children:"PrecompileAccessibleState"})," interface to\nprovide access to the EVM state including the ability to modify balances and read/write storage."]}),"\n",(0,r.jsx)(t.p,{children:"This way we can provide even more customization of the EVM through Stateful Precompiles than we can\nwith the original precompile interface!"}),"\n",(0,r.jsx)(t.h3,{id:"allowlist",children:"AllowList"}),"\n",(0,r.jsxs)(t.p,{children:["The AllowList enables a precompile to enforce permissions on addresses. The AllowList is not a contract\nitself, but a helper structure to provide a control mechanism for wrapping contracts.\nIt provides an ",(0,r.jsx)(t.code,{children:"AllowListConfig"})," to the precompile so that it can take an initial configuration\nfrom genesis/upgrade. It also provides 4 functions to set/read the permissions. In this tutorial, we\nused ",(0,r.jsx)(t.code,{children:"IAllowList"})," interface to provide permission control to the ",(0,r.jsx)(t.code,{children:"HelloWorld"})," precompile.\n",(0,r.jsx)(t.code,{children:"IAllowList"})," is defined in Subnet-EVM under ",(0,r.jsx)(t.a,{href:"https://github.com/luxfi/subnet-evm/blob/helloworld-official-tutorial-v2/contracts/contracts/interfaces/IAllowList.sol",children:(0,r.jsx)(t.code,{children:"./contracts/contracts/interfaces/IAllowList.sol"})}),".\nThe interface is as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sol",children:"//SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\ninterface IAllowList {\n  // Set [addr] to have the admin role over the precompile contract.\n  function setAdmin(address addr) external;\n  // Set [addr] to be enabled on the precompile contract.\n  function setEnabled(address addr) external;\n  // Set [addr] to have no role for the precompile contract.\n  function setNone(address addr) external;\n  // Read the status of [addr].\n  function readAllowList(address addr) external view returns (uint256 role);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can find more information about the AllowList interface ",(0,r.jsx)(t.a,{href:"/docs/build/subnet/upgrade/customize-a-subnet#allowlist-interface",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},13262:(e,t,n)=>{n.d(t,{A:()=>o});n(48318);var r=n(23372);const a={tabItem:"tabItem_QyJb"};var i=n(49214);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},28237:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(48318),a=n(23372),i=n(70604),o=n(66325),s=n(849),l=n(54313),c=n(77638),u=n(75590);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(16883);const g={tabList:"tabList_hAgJ",tabItem:"tabItem_inov"};var v=n(49214);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},43540:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(48318);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);