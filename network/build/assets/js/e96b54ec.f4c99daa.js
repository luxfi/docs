"use strict";(self.webpackChunk_luxdocs_network=self.webpackChunk_luxdocs_network||[]).push([[9042],{31498:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=i(49214),t=i(43540);const r={tags:["Nodes"],description:"In this tutorial, you'll learn how to prepare your environment for Luxd installation and configure your network settings.",sidebar_label:"Preparing Your Environment",sidebar_position:0},s="Run a Lux Node Using the Install Script",d={id:"nodes/run/with-installer/preparing-your-environment",title:"Run a Lux Node Using the Install Script",description:"In this tutorial, you'll learn how to prepare your environment for Luxd installation and configure your network settings.",source:"@site/docs/nodes/run/with-installer/preparing-your-environment.md",sourceDirName:"nodes/run/with-installer",slug:"/nodes/run/with-installer/preparing-your-environment",permalink:"/docs/nodes/run/with-installer/preparing-your-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/luxfi/docs/edit/main/docs/nodes/run/with-installer/preparing-your-environment.md",tags:[{label:"Nodes",permalink:"/docs/tags/nodes"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Nodes"],description:"In this tutorial, you'll learn how to prepare your environment for Luxd installation and configure your network settings.",sidebar_label:"Preparing Your Environment",sidebar_position:0},sidebar:"nodes",previous:{title:"Run a Lux Node Manually",permalink:"/docs/nodes/run/node-manually"},next:{title:"Installing Lux Node",permalink:"/docs/nodes/run/with-installer/installing-luxd"}},a={},l=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Environment Considerations",id:"environment-considerations",level:2},{value:"Node Running from Terminal",id:"node-running-from-terminal",level:3},{value:"Node Running as a Service",id:"node-running-as-a-service",level:3},{value:"Node Running in the Background",id:"node-running-in-the-background",level:3},{value:"Node Working Files",id:"node-working-files",level:3},{value:"Networking Considerations",id:"networking-considerations",level:2},{value:"Running on a Cloud Provider",id:"running-on-a-cloud-provider",level:3},{value:"Running on a Home Connection",id:"running-on-a-home-connection",level:3}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"run-a-lux-node-using-the-install-script",children:"Run a Lux Node Using the Install Script"}),"\n",(0,o.jsx)(e.p,{children:"We have a shell (bash) script that installs Luxd on your computer. This\nscript sets up full, running node in a matter of minutes with minimal user input\nrequired. Script can also be used for unattended, automated installs."}),"\n",(0,o.jsx)(e.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,o.jsx)(e.p,{children:"Lux is an incredibly lightweight protocol, so nodes can run on commodity\nhardware with the following minimum specifications."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"CPU: Equivalent of 8 AWS vCPU"}),"\n",(0,o.jsx)(e.li,{children:"RAM: 16 GiB"}),"\n",(0,o.jsx)(e.li,{children:"Storage: 1 TiB"}),"\n",(0,o.jsx)(e.li,{children:"OS: Ubuntu 20.04 or MacOS >= 12"}),"\n",(0,o.jsx)(e.li,{children:"Network: sustained 5Mbps up/down bandwidth"}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{type:"caution",children:(0,o.jsx)(e.p,{children:"Using an HDD may result in poor and random read/write latencies,\ntherefore reducing performance and reliability."})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Hardware requirements shall scale with the amount of LUX staked on\nthe node and/or network activity. Nodes with big stakes (100k+ LUX) will need\nmore powerful machines than listed, and will use more bandwidth as well."})}),"\n",(0,o.jsx)(e.p,{children:"This install script assumes:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Luxd is not running and not already installed as a service"}),"\n",(0,o.jsxs)(e.li,{children:["User running the script has superuser privileges (can run ",(0,o.jsx)(e.code,{children:"sudo"}),")"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"environment-considerations",children:"Environment Considerations"}),"\n",(0,o.jsxs)(e.p,{children:["If you run a different flavor of Linux, the script might not work as intended.\nIt assumes ",(0,o.jsx)(e.code,{children:"systemd"})," is used to run system services. Other Linux flavors might\nuse something else, or might have files in different places than is assumed by\nthe script. It will probably work on any distribution that uses ",(0,o.jsx)(e.code,{children:"systemd"})," but it\nhas been developed for and tested on Ubuntu."]}),"\n",(0,o.jsx)(e.p,{children:"If you have a node already running on the computer, stop it before running the\nscript. Script won't touch the node working directory so you won't need to\nbootstrap the node again."}),"\n",(0,o.jsx)(e.h3,{id:"node-running-from-terminal",children:"Node Running from Terminal"}),"\n",(0,o.jsxs)(e.p,{children:["If your node is running in a terminal stop it by pressing ",(0,o.jsx)(e.code,{children:"ctrl+C"}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"node-running-as-a-service",children:"Node Running as a Service"}),"\n",(0,o.jsx)(e.p,{children:"If your node is already running as a service, then you probably don't need this\nscript. You're good to go."}),"\n",(0,o.jsx)(e.h3,{id:"node-running-in-the-background",children:"Node Running in the Background"}),"\n",(0,o.jsxs)(e.p,{children:["If your node is running in the background (by running with ",(0,o.jsx)(e.code,{children:"nohup"}),", for example)\nthen find the process running the node by running ",(0,o.jsx)(e.code,{children:"ps aux | grep lux"}),".\nThis will produce output like:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"ubuntu  6834  0.0  0.0   2828   676 pts/1    S+   19:54   0:00 grep lux\nubuntu  2630 26.1  9.4 2459236 753316 ?      Sl   Dec02 1220:52 /home/ubuntu/build/luxd\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Look for line that doesn't have ",(0,o.jsx)(e.code,{children:"grep"})," on it. In this example, that is the\nsecond line. It shows information about your node. Note the process id, in this\ncase, ",(0,o.jsx)(e.code,{children:"2630"}),". Stop the node by running ",(0,o.jsx)(e.code,{children:"kill -2 2630"}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"node-working-files",children:"Node Working Files"}),"\n",(0,o.jsxs)(e.p,{children:["If you previously ran a Luxd node on this computer, you will have local\nnode files stored in ",(0,o.jsx)(e.code,{children:"$HOME/.luxd"})," directory. Those files will not be\ndisturbed, and node set up by the script will continue operation with the same\nidentity and state it had before. That being said, for your node's security,\nback up ",(0,o.jsx)(e.code,{children:"staker.crt"})," and ",(0,o.jsx)(e.code,{children:"staker.key"})," files, found in\n",(0,o.jsx)(e.code,{children:"$HOME/.luxd/staking"})," and store them somewhere secure. You can use those\nfiles to recreate your node on a different computer if you ever need to. Check\nout this ",(0,o.jsx)(e.a,{href:"/docs/nodes/maintain/node-backup-and-restore",children:"tutorial"})," for backup and\nrestore procedure."]}),"\n",(0,o.jsx)(e.h2,{id:"networking-considerations",children:"Networking Considerations"}),"\n",(0,o.jsxs)(e.p,{children:["To run successfully, Luxd needs to accept connections from the Internet\non the network port ",(0,o.jsx)(e.code,{children:"9651"}),". Before you proceed with the installation, you need\nto determine the networking environment your node will run in."]}),"\n",(0,o.jsx)(e.h3,{id:"running-on-a-cloud-provider",children:"Running on a Cloud Provider"}),"\n",(0,o.jsx)(e.p,{children:"If your node is running on a cloud provider computer instance, it will have a\nstatic IP. Find out what that static IP is, or set it up if you didn't already.\nThe script will try to find out the IP by itself, but that might not work in all\nenvironments, so you will need to check the IP or enter it yourself."}),"\n",(0,o.jsx)(e.h3,{id:"running-on-a-home-connection",children:"Running on a Home Connection"}),"\n",(0,o.jsxs)(e.p,{children:["If you're running a node on a computer that is on a residential internet\nconnection, you have a dynamic IP; that is, your IP will change periodically.\nThe install script will configure the node appropriately for that situation.\nBut, for a home connection, you will need to set up inbound port forwarding of\nport ",(0,o.jsx)(e.code,{children:"9651"})," from the internet to the computer the node is installed on."]}),"\n",(0,o.jsxs)(e.p,{children:["As there are too many models and router configurations, we cannot provide\ninstructions on what exactly to do, but there are online guides to be found\n(like\n",(0,o.jsx)(e.a,{href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/",children:"this"}),",\nor ",(0,o.jsx)(e.a,{href:"https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/",children:"this"}),"\n), and your service provider support might help too."]}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsx)(e.p,{children:"Please note that a fully connected Lux node maintains and communicates\nover a couple of thousand of live TCP connections. For some low-powered and\nolder home routers that might be too much to handle. If that is the case you may\nexperience lagging on other computers connected to the same router, node getting\nbenched, failing to sync and similar issues."})})]})}function c(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},43540:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>d});var o=i(48318);const t={},r=o.createContext(t);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);