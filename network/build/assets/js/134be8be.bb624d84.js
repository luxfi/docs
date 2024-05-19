"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[2449],{61688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(49214),a=t(43540),o=t(28237),l=t(13262);const i={tags:["Build","Virtual Machines"],description:"In this guide, we will explain the steps to deploy our precompile on a local network.",sidebar_label:"Deploying Your Precompile",pagination_label:"Deploying Your Precompile",sidebar_position:6},s="Deploying Your Precompile",u={id:"build/vm/evm/deploying-precompile",title:"Deploying Your Precompile",description:"In this guide, we will explain the steps to deploy our precompile on a local network.",source:"@site/docs/build/vm/evm/deploying-precompile.md",sourceDirName:"build/vm/evm",slug:"/build/vm/evm/deploying-precompile",permalink:"/docs/build/vm/evm/deploying-precompile",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/build/vm/evm/deploying-precompile.md",tags:[{label:"Build",permalink:"/docs/tags/build"},{label:"Virtual Machines",permalink:"/docs/tags/virtual-machines"}],version:"current",sidebarPosition:6,frontMatter:{tags:["Build","Virtual Machines"],description:"In this guide, we will explain the steps to deploy our precompile on a local network.",sidebar_label:"Deploying Your Precompile",pagination_label:"Deploying Your Precompile",sidebar_position:6},sidebar:"build-vm",previous:{title:"Executing Your Test Cases",permalink:"/docs/build/vm/evm/executing-tests"}},c={},d=[{value:"Maintenance",id:"maintenance",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploying-your-precompile",children:"Deploying Your Precompile"}),"\n","\n",(0,r.jsx)(n.p,{children:"We made it! Everything works in our Ginkgo tests, and now we want to spin up a local network\nwith the Hello World precompile activated."}),"\n",(0,r.jsxs)(n.p,{children:["Start the server in a terminal in a new tab using netrunner. Please check out\n",(0,r.jsx)(n.a,{href:"/docs/tooling/netrunner",children:"this link"}),' for more information on Lux\nNetrunner, how to download it, and how to use it. The server will be in "listening" mode\nwaiting for API calls.']}),"\n",(0,r.jsx)(n.p,{children:"We will start the server from the Subnet-EVM directory so that we can use a relative file path\nto the genesis JSON file:"}),"\n",(0,r.jsxs)(o.A,{groupId:"evm-tabs",children:[(0,r.jsx)(l.A,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi/subnet-evm\n"})})}),(0,r.jsx)(l.A,{value:"precompile-evm-tab",label:"Precompile-EVM",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxfi/precompile-evm\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Then run ANR:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'netrunner server \\\n--log-level debug \\\n--port=":8080" \\\n--grpc-gateway-port=":8081"\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Since we already compiled Luxd and Subnet-EVM/Precompile-EVM in a previous step, we should have\nthe Luxd and Subnet-EVM binaries ready to go."}),"\n",(0,r.jsxs)(n.p,{children:["We can now set the following paths. ",(0,r.jsx)(n.code,{children:"LUXD_EXEC_PATH"})," points to the latest Luxd binary\nwe have just built. ",(0,r.jsx)(n.code,{children:"LUXD_PLUGIN_PATH"})," points to the plugins path which should have the\nSubnet-EVM binary we have just built:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'export LUXD_EXEC_PATH="${GOPATH}/src/github.com/luxfi/luxd/build/luxd"\nexport LUXD_PLUGIN_PATH="${GOPATH}/src/github.com/luxfi/luxd/build/plugins"\n'})}),"\n",(0,r.jsx)(n.p,{children:'The following command will "issue requests" to the server we just spun up. We can use\nnetrunner to spin up some nodes that run the latest version of Subnet-EVM:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'  netrunner control start \\\n  --log-level debug \\\n  --endpoint="0.0.0.0:8080" \\\n  --number-of-nodes=5 \\\n  --luxd-path ${LUXD_EXEC_PATH} \\\n  --plugin-dir ${LUXD_PLUGIN_PATH} \\\n  --blockchain-specs \'[{"vm_name": "subnetevm", "genesis": "./tests/precompile/genesis/hello_world.json"}]\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can look at the server terminal tab and see it booting up the local network.\nIf the network startup is successful then you should see something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[blockchain RPC for "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9650/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"\n[blockchain RPC for "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9652/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"\n[blockchain RPC for "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9654/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"\n[blockchain RPC for "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9656/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"\n[blockchain RPC for "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9658/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This shows the extension to the API server on Luxd that's specific to the Subnet-EVM\nBlockchain instance. To interact with it, you will want to append the ",(0,r.jsx)(n.code,{children:"/rpc"})," extension, which\nwill supply the standard Ethereum API calls. For example, you can use the RPC URL:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"http://127.0.0.1:9650/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU/rpc"})}),"\n",(0,r.jsx)(n.p,{children:"to connect to the blockchain through Core, MetaMask, HardHat, etc."}),"\n",(0,r.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,r.jsx)(n.p,{children:"You should always keep your fork up to date with the latest changes in the official Subnet-EVM repo.\nIf you have forked the Subnet-EVM repo, there could be conflicts and\nyou may need to manually resolve them."}),"\n",(0,r.jsxs)(n.p,{children:["If you used Precompile-EVM, you can update your repo by bumping Subnet-EVM versions in\n",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/precompile-evm/blob/hello-world-example/go.mod#L7",children:(0,r.jsx)(n.code,{children:"go.mod"})})," and\n",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/precompile-evm/blob/hello-world-example/scripts/versions.sh#L4",children:(0,r.jsx)(n.code,{children:"version.sh"})})]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["We have now created a stateful precompile from scratch with the precompile generation tool. We hope\nyou had fun and learned a little more about the Subnet-EVM. Now that you have created a simple\nstateful precompile, we urge you to create one of your own. If you have an idea for a stateful\nprecompile that may be useful to the community, feel free to create a fork of\n",(0,r.jsx)(n.a,{href:"https://github.com/luxfi/subnet-evm",children:"Subnet-EVM"})," and create a pull request."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},13262:(e,n,t)=>{t.d(n,{A:()=>l});t(48318);var r=t(23372);const a={tabItem:"tabItem_QyJb"};var o=t(49214);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},28237:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(48318),a=t(23372),o=t(70604),l=t(66325),i=t(849),s=t(54313),u=t(77638),c=t(75590);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=u??b;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(16883);const g={tabList:"tabList_hAgJ",tabItem:"tabItem_inov"};var x=t(49214);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},43540:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(48318);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);