"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1713],{56015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(85893),a=t(11151);const i={tags:["Nodes"],description:"In this doc, learn how to run offline pruning on your node to reduce its disk usage.",sidebar_label:"Reduce Disk Usage",pagination_label:"Reduce a Node's Disk Space: Run C-Chain Offline Pruning",sidebar_position:4},o="Run C-Chain Offline Pruning",r={id:"nodes/maintain/run-offline-pruning",title:"Run C-Chain Offline Pruning",description:"In this doc, learn how to run offline pruning on your node to reduce its disk usage.",source:"@site/docs/nodes/maintain/run-offline-pruning.md",sourceDirName:"nodes/maintain",slug:"/nodes/maintain/run-offline-pruning",permalink:"/nodes/maintain/run-offline-pruning",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/nodes/maintain/run-offline-pruning.md",tags:[{label:"Nodes",permalink:"/tags/nodes"}],version:"current",sidebarPosition:4,frontMatter:{tags:["Nodes"],description:"In this doc, learn how to run offline pruning on your node to reduce its disk usage.",sidebar_label:"Reduce Disk Usage",pagination_label:"Reduce a Node's Disk Space: Run C-Chain Offline Pruning",sidebar_position:4},sidebar:"nodes",previous:{title:"Upgrade Your Luxd Node",permalink:"/nodes/maintain/upgrade-your-luxd-node"},next:{title:"Enroll in Lux Notify",permalink:"/nodes/maintain/notify"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Finding the C-Chain Config File",id:"finding-the-c-chain-config-file",level:2},{value:"Running Offline Pruning",id:"running-offline-pruning",level:2},{value:"Disk Space Considerations",id:"disk-space-considerations",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-c-chain-offline-pruning",children:"Run C-Chain Offline Pruning"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Offline Pruning is ported from ",(0,s.jsx)(n.code,{children:"go-ethereum"})," to reduce the amount of disk space\ntaken up by the TrieDB (storage for the Merkle Forest)."]}),"\n",(0,s.jsx)(n.p,{children:"Offline pruning creates a bloom filter and adds all trie nodes in the active\nstate to the bloom filter to mark the data as protected. This ensures that any\npart of the active state will not be removed during offline pruning."}),"\n",(0,s.jsx)(n.p,{children:"After generating the bloom filter, offline pruning iterates over the database\nand searches for trie nodes that are safe to be removed from disk."}),"\n",(0,s.jsx)(n.p,{children:"A bloom filter is a probabilistic data structure that reports whether an item is\ndefinitely not in a set or possibly in a set. Therefore, for each key we\niterate, we check if it is in the bloom filter. If the key is definitely not in\nthe bloom filter, then it is not in the active state and we can safely delete\nit. If the key is possibly in the set, then we skip over it to ensure we do not\ndelete any active state."}),"\n",(0,s.jsx)(n.p,{children:"During iteration, the underlying database (LevelDB) writes deletion markers,\ncausing a temporary increase in disk usage."}),"\n",(0,s.jsx)(n.p,{children:"After iterating over the database and deleting any old trie nodes that it can,\noffline pruning then runs compaction to minimize the DB size after the\npotentially large number of delete operations."}),"\n",(0,s.jsx)(n.h2,{id:"finding-the-c-chain-config-file",children:"Finding the C-Chain Config File"}),"\n",(0,s.jsxs)(n.p,{children:["In order to enable offline pruning, you need to update the C-Chain config file\nto include the parameters ",(0,s.jsx)(n.code,{children:"offline-pruning-enabled"})," and\n",(0,s.jsx)(n.code,{children:"offline-pruning-data-directory"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The default location of the C-Chain config file is\n",(0,s.jsx)(n.code,{children:"~/.luxd/configs/chains/C/config.json"}),". ",(0,s.jsx)(n.strong,{children:"Please note that by default,\nthis file does not exist. You would need to create it manually."})," You can update\nthe directory for chain configs by passing in the directory of your choice via\nthe CLI argument: ",(0,s.jsx)(n.code,{children:"chain-config-dir"}),". See ",(0,s.jsx)(n.a,{href:"/nodes/configure/chain-config-flags",children:"this"})," for more\ninfo. For example, if you start your node with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"./build/luxd --chain-config-dir=/home/ubuntu/chain-configs\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The chain config directory will be updated to ",(0,s.jsx)(n.code,{children:"/home/ubuntu/chain-configs"})," and\nthe corresponding C-Chain config file will be:\n",(0,s.jsx)(n.code,{children:"/home/ubuntu/chain-configs/C/config.json"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"running-offline-pruning",children:"Running Offline Pruning"}),"\n",(0,s.jsx)(n.p,{children:"In order to enable offline pruning, update the C-Chain config file to include the following parameters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "offline-pruning-enabled": true,\n  "offline-pruning-data-directory": "/home/ubuntu/offline-pruning"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will set ",(0,s.jsx)(n.code,{children:"/home/ubuntu/offline-pruning"})," as the directory to be used by the\noffline pruner. Offline pruning will store the bloom filter in this location, so\nyou must ensure that the path exists."]}),"\n",(0,s.jsx)(n.p,{children:"Now that the C-Chain config file has been updated, you can start your node with\nthe command (no CLI arguments are necessary if using the default chain config\ndirectory):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"./build/luxd\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once Luxd starts the C-Chain, you can expect to see update logs from the offline pruner:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"INFO [02-09|00:20:15.625] Iterating state snapshot                 accounts=297,231 slots=6,669,708 elapsed=16.001s eta=1m29.03s\nINFO [02-09|00:20:23.626] Iterating state snapshot                 accounts=401,907 slots=10,698,094 elapsed=24.001s eta=1m32.522s\nINFO [02-09|00:20:31.626] Iterating state snapshot                 accounts=606,544 slots=13,891,948 elapsed=32.002s eta=1m10.927s\nINFO [02-09|00:20:39.626] Iterating state snapshot                 accounts=760,948 slots=18,025,523 elapsed=40.002s eta=1m2.603s\nINFO [02-09|00:20:47.626] Iterating state snapshot                 accounts=886,583 slots=21,769,199 elapsed=48.002s eta=1m8.834s\nINFO [02-09|00:20:55.626] Iterating state snapshot                 accounts=1,046,295 slots=26,120,100 elapsed=56.002s eta=57.401s\nINFO [02-09|00:21:03.626] Iterating state snapshot                 accounts=1,229,257 slots=30,241,391 elapsed=1m4.002s eta=47.674s\nINFO [02-09|00:21:11.626] Iterating state snapshot                 accounts=1,344,091 slots=34,128,835 elapsed=1m12.002s eta=45.185s\nINFO [02-09|00:21:19.626] Iterating state snapshot                 accounts=1,538,009 slots=37,791,218 elapsed=1m20.002s eta=34.59s\nINFO [02-09|00:21:27.627] Iterating state snapshot                 accounts=1,729,564 slots=41,694,303 elapsed=1m28.002s eta=25.006s\nINFO [02-09|00:21:35.627] Iterating state snapshot                 accounts=1,847,617 slots=45,646,011 elapsed=1m36.003s eta=20.052s\nINFO [02-09|00:21:43.627] Iterating state snapshot                 accounts=1,950,875 slots=48,832,722 elapsed=1m44.003s eta=9.299s\nINFO [02-09|00:21:47.342] Iterated snapshot                        accounts=1,950,875 slots=49,667,870 elapsed=1m47.718s\nINFO [02-09|00:21:47.351] Writing state bloom to disk              name=/home/ubuntu/offline-pruning/statebloom.0xd6fca36db4b60b34330377040ef6566f6033ed8464731cbb06dc35c8401fa38e.bf.gz\nINFO [02-09|00:23:04.421] State bloom filter committed             name=/home/ubuntu/offline-pruning/statebloom.0xd6fca36db4b60b34330377040ef6566f6033ed8464731cbb06dc35c8401fa38e.bf.gz\n"})}),"\n",(0,s.jsx)(n.p,{children:"The bloom filter should be populated and committed to disk after about 5\nminutes. At this point, if the node shuts down, it will resume the offline\npruning session when it restarts (note: this operation cannot be cancelled)."}),"\n",(0,s.jsx)(n.p,{children:"In order to ensure that users do not mistakenly leave offline pruning enabled\nfor the long term (which could result in an hour of downtime on each restart),\nwe have added a manual protection which requires that after an offline pruning\nsession, the node must be started with offline pruning disabled at least once\nbefore it will start with offline pruning enabled again. Therefore, once the\nbloom filter has been committed to disk, you should update the C-Chain config\nfile to include the following parameters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "offline-pruning-enabled": false,\n  "offline-pruning-data-directory": "/home/ubuntu/offline-pruning"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It is important to keep the same data directory in the config file, so that the\nnode knows where to look for the bloom filter on a restart if offline pruning\nhas not finished."}),"\n",(0,s.jsx)(n.p,{children:"Now if your node restarts, it will be marked as having correctly disabled\noffline pruning after the run and be allowed to resume normal operation once\noffline pruning has finished running."}),"\n",(0,s.jsx)(n.p,{children:"You will see progress logs throughout the offline pruning run which will indicate the session's progress:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"INFO [02-09|00:31:51.920] Pruning state data                       nodes=40,116,759 size=10.08GiB  elapsed=8m47.499s eta=12m50.961s\nINFO [02-09|00:31:59.921] Pruning state data                       nodes=41,659,059 size=10.47GiB  elapsed=8m55.499s eta=12m13.822s\nINFO [02-09|00:32:07.921] Pruning state data                       nodes=41,687,047 size=10.48GiB  elapsed=9m3.499s  eta=12m23.915s\nINFO [02-09|00:32:15.921] Pruning state data                       nodes=41,715,823 size=10.48GiB  elapsed=9m11.499s eta=12m33.965s\nINFO [02-09|00:32:23.921] Pruning state data                       nodes=41,744,167 size=10.49GiB  elapsed=9m19.500s eta=12m44.004s\nINFO [02-09|00:32:31.921] Pruning state data                       nodes=41,772,613 size=10.50GiB  elapsed=9m27.500s eta=12m54.01s\nINFO [02-09|00:32:39.921] Pruning state data                       nodes=41,801,267 size=10.50GiB  elapsed=9m35.500s eta=13m3.992s\nINFO [02-09|00:32:47.922] Pruning state data                       nodes=41,829,714 size=10.51GiB  elapsed=9m43.500s eta=13m13.951s\nINFO [02-09|00:32:55.922] Pruning state data                       nodes=41,858,400 size=10.52GiB  elapsed=9m51.501s eta=13m23.885s\nINFO [02-09|00:33:03.923] Pruning state data                       nodes=41,887,131 size=10.53GiB  elapsed=9m59.501s eta=13m33.79s\nINFO [02-09|00:33:11.923] Pruning state data                       nodes=41,915,583 size=10.53GiB  elapsed=10m7.502s eta=13m43.678s\nINFO [02-09|00:33:19.924] Pruning state data                       nodes=41,943,891 size=10.54GiB  elapsed=10m15.502s eta=13m53.551s\nINFO [02-09|00:33:27.924] Pruning state data                       nodes=41,972,281 size=10.55GiB  elapsed=10m23.502s eta=14m3.389s\nINFO [02-09|00:33:35.924] Pruning state data                       nodes=42,001,414 size=10.55GiB  elapsed=10m31.503s eta=14m13.192s\nINFO [02-09|00:33:43.925] Pruning state data                       nodes=42,029,987 size=10.56GiB  elapsed=10m39.504s eta=14m22.976s\nINFO [02-09|00:33:51.925] Pruning state data                       nodes=42,777,042 size=10.75GiB  elapsed=10m47.504s eta=14m7.245s\nINFO [02-09|00:34:00.950] Pruning state data                       nodes=42,865,413 size=10.77GiB  elapsed=10m56.529s eta=14m15.927s\nINFO [02-09|00:34:08.956] Pruning state data                       nodes=42,918,719 size=10.79GiB  elapsed=11m4.534s  eta=14m24.453s\nINFO [02-09|00:34:22.816] Pruning state data                       nodes=42,952,925 size=10.79GiB  elapsed=11m18.394s eta=14m41.243s\nINFO [02-09|00:34:30.818] Pruning state data                       nodes=42,998,715 size=10.81GiB  elapsed=11m26.397s eta=14m49.961s\nINFO [02-09|00:34:38.828] Pruning state data                       nodes=43,046,476 size=10.82GiB  elapsed=11m34.407s eta=14m58.572s\nINFO [02-09|00:34:46.893] Pruning state data                       nodes=43,107,656 size=10.83GiB  elapsed=11m42.472s eta=15m6.729s\nINFO [02-09|00:34:55.038] Pruning state data                       nodes=43,168,834 size=10.85GiB  elapsed=11m50.616s eta=15m14.934s\nINFO [02-09|00:35:03.039] Pruning state data                       nodes=43,446,900 size=10.92GiB  elapsed=11m58.618s eta=15m14.705s\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the node completes, it will emit the following log and resume normal operation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:'INFO [02-09|00:42:16.009] Pruning state data                       nodes=93,649,812 size=23.53GiB  elapsed=19m11.588s eta=1m2.658s\nINFO [02-09|00:42:24.009] Pruning state data                       nodes=95,045,956 size=23.89GiB  elapsed=19m19.588s eta=45.149s\nINFO [02-09|00:42:32.009] Pruning state data                       nodes=96,429,410 size=24.23GiB  elapsed=19m27.588s eta=28.041s\nINFO [02-09|00:42:40.009] Pruning state data                       nodes=97,811,804 size=24.58GiB  elapsed=19m35.588s eta=11.204s\nINFO [02-09|00:42:45.359] Pruned state data                        nodes=98,744,430 size=24.82GiB  elapsed=19m40.938s\nINFO [02-09|00:42:45.360] Compacting database                      range=0x00-0x10 elapsed="2.157\xb5s"\nINFO [02-09|00:43:12.311] Compacting database                      range=0x10-0x20 elapsed=26.951s\nINFO [02-09|00:43:38.763] Compacting database                      range=0x20-0x30 elapsed=53.402s\nINFO [02-09|00:44:04.847] Compacting database                      range=0x30-0x40 elapsed=1m19.486s\nINFO [02-09|00:44:31.194] Compacting database                      range=0x40-0x50 elapsed=1m45.834s\nINFO [02-09|00:45:31.580] Compacting database                      range=0x50-0x60 elapsed=2m46.220s\nINFO [02-09|00:45:58.465] Compacting database                      range=0x60-0x70 elapsed=3m13.104s\nINFO [02-09|00:51:17.593] Compacting database                      range=0x70-0x80 elapsed=8m32.233s\nINFO [02-09|00:56:19.679] Compacting database                      range=0x80-0x90 elapsed=13m34.319s\nINFO [02-09|00:56:46.011] Compacting database                      range=0x90-0xa0 elapsed=14m0.651s\nINFO [02-09|00:57:12.370] Compacting database                      range=0xa0-0xb0 elapsed=14m27.010s\nINFO [02-09|00:57:38.600] Compacting database                      range=0xb0-0xc0 elapsed=14m53.239s\nINFO [02-09|00:58:06.311] Compacting database                      range=0xc0-0xd0 elapsed=15m20.951s\nINFO [02-09|00:58:35.484] Compacting database                      range=0xd0-0xe0 elapsed=15m50.123s\nINFO [02-09|00:59:05.449] Compacting database                      range=0xe0-0xf0 elapsed=16m20.089s\nINFO [02-09|00:59:34.365] Compacting database                      range=0xf0-     elapsed=16m49.005s\nINFO [02-09|00:59:34.367] Database compaction finished             elapsed=16m49.006s\nINFO [02-09|00:59:34.367] State pruning successful                 pruned=24.82GiB elapsed=39m34.749s\nINFO [02-09|00:59:34.367] Completed offline pruning. Re-initializing blockchain.\nINFO [02-09|00:59:34.387] Loaded most recent local header          number=10,671,401 hash=b52d0a..7bd166 age=40m29s\nINFO [02-09|00:59:34.387] Loaded most recent local full block      number=10,671,401 hash=b52d0a..7bd166 age=40m29s\nINFO [02-09|00:59:34.387] Initializing snapshots                   async=true\nDEBUG[02-09|00:59:34.390] Reinjecting stale transactions           count=0\nINFO [02-09|00:59:34.395] Transaction pool price threshold updated price=470,000,000,000\nINFO [02-09|00:59:34.396] Transaction pool price threshold updated price=225,000,000,000\nINFO [02-09|00:59:34.396] Transaction pool price threshold updated price=0\nINFO [02-09|00:59:34.396] lastAccepted = 0xb52d0a1302e4055b487c3a0243106b5e13a915c6e178da9f8491cebf017bd166\nINFO [02-09|00:59:34] <C Chain> snow/engine/snowman/transitive.go#67: initializing consensus engine\nINFO [02-09|00:59:34] <C Chain> snow/engine/snowman/bootstrap/bootstrapper.go#220: Starting bootstrap...\nINFO [02-09|00:59:34] chains/manager.go#246: creating chain:\n    ID: 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM\n    VMID:jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq\nINFO [02-09|00:59:34.425] Enabled APIs: eth, eth-filter, net, web3, internal-eth, internal-blockchain, internal-transaction, lux\nDEBUG[02-09|00:59:34.425] Allowed origin(s) for WS RPC interface [*]\nINFO [02-09|00:59:34] api/server/server.go#203: adding route /ext/bc/2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5/lux\nINFO [02-09|00:59:34] api/server/server.go#203: adding route /ext/bc/2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5/rpc\nINFO [02-09|00:59:34] api/server/server.go#203: adding route /ext/bc/2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5/ws\nINFO [02-09|00:59:34] <X Chain> vms/avm/vm.go#437: Fee payments are using Asset with Alias: LUX, AssetID: FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z\nINFO [02-09|00:59:34] <X Chain> vms/avm/vm.go#229: address transaction indexing is disabled\nINFO [02-09|00:59:34] <X Chain> snow/engine/lux/transitive.go#71: initializing consensus engine\nINFO [02-09|00:59:34] <X Chain> snow/engine/lux/bootstrap/bootstrapper.go#258: Starting bootstrap...\nINFO [02-09|00:59:34] api/server/server.go#203: adding route /ext/bc/2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM\nINFO [02-09|00:59:34] <P Chain> snow/engine/snowman/bootstrap/bootstrapper.go#445: waiting for the remaining chains in this subnet to finish syncing\nINFO [02-09|00:59:34] api/server/server.go#203: adding route /ext/bc/2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM/wallet\nINFO [02-09|00:59:34] api/server/server.go#203: adding route /ext/bc/2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM/events\nINFO [02-09|00:59:34] <P Chain> snow/engine/common/bootstrapper.go#235: Bootstrapping started syncing with 1 vertices in the accepted frontier\nINFO [02-09|00:59:46] <X Chain> snow/engine/common/bootstrapper.go#235: Bootstrapping started syncing with 2 vertices in the accepted frontier\nINFO [02-09|00:59:49] <C Chain> snow/engine/common/bootstrapper.go#235: Bootstrapping started syncing with 1 vertices in the accepted frontier\nINFO [02-09|00:59:49] <X Chain> snow/engine/lux/bootstrap/bootstrapper.go#473: bootstrapping fetched 55 vertices. Executing transaction state transitions...\nINFO [02-09|00:59:49] <X Chain> snow/engine/common/queue/jobs.go#171: executed 55 operations\nINFO [02-09|00:59:49] <X Chain> snow/engine/lux/bootstrap/bootstrapper.go#484: executing vertex state transitions...\nINFO [02-09|00:59:49] <X Chain> snow/engine/common/queue/jobs.go#171: executed 55 operations\nINFO [02-09|01:00:07] <C Chain> snow/engine/snowman/bootstrap/bootstrapper.go#406: bootstrapping fetched 1241 blocks. Executing state transitions...\n'})}),"\n",(0,s.jsx)(n.p,{children:"At this point, the node will go into bootstrapping and (once bootstrapping\ncompletes) resume consensus and operate as normal."}),"\n",(0,s.jsx)(n.h2,{id:"disk-space-considerations",children:"Disk Space Considerations"}),"\n",(0,s.jsxs)(n.p,{children:["To ensure the node does not enter an inconsistent state, the bloom filter used\nfor pruning is persisted to ",(0,s.jsx)(n.code,{children:"offline-pruning-data-directory"})," for the duration of\nthe operation. This directory should have ",(0,s.jsx)(n.code,{children:"offline-pruning-bloom-filter-size"}),"\navailable in disk space (default 512 MB)."]}),"\n",(0,s.jsx)(n.p,{children:"The underlying database (LevelDB) uses deletion markers (tombstones) to identify\nnewly deleted keys. These markers are temporarily persisted to disk until they\nare removed during a process known as compaction. This will lead to an increase\nin disk usage during pruning. If your node runs out of disk space during\npruning, you may safely restart the pruning operation. This may succeed as\nrestarting the node triggers compaction."}),"\n",(0,s.jsx)(n.p,{children:"If restarting the pruning operation does not succeed, additional disk space should be provisioned."})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);