import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          RPC · WebSockets · NFT API · Token API
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Lux Cloud
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          Enterprise blockchain infrastructure APIs. Multi-chain RPC proxy,
          real-time WebSockets, token and NFT APIs, and webhook notifications.
        </p>
        <div className="rounded-lg border border-fd-border bg-fd-card p-4 mb-8 max-w-md mx-auto font-mono text-sm">
          <span className="text-fd-muted-foreground">$</span>{' '}curl https://api.lux.cloud/v1/health
        </div>
        <div className="flex gap-4 justify-center mb-16">
          <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors">Get Started</Link>
          <Link href="/docs/api" className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors">API Reference</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'Multi-Chain RPC', desc: 'JSON-RPC proxy with load balancing for all Lux chains' },
            { name: 'WebSockets', desc: 'Real-time blockchain event subscriptions' },
            { name: 'Token API', desc: 'ERC-20/721/1155 balances, metadata, and transfers' },
            { name: 'NFT API', desc: 'NFT collections, ownership, and media' },
            { name: 'Webhooks', desc: 'Event-driven notifications for on-chain activity' },
            { name: 'White-Label', desc: 'Deploy as Lux Cloud, Hanzo Web3, or custom brand' },
          ].map((c) => (
            <div key={c.name} className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
              <h3 className="font-semibold mb-1">{c.name}</h3>
              <p className="text-sm text-fd-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
