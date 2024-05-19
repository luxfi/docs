"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[8318],{61828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(49214),s=n(43540);const r={tags:["Luxd APIs"],description:"This page is an overview of the Metrics API associated with Luxd.",sidebar_label:"Metrics API",pagination_label:"Metrics API"},o="Metrics API",c={id:"reference/luxd/metrics-api",title:"Metrics API",description:"This page is an overview of the Metrics API associated with Luxd.",source:"@site/docs/reference/luxd/metrics-api.md",sourceDirName:"reference/luxd",slug:"/reference/luxd/metrics-api",permalink:"/docs/reference/luxd/metrics-api",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/reference/luxd/metrics-api.md",tags:[{label:"Luxd APIs",permalink:"/docs/tags/luxd-ap-is"}],version:"current",frontMatter:{tags:["Luxd APIs"],description:"This page is an overview of the Metrics API associated with Luxd.",sidebar_label:"Metrics API",pagination_label:"Metrics API"},sidebar:"reference",previous:{title:"Keystore API",permalink:"/docs/reference/luxd/keystore-api"},next:{title:"Subnet-EVM API",permalink:"/docs/reference/subnet-evm/api"}},a={},d=[{value:"Endpoint",id:"endpoint",level:2},{value:"Usage",id:"usage",level:2},{value:"Format",id:"format",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"metrics-api",children:"Metrics API"}),"\n",(0,i.jsx)(t.p,{children:"The API allows clients to get statistics about a node\u2019s health and performance."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This API set is for a specific node, it is unavailable on the ",(0,i.jsx)(t.a,{href:"/docs/tooling/rpc-providers",children:"public server"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"/ext/metrics\n"})}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:"To get the node metrics:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -X POST 127.0.0.1:9650/ext/metrics\n"})}),"\n",(0,i.jsx)(t.h2,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(t.p,{children:["This API produces Prometheus compatible metrics. See\n",(0,i.jsx)(t.a,{href:"https://github.com/prometheus/docs/blob/master/content/docs/instrumenting/exposition_formats.md",children:"here"}),"\nfor information on Prometheus\u2019 formatting."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/nodes/maintain/setting-up-node-monitoring",children:"Here"})," is a tutorial that\nshows how to set up Prometheus and Grafana to monitor Luxd node using the\nMetrics API."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43540:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(48318);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);