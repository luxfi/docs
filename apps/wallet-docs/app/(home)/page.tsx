import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          HD Wallet · Multi-Chain · Ledger · Multi-Sig
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Lux Wallet
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          HD wallet implementation with multi-chain support.
          BIP-44 key derivation, Ledger integration, and multi-signature wallets.
        </p>
        <div className="rounded-lg border border-fd-border bg-fd-card p-4 mb-8 max-w-md mx-auto font-mono text-sm">
          <span className="text-fd-muted-foreground">$</span>{' '}go get github.com/luxfi/wallet@latest
        </div>
        <div className="flex gap-4 justify-center mb-16">
          <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors">Get Started</Link>
          <Link href="/docs/api" className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors">API Reference</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'HD Key Derivation', desc: 'BIP-44 paths for P-Chain, X-Chain, C-Chain' },
            { name: 'Multi-Chain', desc: 'UTXO and account-based chain support' },
            { name: 'Ledger Support', desc: 'Hardware wallet signing and key management' },
            { name: 'Multi-Signature', desc: 'Threshold wallets with configurable quorum' },
            { name: 'Transaction Builder', desc: 'Type-safe transaction construction and signing' },
            { name: 'Key Management', desc: 'Import, export, and rotate keys securely' },
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
