'use client';

import type { ComponentProps, ReactNode } from 'react';
import Link from '@hanzo/docs/core/link';
import {
  Button,
  Grid,
  Paragraph,
  SizableText,
  Span,
  XStack,
  YStack,
} from '@hanzo/ui';
import { Terminal } from '@/components/icons';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Product {
  name: string;
  desc: string;
  href: string;
}

interface Section {
  title: string;
  subtitle: string;
  items: Product[];
}

const sections: Section[] = [
  {
    title: 'Trading',
    subtitle: 'Exchange infrastructure for crypto, equities, and FX.',
    items: [
      { name: 'Exchange',     desc: 'DEX frontend with V2, V3, and precompile swaps',              href: '/exchange' },
      { name: 'DEX (LX)',     desc: '434M ops/sec on-chain CLOB matching engine',                  href: '/dex' },
      { name: 'CEX (ATS)',    desc: 'Institutional exchange with FINRA & MiFID II compliance',     href: '/cex' },
      { name: 'Broker',       desc: '16-venue smart order routing across crypto, equities, and FX', href: '/broker' },
      { name: 'Compliance',   desc: 'KYC/AML, sanctions screening, and regulatory reporting',      href: '/compliance' },
      { name: 'Exchange SDK', desc: 'TypeScript matching engine with AVL-tree order book',          href: '/exchange-sdk' },
    ],
  },
  {
    title: 'DeFi',
    subtitle: 'Smart contracts, liquid staking, and yield protocols.',
    items: [
      { name: 'Standard',  desc: 'Production Solidity contracts — DeFi, governance, identity, privacy', href: '/standard' },
      { name: 'Liquid',     desc: 'Yield-bearing bridge tokens and the xLUX master vault',              href: '/liquid' },
      { name: 'Staking',    desc: 'Validator staking, delegation, and liquid staking',                   href: '/staking' },
    ],
  },
  {
    title: 'Cryptography',
    subtitle: 'Post-quantum primitives, threshold signing, and homomorphic encryption.',
    items: [
      { name: 'Crypto',    desc: 'Post-quantum signatures, BLS, and key encapsulation',              href: '/crypto' },
      { name: 'HSM',       desc: 'AWS, GCP, Azure, Zymbit, and ML-DSA signing',                      href: '/hsm' },
      { name: 'KMS',       desc: 'Secrets, PKI, HSM, and Kubernetes operator',                        href: '/kms' },
      { name: 'MPC',       desc: 'CGGMP21, FROST, BLS, and Corona threshold signing',              href: '/mpc' },
      { name: 'FHE',       desc: 'TFHE and CKKS homomorphic encryption with GPU coprocessor',        href: '/fhe' },
      { name: 'Lattice',   desc: 'Lattice-based cryptography library for post-quantum security',     href: '/lattice' },
      { name: 'Threshold', desc: 'Unified interfaces and registry for threshold signature schemes',  href: '/threshold' },
      { name: 'Corona',  desc: 'Post-quantum threshold signatures from Module-LWE',                href: '/corona' },
    ],
  },
  {
    title: 'Cross-Chain',
    subtitle: 'Native messaging, token teleportation, and MPC bridges.',
    items: [
      { name: 'Warp',     desc: 'Native cross-chain messaging via BLS aggregate signatures', href: '/warp' },
      { name: 'Teleport', desc: 'Cross-chain token transfers using burn-mint with MPC oracles', href: '/teleport' },
      { name: 'Bridge',   desc: 'MPC-secured cross-chain asset transfers',                    href: '/bridge' },
    ],
  },
  {
    title: 'Infrastructure',
    subtitle: 'Kubernetes operators, wallets, explorers, and data services.',
    items: [
      { name: 'Operator',    desc: 'Kubernetes operator for Lux blockchain infrastructure',              href: '/operator' },
      { name: 'Wallet',      desc: 'HD wallet with multi-chain, Ledger, and multi-sig support',          href: '/wallet' },
      { name: 'Safe',        desc: 'Multi-signature wallet for the Lux Network',                         href: '/safe' },
      { name: 'Explorer',    desc: 'Single-binary omni-chain block explorer for all Lux chains',        href: '/explorer' },
      { name: 'Indexer',     desc: 'High-performance Go blockchain indexer',                              href: '/indexer' },
      { name: 'Bootnode',    desc: 'Lux Cloud — RPC, WebSocket, Token, and NFT APIs',                    href: '/bootnode' },
      { name: 'Oracle',      desc: 'Optimistic oracle for assertions, disputes, and truth verification', href: '/oracle' },
      { name: 'Precompile',  desc: '39+ native EVM precompiles for post-quantum crypto, DeFi, and ZK',  href: '/precompile' },
    ],
  },
  {
    title: 'Developer Tools',
    subtitle: 'CLIs, SDKs, databases, and GPU acceleration.',
    items: [
      { name: 'CLI',       desc: 'Network, subnet, and wallet commands',                  href: '/cli' },
      { name: 'SDK',       desc: 'Go, TypeScript, and Python SDKs',                        href: '/sdk' },
      { name: 'Netrunner', desc: 'Network simulation and benchmarks',                      href: '/netrunner' },
      { name: 'Accel',     desc: 'GPU acceleration — CUDA, Metal, WebGPU',                 href: '/accel' },
      { name: 'ZAP',       desc: 'Zero-copy Application Protocol for high-perf messaging', href: '/zap' },
      { name: 'ZapDB',     desc: 'High-performance embedded key-value database',           href: '/zapdb' },
      { name: 'GPU',       desc: 'Go bindings for cross-platform GPU acceleration',        href: '/gpu' },
    ],
  },
  {
    title: 'Identity & Auth',
    subtitle: 'Authentication, authorization, and hardware wallet support.',
    items: [
      { name: 'IAM',    desc: 'Identity and access management with OAuth2, OIDC, SAML, and RBAC', href: '/iam' },
      { name: 'Ledger', desc: 'Lux app for Ledger hardware wallets with P/X/C chain signing',      href: '/ledger' },
    ],
  },
  {
    title: 'More',
    subtitle: 'Advertising, testnet utilities, and emerging protocols.',
    items: [
      { name: 'ADX',    desc: 'Decentralized CTV ad exchange with TEE auctions and ZK privacy', href: '/adx' },
      { name: 'Faucet', desc: 'Get test LUX tokens for development on Lux testnets',            href: '/faucet' },
    ],
  },
  {
    title: 'Strategy',
    subtitle: 'IP, licensing, and the open-core enterprise edition.',
    items: [
      { name: 'Licensing', desc: 'Three-tier IP strategy — BSD-3 commodity, Eco patent-protected, private moat', href: '/licensing' },
      { name: 'Open Core', desc: 'How Lux ships proprietary enterprise bits on top of an open-source core',      href: '/open-core' },
    ],
  },
];

const chains = [
  { name: 'C-Chain', spec: 'EVM · 96369' },
  { name: 'P-Chain', spec: 'Platform' },
  { name: 'X-Chain', spec: 'Exchange' },
  { name: 'D-Chain', spec: 'DEX VM' },
  { name: 'T-Chain', spec: 'Threshold' },
  { name: 'Q-Chain', spec: 'Quantum' },
  { name: 'A-Chain', spec: 'AI VM' },
  { name: 'Z-Chain', spec: 'ZK VM' },
];

const commands: [string, string][] = [
  ['lux network start', 'Start a local 5-node network'],
  ['lux subnet create', 'Create a new subnet with custom VM'],
  ['lux subnet deploy', 'Deploy subnet to local/testnet/mainnet'],
  ['lux key create', 'Generate new key pair'],
  ['lux wallet transfer', 'Transfer assets between chains'],
  ['lux node validate', 'Start validating on a subnet'],
];

const governance = [
  { name: 'DAO', desc: 'Token-based governance, committees, treasury management', href: '/dao' },
  { name: 'Vote', desc: 'Proposals, delegation, and on-chain execution', href: '/vote' },
  { name: 'Lux Proposals', desc: '348 standards and improvement proposals', href: 'https://lps.lux.network' },
];

/* ------------------------------------------------------------------ */
/*  Pieces                                                             */
/* ------------------------------------------------------------------ */

/** A bordered surface that lifts under the cursor when it leads somewhere. */
function Panel({ href, ...props }: { href?: string } & ComponentProps<typeof YStack>) {
  return (
    <YStack
      borderWidth={1}
      borderColor="$borderColor"
      bg="$color2"
      rounded="$6"
      {...(href
        ? {
            render: <Link href={href} style={{ textDecoration: 'none' }} />,
            cursor: 'pointer',
            hoverStyle: { bg: '$color3', borderColor: '$color4' },
          }
        : null)}
      {...props}
    />
  );
}

/** A section title with the line under it that says what the section is. */
function Title({ children, sub, badge }: { children: ReactNode; sub: string; badge?: string }) {
  return (
    <YStack mb="$5" gap="$1">
      <XStack items="center" gap="$3">
        <SizableText render="h2" size="$8" fontWeight="600" color="$color12">
          {children}
        </SizableText>
        {badge ? (
          <SizableText
            size="$1"
            color="$color11"
            borderWidth={1}
            borderColor="$borderColor"
            bg="$color2"
            rounded="$10"
            px="$2.5"
            py="$1"
          >
            {badge}
          </SizableText>
        ) : null}
      </XStack>
      <Paragraph size="$3" color="$color11">
        {sub}
      </Paragraph>
    </YStack>
  );
}

function Action({
  tone = 'primary',
  href,
  children,
}: {
  tone?: 'primary' | 'outline';
  href: string;
  children: ReactNode;
}) {
  return (
    <Button
      variant={tone === 'primary' ? 'default' : 'outline'}
      rounded="$4"
      px="$5"
      py="$3"
      render={<Link href={href} style={{ textDecoration: 'none' }} />}
    >
      {children}
    </Button>
  );
}

/** The faint wash behind the hero and the closing call. */
function Wash({ height }: { height: number }) {
  return (
    <YStack
      position="absolute"
      t={0}
      l={0}
      r={0}
      height={height}
      pointerEvents="none"
      style={{
        backgroundImage: `radial-gradient(${height * 2}px ${height}px ellipse at center top, var(--glass), transparent 70%)`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <YStack render="main" pb="$5" $md={{ pb: '$8' }}>
      {/* Hero */}
      <YStack
        position="relative"
        items="center"
        mx="auto"
        width="100%"
        maxW={1400}
        px="$5"
        pt="$12"
        pb="$10"
        $md={{ pt: '$15', pb: '$12' }}
      >
        <Wash height={300} />
        <SizableText
          size="$3"
          color="$color11"
          borderWidth={1}
          borderColor="$borderColor"
          bg="$color2"
          rounded="$10"
          px="$4"
          py="$1.5"
          mb="$5"
        >
          16 Chains · 39 Products · Post-Quantum
        </SizableText>
        <SizableText
          render="h1"
          size="$12"
          fontWeight="600"
          mb="$5"
          $md={{ fontSize: '$14', lineHeight: '$14' }}
          style={{ letterSpacing: '-0.02em' }}
        >
          Lux Network
        </SizableText>
        <Paragraph
          size="$4"
          color="$color11"
          text="center"
          maxW={640}
          mb="$6"
          $md={{ fontSize: '$6', lineHeight: '$6' }}
        >
          Post-quantum secure, multi-consensus blockchain infrastructure for institutional finance
          and decentralized applications.
        </Paragraph>

        <XStack bg="var(--primary)" rounded="$6" px="$5" py="$4" mb="$6" gap="$2">
          <SizableText size="$3" fontFamily="$mono" color="var(--primary-foreground)" opacity={0.5}>
            $
          </SizableText>
          <SizableText size="$3" fontFamily="$mono" color="var(--primary-foreground)">
            curl -sSL https://cli.lux.network/install | sh
          </SizableText>
        </XStack>

        <XStack flexWrap="wrap" gap="$3" justify="center">
          <Action href="/architecture">Get Started</Action>
          <Action tone="outline" href="/api-reference">
            API Reference
          </Action>
          <Action tone="outline" href="https://lps.lux.network">
            Lux Proposals
          </Action>
        </XStack>
      </YStack>

      <YStack mx="auto" width="100%" maxW={1400} px="$5" gap="$11" $md={{ px: '$8' }}>
        {/* Products */}
        {sections.map((section) => (
          <YStack key={section.title} render="section">
            <Title sub={section.subtitle}>{section.title}</Title>
            <Grid min={200} max={4} gap="$3">
              {section.items.map((item) => (
                <Panel key={item.name} href={item.href} p="$4" minH={120} justify="space-between">
                  <YStack gap="$1">
                    <SizableText size="$3" fontWeight="600" color="$color12">
                      {item.name}
                    </SizableText>
                    <SizableText size="$2" color="$color11">
                      {item.desc}
                    </SizableText>
                  </YStack>
                  <SizableText size="$1" color="$color10" mt="$3">
                    Docs →
                  </SizableText>
                </Panel>
              ))}
            </Grid>
          </YStack>
        ))}

        {/* The CLI */}
        <YStack render="section">
          <Panel p="$6">
            <XStack items="center" gap="$3" mb="$2">
              <YStack bg="$color3" rounded="$6" p="$2.5">
                <Terminal size={20} />
              </YStack>
              <YStack>
                <SizableText size="$6" fontWeight="600" color="$color12">
                  The <Span fontFamily="$mono" fontSize="$3">lux</Span> CLI
                </SizableText>
                <SizableText size="$1" color="$color11">
                  One tool for everything
                </SizableText>
              </YStack>
            </XStack>
            <Grid min={240} max={3} gap="$2" style={{ marginTop: 24 }}>
              {commands.map(([cmd, desc]) => (
                <Panel key={cmd} p="$3">
                  <SizableText size="$2" fontFamily="$mono" fontWeight="500" color="$color12">
                    {cmd}
                  </SizableText>
                  <SizableText size="$1" color="$color11">
                    {desc}
                  </SizableText>
                </Panel>
              ))}
            </Grid>
          </Panel>
        </YStack>

        {/* Chains */}
        <YStack render="section">
          <Title sub="Multi-chain architecture with specialized virtual machines." badge="16 VMs">
            Chains
          </Title>
          <Grid min={120} max={8} gap="$2">
            {chains.map((c) => (
              <Panel key={c.name} href="/chains" p="$3" items="center">
                <SizableText size="$2" fontFamily="$mono" fontWeight="500" color="$color12">
                  {c.name}
                </SizableText>
                <SizableText size="$1" color="$color11">
                  {c.spec}
                </SizableText>
              </Panel>
            ))}
          </Grid>
        </YStack>

        {/* Governance */}
        <YStack render="section">
          <Title sub="DAO governance and Lux Proposals.">Governance</Title>
          <Grid min={260} max={3} gap="$4">
            {governance.map((g) => (
              <Panel key={g.name} href={g.href} p="$5" gap="$1">
                <SizableText size="$4" fontWeight="600" color="$color12">
                  {g.name}
                </SizableText>
                <SizableText size="$2" color="$color11">
                  {g.desc}
                </SizableText>
              </Panel>
            ))}
          </Grid>
        </YStack>

        {/* Start building */}
        <YStack render="section" position="relative" items="center" py="$10">
          <Wash height={200} />
          <SizableText render="h2" size="$10" fontWeight="600" mb="$3">
            Start building
          </SizableText>
          <Paragraph size="$3" color="$color11" mb="$5">
            Open source. Post-quantum secure.
          </Paragraph>
          <XStack flexWrap="wrap" gap="$3" justify="center">
            <Action href="/architecture">Browse Documentation</Action>
            <Action tone="outline" href="https://github.com/luxfi">
              View on GitHub
            </Action>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
