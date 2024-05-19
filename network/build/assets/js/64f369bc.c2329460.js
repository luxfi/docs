"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[1546],{44814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(49214),i=t(43540),l=t(28237),o=t(13262);const a={tags:["Build","Virtual Machines"],description:"Setting up your environment to build stateful precompiles in EVM",sidebar_label:"Background and Requirements",pagination_label:"Background and Requirements",sidebar_position:1},s="Background and Requirements",c={id:"build/vm/evm/background-and-reqs",title:"Background and Requirements",description:"Setting up your environment to build stateful precompiles in EVM",source:"@site/docs/build/vm/evm/background-and-reqs.md",sourceDirName:"build/vm/evm",slug:"/build/vm/evm/background-and-reqs",permalink:"/docs/build/vm/evm/background-and-reqs",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/vm/evm/background-and-reqs.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Virtual Machines",permalink:"/docs/tags/virtual-machines"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Build","Virtual Machines"],description:"Setting up your environment to build stateful precompiles in EVM",sidebar_label:"Background and Requirements",pagination_label:"Background and Requirements",sidebar_position:1},sidebar:"build-vm",previous:{title:"Introduction",permalink:"/docs/build/vm/evm/intro"},next:{title:"Generating Your Precompile",permalink:"/docs/build/vm/evm/generate-precompile"}},u={},d=[{value:"Precompile-EVM",id:"precompile-evm",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Complete Code",id:"complete-code",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"background-and-requirements",children:"Background and Requirements"}),"\n","\n",(0,r.jsx)(n.p,{children:"This is a brief overview of what this tutorial will cover."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Write a Solidity interface"}),"\n",(0,r.jsx)(n.li,{children:"Generate the precompile template"}),"\n",(0,r.jsx)(n.li,{children:"Implement the precompile functions in Golang"}),"\n",(0,r.jsx)(n.li,{children:"Write and run tests"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Stateful precompiles are ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha",children:"alpha software"}),".\nBuild at your own risk."]})}),"\n",(0,r.jsxs)(n.p,{children:["In this tutorial, we used a branch based on Subnet-EVM version ",(0,r.jsx)(n.code,{children:"v0.5.2"}),". You can find the branch\n",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/tree/helloworld-official-tutorial-v2",children:"here"}),". The code in this\nbranch is the same as Subnet-EVM except for the ",(0,r.jsx)(n.code,{children:"precompile/contracts/helloworld"})," directory. The\ndirectory contains the code for the ",(0,r.jsx)(n.code,{children:"HelloWorld"})," precompile. We will be using this\nprecompile as an example to learn how to write a stateful precompile. The code in this branch can become\noutdated.\nYou should always use the latest version of Subnet-EVM when you develop your own precompile."]}),"\n",(0,r.jsx)(n.h2,{id:"precompile-evm",children:"Precompile-EVM"}),"\n",(0,r.jsx)(n.p,{children:"Subnet-EVM precompiles can be registered from an external repo.\nThis allows developer to build their precompiles without maintaining a fork of Subnet-EVM.\nThe precompiles are then registered in the Subnet-EVM at build time."}),"\n",(0,r.jsx)(n.p,{children:"The difference between using Subnet-EVM and Precompile-EVM is that with Subnet-EVM you can change EVM\ninternals to interact with your precompiles.\nSuch as changing fee structure, adding new opcodes, changing how to build a block, etc.\nWith Precompile-EVM you can only add new stateful precompiles that can interact with the StateDB.\nPrecompiles built with Precompile-EVM are still very powerful because it can directly access to the\nstate and modify it."}),"\n",(0,r.jsxs)(n.p,{children:["There is a template repo for how to build a precompile with this way called\n",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/precompile-evm",children:"Precompile-EVM"}),". Both Subnet-EVM and Precompile-EVM share\nsimilar directory structures and common codes."]}),"\n",(0,r.jsxs)(n.p,{children:["You can reference the Precompile-EVM PR that adds Hello World precompile ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/precompile-evm/pull/12",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"This tutorial assumes familiarity with Golang and JavaScript."}),"\n",(0,r.jsx)(n.p,{children:"Additionally, users should be deeply familiar with the EVM in order to understand its invariants\nsince adding a Stateful Precompile modifies the EVM itself."}),"\n",(0,r.jsx)(n.p,{children:"Here are some recommended resources to learn the ins and outs of the EVM:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/ethereumbook/ethereumbook/blob/develop/13evm.asciidoc",children:"The Ethereum Virtual Machine"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@rbkhmrcr/precompiles-solidity-e5d29bd428c4",children:"Precompiles in Solidity"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-i-introduction-832efd2d7737/",children:"Deconstructing a Smart Contract"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.10/internals/layout_in_storage.html",children:"Layout of State Variables in Storage"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.10/internals/layout_in_memory.html",children:"Layout in Memory"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.10/internals/layout_in_calldata.html",children:"Layout of Call Data"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.10/abi-spec.html",children:"Contract ABI Specification"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/luxlux/customizing-the-evm-with-stateful-precompiles-f44a34f39efd",children:"Customizing the EVM with Stateful Precompiles"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Please install the following before getting started."}),"\n",(0,r.jsxs)(n.p,{children:["First, install the latest version of Go. Follow the instructions ",(0,r.jsx)(n.a,{href:"https://go.dev/doc/install",children:"here"}),".\nYou can verify by running ",(0,r.jsx)(n.code,{children:"go version"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Set the ",(0,r.jsx)(n.code,{children:"$GOPATH"})," environment variable properly for Go to look for Go Workspaces. Please read\n",(0,r.jsx)(n.a,{href:"https://go.dev/doc/gopath_code",children:"this"})," for details. You can verify by running ",(0,r.jsx)(n.code,{children:"echo $GOPATH"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/golang/go/wiki/SettingGOPATH",children:"here"})," for instructions on setting the\nGOPATH based on system configurations."]})}),"\n",(0,r.jsxs)(n.p,{children:["As a few things will be installed into ",(0,r.jsx)(n.code,{children:"$GOPATH/bin"}),", please make sure that ",(0,r.jsx)(n.code,{children:"$GOPATH/bin"})," is in your\n",(0,r.jsx)(n.code,{children:"$PATH"}),", otherwise, you may get an error running the commands below.\nTo do that, run the command: ",(0,r.jsx)(n.code,{children:"export PATH=$PATH:$GOROOT/bin:$GOPATH/bin"})]}),"\n",(0,r.jsxs)(n.p,{children:["Download the following prerequisites into your ",(0,r.jsx)(n.code,{children:"$GOPATH"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Git Clone the repository (Subnet-EVM or Precompile-EVM)"}),"\n",(0,r.jsxs)(n.li,{children:["Git Clone ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/luxd",children:"Luxd"})," repository"]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"/docs/tooling/netrunner",children:"Lux Netrunner"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/solc-js#usage-on-the-command-line",children:"solc"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js and NPM"}),"\nFor easy copy paste, use the below commands:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd $GOPATH\nmkdir -p src/github.com/luxfi\ncd src/github.com/luxfi\n"})}),"\n",(0,r.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,r.jsxs)(l.A,{groupId:"evm-tabs",children:[(0,r.jsx)(o.A,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:luxfi/subnet-evm.git\n"})})}),(0,r.jsxs)(o.A,{value:"precompile-evm-tab",label:"Precompile-EVM",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:luxfi/precompile-evm.git\n"})}),(0,r.jsxs)(n.p,{children:["Alternatively you can use it as a template repo from ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/precompile-evm/generate",children:"github"}),"."]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Then run the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:luxfi/luxd.git\ncurl -sSfL https://raw.githubusercontent.com/luxfi/netrunner/main/scripts/install.sh | sh -s\nnpm install -g solc\n"})}),"\n",(0,r.jsx)(n.h2,{id:"complete-code",children:"Complete Code"}),"\n",(0,r.jsx)(n.p,{children:"You can inspect example pull request for the complete code."}),"\n",(0,r.jsxs)(l.A,{groupId:"evm-tabs",children:[(0,r.jsx)(o.A,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/pull/565/",children:"Subnet-EVM Hello World Pull Request"})})}),(0,r.jsx)(o.A,{value:"precompile-evm-tab",label:"Precompile-EVM",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/luxfi/precompile-evm/pull/12/",children:"Precompile-EVM Hello World Pull Request"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["For a full-fledged example, you can also check out the ",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm/blob/helloworld-official-tutorial-v2/precompile/contracts/rewardmanager/",children:"Reward Manager Precompile"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},13262:(e,n,t)=>{t.d(n,{A:()=>o});t(48318);var r=t(23372);const i={tabItem:"tabItem_QyJb"};var l=t(49214);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},28237:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(48318),i=t(23372),l=t(70604),o=t(66325),a=t(849),s=t(54313),c=t(77638),u=t(75590);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:i}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),g=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(16883);const g={tabList:"tabList_hAgJ",tabItem:"tabItem_inov"};var x=t(49214);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),i=a[t].value;i!==r&&(c(n),o(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},43540:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(48318);const i={},l=r.createContext(i);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);