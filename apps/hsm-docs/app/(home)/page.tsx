import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          6 Providers · Post-Quantum · FIPS 204
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Lux HSM
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          Unified hardware security module for blockchain infrastructure.
          One interface — AWS KMS, GCP Cloud KMS, Azure Key Vault, Zymbit SCM,
          ML-DSA post-quantum, and local ECDSA.
        </p>

        <div className="rounded-lg border border-fd-border bg-fd-card p-4 mb-8 max-w-md mx-auto font-mono text-sm">
          <span className="text-fd-muted-foreground">$</span>{' '}
          go get github.com/luxfi/hsm@latest
        </div>

        <div className="flex gap-4 justify-center mb-16">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/docs/api"
            className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors"
          >
            API Reference
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'AWS KMS', desc: 'ECDSA P-256 via AWS KMS asymmetric signing with SigV4 auth', icon: '🔐' },
            { name: 'GCP Cloud KMS', desc: 'EC_SIGN_P256_SHA256 with local public key verification', icon: '☁️' },
            { name: 'Azure Key Vault', desc: 'ES256 signing via Azure Key Vault REST API v7.4', icon: '🏢' },
            { name: 'Zymbit SCM', desc: 'Hardware PKCS#11 signing via local Zymbit REST API', icon: '🔧' },
            { name: 'ML-DSA (FIPS 204)', desc: 'Post-quantum ML-DSA-65 with 192-bit PQ security', icon: '🛡️' },
            { name: 'Local ECDSA', desc: 'In-memory P-256 signing for development and testing', icon: '💻' },
          ].map((card) => (
            <div key={card.name} className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="font-semibold mb-1">{card.name}</h3>
              <p className="text-sm text-fd-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <Link href="/docs/mpc" className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
            <h3 className="font-semibold mb-1">MPC Integration</h3>
            <p className="text-sm text-fd-muted-foreground">Co-signing for threshold MPC wallets</p>
          </Link>
          <Link href="/docs/bridge" className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
            <h3 className="font-semibold mb-1">Bridge Integration</h3>
            <p className="text-sm text-fd-muted-foreground">Cross-chain bridge signing pipeline</p>
          </Link>
          <Link href="/docs/kms" className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
            <h3 className="font-semibold mb-1">KMS / ZapDB</h3>
            <p className="text-sm text-fd-muted-foreground">Encrypted key store password management</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
