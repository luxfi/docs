import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          5 Chains · GraphQL · WebSocket · Real-time
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Lux Explorer
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          Full-featured blockchain explorer for the Lux Network. Blockscout-powered backend,
          modern Next.js frontend, real-time indexing across C-Chain and all subnets.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors">
            Get Started
          </Link>
          <Link href="https://explore.lux.network" className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors">
            Live Explorer
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'C-Chain', url: 'explore.lux.network', desc: 'Main EVM chain (ID: 96369)' },
            { name: 'Zoo', url: 'explore-zoo.lux.network', desc: 'Zoo subnet (ID: 200200)' },
            { name: 'Hanzo', url: 'explore-hanzo.lux.network', desc: 'Hanzo subnet (ID: 36963)' },
            { name: 'SPC', url: 'explore-spc.lux.network', desc: 'SPC subnet (ID: 36911)' },
            { name: 'Pars', url: 'explore-pars.lux.network', desc: 'Pars subnet (ID: 494949)' },
            { name: 'Indexer', url: 'api-indexer.lux.network', desc: 'High-performance Go indexer' },
          ].map((chain) => (
            <div key={chain.name} className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
              <h3 className="font-semibold mb-1">{chain.name}</h3>
              <p className="text-xs font-mono text-fd-muted-foreground mb-1">{chain.url}</p>
              <p className="text-sm text-fd-muted-foreground">{chain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
