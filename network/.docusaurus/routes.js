import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '380'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'd0e'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '00d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ed3'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'cd1'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true
          },
          {
            path: '/tags/build',
            component: ComponentCreator('/tags/build', '98c'),
            exact: true
          },
          {
            path: '/tags/c-chain',
            component: ComponentCreator('/tags/c-chain', 'c8b'),
            exact: true
          },
          {
            path: '/tags/contract-chain',
            component: ComponentCreator('/tags/contract-chain', '45c'),
            exact: true
          },
          {
            path: '/tags/cross-subnet-communication',
            component: ComponentCreator('/tags/cross-subnet-communication', '74e'),
            exact: true
          },
          {
            path: '/tags/dapps',
            component: ComponentCreator('/tags/dapps', 'a69'),
            exact: true
          },
          {
            path: '/tags/decentralized-applications',
            component: ComponentCreator('/tags/decentralized-applications', 'c36'),
            exact: true
          },
          {
            path: '/tags/glacier-api',
            component: ComponentCreator('/tags/glacier-api', '770'),
            exact: true
          },
          {
            path: '/tags/indexers',
            component: ComponentCreator('/tags/indexers', '490'),
            exact: true
          },
          {
            path: '/tags/lux',
            component: ComponentCreator('/tags/lux', '4fb'),
            exact: true
          },
          {
            path: '/tags/lux-cli',
            component: ComponentCreator('/tags/lux-cli', '38d'),
            exact: true
          },
          {
            path: '/tags/lux-consensus',
            component: ComponentCreator('/tags/lux-consensus', '8cc'),
            exact: true
          },
          {
            path: '/tags/lux-js',
            component: ComponentCreator('/tags/lux-js', 'e72'),
            exact: true
          },
          {
            path: '/tags/lux-protocol',
            component: ComponentCreator('/tags/lux-protocol', 'f22'),
            exact: true
          },
          {
            path: '/tags/lux-warp-messaging',
            component: ComponentCreator('/tags/lux-warp-messaging', 'df4'),
            exact: true
          },
          {
            path: '/tags/luxd',
            component: ComponentCreator('/tags/luxd', '7b7'),
            exact: true
          },
          {
            path: '/tags/luxd-ap-is',
            component: ComponentCreator('/tags/luxd-ap-is', '3b7'),
            exact: true
          },
          {
            path: '/tags/metrics-api',
            component: ComponentCreator('/tags/metrics-api', '608'),
            exact: true
          },
          {
            path: '/tags/nodes',
            component: ComponentCreator('/tags/nodes', 'bb4'),
            exact: true
          },
          {
            path: '/tags/p-chain',
            component: ComponentCreator('/tags/p-chain', '642'),
            exact: true
          },
          {
            path: '/tags/platform-chain',
            component: ComponentCreator('/tags/platform-chain', '2c1'),
            exact: true
          },
          {
            path: '/tags/primary-network',
            component: ComponentCreator('/tags/primary-network', '2f9'),
            exact: true
          },
          {
            path: '/tags/rpc-providers',
            component: ComponentCreator('/tags/rpc-providers', '17a'),
            exact: true
          },
          {
            path: '/tags/standards',
            component: ComponentCreator('/tags/standards', '982'),
            exact: true
          },
          {
            path: '/tags/subnet',
            component: ComponentCreator('/tags/subnet', 'c48'),
            exact: true
          },
          {
            path: '/tags/subnet-evm',
            component: ComponentCreator('/tags/subnet-evm', '247'),
            exact: true
          },
          {
            path: '/tags/subnets',
            component: ComponentCreator('/tags/subnets', 'fe5'),
            exact: true
          },
          {
            path: '/tags/testnet',
            component: ComponentCreator('/tags/testnet', 'cf0'),
            exact: true
          },
          {
            path: '/tags/tooling',
            component: ComponentCreator('/tags/tooling', 'b8d'),
            exact: true
          },
          {
            path: '/tags/transaction-format',
            component: ComponentCreator('/tags/transaction-format', '0a9'),
            exact: true
          },
          {
            path: '/tags/virtual-machines',
            component: ComponentCreator('/tags/virtual-machines', 'bd4'),
            exact: true
          },
          {
            path: '/tags/x-chain',
            component: ComponentCreator('/tags/x-chain', '728'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', 'd36'),
            routes: [
              {
                path: '/build/dapp',
                component: ComponentCreator('/build/dapp', '335'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/advanced/add-lux-programmatically',
                component: ComponentCreator('/build/dapp/advanced/add-lux-programmatically', 'ada'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/advanced/adjusting-gas-price-during-high-network-activity',
                component: ComponentCreator('/build/dapp/advanced/adjusting-gas-price-during-high-network-activity', 'f51'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/advanced/integrate-exchange',
                component: ComponentCreator('/build/dapp/advanced/integrate-exchange', '31d'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/advanced/sending-transactions-with-dynamic-fees-using-javascript',
                component: ComponentCreator('/build/dapp/advanced/sending-transactions-with-dynamic-fees-using-javascript', '19f'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/c-chain-evm',
                component: ComponentCreator('/build/dapp/c-chain-evm', '3ac'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/chain-settings',
                component: ComponentCreator('/build/dapp/chain-settings', '6eb'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/explorers',
                component: ComponentCreator('/build/dapp/explorers', '44b'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/launch-dapp',
                component: ComponentCreator('/build/dapp/launch-dapp', 'bca'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/abigen',
                component: ComponentCreator('/build/dapp/smart-contracts/abigen', '978'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/erc-20',
                component: ComponentCreator('/build/dapp/smart-contracts/erc-20', '59b'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/get-funds-faucet',
                component: ComponentCreator('/build/dapp/smart-contracts/get-funds-faucet', 'e4d'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/nfts/deploy-collection',
                component: ComponentCreator('/build/dapp/smart-contracts/nfts/deploy-collection', 'ccd'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/nfts/preparing-nft-files',
                component: ComponentCreator('/build/dapp/smart-contracts/nfts/preparing-nft-files', '819'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/remix-deploy',
                component: ComponentCreator('/build/dapp/smart-contracts/remix-deploy', 'b88'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/toolchains/foundry',
                component: ComponentCreator('/build/dapp/smart-contracts/toolchains/foundry', 'b32'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/toolchains/hardhat',
                component: ComponentCreator('/build/dapp/smart-contracts/toolchains/hardhat', '822'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/toolchains/thirdweb',
                component: ComponentCreator('/build/dapp/smart-contracts/toolchains/thirdweb', '260'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/verification/verify-hardhat',
                component: ComponentCreator('/build/dapp/smart-contracts/verification/verify-hardhat', '103'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/smart-contracts/verification/verify-smart-contracts',
                component: ComponentCreator('/build/dapp/smart-contracts/verification/verify-smart-contracts', '680'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/dapp/testnet-workflow',
                component: ComponentCreator('/build/dapp/testnet-workflow', '80b'),
                exact: true,
                sidebar: "build-dapp"
              },
              {
                path: '/build/subnet',
                component: ComponentCreator('/build/subnet', 'e1e'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/c-chain-vs-subnet',
                component: ComponentCreator('/build/subnet/c-chain-vs-subnet', 'f21'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/deploy/custom-vm-subnet',
                component: ComponentCreator('/build/subnet/deploy/custom-vm-subnet', '615'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/deploy/local-subnet',
                component: ComponentCreator('/build/subnet/deploy/local-subnet', 'b61'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/deploy/mainnet-subnet',
                component: ComponentCreator('/build/subnet/deploy/mainnet-subnet', '03f'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/deploy/multisig-auth',
                component: ComponentCreator('/build/subnet/deploy/multisig-auth', '7d0'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/deploy/on-prod-infra',
                component: ComponentCreator('/build/subnet/deploy/on-prod-infra', 'bf8'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/deploy/testnet-subnet',
                component: ComponentCreator('/build/subnet/deploy/testnet-subnet', 'e5a'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/elastic/elastic-parameters',
                component: ComponentCreator('/build/subnet/elastic/elastic-parameters', '806'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/elastic/transform-to-elastic-subnet',
                component: ComponentCreator('/build/subnet/elastic/transform-to-elastic-subnet', 'b78'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/getting-started',
                component: ComponentCreator('/build/subnet/getting-started', 'cb5'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/hello-subnet',
                component: ComponentCreator('/build/subnet/hello-subnet', 'b6a'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/info/troubleshoot-subnet',
                component: ComponentCreator('/build/subnet/info/troubleshoot-subnet', '0f5'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/info/wagmi',
                component: ComponentCreator('/build/subnet/info/wagmi', 'cc8'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/maintain/delete-subnet',
                component: ComponentCreator('/build/subnet/maintain/delete-subnet', 'e0f'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/maintain/how-to-transfer-funds',
                component: ComponentCreator('/build/subnet/maintain/how-to-transfer-funds', '222'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/maintain/pause-resume-subnet',
                component: ComponentCreator('/build/subnet/maintain/pause-resume-subnet', '87d'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/maintain/view-subnets',
                component: ComponentCreator('/build/subnet/maintain/view-subnets', '205'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/upgrade/considerations-subnet-upgrade',
                component: ComponentCreator('/build/subnet/upgrade/considerations-subnet-upgrade', '283'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/upgrade/customize-a-subnet',
                component: ComponentCreator('/build/subnet/upgrade/customize-a-subnet', 'd5c'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/upgrade/upgrade-precompile',
                component: ComponentCreator('/build/subnet/upgrade/upgrade-precompile', 'b05'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/upgrade/upgrade-subnet-vm',
                component: ComponentCreator('/build/subnet/upgrade/upgrade-subnet-vm', '14b'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/utility/cross-chain-evm-bridge',
                component: ComponentCreator('/build/subnet/utility/cross-chain-evm-bridge', '692'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/utility/deploy-smart-contract-to-subnet',
                component: ComponentCreator('/build/subnet/utility/deploy-smart-contract-to-subnet', '1d5'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/subnet/utility/subnet-faucet',
                component: ComponentCreator('/build/subnet/utility/subnet-faucet', '9ee'),
                exact: true,
                sidebar: "build-subnet"
              },
              {
                path: '/build/vm',
                component: ComponentCreator('/build/vm', '709'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/create/any-lang-vm',
                component: ComponentCreator('/build/vm/create/any-lang-vm', '6a9'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/create/golang-vm-complex',
                component: ComponentCreator('/build/vm/create/golang-vm-complex', '948'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/create/golang-vm-simple',
                component: ComponentCreator('/build/vm/create/golang-vm-simple', '7e2'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/create/rust-vm',
                component: ComponentCreator('/build/vm/create/rust-vm', 'ddd'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/background-and-reqs',
                component: ComponentCreator('/build/vm/evm/background-and-reqs', 'fbb'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/defining-precompile',
                component: ComponentCreator('/build/vm/evm/defining-precompile', '8a0'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/defining-tests',
                component: ComponentCreator('/build/vm/evm/defining-tests', 'bb5'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/deploying-precompile',
                component: ComponentCreator('/build/vm/evm/deploying-precompile', '8d1'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/executing-tests',
                component: ComponentCreator('/build/vm/evm/executing-tests', '9e0'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/generate-precompile',
                component: ComponentCreator('/build/vm/evm/generate-precompile', 'd63'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/evm/intro',
                component: ComponentCreator('/build/vm/evm/intro', 'e81'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/build/vm/intro',
                component: ComponentCreator('/build/vm/intro', '520'),
                exact: true,
                sidebar: "build-vm"
              },
              {
                path: '/deprecated/deploy-a-gnosis-safe-on-your-evm',
                component: ComponentCreator('/deprecated/deploy-a-gnosis-safe-on-your-evm', '6d1'),
                exact: true
              },
              {
                path: '/deprecated/dfk-subnet-node',
                component: ComponentCreator('/deprecated/dfk-subnet-node', '137'),
                exact: true
              },
              {
                path: '/deprecated/truffle',
                component: ComponentCreator('/deprecated/truffle', '21a'),
                exact: true
              },
              {
                path: '/disclaimer',
                component: ComponentCreator('/disclaimer', '76c'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '2fc'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/awm',
                component: ComponentCreator('/learn/lux/awm', 'c5c'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/lux-consensus',
                component: ComponentCreator('/learn/lux/lux-consensus', '2b2'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/lux-platform',
                component: ComponentCreator('/learn/lux/lux-platform', 'b07'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/mainnet',
                component: ComponentCreator('/learn/lux/mainnet', '2e7'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/subnets-overview',
                component: ComponentCreator('/learn/lux/subnets-overview', '3cc'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/testnet',
                component: ComponentCreator('/learn/lux/testnet', '9a0'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/learn/lux/virtual-machines',
                component: ComponentCreator('/learn/lux/virtual-machines', '4e3'),
                exact: true,
                sidebar: "learn"
              },
              {
                path: '/nodes',
                component: ComponentCreator('/nodes', 'ee9'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/configure/chain-config-flags',
                component: ComponentCreator('/nodes/configure/chain-config-flags', 'cd7'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/configure/luxd-config-flags',
                component: ComponentCreator('/nodes/configure/luxd-config-flags', '3d3'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/configure/subnet-configs',
                component: ComponentCreator('/nodes/configure/subnet-configs', 'fac'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/background-service-config',
                component: ComponentCreator('/nodes/maintain/background-service-config', '4ad'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/node-backup-and-restore',
                component: ComponentCreator('/nodes/maintain/node-backup-and-restore', 'a02'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/node-bootstrap',
                component: ComponentCreator('/nodes/maintain/node-bootstrap', 'ac6'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/notify',
                component: ComponentCreator('/nodes/maintain/notify', 'dc4'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/run-offline-pruning',
                component: ComponentCreator('/nodes/maintain/run-offline-pruning', 'd47'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/setting-up-node-monitoring',
                component: ComponentCreator('/nodes/maintain/setting-up-node-monitoring', 'c9e'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/maintain/upgrade-your-luxd-node',
                component: ComponentCreator('/nodes/maintain/upgrade-your-luxd-node', '48d'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/FAQ',
                component: ComponentCreator('/nodes/run/FAQ', '803'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/node-manually',
                component: ComponentCreator('/nodes/run/node-manually', 'f85'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/subnet-node',
                component: ComponentCreator('/nodes/run/subnet-node', '04f'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/third-party/aws-marketplace-one-click',
                component: ComponentCreator('/nodes/run/third-party/aws-marketplace-one-click', '4a3'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/third-party/aws-node',
                component: ComponentCreator('/nodes/run/third-party/aws-node', '872'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/third-party/google-cloud-node',
                component: ComponentCreator('/nodes/run/third-party/google-cloud-node', '72e'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/third-party/microsoft-azure-node',
                component: ComponentCreator('/nodes/run/third-party/microsoft-azure-node', '49f'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/with-installer/advance-config-maintenance',
                component: ComponentCreator('/nodes/run/with-installer/advance-config-maintenance', 'e6b'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/with-installer/installing-luxd',
                component: ComponentCreator('/nodes/run/with-installer/installing-luxd', '184'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/with-installer/managing-luxd',
                component: ComponentCreator('/nodes/run/with-installer/managing-luxd', 'f06'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/run/with-installer/preparing-your-environment',
                component: ComponentCreator('/nodes/run/with-installer/preparing-your-environment', 'cd6'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/system-requirements',
                component: ComponentCreator('/nodes/system-requirements', 'ff2'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/validate/add-a-validator',
                component: ComponentCreator('/nodes/validate/add-a-validator', 'eb3'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/validate/how-to-stake',
                component: ComponentCreator('/nodes/validate/how-to-stake', 'e1a'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/validate/validate-or-delegate',
                component: ComponentCreator('/nodes/validate/validate-or-delegate', '9d1'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/nodes/validate/what-is-staking',
                component: ComponentCreator('/nodes/validate/what-is-staking', 'da4'),
                exact: true,
                sidebar: "nodes"
              },
              {
                path: '/reference',
                component: ComponentCreator('/reference', '362'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/admin-api',
                component: ComponentCreator('/reference/luxd/admin-api', '461'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/auth-api',
                component: ComponentCreator('/reference/luxd/auth-api', 'dad'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/c-chain/api',
                component: ComponentCreator('/reference/luxd/c-chain/api', 'b17'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/c-chain/txn-format',
                component: ComponentCreator('/reference/luxd/c-chain/txn-format', '275'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/health-api',
                component: ComponentCreator('/reference/luxd/health-api', '82b'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/index-api',
                component: ComponentCreator('/reference/luxd/index-api', '2b8'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/info-api',
                component: ComponentCreator('/reference/luxd/info-api', '751'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/ipc-api',
                component: ComponentCreator('/reference/luxd/ipc-api', '313'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/keystore-api',
                component: ComponentCreator('/reference/luxd/keystore-api', '9d9'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/metrics-api',
                component: ComponentCreator('/reference/luxd/metrics-api', 'ae2'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/p-chain/api',
                component: ComponentCreator('/reference/luxd/p-chain/api', '14e'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/p-chain/txn-format',
                component: ComponentCreator('/reference/luxd/p-chain/txn-format', 'c6a'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/x-chain/api',
                component: ComponentCreator('/reference/luxd/x-chain/api', 'e88'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/luxd/x-chain/txn-format',
                component: ComponentCreator('/reference/luxd/x-chain/txn-format', '1ad'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/cryptographic-primitives',
                component: ComponentCreator('/reference/standards/cryptographic-primitives', 'cd3'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/guides/banff-changes',
                component: ComponentCreator('/reference/standards/guides/banff-changes', '548'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/guides/blockchain-flow',
                component: ComponentCreator('/reference/standards/guides/blockchain-flow', 'b7a'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/guides/issuing-api-calls',
                component: ComponentCreator('/reference/standards/guides/issuing-api-calls', '4ae'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/guides/txn-fees',
                component: ComponentCreator('/reference/standards/guides/txn-fees', 'd20'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/guides/x-chain-migration',
                component: ComponentCreator('/reference/standards/guides/x-chain-migration', 'b3a'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/network-protocol',
                component: ComponentCreator('/reference/standards/network-protocol', '150'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/standards/serialization-primitives',
                component: ComponentCreator('/reference/standards/serialization-primitives', '8b0'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/reference/subnet-evm/api',
                component: ComponentCreator('/reference/subnet-evm/api', '25e'),
                exact: true,
                sidebar: "reference"
              },
              {
                path: '/tooling',
                component: ComponentCreator('/tooling', '3a1'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli',
                component: ComponentCreator('/tooling/cli', '410'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/create-a-validator-aws',
                component: ComponentCreator('/tooling/cli-guides/create-a-validator-aws', '6e2'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/create-a-validator-gcp',
                component: ComponentCreator('/tooling/cli-guides/create-a-validator-gcp', '2dc'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/import-subnet',
                component: ComponentCreator('/tooling/cli-guides/import-subnet', '987'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/install-cli',
                component: ComponentCreator('/tooling/cli-guides/install-cli', '3b9'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/node-ssh',
                component: ComponentCreator('/tooling/cli-guides/node-ssh', '183'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/run-with-docker',
                component: ComponentCreator('/tooling/cli-guides/run-with-docker', '8d7'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/setup-a-devnet',
                component: ComponentCreator('/tooling/cli-guides/setup-a-devnet', 'b48'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/stop-node',
                component: ComponentCreator('/tooling/cli-guides/stop-node', '764'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/upload-a-custom-vm-to-cloud',
                component: ComponentCreator('/tooling/cli-guides/upload-a-custom-vm-to-cloud', '153'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/validate-primary-network',
                component: ComponentCreator('/tooling/cli-guides/validate-primary-network', '7a3'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/cli-guides/validate-subnets',
                component: ComponentCreator('/tooling/cli-guides/validate-subnets', '85d'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/glacier',
                component: ComponentCreator('/tooling/glacier', '438'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/indexers',
                component: ComponentCreator('/tooling/indexers', 'a93'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/lux-plugin-manager',
                component: ComponentCreator('/tooling/lux-plugin-manager', '22e'),
                exact: true
              },
              {
                path: '/tooling/luxd-installer',
                component: ComponentCreator('/tooling/luxd-installer', '476'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxd-postman-collection/data-visualization',
                component: ComponentCreator('/tooling/luxd-postman-collection/data-visualization', '313'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxd-postman-collection/making-api-calls',
                component: ComponentCreator('/tooling/luxd-postman-collection/making-api-calls', 'fe4'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxd-postman-collection/setup',
                component: ComponentCreator('/tooling/luxd-postman-collection/setup', 'b4f'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxd-postman-collection/variables',
                component: ComponentCreator('/tooling/luxd-postman-collection/variables', '4d3'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-api',
                component: ComponentCreator('/tooling/luxjs-api', '99d'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/create-an-asset-on-the-x-chain',
                component: ComponentCreator('/tooling/luxjs-guides/create-an-asset-on-the-x-chain', '95a'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/cross-chain-transfers',
                component: ComponentCreator('/tooling/luxjs-guides/cross-chain-transfers', '5ec'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/generate-a-txid-using-luxjs',
                component: ComponentCreator('/tooling/luxjs-guides/generate-a-txid-using-luxjs', 'd35'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/generate-key-pair',
                component: ComponentCreator('/tooling/luxjs-guides/generate-key-pair', '161'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/manage-x-chain-keys',
                component: ComponentCreator('/tooling/luxjs-guides/manage-x-chain-keys', 'c8e'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/multisig-utxos-with-luxjs',
                component: ComponentCreator('/tooling/luxjs-guides/multisig-utxos-with-luxjs', '026'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-guides/send-an-asset-on-the-x-chain',
                component: ComponentCreator('/tooling/luxjs-guides/send-an-asset-on-the-x-chain', '38e'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/luxjs-overview',
                component: ComponentCreator('/tooling/luxjs-overview', 'c52'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/metrics',
                component: ComponentCreator('/tooling/metrics', '494'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/netrunner',
                component: ComponentCreator('/tooling/netrunner', 'daa'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/ops',
                component: ComponentCreator('/tooling/ops', 'c27'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/plugin-manager',
                component: ComponentCreator('/tooling/plugin-manager', '479'),
                exact: true,
                sidebar: "tooling"
              },
              {
                path: '/tooling/rpc-providers',
                component: ComponentCreator('/tooling/rpc-providers', '237'),
                exact: true,
                sidebar: "tooling"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
