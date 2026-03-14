import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          9 Chain Types · 100+ Chains · Blockscout Compatible
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          Lux Indexer
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          High-performance Go blockchain indexer for the Lux Network.
          Index all 9 native chain types plus 100+ external blockchains
          with Blockscout API v2 compatibility and native DeFi protocol indexing.
        </p>

        <div className="rounded-lg border border-fd-border bg-fd-card p-4 mb-8 max-w-lg mx-auto font-mono text-sm">
          <span className="text-fd-muted-foreground">$</span>{' '}
          go install github.com/luxfi/indexer/cmd/indexer@latest
        </div>

        <div className="flex gap-4 justify-center mb-16">
          <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors">
            Get Started
          </Link>
          <Link href="/docs/api" className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors">
            API Reference
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'EVM Chains', desc: 'C-Chain, Zoo, Hanzo, SPC, Pars + any external EVM' },
            { name: 'DAG Chains', desc: 'X, A, B, Q, T, Z, K — vertex/parent consensus' },
            { name: 'P-Chain', desc: 'Platform chain — validators, staking, subnets' },
            { name: 'Multi-Chain', desc: '100+ chains in parallel — Solana, Bitcoin, Cosmos, Move' },
            { name: 'DeFi Indexing', desc: 'AMMs, lending, perps, NFT marketplaces, bridges' },
            { name: 'Blockscout API', desc: 'Full v2 API + GraphQL + WebSocket subscriptions' },
          ].map((card) => (
            <div key={card.name} className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
              <h3 className="font-semibold mb-1">{card.name}</h3>
              <p className="text-sm text-fd-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
