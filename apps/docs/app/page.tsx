import Link from 'next/link';

const sections = [
  {
    title: 'Core',
    href: '/docs/core',
    description: 'Architecture, consensus, post-quantum cryptography, and node operation',
    color: 'from-emerald-400 to-green-400',
  },
  {
    title: 'Chains & VMs',
    href: '/docs/chains',
    description: '15+ virtual machines: EVM, DEX, Threshold, Quantum, AI, Bridge, ZK, and more',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Cryptography',
    href: '/docs/crypto',
    description: 'HSM, KMS, MPC threshold signing, FHE/TFHE, and lattice-based crypto',
    color: 'from-violet-400 to-purple-400',
  },
  {
    title: 'Developer Tools',
    href: '/docs/tools',
    description: 'CLI, multi-language SDKs (Go/TS/Python), and Netrunner testing',
    color: 'from-indigo-400 to-blue-400',
  },
  {
    title: 'Applications',
    href: '/docs/apps',
    description: 'Wallet, Bridge, Explorer, Indexer, and Lux Cloud (Bootnode)',
    color: 'from-orange-400 to-amber-400',
  },
  {
    title: 'Governance',
    href: '/docs/governance',
    description: 'DAO, committees, bonding, and 348 Lux Proposals (LPs)',
    color: 'from-pink-400 to-rose-400',
  },
];

const quickLinks = [
  { title: 'Lux Network', href: 'https://lux.network', desc: 'Main website' },
  { title: 'Explorer', href: 'https://explore.lux.network', desc: 'Blockchain explorer' },
  { title: 'Wallet', href: 'https://wallet.lux.network', desc: 'Manage LUX tokens' },
  { title: 'Bridge', href: 'https://bridge.lux.network', desc: 'Cross-chain transfers' },
  { title: 'LPs', href: 'https://lps.lux.network', desc: 'Lux Proposals' },
  { title: 'GitHub', href: 'https://github.com/luxfi', desc: 'Source code' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-4 py-16">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Lux Network
          </h1>
          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
            Post-quantum secure, multi-consensus blockchain infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-md bg-fd-primary text-fd-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-fd-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="https://lps.lux.network"
              className="inline-flex items-center justify-center rounded-md border border-fd-border bg-fd-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-fd-accent"
            >
              Lux Proposals
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group p-6 rounded-xl border border-fd-border bg-fd-card hover:border-fd-ring transition-all"
            >
              <h2 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                {s.title}
              </h2>
              <p className="text-sm text-fd-muted-foreground">{s.description}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              className="p-4 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent transition-colors text-center"
            >
              <div className="font-semibold text-sm mb-1">{l.title}</div>
              <div className="text-xs text-fd-muted-foreground">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
