import Link from 'next/link';

const ecosystem = [
  { name: 'Exchange', desc: 'DEX frontend with V2, V3, and precompile swaps', href: '/docs/exchange', tag: 'Trading' },
  { name: 'DEX (LX)', desc: '434M ops/sec on-chain CLOB matching engine', href: '/docs/dex', tag: 'Trading' },
  { name: 'CEX (ATS)', desc: 'Institutional exchange with FINRA & MiFID II compliance', href: '/docs/cex', tag: 'Trading' },
  { name: 'Broker', desc: '16-venue smart order routing across crypto, equities, and FX', href: '/docs/broker', tag: 'Trading' },
  { name: 'HSM', desc: 'AWS, GCP, Azure, Zymbit, and ML-DSA signing', href: '/docs/hsm', tag: 'Crypto' },
  { name: 'KMS', desc: 'Secrets, PKI, HSM, and Kubernetes operator', href: '/docs/kms', tag: 'Crypto' },
  { name: 'MPC', desc: 'CGGMP21, FROST, BLS, and Ringtail threshold signing', href: '/docs/mpc', tag: 'Crypto' },
  { name: 'FHE', desc: 'TFHE and CKKS homomorphic encryption with GPU coprocessor', href: '/docs/fhe', tag: 'Crypto' },
  { name: 'Wallet', desc: 'HD wallet with multi-chain, Ledger, and multi-sig support', href: '/docs/wallet', tag: 'Apps' },
  { name: 'Bridge', desc: 'MPC-secured cross-chain asset transfers', href: '/docs/bridge', tag: 'Apps' },
  { name: 'Explorer', desc: 'Blockscout blockchain explorer for all Lux chains', href: '/docs/explorer', tag: 'Apps' },
  { name: 'Bootnode', desc: 'Lux Cloud — RPC, WebSocket, Token, and NFT APIs', href: '/docs/bootnode', tag: 'Cloud' },
];

const devTools = [
  { name: 'CLI', desc: 'Network, subnet, and wallet commands', href: '/docs/cli' },
  { name: 'SDK', desc: 'Go, TypeScript, and Python SDKs', href: '/docs/sdk' },
  { name: 'Netrunner', desc: 'Network simulation and benchmarks', href: '/docs/netrunner' },
  { name: 'Accel', desc: 'GPU acceleration — CUDA, Metal, WebGPU', href: '/docs/accel' },
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

export default function HomePage() {
  return (
    <main className="pb-6 md:pb-12">
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center mx-auto w-full max-w-[1400px] px-6 pt-24 md:pt-36 pb-16 md:pb-24">
        <div
          className="absolute inset-x-0 top-0 h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(600px 300px ellipse at center top, rgba(255,255,255,0.04), transparent 70%)',
          }}
        />
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-sm text-[#737373] mb-6">
          16 Chains · 26 Products · Post-Quantum
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Lux Network
        </h1>
        <p className="text-[#737373] md:text-xl max-w-xl mb-8">
          Post-quantum secure, multi-consensus blockchain infrastructure for institutional finance and decentralized applications.
        </p>

        <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] px-6 py-4 mb-8 font-mono text-sm">
          <span className="text-[#525252]">$</span>{' '}
          <span className="text-[#fafafa]">curl -sSL https://cli.lux.network/install | sh</span>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/docs"
            className="rounded-lg bg-[#fafafa] text-[#0a0a0a] px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/api-reference"
            className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors"
          >
            API Reference
          </Link>
          <Link
            href="https://lps.lux.network"
            className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors"
          >
            Lux Proposals
          </Link>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 space-y-24">
        {/* Ecosystem */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Ecosystem</h2>
          <p className="text-[#737373] text-sm mb-8">Trading, cryptography, applications, and cloud infrastructure.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ecosystem.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 min-h-[160px] hover:border-white/20 hover:bg-white/[0.05] transition-all"
              >
                <div>
                  <div className="text-sm font-semibold text-[#fafafa] mb-1">{item.name}</div>
                  <div className="text-xs text-[#525252] group-hover:text-[#737373] transition-colors leading-relaxed">
                    {item.desc}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#333] font-medium">{item.tag}</span>
                  <span className="text-xs text-[#525252] group-hover:text-[#737373]">View docs →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Developer Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Developer Tools</h2>
          <p className="text-[#737373] text-sm mb-8">CLIs, SDKs, and performance tools.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {devTools.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 min-h-[140px] hover:border-white/20 hover:bg-white/[0.05] transition-all"
              >
                <div>
                  <div className="text-sm font-semibold text-[#fafafa] mb-1">{item.name}</div>
                  <div className="text-xs text-[#525252] group-hover:text-[#737373] transition-colors">{item.desc}</div>
                </div>
                <span className="text-xs text-[#525252] group-hover:text-[#737373] mt-4">View docs →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CLI Feature */}
        <section>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-xl bg-white/[0.06] p-2.5">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold">The <code className="font-mono text-sm">lux</code> CLI</div>
                <div className="text-xs text-[#737373]">One tool for everything</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
              {[
                ['lux network start', 'Start a local 5-node network'],
                ['lux subnet create', 'Create a new subnet with custom VM'],
                ['lux subnet deploy', 'Deploy subnet to local/testnet/mainnet'],
                ['lux key create', 'Generate new key pair'],
                ['lux wallet transfer', 'Transfer assets between chains'],
                ['lux node validate', 'Start validating on a subnet'],
              ].map(([cmd, desc]) => (
                <div key={cmd} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="font-mono text-xs font-medium text-[#fafafa]">{cmd}</div>
                  <div className="text-[11px] text-[#525252] mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chains */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl font-bold">Chains</div>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-0.5 text-xs text-[#737373]">
              16 VMs
            </span>
          </div>
          <p className="text-[#737373] text-sm mb-6">Multi-chain architecture with specialized virtual machines.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {chains.map((c) => (
              <Link
                key={c.name}
                href="/chains"
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center hover:border-white/20 hover:bg-white/[0.05] transition-all"
              >
                <div className="font-mono text-xs font-medium text-[#fafafa]">{c.name}</div>
                <div className="text-[10px] text-[#525252] mt-0.5">{c.spec}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Governance */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Governance</h2>
          <p className="text-[#737373] text-sm mb-6">DAO governance and Lux Proposals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/dao"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all"
            >
              <div className="font-semibold text-[#fafafa] mb-1">DAO</div>
              <div className="text-xs text-[#525252]">Token-based governance, committees, treasury management</div>
            </Link>
            <Link
              href="/vote"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all"
            >
              <div className="font-semibold text-[#fafafa] mb-1">Vote</div>
              <div className="text-xs text-[#525252]">Proposals, delegation, and on-chain execution</div>
            </Link>
            <Link
              href="https://lps.lux.network"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all"
            >
              <div className="font-semibold text-[#fafafa] mb-1">Lux Proposals</div>
              <div className="text-xs text-[#525252]">348 standards and improvement proposals</div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="relative flex flex-col items-center text-center py-16">
          <div
            className="absolute inset-x-0 top-0 h-[200px] pointer-events-none"
            style={{
              background: 'radial-gradient(400px 200px ellipse at center, rgba(255,255,255,0.04), transparent 70%)',
            }}
          />
          <h2 className="text-3xl font-bold mb-3">Start building</h2>
          <p className="text-[#737373] text-sm mb-6">Open source. Post-quantum secure.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/docs"
              className="rounded-lg bg-[#fafafa] text-[#0a0a0a] px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
            >
              Browse Documentation
            </Link>
            <Link
              href="https://github.com/luxfi"
              className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
