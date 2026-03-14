import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          Networks · Subnets · Wallets · Validators
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Lux CLI
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          Command-line interface for Lux Network operations.
          Deploy subnets, manage validators, and interact with chains.
        </p>
        <div className="rounded-lg border border-fd-border bg-fd-card p-4 mb-8 max-w-md mx-auto font-mono text-sm">
          <span className="text-fd-muted-foreground">$</span>{' '}curl -sSL https://cli.lux.network/install | sh
        </div>
        <div className="flex gap-4 justify-center mb-16">
          <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors">Get Started</Link>
          <Link href="/docs/commands" className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors">Commands</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'Network Management', desc: 'Start, stop, and monitor local and remote networks' },
            { name: 'Subnet Deployment', desc: 'Create and deploy subnets with custom VMs' },
            { name: 'Wallet Operations', desc: 'Create wallets, transfer assets, check balances' },
            { name: 'Validator Control', desc: 'Add validators, manage delegation, stake LUX' },
            { name: 'Chain Configuration', desc: 'Deploy EVM chains with custom genesis' },
            { name: 'Health Monitoring', desc: 'Node health checks and network diagnostics' },
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
